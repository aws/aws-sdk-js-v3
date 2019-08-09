import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
 */
export interface TemplatesNotAvailableInRegionException
  extends __ServiceException__<_TemplatesNotAvailableInRegionExceptionDetails> {
  name: "TemplatesNotAvailableInRegionException";
}

export interface _TemplatesNotAvailableInRegionExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
