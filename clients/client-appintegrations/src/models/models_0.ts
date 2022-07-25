// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AppIntegrationsServiceException as __BaseException } from "./AppIntegrationsServiceException";

/**
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
 * <p>The name of the data and how often it should be pulled from the source.</p>
 */
export interface ScheduleConfiguration {
  /**
   * <p>The start date for objects to import in the first flow run.</p>
   */
  FirstExecutionFrom?: string;

  /**
   * <p>The name of the object to pull from the data source.</p>
   */
  Object?: string;

  /**
   * <p>How often the data should be pulled from data source.</p>
   */
  ScheduleExpression?: string;
}

export interface CreateDataIntegrationRequest {
  /**
   * <p>The name of the DataIntegration.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the DataIntegration.</p>
   */
  Description?: string;

  /**
   * <p>The KMS key for the DataIntegration.</p>
   */
  KmsKey?: string;

  /**
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   */
  ScheduleConfig?: ScheduleConfiguration;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export interface CreateDataIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN)</p>
   */
  Arn?: string;

  /**
   * <p>A unique identifier.</p>
   */
  Id?: string;

  /**
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * <p>A description of the DataIntegration.</p>
   */
  Description?: string;

  /**
   * <p>The KMS key for the DataIntegration.</p>
   */
  KmsKey?: string;

  /**
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   */
  ScheduleConfiguration?: ScheduleConfiguration;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

/**
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
 * <p>The event filter.</p>
 */
export interface EventFilter {
  /**
   * <p>The source of the events.</p>
   */
  Source: string | undefined;
}

export interface CreateEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the event integration.</p>
   */
  Description?: string;

  /**
   * <p>The event filter.</p>
   */
  EventFilter: EventFilter | undefined;

  /**
   * <p>The EventBridge bus.</p>
   */
  EventBridgeBus: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateEventIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration. </p>
   */
  EventIntegrationArn?: string;
}

export interface DeleteDataIntegrationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   */
  DataIntegrationIdentifier: string | undefined;
}

export interface DeleteDataIntegrationResponse {}

/**
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

export interface DeleteEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;
}

export interface DeleteEventIntegrationResponse {}

export interface GetDataIntegrationRequest {
  /**
   * <p>A unique identifier.</p>
   */
  Identifier: string | undefined;
}

export interface GetDataIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the DataIntegration.</p>
   */
  Arn?: string;

  /**
   * <p>A unique identifier.</p>
   */
  Id?: string;

  /**
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * <p>The KMS key for the DataIntegration.</p>
   */
  Description?: string;

  /**
   * <p>The KMS key for the DataIntegration.</p>
   */
  KmsKey?: string;

  /**
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;

  /**
   * <p>The name of the data and how often it should be pulled from the source.</p>
   */
  ScheduleConfiguration?: ScheduleConfiguration;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetEventIntegrationRequest {
  /**
   * <p>The name of the event integration. </p>
   */
  Name: string | undefined;
}

export interface GetEventIntegrationResponse {
  /**
   * <p>The name of the event integration. </p>
   */
  Name?: string;

  /**
   * <p>The description of the event integration.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the event integration.</p>
   */
  EventIntegrationArn?: string;

  /**
   * <p>The EventBridge bus.</p>
   */
  EventBridgeBus?: string;

  /**
   * <p>The event filter.</p>
   */
  EventFilter?: EventFilter;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListDataIntegrationAssociationsRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Summary information about the DataIntegration association.</p>
 */
export interface DataIntegrationAssociationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the DataIntegration association.</p>
   */
  DataIntegrationAssociationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN)of the DataIntegration.</p>
   */
  DataIntegrationArn?: string;

  /**
   * <p>The identifier for teh client that is associated with the DataIntegration
   *       association.</p>
   */
  ClientId?: string;
}

export interface ListDataIntegrationAssociationsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) and unique ID of the DataIntegration association.</p>
   */
  DataIntegrationAssociations?: DataIntegrationAssociationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListDataIntegrationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Summary information about the DataIntegration.</p>
 */
export interface DataIntegrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the DataIntegration.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * <p>The URI of the data source.</p>
   */
  SourceURI?: string;
}

export interface ListDataIntegrationsResponse {
  /**
   * <p>The DataIntegrations associated with this account.</p>
   */
  DataIntegrations?: DataIntegrationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListEventIntegrationAssociationsRequest {
  /**
   * <p>The name of the event integration. </p>
   */
  EventIntegrationName: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The event integration association.</p>
 */
export interface EventIntegrationAssociation {
  /**
   * <p>The Amazon Resource Name (ARN) for the event integration association.</p>
   */
  EventIntegrationAssociationArn?: string;

  /**
   * <p>The identifier for the event integration association.</p>
   */
  EventIntegrationAssociationId?: string;

  /**
   * <p>The name of the event integration.</p>
   */
  EventIntegrationName?: string;

  /**
   * <p>The identifier for the client that is associated with the event integration.</p>
   */
  ClientId?: string;

  /**
   * <p>The name of the EventBridge rule.</p>
   */
  EventBridgeRuleName?: string;

  /**
   * <p>The metadata associated with the client.</p>
   */
  ClientAssociationMetadata?: Record<string, string>;
}

export interface ListEventIntegrationAssociationsResponse {
  /**
   * <p>The event integration associations.</p>
   */
  EventIntegrationAssociations?: EventIntegrationAssociation[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListEventIntegrationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * <p>The event integration.</p>
 */
export interface EventIntegration {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration.</p>
   */
  EventIntegrationArn?: string;

  /**
   * <p>The name of the event integration.</p>
   */
  Name?: string;

  /**
   * <p>The event integration description.</p>
   */
  Description?: string;

  /**
   * <p>The event integration filter.</p>
   */
  EventFilter?: EventFilter;

  /**
   * <p>The Amazon EventBridge bus for the event integration.</p>
   */
  EventBridgeBus?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface ListEventIntegrationsResponse {
  /**
   * <p>The event integrations.</p>
   */
  EventIntegrations?: EventIntegration[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. </p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDataIntegrationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   */
  Identifier: string | undefined;

  /**
   * <p>The name of the DataIntegration.</p>
   */
  Name?: string;

  /**
   * <p>A description of the DataIntegration.</p>
   */
  Description?: string;
}

export interface UpdateDataIntegrationResponse {}

export interface UpdateEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the event inegration.</p>
   */
  Description?: string;
}

export interface UpdateEventIntegrationResponse {}

/**
 * @internal
 */
export const ScheduleConfigurationFilterSensitiveLog = (obj: ScheduleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataIntegrationRequestFilterSensitiveLog = (obj: CreateDataIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataIntegrationResponseFilterSensitiveLog = (obj: CreateDataIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterFilterSensitiveLog = (obj: EventFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventIntegrationRequestFilterSensitiveLog = (obj: CreateEventIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventIntegrationResponseFilterSensitiveLog = (obj: CreateEventIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataIntegrationRequestFilterSensitiveLog = (obj: DeleteDataIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDataIntegrationResponseFilterSensitiveLog = (obj: DeleteDataIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventIntegrationRequestFilterSensitiveLog = (obj: DeleteEventIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventIntegrationResponseFilterSensitiveLog = (obj: DeleteEventIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataIntegrationRequestFilterSensitiveLog = (obj: GetDataIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDataIntegrationResponseFilterSensitiveLog = (obj: GetDataIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventIntegrationRequestFilterSensitiveLog = (obj: GetEventIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEventIntegrationResponseFilterSensitiveLog = (obj: GetEventIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataIntegrationAssociationsRequestFilterSensitiveLog = (
  obj: ListDataIntegrationAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataIntegrationAssociationSummaryFilterSensitiveLog = (obj: DataIntegrationAssociationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataIntegrationAssociationsResponseFilterSensitiveLog = (
  obj: ListDataIntegrationAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataIntegrationsRequestFilterSensitiveLog = (obj: ListDataIntegrationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataIntegrationSummaryFilterSensitiveLog = (obj: DataIntegrationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDataIntegrationsResponseFilterSensitiveLog = (obj: ListDataIntegrationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventIntegrationAssociationsRequestFilterSensitiveLog = (
  obj: ListEventIntegrationAssociationsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventIntegrationAssociationFilterSensitiveLog = (obj: EventIntegrationAssociation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventIntegrationAssociationsResponseFilterSensitiveLog = (
  obj: ListEventIntegrationAssociationsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventIntegrationsRequestFilterSensitiveLog = (obj: ListEventIntegrationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventIntegrationFilterSensitiveLog = (obj: EventIntegration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventIntegrationsResponseFilterSensitiveLog = (obj: ListEventIntegrationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataIntegrationRequestFilterSensitiveLog = (obj: UpdateDataIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDataIntegrationResponseFilterSensitiveLog = (obj: UpdateDataIntegrationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventIntegrationRequestFilterSensitiveLog = (obj: UpdateEventIntegrationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEventIntegrationResponseFilterSensitiveLog = (obj: UpdateEventIntegrationResponse): any => ({
  ...obj,
});
