import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more values in the <a>DomainValidationOption</a> structure is incorrect.</p>
 */
export interface InvalidDomainValidationOptionsException
  extends __ServiceException__<
    _InvalidDomainValidationOptionsExceptionDetails
  > {
  name: "InvalidDomainValidationOptionsException";
}

export interface _InvalidDomainValidationOptionsExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
