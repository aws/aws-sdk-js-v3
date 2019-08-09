/**
 * <p>Describes an AWS OpsWorks Stacks service error.</p>
 */
export interface _ServiceError {
  /**
   * <p>The error ID.</p>
   */
  ServiceErrorId?: string;

  /**
   * <p>The stack ID.</p>
   */
  StackId?: string;

  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>The error type.</p>
   */
  Type?: string;

  /**
   * <p>A message that describes the error.</p>
   */
  Message?: string;

  /**
   * <p>When the error occurred.</p>
   */
  CreatedAt?: string;
}

export type _UnmarshalledServiceError = _ServiceError;
