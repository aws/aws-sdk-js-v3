import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified document already exists.</p>
 */
export interface DocumentAlreadyExists
  extends __ServiceException__<_DocumentAlreadyExistsDetails> {
  name: "DocumentAlreadyExists";
}

export interface _DocumentAlreadyExistsDetails {
  /**
   * _String shape
   */
  Message?: string;
}
