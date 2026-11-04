// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AmiProductSortBy,
  AmiProductVisibilityString,
  AssessmentResult,
  ChangeStatus,
  ContainerProductSortBy,
  ContainerProductVisibilityString,
  ControlAssessmentResult,
  DataProductSortBy,
  DataProductVisibilityString,
  ExpressPrivateOfferConfigurationSortBy,
  ExpressPrivateOfferConfigurationStateString,
  FailureCode,
  Intent,
  MachineLearningProductSortBy,
  MachineLearningProductVisibilityString,
  OfferCreatedBySourceString,
  OfferSetSortBy,
  OfferSetStateString,
  OfferSortBy,
  OfferStateString,
  OfferTargetAgreementIntentString,
  OfferTargetingString,
  OwnershipType,
  ResaleAuthorizationResellerRoleString,
  ResaleAuthorizationSortBy,
  ResaleAuthorizationStatusString,
  SaaSProductSortBy,
  SaaSProductVisibilityString,
  SortOrder,
  SubsidiaryAuthorizationSortBy,
  SubsidiaryAuthorizationStatusString,
  ValidationExceptionReason,
} from "./enums";

/**
 * Object that allows filtering on entity id of an AMI product.
 *
 * @public
 */
export interface AmiProductEntityIdFilter {
  /**
   * A string array of unique entity id values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Object that contains date range of the last modified date to be filtered on. You can optionally provide a `BeforeValue` and/or `AfterValue`. Both are inclusive.
 *
 * @public
 */
export interface AmiProductLastModifiedDateFilterDateRange {
  /**
   * Date after which the AMI product was last modified.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Date before which the AMI product was last modified.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Object that allows filtering based on the last modified date of AMI products.
 *
 * @public
 */
export interface AmiProductLastModifiedDateFilter {
  /**
   * Dates between which the AMI product was last modified.
   *
   * @public
   */
  DateRange?: AmiProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * Object that allows filtering on product title.
 *
 * @public
 */
export interface AmiProductTitleFilter {
  /**
   * A string array of unique product title values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A string that will be the `wildCard` input for product tile filter. It matches the provided value as a substring in the actual value.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Object that allows filtering on the visibility of the product in the AWS Marketplace.
 *
 * @public
 */
export interface AmiProductVisibilityFilter {
  /**
   * A string array of unique visibility values to be filtered on.
   *
   * @public
   */
  ValueList?: AmiProductVisibilityString[] | undefined;
}

/**
 * Object containing all the filter fields for AMI products. Client can add only one wildcard filter and a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface AmiProductFilters {
  /**
   * Unique identifier for the AMI product.
   *
   * @public
   */
  EntityId?: AmiProductEntityIdFilter | undefined;

  /**
   * The last date on which the AMI product was modified.
   *
   * @public
   */
  LastModifiedDate?: AmiProductLastModifiedDateFilter | undefined;

  /**
   * The title of the AMI product.
   *
   * @public
   */
  ProductTitle?: AmiProductTitleFilter | undefined;

  /**
   * The visibility of the AMI product.
   *
   * @public
   */
  Visibility?: AmiProductVisibilityFilter | undefined;
}

/**
 * Objects that allows sorting on AMI products based on certain fields and sorting order.
 *
 * @public
 */
export interface AmiProductSort {
  /**
   * Field to sort the AMI products by.
   *
   * @public
   */
  SortBy?: AmiProductSortBy | undefined;

  /**
   * The sorting order. Can be `ASCENDING` or `DESCENDING`. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Object that contains summarized information about an AMI product.
 *
 * @public
 */
export interface AmiProductSummary {
  /**
   * The title of the AMI product.
   *
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * The lifecycle of the AMI product.
   *
   * @public
   */
  Visibility?: AmiProductVisibilityString | undefined;
}

/**
 * Filters that apply to assessments performed against the AMI Security framework.
 *
 * @public
 */
export interface AMISecurityFilters {
  /**
   * The unique ID of the delivery option whose AMI Security assessments you want to list.
   *
   * @public
   */
  DeliveryOptionId?: string | undefined;
}

/**
 * The details of the resource assessed under the AMI Security framework.
 *
 * @public
 */
export interface AMISecuritySummary {
  /**
   * The unique ID of the delivery option that was evaluated.
   *
   * @public
   */
  DeliveryOptionId?: string | undefined;
}

/**
 * Identifies the entity or change set that was assessed.
 *
 * @public
 */
export interface AssessmentTargetSummary {
  /**
   * The unique ID of the entity that was assessed.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The unique ID of the change set that was assessed.
   *
   * @public
   */
  ChangeSetId?: string | undefined;
}

/**
 * The details of the resource assessed under the Container Security framework.
 *
 * @public
 */
export interface ContainerSecuritySummary {
  /**
   * The unique ID of the delivery option that was evaluated.
   *
   * @public
   */
  DeliveryOptionId?: string | undefined;
}

/**
 * The framework-specific details of the assessed resource. Exactly one member is set, corresponding to the framework that was assessed.
 *
 * @public
 */
export type FrameworkSummary =
  | FrameworkSummary.AMISecuritySummaryMember
  | FrameworkSummary.ContainerSecuritySummaryMember
  | FrameworkSummary.$UnknownMember;

/**
 * @public
 */
export namespace FrameworkSummary {
  /**
   * The details of the resource assessed under the AMI Security framework.
   *
   * @public
   */
  export interface AMISecuritySummaryMember {
    AMISecuritySummary: AMISecuritySummary;
    ContainerSecuritySummary?: never;
    $unknown?: never;
  }

  /**
   * The details of the resource assessed under the Container Security framework.
   *
   * @public
   */
  export interface ContainerSecuritySummaryMember {
    AMISecuritySummary?: never;
    ContainerSecuritySummary: ContainerSecuritySummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AMISecuritySummary?: never;
    ContainerSecuritySummary?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AMISecuritySummary: (value: AMISecuritySummary) => T;
    ContainerSecuritySummary: (value: ContainerSecuritySummary) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Summarized information about an assessment.
 *
 * @public
 */
export interface AssessmentSummary {
  /**
   * The ARN associated with the assessment.
   *
   * @public
   */
  AssessmentArn?: string | undefined;

  /**
   * The unique ID of the assessment.
   *
   * @public
   */
  AssessmentId?: string | undefined;

  /**
   * The identifier of the framework that was evaluated by this assessment, in the format `frameworkId@version` (for example, `AMISecurity@1.0`).
   *
   * @public
   */
  FrameworkId?: string | undefined;

  /**
   * Identifies the entity or change set that was assessed.
   *
   * @public
   */
  AssessmentTargetSummary?: AssessmentTargetSummary | undefined;

  /**
   * The framework-specific details of the assessed resource. The set member corresponds to the framework identified by `FrameworkId`.
   *
   * @public
   */
  FrameworkSummary?: FrameworkSummary | undefined;

  /**
   * The overall result of the assessment.
   *
   * @public
   */
  AssessmentResult?: AssessmentResult | undefined;

  /**
   * The date and time the assessment was created, in ISO 8601 format (`2018-02-27T13:45:22Z`).
   *
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The date and time the assessment expires, in ISO 8601 format (`2018-02-27T13:45:22Z`).
   *
   * @public
   */
  ExpiresAt?: string | undefined;
}

/**
 * Filters assessment list results by the resource that was assessed. Provide an entity identifier, a change set identifier, or both.
 *
 * @public
 */
export interface AssessmentTargetFilter {
  /**
   * The unique ID of the entity whose assessments you want to list.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The unique ID of the change set that triggered the assessments you want to list.
   *
   * @public
   */
  ChangeSetId?: string | undefined;
}

/**
 * An object that contains entity ID and the catalog in which the entity is present.
 *
 * @public
 */
export interface EntityRequest {
  /**
   * The name of the catalog the entity is present in. The only value at this time is `AWSMarketplace`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The ID of the entity.
   *
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeEntitiesRequest {
  /**
   * List of entity IDs and the catalogs the entities are present in.
   *
   * @public
   */
  EntityRequestList: EntityRequest[] | undefined;
}

/**
 * An object that contains metadata and details about the entity.
 *
 * @public
 */
export interface EntityDetail {
  /**
   * The entity type of the entity, in the format of `EntityType@Version`.
   *
   * @public
   */
  EntityType?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the entity.
   *
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * The ID of the entity, in the format of `EntityId@RevisionId`.
   *
   * @public
   */
  EntityIdentifier?: string | undefined;

  /**
   * The last time the entity was modified.
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * An object that contains all the details of the entity.
   *
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;
}

/**
 * An object that contains an error code and error message.
 *
 * @public
 */
export interface BatchDescribeErrorDetail {
  /**
   * The error code returned.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message returned.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDescribeEntitiesResponse {
  /**
   * Details about each entity.
   *
   * @public
   */
  EntityDetails?: Record<string, EntityDetail> | undefined;

  /**
   * A map of errors returned, with `EntityId` as the key and `errorDetail` as the value.
   *
   * @public
   */
  Errors?: Record<string, BatchDescribeErrorDetail> | undefined;
}

/**
 * Detailed information about a single request field that failed validation, including the field's location, the reason it failed, and a human-readable message.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The reason the field failed validation.
   *
   * @public
   */
  Reason?: ValidationExceptionReason | undefined;

  /**
   * The entity type the failing field applies to, if the field is on a specific entity. For example, `AmiProduct@1.0`.
   *
   * @public
   */
  EntityType?: string | undefined;

  /**
   * The entity identifier the failing field applies to, if the field is on a specific entity.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The change type the failing field applies to, if the field is part of a change request. For example, `AddDeliveryOptions`.
   *
   * @public
   */
  ChangeType?: string | undefined;

  /**
   * The name of the request field that failed validation, expressed as a JSON path (for example, `Details.DeliveryOptions[0].Type`).
   *
   * @public
   */
  Field?: string | undefined;

  /**
   * A human-readable message describing why the field failed validation.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface CancelChangeSetRequest {
  /**
   * Required. The catalog related to the request. Fixed value: `AWSMarketplace`.
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Required. The unique identifier of the `StartChangeSet` request that you want to cancel.
   *
   * @public
   */
  ChangeSetId: string | undefined;
}

/**
 * @public
 */
export interface CancelChangeSetResponse {
  /**
   * The unique identifier for the change set referenced in this request.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The ARN associated with the change set referenced in this request.
   *
   * @public
   */
  ChangeSetArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the entity resource that is associated with the resource policy.
   *
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
export interface DescribeAssessmentRequest {
  /**
   * The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of the assessment to describe. You can provide either the assessment ID (for example, `assessment-12345`) or the full assessment ARN (for example, `arn:aws:aws-marketplace:us-east-1::AWSMarketplace/Assessment/assessment-12345`).
   *
   * @public
   */
  AssessmentIdentifier: string | undefined;

  /**
   * Specifies the upper limit of `ControlAssessment` elements returned on a single page. If a value isn't provided, the default value is 50. Valid values range from 1 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The value of the next token, if it exists. `null` if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A name-value pair that identifies the resource or attribute that a `ControlError` applies to.
 *
 * @public
 */
export interface ErrorScope {
  /**
   * The name of the resource field the error applies to (for example, `AMI_ID`, `FILE_PATH`, or `PACKAGE_NAME`).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value of the resource field the error applies to.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * An error reported during the evaluation of a single control.
 *
 * @public
 */
export interface ControlError {
  /**
   * The error code that identifies the type of error.
   *
   * @public
   */
  Code?: string | undefined;

  /**
   * The message for the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The list of name-value pairs that identify the resource or attribute that the error applies to.
   *
   * @public
   */
  Scope?: ErrorScope[] | undefined;
}

/**
 * The result of evaluating a single control as part of an assessment.
 *
 * @public
 */
export interface ControlAssessment {
  /**
   * The unique ID of the control that was evaluated.
   *
   * @public
   */
  ControlId?: string | undefined;

  /**
   * The result of the control evaluation.
   *
   * @public
   */
  ControlAssessmentResult?: ControlAssessmentResult | undefined;

  /**
   * An array of `ControlError` objects associated with the control evaluation.
   *
   * @public
   */
  Errors?: ControlError[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssessmentResponse {
  /**
   * The ARN associated with the assessment.
   *
   * @public
   */
  AssessmentArn?: string | undefined;

  /**
   * The unique ID of the assessment.
   *
   * @public
   */
  AssessmentId?: string | undefined;

  /**
   * The identifier of the framework that was evaluated by this assessment, in the format `frameworkId@version` (for example, `AMISecurity@1.0`).
   *
   * @public
   */
  FrameworkId?: string | undefined;

  /**
   * Identifies the entity or change set that was assessed.
   *
   * @public
   */
  AssessmentTargetSummary?: AssessmentTargetSummary | undefined;

  /**
   * The framework-specific details of the assessed resource. The set member corresponds to the framework identified by `FrameworkId`.
   *
   * @public
   */
  FrameworkSummary?: FrameworkSummary | undefined;

  /**
   * The overall result of the assessment.
   *
   * @public
   */
  AssessmentResult?: AssessmentResult | undefined;

  /**
   * The date and time the assessment was created, in ISO 8601 format (`2018-02-27T13:45:22Z`).
   *
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * The date and time the assessment expires, in ISO 8601 format (`2018-02-27T13:45:22Z`).
   *
   * @public
   */
  ExpiresAt?: string | undefined;

  /**
   * An array of `ControlAssessment` objects, each containing the result of an individual control evaluated as part of the assessment.
   *
   * @public
   */
  ControlAssessments?: ControlAssessment[] | undefined;

  /**
   * The value of the next token, if it exists. `null` if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetRequest {
  /**
   * Required. The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Required. The unique identifier for the `StartChangeSet` request that you want to describe the details for.
   *
   * @public
   */
  ChangeSetId: string | undefined;
}

/**
 * An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.
 *
 * @public
 */
export interface Entity {
  /**
   * The type of entity.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * The identifier for the entity.
   *
   * @public
   */
  Identifier?: string | undefined;
}

/**
 * Details about the error.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The error code that identifies the type of error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The message for the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * This object is a container for common summary information about the change. The summary doesn't contain the whole change structure.
 *
 * @public
 */
export interface ChangeSummary {
  /**
   * The type of the change.
   *
   * @public
   */
  ChangeType?: string | undefined;

  /**
   * The entity to be changed.
   *
   * @public
   */
  Entity?: Entity | undefined;

  /**
   * This object contains details specific to the change type of the requested change.
   *
   * @public
   */
  Details?: string | undefined;

  /**
   * The JSON value of the details specific to the change type of the requested change.
   *
   * To download the "DetailsDocument" shapes, see the [Python](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python) and [Java](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main) shapes on GitHub.
   *
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;

  /**
   * An array of `ErrorDetail` objects associated with the change.
   *
   * @public
   */
  ErrorDetailList?: ErrorDetail[] | undefined;

  /**
   * Optional name for the change.
   *
   * @public
   */
  ChangeName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChangeSetResponse {
  /**
   * Required. The unique identifier for the change set referenced in this request.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The ARN associated with the unique identifier for the change set referenced in this request.
   *
   * @public
   */
  ChangeSetArn?: string | undefined;

  /**
   * The optional name provided in the `StartChangeSet` request. If you do not provide a name, one is set by default.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * The optional intent provided in the `StartChangeSet` request. If you do not provide an intent, `APPLY` is set by default.
   *
   * @public
   */
  Intent?: Intent | undefined;

  /**
   * The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request started.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The date and time, in ISO 8601 format (2018-02-27T13:45:22Z), the request transitioned to a terminal state. The change cannot transition to a different state. Null if the request is not in a terminal state.
   *
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The status of the change request.
   *
   * @public
   */
  Status?: ChangeStatus | undefined;

  /**
   * Returned if the change set is in `FAILED` status. Can be either `CLIENT_ERROR`, which means that there are issues with the request (see the `ErrorDetailList`), or `SERVER_FAULT`, which means that there is a problem in the system, and you should retry your request.
   *
   * @public
   */
  FailureCode?: FailureCode | undefined;

  /**
   * Returned if there is a failure on the change set, but that failure is not related to any of the changes in the request.
   *
   * @public
   */
  FailureDescription?: string | undefined;

  /**
   * An array of `ChangeSummary` objects.
   *
   * @public
   */
  ChangeSet?: ChangeSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeEntityRequest {
  /**
   * Required. The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Required. The unique ID of the entity to describe.
   *
   * @public
   */
  EntityId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityResponse {
  /**
   * The named type of the entity, in the format of `EntityType@Version`.
   *
   * @public
   */
  EntityType?: string | undefined;

  /**
   * The identifier of the entity, in the format of `EntityId@RevisionId`.
   *
   * @public
   */
  EntityIdentifier?: string | undefined;

  /**
   * The ARN associated to the unique identifier for the entity referenced in this request.
   *
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * The last modified date of the entity, in ISO 8601 format (2018-02-27T13:45:22Z).
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * This stringified JSON object includes the details of the entity.
   *
   * @public
   */
  Details?: string | undefined;

  /**
   * The JSON value of the details specific to the entity.
   *
   * To download "DetailsDocument" shapes, see the [Python](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python) and [Java](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main) shapes on GitHub.
   *
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the entity resource that is associated with the resource policy.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The policy document to set; formatted in JSON.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * Filters that apply to assessments performed against the Container Security framework.
 *
 * @public
 */
export interface ContainerSecurityFilters {
  /**
   * The unique ID of the delivery option whose Container Security assessments you want to list.
   *
   * @public
   */
  DeliveryOptionId?: string | undefined;
}

/**
 * Framework-specific filters used to scope `ListAssessments` results. Set exactly one member, corresponding to the framework you want to filter by.
 *
 * @public
 */
export type FrameworkFilters =
  | FrameworkFilters.AMISecurityFiltersMember
  | FrameworkFilters.ContainerSecurityFiltersMember
  | FrameworkFilters.$UnknownMember;

/**
 * @public
 */
export namespace FrameworkFilters {
  /**
   * Filters that apply to assessments performed against the AMI Security framework.
   *
   * @public
   */
  export interface AMISecurityFiltersMember {
    AMISecurityFilters: AMISecurityFilters;
    ContainerSecurityFilters?: never;
    $unknown?: never;
  }

  /**
   * Filters that apply to assessments performed against the Container Security framework.
   *
   * @public
   */
  export interface ContainerSecurityFiltersMember {
    AMISecurityFilters?: never;
    ContainerSecurityFilters: ContainerSecurityFilters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AMISecurityFilters?: never;
    ContainerSecurityFilters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AMISecurityFilters: (value: AMISecurityFilters) => T;
    ContainerSecurityFilters: (value: ContainerSecurityFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListAssessmentsRequest {
  /**
   * The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The unique identifier of a framework. When specified, only assessments performed against this framework are returned. For example, `AMISecurity`.
   *
   * @public
   */
  FrameworkId?: string | undefined;

  /**
   * Filters the list of assessments to those performed against a specific entity or change set.
   *
   * @public
   */
  AssessmentTargetFilter?: AssessmentTargetFilter | undefined;

  /**
   * Framework-specific filters. Set exactly one member to filter results to assessments performed against that framework.
   *
   * @public
   */
  FrameworkFilters?: FrameworkFilters | undefined;

  /**
   * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20. Valid values range from 1 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The value of the next token, if it exists. `null` if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssessmentsResponse {
  /**
   * An array of `AssessmentSummary` objects.
   *
   * @public
   */
  AssessmentSummaryList?: AssessmentSummary[] | undefined;

  /**
   * The value of the next token, if it exists. `null` if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A filter object, used to optionally filter results from calls to the `ListEntities` and `ListChangeSets` actions.
 *
 * @public
 */
export interface Filter {
  /**
   * For `ListEntities`, the supported value for this is an `EntityId`.
   *
   * For `ListChangeSets`, the supported values are as follows:
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * `ListEntities` - This is a list of unique `EntityId`s.
   *
   * `ListChangeSets` - The supported filter names and associated `ValueList`s is as follows:
   *
   * - `ChangeSetName` - The supported `ValueList` is a list of non-unique `ChangeSetName`s. These are defined when you call the `StartChangeSet` action.
   * - `Status` - The supported `ValueList` is a list of statuses for all change set requests.
   * - `EntityId` - The supported `ValueList` is a list of unique `EntityId`s.
   * - `BeforeStartTime` - The supported `ValueList` is a list of all change sets that started before the filter value.
   * - `AfterStartTime` - The supported `ValueList` is a list of all change sets that started after the filter value.
   * - `BeforeEndTime` - The supported `ValueList` is a list of all change sets that ended before the filter value.
   * - `AfterEndTime` - The supported `ValueList` is a list of all change sets that ended after the filter value.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * An object that contains two attributes, `SortBy` and `SortOrder`.
 *
 * @public
 */
export interface Sort {
  /**
   * For `ListEntities`, supported attributes include `LastModifiedDate` (default) and `EntityId`. In addition to `LastModifiedDate` and `EntityId`, each `EntityType` might support additional fields.
   *
   * For `ListChangeSets`, supported attributes include `StartTime` and `EndTime`.
   *
   * @public
   */
  SortBy?: string | undefined;

  /**
   * The sorting order. Can be `ASCENDING` or `DESCENDING`. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListChangeSetsRequest {
  /**
   * The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * An array of filter objects.
   *
   * @public
   */
  FilterList?: Filter[] | undefined;

  /**
   * An object that contains two attributes, `SortBy` and `SortOrder`.
   *
   * @public
   */
  Sort?: Sort | undefined;

  /**
   * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token value retrieved from a previous call to access the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A summary of a change set returned in a list of change sets when the `ListChangeSets` action is called.
 *
 * @public
 */
export interface ChangeSetSummaryListItem {
  /**
   * The unique identifier for a change set.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The ARN associated with the unique identifier for the change set referenced in this request.
   *
   * @public
   */
  ChangeSetArn?: string | undefined;

  /**
   * The non-unique name for the change set.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was started.
   *
   * @public
   */
  StartTime?: string | undefined;

  /**
   * The time, in ISO 8601 format (2018-02-27T13:45:22Z), when the change set was finished.
   *
   * @public
   */
  EndTime?: string | undefined;

  /**
   * The current status of the change set.
   *
   * @public
   */
  Status?: ChangeStatus | undefined;

  /**
   * This object is a list of entity IDs (string) that are a part of a change set. The entity ID list is a maximum of 20 entities. It must contain at least one entity.
   *
   * @public
   */
  EntityIdList?: string[] | undefined;

  /**
   * Returned if the change set is in `FAILED` status. Can be either `CLIENT_ERROR`, which means that there are issues with the request (see the `ErrorDetailList` of `DescribeChangeSet`), or `SERVER_FAULT`, which means that there is a problem in the system, and you should retry your request.
   *
   * @public
   */
  FailureCode?: FailureCode | undefined;
}

/**
 * @public
 */
export interface ListChangeSetsResponse {
  /**
   * Array of `ChangeSetSummaryListItem` objects.
   *
   * @public
   */
  ChangeSetSummaryList?: ChangeSetSummaryListItem[] | undefined;

  /**
   * The value of the next token, if it exists. Null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Object that allows filtering on entity id of a container product.
 *
 * @public
 */
export interface ContainerProductEntityIdFilter {
  /**
   * A string array of unique entity id values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Object that contains date range of the last modified date to be filtered on. You can optionally provide a `BeforeValue` and/or `AfterValue`. Both are inclusive.
 *
 * @public
 */
export interface ContainerProductLastModifiedDateFilterDateRange {
  /**
   * Date after which the container product was last modified.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Date before which the container product was last modified.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Object that allows filtering based on the last modified date of container products.
 *
 * @public
 */
export interface ContainerProductLastModifiedDateFilter {
  /**
   * Dates between which the container product was last modified.
   *
   * @public
   */
  DateRange?: ContainerProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * Object that allows filtering on product title.
 *
 * @public
 */
export interface ContainerProductTitleFilter {
  /**
   * A string array of unique product title values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A string that will be the `wildCard` input for product tile filter. It matches the provided value as a substring in the actual value.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Object that allows filtering on the visibility of the product in the AWS Marketplace.
 *
 * @public
 */
export interface ContainerProductVisibilityFilter {
  /**
   * A string array of unique visibility values to be filtered on.
   *
   * @public
   */
  ValueList?: ContainerProductVisibilityString[] | undefined;
}

/**
 * Object containing all the filter fields for container products. Client can add only one wildcard filter and a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface ContainerProductFilters {
  /**
   * Unique identifier for the container product.
   *
   * @public
   */
  EntityId?: ContainerProductEntityIdFilter | undefined;

  /**
   * The last date on which the container product was modified.
   *
   * @public
   */
  LastModifiedDate?: ContainerProductLastModifiedDateFilter | undefined;

  /**
   * The title of the container product.
   *
   * @public
   */
  ProductTitle?: ContainerProductTitleFilter | undefined;

  /**
   * The visibility of the container product.
   *
   * @public
   */
  Visibility?: ContainerProductVisibilityFilter | undefined;
}

/**
 * Object that allows filtering on entity id of a data product.
 *
 * @public
 */
export interface DataProductEntityIdFilter {
  /**
   * A string array of unique entity id values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Object that contains date range of the last modified date to be filtered on. You can optionally provide a `BeforeValue` and/or `AfterValue`. Both are inclusive.
 *
 * @public
 */
export interface DataProductLastModifiedDateFilterDateRange {
  /**
   * Date after which the data product was last modified.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Date before which the data product was last modified.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Object that allows filtering based on the last modified date of data products.
 *
 * @public
 */
export interface DataProductLastModifiedDateFilter {
  /**
   * Dates between which the data product was last modified.
   *
   * @public
   */
  DateRange?: DataProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * Object that allows filtering on product title.
 *
 * @public
 */
export interface DataProductTitleFilter {
  /**
   * A string array of unique product title values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A string that will be the `wildCard` input for product tile filter. It matches the provided value as a substring in the actual value.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Object that allows filtering on the visibility of the product in the AWS Marketplace.
 *
 * @public
 */
export interface DataProductVisibilityFilter {
  /**
   * A string array of unique visibility values to be filtered on.
   *
   * @public
   */
  ValueList?: DataProductVisibilityString[] | undefined;
}

/**
 * Object containing all the filter fields for data products. Client can add only one wildcard filter and a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface DataProductFilters {
  /**
   * Unique identifier for the data product.
   *
   * @public
   */
  EntityId?: DataProductEntityIdFilter | undefined;

  /**
   * The title of the data product.
   *
   * @public
   */
  ProductTitle?: DataProductTitleFilter | undefined;

  /**
   * The visibility of the data product.
   *
   * @public
   */
  Visibility?: DataProductVisibilityFilter | undefined;

  /**
   * The last date on which the data product was modified.
   *
   * @public
   */
  LastModifiedDate?: DataProductLastModifiedDateFilter | undefined;
}

/**
 * The filter for the `EntityId` of an express private offer configuration.
 *
 * @public
 */
export interface ExpressPrivateOfferConfigurationEntityIdFilter {
  /**
   * A list of `EntityId` values to filter on.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * The filter for the `ProductId` of an express private offer configuration.
 *
 * @public
 */
export interface ExpressPrivateOfferConfigurationProductIdFilter {
  /**
   * A list of `ProductId` values to filter on.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * The filter for the `State` of an express private offer configuration.
 *
 * @public
 */
export interface ExpressPrivateOfferConfigurationStateFilter {
  /**
   * A list of `State` values to filter on. Valid values are `ACTIVE` and `INACTIVE`.
   *
   * @public
   */
  ValueList?: ExpressPrivateOfferConfigurationStateString[] | undefined;
}

/**
 * The filter fields for the express private offer configuration entity.
 *
 * @public
 */
export interface ExpressPrivateOfferConfigurationFilters {
  /**
   * You can filter on the `EntityId` of an express private offer configuration.
   *
   * @public
   */
  EntityId?: ExpressPrivateOfferConfigurationEntityIdFilter | undefined;

  /**
   * You can filter on the `ProductId` of an express private offer configuration.
   *
   * @public
   */
  ProductId?: ExpressPrivateOfferConfigurationProductIdFilter | undefined;

  /**
   * The state of the express private offer configuration to filter on. Valid values are the following:
   *
   * - `ACTIVE` – The configuration is active and you can use it to generate offers.
   * - `INACTIVE` – The configuration is deprecated or deleted.
   *
   * @public
   */
  State?: ExpressPrivateOfferConfigurationStateFilter | undefined;
}

/**
 * The filter for machine learning product entity IDs.
 *
 * @public
 */
export interface MachineLearningProductEntityIdFilter {
  /**
   * A list of entity IDs to filter by. The operation returns machine learning products with entity IDs that match the values in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * A date range for filtering machine learning products by their last modified date.
 *
 * @public
 */
export interface MachineLearningProductLastModifiedDateFilterDateRange {
  /**
   * The start date (inclusive) of the date range. The operation returns machine learning products with last modified dates on or after this date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * The end date (inclusive) of the date range. The operation returns machine learning products with last modified dates on or before this date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * The filter for machine learning product last modified date.
 *
 * @public
 */
export interface MachineLearningProductLastModifiedDateFilter {
  /**
   * A date range to filter by. The operation returns machine learning products with last modified dates that fall within this range.
   *
   * @public
   */
  DateRange?: MachineLearningProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * The filter for machine learning product titles.
 *
 * @public
 */
export interface MachineLearningProductTitleFilter {
  /**
   * A list of product titles to filter by. The operation returns machine learning products with titles that exactly match the values in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A wildcard value to filter product titles. The operation returns machine learning products with titles that match this wildcard pattern.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * The filter for machine learning product visibility status.
 *
 * @public
 */
export interface MachineLearningProductVisibilityFilter {
  /**
   * A list of visibility values to filter by. The operation returns machine learning products with visibility status that match the values in this list.
   *
   * @public
   */
  ValueList?: MachineLearningProductVisibilityString[] | undefined;
}

/**
 * The filters that you can use with the ListEntities operation to filter machine learning products. You can filter by `EntityId`, `astModifiedDate`, `ProductTitle`, and `Visibility`.
 *
 * @public
 */
export interface MachineLearningProductFilters {
  /**
   * Filter machine learning products by their entity IDs.
   *
   * @public
   */
  EntityId?: MachineLearningProductEntityIdFilter | undefined;

  /**
   * Filter machine learning products by their last modified date.
   *
   * @public
   */
  LastModifiedDate?: MachineLearningProductLastModifiedDateFilter | undefined;

  /**
   * Filter machine learning products by their product titles.
   *
   * @public
   */
  ProductTitle?: MachineLearningProductTitleFilter | undefined;

  /**
   * Filter machine learning products by their visibility status.
   *
   * @public
   */
  Visibility?: MachineLearningProductVisibilityFilter | undefined;
}

/**
 * Allows filtering on the `AvailabilityEndDate` of an offer with date range as input.
 *
 * @public
 */
export interface OfferAvailabilityEndDateFilterDateRange {
  /**
   * Allows filtering on the `AvailabilityEndDate` of an offer after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on the `AvailabilityEndDate` of an offer before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on the `AvailabilityEndDate` of an offer.
 *
 * @public
 */
export interface OfferAvailabilityEndDateFilter {
  /**
   * Allows filtering on the `AvailabilityEndDate` of an offer with date range as input.
   *
   * @public
   */
  DateRange?: OfferAvailabilityEndDateFilterDateRange | undefined;
}

/**
 * Allows filtering on the `BuyerAccounts` of an offer.
 *
 * @public
 */
export interface OfferBuyerAccountsFilter {
  /**
   * Allows filtering on the `BuyerAccounts` of an offer with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `CreatedBySource` of an offer.
 *
 * @public
 */
export interface OfferCreatedBySourceFilter {
  /**
   * Allows filtering on the `CreatedBySource` of an offer with list input.
   *
   * @public
   */
  ValueList?: OfferCreatedBySourceString[] | undefined;
}

/**
 * Allows filtering on the entity id of an offer.
 *
 * @public
 */
export interface OfferEntityIdFilter {
  /**
   * Allows filtering on entity id of an offer with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `LastModifiedDate` of an offer with date range as input.
 *
 * @public
 */
export interface OfferLastModifiedDateFilterDateRange {
  /**
   * Allows filtering on the `LastModifiedDate` of an offer after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on the `LastModifiedDate` of an offer before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on the `LastModifiedDate` of an offer.
 *
 * @public
 */
export interface OfferLastModifiedDateFilter {
  /**
   * Allows filtering on the `LastModifiedDate` of an offer with date range as input.
   *
   * @public
   */
  DateRange?: OfferLastModifiedDateFilterDateRange | undefined;
}

/**
 * Allows filtering on the `Name` of an offer.
 *
 * @public
 */
export interface OfferNameFilter {
  /**
   * Allows filtering on the `Name` of an offer with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `Name` of an offer with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `OfferSetId` of an offer.
 *
 * @public
 */
export interface OfferSetIdFilter {
  /**
   * Allows filtering on the `OfferSetId` of an offer.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `ProductId` of an offer.
 *
 * @public
 */
export interface OfferProductIdFilter {
  /**
   * Allows filtering on the `ProductId` of an offer with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `ReleaseDate` of an offer with date range as input.
 *
 * @public
 */
export interface OfferReleaseDateFilterDateRange {
  /**
   * Allows filtering on the `ReleaseDate` of offers after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on the `ReleaseDate` of offers before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on the `ReleaseDate` of an offer.
 *
 * @public
 */
export interface OfferReleaseDateFilter {
  /**
   * Allows filtering on the `ReleaseDate` of an offer with date range as input.
   *
   * @public
   */
  DateRange?: OfferReleaseDateFilterDateRange | undefined;
}

/**
 * Allows filtering on the `ResaleAuthorizationId` of an offer.
 *
 * > **Note:** Not all offers have a `ResaleAuthorizationId`. The response will only include offers for which you have permissions.
 *
 * @public
 */
export interface OfferResaleAuthorizationIdFilter {
  /**
   * Allows filtering on the `ResaleAuthorizationId` of an offer with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `State` of an offer.
 *
 * @public
 */
export interface OfferStateFilter {
  /**
   * Allows filtering on the `State` of an offer with list input.
   *
   * @public
   */
  ValueList?: OfferStateString[] | undefined;
}

/**
 * Allows filtering on the `TargetAgreementId` of an offer.
 *
 * @public
 */
export interface OfferTargetAgreementIdFilter {
  /**
   * Allows filtering on the `TargetAgreementId` of an offer with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `TargetAgreementIntent` of an offer.
 *
 * @public
 */
export interface OfferTargetAgreementIntentFilter {
  /**
   * Allows filtering on the `TargetAgreementIntent` of an offer with list input.
   *
   * @public
   */
  ValueList?: OfferTargetAgreementIntentString[] | undefined;
}

/**
 * Allows filtering on the `Targeting` of an offer.
 *
 * @public
 */
export interface OfferTargetingFilter {
  /**
   * Allows filtering on the `Targeting` of an offer with list input.
   *
   * @public
   */
  ValueList?: OfferTargetingString[] | undefined;
}

/**
 * Object containing all the filter fields for offers entity. Client can add only one wildcard filter and a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface OfferFilters {
  /**
   * Allows filtering on `EntityId` of an offer.
   *
   * @public
   */
  EntityId?: OfferEntityIdFilter | undefined;

  /**
   * Allows filtering on the `Name` of an offer.
   *
   * @public
   */
  Name?: OfferNameFilter | undefined;

  /**
   * Allows filtering on the `ProductId` of an offer.
   *
   * @public
   */
  ProductId?: OfferProductIdFilter | undefined;

  /**
   * Allows filtering on the `ResaleAuthorizationId` of an offer.
   *
   * > **Note:** Not all offers have a `ResaleAuthorizationId`. The response will only include offers for which you have permissions.
   *
   * @public
   */
  ResaleAuthorizationId?: OfferResaleAuthorizationIdFilter | undefined;

  /**
   * Allows filtering on the `ReleaseDate` of an offer.
   *
   * @public
   */
  ReleaseDate?: OfferReleaseDateFilter | undefined;

  /**
   * Allows filtering on the `AvailabilityEndDate` of an offer.
   *
   * @public
   */
  AvailabilityEndDate?: OfferAvailabilityEndDateFilter | undefined;

  /**
   * Allows filtering on the `BuyerAccounts` of an offer.
   *
   * @public
   */
  BuyerAccounts?: OfferBuyerAccountsFilter | undefined;

  /**
   * Allows filtering on the `State` of an offer.
   *
   * @public
   */
  State?: OfferStateFilter | undefined;

  /**
   * Allows filtering on the `Targeting` of an offer.
   *
   * @public
   */
  Targeting?: OfferTargetingFilter | undefined;

  /**
   * Allows filtering on the `LastModifiedDate` of an offer.
   *
   * @public
   */
  LastModifiedDate?: OfferLastModifiedDateFilter | undefined;

  /**
   * Allows filtering on the `OfferSetId` of an offer.
   *
   * @public
   */
  OfferSetId?: OfferSetIdFilter | undefined;

  /**
   * Allows filtering on the `TargetAgreementId` of an offer.
   *
   * @public
   */
  TargetAgreementId?: OfferTargetAgreementIdFilter | undefined;

  /**
   * Allows filtering on the `TargetAgreementIntent` of an offer.
   *
   * @public
   */
  TargetAgreementIntent?: OfferTargetAgreementIntentFilter | undefined;

  /**
   * Allows filtering on the `CreatedBySource` of an offer.
   *
   * @public
   */
  CreatedBySource?: OfferCreatedBySourceFilter | undefined;
}

/**
 * Allows filtering on the `AssociatedOfferIds` of an offer set.
 *
 * @public
 */
export interface OfferSetAssociatedOfferIdsFilter {
  /**
   * Allows filtering on the `AssociatedOfferIds` of an offer set with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the entity id of an offer set.
 *
 * @public
 */
export interface OfferSetEntityIdFilter {
  /**
   * Allows filtering on entity id of an offer set with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `LastModifiedDate` of an offer set with date range as input.
 *
 * @public
 */
export interface OfferSetLastModifiedDateFilterDateRange {
  /**
   * Allows filtering on the `LastModifiedDate` of an offer set after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on the `LastModifiedDate` of an offer set before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on the `LastModifiedDate` of an offer set.
 *
 * @public
 */
export interface OfferSetLastModifiedDateFilter {
  /**
   * Allows filtering on the `LastModifiedDate` of an offer set with date range as input.
   *
   * @public
   */
  DateRange?: OfferSetLastModifiedDateFilterDateRange | undefined;
}

/**
 * Allows filtering on the `Name` of an offer set.
 *
 * @public
 */
export interface OfferSetNameFilter {
  /**
   * Allows filtering on the `Name` of an offer set with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `ReleaseDate` of an offer set with date range as input.
 *
 * @public
 */
export interface OfferSetReleaseDateFilterDateRange {
  /**
   * Allows filtering on the `ReleaseDate` of offer set after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on the `ReleaseDate` of offer set before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on the `ReleaseDate` of an offer set.
 *
 * @public
 */
export interface OfferSetReleaseDateFilter {
  /**
   * Allows filtering on the `ReleaseDate` of an offer set with date range as input.
   *
   * @public
   */
  DateRange?: OfferSetReleaseDateFilterDateRange | undefined;
}

/**
 * Allows filtering on the `SolutionId` of an offer set.
 *
 * @public
 */
export interface OfferSetSolutionIdFilter {
  /**
   * Allows filtering on the `SolutionId` of an offer set with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `State` of an offer set.
 *
 * @public
 */
export interface OfferSetStateFilter {
  /**
   * Allows filtering on the `State` of an offer set with list input.
   *
   * @public
   */
  ValueList?: OfferSetStateString[] | undefined;
}

/**
 * Object containing all the filter fields for offer sets entity. Client can add a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface OfferSetFilters {
  /**
   * Allows filtering on `EntityId` of an offer set.
   *
   * @public
   */
  EntityId?: OfferSetEntityIdFilter | undefined;

  /**
   * Allows filtering on the `Name` of an offer set.
   *
   * @public
   */
  Name?: OfferSetNameFilter | undefined;

  /**
   * Allows filtering on the `State` of an offer set.
   *
   * @public
   */
  State?: OfferSetStateFilter | undefined;

  /**
   * Allows filtering on the `ReleaseDate` of an offer set.
   *
   * @public
   */
  ReleaseDate?: OfferSetReleaseDateFilter | undefined;

  /**
   * Allows filtering on the `AssociatedOfferIds` of an offer set.
   *
   * @public
   */
  AssociatedOfferIds?: OfferSetAssociatedOfferIdsFilter | undefined;

  /**
   * Allows filtering on the `SolutionId` of an offer set.
   *
   * @public
   */
  SolutionId?: OfferSetSolutionIdFilter | undefined;

  /**
   * Allows filtering on the `LastModifiedDate` of an offer set.
   *
   * @public
   */
  LastModifiedDate?: OfferSetLastModifiedDateFilter | undefined;
}

/**
 * Allows filtering on `AvailabilityEndDate` of a ResaleAuthorization with date range as input.
 *
 * @public
 */
export interface ResaleAuthorizationAvailabilityEndDateFilterDateRange {
  /**
   * Allows filtering on `AvailabilityEndDate` of a ResaleAuthorization after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on `AvailabilityEndDate` of a ResaleAuthorization before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on `AvailabilityEndDate` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationAvailabilityEndDateFilter {
  /**
   * Allows filtering on `AvailabilityEndDate` of a ResaleAuthorization with date range as input
   *
   * @public
   */
  DateRange?: ResaleAuthorizationAvailabilityEndDateFilterDateRange | undefined;

  /**
   * Allows filtering on `AvailabilityEndDate` of a ResaleAuthorization with date value as input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on `CreatedDate` of a ResaleAuthorization with date range as input.
 *
 * @public
 */
export interface ResaleAuthorizationCreatedDateFilterDateRange {
  /**
   * Allows filtering on `CreatedDate` of a ResaleAuthorization after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on `CreatedDate` of a ResaleAuthorization before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on `CreatedDate` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationCreatedDateFilter {
  /**
   * Allows filtering on `CreatedDate` of a ResaleAuthorization with date range as input.
   *
   * @public
   */
  DateRange?: ResaleAuthorizationCreatedDateFilterDateRange | undefined;

  /**
   * Allows filtering on `CreatedDate` of a ResaleAuthorization with date value as input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on `EntityId` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationEntityIdFilter {
  /**
   * Allows filtering on `EntityId` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `IssuerAccountId` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationIssuerAccountIdFilter {
  /**
   * Allows filtering on the `IssuerAccountId` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `LastModifiedDate` of a ResaleAuthorization with date range as input.
 *
 * @public
 */
export interface ResaleAuthorizationLastModifiedDateFilterDateRange {
  /**
   * Allows filtering on the `LastModifiedDate` of a ResaleAuthorization after a date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Allows filtering on the `LastModifiedDate` of a ResaleAuthorization before a date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Allows filtering on the `LastModifiedDate` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationLastModifiedDateFilter {
  /**
   * Allows filtering on the `LastModifiedDate` of a ResaleAuthorization with date range as input.
   *
   * @public
   */
  DateRange?: ResaleAuthorizationLastModifiedDateFilterDateRange | undefined;
}

/**
 * Allows filtering on the `ManufacturerAccountId` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationManufacturerAccountIdFilter {
  /**
   * Allows filtering on the `ManufacturerAccountId` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `ManufacturerAccountId` of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `ManufacturerLegalName` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationManufacturerLegalNameFilter {
  /**
   * Allows filtering on the `ManufacturerLegalName` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `ManufacturerLegalName` of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `Name` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationNameFilter {
  /**
   * Allows filtering on the `Name` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `Name` of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `OfferExtendedStatus` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationOfferExtendedStatusFilter {
  /**
   * Allows filtering on the `OfferExtendedStatus` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `ProductId` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationProductIdFilter {
  /**
   * Allows filtering on the `ProductId` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `ProductId` of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `ProductName` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationProductNameFilter {
  /**
   * Allows filtering on the `ProductName` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `ProductName` of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `ResellerAccountID` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationResellerAccountIDFilter {
  /**
   * Allows filtering on the `ResellerAccountID` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the `ResellerAccountID` of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the ResellerLegalName of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationResellerLegalNameFilter {
  /**
   * Allows filtering on the ResellerLegalNameProductName of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * Allows filtering on the ResellerLegalName of a ResaleAuthorization with wild card input.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Allows filtering on the `ResellerRole` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationResellerRoleFilter {
  /**
   * Allows filtering on the `ResellerRole` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: ResaleAuthorizationResellerRoleString[] | undefined;
}

/**
 * Allows filtering on the `SourceAuthorization` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationSourceAuthorizationFilter {
  /**
   * Allows filtering on the `SourceAuthorization` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Allows filtering on the `Status` of a ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationStatusFilter {
  /**
   * Allows filtering on the `Status` of a ResaleAuthorization with list input.
   *
   * @public
   */
  ValueList?: ResaleAuthorizationStatusString[] | undefined;
}

/**
 * Object containing all the filter fields for resale authorization entity. Client can add only one wildcard filter and a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface ResaleAuthorizationFilters {
  /**
   * Allows filtering on the `EntityId` of a ResaleAuthorization.
   *
   * @public
   */
  EntityId?: ResaleAuthorizationEntityIdFilter | undefined;

  /**
   * Allows filtering on the `Name` of a ResaleAuthorization.
   *
   * @public
   */
  Name?: ResaleAuthorizationNameFilter | undefined;

  /**
   * Allows filtering on the `ProductId` of a ResaleAuthorization.
   *
   * @public
   */
  ProductId?: ResaleAuthorizationProductIdFilter | undefined;

  /**
   * Allows filtering on the `CreatedDate` of a ResaleAuthorization.
   *
   * @public
   */
  CreatedDate?: ResaleAuthorizationCreatedDateFilter | undefined;

  /**
   * Allows filtering on the `AvailabilityEndDate` of a ResaleAuthorization.
   *
   * @public
   */
  AvailabilityEndDate?: ResaleAuthorizationAvailabilityEndDateFilter | undefined;

  /**
   * Allows filtering on the `ManufacturerAccountId` of a ResaleAuthorization.
   *
   * @public
   */
  ManufacturerAccountId?: ResaleAuthorizationManufacturerAccountIdFilter | undefined;

  /**
   * Allows filtering on the `ProductName` of a ResaleAuthorization.
   *
   * @public
   */
  ProductName?: ResaleAuthorizationProductNameFilter | undefined;

  /**
   * Allows filtering on the `ManufacturerLegalName` of a ResaleAuthorization.
   *
   * @public
   */
  ManufacturerLegalName?: ResaleAuthorizationManufacturerLegalNameFilter | undefined;

  /**
   * Allows filtering on the `ResellerAccountID` of a ResaleAuthorization.
   *
   * @public
   */
  ResellerAccountID?: ResaleAuthorizationResellerAccountIDFilter | undefined;

  /**
   * Allows filtering on the `ResellerLegalName` of a ResaleAuthorization.
   *
   * @public
   */
  ResellerLegalName?: ResaleAuthorizationResellerLegalNameFilter | undefined;

  /**
   * Allows filtering on the `Status` of a ResaleAuthorization.
   *
   * @public
   */
  Status?: ResaleAuthorizationStatusFilter | undefined;

  /**
   * Allows filtering on the `OfferExtendedStatus` of a ResaleAuthorization.
   *
   * @public
   */
  OfferExtendedStatus?: ResaleAuthorizationOfferExtendedStatusFilter | undefined;

  /**
   * Allows filtering on the `LastModifiedDate` of a ResaleAuthorization.
   *
   * @public
   */
  LastModifiedDate?: ResaleAuthorizationLastModifiedDateFilter | undefined;

  /**
   * Allows filtering on the `ResellerRole` of a ResaleAuthorization.
   *
   * @public
   */
  ResellerRole?: ResaleAuthorizationResellerRoleFilter | undefined;

  /**
   * Allows filtering on the `SourceAuthorization` of a ResaleAuthorization.
   *
   * @public
   */
  SourceAuthorization?: ResaleAuthorizationSourceAuthorizationFilter | undefined;

  /**
   * Allows filtering on the `IssuerAccountId` of a ResaleAuthorization.
   *
   * @public
   */
  IssuerAccountId?: ResaleAuthorizationIssuerAccountIdFilter | undefined;
}

/**
 * Object that allows filtering on entity id of a SaaS product.
 *
 * @public
 */
export interface SaaSProductEntityIdFilter {
  /**
   * A string array of unique entity id values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * Object that contains date range of the last modified date to be filtered on. You can optionally provide a `BeforeValue` and/or `AfterValue`. Both are inclusive.
 *
 * @public
 */
export interface SaaSProductLastModifiedDateFilterDateRange {
  /**
   * Date after which the SaaS product was last modified.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * Date before which the SaaS product was last modified.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * Object that allows filtering based on the last modified date of SaaS products
 *
 * @public
 */
export interface SaaSProductLastModifiedDateFilter {
  /**
   * Dates between which the SaaS product was last modified.
   *
   * @public
   */
  DateRange?: SaaSProductLastModifiedDateFilterDateRange | undefined;
}

/**
 * Object that allows filtering on product title.
 *
 * @public
 */
export interface SaaSProductTitleFilter {
  /**
   * A string array of unique product title values to be filtered on.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A string that will be the `wildCard` input for product tile filter. It matches the provided value as a substring in the actual value.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * Object that allows filtering on the visibility of the product in the AWS Marketplace.
 *
 * @public
 */
export interface SaaSProductVisibilityFilter {
  /**
   * A string array of unique visibility values to be filtered on.
   *
   * @public
   */
  ValueList?: SaaSProductVisibilityString[] | undefined;
}

/**
 * Object containing all the filter fields for SaaS products. Client can add only one wildcard filter and a maximum of 8 filters in a single `ListEntities` request.
 *
 * @public
 */
export interface SaaSProductFilters {
  /**
   * Unique identifier for the SaaS product.
   *
   * @public
   */
  EntityId?: SaaSProductEntityIdFilter | undefined;

  /**
   * The title of the SaaS product.
   *
   * @public
   */
  ProductTitle?: SaaSProductTitleFilter | undefined;

  /**
   * The visibility of the SaaS product.
   *
   * @public
   */
  Visibility?: SaaSProductVisibilityFilter | undefined;

  /**
   * The last date on which the SaaS product was modified.
   *
   * @public
   */
  LastModifiedDate?: SaaSProductLastModifiedDateFilter | undefined;
}

/**
 * A date range for filtering subsidiary authorizations by creation date.
 *
 * @public
 */
export interface SubsidiaryAuthorizationCreatedDateFilterDateRange {
  /**
   * The start date (inclusive) of the date range. The operation returns subsidiary authorizations created on or after this date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * The end date (inclusive) of the date range. The operation returns subsidiary authorizations created on or before this date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * The filter for the date a subsidiary authorization was created.
 *
 * @public
 */
export interface SubsidiaryAuthorizationCreatedDateFilter {
  /**
   * A date range to filter by. The operation returns subsidiary authorizations with creation dates that fall within this range.
   *
   * @public
   */
  DateRange?: SubsidiaryAuthorizationCreatedDateFilterDateRange | undefined;
}

/**
 * The filter for subsidiary authorization entity IDs. Each ID begins with `subauthz-` followed by 13 alphanumeric characters.
 *
 * @public
 */
export interface SubsidiaryAuthorizationEntityIdFilter {
  /**
   * A list of entity IDs to filter by. The operation returns subsidiary authorizations with an entity ID that matches any value in this list. You can include up to 10 entity IDs in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * A date range for filtering subsidiary authorizations by last modified date.
 *
 * @public
 */
export interface SubsidiaryAuthorizationLastModifiedDateFilterDateRange {
  /**
   * The start date (inclusive) of the date range. The operation returns subsidiary authorizations last modified on or after this date.
   *
   * @public
   */
  AfterValue?: string | undefined;

  /**
   * The end date (inclusive) of the date range. The operation returns subsidiary authorizations last modified on or before this date.
   *
   * @public
   */
  BeforeValue?: string | undefined;
}

/**
 * The filter for the date a subsidiary authorization was last modified.
 *
 * @public
 */
export interface SubsidiaryAuthorizationLastModifiedDateFilter {
  /**
   * A date range to filter by. The operation returns subsidiary authorizations with last modified dates that fall within this range.
   *
   * @public
   */
  DateRange?: SubsidiaryAuthorizationLastModifiedDateFilterDateRange | undefined;
}

/**
 * The filter for subsidiary authorization names.
 *
 * @public
 */
export interface SubsidiaryAuthorizationNameFilter {
  /**
   * A list of names to filter by. The operation returns subsidiary authorizations with a name that matches any value in this list. You can include up to 10 names in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A partial name to filter by. The operation returns subsidiary authorizations whose name contains this value. The value must be at least 3 characters.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * The filter for the IDs of resources that subsidiary authorizations apply to.
 *
 * @public
 */
export interface SubsidiaryAuthorizationResourceIdFilter {
  /**
   * A list of resource IDs to filter by. The operation returns subsidiary authorizations for resources with an ID that matches any value in this list. You can include up to 10 resource IDs in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * The filter for the names of resources that subsidiary authorizations apply to.
 *
 * @public
 */
export interface SubsidiaryAuthorizationResourceNameFilter {
  /**
   * A list of resource names to filter by. The operation returns subsidiary authorizations for resources with a name that matches any value in this list. You can include up to 10 resource names in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;

  /**
   * A partial resource name to filter by. The operation returns subsidiary authorizations for resources whose name contains this value. The value must be at least 3 characters.
   *
   * @public
   */
  WildCardValue?: string | undefined;
}

/**
 * The filter for subsidiary authorization statuses.
 *
 * @public
 */
export interface SubsidiaryAuthorizationStatusFilter {
  /**
   * A list of statuses to filter by. The operation returns subsidiary authorizations with a status that matches a value in this list. Valid values are:
   *
   * - `Draft` - The subsidiary authorization was created but not yet released. The subsidiary account can't see it.
   * - `Active` - The subsidiary account can use the subsidiary authorization to create offers for the authorized product.
   * - `Restricted` - The subsidiary authorization was discarded while in `Draft` or revoked while `Active`. It can't be used to create new offers. This status is final.
   *
   * @public
   */
  ValueList?: SubsidiaryAuthorizationStatusString[] | undefined;
}

/**
 * The filter for the AWS account IDs of subsidiary accounts.
 *
 * @public
 */
export interface SubsidiaryAuthorizationSubsidiaryAccountIdFilter {
  /**
   * A list of AWS account IDs to filter by. The operation returns subsidiary authorizations whose subsidiary account ID matches any value in this list. You can include up to 10 account IDs in this list.
   *
   * @public
   */
  ValueList?: string[] | undefined;
}

/**
 * The filters that you can use with the `ListEntities` operation to filter subsidiary authorizations. You can filter by `EntityId`, `Status`, `ResourceId`, `ResourceName`, `Name`, `SubsidiaryAccountId`, `CreatedDate`, and `LastModifiedDate`. You can add only one wildcard filter in a single `ListEntities` request.
 *
 * @public
 */
export interface SubsidiaryAuthorizationFilters {
  /**
   * A filter that matches subsidiary authorizations by entity ID.
   *
   * @public
   */
  EntityId?: SubsidiaryAuthorizationEntityIdFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by status.
   *
   * @public
   */
  Status?: SubsidiaryAuthorizationStatusFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by the ID of the authorized resource.
   *
   * @public
   */
  ResourceId?: SubsidiaryAuthorizationResourceIdFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by the name of the authorized resource.
   *
   * @public
   */
  ResourceName?: SubsidiaryAuthorizationResourceNameFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by name.
   *
   * @public
   */
  Name?: SubsidiaryAuthorizationNameFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by the AWS account ID of the subsidiary account.
   *
   * @public
   */
  SubsidiaryAccountId?: SubsidiaryAuthorizationSubsidiaryAccountIdFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by creation date.
   *
   * @public
   */
  CreatedDate?: SubsidiaryAuthorizationCreatedDateFilter | undefined;

  /**
   * A filter that matches subsidiary authorizations by last modified date.
   *
   * @public
   */
  LastModifiedDate?: SubsidiaryAuthorizationLastModifiedDateFilter | undefined;
}

/**
 * Object containing all the filter fields per entity type.
 *
 * @public
 */
export type EntityTypeFilters =
  | EntityTypeFilters.AmiProductFiltersMember
  | EntityTypeFilters.ContainerProductFiltersMember
  | EntityTypeFilters.DataProductFiltersMember
  | EntityTypeFilters.ExpressPrivateOfferConfigurationFiltersMember
  | EntityTypeFilters.MachineLearningProductFiltersMember
  | EntityTypeFilters.OfferFiltersMember
  | EntityTypeFilters.OfferSetFiltersMember
  | EntityTypeFilters.ResaleAuthorizationFiltersMember
  | EntityTypeFilters.SaaSProductFiltersMember
  | EntityTypeFilters.SubsidiaryAuthorizationFiltersMember
  | EntityTypeFilters.$UnknownMember;

/**
 * @public
 */
export namespace EntityTypeFilters {
  /**
   * A filter for data products.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for SaaS products.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for AMI products.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for offers.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for container products.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for Resale Authorizations.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * The filters that you can use with the ListEntities operation to filter machine learning products. You can filter by `EntityId`, `astModifiedDate`, `ProductTitle`, and `Visibility`.
   *
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for offer sets.
   *
   * @public
   */
  export interface OfferSetFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    OfferSetFilters: OfferSetFilters;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for express private offer configurations.
   *
   * @public
   */
  export interface ExpressPrivateOfferConfigurationFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters: ExpressPrivateOfferConfigurationFilters;
    SubsidiaryAuthorizationFilters?: never;
    $unknown?: never;
  }

  /**
   * A filter for subsidiary authorizations.
   *
   * @public
   */
  export interface SubsidiaryAuthorizationFiltersMember {
    DataProductFilters?: never;
    SaaSProductFilters?: never;
    AmiProductFilters?: never;
    OfferFilters?: never;
    ContainerProductFilters?: never;
    ResaleAuthorizationFilters?: never;
    MachineLearningProductFilters?: never;
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters: SubsidiaryAuthorizationFilters;
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
    OfferSetFilters?: never;
    ExpressPrivateOfferConfigurationFilters?: never;
    SubsidiaryAuthorizationFilters?: never;
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
    OfferSetFilters: (value: OfferSetFilters) => T;
    ExpressPrivateOfferConfigurationFilters: (value: ExpressPrivateOfferConfigurationFilters) => T;
    SubsidiaryAuthorizationFilters: (value: SubsidiaryAuthorizationFilters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Objects that allows sorting on container products based on certain fields and sorting order.
 *
 * @public
 */
export interface ContainerProductSort {
  /**
   * Field to sort the container products by.
   *
   * @public
   */
  SortBy?: ContainerProductSortBy | undefined;

  /**
   * The sorting order. Can be `ASCENDING` or `DESCENDING`. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Objects that allows sorting on data products based on certain fields and sorting order.
 *
 * @public
 */
export interface DataProductSort {
  /**
   * Field to sort the data products by.
   *
   * @public
   */
  SortBy?: DataProductSortBy | undefined;

  /**
   * The sorting order. Can be `ASCENDING` or `DESCENDING`. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * The sort fields for express private offer configurations.
 *
 * @public
 */
export interface ExpressPrivateOfferConfigurationSort {
  /**
   * The field to sort by. Valid values are `EntityId`, `LastModifiedDate`, `ProductId`, and `State`.
   *
   * @public
   */
  SortBy?: ExpressPrivateOfferConfigurationSortBy | undefined;

  /**
   * The sorting order. Valid values are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * The sort options for machine learning products.
 *
 * @public
 */
export interface MachineLearningProductSort {
  /**
   * The field to sort by. Valid values: `EntityId`, `LastModifiedDate`, `ProductTitle`, and `Visibility`.
   *
   * @public
   */
  SortBy?: MachineLearningProductSortBy | undefined;

  /**
   * The sort order. Valid values are `ASC` (ascending) and `DESC` (descending).
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Allows to sort offer sets.
 *
 * @public
 */
export interface OfferSetSort {
  /**
   * Allows to sort offer sets.
   *
   * @public
   */
  SortBy?: OfferSetSortBy | undefined;

  /**
   * Allows to sort offer sets.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Allows to sort offers.
 *
 * @public
 */
export interface OfferSort {
  /**
   * Allows to sort offers.
   *
   * @public
   */
  SortBy?: OfferSortBy | undefined;

  /**
   * Allows to sort offers.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Allows to sort ResaleAuthorization.
 *
 * @public
 */
export interface ResaleAuthorizationSort {
  /**
   * Allows to sort ResaleAuthorization.
   *
   * @public
   */
  SortBy?: ResaleAuthorizationSortBy | undefined;

  /**
   * Allows to sort ResaleAuthorization.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Objects that allows sorting on SaaS products based on certain fields and sorting order.
 *
 * @public
 */
export interface SaaSProductSort {
  /**
   * Field to sort the SaaS products by.
   *
   * @public
   */
  SortBy?: SaaSProductSortBy | undefined;

  /**
   * The sorting order. Can be `ASCENDING` or `DESCENDING`. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Specifies the field to sort subsidiary authorizations by and the order (ascending or descending) to apply.
 *
 * @public
 */
export interface SubsidiaryAuthorizationSort {
  /**
   * The field to sort subsidiary authorizations by. Valid values are `EntityId`, `Status`, `ResourceId`, `SubsidiaryAccountId`, `CreatedDate`, and `LastModifiedDate`.
   *
   * @public
   */
  SortBy?: SubsidiaryAuthorizationSortBy | undefined;

  /**
   * The sorting order. Can be `ASCENDING` or `DESCENDING`. The default value is `DESCENDING`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * Object containing all the sort fields per entity type.
 *
 * @public
 */
export type EntityTypeSort =
  | EntityTypeSort.AmiProductSortMember
  | EntityTypeSort.ContainerProductSortMember
  | EntityTypeSort.DataProductSortMember
  | EntityTypeSort.ExpressPrivateOfferConfigurationSortMember
  | EntityTypeSort.MachineLearningProductSortMember
  | EntityTypeSort.OfferSetSortMember
  | EntityTypeSort.OfferSortMember
  | EntityTypeSort.ResaleAuthorizationSortMember
  | EntityTypeSort.SaaSProductSortMember
  | EntityTypeSort.SubsidiaryAuthorizationSortMember
  | EntityTypeSort.$UnknownMember;

/**
 * @public
 */
export namespace EntityTypeSort {
  /**
   * A sort for data products.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for SaaS products.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for AMI products.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for offers.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for container products.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for Resale Authorizations.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * The sort options for machine learning products.
   *
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for offer sets.
   *
   * @public
   */
  export interface OfferSetSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    OfferSetSort: OfferSetSort;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for express private offer configurations.
   *
   * @public
   */
  export interface ExpressPrivateOfferConfigurationSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort: ExpressPrivateOfferConfigurationSort;
    SubsidiaryAuthorizationSort?: never;
    $unknown?: never;
  }

  /**
   * A sort for subsidiary authorizations.
   *
   * @public
   */
  export interface SubsidiaryAuthorizationSortMember {
    DataProductSort?: never;
    SaaSProductSort?: never;
    AmiProductSort?: never;
    OfferSort?: never;
    ContainerProductSort?: never;
    ResaleAuthorizationSort?: never;
    MachineLearningProductSort?: never;
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort: SubsidiaryAuthorizationSort;
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
    OfferSetSort?: never;
    ExpressPrivateOfferConfigurationSort?: never;
    SubsidiaryAuthorizationSort?: never;
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
    OfferSetSort: (value: OfferSetSort) => T;
    ExpressPrivateOfferConfigurationSort: (value: ExpressPrivateOfferConfigurationSort) => T;
    SubsidiaryAuthorizationSort: (value: SubsidiaryAuthorizationSort) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface ListEntitiesRequest {
  /**
   * The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * The type of entities to retrieve. Valid values are: `AmiProduct`, `ContainerProduct`, `DataProduct`, `SaaSProduct`, `ProcurementPolicy`, `Experience`, `Audience`, `BrandingSettings`, `Offer`, `OfferSet`, `Seller`, `ResaleAuthorization`, `Solution`, `SubsidiaryAuthorization`.
   *
   * @public
   */
  EntityType: string | undefined;

  /**
   * An array of filter objects. Each filter object contains two attributes, `filterName` and `filterValues`.
   *
   * @public
   */
  FilterList?: Filter[] | undefined;

  /**
   * An object that contains two attributes, `SortBy` and `SortOrder`.
   *
   * @public
   */
  Sort?: Sort | undefined;

  /**
   * The value of the next token, if it exists. Null if there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filters the returned set of entities based on their owner. The default is `SELF`. To list entities shared with you through AWS Resource Access Manager (AWS RAM), set to `SHARED`. Entities shared through the AWS Marketplace Catalog API `PutResourcePolicy` operation can't be discovered through the `SHARED` parameter.
   *
   * @public
   */
  OwnershipType?: OwnershipType | undefined;

  /**
   * A Union object containing filter shapes for all `EntityType`s. Each `EntityTypeFilter` shape will have filters applicable for that `EntityType` that can be used to search or filter entities.
   *
   * @public
   */
  EntityTypeFilters?: EntityTypeFilters | undefined;

  /**
   * A Union object containing `Sort` shapes for all `EntityType`s. Each `EntityTypeSort` shape will have `SortBy` and `SortOrder` applicable for fields on that `EntityType`. This can be used to sort the results of the filter query.
   *
   * @public
   */
  EntityTypeSort?: EntityTypeSort | undefined;
}

/**
 * Object that contains summarized information about a container product.
 *
 * @public
 */
export interface ContainerProductSummary {
  /**
   * The title of the container product.
   *
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * The lifecycle of the product.
   *
   * @public
   */
  Visibility?: ContainerProductVisibilityString | undefined;
}

/**
 * Object that contains summarized information about a data product.
 *
 * @public
 */
export interface DataProductSummary {
  /**
   * The title of the data product.
   *
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * The lifecycle of the data product.
   *
   * @public
   */
  Visibility?: DataProductVisibilityString | undefined;
}

/**
 * Summarized information about an express private offer configuration.
 *
 * @public
 */
export interface ExpressPrivateOfferConfigurationSummary {
  /**
   * The product ID associated with the express private offer configuration.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The state of the express private offer configuration. Valid values are the following:
   *
   * - `ACTIVE` – The configuration is active and you can use it to generate offers.
   * - `INACTIVE` – The configuration is deprecated or deleted.
   *
   * @public
   */
  State?: ExpressPrivateOfferConfigurationStateString | undefined;
}

/**
 * A summary of a machine learning product.
 *
 * @public
 */
export interface MachineLearningProductSummary {
  /**
   * The title of the machine learning product.
   *
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * The visibility status of the machine learning product. Valid values are `Limited`, `Public`, `Restricted`, and `Draft`.
   *
   * @public
   */
  Visibility?: MachineLearningProductVisibilityString | undefined;
}

/**
 * Summarized information about an offer set.
 *
 * @public
 */
export interface OfferSetSummary {
  /**
   * The name of the offer set.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the offer set.
   *
   * @public
   */
  State?: OfferSetStateString | undefined;

  /**
   * The release date of the offer set.
   *
   * @public
   */
  ReleaseDate?: string | undefined;

  /**
   * The list of offer IDs associated with the offer set.
   *
   * @public
   */
  AssociatedOfferIds?: string[] | undefined;

  /**
   * The solution ID associated with the offer set.
   *
   * @public
   */
  SolutionId?: string | undefined;
}

/**
 * Summarized information about an offer.
 *
 * @public
 */
export interface OfferSummary {
  /**
   * The name of the offer.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The product ID of the offer.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The ResaleAuthorizationId of the offer.
   *
   * @public
   */
  ResaleAuthorizationId?: string | undefined;

  /**
   * The release date of the offer.
   *
   * @public
   */
  ReleaseDate?: string | undefined;

  /**
   * The availability end date of the offer.
   *
   * @public
   */
  AvailabilityEndDate?: string | undefined;

  /**
   * The buyer accounts in the offer.
   *
   * @public
   */
  BuyerAccounts?: string[] | undefined;

  /**
   * The status of the offer.
   *
   * @public
   */
  State?: OfferStateString | undefined;

  /**
   * The targeting in the offer.
   *
   * @public
   */
  Targeting?: OfferTargetingString[] | undefined;

  /**
   * The offer set ID of the offer.
   *
   * @public
   */
  OfferSetId?: string | undefined;

  /**
   * The target agreement ID of the offer.
   *
   * @public
   */
  TargetAgreementId?: string | undefined;

  /**
   * The target agreement intent of the offer.
   *
   * @public
   */
  TargetAgreementIntent?: OfferTargetAgreementIntentString | undefined;

  /**
   * The creation source of the offer.
   *
   * @public
   */
  CreatedBySource?: OfferCreatedBySourceString | undefined;
}

/**
 * Summarized information about a Resale Authorization.
 *
 * @public
 */
export interface ResaleAuthorizationSummary {
  /**
   * The name of the ResaleAuthorization.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The product ID of the ResaleAuthorization.
   *
   * @public
   */
  ProductId?: string | undefined;

  /**
   * The product name of the ResaleAuthorization.
   *
   * @public
   */
  ProductName?: string | undefined;

  /**
   * The manufacturer account ID of the ResaleAuthorization.
   *
   * @public
   */
  ManufacturerAccountId?: string | undefined;

  /**
   * The manufacturer legal name of the ResaleAuthorization.
   *
   * @public
   */
  ManufacturerLegalName?: string | undefined;

  /**
   * The reseller account ID of the ResaleAuthorization.
   *
   * @public
   */
  ResellerAccountID?: string | undefined;

  /**
   * The reseller legal name of the ResaleAuthorization
   *
   * @public
   */
  ResellerLegalName?: string | undefined;

  /**
   * The status of the ResaleAuthorization.
   *
   * @public
   */
  Status?: ResaleAuthorizationStatusString | undefined;

  /**
   * The offer extended status of the ResaleAuthorization
   *
   * @public
   */
  OfferExtendedStatus?: string | undefined;

  /**
   * The created date of the ResaleAuthorization.
   *
   * @public
   */
  CreatedDate?: string | undefined;

  /**
   * The availability end date of the ResaleAuthorization.
   *
   * @public
   */
  AvailabilityEndDate?: string | undefined;

  /**
   * The reseller role of the ResaleAuthorization.
   *
   * @public
   */
  ResellerRole?: ResaleAuthorizationResellerRoleString | undefined;

  /**
   * The source authorization of the ResaleAuthorization.
   *
   * @public
   */
  SourceAuthorization?: string | undefined;

  /**
   * The issuer account ID of the ResaleAuthorization.
   *
   * @public
   */
  IssuerAccountId?: string | undefined;
}

/**
 * Object that contains summarized information about a SaaS product.
 *
 * @public
 */
export interface SaaSProductSummary {
  /**
   * The title of the SaaS product.
   *
   * @public
   */
  ProductTitle?: string | undefined;

  /**
   * The lifecycle of the SaaS product.
   *
   * @public
   */
  Visibility?: SaaSProductVisibilityString | undefined;
}

/**
 * An object that contains summary information about a subsidiary authorization, including its name, status, authorized resource, subsidiary account, and creation date. A subsidiary authorization lets a seller authorize one of its subsidiary accounts to create offers for one of its products.
 *
 * @public
 */
export interface SubsidiaryAuthorizationSummary {
  /**
   * The name of the subsidiary authorization.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the subsidiary authorization. Valid values are:
   *
   * - `Draft` - The subsidiary authorization was created but not yet released. The subsidiary account can't see it.
   * - `Active` - The subsidiary account can use the subsidiary authorization to create offers for the authorized product.
   * - `Restricted` - The subsidiary authorization was discarded while in `Draft` or revoked while `Active`. It can't be used to create new offers. This status is final.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The ID of the resource that the subsidiary authorization applies to. Currently, this is always a product ID, such as `prod-example123`.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The name of the resource that the subsidiary authorization applies to. Currently, this is always a product name.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * The 12-digit AWS account ID of the subsidiary account.
   *
   * @public
   */
  SubsidiaryAccountId?: string | undefined;

  /**
   * The date the subsidiary authorization was created.
   *
   * @public
   */
  CreatedDate?: string | undefined;
}

/**
 * This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities.
 *
 * @public
 */
export interface EntitySummary {
  /**
   * The name for the entity. This value is not unique. It is defined by the seller.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of the entity.
   *
   * @public
   */
  EntityType?: string | undefined;

  /**
   * The unique identifier for the entity.
   *
   * @public
   */
  EntityId?: string | undefined;

  /**
   * The ARN associated with the unique identifier for the entity.
   *
   * @public
   */
  EntityArn?: string | undefined;

  /**
   * The last time the entity was published, using ISO 8601 format (2018-02-27T13:45:22Z).
   *
   * @public
   */
  LastModifiedDate?: string | undefined;

  /**
   * The visibility status of the entity to buyers. This value can be `Public` (everyone can view the entity), `Limited` (the entity is visible to limited accounts only), or `Restricted` (the entity was published and then unpublished and only existing buyers can view it).
   *
   * @public
   */
  Visibility?: string | undefined;

  /**
   * An object that contains summary information about the AMI product.
   *
   * @public
   */
  AmiProductSummary?: AmiProductSummary | undefined;

  /**
   * An object that contains summary information about the container product.
   *
   * @public
   */
  ContainerProductSummary?: ContainerProductSummary | undefined;

  /**
   * An object that contains summary information about the data product.
   *
   * @public
   */
  DataProductSummary?: DataProductSummary | undefined;

  /**
   * An object that contains summary information about the SaaS product.
   *
   * @public
   */
  SaaSProductSummary?: SaaSProductSummary | undefined;

  /**
   * An object that contains summary information about the offer.
   *
   * @public
   */
  OfferSummary?: OfferSummary | undefined;

  /**
   * An object that contains summary information about the Resale Authorization.
   *
   * @public
   */
  ResaleAuthorizationSummary?: ResaleAuthorizationSummary | undefined;

  /**
   * A summary of a machine learning product.
   *
   * @public
   */
  MachineLearningProductSummary?: MachineLearningProductSummary | undefined;

  /**
   * An object that contains summary information about the offer set.
   *
   * @public
   */
  OfferSetSummary?: OfferSetSummary | undefined;

  /**
   * An object that contains summary information about the express private offer configuration.
   *
   * @public
   */
  ExpressPrivateOfferConfigurationSummary?: ExpressPrivateOfferConfigurationSummary | undefined;

  /**
   * An object that contains summary information about the subsidiary authorization, such as its status and authorized resource, when the entity type is `SubsidiaryAuthorization`.
   *
   * @public
   */
  SubsidiaryAuthorizationSummary?: SubsidiaryAuthorizationSummary | undefined;
}

/**
 * @public
 */
export interface ListEntitiesResponse {
  /**
   * Array of `EntitySummary` objects.
   *
   * @public
   */
  EntitySummaryList?: EntitySummary[] | undefined;

  /**
   * The value of the next token if it exists. Null if there is no more result.
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
   * Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * A list of objects specifying each key name and value.
 *
 * @public
 */
export interface Tag {
  /**
   * The key associated with the tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value associated with the tag.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Required. The ARN associated with the resource you want to list tags on.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the entity resource you want to associate with a resource policy.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The policy document to set; formatted in JSON.
   *
   * @public
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * An object that contains the `ChangeType`, `Details`, and `Entity`.
 *
 * @public
 */
export interface Change {
  /**
   * Change types are single string values that describe your intention for the change. Each change type is unique for each `EntityType` provided in the change's scope. For more information about change types available for single-AMI products, see [Working with single-AMI products](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products). Also, for more information about change types available for container-based products, see [Working with container products](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products).
   *
   * @public
   */
  ChangeType: string | undefined;

  /**
   * The entity to be changed.
   *
   * @public
   */
  Entity: Entity | undefined;

  /**
   * The tags associated with the change.
   *
   * @public
   */
  EntityTags?: Tag[] | undefined;

  /**
   * This object contains details specific to the change type of the requested change. For more information about change types available for single-AMI products, see [Working with single-AMI products](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products). Also, for more information about change types available for container-based products, see [Working with container products](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products).
   *
   * @public
   */
  Details?: string | undefined;

  /**
   * Alternative field that accepts a JSON value instead of a string for `ChangeType` details. You can use either `Details` or `DetailsDocument`, but not both.
   *
   * To download the "DetailsDocument" shapes, see the [Python](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python) and [Java](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main) shapes on GitHub.
   *
   * @public
   */
  DetailsDocument?: __DocumentType | undefined;

  /**
   * Optional name for the change.
   *
   * @public
   */
  ChangeName?: string | undefined;
}

/**
 * @public
 */
export interface StartChangeSetRequest {
  /**
   * The catalog related to the request. Fixed value: `AWSMarketplace`
   *
   * @public
   */
  Catalog: string | undefined;

  /**
   * Array of `change` object.
   *
   * @public
   */
  ChangeSet: Change[] | undefined;

  /**
   * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
   *
   * @public
   */
  ChangeSetName?: string | undefined;

  /**
   * A unique token to identify the request to ensure idempotency.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * A list of objects specifying each key name and value for the `ChangeSetTags` property.
   *
   * @public
   */
  ChangeSetTags?: Tag[] | undefined;

  /**
   * The intent related to the request. The default is `APPLY`. To test your request before applying changes to your entities, use `VALIDATE`. This feature is currently available for adding versions to single-AMI products. For more information, see [Add a new version](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#ami-add-version).
   *
   * @public
   */
  Intent?: Intent | undefined;
}

/**
 * @public
 */
export interface StartChangeSetResponse {
  /**
   * Unique identifier generated for the request.
   *
   * @public
   */
  ChangeSetId?: string | undefined;

  /**
   * The ARN associated to the unique identifier generated for the request.
   *
   * @public
   */
  ChangeSetArn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.
   *
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
   * Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Required. A list of key names of tags to be removed. Number of strings allowed: 0-256.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
