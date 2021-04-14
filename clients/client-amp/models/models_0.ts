import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

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

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
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
}

export namespace CreateWorkspaceRequest {
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
}

export namespace CreateWorkspaceResponse {
  export const filterSensitiveLog = (obj: CreateWorkspaceResponse): any => ({
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

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
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

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
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

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
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

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
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
  export const filterSensitiveLog = (obj: DeleteWorkspaceRequest): any => ({
    ...obj,
  });
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

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
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
}

export namespace WorkspaceDescription {
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
}

export namespace WorkspaceSummary {
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
  export const filterSensitiveLog = (obj: ListWorkspacesResponse): any => ({
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
  export const filterSensitiveLog = (obj: UpdateWorkspaceAliasRequest): any => ({
    ...obj,
  });
}
