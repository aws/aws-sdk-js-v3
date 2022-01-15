import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * User does not have sufficient access to perform this action.
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * Description of the error.
   */
  message: string | undefined;
}

/**
 * Updating or deleting a resource can cause an inconsistent state.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * Description of the error.
   */
  message: string | undefined;

  /**
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * Type of the resource affected.
   */
  resourceType: string | undefined;
}

/**
 * Represents the input of a CreateAlertManagerDefinition operation.
 */
export interface CreateAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace in which to create the alert manager definition.
   */
  workspaceId: string | undefined;

  /**
   * The alert manager definition data.
   */
  data: Uint8Array | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace CreateAlertManagerDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlertManagerDefinitionRequest): any => ({
    ...obj,
  });
}

export enum AlertManagerDefinitionStatusCode {
  /**
   * Definition has been created/updated. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE = "ACTIVE",
  /**
   * Definition is being created. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  CREATING = "CREATING",
  /**
   * Definition creation failed.
   */
  CREATION_FAILED = "CREATION_FAILED",
  /**
   * Definition is being deleting. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  DELETING = "DELETING",
  /**
   * Definition update failed.
   */
  UPDATE_FAILED = "UPDATE_FAILED",
  /**
   * Definition is being updated. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING = "UPDATING",
}

/**
 * Represents the status of a definition.
 */
export interface AlertManagerDefinitionStatus {
  /**
   * Status code of this definition.
   */
  statusCode: AlertManagerDefinitionStatusCode | string | undefined;

  /**
   * The reason for failure if any.
   */
  statusReason?: string;
}

export namespace AlertManagerDefinitionStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlertManagerDefinitionStatus): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a CreateAlertManagerDefinition operation.
 */
export interface CreateAlertManagerDefinitionResponse {
  /**
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;
}

export namespace CreateAlertManagerDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAlertManagerDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * Unexpected error during processing of request.
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  $retryable: {};
  /**
   * Description of the error.
   */
  message: string | undefined;

  /**
   * Advice to clients on when the call can be safely retried.
   */
  retryAfterSeconds?: number;
}

/**
 * Request references a resource which does not exist.
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * Description of the error.
   */
  message: string | undefined;

  /**
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * Type of the resource affected.
   */
  resourceType: string | undefined;
}

/**
 * Request would cause a service quota to be exceeded.
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  /**
   * Description of the error.
   */
  message: string | undefined;

  /**
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * Type of the resource affected.
   */
  resourceType: string | undefined;

  /**
   * Service Quotas requirement to identify originating service.
   */
  serviceCode: string | undefined;

  /**
   * Service Quotas requirement to identify originating quota.
   */
  quotaCode: string | undefined;
}

/**
 * Request was denied due to request throttling.
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  $retryable: {};
  /**
   * Description of the error.
   */
  message: string | undefined;

  /**
   * Service Quotas requirement to identify originating service.
   */
  serviceCode?: string;

  /**
   * Service Quotas requirement to identify originating quota.
   */
  quotaCode?: string;

  /**
   * Advice to clients on when the call can be safely retried.
   */
  retryAfterSeconds?: number;
}

/**
 * Stores information about a field passed inside a request that resulted in an exception.
 */
export interface ValidationExceptionField {
  /**
   * The field name.
   */
  name: string | undefined;

  /**
   * Message describing why the field failed validation.
   */
  message: string | undefined;
}

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

/**
 * The input fails to satisfy the constraints specified by an AWS service.
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * Description of the error.
   */
  message: string | undefined;

  /**
   * Reason the request failed validation.
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * The field that caused the error, if applicable. If more than one field caused the error, pick one and elaborate in the message.
   */
  fieldList?: ValidationExceptionField[];
}

/**
 * Represents the input of a DeleteAlertManagerDefinition operation.
 */
export interface DeleteAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace in which to delete the alert manager definition.
   */
  workspaceId: string | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace DeleteAlertManagerDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAlertManagerDefinitionRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a DescribeAlertManagerDefinition operation.
 */
export interface DescribeAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace to describe.
   */
  workspaceId: string | undefined;
}

export namespace DescribeAlertManagerDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlertManagerDefinitionRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the properties of an alert manager definition.
 */
export interface AlertManagerDefinitionDescription {
  /**
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;

  /**
   * The alert manager definition.
   */
  data: Uint8Array | undefined;

  /**
   * The time when the alert manager definition was created.
   */
  createdAt: Date | undefined;

  /**
   * The time when the alert manager definition was modified.
   */
  modifiedAt: Date | undefined;
}

export namespace AlertManagerDefinitionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AlertManagerDefinitionDescription): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a DescribeAlertManagerDefinition operation.
 */
export interface DescribeAlertManagerDefinitionResponse {
  /**
   * The properties of the selected workspace's alert manager definition.
   */
  alertManagerDefinition: AlertManagerDefinitionDescription | undefined;
}

export namespace DescribeAlertManagerDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAlertManagerDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a PutAlertManagerDefinition operation.
 */
export interface PutAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace in which to update the alert manager definition.
   */
  workspaceId: string | undefined;

  /**
   * The alert manager definition data.
   */
  data: Uint8Array | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace PutAlertManagerDefinitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAlertManagerDefinitionRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a PutAlertManagerDefinition operation.
 */
export interface PutAlertManagerDefinitionResponse {
  /**
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;
}

export namespace PutAlertManagerDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAlertManagerDefinitionResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * The list of tags assigned to the resource.
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   */
  resourceArn: string | undefined;

  /**
   * The list of tags assigned to the resource.
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * The ARN of the resource.
   */
  resourceArn: string | undefined;

  /**
   * One or more tag keys
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a CreateWorkspace operation.
 */
export interface CreateWorkspaceRequest {
  /**
   * An optional user-assigned alias for this workspace. This alias is for user reference and does not need to be unique.
   */
  alias?: string;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;

  /**
   * Optional, user-provided tags for this workspace.
   */
  tags?: { [key: string]: string };
}

export namespace CreateWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspaceRequest): any => ({
    ...obj,
  });
}

export enum WorkspaceStatusCode {
  /**
   * Workspace has been created and is usable.
   */
  ACTIVE = "ACTIVE",
  /**
   * Workspace is being created. Deletion is disallowed until status is ACTIVE.
   */
  CREATING = "CREATING",
  /**
   * Workspace creation failed. Refer to WorkspaceStatus.failureReason for more details.
   */
  CREATION_FAILED = "CREATION_FAILED",
  /**
   * Workspace is being deleted. Deletions are allowed only when status is ACTIVE.
   */
  DELETING = "DELETING",
  /**
   * Workspace is being updated. Updates are allowed only when status is ACTIVE.
   */
  UPDATING = "UPDATING",
}

/**
 * Represents the status of a workspace.
 */
export interface WorkspaceStatus {
  /**
   * Status code of this workspace.
   */
  statusCode: WorkspaceStatusCode | string | undefined;
}

export namespace WorkspaceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceStatus): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a CreateWorkspace operation.
 */
export interface CreateWorkspaceResponse {
  /**
   * The generated ID of the workspace that was just created.
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the workspace that was just created.
   */
  arn: string | undefined;

  /**
   * The status of the workspace that was just created (usually CREATING).
   */
  status: WorkspaceStatus | undefined;

  /**
   * The tags of this workspace.
   */
  tags?: { [key: string]: string };
}

export namespace CreateWorkspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateWorkspaceResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a DeleteWorkspace operation.
 */
export interface DeleteWorkspaceRequest {
  /**
   * The ID of the workspace to delete.
   */
  workspaceId: string | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace DeleteWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkspaceRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a DescribeWorkspace operation.
 */
export interface DescribeWorkspaceRequest {
  /**
   * The ID of the workspace to describe.
   */
  workspaceId: string | undefined;
}

export namespace DescribeWorkspaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the properties of a workspace.
 */
export interface WorkspaceDescription {
  /**
   * Unique string identifying this workspace.
   */
  workspaceId: string | undefined;

  /**
   * Alias of this workspace.
   */
  alias?: string;

  /**
   * The Amazon Resource Name (ARN) of this workspace.
   */
  arn: string | undefined;

  /**
   * The status of this workspace.
   */
  status: WorkspaceStatus | undefined;

  /**
   * Prometheus endpoint URI.
   */
  prometheusEndpoint?: string;

  /**
   * The time when the workspace was created.
   */
  createdAt: Date | undefined;

  /**
   * The tags of this workspace.
   */
  tags?: { [key: string]: string };
}

export namespace WorkspaceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceDescription): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a DescribeWorkspace operation.
 */
export interface DescribeWorkspaceResponse {
  /**
   * The properties of the selected workspace.
   */
  workspace: WorkspaceDescription | undefined;
}

export namespace DescribeWorkspaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeWorkspaceResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a ListWorkspaces operation.
 */
export interface ListWorkspacesRequest {
  /**
   * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.
   */
  nextToken?: string;

  /**
   * Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.
   */
  alias?: string;

  /**
   * Maximum results to return in response (default=100, maximum=1000).
   */
  maxResults?: number;
}

export namespace ListWorkspacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkspacesRequest): any => ({
    ...obj,
  });
}

/**
 * Represents a summary of the properties of a workspace.
 */
export interface WorkspaceSummary {
  /**
   * Unique string identifying this workspace.
   */
  workspaceId: string | undefined;

  /**
   * Alias of this workspace.
   */
  alias?: string;

  /**
   * The AmazonResourceName of this workspace.
   */
  arn: string | undefined;

  /**
   * The status of this workspace.
   */
  status: WorkspaceStatus | undefined;

  /**
   * The time when the workspace was created.
   */
  createdAt: Date | undefined;

  /**
   * The tags of this workspace.
   */
  tags?: { [key: string]: string };
}

export namespace WorkspaceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WorkspaceSummary): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a ListWorkspaces operation.
 */
export interface ListWorkspacesResponse {
  /**
   * The list of existing workspaces, including those undergoing creation or deletion.
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * Pagination token to use when requesting the next page in this list.
   */
  nextToken?: string;
}

export namespace ListWorkspacesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkspacesResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a CreateRuleGroupsNamespace operation.
 */
export interface CreateRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace in which to create the rule group namespace.
   */
  workspaceId: string | undefined;

  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * The namespace data that define the rule groups.
   */
  data: Uint8Array | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;

  /**
   * Optional, user-provided tags for this rule groups namespace.
   */
  tags?: { [key: string]: string };
}

export namespace CreateRuleGroupsNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleGroupsNamespaceRequest): any => ({
    ...obj,
  });
}

export enum RuleGroupsNamespaceStatusCode {
  /**
   * Namespace has been created/updated. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE = "ACTIVE",
  /**
   * Namespace is being created. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  CREATING = "CREATING",
  /**
   * Namespace creation failed.
   */
  CREATION_FAILED = "CREATION_FAILED",
  /**
   * Namespace is being deleting. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  DELETING = "DELETING",
  /**
   * Namespace update failed.
   */
  UPDATE_FAILED = "UPDATE_FAILED",
  /**
   * Namespace is being updated. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING = "UPDATING",
}

/**
 * Represents the status of a namespace.
 */
export interface RuleGroupsNamespaceStatus {
  /**
   * Status code of this namespace.
   */
  statusCode: RuleGroupsNamespaceStatusCode | string | undefined;

  /**
   * The reason for failure if any.
   */
  statusReason?: string;
}

export namespace RuleGroupsNamespaceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupsNamespaceStatus): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a CreateRuleGroupsNamespace operation.
 */
export interface CreateRuleGroupsNamespaceResponse {
  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The tags of this rule groups namespace.
   */
  tags?: { [key: string]: string };
}

export namespace CreateRuleGroupsNamespaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRuleGroupsNamespaceResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a DeleteRuleGroupsNamespace operation.
 */
export interface DeleteRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace to delete rule group definition.
   */
  workspaceId: string | undefined;

  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace DeleteRuleGroupsNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRuleGroupsNamespaceRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a DescribeRuleGroupsNamespace operation.
 */
export interface DescribeRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace to describe.
   */
  workspaceId: string | undefined;

  /**
   * The rule groups namespace.
   */
  name: string | undefined;
}

export namespace DescribeRuleGroupsNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRuleGroupsNamespaceRequest): any => ({
    ...obj,
  });
}

/**
 * Represents a description of the rule groups namespace.
 */
export interface RuleGroupsNamespaceDescription {
  /**
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The rule groups namespace data.
   */
  data: Uint8Array | undefined;

  /**
   * The time when the rule groups namespace was created.
   */
  createdAt: Date | undefined;

  /**
   * The time when the rule groups namespace was modified.
   */
  modifiedAt: Date | undefined;

  /**
   * The tags of this rule groups namespace.
   */
  tags?: { [key: string]: string };
}

export namespace RuleGroupsNamespaceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupsNamespaceDescription): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a DescribeRuleGroupsNamespace operation.
 */
export interface DescribeRuleGroupsNamespaceResponse {
  /**
   * The selected rule groups namespace.
   */
  ruleGroupsNamespace: RuleGroupsNamespaceDescription | undefined;
}

export namespace DescribeRuleGroupsNamespaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRuleGroupsNamespaceResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a ListRuleGroupsNamespaces operation.
 */
export interface ListRuleGroupsNamespacesRequest {
  /**
   * The ID of the workspace.
   */
  workspaceId: string | undefined;

  /**
   * Optional filter for rule groups namespace name. Only the rule groups namespace that begin with this value will be returned.
   */
  name?: string;

  /**
   * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListRuleGroupsNamespaces request.
   */
  nextToken?: string;

  /**
   * Maximum results to return in response (default=100, maximum=1000).
   */
  maxResults?: number;
}

export namespace ListRuleGroupsNamespacesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRuleGroupsNamespacesRequest): any => ({
    ...obj,
  });
}

/**
 * Represents a summary of the rule groups namespace.
 */
export interface RuleGroupsNamespaceSummary {
  /**
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The time when the rule groups namespace was created.
   */
  createdAt: Date | undefined;

  /**
   * The time when the rule groups namespace was modified.
   */
  modifiedAt: Date | undefined;

  /**
   * The tags of this rule groups namespace.
   */
  tags?: { [key: string]: string };
}

export namespace RuleGroupsNamespaceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleGroupsNamespaceSummary): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a ListRuleGroupsNamespaces operation.
 */
export interface ListRuleGroupsNamespacesResponse {
  /**
   * The list of the selected rule groups namespaces.
   */
  ruleGroupsNamespaces: RuleGroupsNamespaceSummary[] | undefined;

  /**
   * Pagination token to use when requesting the next page in this list.
   */
  nextToken?: string;
}

export namespace ListRuleGroupsNamespacesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRuleGroupsNamespacesResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of a PutRuleGroupsNamespace operation.
 */
export interface PutRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace in which to update the rule group namespace.
   */
  workspaceId: string | undefined;

  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * The namespace data that define the rule groups.
   */
  data: Uint8Array | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace PutRuleGroupsNamespaceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRuleGroupsNamespaceRequest): any => ({
    ...obj,
  });
}

/**
 * Represents the output of a PutRuleGroupsNamespace operation.
 */
export interface PutRuleGroupsNamespaceResponse {
  /**
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The tags of this rule groups namespace.
   */
  tags?: { [key: string]: string };
}

export namespace PutRuleGroupsNamespaceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRuleGroupsNamespaceResponse): any => ({
    ...obj,
  });
}

/**
 * Represents the input of an UpdateWorkspaceAlias operation.
 */
export interface UpdateWorkspaceAliasRequest {
  /**
   * The ID of the workspace being updated.
   */
  workspaceId: string | undefined;

  /**
   * The new alias of the workspace.
   */
  alias?: string;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

export namespace UpdateWorkspaceAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkspaceAliasRequest): any => ({
    ...obj,
  });
}
