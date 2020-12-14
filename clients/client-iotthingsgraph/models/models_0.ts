import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateEntityToThingRequest {
  /**
   * <p>The name of the thing to which the entity is to be associated.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ID of the device to be associated with the thing.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   */
  entityId: string | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;
}

export namespace AssociateEntityToThingRequest {
  export const filterSensitiveLog = (obj: AssociateEntityToThingRequest): any => ({
    ...obj,
  });
}

export interface AssociateEntityToThingResponse {}

export namespace AssociateEntityToThingResponse {
  export const filterSensitiveLog = (obj: AssociateEntityToThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export enum DefinitionLanguage {
  GRAPHQL = "GRAPHQL",
}

/**
 * <p>A document that defines an entity. </p>
 */
export interface DefinitionDocument {
  /**
   * <p>The language used to define the entity. <code>GRAPHQL</code> is the only valid value.</p>
   */
  language: DefinitionLanguage | string | undefined;

  /**
   * <p>The GraphQL text that defines the entity.</p>
   */
  text: string | undefined;
}

export namespace DefinitionDocument {
  export const filterSensitiveLog = (obj: DefinitionDocument): any => ({
    ...obj,
  });
}

export interface CreateFlowTemplateRequest {
  /**
   * <p>The workflow <code>DefinitionDocument</code>.</p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The namespace version in which the workflow is to be created.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;
}

export namespace CreateFlowTemplateRequest {
  export const filterSensitiveLog = (obj: CreateFlowTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains summary information about a workflow.</p>
 */
export interface FlowTemplateSummary {
  /**
   * <p>The ID of the workflow.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the workflow.</p>
   */
  arn?: string;

  /**
   * <p>The revision number of the workflow.</p>
   */
  revisionNumber?: number;

  /**
   * <p>The date when the workflow was created.</p>
   */
  createdAt?: Date;
}

export namespace FlowTemplateSummary {
  export const filterSensitiveLog = (obj: FlowTemplateSummary): any => ({
    ...obj,
  });
}

export interface CreateFlowTemplateResponse {
  /**
   * <p>The summary object that describes the created workflow.</p>
   */
  summary?: FlowTemplateSummary;
}

export namespace CreateFlowTemplateResponse {
  export const filterSensitiveLog = (obj: CreateFlowTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
 */
export interface MetricsConfiguration {
  /**
   * <p>A Boolean that specifies whether cloud metrics are collected.</p>
   */
  cloudMetricEnabled?: boolean;

  /**
   * <p>The ARN of the role that is used to collect cloud metrics.</p>
   */
  metricRuleRoleArn?: string;
}

export namespace MetricsConfiguration {
  export const filterSensitiveLog = (obj: MetricsConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>The required name of the tag. The string value can be from 1 to 128 Unicode characters in length.</p>
   */
  key: string | undefined;

  /**
   * <p>The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export enum DeploymentTarget {
  CLOUD = "CLOUD",
  GREENGRASS = "GREENGRASS",
}

export interface CreateSystemInstanceRequest {
  /**
   * <p>Metadata, consisting of key-value pairs, that can be used to categorize your system instances.</p>
   */
  tags?: Tag[];

  /**
   * <p>A document that defines an entity. </p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The target type of the deployment. Valid values are <code>GREENGRASS</code> and <code>CLOUD</code>.</p>
   */
  target: DeploymentTarget | string | undefined;

  /**
   * <p>The name of the Greengrass group where the system instance will be deployed. This value is required if
   *       the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   */
  greengrassGroupName?: string;

  /**
   * <p>The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if
   *          the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   */
  s3BucketName?: string;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: MetricsConfiguration;

  /**
   * <p>The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have
   *       read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes.  This
   *       value is required if the value of the <code>target</code> parameter is <code>CLOUD</code>.</p>
   */
  flowActionsRoleArn?: string;
}

export namespace CreateSystemInstanceRequest {
  export const filterSensitiveLog = (obj: CreateSystemInstanceRequest): any => ({
    ...obj,
  });
}

export enum SystemInstanceDeploymentStatus {
  BOOTSTRAP = "BOOTSTRAP",
  DELETED_IN_TARGET = "DELETED_IN_TARGET",
  DEPLOYED_IN_TARGET = "DEPLOYED_IN_TARGET",
  DEPLOY_IN_PROGRESS = "DEPLOY_IN_PROGRESS",
  FAILED = "FAILED",
  NOT_DEPLOYED = "NOT_DEPLOYED",
  PENDING_DELETE = "PENDING_DELETE",
  UNDEPLOY_IN_PROGRESS = "UNDEPLOY_IN_PROGRESS",
}

/**
 * <p>An object that contains summary information about a system instance.</p>
 */
export interface SystemInstanceSummary {
  /**
   * <p>The ID of the system instance.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the system instance.</p>
   */
  arn?: string;

  /**
   * <p>The status of the system instance.</p>
   */
  status?: SystemInstanceDeploymentStatus | string;

  /**
   * <p>The target of the system instance.</p>
   */
  target?: DeploymentTarget | string;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupName?: string;

  /**
   * <p>The date when the system instance was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>
   *
   *          The date and time when the system instance was last updated.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The version of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupVersionId?: string;
}

export namespace SystemInstanceSummary {
  export const filterSensitiveLog = (obj: SystemInstanceSummary): any => ({
    ...obj,
  });
}

export interface CreateSystemInstanceResponse {
  /**
   * <p>The summary object that describes the new system instance.</p>
   */
  summary?: SystemInstanceSummary;
}

export namespace CreateSystemInstanceResponse {
  export const filterSensitiveLog = (obj: CreateSystemInstanceResponse): any => ({
    ...obj,
  });
}

export interface CreateSystemTemplateRequest {
  /**
   * <p>The <code>DefinitionDocument</code> used to create the system.</p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The namespace version in which the system is to be created.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;
}

export namespace CreateSystemTemplateRequest {
  export const filterSensitiveLog = (obj: CreateSystemTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains information about a system.</p>
 */
export interface SystemTemplateSummary {
  /**
   * <p>The ID of the system.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the system.</p>
   */
  arn?: string;

  /**
   * <p>The revision number of the system.</p>
   */
  revisionNumber?: number;

  /**
   * <p>The date when the system was created.</p>
   */
  createdAt?: Date;
}

export namespace SystemTemplateSummary {
  export const filterSensitiveLog = (obj: SystemTemplateSummary): any => ({
    ...obj,
  });
}

export interface CreateSystemTemplateResponse {
  /**
   * <p>The summary object that describes the created system.</p>
   */
  summary?: SystemTemplateSummary;
}

export namespace CreateSystemTemplateResponse {
  export const filterSensitiveLog = (obj: CreateSystemTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeleteFlowTemplateRequest {
  /**
   * <p>The ID of the workflow to be deleted.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace DeleteFlowTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteFlowTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteFlowTemplateResponse {}

export namespace DeleteFlowTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteFlowTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceRequest {}

export namespace DeleteNamespaceRequest {
  export const filterSensitiveLog = (obj: DeleteNamespaceRequest): any => ({
    ...obj,
  });
}

export interface DeleteNamespaceResponse {
  /**
   * <p>The ARN of the namespace to be deleted.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace to be deleted.</p>
   */
  namespaceName?: string;
}

export namespace DeleteNamespaceResponse {
  export const filterSensitiveLog = (obj: DeleteNamespaceResponse): any => ({
    ...obj,
  });
}

export interface DeleteSystemInstanceRequest {
  /**
   * <p>The ID of the system instance to be deleted.</p>
   */
  id?: string;
}

export namespace DeleteSystemInstanceRequest {
  export const filterSensitiveLog = (obj: DeleteSystemInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeleteSystemInstanceResponse {}

export namespace DeleteSystemInstanceResponse {
  export const filterSensitiveLog = (obj: DeleteSystemInstanceResponse): any => ({
    ...obj,
  });
}

export interface DeleteSystemTemplateRequest {
  /**
   * <p>The ID of the system to be deleted.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace DeleteSystemTemplateRequest {
  export const filterSensitiveLog = (obj: DeleteSystemTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteSystemTemplateResponse {}

export namespace DeleteSystemTemplateResponse {
  export const filterSensitiveLog = (obj: DeleteSystemTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the ID and revision number of a workflow or system that is part of a deployment.</p>
 */
export interface DependencyRevision {
  /**
   * <p>The ID of the workflow or system.</p>
   */
  id?: string;

  /**
   * <p>The revision number of the workflow or system.</p>
   */
  revisionNumber?: number;
}

export namespace DependencyRevision {
  export const filterSensitiveLog = (obj: DependencyRevision): any => ({
    ...obj,
  });
}

export interface DeploySystemInstanceRequest {
  /**
   * <p>The ID of the system instance. This value is returned by the <code>CreateSystemInstance</code> action.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME</code>
   *          </p>
   */
  id?: string;
}

export namespace DeploySystemInstanceRequest {
  export const filterSensitiveLog = (obj: DeploySystemInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeploySystemInstanceResponse {
  /**
   * <p>An object that contains summary information about a system instance that was deployed. </p>
   */
  summary: SystemInstanceSummary | undefined;

  /**
   * <p>The ID of the Greengrass deployment used to deploy the system instance.</p>
   */
  greengrassDeploymentId?: string;
}

export namespace DeploySystemInstanceResponse {
  export const filterSensitiveLog = (obj: DeploySystemInstanceResponse): any => ({
    ...obj,
  });
}

export interface DeprecateFlowTemplateRequest {
  /**
   * <p>The ID of the workflow to be deleted.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace DeprecateFlowTemplateRequest {
  export const filterSensitiveLog = (obj: DeprecateFlowTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeprecateFlowTemplateResponse {}

export namespace DeprecateFlowTemplateResponse {
  export const filterSensitiveLog = (obj: DeprecateFlowTemplateResponse): any => ({
    ...obj,
  });
}

export interface DeprecateSystemTemplateRequest {
  /**
   * <p>The ID of the system to delete.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace DeprecateSystemTemplateRequest {
  export const filterSensitiveLog = (obj: DeprecateSystemTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeprecateSystemTemplateResponse {}

export namespace DeprecateSystemTemplateResponse {
  export const filterSensitiveLog = (obj: DeprecateSystemTemplateResponse): any => ({
    ...obj,
  });
}

export interface DescribeNamespaceRequest {
  /**
   * <p>The name of the user's namespace. Set this to <code>aws</code> to get the public namespace.</p>
   */
  namespaceName?: string;
}

export namespace DescribeNamespaceRequest {
  export const filterSensitiveLog = (obj: DescribeNamespaceRequest): any => ({
    ...obj,
  });
}

export interface DescribeNamespaceResponse {
  /**
   * <p>The ARN of the namespace.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace.</p>
   */
  namespaceName?: string;

  /**
   * <p>The name of the public namespace that the latest namespace version is tracking.</p>
   */
  trackingNamespaceName?: string;

  /**
   * <p>The version of the public namespace that the latest version is tracking.</p>
   */
  trackingNamespaceVersion?: number;

  /**
   * <p>The version of the user's namespace to describe.</p>
   */
  namespaceVersion?: number;
}

export namespace DescribeNamespaceResponse {
  export const filterSensitiveLog = (obj: DescribeNamespaceResponse): any => ({
    ...obj,
  });
}

export enum EntityType {
  ACTION = "ACTION",
  CAPABILITY = "CAPABILITY",
  DEVICE = "DEVICE",
  DEVICE_MODEL = "DEVICE_MODEL",
  ENUM = "ENUM",
  EVENT = "EVENT",
  MAPPING = "MAPPING",
  PROPERTY = "PROPERTY",
  SERVICE = "SERVICE",
  STATE = "STATE",
}

export interface DissociateEntityFromThingRequest {
  /**
   * <p>The name of the thing to disassociate.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The entity type from which to disassociate the thing.</p>
   */
  entityType: EntityType | string | undefined;
}

export namespace DissociateEntityFromThingRequest {
  export const filterSensitiveLog = (obj: DissociateEntityFromThingRequest): any => ({
    ...obj,
  });
}

export interface DissociateEntityFromThingResponse {}

export namespace DissociateEntityFromThingResponse {
  export const filterSensitiveLog = (obj: DissociateEntityFromThingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the properties of an entity.</p>
 */
export interface EntityDescription {
  /**
   * <p>The entity ID.</p>
   */
  id?: string;

  /**
   * <p>The entity ARN.</p>
   */
  arn?: string;

  /**
   * <p>The entity type.</p>
   */
  type?: EntityType | string;

  /**
   * <p>The time at which the entity was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The definition document of the entity.</p>
   */
  definition?: DefinitionDocument;
}

export namespace EntityDescription {
  export const filterSensitiveLog = (obj: EntityDescription): any => ({
    ...obj,
  });
}

export enum EntityFilterName {
  NAME = "NAME",
  NAMESPACE = "NAMESPACE",
  REFERENCED_ENTITY_ID = "REFERENCED_ENTITY_ID",
  SEMANTIC_TYPE_PATH = "SEMANTIC_TYPE_PATH",
}

/**
 * <p>An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes
 *       a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by
 *       the value of <code>REFERENCED_ENTITY_ID</code>.</p>
 */
export interface EntityFilter {
  /**
   * <p>The name of the entity search filter field. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example,
   *          you can filter on the ID of a property that is used in a state.</p>
   */
  name?: EntityFilterName | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value?: string[];
}

export namespace EntityFilter {
  export const filterSensitiveLog = (obj: EntityFilter): any => ({
    ...obj,
  });
}

export enum FlowExecutionEventType {
  ACKNOWLEDGE_TASK_MESSAGE = "ACKNOWLEDGE_TASK_MESSAGE",
  ACTIVITY_FAILED = "ACTIVITY_FAILED",
  ACTIVITY_SCHEDULED = "ACTIVITY_SCHEDULED",
  ACTIVITY_STARTED = "ACTIVITY_STARTED",
  ACTIVITY_SUCCEEDED = "ACTIVITY_SUCCEEDED",
  EXECUTION_ABORTED = "EXECUTION_ABORTED",
  EXECUTION_FAILED = "EXECUTION_FAILED",
  EXECUTION_STARTED = "EXECUTION_STARTED",
  EXECUTION_SUCCEEDED = "EXECUTION_SUCCEEDED",
  SCHEDULE_NEXT_READY_STEPS_TASK = "SCHEDULE_NEXT_READY_STEPS_TASK",
  START_FLOW_EXECUTION_TASK = "START_FLOW_EXECUTION_TASK",
  STEP_FAILED = "STEP_FAILED",
  STEP_STARTED = "STEP_STARTED",
  STEP_SUCCEEDED = "STEP_SUCCEEDED",
  THING_ACTION_TASK = "THING_ACTION_TASK",
  THING_ACTION_TASK_FAILED = "THING_ACTION_TASK_FAILED",
  THING_ACTION_TASK_SUCCEEDED = "THING_ACTION_TASK_SUCCEEDED",
}

/**
 * <p>An object that contains information about a flow event.</p>
 */
export interface FlowExecutionMessage {
  /**
   * <p>The unique identifier of the message.</p>
   */
  messageId?: string;

  /**
   * <p>The type of flow event .</p>
   */
  eventType?: FlowExecutionEventType | string;

  /**
   * <p>The date and time when the message was last updated.</p>
   */
  timestamp?: Date;

  /**
   * <p>A string containing information about the flow event.</p>
   */
  payload?: string;
}

export namespace FlowExecutionMessage {
  export const filterSensitiveLog = (obj: FlowExecutionMessage): any => ({
    ...obj,
  });
}

export enum FlowExecutionStatus {
  ABORTED = "ABORTED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>An object that contains summary information about a flow execution.</p>
 */
export interface FlowExecutionSummary {
  /**
   * <p>The ID of the flow execution.</p>
   */
  flowExecutionId?: string;

  /**
   * <p>The current status of the flow execution.</p>
   */
  status?: FlowExecutionStatus | string;

  /**
   * <p>The ID of the system instance that contains the flow.</p>
   */
  systemInstanceId?: string;

  /**
   * <p>The ID of the flow.</p>
   */
  flowTemplateId?: string;

  /**
   * <p>The date and time when the flow execution summary was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The date and time when the flow execution summary was last updated.</p>
   */
  updatedAt?: Date;
}

export namespace FlowExecutionSummary {
  export const filterSensitiveLog = (obj: FlowExecutionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains a workflow's definition and summary information.</p>
 */
export interface FlowTemplateDescription {
  /**
   * <p>An object that contains summary information about a workflow.</p>
   */
  summary?: FlowTemplateSummary;

  /**
   * <p>A workflow's definition document.</p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>The version of the user's namespace against which the workflow was validated. Use this value in your system instance.</p>
   */
  validatedNamespaceVersion?: number;
}

export namespace FlowTemplateDescription {
  export const filterSensitiveLog = (obj: FlowTemplateDescription): any => ({
    ...obj,
  });
}

export enum FlowTemplateFilterName {
  DEVICE_MODEL_ID = "DEVICE_MODEL_ID",
}

/**
 * <p>An object that filters a workflow search.</p>
 */
export interface FlowTemplateFilter {
  /**
   * <p>The name of the search filter field.</p>
   */
  name: FlowTemplateFilterName | string | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: string[] | undefined;
}

export namespace FlowTemplateFilter {
  export const filterSensitiveLog = (obj: FlowTemplateFilter): any => ({
    ...obj,
  });
}

export interface GetEntitiesRequest {
  /**
   * <p>An array of entity IDs.</p>
   *          <p>The IDs should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   */
  ids: string[] | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;
}

export namespace GetEntitiesRequest {
  export const filterSensitiveLog = (obj: GetEntitiesRequest): any => ({
    ...obj,
  });
}

export interface GetEntitiesResponse {
  /**
   * <p>An array of descriptions for the specified entities.</p>
   */
  descriptions?: EntityDescription[];
}

export namespace GetEntitiesResponse {
  export const filterSensitiveLog = (obj: GetEntitiesResponse): any => ({
    ...obj,
  });
}

export interface GetFlowTemplateRequest {
  /**
   * <p>The ID of the workflow.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The number of the workflow revision to retrieve.</p>
   */
  revisionNumber?: number;
}

export namespace GetFlowTemplateRequest {
  export const filterSensitiveLog = (obj: GetFlowTemplateRequest): any => ({
    ...obj,
  });
}

export interface GetFlowTemplateResponse {
  /**
   * <p>The object that describes the specified workflow.</p>
   */
  description?: FlowTemplateDescription;
}

export namespace GetFlowTemplateResponse {
  export const filterSensitiveLog = (obj: GetFlowTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetFlowTemplateRevisionsRequest {
  /**
   * <p>The ID of the workflow.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace GetFlowTemplateRevisionsRequest {
  export const filterSensitiveLog = (obj: GetFlowTemplateRevisionsRequest): any => ({
    ...obj,
  });
}

export interface GetFlowTemplateRevisionsResponse {
  /**
   * <p>An array of objects that provide summary data about each revision.</p>
   */
  summaries?: FlowTemplateSummary[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace GetFlowTemplateRevisionsResponse {
  export const filterSensitiveLog = (obj: GetFlowTemplateRevisionsResponse): any => ({
    ...obj,
  });
}

export interface GetNamespaceDeletionStatusRequest {}

export namespace GetNamespaceDeletionStatusRequest {
  export const filterSensitiveLog = (obj: GetNamespaceDeletionStatusRequest): any => ({
    ...obj,
  });
}

export enum NamespaceDeletionStatusErrorCodes {
  VALIDATION_FAILED = "VALIDATION_FAILED",
}

export enum NamespaceDeletionStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

export interface GetNamespaceDeletionStatusResponse {
  /**
   * <p>The ARN of the namespace that is being deleted.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace that is being deleted.</p>
   */
  namespaceName?: string;

  /**
   * <p>The status of the deletion request.</p>
   */
  status?: NamespaceDeletionStatus | string;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   */
  errorCode?: NamespaceDeletionStatusErrorCodes | string;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   */
  errorMessage?: string;
}

export namespace GetNamespaceDeletionStatusResponse {
  export const filterSensitiveLog = (obj: GetNamespaceDeletionStatusResponse): any => ({
    ...obj,
  });
}

export interface GetSystemInstanceRequest {
  /**
   * <p>The ID of the system deployment instance. This value is returned by <code>CreateSystemInstance</code>.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace GetSystemInstanceRequest {
  export const filterSensitiveLog = (obj: GetSystemInstanceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains a system instance definition and summary information.</p>
 */
export interface SystemInstanceDescription {
  /**
   * <p>An object that contains summary information about a system instance.</p>
   */
  summary?: SystemInstanceSummary;

  /**
   * <p>A document that defines an entity. </p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>The Amazon Simple Storage Service bucket where information about a system instance is stored.</p>
   */
  s3BucketName?: string;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: MetricsConfiguration;

  /**
   * <p>The version of the user's namespace against which the system instance was validated.</p>
   */
  validatedNamespaceVersion?: number;

  /**
   * <p>A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.</p>
   */
  validatedDependencyRevisions?: DependencyRevision[];

  /**
   * <p>The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a
   *       cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other
   *       AWS services that the flow uses.</p>
   */
  flowActionsRoleArn?: string;
}

export namespace SystemInstanceDescription {
  export const filterSensitiveLog = (obj: SystemInstanceDescription): any => ({
    ...obj,
  });
}

export interface GetSystemInstanceResponse {
  /**
   * <p>An object that describes the system instance.</p>
   */
  description?: SystemInstanceDescription;
}

export namespace GetSystemInstanceResponse {
  export const filterSensitiveLog = (obj: GetSystemInstanceResponse): any => ({
    ...obj,
  });
}

export interface GetSystemTemplateRequest {
  /**
   * <p>The ID of the system to get. This ID must be in the user's namespace.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The number that specifies the revision of the system to get.</p>
   */
  revisionNumber?: number;
}

export namespace GetSystemTemplateRequest {
  export const filterSensitiveLog = (obj: GetSystemTemplateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains a system's definition document and summary information.</p>
 */
export interface SystemTemplateDescription {
  /**
   * <p>An object that contains summary information about a system.</p>
   */
  summary?: SystemTemplateSummary;

  /**
   * <p>The definition document of a system.</p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>The namespace version against which the system was validated. Use this value in your system instance.</p>
   */
  validatedNamespaceVersion?: number;
}

export namespace SystemTemplateDescription {
  export const filterSensitiveLog = (obj: SystemTemplateDescription): any => ({
    ...obj,
  });
}

export interface GetSystemTemplateResponse {
  /**
   * <p>An object that contains summary data about the system.</p>
   */
  description?: SystemTemplateDescription;
}

export namespace GetSystemTemplateResponse {
  export const filterSensitiveLog = (obj: GetSystemTemplateResponse): any => ({
    ...obj,
  });
}

export interface GetSystemTemplateRevisionsRequest {
  /**
   * <p>The ID of the system template.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace GetSystemTemplateRevisionsRequest {
  export const filterSensitiveLog = (obj: GetSystemTemplateRevisionsRequest): any => ({
    ...obj,
  });
}

export interface GetSystemTemplateRevisionsResponse {
  /**
   * <p>An array of objects that contain summary data about the system template revisions.</p>
   */
  summaries?: SystemTemplateSummary[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;
}

export namespace GetSystemTemplateRevisionsResponse {
  export const filterSensitiveLog = (obj: GetSystemTemplateRevisionsResponse): any => ({
    ...obj,
  });
}

export interface GetUploadStatusRequest {
  /**
   * <p>The ID of the upload. This value is returned by the <code>UploadEntityDefinitions</code> action.</p>
   */
  uploadId: string | undefined;
}

export namespace GetUploadStatusRequest {
  export const filterSensitiveLog = (obj: GetUploadStatusRequest): any => ({
    ...obj,
  });
}

export enum UploadStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

export interface GetUploadStatusResponse {
  /**
   * <p>The ID of the upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The status of the upload. The initial status is <code>IN_PROGRESS</code>. The response show all validation failures if the upload fails.</p>
   */
  uploadStatus: UploadStatus | string | undefined;

  /**
   * <p>The ARN of the upload.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the upload's namespace.</p>
   */
  namespaceName?: string;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;

  /**
   * <p>The reason for an upload failure.</p>
   */
  failureReason?: string[];

  /**
   * <p>The date at which the upload was created.</p>
   */
  createdDate: Date | undefined;
}

export namespace GetUploadStatusResponse {
  export const filterSensitiveLog = (obj: GetUploadStatusResponse): any => ({
    ...obj,
  });
}

export interface ListFlowExecutionMessagesRequest {
  /**
   * <p>The ID of the flow execution.</p>
   */
  flowExecutionId: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace ListFlowExecutionMessagesRequest {
  export const filterSensitiveLog = (obj: ListFlowExecutionMessagesRequest): any => ({
    ...obj,
  });
}

export interface ListFlowExecutionMessagesResponse {
  /**
   * <p>A list of objects that contain information about events in the specified flow execution.</p>
   */
  messages?: FlowExecutionMessage[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;
}

export namespace ListFlowExecutionMessagesResponse {
  export const filterSensitiveLog = (obj: ListFlowExecutionMessagesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The maximum number of tags to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are to be returned.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The token that specifies the next page of results to return.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>List of tags returned by the <code>ListTagsForResource</code> operation.</p>
   */
  tags?: Tag[];

  /**
   * <p>The token that specifies the next page of results to return.</p>
   */
  nextToken?: string;
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface SearchEntitiesRequest {
  /**
   * <p>The entity types for which to search.</p>
   */
  entityTypes: (EntityType | string)[] | undefined;

  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>NAME</code>
   *             <code>NAMESPACE</code>, <code>SEMANTIC_TYPE_PATH</code> and <code>REFERENCED_ENTITY_ID</code>.
   *          <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example,
   *       you can filter on the ID of a property that is used in a state.</p>
   *          <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   */
  filters?: EntityFilter[];

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;
}

export namespace SearchEntitiesRequest {
  export const filterSensitiveLog = (obj: SearchEntitiesRequest): any => ({
    ...obj,
  });
}

export interface SearchEntitiesResponse {
  /**
   * <p>An array of descriptions for each entity returned in the search result.</p>
   */
  descriptions?: EntityDescription[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace SearchEntitiesResponse {
  export const filterSensitiveLog = (obj: SearchEntitiesResponse): any => ({
    ...obj,
  });
}

export interface SearchFlowExecutionsRequest {
  /**
   * <p>The ID of the system instance that contains the flow.</p>
   */
  systemInstanceId: string | undefined;

  /**
   * <p>The ID of a flow execution.</p>
   */
  flowExecutionId?: string;

  /**
   * <p>The date and time of the earliest flow execution to return.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time of the latest flow execution to return.</p>
   */
  endTime?: Date;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace SearchFlowExecutionsRequest {
  export const filterSensitiveLog = (obj: SearchFlowExecutionsRequest): any => ({
    ...obj,
  });
}

export interface SearchFlowExecutionsResponse {
  /**
   * <p>An array of objects that contain summary information about each workflow execution in the result set.</p>
   */
  summaries?: FlowExecutionSummary[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace SearchFlowExecutionsResponse {
  export const filterSensitiveLog = (obj: SearchFlowExecutionsResponse): any => ({
    ...obj,
  });
}

export interface SearchFlowTemplatesRequest {
  /**
   * <p>An array of objects that limit the result set. The only valid filter is <code>DEVICE_MODEL_ID</code>.</p>
   */
  filters?: FlowTemplateFilter[];

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace SearchFlowTemplatesRequest {
  export const filterSensitiveLog = (obj: SearchFlowTemplatesRequest): any => ({
    ...obj,
  });
}

export interface SearchFlowTemplatesResponse {
  /**
   * <p>An array of objects that contain summary information about each workflow in the result set.</p>
   */
  summaries?: FlowTemplateSummary[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace SearchFlowTemplatesResponse {
  export const filterSensitiveLog = (obj: SearchFlowTemplatesResponse): any => ({
    ...obj,
  });
}

export enum SystemInstanceFilterName {
  GREENGRASS_GROUP_NAME = "GREENGRASS_GROUP_NAME",
  STATUS = "STATUS",
  SYSTEM_TEMPLATE_ID = "SYSTEM_TEMPLATE_ID",
}

/**
 * <p>An object that filters a system instance search.
 *          Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a
 *          STATUS filter searches for system instances in the specified Greengrass group that have the specified status.</p>
 */
export interface SystemInstanceFilter {
  /**
   * <p>The name of the search filter field.</p>
   */
  name?: SystemInstanceFilterName | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search. </p>
   */
  value?: string[];
}

export namespace SystemInstanceFilter {
  export const filterSensitiveLog = (obj: SystemInstanceFilter): any => ({
    ...obj,
  });
}

export interface SearchSystemInstancesRequest {
  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>SYSTEM_TEMPLATE_ID</code>, <code>STATUS</code>, and
   *          <code>GREENGRASS_GROUP_NAME</code>.</p>
   *          <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   */
  filters?: SystemInstanceFilter[];

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace SearchSystemInstancesRequest {
  export const filterSensitiveLog = (obj: SearchSystemInstancesRequest): any => ({
    ...obj,
  });
}

export interface SearchSystemInstancesResponse {
  /**
   * <p>An array of objects that contain summary data abour the system instances in the result set.</p>
   */
  summaries?: SystemInstanceSummary[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;
}

export namespace SearchSystemInstancesResponse {
  export const filterSensitiveLog = (obj: SearchSystemInstancesResponse): any => ({
    ...obj,
  });
}

export enum SystemTemplateFilterName {
  FLOW_TEMPLATE_ID = "FLOW_TEMPLATE_ID",
}

/**
 * <p>An object that filters a system search.</p>
 */
export interface SystemTemplateFilter {
  /**
   * <p>The name of the system search filter field.</p>
   */
  name: SystemTemplateFilterName | string | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: string[] | undefined;
}

export namespace SystemTemplateFilter {
  export const filterSensitiveLog = (obj: SystemTemplateFilter): any => ({
    ...obj,
  });
}

export interface SearchSystemTemplatesRequest {
  /**
   * <p>An array of filters that limit the result set. The only valid filter is <code>FLOW_TEMPLATE_ID</code>.</p>
   */
  filters?: SystemTemplateFilter[];

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

export namespace SearchSystemTemplatesRequest {
  export const filterSensitiveLog = (obj: SearchSystemTemplatesRequest): any => ({
    ...obj,
  });
}

export interface SearchSystemTemplatesResponse {
  /**
   * <p>An array of objects that contain summary information about each system deployment in the result set.</p>
   */
  summaries?: SystemTemplateSummary[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace SearchSystemTemplatesResponse {
  export const filterSensitiveLog = (obj: SearchSystemTemplatesResponse): any => ({
    ...obj,
  });
}

export interface SearchThingsRequest {
  /**
   * <p>The ID of the entity to which the things are associated.</p>
   *          <p>The IDs should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   */
  entityId: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;
}

export namespace SearchThingsRequest {
  export const filterSensitiveLog = (obj: SearchThingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS IoT thing.</p>
 */
export interface Thing {
  /**
   * <p>The ARN of the thing.</p>
   */
  thingArn?: string;

  /**
   * <p>The name of the thing.</p>
   */
  thingName?: string;
}

export namespace Thing {
  export const filterSensitiveLog = (obj: Thing): any => ({
    ...obj,
  });
}

export interface SearchThingsResponse {
  /**
   * <p>An array of things in the result set.</p>
   */
  things?: Thing[];

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace SearchThingsResponse {
  export const filterSensitiveLog = (obj: SearchThingsResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are returned.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the resource.></p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UndeploySystemInstanceRequest {
  /**
   * <p>The ID of the system instance to remove from its target.</p>
   */
  id?: string;
}

export namespace UndeploySystemInstanceRequest {
  export const filterSensitiveLog = (obj: UndeploySystemInstanceRequest): any => ({
    ...obj,
  });
}

export interface UndeploySystemInstanceResponse {
  /**
   * <p>An object that contains summary information about the system instance that was removed from its target.</p>
   */
  summary?: SystemInstanceSummary;
}

export namespace UndeploySystemInstanceResponse {
  export const filterSensitiveLog = (obj: UndeploySystemInstanceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed. </p>
   *          <p>This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>. </p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateFlowTemplateRequest {
  /**
   * <p>The ID of the workflow to be updated.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated workflow definition.</p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The version of the user's namespace.</p>
   *          <p>If no value is specified, the latest version is used by default. Use the <code>GetFlowTemplateRevisions</code> if you want to find earlier revisions of the flow
   *       to update.</p>
   */
  compatibleNamespaceVersion?: number;
}

export namespace UpdateFlowTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateFlowTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateFlowTemplateResponse {
  /**
   * <p>An object containing summary information about the updated workflow.</p>
   */
  summary?: FlowTemplateSummary;
}

export namespace UpdateFlowTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateFlowTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateSystemTemplateRequest {
  /**
   * <p>The ID of the system to be updated.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated system definition.</p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;
}

export namespace UpdateSystemTemplateRequest {
  export const filterSensitiveLog = (obj: UpdateSystemTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateSystemTemplateResponse {
  /**
   * <p>An object containing summary information about the updated system.</p>
   */
  summary?: SystemTemplateSummary;
}

export namespace UpdateSystemTemplateResponse {
  export const filterSensitiveLog = (obj: UpdateSystemTemplateResponse): any => ({
    ...obj,
  });
}

export interface UploadEntityDefinitionsRequest {
  /**
   * <p>The <code>DefinitionDocument</code> that defines the updated entities.</p>
   */
  document?: DefinitionDocument;

  /**
   * <p>A Boolean that specifies whether to synchronize with the latest version of the public namespace. If set to <code>true</code>, the upload will create a new namespace version.</p>
   */
  syncWithPublicNamespace?: boolean;

  /**
   * <p>A Boolean that specifies whether to deprecate all entities in the latest version before uploading the new <code>DefinitionDocument</code>.
   *          If set to <code>true</code>, the upload will create a new namespace version.</p>
   */
  deprecateExistingEntities?: boolean;
}

export namespace UploadEntityDefinitionsRequest {
  export const filterSensitiveLog = (obj: UploadEntityDefinitionsRequest): any => ({
    ...obj,
  });
}

export interface UploadEntityDefinitionsResponse {
  /**
   * <p>The ID that specifies the upload action. You can use this to track the status of the upload.</p>
   */
  uploadId: string | undefined;
}

export namespace UploadEntityDefinitionsResponse {
  export const filterSensitiveLog = (obj: UploadEntityDefinitionsResponse): any => ({
    ...obj,
  });
}
