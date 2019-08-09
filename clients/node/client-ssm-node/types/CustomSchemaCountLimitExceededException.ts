import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try again.</p>
 */
export interface CustomSchemaCountLimitExceededException
  extends __ServiceException__<
    _CustomSchemaCountLimitExceededExceptionDetails
  > {
  name: "CustomSchemaCountLimitExceededException";
}

export interface _CustomSchemaCountLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
