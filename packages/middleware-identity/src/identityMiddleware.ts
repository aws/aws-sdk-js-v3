// ToDo: Should this be moved to signerMiddleware, as no additional operations are
// needed in addition to resolving identity?

import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  AuthScheme,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  RelativeMiddlewareOptions,
  TokenIdentity
} from "@aws-sdk/types";

import { IdentityResolvedConfig } from "./configurations";
import { getDateHeader } from "./util/getDateHeader";
import { getSkewCorrectedDate } from "./util/getSkewCorrectedDate";
import { getUpdatedSystemClockOffset } from "./util/getUpdatedSystemClockOffset";
import { isAwsCredentialIdentity } from "./util/isAwsCredentialIdentity";
import { isLoginIdentity } from "./util/isLoginIdentity";
import { isTokenIdentity } from "./util/isTokenIdentity";

export const IdentityMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "identityMiddleware",
  tags: ["IDENTITY"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

// middleware-identity/src/identityMiddleware.ts
export const identityMiddleware =
  <Input extends object, Output extends object>(
    options: IdentityResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
    (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
      async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
        // This would be a mix of awsAuthMiddleware and tokenMiddleware
        // and use isToken and isCredentials checks to take appropriate actions.
        // More details in the example section below.
        if (!HttpRequest.isInstance(args.request)) return next(args);

        const identity = await options.identity();

        // tokenMiddleware
        if (isTokenIdentity(identity)) {
          const tokenIdentity: TokenIdentity = identity as TokenIdentity;
          args.request.headers["Authorization"] = `Bearer ${tokenIdentity.token}`;
          return next(args);
        }

        // awsAuthMiddleware
        if (isAwsCredentialIdentity(identity)) {
          return resolveSigner(options, context, args, next);
        }

        // Login Identity not supported
        if (isLoginIdentity(identity)) { }

        // Anonymous Identity
        return next(args);
      };

const resolveSigner = async (options, context, args, next) => {
  // TODO(identityandauth): call authScheme resolver
  const authScheme: AuthScheme | undefined = context.endpointV2?.properties?.authSchemes?.[0];

  const multiRegionOverride: string | undefined =
    authScheme?.name === "sigv4a" ? authScheme?.signingRegionSet?.join(",") : undefined;

  const signer = await options.signer(authScheme);

  const output = await next({
    ...args,
    request: await signer.sign(args.request, {
      signingDate: getSkewCorrectedDate(options.systemClockOffset),
      signingRegion: multiRegionOverride || context["signing_region"],
      signingService: context["signing_service"],
    }),
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
