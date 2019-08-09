/**
 * <p>Details of the common errors that all actions return.</p>
 */
export interface _FailureInfo {
  /**
   * <p>The HTTP status code of the common error.</p>
   */
  StatusCode?: number;

  /**
   * <p>The code of the common error. Valid values include <code>InternalServiceException</code>, <code>InvalidParameterException</code>, and any valid error code returned by the AWS service that hosts the resource that you want to tag.</p>
   */
  ErrorCode?: "InternalServiceException" | "InvalidParameterException" | string;

  /**
   * <p>The message of the common error.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledFailureInfo = _FailureInfo;
