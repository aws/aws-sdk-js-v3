/**
 * <p>Details about the shared directory in the directory owner account for which the share request in the directory consumer account has been accepted.</p>
 */
export interface _SharedDirectory {
  /**
   * <p>Identifier of the directory owner account, which contains the directory that has been shared to the consumer account.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>Identifier of the directory in the directory owner account. </p>
   */
  OwnerDirectoryId?: string;

  /**
   * <p>The method used when sharing a directory to determine whether the directory should be shared within your AWS organization (<code>ORGANIZATIONS</code>) or with any AWS account by sending a shared directory request (<code>HANDSHAKE</code>).</p>
   */
  ShareMethod?: "ORGANIZATIONS" | "HANDSHAKE" | string;

  /**
   * <p>Identifier of the directory consumer account that has access to the shared directory (<code>OwnerDirectoryId</code>) in the directory owner account.</p>
   */
  SharedAccountId?: string;

  /**
   * <p>Identifier of the shared directory in the directory consumer account. This identifier is different for each directory owner account.</p>
   */
  SharedDirectoryId?: string;

  /**
   * <p>Current directory status of the shared AWS Managed Microsoft AD directory.</p>
   */
  ShareStatus?:
    | "Shared"
    | "PendingAcceptance"
    | "Rejected"
    | "Rejecting"
    | "RejectFailed"
    | "Sharing"
    | "ShareFailed"
    | "Deleted"
    | "Deleting"
    | string;

  /**
   * <p>A directory share request that is sent by the directory owner to the directory consumer. The request includes a typed message to help the directory consumer administrator determine whether to approve or reject the share invitation.</p>
   */
  ShareNotes?: string;

  /**
   * <p>The date and time that the shared directory was created.</p>
   */
  CreatedDateTime?: Date | string | number;

  /**
   * <p>The date and time that the shared directory was last updated.</p>
   */
  LastUpdatedDateTime?: Date | string | number;
}

export interface _UnmarshalledSharedDirectory extends _SharedDirectory {
  /**
   * <p>The date and time that the shared directory was created.</p>
   */
  CreatedDateTime?: Date;

  /**
   * <p>The date and time that the shared directory was last updated.</p>
   */
  LastUpdatedDateTime?: Date;
}
