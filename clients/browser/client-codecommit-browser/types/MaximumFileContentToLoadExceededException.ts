import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of files to load exceeds the allowed limit.</p>
 */
export interface MaximumFileContentToLoadExceededException
  extends __ServiceException__<
    _MaximumFileContentToLoadExceededExceptionDetails
  > {
  name: "MaximumFileContentToLoadExceededException";
}

export interface _MaximumFileContentToLoadExceededExceptionDetails {}
