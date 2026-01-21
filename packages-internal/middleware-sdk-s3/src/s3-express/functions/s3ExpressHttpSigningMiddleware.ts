/* eslint-disable @typescript-eslint/no-unused-vars */
import { httpSigningMiddlewareOptions } from "@smithy/core";
import { HttpRequest, IHttpRequest } from "@smithy/protocol-http";
import {
  AuthScheme,
  AwsCredentialIdentity,
  ErrorHandler,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  Pluggable,
  RequestSigner,
  SelectedHttpAuthScheme,
  SMITHY_CONTEXT_KEY,
  SuccessHandler,
} from "@smithy/types";
import { getSmithyContext } from "@smithy/util-middleware";

import { signS3Express } from "./signS3Express";

/**
 * @internal
 */
interface HttpSigningMiddlewareSmithyContext extends Record<string, unknown> {
  selectedHttpAuthScheme?: SelectedHttpAuthScheme;
}

/**
 * @internal
 */
interface HttpSigningMiddlewareHandlerExecutionContext extends HandlerExecutionContext {
  [SMITHY_CONTEXT_KEY]?: HttpSigningMiddlewareSmithyContext;
}

const defaultErrorHandler: ErrorHandler = (signingProperties) => (error) => {
  throw error;
};

const defaultSuccessHandler: SuccessHandler = (
  httpResponse: unknown,
  signingProperties: Record<string, unknown>
): void => {};

interface SigningProperties {
  signingRegion: string;
  signingDate: Date;
  signingService: string;
}

interface PreviouslyResolved {
  signer: (authScheme?: AuthScheme | undefined) => Promise<
    RequestSigner & {
      signWithCredentials(
        req: IHttpRequest,
        identity: AwsCredentialIdentity,
        opts?: Partial<SigningProperties>
      ): Promise<IHttpRequest>;
    }
  >;
}

/**
 * @internal
 */
export const s3ExpressHttpSigningMiddlewareOptions = httpSigningMiddlewareOptions;

/**
 * @internal
 */
export const s3ExpressHttpSigningMiddleware =
  <Input extends object, Output extends object>(config: PreviouslyResolved): FinalizeRequestMiddleware<any, any> =>
  (next: FinalizeHandler<any, any>, context: HttpSigningMiddlewareHandlerExecutionContext): FinalizeHandler<any, any> =>
  async (args: FinalizeHandlerArguments<any>): Promise<FinalizeHandlerOutput<any>> => {
    if (!HttpRequest.isInstance(args.request)) {
      return next(args);
    }

    const smithyContext: HttpSigningMiddlewareSmithyContext = getSmithyContext(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
      throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const {
      httpAuthOption: { signingProperties = {} },
      identity,
      signer,
    } = scheme;

    let request: IHttpRequest;

    if (context.s3ExpressIdentity) {
      request = await signS3Express(
        context.s3ExpressIdentity,
        signingProperties as unknown as SigningProperties,
        args.request,
        await config.signer()
      );
    } else {
      request = await signer.sign(args.request, identity, signingProperties);
    }

    const output = await next({
      ...args,
      request,
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
  };

/**
 * @internal
 */
export const getS3ExpressHttpSigningPlugin = (config: {
  signer: (authScheme?: AuthScheme | undefined) => Promise<RequestSigner>;
}): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.addRelativeTo(
      s3ExpressHttpSigningMiddleware(config as PreviouslyResolved),
      httpSigningMiddlewareOptions
    );
  },
});
