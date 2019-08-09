/**
 * <p>Contains the data needed by RDP clients such as the Microsoft Remote Desktop Connection to log in to the instance.</p>
 */
export interface _TemporaryCredential {
  /**
   * <p>The user name.</p>
   */
  Username?: string;

  /**
   * <p>The password.</p>
   */
  Password?: string;

  /**
   * <p>The length of time (in minutes) that the grant is valid. When the grant expires, at the end of this period, the user will no longer be able to use the credentials to log in. If they are logged in at the time, they will be automatically logged out.</p>
   */
  ValidForInMinutes?: number;

  /**
   * <p>The instance's AWS OpsWorks Stacks ID.</p>
   */
  InstanceId?: string;
}

export type _UnmarshalledTemporaryCredential = _TemporaryCredential;
