// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { DSQLServiceException as __BaseException } from "./DSQLServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
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
export const ClusterStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * <p>The submitted action has conflicts.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Resource Id</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>Resource Type</p>
   * @public
   */
  resourceType?: string | undefined;

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
 */
export interface CreateClusterInput {
  /**
   * <p>If enabled, you can't delete your cluster. You must first
   *       disable this property before you can delete your cluster.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>A map of key and value pairs to use to tag your cluster.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *       idempotency of the request. Idempotency ensures that an API request completes
   *        only once. With an idempotent request, if the original request completes
   *        successfully, the subsequent retries with the same client token return the
   *        result from the original successful request and they
   *        have no additional effect.</p>
   *          <p>If you don't specify a client token, the Amazon Web Services SDK
   *       automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Output Mixin
 * @public
 */
export interface CreateClusterOutput {
  /**
   * <p>The ID of the created cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the created cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the created cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when  created the cluster.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Whether deletion protection is enabled on this cluster.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error,
 *       exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Retry after seconds.</p>
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
 * <p>The service limit was exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the resource affected
   * @public
   */
  resourceId: string | undefined;

  /**
   * Type of the resource affected
   * @public
   */
  resourceType: string | undefined;

  /**
   * Service Quotas requirement to identify originating service
   * @public
   */
  serviceCode: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * Service Quotas requirement to identify originating service
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * Advice to clients on when the call can be safely retried
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
 * <p>Stores information about a field passed inside a
 *       request that resulted in an validation error.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why this field failed validation.</p>
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
  DELETION_PROTECTION_ENABLED: "deletionProtectionEnabled",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Reason the request failed validation
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * List of fields that caused the error
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
 * <p>Properties of linked clusters.</p>
 * @public
 */
export interface LinkedClusterProperties {
  /**
   * <p>Whether deletion protection is enabled.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>A map of key and value pairs the linked cluster is tagged with.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionClustersInput {
  /**
   * <p>An array of the Regions in which you want to create additional clusters.</p>
   * @public
   */
  linkedRegionList: string[] | undefined;

  /**
   * <p>A mapping of properties to use when creating linked clusters.</p>
   * @public
   */
  clusterProperties?: Record<string, LinkedClusterProperties> | undefined;

  /**
   * <p>The witness Region of multi-Region clusters.</p>
   * @public
   */
  witnessRegion: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *       idempotency of the request. Idempotency ensures that an API request completes
   *        only once. With an idempotent request, if the original request completes
   *        successfully. The subsequent retries with the same client token return the
   *        result from the original successful request and they
   *        have no additional effect.</p>
   *          <p>If you don't specify a client token, the Amazon Web Services SDK
   *       automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateMultiRegionClustersOutput {
  /**
   * <p>An array that contains the ARNs of all linked clusters.</p>
   * @public
   */
  linkedClusterArns: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteClusterInput {
  /**
   * <p>The ID of the cluster to delete.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *       idempotency of the request. Idempotency ensures that an API request completes
   *        only once. With an idempotent request, if the original request completes
   *        successfully. The subsequent retries with the same client token return the
   *        result from the original successful request and they
   *        have no additional effect.</p>
   *          <p>If you don't specify a client token, the Amazon Web Services SDK
   *       automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Output Mixin
 * @public
 */
export interface DeleteClusterOutput {
  /**
   * <p>The ID of the deleted cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the deleted cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when the cluster was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Specifies whether deletion protection was enabled on the cluster.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;
}

/**
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Hypothetical identifier of the resource which does not exist
   * @public
   */
  resourceId: string | undefined;

  /**
   * Hypothetical type of the resource which does not exist
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
 * @public
 */
export interface DeleteMultiRegionClustersInput {
  /**
   * <p>The ARNs of the clusters linked to the cluster you want to delete.
   *        also deletes these clusters as part of the operation.</p>
   * @public
   */
  linkedClusterArns: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *       idempotency of the request. Idempotency ensures that an API request completes
   *        only once. With an idempotent request, if the original request completes
   *        successfully. The subsequent retries with the same client token return the
   *        result from the original successful request and they
   *        have no additional effect.</p>
   *          <p>If you don't specify a client token, the Amazon Web Services SDK
   *       automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterInput {
  /**
   * <p>The ID of the cluster to retrieve.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * Output Mixin
 * @public
 */
export interface GetClusterOutput {
  /**
   * <p>The ID of the retrieved cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the retrieved cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the retrieved cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when the cluster was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Whether deletion protection is enabled in this cluster.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The witness Region of the cluster. Applicable only for
   *       multi-Region clusters.</p>
   * @public
   */
  witnessRegion?: string | undefined;

  /**
   * <p>The ARNs of the clusters linked to the retrieved cluster.</p>
   * @public
   */
  linkedClusterArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListClustersInput {
  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *       You can use nextToken to display the next page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If your initial ListClusters operation returns a nextToken,
   *        you can include the returned nextToken in following ListClusters operations,
   *        which returns results in the next page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A summary of the properties of a cluster.</p>
 * @public
 */
export interface ClusterSummary {
  /**
   * <p>The ID of the cluster.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the cluster.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface ListClustersOutput {
  /**
   * <p>If nextToken is returned, there are more results available. The value of
   *       nextToken is a unique pagination token for each page. To retrieve the
   *       next page, make the call again using the returned token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of the returned clusters.</p>
   * @public
   */
  clusters: ClusterSummary[] | undefined;
}

/**
 * @public
 */
export interface UpdateClusterInput {
  /**
   * <p>The ID of the cluster you want to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies whether to enable deletion protection in your cluster.</p>
   * @public
   */
  deletionProtectionEnabled?: boolean | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the
   *       idempotency of the request. Idempotency ensures that an API request completes
   *        only once. With an idempotent request, if the original request completes
   *        successfully. The subsequent retries with the same client token return the
   *        result from the original successful request and they
   *        have no additional effect.</p>
   *          <p>If you don't specify a client token, the Amazon Web Services SDK
   *       automatically generates one.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Output Mixin
 * @public
 */
export interface UpdateClusterOutput {
  /**
   * <p>The ID of the cluster to update.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The ARN of the updated cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the updated cluster.</p>
   * @public
   */
  status: ClusterStatus | undefined;

  /**
   * <p>The time of when the cluster was created.</p>
   * @public
   */
  creationTime: Date | undefined;

  /**
   * <p>Whether deletion protection is enabled for the updated cluster.</p>
   * @public
   */
  deletionProtectionEnabled: boolean | undefined;

  /**
   * <p>The Region that receives all data you write to linked clusters.</p>
   * @public
   */
  witnessRegion?: string | undefined;

  /**
   * <p>The ARNs of the clusters linked to the updated cluster. Applicable
   *       only for multi-Region clusters.</p>
   * @public
   */
  linkedClusterArns?: string[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The ARN of the resource for which you want to list the tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>A map of key and value pairs that you used to tag your resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key and value pairs to use to tag your resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the resource from which to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The array of keys of the tags that you want to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
