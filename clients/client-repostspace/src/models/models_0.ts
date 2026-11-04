// smithy-typescript generated code
import type {
  ChannelRole,
  ChannelStatus,
  ConfigurationStatus,
  FeatureEnableParameter,
  FeatureEnableStatus,
  Role,
  TierLevel,
  VanityDomainStatus,
} from "./enums";

/**
 * @public
 */
export interface BatchAddChannelRoleToAccessorsInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The user or group identifiers to add the role to.
   *
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * The channel role to add to the users or groups.
   *
   * @public
   */
  channelRole: ChannelRole | undefined;
}

/**
 * An error that occurred during a batch operation.
 *
 * @public
 */
export interface BatchError {
  /**
   * The accessor identifier that's related to the error.
   *
   * @public
   */
  accessorId: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  error: number | undefined;

  /**
   * Description of the error.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchAddChannelRoleToAccessorsOutput {
  /**
   * An array of successfully updated identifiers.
   *
   * @public
   */
  addedAccessorIds: string[] | undefined;

  /**
   * An array of errors that occurred when roles were added.
   *
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * Stores information about a field that’s passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * Message describing why the field failed validation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the field.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchAddRoleInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The user or group accessor identifiers to add the role to.
   *
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * The role to add to the users or groups.
   *
   * @public
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface BatchAddRoleOutput {
  /**
   * An array of successfully updated accessor identifiers.
   *
   * @public
   */
  addedAccessorIds: string[] | undefined;

  /**
   * An array of errors that occurred when roles were added.
   *
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * @public
 */
export interface BatchRemoveChannelRoleFromAccessorsInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The users or groups identifiers to remove the role from.
   *
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * The channel role to remove from the users or groups.
   *
   * @public
   */
  channelRole: ChannelRole | undefined;
}

/**
 * @public
 */
export interface BatchRemoveChannelRoleFromAccessorsOutput {
  /**
   * An array of successfully updated identifiers.
   *
   * @public
   */
  removedAccessorIds: string[] | undefined;

  /**
   * An array of errors that occurred when roles were removed.
   *
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * @public
 */
export interface BatchRemoveRoleInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The user or group accessor identifiers to remove the role from.
   *
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * The role to remove from the users or groups.
   *
   * @public
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface BatchRemoveRoleOutput {
  /**
   * An array of successfully updated accessor identifiers.
   *
   * @public
   */
  removedAccessorIds: string[] | undefined;

  /**
   * An array of errors that occurred when roles were removed.
   *
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * A structure that contains some information about a channel in a private re:Post.
 *
 * @public
 */
export interface ChannelData {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The name for the channel. This must be unique per private re:Post.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * A description for the channel. This is used only to help you identify this channel.
   *
   * @public
   */
  channelDescription?: string | undefined;

  /**
   * The date when the channel was created.
   *
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * The date when the channel was deleted.
   *
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * The status pf the channel.
   *
   * @public
   */
  channelStatus: ChannelStatus | undefined;

  /**
   * The number of users that are part of the channel.
   *
   * @public
   */
  userCount: number | undefined;

  /**
   * The number of groups that are part of the channel.
   *
   * @public
   */
  groupCount: number | undefined;
}

/**
 * @public
 */
export interface CreateChannelInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The name for the channel. This must be unique per private re:Post.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * A description for the channel. This is used only to help you identify this channel.
   *
   * @public
   */
  channelDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelOutput {
  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;
}

/**
 * @public
 */
export interface SupportedEmailDomainsParameters {
  /**
   * @public
   */
  enabled?: FeatureEnableParameter | undefined;

  /**
   * @public
   */
  allowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSpaceInput {
  /**
   * The name for the private re:Post. This must be unique in your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The subdomain that you use to access your AWS re:Post Private private re:Post. All custom subdomains must be approved by AWS before use. In addition to your custom subdomain, all private re:Posts are issued an AWS generated subdomain for immediate use.
   *
   * @public
   */
  subdomain: string | undefined;

  /**
   * The pricing tier for the private re:Post.
   *
   * @public
   */
  tier: TierLevel | undefined;

  /**
   * A description for the private re:Post. This is used only to help you identify this private re:Post.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The AWS KMS key ARN that’s used for the AWS KMS encryption. If you don't provide a key, your data is encrypted by default with a key that AWS owns and manages for you.
   *
   * @public
   */
  userKMSKey?: string | undefined;

  /**
   * The list of tags associated with the private re:Post.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsParameters | undefined;
}

/**
 * @public
 */
export interface CreateSpaceOutput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterAdminInput {
  /**
   * The ID of the private re:Post to remove the admin from.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ID of the admin to remove.
   *
   * @public
   */
  adminId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelOutput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The name for the channel. This must be unique per private re:Post.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * A description for the channel. This is used only to help you identify this channel.
   *
   * @public
   */
  channelDescription?: string | undefined;

  /**
   * The date when the channel was created.
   *
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * The date when the channel was deleted.
   *
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * The channel roles associated to the users and groups of the channel.
   *
   * @public
   */
  channelRoles?: Record<string, ChannelRole[]> | undefined;

  /**
   * The status pf the channel.
   *
   * @public
   */
  channelStatus: ChannelStatus | undefined;
}

/**
 * @public
 */
export interface GetSpaceInput {
  /**
   * The ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface SupportedEmailDomainsStatus {
  /**
   * @public
   */
  enabled?: FeatureEnableStatus | undefined;

  /**
   * @public
   */
  allowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GetSpaceOutput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the private re:Post.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the private re:Post.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The creation or deletion status of the private re:Post.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The configuration status of the private re:Post.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * The Identity Center identifier for the Application Instance.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * @public
   */
  identityStoreId?: string | undefined;

  /**
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * The description of the private re:Post.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The approval status of the custom subdomain.
   *
   * @public
   */
  vanityDomainStatus: VanityDomainStatus | undefined;

  /**
   * The custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.
   *
   * @public
   */
  vanityDomain: string | undefined;

  /**
   * The AWS generated subdomain of the private re:Post
   *
   * @public
   */
  randomDomain: string | undefined;

  /**
   * The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.
   *
   * @public
   */
  customerRoleArn?: string | undefined;

  /**
   * The date when the private re:Post was created.
   *
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * The date when the private re:Post was deleted.
   *
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * The pricing tier of the private re:Post.
   *
   * @public
   */
  tier: TierLevel | undefined;

  /**
   * The storage limit of the private re:Post.
   *
   * @public
   */
  storageLimit: number | undefined;

  /**
   * The list of users that are administrators of the private re:Post.
   *
   * @deprecated This property has been depracted and will be replaced by the roles property.
   * @public
   */
  userAdmins?: string[] | undefined;

  /**
   * The list of groups that are administrators of the private re:Post.
   *
   * @deprecated This property has been depracted and will be replaced by the roles property.
   * @public
   */
  groupAdmins?: string[] | undefined;

  /**
   * A map of accessor identifiers and their roles.
   *
   * @public
   */
  roles?: Record<string, Role[]> | undefined;

  /**
   * The custom AWS KMS key ARN that’s used for the AWS KMS encryption.
   *
   * @public
   */
  userKMSKey?: string | undefined;

  /**
   * The number of users that have onboarded to the private re:Post.
   *
   * @public
   */
  userCount?: number | undefined;

  /**
   * The content size of the private re:Post.
   *
   * @public
   */
  contentSize?: number | undefined;

  /**
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsStatus | undefined;
}

/**
 * @public
 */
export interface ListChannelsInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The token for the next set of channel to return. You receive this token from a previous ListChannels operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of channels to include in the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListChannelsOutput {
  /**
   * An array of structures that contain some information about the channels in the private re:Post.
   *
   * @public
   */
  channels: ChannelData[] | undefined;

  /**
   * The token that you use when you request the next set of channels.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesInput {
  /**
   * The token for the next set of private re:Posts to return. You receive this token from a previous ListSpaces operation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of private re:Posts to include in the results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A structure that contains some information about a private re:Post in the account.
 *
 * @public
 */
export interface SpaceData {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ARN of the private re:Post.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name for the private re:Post.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description for the private re:Post. This is used only to help you identify this private re:Post.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The creation/deletion status of the private re:Post.
   *
   * @public
   */
  status: string | undefined;

  /**
   * The configuration status of the private re:Post.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * This approval status of the custom subdomain.
   *
   * @public
   */
  vanityDomainStatus: VanityDomainStatus | undefined;

  /**
   * This custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.
   *
   * @public
   */
  vanityDomain: string | undefined;

  /**
   * The AWS generated subdomain of the private re:Post.
   *
   * @public
   */
  randomDomain: string | undefined;

  /**
   * The pricing tier of the private re:Post.
   *
   * @public
   */
  tier: TierLevel | undefined;

  /**
   * The storage limit of the private re:Post.
   *
   * @public
   */
  storageLimit: number | undefined;

  /**
   * The date when the private re:Post was created.
   *
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * The date when the private re:Post was deleted.
   *
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * The custom AWS KMS key ARN that’s used for the AWS KMS encryption.
   *
   * @public
   */
  userKMSKey?: string | undefined;

  /**
   * The number of onboarded users to the private re:Post.
   *
   * @public
   */
  userCount?: number | undefined;

  /**
   * The content size of the private re:Post.
   *
   * @public
   */
  contentSize?: number | undefined;

  /**
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsStatus | undefined;
}

/**
 * @public
 */
export interface ListSpacesOutput {
  /**
   * An array of structures that contain some information about the private re:Posts in the account.
   *
   * @public
   */
  spaces: SpaceData[] | undefined;

  /**
   * The token that you use when you request the next set of private re:Posts.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource that the tags are associated with.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags that are associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterAdminInput {
  /**
   * The ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The ID of the administrator.
   *
   * @public
   */
  adminId: string | undefined;
}

/**
 * @public
 */
export interface SendInvitesInput {
  /**
   * The ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The array of identifiers for the users and groups.
   *
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * The title of the invite.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The body of the invite.
   *
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource that the tag is associated with.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys and values that must be associated with the resource. You can associate tag keys only, tags (key and values) only, or a combination of tag keys and tags.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key values of the tag.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateChannelInput {
  /**
   * The unique ID of the private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * The unique ID of the private re:Post channel.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The name for the channel. This must be unique per private re:Post.
   *
   * @public
   */
  channelName: string | undefined;

  /**
   * A description for the channel. This is used only to help you identify this channel.
   *
   * @public
   */
  channelDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChannelOutput {}

/**
 * @public
 */
export interface UpdateSpaceInput {
  /**
   * The unique ID of this private re:Post.
   *
   * @public
   */
  spaceId: string | undefined;

  /**
   * A description for the private re:Post. This is used only to help you identify this private re:Post.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The pricing tier of this private re:Post.
   *
   * @public
   */
  tier?: TierLevel | undefined;

  /**
   * The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsParameters | undefined;
}
