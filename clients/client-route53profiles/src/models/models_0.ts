// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Route53ProfilesServiceException as __BaseException } from "./Route53ProfilesServiceException";

/**
 * <p>
 *   The current account doesn't have the IAM permissions required to perform the specified operation.
 * </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

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
 * @public
 * @enum
 */
export const ProfileStatus = {
  COMPLETE: "COMPLETE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ProfileStatus = (typeof ProfileStatus)[keyof typeof ProfileStatus];

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
 * <p>
 * The request you submitted conflicts with an existing request.
 * </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *   One or more parameters in this request are not valid.
 * </p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>
   *       The parameter field name for the invalid parameter exception.
   *     </p>
   * @public
   */
  FieldName?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
    this.FieldName = opts.FieldName;
  }
}

/**
 * <p>
 *   The request caused one or more limits to be exceeded.
 * </p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>
   *       The resource type that caused the limits to be exceeded.
   *     </p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>
 *  The resource you are trying to associate, has already been associated.
 * </p>
 * @public
 */
export class ResourceExistsException extends __BaseException {
  readonly name: "ResourceExistsException" = "ResourceExistsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>
   *       The resource type that caused the resource exists exception.
   *     </p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceExistsException, __BaseException>) {
    super({
      name: "ResourceExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceExistsException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>
 * The resource you are associating is not found.
 * </p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>
   *       The resource type that caused the resource not found exception.
   *     </p>
   * @public
   */
  ResourceType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * <p>
 *   The request was throttled. Try again in a few minutes.
 * </p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>
 *   You have provided an invalid command.
 * </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>
 * An internal server error occured. Retry your request.
 * </p>
 * @public
 */
export class InternalServiceErrorException extends __BaseException {
  readonly name: "InternalServiceErrorException" = "InternalServiceErrorException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceErrorException, __BaseException>) {
    super({
      name: "InternalServiceErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceErrorException.prototype);
    this.Message = opts.Message;
  }
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
 * @public
 * @enum
 */
export const ShareStatus = {
  NOT_SHARED: "NOT_SHARED",
  SHARED_BY_ME: "SHARED_BY_ME",
  SHARED_WITH_ME: "SHARED_WITH_ME",
} as const;

/**
 * @public
 */
export type ShareStatus = (typeof ShareStatus)[keyof typeof ShareStatus];

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
 * <p>
 * The <code>NextToken</code> you provided isn;t valid.
 * </p>
 * @public
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
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
