import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A dependent AWS service or resource returned an error to the AWS Backup service, and the action cannot be completed.</p>
 */
export interface DependencyFailureException
  extends __ServiceException__<_DependencyFailureExceptionDetails> {
  name: "DependencyFailureException";
}

export interface _DependencyFailureExceptionDetails {
  /**
   * _string shape
   */
  Code?: string;

  /**
   * _string shape
   */
  Message?: string;

  /**
   * <p/>
   */
  Type?: string;

  /**
   * <p/>
   */
  Context?: string;
}
