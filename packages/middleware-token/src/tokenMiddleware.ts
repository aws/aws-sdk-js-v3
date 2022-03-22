import { HttpRequest } from "@aws-sdk/protocol-http";
import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { TokenResolvedConfig } from "./configurations";

export const TokenMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "tokenMiddleware",
  tags: ["TOKEN"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const tokenMiddleware =
  <Input extends object, Output extends object>(
    options: TokenResolvedConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>): FinalizeHandler<Input, Output> =>
    async function (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> {
      if (!HttpRequest.isInstance(args.request)) return next(args);

      const token = await options.token();
      args.request.headers["Authorization"] = `Bearer ${token.token}`;

      return next(args);
    };
