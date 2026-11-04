// smithy-typescript generated code
import type {
  DefinitionLanguage,
  DeploymentTarget,
  EntityFilterName,
  EntityType,
  FlowExecutionEventType,
  FlowExecutionStatus,
  FlowTemplateFilterName,
  NamespaceDeletionStatus,
  NamespaceDeletionStatusErrorCodes,
  SystemInstanceDeploymentStatus,
  SystemInstanceFilterName,
  SystemTemplateFilterName,
  UploadStatus,
} from "./enums";

/**
 * @public
 */
export interface AssociateEntityToThingRequest {
  /**
   * The name of the thing to which the entity is to be associated.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The ID of the device to be associated with the thing.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME`
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The version of the user's namespace. Defaults to the latest version of the user's namespace.
   *
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface AssociateEntityToThingResponse {}

/**
 * A document that defines an entity.
 *
 * @public
 */
export interface DefinitionDocument {
  /**
   * The language used to define the entity. `GRAPHQL` is the only valid value.
   *
   * @public
   */
  language: DefinitionLanguage | undefined;

  /**
   * The GraphQL text that defines the entity.
   *
   * @public
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowTemplateRequest {
  /**
   * The workflow `DefinitionDocument`.
   *
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * The namespace version in which the workflow is to be created.
   *
   * If no value is specified, the latest version is used by default.
   *
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * An object that contains summary information about a workflow.
 *
 * @public
 */
export interface FlowTemplateSummary {
  /**
   * The ID of the workflow.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the workflow.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The revision number of the workflow.
   *
   * @public
   */
  revisionNumber?: number | undefined;

  /**
   * The date when the workflow was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateFlowTemplateResponse {
  /**
   * The summary object that describes the created workflow.
   *
   * @public
   */
  summary?: FlowTemplateSummary | undefined;
}

/**
 * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
 *
 * @public
 */
export interface MetricsConfiguration {
  /**
   * A Boolean that specifies whether cloud metrics are collected.
   *
   * @public
   */
  cloudMetricEnabled?: boolean | undefined;

  /**
   * The ARN of the role that is used to collect cloud metrics.
   *
   * @public
   */
  metricRuleRoleArn?: string | undefined;
}

/**
 * Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.
 *
 * @public
 */
export interface Tag {
  /**
   * The required name of the tag. The string value can be from 1 to 128 Unicode characters in length.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateSystemInstanceRequest {
  /**
   * Metadata, consisting of key-value pairs, that can be used to categorize your system instances.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A document that defines an entity.
   *
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * The target type of the deployment. Valid values are `GREENGRASS` and `CLOUD`.
   *
   * @public
   */
  target: DeploymentTarget | undefined;

  /**
   * The name of the Greengrass group where the system instance will be deployed. This value is required if the value of the `target` parameter is `GREENGRASS`.
   *
   * @public
   */
  greengrassGroupName?: string | undefined;

  /**
   * The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if the value of the `target` parameter is `GREENGRASS`.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
   *
   * @public
   */
  metricsConfiguration?: MetricsConfiguration | undefined;

  /**
   * The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes. This value is required if the value of the `target` parameter is `CLOUD`.
   *
   * @public
   */
  flowActionsRoleArn?: string | undefined;
}

/**
 * An object that contains summary information about a system instance.
 *
 * @public
 */
export interface SystemInstanceSummary {
  /**
   * The ID of the system instance.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the system instance.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The status of the system instance.
   *
   * @public
   */
  status?: SystemInstanceDeploymentStatus | undefined;

  /**
   * The target of the system instance.
   *
   * @public
   */
  target?: DeploymentTarget | undefined;

  /**
   * The ID of the Greengrass group where the system instance is deployed.
   *
   * @public
   */
  greengrassGroupName?: string | undefined;

  /**
   * The date when the system instance was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the system instance was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The ID of the Greengrass group where the system instance is deployed.
   *
   * @public
   */
  greengrassGroupId?: string | undefined;

  /**
   * The version of the Greengrass group where the system instance is deployed.
   *
   * @public
   */
  greengrassGroupVersionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSystemInstanceResponse {
  /**
   * The summary object that describes the new system instance.
   *
   * @public
   */
  summary?: SystemInstanceSummary | undefined;
}

/**
 * @public
 */
export interface CreateSystemTemplateRequest {
  /**
   * The `DefinitionDocument` used to create the system.
   *
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * The namespace version in which the system is to be created.
   *
   * If no value is specified, the latest version is used by default.
   *
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * An object that contains information about a system.
 *
 * @public
 */
export interface SystemTemplateSummary {
  /**
   * The ID of the system.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the system.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The revision number of the system.
   *
   * @public
   */
  revisionNumber?: number | undefined;

  /**
   * The date when the system was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSystemTemplateResponse {
  /**
   * The summary object that describes the created system.
   *
   * @public
   */
  summary?: SystemTemplateSummary | undefined;
}

/**
 * @public
 */
export interface DeleteFlowTemplateRequest {
  /**
   * The ID of the workflow to be deleted.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME`
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowTemplateResponse {}

/**
 * @public
 */
export interface DeleteNamespaceRequest {}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * The ARN of the namespace to be deleted.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The name of the namespace to be deleted.
   *
   * @public
   */
  namespaceName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSystemInstanceRequest {
  /**
   * The ID of the system instance to be deleted.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSystemInstanceResponse {}

/**
 * @public
 */
export interface DeleteSystemTemplateRequest {
  /**
   * The ID of the system to be deleted.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME`
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSystemTemplateResponse {}

/**
 * An object that contains the ID and revision number of a workflow or system that is part of a deployment.
 *
 * @public
 */
export interface DependencyRevision {
  /**
   * The ID of the workflow or system.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The revision number of the workflow or system.
   *
   * @public
   */
  revisionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeploySystemInstanceRequest {
  /**
   * The ID of the system instance. This value is returned by the `CreateSystemInstance` action.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME`
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeploySystemInstanceResponse {
  /**
   * An object that contains summary information about a system instance that was deployed.
   *
   * @public
   */
  summary: SystemInstanceSummary | undefined;

  /**
   * The ID of the Greengrass deployment used to deploy the system instance.
   *
   * @public
   */
  greengrassDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface DeprecateFlowTemplateRequest {
  /**
   * The ID of the workflow to be deleted.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME`
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeprecateFlowTemplateResponse {}

/**
 * @public
 */
export interface DeprecateSystemTemplateRequest {
  /**
   * The ID of the system to delete.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME`
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeprecateSystemTemplateResponse {}

/**
 * @public
 */
export interface DescribeNamespaceRequest {
  /**
   * The name of the user's namespace. Set this to `aws` to get the public namespace.
   *
   * @public
   */
  namespaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNamespaceResponse {
  /**
   * The ARN of the namespace.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The name of the namespace.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The name of the public namespace that the latest namespace version is tracking.
   *
   * @public
   */
  trackingNamespaceName?: string | undefined;

  /**
   * The version of the public namespace that the latest version is tracking.
   *
   * @public
   */
  trackingNamespaceVersion?: number | undefined;

  /**
   * The version of the user's namespace to describe.
   *
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface DissociateEntityFromThingRequest {
  /**
   * The name of the thing to disassociate.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The entity type from which to disassociate the thing.
   *
   * @public
   */
  entityType: EntityType | undefined;
}

/**
 * @public
 */
export interface DissociateEntityFromThingResponse {}

/**
 * Describes the properties of an entity.
 *
 * @public
 */
export interface EntityDescription {
  /**
   * The entity ID.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The entity ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The entity type.
   *
   * @public
   */
  type?: EntityType | undefined;

  /**
   * The time at which the entity was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The definition document of the entity.
   *
   * @public
   */
  definition?: DefinitionDocument | undefined;
}

/**
 * An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a `NAMESPACE` and a `REFERENCED_ENTITY_ID` filter searches for entities in the specified namespace that use the entity specified by the value of `REFERENCED_ENTITY_ID`.
 *
 * @public
 */
export interface EntityFilter {
  /**
   * The name of the entity search filter field. `REFERENCED_ENTITY_ID` filters on entities that are used by the entity in the result set. For example, you can filter on the ID of a property that is used in a state.
   *
   * @public
   */
  name?: EntityFilterName | undefined;

  /**
   * An array of string values for the search filter field. Multiple values function as AND criteria in the search.
   *
   * @public
   */
  value?: string[] | undefined;
}

/**
 * An object that contains information about a flow event.
 *
 * @public
 */
export interface FlowExecutionMessage {
  /**
   * The unique identifier of the message.
   *
   * @public
   */
  messageId?: string | undefined;

  /**
   * The type of flow event .
   *
   * @public
   */
  eventType?: FlowExecutionEventType | undefined;

  /**
   * The date and time when the message was last updated.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * A string containing information about the flow event.
   *
   * @public
   */
  payload?: string | undefined;
}

/**
 * An object that contains summary information about a flow execution.
 *
 * @public
 */
export interface FlowExecutionSummary {
  /**
   * The ID of the flow execution.
   *
   * @public
   */
  flowExecutionId?: string | undefined;

  /**
   * The current status of the flow execution.
   *
   * @public
   */
  status?: FlowExecutionStatus | undefined;

  /**
   * The ID of the system instance that contains the flow.
   *
   * @public
   */
  systemInstanceId?: string | undefined;

  /**
   * The ID of the flow.
   *
   * @public
   */
  flowTemplateId?: string | undefined;

  /**
   * The date and time when the flow execution summary was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date and time when the flow execution summary was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * An object that contains a workflow's definition and summary information.
 *
 * @public
 */
export interface FlowTemplateDescription {
  /**
   * An object that contains summary information about a workflow.
   *
   * @public
   */
  summary?: FlowTemplateSummary | undefined;

  /**
   * A workflow's definition document.
   *
   * @public
   */
  definition?: DefinitionDocument | undefined;

  /**
   * The version of the user's namespace against which the workflow was validated. Use this value in your system instance.
   *
   * @public
   */
  validatedNamespaceVersion?: number | undefined;
}

/**
 * An object that filters a workflow search.
 *
 * @public
 */
export interface FlowTemplateFilter {
  /**
   * The name of the search filter field.
   *
   * @public
   */
  name: FlowTemplateFilterName | undefined;

  /**
   * An array of string values for the search filter field. Multiple values function as AND criteria in the search.
   *
   * @public
   */
  value: string[] | undefined;
}

/**
 * @public
 */
export interface GetEntitiesRequest {
  /**
   * An array of entity IDs.
   *
   * The IDs should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME`
   *
   * @public
   */
  ids: string[] | undefined;

  /**
   * The version of the user's namespace. Defaults to the latest version of the user's namespace.
   *
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetEntitiesResponse {
  /**
   * An array of descriptions for the specified entities.
   *
   * @public
   */
  descriptions?: EntityDescription[] | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateRequest {
  /**
   * The ID of the workflow.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The number of the workflow revision to retrieve.
   *
   * @public
   */
  revisionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateResponse {
  /**
   * The object that describes the specified workflow.
   *
   * @public
   */
  description?: FlowTemplateDescription | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateRevisionsRequest {
  /**
   * The ID of the workflow.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateRevisionsResponse {
  /**
   * An array of objects that provide summary data about each revision.
   *
   * @public
   */
  summaries?: FlowTemplateSummary[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceDeletionStatusRequest {}

/**
 * @public
 */
export interface GetNamespaceDeletionStatusResponse {
  /**
   * The ARN of the namespace that is being deleted.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The name of the namespace that is being deleted.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The status of the deletion request.
   *
   * @public
   */
  status?: NamespaceDeletionStatus | undefined;

  /**
   * An error code returned by the namespace deletion task.
   *
   * @public
   */
  errorCode?: NamespaceDeletionStatusErrorCodes | undefined;

  /**
   * An error code returned by the namespace deletion task.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetSystemInstanceRequest {
  /**
   * The ID of the system deployment instance. This value is returned by `CreateSystemInstance`.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME`
   *
   * @public
   */
  id: string | undefined;
}

/**
 * An object that contains a system instance definition and summary information.
 *
 * @public
 */
export interface SystemInstanceDescription {
  /**
   * An object that contains summary information about a system instance.
   *
   * @public
   */
  summary?: SystemInstanceSummary | undefined;

  /**
   * A document that defines an entity.
   *
   * @public
   */
  definition?: DefinitionDocument | undefined;

  /**
   * The Amazon Simple Storage Service bucket where information about a system instance is stored.
   *
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
   *
   * @public
   */
  metricsConfiguration?: MetricsConfiguration | undefined;

  /**
   * The version of the user's namespace against which the system instance was validated.
   *
   * @public
   */
  validatedNamespaceVersion?: number | undefined;

  /**
   * A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.
   *
   * @public
   */
  validatedDependencyRevisions?: DependencyRevision[] | undefined;

  /**
   * The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other AWS services that the flow uses.
   *
   * @public
   */
  flowActionsRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSystemInstanceResponse {
  /**
   * An object that describes the system instance.
   *
   * @public
   */
  description?: SystemInstanceDescription | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateRequest {
  /**
   * The ID of the system to get. This ID must be in the user's namespace.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The number that specifies the revision of the system to get.
   *
   * @public
   */
  revisionNumber?: number | undefined;
}

/**
 * An object that contains a system's definition document and summary information.
 *
 * @public
 */
export interface SystemTemplateDescription {
  /**
   * An object that contains summary information about a system.
   *
   * @public
   */
  summary?: SystemTemplateSummary | undefined;

  /**
   * The definition document of a system.
   *
   * @public
   */
  definition?: DefinitionDocument | undefined;

  /**
   * The namespace version against which the system was validated. Use this value in your system instance.
   *
   * @public
   */
  validatedNamespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateResponse {
  /**
   * An object that contains summary data about the system.
   *
   * @public
   */
  description?: SystemTemplateDescription | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateRevisionsRequest {
  /**
   * The ID of the system template.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateRevisionsResponse {
  /**
   * An array of objects that contain summary data about the system template revisions.
   *
   * @public
   */
  summaries?: SystemTemplateSummary[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUploadStatusRequest {
  /**
   * The ID of the upload. This value is returned by the `UploadEntityDefinitions` action.
   *
   * @public
   */
  uploadId: string | undefined;
}

/**
 * @public
 */
export interface GetUploadStatusResponse {
  /**
   * The ID of the upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The status of the upload. The initial status is `IN_PROGRESS`. The response show all validation failures if the upload fails.
   *
   * @public
   */
  uploadStatus: UploadStatus | undefined;

  /**
   * The ARN of the upload.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The name of the upload's namespace.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The version of the user's namespace. Defaults to the latest version of the user's namespace.
   *
   * @public
   */
  namespaceVersion?: number | undefined;

  /**
   * The reason for an upload failure.
   *
   * @public
   */
  failureReason?: string[] | undefined;

  /**
   * The date at which the upload was created.
   *
   * @public
   */
  createdDate: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionMessagesRequest {
  /**
   * The ID of the flow execution.
   *
   * @public
   */
  flowExecutionId: string | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionMessagesResponse {
  /**
   * A list of objects that contain information about events in the specified flow execution.
   *
   * @public
   */
  messages?: FlowExecutionMessage[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The maximum number of tags to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource whose tags are to be returned.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The token that specifies the next page of results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * List of tags returned by the `ListTagsForResource` operation.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The token that specifies the next page of results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchEntitiesRequest {
  /**
   * The entity types for which to search.
   *
   * @public
   */
  entityTypes: EntityType[] | undefined;

  /**
   * Optional filter to apply to the search. Valid filters are `NAME` `NAMESPACE`, `SEMANTIC_TYPE_PATH` and `REFERENCED_ENTITY_ID`. `REFERENCED_ENTITY_ID` filters on entities that are used by the entity in the result set. For example, you can filter on the ID of a property that is used in a state.
   *
   * Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.
   *
   * @public
   */
  filters?: EntityFilter[] | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The version of the user's namespace. Defaults to the latest version of the user's namespace.
   *
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface SearchEntitiesResponse {
  /**
   * An array of descriptions for each entity returned in the search result.
   *
   * @public
   */
  descriptions?: EntityDescription[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchFlowExecutionsRequest {
  /**
   * The ID of the system instance that contains the flow.
   *
   * @public
   */
  systemInstanceId: string | undefined;

  /**
   * The ID of a flow execution.
   *
   * @public
   */
  flowExecutionId?: string | undefined;

  /**
   * The date and time of the earliest flow execution to return.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time of the latest flow execution to return.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchFlowExecutionsResponse {
  /**
   * An array of objects that contain summary information about each workflow execution in the result set.
   *
   * @public
   */
  summaries?: FlowExecutionSummary[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchFlowTemplatesRequest {
  /**
   * An array of objects that limit the result set. The only valid filter is `DEVICE_MODEL_ID`.
   *
   * @public
   */
  filters?: FlowTemplateFilter[] | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchFlowTemplatesResponse {
  /**
   * An array of objects that contain summary information about each workflow in the result set.
   *
   * @public
   */
  summaries?: FlowTemplateSummary[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that filters a system instance search. Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a STATUS filter searches for system instances in the specified Greengrass group that have the specified status.
 *
 * @public
 */
export interface SystemInstanceFilter {
  /**
   * The name of the search filter field.
   *
   * @public
   */
  name?: SystemInstanceFilterName | undefined;

  /**
   * An array of string values for the search filter field. Multiple values function as AND criteria in the search.
   *
   * @public
   */
  value?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchSystemInstancesRequest {
  /**
   * Optional filter to apply to the search. Valid filters are `SYSTEM_TEMPLATE_ID`, `STATUS`, and `GREENGRASS_GROUP_NAME`.
   *
   * Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.
   *
   * @public
   */
  filters?: SystemInstanceFilter[] | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchSystemInstancesResponse {
  /**
   * An array of objects that contain summary data abour the system instances in the result set.
   *
   * @public
   */
  summaries?: SystemInstanceSummary[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An object that filters a system search.
 *
 * @public
 */
export interface SystemTemplateFilter {
  /**
   * The name of the system search filter field.
   *
   * @public
   */
  name: SystemTemplateFilterName | undefined;

  /**
   * An array of string values for the search filter field. Multiple values function as AND criteria in the search.
   *
   * @public
   */
  value: string[] | undefined;
}

/**
 * @public
 */
export interface SearchSystemTemplatesRequest {
  /**
   * An array of filters that limit the result set. The only valid filter is `FLOW_TEMPLATE_ID`.
   *
   * @public
   */
  filters?: SystemTemplateFilter[] | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchSystemTemplatesResponse {
  /**
   * An array of objects that contain summary information about each system deployment in the result set.
   *
   * @public
   */
  summaries?: SystemTemplateSummary[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchThingsRequest {
  /**
   * The ID of the entity to which the things are associated.
   *
   * The IDs should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME`
   *
   * @public
   */
  entityId: string | undefined;

  /**
   * The string that specifies the next page of results. Use this when you're paginating results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The version of the user's namespace. Defaults to the latest version of the user's namespace.
   *
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * An AWS IoT thing.
 *
 * @public
 */
export interface Thing {
  /**
   * The ARN of the thing.
   *
   * @public
   */
  thingArn?: string | undefined;

  /**
   * The name of the thing.
   *
   * @public
   */
  thingName?: string | undefined;
}

/**
 * @public
 */
export interface SearchThingsResponse {
  /**
   * An array of things in the result set.
   *
   * @public
   */
  things?: Thing[] | undefined;

  /**
   * The string to specify as `nextToken` when you request the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags are returned.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tags to add to the resource.>
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UndeploySystemInstanceRequest {
  /**
   * The ID of the system instance to remove from its target.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface UndeploySystemInstanceResponse {
  /**
   * An object that contains summary information about the system instance that was removed from its target.
   *
   * @public
   */
  summary?: SystemInstanceSummary | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource whose tags are to be removed.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed.
   *
   * This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html#cli-using-param-json) in the *AWS CLI User Guide*.
   *
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
export interface UpdateFlowTemplateRequest {
  /**
   * The ID of the workflow to be updated.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The `DefinitionDocument` that contains the updated workflow definition.
   *
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * The version of the user's namespace.
   *
   * If no value is specified, the latest version is used by default. Use the `GetFlowTemplateRevisions` if you want to find earlier revisions of the flow to update.
   *
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFlowTemplateResponse {
  /**
   * An object containing summary information about the updated workflow.
   *
   * @public
   */
  summary?: FlowTemplateSummary | undefined;
}

/**
 * @public
 */
export interface UpdateSystemTemplateRequest {
  /**
   * The ID of the system to be updated.
   *
   * The ID should be in the following format.
   *
   * `urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME`
   *
   * @public
   */
  id: string | undefined;

  /**
   * The `DefinitionDocument` that contains the updated system definition.
   *
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * The version of the user's namespace. Defaults to the latest version of the user's namespace.
   *
   * If no value is specified, the latest version is used by default.
   *
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSystemTemplateResponse {
  /**
   * An object containing summary information about the updated system.
   *
   * @public
   */
  summary?: SystemTemplateSummary | undefined;
}

/**
 * @public
 */
export interface UploadEntityDefinitionsRequest {
  /**
   * The `DefinitionDocument` that defines the updated entities.
   *
   * @public
   */
  document?: DefinitionDocument | undefined;

  /**
   * A Boolean that specifies whether to synchronize with the latest version of the public namespace. If set to `true`, the upload will create a new namespace version.
   *
   * @public
   */
  syncWithPublicNamespace?: boolean | undefined;

  /**
   * A Boolean that specifies whether to deprecate all entities in the latest version before uploading the new `DefinitionDocument`. If set to `true`, the upload will create a new namespace version.
   *
   * @public
   */
  deprecateExistingEntities?: boolean | undefined;
}

/**
 * @public
 */
export interface UploadEntityDefinitionsResponse {
  /**
   * The ID that specifies the upload action. You can use this to track the status of the upload.
   *
   * @public
   */
  uploadId: string | undefined;
}
