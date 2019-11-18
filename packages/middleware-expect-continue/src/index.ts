import {
  BuildHandler,
  BuildHandlerArguments,
  HandlerExecutionContext
} from "@aws-sdk/types";

import { headerDefault } from "@aws-sdk/middleware-header-default";

export function addExpectContinue(
  next: BuildHandler<any, any, any>,
  context: HandlerExecutionContext
) {
  return (args: BuildHandlerArguments<any, any>) => {
    if (args.request.body) {
      return headerDefault({
        Expect: "100-continue"
      })(
        next,
        context
      )(args);
    } else {
      return next(args);
    }
  };
}
