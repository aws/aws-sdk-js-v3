import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected because you tried to generate a report for an assessment run that existed before reporting was supported in Amazon Inspector. You can only generate reports for assessment runs that took place or will take place after generating reports in Amazon Inspector became available.</p>
 */
export interface UnsupportedFeatureException
  extends __ServiceException__<_UnsupportedFeatureExceptionDetails> {
  name: "UnsupportedFeatureException";
}

export interface _UnsupportedFeatureExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message: string;

  /**
   * _Bool shape
   */
  canRetry: boolean;
}
