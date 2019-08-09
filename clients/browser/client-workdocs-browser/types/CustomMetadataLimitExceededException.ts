import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The limit has been reached on the number of custom properties for the specified resource.</p>
 */
export interface CustomMetadataLimitExceededException
  extends __ServiceException__<_CustomMetadataLimitExceededExceptionDetails> {
  name: "CustomMetadataLimitExceededException";
}

export interface _CustomMetadataLimitExceededExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
