// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AmiProductSortBy,
  AmiProductVisibilityString,
  ChangeStatus,
  ContainerProductSortBy,
  ContainerProductVisibilityString,
  DataProductSortBy,
  DataProductVisibilityString,
  FailureCode,
  Intent,
  MachineLearningProductSortBy,
  MachineLearningProductVisibilityString,
  OfferSortBy,
  OfferStateString,
  OfferTargetingString,
  OwnershipType,
  ResaleAuthorizationSortBy,
  ResaleAuthorizationStatusString,
  SaaSProductSortBy,
  SaaSProductVisibilityString,
  SortOrder,
} from "./enums";

/**
 * <p>Object that allows filtering on entity id of an AMI product.</p>
 * @public
 */
export interface AmiProductEntityIdFilter {
  /**
   * <p>A string array of unique entity id values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 * @public
 */
export interface AmiProductLastModifiedDateFilterDateRange {
  /**
   * <p>Date after which the AMI product was last modified.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Date before which the AMI product was last modified.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Object that allows filtering based on the last modified date of AMI products.</p>
 * @public
 */
export interface AmiProductLastModifiedDateFilter {
  /**
   * <p>Dates between which the AMI product was last modified.</p>
   * @public
   */
  DateRange?: AmiProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>Object that allows filtering on product title.</p>
 * @public
 */
export interface AmiProductTitleFilter {
  /**
   * <p>A string array of unique product title values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 * @public
 */
export interface AmiProductVisibilityFilter {
  /**
   * <p>A string array of unique visibility values to be filtered on.</p>
   * @public
   */
  ValueList?: AmiProductVisibilityString[] | undefined;
}

/**
 * <p>Object containing all the filter fields for AMI products. Client can add only one wildcard filter and a maximum of 8
 *             filters in a single <code>ListEntities</code> request.</p>
 * @public
 */
export interface AmiProductFilters {
  /**
   * <p>Unique identifier for the AMI product.</p>
   * @public
   */
  EntityId?: AmiProductEntityIdFilter | undefined;

  /**
   * <p>The last date on which the AMI product was modified.</p>
   * @public
   */
  LastModifiedDate?: AmiProductLastModifiedDateFilter | undefined;

  /**
   * <p>The title of the AMI product.</p>
   * @public
   */
  ProductTitle?: AmiProductTitleFilter | undefined;

  /**
   * <p>The visibility of the AMI product.</p>
   * @public
   */
  Visibility?: AmiProductVisibilityFilter | undefined;
}

/**
 * <p>Objects that allows sorting on AMI products based on certain fields and sorting order.</p>
 * @public
 */
export interface AmiProductSort {
  /**
   * <p>Field to sort the AMI products by.</p>
   * @public
   */
  SortBy?: AmiProductSortBy | undefined;

  /**
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Object that contains summarized information about an AMI product.</p>
 * @public
 */
export interface AmiProductSummary {
  /**
   * <p>The title of the AMI product.</p>
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * <p>The lifecycle of the AMI product.</p>
   * @public
   */
  Visibility?: AmiProductVisibilityString | undefined;
}

/**
 * <p>An object that contains entity ID and the catalog in which the entity is present.</p>
 * @public
 */
export interface EntityRequest {
  /**
   * <p>The name of the catalog the entity is present in. The only value at this time is
   *                 <code>AWSMarketplace</code>.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The ID of the entity.</p>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeEntitiesRequest {
  /**
   * <p>List of entity IDs and the catalogs the entities are present in.</p>
   * @public
   */
  EntityRequestList: EntityRequest[] | undefined;
}

/**
 * <p>An object that contains metadata and details about the entity.</p>
 * @public
 */
export interface EntityDetail {
  /**
   * <p>The entity type of the entity, in the format of
   *             <code>EntityType@Version</code>.</p>
   * @public
   */
  EntityType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the entity.</p>
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * <p>The ID of the entity, in the format of <code>EntityId@RevisionId</code>.</p>
   * @public
   */
  EntityIdentifier?: string | undefined;

  /**
   * <p>The last time the entity was modified.</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>An object that contains all the details of the entity.</p>
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;
}

/**
 * <p>An object that contains an error code and error message.</p>
 * @public
 */
export interface BatchDescribeErrorDetail {
  /**
   * <p>The error code returned.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message returned.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeEntitiesResponse {
  /**
   * <p>Details about each entity.</p>
   * @public
   */
  EntityDetails?: Record<string, EntityDetail> | undefined;

  /**
   * <p>A map of errors returned, with <code>EntityId</code> as the key and
   *                 <code>errorDetail</code> as the value.</p>
   * @public
   */
  Errors?: Record<string, BatchDescribeErrorDetail> | undefined;
}

/**
 * @public
 */
export interface CancelChangeSetRequest {
  /**
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>.</p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Required. The unique identifier of the <code>StartChangeSet</code> request that you
   *             want to cancel.</p>
   * @public
   */
  ChangeSetId: string | undefined;
}

/**
 * @public
 */
export interface CancelChangeSetResponse {
  /**
   * <p>The unique identifier for the change set referenced in this request.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The ARN associated with the change set referenced in this request.</p>
   * @public
   */
  ChangeSetArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the entity resource that is associated with the
   *             resource policy.</p>
   * @public
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
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>
   *          </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Required. The unique identifier for the <code>StartChangeSet</code> request that you
   *             want to describe the details for.</p>
   * @public
   */
  ChangeSetId: string | undefined;
}

/**
 * <p>An entity contains data that describes your product, its supported features, and how
 *             it can be used or launched by your customer. </p>
 * @public
 */
export interface Entity {
  /**
   * <p>The type of entity.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The identifier for the entity.</p>
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * <p>Details about the error.</p>
 * @public
 */
export interface ErrorDetail {
  /**
   * <p>The error code that identifies the type of error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The message for the error.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * <p>This object is a container for common summary information about the change. The
 *             summary doesn't contain the whole change structure.</p>
 * @public
 */
export interface ChangeSummary {
  /**
   * <p>The type of the change.</p>
   * @public
   */
  ChangeType?: string | undefined;

  /**
   * <p>The entity to be changed.</p>
   * @public
   */
  Entity?: Entity | undefined;

  /**
   * <p>This object contains details specific to the change type of the requested
   *             change.</p>
   * @public
   */
  Details?: string | undefined;

  /**
   * <p>The JSON value of the details specific to the change type of the requested change.</p>
   *          <p>To download the "DetailsDocument" shapes, see the <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python">Python</a>
   *             and <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main">Java</a> shapes on GitHub.</p>
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;

  /**
   * <p>An array of <code>ErrorDetail</code> objects associated with the change.</p>
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;

  /**
   * <p>Optional name for the change.</p>
   * @public
   */
  ChangeName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetResponse {
  /**
   * <p>Required. The unique identifier for the change set referenced in this request.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The ARN associated with the unique identifier for the change set referenced in this
   *             request.</p>
   * @public
   */
  ChangeSetArn?: string | undefined;

  /**
   * <p>The optional name provided in the <code>StartChangeSet</code> request. If you do not
   *             provide a name, one is set by default.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>The optional intent provided in the <code>StartChangeSet</code> request. If you do not
   *             provide an intent, <code>APPLY</code> is set by default.</p>
   * @public
   */
  Intent?: Intent | undefined;

  /**
   * <p>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started.
   *         </p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned
   *             to a terminal state. The change cannot transition to a different state. Null if the
   *             request is not in a terminal state. </p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>The status of the change request.</p>
   * @public
   */
  Status?: ChangeStatus | undefined;

  /**
   * <p>Returned if the change set is in <code>FAILED</code> status. Can be either
   *                 <code>CLIENT_ERROR</code>, which means that there are issues with the request (see
   *             the <code>ErrorDetailList</code>), or <code>SERVER_FAULT</code>, which means that there
   *             is a problem in the system, and you should retry your request.</p>
   * @public
   */
  FailureCode?: FailureCode | undefined;

  /**
   * <p>Returned if there is a failure on the change set, but that failure is not related to
   *             any of the changes in the request.</p>
   * @public
   */
  FailureDescription?: string | undefined;

  /**
   * <p>An array of <code>ChangeSummary</code> objects.</p>
   * @public
   */
  ChangeSet?: ChangeSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * <p>Required. The catalog related to the request. Fixed value:
   *             <code>AWSMarketplace</code>
   *          </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Required. The unique ID of the entity to describe.</p>
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * <p>The named type of the entity, in the format of <code>EntityType@Version</code>.</p>
   * @public
   */
  EntityType?: string | undefined;

  /**
   * <p>The identifier of the entity, in the format of
   *             <code>EntityId@RevisionId</code>.</p>
   * @public
   */
  EntityIdentifier?: string | undefined;

  /**
   * <p>The ARN associated to the unique identifier for the entity referenced in this
   *             request.</p>
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * <p>The last modified date of the entity, in ISO 8601 format
   *             (2018-02-27T13:45:22Z).</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>This stringified JSON object includes the details of the entity.</p>
   * @public
   */
  Details?: string | undefined;

  /**
   * <p>The JSON value of the details specific to the entity.</p>
   *          <p>To download "DetailsDocument" shapes, see the <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python">Python</a>
   *             and <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main">Java</a> shapes on GitHub.</p>
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the entity resource that is associated with the
   *             resource policy.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The policy document to set; formatted in JSON.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>A filter object, used to optionally filter results from calls to the
 *                 <code>ListEntities</code> and <code>ListChangeSets</code> actions.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>For <code>ListEntities</code>, the supported value for this is an
   *                 <code>EntityId</code>.</p>
   *          <p>For <code>ListChangeSets</code>, the supported values are as follows:</p>
   * @public
   */
  Name?: string | undefined;

  /**
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
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>An object that contains two attributes, <code>SortBy</code> and
 *             <code>SortOrder</code>.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>For <code>ListEntities</code>, supported attributes include
   *                 <code>LastModifiedDate</code> (default) and <code>EntityId</code>. In addition to
   *                 <code>LastModifiedDate</code> and <code>EntityId</code>, each
   *                 <code>EntityType</code> might support additional fields.</p>
   *          <p>For <code>ListChangeSets</code>, supported attributes include <code>StartTime</code>
   *             and <code>EndTime</code>.</p>
   * @public
   */
  SortBy?: string | undefined;

  /**
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The
   *             default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListChangeSetsRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>An array of filter objects.</p>
   * @public
   */
  FilterList?: Filter[] | undefined;

  /**
   * <p>An object that contains two attributes, <code>SortBy</code> and
   *             <code>SortOrder</code>.</p>
   * @public
   */
  Sort?: Sort | undefined;

  /**
   * <p>The maximum number of results returned by a single call. This value must be provided
   *             in the next call to retrieve the next set of results. By default, this value is
   *             20.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token value retrieved from a previous call to access the next page of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A summary of a change set returned in a list of change sets when the
 *                 <code>ListChangeSets</code> action is called.</p>
 * @public
 */
export interface ChangeSetSummaryListItem {
  /**
   * <p>The unique identifier for a change set.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The ARN associated with the unique identifier for the change set referenced in this
   *             request.</p>
   * @public
   */
  ChangeSetArn?: string | undefined;

  /**
   * <p>The non-unique name for the change set.</p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was
   *             started.</p>
   * @public
   */
  StartTime?: string | undefined;

  /**
   * <p>The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was
   *             finished.</p>
   * @public
   */
  EndTime?: string | undefined;

  /**
   * <p>The current status of the change set.</p>
   * @public
   */
  Status?: ChangeStatus | undefined;

  /**
   * <p>This object is a list of entity IDs (string) that are a part of a change set. The
   *             entity ID list is a maximum of 20 entities. It must contain at least one entity.</p>
   * @public
   */
  EntityIdList?: string[] | undefined;

  /**
   * <p>Returned if the change set is in <code>FAILED</code> status. Can be either
   *                 <code>CLIENT_ERROR</code>, which means that there are issues with the request (see
   *             the <code>ErrorDetailList</code> of <code>DescribeChangeSet</code>), or
   *                 <code>SERVER_FAULT</code>, which means that there is a problem in the system, and
   *             you should retry your request.</p>
   * @public
   */
  FailureCode?: FailureCode | undefined;
}

/**
 * @public
 */
export interface ListChangeSetsResponse {
  /**
   * <p> Array of <code>ChangeSetSummaryListItem</code> objects.</p>
   * @public
   */
  ChangeSetSummaryList?: ChangeSetSummaryListItem[] | undefined;

  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Object that allows filtering on entity id of a container product.</p>
 * @public
 */
export interface ContainerProductEntityIdFilter {
  /**
   * <p>A string array of unique entity id values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 * @public
 */
export interface ContainerProductLastModifiedDateFilterDateRange {
  /**
   * <p>Date after which the container product was last modified.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Date before which the container product was last modified.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Object that allows filtering based on the last modified date of container products.</p>
 * @public
 */
export interface ContainerProductLastModifiedDateFilter {
  /**
   * <p>Dates between which the container product was last modified.</p>
   * @public
   */
  DateRange?: ContainerProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>Object that allows filtering on product title.</p>
 * @public
 */
export interface ContainerProductTitleFilter {
  /**
   * <p>A string array of unique product title values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 * @public
 */
export interface ContainerProductVisibilityFilter {
  /**
   * <p>A string array of unique visibility values to be filtered on.</p>
   * @public
   */
  ValueList?: ContainerProductVisibilityString[] | undefined;
}

/**
 * <p>Object containing all the filter fields for container products. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 * @public
 */
export interface ContainerProductFilters {
  /**
   * <p>Unique identifier for the container product.</p>
   * @public
   */
  EntityId?: ContainerProductEntityIdFilter | undefined;

  /**
   * <p>The last date on which the container product was modified.</p>
   * @public
   */
  LastModifiedDate?: ContainerProductLastModifiedDateFilter | undefined;

  /**
   * <p>The title of the container product.</p>
   * @public
   */
  ProductTitle?: ContainerProductTitleFilter | undefined;

  /**
   * <p>The visibility of the container product.</p>
   * @public
   */
  Visibility?: ContainerProductVisibilityFilter | undefined;
}

/**
 * <p>Object that allows filtering on entity id of a data product.</p>
 * @public
 */
export interface DataProductEntityIdFilter {
  /**
   * <p>A string array of unique entity id values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 * @public
 */
export interface DataProductLastModifiedDateFilterDateRange {
  /**
   * <p>Date after which the data product was last modified.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Date before which the data product was last modified.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Object that allows filtering based on the last modified date of data products.</p>
 * @public
 */
export interface DataProductLastModifiedDateFilter {
  /**
   * <p>Dates between which the data product was last modified.</p>
   * @public
   */
  DateRange?: DataProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>Object that allows filtering on product title.</p>
 * @public
 */
export interface DataProductTitleFilter {
  /**
   * <p>A string array of unique product title values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 * @public
 */
export interface DataProductVisibilityFilter {
  /**
   * <p>A string array of unique visibility values to be filtered on.</p>
   * @public
   */
  ValueList?: DataProductVisibilityString[] | undefined;
}

/**
 * <p>Object containing all the filter fields for data products. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 * @public
 */
export interface DataProductFilters {
  /**
   * <p>Unique identifier for the data product.</p>
   * @public
   */
  EntityId?: DataProductEntityIdFilter | undefined;

  /**
   * <p>The title of the data product.</p>
   * @public
   */
  ProductTitle?: DataProductTitleFilter | undefined;

  /**
   * <p>The visibility of the data product.</p>
   * @public
   */
  Visibility?: DataProductVisibilityFilter | undefined;

  /**
   * <p>The last date on which the data product was modified.</p>
   * @public
   */
  LastModifiedDate?: DataProductLastModifiedDateFilter | undefined;
}

/**
 * <p>The filter for machine learning product entity IDs.</p>
 * @public
 */
export interface MachineLearningProductEntityIdFilter {
  /**
   * <p>A list of entity IDs to filter by. The operation returns machine learning products with entity IDs that match the values in this list.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>A date range for filtering machine learning products by their last modified date.</p>
 * @public
 */
export interface MachineLearningProductLastModifiedDateFilterDateRange {
  /**
   * <p>The start date (inclusive) of the date range. The operation returns machine learning products with last modified dates on or after this date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>The end date (inclusive) of the date range. The operation returns machine learning products with last modified dates on or before this date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>The filter for machine learning product last modified date.</p>
 * @public
 */
export interface MachineLearningProductLastModifiedDateFilter {
  /**
   * <p>A date range to filter by. The operation returns machine learning products with last modified dates that fall within this range.</p>
   * @public
   */
  DateRange?: MachineLearningProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>The filter for machine learning product titles.</p>
 * @public
 */
export interface MachineLearningProductTitleFilter {
  /**
   * <p>A list of product titles to filter by. The operation returns machine learning products with titles that exactly match the values in this list.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>A wildcard value to filter product titles. The operation returns machine learning products with titles that match this wildcard pattern.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>The filter for machine learning product visibility status.</p>
 * @public
 */
export interface MachineLearningProductVisibilityFilter {
  /**
   * <p>A list of visibility values to filter by. The operation returns machine learning products with visibility status that match the values in this list.</p>
   * @public
   */
  ValueList?: MachineLearningProductVisibilityString[] | undefined;
}

/**
 * <p>The filters that you can use with the ListEntities operation to filter machine learning products.
 *             You can filter by <code>EntityId</code>, <code>astModifiedDate</code>, <code>ProductTitle</code>, and <code>Visibility</code>.</p>
 * @public
 */
export interface MachineLearningProductFilters {
  /**
   * <p>Filter machine learning products by their entity IDs.</p>
   * @public
   */
  EntityId?: MachineLearningProductEntityIdFilter | undefined;

  /**
   * <p>Filter machine learning products by their last modified date.</p>
   * @public
   */
  LastModifiedDate?: MachineLearningProductLastModifiedDateFilter | undefined;

  /**
   * <p>Filter machine learning products by their product titles.</p>
   * @public
   */
  ProductTitle?: MachineLearningProductTitleFilter | undefined;

  /**
   * <p>Filter machine learning products by their visibility status.</p>
   * @public
   */
  Visibility?: MachineLearningProductVisibilityFilter | undefined;
}

/**
 * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer with date range as input.</p>
 * @public
 */
export interface OfferAvailabilityEndDateFilterDateRange {
  /**
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer after a date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer before a date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer.</p>
 * @public
 */
export interface OfferAvailabilityEndDateFilter {
  /**
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer with date range as input.</p>
   * @public
   */
  DateRange?: OfferAvailabilityEndDateFilterDateRange | undefined;
}

/**
 * <p>Allows filtering on the <code>BuyerAccounts</code> of an offer.</p>
 * @public
 */
export interface OfferBuyerAccountsFilter {
  /**
   * <p>Allows filtering on the <code>BuyerAccounts</code> of an offer with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the entity id of an offer.</p>
 * @public
 */
export interface OfferEntityIdFilter {
  /**
   * <p>Allows filtering on entity id of an offer with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer with date range as input.</p>
 * @public
 */
export interface OfferLastModifiedDateFilterDateRange {
  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer after a date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer before a date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer.</p>
 * @public
 */
export interface OfferLastModifiedDateFilter {
  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer with date range as input.</p>
   * @public
   */
  DateRange?: OfferLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>Allows filtering on the <code>Name</code> of an offer.</p>
 * @public
 */
export interface OfferNameFilter {
  /**
   * <p>Allows filtering on the <code>Name</code> of an offer with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>Name</code> of an offer with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>ProductId</code> of an offer.</p>
 * @public
 */
export interface OfferProductIdFilter {
  /**
   * <p>Allows filtering on the <code>ProductId</code> of an offer with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on the <code>ReleaseDate</code> of an offer with date range as input.</p>
 * @public
 */
export interface OfferReleaseDateFilterDateRange {
  /**
   * <p>Allows filtering on the <code>ReleaseDate</code> of offers after a date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Allows filtering on the <code>ReleaseDate</code> of offers before a date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>ReleaseDate</code> of an offer.</p>
 * @public
 */
export interface OfferReleaseDateFilter {
  /**
   * <p>Allows filtering on the <code>ReleaseDate</code> of an offer with date range as input.</p>
   * @public
   */
  DateRange?: OfferReleaseDateFilterDateRange | undefined;
}

/**
 * <p>Allows filtering on the <code>ResaleAuthorizationId</code> of an offer.</p>
 *          <note>
 *             <p>Not all offers have a <code>ResaleAuthorizationId</code>. The response will only
 *                 include offers for which you have permissions.</p>
 *          </note>
 * @public
 */
export interface OfferResaleAuthorizationIdFilter {
  /**
   * <p>Allows filtering on the <code>ResaleAuthorizationId</code> of an offer with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on the <code>State</code> of an offer.</p>
 * @public
 */
export interface OfferStateFilter {
  /**
   * <p>Allows filtering on the <code>State</code> of an offer with list input.</p>
   * @public
   */
  ValueList?: OfferStateString[] | undefined;
}

/**
 * <p>Allows filtering on the <code>Targeting</code> of an offer.</p>
 * @public
 */
export interface OfferTargetingFilter {
  /**
   * <p>Allows filtering on the <code>Targeting</code> of an offer with list input.</p>
   * @public
   */
  ValueList?: OfferTargetingString[] | undefined;
}

/**
 * <p>Object containing all the filter fields for offers entity. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 * @public
 */
export interface OfferFilters {
  /**
   * <p>Allows filtering on <code>EntityId</code> of an offer.</p>
   * @public
   */
  EntityId?: OfferEntityIdFilter | undefined;

  /**
   * <p>Allows filtering on the <code>Name</code> of an offer.</p>
   * @public
   */
  Name?: OfferNameFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ProductId</code> of an offer.</p>
   * @public
   */
  ProductId?: OfferProductIdFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ResaleAuthorizationId</code> of an offer.</p>
   *          <note>
   *             <p>Not all offers have a <code>ResaleAuthorizationId</code>. The response will only
   *                 include offers for which you have permissions.</p>
   *          </note>
   * @public
   */
  ResaleAuthorizationId?: OfferResaleAuthorizationIdFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ReleaseDate</code> of an offer.</p>
   * @public
   */
  ReleaseDate?: OfferReleaseDateFilter | undefined;

  /**
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of an offer.</p>
   * @public
   */
  AvailabilityEndDate?: OfferAvailabilityEndDateFilter | undefined;

  /**
   * <p>Allows filtering on the <code>BuyerAccounts</code> of an offer.</p>
   * @public
   */
  BuyerAccounts?: OfferBuyerAccountsFilter | undefined;

  /**
   * <p>Allows filtering on the <code>State</code> of an offer.</p>
   * @public
   */
  State?: OfferStateFilter | undefined;

  /**
   * <p>Allows filtering on the <code>Targeting</code> of an offer.</p>
   * @public
   */
  Targeting?: OfferTargetingFilter | undefined;

  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of an offer.</p>
   * @public
   */
  LastModifiedDate?: OfferLastModifiedDateFilter | undefined;
}

/**
 * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization with date range as input.</p>
 * @public
 */
export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
  /**
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization after a date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization before a date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationAvailabilityEndDateFilter {
  /**
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization with date range as input</p>
   * @public
   */
  DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange | undefined;

  /**
   * <p>Allows filtering on <code>AvailabilityEndDate</code> of a ResaleAuthorization with date value as input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization with date range as input.</p>
 * @public
 */
export interface ResaleAuthorizationCreatedDateFilterDateRange {
  /**
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization after a date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization before a date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationCreatedDateFilter {
  /**
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization with date range as input.</p>
   * @public
   */
  DateRange?: ResaleAuthorizationCreatedDateFilterDateRange | undefined;

  /**
   * <p>Allows filtering on <code>CreatedDate</code> of a ResaleAuthorization with date value as input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on <code>EntityId</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationEntityIdFilter {
  /**
   * <p>Allows filtering on <code>EntityId</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization with date range as input.</p>
 * @public
 */
export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization after a date.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization before a date.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationLastModifiedDateFilter {
  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization with date range as input.</p>
   * @public
   */
  DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationManufacturerAccountIdFilter {
  /**
   * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationManufacturerLegalNameFilter {
  /**
   * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationNameFilter {
  /**
   * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>OfferExtendedStatus</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationOfferExtendedStatusFilter {
  /**
   * <p>Allows filtering on the <code>OfferExtendedStatus</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationProductIdFilter {
  /**
   * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationProductNameFilter {
  /**
   * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationResellerAccountIDFilter {
  /**
   * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the ResellerLegalName of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationResellerLegalNameFilter {
  /**
   * <p>Allows filtering on the ResellerLegalNameProductName of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>Allows filtering on the ResellerLegalName of a ResaleAuthorization with wild card input.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Allows filtering on the <code>Status</code> of a ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationStatusFilter {
  /**
   * <p>Allows filtering on the <code>Status</code> of a ResaleAuthorization with list input.</p>
   * @public
   */
  ValueList?: ResaleAuthorizationStatusString[] | undefined;
}

/**
 * <p>Object containing all the filter fields for resale authorization entity. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 * @public
 */
export interface ResaleAuthorizationFilters {
  /**
   * <p>Allows filtering on the <code>EntityId</code> of a ResaleAuthorization.</p>
   * @public
   */
  EntityId?: ResaleAuthorizationEntityIdFilter | undefined;

  /**
   * <p>Allows filtering on the <code>Name</code> of a ResaleAuthorization.</p>
   * @public
   */
  Name?: ResaleAuthorizationNameFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ProductId</code> of a ResaleAuthorization.</p>
   * @public
   */
  ProductId?: ResaleAuthorizationProductIdFilter | undefined;

  /**
   * <p>Allows filtering on the <code>CreatedDate</code> of a ResaleAuthorization.</p>
   * @public
   */
  CreatedDate?: ResaleAuthorizationCreatedDateFilter | undefined;

  /**
   * <p>Allows filtering on the <code>AvailabilityEndDate</code> of a ResaleAuthorization.</p>
   * @public
   */
  AvailabilityEndDate?: ResaleAuthorizationAvailabilityEndDateFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ManufacturerAccountId</code> of a ResaleAuthorization.</p>
   * @public
   */
  ManufacturerAccountId?: ResaleAuthorizationManufacturerAccountIdFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ProductName</code> of a ResaleAuthorization.</p>
   * @public
   */
  ProductName?: ResaleAuthorizationProductNameFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ManufacturerLegalName</code> of a ResaleAuthorization.</p>
   * @public
   */
  ManufacturerLegalName?: ResaleAuthorizationManufacturerLegalNameFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ResellerAccountID</code> of a ResaleAuthorization.</p>
   * @public
   */
  ResellerAccountID?: ResaleAuthorizationResellerAccountIDFilter | undefined;

  /**
   * <p>Allows filtering on the <code>ResellerLegalName</code> of a ResaleAuthorization.</p>
   * @public
   */
  ResellerLegalName?: ResaleAuthorizationResellerLegalNameFilter | undefined;

  /**
   * <p>Allows filtering on the <code>Status</code> of a ResaleAuthorization.</p>
   * @public
   */
  Status?: ResaleAuthorizationStatusFilter | undefined;

  /**
   * <p>Allows filtering on the <code>OfferExtendedStatus</code> of a ResaleAuthorization.</p>
   * @public
   */
  OfferExtendedStatus?: ResaleAuthorizationOfferExtendedStatusFilter | undefined;

  /**
   * <p>Allows filtering on the <code>LastModifiedDate</code> of a ResaleAuthorization.</p>
   * @public
   */
  LastModifiedDate?: ResaleAuthorizationLastModifiedDateFilter | undefined;
}

/**
 * <p>Object that allows filtering on entity id of a SaaS product.</p>
 * @public
 */
export interface SaaSProductEntityIdFilter {
  /**
   * <p>A string array of unique entity id values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * <p>Object that contains date range of the last modified date to be filtered on. You can optionally provide a <code>BeforeValue</code> and/or <code>AfterValue</code>. Both are inclusive.</p>
 * @public
 */
export interface SaaSProductLastModifiedDateFilterDateRange {
  /**
   * <p>Date after which the SaaS product was last modified.</p>
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * <p>Date before which the SaaS product was last modified.</p>
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * <p>Object that allows filtering based on the last modified date of SaaS products</p>
 * @public
 */
export interface SaaSProductLastModifiedDateFilter {
  /**
   * <p>Dates between which the SaaS product was last modified.</p>
   * @public
   */
  DateRange?: SaaSProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * <p>Object that allows filtering on product title.</p>
 * @public
 */
export interface SaaSProductTitleFilter {
  /**
   * <p>A string array of unique product title values to be filtered on.</p>
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * <p>A string that will be the <code>wildCard</code> input for product tile filter. It matches the provided value as a substring in the actual value.</p>
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * <p>Object that allows filtering on the visibility of the product in the AWS Marketplace.</p>
 * @public
 */
export interface SaaSProductVisibilityFilter {
  /**
   * <p>A string array of unique visibility values to be filtered on.</p>
   * @public
   */
  ValueList?: SaaSProductVisibilityString[] | undefined;
}

/**
 * <p>Object containing all the filter fields for SaaS products. Client can add only one wildcard filter and a maximum of 8 filters in a single <code>ListEntities</code> request.</p>
 * @public
 */
export interface SaaSProductFilters {
  /**
   * <p>Unique identifier for the SaaS product.</p>
   * @public
   */
  EntityId?: SaaSProductEntityIdFilter | undefined;

  /**
   * <p>The title of the SaaS product.</p>
   * @public
   */
  ProductTitle?: SaaSProductTitleFilter | undefined;

  /**
   * <p>The visibility of the SaaS product.</p>
   * @public
   */
  Visibility?: SaaSProductVisibilityFilter | undefined;

  /**
   * <p>The last date on which the SaaS product was modified.</p>
   * @public
   */
  LastModifiedDate?: SaaSProductLastModifiedDateFilter | undefined;
}

/**
 * <p>Object containing all the filter fields per entity type.</p>
 * @public
 */
export type EntityTypeFilters =
  | EntityTypeFilters.AmiProductFiltersMember
  | EntityTypeFilters.ContainerProductFiltersMember
  | EntityTypeFilters.DataProductFiltersMember
  | EntityTypeFilters.MachineLearningProductFiltersMember
  | EntityTypeFilters.OfferFiltersMember
  | EntityTypeFilters.ResaleAuthorizationFiltersMember
  | EntityTypeFilters.SaaSProductFiltersMember
  | EntityTypeFilters.$UnknownMember;

/**
 * @public
 */
export namespace EntityTypeFilters {
  /**
   * <p>A filter for data products.</p>
   * @public
   */
  export interface DataProductFiltersMember {
    DataProductFilters: DataProductFilters;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for SaaS products.</p>
   * @public
   */
  export interface SaaSProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters: SaaSProductFilters;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for AMI products.</p>
   * @public
   */
  export interface AmiProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters: AmiProductFilters;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for offers.</p>
   * @public
   */
  export interface OfferFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters: OfferFilters;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for container products.</p>
   * @public
   */
  export interface ContainerProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters: ContainerProductFilters;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>A filter for Resale Authorizations.</p>
   * @public
   */
  export interface ResaleAuthorizationFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters: ResaleAuthorizationFilters;
    MachineLearningProductFilters?: never;
    $unknown?: never;
  }

  /**
   * <p>The filters that you can use with the ListEntities operation to filter machine learning products.
   *             You can filter by <code>EntityId</code>, <code>astModifiedDate</code>, <code>ProductTitle</code>, and <code>Visibility</code>.</p>
   * @public
   */
  export interface MachineLearningProductFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters: MachineLearningProductFilters;
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
    MachineLearningProductFilters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DataProductFilters: (value: DataProductFilters) => T;
    SaaSProductFilters: (value: SaaSProductFilters) => T;
    AmiProductFilters: (value: AmiProductFilters) => T;
    OfferFilters: (value: OfferFilters) => T;
    ContainerProductFilters: (value: ContainerProductFilters) => T;
    ResaleAuthorizationFilters: (value: ResaleAuthorizationFilters) => T;
    MachineLearningProductFilters: (value: MachineLearningProductFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Objects that allows sorting on container products based on certain fields and sorting order.</p>
 * @public
 */
export interface ContainerProductSort {
  /**
   * <p>Field to sort the container products by.</p>
   * @public
   */
  SortBy?: ContainerProductSortBy | undefined;

  /**
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Objects that allows sorting on data products based on certain fields and sorting order.</p>
 * @public
 */
export interface DataProductSort {
  /**
   * <p>Field to sort the data products by.</p>
   * @public
   */
  SortBy?: DataProductSortBy | undefined;

  /**
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>The sort options for machine learning products.</p>
 * @public
 */
export interface MachineLearningProductSort {
  /**
   * <p>The field to sort by. Valid values: <code>EntityId</code>, <code>LastModifiedDate</code>, <code>ProductTitle</code>, and <code>Visibility</code>.</p>
   * @public
   */
  SortBy?: MachineLearningProductSortBy | undefined;

  /**
   * <p>The sort order. Valid values are <code>ASC</code> (ascending) and <code>DESC</code> (descending).</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Allows to sort offers.</p>
 * @public
 */
export interface OfferSort {
  /**
   * <p>Allows to sort offers.</p>
   * @public
   */
  SortBy?: OfferSortBy | undefined;

  /**
   * <p>Allows to sort offers.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Allows to sort ResaleAuthorization.</p>
 * @public
 */
export interface ResaleAuthorizationSort {
  /**
   * <p>Allows to sort ResaleAuthorization.</p>
   * @public
   */
  SortBy?: ResaleAuthorizationSortBy | undefined;

  /**
   * <p>Allows to sort ResaleAuthorization.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Objects that allows sorting on SaaS products based on certain fields and sorting order.</p>
 * @public
 */
export interface SaaSProductSort {
  /**
   * <p>Field to sort the SaaS products by.</p>
   * @public
   */
  SortBy?: SaaSProductSortBy | undefined;

  /**
   * <p>The sorting order. Can be <code>ASCENDING</code> or <code>DESCENDING</code>. The default value is <code>DESCENDING</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * <p>Object containing all the sort fields per entity type.</p>
 * @public
 */
export type EntityTypeSort =
  | EntityTypeSort.AmiProductSortMember
  | EntityTypeSort.ContainerProductSortMember
  | EntityTypeSort.DataProductSortMember
  | EntityTypeSort.MachineLearningProductSortMember
  | EntityTypeSort.OfferSortMember
  | EntityTypeSort.ResaleAuthorizationSortMember
  | EntityTypeSort.SaaSProductSortMember
  | EntityTypeSort.$UnknownMember;

/**
 * @public
 */
export namespace EntityTypeSort {
  /**
   * <p>A sort for data products.</p>
   * @public
   */
  export interface DataProductSortMember {
    DataProductSort: DataProductSort;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    $unknown?: never;
  }

  /**
   * <p>A sort for SaaS products.</p>
   * @public
   */
  export interface SaaSProductSortMember {
    DataProductSort?: never;
    SaaSProductSort: SaaSProductSort;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    $unknown?: never;
  }

  /**
   * <p>A sort for AMI products.</p>
   * @public
   */
  export interface AmiProductSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort: AmiProductSort;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    $unknown?: never;
  }

  /**
   * <p>A sort for offers.</p>
   * @public
   */
  export interface OfferSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort: OfferSort;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    $unknown?: never;
  }

  /**
   * <p>A sort for container products.</p>
   * @public
   */
  export interface ContainerProductSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort: ContainerProductSort;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    $unknown?: never;
  }

  /**
   * <p>A sort for Resale Authorizations.</p>
   * @public
   */
  export interface ResaleAuthorizationSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort: ResaleAuthorizationSort;
    MachineLearningProductSort?: never;
    $unknown?: never;
  }

  /**
   * <p>The sort options for machine learning products.</p>
   * @public
   */
  export interface MachineLearningProductSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort: MachineLearningProductSort;
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
    MachineLearningProductSort?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    DataProductSort: (value: DataProductSort) => T;
    SaaSProductSort: (value: SaaSProductSort) => T;
    AmiProductSort: (value: AmiProductSort) => T;
    OfferSort: (value: OfferSort) => T;
    ContainerProductSort: (value: ContainerProductSort) => T;
    ResaleAuthorizationSort: (value: ResaleAuthorizationSort) => T;
    MachineLearningProductSort: (value: MachineLearningProductSort) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>The type of entities to
   *             retrieve. Valid
   *             values are: <code>AmiProduct</code>, <code>ContainerProduct</code>,
   *                 <code>DataProduct</code>, <code>SaaSProduct</code>, <code>ProcurementPolicy</code>,
   *                 <code>Experience</code>, <code>Audience</code>, <code>BrandingSettings</code>,
   *                 <code>Offer</code>, <code>Seller</code>,
   *             <code>ResaleAuthorization</code>.</p>
   * @public
   */
  EntityType: string | undefined;

  /**
   * <p>An array of filter objects. Each filter object contains two attributes,
   *                 <code>filterName</code> and <code>filterValues</code>.</p>
   * @public
   */
  FilterList?: Filter[] | undefined;

  /**
   * <p>An object that contains two attributes, <code>SortBy</code> and
   *             <code>SortOrder</code>.</p>
   * @public
   */
  Sort?: Sort | undefined;

  /**
   * <p>The value of the next token, if it exists. Null if there are no more results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies the upper limit of the elements on a single page. If a value isn't provided,
   *             the default value is 20.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters the returned set of entities based on their owner. The default is
   *                 <code>SELF</code>. To list entities shared with you
   *             through AWS Resource Access Manager (AWS RAM), set to <code>SHARED</code>. Entities shared through the AWS Marketplace
   *             Catalog API <code>PutResourcePolicy</code> operation can't be discovered through the
   *                 <code>SHARED</code> parameter.</p>
   * @public
   */
  OwnershipType?: OwnershipType | undefined;

  /**
   * <p>A Union object containing filter shapes for all <code>EntityType</code>s. Each
   *                 <code>EntityTypeFilter</code> shape will have filters applicable for that
   *                 <code>EntityType</code> that can be used to search or filter entities.</p>
   * @public
   */
  EntityTypeFilters?: EntityTypeFilters | undefined;

  /**
   * <p>A Union object containing <code>Sort</code> shapes for all <code>EntityType</code>s.
   *             Each <code>EntityTypeSort</code> shape will have <code>SortBy</code> and
   *                 <code>SortOrder</code> applicable for fields on that <code>EntityType</code>. This
   *             can be used to sort the results of the filter query.</p>
   * @public
   */
  EntityTypeSort?: EntityTypeSort | undefined;
}

/**
 * <p>Object that contains summarized information about a container product.</p>
 * @public
 */
export interface ContainerProductSummary {
  /**
   * <p>The title of the container product.</p>
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * <p>The lifecycle of the product.</p>
   * @public
   */
  Visibility?: ContainerProductVisibilityString | undefined;
}

/**
 * <p>Object that contains summarized information about a data product.</p>
 * @public
 */
export interface DataProductSummary {
  /**
   * <p>The title of the data product.</p>
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * <p>The lifecycle of the data product.</p>
   * @public
   */
  Visibility?: DataProductVisibilityString | undefined;
}

/**
 * <p>A summary of a machine learning product.</p>
 * @public
 */
export interface MachineLearningProductSummary {
  /**
   * <p>The title of the machine learning product.</p>
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * <p>The visibility status of the machine learning product. Valid values are <code>Limited</code>, <code>Public</code>, <code>Restricted</code>, and <code>Draft</code>.</p>
   * @public
   */
  Visibility?: MachineLearningProductVisibilityString | undefined;
}

/**
 * <p>Summarized information about an offer.</p>
 * @public
 */
export interface OfferSummary {
  /**
   * <p>The name of the offer.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The product ID of the offer.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The ResaleAuthorizationId of the offer.</p>
   * @public
   */
  ResaleAuthorizationId?: string | undefined;

  /**
   * <p>The release date of the offer.</p>
   * @public
   */
  ReleaseDate?: string | undefined;

  /**
   * <p>The availability end date of the offer.</p>
   * @public
   */
  AvailabilityEndDate?: string | undefined;

  /**
   * <p>The buyer accounts in the offer.</p>
   * @public
   */
  BuyerAccounts?: string[] | undefined;

  /**
   * <p>The status of the offer.</p>
   * @public
   */
  State?: OfferStateString | undefined;

  /**
   * <p>The targeting in the offer.</p>
   * @public
   */
  Targeting?: OfferTargetingString[] | undefined;
}

/**
 * <p>Summarized information about a Resale Authorization.</p>
 * @public
 */
export interface ResaleAuthorizationSummary {
  /**
   * <p>The name of the ResaleAuthorization.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The product ID of the ResaleAuthorization.</p>
   * @public
   */
  ProductId?: string | undefined;

  /**
   * <p>The product name of the ResaleAuthorization.</p>
   * @public
   */
  ProductName?: string | undefined;

  /**
   * <p>The manufacturer account ID of the ResaleAuthorization.</p>
   * @public
   */
  ManufacturerAccountId?: string | undefined;

  /**
   * <p>The manufacturer legal name of the ResaleAuthorization.</p>
   * @public
   */
  ManufacturerLegalName?: string | undefined;

  /**
   * <p>The reseller account ID of the ResaleAuthorization.</p>
   * @public
   */
  ResellerAccountID?: string | undefined;

  /**
   * <p>The reseller legal name of the ResaleAuthorization</p>
   * @public
   */
  ResellerLegalName?: string | undefined;

  /**
   * <p>The status of the ResaleAuthorization.</p>
   * @public
   */
  Status?: ResaleAuthorizationStatusString | undefined;

  /**
   * <p>The offer extended status of the ResaleAuthorization</p>
   * @public
   */
  OfferExtendedStatus?: string | undefined;

  /**
   * <p>The created date of the ResaleAuthorization.</p>
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * <p>The availability end date of the ResaleAuthorization.</p>
   * @public
   */
  AvailabilityEndDate?: string | undefined;
}

/**
 * <p>Object that contains summarized information about a SaaS product.</p>
 * @public
 */
export interface SaaSProductSummary {
  /**
   * <p>The title of the SaaS product.</p>
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * <p>The lifecycle of the SaaS product.</p>
   * @public
   */
  Visibility?: SaaSProductVisibilityString | undefined;
}

/**
 * <p>This object is a container for common summary information about the entity. The
 *             summary doesn't contain the whole entity structure, but it does contain information
 *             common across all entities.</p>
 * @public
 */
export interface EntitySummary {
  /**
   * <p>The name for the entity. This value is not unique. It is defined by the seller.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the entity.</p>
   * @public
   */
  EntityType?: string | undefined;

  /**
   * <p>The unique identifier for the entity.</p>
   * @public
   */
  EntityId?: string | undefined;

  /**
   * <p>The ARN associated with the unique identifier for the entity.</p>
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * <p>The last time the entity was published, using ISO 8601 format
   *             (2018-02-27T13:45:22Z).</p>
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * <p>The visibility status of the entity to buyers. This value can be <code>Public</code>
   *             (everyone can view the entity), <code>Limited</code> (the entity is visible to limited
   *             accounts only), or <code>Restricted</code> (the entity was published and then
   *             unpublished and only existing buyers can view it). </p>
   * @public
   */
  Visibility?: string | undefined;

  /**
   * <p>An object that contains summary information about the AMI product.</p>
   * @public
   */
  AmiProductSummary?: AmiProductSummary | undefined;

  /**
   * <p>An object that contains summary information about the container product.</p>
   * @public
   */
  ContainerProductSummary?: ContainerProductSummary | undefined;

  /**
   * <p>An object that contains summary information about the data product.</p>
   * @public
   */
  DataProductSummary?: DataProductSummary | undefined;

  /**
   * <p>An object that contains summary information about the SaaS product.</p>
   * @public
   */
  SaaSProductSummary?: SaaSProductSummary | undefined;

  /**
   * <p>An object that contains summary information about the offer.</p>
   * @public
   */
  OfferSummary?: OfferSummary | undefined;

  /**
   * <p>An object that contains summary information about the Resale Authorization.</p>
   * @public
   */
  ResaleAuthorizationSummary?: ResaleAuthorizationSummary | undefined;

  /**
   * <p>A summary of a machine learning product.</p>
   * @public
   */
  MachineLearningProductSummary?: MachineLearningProductSummary | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * <p>Array of <code>EntitySummary</code> objects.</p>
   * @public
   */
  EntitySummaryList?: EntitySummary[] | undefined;

  /**
   * <p>The value of the next token if it exists. Null if there is no more result.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>Required. The Amazon Resource Name (ARN) associated with the resource you want to list
   *             tags on.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>A list of objects specifying each key name and value.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key associated with the tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value associated with the tag.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Required. The ARN associated with the resource you want to list tags on.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Required. A list of objects specifying each key name and value. Number of objects
   *             allowed: 1-50.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the entity resource you want to associate with a
   *             resource policy.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The policy document to set; formatted in JSON.</p>
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * <p>An object that contains the <code>ChangeType</code>, <code>Details</code>, and
 *                 <code>Entity</code>.</p>
 * @public
 */
export interface Change {
  /**
   * <p>Change types are single string values that describe your intention for the change.
   *             Each change type is unique for each <code>EntityType</code> provided in the change's
   *             scope. For more information about change types available for single-AMI products, see
   *                 <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information about change
   *             types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
   * @public
   */
  ChangeType: string | undefined;

  /**
   * <p>The entity to be changed.</p>
   * @public
   */
  Entity: Entity | undefined;

  /**
   * <p>The tags associated with the change.</p>
   * @public
   */
  EntityTags?: Tag[] | undefined;

  /**
   * <p>This object contains details specific to the change type of the requested change. For
   *             more information about change types available for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information about change
   *             types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
   * @public
   */
  Details?: string | undefined;

  /**
   * <p>Alternative field that accepts a JSON value instead of a string for
   *                 <code>ChangeType</code> details. You can use either <code>Details</code> or
   *                 <code>DetailsDocument</code>, but not both.</p>
   *          <p>To download the "DetailsDocument" shapes, see the <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python">Python</a>
   *             and <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main">Java</a> shapes on GitHub.</p>
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;

  /**
   * <p>Optional name for the change.</p>
   * @public
   */
  ChangeName?: string | undefined;
}

/**
 * @public
 */
export interface StartChangeSetRequest {
  /**
   * <p>The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
   *          </p>
   * @public
   */
  Catalog: string | undefined;

  /**
   * <p>Array of <code>change</code> object.</p>
   * @public
   */
  ChangeSet: Change[] | undefined;

  /**
   * <p>Optional case sensitive string of up to 100 ASCII characters. The change set name can
   *             be used to filter the list of change sets. </p>
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * <p>A unique token to identify the request to ensure idempotency.</p>
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * <p>A list of objects specifying each key name and value for the
   *                 <code>ChangeSetTags</code> property.</p>
   * @public
   */
  ChangeSetTags?: Tag[] | undefined;

  /**
   * <p>The intent related to the request. The default is <code>APPLY</code>.
   *             To test your request before applying changes to your entities, use <code>VALIDATE</code>.
   *             This feature is currently available for adding versions to single-AMI products. For more information, see
   *             <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#ami-add-version">Add a new version</a>.</p>
   * @public
   */
  Intent?: Intent | undefined;
}

/**
 * @public
 */
export interface StartChangeSetResponse {
  /**
   * <p>Unique identifier generated for the request.</p>
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * <p>The ARN associated to the unique identifier generated for the request.</p>
   * @public
   */
  ChangeSetArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Required. The Amazon Resource Name (ARN) associated with the resource you want to
   *             tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Required. A list of objects specifying each key name and value. Number of objects
   *             allowed: 1-50.</p>
   * @public
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
   * <p>Required. The Amazon Resource Name (ARN) associated with the resource you want to
   *             remove the tag from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Required. A list of key names of tags to be removed. Number of strings allowed:
   *             0-256.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
