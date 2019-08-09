/**
 * <p>Represents the verification attributes of a single identity.</p>
 */
export interface _IdentityVerificationAttributes {
  /**
   * <p>The verification status of the identity: "Pending", "Success", "Failed", or "TemporaryFailure".</p>
   */
  VerificationStatus:
    | "Pending"
    | "Success"
    | "Failed"
    | "TemporaryFailure"
    | "NotStarted"
    | string;

  /**
   * <p>The verification token for a domain identity. Null for email address identities.</p>
   */
  VerificationToken?: string;
}

export type _UnmarshalledIdentityVerificationAttributes = _IdentityVerificationAttributes;
