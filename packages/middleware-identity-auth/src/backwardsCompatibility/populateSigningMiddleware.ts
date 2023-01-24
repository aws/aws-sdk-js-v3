import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  HandlerExecutionContext,
} from "@aws-sdk/types";

import { PopulateSigningInputConfig } from "./configurations";

export const populateSigningMiddleware =
  <Input extends object, Output extends object>(
    options: PopulateSigningInputConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>, context: HandlerExecutionContext): FinalizeHandler<Input, Output> =>
  async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
    return next({
      ...args,
      ...options,
    });
  };
