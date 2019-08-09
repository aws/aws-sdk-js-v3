/**
 * <p>Describes a trust relationship between an AWS Managed Microsoft AD directory and an external domain.</p>
 */
export interface _Trust {
  /**
   * <p>The Directory ID of the AWS directory involved in the trust relationship.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The unique ID of the trust relationship.</p>
   */
  TrustId?: string;

  /**
   * <p>The Fully Qualified Domain Name (FQDN) of the external domain involved in the trust relationship.</p>
   */
  RemoteDomainName?: string;

  /**
   * <p>The trust relationship type. <code>Forest</code> is the default.</p>
   */
  TrustType?: "Forest" | "External" | string;

  /**
   * <p>The trust relationship direction.</p>
   */
  TrustDirection?:
    | "One-Way: Outgoing"
    | "One-Way: Incoming"
    | "Two-Way"
    | string;

  /**
   * <p>The trust relationship state.</p>
   */
  TrustState?:
    | "Creating"
    | "Created"
    | "Verifying"
    | "VerifyFailed"
    | "Verified"
    | "Updating"
    | "UpdateFailed"
    | "Updated"
    | "Deleting"
    | "Deleted"
    | "Failed"
    | string;

  /**
   * <p>The date and time that the trust relationship was created.</p>
   */
  CreatedDateTime?: Date | string | number;

  /**
   * <p>The date and time that the trust relationship was last updated.</p>
   */
  LastUpdatedDateTime?: Date | string | number;

  /**
   * <p>The date and time that the TrustState was last updated.</p>
   */
  StateLastUpdatedDateTime?: Date | string | number;

  /**
   * <p>The reason for the TrustState.</p>
   */
  TrustStateReason?: string;

  /**
   * <p>Current state of selective authentication for the trust.</p>
   */
  SelectiveAuth?: "Enabled" | "Disabled" | string;
}

export interface _UnmarshalledTrust extends _Trust {
  /**
   * <p>The date and time that the trust relationship was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The date and time that the trust relationship was last updated.</p>
   */
  LastUpdatedDateTime?: Date;

  /**
   * <p>The date and time that the TrustState was last updated.</p>
   */
  StateLastUpdatedDateTime?: Date;
}
