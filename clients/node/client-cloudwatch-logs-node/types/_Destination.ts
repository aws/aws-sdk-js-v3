/**
 * <p>Represents a cross-account destination that receives subscription log events.</p>
 */
export interface _Destination {
  /**
   * <p>The name of the destination.</p>
   */
  destinationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the physical target to where the log events are delivered (for example, a Kinesis stream).</p>
   */
  targetArn?: string;

  /**
   * <p>A role for impersonation, used when delivering log events to the target.</p>
   */
  roleArn?: string;

  /**
   * <p>An IAM policy document that governs which AWS accounts can create subscription filters against this destination.</p>
   */
  accessPolicy?: string;

  /**
   * <p>The ARN of this destination.</p>
   */
  arn?: string;

  /**
   * <p>The creation time of the destination, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;
}

export type _UnmarshalledDestination = _Destination;
