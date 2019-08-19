/**
 * <p/>
 */
export interface _Initiator {
  /**
   * <p>If the principal is an AWS account, it provides the Canonical User ID. If the principal is an IAM User, it provides a user ARN value.</p>
   */
  ID?: string;

  /**
   * <p>Name of the Principal.</p>
   */
  DisplayName?: string;
}

export type _UnmarshalledInitiator = _Initiator;
