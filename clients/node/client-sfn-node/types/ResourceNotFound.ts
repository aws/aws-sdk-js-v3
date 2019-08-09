import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Could not fine the referenced resource. Only state machine and activity ARNs are supported.</p>
 */
export interface ResourceNotFound
  extends __ServiceException__<_ResourceNotFoundDetails> {
  name: "ResourceNotFound";
}

export interface _ResourceNotFoundDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;

  /**
   * _Arn shape
   */
  resourceName?: string;
}
