/**
 * <p>Identifiers for the federated user that is associated with the credentials.</p>
 */
export interface _FederatedUser {
  /**
   * <p>The string that identifies the federated user associated with the credentials, similar to the unique ID of an IAM user.</p>
   */
  FederatedUserId: string;

  /**
   * <p>The ARN that specifies the federated user that is associated with the credentials. For more information about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM Identifiers</a> in <i>Using IAM</i>. </p>
   */
  Arn: string;
}

export type _UnmarshalledFederatedUser = _FederatedUser;
