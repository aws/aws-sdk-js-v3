// smithy-typescript generated code
import type { ProfileStatus, ShareStatus } from "./enums";

/**
 * Tag for the Profile.
 *
 * @public
 */
export interface Tag {
  /**
   * Key associated with the `Tag`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Value for the Tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateProfileRequest {
  /**
   * ID of the Profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A name for the association.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the tag keys and values that you want to identify the Profile association.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An association between a Route 53 Profile and a VPC.
 *
 * @public
 */
export interface ProfileAssociation {
  /**
   * ID of the Profile association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Name of the Profile association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Amazon Web Services account ID of the Profile association owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * ID of the Profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the VPC.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * Status of the Profile association.
   *
   * @public
   */
  Status?: ProfileStatus | undefined;

  /**
   * Additional information about the Profile association.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time that the Profile association was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the Profile association was modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateProfileResponse {
  /**
   * The association that you just created. The association has an ID that you can use to identify it in other requests, like update and delete.
   *
   * @public
   */
  ProfileAssociation?: ProfileAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateResourceToProfileRequest {
  /**
   * ID of the Profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * Amazon resource number, ARN, of the DNS resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Name for the resource association.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If you are adding a DNS Firewall rule group, include also a priority. The priority indicates the processing order for the rule groups, starting with the priority assinged the lowest value.
   *
   * The allowed values for priority are between 100 and 9900.
   *
   * @public
   */
  ResourceProperties?: string | undefined;
}

/**
 * The association between a Route 53 Profile and resources.
 *
 * @public
 */
export interface ProfileResourceAssociation {
  /**
   * ID of the Profile resource association.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Name of the Profile resource association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Amazon Web Services account ID of the Profile resource association owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * Profile ID of the Profile that the resources are associated with.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource association.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Resource type, such as a private hosted zone, or DNS Firewall rule group.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * If the DNS resource is a DNS Firewall rule group, this indicates the priority.
   *
   * @public
   */
  ResourceProperties?: string | undefined;

  /**
   * Status of the Profile resource association.
   *
   * @public
   */
  Status?: ProfileStatus | undefined;

  /**
   * Additional information about the Profile resource association.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The date and time that the Profile resource association was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the Profile resource association was modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateResourceToProfileResponse {
  /**
   * Infromation about the `AssociateResourceToProfile`, including a status message.
   *
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * A name for the Profile.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * `ClientToken` is an idempotency token that ensures a call to `CreateProfile` completes only once. You choose the value to pass. For example, an issue might prevent you from getting a response from `CreateProfile`. In this case, safely retry your call to `CreateProfile` by using the same `CreateProfile` parameter value.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A list of the tag keys and values that you want to associate with the Route 53 Profile.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A complex type that includes settings for a Route 53 Profile.
 *
 * @public
 */
export interface Profile {
  /**
   * ID of the Profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the Profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Amazon Web Services account ID of the Profile owner.
   *
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * The status for the Profile.
   *
   * @public
   */
  Status?: ProfileStatus | undefined;

  /**
   * Status message that includes additiona information about the Profile.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * Sharing status for the Profile.
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * The date and time that the Profile was created, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the Profile was modified, in Unix time format and Coordinated Universal Time (UTC).
   *
   * @public
   */
  ModificationTime?: Date | undefined;

  /**
   * The `ClientToken` value that was assigned when the Profile was created.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * The Profile that you just created.
   *
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * The ID of the Profile that you want to delete.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileResponse {
  /**
   * Information about the `DeleteProfile` request, including the status of the request.
   *
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface DisassociateProfileRequest {
  /**
   * ID of the Profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProfileResponse {
  /**
   * Information about the `DisassociateProfile` request.
   *
   * @public
   */
  ProfileAssociation?: ProfileAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceFromProfileRequest {
  /**
   * The ID of the Profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceFromProfileResponse {
  /**
   * Information about the `DisassociateResourceFromProfile` request, including the status of the request.
   *
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}

/**
 * @public
 */
export interface GetProfileRequest {
  /**
   * ID of the Profile.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResponse {
  /**
   * Information about the Profile, including the status of the Profile.
   *
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface GetProfileAssociationRequest {
  /**
   * The identifier of the association you want to get information about.
   *
   * @public
   */
  ProfileAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileAssociationResponse {
  /**
   * Information about the Profile association that you specified in a `GetProfileAssociation` request.
   *
   * @public
   */
  ProfileAssociation?: ProfileAssociation | undefined;
}

/**
 * @public
 */
export interface GetProfileResourceAssociationRequest {
  /**
   * The ID of the profile resource association that you want to get information about.
   *
   * @public
   */
  ProfileResourceAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResourceAssociationResponse {
  /**
   * Information about the Profile resource association that you specified in a `GetProfileResourceAssociation` request.
   *
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}

/**
 * @public
 */
export interface ListProfileAssociationsRequest {
  /**
   * ID of the VPC.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * ID of the Profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The maximum number of objects that you want to return for this request. If more objects are available, in the response, a `NextToken` value, which you can use in a subsequent call to get the next batch of objects, is provided.
   *
   * If you don't specify a value for `MaxResults`, up to 100 objects are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, at most the number of objects specified by `MaxResults` is returned. If more objects are available for retrieval, a `NextToken` value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileAssociationsResponse {
  /**
   * A complex type that containts settings information about the profile's VPC associations.
   *
   * @public
   */
  ProfileAssociations?: ProfileAssociation[] | undefined;

  /**
   * If more than `MaxResults` profile associations match the specified criteria, you can submit another `ListProfileAssociations` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileResourceAssociationsRequest {
  /**
   * The ID of the Profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * ID of a resource if you want information on only one type.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The maximum number of objects that you want to return for this request. If more objects are available, in the response, a `NextToken` value, which you can use in a subsequent call to get the next batch of objects, is provided.
   *
   * If you don't specify a value for `MaxResults`, up to 100 objects are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, at most the number of objects specified by `MaxResults` is returned. If more objects are available for retrieval, a `NextToken` value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileResourceAssociationsResponse {
  /**
   * Information about the profile resource association that you specified in a `GetProfileResourceAssociation` request.
   *
   * @public
   */
  ProfileResourceAssociations?: ProfileResourceAssociation[] | undefined;

  /**
   * If more than `MaxResults` resource associations match the specified criteria, you can submit another `ListProfileResourceAssociations` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * The maximum number of objects that you want to return for this request. If more objects are available, in the response, a `NextToken` value, which you can use in a subsequent call to get the next batch of objects, is provided.
   *
   * If you don't specify a value for `MaxResults`, up to 100 objects are returned.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * For the first call to this list request, omit this value.
   *
   * When you request a list of objects, at most the number of objects specified by `MaxResults` is returned. If more objects are available for retrieval, a `NextToken` value is returned in the response. To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a Route 53 Profile.
 *
 * @public
 */
export interface ProfileSummary {
  /**
   * ID of the Profile.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Profile.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Name of the Profile.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Share status of the Profile.
   *
   * @public
   */
  ShareStatus?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * Summary information about the Profiles.
   *
   * @public
   */
  ProfileSummaries?: ProfileSummary[] | undefined;

  /**
   * If more than `MaxResults` resource associations match the specified criteria, you can submit another `ListProfiles` request to get the next group of results. In the next request, specify the value of `NextToken` from the previous response.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource that you want to list the tags for.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags that are associated with the resource that you specified in the `ListTagsForResource` request.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) for the resource that you want to add tags to.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags that you want to add to the specified resource.
   *
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * The Amazon Resource Name (ARN) for the resource that you want to remove tags from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags that you want to remove to the specified resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateProfileResourceAssociationRequest {
  /**
   * ID of the resource association.
   *
   * @public
   */
  ProfileResourceAssociationId: string | undefined;

  /**
   * Name of the resource association.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * If you are adding a DNS Firewall rule group, include also a priority. The priority indicates the processing order for the rule groups, starting with the priority assinged the lowest value.
   *
   * The allowed values for priority are between 100 and 9900.
   *
   * @public
   */
  ResourceProperties?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResourceAssociationResponse {
  /**
   * Information about the `UpdateProfileResourceAssociation` request, including a status message.
   *
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}
