import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The namespace that you're trying to create already exists.</p>
 */
export interface NamespaceAlreadyExists
  extends __ServiceException__<_NamespaceAlreadyExistsDetails> {
  name: "NamespaceAlreadyExists";
}

export interface _NamespaceAlreadyExistsDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * <p>The <code>CreatorRequestId</code> that was used to create the namespace.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>The ID of the existing namespace.</p>
   */
  NamespaceId?: string;
}
