import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that a schema is already published.</p>
 */
export interface SchemaAlreadyPublishedException
  extends __ServiceException__<_SchemaAlreadyPublishedExceptionDetails> {
  name: "SchemaAlreadyPublishedException";
}

export interface _SchemaAlreadyPublishedExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
