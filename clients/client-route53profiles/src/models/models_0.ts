// smithy-typescript generated code
import { ProfileStatus, ShareStatus } from "./enums";

/**
 * <p>
 * Tag for the Profile.
 * </p>
 * @public
 */
export interface Tag {
  /**
   * <p>
   *   Key associated with the <code>Tag</code>.
   * </p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>
   * Value for the Tag.
   * </p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface AssociateProfileRequest {
  /**
   * <p>
   *   ID of the Profile.
   * </p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>
   *   The ID of the VPC.
   * </p>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>
   *   A name for the association.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *   A list of the tag keys and values that you want to identify the Profile association.
   * </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>
 *   An association between a Route 53 Profile and a VPC.
 * </p>
 * @public
 */
export interface ProfileAssociation {
  /**
   * <p>
   *   ID of the Profile association.
   * </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *   Name of the Profile association.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *   Amazon Web Services account ID of the Profile association owner.
   * </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>
   * ID of the Profile.
   * </p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>
   *   The Amazon Resource Name (ARN) of the VPC.
   * </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>
   *   Status of the Profile association.
   * </p>
   * @public
   */
  Status?: ProfileStatus | undefined;

  /**
   * <p>
   *   Additional information about the Profile association.
   * </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>
   *   The date and time that the Profile association was created, in Unix time format and Coordinated Universal Time (UTC).
   * </p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>
   *   The date and time that the Profile association was modified, in Unix time format and Coordinated Universal Time (UTC).
   * </p>
   * @public
   */
  ModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateProfileResponse {
  /**
   * <p>
   *   The association that you just created. The association has an ID that you can use to identify it in other requests, like update and delete.
   * </p>
   * @public
   */
  ProfileAssociation?: ProfileAssociation | undefined;
}

/**
 * @public
 */
export interface AssociateResourceToProfileRequest {
  /**
   * <p>
   *   ID of the Profile.
   * </p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>
   *   Amazon resource number, ARN, of the DNS resource.
   * </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *   Name for the resource association.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *   If you are adding a DNS Firewall rule group, include also a priority. The priority indicates the processing order for the rule groups, starting with the priority assinged the lowest value.
   * </p>
   *          <p>The allowed values for priority are between 100 and 9900.</p>
   * @public
   */
  ResourceProperties?: string | undefined;
}

/**
 * <p>
 *   The association between a Route 53 Profile and resources.
 * </p>
 * @public
 */
export interface ProfileResourceAssociation {
  /**
   * <p>
   *   ID of the Profile resource association.
   * </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *   Name of the Profile resource association.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *   Amazon Web Services account ID of the Profile resource association owner.
   * </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>
   *   Profile ID of the Profile that the resources are associated with.
   * </p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>
   *   The Amazon Resource Name (ARN) of the resource association.
   * </p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>
   *   Resource type, such as a private hosted zone, or DNS Firewall rule group.
   * </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>
   *   If the DNS resource is a DNS Firewall rule group, this indicates the priority.
   * </p>
   * @public
   */
  ResourceProperties?: string | undefined;

  /**
   * <p>
   *   Status of the Profile resource association.
   * </p>
   * @public
   */
  Status?: ProfileStatus | undefined;

  /**
   * <p>
   *   Additional information about the Profile resource association.
   * </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>
   *   The date and time that the Profile resource association was created, in Unix time format and Coordinated Universal Time (UTC).
   * </p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>
   *   The date and time that the Profile resource association was modified, in Unix time format and Coordinated Universal Time (UTC).
   * </p>
   * @public
   */
  ModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface AssociateResourceToProfileResponse {
  /**
   * <p>
   *   Infromation about the <code>AssociateResourceToProfile</code>, including a status message.
   * </p>
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}

/**
 * @public
 */
export interface CreateProfileRequest {
  /**
   * <p>
   *   A name for the Profile.
   * </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             <code>ClientToken</code> is an idempotency token that ensures a call to <code>CreateProfile</code> completes only once. You choose the value to pass.
   *   For example, an issue might prevent you from getting a response from <code>CreateProfile</code>.
   *   In this case, safely retry your call to <code>CreateProfile</code> by using the same <code>CreateProfile</code> parameter value.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>
   *   A list of the tag keys and values that you want to associate with the Route 53 Profile.
   * </p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>
 *   A complex type that includes settings for a Route 53 Profile.
 * </p>
 * @public
 */
export interface Profile {
  /**
   * <p>
   * ID of the Profile.
   * </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *   The Amazon Resource Name (ARN) of the Profile.
   * </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   * Name of the Profile.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *   Amazon Web Services account ID of the Profile owner.
   * </p>
   * @public
   */
  OwnerId?: string | undefined;

  /**
   * <p>
   *   The status for the Profile.
   * </p>
   * @public
   */
  Status?: ProfileStatus | undefined;

  /**
   * <p>
   *   Status message that includes additiona information about the Profile.
   * </p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>
   *   Sharing status for the Profile.
   * </p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;

  /**
   * <p>
   *   The date and time that the Profile was created, in Unix time format and Coordinated Universal Time (UTC).
   * </p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>
   *   The date and time that the Profile was modified, in Unix time format and Coordinated Universal Time (UTC).
   * </p>
   * @public
   */
  ModificationTime?: Date | undefined;

  /**
   * <p>
   *   The <code>ClientToken</code> value that was assigned when the Profile was created.
   * </p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateProfileResponse {
  /**
   * <p>
   *   The Profile that you just created.
   * </p>
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface DeleteProfileRequest {
  /**
   * <p>
   *   The ID of the Profile that you want to delete.
   * </p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProfileResponse {
  /**
   * <p>
   *   Information about the <code>DeleteProfile</code> request, including the status of the request.
   * </p>
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface DisassociateProfileRequest {
  /**
   * <p>
   *   ID of the Profile.
   * </p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>
   *   The ID of the VPC.
   * </p>
   * @public
   */
  ResourceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateProfileResponse {
  /**
   * <p>
   *   Information about the <code>DisassociateProfile</code> request.
   * </p>
   * @public
   */
  ProfileAssociation?: ProfileAssociation | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceFromProfileRequest {
  /**
   * <p>
   *   The ID of the Profile.
   * </p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.
   * </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourceFromProfileResponse {
  /**
   * <p>
   *   Information about the <code>DisassociateResourceFromProfile</code> request, including the status of the request.
   * </p>
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}

/**
 * @public
 */
export interface GetProfileRequest {
  /**
   * <p>
   *   ID of the Profile.
   * </p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResponse {
  /**
   * <p>
   *   Information about the Profile, including the status of the Profile.
   * </p>
   * @public
   */
  Profile?: Profile | undefined;
}

/**
 * @public
 */
export interface GetProfileAssociationRequest {
  /**
   * <p>
   *   The identifier of the association you want to get information about.
   * </p>
   * @public
   */
  ProfileAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileAssociationResponse {
  /**
   * <p>
   *   Information about the Profile association that you specified in a <code>GetProfileAssociation</code> request.
   * </p>
   * @public
   */
  ProfileAssociation?: ProfileAssociation | undefined;
}

/**
 * @public
 */
export interface GetProfileResourceAssociationRequest {
  /**
   * <p>
   *
   *   The ID of the profile resource association that you want to get information about.
   * </p>
   * @public
   */
  ProfileResourceAssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetProfileResourceAssociationResponse {
  /**
   * <p>
   *   Information about the Profile resource association that you specified in a <code>GetProfileResourceAssociation</code> request.
   * </p>
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}

/**
 * @public
 */
export interface ListProfileAssociationsRequest {
  /**
   * <p>
   *   ID of the VPC.
   * </p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>
   * ID of the Profile.
   * </p>
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * <p>
   *   The maximum number of objects that you want to return for this request. If more objects are available, in the response,
   *   a <code>NextToken</code> value, which you can use in a subsequent call to get the next batch of objects, is provided.</p>
   *          <p>
   *     If you don't specify a value for <code>MaxResults</code>, up to 100 objects are returned.
   * </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *   For the first call to this list request, omit this value.
   * </p>
   *          <p>When you request a list of objects, at most the number of objects specified by <code>MaxResults</code> is returned.
   *     If more objects are available for retrieval, a <code>NextToken</code> value is returned in the response.
   *     To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileAssociationsResponse {
  /**
   * <p>
   *   A complex type that containts settings information about the profile's VPC associations.
   * </p>
   * @public
   */
  ProfileAssociations?: ProfileAssociation[] | undefined;

  /**
   * <p>
   *   If more than <code>MaxResults</code> profile associations match the specified criteria, you can submit another
   *   <code>ListProfileAssociations</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response.
   * </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileResourceAssociationsRequest {
  /**
   * <p>
   * The ID of the Profile.
   * </p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>
   *   ID of a resource if you want information on only one type.
   * </p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>
   *     The maximum number of objects that you want to return for this request. If more objects are available, in the response,
   *     a <code>NextToken</code> value, which you can use in a subsequent call to get the next batch of objects, is provided.</p>
   *          <p>
   *     If you don't specify a value for <code>MaxResults</code>, up to 100 objects are returned.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *     For the first call to this list request, omit this value.
   *   </p>
   *          <p>When you request a list of objects, at most the number of objects specified by <code>MaxResults</code> is returned.
   *     If more objects are available for retrieval, a <code>NextToken</code> value is returned in the response.
   *     To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileResourceAssociationsResponse {
  /**
   * <p>
   *   Information about the profile resource association that you specified in a <code>GetProfileResourceAssociation</code> request.
   * </p>
   * @public
   */
  ProfileResourceAssociations?: ProfileResourceAssociation[] | undefined;

  /**
   * <p>
   *     If more than <code>MaxResults</code> resource associations match the specified criteria, you can submit another
   *     <code>ListProfileResourceAssociations</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProfilesRequest {
  /**
   * <p>
   *     The maximum number of objects that you want to return for this request. If more objects are available, in the response,
   *     a <code>NextToken</code> value, which you can use in a subsequent call to get the next batch of objects, is provided.</p>
   *          <p>
   *     If you don't specify a value for <code>MaxResults</code>, up to 100 objects are returned.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *     For the first call to this list request, omit this value.
   *   </p>
   *          <p>When you request a list of objects, at most the number of objects specified by <code>MaxResults</code> is returned.
   *     If more objects are available for retrieval, a <code>NextToken</code> value is returned in the response.
   *     To retrieve the next batch of objects, use the token that was returned for the prior request in your next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *   Summary information about a Route 53 Profile.
 * </p>
 * @public
 */
export interface ProfileSummary {
  /**
   * <p>
   *   ID of the Profile.
   * </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>
   *   The Amazon Resource Name (ARN) of the Profile.
   * </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>
   *   Name of the Profile.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *   Share status of the Profile.
   * </p>
   * @public
   */
  ShareStatus?: ShareStatus | undefined;
}

/**
 * @public
 */
export interface ListProfilesResponse {
  /**
   * <p>
   *   Summary information about the Profiles.
   * </p>
   * @public
   */
  ProfileSummaries?: ProfileSummary[] | undefined;

  /**
   * <p>
   *     If more than <code>MaxResults</code> resource associations match the specified criteria, you can submit another
   *     <code>ListProfiles</code> request to get the next group of results. In the next request, specify the value of <code>NextToken</code> from the previous response.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>
   *   The Amazon Resource Name (ARN) for the resource that you want to list the tags for.
   * </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>
   *   The tags that are associated with the resource that you specified in the <code>ListTagsForResource</code> request.
   * </p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>
   *   The Amazon Resource Name (ARN) for the resource that you want to add tags to.
   * </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *   The tags that you want to add to the specified resource.
   * </p>
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
   * <p>
   *   The Amazon Resource Name (ARN) for the resource that you want to remove tags from.
   * </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>
   *   The tags that you want to remove to the specified resource.
   * </p>
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
   * <p>
   * ID of the resource association.
   * </p>
   * @public
   */
  ProfileResourceAssociationId: string | undefined;

  /**
   * <p>
   * Name of the resource association.
   * </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>
   *   If you are adding a DNS Firewall rule group, include also a priority. The priority indicates the processing order for the rule groups, starting with the priority assinged the lowest value.
   *   </p>
   *          <p>The allowed values for priority are between 100 and 9900.</p>
   * @public
   */
  ResourceProperties?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResourceAssociationResponse {
  /**
   * <p>
   *   Information about the <code>UpdateProfileResourceAssociation</code> request, including a status message.
   * </p>
   * @public
   */
  ProfileResourceAssociation?: ProfileResourceAssociation | undefined;
}
