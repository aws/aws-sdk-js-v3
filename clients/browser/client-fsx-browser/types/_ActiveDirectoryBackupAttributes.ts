/**
 * <p>The Microsoft AD attributes of the Amazon FSx for Windows File Server file system.</p>
 */
export interface _ActiveDirectoryBackupAttributes {
  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * <p>The ID of the AWS Managed Microsoft Active Directory instance to which the file system is joined.</p>
   */
  ActiveDirectoryId?: string;
}

export type _UnmarshalledActiveDirectoryBackupAttributes = _ActiveDirectoryBackupAttributes;
