// smithy-typescript generated code
import {
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
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The user or group identifiers to add the role to.</p>
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * <p>The channel role to add to the users or groups.</p>
   * @public
   */
  channelRole: ChannelRole | undefined;
}

/**
 * <p>An error that occurred during a batch operation.</p>
 * @public
 */
export interface BatchError {
  /**
   * <p>The accessor identifier that's related to the error.</p>
   * @public
   */
  accessorId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  error: number | undefined;

  /**
   * <p>Description of the error.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchAddChannelRoleToAccessorsOutput {
  /**
   * <p>An array of successfully updated identifiers.</p>
   * @public
   */
  addedAccessorIds: string[] | undefined;

  /**
   * <p>An array of errors that occurred when roles were added.</p>
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * <p>Stores information about a field that’s passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>Message describing why the field failed validation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the field.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchAddRoleInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The user or group accessor identifiers to add the role to.</p>
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * <p>The role to add to the users or groups.</p>
   * @public
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface BatchAddRoleOutput {
  /**
   * <p>An array of successfully updated accessor identifiers.</p>
   * @public
   */
  addedAccessorIds: string[] | undefined;

  /**
   * <p>An array of errors that occurred when roles were added.</p>
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * @public
 */
export interface BatchRemoveChannelRoleFromAccessorsInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The users or groups identifiers to remove the role from.</p>
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * <p>The channel role to remove from the users or groups.</p>
   * @public
   */
  channelRole: ChannelRole | undefined;
}

/**
 * @public
 */
export interface BatchRemoveChannelRoleFromAccessorsOutput {
  /**
   * <p>An array of successfully updated identifiers.</p>
   * @public
   */
  removedAccessorIds: string[] | undefined;

  /**
   * <p>An array of errors that occurred when roles were removed.</p>
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * @public
 */
export interface BatchRemoveRoleInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The user or group accessor identifiers to remove the role from.</p>
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * <p>The role to remove from the users or groups.</p>
   * @public
   */
  role: Role | undefined;
}

/**
 * @public
 */
export interface BatchRemoveRoleOutput {
  /**
   * <p>An array of successfully updated accessor identifiers.</p>
   * @public
   */
  removedAccessorIds: string[] | undefined;

  /**
   * <p>An array of errors that occurred when roles were removed.</p>
   * @public
   */
  errors: BatchError[] | undefined;
}

/**
 * <p>A structure that contains some information about a channel in a private re:Post.</p>
 * @public
 */
export interface ChannelData {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The name for the channel. This must be unique per private re:Post.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>A description for the channel. This is used only to help you identify this channel.</p>
   * @public
   */
  channelDescription?: string | undefined;

  /**
   * <p>The date when the channel was created.</p>
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * <p>The date when the channel was deleted.</p>
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * <p>The status pf the channel.</p>
   * @public
   */
  channelStatus: ChannelStatus | undefined;

  /**
   * <p>The number of users that are part of the channel.</p>
   * @public
   */
  userCount: number | undefined;

  /**
   * <p>The number of groups that are part of the channel.</p>
   * @public
   */
  groupCount: number | undefined;
}

/**
 * @public
 */
export interface CreateChannelInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The name for the channel. This must be unique per private re:Post.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>A description for the channel. This is used only to help you identify this channel.</p>
   * @public
   */
  channelDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelOutput {
  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface SupportedEmailDomainsParameters {
  /**
   * <p/>
   * @public
   */
  enabled?: FeatureEnableParameter | undefined;

  /**
   * <p/>
   * @public
   */
  allowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateSpaceInput {
  /**
   * <p>The name for the private re:Post. This must be unique in your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The subdomain that you use to access your AWS re:Post Private private re:Post. All custom subdomains must be approved by AWS before use. In addition to your custom subdomain, all private re:Posts are issued an AWS generated subdomain for immediate use.</p>
   * @public
   */
  subdomain: string | undefined;

  /**
   * <p>The pricing tier for the private re:Post.</p>
   * @public
   */
  tier: TierLevel | undefined;

  /**
   * <p>A description for the private re:Post. This is used only to help you identify this private re:Post.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The AWS KMS key ARN that’s used for the AWS KMS encryption. If you don't provide a key, your data is encrypted by default with a key that AWS owns and manages for you.</p>
   * @public
   */
  userKMSKey?: string | undefined;

  /**
   * <p>The list of tags associated with the private re:Post.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p/>
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsParameters | undefined;
}

/**
 * @public
 */
export interface CreateSpaceOutput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterAdminInput {
  /**
   * <p>The ID of the private re:Post to remove the admin from.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the admin to remove.</p>
   * @public
   */
  adminId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;
}

/**
 * @public
 */
export interface GetChannelOutput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The name for the channel. This must be unique per private re:Post.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>A description for the channel. This is used only to help you identify this channel.</p>
   * @public
   */
  channelDescription?: string | undefined;

  /**
   * <p>The date when the channel was created.</p>
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * <p>The date when the channel was deleted.</p>
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * <p>The channel roles associated to the users and groups of the channel.</p>
   * @public
   */
  channelRoles?: Record<string, ChannelRole[]> | undefined;

  /**
   * <p>The status pf the channel.</p>
   * @public
   */
  channelStatus: ChannelStatus | undefined;
}

/**
 * @public
 */
export interface GetSpaceInput {
  /**
   * <p>The ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface SupportedEmailDomainsStatus {
  /**
   * <p/>
   * @public
   */
  enabled?: FeatureEnableStatus | undefined;

  /**
   * <p/>
   * @public
   */
  allowedDomains?: string[] | undefined;
}

/**
 * @public
 */
export interface GetSpaceOutput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the private re:Post.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the private re:Post.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The creation or deletion status of the private re:Post.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The configuration status of the private re:Post.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The Identity Center identifier for the Application Instance.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p/>
   * @public
   */
  identityStoreId?: string | undefined;

  /**
   * <p/>
   * @public
   */
  applicationArn?: string | undefined;

  /**
   * <p>The description of the private re:Post.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The approval status of the custom subdomain.</p>
   * @public
   */
  vanityDomainStatus: VanityDomainStatus | undefined;

  /**
   * <p>The custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.</p>
   * @public
   */
  vanityDomain: string | undefined;

  /**
   * <p>The AWS generated subdomain of the private re:Post</p>
   * @public
   */
  randomDomain: string | undefined;

  /**
   * <p>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</p>
   * @public
   */
  customerRoleArn?: string | undefined;

  /**
   * <p>The date when the private re:Post was created.</p>
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * <p>The date when the private re:Post was deleted.</p>
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * <p>The pricing tier of the private re:Post.</p>
   * @public
   */
  tier: TierLevel | undefined;

  /**
   * <p>The storage limit of the private re:Post.</p>
   * @public
   */
  storageLimit: number | undefined;

  /**
   * <p>The list of users that are administrators of the private re:Post.</p>
   *
   * @deprecated This property has been depracted and will be replaced by the roles property.
   * @public
   */
  userAdmins?: string[] | undefined;

  /**
   * <p>The list of groups that are administrators of the private re:Post.</p>
   *
   * @deprecated This property has been depracted and will be replaced by the roles property.
   * @public
   */
  groupAdmins?: string[] | undefined;

  /**
   * <p>A map of accessor identifiers and their roles.</p>
   * @public
   */
  roles?: Record<string, Role[]> | undefined;

  /**
   * <p>The custom AWS KMS key ARN that’s used for the AWS KMS encryption.</p>
   * @public
   */
  userKMSKey?: string | undefined;

  /**
   * <p>The number of users that have onboarded to the private re:Post.</p>
   * @public
   */
  userCount?: number | undefined;

  /**
   * <p>The content size of the private re:Post.</p>
   * @public
   */
  contentSize?: number | undefined;

  /**
   * <p/>
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsStatus | undefined;
}

/**
 * @public
 */
export interface ListChannelsInput {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The token for the next set of channel to return. You receive this token from a previous ListChannels operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of channels to include in the results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListChannelsOutput {
  /**
   * <p>An array of structures that contain some information about the channels in the private re:Post.</p>
   * @public
   */
  channels: ChannelData[] | undefined;

  /**
   * <p>The token that you use when you request the next set of channels.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesInput {
  /**
   * <p>The token for the next set of private re:Posts to return. You receive this token from a previous ListSpaces operation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of private re:Posts to include in the results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A structure that contains some information about a private re:Post in the account.</p>
 * @public
 */
export interface SpaceData {
  /**
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ARN of the private re:Post.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name for the private re:Post.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description for the private re:Post. This is used only to help you identify this private re:Post.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The creation/deletion status of the private re:Post.</p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>The configuration status of the private re:Post.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>This approval status of the custom subdomain.</p>
   * @public
   */
  vanityDomainStatus: VanityDomainStatus | undefined;

  /**
   * <p>This custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.</p>
   * @public
   */
  vanityDomain: string | undefined;

  /**
   * <p>The AWS generated subdomain of the private re:Post.</p>
   * @public
   */
  randomDomain: string | undefined;

  /**
   * <p>The pricing tier of the private re:Post.</p>
   * @public
   */
  tier: TierLevel | undefined;

  /**
   * <p>The storage limit of the private re:Post.</p>
   * @public
   */
  storageLimit: number | undefined;

  /**
   * <p>The date when the private re:Post was created.</p>
   * @public
   */
  createDateTime: Date | undefined;

  /**
   * <p>The date when the private re:Post was deleted.</p>
   * @public
   */
  deleteDateTime?: Date | undefined;

  /**
   * <p>The custom AWS KMS key ARN that’s used for the AWS KMS encryption.</p>
   * @public
   */
  userKMSKey?: string | undefined;

  /**
   * <p>The number of onboarded users to the private re:Post.</p>
   * @public
   */
  userCount?: number | undefined;

  /**
   * <p>The content size of the private re:Post.</p>
   * @public
   */
  contentSize?: number | undefined;

  /**
   * <p/>
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsStatus | undefined;
}

/**
 * @public
 */
export interface ListSpacesOutput {
  /**
   * <p>An array of structures that contain some information about the private re:Posts in the account.</p>
   * @public
   */
  spaces: SpaceData[] | undefined;

  /**
   * <p>The token that you use when you request the next set of private re:Posts.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource that the tags are associated with.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags that are associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterAdminInput {
  /**
   * <p>The ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the administrator.</p>
   * @public
   */
  adminId: string | undefined;
}

/**
 * @public
 */
export interface SendInvitesInput {
  /**
   * <p>The ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The array of identifiers for the users and groups.</p>
   * @public
   */
  accessorIds: string[] | undefined;

  /**
   * <p>The title of the invite.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The body of the invite.</p>
   * @public
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource that the tag is associated with.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys and values that must be associated with the resource. You can associate tag keys only, tags (key and values) only, or a combination of tag keys and tags.</p>
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
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key values of the tag.</p>
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
   * <p>The unique ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The unique ID of the private re:Post channel.</p>
   * @public
   */
  channelId: string | undefined;

  /**
   * <p>The name for the channel. This must be unique per private re:Post.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>A description for the channel. This is used only to help you identify this channel.</p>
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
   * <p>The unique ID of this private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>A description for the private re:Post. This is used only to help you identify this private re:Post.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The pricing tier of this private re:Post.</p>
   * @public
   */
  tier?: TierLevel | undefined;

  /**
   * <p>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p/>
   * @public
   */
  supportedEmailDomains?: SupportedEmailDomainsParameters | undefined;
}
