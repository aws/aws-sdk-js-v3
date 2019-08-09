/**
 * <p>Describes the Active Directory to be used for client authentication.</p>
 */
export interface _DirectoryServiceAuthenticationRequest {
  /**
   * <p>The ID of the Active Directory to be used for authentication.</p>
   */
  DirectoryId?: string;
}

export type _UnmarshalledDirectoryServiceAuthenticationRequest = _DirectoryServiceAuthenticationRequest;
