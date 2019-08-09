import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You specified too many custom compliance types. You can specify a maximum of 10 different types. </p>
 */
export interface ComplianceTypeCountLimitExceededException
  extends __ServiceException__<
    _ComplianceTypeCountLimitExceededExceptionDetails
  > {
  name: "ComplianceTypeCountLimitExceededException";
}

export interface _ComplianceTypeCountLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
