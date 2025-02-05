// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RepostspaceServiceException as __BaseException } from "./RepostspaceServiceException";

/**
 * <p>User does not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const Role = {
  ADMINISTRATOR: "ADMINISTRATOR",
  EXPERT: "EXPERT",
  MODERATOR: "MODERATOR",
  SUPPORTREQUESTOR: "SUPPORTREQUESTOR",
} as const;

/**
 * @public
 */
export type Role = (typeof Role)[keyof typeof Role];

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
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>Request references a resource which does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>Request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The code to identify the service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>The code to identify the quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p> Advice to clients on when the call can be safely retried.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
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
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason why the request failed validation.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The field that caused the error, if applicable.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
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
 * @public
 * @enum
 */
export const ConfigurationStatus = {
  CONFIGURED: "CONFIGURED",
  UNCONFIGURED: "UNCONFIGURED",
} as const;

/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const TierLevel = {
  BASIC: "BASIC",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type TierLevel = (typeof TierLevel)[keyof typeof TierLevel];

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
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The id of the resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>The code to identify the service.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>The code to identify the quota.</p>
   * @public
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
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
export interface GetSpaceInput {
  /**
   * <p>The ID of the private re:Post.</p>
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const VanityDomainStatus = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  UNAPPROVED: "UNAPPROVED",
} as const;

/**
 * @public
 */
export type VanityDomainStatus = (typeof VanityDomainStatus)[keyof typeof VanityDomainStatus];

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
   * @deprecated
   * @public
   */
  userAdmins?: string[] | undefined;

  /**
   * <p>The list of groups that are administrators of the private re:Post.</p>
   *
   * @deprecated
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
}

/**
 * @internal
 */
export const CreateSpaceInputFilterSensitiveLog = (obj: CreateSpaceInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSpaceOutputFilterSensitiveLog = (obj: GetSpaceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SpaceDataFilterSensitiveLog = (obj: SpaceData): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSpacesOutputFilterSensitiveLog = (obj: ListSpacesOutput): any => ({
  ...obj,
  ...(obj.spaces && { spaces: obj.spaces.map((item) => SpaceDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendInvitesInputFilterSensitiveLog = (obj: SendInvitesInput): any => ({
  ...obj,
  ...(obj.title && { title: SENSITIVE_STRING }),
  ...(obj.body && { body: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.tags && { tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSpaceInputFilterSensitiveLog = (obj: UpdateSpaceInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});
