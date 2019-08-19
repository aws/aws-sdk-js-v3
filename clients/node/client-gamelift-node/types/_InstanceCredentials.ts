/**
 * <p>Set of credentials required to remotely access a fleet instance. Access credentials are requested by calling <a>GetInstanceAccess</a> and returned in an <a>InstanceAccess</a> object.</p>
 */
export interface _InstanceCredentials {
  /**
   * <p>User login string.</p>
   */
  UserName?: string;

  /**
   * <p>Secret string. For Windows instances, the secret is a password for use with Windows Remote Desktop. For Linux instances, it is a private key (which must be saved as a <code>.pem</code> file) for use with SSH.</p>
   */
  Secret?: string;
}

export type _UnmarshalledInstanceCredentials = _InstanceCredentials;
