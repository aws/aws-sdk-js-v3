// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTThingsGraphServiceException as __BaseException } from "./IoTThingsGraphServiceException";

/**
 * @public
 */
export interface AssociateEntityToThingRequest {
  /**
   * <p>The name of the thing to which the entity is to be associated.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The ID of the device to be associated with the thing.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface AssociateEntityToThingResponse {}

/**
 * <p></p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p></p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * @enum
 */
export const DefinitionLanguage = {
  GRAPHQL: "GRAPHQL",
} as const;

/**
 * @public
 */
export type DefinitionLanguage = (typeof DefinitionLanguage)[keyof typeof DefinitionLanguage];

/**
 * <p>A document that defines an entity. </p>
 * @public
 */
export interface DefinitionDocument {
  /**
   * <p>The language used to define the entity. <code>GRAPHQL</code> is the only valid value.</p>
   * @public
   */
  language: DefinitionLanguage | undefined;

  /**
   * <p>The GraphQL text that defines the entity.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * @public
 */
export interface CreateFlowTemplateRequest {
  /**
   * <p>The workflow <code>DefinitionDocument</code>.</p>
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The namespace version in which the workflow is to be created.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * <p>An object that contains summary information about a workflow.</p>
 * @public
 */
export interface FlowTemplateSummary {
  /**
   * <p>The ID of the workflow.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the workflow.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The revision number of the workflow.</p>
   * @public
   */
  revisionNumber?: number | undefined;

  /**
   * <p>The date when the workflow was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateFlowTemplateResponse {
  /**
   * <p>The summary object that describes the created workflow.</p>
   * @public
   */
  summary?: FlowTemplateSummary | undefined;
}

/**
 * <p></p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
 * @public
 */
export interface MetricsConfiguration {
  /**
   * <p>A Boolean that specifies whether cloud metrics are collected.</p>
   * @public
   */
  cloudMetricEnabled?: boolean | undefined;

  /**
   * <p>The ARN of the role that is used to collect cloud metrics.</p>
   * @public
   */
  metricRuleRoleArn?: string | undefined;
}

/**
 * <p>Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The required name of the tag. The string value can be from 1 to 128 Unicode characters in length.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The optional value of the tag. The string value can be from 1 to 256 Unicode characters in length.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentTarget = {
  CLOUD: "CLOUD",
  GREENGRASS: "GREENGRASS",
} as const;

/**
 * @public
 */
export type DeploymentTarget = (typeof DeploymentTarget)[keyof typeof DeploymentTarget];

/**
 * @public
 */
export interface CreateSystemInstanceRequest {
  /**
   * <p>Metadata, consisting of key-value pairs, that can be used to categorize your system instances.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A document that defines an entity. </p>
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The target type of the deployment. Valid values are <code>GREENGRASS</code> and <code>CLOUD</code>.</p>
   * @public
   */
  target: DeploymentTarget | undefined;

  /**
   * <p>The name of the Greengrass group where the system instance will be deployed. This value is required if
   *       the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   * @public
   */
  greengrassGroupName?: string | undefined;

  /**
   * <p>The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if
   *          the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   * @public
   */
  metricsConfiguration?: MetricsConfiguration | undefined;

  /**
   * <p>The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have
   *       read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes.  This
   *       value is required if the value of the <code>target</code> parameter is <code>CLOUD</code>.</p>
   * @public
   */
  flowActionsRoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SystemInstanceDeploymentStatus = {
  BOOTSTRAP: "BOOTSTRAP",
  DELETED_IN_TARGET: "DELETED_IN_TARGET",
  DEPLOYED_IN_TARGET: "DEPLOYED_IN_TARGET",
  DEPLOY_IN_PROGRESS: "DEPLOY_IN_PROGRESS",
  FAILED: "FAILED",
  NOT_DEPLOYED: "NOT_DEPLOYED",
  PENDING_DELETE: "PENDING_DELETE",
  UNDEPLOY_IN_PROGRESS: "UNDEPLOY_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type SystemInstanceDeploymentStatus =
  (typeof SystemInstanceDeploymentStatus)[keyof typeof SystemInstanceDeploymentStatus];

/**
 * <p>An object that contains summary information about a system instance.</p>
 * @public
 */
export interface SystemInstanceSummary {
  /**
   * <p>The ID of the system instance.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the system instance.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the system instance.</p>
   * @public
   */
  status?: SystemInstanceDeploymentStatus | undefined;

  /**
   * <p>The target of the system instance.</p>
   * @public
   */
  target?: DeploymentTarget | undefined;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   * @public
   */
  greengrassGroupName?: string | undefined;

  /**
   * <p>The date when the system instance was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>
   *
   *          The date and time when the system instance was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   * @public
   */
  greengrassGroupId?: string | undefined;

  /**
   * <p>The version of the Greengrass group where the system instance is deployed.</p>
   * @public
   */
  greengrassGroupVersionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSystemInstanceResponse {
  /**
   * <p>The summary object that describes the new system instance.</p>
   * @public
   */
  summary?: SystemInstanceSummary | undefined;
}

/**
 * @public
 */
export interface CreateSystemTemplateRequest {
  /**
   * <p>The <code>DefinitionDocument</code> used to create the system.</p>
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The namespace version in which the system is to be created.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * <p>An object that contains information about a system.</p>
 * @public
 */
export interface SystemTemplateSummary {
  /**
   * <p>The ID of the system.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the system.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The revision number of the system.</p>
   * @public
   */
  revisionNumber?: number | undefined;

  /**
   * <p>The date when the system was created.</p>
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface CreateSystemTemplateResponse {
  /**
   * <p>The summary object that describes the created system.</p>
   * @public
   */
  summary?: SystemTemplateSummary | undefined;
}

/**
 * @public
 */
export interface DeleteFlowTemplateRequest {
  /**
   * <p>The ID of the workflow to be deleted.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFlowTemplateResponse {}

/**
 * <p></p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * <p>The ARN of the namespace to be deleted.</p>
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * <p>The name of the namespace to be deleted.</p>
   * @public
   */
  namespaceName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSystemInstanceRequest {
  /**
   * <p>The ID of the system instance to be deleted.</p>
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
   * <p>The ID of the system to be deleted.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteSystemTemplateResponse {}

/**
 * <p>An object that contains the ID and revision number of a workflow or system that is part of a deployment.</p>
 * @public
 */
export interface DependencyRevision {
  /**
   * <p>The ID of the workflow or system.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The revision number of the workflow or system.</p>
   * @public
   */
  revisionNumber?: number | undefined;
}

/**
 * @public
 */
export interface DeploySystemInstanceRequest {
  /**
   * <p>The ID of the system instance. This value is returned by the <code>CreateSystemInstance</code> action.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME</code>
   *          </p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface DeploySystemInstanceResponse {
  /**
   * <p>An object that contains summary information about a system instance that was deployed. </p>
   * @public
   */
  summary: SystemInstanceSummary | undefined;

  /**
   * <p>The ID of the Greengrass deployment used to deploy the system instance.</p>
   * @public
   */
  greengrassDeploymentId?: string | undefined;
}

/**
 * @public
 */
export interface DeprecateFlowTemplateRequest {
  /**
   * <p>The ID of the workflow to be deleted.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
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
   * <p>The ID of the system to delete.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
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
   * <p>The name of the user's namespace. Set this to <code>aws</code> to get the public namespace.</p>
   * @public
   */
  namespaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNamespaceResponse {
  /**
   * <p>The ARN of the namespace.</p>
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * <p>The name of the namespace.</p>
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * <p>The name of the public namespace that the latest namespace version is tracking.</p>
   * @public
   */
  trackingNamespaceName?: string | undefined;

  /**
   * <p>The version of the public namespace that the latest version is tracking.</p>
   * @public
   */
  trackingNamespaceVersion?: number | undefined;

  /**
   * <p>The version of the user's namespace to describe.</p>
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  ACTION: "ACTION",
  CAPABILITY: "CAPABILITY",
  DEVICE: "DEVICE",
  DEVICE_MODEL: "DEVICE_MODEL",
  ENUM: "ENUM",
  EVENT: "EVENT",
  MAPPING: "MAPPING",
  PROPERTY: "PROPERTY",
  SERVICE: "SERVICE",
  STATE: "STATE",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 */
export interface DissociateEntityFromThingRequest {
  /**
   * <p>The name of the thing to disassociate.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The entity type from which to disassociate the thing.</p>
   * @public
   */
  entityType: EntityType | undefined;
}

/**
 * @public
 */
export interface DissociateEntityFromThingResponse {}

/**
 * <p>Describes the properties of an entity.</p>
 * @public
 */
export interface EntityDescription {
  /**
   * <p>The entity ID.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The entity ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The entity type.</p>
   * @public
   */
  type?: EntityType | undefined;

  /**
   * <p>The time at which the entity was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The definition document of the entity.</p>
   * @public
   */
  definition?: DefinitionDocument | undefined;
}

/**
 * @public
 * @enum
 */
export const EntityFilterName = {
  NAME: "NAME",
  NAMESPACE: "NAMESPACE",
  REFERENCED_ENTITY_ID: "REFERENCED_ENTITY_ID",
  SEMANTIC_TYPE_PATH: "SEMANTIC_TYPE_PATH",
} as const;

/**
 * @public
 */
export type EntityFilterName = (typeof EntityFilterName)[keyof typeof EntityFilterName];

/**
 * <p>An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes
 *       a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by
 *       the value of <code>REFERENCED_ENTITY_ID</code>.</p>
 * @public
 */
export interface EntityFilter {
  /**
   * <p>The name of the entity search filter field. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example,
   *          you can filter on the ID of a property that is used in a state.</p>
   * @public
   */
  name?: EntityFilterName | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   * @public
   */
  value?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowExecutionEventType = {
  ACKNOWLEDGE_TASK_MESSAGE: "ACKNOWLEDGE_TASK_MESSAGE",
  ACTIVITY_FAILED: "ACTIVITY_FAILED",
  ACTIVITY_SCHEDULED: "ACTIVITY_SCHEDULED",
  ACTIVITY_STARTED: "ACTIVITY_STARTED",
  ACTIVITY_SUCCEEDED: "ACTIVITY_SUCCEEDED",
  EXECUTION_ABORTED: "EXECUTION_ABORTED",
  EXECUTION_FAILED: "EXECUTION_FAILED",
  EXECUTION_STARTED: "EXECUTION_STARTED",
  EXECUTION_SUCCEEDED: "EXECUTION_SUCCEEDED",
  SCHEDULE_NEXT_READY_STEPS_TASK: "SCHEDULE_NEXT_READY_STEPS_TASK",
  START_FLOW_EXECUTION_TASK: "START_FLOW_EXECUTION_TASK",
  STEP_FAILED: "STEP_FAILED",
  STEP_STARTED: "STEP_STARTED",
  STEP_SUCCEEDED: "STEP_SUCCEEDED",
  THING_ACTION_TASK: "THING_ACTION_TASK",
  THING_ACTION_TASK_FAILED: "THING_ACTION_TASK_FAILED",
  THING_ACTION_TASK_SUCCEEDED: "THING_ACTION_TASK_SUCCEEDED",
} as const;

/**
 * @public
 */
export type FlowExecutionEventType = (typeof FlowExecutionEventType)[keyof typeof FlowExecutionEventType];

/**
 * <p>An object that contains information about a flow event.</p>
 * @public
 */
export interface FlowExecutionMessage {
  /**
   * <p>The unique identifier of the message.</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The type of flow event .</p>
   * @public
   */
  eventType?: FlowExecutionEventType | undefined;

  /**
   * <p>The date and time when the message was last updated.</p>
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * <p>A string containing information about the flow event.</p>
   * @public
   */
  payload?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowExecutionStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type FlowExecutionStatus = (typeof FlowExecutionStatus)[keyof typeof FlowExecutionStatus];

/**
 * <p>An object that contains summary information about a flow execution.</p>
 * @public
 */
export interface FlowExecutionSummary {
  /**
   * <p>The ID of the flow execution.</p>
   * @public
   */
  flowExecutionId?: string | undefined;

  /**
   * <p>The current status of the flow execution.</p>
   * @public
   */
  status?: FlowExecutionStatus | undefined;

  /**
   * <p>The ID of the system instance that contains the flow.</p>
   * @public
   */
  systemInstanceId?: string | undefined;

  /**
   * <p>The ID of the flow.</p>
   * @public
   */
  flowTemplateId?: string | undefined;

  /**
   * <p>The date and time when the flow execution summary was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The date and time when the flow execution summary was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>An object that contains a workflow's definition and summary information.</p>
 * @public
 */
export interface FlowTemplateDescription {
  /**
   * <p>An object that contains summary information about a workflow.</p>
   * @public
   */
  summary?: FlowTemplateSummary | undefined;

  /**
   * <p>A workflow's definition document.</p>
   * @public
   */
  definition?: DefinitionDocument | undefined;

  /**
   * <p>The version of the user's namespace against which the workflow was validated. Use this value in your system instance.</p>
   * @public
   */
  validatedNamespaceVersion?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FlowTemplateFilterName = {
  DEVICE_MODEL_ID: "DEVICE_MODEL_ID",
} as const;

/**
 * @public
 */
export type FlowTemplateFilterName = (typeof FlowTemplateFilterName)[keyof typeof FlowTemplateFilterName];

/**
 * <p>An object that filters a workflow search.</p>
 * @public
 */
export interface FlowTemplateFilter {
  /**
   * <p>The name of the search filter field.</p>
   * @public
   */
  name: FlowTemplateFilterName | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   * @public
   */
  value: string[] | undefined;
}

/**
 * @public
 */
export interface GetEntitiesRequest {
  /**
   * <p>An array of entity IDs.</p>
   *          <p>The IDs should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   * @public
   */
  ids: string[] | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetEntitiesResponse {
  /**
   * <p>An array of descriptions for the specified entities.</p>
   * @public
   */
  descriptions?: EntityDescription[] | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateRequest {
  /**
   * <p>The ID of the workflow.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The number of the workflow revision to retrieve.</p>
   * @public
   */
  revisionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateResponse {
  /**
   * <p>The object that describes the specified workflow.</p>
   * @public
   */
  description?: FlowTemplateDescription | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateRevisionsRequest {
  /**
   * <p>The ID of the workflow.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFlowTemplateRevisionsResponse {
  /**
   * <p>An array of objects that provide summary data about each revision.</p>
   * @public
   */
  summaries?: FlowTemplateSummary[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
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
 * @enum
 */
export const NamespaceDeletionStatusErrorCodes = {
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type NamespaceDeletionStatusErrorCodes =
  (typeof NamespaceDeletionStatusErrorCodes)[keyof typeof NamespaceDeletionStatusErrorCodes];

/**
 * @public
 * @enum
 */
export const NamespaceDeletionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type NamespaceDeletionStatus = (typeof NamespaceDeletionStatus)[keyof typeof NamespaceDeletionStatus];

/**
 * @public
 */
export interface GetNamespaceDeletionStatusResponse {
  /**
   * <p>The ARN of the namespace that is being deleted.</p>
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * <p>The name of the namespace that is being deleted.</p>
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * <p>The status of the deletion request.</p>
   * @public
   */
  status?: NamespaceDeletionStatus | undefined;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   * @public
   */
  errorCode?: NamespaceDeletionStatusErrorCodes | undefined;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetSystemInstanceRequest {
  /**
   * <p>The ID of the system deployment instance. This value is returned by <code>CreateSystemInstance</code>.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:deployment:DEPLOYMENTNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>An object that contains a system instance definition and summary information.</p>
 * @public
 */
export interface SystemInstanceDescription {
  /**
   * <p>An object that contains summary information about a system instance.</p>
   * @public
   */
  summary?: SystemInstanceSummary | undefined;

  /**
   * <p>A document that defines an entity. </p>
   * @public
   */
  definition?: DefinitionDocument | undefined;

  /**
   * <p>The Amazon Simple Storage Service bucket where information about a system instance is stored.</p>
   * @public
   */
  s3BucketName?: string | undefined;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   * @public
   */
  metricsConfiguration?: MetricsConfiguration | undefined;

  /**
   * <p>The version of the user's namespace against which the system instance was validated.</p>
   * @public
   */
  validatedNamespaceVersion?: number | undefined;

  /**
   * <p>A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.</p>
   * @public
   */
  validatedDependencyRevisions?: DependencyRevision[] | undefined;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a
   *       cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other
   *       AWS services that the flow uses.</p>
   * @public
   */
  flowActionsRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSystemInstanceResponse {
  /**
   * <p>An object that describes the system instance.</p>
   * @public
   */
  description?: SystemInstanceDescription | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateRequest {
  /**
   * <p>The ID of the system to get. This ID must be in the user's namespace.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The number that specifies the revision of the system to get.</p>
   * @public
   */
  revisionNumber?: number | undefined;
}

/**
 * <p>An object that contains a system's definition document and summary information.</p>
 * @public
 */
export interface SystemTemplateDescription {
  /**
   * <p>An object that contains summary information about a system.</p>
   * @public
   */
  summary?: SystemTemplateSummary | undefined;

  /**
   * <p>The definition document of a system.</p>
   * @public
   */
  definition?: DefinitionDocument | undefined;

  /**
   * <p>The namespace version against which the system was validated. Use this value in your system instance.</p>
   * @public
   */
  validatedNamespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateResponse {
  /**
   * <p>An object that contains summary data about the system.</p>
   * @public
   */
  description?: SystemTemplateDescription | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateRevisionsRequest {
  /**
   * <p>The ID of the system template.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetSystemTemplateRevisionsResponse {
  /**
   * <p>An array of objects that contain summary data about the system template revisions.</p>
   * @public
   */
  summaries?: SystemTemplateSummary[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUploadStatusRequest {
  /**
   * <p>The ID of the upload. This value is returned by the <code>UploadEntityDefinitions</code> action.</p>
   * @public
   */
  uploadId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UploadStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];

/**
 * @public
 */
export interface GetUploadStatusResponse {
  /**
   * <p>The ID of the upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The status of the upload. The initial status is <code>IN_PROGRESS</code>. The response show all validation failures if the upload fails.</p>
   * @public
   */
  uploadStatus: UploadStatus | undefined;

  /**
   * <p>The ARN of the upload.</p>
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * <p>The name of the upload's namespace.</p>
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   * @public
   */
  namespaceVersion?: number | undefined;

  /**
   * <p>The reason for an upload failure.</p>
   * @public
   */
  failureReason?: string[] | undefined;

  /**
   * <p>The date at which the upload was created.</p>
   * @public
   */
  createdDate: Date | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionMessagesRequest {
  /**
   * <p>The ID of the flow execution.</p>
   * @public
   */
  flowExecutionId: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListFlowExecutionMessagesResponse {
  /**
   * <p>A list of objects that contain information about events in the specified flow execution.</p>
   * @public
   */
  messages?: FlowExecutionMessage[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The maximum number of tags to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are to be returned.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The token that specifies the next page of results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>List of tags returned by the <code>ListTagsForResource</code> operation.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The token that specifies the next page of results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchEntitiesRequest {
  /**
   * <p>The entity types for which to search.</p>
   * @public
   */
  entityTypes: EntityType[] | undefined;

  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>NAME</code>
   *             <code>NAMESPACE</code>, <code>SEMANTIC_TYPE_PATH</code> and <code>REFERENCED_ENTITY_ID</code>.
   *          <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example,
   *       you can filter on the ID of a property that is used in a state.</p>
   *          <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   * @public
   */
  filters?: EntityFilter[] | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface SearchEntitiesResponse {
  /**
   * <p>An array of descriptions for each entity returned in the search result.</p>
   * @public
   */
  descriptions?: EntityDescription[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchFlowExecutionsRequest {
  /**
   * <p>The ID of the system instance that contains the flow.</p>
   * @public
   */
  systemInstanceId: string | undefined;

  /**
   * <p>The ID of a flow execution.</p>
   * @public
   */
  flowExecutionId?: string | undefined;

  /**
   * <p>The date and time of the earliest flow execution to return.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time of the latest flow execution to return.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchFlowExecutionsResponse {
  /**
   * <p>An array of objects that contain summary information about each workflow execution in the result set.</p>
   * @public
   */
  summaries?: FlowExecutionSummary[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchFlowTemplatesRequest {
  /**
   * <p>An array of objects that limit the result set. The only valid filter is <code>DEVICE_MODEL_ID</code>.</p>
   * @public
   */
  filters?: FlowTemplateFilter[] | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchFlowTemplatesResponse {
  /**
   * <p>An array of objects that contain summary information about each workflow in the result set.</p>
   * @public
   */
  summaries?: FlowTemplateSummary[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SystemInstanceFilterName = {
  GREENGRASS_GROUP_NAME: "GREENGRASS_GROUP_NAME",
  STATUS: "STATUS",
  SYSTEM_TEMPLATE_ID: "SYSTEM_TEMPLATE_ID",
} as const;

/**
 * @public
 */
export type SystemInstanceFilterName = (typeof SystemInstanceFilterName)[keyof typeof SystemInstanceFilterName];

/**
 * <p>An object that filters a system instance search.
 *          Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a
 *          STATUS filter searches for system instances in the specified Greengrass group that have the specified status.</p>
 * @public
 */
export interface SystemInstanceFilter {
  /**
   * <p>The name of the search filter field.</p>
   * @public
   */
  name?: SystemInstanceFilterName | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search. </p>
   * @public
   */
  value?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchSystemInstancesRequest {
  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>SYSTEM_TEMPLATE_ID</code>, <code>STATUS</code>, and
   *          <code>GREENGRASS_GROUP_NAME</code>.</p>
   *          <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   * @public
   */
  filters?: SystemInstanceFilter[] | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchSystemInstancesResponse {
  /**
   * <p>An array of objects that contain summary data abour the system instances in the result set.</p>
   * @public
   */
  summaries?: SystemInstanceSummary[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SystemTemplateFilterName = {
  FLOW_TEMPLATE_ID: "FLOW_TEMPLATE_ID",
} as const;

/**
 * @public
 */
export type SystemTemplateFilterName = (typeof SystemTemplateFilterName)[keyof typeof SystemTemplateFilterName];

/**
 * <p>An object that filters a system search.</p>
 * @public
 */
export interface SystemTemplateFilter {
  /**
   * <p>The name of the system search filter field.</p>
   * @public
   */
  name: SystemTemplateFilterName | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   * @public
   */
  value: string[] | undefined;
}

/**
 * @public
 */
export interface SearchSystemTemplatesRequest {
  /**
   * <p>An array of filters that limit the result set. The only valid filter is <code>FLOW_TEMPLATE_ID</code>.</p>
   * @public
   */
  filters?: SystemTemplateFilter[] | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface SearchSystemTemplatesResponse {
  /**
   * <p>An array of objects that contain summary information about each system deployment in the result set.</p>
   * @public
   */
  summaries?: SystemTemplateSummary[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchThingsRequest {
  /**
   * <p>The ID of the entity to which the things are associated.</p>
   *          <p>The IDs should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   * @public
   */
  entityId: string | undefined;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   * @public
   */
  namespaceVersion?: number | undefined;
}

/**
 * <p>An AWS IoT thing.</p>
 * @public
 */
export interface Thing {
  /**
   * <p>The ARN of the thing.</p>
   * @public
   */
  thingArn?: string | undefined;

  /**
   * <p>The name of the thing.</p>
   * @public
   */
  thingName?: string | undefined;
}

/**
 * @public
 */
export interface SearchThingsResponse {
  /**
   * <p>An array of things in the result set.</p>
   * @public
   */
  things?: Thing[] | undefined;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are returned.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the resource.></p>
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
   * <p>The ID of the system instance to remove from its target.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * @public
 */
export interface UndeploySystemInstanceResponse {
  /**
   * <p>An object that contains summary information about the system instance that was removed from its target.</p>
   * @public
   */
  summary?: SystemInstanceSummary | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are to be removed.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed. </p>
   *          <p>This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>. </p>
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
   * <p>The ID of the workflow to be updated.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated workflow definition.</p>
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The version of the user's namespace.</p>
   *          <p>If no value is specified, the latest version is used by default. Use the <code>GetFlowTemplateRevisions</code> if you want to find earlier revisions of the flow
   *       to update.</p>
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateFlowTemplateResponse {
  /**
   * <p>An object containing summary information about the updated workflow.</p>
   * @public
   */
  summary?: FlowTemplateSummary | undefined;
}

/**
 * @public
 */
export interface UpdateSystemTemplateRequest {
  /**
   * <p>The ID of the system to be updated.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated system definition.</p>
   * @public
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   * @public
   */
  compatibleNamespaceVersion?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSystemTemplateResponse {
  /**
   * <p>An object containing summary information about the updated system.</p>
   * @public
   */
  summary?: SystemTemplateSummary | undefined;
}

/**
 * @public
 */
export interface UploadEntityDefinitionsRequest {
  /**
   * <p>The <code>DefinitionDocument</code> that defines the updated entities.</p>
   * @public
   */
  document?: DefinitionDocument | undefined;

  /**
   * <p>A Boolean that specifies whether to synchronize with the latest version of the public namespace. If set to <code>true</code>, the upload will create a new namespace version.</p>
   * @public
   */
  syncWithPublicNamespace?: boolean | undefined;

  /**
   * <p>A Boolean that specifies whether to deprecate all entities in the latest version before uploading the new <code>DefinitionDocument</code>.
   *          If set to <code>true</code>, the upload will create a new namespace version.</p>
   * @public
   */
  deprecateExistingEntities?: boolean | undefined;
}

/**
 * @public
 */
export interface UploadEntityDefinitionsResponse {
  /**
   * <p>The ID that specifies the upload action. You can use this to track the status of the upload.</p>
   * @public
   */
  uploadId: string | undefined;
}
