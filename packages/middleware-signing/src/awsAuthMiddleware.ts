import { AwsCredentialIdentity } from "@aws-sdk/types";
import { HttpRequest, HttpResponse } from "@smithy/protocol-http";
import {
  AuthScheme,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  HttpRequest as IHttpRequest,
  Pluggable,
  RelativeMiddlewareOptions,
  RequestSigner,
} from "@smithy/types";

import { AwsAuthResolvedConfig } from "./awsAuthConfiguration";
import { getSkewCorrectedDate } from "./utils/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./utils/getUpdatedSystemClockOffset";

/**
 * @deprecated only used in legacy auth.
 */
export const awsAuthMiddleware =
  <Input extends object, Output extends object>(
    options: AwsAuthResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
    async function (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);

      // TODO(identityandauth): call authScheme resolver
      let authScheme: AuthScheme | undefined;
      let signer: RequestSigner | undefined;

      const firstAuthScheme = context.endpointV2?.properties?.authSchemes?.[0];
      const secondAuthScheme = context.endpointV2?.properties?.authSchemes?.[1];
      const firstAuthSchemeIsSigv4a = firstAuthScheme?.name === "sigv4a";

      if (firstAuthSchemeIsSigv4a && secondAuthScheme) {
        signer = await options.signer((authScheme = firstAuthScheme));
        const uncheckedSigner = signer as any;
        const sigv4aAvailable = (() => {
          if (typeof uncheckedSigner?.getSigv4aSigner === "function") {
            if (uncheckedSigner?.signerOptions?.runtime !== "node") {
              return false;
            }
            try {
              uncheckedSigner.getSigv4aSigner();
              return true;
            } catch (e: unknown) {}
          }
          return false;
        })();
        if (!sigv4aAvailable) {
          signer = await options.signer((authScheme = secondAuthScheme));
        }
      } else {
        signer = await options.signer((authScheme = firstAuthScheme));
      }

      let signedRequest: IHttpRequest;

      const multiRegionOverride: string | undefined =
        authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;

      const signingOptions = {
        signingDate: getSkewCorrectedDate(options.systemClockOffset),
        signingRegion: multiRegionOverride || context["signing_region"],
        signingService: context["signing_service"],
      };

      if (context.s3ExpressIdentity) {
        // the signer is expected to be SignatureV4MultiRegion for S3.
        const sigV4MultiRegion = signer as typeof signer & {
          signWithCredentials(
            req: IHttpRequest,
            identity: AwsCredentialIdentity,
            opts?: Partial<typeof signingOptions>
          ): Promise<IHttpRequest>;
        };

        signedRequest = await sigV4MultiRegion.signWithCredentials(
          args.request,
          context.s3ExpressIdentity,
          signingOptions
        );

        if (signedRequest.headers["X-Amz-Security-Token"] || signedRequest.headers["x-amz-security-token"]) {
          throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
        }
      } else {
        signedRequest = await signer.sign(args.request, signingOptions);
      }

      const output = await next({
        ...args,
        request: signedRequest,
      }).catch((error) => {
        const serverTime: string | undefined = error.ServerTime ?? getDateHeader(error.$response);
        if (serverTime) {
          options.systemClockOffset = getUpdatedSystemClockOffset(serverTime, options.systemClockOffset);
        }
        throw error;
      });

      const dateHeader = getDateHeader(output.response);
      if (dateHeader) {
        options.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, options.systemClockOffset);
      }

      return output;
    };

const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

/**
 * @deprecated only used in legacy auth.
 */
export const awsAuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "awsAuthMiddleware",
  tags: ["SIGNATURE", "AWSAUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

/**
 * @deprecated only used in legacy auth.
 */
export const getAwsAuthPlugin = (options: AwsAuthResolvedConfig): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(awsAuthMiddleware(options), awsAuthMiddlewareOptions);
  },
});

/**
 * @deprecated only used in legacy auth.
 */
export const getSigV4AuthPlugin = getAwsAuthPlugin;
