import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the limit of the number of recorders you can create.</p>
 */
export interface MaxNumberOfConfigurationRecordersExceededException
  extends __ServiceException__<
    _MaxNumberOfConfigurationRecordersExceededExceptionDetails
  > {
  name: "MaxNumberOfConfigurationRecordersExceededException";
}

export interface _MaxNumberOfConfigurationRecordersExceededExceptionDetails {}
