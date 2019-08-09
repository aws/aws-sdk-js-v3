/**
 * _AccessKeyDetails shape
 */
export interface _AccessKeyDetails {
  /**
   * <p>Access key ID of the user.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The principal ID of the user.</p>
   */
  PrincipalId?: string;

  /**
   * <p>The name of the user.</p>
   */
  UserName?: string;

  /**
   * <p>The type of the user.</p>
   */
  UserType?: string;
}

export type _UnmarshalledAccessKeyDetails = _AccessKeyDetails;
