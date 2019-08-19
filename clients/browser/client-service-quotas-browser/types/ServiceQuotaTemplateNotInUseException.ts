import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota request template is not associated with your organization. </p> <p>To use the template, call <a>AssociateServiceQuotaTemplate</a>. </p>
 */
export interface ServiceQuotaTemplateNotInUseException
  extends __ServiceException__<_ServiceQuotaTemplateNotInUseExceptionDetails> {
  name: "ServiceQuotaTemplateNotInUseException";
}

export interface _ServiceQuotaTemplateNotInUseExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
