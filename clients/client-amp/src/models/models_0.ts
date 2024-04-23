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
   * @public
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace in which to create the alert manager definition.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The alert manager definition data.
   */
  data: Uint8Array | undefined;

  /**
   * @public
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
   * @public
   * Status code of this definition.
   */
  statusCode: AlertManagerDefinitionStatusCode | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * @public
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
   * @public
   * Identifier of the resource affected.
   */
  resourceId: string | undefined;

  /**
   * @public
   * Type of the resource affected.
   */
  resourceType: string | undefined;

  /**
   * @public
   * Service Quotas requirement to identify originating service.
   */
  serviceCode: string | undefined;

  /**
   * @public
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
   * @public
   * Service Quotas requirement to identify originating service.
   */
  serviceCode?: string;

  /**
   * @public
   * Service Quotas requirement to identify originating quota.
   */
  quotaCode?: string;

  /**
   * @public
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
   * @public
   * The field name.
   */
  name: string | undefined;

  /**
   * @public
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
   * @public
   * Reason the request failed validation.
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace in which to delete the alert manager definition.
   */
  workspaceId: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;

  /**
   * @public
   * The alert manager definition.
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * The time when the alert manager definition was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The ID of the workspace in which to update the alert manager definition.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The alert manager definition data.
   */
  data: Uint8Array | undefined;

  /**
   * @public
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
   * @public
   * The status of alert manager definition.
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * @public
 * Represents the input of a GetDefaultScraperConfiguration operation.
 */
export interface GetDefaultScraperConfigurationRequest {}

/**
 * @public
 * Represents the output of a GetDefaultScraperConfiguration operation.
 */
export interface GetDefaultScraperConfigurationResponse {
  /**
   * @public
   * The default configuration.
   */
  configuration: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * The ARN of the resource.
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * The list of tags assigned to the resource.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * A representation of an AMP destination.
 */
export interface AmpConfiguration {
  /**
   * @public
   * The ARN of an AMP workspace.
   */
  workspaceArn: string | undefined;
}

/**
 * @public
 * A representation of a destination that a scraper can produce metrics to.
 */
export type Destination = Destination.AmpConfigurationMember | Destination.$UnknownMember;

/**
 * @public
 */
export namespace Destination {
  /**
   * @public
   * A representation of an AMP destination.
   */
  export interface AmpConfigurationMember {
    ampConfiguration: AmpConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ampConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ampConfiguration: (value: AmpConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Destination, visitor: Visitor<T>): T => {
    if (value.ampConfiguration !== undefined) return visitor.ampConfiguration(value.ampConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * A representation of a Prometheus configuration file.
 */
export type ScrapeConfiguration = ScrapeConfiguration.ConfigurationBlobMember | ScrapeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ScrapeConfiguration {
  /**
   * @public
   * Binary data representing a Prometheus configuration file.
   */
  export interface ConfigurationBlobMember {
    configurationBlob: Uint8Array;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    configurationBlob?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    configurationBlob: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ScrapeConfiguration, visitor: Visitor<T>): T => {
    if (value.configurationBlob !== undefined) return visitor.configurationBlob(value.configurationBlob);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * A representation of an EKS source.
 */
export interface EksConfiguration {
  /**
   * @public
   * The ARN of an EKS cluster.
   */
  clusterArn: string | undefined;

  /**
   * @public
   * A list of security group IDs specified for VPC configuration.
   */
  securityGroupIds?: string[];

  /**
   * @public
   * A list of subnet IDs specified for VPC configuration.
   */
  subnetIds: string[] | undefined;
}

/**
 * @public
 * A representation of a source that a scraper can discover and collect metrics from.
 */
export type Source = Source.EksConfigurationMember | Source.$UnknownMember;

/**
 * @public
 */
export namespace Source {
  /**
   * @public
   * A representation of an EKS source.
   */
  export interface EksConfigurationMember {
    eksConfiguration: EksConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    eksConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    eksConfiguration: (value: EksConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Source, visitor: Visitor<T>): T => {
    if (value.eksConfiguration !== undefined) return visitor.eksConfiguration(value.eksConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * Represents the input of a CreateScraper operation.
 */
export interface CreateScraperRequest {
  /**
   * @public
   * An optional user-assigned alias for this scraper. This alias is for user reference and does not need to be unique.
   */
  alias?: string;

  /**
   * @public
   * The configuration used to create the scraper.
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * @public
   * The source that the scraper will be discovering and collecting metrics from.
   */
  source: Source | undefined;

  /**
   * @public
   * The destination that the scraper will be producing metrics to.
   */
  destination: Destination | undefined;

  /**
   * @public
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;

  /**
   * @public
   * Optional, user-provided tags for this scraper.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ScraperStatusCode = {
  /**
   * Scraper has been created and is usable.
   */
  ACTIVE: "ACTIVE",
  /**
   * Scraper is being created. Deletion is disallowed until status is ACTIVE.
   */
  CREATING: "CREATING",
  /**
   * Scraper creation failed.
   */
  CREATION_FAILED: "CREATION_FAILED",
  /**
   * Scraper is being deleted. Deletions are allowed only when status is ACTIVE.
   */
  DELETING: "DELETING",
  /**
   * Scraper deletion failed.
   */
  DELETION_FAILED: "DELETION_FAILED",
} as const;

/**
 * @public
 */
export type ScraperStatusCode = (typeof ScraperStatusCode)[keyof typeof ScraperStatusCode];

/**
 * @public
 * Represents the status of a scraper.
 */
export interface ScraperStatus {
  /**
   * @public
   * Status code of this scraper.
   */
  statusCode: ScraperStatusCode | undefined;
}

/**
 * @public
 * Represents the output of a CreateScraper operation.
 */
export interface CreateScraperResponse {
  /**
   * @public
   * The generated ID of the scraper that was just created.
   */
  scraperId: string | undefined;

  /**
   * @public
   * The ARN of the scraper that was just created.
   */
  arn: string | undefined;

  /**
   * @public
   * The status of the scraper that was just created (usually CREATING).
   */
  status: ScraperStatus | undefined;

  /**
   * @public
   * The tags of this scraper.
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * Represents the input of a DeleteScraper operation.
 */
export interface DeleteScraperRequest {
  /**
   * @public
   * The ID of the scraper to delete.
   */
  scraperId: string | undefined;

  /**
   * @public
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}

/**
 * @public
 * Represents the output of a DeleteScraper operation.
 */
export interface DeleteScraperResponse {
  /**
   * @public
   * The ID of the scraper that was deleted.
   */
  scraperId: string | undefined;

  /**
   * @public
   * The status of the scraper that is being deleted.
   */
  status: ScraperStatus | undefined;
}

/**
 * @public
 * Represents the input of a DescribeScraper operation.
 */
export interface DescribeScraperRequest {
  /**
   * @public
   * The IDs of the scraper to describe.
   */
  scraperId: string | undefined;
}

/**
 * @public
 * Represents the properties of a scraper.
 */
export interface ScraperDescription {
  /**
   * @public
   * Alias of this scraper.
   */
  alias?: string;

  /**
   * @public
   * Unique string identifying this scraper.
   */
  scraperId: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of this scraper.
   */
  arn: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to dsicover, collect, and produce metrics on your behalf.
   */
  roleArn: string | undefined;

  /**
   * @public
   * The status of this scraper.
   */
  status: ScraperStatus | undefined;

  /**
   * @public
   * The time when the scraper was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * The time when the scraper was last modified.
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * The tags of this scraper.
   */
  tags?: Record<string, string>;

  /**
   * @public
   * The reason for failure if any.
   */
  statusReason?: string;

  /**
   * @public
   * The configuration used to create the scraper.
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * @public
   * The source that the scraper is discovering and collecting metrics from.
   */
  source: Source | undefined;

  /**
   * @public
   * The destination that the scraper is producing metrics to.
   */
  destination: Destination | undefined;
}

/**
 * @public
 * Represents the output of a DescribeScraper operation.
 */
export interface DescribeScraperResponse {
  /**
   * @public
   * The properties of the selected scrapers.
   */
  scraper: ScraperDescription | undefined;
}

/**
 * @public
 * Represents the input of a ListScrapers operation.
 */
export interface ListScrapersRequest {
  /**
   * @public
   * A list of scraper filters.
   */
  filters?: Record<string, string[]>;

  /**
   * @public
   * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListScrapers request.
   */
  nextToken?: string;

  /**
   * @public
   * Maximum results to return in response (default=100, maximum=1000).
   */
  maxResults?: number;
}

/**
 * @public
 * Represents a summary of the properties of a scraper.
 */
export interface ScraperSummary {
  /**
   * @public
   * Alias of this scraper.
   */
  alias?: string;

  /**
   * @public
   * Unique string identifying this scraper.
   */
  scraperId: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of this scraper.
   */
  arn: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to dsicover, collect, and produce metrics on your behalf.
   */
  roleArn: string | undefined;

  /**
   * @public
   * The status of this scraper.
   */
  status: ScraperStatus | undefined;

  /**
   * @public
   * The time when the scraper was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * The time when the scraper was last modified.
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * The tags of this scraper.
   */
  tags?: Record<string, string>;

  /**
   * @public
   * The reason for failure if any.
   */
  statusReason?: string;

  /**
   * @public
   * The source that the scraper is discovering and collecting metrics from.
   */
  source: Source | undefined;

  /**
   * @public
   * The destination that the scraper is producing metrics to.
   */
  destination: Destination | undefined;
}

/**
 * @public
 * Represents the output of a ListScrapers operation.
 */
export interface ListScrapersResponse {
  /**
   * @public
   * The list of scrapers, filtered down if a set of filters was provided in the request.
   */
  scrapers: ScraperSummary[] | undefined;

  /**
   * @public
   * Pagination token to use when requesting the next page in this list.
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * The ARN of the resource.
   */
  resourceArn: string | undefined;

  /**
   * @public
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
   * @public
   * The ARN of the resource.
   */
  resourceArn: string | undefined;

  /**
   * @public
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
   * @public
   * An optional user-assigned alias for this workspace. This alias is for user reference and does not need to be unique.
   */
  alias?: string;

  /**
   * @public
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;

  /**
   * @public
   * Optional, user-provided tags for this workspace.
   */
  tags?: Record<string, string>;

  /**
   * @public
   * Optional, customer managed KMS key used to encrypt data for this workspace
   */
  kmsKeyArn?: string;
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
   * @public
   * Status code of this workspace.
   */
  statusCode: WorkspaceStatusCode | undefined;
}

/**
 * @public
 * Represents the output of a CreateWorkspace operation.
 */
export interface CreateWorkspaceResponse {
  /**
   * @public
   * The generated ID of the workspace that was just created.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The ARN of the workspace that was just created.
   */
  arn: string | undefined;

  /**
   * @public
   * The status of the workspace that was just created (usually CREATING).
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * The tags of this workspace.
   */
  tags?: Record<string, string>;

  /**
   * @public
   * Customer managed KMS key ARN for this workspace
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * Represents the input of a DeleteWorkspace operation.
 */
export interface DeleteWorkspaceRequest {
  /**
   * @public
   * The ID of the workspace to delete.
   */
  workspaceId: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * Unique string identifying this workspace.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * Alias of this workspace.
   */
  alias?: string;

  /**
   * @public
   * The Amazon Resource Name (ARN) of this workspace.
   */
  arn: string | undefined;

  /**
   * @public
   * The status of this workspace.
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * Prometheus endpoint URI.
   */
  prometheusEndpoint?: string;

  /**
   * @public
   * The time when the workspace was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * The tags of this workspace.
   */
  tags?: Record<string, string>;

  /**
   * @public
   * The customer managed KMS key of this workspace.
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * Represents the output of a DescribeWorkspace operation.
 */
export interface DescribeWorkspaceResponse {
  /**
   * @public
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
   * @public
   * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListWorkspaces request.
   */
  nextToken?: string;

  /**
   * @public
   * Optional filter for workspace alias. Only the workspaces with aliases that begin with this value will be returned.
   */
  alias?: string;

  /**
   * @public
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
   * @public
   * Unique string identifying this workspace.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * Alias of this workspace.
   */
  alias?: string;

  /**
   * @public
   * The AmazonResourceName of this workspace.
   */
  arn: string | undefined;

  /**
   * @public
   * The status of this workspace.
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * The time when the workspace was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * The tags of this workspace.
   */
  tags?: Record<string, string>;

  /**
   * @public
   * Customer managed KMS key ARN for this workspace
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * Represents the output of a ListWorkspaces operation.
 */
export interface ListWorkspacesResponse {
  /**
   * @public
   * The list of existing workspaces, including those undergoing creation or deletion.
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The ARN of the CW log group to which the vended log data will be published.
   */
  logGroupArn: string | undefined;

  /**
   * @public
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
   * @public
   * Status code of the logging configuration.
   */
  statusCode: LoggingConfigurationStatusCode | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The status of the logging configuration.
   */
  status: LoggingConfigurationStatus | undefined;

  /**
   * @public
   * The workspace where the logging configuration exists.
   */
  workspace: string | undefined;

  /**
   * @public
   * The ARN of the CW log group to which the vended log data will be published.
   */
  logGroupArn: string | undefined;

  /**
   * @public
   * The time when the logging configuration was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The ID of the workspace to vend logs to.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The ARN of the CW log group to which the vended log data will be published.
   */
  logGroupArn: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The ID of the workspace in which to create the rule group namespace.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
   * The namespace data that define the rule groups.
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;

  /**
   * @public
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
   * @public
   * Status code of this namespace.
   */
  statusCode: RuleGroupsNamespaceStatusCode | undefined;

  /**
   * @public
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
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * @public
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace to delete rule group definition.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace to describe.
   */
  workspaceId: string | undefined;

  /**
   * @public
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
   * @public
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
   * The rule groups namespace data.
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * The time when the rule groups namespace was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * The time when the rule groups namespace was modified.
   */
  modifiedAt: Date | undefined;

  /**
   * @public
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
   * @public
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
   * @public
   * The ID of the workspace.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * Optional filter for rule groups namespace name. Only the rule groups namespace that begin with this value will be returned.
   */
  name?: string;

  /**
   * @public
   * Pagination token to request the next page in a paginated list. This token is obtained from the output of the previous ListRuleGroupsNamespaces request.
   */
  nextToken?: string;

  /**
   * @public
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
   * @public
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
   * The time when the rule groups namespace was created.
   */
  createdAt: Date | undefined;

  /**
   * @public
   * The time when the rule groups namespace was modified.
   */
  modifiedAt: Date | undefined;

  /**
   * @public
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
   * @public
   * The list of the selected rule groups namespaces.
   */
  ruleGroupsNamespaces: RuleGroupsNamespaceSummary[] | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace in which to update the rule group namespace.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
   * The namespace data that define the rule groups.
   */
  data: Uint8Array | undefined;

  /**
   * @public
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
   * @public
   * The rule groups namespace name.
   */
  name: string | undefined;

  /**
   * @public
   * The Amazon Resource Name (ARN) of this rule groups namespace.
   */
  arn: string | undefined;

  /**
   * @public
   * The status of rule groups namespace.
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
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
   * @public
   * The ID of the workspace being updated.
   */
  workspaceId: string | undefined;

  /**
   * @public
   * The new alias of the workspace.
   */
  alias?: string;

  /**
   * @public
   * Optional, unique, case-sensitive, user-provided identifier to ensure the idempotency of the request.
   */
  clientToken?: string;
}
