import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided Amazon States Language definition is invalid.</p>
 */
export interface InvalidDefinition
  extends __ServiceException__<_InvalidDefinitionDetails> {
  name: "InvalidDefinition";
}

export interface _InvalidDefinitionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
