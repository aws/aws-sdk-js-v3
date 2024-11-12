// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppIntegrationsServiceException as __BaseException } from "./AppIntegrationsServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The external URL source for the application.</p>
 * @public
 */
export interface ExternalUrlConfig {
  /**
   * <p>The URL to access the application.</p>
   * @public
   */
  AccessUrl: string | undefined;

  /**
   * <p>Additional URLs to allow list if different than the access URL.</p>
   * @public
   */
  ApprovedOrigins?: string[] | undefined;
}

/**
 * <p>The configuration for where the application should be loaded from.</p>
 * @public
 */
export interface ApplicationSourceConfig {
  /**
   * <p>The external URL source for the application.</p>
   * @public
   */
  ExternalUrlConfig?: ExternalUrlConfig | undefined;
}

/**
 * <p>The configuration of an event that the application publishes.</p>
 * @public
 */
export interface Publication {
  /**
   * <p>The name of the publication.</p>
   * @public
   */
  Event: string | undefined;

  /**
   * <p>The JSON schema of the publication event.</p>
   * @public
   */
  Schema: string | undefined;

  /**
   * <p>The description of the publication.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * <p>The configuration of an event that the application subscribes.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The name of the subscription.</p>
   * @public
   */
  Event: string | undefined;

  /**
   * <p>The description of the subscription.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The namespace of the application.</p>
   * @public
   */
  Namespace: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for where the application should be loaded from.</p>
   * @public
   */
  ApplicationSourceConfig: ApplicationSourceConfig | undefined;

  /**
   * @deprecated
   *
   * <p>The events that the application subscribes.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * @deprecated
   *
   * <p>The events that the application publishes.</p>
   * @public
   */
  Publications?: Publication[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration of events or requests that the application has access to.</p>
   * @public
   */
  Permissions?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier for the Application.</p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>A resource with the specified name already exists.</p>
 * @public
 */
export class DuplicateResourceException extends __BaseException {
  readonly name: "DuplicateResourceException" = "DuplicateResourceException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateResourceException, __BaseException>) {
    super({
      name: "DuplicateResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateResourceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request is not valid. </p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The allowed quota for the resource has been exceeded.</p>
 * @public
 */
export class ResourceQuotaExceededException extends __BaseException {
  readonly name: "ResourceQuotaExceededException" = "ResourceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceQuotaExceededException, __BaseException>) {
    super({
      name: "ResourceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The throttling limit has been exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation is not supported.</p>
 * @public
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The configuration for what files should be pulled from the source.</p>
 * @public
 */
export interface FileConfiguration {
  /**
   * <p>Identifiers for the source folders to pull all files from recursively.</p>
   * @public
   */
  Folders: string[] | undefined;

  /**
   * <p>Restrictions for what files should be pulled from the source.</p>
   * @public
   */
  Filters?: Record<string, string[]> | undefined;
}

/**
 * <p>The name of the data and how often it should be pulled from the source.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>The start date for objects to import in the first flow run as an Unix/epoch timestamp in
   *       milliseconds or in ISO-8601 format.</p>
   * @public
   */
  FirstExecutionFrom?: string | undefined;

  /**
   * <p>The name of the object to pull from the data source.</p>
   * @public
   */
  Object?: string | undefined;

  /**
   * <p>How often the data should be pulled from data source.</p>
   * @public
   */
  ScheduleExpression: string | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationRequest {
  /**
   * <p>The name of the DataIntegration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the DataIntegration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The KMS key ARN for the DataIntegration.</p>
   * @public
   */
  KmsKey: string | undefined;

  /**
   * <p>The URI of the data source.</p>
   * @public
   */
  SourceURI?: string | undefined;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   * @public
   */
  ScheduleConfig?: ScheduleConfiguration | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration for what files should be pulled from the source.</p>
   * @public
   */
  FileConfiguration?: FileConfiguration | undefined;

  /**
   * <p>The configuration for what data should be pulled from the source.</p>
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN)</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the DataIntegration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the DataIntegration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The KMS key ARN for the DataIntegration.</p>
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * <p>The URI of the data source.</p>
   * @public
   */
  SourceURI?: string | undefined;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration for what files should be pulled from the source.</p>
   * @public
   */
  FileConfiguration?: FileConfiguration | undefined;

  /**
   * <p>The configuration for what data should be pulled from the source.</p>
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionMode = {
  ON_DEMAND: "ON_DEMAND",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type ExecutionMode = (typeof ExecutionMode)[keyof typeof ExecutionMode];

/**
 * <p>The start and end time for data pull from the source.</p>
 * @public
 */
export interface OnDemandConfiguration {
  /**
   * <p>The start time for data pull from the source as an Unix/epoch string in
   *       milliseconds</p>
   * @public
   */
  StartTime: string | undefined;

  /**
   * <p>The end time for data pull from the source as an Unix/epoch string in
   *       milliseconds</p>
   * @public
   */
  EndTime?: string | undefined;
}

/**
 * <p>The configuration for how the files should be pulled from the source.</p>
 * @public
 */
export interface ExecutionConfiguration {
  /**
   * <p>The mode for data import/export execution.</p>
   * @public
   */
  ExecutionMode: ExecutionMode | undefined;

  /**
   * <p>The start and end time for data pull from the source.</p>
   * @public
   */
  OnDemandConfiguration?: OnDemandConfiguration | undefined;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationAssociationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   * @public
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * <p>The identifier for the client that is associated with the DataIntegration
   *       association.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The configuration for what data should be pulled from the source.</p>
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;

  /**
   * <p>The URI of the data destination.</p>
   * @public
   */
  DestinationURI?: string | undefined;

  /**
   * <p>The mapping of metadata to be extracted from the data.</p>
   * @public
   */
  ClientAssociationMetadata?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The configuration for how the files should be pulled from the source.</p>
   * @public
   */
  ExecutionConfiguration?: ExecutionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationAssociationResponse {
  /**
   * <p>A unique identifier. for the DataIntegrationAssociation.</p>
   * @public
   */
  DataIntegrationAssociationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the DataIntegration.</p>
   * @public
   */
  DataIntegrationArn?: string | undefined;
}

/**
 * <p>The specified resource was not found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The event filter.</p>
 * @public
 */
export interface EventFilter {
  /**
   * <p>The source of the events.</p>
   * @public
   */
  Source: string | undefined;
}

/**
 * @public
 */
export interface CreateEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the event integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The event filter.</p>
   * @public
   */
  EventFilter: EventFilter | undefined;

  /**
   * <p>The EventBridge bus.</p>
   * @public
   */
  EventBridgeBus: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration. </p>
   * @public
   */
  EventIntegrationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteDataIntegrationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   * @public
   */
  DataIntegrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataIntegrationResponse {}

/**
 * @public
 */
export interface DeleteEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventIntegrationResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier for the Application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The namespace of the application.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for where the application should be loaded from.</p>
   * @public
   */
  ApplicationSourceConfig?: ApplicationSourceConfig | undefined;

  /**
   * @deprecated
   *
   * <p>The events that the application subscribes.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * @deprecated
   *
   * <p>The events that the application publishes.</p>
   * @public
   */
  Publications?: Publication[] | undefined;

  /**
   * <p>The created time of the Application.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The last modified time of the Application.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration of events or requests that the application has access to.</p>
   * @public
   */
  Permissions?: string[] | undefined;
}

/**
 * @public
 */
export interface GetDataIntegrationRequest {
  /**
   * <p>A unique identifier.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the DataIntegration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the DataIntegration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The KMS key ARN for the DataIntegration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The KMS key ARN for the DataIntegration.</p>
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * <p>The URI of the data source.</p>
   * @public
   */
  SourceURI?: string | undefined;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration for what files should be pulled from the source.</p>
   * @public
   */
  FileConfiguration?: FileConfiguration | undefined;

  /**
   * <p>The configuration for what data should be pulled from the source.</p>
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * @public
 */
export interface GetEventIntegrationRequest {
  /**
   * <p>The name of the event integration. </p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetEventIntegrationResponse {
  /**
   * <p>The name of the event integration. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the event integration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the event integration.</p>
   * @public
   */
  EventIntegrationArn?: string | undefined;

  /**
   * <p>The EventBridge bus.</p>
   * @public
   */
  EventBridgeBus?: string | undefined;

  /**
   * <p>The event filter.</p>
   * @public
   */
  EventFilter?: EventFilter | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssociationsRequest {
  /**
   * <p>A unique identifier for the Application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information about the Application Association.</p>
 * @public
 */
export interface ApplicationAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application Association.</p>
   * @public
   */
  ApplicationAssociationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The identifier for the client that is associated with the Application Association.</p>
   * @public
   */
  ClientId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssociationsResponse {
  /**
   * <p>List of Application Associations for the Application.</p>
   * @public
   */
  ApplicationAssociations?: ApplicationAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information about the Application.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A unique identifier for the Application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The namespace of the application.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The time when the application was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The time when the application was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The Applications associated with this account.</p>
   * @public
   */
  Applications?: ApplicationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationAssociationsRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   * @public
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * <p>The execution status of the last job.</p>
 * @public
 */
export interface LastExecutionStatus {
  /**
   * <p>The job status enum string.</p>
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;

  /**
   * <p>The status message of a job.</p>
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * <p>Summary information about the DataIntegration association.</p>
 * @public
 */
export interface DataIntegrationAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the DataIntegration association.</p>
   * @public
   */
  DataIntegrationAssociationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DataIntegration.</p>
   * @public
   */
  DataIntegrationArn?: string | undefined;

  /**
   * <p>The identifier for the client that is associated with the DataIntegration
   *       association.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The URI of the data destination.</p>
   * @public
   */
  DestinationURI?: string | undefined;

  /**
   * <p>The execution status of the last job.</p>
   * @public
   */
  LastExecutionStatus?: LastExecutionStatus | undefined;

  /**
   * <p>The configuration for how the files should be pulled from the source.</p>
   * @public
   */
  ExecutionConfiguration?: ExecutionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationAssociationsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) and unique ID of the DataIntegration association.</p>
   * @public
   */
  DataIntegrationAssociations?: DataIntegrationAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information about the DataIntegration.</p>
 * @public
 */
export interface DataIntegrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the DataIntegration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the DataIntegration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The URI of the data source.</p>
   * @public
   */
  SourceURI?: string | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationsResponse {
  /**
   * <p>The DataIntegrations associated with this account.</p>
   * @public
   */
  DataIntegrations?: DataIntegrationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationAssociationsRequest {
  /**
   * <p>The name of the event integration. </p>
   * @public
   */
  EventIntegrationName: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The event integration association.</p>
 * @public
 */
export interface EventIntegrationAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) for the event integration association.</p>
   * @public
   */
  EventIntegrationAssociationArn?: string | undefined;

  /**
   * <p>The identifier for the event integration association.</p>
   * @public
   */
  EventIntegrationAssociationId?: string | undefined;

  /**
   * <p>The name of the event integration.</p>
   * @public
   */
  EventIntegrationName?: string | undefined;

  /**
   * <p>The identifier for the client that is associated with the event integration.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>The name of the EventBridge rule.</p>
   * @public
   */
  EventBridgeRuleName?: string | undefined;

  /**
   * <p>The metadata associated with the client.</p>
   * @public
   */
  ClientAssociationMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationAssociationsResponse {
  /**
   * <p>The event integration associations.</p>
   * @public
   */
  EventIntegrationAssociations?: EventIntegrationAssociation[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The event integration.</p>
 * @public
 */
export interface EventIntegration {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration.</p>
   * @public
   */
  EventIntegrationArn?: string | undefined;

  /**
   * <p>The name of the event integration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The event integration description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The event integration filter.</p>
   * @public
   */
  EventFilter?: EventFilter | undefined;

  /**
   * <p>The Amazon EventBridge bus for the event integration.</p>
   * @public
   */
  EventBridgeBus?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationsResponse {
  /**
   * <p>The event integrations.</p>
   * @public
   */
  EventIntegrations?: EventIntegration[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
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
export interface UpdateApplicationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Application.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration for where the application should be loaded from.</p>
   * @public
   */
  ApplicationSourceConfig?: ApplicationSourceConfig | undefined;

  /**
   * @deprecated
   *
   * <p>The events that the application subscribes.</p>
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * @deprecated
   *
   * <p>The events that the application publishes.</p>
   * @public
   */
  Publications?: Publication[] | undefined;

  /**
   * <p>The configuration of events or requests that the application has access to.</p>
   * @public
   */
  Permissions?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * @public
 */
export interface UpdateDataIntegrationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>The name of the DataIntegration.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the DataIntegration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataIntegrationResponse {}

/**
 * @public
 */
export interface UpdateDataIntegrationAssociationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   * @public
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * <p>A unique identifier. of the DataIntegrationAssociation resource</p>
   * @public
   */
  DataIntegrationAssociationIdentifier: string | undefined;

  /**
   * <p>The configuration for how the files should be pulled from the source.</p>
   * @public
   */
  ExecutionConfiguration: ExecutionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataIntegrationAssociationResponse {}

/**
 * @public
 */
export interface UpdateEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the event integration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventIntegrationResponse {}
