// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AmpServiceException as __BaseException } from "./AmpServiceException";

/**
 * @public
 * User does not have sufficient access to perform this action.
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * Updating or deleting a resource can cause an inconsistent state.
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * Type of the resource affected.
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const AlertManagerDefinitionStatusCode = {
  /**
   * Definition has been created/updated. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Definition is being created. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Definition creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Definition is being deleting. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Definition update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Definition is being updated. Update/Deletion is disallowed until definition is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AlertManagerDefinitionStatusCode =
  (typeof AlertManagerDefinitionStatusCode)[keyof typeof AlertManagerDefinitionStatusCode];

/**
 * @public
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

/**
 * @public
 * Represents the output of a CreateAlertManagerDefinition operation.
 */
export interface CreateAlertManagerDefinitionResponse {
  /**
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * @public
 * Unexpected error during processing of request.
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * Advice to clients on when the call can be safely retried.
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * Request references a resource which does not exist.
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * Type of the resource affected.
   */
  resourceType: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * Request would cause a service quota to be exceeded.
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
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
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * Request was denied due to request throttling.
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
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
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
  UNKNOWN_OPERATION: "UNKNOWN_OPERATION",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * The input fails to satisfy the constraints specified by an AWS service.
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * Reason the request failed validation.
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
   * The field that caused the error, if applicable. If more than one field caused the error, pick one and elaborate in the message.
   */
  fieldList?: ValidationExceptionField[];

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
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
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

/**
 * @public
 * Represents the input of a DescribeAlertManagerDefinition operation.
 */
export interface DescribeAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace to describe.
   */
  workspaceId: string | undefined;
}

/**
 * @public
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

/**
 * @public
 * Represents the output of a DescribeAlertManagerDefinition operation.
 */
export interface DescribeAlertManagerDefinitionResponse {
  /**
   * The properties of the selected workspace's alert manager definition.
   */
  alertManagerDefinition: AlertManagerDefinitionDescription | undefined;
}

/**
 * @public
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

/**
 * @public
 * Represents the output of a PutAlertManagerDefinition operation.
 */
export interface PutAlertManagerDefinitionResponse {
  /**
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource.
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags assigned to the resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource.
   */
  resourceArn: string | undefined;

  /**
   * The list of tags assigned to the resource.
   */
  tags: Record<string, string> | undefined;
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
   * The ARN of the resource.
   */
  resourceArn: string | undefined;

  /**
   * One or more tag keys
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const WorkspaceStatusCode = {
  /**
   * Workspace has been created and is usable.
   */
  ACTIVE: "ACTIVE",
  /**
   * Workspace is being created. Deletion is disallowed until status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Workspace creation failed. Refer to WorkspaceStatus.failureReason for more details.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Workspace is being deleted. Deletions are allowed only when status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Workspace is being updated. Updates are allowed only when status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type WorkspaceStatusCode = (typeof WorkspaceStatusCode)[keyof typeof WorkspaceStatusCode];

/**
 * @public
 * Represents the status of a workspace.
 */
export interface WorkspaceStatus {
  /**
   * Status code of this workspace.
   */
  statusCode: WorkspaceStatusCode | string | undefined;
}

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
 * Represents the input of a DescribeWorkspace operation.
 */
export interface DescribeWorkspaceRequest {
  /**
   * The ID of the workspace to describe.
   */
  workspaceId: string | undefined;
}

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
 * Represents the output of a DescribeWorkspace operation.
 */
export interface DescribeWorkspaceResponse {
  /**
   * The properties of the selected workspace.
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
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

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
 * Represents the input of a CreateLoggingConfiguration operation.
 */
export interface CreateLoggingConfigurationRequest {
  /**
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the CW log group to which the vended log data will be published.
   */
  logGroupArn: string | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const LoggingConfigurationStatusCode = {
  /**
   * Logging configuration has been created/updated. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Logging configuration is being created. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Logging configuration creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Logging configuration is being deleting. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Logging configuration update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Logging configuration is being updated. Update/Deletion is disallowed until logging configuration is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type LoggingConfigurationStatusCode =
  (typeof LoggingConfigurationStatusCode)[keyof typeof LoggingConfigurationStatusCode];

/**
 * @public
 * Represents the status of a logging configuration.
 */
export interface LoggingConfigurationStatus {
  /**
   * Status code of the logging configuration.
   */
  statusCode: LoggingConfigurationStatusCode | string | undefined;

  /**
   * The reason for failure if any.
   */
  statusReason?: string;
}

/**
 * @public
 * Represents the output of a CreateLoggingConfiguration operation.
 */
export interface CreateLoggingConfigurationResponse {
  /**
   * The status of the logging configuration.
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * @public
 * Represents the input of a DeleteLoggingConfiguration operation.
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

/**
 * @public
 * Represents the input of a DescribeLoggingConfiguration operation.
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * Represents the properties of a logging configuration metadata.
 */
export interface LoggingConfigurationMetadata {
  /**
   * The status of the logging configuration.
   */
  status: LoggingConfigurationStatus | undefined;

  /**
   * The workspace where the logging configuration exists.
   */
  workspace: string | undefined;

  /**
   * The ARN of the CW log group to which the vended log data will be published.
   */
  logGroupArn: string | undefined;

  /**
   * The time when the logging configuration was created.
   */
  createdAt: Date | undefined;

  /**
   * The time when the logging configuration was modified.
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 * Represents the output of a DescribeLoggingConfiguration operation.
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * Metadata object containing information about the logging configuration of a workspace.
   */
  loggingConfiguration: LoggingConfigurationMetadata | undefined;
}

/**
 * @public
 * Represents the input of an UpdateLoggingConfiguration operation.
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the CW log group to which the vended log data will be published.
   */
  logGroupArn: string | undefined;

  /**
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

/**
 * @public
 * Represents the output of an UpdateLoggingConfiguration operation.
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * The status of the logging configuration.
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const RuleGroupsNamespaceStatusCode = {
  /**
   * Namespace has been created/updated. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  ACTIVE: "ACTIVE",
  /**
   * Namespace is being created. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Namespace creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Namespace is being deleting. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Namespace update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Namespace is being updated. Update/Deletion is disallowed until namespace is ACTIVE and workspace status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type RuleGroupsNamespaceStatusCode =
  (typeof RuleGroupsNamespaceStatusCode)[keyof typeof RuleGroupsNamespaceStatusCode];

/**
 * @public
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

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
 * Represents the output of a DescribeRuleGroupsNamespace operation.
 */
export interface DescribeRuleGroupsNamespaceResponse {
  /**
   * The selected rule groups namespace.
   */
  ruleGroupsNamespace: RuleGroupsNamespaceDescription | undefined;
}

/**
 * @public
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

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
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

/**
 * @public
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
  tags?: Record<string, string>;
}

/**
 * @public
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
