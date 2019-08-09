import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Failed to add the retention configuration because a retention configuration with that name already exists.</p>
 */
export interface MaxNumberOfRetentionConfigurationsExceededException
  extends __ServiceException__<
    _MaxNumberOfRetentionConfigurationsExceededExceptionDetails
  > {
  name: "MaxNumberOfRetentionConfigurationsExceededException";
}

export interface _MaxNumberOfRetentionConfigurationsExceededExceptionDetails {}
