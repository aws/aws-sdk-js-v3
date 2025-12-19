// smithy-typescript generated code
import { AccessLevel, BotStatus, DataRetentionActionType, SortDirection, Status, UserStatus } from "./enums";

/**
 * <p>Represents a device where a user has logged into Wickr, containing information about the device's type, status, and login history.</p>
 * @public
 */
export interface BasicDeviceObject {
  /**
   * <p>The unique application ID for the Wickr app on this device.</p>
   * @public
   */
  appId?: string | undefined;

  /**
   * <p>The timestamp when the device first appeared in the Wickr database.</p>
   * @public
   */
  created?: string | undefined;

  /**
   * <p>The timestamp when the device last successfully logged into Wickr. This is also used to determine SSO idle time.</p>
   * @public
   */
  lastLogin?: string | undefined;

  /**
   * <p>The current status of the device, either 'Active' or 'Reset' depending on whether the device is currently active or has been marked for reset.</p>
   * @public
   */
  statusText?: string | undefined;

  /**
   * <p>Indicates whether the device is suspended.</p>
   * @public
   */
  suspend?: boolean | undefined;

  /**
   * <p>The operating system of the device (e.g., 'MacOSX', 'Windows', 'iOS', 'Android').</p>
   * @public
   */
  type?: string | undefined;
}

/**
 * <p>Contains the details for a single user to be created in a batch user creation request.</p> <note> <p>A user can only be assigned to a single security group. Attempting to add a user to multiple security groups is not supported and will result in an error.</p> </note> <note> <p> <code>codeValidation</code>, <code>inviteCode</code>, and <code>inviteCodeTtl</code> are restricted to networks under preview only.</p> </note>
 * @public
 */
export interface BatchCreateUserRequestItem {
  /**
   * <p>The first name of the user.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The last name of the user.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>A list of security group IDs to which the user should be assigned.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The email address or username for the user. Must be unique within the network.</p>
   * @public
   */
  username: string | undefined;

  /**
   * <p>A custom invite code for the user. If not provided, one will be generated automatically.</p>
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * <p>The time-to-live for the invite code in days. After this period, the invite code will expire.</p>
   * @public
   */
  inviteCodeTtl?: number | undefined;

  /**
   * <p>Indicates whether the user can be verified through a custom invite code.</p>
   * @public
   */
  codeValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchCreateUserRequest {
  /**
   * <p>The ID of the Wickr network where users will be created.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A list of user objects containing the details for each user to be created, including username, name, security groups, and optional invite codes. Maximum 50 users per batch request.</p>
   * @public
   */
  users: BatchCreateUserRequestItem[] | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency. If you retry a request with the same client token, the service will return the same response without creating duplicate users.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains error information for a user operation that failed in a batch user request.</p>
 * @public
 */
export interface BatchUserErrorResponseItem {
  /**
   * <p>The field that caused the error.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>A description of why the user operation failed.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The user ID associated with the failed operation.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * <p>Represents a user account in a Wickr network with detailed profile information, status, security settings, and authentication details.</p> <note> <p>codeValidation, inviteCode and inviteCodeTtl are restricted to networks under preview only.</p> </note>
 * @public
 */
export interface User {
  /**
   * <p>The unique identifier for the user within the network.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The first name of the user.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The last name of the user.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>The email address or username of the user. For bots, this must end in 'bot'.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>A list of security group IDs to which the user is assigned, determining their permissions and feature access.</p>
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * <p>Indicates whether the user has administrator privileges in the network.</p>
   * @public
   */
  isAdmin?: boolean | undefined;

  /**
   * <p>Indicates whether the user is currently suspended and unable to access the network.</p>
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * <p>The current status of the user (1 for pending invitation, 2 for active).</p>
   * @public
   */
  status?: number | undefined;

  /**
   * <p>Indicates whether one-time password (OTP) authentication is enabled for the user.</p>
   * @public
   */
  otpEnabled?: boolean | undefined;

  /**
   * <p>The SCIM (System for Cross-domain Identity Management) identifier for the user, used for identity synchronization. Currently not used.</p>
   * @public
   */
  scimId?: string | undefined;

  /**
   * <p>The descriptive type of the user account (e.g., 'user').</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The phone number minus country code, used for cloud deployments.</p>
   * @public
   */
  cell?: string | undefined;

  /**
   * <p>The country code for the user's phone number, used for cloud deployments.</p>
   * @public
   */
  countryCode?: string | undefined;

  /**
   * <p>The number of failed password attempts for enterprise deployments, used for account lockout policies.</p>
   * @public
   */
  challengeFailures?: number | undefined;

  /**
   * <p>Indicates whether the user's email invitation code has expired, applicable to cloud deployments.</p>
   * @public
   */
  isInviteExpired?: boolean | undefined;

  /**
   * <p>Indicates whether this account is a user (as opposed to a bot or other account type).</p>
   * @public
   */
  isUser?: boolean | undefined;

  /**
   * <p>The invitation code for this user, used during registration to join the network.</p>
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * <p>Indicates whether the user can be verified through a custom invite code.</p>
   * @public
   */
  codeValidation?: boolean | undefined;

  /**
   * <p>The unique identifier for the user.</p>
   * @public
   */
  uname?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateUserResponse {
  /**
   * <p>A message indicating the overall result of the batch operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of user objects that were successfully created, including their assigned user IDs and invite codes.</p>
   * @public
   */
  successful?: User[] | undefined;

  /**
   * <p>A list of user creation attempts that failed, including error details explaining why each user could not be created.</p>
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * <p>Contains detailed error information explaining why an operation failed, including which field caused the error and the reason for the failure.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The name of the field that contains an error or warning.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>A detailed description of the error or warning.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteUserRequest {
  /**
   * <p>The ID of the Wickr network from which users will be deleted.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A list of user IDs identifying the users to be deleted from the network. Maximum 50 users per batch request.</p>
   * @public
   */
  userIds: string[] | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency. If you retry a request with the same client token, the service will return the same response without attempting to delete users again.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains information about a user that was successfully processed in a batch user operation.</p>
 * @public
 */
export interface BatchUserSuccessResponseItem {
  /**
   * <p>The user ID that was successfully processed.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteUserResponse {
  /**
   * <p>A message indicating the overall result of the batch deletion operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of user IDs that were successfully deleted from the network.</p>
   * @public
   */
  successful?: BatchUserSuccessResponseItem[] | undefined;

  /**
   * <p>A list of user deletion attempts that failed, including error details explaining why each user could not be deleted.</p>
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * <p>Contains error information for a device operation that failed in a batch device request.</p>
 * @public
 */
export interface BatchDeviceErrorResponseItem {
  /**
   * <p>The field that caused the error.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>A description of why the device operation failed.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The application ID of the device that failed to be processed.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * <p>Contains information about a device that was successfully processed in a batch device operation.</p>
 * @public
 */
export interface BatchDeviceSuccessResponseItem {
  /**
   * <p>The application ID of the device that was successfully processed.</p>
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface BatchLookupUserUnameRequest {
  /**
   * <p>The ID of the Wickr network where the users will be looked up.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A list of username hashes (unames) to look up. Each uname is a unique identifier for a user's username. Maximum 50 unames per batch request.</p>
   * @public
   */
  unames: string[] | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains error information for a username hash lookup that failed in a batch uname lookup request.</p>
 * @public
 */
export interface BatchUnameErrorResponseItem {
  /**
   * <p>The field that caused the error.</p>
   * @public
   */
  field?: string | undefined;

  /**
   * <p>A description of why the username hash lookup failed.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The username hash that failed to be looked up.</p>
   * @public
   */
  uname: string | undefined;
}

/**
 * <p>Contains information about a username hash that was successfully resolved in a batch uname lookup operation.</p>
 * @public
 */
export interface BatchUnameSuccessResponseItem {
  /**
   * <p>The username hash that was successfully resolved.</p>
   * @public
   */
  uname: string | undefined;

  /**
   * <p>The email address or username corresponding to the username hash.</p>
   * @public
   */
  username: string | undefined;
}

/**
 * @public
 */
export interface BatchLookupUserUnameResponse {
  /**
   * <p>A message indicating the overall result of the batch lookup operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of successfully resolved username hashes with their corresponding email addresses.</p>
   * @public
   */
  successful?: BatchUnameSuccessResponseItem[] | undefined;

  /**
   * <p>A list of username hash lookup attempts that failed, including error details explaining why each lookup failed.</p>
   * @public
   */
  failed?: BatchUnameErrorResponseItem[] | undefined;
}

/**
 * @public
 */
export interface BatchReinviteUserRequest {
  /**
   * <p>The ID of the Wickr network where users will be reinvited.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A list of user IDs identifying the users to be reinvited to the network. Maximum 50 users per batch request.</p>
   * @public
   */
  userIds: string[] | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchReinviteUserResponse {
  /**
   * <p>A message indicating the overall result of the batch reinvitation operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of user IDs that were successfully reinvited.</p>
   * @public
   */
  successful?: BatchUserSuccessResponseItem[] | undefined;

  /**
   * <p>A list of reinvitation attempts that failed, including error details explaining why each user could not be reinvited.</p>
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * @public
 */
export interface BatchResetDevicesForUserRequest {
  /**
   * <p>The ID of the Wickr network containing the user whose devices will be reset.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The ID of the user whose devices will be reset.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>A list of application IDs identifying the specific devices to be reset for the user. Maximum 50 devices per batch request.</p>
   * @public
   */
  appIds: string[] | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchResetDevicesForUserResponse {
  /**
   * <p>A message indicating the overall result of the batch device reset operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of application IDs that were successfully reset.</p>
   * @public
   */
  successful?: BatchDeviceSuccessResponseItem[] | undefined;

  /**
   * <p>A list of device reset attempts that failed, including error details explaining why each device could not be reset.</p>
   * @public
   */
  failed?: BatchDeviceErrorResponseItem[] | undefined;
}

/**
 * @public
 */
export interface BatchToggleUserSuspendStatusRequest {
  /**
   * <p>The ID of the Wickr network where users will be suspended or unsuspended.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A boolean value indicating whether to suspend (true) or unsuspend (false) the specified users.</p>
   * @public
   */
  suspend: boolean | undefined;

  /**
   * <p>A list of user IDs identifying the users whose suspend status will be toggled. Maximum 50 users per batch request.</p>
   * @public
   */
  userIds: string[] | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchToggleUserSuspendStatusResponse {
  /**
   * <p>A message indicating the overall result of the batch suspend status toggle operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of user IDs whose suspend status was successfully toggled.</p>
   * @public
   */
  successful?: BatchUserSuccessResponseItem[] | undefined;

  /**
   * <p>A list of suspend status toggle attempts that failed, including error details explaining why each user's status could not be changed.</p>
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * <p>Represents a guest user who has been blocked from accessing a Wickr network.</p>
 * @public
 */
export interface BlockedGuestUser {
  /**
   * <p>The username of the blocked guest user.</p>
   * @public
   */
  username: string | undefined;

  /**
   * <p>The username of the administrator who blocked this guest user.</p>
   * @public
   */
  admin: string | undefined;

  /**
   * <p>The timestamp when the guest user was blocked or last modified.</p>
   * @public
   */
  modified: string | undefined;

  /**
   * <p>The unique username hash identifier for the blocked guest user.</p>
   * @public
   */
  usernameHash: string | undefined;
}

/**
 * <p>Represents a bot account in a Wickr network with all its informational fields.</p>
 * @public
 */
export interface Bot {
  /**
   * <p>The unique identifier of the bot.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The display name of the bot that is visible to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The username of the bot.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The unique username hash identifier for the bot.</p>
   * @public
   */
  uname?: string | undefined;

  /**
   * <p>The public key of the bot used for encryption.</p>
   * @public
   */
  pubkey?: string | undefined;

  /**
   * <p>The current status of the bot (1 for pending, 2 for active).</p>
   * @public
   */
  status?: BotStatus | undefined;

  /**
   * <p>The ID of the security group to which the bot belongs.</p>
   * @public
   */
  groupId?: string | undefined;

  /**
   * <p>Indicates whether the bot has a password set.</p>
   * @public
   */
  hasChallenge?: boolean | undefined;

  /**
   * <p>Indicates whether the bot is currently suspended.</p>
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * <p>The timestamp of the bot's last login.</p>
   * @public
   */
  lastLogin?: string | undefined;
}

/**
 * <p>Defines the calling feature permissions and settings for users in a security group, controlling what types of calls users can initiate and participate in.</p>
 * @public
 */
export interface CallingSettings {
  /**
   * <p>Specifies whether users can start one-to-one calls.</p>
   * @public
   */
  canStart11Call?: boolean | undefined;

  /**
   * <p>Specifies whether users can make video calls (as opposed to audio-only calls). Valid only when audio call(canStart11Call) is enabled.</p>
   * @public
   */
  canVideoCall?: boolean | undefined;

  /**
   * <p>When enabled, forces all calls to use TCP protocol instead of UDP for network traversal.</p>
   * @public
   */
  forceTcpCall?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * <p>The ID of the Wickr network where the bot will be created.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The username for the bot. This must be unique within the network and follow the network's naming conventions.</p>
   * @public
   */
  username: string | undefined;

  /**
   * <p>The display name for the bot that will be visible to users in the network.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The ID of the security group to which the bot will be assigned.</p>
   * @public
   */
  groupId: string | undefined;

  /**
   * <p>The password for the bot account.</p>
   * @public
   */
  challenge: string | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * <p>A message indicating the result of the bot creation operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The unique identifier assigned to the newly created bot.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The ID of the network where the bot was created.</p>
   * @public
   */
  networkId?: string | undefined;

  /**
   * <p>The username of the newly created bot.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The display name of the newly created bot.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The ID of the security group to which the bot was assigned.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotRequest {
  /**
   * <p>The ID of the Wickr network where the data retention bot will be created.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotResponse {
  /**
   * <p>A message indicating that the data retention bot was successfully provisioned.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotChallengeRequest {
  /**
   * <p>The ID of the Wickr network containing the data retention bot.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotChallengeResponse {
  /**
   * <p>The newly generated challenge password for the data retention bot.</p>
   * @public
   */
  challenge: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkRequest {
  /**
   * <p>The name for the new network. Must be between 1 and 20 characters.</p>
   * @public
   */
  networkName: string | undefined;

  /**
   * <p>The access level for the network. Valid values are STANDARD or PREMIUM, which determine the features and capabilities available to network members.</p>
   * @public
   */
  accessLevel: AccessLevel | undefined;

  /**
   * <p>Specifies whether to enable a premium free trial for the network. It is optional and has a default value as false. When set to true, the network starts with premium features for a limited trial period. </p>
   * @public
   */
  enablePremiumFreeTrial?: boolean | undefined;

  /**
   * <p>The ARN of the Amazon Web Services KMS customer managed key to use for encrypting sensitive data in the network.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkResponse {
  /**
   * <p>The unique identifier assigned to the newly created network.</p>
   * @public
   */
  networkId?: string | undefined;

  /**
   * <p>The name of the newly created network.</p>
   * @public
   */
  networkName?: string | undefined;

  /**
   * <p>The ARN of the KMS key being used to encrypt sensitive data in the network.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * <p>Identifies a Amazon Web Services Wickr network by region and network ID, used for configuring permitted networks for global federation.</p>
 * @public
 */
export interface WickrAwsNetworks {
  /**
   * <p>The Amazon Web Services region identifier where the network is hosted (e.g., 'us-east-1').</p>
   * @public
   */
  region: string | undefined;

  /**
   * <p>The network ID of the Wickr Amazon Web Services network.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * <p>Identifies a Wickr enterprise network that is permitted for global federation, allowing users to communicate with members of the specified network.</p>
 * @public
 */
export interface PermittedWickrEnterpriseNetwork {
  /**
   * <p>The domain identifier for the permitted Wickr enterprise network.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The network ID of the permitted Wickr enterprise network.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * <p>Contains the security group configuration settings that can be specified when creating or updating a security group. This is a subset of SecurityGroupSettings containing only the modifiable federation and security settings.</p>
 * @public
 */
export interface SecurityGroupSettingsRequest {
  /**
   * <p>The number of failed password attempts before a user account is locked out.</p>
   * @public
   */
  lockoutThreshold?: number | undefined;

  /**
   * <p>A list of network IDs that are permitted for local federation when federation mode is set to restricted.</p>
   * @public
   */
  permittedNetworks?: string[] | undefined;

  /**
   * <p>Guest users let you work with people outside your organization that only have limited access to Wickr. Only valid when federationMode is set to Global.</p>
   * @public
   */
  enableGuestFederation?: boolean | undefined;

  /**
   * <p>Allow users to securely federate with all Amazon Web Services Wickr networks and Amazon Web Services Enterprise networks.</p>
   * @public
   */
  globalFederation?: boolean | undefined;

  /**
   * <p>The local federation mode. Values: 0 (none), 1 (federated - all networks), 2 (restricted - only permitted networks).</p>
   * @public
   */
  federationMode?: number | undefined;

  /**
   * <p>Enables restricted global federation to limit communication to specific permitted networks only. Requires globalFederation to be enabled.</p>
   * @public
   */
  enableRestrictedGlobalFederation?: boolean | undefined;

  /**
   * <p>A list of permitted Amazon Web Services Wickr networks for restricted global federation.</p>
   * @public
   */
  permittedWickrAwsNetworks?: WickrAwsNetworks[] | undefined;

  /**
   * <p>A list of permitted Wickr Enterprise networks for restricted global federation.</p>
   * @public
   */
  permittedWickrEnterpriseNetworks?: PermittedWickrEnterpriseNetwork[] | undefined;
}

/**
 * @public
 */
export interface CreateSecurityGroupRequest {
  /**
   * <p>The ID of the Wickr network where the security group will be created.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The name for the new security group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The configuration settings for the security group, including permissions, federation settings, and feature controls.</p>
   * @public
   */
  securityGroupSettings: SecurityGroupSettingsRequest | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Defines password complexity requirements for users in a security group, including minimum length and character type requirements.</p>
 * @public
 */
export interface PasswordRequirements {
  /**
   * <p>The minimum number of lowercase letters required in passwords.</p>
   * @public
   */
  lowercase?: number | undefined;

  /**
   * <p>The minimum password length in characters.</p>
   * @public
   */
  minLength?: number | undefined;

  /**
   * <p>The minimum number of numeric characters required in passwords.</p>
   * @public
   */
  numbers?: number | undefined;

  /**
   * <p>The minimum number of special symbol characters required in passwords.</p>
   * @public
   */
  symbols?: number | undefined;

  /**
   * <p>The minimum number of uppercase letters required in passwords.</p>
   * @public
   */
  uppercase?: number | undefined;
}

/**
 * <p>Configuration for the message shredder feature, which securely deletes messages and files from devices to prevent data recovery.</p>
 * @public
 */
export interface ShredderSettings {
  /**
   * <p>Specifies whether users can manually trigger the shredder to delete content.</p>
   * @public
   */
  canProcessManually?: boolean | undefined;

  /**
   * <p>Prevents Wickr data from being recovered by overwriting deleted Wickr data. Valid Values: Must be one of [0, 20, 60, 100]</p>
   * @public
   */
  intensity?: number | undefined;
}

/**
 * <p>Comprehensive configuration settings that define all user capabilities, restrictions, and features for members of a security group. These settings control everything from calling permissions to federation settings to security policies.</p>
 * @public
 */
export interface SecurityGroupSettings {
  /**
   * <p>Requires users to reauthenticate every time they return to the application, providing an additional layer of security.</p>
   * @public
   */
  alwaysReauthenticate?: boolean | undefined;

  /**
   * <p>Configuration values for ATAK (Android Team Awareness Kit) package integration, when ATAK is enabled.</p>
   * @public
   */
  atakPackageValues?: string[] | undefined;

  /**
   * <p>The calling feature permissions and settings that control what types of calls users can initiate and participate in.</p>
   * @public
   */
  calling?: CallingSettings | undefined;

  /**
   * <p>Enables automatic checking for Wickr client updates to ensure users stay current with the latest version.</p>
   * @public
   */
  checkForUpdates?: boolean | undefined;

  /**
   * <p>Enables ATAK (Android Team Awareness Kit) integration for tactical communication and situational awareness.</p>
   * @public
   */
  enableAtak?: boolean | undefined;

  /**
   * <p>Allow users to report crashes.</p>
   * @public
   */
  enableCrashReports?: boolean | undefined;

  /**
   * <p>Specifies whether users can download files from messages to their devices.</p>
   * @public
   */
  enableFileDownload?: boolean | undefined;

  /**
   * <p>Allows users to communicate with guest users from other Wickr networks and federated external networks.</p>
   * @public
   */
  enableGuestFederation?: boolean | undefined;

  /**
   * <p>Enables message preview text in push notifications, allowing users to see message content before opening the app.</p>
   * @public
   */
  enableNotificationPreview?: boolean | undefined;

  /**
   * <p> Allow users to avoid censorship when they are geo-blocked or have network limitations.</p>
   * @public
   */
  enableOpenAccessOption?: boolean | undefined;

  /**
   * <p>Enables restricted global federation, limiting external communication to only specified permitted networks.</p>
   * @public
   */
  enableRestrictedGlobalFederation?: boolean | undefined;

  /**
   * <p>Enables file sharing capabilities, allowing users to send and receive files in conversations.</p>
   * @public
   */
  filesEnabled?: boolean | undefined;

  /**
   * <p> Defines the number of failed login attempts before data stored on the device is reset. Should be less than lockoutThreshold.</p>
   * @public
   */
  forceDeviceLockout?: number | undefined;

  /**
   * <p>Automatically enable and enforce Wickr open access on all devices. Valid only if enableOpenAccessOption settings is enabled.</p>
   * @public
   */
  forceOpenAccess?: boolean | undefined;

  /**
   * <p>Allow user approved bots to read messages in rooms without using a slash command.</p>
   * @public
   */
  forceReadReceipts?: boolean | undefined;

  /**
   * <p>Allows users to communicate with users on other Wickr instances (Wickr Enterprise) outside the current network.</p>
   * @public
   */
  globalFederation?: boolean | undefined;

  /**
   * <p>Enforces a two-factor authentication when a user adds a new device to their account.</p>
   * @public
   */
  isAtoEnabled?: boolean | undefined;

  /**
   * <p>Enables automatic preview of links shared in messages, showing webpage thumbnails and descriptions.</p>
   * @public
   */
  isLinkPreviewEnabled?: boolean | undefined;

  /**
   * <p>Allows map integration in location sharing, enabling users to view shared locations on interactive maps. Only allowed when location setting is enabled.</p>
   * @public
   */
  locationAllowMaps?: boolean | undefined;

  /**
   * <p>Enables location sharing features, allowing users to share their current location with others.</p>
   * @public
   */
  locationEnabled?: boolean | undefined;

  /**
   * <p>The maximum file size in bytes that will be automatically downloaded without user confirmation. Only allowed if fileDownload is enabled. Valid Values [512000 (low_quality), 7340032 (high_quality) ]</p>
   * @public
   */
  maxAutoDownloadSize?: number | undefined;

  /**
   * <p>The maximum burn-on-read (BOR) time in seconds, which determines how long messages remain visible before auto-deletion after being read.</p>
   * @public
   */
  maxBor?: number | undefined;

  /**
   * <p>The maximum time-to-live (TTL) in seconds for messages, after which they will be automatically deleted from all devices.</p>
   * @public
   */
  maxTtl?: number | undefined;

  /**
   * <p>Enables message forwarding, allowing users to forward messages from one conversation to another.</p>
   * @public
   */
  messageForwardingEnabled?: boolean | undefined;

  /**
   * <p>The password complexity requirements that users must follow when creating or changing passwords.</p>
   * @public
   */
  passwordRequirements?: PasswordRequirements | undefined;

  /**
   * <p>Enables presence indicators that show whether users are online, away, or offline.</p>
   * @public
   */
  presenceEnabled?: boolean | undefined;

  /**
   * <p>A list of pre-defined quick response message templates that users can send with a single tap.</p>
   * @public
   */
  quickResponses?: string[] | undefined;

  /**
   * <p>Users will get a master recovery key that can be used to securely sign in to their Wickr account without having access to their primary device for authentication. Available in SSO enabled network.</p>
   * @public
   */
  showMasterRecoveryKey?: boolean | undefined;

  /**
   * <p>The message shredder configuration that controls secure deletion of messages and files from devices.</p>
   * @public
   */
  shredder?: ShredderSettings | undefined;

  /**
   * <p>The duration for which users SSO session remains inactive before automatically logging them out for security. Available in SSO enabled network.</p>
   * @public
   */
  ssoMaxIdleMinutes?: number | undefined;

  /**
   * <p>The local federation mode controlling how users can communicate with other networks. Values: 0 (none), 1 (federated), 2 (restricted).</p>
   * @public
   */
  federationMode?: number | undefined;

  /**
   * <p>The number of failed password attempts before a user account is locked out.</p>
   * @public
   */
  lockoutThreshold?: number | undefined;

  /**
   * <p>A list of network IDs that are permitted for local federation when federation mode is set to restricted.</p>
   * @public
   */
  permittedNetworks?: string[] | undefined;

  /**
   * <p>A list of permitted Wickr networks for global federation, restricting communication to specific approved networks.</p>
   * @public
   */
  permittedWickrAwsNetworks?: WickrAwsNetworks[] | undefined;

  /**
   * <p>A list of permitted Wickr Enterprise networks for global federation, restricting communication to specific approved networks.</p>
   * @public
   */
  permittedWickrEnterpriseNetworks?: PermittedWickrEnterpriseNetwork[] | undefined;
}

/**
 * <p>Represents a security group in a Wickr network, containing membership statistics, configuration, and all permission settings that apply to its members.</p>
 * @public
 */
export interface SecurityGroup {
  /**
   * <p>The number of active user members currently in the security group.</p>
   * @public
   */
  activeMembers: number | undefined;

  /**
   * <p>The number of bot members currently in the security group.</p>
   * @public
   */
  botMembers: number | undefined;

  /**
   * <p>The GUID of the Active Directory group associated with this security group, if synchronized with LDAP.</p>
   * @public
   */
  activeDirectoryGuid?: string | undefined;

  /**
   * <p>The unique identifier of the security group.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Indicates whether this is the default security group for the network. Each network has only one default group.</p>
   * @public
   */
  isDefault: boolean | undefined;

  /**
   * <p>The human-readable name of the security group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the security group was last modified, specified in epoch seconds.</p>
   * @public
   */
  modified: number | undefined;

  /**
   * <p>The comprehensive configuration settings that define capabilities and restrictions for members of this security group.</p>
   * @public
   */
  securityGroupSettings: SecurityGroupSettings | undefined;
}

/**
 * @public
 */
export interface CreateSecurityGroupResponse {
  /**
   * <p>The details of the newly created security group, including its ID, name, and settings.</p>
   * @public
   */
  securityGroup: SecurityGroup | undefined;
}

/**
 * @public
 */
export interface DeleteBotRequest {
  /**
   * <p>The ID of the Wickr network from which the bot will be deleted.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the bot to be deleted.</p>
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotResponse {
  /**
   * <p>A message indicating the result of the bot deletion operation.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataRetentionBotRequest {
  /**
   * <p>The ID of the Wickr network from which the data retention bot will be deleted.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataRetentionBotResponse {
  /**
   * <p>A message indicating that the data retention bot and all associated data were successfully deleted.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkRequest {
  /**
   * <p>The ID of the Wickr network to delete.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency. If you retry a request with the same client token, the service will return the same response without attempting to delete the network again.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkResponse {
  /**
   * <p>A message indicating that the network deletion has been initiated successfully.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupRequest {
  /**
   * <p>The ID of the Wickr network from which the security group will be deleted.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the security group to delete.</p>
   * @public
   */
  groupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupResponse {
  /**
   * <p>A message indicating the result of the security group deletion operation.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>The ID of the network from which the security group was deleted.</p>
   * @public
   */
  networkId?: string | undefined;

  /**
   * <p>The ID of the security group that was deleted.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface GetBotRequest {
  /**
   * <p>The ID of the Wickr network containing the bot.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the bot to retrieve.</p>
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface GetBotResponse {
  /**
   * <p>The unique identifier of the bot.</p>
   * @public
   */
  botId?: string | undefined;

  /**
   * <p>The display name of the bot that is visible to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The username of the bot.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The unique username hash identifier for the bot.</p>
   * @public
   */
  uname?: string | undefined;

  /**
   * <p>The public key of the bot used for encryption.</p>
   * @public
   */
  pubkey?: string | undefined;

  /**
   * <p>The current status of the bot (1 for pending, 2 for active).</p>
   * @public
   */
  status?: BotStatus | undefined;

  /**
   * <p>The ID of the security group to which the bot belongs.</p>
   * @public
   */
  groupId?: string | undefined;

  /**
   * <p>Indicates whether the bot has a password set.</p>
   * @public
   */
  hasChallenge?: boolean | undefined;

  /**
   * <p>Indicates whether the bot is currently suspended.</p>
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * <p>The timestamp of the bot's last login.</p>
   * @public
   */
  lastLogin?: string | undefined;
}

/**
 * @public
 */
export interface GetBotsCountRequest {
  /**
   * <p>The ID of the Wickr network for which to retrieve bot counts.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetBotsCountResponse {
  /**
   * <p>The number of bots with pending status (invited but not yet activated).</p>
   * @public
   */
  pending: number | undefined;

  /**
   * <p>The number of bots with active status.</p>
   * @public
   */
  active: number | undefined;

  /**
   * <p>The total number of bots in the network (active and pending).</p>
   * @public
   */
  total: number | undefined;
}

/**
 * @public
 */
export interface GetDataRetentionBotRequest {
  /**
   * <p>The ID of the Wickr network containing the data retention bot.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetDataRetentionBotResponse {
  /**
   * <p>The name of the data retention bot.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>Indicates whether a data retention bot exists in the network.</p>
   * @public
   */
  botExists?: boolean | undefined;

  /**
   * <p>Indicates whether the data retention bot is active and operational.</p>
   * @public
   */
  isBotActive?: boolean | undefined;

  /**
   * <p>Indicates whether the data retention bot has been registered with the network.</p>
   * @public
   */
  isDataRetentionBotRegistered?: boolean | undefined;

  /**
   * <p>Indicates whether the data retention service is enabled for the network.</p>
   * @public
   */
  isDataRetentionServiceEnabled?: boolean | undefined;

  /**
   * <p>Indicates whether the public key message has been acknowledged by the bot.</p>
   * @public
   */
  isPubkeyMsgAcked?: boolean | undefined;
}

/**
 * @public
 */
export interface GetGuestUserHistoryCountRequest {
  /**
   * <p>The ID of the Wickr network for which to retrieve guest user history.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * <p>Contains the count of guest users for a specific billing period, used for tracking historical guest user activity.</p>
 * @public
 */
export interface GuestUserHistoryCount {
  /**
   * <p>The month and billing period in YYYY_MM format (e.g., '2024_01').</p>
   * @public
   */
  month: string | undefined;

  /**
   * <p>The number of guest users who have communicated with your Wickr network during this billing period.</p>
   * @public
   */
  count: string | undefined;
}

/**
 * @public
 */
export interface GetGuestUserHistoryCountResponse {
  /**
   * <p>A list of historical guest user counts, organized by month and billing period.</p>
   * @public
   */
  history: GuestUserHistoryCount[] | undefined;
}

/**
 * @public
 */
export interface GetNetworkRequest {
  /**
   * <p>The ID of the Wickr network to retrieve.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResponse {
  /**
   * <p>The unique identifier of the network.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The name of the network.</p>
   * @public
   */
  networkName: string | undefined;

  /**
   * <p>The access level of the network (STANDARD or PREMIUM), which determines available features and capabilities.</p>
   * @public
   */
  accessLevel: AccessLevel | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the network.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The current standing or status of the network.</p>
   * @public
   */
  standing?: number | undefined;

  /**
   * <p>The expiration date and time for the network's free trial period, if applicable.</p>
   * @public
   */
  freeTrialExpiration?: string | undefined;

  /**
   * <p>The SSO redirect URI migration state, managed by the SSO redirect migration wizard. Values: 0 (not started), 1 (in progress), or 2 (completed).</p>
   * @public
   */
  migrationState?: number | undefined;

  /**
   * <p>The ARN of the Amazon Web Services KMS customer managed key used for encrypting sensitive data in the network.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkSettingsRequest {
  /**
   * <p>The ID of the Wickr network whose settings will be retrieved.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * <p>Represents a single network-level configuration setting with its name, value, and data type. Settings control network-wide behaviors and features.</p>
 * @public
 */
export interface Setting {
  /**
   * <p>The name of the network setting (e.g., 'enableClientMetrics', 'dataRetention').</p>
   * @public
   */
  optionName: string | undefined;

  /**
   * <p>The current value of the setting as a string. Boolean values are represented as 'true' or 'false'.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The data type of the setting value (e.g., 'boolean', 'string', 'number').</p>
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkSettingsResponse {
  /**
   * <p>A list of network settings, where each setting includes a name, value, and type.</p>
   * @public
   */
  settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface GetOidcInfoRequest {
  /**
   * <p>The ID of the Wickr network whose OIDC configuration will be retrieved.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The OAuth client ID for retrieving access tokens (optional).</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The authorization code for retrieving access tokens (optional).</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>The OAuth grant type for retrieving access tokens (optional).</p>
   * @public
   */
  grantType?: string | undefined;

  /**
   * <p>The redirect URI for the OAuth flow (optional).</p>
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * <p>The URL for the OIDC provider (optional).</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The OAuth client secret for retrieving access tokens (optional).</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>The PKCE code verifier for enhanced security in the OAuth flow (optional).</p>
   * @public
   */
  codeVerifier?: string | undefined;

  /**
   * <p>The CA certificate for secure communication with the OIDC provider (optional).</p>
   * @public
   */
  certificate?: string | undefined;
}

/**
 * <p>Contains the OpenID Connect (OIDC) configuration information for Single Sign-On (SSO) authentication, including identity provider settings and client credentials.</p>
 * @public
 */
export interface OidcConfigInfo {
  /**
   * <p>The name of the OIDC application as registered with the identity provider.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The OAuth client ID assigned by the identity provider for authentication requests.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>Custom identifier your end users will use to sign in with SSO.</p>
   * @public
   */
  companyId: string | undefined;

  /**
   * <p>The OAuth scopes requested from the identity provider, which determine what user information is accessible (e.g., 'openid profile email').</p>
   * @public
   */
  scopes: string | undefined;

  /**
   * <p>The issuer URL of the identity provider, which serves as the base URL for OIDC endpoints and configuration discovery.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The OAuth client secret used to authenticate the application with the identity provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>An additional secret credential used by the identity provider for authentication.</p>
   * @public
   */
  secret?: string | undefined;

  /**
   * <p>The callback URL where the identity provider redirects users after successful authentication. This URL must be registered with the identity provider.</p>
   * @public
   */
  redirectUrl?: string | undefined;

  /**
   * <p>The claim field from the OIDC token to use as the unique user identifier (e.g., 'email', 'sub', or a custom claim).</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>A custom field mapping to extract the username from the OIDC token when the standard username claim is insufficient.</p>
   * @public
   */
  customUsername?: string | undefined;

  /**
   * <p>The X.509 CA certificate for validating SSL/TLS connections to the identity provider when using self-signed or enterprise certificates.</p>
   * @public
   */
  caCertificate?: string | undefined;

  /**
   * <p>The unique identifier for the registered OIDC application. Valid range is 1-10.</p>
   * @public
   */
  applicationId?: number | undefined;

  /**
   * <p>The grace period in minutes before the SSO token expires when the system should proactively refresh the token to maintain seamless user access.</p>
   * @public
   */
  ssoTokenBufferMinutes?: number | undefined;

  /**
   * <p>Additional authentication parameters to include in the OIDC authorization request as a query string. Useful for provider-specific extensions.</p>
   * @public
   */
  extraAuthParams?: string | undefined;
}

/**
 * <p>Contains OAuth token information returned from the identity provider, including access tokens, ID tokens, and PKCE parameters used for secure authentication.</p>
 * @public
 */
export interface OidcTokenInfo {
  /**
   * <p>The PKCE (Proof Key for Code Exchange) code verifier, a cryptographically random string used to enhance security in the OAuth flow.</p>
   * @public
   */
  codeVerifier?: string | undefined;

  /**
   * <p>The PKCE code challenge, a transformed version of the code verifier sent during the authorization request for verification.</p>
   * @public
   */
  codeChallenge?: string | undefined;

  /**
   * <p>The OAuth access token that can be used to access protected resources on behalf of the authenticated user.</p>
   * @public
   */
  accessToken?: string | undefined;

  /**
   * <p>The OpenID Connect ID token containing user identity information and authentication context as a signed JWT.</p>
   * @public
   */
  idToken?: string | undefined;

  /**
   * <p>The OAuth refresh token that can be used to obtain new access tokens without requiring the user to re-authenticate.</p>
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * <p>The type of access token issued, typically 'Bearer', which indicates how the token should be used in API requests.</p>
   * @public
   */
  tokenType?: string | undefined;

  /**
   * <p>The lifetime of the access token in seconds, indicating when the token will expire and need to be refreshed.</p>
   * @public
   */
  expiresIn?: number | undefined;
}

/**
 * @public
 */
export interface GetOidcInfoResponse {
  /**
   * <p>The OpenID Connect configuration information for the network, including issuer, client ID, scopes, and other SSO settings.</p>
   * @public
   */
  openidConnectInfo?: OidcConfigInfo | undefined;

  /**
   * <p>OAuth token information including access token, refresh token, and expiration details (only present if token parameters were provided in the request).</p>
   * @public
   */
  tokenInfo?: OidcTokenInfo | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupRequest {
  /**
   * <p>The ID of the Wickr network containing the security group.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the security group to retrieve.</p>
   * @public
   */
  groupId: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupResponse {
  /**
   * <p>The detailed information about the security group, including all its settings and member counts.</p>
   * @public
   */
  securityGroup: SecurityGroup | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * <p>The ID of the Wickr network containing the user.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the user to retrieve.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The start time for filtering the user's last activity. Only activity after this timestamp will be considered. Time is specified in epoch seconds.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time for filtering the user's last activity. Only activity before this timestamp will be considered. Time is specified in epoch seconds.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * <p>The unique identifier of the user.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The first name of the user.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The last name of the user.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>The email address or username of the user.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>Indicates whether the user has administrator privileges in the network.</p>
   * @public
   */
  isAdmin?: boolean | undefined;

  /**
   * <p>Indicates whether the user is currently suspended.</p>
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * <p>The current status of the user (1 for pending, 2 for active).</p>
   * @public
   */
  status?: number | undefined;

  /**
   * <p>The timestamp of the user's last activity in the network, specified in epoch seconds.</p>
   * @public
   */
  lastActivity?: number | undefined;

  /**
   * <p>The timestamp of the user's last login to the network, specified in epoch seconds.</p>
   * @public
   */
  lastLogin?: number | undefined;

  /**
   * <p>A list of security group IDs to which the user belongs.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetUsersCountRequest {
  /**
   * <p>The ID of the Wickr network for which to retrieve user counts.</p>
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetUsersCountResponse {
  /**
   * <p>The number of users with pending status (invited but not yet accepted).</p>
   * @public
   */
  pending: number | undefined;

  /**
   * <p>The number of users with active status in the network.</p>
   * @public
   */
  active: number | undefined;

  /**
   * <p>The number of users who have rejected network invitations.</p>
   * @public
   */
  rejected: number | undefined;

  /**
   * <p>The number of additional users that can be added to the network while maintaining premium free trial eligibility.</p>
   * @public
   */
  remaining: number | undefined;

  /**
   * <p>The total number of users in the network (active and pending combined).</p>
   * @public
   */
  total: number | undefined;
}

/**
 * <p>Represents a guest user who has accessed the network from a federated Wickr network.</p>
 * @public
 */
export interface GuestUser {
  /**
   * <p>The billing period when this guest user accessed the network (e.g., '2024-01').</p>
   * @public
   */
  billingPeriod: string | undefined;

  /**
   * <p>The username of the guest user.</p>
   * @public
   */
  username: string | undefined;

  /**
   * <p>The unique username hash identifier for the guest user.</p>
   * @public
   */
  usernameHash: string | undefined;
}

/**
 * @public
 */
export interface ListBlockedGuestUsersRequest {
  /**
   * <p>The ID of the Wickr network from which to list blocked guest users.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The maximum number of blocked guest users to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * <p>The field to sort blocked guest users by. Accepted values include 'username', 'admin', and 'modified'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>Filter results to only include blocked guest users with usernames matching this value.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>Filter results to only include blocked guest users that were blocked by this administrator.</p>
   * @public
   */
  admin?: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlockedGuestUsersResponse {
  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of blocked guest user objects within the current page.</p>
   * @public
   */
  blocklist: BlockedGuestUser[] | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * <p>The ID of the Wickr network from which to list bots.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of bots to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The fields to sort bots by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', 'displayName', 'status', and 'groupId'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * <p>Filter results to only include bots with display names matching this value.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>Filter results to only include bots with usernames matching this value.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>Filter results to only include bots with this status (1 for pending, 2 for active).</p>
   * @public
   */
  status?: BotStatus | undefined;

  /**
   * <p>Filter results to only include bots belonging to this security group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * <p>A list of bot objects matching the specified filters and within the current page.</p>
   * @public
   */
  bots: Bot[] | undefined;

  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesForUserRequest {
  /**
   * <p>The ID of the Wickr network containing the user.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the user whose devices will be listed.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of devices to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The fields to sort devices by. Multiple fields can be specified by separating them with '+'. Accepted values include 'lastlogin', 'type', 'suspend', and 'created'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;
}

/**
 * @public
 */
export interface ListDevicesForUserResponse {
  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of device objects associated with the user within the current page.</p>
   * @public
   */
  devices: BasicDeviceObject[] | undefined;
}

/**
 * @public
 */
export interface ListGuestUsersRequest {
  /**
   * <p>The ID of the Wickr network from which to list guest users.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The maximum number of guest users to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * <p>The field to sort guest users by. Accepted values include 'username' and 'billingPeriod'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>Filter results to only include guest users with usernames matching this value.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>Filter results to only include guest users from this billing period (e.g., '2024-01').</p>
   * @public
   */
  billingPeriod?: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGuestUsersResponse {
  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of guest user objects within the current page.</p>
   * @public
   */
  guestlist: GuestUser[] | undefined;
}

/**
 * @public
 */
export interface ListNetworksRequest {
  /**
   * <p>The maximum number of networks to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The field to sort networks by. Accepted values are 'networkId' and 'networkName'. Default is 'networkId'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a Wickr network with all its configuration and status information.</p>
 * @public
 */
export interface Network {
  /**
   * <p>The unique identifier of the network.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The name of the network.</p>
   * @public
   */
  networkName: string | undefined;

  /**
   * <p>The access level of the network (STANDARD or PREMIUM), which determines available features and capabilities.</p>
   * @public
   */
  accessLevel: AccessLevel | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the network.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the network.</p>
   * @public
   */
  networkArn: string | undefined;

  /**
   * <p>The current standing or status of the network.</p>
   * @public
   */
  standing?: number | undefined;

  /**
   * <p>The expiration date and time for the network's free trial period, if applicable.</p>
   * @public
   */
  freeTrialExpiration?: string | undefined;

  /**
   * <p>The SSO redirect URI migration state, managed by the SSO redirect migration wizard. Values: 0 (not started), 1 (in progress), or 2 (completed).</p>
   * @public
   */
  migrationState?: number | undefined;

  /**
   * <p>The ARN of the Amazon Web Services KMS customer managed key used for encrypting sensitive data in the network.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworksResponse {
  /**
   * <p>A list of network objects for the Amazon Web Services account.</p>
   * @public
   */
  networks: Network[] | undefined;

  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupsRequest {
  /**
   * <p>The ID of the Wickr network from which to list security groups.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of security groups to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The field to sort security groups by. Accepted values include 'id' and 'name'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupsResponse {
  /**
   * <p>A list of security group objects in the current page.</p>
   * @public
   */
  securityGroups?: SecurityGroup[] | undefined;

  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupUsersRequest {
  /**
   * <p>The ID of the Wickr network containing the security group.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the security group whose users will be listed.</p>
   * @public
   */
  groupId: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of users to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The field to sort users by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', and 'lastName'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupUsersResponse {
  /**
   * <p>A list of user objects belonging to the security group within the current page.</p>
   * @public
   */
  users: User[] | undefined;

  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The ID of the Wickr network from which to list users.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The token for retrieving the next page of results. This is returned from a previous request when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of users to return in a single page. Valid range is 1-100. Default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The fields to sort users by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', 'lastName', 'status', and 'groupId'.</p>
   * @public
   */
  sortFields?: string | undefined;

  /**
   * <p>The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.</p>
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * <p>Filter results to only include users with first names matching this value.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>Filter results to only include users with last names matching this value.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>Filter results to only include users with usernames matching this value.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>Filter results to only include users with this status (1 for pending, 2 for active).</p>
   * @public
   */
  status?: UserStatus | undefined;

  /**
   * <p>Filter results to only include users belonging to this security group.</p>
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>The token to use for retrieving the next page of results. If this is not present, there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of user objects matching the specified filters and within the current page.</p>
   * @public
   */
  users?: User[] | undefined;
}

/**
 * <p>Configuration for read receipts at the network level, controlling whether senders can see when their messages have been read.</p>
 * @public
 */
export interface ReadReceiptConfig {
  /**
   * <p>The read receipt status mode for the network.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * <p>Contains network-level configuration settings that apply to all users and security groups within a Wickr network.</p>
 * @public
 */
export interface NetworkSettings {
  /**
   * <p>Allows Wickr clients to send anonymized performance and usage metrics to the Wickr backend server for service improvement and troubleshooting.</p>
   * @public
   */
  enableClientMetrics?: boolean | undefined;

  /**
   * <p>Configuration for read receipts at the network level, controlling the default behavior for whether senders can see when their messages have been read.</p>
   * @public
   */
  readReceiptConfig?: ReadReceiptConfig | undefined;

  /**
   * <p>Indicates whether the data retention feature is enabled for the network. When true, messages are captured by the data retention bot for compliance and archiving purposes.</p>
   * @public
   */
  dataRetention?: boolean | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigRequest {
  /**
   * <p>The ID of the Wickr network for which OIDC will be configured.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>Custom identifier your end users will use to sign in with SSO.</p>
   * @public
   */
  companyId: string | undefined;

  /**
   * <p>A custom field mapping to extract the username from the OIDC token (optional). </p> <note> <p>The customUsername is only required if you use something other than email as the username field.</p> </note>
   * @public
   */
  customUsername?: string | undefined;

  /**
   * <p>Additional authentication parameters to include in the OIDC flow (optional).</p>
   * @public
   */
  extraAuthParams?: string | undefined;

  /**
   * <p>The issuer URL of the OIDC provider (e.g., 'https://login.example.com').</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The OAuth scopes to request from the OIDC provider (e.g., 'openid profile email').</p>
   * @public
   */
  scopes: string | undefined;

  /**
   * <p>The client secret for authenticating with the OIDC provider (optional).</p>
   * @public
   */
  secret?: string | undefined;

  /**
   * <p>The buffer time in minutes before the SSO token expires to refresh it (optional).</p>
   * @public
   */
  ssoTokenBufferMinutes?: number | undefined;

  /**
   * <p>Unique identifier provided by your identity provider to authenticate the access request. Also referred to as clientID.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigResponse {
  /**
   * <p>The name of the registered OIDC application.</p>
   * @public
   */
  applicationName?: string | undefined;

  /**
   * <p>The OAuth client ID assigned to the application.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>Custom identifier your end users will use to sign in with SSO.</p>
   * @public
   */
  companyId: string | undefined;

  /**
   * <p>The OAuth scopes configured for the application.</p>
   * @public
   */
  scopes: string | undefined;

  /**
   * <p>The issuer URL of the OIDC provider.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The OAuth client secret for the application.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>The client secret for authenticating with the OIDC provider.</p>
   * @public
   */
  secret?: string | undefined;

  /**
   * <p>The redirect URL configured for the OAuth flow.</p>
   * @public
   */
  redirectUrl?: string | undefined;

  /**
   * <p>The claim field being used as the user identifier.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The custom field mapping used for extracting the username.</p>
   * @public
   */
  customUsername?: string | undefined;

  /**
   * <p>The CA certificate used for secure communication with the OIDC provider.</p>
   * @public
   */
  caCertificate?: string | undefined;

  /**
   * <p>The unique identifier for the registered OIDC application.</p>
   * @public
   */
  applicationId?: number | undefined;

  /**
   * <p>The buffer time in minutes before the SSO token expires.</p>
   * @public
   */
  ssoTokenBufferMinutes?: number | undefined;

  /**
   * <p>The additional authentication parameters configured for the OIDC flow.</p>
   * @public
   */
  extraAuthParams?: string | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigTestRequest {
  /**
   * <p>The ID of the Wickr network for which the OIDC configuration will be tested.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>Additional authentication parameters to include in the test (optional).</p>
   * @public
   */
  extraAuthParams?: string | undefined;

  /**
   * <p>The issuer URL of the OIDC provider to test.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The OAuth scopes to test with the OIDC provider.</p>
   * @public
   */
  scopes: string | undefined;

  /**
   * <p>The CA certificate for secure communication with the OIDC provider (optional).</p>
   * @public
   */
  certificate?: string | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigTestResponse {
  /**
   * <p>The token endpoint URL discovered from the OIDC provider.</p>
   * @public
   */
  tokenEndpoint?: string | undefined;

  /**
   * <p>The user info endpoint URL discovered from the OIDC provider.</p>
   * @public
   */
  userinfoEndpoint?: string | undefined;

  /**
   * <p>The OAuth response types supported by the OIDC provider.</p>
   * @public
   */
  responseTypesSupported?: string[] | undefined;

  /**
   * <p>The OAuth scopes supported by the OIDC provider.</p>
   * @public
   */
  scopesSupported?: string[] | undefined;

  /**
   * <p>The issuer URL confirmed by the OIDC provider.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>The authorization endpoint URL discovered from the OIDC provider.</p>
   * @public
   */
  authorizationEndpoint?: string | undefined;

  /**
   * <p>The end session endpoint URL for logging out users from the OIDC provider.</p>
   * @public
   */
  endSessionEndpoint?: string | undefined;

  /**
   * <p>The logout endpoint URL for terminating user sessions.</p>
   * @public
   */
  logoutEndpoint?: string | undefined;

  /**
   * <p>The OAuth grant types supported by the OIDC provider.</p>
   * @public
   */
  grantTypesSupported?: string[] | undefined;

  /**
   * <p>The token revocation endpoint URL for invalidating tokens.</p>
   * @public
   */
  revocationEndpoint?: string | undefined;

  /**
   * <p>The authentication methods supported by the token endpoint.</p>
   * @public
   */
  tokenEndpointAuthMethodsSupported?: string[] | undefined;

  /**
   * <p>Indicates whether the provider supports Microsoft multi-refresh tokens.</p>
   * @public
   */
  microsoftMultiRefreshToken?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBotRequest {
  /**
   * <p>The ID of the Wickr network containing the bot to update.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the bot to update.</p>
   * @public
   */
  botId: string | undefined;

  /**
   * <p>The new display name for the bot.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The ID of the new security group to assign the bot to.</p>
   * @public
   */
  groupId?: string | undefined;

  /**
   * <p>The new password for the bot account.</p>
   * @public
   */
  challenge?: string | undefined;

  /**
   * <p>Set to true to suspend the bot or false to unsuspend it. Omit this field for standard updates that don't affect suspension status.</p>
   * @public
   */
  suspend?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * <p>A message indicating the result of the bot update operation.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataRetentionRequest {
  /**
   * <p>The ID of the Wickr network containing the data retention bot.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The action to perform. Valid values are 'ENABLE' (to enable the data retention service), 'DISABLE' (to disable the service), or 'PUBKEY_MSG_ACK' (to acknowledge the public key message).</p>
   * @public
   */
  actionType: DataRetentionActionType | undefined;
}

/**
 * @public
 */
export interface UpdateDataRetentionResponse {
  /**
   * <p>A message indicating the result of the update operation.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGuestUserRequest {
  /**
   * <p>The ID of the Wickr network where the guest user's status will be updated.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The username hash (unique identifier) of the guest user to update.</p>
   * @public
   */
  usernameHash: string | undefined;

  /**
   * <p>Set to true to block the guest user or false to unblock them.</p>
   * @public
   */
  block: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateGuestUserResponse {
  /**
   * <p>A message indicating the result of the update operation.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkRequest {
  /**
   * <p>The ID of the Wickr network to update.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The new name for the network. Must be between 1 and 20 characters.</p>
   * @public
   */
  networkName: string | undefined;

  /**
   * <p>A unique identifier for this request to ensure idempotency.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN of the Amazon Web Services KMS customer managed key to use for encrypting sensitive data in the network.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkResponse {
  /**
   * <p>A message indicating that the network was updated successfully.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsRequest {
  /**
   * <p>The ID of the Wickr network whose settings will be updated.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>A map of setting names to their new values. Each setting should be provided with its appropriate type (boolean, string, number, etc.).</p>
   * @public
   */
  settings: NetworkSettings | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsResponse {
  /**
   * <p>A list of the updated network settings, showing the new values for each modified setting.</p>
   * @public
   */
  settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRequest {
  /**
   * <p>The ID of the Wickr network containing the security group to update.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the security group to update.</p>
   * @public
   */
  groupId: string | undefined;

  /**
   * <p>The new name for the security group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated configuration settings for the security group.</p> <p>Federation mode - 0 (Local federation), 1 (Restricted federation), 2 (Global federation) </p>
   * @public
   */
  securityGroupSettings?: SecurityGroupSettings | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupResponse {
  /**
   * <p>The updated security group details, including the new settings.</p>
   * @public
   */
  securityGroup: SecurityGroup | undefined;
}

/**
 * <p>Contains the modifiable details for updating an existing user, including name, password, security group membership, and invitation settings.</p> <note> <p>A user can only be assigned to a single security group. Attempting to add a user to multiple security groups is not supported and will result in an error.</p> </note>
 * @public
 */
export interface UpdateUserDetails {
  /**
   * <p>The new first name for the user.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The new last name for the user.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>The new username or email address for the user.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The updated list of security group IDs to which the user should belong.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>A new custom invite code for the user.</p>
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * <p>The new time-to-live for the invite code in days.</p>
   * @public
   */
  inviteCodeTtl?: number | undefined;

  /**
   * <p>Indicates whether the user can be verified through a custom invite code.</p>
   * @public
   */
  codeValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The ID of the Wickr network containing the user to update.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The unique identifier of the user to update.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>An object containing the user details to be updated, such as name, password, security groups, and invite code settings.</p>
   * @public
   */
  userDetails?: UpdateUserDetails | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The unique identifier of the updated user.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The ID of the network where the user was updated.</p>
   * @public
   */
  networkId: string | undefined;

  /**
   * <p>The list of security group IDs to which the user now belongs after the update.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The updated first name of the user.</p>
   * @public
   */
  firstName?: string | undefined;

  /**
   * <p>The updated last name of the user.</p>
   * @public
   */
  lastName?: string | undefined;

  /**
   * <p>The middle name of the user (currently not used).</p>
   * @public
   */
  middleName?: string | undefined;

  /**
   * <p>Indicates whether the user is suspended after the update.</p>
   * @public
   */
  suspended: boolean | undefined;

  /**
   * <p>The timestamp when the user was last modified, specified in epoch seconds.</p>
   * @public
   */
  modified?: number | undefined;

  /**
   * <p>The user's status after the update.</p>
   * @public
   */
  status?: number | undefined;

  /**
   * <p>The updated invite code for the user, if applicable.</p>
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * <p>The expiration time of the user's invite code, specified in epoch seconds.</p>
   * @public
   */
  inviteExpiration?: number | undefined;

  /**
   * <p>Indicates whether the user can be verified through a custom invite code.</p>
   * @public
   */
  codeValidation?: boolean | undefined;
}
