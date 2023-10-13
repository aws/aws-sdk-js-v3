// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";
import { DocumentType as __DocumentType } from "@smithy/types";

import { MarketplaceCatalogServiceException as __BaseException } from "./MarketplaceCatalogServiceException";

/**
 * @public
 * <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 */
export interface CancelChangeSetRequest {
  /**
   * @public
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>.</p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>Required. The unique identifier of the <code>StartChangeSet</code> request that you
   *             want to cancel.</p>
   */
  ChangeSetId: string | undefined;
}

/**
 * @public
 */
export interface CancelChangeSetResponse {
  /**
   * @public
   * <p>The unique identifier for the change set referenced in this request.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The ARN associated with the change set referenced in this request.</p>
   */
  ChangeSetArn?: string;
}

/**
 * @public
 * <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The resource is currently in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
  }
}

/**
 * @public
 * <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity resource that is associated with the
   *             resource policy.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DescribeChangeSetRequest {
  /**
   * @public
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>Required. The unique identifier for the <code>StartChangeSet</code> request that you
   *             want to describe the details for.</p>
   */
  ChangeSetId: string | undefined;
}

/**
 * @public
 * <p>An entity contains data that describes your product, its supported features, and how
 *             it can be used or launched by your customer. </p>
 */
export interface Entity {
  /**
   * @public
   * <p>The type of entity.</p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>The identifier for the entity.</p>
   */
  Identifier?: string;
}

/**
 * @public
 * <p>Details about the error.</p>
 */
export interface ErrorDetail {
  /**
   * @public
   * <p>The error code that identifies the type of error.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The message for the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>This object is a container for common summary information about the change. The
 *             summary doesn't contain the whole change structure.</p>
 */
export interface ChangeSummary {
  /**
   * @public
   * <p>The type of the change.</p>
   */
  ChangeType?: string;

  /**
   * @public
   * <p>The entity to be changed.</p>
   */
  Entity?: Entity;

  /**
   * @public
   * <p>This object contains details specific to the change type of the requested
   *             change.</p>
   */
  Details?: string;

  /**
   * @public
   * <p>The JSON value of the details specific to the change type of the requested change.</p>
   */
  DetailsDocument?: __DocumentType;

  /**
   * @public
   * <p>An array of <code>ErrorDetail</code> objects associated with the change.</p>
   */
  ErrorDetailList?: ErrorDetail[];

  /**
   * @public
   * <p>Optional name for the change.</p>
   */
  ChangeName?: string;
}

/**
 * @public
 * @enum
 */
export const FailureCode = {
  ClientError: "CLIENT_ERROR",
  ServerFault: "SERVER_FAULT",
} as const;

/**
 * @public
 */
export type FailureCode = (typeof FailureCode)[keyof typeof FailureCode];

/**
 * @public
 * @enum
 */
export const ChangeStatus = {
  APPLYING: "APPLYING",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  PREPARING: "PREPARING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ChangeStatus = (typeof ChangeStatus)[keyof typeof ChangeStatus];

/**
 * @public
 */
export interface DescribeChangeSetResponse {
  /**
   * @public
   * <p>Required. The unique identifier for the change set referenced in this request.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The ARN associated with the unique identifier for the change set referenced in this
   *             request.</p>
   */
  ChangeSetArn?: string;

  /**
   * @public
   * <p>The optional name provided in the <code>StartChangeSet</code> request. If you do not
   *             provide a name, one is set by default.</p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started.
   *         </p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned
   *             to a terminal state. The change cannot transition to a different state. Null if the
   *             request is not in a terminal state. </p>
   */
  EndTime?: string;

  /**
   * @public
   * <p>The status of the change request.</p>
   */
  Status?: ChangeStatus;

  /**
   * @public
   * <p>Returned if the change set is in <code>FAILED</code> status. Can be either
   *                 <code>CLIENT_ERROR</code>, which means that there are issues with the request (see
   *             the <code>ErrorDetailList</code>), or <code>SERVER_FAULT</code>, which means that there
   *             is a problem in the system, and you should retry your request.</p>
   */
  FailureCode?: FailureCode;

  /**
   * @public
   * <p>Returned if there is a failure on the change set, but that failure is not related to
   *             any of the changes in the request.</p>
   */
  FailureDescription?: string;

  /**
   * @public
   * <p>An array of <code>ChangeSummary</code> objects.</p>
   */
  ChangeSet?: ChangeSummary[];
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * @public
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>Required. The unique ID of the entity to describe.</p>
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * @public
   * <p>The named type of the entity, in the format of <code>EntityType@Version</code>.</p>
   */
  EntityType?: string;

  /**
   * @public
   * <p>The identifier of the entity, in the format of
   *             <code>EntityId@RevisionId</code>.</p>
   */
  EntityIdentifier?: string;

  /**
   * @public
   * <p>The ARN associated to the unique identifier for the entity referenced in this
   *             request.</p>
   */
  EntityArn?: string;

  /**
   * @public
   * <p>The last modified date of the entity, in ISO 8601 format
   *             (2018-02-27T13:45:22Z).</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>This stringified JSON object includes the details of the entity.</p>
   */
  Details?: string;

  /**
   * @public
   * <p>The JSON value of the details specific to the entity.</p>
   */
  DetailsDocument?: __DocumentType;
}

/**
 * @public
 * <p>Currently, the specified resource is not supported.</p>
 */
export class ResourceNotSupportedException extends __BaseException {
  readonly name: "ResourceNotSupportedException" = "ResourceNotSupportedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotSupportedException, __BaseException>) {
    super({
      name: "ResourceNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotSupportedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity resource that is associated with the
   *             resource policy.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>The policy document to set; formatted in JSON.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>A filter object, used to optionally filter results from calls to the
 *                 <code>ListEntities</code> and <code>ListChangeSets</code> actions.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>For <code>ListEntities</code>, the supported value for this is an
   *                 <code>EntityId</code>.</p>
   *          <p>For <code>ListChangeSets</code>, the supported values are as follows:</p>
   */
  Name?: string;

  /**
   * @public
   * <p>
   *             <code>ListEntities</code> - This is a list of unique <code>EntityId</code>s.</p>
   *          <p>
   *             <code>ListChangeSets</code> - The supported filter names and associated
   *                 <code>ValueList</code>s is as follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ChangeSetName</code> - The supported <code>ValueList</code> is a list of
   *                     non-unique <code>ChangeSetName</code>s. These are defined when you call the
   *                         <code>StartChangeSet</code> action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code> - The supported <code>ValueList</code> is a list of
   *                     statuses for all change set requests.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EntityId</code> - The supported <code>ValueList</code> is a list of
   *                     unique <code>EntityId</code>s.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BeforeStartTime</code> - The supported <code>ValueList</code> is a list
   *                     of all change sets that started before the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AfterStartTime</code> - The supported <code>ValueList</code> is a list
   *                     of all change sets that started after the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BeforeEndTime</code> - The supported <code>ValueList</code> is a list of
   *                     all change sets that ended before the filter value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AfterEndTime</code> - The supported <code>ValueList</code> is a list of
   *                     all change sets that ended after the filter value.</p>
   *             </li>
   *          </ul>
   */
  ValueList?: string[];
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>An object that contains two attributes, <code>SortBy</code> and
 *             <code>SortOrder</code>.</p>
 */
export interface Sort {
  /**
   * @public
   * <p>For <code>ListEntities</code>, supported attributes include
   *                 <code>LastModifiedDate</code> (default) and <code>EntityId</code>. In addition to
   *                 <code>LastModifiedDate</code> and <code>EntityId</code>, each
   *                 <code>EntityType</code> might support additional fields.</p>
   *          <p>For <code>ListChangeSets</code>, supported attributes include <code>StartTime</code>
   *             and <code>EndTime</code>.</p>
   */
  SortBy?: string;

  /**
   * @public
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The
   *             default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListChangeSetsRequest {
  /**
   * @public
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>An array of filter objects.</p>
   */
  FilterList?: Filter[];

  /**
   * @public
   * <p>An object that contains two attributes, <code>SortBy</code> and
   *             <code>SortOrder</code>.</p>
   */
  Sort?: Sort;

  /**
   * @public
   * <p>The maximum number of results returned by a single call. This value must be provided
   *             in the next call to retrieve the next set of results. By default, this value is
   *             20.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token value retrieved from a previous call to access the next page of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A summary of a change set returned in a list of change sets when the
 *                 <code>ListChangeSets</code> action is called.</p>
 */
export interface ChangeSetSummaryListItem {
  /**
   * @public
   * <p>The unique identifier for a change set.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The ARN associated with the unique identifier for the change set referenced in this
   *             request.</p>
   */
  ChangeSetArn?: string;

  /**
   * @public
   * <p>The non-unique name for the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was
   *             started.</p>
   */
  StartTime?: string;

  /**
   * @public
   * <p>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was
   *             finished.</p>
   */
  EndTime?: string;

  /**
   * @public
   * <p>The current status of the change set.</p>
   */
  Status?: ChangeStatus;

  /**
   * @public
   * <p>This object is a list of entity IDs (string) that are a part of a change set. The
   *             entity ID list is a maximum of 20 entities. It must contain at least one entity.</p>
   */
  EntityIdList?: string[];

  /**
   * @public
   * <p>Returned if the change set is in <code>FAILED</code> status. Can be either
   *                 <code>CLIENT_ERROR</code>, which means that there are issues with the request (see
   *             the <code>ErrorDetailList</code> of <code>DescribeChangeSet</code>), or
   *                 <code>SERVER_FAULT</code>, which means that there is a problem in the system, and
   *             you should retry your request.</p>
   */
  FailureCode?: FailureCode;
}

/**
 * @public
 */
export interface ListChangeSetsResponse {
  /**
   * @public
   * <p> Array of <code>ChangeSetSummaryListItem</code> objects.</p>
   */
  ChangeSetSummaryList?: ChangeSetSummaryListItem[];

  /**
   * @public
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const OwnershipType = {
  SELF: "SELF",
  SHARED: "SHARED",
} as const;

/**
 * @public
 */
export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType];

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * @public
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>The type of entities to retrieve.</p>
   */
  EntityType: string | undefined;

  /**
   * @public
   * <p>An array of filter objects. Each filter object contains two attributes,
   *                 <code>filterName</code> and <code>filterValues</code>.</p>
   */
  FilterList?: Filter[];

  /**
   * @public
   * <p>An object that contains two attributes, <code>SortBy</code> and
   *             <code>SortOrder</code>.</p>
   */
  Sort?: Sort;

  /**
   * @public
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies the upper limit of the elements on a single page. If a value isn't provided,
   *             the default value is 20.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters the returned set of entities based on their owner. The default is
   *                 <code>SELF</code>. To list entities shared with you
   *             through AWS Resource Access Manager (AWS RAM), set to <code>SHARED</code>. Entities shared through the AWS Marketplace
   *             Catalog API <code>PutResourcePolicy</code> operation can't be discovered through the
   *                 <code>SHARED</code> parameter.</p>
   */
  OwnershipType?: OwnershipType;
}

/**
 * @public
 * <p>This object is a container for common summary information about the entity. The
 *             summary doesn't contain the whole entity structure, but it does contain information
 *             common across all entities.</p>
 */
export interface EntitySummary {
  /**
   * @public
   * <p>The name for the entity. This value is not unique. It is defined by the seller.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the entity.</p>
   */
  EntityType?: string;

  /**
   * @public
   * <p>The unique identifier for the entity.</p>
   */
  EntityId?: string;

  /**
   * @public
   * <p>The ARN associated with the unique identifier for the entity.</p>
   */
  EntityArn?: string;

  /**
   * @public
   * <p>The last time the entity was published, using ISO 8601 format
   *             (2018-02-27T13:45:22Z).</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>The visibility status of the entity to buyers. This value can be <code>Public</code>
   *             (everyone can view the entity), <code>Limited</code> (the entity is visible to limited
   *             accounts only), or <code>Restricted</code> (the entity was published and then
   *             unpublished and only existing buyers can view it). </p>
   */
  Visibility?: string;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * @public
   * <p> Array of <code>EntitySummary</code> object.</p>
   */
  EntitySummaryList?: EntitySummary[];

  /**
   * @public
   * <p>The value of the next token if it exists. Null if there is no more result.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>Required. The Amazon Resource Name (ARN) associated with the resource you want to list
   *             tags on.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>A list of objects specifying each key name and value.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key associated with the tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value associated with the tag.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Required. The ARN associated with the resource you want to list tags on.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Required. A list of objects specifying each key name and value. Number of objects
   *             allowed: 1-50.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity resource you want to associate with a
   *             resource policy.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The policy document to set; formatted in JSON.</p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * @public
 * <p>The maximum number of open requests per account has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>An object that contains the <code>ChangeType</code>, <code>Details</code>, and
 *                 <code>Entity</code>.</p>
 */
export interface Change {
  /**
   * @public
   * <p>Change types are single string values that describe your intention for the change.
   *             Each change type is unique for each <code>EntityType</code> provided in the change's
   *             scope. For more information on change types available for single-AMI products, see
   *                 <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information about change
   *             types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
   */
  ChangeType: string | undefined;

  /**
   * @public
   * <p>The entity to be changed.</p>
   */
  Entity: Entity | undefined;

  /**
   * @public
   * <p>The tags associated with the change.</p>
   */
  EntityTags?: Tag[];

  /**
   * @public
   * <p>This object contains details specific to the change type of the requested change. For
   *             more information about change types available for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information about change
   *             types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
   */
  Details?: string;

  /**
   * @public
   * <p>Alternative field that accepts a JSON value instead of a string for
   *                 <code>ChangeType</code> details. You can use either <code>Details</code> or
   *                 <code>DetailsDocument</code>, but not both.</p>
   */
  DetailsDocument?: __DocumentType;

  /**
   * @public
   * <p>Optional name for the change.</p>
   */
  ChangeName?: string;
}

/**
 * @public
 */
export interface StartChangeSetRequest {
  /**
   * @public
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>Array of <code>change</code> object.</p>
   */
  ChangeSet: Change[] | undefined;

  /**
   * @public
   * <p>Optional case sensitive string of up to 100 ASCII characters. The change set name can
   *             be used to filter the list of change sets. </p>
   */
  ChangeSetName?: string;

  /**
   * @public
   * <p>A unique token to identify the request to ensure idempotency.</p>
   */
  ClientRequestToken?: string;

  /**
   * @public
   * <p>A list of objects specifying each key name and value for the
   *                 <code>ChangeSetTags</code> property.</p>
   */
  ChangeSetTags?: Tag[];
}

/**
 * @public
 */
export interface StartChangeSetResponse {
  /**
   * @public
   * <p>Unique identifier generated for the request.</p>
   */
  ChangeSetId?: string;

  /**
   * @public
   * <p>The ARN associated to the unique identifier generated for the request.</p>
   */
  ChangeSetArn?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>Required. The Amazon Resource Name (ARN) associated with the resource you want to
   *             tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Required. A list of objects specifying each key name and value. Number of objects
   *             allowed: 1-50.</p>
   */
  Tags: Tag[] | undefined;
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
   * <p>Required. The Amazon Resource Name (ARN) associated with the resource you want to
   *             remove the tag from.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>Required. A list of key names of tags to be removed. Number of strings allowed:
   *             0-256.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
