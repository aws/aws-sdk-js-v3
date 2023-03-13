import {
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  FinalizeRequestMiddleware,
  RelativeMiddlewareOptions,
} from "@aws-sdk/types";

import { AuthenticationMiddlewareName } from "../authenticationMiddleware";
import { PopulateSigningInputConfig } from "./configurations";

/**
 * TODO(identityandauth)
 */
export const PopulateSigningMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "populateSigningMiddleware",
  tags: ["BACKWARDS COMPATIBILITY", "SIGNATURE", "AWSAUTH", "SIGV4AUTH"],
  relation: "before",
  toMiddleware: AuthenticationMiddlewareName,
  override: true,
};

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
