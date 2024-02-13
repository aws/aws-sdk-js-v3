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
 * <p>Object that allows filtering on entity id of an AMI product.</p>
 */
export interface AmiProductEntityIdFilter {
  /**
   * @public
   * <p>A string array of unique entity id values to be filtered on.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 */
export interface AmiProductLastModifiedDateFilterDateRange {
  /**
   * @public
   * <p>Date after which the AMI product was last modified.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Date before which the AMI product was last modified.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Object that allows filtering based on the last modified date of AMI products.</p>
 */
export interface AmiProductLastModifiedDateFilter {
  /**
   * @public
   * <p>Dates between which the AMI product was last modified.</p>
   */
  DateRange?: AmiProductLastModifiedDateFilterDateRange;
}

/**
 * @public
 * <p>Object that allows filtering on product title.</p>
 */
export interface AmiProductTitleFilter {
  /**
   * @public
   * <p>A string array of unique product title values to be filtered on.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * @enum
 */
export const AmiProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;

/**
 * @public
 */
export type AmiProductVisibilityString = (typeof AmiProductVisibilityString)[keyof typeof AmiProductVisibilityString];

/**
 * @public
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 */
export interface AmiProductVisibilityFilter {
  /**
   * @public
   * <p>A string array of unique visibility values to be filtered on.</p>
   */
  ValueList?: AmiProductVisibilityString[];
}

/**
 * @public
 * <p>Object containing all the filter fields for AMI products. Client can add only one wildcard filter and a maximum of 8
 *             filters in a single <code>ListEntities</code> request.</p>
 */
export interface AmiProductFilters {
  /**
   * @public
   * <p>Unique identifier for the AMI product.</p>
   */
  EntityId?: AmiProductEntityIdFilter;

  /**
   * @public
   * <p>The last date on which the AMI product was modified.</p>
   */
  LastModifiedDate?: AmiProductLastModifiedDateFilter;

  /**
   * @public
   * <p>The title of the AMI product.</p>
   */
  ProductTitle?: AmiProductTitleFilter;

  /**
   * @public
   * <p>The visibility of the AMI product.</p>
   */
  Visibility?: AmiProductVisibilityFilter;
}

/**
 * @public
 * @enum
 */
export const AmiProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;

/**
 * @public
 */
export type AmiProductSortBy = (typeof AmiProductSortBy)[keyof typeof AmiProductSortBy];

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
 * <p>Objects that allows sorting on AMI products based on certain fields and sorting order.</p>
 */
export interface AmiProductSort {
  /**
   * @public
   * <p>Field to sort the AMI products by.</p>
   */
  SortBy?: AmiProductSortBy;

  /**
   * @public
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Object that contains summarized information about an AMI product.</p>
 */
export interface AmiProductSummary {
  /**
   * @public
   * <p>The title of the AMI product.</p>
   */
  ProductTitle?: string;

  /**
   * @public
   * <p>The lifecycle of the AMI product.</p>
   */
  Visibility?: AmiProductVisibilityString;
}

/**
 * @public
 * <p>An object that contains entity ID and the catalog in which the entity is present.</p>
 */
export interface EntityRequest {
  /**
   * @public
   * <p>The name of the catalog the entity is present in. The only value at this time is
   *                 <code>AWSMarketplace</code>.</p>
   */
  Catalog: string | undefined;

  /**
   * @public
   * <p>The ID of the entity.</p>
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeEntitiesRequest {
  /**
   * @public
   * <p>List of entity IDs and the catalogs the entities are present in.</p>
   */
  EntityRequestList: EntityRequest[] | undefined;
}

/**
 * @public
 * <p>An object that contains metadata and details about the entity.</p>
 */
export interface EntityDetail {
  /**
   * @public
   * <p>The entity type of the entity, in the format of
   *             <code>EntityType@Version</code>.</p>
   */
  EntityType?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   */
  EntityArn?: string;

  /**
   * @public
   * <p>The ID of the entity, in the format of <code>EntityId@RevisionId</code>.</p>
   */
  EntityIdentifier?: string;

  /**
   * @public
   * <p>The last time the entity was modified.</p>
   */
  LastModifiedDate?: string;

  /**
   * @public
   * <p>An object that contains all the details of the entity.</p>
   */
  DetailsDocument?: __DocumentType;
}

/**
 * @public
 * <p>An object that contains an error code and error message.</p>
 */
export interface BatchDescribeErrorDetail {
  /**
   * @public
   * <p>The error code returned.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message returned.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface BatchDescribeEntitiesResponse {
  /**
   * @public
   * <p>Details about each entity.</p>
   */
  EntityDetails?: Record<string, EntityDetail>;

  /**
   * @public
   * <p>A map of errors returned, with <code>EntityId</code> as the key and
   *                 <code>errorDetail</code> as the value.</p>
   */
  Errors?: Record<string, BatchDescribeErrorDetail>;
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
export const Intent = {
  APPLY: "APPLY",
  VALIDATE: "VALIDATE",
} as const;

/**
 * @public
 */
export type Intent = (typeof Intent)[keyof typeof Intent];

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
   * <p>The optional intent provided in the <code>StartChangeSet</code> request. If you do not
   *             provide an intent, <code>APPLY</code> is set by default.</p>
   */
  Intent?: Intent;

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
 * <p>Object that allows filtering on entity id of a container product.</p>
 */
export interface ContainerProductEntityIdFilter {
  /**
   * @public
   * <p>A string array of unique entity id values to be filtered on.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 */
export interface ContainerProductLastModifiedDateFilterDateRange {
  /**
   * @public
   * <p>Date after which the container product was last modified.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Date before which the container product was last modified.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Object that allows filtering based on the last modified date of container products.</p>
 */
export interface ContainerProductLastModifiedDateFilter {
  /**
   * @public
   * <p>Dates between which the container product was last modified.</p>
   */
  DateRange?: ContainerProductLastModifiedDateFilterDateRange;
}

/**
 * @public
 * <p>Object that allows filtering on product title.</p>
 */
export interface ContainerProductTitleFilter {
  /**
   * @public
   * <p>A string array of unique product title values to be filtered on.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * @enum
 */
export const ContainerProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;

/**
 * @public
 */
export type ContainerProductVisibilityString =
  (typeof ContainerProductVisibilityString)[keyof typeof ContainerProductVisibilityString];

/**
 * @public
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 */
export interface ContainerProductVisibilityFilter {
  /**
   * @public
   * <p>A string array of unique visibility values to be filtered on.</p>
   */
  ValueList?: ContainerProductVisibilityString[];
}

/**
 * @public
 * <p>Object containing all the filter fields for container products. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 */
export interface ContainerProductFilters {
  /**
   * @public
   * <p>Unique identifier for the container product.</p>
   */
  EntityId?: ContainerProductEntityIdFilter;

  /**
   * @public
   * <p>The last date on which the container product was modified.</p>
   */
  LastModifiedDate?: ContainerProductLastModifiedDateFilter;

  /**
   * @public
   * <p>The title of the container product.</p>
   */
  ProductTitle?: ContainerProductTitleFilter;

  /**
   * @public
   * <p>The visibility of the container product.</p>
   */
  Visibility?: ContainerProductVisibilityFilter;
}

/**
 * @public
 * <p>Object that allows filtering on entity id of a data product.</p>
 */
export interface DataProductEntityIdFilter {
  /**
   * @public
   * <p>A string array of unique entity id values to be filtered on.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 */
export interface DataProductLastModifiedDateFilterDateRange {
  /**
   * @public
   * <p>Date after which the data product was last modified.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Date before which the data product was last modified.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Object that allows filtering based on the last modified date of data products.</p>
 */
export interface DataProductLastModifiedDateFilter {
  /**
   * @public
   * <p>Dates between which the data product was last modified.</p>
   */
  DateRange?: DataProductLastModifiedDateFilterDateRange;
}

/**
 * @public
 * <p>Object that allows filtering on product title.</p>
 */
export interface DataProductTitleFilter {
  /**
   * @public
   * <p>A string array of unique product title values to be filtered on.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * @enum
 */
export const DataProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
  Unavailable: "Unavailable",
} as const;

/**
 * @public
 */
export type DataProductVisibilityString =
  (typeof DataProductVisibilityString)[keyof typeof DataProductVisibilityString];

/**
 * @public
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 */
export interface DataProductVisibilityFilter {
  /**
   * @public
   * <p>A string array of unique visibility values to be filtered on.</p>
   */
  ValueList?: DataProductVisibilityString[];
}

/**
 * @public
 * <p>Object containing all the filter fields for data products. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 */
export interface DataProductFilters {
  /**
   * @public
   * <p>Unique identifier for the data product.</p>
   */
  EntityId?: DataProductEntityIdFilter;

  /**
   * @public
   * <p>The title of the data product.</p>
   */
  ProductTitle?: DataProductTitleFilter;

  /**
   * @public
   * <p>The visibility of the data product.</p>
   */
  Visibility?: DataProductVisibilityFilter;

  /**
   * @public
   * <p>The last date on which the data product was modified.</p>
   */
  LastModifiedDate?: DataProductLastModifiedDateFilter;
}

/**
 * @public
 * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer with date range as input.</p>
 */
export interface OfferAvailabilityEndDateFilterDateRange {
  /**
   * @public
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer after a date.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer before a date.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer.</p>
 */
export interface OfferAvailabilityEndDateFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer with date range as input.</p>
   */
  DateRange?: OfferAvailabilityEndDateFilterDateRange;
}

/**
 * @public
 * <p>Allows filtering on the <code>BuyerAccounts</code> of an offer.</p>
 */
export interface OfferBuyerAccountsFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>BuyerAccounts</code> of an offer with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the entity id of an offer.</p>
 */
export interface OfferEntityIdFilter {
  /**
   * @public
   * <p>Allows filtering on entity id of an offer with list input.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer with date range as input.</p>
 */
export interface OfferLastModifiedDateFilterDateRange {
  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer after a date.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer before a date.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer.</p>
 */
export interface OfferLastModifiedDateFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer with date range as input.</p>
   */
  DateRange?: OfferLastModifiedDateFilterDateRange;
}

/**
 * @public
 * <p>Allows filtering on the <code>Name</code> of an offer.</p>
 */
export interface OfferNameFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>Name</code> of an offer with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>Name</code> of an offer with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>ProductId</code> of an offer.</p>
 */
export interface OfferProductIdFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ProductId</code> of an offer with list input.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Allows filtering on the <code>ReleaseDate</code> of an offer with date range as input.</p>
 */
export interface OfferReleaseDateFilterDateRange {
  /**
   * @public
   * <p>Allows filtering on the <code>ReleaseDate</code> of offers after a date.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Allows filtering on the <code>ReleaseDate</code> of offers before a date.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>ReleaseDate</code> of an offer.</p>
 */
export interface OfferReleaseDateFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ReleaseDate</code> of an offer with date range as input.</p>
   */
  DateRange?: OfferReleaseDateFilterDateRange;
}

/**
 * @public
 * @enum
 */
export const OfferStateString = {
  Draft: "Draft",
  Released: "Released",
} as const;

/**
 * @public
 */
export type OfferStateString = (typeof OfferStateString)[keyof typeof OfferStateString];

/**
 * @public
 * <p>Allows filtering on the <code>State</code> of an offer.</p>
 */
export interface OfferStateFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>State</code> of an offer with list input.</p>
   */
  ValueList?: OfferStateString[];
}

/**
 * @public
 * @enum
 */
export const OfferTargetingString = {
  BuyerAccounts: "BuyerAccounts",
  CountryCodes: "CountryCodes",
  None: "None",
  ParticipatingPrograms: "ParticipatingPrograms",
} as const;

/**
 * @public
 */
export type OfferTargetingString = (typeof OfferTargetingString)[keyof typeof OfferTargetingString];

/**
 * @public
 * <p>Allows filtering on the <code>Targeting</code> of an offer.</p>
 */
export interface OfferTargetingFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>Targeting</code> of an offer with list input.</p>
   */
  ValueList?: OfferTargetingString[];
}

/**
 * @public
 * <p>Object containing all the filter fields for offers entity. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 */
export interface OfferFilters {
  /**
   * @public
   * <p>Allows filtering on <code>EntityId</code> of an offer.</p>
   */
  EntityId?: OfferEntityIdFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>Name</code> of an offer.</p>
   */
  Name?: OfferNameFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ProductId</code> of an offer.</p>
   */
  ProductId?: OfferProductIdFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ReleaseDate</code> of an offer.</p>
   */
  ReleaseDate?: OfferReleaseDateFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer.</p>
   */
  AvailabilityEndDate?: OfferAvailabilityEndDateFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>BuyerAccounts</code> of an offer.</p>
   */
  BuyerAccounts?: OfferBuyerAccountsFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>State</code> of an offer.</p>
   */
  State?: OfferStateFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>Targeting</code> of an offer.</p>
   */
  Targeting?: OfferTargetingFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer.</p>
   */
  LastModifiedDate?: OfferLastModifiedDateFilter;
}

/**
 * @public
 * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization with date range as input.</p>
 */
export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
  /**
   * @public
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization after a date.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization before a date.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationAvailabilityEndDateFilter {
  /**
   * @public
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization with date range as input</p>
   */
  DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange;

  /**
   * @public
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization with date value as input.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization with date range as input.</p>
 */
export interface ResaleAuthorizationCreatedDateFilterDateRange {
  /**
   * @public
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization after a date.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization before a date.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationCreatedDateFilter {
  /**
   * @public
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization with date range as input.</p>
   */
  DateRange?: ResaleAuthorizationCreatedDateFilterDateRange;

  /**
   * @public
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization with date value as input.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Allows filtering on <code>EntityId</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationEntityIdFilter {
  /**
   * @public
   * <p>Allows filtering on <code>EntityId</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization with date range as input.</p>
 */
export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization after a date.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization before a date.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationLastModifiedDateFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization with date range as input.</p>
   */
  DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange;
}

/**
 * @public
 * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationManufacturerAccountIdFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationManufacturerLegalNameFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationNameFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>OfferExtendedStatus</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationOfferExtendedStatusFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>OfferExtendedStatus</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationProductIdFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationProductNameFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationResellerAccountIDFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * <p>Allows filtering on the ResellerLegalName of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationResellerLegalNameFilter {
  /**
   * @public
   * <p>Allows filtering on the ResellerLegalNameProductName of a ResaleAuthorization with list input.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>Allows filtering on the ResellerLegalName of a ResaleAuthorization with wild card input.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * @enum
 */
export const ResaleAuthorizationStatusString = {
  Active: "Active",
  Draft: "Draft",
  Restricted: "Restricted",
} as const;

/**
 * @public
 */
export type ResaleAuthorizationStatusString =
  (typeof ResaleAuthorizationStatusString)[keyof typeof ResaleAuthorizationStatusString];

/**
 * @public
 * <p>Allows filtering on the <code>Status</code> of a ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationStatusFilter {
  /**
   * @public
   * <p>Allows filtering on the <code>Status</code> of a ResaleAuthorization with list input.</p>
   */
  ValueList?: ResaleAuthorizationStatusString[];
}

/**
 * @public
 * <p>Object containing all the filter fields for resale authorization entity. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 */
export interface ResaleAuthorizationFilters {
  /**
   * @public
   * <p>Allows filtering on the <code>EntityId</code> of a ResaleAuthorization.</p>
   */
  EntityId?: ResaleAuthorizationEntityIdFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization.</p>
   */
  Name?: ResaleAuthorizationNameFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization.</p>
   */
  ProductId?: ResaleAuthorizationProductIdFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>CreatedDate</code> of a ResaleAuthorization.</p>
   */
  CreatedDate?: ResaleAuthorizationCreatedDateFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of a ResaleAuthorization.</p>
   */
  AvailabilityEndDate?: ResaleAuthorizationAvailabilityEndDateFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization.</p>
   */
  ManufacturerAccountId?: ResaleAuthorizationManufacturerAccountIdFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization.</p>
   */
  ProductName?: ResaleAuthorizationProductNameFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization.</p>
   */
  ManufacturerLegalName?: ResaleAuthorizationManufacturerLegalNameFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization.</p>
   */
  ResellerAccountID?: ResaleAuthorizationResellerAccountIDFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>ResellerLegalName</code> of a ResaleAuthorization.</p>
   */
  ResellerLegalName?: ResaleAuthorizationResellerLegalNameFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>Status</code> of a ResaleAuthorization.</p>
   */
  Status?: ResaleAuthorizationStatusFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>OfferExtendedStatus</code> of a ResaleAuthorization.</p>
   */
  OfferExtendedStatus?: ResaleAuthorizationOfferExtendedStatusFilter;

  /**
   * @public
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization.</p>
   */
  LastModifiedDate?: ResaleAuthorizationLastModifiedDateFilter;
}

/**
 * @public
 * <p>Object that allows filtering on entity id of a SaaS product.</p>
 */
export interface SaaSProductEntityIdFilter {
  /**
   * @public
   * <p>A string array of unique entity id values to be filtered on.</p>
   */
  ValueList?: string[];
}

/**
 * @public
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 */
export interface SaaSProductLastModifiedDateFilterDateRange {
  /**
   * @public
   * <p>Date after which the SaaS product was last modified.</p>
   */
  AfterValue?: string;

  /**
   * @public
   * <p>Date before which the SaaS product was last modified.</p>
   */
  BeforeValue?: string;
}

/**
 * @public
 * <p>Object that allows filtering based on the last modified date of SaaS products</p>
 */
export interface SaaSProductLastModifiedDateFilter {
  /**
   * @public
   * <p>Dates between which the SaaS product was last modified.</p>
   */
  DateRange?: SaaSProductLastModifiedDateFilterDateRange;
}

/**
 * @public
 * <p>Object that allows filtering on product title.</p>
 */
export interface SaaSProductTitleFilter {
  /**
   * @public
   * <p>A string array of unique product title values to be filtered on.</p>
   */
  ValueList?: string[];

  /**
   * @public
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   */
  WildCardValue?: string;
}

/**
 * @public
 * @enum
 */
export const SaaSProductVisibilityString = {
  Draft: "Draft",
  Limited: "Limited",
  Public: "Public",
  Restricted: "Restricted",
} as const;

/**
 * @public
 */
export type SaaSProductVisibilityString =
  (typeof SaaSProductVisibilityString)[keyof typeof SaaSProductVisibilityString];

/**
 * @public
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 */
export interface SaaSProductVisibilityFilter {
  /**
   * @public
   * <p>A string array of unique visibility values to be filtered on.</p>
   */
  ValueList?: SaaSProductVisibilityString[];
}

/**
 * @public
 * <p>Object containing all the filter fields for SaaS products. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 */
export interface SaaSProductFilters {
  /**
   * @public
   * <p>Unique identifier for the SaaS product.</p>
   */
  EntityId?: SaaSProductEntityIdFilter;

  /**
   * @public
   * <p>The title of the SaaS product.</p>
   */
  ProductTitle?: SaaSProductTitleFilter;

  /**
   * @public
   * <p>The visibility of the SaaS product.</p>
   */
  Visibility?: SaaSProductVisibilityFilter;

  /**
   * @public
   * <p>The last date on which the SaaS product was modified.</p>
   */
  LastModifiedDate?: SaaSProductLastModifiedDateFilter;
}

/**
 * @public
 * <p>Object containing all the filter fields per entity type.</p>
 */
export type EntityTypeFilters =
  | EntityTypeFilters.AmiProductFiltersMember
  | EntityTypeFilters.ContainerProductFiltersMember
  | EntityTypeFilters.DataProductFiltersMember
  | EntityTypeFilters.OfferFiltersMember
  | EntityTypeFilters.ResaleAuthorizationFiltersMember
  | EntityTypeFilters.SaaSProductFiltersMember
  | EntityTypeFilters.$UnknownMember;

/**
 * @public
 */
export namespace EntityTypeFilters {
  /**
   * @public
   * <p>A filter for data products.</p>
   */
  export interface DataProductFiltersMember {
    DataProductFilters: DataProductFilters;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for SaaS products.</p>
   */
  export interface SaaSProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters: SaaSProductFilters;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for AMI products.</p>
   */
  export interface AmiProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters: AmiProductFilters;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for offers.</p>
   */
  export interface OfferFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters: OfferFilters;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for container products.</p>
   */
  export interface ContainerProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters: ContainerProductFilters;
    ResaleAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A filter for Resale Authorizations.</p>
   */
  export interface ResaleAuthorizationFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters: ResaleAuthorizationFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    DataProductFilters: (value: DataProductFilters) => T;
    SaaSProductFilters: (value: SaaSProductFilters) => T;
    AmiProductFilters: (value: AmiProductFilters) => T;
    OfferFilters: (value: OfferFilters) => T;
    ContainerProductFilters: (value: ContainerProductFilters) => T;
    ResaleAuthorizationFilters: (value: ResaleAuthorizationFilters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EntityTypeFilters, visitor: Visitor<T>): T => {
    if (value.DataProductFilters !== undefined) return visitor.DataProductFilters(value.DataProductFilters);
    if (value.SaaSProductFilters !== undefined) return visitor.SaaSProductFilters(value.SaaSProductFilters);
    if (value.AmiProductFilters !== undefined) return visitor.AmiProductFilters(value.AmiProductFilters);
    if (value.OfferFilters !== undefined) return visitor.OfferFilters(value.OfferFilters);
    if (value.ContainerProductFilters !== undefined)
      return visitor.ContainerProductFilters(value.ContainerProductFilters);
    if (value.ResaleAuthorizationFilters !== undefined)
      return visitor.ResaleAuthorizationFilters(value.ResaleAuthorizationFilters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ContainerProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;

/**
 * @public
 */
export type ContainerProductSortBy = (typeof ContainerProductSortBy)[keyof typeof ContainerProductSortBy];

/**
 * @public
 * <p>Objects that allows sorting on container products based on certain fields and sorting order.</p>
 */
export interface ContainerProductSort {
  /**
   * @public
   * <p>Field to sort the container products by.</p>
   */
  SortBy?: ContainerProductSortBy;

  /**
   * @public
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * @enum
 */
export const DataProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;

/**
 * @public
 */
export type DataProductSortBy = (typeof DataProductSortBy)[keyof typeof DataProductSortBy];

/**
 * @public
 * <p>Objects that allows sorting on data products based on certain fields and sorting order.</p>
 */
export interface DataProductSort {
  /**
   * @public
   * <p>Field to sort the data products by.</p>
   */
  SortBy?: DataProductSortBy;

  /**
   * @public
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * @enum
 */
export const OfferSortBy = {
  AvailabilityEndDate: "AvailabilityEndDate",
  BuyerAccounts: "BuyerAccounts",
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  Name: "Name",
  ProductId: "ProductId",
  ReleaseDate: "ReleaseDate",
  State: "State",
  Targeting: "Targeting",
} as const;

/**
 * @public
 */
export type OfferSortBy = (typeof OfferSortBy)[keyof typeof OfferSortBy];

/**
 * @public
 * <p>Allows to sort offers.</p>
 */
export interface OfferSort {
  /**
   * @public
   * <p>Allows to sort offers.</p>
   */
  SortBy?: OfferSortBy;

  /**
   * @public
   * <p>Allows to sort offers.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * @enum
 */
export const ResaleAuthorizationSortBy = {
  AvailabilityEndDate: "AvailabilityEndDate",
  CreatedDate: "CreatedDate",
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ManufacturerAccountId: "ManufacturerAccountId",
  ManufacturerLegalName: "ManufacturerLegalName",
  Name: "Name",
  OfferExtendedStatus: "OfferExtendedStatus",
  ProductId: "ProductId",
  ProductName: "ProductName",
  ResellerAccountID: "ResellerAccountID",
  ResellerLegalName: "ResellerLegalName",
  Status: "Status",
} as const;

/**
 * @public
 */
export type ResaleAuthorizationSortBy = (typeof ResaleAuthorizationSortBy)[keyof typeof ResaleAuthorizationSortBy];

/**
 * @public
 * <p>Allows to sort ResaleAuthorization.</p>
 */
export interface ResaleAuthorizationSort {
  /**
   * @public
   * <p>Allows to sort ResaleAuthorization.</p>
   */
  SortBy?: ResaleAuthorizationSortBy;

  /**
   * @public
   * <p>Allows to sort ResaleAuthorization.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * @enum
 */
export const SaaSProductSortBy = {
  EntityId: "EntityId",
  LastModifiedDate: "LastModifiedDate",
  ProductTitle: "ProductTitle",
  Visibility: "Visibility",
} as const;

/**
 * @public
 */
export type SaaSProductSortBy = (typeof SaaSProductSortBy)[keyof typeof SaaSProductSortBy];

/**
 * @public
 * <p>Objects that allows sorting on SaaS products based on certain fields and sorting order.</p>
 */
export interface SaaSProductSort {
  /**
   * @public
   * <p>Field to sort the SaaS products by.</p>
   */
  SortBy?: SaaSProductSortBy;

  /**
   * @public
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: SortOrder;
}

/**
 * @public
 * <p>Object containing all the sort fields per entity type.</p>
 */
export type EntityTypeSort =
  | EntityTypeSort.AmiProductSortMember
  | EntityTypeSort.ContainerProductSortMember
  | EntityTypeSort.DataProductSortMember
  | EntityTypeSort.OfferSortMember
  | EntityTypeSort.ResaleAuthorizationSortMember
  | EntityTypeSort.SaaSProductSortMember
  | EntityTypeSort.$UnknownMember;

/**
 * @public
 */
export namespace EntityTypeSort {
  /**
   * @public
   * <p>A sort for data products.</p>
   */
  export interface DataProductSortMember {
    DataProductSort: DataProductSort;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A sort for SaaS products.</p>
   */
  export interface SaaSProductSortMember {
    DataProductSort?: never;
    SaaSProductSort: SaaSProductSort;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A sort for AMI products.</p>
   */
  export interface AmiProductSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort: AmiProductSort;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A sort for offers.</p>
   */
  export interface OfferSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort: OfferSort;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A sort for container products.</p>
   */
  export interface ContainerProductSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort: ContainerProductSort;
    ResaleAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>A sort for Resale Authorizations.</p>
   */
  export interface ResaleAuthorizationSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort: ResaleAuthorizationSort;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    DataProductSort: (value: DataProductSort) => T;
    SaaSProductSort: (value: SaaSProductSort) => T;
    AmiProductSort: (value: AmiProductSort) => T;
    OfferSort: (value: OfferSort) => T;
    ContainerProductSort: (value: ContainerProductSort) => T;
    ResaleAuthorizationSort: (value: ResaleAuthorizationSort) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EntityTypeSort, visitor: Visitor<T>): T => {
    if (value.DataProductSort !== undefined) return visitor.DataProductSort(value.DataProductSort);
    if (value.SaaSProductSort !== undefined) return visitor.SaaSProductSort(value.SaaSProductSort);
    if (value.AmiProductSort !== undefined) return visitor.AmiProductSort(value.AmiProductSort);
    if (value.OfferSort !== undefined) return visitor.OfferSort(value.OfferSort);
    if (value.ContainerProductSort !== undefined) return visitor.ContainerProductSort(value.ContainerProductSort);
    if (value.ResaleAuthorizationSort !== undefined)
      return visitor.ResaleAuthorizationSort(value.ResaleAuthorizationSort);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
   * <p>The type of entities to
   *             retrieve. Valid
   *             values are: <code>AmiProduct</code>, <code>ContainerProduct</code>,
   *                 <code>DataProduct</code>, <code>SaaSProduct</code>, <code>ProcurementPolicy</code>,
   *                 <code>Experience</code>, <code>Audience</code>, <code>BrandingSettings</code>,
   *                 <code>Offer</code>, <code>Seller</code>,
   *             <code>ResaleAuthorization</code>.</p>
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

  /**
   * @public
   * <p>A Union object containing filter shapes for all <code>EntityType</code>s. Each
   *                 <code>EntityTypeFilter</code> shape will have filters applicable for that
   *                 <code>EntityType</code> that can be used to search or filter entities.</p>
   */
  EntityTypeFilters?: EntityTypeFilters;

  /**
   * @public
   * <p>A Union object containing <code>Sort</code> shapes for all <code>EntityType</code>s.
   *             Each <code>EntityTypeSort</code> shape will have <code>SortBy</code> and
   *                 <code>SortOrder</code> applicable for fields on that <code>EntityType</code>. This
   *             can be used to sort the results of the filter query.</p>
   */
  EntityTypeSort?: EntityTypeSort;
}

/**
 * @public
 * <p>Object that contains summarized information about a container product.</p>
 */
export interface ContainerProductSummary {
  /**
   * @public
   * <p>The title of the container product.</p>
   */
  ProductTitle?: string;

  /**
   * @public
   * <p>The lifecycle of the product.</p>
   */
  Visibility?: ContainerProductVisibilityString;
}

/**
 * @public
 * <p>Object that contains summarized information about a data product.</p>
 */
export interface DataProductSummary {
  /**
   * @public
   * <p>The title of the data product.</p>
   */
  ProductTitle?: string;

  /**
   * @public
   * <p>The lifecycle of the data product.</p>
   */
  Visibility?: DataProductVisibilityString;
}

/**
 * @public
 * <p>Summarized information about an offer.</p>
 */
export interface OfferSummary {
  /**
   * @public
   * <p>The name of the offer.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The product ID of the offer.</p>
   */
  ProductId?: string;

  /**
   * @public
   * <p>The release date of the offer.</p>
   */
  ReleaseDate?: string;

  /**
   * @public
   * <p>The availability end date of the offer.</p>
   */
  AvailabilityEndDate?: string;

  /**
   * @public
   * <p>The buyer accounts in the offer.</p>
   */
  BuyerAccounts?: string[];

  /**
   * @public
   * <p>The status of the offer.</p>
   */
  State?: OfferStateString;

  /**
   * @public
   * <p>The targeting in the offer.</p>
   */
  Targeting?: OfferTargetingString[];
}

/**
 * @public
 * <p>Summarized information about a Resale Authorization.</p>
 */
export interface ResaleAuthorizationSummary {
  /**
   * @public
   * <p>The name of the ResaleAuthorization.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The product ID of the ResaleAuthorization.</p>
   */
  ProductId?: string;

  /**
   * @public
   * <p>The product name of the ResaleAuthorization.</p>
   */
  ProductName?: string;

  /**
   * @public
   * <p>The manufacturer account ID of the ResaleAuthorization.</p>
   */
  ManufacturerAccountId?: string;

  /**
   * @public
   * <p>The manufacturer legal name of the ResaleAuthorization.</p>
   */
  ManufacturerLegalName?: string;

  /**
   * @public
   * <p>The reseller account ID of the ResaleAuthorization.</p>
   */
  ResellerAccountID?: string;

  /**
   * @public
   * <p>The reseller legal name of the ResaleAuthorization</p>
   */
  ResellerLegalName?: string;

  /**
   * @public
   * <p>The status of the ResaleAuthorization.</p>
   */
  Status?: ResaleAuthorizationStatusString;

  /**
   * @public
   * <p>The offer extended status of the ResaleAuthorization</p>
   */
  OfferExtendedStatus?: string;

  /**
   * @public
   * <p>The created date of the ResaleAuthorization.</p>
   */
  CreatedDate?: string;

  /**
   * @public
   * <p>The availability end date of the ResaleAuthorization.</p>
   */
  AvailabilityEndDate?: string;
}

/**
 * @public
 * <p>Object that contains summarized information about a SaaS product.</p>
 */
export interface SaaSProductSummary {
  /**
   * @public
   * <p>The title of the SaaS product.</p>
   */
  ProductTitle?: string;

  /**
   * @public
   * <p>The lifecycle of the SaaS product.</p>
   */
  Visibility?: SaaSProductVisibilityString;
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

  /**
   * @public
   * <p>An object that contains summary information about the AMI product.</p>
   */
  AmiProductSummary?: AmiProductSummary;

  /**
   * @public
   * <p>An object that contains summary information about the container product.</p>
   */
  ContainerProductSummary?: ContainerProductSummary;

  /**
   * @public
   * <p>An object that contains summary information about the data product.</p>
   */
  DataProductSummary?: DataProductSummary;

  /**
   * @public
   * <p>An object that contains summary information about the SaaS product.</p>
   */
  SaaSProductSummary?: SaaSProductSummary;

  /**
   * @public
   * <p>An object that contains summary information about the offer.</p>
   */
  OfferSummary?: OfferSummary;

  /**
   * @public
   * <p>An object that contains summary information about the Resale Authorization.</p>
   */
  ResaleAuthorizationSummary?: ResaleAuthorizationSummary;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * @public
   * <p>Array of <code>EntitySummary</code> objects.</p>
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
   *             scope. For more information about change types available for single-AMI products, see
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

  /**
   * @public
   * <p>The intent related to the request. The default is <code>APPLY</code>.
   *             To test your request before applying changes to your entities, use <code>VALIDATE</code>.
   *             This feature is currently available for adding versions to single-AMI products. For more information, see
   *             <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#ami-add-version">Add a new version</a>.</p>
   */
  Intent?: Intent;
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
