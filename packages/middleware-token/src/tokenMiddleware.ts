import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
  HttpAuthDefinition,
  HttpAuthLocation,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { TokenResolvedConfig } from "./configurations";

export const tokenMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "tokenMiddleware",
  tags: ["TOKEN", "AUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const tokenMiddleware =
  <Input extends object, Output extends object>(
    options: TokenResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
  async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
    if (!HttpRequest.isInstance(args.request) || context.currentAuthConfig) return next(args);

    const token = options.token && (await options.token());
    if (token?.token) {
      const authConfig: HttpAuthDefinition = {
        in: HttpAuthLocation.HEADER,
        name: "authorization",
        scheme: "Bearer",
      };
      context.currentAuthConfig = authConfig;
      args.request.headers[authConfig.name] = `${authConfig.scheme} ${token.token}`;
    } else {
      context.currentAuthConfig = undefined;
    }

    return next(args);
  };
