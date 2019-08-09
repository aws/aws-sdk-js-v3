import {
  _UserIdentityInfo,
  _UnmarshalledUserIdentityInfo
} from "./_UserIdentityInfo";
import {
  _UserPhoneConfig,
  _UnmarshalledUserPhoneConfig
} from "./_UserPhoneConfig";

/**
 * <p>A <code>User</code> object that contains information about a user account in your Amazon Connect instance, including configuration settings.</p>
 */
export interface _User {
  /**
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * <p>The ARN of the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The user name assigned to the user account.</p>
   */
  Username?: string;

  /**
   * <p>A <code>UserIdentityInfo</code> object.</p>
   */
  IdentityInfo?: _UserIdentityInfo;

  /**
   * <p>A <code>UserPhoneConfig</code> object.</p>
   */
  PhoneConfig?: _UserPhoneConfig;

  /**
   * <p>The directory Id for the user account in the existing directory used for identity management.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifier(s) for the security profile assigned to the user.</p>
   */
  SecurityProfileIds?: Array<string> | Iterable<string>;

  /**
   * <p>The identifier of the routing profile assigned to the user.</p>
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifier for the hierarchy group assigned to the user.</p>
   */
  HierarchyGroupId?: string;
}

export interface _UnmarshalledUser extends _User {
  /**
   * <p>A <code>UserIdentityInfo</code> object.</p>
   */
  IdentityInfo?: _UnmarshalledUserIdentityInfo;

  /**
   * <p>A <code>UserPhoneConfig</code> object.</p>
   */
  PhoneConfig?: _UnmarshalledUserPhoneConfig;

  /**
   * <p>The identifier(s) for the security profile assigned to the user.</p>
   */
  SecurityProfileIds?: Array<string>;
}
