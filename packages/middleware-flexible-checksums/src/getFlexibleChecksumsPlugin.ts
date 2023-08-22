import { BuildHandlerOptions, Pluggable } from "@smithy/types";

import { PreviouslyResolved } from "./configuration";
import { flexibleChecksumsMiddleware } from "./flexibleChecksumsMiddleware";
import {
  flexibleChecksumsResponseMiddleware,
  flexibleChecksumsResponseMiddlewareOptions,
} from "./flexibleChecksumsResponseMiddleware";

export const flexibleChecksumsMiddlewareOptions: BuildHandlerOptions = {
  name: "flexibleChecksumsMiddleware",
  step: "build",
  tags: ["BODY_CHECKSUM"],
  override: true,
};

export interface FlexibleChecksumsMiddlewareConfig {
  /**
   * The input object for the operation.
   */
  input: Object;

  /**
   * Indicates an operation requires a checksum in its HTTP request.
   */
  requestChecksumRequired: boolean;

  /**
   * Defines a top-level operation input member that is used to configure request checksum behavior.
   */
  requestAlgorithmMember?: string;

  /**
   * Defines a top-level operation input member used to opt-in to best-effort validation
   * of a checksum returned in the HTTP response of the operation.
   */
  requestValidationModeMember?: string;

  /**
   * Defines the checksum algorithms clients SHOULD look for when validating checksums
   * returned in the HTTP response.
   */
  responseAlgorithms?: string[];
}

export const getFlexibleChecksumsPlugin = (
  config: PreviouslyResolved,
  middlewareConfig: FlexibleChecksumsMiddlewareConfig
): Pluggable<any, any> => ({
  applyToStack: (clientStack) => {
    clientStack.add(flexibleChecksumsMiddleware(config, middlewareConfig), flexibleChecksumsMiddlewareOptions);
    clientStack.addRelativeTo(
      flexibleChecksumsResponseMiddleware(config, middlewareConfig),
      flexibleChecksumsResponseMiddlewareOptions
    );
  },
});
