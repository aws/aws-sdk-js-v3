import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
} from "@aws-sdk/types";

import { PopulateSigningInputConfig } from "./configurations";

/**
 * TODO(identityandauth)
 */
export const populateSigningMiddleware =
  <Input extends object, Output extends object>(
    options: PopulateSigningInputConfig
  ): FinalizeRequestMiddleware<Input, Output> =>
  (next: FinalizeHandler<Input, Output>): FinalizeHandler<Input, Output> =>
  async (args: FinalizeHandlerArguments<Input>): Promise<FinalizeHandlerOutput<Output>> => {
    return next({
      ...args,
      ...options,
    });
  };
