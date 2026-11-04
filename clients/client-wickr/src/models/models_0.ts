// smithy-typescript generated code
import type { AccessLevel, BotStatus, DataRetentionActionType, SortDirection, Status, UserStatus } from "./enums";

/**
 * Represents a device where a user has logged into Wickr, containing information about the device's type, status, and login history.
 *
 * @public
 */
export interface BasicDeviceObject {
  /**
   * The unique application ID for the Wickr app on this device.
   *
   * @public
   */
  appId?: string | undefined;

  /**
   * The timestamp when the device first appeared in the Wickr database.
   *
   * @public
   */
  created?: string | undefined;

  /**
   * The timestamp when the device last successfully logged into Wickr. This is also used to determine SSO idle time.
   *
   * @public
   */
  lastLogin?: string | undefined;

  /**
   * The current status of the device, either 'Active' or 'Reset' depending on whether the device is currently active or has been marked for reset.
   *
   * @public
   */
  statusText?: string | undefined;

  /**
   * Indicates whether the device is suspended.
   *
   * @public
   */
  suspend?: boolean | undefined;

  /**
   * The operating system of the device (e.g., 'MacOSX', 'Windows', 'iOS', 'Android').
   *
   * @public
   */
  type?: string | undefined;
}

/**
 * Contains the details for a single user to be created in a batch user creation request.
 *
 * > **Note:** A user can only be assigned to a single security group. Attempting to add a user to multiple security groups is not supported and will result in an error.
 *
 * > **Note:** `codeValidation`, `inviteCode`, and `inviteCodeTtl` are restricted to networks under preview only.
 *
 * @public
 */
export interface BatchCreateUserRequestItem {
  /**
   * The first name of the user.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * A list of security group IDs to which the user should be assigned.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The email address or username for the user. Must be unique within the network.
   *
   * @public
   */
  username: string | undefined;

  /**
   * A custom invite code for the user. If not provided, one will be generated automatically.
   *
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * The time-to-live for the invite code in days. After this period, the invite code will expire.
   *
   * @public
   */
  inviteCodeTtl?: number | undefined;

  /**
   * Indicates whether the user can be verified through a custom invite code.
   *
   * @public
   */
  codeValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface BatchCreateUserRequest {
  /**
   * The ID of the Wickr network where users will be created.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A list of user objects containing the details for each user to be created, including username, name, security groups, and optional invite codes. Maximum 50 users per batch request.
   *
   * @public
   */
  users: BatchCreateUserRequestItem[] | undefined;

  /**
   * A unique identifier for this request to ensure idempotency. If you retry a request with the same client token, the service will return the same response without creating duplicate users.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains error information for a user operation that failed in a batch user request.
 *
 * @public
 */
export interface BatchUserErrorResponseItem {
  /**
   * The field that caused the error.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * A description of why the user operation failed.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The user ID associated with the failed operation.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * Represents a user account in a Wickr network with detailed profile information, status, security settings, and authentication details.
 *
 * > **Note:** codeValidation, inviteCode and inviteCodeTtl are restricted to networks under preview only.
 *
 * @public
 */
export interface User {
  /**
   * The unique identifier for the user within the network.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * The email address or username of the user. For bots, this must end in 'bot'.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * A list of security group IDs to which the user is assigned, determining their permissions and feature access.
   *
   * @public
   */
  securityGroups?: string[] | undefined;

  /**
   * Indicates whether the user has administrator privileges in the network.
   *
   * @public
   */
  isAdmin?: boolean | undefined;

  /**
   * Indicates whether the user is currently suspended and unable to access the network.
   *
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * The current status of the user (1 for pending invitation, 2 for active).
   *
   * @public
   */
  status?: number | undefined;

  /**
   * Indicates whether one-time password (OTP) authentication is enabled for the user.
   *
   * @public
   */
  otpEnabled?: boolean | undefined;

  /**
   * The SCIM (System for Cross-domain Identity Management) identifier for the user, used for identity synchronization. Currently not used.
   *
   * @public
   */
  scimId?: string | undefined;

  /**
   * The descriptive type of the user account (e.g., 'user').
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The phone number minus country code, used for cloud deployments.
   *
   * @public
   */
  cell?: string | undefined;

  /**
   * The country code for the user's phone number, used for cloud deployments.
   *
   * @public
   */
  countryCode?: string | undefined;

  /**
   * The number of failed password attempts for enterprise deployments, used for account lockout policies.
   *
   * @public
   */
  challengeFailures?: number | undefined;

  /**
   * Indicates whether the user's email invitation code has expired, applicable to cloud deployments.
   *
   * @public
   */
  isInviteExpired?: boolean | undefined;

  /**
   * Indicates whether this account is a user (as opposed to a bot or other account type).
   *
   * @public
   */
  isUser?: boolean | undefined;

  /**
   * The invitation code for this user, used during registration to join the network.
   *
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * Indicates whether the user can be verified through a custom invite code.
   *
   * @public
   */
  codeValidation?: boolean | undefined;

  /**
   * The unique identifier for the user.
   *
   * @public
   */
  uname?: string | undefined;
}

/**
 * @public
 */
export interface BatchCreateUserResponse {
  /**
   * A message indicating the overall result of the batch operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of user objects that were successfully created, including their assigned user IDs and invite codes.
   *
   * @public
   */
  successful?: User[] | undefined;

  /**
   * A list of user creation attempts that failed, including error details explaining why each user could not be created.
   *
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * Contains detailed error information explaining why an operation failed, including which field caused the error and the reason for the failure.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The name of the field that contains an error or warning.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * A detailed description of the error or warning.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteUserRequest {
  /**
   * The ID of the Wickr network from which users will be deleted.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A list of user IDs identifying the users to be deleted from the network. Maximum 50 users per batch request.
   *
   * @public
   */
  userIds: string[] | undefined;

  /**
   * A unique identifier for this request to ensure idempotency. If you retry a request with the same client token, the service will return the same response without attempting to delete users again.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains information about a user that was successfully processed in a batch user operation.
 *
 * @public
 */
export interface BatchUserSuccessResponseItem {
  /**
   * The user ID that was successfully processed.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteUserResponse {
  /**
   * A message indicating the overall result of the batch deletion operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of user IDs that were successfully deleted from the network.
   *
   * @public
   */
  successful?: BatchUserSuccessResponseItem[] | undefined;

  /**
   * A list of user deletion attempts that failed, including error details explaining why each user could not be deleted.
   *
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * Contains error information for a device operation that failed in a batch device request.
 *
 * @public
 */
export interface BatchDeviceErrorResponseItem {
  /**
   * The field that caused the error.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * A description of why the device operation failed.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The application ID of the device that failed to be processed.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * Contains information about a device that was successfully processed in a batch device operation.
 *
 * @public
 */
export interface BatchDeviceSuccessResponseItem {
  /**
   * The application ID of the device that was successfully processed.
   *
   * @public
   */
  appId: string | undefined;
}

/**
 * @public
 */
export interface BatchLookupUserUnameRequest {
  /**
   * The ID of the Wickr network where the users will be looked up.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A list of username hashes (unames) to look up. Each uname is a unique identifier for a user's username. Maximum 50 unames per batch request.
   *
   * @public
   */
  unames: string[] | undefined;

  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains error information for a username hash lookup that failed in a batch uname lookup request.
 *
 * @public
 */
export interface BatchUnameErrorResponseItem {
  /**
   * The field that caused the error.
   *
   * @public
   */
  field?: string | undefined;

  /**
   * A description of why the username hash lookup failed.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The username hash that failed to be looked up.
   *
   * @public
   */
  uname: string | undefined;
}

/**
 * Contains information about a username hash that was successfully resolved in a batch uname lookup operation.
 *
 * @public
 */
export interface BatchUnameSuccessResponseItem {
  /**
   * The username hash that was successfully resolved.
   *
   * @public
   */
  uname: string | undefined;

  /**
   * The email address or username corresponding to the username hash.
   *
   * @public
   */
  username: string | undefined;
}

/**
 * @public
 */
export interface BatchLookupUserUnameResponse {
  /**
   * A message indicating the overall result of the batch lookup operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of successfully resolved username hashes with their corresponding email addresses.
   *
   * @public
   */
  successful?: BatchUnameSuccessResponseItem[] | undefined;

  /**
   * A list of username hash lookup attempts that failed, including error details explaining why each lookup failed.
   *
   * @public
   */
  failed?: BatchUnameErrorResponseItem[] | undefined;
}

/**
 * @public
 */
export interface BatchReinviteUserRequest {
  /**
   * The ID of the Wickr network where users will be reinvited.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A list of user IDs identifying the users to be reinvited to the network. Maximum 50 users per batch request.
   *
   * @public
   */
  userIds: string[] | undefined;

  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchReinviteUserResponse {
  /**
   * A message indicating the overall result of the batch reinvitation operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of user IDs that were successfully reinvited.
   *
   * @public
   */
  successful?: BatchUserSuccessResponseItem[] | undefined;

  /**
   * A list of reinvitation attempts that failed, including error details explaining why each user could not be reinvited.
   *
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * @public
 */
export interface BatchResetDevicesForUserRequest {
  /**
   * The ID of the Wickr network containing the user whose devices will be reset.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The ID of the user whose devices will be reset.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * A list of application IDs identifying the specific devices to be reset for the user. Maximum 50 devices per batch request.
   *
   * @public
   */
  appIds: string[] | undefined;

  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchResetDevicesForUserResponse {
  /**
   * A message indicating the overall result of the batch device reset operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of application IDs that were successfully reset.
   *
   * @public
   */
  successful?: BatchDeviceSuccessResponseItem[] | undefined;

  /**
   * A list of device reset attempts that failed, including error details explaining why each device could not be reset.
   *
   * @public
   */
  failed?: BatchDeviceErrorResponseItem[] | undefined;
}

/**
 * @public
 */
export interface BatchToggleUserSuspendStatusRequest {
  /**
   * The ID of the Wickr network where users will be suspended or unsuspended.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A boolean value indicating whether to suspend (true) or unsuspend (false) the specified users.
   *
   * @public
   */
  suspend: boolean | undefined;

  /**
   * A list of user IDs identifying the users whose suspend status will be toggled. Maximum 50 users per batch request.
   *
   * @public
   */
  userIds: string[] | undefined;

  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchToggleUserSuspendStatusResponse {
  /**
   * A message indicating the overall result of the batch suspend status toggle operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * A list of user IDs whose suspend status was successfully toggled.
   *
   * @public
   */
  successful?: BatchUserSuccessResponseItem[] | undefined;

  /**
   * A list of suspend status toggle attempts that failed, including error details explaining why each user's status could not be changed.
   *
   * @public
   */
  failed?: BatchUserErrorResponseItem[] | undefined;
}

/**
 * Represents a guest user who has been blocked from accessing a Wickr network.
 *
 * @public
 */
export interface BlockedGuestUser {
  /**
   * The username of the blocked guest user.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The username of the administrator who blocked this guest user.
   *
   * @public
   */
  admin: string | undefined;

  /**
   * The timestamp when the guest user was blocked or last modified.
   *
   * @public
   */
  modified: string | undefined;

  /**
   * The unique username hash identifier for the blocked guest user.
   *
   * @public
   */
  usernameHash: string | undefined;
}

/**
 * Represents a bot account in a Wickr network with all its informational fields.
 *
 * @public
 */
export interface Bot {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The display name of the bot that is visible to users.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The username of the bot.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The unique username hash identifier for the bot.
   *
   * @public
   */
  uname?: string | undefined;

  /**
   * The public key of the bot used for encryption.
   *
   * @public
   */
  pubkey?: string | undefined;

  /**
   * The current status of the bot (1 for pending, 2 for active).
   *
   * @public
   */
  status?: BotStatus | undefined;

  /**
   * The ID of the security group to which the bot belongs.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * Indicates whether the bot has a password set.
   *
   * @public
   */
  hasChallenge?: boolean | undefined;

  /**
   * Indicates whether the bot is currently suspended.
   *
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * The timestamp of the bot's last login.
   *
   * @public
   */
  lastLogin?: string | undefined;
}

/**
 * Defines the calling feature permissions and settings for users in a security group, controlling what types of calls users can initiate and participate in.
 *
 * @public
 */
export interface CallingSettings {
  /**
   * Specifies whether users can start one-to-one calls.
   *
   * @public
   */
  canStart11Call?: boolean | undefined;

  /**
   * Specifies whether users can make video calls (as opposed to audio-only calls). Valid only when audio call(canStart11Call) is enabled.
   *
   * @public
   */
  canVideoCall?: boolean | undefined;

  /**
   * When enabled, forces all calls to use TCP protocol instead of UDP for network traversal.
   *
   * @public
   */
  forceTcpCall?: boolean | undefined;
}

/**
 * Consent popup configuration displayed to users on login.
 *
 * @public
 */
export interface ConsentPopupConfig {
  /**
   * Whether the consent popup is enabled. When set to true, the popup is displayed to users on login.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Header text displayed at the top of the consent popup. Maximum 100 characters.
   *
   * @public
   */
  header?: string | undefined;

  /**
   * Body content of the consent popup in Markdown format. Maximum 5000 characters.
   *
   * @public
   */
  content?: string | undefined;

  /**
   * Label for the close button on the consent popup. Maximum 20 characters. Defaults to "Acknowledge" if not provided.
   *
   * @public
   */
  closeButtonLabel?: string | undefined;
}

/**
 * @public
 */
export interface CreateBotRequest {
  /**
   * The ID of the Wickr network where the bot will be created.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The username for the bot. This must be unique within the network and follow the network's naming conventions.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The display name for the bot that will be visible to users in the network.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The ID of the security group to which the bot will be assigned.
   *
   * @public
   */
  groupId: string | undefined;

  /**
   * The password for the bot account.
   *
   * @public
   */
  challenge: string | undefined;
}

/**
 * @public
 */
export interface CreateBotResponse {
  /**
   * A message indicating the result of the bot creation operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The unique identifier assigned to the newly created bot.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The ID of the network where the bot was created.
   *
   * @public
   */
  networkId?: string | undefined;

  /**
   * The username of the newly created bot.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The display name of the newly created bot.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The ID of the security group to which the bot was assigned.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotRequest {
  /**
   * The ID of the Wickr network where the data retention bot will be created.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotResponse {
  /**
   * A message indicating that the data retention bot was successfully provisioned.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotChallengeRequest {
  /**
   * The ID of the Wickr network containing the data retention bot.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface CreateDataRetentionBotChallengeResponse {
  /**
   * The newly generated challenge password for the data retention bot.
   *
   * @public
   */
  challenge: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkRequest {
  /**
   * The name for the new network. Must be between 1 and 20 characters.
   *
   * @public
   */
  networkName: string | undefined;

  /**
   * The access level for the network. Valid values are STANDARD or PREMIUM, which determine the features and capabilities available to network members.
   *
   * @public
   */
  accessLevel: AccessLevel | undefined;

  /**
   * Specifies whether to enable a premium free trial for the network. It is optional and has a default value as false. When set to true, the network starts with premium features for a limited trial period.
   *
   * @public
   */
  enablePremiumFreeTrial?: boolean | undefined;

  /**
   * The ARN of the Amazon Web Services KMS customer managed key to use for encrypting sensitive data in the network.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateNetworkResponse {
  /**
   * The unique identifier assigned to the newly created network.
   *
   * @public
   */
  networkId?: string | undefined;

  /**
   * The name of the newly created network.
   *
   * @public
   */
  networkName?: string | undefined;

  /**
   * The ARN of the KMS key being used to encrypt sensitive data in the network.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * Identifies a Amazon Web Services Wickr network by region and network ID, used for configuring permitted networks for global federation.
 *
 * @public
 */
export interface WickrAwsNetworks {
  /**
   * The Amazon Web Services region identifier where the network is hosted (e.g., 'us-east-1').
   *
   * @public
   */
  region: string | undefined;

  /**
   * The network ID of the Wickr Amazon Web Services network.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * Identifies a Wickr enterprise network that is permitted for global federation, allowing users to communicate with members of the specified network.
 *
 * @public
 */
export interface PermittedWickrEnterpriseNetwork {
  /**
   * The domain identifier for the permitted Wickr enterprise network.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The network ID of the permitted Wickr enterprise network.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * Contains the security group configuration settings that can be specified when creating or updating a security group. This is a subset of SecurityGroupSettings containing only the modifiable federation and security settings.
 *
 * @public
 */
export interface SecurityGroupSettingsRequest {
  /**
   * The number of failed password attempts before a user account is locked out.
   *
   * @public
   */
  lockoutThreshold?: number | undefined;

  /**
   * A list of network IDs that are permitted for local federation when federation mode is set to restricted.
   *
   * @public
   */
  permittedNetworks?: string[] | undefined;

  /**
   * Guest users let you work with people outside your organization that only have limited access to Wickr. Only valid when federationMode is set to Global.
   *
   * @public
   */
  enableGuestFederation?: boolean | undefined;

  /**
   * Allow users to securely federate with all Amazon Web Services Wickr networks and Amazon Web Services Enterprise networks.
   *
   * @public
   */
  globalFederation?: boolean | undefined;

  /**
   * The local federation mode. Values: 0 (none), 1 (federated - all networks), 2 (restricted - only permitted networks).
   *
   * @public
   */
  federationMode?: number | undefined;

  /**
   * Enables restricted global federation to limit communication to specific permitted networks only. Requires globalFederation to be enabled.
   *
   * @public
   */
  enableRestrictedGlobalFederation?: boolean | undefined;

  /**
   * A list of permitted Amazon Web Services Wickr networks for restricted global federation.
   *
   * @public
   */
  permittedWickrAwsNetworks?: WickrAwsNetworks[] | undefined;

  /**
   * A list of permitted Wickr Enterprise networks for restricted global federation.
   *
   * @public
   */
  permittedWickrEnterpriseNetworks?: PermittedWickrEnterpriseNetwork[] | undefined;
}

/**
 * @public
 */
export interface CreateSecurityGroupRequest {
  /**
   * The ID of the Wickr network where the security group will be created.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The name for the new security group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The configuration settings for the security group, including permissions, federation settings, and feature controls.
   *
   * @public
   */
  securityGroupSettings: SecurityGroupSettingsRequest | undefined;

  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Defines password complexity requirements for users in a security group, including minimum length and character type requirements.
 *
 * @public
 */
export interface PasswordRequirements {
  /**
   * The minimum number of lowercase letters required in passwords.
   *
   * @public
   */
  lowercase?: number | undefined;

  /**
   * The minimum password length in characters.
   *
   * @public
   */
  minLength?: number | undefined;

  /**
   * The minimum number of numeric characters required in passwords.
   *
   * @public
   */
  numbers?: number | undefined;

  /**
   * The minimum number of special symbol characters required in passwords.
   *
   * @public
   */
  symbols?: number | undefined;

  /**
   * The minimum number of uppercase letters required in passwords.
   *
   * @public
   */
  uppercase?: number | undefined;
}

/**
 * Configuration for the Wickr shredder feature, which writes random data over free memory and disk space on client devices. You can configure your Wickr shredder intensity using the parameters below.
 *
 * > **Note:** Secure Shredder will not write over files that are permanently stored on the device or saved outside of the Wickr client. Wickr Network Administrators are able to disable file downloads within Security Group Settings.
 *
 * @public
 */
export interface ShredderSettings {
  /**
   * Specifies whether users can manually trigger the shredder to delete content.
   *
   * @public
   */
  canProcessManually?: boolean | undefined;

  /**
   * Controls the rate (MB/minute) at which the shredder function runs on clients. Valid Values: Must be one of [0, 20, 60, 100].
   *
   * > **Note:** A higher intensity setting could lead to higher battery usage on mobile devices.
   *
   * @public
   */
  intensity?: number | undefined;
}

/**
 * Comprehensive configuration settings that define all user capabilities, restrictions, and features for members of a security group. These settings control everything from calling permissions to federation settings to security policies.
 *
 * @public
 */
export interface SecurityGroupSettings {
  /**
   * Requires users to reauthenticate every time they return to the application, providing an additional layer of security.
   *
   * @public
   */
  alwaysReauthenticate?: boolean | undefined;

  /**
   * Configuration values for ATAK (Android Team Awareness Kit) package integration, when ATAK is enabled.
   *
   * @public
   */
  atakPackageValues?: string[] | undefined;

  /**
   * The calling feature permissions and settings that control what types of calls users can initiate and participate in.
   *
   * @public
   */
  calling?: CallingSettings | undefined;

  /**
   * Enables automatic checking for Wickr client updates to ensure users stay current with the latest version.
   *
   * @public
   */
  checkForUpdates?: boolean | undefined;

  /**
   * Enables ATAK (Android Team Awareness Kit) integration for tactical communication and situational awareness.
   *
   * @public
   */
  enableAtak?: boolean | undefined;

  /**
   * Allow users to report crashes.
   *
   * @public
   */
  enableCrashReports?: boolean | undefined;

  /**
   * Specifies whether users can download files from messages to their devices.
   *
   * @public
   */
  enableFileDownload?: boolean | undefined;

  /**
   * Allows users to communicate with guest users from other Wickr networks and federated external networks.
   *
   * @public
   */
  enableGuestFederation?: boolean | undefined;

  /**
   * Enables message preview text in push notifications, allowing users to see message content before opening the app.
   *
   * @public
   */
  enableNotificationPreview?: boolean | undefined;

  /**
   * Allow users to avoid censorship when they are geo-blocked or have network limitations.
   *
   * @public
   */
  enableOpenAccessOption?: boolean | undefined;

  /**
   * Enables restricted global federation, limiting external communication to only specified permitted networks.
   *
   * @public
   */
  enableRestrictedGlobalFederation?: boolean | undefined;

  /**
   * Enables file sharing capabilities, allowing users to send and receive files in conversations.
   *
   * @public
   */
  filesEnabled?: boolean | undefined;

  /**
   * Defines the number of failed login attempts before data stored on the device is reset. Should be less than lockoutThreshold.
   *
   * @public
   */
  forceDeviceLockout?: number | undefined;

  /**
   * Automatically enable and enforce Wickr open access on all devices. Valid only if enableOpenAccessOption settings is enabled.
   *
   * @public
   */
  forceOpenAccess?: boolean | undefined;

  /**
   * Allow user approved bots to read messages in rooms without using a slash command.
   *
   * @public
   */
  forceReadReceipts?: boolean | undefined;

  /**
   * Allows users to communicate with users on other Wickr instances (Wickr Enterprise) outside the current network.
   *
   * @public
   */
  globalFederation?: boolean | undefined;

  /**
   * Enforces a two-factor authentication when a user adds a new device to their account.
   *
   * @public
   */
  isAtoEnabled?: boolean | undefined;

  /**
   * Enables automatic preview of links shared in messages, showing webpage thumbnails and descriptions.
   *
   * @public
   */
  isLinkPreviewEnabled?: boolean | undefined;

  /**
   * Allows map integration in location sharing, enabling users to view shared locations on interactive maps. Only allowed when location setting is enabled.
   *
   * @public
   */
  locationAllowMaps?: boolean | undefined;

  /**
   * Enables location sharing features, allowing users to share their current location with others.
   *
   * @public
   */
  locationEnabled?: boolean | undefined;

  /**
   * The maximum file size in bytes that will be automatically downloaded without user confirmation. Only allowed if fileDownload is enabled. Valid Values [512000 (low_quality), 7340032 (high_quality) ]
   *
   * @public
   */
  maxAutoDownloadSize?: number | undefined;

  /**
   * The maximum burn-on-read (BOR) time in seconds, which determines how long messages remain visible before auto-deletion after being read.
   *
   * @public
   */
  maxBor?: number | undefined;

  /**
   * The maximum time-to-live (TTL) in seconds for messages, after which they will be automatically deleted from all devices.
   *
   * @public
   */
  maxTtl?: number | undefined;

  /**
   * Enables message forwarding, allowing users to forward messages from one conversation to another.
   *
   * @public
   */
  messageForwardingEnabled?: boolean | undefined;

  /**
   * The password complexity requirements that users must follow when creating or changing passwords.
   *
   * @public
   */
  passwordRequirements?: PasswordRequirements | undefined;

  /**
   * Enables presence indicators that show whether users are online, away, or offline.
   *
   * @public
   */
  presenceEnabled?: boolean | undefined;

  /**
   * A list of pre-defined quick response message templates that users can send with a single tap.
   *
   * @public
   */
  quickResponses?: string[] | undefined;

  /**
   * Users will get a master recovery key that can be used to securely sign in to their Wickr account without having access to their primary device for authentication. Available in SSO enabled network.
   *
   * @public
   */
  showMasterRecoveryKey?: boolean | undefined;

  /**
   * The message shredder configuration that controls secure deletion of messages and files from devices.
   *
   * @public
   */
  shredder?: ShredderSettings | undefined;

  /**
   * The duration for which users SSO session remains inactive before automatically logging them out for security. Available in SSO enabled network.
   *
   * @public
   */
  ssoMaxIdleMinutes?: number | undefined;

  /**
   * Maximum session duration in minutes for non-SSO users. Set to 0 to disable. Valid range is 60 to 525600 (1 hour to 365 days).
   *
   * @public
   */
  maxNonSsoSessionMinutes?: number | undefined;

  /**
   * The local federation mode controlling how users can communicate with other networks. Values: 0 (none), 1 (federated), 2 (restricted).
   *
   * @public
   */
  federationMode?: number | undefined;

  /**
   * The number of failed password attempts before a user account is locked out.
   *
   * @public
   */
  lockoutThreshold?: number | undefined;

  /**
   * A list of network IDs that are permitted for local federation when federation mode is set to restricted.
   *
   * @public
   */
  permittedNetworks?: string[] | undefined;

  /**
   * A list of permitted Wickr networks for global federation, restricting communication to specific approved networks.
   *
   * @public
   */
  permittedWickrAwsNetworks?: WickrAwsNetworks[] | undefined;

  /**
   * A list of permitted Wickr Enterprise networks for global federation, restricting communication to specific approved networks.
   *
   * @public
   */
  permittedWickrEnterpriseNetworks?: PermittedWickrEnterpriseNetwork[] | undefined;
}

/**
 * Represents a security group in a Wickr network, containing membership statistics, configuration, and all permission settings that apply to its members.
 *
 * @public
 */
export interface SecurityGroup {
  /**
   * The number of active user members currently in the security group.
   *
   * @public
   */
  activeMembers: number | undefined;

  /**
   * The number of bot members currently in the security group.
   *
   * @public
   */
  botMembers: number | undefined;

  /**
   * The GUID of the Active Directory group associated with this security group, if synchronized with LDAP.
   *
   * @public
   */
  activeDirectoryGuid?: string | undefined;

  /**
   * The unique identifier of the security group.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Indicates whether this is the default security group for the network. Each network has only one default group.
   *
   * @public
   */
  isDefault: boolean | undefined;

  /**
   * The human-readable name of the security group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The timestamp when the security group was last modified, specified in epoch seconds.
   *
   * @public
   */
  modified: number | undefined;

  /**
   * The comprehensive configuration settings that define capabilities and restrictions for members of this security group.
   *
   * @public
   */
  securityGroupSettings: SecurityGroupSettings | undefined;
}

/**
 * @public
 */
export interface CreateSecurityGroupResponse {
  /**
   * The details of the newly created security group, including its ID, name, and settings.
   *
   * @public
   */
  securityGroup: SecurityGroup | undefined;
}

/**
 * @public
 */
export interface DeleteBotRequest {
  /**
   * The ID of the Wickr network from which the bot will be deleted.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the bot to be deleted.
   *
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotResponse {
  /**
   * A message indicating the result of the bot deletion operation.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataRetentionBotRequest {
  /**
   * The ID of the Wickr network from which the data retention bot will be deleted.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataRetentionBotResponse {
  /**
   * A message indicating that the data retention bot and all associated data were successfully deleted.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkRequest {
  /**
   * The ID of the Wickr network to delete.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A unique identifier for this request to ensure idempotency. If you retry a request with the same client token, the service will return the same response without attempting to delete the network again.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteNetworkResponse {
  /**
   * A message indicating that the network deletion has been initiated successfully.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupRequest {
  /**
   * The ID of the Wickr network from which the security group will be deleted.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the security group to delete.
   *
   * @public
   */
  groupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityGroupResponse {
  /**
   * A message indicating the result of the security group deletion operation.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The ID of the network from which the security group was deleted.
   *
   * @public
   */
  networkId?: string | undefined;

  /**
   * The ID of the security group that was deleted.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface GetBotRequest {
  /**
   * The ID of the Wickr network containing the bot.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the bot to retrieve.
   *
   * @public
   */
  botId: string | undefined;
}

/**
 * @public
 */
export interface GetBotResponse {
  /**
   * The unique identifier of the bot.
   *
   * @public
   */
  botId?: string | undefined;

  /**
   * The display name of the bot that is visible to users.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The username of the bot.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The unique username hash identifier for the bot.
   *
   * @public
   */
  uname?: string | undefined;

  /**
   * The public key of the bot used for encryption.
   *
   * @public
   */
  pubkey?: string | undefined;

  /**
   * The current status of the bot (1 for pending, 2 for active).
   *
   * @public
   */
  status?: BotStatus | undefined;

  /**
   * The ID of the security group to which the bot belongs.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * Indicates whether the bot has a password set.
   *
   * @public
   */
  hasChallenge?: boolean | undefined;

  /**
   * Indicates whether the bot is currently suspended.
   *
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * The timestamp of the bot's last login.
   *
   * @public
   */
  lastLogin?: string | undefined;
}

/**
 * @public
 */
export interface GetBotsCountRequest {
  /**
   * The ID of the Wickr network for which to retrieve bot counts.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetBotsCountResponse {
  /**
   * The number of bots with pending status (invited but not yet activated).
   *
   * @public
   */
  pending: number | undefined;

  /**
   * The number of bots with active status.
   *
   * @public
   */
  active: number | undefined;

  /**
   * The total number of bots in the network (active and pending).
   *
   * @public
   */
  total: number | undefined;
}

/**
 * @public
 */
export interface GetDataRetentionBotRequest {
  /**
   * The ID of the Wickr network containing the data retention bot.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetDataRetentionBotResponse {
  /**
   * The name of the data retention bot.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * Indicates whether a data retention bot exists in the network.
   *
   * @public
   */
  botExists?: boolean | undefined;

  /**
   * Indicates whether the data retention bot is active and operational.
   *
   * @public
   */
  isBotActive?: boolean | undefined;

  /**
   * Indicates whether the data retention bot has been registered with the network.
   *
   * @public
   */
  isDataRetentionBotRegistered?: boolean | undefined;

  /**
   * Indicates whether the data retention service is enabled for the network.
   *
   * @public
   */
  isDataRetentionServiceEnabled?: boolean | undefined;

  /**
   * Indicates whether the public key message has been acknowledged by the bot.
   *
   * @public
   */
  isPubkeyMsgAcked?: boolean | undefined;
}

/**
 * @public
 */
export interface GetGuestUserHistoryCountRequest {
  /**
   * The ID of the Wickr network for which to retrieve guest user history.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * Contains the count of guest users for a specific billing period, used for tracking historical guest user activity.
 *
 * @public
 */
export interface GuestUserHistoryCount {
  /**
   * The month and billing period in YYYY_MM format (e.g., '2024_01').
   *
   * @public
   */
  month: string | undefined;

  /**
   * The number of guest users who have communicated with your Wickr network during this billing period.
   *
   * @public
   */
  count: string | undefined;
}

/**
 * @public
 */
export interface GetGuestUserHistoryCountResponse {
  /**
   * A list of historical guest user counts, organized by month and billing period.
   *
   * @public
   */
  history: GuestUserHistoryCount[] | undefined;
}

/**
 * @public
 */
export interface GetNetworkRequest {
  /**
   * The ID of the Wickr network to retrieve.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkResponse {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The name of the network.
   *
   * @public
   */
  networkName: string | undefined;

  /**
   * The access level of the network (STANDARD or PREMIUM), which determines available features and capabilities.
   *
   * @public
   */
  accessLevel: AccessLevel | undefined;

  /**
   * The Amazon Web Services account ID that owns the network.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the network.
   *
   * @public
   */
  networkArn: string | undefined;

  /**
   * The current standing or status of the network.
   *
   * @public
   */
  standing?: number | undefined;

  /**
   * The expiration date and time for the network's free trial period, if applicable.
   *
   * @public
   */
  freeTrialExpiration?: string | undefined;

  /**
   * The SSO redirect URI migration state, managed by the SSO redirect migration wizard. Values: 0 (not started), 1 (in progress), or 2 (completed).
   *
   * @public
   */
  migrationState?: number | undefined;

  /**
   * The ARN of the Amazon Web Services KMS customer managed key used for encrypting sensitive data in the network.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkSettingsRequest {
  /**
   * The ID of the Wickr network whose settings will be retrieved.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * Represents a single network-level configuration setting with its name, value, and data type. Settings control network-wide behaviors and features.
 *
 * @public
 */
export interface Setting {
  /**
   * The name of the network setting (e.g., 'enableClientMetrics', 'dataRetention').
   *
   * @public
   */
  optionName: string | undefined;

  /**
   * The current value of the setting as a string. Boolean values are represented as 'true' or 'false'.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The data type of the setting value (e.g., 'boolean', 'string', 'number').
   *
   * @public
   */
  type: string | undefined;
}

/**
 * @public
 */
export interface GetNetworkSettingsResponse {
  /**
   * A list of network settings, where each setting includes a name, value, and type.
   *
   * @public
   */
  settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface GetOidcInfoRequest {
  /**
   * The ID of the Wickr network whose OIDC configuration will be retrieved.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The OAuth client ID for retrieving access tokens (optional).
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The authorization code for retrieving access tokens (optional).
   *
   * @public
   */
  code?: string | undefined;

  /**
   * The OAuth grant type for retrieving access tokens (optional).
   *
   * @public
   */
  grantType?: string | undefined;

  /**
   * The redirect URI for the OAuth flow (optional).
   *
   * @public
   */
  redirectUri?: string | undefined;

  /**
   * The URL for the OIDC provider (optional).
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The OAuth client secret for retrieving access tokens (optional).
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * The PKCE code verifier for enhanced security in the OAuth flow (optional).
   *
   * @public
   */
  codeVerifier?: string | undefined;

  /**
   * The CA certificate for secure communication with the OIDC provider (optional).
   *
   * @public
   */
  certificate?: string | undefined;
}

/**
 * Contains the OpenID Connect (OIDC) configuration information for Single Sign-On (SSO) authentication, including identity provider settings and client credentials.
 *
 * @public
 */
export interface OidcConfigInfo {
  /**
   * The name of the OIDC application as registered with the identity provider.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The OAuth client ID assigned by the identity provider for authentication requests.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * Custom identifier your end users will use to sign in with SSO.
   *
   * @public
   */
  companyId: string | undefined;

  /**
   * The OAuth scopes requested from the identity provider, which determine what user information is accessible (e.g., 'openid profile email').
   *
   * @public
   */
  scopes: string | undefined;

  /**
   * The issuer URL of the identity provider, which serves as the base URL for OIDC endpoints and configuration discovery.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The OAuth client secret used to authenticate the application with the identity provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * An additional secret credential used by the identity provider for authentication.
   *
   * @public
   */
  secret?: string | undefined;

  /**
   * The callback URL where the identity provider redirects users after successful authentication. This URL must be registered with the identity provider.
   *
   * @public
   */
  redirectUrl?: string | undefined;

  /**
   * The claim field from the OIDC token to use as the unique user identifier (e.g., 'email', 'sub', or a custom claim).
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * A custom field mapping to extract the username from the OIDC token when the standard username claim is insufficient.
   *
   * @public
   */
  customUsername?: string | undefined;

  /**
   * The X.509 CA certificate for validating SSL/TLS connections to the identity provider when using self-signed or enterprise certificates.
   *
   * @public
   */
  caCertificate?: string | undefined;

  /**
   * The unique identifier for the registered OIDC application. Valid range is 1-10.
   *
   * @public
   */
  applicationId?: number | undefined;

  /**
   * The grace period in minutes before the SSO token expires when the system should proactively refresh the token to maintain seamless user access.
   *
   * @public
   */
  ssoTokenBufferMinutes?: number | undefined;

  /**
   * Additional authentication parameters to include in the OIDC authorization request as a query string. Useful for provider-specific extensions.
   *
   * @public
   */
  extraAuthParams?: string | undefined;
}

/**
 * Contains OAuth token information returned from the identity provider, including access tokens, ID tokens, and PKCE parameters used for secure authentication.
 *
 * @public
 */
export interface OidcTokenInfo {
  /**
   * The PKCE (Proof Key for Code Exchange) code verifier, a cryptographically random string used to enhance security in the OAuth flow.
   *
   * @public
   */
  codeVerifier?: string | undefined;

  /**
   * The PKCE code challenge, a transformed version of the code verifier sent during the authorization request for verification.
   *
   * @public
   */
  codeChallenge?: string | undefined;

  /**
   * The OAuth access token that can be used to access protected resources on behalf of the authenticated user.
   *
   * @public
   */
  accessToken?: string | undefined;

  /**
   * The OpenID Connect ID token containing user identity information and authentication context as a signed JWT.
   *
   * @public
   */
  idToken?: string | undefined;

  /**
   * The OAuth refresh token that can be used to obtain new access tokens without requiring the user to re-authenticate.
   *
   * @public
   */
  refreshToken?: string | undefined;

  /**
   * The type of access token issued, typically 'Bearer', which indicates how the token should be used in API requests.
   *
   * @public
   */
  tokenType?: string | undefined;

  /**
   * The lifetime of the access token in seconds, indicating when the token will expire and need to be refreshed.
   *
   * @public
   */
  expiresIn?: number | undefined;
}

/**
 * @public
 */
export interface GetOidcInfoResponse {
  /**
   * The OpenID Connect configuration information for the network, including issuer, client ID, scopes, and other SSO settings.
   *
   * @public
   */
  openidConnectInfo?: OidcConfigInfo | undefined;

  /**
   * OAuth token information including access token, refresh token, and expiration details (only present if token parameters were provided in the request).
   *
   * @public
   */
  tokenInfo?: OidcTokenInfo | undefined;
}

/**
 * @public
 */
export interface GetOpentdfConfigRequest {
  /**
   * The ID of the Wickr network for which OpenTDF integration will be retrieved.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetOpentdfConfigResponse {
  /**
   * The OIDC client ID used for authenticating with the OpenTDF provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The domain of the OpenTDF server.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The OIDC client secret used for authenticating with the OpenTDF provider.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The provider of the OpenTDF platform.
   *
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupRequest {
  /**
   * The ID of the Wickr network containing the security group.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the security group to retrieve.
   *
   * @public
   */
  groupId: string | undefined;
}

/**
 * @public
 */
export interface GetSecurityGroupResponse {
  /**
   * The detailed information about the security group, including all its settings and member counts.
   *
   * @public
   */
  securityGroup: SecurityGroup | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * The ID of the Wickr network containing the user.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the user to retrieve.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The start time for filtering the user's last activity. Only activity after this timestamp will be considered. Time is specified in epoch seconds.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time for filtering the user's last activity. Only activity before this timestamp will be considered. Time is specified in epoch seconds.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * The unique identifier of the user.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The first name of the user.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The last name of the user.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * The email address or username of the user.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * Indicates whether the user has administrator privileges in the network.
   *
   * @public
   */
  isAdmin?: boolean | undefined;

  /**
   * Indicates whether the user is currently suspended.
   *
   * @public
   */
  suspended?: boolean | undefined;

  /**
   * The current status of the user (1 for pending, 2 for active).
   *
   * @public
   */
  status?: number | undefined;

  /**
   * The timestamp of the user's last activity in the network, specified in epoch seconds.
   *
   * @public
   */
  lastActivity?: number | undefined;

  /**
   * The timestamp of the user's last login to the network, specified in epoch seconds.
   *
   * @public
   */
  lastLogin?: number | undefined;

  /**
   * A list of security group IDs to which the user belongs.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface GetUsersCountRequest {
  /**
   * The ID of the Wickr network for which to retrieve user counts.
   *
   * @public
   */
  networkId: string | undefined;
}

/**
 * @public
 */
export interface GetUsersCountResponse {
  /**
   * The number of users with pending status (invited but not yet accepted).
   *
   * @public
   */
  pending: number | undefined;

  /**
   * The number of users with active status in the network.
   *
   * @public
   */
  active: number | undefined;

  /**
   * The number of users who have rejected network invitations.
   *
   * @public
   */
  rejected: number | undefined;

  /**
   * The number of additional users that can be added to the network while maintaining premium free trial eligibility.
   *
   * @public
   */
  remaining: number | undefined;

  /**
   * The total number of users in the network (active and pending combined).
   *
   * @public
   */
  total: number | undefined;
}

/**
 * Represents a guest user who has accessed the network from a federated Wickr network.
 *
 * @public
 */
export interface GuestUser {
  /**
   * The billing period when this guest user accessed the network (e.g., '2024-01').
   *
   * @public
   */
  billingPeriod: string | undefined;

  /**
   * The username of the guest user.
   *
   * @public
   */
  username: string | undefined;

  /**
   * The unique username hash identifier for the guest user.
   *
   * @public
   */
  usernameHash: string | undefined;
}

/**
 * @public
 */
export interface ListBlockedGuestUsersRequest {
  /**
   * The ID of the Wickr network from which to list blocked guest users.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The maximum number of blocked guest users to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * The field to sort blocked guest users by. Accepted values include 'username', 'admin', and 'modified'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * Filter results to only include blocked guest users with usernames matching this value.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * Filter results to only include blocked guest users that were blocked by this administrator.
   *
   * @public
   */
  admin?: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBlockedGuestUsersResponse {
  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of blocked guest user objects within the current page.
   *
   * @public
   */
  blocklist: BlockedGuestUser[] | undefined;
}

/**
 * @public
 */
export interface ListBotsRequest {
  /**
   * The ID of the Wickr network from which to list bots.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of bots to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The fields to sort bots by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', 'displayName', 'status', and 'groupId'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * Filter results to only include bots with display names matching this value.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * Filter results to only include bots with usernames matching this value.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * Filter results to only include bots with this status (1 for pending, 2 for active).
   *
   * @public
   */
  status?: BotStatus | undefined;

  /**
   * Filter results to only include bots belonging to this security group.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * A list of bot objects matching the specified filters and within the current page.
   *
   * @public
   */
  bots: Bot[] | undefined;

  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDevicesForUserRequest {
  /**
   * The ID of the Wickr network containing the user.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the user whose devices will be listed.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of devices to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The fields to sort devices by. Multiple fields can be specified by separating them with '+'. Accepted values include 'lastlogin', 'type', 'suspend', and 'created'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;
}

/**
 * @public
 */
export interface ListDevicesForUserResponse {
  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of device objects associated with the user within the current page.
   *
   * @public
   */
  devices: BasicDeviceObject[] | undefined;
}

/**
 * @public
 */
export interface ListGuestUsersRequest {
  /**
   * The ID of the Wickr network from which to list guest users.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The maximum number of guest users to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * The field to sort guest users by. Accepted values include 'username' and 'billingPeriod'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * Filter results to only include guest users with usernames matching this value.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * Filter results to only include guest users from this billing period (e.g., '2024-01').
   *
   * @public
   */
  billingPeriod?: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGuestUsersResponse {
  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of guest user objects within the current page.
   *
   * @public
   */
  guestlist: GuestUser[] | undefined;
}

/**
 * @public
 */
export interface ListNetworksRequest {
  /**
   * The maximum number of networks to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The field to sort networks by. Accepted values are 'networkId' and 'networkName'. Default is 'networkId'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a Wickr network with all its configuration and status information.
 *
 * @public
 */
export interface Network {
  /**
   * The unique identifier of the network.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The name of the network.
   *
   * @public
   */
  networkName: string | undefined;

  /**
   * The access level of the network (STANDARD or PREMIUM), which determines available features and capabilities.
   *
   * @public
   */
  accessLevel: AccessLevel | undefined;

  /**
   * The Amazon Web Services account ID that owns the network.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the network.
   *
   * @public
   */
  networkArn: string | undefined;

  /**
   * The current standing or status of the network.
   *
   * @public
   */
  standing?: number | undefined;

  /**
   * The expiration date and time for the network's free trial period, if applicable.
   *
   * @public
   */
  freeTrialExpiration?: string | undefined;

  /**
   * The SSO redirect URI migration state, managed by the SSO redirect migration wizard. Values: 0 (not started), 1 (in progress), or 2 (completed).
   *
   * @public
   */
  migrationState?: number | undefined;

  /**
   * The ARN of the Amazon Web Services KMS customer managed key used for encrypting sensitive data in the network.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListNetworksResponse {
  /**
   * A list of network objects for the Amazon Web Services account.
   *
   * @public
   */
  networks: Network[] | undefined;

  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupsRequest {
  /**
   * The ID of the Wickr network from which to list security groups.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of security groups to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The field to sort security groups by. Accepted values include 'id' and 'name'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupsResponse {
  /**
   * A list of security group objects in the current page.
   *
   * @public
   */
  securityGroups?: SecurityGroup[] | undefined;

  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupUsersRequest {
  /**
   * The ID of the Wickr network containing the security group.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the security group whose users will be listed.
   *
   * @public
   */
  groupId: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of users to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The field to sort users by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', and 'lastName'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;
}

/**
 * @public
 */
export interface ListSecurityGroupUsersResponse {
  /**
   * A list of user objects belonging to the security group within the current page.
   *
   * @public
   */
  users: User[] | undefined;

  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The ID of the Wickr network from which to list users.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The token for retrieving the next page of results. This is returned from a previous request when there are more results available.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of users to return in a single page. Valid range is 1-100. Default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The fields to sort users by. Multiple fields can be specified by separating them with '+'. Accepted values include 'username', 'firstName', 'lastName', 'status', and 'groupId'.
   *
   * @public
   */
  sortFields?: string | undefined;

  /**
   * The direction to sort results. Valid values are 'ASC' (ascending) or 'DESC' (descending). Default is 'DESC'.
   *
   * @public
   */
  sortDirection?: SortDirection | undefined;

  /**
   * Filter results to only include users with first names matching this value.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * Filter results to only include users with last names matching this value.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * Filter results to only include users with usernames matching this value.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * Filter results to only include users with this status (1 for pending, 2 for active).
   *
   * @public
   */
  status?: UserStatus | undefined;

  /**
   * Filter results to only include users belonging to this security group.
   *
   * @public
   */
  groupId?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * The token to use for retrieving the next page of results. If this is not present, there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of user objects matching the specified filters and within the current page.
   *
   * @public
   */
  users?: User[] | undefined;
}

/**
 * Configuration for read receipts at the network level, controlling whether senders can see when their messages have been read.
 *
 * @public
 */
export interface ReadReceiptConfig {
  /**
   * The read receipt status mode for the network.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * Contains network-level configuration settings that apply to all users and security groups within a Wickr network.
 *
 * @public
 */
export interface NetworkSettings {
  /**
   * Allows Wickr clients to send anonymized performance and usage metrics to the Wickr backend server for service improvement and troubleshooting.
   *
   * @public
   */
  enableClientMetrics?: boolean | undefined;

  /**
   * Configuration for read receipts at the network level, controlling the default behavior for whether senders can see when their messages have been read.
   *
   * @public
   */
  readReceiptConfig?: ReadReceiptConfig | undefined;

  /**
   * Indicates whether the data retention feature is enabled for the network. When true, messages are captured by the data retention bot for compliance and archiving purposes.
   *
   * @public
   */
  dataRetention?: boolean | undefined;

  /**
   * Configuration for OpenTDF integration at the network level, enforcing ABAC decision making when operating in TDF enabled rooms.
   *
   * @public
   */
  enableTrustedDataFormat?: boolean | undefined;

  /**
   * Consent popup configuration for the network, displayed to users on login.
   *
   * @public
   */
  consentPopup?: ConsentPopupConfig | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigRequest {
  /**
   * The ID of the Wickr network for which OIDC will be configured.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * Custom identifier your end users will use to sign in with SSO.
   *
   * @public
   */
  companyId: string | undefined;

  /**
   * A custom field mapping to extract the username from the OIDC token (optional).
   *
   * > **Note:** The customUsername is only required if you use something other than email as the username field.
   *
   * @public
   */
  customUsername?: string | undefined;

  /**
   * Additional authentication parameters to include in the OIDC flow (optional).
   *
   * @public
   */
  extraAuthParams?: string | undefined;

  /**
   * The issuer URL of the OIDC provider (e.g., 'https://login.example.com').
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The OAuth scopes to request from the OIDC provider (e.g., 'openid profile email').
   *
   * @public
   */
  scopes: string | undefined;

  /**
   * The client secret for authenticating with the OIDC provider (optional).
   *
   * @public
   */
  secret?: string | undefined;

  /**
   * The buffer time in minutes before the SSO token expires to refresh it (optional).
   *
   * @public
   */
  ssoTokenBufferMinutes?: number | undefined;

  /**
   * Unique identifier provided by your identity provider to authenticate the access request. Also referred to as clientID.
   *
   * @public
   */
  userId?: string | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigResponse {
  /**
   * The name of the registered OIDC application.
   *
   * @public
   */
  applicationName?: string | undefined;

  /**
   * The OAuth client ID assigned to the application.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * Custom identifier your end users will use to sign in with SSO.
   *
   * @public
   */
  companyId: string | undefined;

  /**
   * The OAuth scopes configured for the application.
   *
   * @public
   */
  scopes: string | undefined;

  /**
   * The issuer URL of the OIDC provider.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The OAuth client secret for the application.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * The client secret for authenticating with the OIDC provider.
   *
   * @public
   */
  secret?: string | undefined;

  /**
   * The redirect URL configured for the OAuth flow.
   *
   * @public
   */
  redirectUrl?: string | undefined;

  /**
   * The claim field being used as the user identifier.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The custom field mapping used for extracting the username.
   *
   * @public
   */
  customUsername?: string | undefined;

  /**
   * The CA certificate used for secure communication with the OIDC provider.
   *
   * @public
   */
  caCertificate?: string | undefined;

  /**
   * The unique identifier for the registered OIDC application.
   *
   * @public
   */
  applicationId?: number | undefined;

  /**
   * The buffer time in minutes before the SSO token expires.
   *
   * @public
   */
  ssoTokenBufferMinutes?: number | undefined;

  /**
   * The additional authentication parameters configured for the OIDC flow.
   *
   * @public
   */
  extraAuthParams?: string | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigTestRequest {
  /**
   * The ID of the Wickr network for which the OIDC configuration will be tested.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * Additional authentication parameters to include in the test (optional).
   *
   * @public
   */
  extraAuthParams?: string | undefined;

  /**
   * The issuer URL of the OIDC provider to test.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The OAuth scopes to test with the OIDC provider.
   *
   * @public
   */
  scopes: string | undefined;

  /**
   * The CA certificate for secure communication with the OIDC provider (optional).
   *
   * @public
   */
  certificate?: string | undefined;
}

/**
 * @public
 */
export interface RegisterOidcConfigTestResponse {
  /**
   * The token endpoint URL discovered from the OIDC provider.
   *
   * @public
   */
  tokenEndpoint?: string | undefined;

  /**
   * The user info endpoint URL discovered from the OIDC provider.
   *
   * @public
   */
  userinfoEndpoint?: string | undefined;

  /**
   * The OAuth response types supported by the OIDC provider.
   *
   * @public
   */
  responseTypesSupported?: string[] | undefined;

  /**
   * The OAuth scopes supported by the OIDC provider.
   *
   * @public
   */
  scopesSupported?: string[] | undefined;

  /**
   * The issuer URL confirmed by the OIDC provider.
   *
   * @public
   */
  issuer?: string | undefined;

  /**
   * The authorization endpoint URL discovered from the OIDC provider.
   *
   * @public
   */
  authorizationEndpoint?: string | undefined;

  /**
   * The end session endpoint URL for logging out users from the OIDC provider.
   *
   * @public
   */
  endSessionEndpoint?: string | undefined;

  /**
   * The logout endpoint URL for terminating user sessions.
   *
   * @public
   */
  logoutEndpoint?: string | undefined;

  /**
   * The OAuth grant types supported by the OIDC provider.
   *
   * @public
   */
  grantTypesSupported?: string[] | undefined;

  /**
   * The token revocation endpoint URL for invalidating tokens.
   *
   * @public
   */
  revocationEndpoint?: string | undefined;

  /**
   * The authentication methods supported by the token endpoint.
   *
   * @public
   */
  tokenEndpointAuthMethodsSupported?: string[] | undefined;

  /**
   * Indicates whether the provider supports Microsoft multi-refresh tokens.
   *
   * @public
   */
  microsoftMultiRefreshToken?: boolean | undefined;
}

/**
 * @public
 */
export interface RegisterOpentdfConfigRequest {
  /**
   * The ID of the Wickr network for which OpenTDF integration will be configured.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The OIDC client ID used for authenticating with the OpenTDF provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The OIDC client secret used for authenticating with the OpenTDF provider
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The domain of the OpenTDF server.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The provider of the OpenTDF platform.
   *
   * > **Note:** Currently only Virtru is supported as the OpenTDF provider.
   *
   * @public
   */
  provider: string | undefined;

  /**
   * Perform dry-run test connection of OpenTDF configuration (optional).
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface RegisterOpentdfConfigResponse {
  /**
   * The OIDC client ID used for authenticating with the OpenTDF provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The domain of the OpenTDF server.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The OIDC client secret used for authenticating with the OpenTDF provider.
   *
   * @public
   */
  clientSecret: string | undefined;

  /**
   * The provider of the OpenTDF platform.
   *
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface UpdateBotRequest {
  /**
   * The ID of the Wickr network containing the bot to update.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the bot to update.
   *
   * @public
   */
  botId: string | undefined;

  /**
   * The new display name for the bot.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The ID of the new security group to assign the bot to.
   *
   * @public
   */
  groupId?: string | undefined;

  /**
   * The new password for the bot account.
   *
   * @public
   */
  challenge?: string | undefined;

  /**
   * Set to true to suspend the bot or false to unsuspend it. Omit this field for standard updates that don't affect suspension status.
   *
   * @public
   */
  suspend?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateBotResponse {
  /**
   * A message indicating the result of the bot update operation.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataRetentionRequest {
  /**
   * The ID of the Wickr network containing the data retention bot.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The action to perform. Valid values are 'ENABLE' (to enable the data retention service), 'DISABLE' (to disable the service), or 'PUBKEY_MSG_ACK' (to acknowledge the public key message).
   *
   * @public
   */
  actionType: DataRetentionActionType | undefined;
}

/**
 * @public
 */
export interface UpdateDataRetentionResponse {
  /**
   * A message indicating the result of the update operation.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGuestUserRequest {
  /**
   * The ID of the Wickr network where the guest user's status will be updated.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The username hash (unique identifier) of the guest user to update.
   *
   * @public
   */
  usernameHash: string | undefined;

  /**
   * Set to true to block the guest user or false to unblock them.
   *
   * @public
   */
  block: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateGuestUserResponse {
  /**
   * A message indicating the result of the update operation.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkRequest {
  /**
   * The ID of the Wickr network to update.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The new name for the network. Must be between 1 and 20 characters.
   *
   * @public
   */
  networkName: string | undefined;

  /**
   * A unique identifier for this request to ensure idempotency.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN of the Amazon Web Services KMS customer managed key to use for encrypting sensitive data in the network.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkResponse {
  /**
   * A message indicating that the network was updated successfully.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsRequest {
  /**
   * The ID of the Wickr network whose settings will be updated.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * A map of setting names to their new values. Each setting should be provided with its appropriate type (boolean, string, number, etc.).
   *
   * @public
   */
  settings: NetworkSettings | undefined;
}

/**
 * @public
 */
export interface UpdateNetworkSettingsResponse {
  /**
   * A list of the updated network settings, showing the new values for each modified setting.
   *
   * @public
   */
  settings: Setting[] | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupRequest {
  /**
   * The ID of the Wickr network containing the security group to update.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the security group to update.
   *
   * @public
   */
  groupId: string | undefined;

  /**
   * The new name for the security group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated configuration settings for the security group.
   *
   * Federation mode - 0 (Local federation), 1 (Restricted federation), 2 (Global federation)
   *
   * @public
   */
  securityGroupSettings?: SecurityGroupSettings | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityGroupResponse {
  /**
   * The updated security group details, including the new settings.
   *
   * @public
   */
  securityGroup: SecurityGroup | undefined;
}

/**
 * Contains the modifiable details for updating an existing user, including name, password, security group membership, and invitation settings.
 *
 * > **Note:** A user can only be assigned to a single security group. Attempting to add a user to multiple security groups is not supported and will result in an error.
 *
 * @public
 */
export interface UpdateUserDetails {
  /**
   * The new first name for the user.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The new last name for the user.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * The new username or email address for the user.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The updated list of security group IDs to which the user should belong.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * A new custom invite code for the user.
   *
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * The new time-to-live for the invite code in days.
   *
   * @public
   */
  inviteCodeTtl?: number | undefined;

  /**
   * Indicates whether the user can be verified through a custom invite code.
   *
   * @public
   */
  codeValidation?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The ID of the Wickr network containing the user to update.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The unique identifier of the user to update.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * An object containing the user details to be updated, such as name, password, security groups, and invite code settings.
   *
   * @public
   */
  userDetails?: UpdateUserDetails | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The unique identifier of the updated user.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The ID of the network where the user was updated.
   *
   * @public
   */
  networkId: string | undefined;

  /**
   * The list of security group IDs to which the user now belongs after the update.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The updated first name of the user.
   *
   * @public
   */
  firstName?: string | undefined;

  /**
   * The updated last name of the user.
   *
   * @public
   */
  lastName?: string | undefined;

  /**
   * The middle name of the user (currently not used).
   *
   * @public
   */
  middleName?: string | undefined;

  /**
   * Indicates whether the user is suspended after the update.
   *
   * @public
   */
  suspended: boolean | undefined;

  /**
   * The timestamp when the user was last modified, specified in epoch seconds.
   *
   * @public
   */
  modified?: number | undefined;

  /**
   * The user's status after the update.
   *
   * @public
   */
  status?: number | undefined;

  /**
   * The updated invite code for the user, if applicable.
   *
   * @public
   */
  inviteCode?: string | undefined;

  /**
   * The expiration time of the user's invite code, specified in epoch seconds.
   *
   * @public
   */
  inviteExpiration?: number | undefined;

  /**
   * Indicates whether the user can be verified through a custom invite code.
   *
   * @public
   */
  codeValidation?: boolean | undefined;
}
