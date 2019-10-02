import {
  BuildHandler,
  BuildHandlerArguments,
  HandlerExecutionContext
} from "@aws-sdk/types";
import { headerDefault } from "@aws-sdk/middleware-header-default";
import { HttpRequest } from "@aws-sdk/protocol-http";

export function addExpectContinue(
  next: BuildHandler<any, any>,
  context: HandlerExecutionContext
) {
  return (args: BuildHandlerArguments<any>) => {
    if (HttpRequest.isInstance(args.request) && args.request.body) {
      return headerDefault({
        Expect: "100-continue"
      })(next, context)(args);
    } else {
      return next(args);
    }
  };
}
