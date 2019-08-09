/**
 * <p>Returns an error that explains why the action did not succeed.</p>
 */
export interface _ErrorReason {
  /**
   * <p>Service Quotas returns the following error values. </p> <p> <code>DEPENDENCY_ACCESS_DENIED_ERROR</code> is returned when the caller does not have permission to call the service or service quota. To resolve the error, you need permission to access the service or service quota.</p> <p> <code>DEPENDENCY_THROTTLING_ERROR</code> is returned when the service being called is throttling Service Quotas.</p> <p> <code>DEPENDENCY_SERVICE_ERROR</code> is returned when the service being called has availability issues.</p> <p> <code>SERVICE_QUOTA_NOT_AVAILABLE_ERROR</code> is returned when there was an error in Service Quotas.</p>
   */
  ErrorCode?:
    | "DEPENDENCY_ACCESS_DENIED_ERROR"
    | "DEPENDENCY_THROTTLING_ERROR"
    | "DEPENDENCY_SERVICE_ERROR"
    | "SERVICE_QUOTA_NOT_AVAILABLE_ERROR"
    | string;

  /**
   * <p>The error message that provides more detail.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledErrorReason = _ErrorReason;
