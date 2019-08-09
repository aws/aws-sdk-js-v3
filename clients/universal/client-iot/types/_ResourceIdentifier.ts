import {
  _PolicyVersionIdentifier,
  _UnmarshalledPolicyVersionIdentifier
} from "./_PolicyVersionIdentifier";

/**
 * <p>Information that identifies the noncompliant resource.</p>
 */
export interface _ResourceIdentifier {
  /**
   * <p>The ID of the certificate attached to the resource.</p>
   */
  deviceCertificateId?: string;

  /**
   * <p>The ID of the CA certificate used to authorize the certificate.</p>
   */
  caCertificateId?: string;

  /**
   * <p>The ID of the Amazon Cognito identity pool.</p>
   */
  cognitoIdentityPoolId?: string;

  /**
   * <p>The client ID.</p>
   */
  clientId?: string;

  /**
   * <p>The version of the policy associated with the resource.</p>
   */
  policyVersionIdentifier?: _PolicyVersionIdentifier;

  /**
   * <p>The account with which the resource is associated.</p>
   */
  account?: string;
}

export interface _UnmarshalledResourceIdentifier extends _ResourceIdentifier {
  /**
   * <p>The version of the policy associated with the resource.</p>
   */
  policyVersionIdentifier?: _UnmarshalledPolicyVersionIdentifier;
}
