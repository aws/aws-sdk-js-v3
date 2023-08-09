// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppIntegrationsServiceException as __BaseException } from "./AppIntegrationsServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The configuration for what files should be pulled from the source.</p>
 */
export interface FileConfiguration {
  /**
   * @public
   * <p>Identifiers for the source folders to pull all files from recursively.</p>
   */
  Folders: string[] | undefined;

  /**
   * @public
   * <p>Restrictions for what files should be pulled from the source.</p>
   */
  Filters?: Record<string, string[]>;
}

/**
 * @public
 * <p>The name of the data and how often it should be pulled from the source.</p>
 */
export interface ScheduleConfiguration {
  /**
   * @public
   * <p>The start date for objects to import in the first flow run as an Unix/epoch timestamp in
   *       milliseconds or in ISO-8601 format.</p>
   */
  FirstExecutionFrom?: string;

  /**
   * @public
   * <p>The name of the object to pull from the data source.</p>
   */
  Object?: string;

  /**
   * @public
   * <p>How often the data should be pulled from data source.</p>
   */
  ScheduleExpression: string | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationRequest {
  /**
   * @public
   * <p>The name of the DataIntegration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the DataIntegration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The KMS key for the DataIntegration.</p>
   */
  KmsKey: string | undefined;

  /**
   * @public
   * <p>The URI of the data source.</p>
   */
  SourceURI: string | undefined;

  /**
   * @public
   * <p>The name of the data and how often it should be pulled from the source.</p>
   */
  ScheduleConfig: ScheduleConfiguration | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The configuration for what files should be pulled from the source.</p>
   */
  FileConfiguration?: FileConfiguration;

  /**
   * @public
   * <p>The configuration for what data should be pulled from the source.</p>
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>>;
}

/**
 * @public
 */
export interface CreateDataIntegrationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN)</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A unique identifier.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the DataIntegration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The KMS key for the DataIntegration.</p>
   */
  KmsKey?: string;

  /**
   * @public
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;

  /**
   * @public
   * <p>The name of the data and how often it should be pulled from the source.</p>
   */
  ScheduleConfiguration?: ScheduleConfiguration;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The configuration for what files should be pulled from the source.</p>
   */
  FileConfiguration?: FileConfiguration;

  /**
   * @public
   * <p>The configuration for what data should be pulled from the source.</p>
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>>;
}

/**
 * @public
 * <p>A resource with the specified name already exists.</p>
 */
export class DuplicateResourceException extends __BaseException {
  readonly name: "DuplicateResourceException" = "DuplicateResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * @public
 * <p>The request is not valid. </p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The allowed quota for the resource has been exceeded.</p>
 */
export class ResourceQuotaExceededException extends __BaseException {
  readonly name: "ResourceQuotaExceededException" = "ResourceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The throttling limit has been exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 * <p>The event filter.</p>
 */
export interface EventFilter {
  /**
   * @public
   * <p>The source of the events.</p>
   */
  Source: string | undefined;
}

/**
 * @public
 */
export interface CreateEventIntegrationRequest {
  /**
   * @public
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the event integration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The event filter.</p>
   */
  EventFilter: EventFilter | undefined;

  /**
   * @public
   * <p>The EventBridge bus.</p>
   */
  EventBridgeBus: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateEventIntegrationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the event integration. </p>
   */
  EventIntegrationArn?: string;
}

/**
 * @public
 */
export interface DeleteDataIntegrationRequest {
  /**
   * @public
   * <p>A unique identifier for the DataIntegration.</p>
   */
  DataIntegrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataIntegrationResponse {}

/**
 * @public
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * @public
 */
export interface DeleteEventIntegrationRequest {
  /**
   * @public
   * <p>The name of the event integration.</p>
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
export interface GetDataIntegrationRequest {
  /**
   * @public
   * <p>A unique identifier.</p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataIntegrationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the DataIntegration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>A unique identifier.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The KMS key for the DataIntegration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The KMS key for the DataIntegration.</p>
   */
  KmsKey?: string;

  /**
   * @public
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;

  /**
   * @public
   * <p>The name of the data and how often it should be pulled from the source.</p>
   */
  ScheduleConfiguration?: ScheduleConfiguration;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration for what files should be pulled from the source.</p>
   */
  FileConfiguration?: FileConfiguration;

  /**
   * @public
   * <p>The configuration for what data should be pulled from the source.</p>
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>>;
}

/**
 * @public
 */
export interface GetEventIntegrationRequest {
  /**
   * @public
   * <p>The name of the event integration. </p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetEventIntegrationResponse {
  /**
   * @public
   * <p>The name of the event integration. </p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the event integration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the event integration.</p>
   */
  EventIntegrationArn?: string;

  /**
   * @public
   * <p>The EventBridge bus.</p>
   */
  EventBridgeBus?: string;

  /**
   * @public
   * <p>The event filter.</p>
   */
  EventFilter?: EventFilter;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDataIntegrationAssociationsRequest {
  /**
   * @public
   * <p>A unique identifier for the DataIntegration.</p>
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information about the DataIntegration association.</p>
 */
export interface DataIntegrationAssociationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DataIntegration association.</p>
   */
  DataIntegrationAssociationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DataIntegration.</p>
   */
  DataIntegrationArn?: string;

  /**
   * @public
   * <p>The identifier for the client that is associated with the DataIntegration
   *       association.</p>
   */
  ClientId?: string;
}

/**
 * @public
 */
export interface ListDataIntegrationAssociationsResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) and unique ID of the DataIntegration association.</p>
   */
  DataIntegrationAssociations?: DataIntegrationAssociationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDataIntegrationsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information about the DataIntegration.</p>
 */
export interface DataIntegrationSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DataIntegration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;
}

/**
 * @public
 */
export interface ListDataIntegrationsResponse {
  /**
   * @public
   * <p>The DataIntegrations associated with this account.</p>
   */
  DataIntegrations?: DataIntegrationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventIntegrationAssociationsRequest {
  /**
   * @public
   * <p>The name of the event integration. </p>
   */
  EventIntegrationName: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The event integration association.</p>
 */
export interface EventIntegrationAssociation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the event integration association.</p>
   */
  EventIntegrationAssociationArn?: string;

  /**
   * @public
   * <p>The identifier for the event integration association.</p>
   */
  EventIntegrationAssociationId?: string;

  /**
   * @public
   * <p>The name of the event integration.</p>
   */
  EventIntegrationName?: string;

  /**
   * @public
   * <p>The identifier for the client that is associated with the event integration.</p>
   */
  ClientId?: string;

  /**
   * @public
   * <p>The name of the EventBridge rule.</p>
   */
  EventBridgeRuleName?: string;

  /**
   * @public
   * <p>The metadata associated with the client.</p>
   */
  ClientAssociationMetadata?: Record<string, string>;
}

/**
 * @public
 */
export interface ListEventIntegrationAssociationsResponse {
  /**
   * @public
   * <p>The event integration associations.</p>
   */
  EventIntegrationAssociations?: EventIntegrationAssociation[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventIntegrationsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The event integration.</p>
 */
export interface EventIntegration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the event integration.</p>
   */
  EventIntegrationArn?: string;

  /**
   * @public
   * <p>The name of the event integration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The event integration description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The event integration filter.</p>
   */
  EventFilter?: EventFilter;

  /**
   * @public
   * <p>The Amazon EventBridge bus for the event integration.</p>
   */
  EventBridgeBus?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListEventIntegrationsResponse {
  /**
   * @public
   * <p>The event integrations.</p>
   */
  EventIntegrations?: EventIntegration[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
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
export interface UpdateDataIntegrationRequest {
  /**
   * @public
   * <p>A unique identifier for the DataIntegration.</p>
   */
  Identifier: string | undefined;

  /**
   * @public
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the DataIntegration.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateDataIntegrationResponse {}

/**
 * @public
 */
export interface UpdateEventIntegrationRequest {
  /**
   * @public
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the event inegration.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateEventIntegrationResponse {}
