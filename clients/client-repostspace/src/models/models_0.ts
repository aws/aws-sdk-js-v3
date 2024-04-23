// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RepostspaceServiceException as __BaseException } from "./RepostspaceServiceException";

/**
 * @public
 * <p>User does not have sufficient access to perform this action.</p>
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
export const ConfigurationStatus = {
  CONFIGURED: "CONFIGURED",
  UNCONFIGURED: "UNCONFIGURED",
} as const;

/**
 * @public
 */
export type ConfigurationStatus = (typeof ConfigurationStatus)[keyof typeof ConfigurationStatus];

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource.</p>
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
   * @public
   * <p>The name for the private re:Post. This must be unique in your account.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The subdomain that you use to access your AWS re:Post Private private re:Post. All custom subdomains must be approved by AWS before use. In addition to your custom subdomain, all private re:Posts are issued an AWS generated subdomain for immediate use.</p>
   */
  subdomain: string | undefined;

  /**
   * @public
   * <p>The pricing tier for the private re:Post.</p>
   */
  tier: TierLevel | undefined;

  /**
   * @public
   * <p>A description for the private re:Post. This is used only to help you identify this private re:Post.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The AWS KMS key ARN that’s used for the AWS KMS encryption. If you don't provide a key, your data is encrypted by default with a key that AWS owns and manages for you.</p>
   */
  userKMSKey?: string;

  /**
   * @public
   * <p>The list of tags associated with the private re:Post.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</p>
   */
  roleArn?: string;
}

/**
 * @public
 */
export interface CreateSpaceOutput {
  /**
   * @public
   * <p>The unique ID of the private re:Post.</p>
   */
  spaceId: string | undefined;
}

/**
 * @public
 * <p>Unexpected error during processing of request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>Advice to clients on when the call can be safely retried.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>Request references a resource which does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource.</p>
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
 * @public
 * <p>Request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The id of the resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the resource.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>The code to identify the service.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The code to identify the quota.</p>
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
 * <p>Request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The code to identify the service.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>The code to identify the quota.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p> Advice to clients on when the call can be safely retried.</p>
   */
  retryAfterSeconds?: number;

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
 * @public
 * <p>Stores information about a field that’s passed inside a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>Message describing why the field failed validation.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The name of the field.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason why the request failed validation.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The field that caused the error, if applicable.</p>
   */
  fieldList?: ValidationExceptionField[];

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
export interface DeleteSpaceInput {
  /**
   * @public
   * <p>The unique ID of the private re:Post.</p>
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterAdminInput {
  /**
   * @public
   * <p>The ID of the private re:Post to remove the admin from.</p>
   */
  spaceId: string | undefined;

  /**
   * @public
   * <p>The ID of the admin to remove.</p>
   */
  adminId: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceInput {
  /**
   * @public
   * <p>The ID of the private re:Post.</p>
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
   * @public
   * <p>The unique ID of the private re:Post.</p>
   */
  spaceId: string | undefined;

  /**
   * @public
   * <p>The ARN of the private re:Post.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the private re:Post.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The creation or deletion status of the private re:Post.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>The configuration status of the private re:Post.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * @public
   * <p>The Identity Center identifier for the Application Instance.</p>
   */
  clientId: string | undefined;

  /**
   * @public
   * <p>The description of the private re:Post.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The approval status of the custom subdomain.</p>
   */
  vanityDomainStatus: VanityDomainStatus | undefined;

  /**
   * @public
   * <p>The custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.</p>
   */
  vanityDomain: string | undefined;

  /**
   * @public
   * <p>The AWS generated subdomain of the private re:Post</p>
   */
  randomDomain: string | undefined;

  /**
   * @public
   * <p>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</p>
   */
  customerRoleArn?: string;

  /**
   * @public
   * <p>The date when the private re:Post was created.</p>
   */
  createDateTime: Date | undefined;

  /**
   * @public
   * <p>The date when the private re:Post was deleted.</p>
   */
  deleteDateTime?: Date;

  /**
   * @public
   * <p>The pricing tier of the private re:Post.</p>
   */
  tier: TierLevel | undefined;

  /**
   * @public
   * <p>The storage limit of the private re:Post.</p>
   */
  storageLimit: number | undefined;

  /**
   * @public
   * <p>The list of users that are administrators of the private re:Post.</p>
   */
  userAdmins?: string[];

  /**
   * @public
   * <p>The list of groups that are administrators of the private re:Post.</p>
   */
  groupAdmins?: string[];

  /**
   * @public
   * <p>The custom AWS KMS key ARN that’s used for the AWS KMS encryption.</p>
   */
  userKMSKey?: string;

  /**
   * @public
   * <p>The number of users that have onboarded to the private re:Post.</p>
   */
  userCount?: number;

  /**
   * @public
   * <p>The content size of the private re:Post.</p>
   */
  contentSize?: number;
}

/**
 * @public
 */
export interface ListSpacesInput {
  /**
   * @public
   * <p>The token for the next set of private re:Posts to return. You receive this token from a previous ListSpaces operation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of private re:Posts to include in the results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>A structure that contains some information about a private re:Post in the account.</p>
 */
export interface SpaceData {
  /**
   * @public
   * <p>The unique ID of the private re:Post.</p>
   */
  spaceId: string | undefined;

  /**
   * @public
   * <p>The ARN of the private re:Post.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name for the private re:Post.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description for the private re:Post. This is used only to help you identify this private re:Post.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The creation/deletion status of the private re:Post.</p>
   */
  status: string | undefined;

  /**
   * @public
   * <p>The configuration status of the private re:Post.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * @public
   * <p>This approval status of the custom subdomain.</p>
   */
  vanityDomainStatus: VanityDomainStatus | undefined;

  /**
   * @public
   * <p>This custom subdomain that you use to access your private re:Post. All custom subdomains must be approved by AWS before use.</p>
   */
  vanityDomain: string | undefined;

  /**
   * @public
   * <p>The AWS generated subdomain of the private re:Post.</p>
   */
  randomDomain: string | undefined;

  /**
   * @public
   * <p>The pricing tier of the private re:Post.</p>
   */
  tier: TierLevel | undefined;

  /**
   * @public
   * <p>The storage limit of the private re:Post.</p>
   */
  storageLimit: number | undefined;

  /**
   * @public
   * <p>The date when the private re:Post was created.</p>
   */
  createDateTime: Date | undefined;

  /**
   * @public
   * <p>The date when the private re:Post was deleted.</p>
   */
  deleteDateTime?: Date;

  /**
   * @public
   * <p>The custom AWS KMS key ARN that’s used for the AWS KMS encryption.</p>
   */
  userKMSKey?: string;

  /**
   * @public
   * <p>The number of onboarded users to the private re:Post.</p>
   */
  userCount?: number;

  /**
   * @public
   * <p>The content size of the private re:Post.</p>
   */
  contentSize?: number;
}

/**
 * @public
 */
export interface ListSpacesOutput {
  /**
   * @public
   * <p>An array of structures that contain some information about the private re:Posts in the account.</p>
   */
  spaces: SpaceData[] | undefined;

  /**
   * @public
   * <p>The token that you use when you request the next set of private re:Posts.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource that the tags are associated with.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tags that are associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface RegisterAdminInput {
  /**
   * @public
   * <p>The ID of the private re:Post.</p>
   */
  spaceId: string | undefined;

  /**
   * @public
   * <p>The ID of the administrator.</p>
   */
  adminId: string | undefined;
}

/**
 * @public
 */
export interface SendInvitesInput {
  /**
   * @public
   * <p>The ID of the private re:Post.</p>
   */
  spaceId: string | undefined;

  /**
   * @public
   * <p>The array of identifiers for the users and groups.</p>
   */
  accessorIds: string[] | undefined;

  /**
   * @public
   * <p>The title of the invite.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The body of the invite.</p>
   */
  body: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource that the tag is associated with.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that must be associated with the resource. You can associate tag keys only, tags (key and values) only, or a combination of tag keys and tags.</p>
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
   * @public
   * <p>The ARN of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The key values of the tag.</p>
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
   * @public
   * <p>The unique ID of this private re:Post.</p>
   */
  spaceId: string | undefined;

  /**
   * @public
   * <p>A description for the private re:Post. This is used only to help you identify this private re:Post.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The pricing tier of this private re:Post.</p>
   */
  tier?: TierLevel;

  /**
   * @public
   * <p>The IAM role that grants permissions to the private re:Post to convert unanswered questions into AWS support tickets.</p>
   */
  roleArn?: string;
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
