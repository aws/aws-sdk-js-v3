/**
 * <p>A failed resource.</p>
 */
export interface _Failure {
  /**
   * <p>The Amazon Resource Name (ARN) of the failed resource.</p>
   */
  arn?: string;

  /**
   * <p>The reason for the failure.</p>
   */
  reason?: string;
}

export type _UnmarshalledFailure = _Failure;
