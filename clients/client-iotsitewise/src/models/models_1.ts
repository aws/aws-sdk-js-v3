// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

import {
  AccessDeniedException,
  AccessPolicySummary,
  ActionDefinition,
  ActionSummary,
  Alarms,
  AssetBindingValueFilter,
  AssetModelBindingValueFilter,
  AssetModelCompositeModel,
  AssetModelCompositeModelPathSegment,
  AssetModelCompositeModelSummary,
  AssetModelHierarchy,
  AssetModelProperty,
  AssetModelPropertyBindingValue,
  AssetModelPropertyBindingValueFilter,
  AssetModelPropertySummary,
  AssetModelStatus,
  AssetModelSummary,
  AssetModelType,
  AssetModelVersionType,
  AssetPropertyBindingValue,
  AssetPropertyBindingValueFilter,
  AssetPropertySummary,
  AssetRelationshipSummary,
  AssetStatus,
  AssetSummary,
  AssociatedAssetsSummary,
  CapabilitySyncStatus,
  ColumnInfo,
  ComputationModelConfiguration,
  ComputationModelStatus,
  ConfigurationStatus,
  ConflictingOperationException,
  Content,
  DatasetSource,
  DatasetSourceType,
  DatasetStatus,
  DisassociatedDataStorageState,
  EncryptionType,
  ExecutionStatus,
  GatewayCapabilitySummary,
  GatewayPlatform,
  Identity,
  ImageFile,
  InternalFailureException,
  InvalidRequestException,
  JobStatus,
  LimitExceededException,
  Location,
  LoggingOptions,
  MultiLayerStorage,
  Permission,
  PortalStatus,
  PortalType,
  PortalTypeEntry,
  PropertyDataType,
  PropertyMapping,
  PropertyNotificationState,
  ResolveTo,
  ResolveToResourceType,
  Resource,
  ResourceNotFoundException,
  RetentionPeriod,
  StorageType,
  TargetResource,
  ThrottlingException,
  WarmTierRetentionPeriod,
  WarmTierState,
} from "./models_0";

/**
 * <p>The data source for the dataset.</p>
 * @public
 */
export interface Source {
  /**
   * <p>Contains the ARN of the dataset. If the source is Kendra, it's the ARN of the Kendra index.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Contains the location information where the cited text is originally stored.
   *   For example, if the data source is Kendra, and the text synchronized is from an S3 bucket, then the location refers to an S3 object.</p>
   * @public
   */
  location?: Location | undefined;
}

/**
 * <p>Contains information about the dataset use and it's source.</p>
 * @public
 */
export interface DataSetReference {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The data source for the dataset.</p>
   * @public
   */
  source?: Source | undefined;
}

/**
 * <p>Contains the reference information.</p>
 * @public
 */
export interface Reference {
  /**
   * <p>Contains the dataset reference information.</p>
   * @public
   */
  dataset?: DataSetReference | undefined;
}

/**
 * <p>Contains text content to which the SiteWise Assistant refers to, and generate the final response.
 *   It also contains information about the source.</p>
 * @public
 */
export interface Citation {
  /**
   * <p>Contains information about the data source.</p>
   * @public
   */
  reference?: Reference | undefined;

  /**
   * <p>Contains the cited text from the data source.</p>
   * @public
   */
  content?: Content | undefined;
}

/**
 * <p>This contains the SiteWise Assistant's response and the corresponding citation.</p>
 * @public
 */
export interface InvocationOutput {
  /**
   * <p>The text message of the SiteWise Assistant's response.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>A list of citations, and related information for the SiteWise Assistant's response.</p>
   * @public
   */
  citations?: Citation[] | undefined;
}

/**
 * <p>Contains tracing information of the SiteWise Assistant's reasoning and data access.</p>
 * @public
 */
export interface Trace {
  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains the response, citation, and trace from the SiteWise Assistant.</p>
 * @public
 */
export type ResponseStream =
  | ResponseStream.AccessDeniedExceptionMember
  | ResponseStream.ConflictingOperationExceptionMember
  | ResponseStream.InternalFailureExceptionMember
  | ResponseStream.InvalidRequestExceptionMember
  | ResponseStream.LimitExceededExceptionMember
  | ResponseStream.OutputMember
  | ResponseStream.ResourceNotFoundExceptionMember
  | ResponseStream.ThrottlingExceptionMember
  | ResponseStream.TraceMember
  | ResponseStream.$UnknownMember;

/**
 * @public
 */
export namespace ResponseStream {
  /**
   * <p>Contains tracing information of the SiteWise Assistant's reasoning and data access.</p>
   * @public
   */
  export interface TraceMember {
    trace: Trace;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>Contains the SiteWise Assistant's response.</p>
   * @public
   */
  export interface OutputMember {
    trace?: never;
    output: InvocationOutput;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>Access is denied.</p>
   * @public
   */
  export interface AccessDeniedExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException: AccessDeniedException;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your request has conflicting operations. This can occur if you're trying to perform more
   *       than one operation on the same resource at the same time.</p>
   * @public
   */
  export interface ConflictingOperationExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException: ConflictingOperationException;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>IoT SiteWise can't process your request right now. Try again later.</p>
   * @public
   */
  export interface InternalFailureExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException: InternalFailureException;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>The request isn't valid. This can occur if your request contains malformed JSON or
   *       unsupported characters. Check your request and try again.</p>
   * @public
   */
  export interface InvalidRequestExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException: InvalidRequestException;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>You've reached the quota for a resource. For example, this can occur if you're trying to
   *       associate more than the allowed number of child assets or attempting to create more than the
   *       allowed number of properties for an asset model.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  export interface LimitExceededExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException: LimitExceededException;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>The requested resource can't be found.</p>
   * @public
   */
  export interface ResourceNotFoundExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException: ResourceNotFoundException;
    throttlingException?: never;
    $unknown?: never;
  }

  /**
   * <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
   *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
   *       on.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  export interface ThrottlingExceptionMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException: ThrottlingException;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    trace?: never;
    output?: never;
    accessDeniedException?: never;
    conflictingOperationException?: never;
    internalFailureException?: never;
    invalidRequestException?: never;
    limitExceededException?: never;
    resourceNotFoundException?: never;
    throttlingException?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    trace: (value: Trace) => T;
    output: (value: InvocationOutput) => T;
    accessDeniedException: (value: AccessDeniedException) => T;
    conflictingOperationException: (value: ConflictingOperationException) => T;
    internalFailureException: (value: InternalFailureException) => T;
    invalidRequestException: (value: InvalidRequestException) => T;
    limitExceededException: (value: LimitExceededException) => T;
    resourceNotFoundException: (value: ResourceNotFoundException) => T;
    throttlingException: (value: ThrottlingException) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ResponseStream, visitor: Visitor<T>): T => {
    if (value.trace !== undefined) return visitor.trace(value.trace);
    if (value.output !== undefined) return visitor.output(value.output);
    if (value.accessDeniedException !== undefined) return visitor.accessDeniedException(value.accessDeniedException);
    if (value.conflictingOperationException !== undefined)
      return visitor.conflictingOperationException(value.conflictingOperationException);
    if (value.internalFailureException !== undefined)
      return visitor.internalFailureException(value.internalFailureException);
    if (value.invalidRequestException !== undefined)
      return visitor.invalidRequestException(value.invalidRequestException);
    if (value.limitExceededException !== undefined) return visitor.limitExceededException(value.limitExceededException);
    if (value.resourceNotFoundException !== undefined)
      return visitor.resourceNotFoundException(value.resourceNotFoundException);
    if (value.throttlingException !== undefined) return visitor.throttlingException(value.throttlingException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface InvokeAssistantResponse {
  /**
   * <p>Contains the response, citation, and trace from the SiteWise Assistant.</p>
   * @public
   */
  body: AsyncIterable<ResponseStream> | undefined;

  /**
   * <p>The ID of the conversation, in UUID format. This ID uniquely identifies the conversation within IoT SiteWise.</p>
   * @public
   */
  conversationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IdentityType = {
  GROUP: "GROUP",
  IAM: "IAM",
  USER: "USER",
} as const;

/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  PORTAL: "PORTAL",
  PROJECT: "PROJECT",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * <p>The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required
   *       if you specify <code>identityId</code>.</p>
   * @public
   */
  identityType?: IdentityType | undefined;

  /**
   * <p>The ID of the identity. This parameter is required if you specify <code>USER</code> or
   *         <code>GROUP</code> for <code>identityType</code>.</p>
   * @public
   */
  identityId?: string | undefined;

  /**
   * <p>The type of resource (portal or project). This parameter is required if you specify
   *         <code>resourceId</code>.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The ID of the resource. This parameter is required if you specify
   *         <code>resourceType</code>.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>. This parameter is required if you specify
   *         <code>IAM</code> for <code>identityType</code>.</p>
   * @public
   */
  iamArn?: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * <p>A list that summarizes each access policy.</p>
   * @public
   */
  accessPolicySummaries: AccessPolicySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TargetResourceType = {
  ASSET: "ASSET",
  COMPUTATION_MODEL: "COMPUTATION_MODEL",
} as const;

/**
 * @public
 */
export type TargetResourceType = (typeof TargetResourceType)[keyof typeof TargetResourceType];

/**
 * @public
 */
export interface ListActionsRequest {
  /**
   * <p>The type of resource.</p>
   * @public
   */
  targetResourceType: TargetResourceType | undefined;

  /**
   * <p>The ID of the target resource.</p>
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of the resolved resource.</p>
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * <p>The ID of the resolved resource.</p>
   * @public
   */
  resolveToResourceId?: string | undefined;
}

/**
 * @public
 */
export interface ListActionsResponse {
  /**
   * <p>A list that summarizes the actions associated with the specified asset.</p>
   * @public
   */
  actionSummaries: ActionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelCompositeModelsRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelCompositeModelsResponse {
  /**
   * <p>A list that summarizes each composite model.</p>
   * @public
   */
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListAssetModelPropertiesFilter = {
  ALL: "ALL",
  BASE: "BASE",
} as const;

/**
 * @public
 */
export type ListAssetModelPropertiesFilter =
  (typeof ListAssetModelPropertiesFilter)[keyof typeof ListAssetModelPropertiesFilter];

/**
 * @public
 */
export interface ListAssetModelPropertiesRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> Filters the requested list of asset model properties. You can choose one of the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all asset model properties for a given asset
   *           model ID. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASE</code> – The list includes only base asset model properties for a given
   *           asset model ID. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>BASE</code>
   *          </p>
   * @public
   */
  filter?: ListAssetModelPropertiesFilter | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelPropertiesResponse {
  /**
   * <p>A list that summarizes the properties associated with the specified asset model.</p>
   * @public
   */
  assetModelPropertySummaries: AssetModelPropertySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelsRequest {
  /**
   * <p>The type of asset model. If you don't provide an <code>assetModelTypes</code>, all types
   *       of asset models are returned.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ASSET_MODEL</b> – An asset model that you can use
   *           to create assets. Can't be included as a component in another asset model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPONENT_MODEL</b> – A reusable component that
   *           you can include in the composite models of other asset models. You can't create
   *           assets directly from this type of asset model. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>INTERFACE</b> – An interface is a type of model
   *           that defines a standard structure that can be applied to different asset models.</p>
   *             </li>
   *          </ul>
   * @public
   */
  assetModelTypes?: AssetModelType[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListAssetModelsResponse {
  /**
   * <p>A list that summarizes each asset model.</p>
   * @public
   */
  assetModelSummaries: AssetModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListAssetPropertiesFilter = {
  ALL: "ALL",
  BASE: "BASE",
} as const;

/**
 * @public
 */
export type ListAssetPropertiesFilter = (typeof ListAssetPropertiesFilter)[keyof typeof ListAssetPropertiesFilter];

/**
 * @public
 */
export interface ListAssetPropertiesRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> Filters the requested list of asset properties. You can choose one of the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all asset properties for a given asset model ID.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASE</code> – The list includes only base asset properties for a given asset
   *           model ID. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>BASE</code>
   *          </p>
   * @public
   */
  filter?: ListAssetPropertiesFilter | undefined;
}

/**
 * @public
 */
export interface ListAssetPropertiesResponse {
  /**
   * <p>A list that summarizes the properties associated with the specified asset.</p>
   * @public
   */
  assetPropertySummaries: AssetPropertySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TraversalType = {
  PATH_TO_ROOT: "PATH_TO_ROOT",
} as const;

/**
 * @public
 */
export type TraversalType = (typeof TraversalType)[keyof typeof TraversalType];

/**
 * @public
 */
export interface ListAssetRelationshipsRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The type of traversal to use to identify asset relationships. Choose the following
   *       option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PATH_TO_ROOT</code> – Identify the asset's parent assets up to the root
   *           asset. The asset that you specify in <code>assetId</code> is the first result in the list
   *           of <code>assetRelationshipSummaries</code>, and the root asset is the last result.</p>
   *             </li>
   *          </ul>
   * @public
   */
  traversalType: TraversalType | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetRelationshipsResponse {
  /**
   * <p>A list that summarizes each asset relationship.</p>
   * @public
   */
  assetRelationshipSummaries: AssetRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListAssetsFilter = {
  ALL: "ALL",
  TOP_LEVEL: "TOP_LEVEL",
} as const;

/**
 * @public
 */
export type ListAssetsFilter = (typeof ListAssetsFilter)[keyof typeof ListAssetsFilter];

/**
 * @public
 */
export interface ListAssetsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ID of the asset model by which to filter the list of assets. This parameter is
   *       required if you choose <code>ALL</code> for <code>filter</code>. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * <p>The filter for the requested list of assets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all assets for a given asset model ID. The
   *             <code>assetModelId</code> parameter is required if you filter by
   *           <code>ALL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset
   *           hierarchy tree.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>ALL</code>
   *          </p>
   * @public
   */
  filter?: ListAssetsFilter | undefined;
}

/**
 * @public
 */
export interface ListAssetsResponse {
  /**
   * <p>A list that summarizes each asset.</p>
   * @public
   */
  assetSummaries: AssetSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TraversalDirection = {
  CHILD: "CHILD",
  PARENT: "PARENT",
} as const;

/**
 * @public
 */
export type TraversalDirection = (typeof TraversalDirection)[keyof typeof TraversalDirection];

/**
 * @public
 */
export interface ListAssociatedAssetsRequest {
  /**
   * <p>The ID of the asset to query. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>(Optional) If you don't provide a <code>hierarchyId</code>, all the immediate assets in
   *       the <code>traversalDirection</code> will be returned. </p>
   *          <p> The ID of the hierarchy by which child assets are associated to the asset.
   *       (This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.)</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  hierarchyId?: string | undefined;

  /**
   * <p>The direction to list associated assets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> – The list includes all child assets associated to the
   *           asset.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARENT</code> – The list includes the asset's parent asset.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>CHILD</code>
   *          </p>
   * @public
   */
  traversalDirection?: TraversalDirection | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssociatedAssetsResponse {
  /**
   * <p>A list that summarizes the associated assets.</p>
   * @public
   */
  assetSummaries: AssociatedAssetsSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ListBulkImportJobsFilter = {
  ALL: "ALL",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ListBulkImportJobsFilter = (typeof ListBulkImportJobsFilter)[keyof typeof ListBulkImportJobsFilter];

/**
 * @public
 */
export interface ListBulkImportJobsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>You can use a filter to select the bulk import jobs that you want to retrieve.</p>
   * @public
   */
  filter?: ListBulkImportJobsFilter | undefined;
}

/**
 * <p>Contains the job summary information.</p>
 * @public
 */
export interface JobSummary {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – The bulk import job has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListBulkImportJobsResponse {
  /**
   * <p>One or more job summaries to list.</p>
   * @public
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCompositionRelationshipsRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of the components of the composite model.</p>
 * @public
 */
export interface CompositionRelationshipSummary {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>The composite model type. Valid values are <code>AWS/ALARM</code>, <code>CUSTOM</code>, or
   *         <code> AWS/L4E_ANOMALY</code>.</p>
   * @public
   */
  assetModelCompositeModelType: string | undefined;
}

/**
 * @public
 */
export interface ListCompositionRelationshipsResponse {
  /**
   * <p>A list that summarizes each composition relationship.</p>
   * @public
   */
  compositionRelationshipSummaries: CompositionRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter used to match specific data binding values based on criteria. This filter allows
 *       searching for data bindings by asset, asset model, asset property, or asset model
 *       property.</p>
 * @public
 */
export interface DataBindingValueFilter {
  /**
   * <p>Filter criteria for matching data bindings based on a specific asset. Used to list all
   *       data bindings referencing a particular asset or its properties.</p>
   * @public
   */
  asset?: AssetBindingValueFilter | undefined;

  /**
   * <p>Filter criteria for matching data bindings based on a specific asset model. Used to list
   *       all data bindings referencing a particular asset model or its properties.</p>
   * @public
   */
  assetModel?: AssetModelBindingValueFilter | undefined;

  /**
   * <p>Filter criteria for matching data bindings based on a specific asset property. Used to
   *       list all data bindings referencing a particular property of an asset.</p>
   * @public
   */
  assetProperty?: AssetPropertyBindingValueFilter | undefined;

  /**
   * <p>Filter criteria for matching data bindings based on a specific asset model property. Used
   *       to list all data bindings referencing a particular property of an asset model.</p>
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValueFilter | undefined;
}

/**
 * @public
 */
export interface ListComputationModelDataBindingUsagesRequest {
  /**
   * <p>A filter used to limit the returned data binding usages based on specific data binding
   *       values. You can filter by asset, asset model, asset property, or asset model property to find
   *       all computation models using these specific data sources.</p>
   * @public
   */
  dataBindingValueFilter: DataBindingValueFilter | undefined;

  /**
   * <p>The token used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a value used in a data binding. It can be an asset property or an asset model
 *       property.</p>
 * @public
 */
export interface DataBindingValue {
  /**
   * <p>Contains information about an <code>assetModelProperty</code> binding value.</p>
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValue | undefined;

  /**
   * <p>The asset property value used in the data binding.</p>
   * @public
   */
  assetProperty?: AssetPropertyBindingValue | undefined;
}

/**
 * <p>Represents a data binding that matches the specified filter criteria.</p>
 * @public
 */
export interface MatchedDataBinding {
  /**
   * <p>The value of the matched data binding.</p>
   * @public
   */
  value: DataBindingValue | undefined;
}

/**
 * <p>A summary of how a specific data binding is used across computation models. This tracks
 *       dependencies between data sources and computation models, allowing you to understand the
 *       impact of changes to data sources.</p>
 * @public
 */
export interface ComputationModelDataBindingUsageSummary {
  /**
   * <p>The list of computation model IDs that use this data binding. This allows identification
   *       of all computation models affected by changes to the referenced data source.</p>
   * @public
   */
  computationModelIds: string[] | undefined;

  /**
   * <p>The data binding matched by the filter criteria. Contains details about specific data
   *       binding values used by the computation models.</p>
   * @public
   */
  matchedDataBinding: MatchedDataBinding | undefined;
}

/**
 * @public
 */
export interface ListComputationModelDataBindingUsagesResponse {
  /**
   * <p>A list of summaries describing the data binding usages across computation models. Each
   *       summary includes the computation model IDs and the matched data binding details.</p>
   * @public
   */
  dataBindingUsageSummaries: ComputationModelDataBindingUsageSummary[] | undefined;

  /**
   * <p>The token for the next set of paginated results, or null if there are no additional
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelResolveToResourcesRequest {
  /**
   * <p>The ID of the computation model for which to list resolved resources.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The token used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of the resource that a computation model resolves to.</p>
 * @public
 */
export interface ComputationModelResolveToResourceSummary {
  /**
   * <p>The detailed resource this execution summary resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface ListComputationModelResolveToResourcesResponse {
  /**
   * <p>A list of summaries describing the distinct resources that this computation model resolves
   *       to when actions were executed.</p>
   * @public
   */
  computationModelResolveToResourceSummaries: ComputationModelResolveToResourceSummary[] | undefined;

  /**
   * <p>The token for the next set of paginated results, or null if there are no additional
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputationModelType = {
  ANOMALY_DETECTION: "ANOMALY_DETECTION",
} as const;

/**
 * @public
 */
export type ComputationModelType = (typeof ComputationModelType)[keyof typeof ComputationModelType];

/**
 * @public
 */
export interface ListComputationModelsRequest {
  /**
   * <p>The type of computation model. If a <code>computationModelType</code> is not provided, all
   *       types of computation models are returned.</p>
   * @public
   */
  computationModelType?: ComputationModelType | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a computation model.</p>
 * @public
 */
export interface ComputationModelSummary {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the computation model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}</code>
   *          </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the computation model.</p>
   * @public
   */
  type: ComputationModelType | undefined;

  /**
   * <p>The model creation date, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The time the model was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the computation model.</p>
   * @public
   */
  status: ComputationModelStatus | undefined;

  /**
   * <p>The version of the computation model.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface ListComputationModelsResponse {
  /**
   * <p>A list summarizing each computation model.</p>
   * @public
   */
  computationModelSummaries: ComputationModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a dashboard summary.</p>
 * @public
 */
export interface DashboardSummary {
  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the dashboard</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The dashboard's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * <p>A list that summarizes each dashboard in the project.</p>
   * @public
   */
  dashboardSummaries: DashboardSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The type of data source for the dataset.</p>
   * @public
   */
  sourceType: DatasetSourceType | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The summary details for the dataset.</p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description about the dataset, and its functionality.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The dataset creation date, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the dataset was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The status of the dataset. This contains the state and any error messages. The state is
   *   <code>ACTIVE</code> when ready to use.</p>
   * @public
   */
  status: DatasetStatus | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>A list that summarizes the dataset response.</p>
   * @public
   */
  datasetSummaries: DatasetSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsRequest {
  /**
   * <p>The type of the target resource.</p>
   * @public
   */
  targetResourceType: TargetResourceType | undefined;

  /**
   * <p>The ID of the target resource.</p>
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * <p>The type of the resolved resource.</p>
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * <p>The ID of the resolved resource.</p>
   * @public
   */
  resolveToResourceId?: string | undefined;

  /**
   * <p>The token used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The type of action exectued.</p>
   * @public
   */
  actionType?: string | undefined;
}

/**
 * <p>Contains the execution summary of the computation model.</p>
 * @public
 */
export interface ExecutionSummary {
  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The type of action exectued.</p>
   * @public
   */
  actionType?: string | undefined;

  /**
   * <p>The resource the action will be taken on. This can include asset-based resources and
   *       computation model resources.</p>
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * <p>The version of the target resource.</p>
   * @public
   */
  targetResourceVersion: string | undefined;

  /**
   * <p>The detailed resource this execution resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * <p>The time the process started.</p>
   * @public
   */
  executionStartTime: Date | undefined;

  /**
   * <p>The time the process ended.</p>
   * @public
   */
  executionEndTime?: Date | undefined;

  /**
   * <p>The status of the execution process.</p>
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * <p>The execution entity version associated with the summary.</p>
   * @public
   */
  executionEntityVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListExecutionsResponse {
  /**
   * <p>Contains the list of execution summaries of the computation models.</p>
   * @public
   */
  executionSummaries: ExecutionSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a gateway.</p>
 * @public
 */
export interface GatewaySummary {
  /**
   * <p>The ID of the gateway device.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  gatewayName: string | undefined;

  /**
   * <p>The gateway's platform configuration. You can only specify one platform type in a
   *       gateway.</p>
   *          <p>(Legacy only) For Greengrass V1 gateways, specify the <code>greengrass</code> parameter
   *       with a valid Greengrass group ARN.</p>
   *          <p>For Greengrass V2 gateways, specify the <code>greengrassV2</code> parameter with a valid
   *       core device thing name. If creating a V3 gateway (<code>gatewayVersion=3</code>), you must
   *       also specify the <code>coreDeviceOperatingSystem</code>.</p>
   *          <p>For Siemens Industrial Edge gateways, specify the <code>siemensIE</code> parameter with a
   *       valid IoT Core thing name.</p>
   * @public
   */
  gatewayPlatform?: GatewayPlatform | undefined;

  /**
   * <p>The version of the gateway. A value of <code>3</code> indicates an MQTT-enabled, V3
   *       gateway, while <code>2</code> indicates a Classic streams, V2 gateway.</p>
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   * @public
   */
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[] | undefined;

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * <p>A list that summarizes each gateway.</p>
   * @public
   */
  gatewaySummaries: GatewaySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInterfaceRelationshipsRequest {
  /**
   * <p>The ID of the interface asset model. This can be either the actual ID in UUID format, or
   *       else externalId: followed by the external ID.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about an interface relationship, which defines how an
 *       interface is applied to an asset model. This summary provides the essential identifiers needed
 *       to retrieve detailed information about the relationship.</p>
 * @public
 */
export interface InterfaceRelationshipSummary {
  /**
   * <p>The ID of the asset model that has the interface applied to it.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListInterfaceRelationshipsResponse {
  /**
   * <p>A list that summarizes each interface relationship.</p>
   * @public
   */
  interfaceRelationshipSummaries: InterfaceRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a portal summary.</p>
 * @public
 */
export interface PortalSummary {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the portal.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The portal's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   * @public
   */
  startUrl: string | undefined;

  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Contains information about the current status of a portal.</p>
   * @public
   */
  status: PortalStatus | undefined;

  /**
   * <p>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalType?: PortalType | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * <p>A list that summarizes each portal.</p>
   * @public
   */
  portalSummaries?: PortalSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectAssetsRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListProjectAssetsResponse {
  /**
   * <p>A list that contains the IDs of each asset associated with the project.</p>
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains project summary information.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The project's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>A list that summarizes each project in the portal.</p>
   * @public
   */
  projectSummaries: ProjectSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>You are not authorized.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ListTimeSeriesType = {
  ASSOCIATED: "ASSOCIATED",
  DISASSOCIATED: "DISASSOCIATED",
} as const;

/**
 * @public
 */
export type ListTimeSeriesType = (typeof ListTimeSeriesType)[keyof typeof ListTimeSeriesType];

/**
 * @public
 */
export interface ListTimeSeriesRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The alias prefix of the time series.</p>
   * @public
   */
  aliasPrefix?: string | undefined;

  /**
   * <p>The type of the time series. The time series type can be one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASSOCIATED</code> – The time series is associated with an asset
   *           property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISASSOCIATED</code> – The time series isn't associated with any asset
   *           property.</p>
   *             </li>
   *          </ul>
   * @public
   */
  timeSeriesType?: ListTimeSeriesType | undefined;
}

/**
 * <p>Contains a summary of a time series (data stream).</p>
 * @public
 */
export interface TimeSeriesSummary {
  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The date that the time series was created, in Unix epoch time.</p>
   * @public
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   * @public
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}</code>
   *          </p>
   * @public
   */
  timeSeriesArn: string | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesResponse {
  /**
   * <p>One or more time series summaries to list.</p>
   * @public
   */
  TimeSeriesSummaries: TimeSeriesSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains configuration options for mapping properties from an interface asset model to an
 *       asset model where the interface is applied.</p>
 * @public
 */
export interface PropertyMappingConfiguration {
  /**
   * <p>If true, properties are matched by name between the interface asset model and the asset
   *       model where the interface is applied.</p>
   * @public
   */
  matchByPropertyName?: boolean | undefined;

  /**
   * <p>If true, missing properties from the interface asset model are automatically created in
   *       the asset model where the interface is applied.</p>
   * @public
   */
  createMissingProperty?: boolean | undefined;

  /**
   * <p>A list of specific property mappings that override the automatic mapping by name when an
   *       interface is applied to an asset model.</p>
   * @public
   */
  overrides?: PropertyMapping[] | undefined;
}

/**
 * @public
 */
export interface PutAssetModelInterfaceRelationshipRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else
   *       externalId: followed by the external ID.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model. This can be either the actual ID in UUID format, or
   *       else externalId: followed by the external ID.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The configuration for mapping properties from the interface asset model to the asset model
   *       where the interface is applied. This configuration controls how properties are matched and
   *       created during the interface application process.</p>
   * @public
   */
  propertyMappingConfiguration: PropertyMappingConfiguration | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the
   *       request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAssetModelInterfaceRelationshipResponse {
  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The ARN of the asset model, which has the following format.
   *       <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key ID of the customer managed key used for KMS encryption. This is required if you
   *       use <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The Key ARN of the KMS key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there is an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * <p>The logging options to set.</p>
   * @public
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsResponse {}

/**
 * @public
 */
export interface PutStorageConfigurationRequest {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Identifies a storage destination. If you specified <code>MULTI_LAYER_STORAGE</code> for the storage type,
   *       you must specify a <code>MultiLayerStorage</code> object.</p>
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * <p>Describes the configuration for ingesting NULL and NaN data. By default the feature is
   *       allowed. The feature is disallowed if the value is <code>true</code>.</p>
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * @public
 */
export interface PutStorageConfigurationResponse {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Contains current status information for the configuration.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * <p>Describes the configuration for ingesting NULL and NaN data. By default the feature is
   *       allowed. The feature is disallowed if the value is <code>true</code>.</p>
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>You've reached the quota for the number of tags allowed for a resource. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag naming limits and
 *         requirements</a> in the <i>Amazon Web Services General Reference</i>.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource with too many tags.</p>
   * @public
   */
  resourceName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys for tags to remove from the resource.</p>
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
export interface UpdateAccessPolicyRequest {
  /**
   * <p>The ID of the access policy.</p>
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAccessPolicyResponse {}

/**
 * @public
 */
export interface UpdateAssetRequest {
  /**
   * <p>The ID of the asset to update. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>An external ID to assign to the asset. The asset must not already have an external ID.
   *       The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * <p>A friendly name for the asset.</p>
   * @public
   */
  assetName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A description for the asset.</p>
   * @public
   */
  assetDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * <p>The status of the asset, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelRequest {
  /**
   * <p>The ID of the asset model to update. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>An external ID to assign to the asset model. The asset model must not already have an
   *       external ID. The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * <p>A unique name for the asset model.</p>
   * @public
   */
  assetModelName: string | undefined;

  /**
   * <p>A description for the asset model.</p>
   * @public
   */
  assetModelDescription?: string | undefined;

  /**
   * <p>The updated property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelProperties?: AssetModelProperty[] | undefined;

  /**
   * <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset
   *       model whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelHierarchies?: AssetModelHierarchy[] | undefined;

  /**
   * <p>The composite models that are part of this asset model. It groups properties
   *   (such as attributes, measurements, transforms, and metrics) and child composite models that
   *       model parts of your industrial equipment. Each composite model has a type that defines the
   *       properties that the composite model supports. Use composite models to define alarms on this asset model.</p>
   *          <note>
   *             <p>When creating custom composite models, you need to use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html">CreateAssetModelCompositeModel</a>. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-custom-composite-models.html">Creating custom composite models (Components)</a> in the
   *       <i>IoT SiteWise User Guide</i>.</p>
   *          </note>
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModel[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The update request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the update request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the update operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelResponse {
  /**
   * <p>The status of the asset model, which contains a state (<code>UPDATING</code> after
   *       successfully calling this operation) and any error message.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelRequest {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>An external ID to assign to the asset model. You can only set the external ID of the asset
   *       model if it wasn't set when it was created, or you're setting it to the exact same thing as
   *       when it was created.</p>
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * <p>A description for the composite model.</p>
   * @public
   */
  assetModelCompositeModelDescription?: string | undefined;

  /**
   * <p>A unique name for the composite model.</p>
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The property definitions of the composite model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html#inline-composite-models">
   *         Inline custom composite models</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per composite model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelCompositeModelProperties?: AssetModelProperty[] | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The update request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the update request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the update operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelResponse {
  /**
   * <p>The path to the composite model listing the parent composite models.</p>
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetPropertyRequest {
  /**
   * <p>The ID of the asset to be updated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the alias is removed from the property.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The MQTT notification state (enabled or disabled) for this asset property.
   *       When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>
   * @public
   */
  propertyNotificationState?: PropertyNotificationState | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a
   *       value for this parameter, the service uses the value of the <code>assetModelProperty</code> in
   *       the asset model.</p>
   * @public
   */
  propertyUnit?: string | undefined;
}

/**
 * @public
 */
export interface UpdateComputationModelResponse {
  /**
   * <p>The status of the computation model. It contains a state (UPDATING after successfully
   *       calling this operation) and an error message if any.</p>
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * <p>The ID of the dashboard to update.</p>
   * @public
   */
  dashboardId: string | undefined;

  /**
   * <p>A new friendly name for the dashboard.</p>
   * @public
   */
  dashboardName: string | undefined;

  /**
   * <p>A new description for the dashboard.</p>
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * <p>The new dashboard definition, as specified in a JSON literal.</p>
   *          <ul>
   *             <li>
   *                <p>IoT SiteWise Monitor (Classic) see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Create dashboards (CLI)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>IoT SiteWise Monitor (AI-aware) see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-ai-dashboard-cli.html">Create dashboards (CLI)</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>in the <i>IoT SiteWise User Guide</i>
   *          </p>
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {}

/**
 * @public
 */
export interface UpdateDatasetRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>A description about the dataset, and its functionality.</p>
   * @public
   */
  datasetDescription?: string | undefined;

  /**
   * <p>The data source for the dataset.</p>
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>The status of the dataset. This contains the state and any error messages.
   *   State is <code>UPDATING</code> after a successfull call to this API, and any associated error message. The state is
   *   <code>ACTIVE</code> when ready to use.</p>
   * @public
   */
  datasetStatus?: DatasetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * <p>The ID of the gateway to update.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>A unique name for the gateway.</p>
   * @public
   */
  gatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * <p>The ID of the gateway to be updated.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the gateway capability configuration to be updated.
   *       For example, if you configure OPC UA
   *       sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:3</code>.</p>
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the configuration for the gateway capability. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  capabilityConfiguration: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationResponse {
  /**
   * <p>The namespace of the gateway capability.</p>
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The synchronization status of the gateway capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> - The gateway is running with the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> - The gateway hasn't received the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> - The gateway rejected the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> - The gateway hasn't reported its sync status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_APPLICABLE</code> - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.</p>
   *             </li>
   *          </ul>
   *          <p>After you update a capability configuration, its sync status is <code>OUT_OF_SYNC</code>
   *       until the gateway receives and applies or rejects the updated configuration.</p>
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * <p>Contains an image that is one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>An image file. Choose this option to upload a new image.</p>
 *             </li>
 *             <li>
 *                <p>The ID of an existing image. Choose this option to keep an existing image.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Image {
  /**
   * <p>The ID of an existing image. Specify this parameter to keep an existing image.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Contains an image file.</p>
   * @public
   */
  file?: ImageFile | undefined;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * <p>The ID of the portal to update.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>A new friendly name for the portal.</p>
   * @public
   */
  portalName: string | undefined;

  /**
   * <p>A new description for the portal.</p>
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * <p>Contains an image that is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An image file. Choose this option to upload a new image.</p>
   *             </li>
   *             <li>
   *                <p>The ID of an existing image. Choose this option to keep an existing image.</p>
   *             </li>
   *          </ul>
   * @public
   */
  portalLogoImage?: Image | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The email address that sends alarm notifications.</p>
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * <p>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * <p>The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The ID of the project to update.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>A new friendly name for the project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A new description for the project.</p>
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {}

/**
 * <p>Contains computation model data binding value information, which can be one of
 *         <code>assetModelProperty</code>, <code>list</code>.</p>
 * @public
 */
export interface ComputationModelDataBindingValue {
  /**
   * <p>Specifies an asset model property data binding value.</p>
   * @public
   */
  assetModelProperty?: AssetModelPropertyBindingValue | undefined;

  /**
   * <p>The asset property value used for computation model data binding.</p>
   * @public
   */
  assetProperty?: AssetPropertyBindingValue | undefined;

  /**
   * <p>Specifies a list of data binding value.</p>
   * @public
   */
  list?: ComputationModelDataBindingValue[] | undefined;
}

/**
 * @public
 */
export interface CreateComputationModelRequest {
  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  computationModelName: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * <p>The configuration for the computation model.</p>
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * <p>The data binding for the computation model. Key is a variable name defined in configuration.
   *   Value is a <code>ComputationModelDataBindingValue</code> referenced by the variable.</p>
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelResponse {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the computation model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}</code>
   *          </p>
   * @public
   */
  computationModelArn: string | undefined;

  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  computationModelName: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * <p>The configuration for the computation model.</p>
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * <p>The data binding for the computation model. Key is a variable name defined in configuration.
   *   Value is a <code>ComputationModelDataBindingValue</code> referenced by the variable.</p>
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * <p>The model creation date, in Unix epoch time.</p>
   * @public
   */
  computationModelCreationDate: Date | undefined;

  /**
   * <p>The date the model was last updated, in Unix epoch time.</p>
   * @public
   */
  computationModelLastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset model, which contains a state and an error message if
   *       any.</p>
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;

  /**
   * <p>The version of the computation model.</p>
   * @public
   */
  computationModelVersion: string | undefined;

  /**
   * <p>The available actions for this computation model.</p>
   * @public
   */
  actionDefinitions: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface UpdateComputationModelRequest {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The name of the computation model.</p>
   * @public
   */
  computationModelName: string | undefined;

  /**
   * <p>The description of the computation model.</p>
   * @public
   */
  computationModelDescription?: string | undefined;

  /**
   * <p>The configuration for the computation model.</p>
   * @public
   */
  computationModelConfiguration: ComputationModelConfiguration | undefined;

  /**
   * <p>The data binding for the computation model. Key is a variable name defined in configuration.
   *   Value is a <code>ComputationModelDataBindingValue</code> referenced by the variable.</p>
   * @public
   */
  computationModelDataBinding: Record<string, ComputationModelDataBindingValue> | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the
   *       request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents a single data point in a query result. </p>
 * @public
 */
export interface Datum {
  /**
   * <p>Indicates if the data point is a scalar value such as integer, string, double, or Boolean.
   *     </p>
   * @public
   */
  scalarValue?: string | undefined;

  /**
   * <p>Indicates if the data point is an array. </p>
   * @public
   */
  arrayValue?: Datum[] | undefined;

  /**
   * <p>Indicates if the data point is a row.</p>
   * @public
   */
  rowValue?: Row | undefined;

  /**
   * <p>Indicates if the data point is null.</p>
   * @public
   */
  nullValue?: boolean | undefined;
}

/**
 * <p>Represents a single row in the query results.</p>
 * @public
 */
export interface Row {
  /**
   * <p>List of data points in a single row of the result set.</p>
   * @public
   */
  data: Datum[] | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * <p>Represents a single column in the query results.</p>
   * @public
   */
  columns?: ColumnInfo[] | undefined;

  /**
   * <p>Represents a single row in the query results.</p>
   * @public
   */
  rows?: Row[] | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @internal
 */
export const ResponseStreamFilterSensitiveLog = (obj: ResponseStream): any => {
  if (obj.trace !== undefined) return { trace: obj.trace };
  if (obj.output !== undefined) return { output: obj.output };
  if (obj.accessDeniedException !== undefined) return { accessDeniedException: obj.accessDeniedException };
  if (obj.conflictingOperationException !== undefined)
    return { conflictingOperationException: obj.conflictingOperationException };
  if (obj.internalFailureException !== undefined) return { internalFailureException: obj.internalFailureException };
  if (obj.invalidRequestException !== undefined) return { invalidRequestException: obj.invalidRequestException };
  if (obj.limitExceededException !== undefined) return { limitExceededException: obj.limitExceededException };
  if (obj.resourceNotFoundException !== undefined) return { resourceNotFoundException: obj.resourceNotFoundException };
  if (obj.throttlingException !== undefined) return { throttlingException: obj.throttlingException };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const InvokeAssistantResponseFilterSensitiveLog = (obj: InvokeAssistantResponse): any => ({
  ...obj,
  ...(obj.body && { body: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const UpdatePortalRequestFilterSensitiveLog = (obj: UpdatePortalRequest): any => ({
  ...obj,
  ...(obj.portalContactEmail && { portalContactEmail: SENSITIVE_STRING }),
  ...(obj.notificationSenderEmail && { notificationSenderEmail: SENSITIVE_STRING }),
});
