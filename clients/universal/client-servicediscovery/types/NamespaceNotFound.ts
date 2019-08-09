import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No namespace exists with the specified ID.</p>
 */
export interface NamespaceNotFound
  extends __ServiceException__<_NamespaceNotFoundDetails> {
  name: "NamespaceNotFound";
}

export interface _NamespaceNotFoundDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
