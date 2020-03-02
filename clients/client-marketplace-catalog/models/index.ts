import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access is denied.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
}

export interface CancelChangeSetRequest {
  __type?: "CancelChangeSetRequest";
  /**
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>.</p>
   */
  Catalog: string | undefined;

  /**
   * <p>Required. The unique identifier of the <code>StartChangeSet</code> request that you
   *             want to cancel.</p>
   */
  ChangeSetId: string | undefined;
}

export namespace CancelChangeSetRequest {
  export function isa(o: any): o is CancelChangeSetRequest {
    return __isa(o, "CancelChangeSetRequest");
  }
}

export interface CancelChangeSetResponse {
  __type?: "CancelChangeSetResponse";
  /**
   * <p>The ARN associated with the change set referenced in this request.</p>
   */
  ChangeSetArn?: string;

  /**
   * <p>The unique identifier for the change set referenced in this request.</p>
   */
  ChangeSetId?: string;
}

export namespace CancelChangeSetResponse {
  export function isa(o: any): o is CancelChangeSetResponse {
    return __isa(o, "CancelChangeSetResponse");
  }
}

/**
 * <p>An object that contains the <code>ChangeType</code>, <code>Details</code>, and
 *                 <code>Entity</code>.</p>
 */
export interface Change {
  __type?: "Change";
  /**
   * <p>Change types are single string values that describe your intention for the change.
   *             Each change type is unique for each <code>EntityType</code> provided in the change's
   *             scope.</p>
   */
  ChangeType: string | undefined;

  /**
   * <p>This object contains details specific to the change type of the requested
   *             change.</p>
   */
  Details: string | undefined;

  /**
   * <p>The entity to be changed.</p>
   */
  Entity: Entity | undefined;
}

export namespace Change {
  export function isa(o: any): o is Change {
    return __isa(o, "Change");
  }
}

/**
 * <p>A summary of a change set returned in a list of change sets when the
 *                 <code>ListChangeSets</code> action is called.</p>
 */
export interface ChangeSetSummaryListItem {
  __type?: "ChangeSetSummaryListItem";
  /**
   * <p>The ARN associated with the unique identifier for the change set referenced in this
   *             request.</p>
   */
  ChangeSetArn?: string;

  /**
   * <p>The unique identifier for a change set.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The non-unique name for the change set.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was
   *             finished.</p>
   */
  EndTime?: string;

  /**
   * <p>This object is a list of entity IDs (string) that are a part of a change set. The
   *             entity ID list is a maximum of 20 entities. It must contain at least one entity.</p>
   */
  EntityIdList?: Array<string>;

  /**
   * <p>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was
   *             started.</p>
   */
  StartTime?: string;

  /**
   * <p>The current status of the change set.</p>
   */
  Status?: ChangeStatus | string;
}

export namespace ChangeSetSummaryListItem {
  export function isa(o: any): o is ChangeSetSummaryListItem {
    return __isa(o, "ChangeSetSummaryListItem");
  }
}

export enum ChangeStatus {
  APPLYING = "APPLYING",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  PREPARING = "PREPARING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>This object is a container for common summary information about the change. The
 *             summary doesn't contain the whole change structure.</p>
 */
export interface ChangeSummary {
  __type?: "ChangeSummary";
  /**
   * <p>The type of the change.</p>
   */
  ChangeType?: string;

  /**
   * <p>The entity to be changed.</p>
   */
  Entity?: Entity;

  /**
   * <p>An array of <code>ErrorDetail</code> objects associated with the change.</p>
   */
  ErrorDetailList?: Array<ErrorDetail>;
}

export namespace ChangeSummary {
  export function isa(o: any): o is ChangeSummary {
    return __isa(o, "ChangeSummary");
  }
}

export interface DescribeChangeSetRequest {
  __type?: "DescribeChangeSetRequest";
  /**
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * <p>Required. The unique identifier for the <code>StartChangeSet</code> request that you
   *             want to describe the details for.</p>
   */
  ChangeSetId: string | undefined;
}

export namespace DescribeChangeSetRequest {
  export function isa(o: any): o is DescribeChangeSetRequest {
    return __isa(o, "DescribeChangeSetRequest");
  }
}

export interface DescribeChangeSetResponse {
  __type?: "DescribeChangeSetResponse";
  /**
   * <p>An array of <code>ChangeSummary</code> objects.</p>
   */
  ChangeSet?: Array<ChangeSummary>;

  /**
   * <p>The ARN associated with the unique identifier for the change set referenced in this
   *             request.</p>
   */
  ChangeSetArn?: string;

  /**
   * <p>Required. The unique identifier for the change set referenced in this request.</p>
   */
  ChangeSetId?: string;

  /**
   * <p>The optional name provided in the <code>StartChangeSet</code> request. If you do not
   *             provide a name, one is set by default.</p>
   */
  ChangeSetName?: string;

  /**
   * <p>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned
   *             to a terminal state. The change cannot transition to a different state. Null if the
   *             request is not in a terminal state. </p>
   */
  EndTime?: string;

  /**
   * <p>Returned if there is a failure on the change set, but that failure is not related to
   *             any of the changes in the request.</p>
   */
  FailureDescription?: string;

  /**
   * <p>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started.
   *         </p>
   */
  StartTime?: string;

  /**
   * <p>The status of the change request.</p>
   */
  Status?: ChangeStatus | string;
}

export namespace DescribeChangeSetResponse {
  export function isa(o: any): o is DescribeChangeSetResponse {
    return __isa(o, "DescribeChangeSetResponse");
  }
}

export interface DescribeEntityRequest {
  __type?: "DescribeEntityRequest";
  /**
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * <p>Required. The unique ID of the entity to describe.</p>
   */
  EntityId: string | undefined;
}

export namespace DescribeEntityRequest {
  export function isa(o: any): o is DescribeEntityRequest {
    return __isa(o, "DescribeEntityRequest");
  }
}

export interface DescribeEntityResponse {
  __type?: "DescribeEntityResponse";
  /**
   * <p>This stringified JSON object includes the details of the entity.</p>
   */
  Details?: string;

  /**
   * <p>The ARN associated to the unique identifier for the change set referenced in this
   *             request.</p>
   */
  EntityArn?: string;

  /**
   * <p>The identifier of the entity, in the format of
   *             <code>EntityId@RevisionId</code>.</p>
   */
  EntityIdentifier?: string;

  /**
   * <p>The named type of the entity, in the format of <code>EntityType@Version</code>.</p>
   */
  EntityType?: string;

  /**
   * <p>The last modified date of the entity, in ISO 8601 format
   *             (2018-02-27T13:45:22Z).</p>
   */
  LastModifiedDate?: string;
}

export namespace DescribeEntityResponse {
  export function isa(o: any): o is DescribeEntityResponse {
    return __isa(o, "DescribeEntityResponse");
  }
}

/**
 * <p>A product entity contains data that describes your product, its supported features,
 *             and how it can be used or launched by your customer. </p>
 */
export interface Entity {
  __type?: "Entity";
  /**
   * <p>The identifier for the entity.</p>
   */
  Identifier?: string;

  /**
   * <p>The type of entity.</p>
   */
  Type: string | undefined;
}

export namespace Entity {
  export function isa(o: any): o is Entity {
    return __isa(o, "Entity");
  }
}

/**
 * <p>This object is a container for common summary information about the entity. The
 *             summary doesn't contain the whole entity structure, but it does contain information
 *             common across all entities.</p>
 */
export interface EntitySummary {
  __type?: "EntitySummary";
  /**
   * <p>The ARN associated with the unique identifier for the entity.</p>
   */
  EntityArn?: string;

  /**
   * <p>The unique identifier for the entity.</p>
   */
  EntityId?: string;

  /**
   * <p>The type of the entity.</p>
   */
  EntityType?: string;

  /**
   * <p>The last time the entity was published, using ISO 8601 format
   *             (2018-02-27T13:45:22Z).</p>
   */
  LastModifiedDate?: string;

  /**
   * <p>The name for the entity. This value is not unique. It is defined by the
   *             provider.</p>
   */
  Name?: string;

  /**
   * <p>The visibility status of the entity to subscribers. This value can be
   *                 <code>Public</code> (everyone can view the entity), <code>Limited</code> (the entity
   *             is visible to limited accounts only), or <code>Restricted</code> (the entity was
   *             published and then unpublished and only existing subscribers can view it). </p>
   */
  Visibility?: string;
}

export namespace EntitySummary {
  export function isa(o: any): o is EntitySummary {
    return __isa(o, "EntitySummary");
  }
}

/**
 * <p>Details about the error.</p>
 */
export interface ErrorDetail {
  __type?: "ErrorDetail";
  /**
   * <p>The error code that identifies the type of error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The message for the error.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorDetail {
  export function isa(o: any): o is ErrorDetail {
    return __isa(o, "ErrorDetail");
  }
}

/**
 * <p>A filter object, used to optionally filter results from calls to the
 *                 <code>ListEntities</code> and <code>ListChangeSets</code> actions.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>For <code>ListEntities</code>, the supported value for this is an
   *                 <code>EntityId</code>.</p>
   *         <p>For <code>ListChangeSets</code>, the supported values are as follows:</p>
   */
  Name?: string;

  /**
   * <p>
   *             <code>ListEntities</code> - This is a list of unique <code>EntityId</code>s.</p>
   *
   *         <p>
   *             <code>ListChangeSets</code> - The supported filter names and associated
   *                 <code>ValueList</code>s is as follows:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ChangeSetName</code> - The supported <code>ValueList</code> is a list of
   *                     non-unique <code>ChangeSetName</code>s. These are defined when you call the
   *                         <code>StartChangeSet</code> action.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Status</code> - The supported <code>ValueList</code> is a list of
   *                     statuses for all change set requests.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EntityId</code> - The supported <code>ValueList</code> is a list of
   *                     unique <code>EntityId</code>s.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BeforeStartTime</code> - The supported <code>ValueList</code> is a list
   *                     of all change sets that started before the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AfterStartTime</code> - The supported <code>ValueList</code> is a list
   *                     of all change sets that started after the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BeforeEndTime</code> - The supported <code>ValueList</code> is a list of
   *                     all change sets that ended before the filter value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>AfterEndTime</code> - The supported <code>ValueList</code> is a list of
   *                     all change sets that ended after the filter value.</p>
   *             </li>
   *          </ul>
   */
  ValueList?: Array<string>;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return __isa(o, "Filter");
  }
}

/**
 * <p>There was an internal service exception.</p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceException {
  export function isa(o: any): o is InternalServiceException {
    return __isa(o, "InternalServiceException");
  }
}

export interface ListChangeSetsRequest {
  __type?: "ListChangeSetsRequest";
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * <p>An array of filter objects.</p>
   */
  FilterList?: Array<Filter>;

  /**
   * <p>The maximum number of results returned by a single call. This value must be provided
   *             in the next call to retrieve the next set of results. By default, this value is
   *             20.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>An object that contains two attributes, <code>sortBy</code> and
   *             <code>sortOrder</code>.</p>
   */
  Sort?: Sort;
}

export namespace ListChangeSetsRequest {
  export function isa(o: any): o is ListChangeSetsRequest {
    return __isa(o, "ListChangeSetsRequest");
  }
}

export interface ListChangeSetsResponse {
  __type?: "ListChangeSetsResponse";
  /**
   * <p> Array of <code>ChangeSetSummaryListItem</code> objects.</p>
   */
  ChangeSetSummaryList?: Array<ChangeSetSummaryListItem>;

  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   */
  NextToken?: string;
}

export namespace ListChangeSetsResponse {
  export function isa(o: any): o is ListChangeSetsResponse {
    return __isa(o, "ListChangeSetsResponse");
  }
}

export interface ListEntitiesRequest {
  __type?: "ListEntitiesRequest";
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * <p>The type of entities to retrieve.</p>
   */
  EntityType: string | undefined;

  /**
   * <p>An array of filter objects. Each filter object contains two attributes,
   *                 <code>filterName</code> and <code>filterValues</code>.</p>
   */
  FilterList?: Array<Filter>;

  /**
   * <p>Specifies the upper limit of the elements on a single page. If a value isn't provided,
   *             the default value is 20.</p>
   */
  MaxResults?: number;

  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   */
  NextToken?: string;

  /**
   * <p>An object that contains two attributes, <code>sortBy</code> and
   *             <code>sortOrder</code>.</p>
   */
  Sort?: Sort;
}

export namespace ListEntitiesRequest {
  export function isa(o: any): o is ListEntitiesRequest {
    return __isa(o, "ListEntitiesRequest");
  }
}

export interface ListEntitiesResponse {
  __type?: "ListEntitiesResponse";
  /**
   * <p> Array of <code>EntitySummary</code> object.</p>
   */
  EntitySummaryList?: Array<EntitySummary>;

  /**
   * <p>The value of the next token if it exists. Null if there is no more result.</p>
   */
  NextToken?: string;
}

export namespace ListEntitiesResponse {
  export function isa(o: any): o is ListEntitiesResponse {
    return __isa(o, "ListEntitiesResponse");
  }
}

/**
 * <p>The resource is currently in use.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>The specified resource wasn't found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Currently, the specified resource is not supported.</p>
 */
export interface ResourceNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotSupportedException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotSupportedException {
  export function isa(o: any): o is ResourceNotSupportedException {
    return __isa(o, "ResourceNotSupportedException");
  }
}

/**
 * <p>The maximum number of open requests per account has been exceeded.</p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export function isa(o: any): o is ServiceQuotaExceededException {
    return __isa(o, "ServiceQuotaExceededException");
  }
}

/**
 * <p>An object that contains two attributes, <code>sortBy</code> and
 *             <code>sortOrder</code>.</p>
 */
export interface Sort {
  __type?: "Sort";
  /**
   * <p>For <code>ListEntities</code>, supported attributes include
   *                 <code>LastModifiedDate</code> (default), <code>Visibility</code>,
   *                 <code>EntityId</code>, and <code>Name</code>.</p>
   *
   *         <p>For <code>ListChangeSets</code>, supported attributes include <code>StartTime</code>
   *             and <code>EndTime</code>.</p>
   */
  SortBy?: string;

  /**
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The
   *             default value is <code>DESCENDING</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace Sort {
  export function isa(o: any): o is Sort {
    return __isa(o, "Sort");
  }
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

export interface StartChangeSetRequest {
  __type?: "StartChangeSetRequest";
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   */
  Catalog: string | undefined;

  /**
   * <p>Array of <code>change</code> object.</p>
   */
  ChangeSet: Array<Change> | undefined;

  /**
   * <p>Optional case sensitive string of up to 100 ASCII characters. The change set name can
   *             be used to filter the list of change sets. </p>
   */
  ChangeSetName?: string;

  /**
   * <p>A unique token to identify the request to ensure idempotency.</p>
   */
  ClientRequestToken?: string;
}

export namespace StartChangeSetRequest {
  export function isa(o: any): o is StartChangeSetRequest {
    return __isa(o, "StartChangeSetRequest");
  }
}

export interface StartChangeSetResponse {
  __type?: "StartChangeSetResponse";
  /**
   * <p>The ARN associated to the unique identifier generated for the request.</p>
   */
  ChangeSetArn?: string;

  /**
   * <p>Unique identifier generated for the request.</p>
   */
  ChangeSetId?: string;
}

export namespace StartChangeSetResponse {
  export function isa(o: any): o is StartChangeSetResponse {
    return __isa(o, "StartChangeSetResponse");
  }
}

/**
 * <p>Too many requests.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>An error occurred during validation.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
