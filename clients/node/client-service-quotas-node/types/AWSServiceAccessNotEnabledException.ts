import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
 */
export interface AWSServiceAccessNotEnabledException
  extends __ServiceException__<_AWSServiceAccessNotEnabledExceptionDetails> {
  name: "AWSServiceAccessNotEnabledException";
}

export interface _AWSServiceAccessNotEnabledExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
