import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AssociateEntityToThingRequest {
  __type?: "AssociateEntityToThingRequest";
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

  /**
   * <p>The name of the thing to which the entity is to be associated.</p>
   */
  thingName: string | undefined;
}

export namespace AssociateEntityToThingRequest {
  export function isa(o: any): o is AssociateEntityToThingRequest {
    return __isa(o, "AssociateEntityToThingRequest");
  }
}

export interface AssociateEntityToThingResponse {
  __type?: "AssociateEntityToThingResponse";
}

export namespace AssociateEntityToThingResponse {
  export function isa(o: any): o is AssociateEntityToThingResponse {
    return __isa(o, "AssociateEntityToThingResponse");
  }
}

export interface CreateFlowTemplateRequest {
  __type?: "CreateFlowTemplateRequest";
  /**
   * <p>The namespace version in which the workflow is to be created.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;

  /**
   * <p>The workflow <code>DefinitionDocument</code>.</p>
   */
  definition: DefinitionDocument | undefined;
}

export namespace CreateFlowTemplateRequest {
  export function isa(o: any): o is CreateFlowTemplateRequest {
    return __isa(o, "CreateFlowTemplateRequest");
  }
}

export interface CreateFlowTemplateResponse {
  __type?: "CreateFlowTemplateResponse";
  /**
   * <p>The summary object that describes the created workflow.</p>
   */
  summary?: FlowTemplateSummary;
}

export namespace CreateFlowTemplateResponse {
  export function isa(o: any): o is CreateFlowTemplateResponse {
    return __isa(o, "CreateFlowTemplateResponse");
  }
}

export interface CreateSystemInstanceRequest {
  __type?: "CreateSystemInstanceRequest";
  /**
   * <p>A document that defines an entity. </p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The ARN of the IAM role that AWS IoT Things Graph will assume when it executes the flow. This role must have
   *       read and write access to AWS Lambda and AWS IoT and any other AWS services that the flow uses when it executes.  This
   *       value is required if the value of the <code>target</code> parameter is <code>CLOUD</code>.</p>
   */
  flowActionsRoleArn?: string;

  /**
   * <p>The name of the Greengrass group where the system instance will be deployed. This value is required if
   *       the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   */
  greengrassGroupName?: string;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: MetricsConfiguration;

  /**
   * <p>The name of the Amazon Simple Storage Service bucket that will be used to store and deploy the system instance's resource file. This value is required if
   *          the value of the <code>target</code> parameter is <code>GREENGRASS</code>.</p>
   */
  s3BucketName?: string;

  /**
   * <p>Metadata, consisting of key-value pairs, that can be used to categorize your system instances.</p>
   */
  tags?: Array<Tag>;

  /**
   * <p>The target type of the deployment. Valid values are <code>GREENGRASS</code> and <code>CLOUD</code>.</p>
   */
  target: DeploymentTarget | string | undefined;
}

export namespace CreateSystemInstanceRequest {
  export function isa(o: any): o is CreateSystemInstanceRequest {
    return __isa(o, "CreateSystemInstanceRequest");
  }
}

export interface CreateSystemInstanceResponse {
  __type?: "CreateSystemInstanceResponse";
  /**
   * <p>The summary object that describes the new system instance.</p>
   */
  summary?: SystemInstanceSummary;
}

export namespace CreateSystemInstanceResponse {
  export function isa(o: any): o is CreateSystemInstanceResponse {
    return __isa(o, "CreateSystemInstanceResponse");
  }
}

export interface CreateSystemTemplateRequest {
  __type?: "CreateSystemTemplateRequest";
  /**
   * <p>The namespace version in which the system is to be created.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;

  /**
   * <p>The <code>DefinitionDocument</code> used to create the system.</p>
   */
  definition: DefinitionDocument | undefined;
}

export namespace CreateSystemTemplateRequest {
  export function isa(o: any): o is CreateSystemTemplateRequest {
    return __isa(o, "CreateSystemTemplateRequest");
  }
}

export interface CreateSystemTemplateResponse {
  __type?: "CreateSystemTemplateResponse";
  /**
   * <p>The summary object that describes the created system.</p>
   */
  summary?: SystemTemplateSummary;
}

export namespace CreateSystemTemplateResponse {
  export function isa(o: any): o is CreateSystemTemplateResponse {
    return __isa(o, "CreateSystemTemplateResponse");
  }
}

export interface DeleteFlowTemplateRequest {
  __type?: "DeleteFlowTemplateRequest";
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
  export function isa(o: any): o is DeleteFlowTemplateRequest {
    return __isa(o, "DeleteFlowTemplateRequest");
  }
}

export interface DeleteFlowTemplateResponse {
  __type?: "DeleteFlowTemplateResponse";
}

export namespace DeleteFlowTemplateResponse {
  export function isa(o: any): o is DeleteFlowTemplateResponse {
    return __isa(o, "DeleteFlowTemplateResponse");
  }
}

export interface DeleteNamespaceRequest {
  __type?: "DeleteNamespaceRequest";
}

export namespace DeleteNamespaceRequest {
  export function isa(o: any): o is DeleteNamespaceRequest {
    return __isa(o, "DeleteNamespaceRequest");
  }
}

export interface DeleteNamespaceResponse {
  __type?: "DeleteNamespaceResponse";
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
  export function isa(o: any): o is DeleteNamespaceResponse {
    return __isa(o, "DeleteNamespaceResponse");
  }
}

export interface DeleteSystemInstanceRequest {
  __type?: "DeleteSystemInstanceRequest";
  /**
   * <p>The ID of the system instance to be deleted.</p>
   */
  id?: string;
}

export namespace DeleteSystemInstanceRequest {
  export function isa(o: any): o is DeleteSystemInstanceRequest {
    return __isa(o, "DeleteSystemInstanceRequest");
  }
}

export interface DeleteSystemInstanceResponse {
  __type?: "DeleteSystemInstanceResponse";
}

export namespace DeleteSystemInstanceResponse {
  export function isa(o: any): o is DeleteSystemInstanceResponse {
    return __isa(o, "DeleteSystemInstanceResponse");
  }
}

export interface DeleteSystemTemplateRequest {
  __type?: "DeleteSystemTemplateRequest";
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
  export function isa(o: any): o is DeleteSystemTemplateRequest {
    return __isa(o, "DeleteSystemTemplateRequest");
  }
}

export interface DeleteSystemTemplateResponse {
  __type?: "DeleteSystemTemplateResponse";
}

export namespace DeleteSystemTemplateResponse {
  export function isa(o: any): o is DeleteSystemTemplateResponse {
    return __isa(o, "DeleteSystemTemplateResponse");
  }
}

export interface DeploySystemInstanceRequest {
  __type?: "DeploySystemInstanceRequest";
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
  export function isa(o: any): o is DeploySystemInstanceRequest {
    return __isa(o, "DeploySystemInstanceRequest");
  }
}

export interface DeploySystemInstanceResponse {
  __type?: "DeploySystemInstanceResponse";
  /**
   * <p>The ID of the Greengrass deployment used to deploy the system instance.</p>
   */
  greengrassDeploymentId?: string;

  /**
   * <p>An object that contains summary information about a system instance that was deployed. </p>
   */
  summary: SystemInstanceSummary | undefined;
}

export namespace DeploySystemInstanceResponse {
  export function isa(o: any): o is DeploySystemInstanceResponse {
    return __isa(o, "DeploySystemInstanceResponse");
  }
}

export interface DeprecateFlowTemplateRequest {
  __type?: "DeprecateFlowTemplateRequest";
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
  export function isa(o: any): o is DeprecateFlowTemplateRequest {
    return __isa(o, "DeprecateFlowTemplateRequest");
  }
}

export interface DeprecateFlowTemplateResponse {
  __type?: "DeprecateFlowTemplateResponse";
}

export namespace DeprecateFlowTemplateResponse {
  export function isa(o: any): o is DeprecateFlowTemplateResponse {
    return __isa(o, "DeprecateFlowTemplateResponse");
  }
}

export interface DeprecateSystemTemplateRequest {
  __type?: "DeprecateSystemTemplateRequest";
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
  export function isa(o: any): o is DeprecateSystemTemplateRequest {
    return __isa(o, "DeprecateSystemTemplateRequest");
  }
}

export interface DeprecateSystemTemplateResponse {
  __type?: "DeprecateSystemTemplateResponse";
}

export namespace DeprecateSystemTemplateResponse {
  export function isa(o: any): o is DeprecateSystemTemplateResponse {
    return __isa(o, "DeprecateSystemTemplateResponse");
  }
}

export interface DescribeNamespaceRequest {
  __type?: "DescribeNamespaceRequest";
  /**
   * <p>The name of the user's namespace. Set this to <code>aws</code> to get the public namespace.</p>
   */
  namespaceName?: string;
}

export namespace DescribeNamespaceRequest {
  export function isa(o: any): o is DescribeNamespaceRequest {
    return __isa(o, "DescribeNamespaceRequest");
  }
}

export interface DescribeNamespaceResponse {
  __type?: "DescribeNamespaceResponse";
  /**
   * <p>The ARN of the namespace.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the namespace.</p>
   */
  namespaceName?: string;

  /**
   * <p>The version of the user's namespace to describe.</p>
   */
  namespaceVersion?: number;

  /**
   * <p>The name of the public namespace that the latest namespace version is tracking.</p>
   */
  trackingNamespaceName?: string;

  /**
   * <p>The version of the public namespace that the latest version is tracking.</p>
   */
  trackingNamespaceVersion?: number;
}

export namespace DescribeNamespaceResponse {
  export function isa(o: any): o is DescribeNamespaceResponse {
    return __isa(o, "DescribeNamespaceResponse");
  }
}

export interface DissociateEntityFromThingRequest {
  __type?: "DissociateEntityFromThingRequest";
  /**
   * <p>The entity type from which to disassociate the thing.</p>
   */
  entityType: EntityType | string | undefined;

  /**
   * <p>The name of the thing to disassociate.</p>
   */
  thingName: string | undefined;
}

export namespace DissociateEntityFromThingRequest {
  export function isa(o: any): o is DissociateEntityFromThingRequest {
    return __isa(o, "DissociateEntityFromThingRequest");
  }
}

export interface DissociateEntityFromThingResponse {
  __type?: "DissociateEntityFromThingResponse";
}

export namespace DissociateEntityFromThingResponse {
  export function isa(o: any): o is DissociateEntityFromThingResponse {
    return __isa(o, "DissociateEntityFromThingResponse");
  }
}

export interface GetEntitiesRequest {
  __type?: "GetEntitiesRequest";
  /**
   * <p>An array of entity IDs.</p>
   *          <p>The IDs should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   */
  ids: Array<string> | undefined;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;
}

export namespace GetEntitiesRequest {
  export function isa(o: any): o is GetEntitiesRequest {
    return __isa(o, "GetEntitiesRequest");
  }
}

export interface GetEntitiesResponse {
  __type?: "GetEntitiesResponse";
  /**
   * <p>An array of descriptions for the specified entities.</p>
   */
  descriptions?: Array<EntityDescription>;
}

export namespace GetEntitiesResponse {
  export function isa(o: any): o is GetEntitiesResponse {
    return __isa(o, "GetEntitiesResponse");
  }
}

export interface GetFlowTemplateRequest {
  __type?: "GetFlowTemplateRequest";
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
  export function isa(o: any): o is GetFlowTemplateRequest {
    return __isa(o, "GetFlowTemplateRequest");
  }
}

export interface GetFlowTemplateResponse {
  __type?: "GetFlowTemplateResponse";
  /**
   * <p>The object that describes the specified workflow.</p>
   */
  description?: FlowTemplateDescription;
}

export namespace GetFlowTemplateResponse {
  export function isa(o: any): o is GetFlowTemplateResponse {
    return __isa(o, "GetFlowTemplateResponse");
  }
}

export interface GetFlowTemplateRevisionsRequest {
  __type?: "GetFlowTemplateRevisionsRequest";
  /**
   * <p>The ID of the workflow.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace GetFlowTemplateRevisionsRequest {
  export function isa(o: any): o is GetFlowTemplateRevisionsRequest {
    return __isa(o, "GetFlowTemplateRevisionsRequest");
  }
}

export interface GetFlowTemplateRevisionsResponse {
  __type?: "GetFlowTemplateRevisionsResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that provide summary data about each revision.</p>
   */
  summaries?: Array<FlowTemplateSummary>;
}

export namespace GetFlowTemplateRevisionsResponse {
  export function isa(o: any): o is GetFlowTemplateRevisionsResponse {
    return __isa(o, "GetFlowTemplateRevisionsResponse");
  }
}

export interface GetNamespaceDeletionStatusRequest {
  __type?: "GetNamespaceDeletionStatusRequest";
}

export namespace GetNamespaceDeletionStatusRequest {
  export function isa(o: any): o is GetNamespaceDeletionStatusRequest {
    return __isa(o, "GetNamespaceDeletionStatusRequest");
  }
}

export interface GetNamespaceDeletionStatusResponse {
  __type?: "GetNamespaceDeletionStatusResponse";
  /**
   * <p>An error code returned by the namespace deletion task.</p>
   */
  errorCode?: NamespaceDeletionStatusErrorCodes | string;

  /**
   * <p>An error code returned by the namespace deletion task.</p>
   */
  errorMessage?: string;

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
}

export namespace GetNamespaceDeletionStatusResponse {
  export function isa(o: any): o is GetNamespaceDeletionStatusResponse {
    return __isa(o, "GetNamespaceDeletionStatusResponse");
  }
}

export interface GetSystemInstanceRequest {
  __type?: "GetSystemInstanceRequest";
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
  export function isa(o: any): o is GetSystemInstanceRequest {
    return __isa(o, "GetSystemInstanceRequest");
  }
}

export interface GetSystemInstanceResponse {
  __type?: "GetSystemInstanceResponse";
  /**
   * <p>An object that describes the system instance.</p>
   */
  description?: SystemInstanceDescription;
}

export namespace GetSystemInstanceResponse {
  export function isa(o: any): o is GetSystemInstanceResponse {
    return __isa(o, "GetSystemInstanceResponse");
  }
}

export interface GetSystemTemplateRequest {
  __type?: "GetSystemTemplateRequest";
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
  export function isa(o: any): o is GetSystemTemplateRequest {
    return __isa(o, "GetSystemTemplateRequest");
  }
}

export interface GetSystemTemplateResponse {
  __type?: "GetSystemTemplateResponse";
  /**
   * <p>An object that contains summary data about the system.</p>
   */
  description?: SystemTemplateDescription;
}

export namespace GetSystemTemplateResponse {
  export function isa(o: any): o is GetSystemTemplateResponse {
    return __isa(o, "GetSystemTemplateResponse");
  }
}

export interface GetSystemTemplateRevisionsRequest {
  __type?: "GetSystemTemplateRevisionsRequest";
  /**
   * <p>The ID of the system template.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace GetSystemTemplateRevisionsRequest {
  export function isa(o: any): o is GetSystemTemplateRevisionsRequest {
    return __isa(o, "GetSystemTemplateRevisionsRequest");
  }
}

export interface GetSystemTemplateRevisionsResponse {
  __type?: "GetSystemTemplateRevisionsResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contain summary data about the system template revisions.</p>
   */
  summaries?: Array<SystemTemplateSummary>;
}

export namespace GetSystemTemplateRevisionsResponse {
  export function isa(o: any): o is GetSystemTemplateRevisionsResponse {
    return __isa(o, "GetSystemTemplateRevisionsResponse");
  }
}

export interface GetUploadStatusRequest {
  __type?: "GetUploadStatusRequest";
  /**
   * <p>The ID of the upload. This value is returned by the <code>UploadEntityDefinitions</code> action.</p>
   */
  uploadId: string | undefined;
}

export namespace GetUploadStatusRequest {
  export function isa(o: any): o is GetUploadStatusRequest {
    return __isa(o, "GetUploadStatusRequest");
  }
}

export interface GetUploadStatusResponse {
  __type?: "GetUploadStatusResponse";
  /**
   * <p>The date at which the upload was created.</p>
   */
  createdDate: Date | undefined;

  /**
   * <p>The reason for an upload failure.</p>
   */
  failureReason?: Array<string>;

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
   * <p>The ID of the upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The status of the upload. The initial status is <code>IN_PROGRESS</code>. The response show all validation failures if the upload fails.</p>
   */
  uploadStatus: UploadStatus | string | undefined;
}

export namespace GetUploadStatusResponse {
  export function isa(o: any): o is GetUploadStatusResponse {
    return __isa(o, "GetUploadStatusResponse");
  }
}

export interface ListFlowExecutionMessagesRequest {
  __type?: "ListFlowExecutionMessagesRequest";
  /**
   * <p>The ID of the flow execution.</p>
   */
  flowExecutionId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace ListFlowExecutionMessagesRequest {
  export function isa(o: any): o is ListFlowExecutionMessagesRequest {
    return __isa(o, "ListFlowExecutionMessagesRequest");
  }
}

export interface ListFlowExecutionMessagesResponse {
  __type?: "ListFlowExecutionMessagesResponse";
  /**
   * <p>A list of objects that contain information about events in the specified flow execution.</p>
   */
  messages?: Array<FlowExecutionMessage>;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;
}

export namespace ListFlowExecutionMessagesResponse {
  export function isa(o: any): o is ListFlowExecutionMessagesResponse {
    return __isa(o, "ListFlowExecutionMessagesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The maximum number of tags to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The token that specifies the next page of results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are to be returned.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The token that specifies the next page of results to return.</p>
   */
  nextToken?: string;

  /**
   * <p>List of tags returned by the <code>ListTagsForResource</code> operation.</p>
   */
  tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export interface SearchEntitiesRequest {
  __type?: "SearchEntitiesRequest";
  /**
   * <p>The entity types for which to search.</p>
   */
  entityTypes: Array<EntityType | string> | undefined;

  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>NAME</code>
   *             <code>NAMESPACE</code>, <code>SEMANTIC_TYPE_PATH</code> and <code>REFERENCED_ENTITY_ID</code>.
   *          <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example,
   *       you can filter on the ID of a property that is used in a state.</p>
   *          <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   */
  filters?: Array<EntityFilter>;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace SearchEntitiesRequest {
  export function isa(o: any): o is SearchEntitiesRequest {
    return __isa(o, "SearchEntitiesRequest");
  }
}

export interface SearchEntitiesResponse {
  __type?: "SearchEntitiesResponse";
  /**
   * <p>An array of descriptions for each entity returned in the search result.</p>
   */
  descriptions?: Array<EntityDescription>;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;
}

export namespace SearchEntitiesResponse {
  export function isa(o: any): o is SearchEntitiesResponse {
    return __isa(o, "SearchEntitiesResponse");
  }
}

export interface SearchFlowExecutionsRequest {
  __type?: "SearchFlowExecutionsRequest";
  /**
   * <p>The date and time of the latest flow execution to return.</p>
   */
  endTime?: Date;

  /**
   * <p>The ID of a flow execution.</p>
   */
  flowExecutionId?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;

  /**
   * <p>The date and time of the earliest flow execution to return.</p>
   */
  startTime?: Date;

  /**
   * <p>The ID of the system instance that contains the flow.</p>
   */
  systemInstanceId: string | undefined;
}

export namespace SearchFlowExecutionsRequest {
  export function isa(o: any): o is SearchFlowExecutionsRequest {
    return __isa(o, "SearchFlowExecutionsRequest");
  }
}

export interface SearchFlowExecutionsResponse {
  __type?: "SearchFlowExecutionsResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contain summary information about each workflow execution in the result set.</p>
   */
  summaries?: Array<FlowExecutionSummary>;
}

export namespace SearchFlowExecutionsResponse {
  export function isa(o: any): o is SearchFlowExecutionsResponse {
    return __isa(o, "SearchFlowExecutionsResponse");
  }
}

export interface SearchFlowTemplatesRequest {
  __type?: "SearchFlowTemplatesRequest";
  /**
   * <p>An array of objects that limit the result set. The only valid filter is <code>DEVICE_MODEL_ID</code>.</p>
   */
  filters?: Array<FlowTemplateFilter>;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace SearchFlowTemplatesRequest {
  export function isa(o: any): o is SearchFlowTemplatesRequest {
    return __isa(o, "SearchFlowTemplatesRequest");
  }
}

export interface SearchFlowTemplatesResponse {
  __type?: "SearchFlowTemplatesResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contain summary information about each workflow in the result set.</p>
   */
  summaries?: Array<FlowTemplateSummary>;
}

export namespace SearchFlowTemplatesResponse {
  export function isa(o: any): o is SearchFlowTemplatesResponse {
    return __isa(o, "SearchFlowTemplatesResponse");
  }
}

export interface SearchSystemInstancesRequest {
  __type?: "SearchSystemInstancesRequest";
  /**
   * <p>Optional filter to apply to the search. Valid filters are <code>SYSTEM_TEMPLATE_ID</code>, <code>STATUS</code>, and
   *          <code>GREENGRASS_GROUP_NAME</code>.</p>
   *          <p>Multiple filters function as OR criteria in the query. Multiple values passed inside the filter function as AND criteria.</p>
   */
  filters?: Array<SystemInstanceFilter>;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace SearchSystemInstancesRequest {
  export function isa(o: any): o is SearchSystemInstancesRequest {
    return __isa(o, "SearchSystemInstancesRequest");
  }
}

export interface SearchSystemInstancesResponse {
  __type?: "SearchSystemInstancesResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results. </p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contain summary data abour the system instances in the result set.</p>
   */
  summaries?: Array<SystemInstanceSummary>;
}

export namespace SearchSystemInstancesResponse {
  export function isa(o: any): o is SearchSystemInstancesResponse {
    return __isa(o, "SearchSystemInstancesResponse");
  }
}

export interface SearchSystemTemplatesRequest {
  __type?: "SearchSystemTemplatesRequest";
  /**
   * <p>An array of filters that limit the result set. The only valid filter is <code>FLOW_TEMPLATE_ID</code>.</p>
   */
  filters?: Array<SystemTemplateFilter>;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace SearchSystemTemplatesRequest {
  export function isa(o: any): o is SearchSystemTemplatesRequest {
    return __isa(o, "SearchSystemTemplatesRequest");
  }
}

export interface SearchSystemTemplatesResponse {
  __type?: "SearchSystemTemplatesResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of objects that contain summary information about each system deployment in the result set.</p>
   */
  summaries?: Array<SystemTemplateSummary>;
}

export namespace SearchSystemTemplatesResponse {
  export function isa(o: any): o is SearchSystemTemplatesResponse {
    return __isa(o, "SearchSystemTemplatesResponse");
  }
}

export interface SearchThingsRequest {
  __type?: "SearchThingsRequest";
  /**
   * <p>The ID of the entity to which the things are associated.</p>
   *          <p>The IDs should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:device:DEVICENAME</code>
   *          </p>
   */
  entityId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   */
  namespaceVersion?: number;

  /**
   * <p>The string that specifies the next page of results. Use this when you're paginating results.</p>
   */
  nextToken?: string;
}

export namespace SearchThingsRequest {
  export function isa(o: any): o is SearchThingsRequest {
    return __isa(o, "SearchThingsRequest");
  }
}

export interface SearchThingsResponse {
  __type?: "SearchThingsResponse";
  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of things in the result set.</p>
   */
  things?: Array<Thing>;
}

export namespace SearchThingsResponse {
  export function isa(o: any): o is SearchThingsResponse {
    return __isa(o, "SearchThingsResponse");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are returned.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the resource.></p>
   */
  tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UndeploySystemInstanceRequest {
  __type?: "UndeploySystemInstanceRequest";
  /**
   * <p>The ID of the system instance to remove from its target.</p>
   */
  id?: string;
}

export namespace UndeploySystemInstanceRequest {
  export function isa(o: any): o is UndeploySystemInstanceRequest {
    return __isa(o, "UndeploySystemInstanceRequest");
  }
}

export interface UndeploySystemInstanceResponse {
  __type?: "UndeploySystemInstanceResponse";
  /**
   * <p>An object that contains summary information about the system instance that was removed from its target.</p>
   */
  summary?: SystemInstanceSummary;
}

export namespace UndeploySystemInstanceResponse {
  export function isa(o: any): o is UndeploySystemInstanceResponse {
    return __isa(o, "UndeploySystemInstanceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource whose tags are to be removed.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag key names to remove from the resource. You don't specify the value. Both the key and its associated value are removed. </p>
   *          <p>This parameter to the API requires a JSON text string argument. For information on how to format a JSON parameter for the various command line tool environments, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-parameters.html#cli-using-param-json">Using JSON for Parameters</a> in the <i>AWS CLI User Guide</i>. </p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateFlowTemplateRequest {
  __type?: "UpdateFlowTemplateRequest";
  /**
   * <p>The version of the user's namespace.</p>
   *          <p>If no value is specified, the latest version is used by default. Use the <code>GetFlowTemplateRevisions</code> if you want to find earlier revisions of the flow
   *       to update.</p>
   */
  compatibleNamespaceVersion?: number;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated workflow definition.</p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The ID of the workflow to be updated.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:workflow:WORKFLOWNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace UpdateFlowTemplateRequest {
  export function isa(o: any): o is UpdateFlowTemplateRequest {
    return __isa(o, "UpdateFlowTemplateRequest");
  }
}

export interface UpdateFlowTemplateResponse {
  __type?: "UpdateFlowTemplateResponse";
  /**
   * <p>An object containing summary information about the updated workflow.</p>
   */
  summary?: FlowTemplateSummary;
}

export namespace UpdateFlowTemplateResponse {
  export function isa(o: any): o is UpdateFlowTemplateResponse {
    return __isa(o, "UpdateFlowTemplateResponse");
  }
}

export interface UpdateSystemTemplateRequest {
  __type?: "UpdateSystemTemplateRequest";
  /**
   * <p>The version of the user's namespace. Defaults to the latest version of the user's namespace.</p>
   *          <p>If no value is specified, the latest version is used by default.</p>
   */
  compatibleNamespaceVersion?: number;

  /**
   * <p>The <code>DefinitionDocument</code> that contains the updated system definition.</p>
   */
  definition: DefinitionDocument | undefined;

  /**
   * <p>The ID of the system to be updated.</p>
   *          <p>The ID should be in the following format.</p>
   *          <p>
   *             <code>urn:tdm:REGION/ACCOUNT ID/default:system:SYSTEMNAME</code>
   *          </p>
   */
  id: string | undefined;
}

export namespace UpdateSystemTemplateRequest {
  export function isa(o: any): o is UpdateSystemTemplateRequest {
    return __isa(o, "UpdateSystemTemplateRequest");
  }
}

export interface UpdateSystemTemplateResponse {
  __type?: "UpdateSystemTemplateResponse";
  /**
   * <p>An object containing summary information about the updated system.</p>
   */
  summary?: SystemTemplateSummary;
}

export namespace UpdateSystemTemplateResponse {
  export function isa(o: any): o is UpdateSystemTemplateResponse {
    return __isa(o, "UpdateSystemTemplateResponse");
  }
}

export interface UploadEntityDefinitionsRequest {
  __type?: "UploadEntityDefinitionsRequest";
  /**
   * <p>A Boolean that specifies whether to deprecate all entities in the latest version before uploading the new <code>DefinitionDocument</code>.
   *          If set to <code>true</code>, the upload will create a new namespace version.</p>
   */
  deprecateExistingEntities?: boolean;

  /**
   * <p>The <code>DefinitionDocument</code> that defines the updated entities.</p>
   */
  document?: DefinitionDocument;

  /**
   * <p>A Boolean that specifies whether to synchronize with the latest version of the public namespace. If set to <code>true</code>, the upload will create a new namespace version.</p>
   */
  syncWithPublicNamespace?: boolean;
}

export namespace UploadEntityDefinitionsRequest {
  export function isa(o: any): o is UploadEntityDefinitionsRequest {
    return __isa(o, "UploadEntityDefinitionsRequest");
  }
}

export interface UploadEntityDefinitionsResponse {
  __type?: "UploadEntityDefinitionsResponse";
  /**
   * <p>The ID that specifies the upload action. You can use this to track the status of the upload.</p>
   */
  uploadId: string | undefined;
}

export namespace UploadEntityDefinitionsResponse {
  export function isa(o: any): o is UploadEntityDefinitionsResponse {
    return __isa(o, "UploadEntityDefinitionsResponse");
  }
}

/**
 * <p>Metadata assigned to an AWS IoT Things Graph resource consisting of a key-value pair.</p>
 */
export interface Tag {
  __type?: "Tag";
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p>A document that defines an entity. </p>
 */
export interface DefinitionDocument {
  __type?: "DefinitionDocument";
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
  export function isa(o: any): o is DefinitionDocument {
    return __isa(o, "DefinitionDocument");
  }
}

export enum DefinitionLanguage {
  GRAPHQL = "GRAPHQL"
}

/**
 * <p></p>
 */
export interface InternalFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return __isa(o, "InternalFailureException");
  }
}

/**
 * <p></p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p></p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

/**
 * <p></p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p></p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p></p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p></p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>Describes the properties of an entity.</p>
 */
export interface EntityDescription {
  __type?: "EntityDescription";
  /**
   * <p>The entity ARN.</p>
   */
  arn?: string;

  /**
   * <p>The time at which the entity was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The definition document of the entity.</p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>The entity ID.</p>
   */
  id?: string;

  /**
   * <p>The entity type.</p>
   */
  type?: EntityType | string;
}

export namespace EntityDescription {
  export function isa(o: any): o is EntityDescription {
    return __isa(o, "EntityDescription");
  }
}

/**
 * <p>An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes
 *       a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by
 *       the value of <code>REFERENCED_ENTITY_ID</code>.</p>
 */
export interface EntityFilter {
  __type?: "EntityFilter";
  /**
   * <p>The name of the entity search filter field. <code>REFERENCED_ENTITY_ID</code> filters on entities that are used by the entity in the result set. For example,
   *          you can filter on the ID of a property that is used in a state.</p>
   */
  name?: EntityFilterName | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value?: Array<string>;
}

export namespace EntityFilter {
  export function isa(o: any): o is EntityFilter {
    return __isa(o, "EntityFilter");
  }
}

export enum EntityFilterName {
  NAME = "NAME",
  NAMESPACE = "NAMESPACE",
  REFERENCED_ENTITY_ID = "REFERENCED_ENTITY_ID",
  SEMANTIC_TYPE_PATH = "SEMANTIC_TYPE_PATH"
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
  STATE = "STATE"
}

export enum NamespaceDeletionStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

export enum NamespaceDeletionStatusErrorCodes {
  VALIDATION_FAILED = "VALIDATION_FAILED"
}

/**
 * <p>An AWS IoT thing.</p>
 */
export interface Thing {
  __type?: "Thing";
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
  export function isa(o: any): o is Thing {
    return __isa(o, "Thing");
  }
}

export enum UploadStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>An object that contains the ID and revision number of a workflow or system that is part of a deployment.</p>
 */
export interface DependencyRevision {
  __type?: "DependencyRevision";
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
  export function isa(o: any): o is DependencyRevision {
    return __isa(o, "DependencyRevision");
  }
}

export enum DeploymentTarget {
  CLOUD = "CLOUD",
  GREENGRASS = "GREENGRASS"
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
  THING_ACTION_TASK_SUCCEEDED = "THING_ACTION_TASK_SUCCEEDED"
}

/**
 * <p>An object that contains information about a flow event.</p>
 */
export interface FlowExecutionMessage {
  __type?: "FlowExecutionMessage";
  /**
   * <p>The type of flow event .</p>
   */
  eventType?: FlowExecutionEventType | string;

  /**
   * <p>The unique identifier of the message.</p>
   */
  messageId?: string;

  /**
   * <p>A string containing information about the flow event.</p>
   */
  payload?: string;

  /**
   * <p>The date and time when the message was last updated.</p>
   */
  timestamp?: Date;
}

export namespace FlowExecutionMessage {
  export function isa(o: any): o is FlowExecutionMessage {
    return __isa(o, "FlowExecutionMessage");
  }
}

export enum FlowExecutionStatus {
  ABORTED = "ABORTED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 * <p>An object that contains summary information about a flow execution.</p>
 */
export interface FlowExecutionSummary {
  __type?: "FlowExecutionSummary";
  /**
   * <p>The date and time when the flow execution summary was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the flow execution.</p>
   */
  flowExecutionId?: string;

  /**
   * <p>The ID of the flow.</p>
   */
  flowTemplateId?: string;

  /**
   * <p>The current status of the flow execution.</p>
   */
  status?: FlowExecutionStatus | string;

  /**
   * <p>The ID of the system instance that contains the flow.</p>
   */
  systemInstanceId?: string;

  /**
   * <p>The date and time when the flow execution summary was last updated.</p>
   */
  updatedAt?: Date;
}

export namespace FlowExecutionSummary {
  export function isa(o: any): o is FlowExecutionSummary {
    return __isa(o, "FlowExecutionSummary");
  }
}

/**
 * <p>An object that contains a workflow's definition and summary information.</p>
 */
export interface FlowTemplateDescription {
  __type?: "FlowTemplateDescription";
  /**
   * <p>A workflow's definition document.</p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>An object that contains summary information about a workflow.</p>
   */
  summary?: FlowTemplateSummary;

  /**
   * <p>The version of the user's namespace against which the workflow was validated. Use this value in your system instance.</p>
   */
  validatedNamespaceVersion?: number;
}

export namespace FlowTemplateDescription {
  export function isa(o: any): o is FlowTemplateDescription {
    return __isa(o, "FlowTemplateDescription");
  }
}

/**
 * <p>An object that filters a workflow search.</p>
 */
export interface FlowTemplateFilter {
  __type?: "FlowTemplateFilter";
  /**
   * <p>The name of the search filter field.</p>
   */
  name: FlowTemplateFilterName | string | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: Array<string> | undefined;
}

export namespace FlowTemplateFilter {
  export function isa(o: any): o is FlowTemplateFilter {
    return __isa(o, "FlowTemplateFilter");
  }
}

export enum FlowTemplateFilterName {
  DEVICE_MODEL_ID = "DEVICE_MODEL_ID"
}

/**
 * <p>An object that contains summary information about a workflow.</p>
 */
export interface FlowTemplateSummary {
  __type?: "FlowTemplateSummary";
  /**
   * <p>The ARN of the workflow.</p>
   */
  arn?: string;

  /**
   * <p>The date when the workflow was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the workflow.</p>
   */
  id?: string;

  /**
   * <p>The revision number of the workflow.</p>
   */
  revisionNumber?: number;
}

export namespace FlowTemplateSummary {
  export function isa(o: any): o is FlowTemplateSummary {
    return __isa(o, "FlowTemplateSummary");
  }
}

/**
 * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
 */
export interface MetricsConfiguration {
  __type?: "MetricsConfiguration";
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
  export function isa(o: any): o is MetricsConfiguration {
    return __isa(o, "MetricsConfiguration");
  }
}

export enum SystemInstanceDeploymentStatus {
  BOOTSTRAP = "BOOTSTRAP",
  DELETED_IN_TARGET = "DELETED_IN_TARGET",
  DEPLOYED_IN_TARGET = "DEPLOYED_IN_TARGET",
  DEPLOY_IN_PROGRESS = "DEPLOY_IN_PROGRESS",
  FAILED = "FAILED",
  NOT_DEPLOYED = "NOT_DEPLOYED",
  PENDING_DELETE = "PENDING_DELETE",
  UNDEPLOY_IN_PROGRESS = "UNDEPLOY_IN_PROGRESS"
}

/**
 * <p>An object that contains a system instance definition and summary information.</p>
 */
export interface SystemInstanceDescription {
  __type?: "SystemInstanceDescription";
  /**
   * <p>A document that defines an entity. </p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>The AWS Identity and Access Management (IAM) role that AWS IoT Things Graph assumes during flow execution in a
   *       cloud deployment. This role must have read and write permissionss to AWS Lambda and AWS IoT and to any other
   *       AWS services that the flow uses.</p>
   */
  flowActionsRoleArn?: string;

  /**
   * <p>An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.</p>
   */
  metricsConfiguration?: MetricsConfiguration;

  /**
   * <p>The Amazon Simple Storage Service bucket where information about a system instance is stored.</p>
   */
  s3BucketName?: string;

  /**
   * <p>An object that contains summary information about a system instance.</p>
   */
  summary?: SystemInstanceSummary;

  /**
   * <p>A list of objects that contain all of the IDs and revision numbers of workflows and systems that are used in a system instance.</p>
   */
  validatedDependencyRevisions?: Array<DependencyRevision>;

  /**
   * <p>The version of the user's namespace against which the system instance was validated.</p>
   */
  validatedNamespaceVersion?: number;
}

export namespace SystemInstanceDescription {
  export function isa(o: any): o is SystemInstanceDescription {
    return __isa(o, "SystemInstanceDescription");
  }
}

/**
 * <p>An object that filters a system instance search.
 *          Multiple filters function as OR criteria in the search. For example a search that includes a GREENGRASS_GROUP_NAME and a
 *          STATUS filter searches for system instances in the specified Greengrass group that have the specified status.</p>
 */
export interface SystemInstanceFilter {
  __type?: "SystemInstanceFilter";
  /**
   * <p>The name of the search filter field.</p>
   */
  name?: SystemInstanceFilterName | string;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search. </p>
   */
  value?: Array<string>;
}

export namespace SystemInstanceFilter {
  export function isa(o: any): o is SystemInstanceFilter {
    return __isa(o, "SystemInstanceFilter");
  }
}

export enum SystemInstanceFilterName {
  GREENGRASS_GROUP_NAME = "GREENGRASS_GROUP_NAME",
  STATUS = "STATUS",
  SYSTEM_TEMPLATE_ID = "SYSTEM_TEMPLATE_ID"
}

/**
 * <p>An object that contains summary information about a system instance.</p>
 */
export interface SystemInstanceSummary {
  __type?: "SystemInstanceSummary";
  /**
   * <p>The ARN of the system instance.</p>
   */
  arn?: string;

  /**
   * <p>The date when the system instance was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The ID of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupName?: string;

  /**
   * <p>The version of the Greengrass group where the system instance is deployed.</p>
   */
  greengrassGroupVersionId?: string;

  /**
   * <p>The ID of the system instance.</p>
   */
  id?: string;

  /**
   * <p>The status of the system instance.</p>
   */
  status?: SystemInstanceDeploymentStatus | string;

  /**
   * <p>The target of the system instance.</p>
   */
  target?: DeploymentTarget | string;

  /**
   * <p>
   *
   *          The date and time when the system instance was last updated.</p>
   */
  updatedAt?: Date;
}

export namespace SystemInstanceSummary {
  export function isa(o: any): o is SystemInstanceSummary {
    return __isa(o, "SystemInstanceSummary");
  }
}

/**
 * <p>An object that contains a system's definition document and summary information.</p>
 */
export interface SystemTemplateDescription {
  __type?: "SystemTemplateDescription";
  /**
   * <p>The definition document of a system.</p>
   */
  definition?: DefinitionDocument;

  /**
   * <p>An object that contains summary information about a system.</p>
   */
  summary?: SystemTemplateSummary;

  /**
   * <p>The namespace version against which the system was validated. Use this value in your system instance.</p>
   */
  validatedNamespaceVersion?: number;
}

export namespace SystemTemplateDescription {
  export function isa(o: any): o is SystemTemplateDescription {
    return __isa(o, "SystemTemplateDescription");
  }
}

/**
 * <p>An object that filters a system search.</p>
 */
export interface SystemTemplateFilter {
  __type?: "SystemTemplateFilter";
  /**
   * <p>The name of the system search filter field.</p>
   */
  name: SystemTemplateFilterName | string | undefined;

  /**
   * <p>An array of string values for the search filter field. Multiple values function as AND criteria in the search.</p>
   */
  value: Array<string> | undefined;
}

export namespace SystemTemplateFilter {
  export function isa(o: any): o is SystemTemplateFilter {
    return __isa(o, "SystemTemplateFilter");
  }
}

export enum SystemTemplateFilterName {
  FLOW_TEMPLATE_ID = "FLOW_TEMPLATE_ID"
}

/**
 * <p>An object that contains information about a system.</p>
 */
export interface SystemTemplateSummary {
  __type?: "SystemTemplateSummary";
  /**
   * <p>The ARN of the system.</p>
   */
  arn?: string;

  /**
   * <p>The date when the system was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The ID of the system.</p>
   */
  id?: string;

  /**
   * <p>The revision number of the system.</p>
   */
  revisionNumber?: number;
}

export namespace SystemTemplateSummary {
  export function isa(o: any): o is SystemTemplateSummary {
    return __isa(o, "SystemTemplateSummary");
  }
}
