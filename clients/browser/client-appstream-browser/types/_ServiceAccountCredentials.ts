/**
 * <p>Describes the credentials for the service account used by the fleet or image builder to connect to the directory.</p>
 */
export interface _ServiceAccountCredentials {
  /**
   * <p>The user name of the account. This account must have the following privileges: create computer objects, join computers to the domain, and change/reset the password on descendant computer objects for the organizational units specified.</p>
   */
  AccountName: string;

  /**
   * <p>The password for the account.</p>
   */
  AccountPassword: string;
}

export type _UnmarshalledServiceAccountCredentials = _ServiceAccountCredentials;
