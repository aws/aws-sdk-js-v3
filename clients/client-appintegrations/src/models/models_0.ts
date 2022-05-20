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

export namespace ScheduleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScheduleConfiguration): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateDataIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataIntegrationRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateDataIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDataIntegrationResponse): any => ({
    ...obj,
  });
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

export namespace EventFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventFilter): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateEventIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventIntegrationRequest): any => ({
    ...obj,
  });
}

export interface CreateEventIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the event integration. </p>
   */
  EventIntegrationArn?: string;
}

export namespace CreateEventIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEventIntegrationResponse): any => ({
    ...obj,
  });
}

export interface DeleteDataIntegrationRequest {
  /**
   * <p>A unique identifier for the DataIntegration.</p>
   */
  DataIntegrationIdentifier: string | undefined;
}

export namespace DeleteDataIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataIntegrationRequest): any => ({
    ...obj,
  });
}

export interface DeleteDataIntegrationResponse {}

export namespace DeleteDataIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDataIntegrationResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteEventIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventIntegrationRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventIntegrationResponse {}

export namespace DeleteEventIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEventIntegrationResponse): any => ({
    ...obj,
  });
}

export interface GetDataIntegrationRequest {
  /**
   * <p>A unique identifier.</p>
   */
  Identifier: string | undefined;
}

export namespace GetDataIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataIntegrationRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace GetDataIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataIntegrationResponse): any => ({
    ...obj,
  });
}

export interface GetEventIntegrationRequest {
  /**
   * <p>The name of the event integration. </p>
   */
  Name: string | undefined;
}

export namespace GetEventIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventIntegrationRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace GetEventIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEventIntegrationResponse): any => ({
    ...obj,
  });
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

export namespace ListDataIntegrationAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataIntegrationAssociationsRequest): any => ({
    ...obj,
  });
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

export namespace DataIntegrationAssociationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataIntegrationAssociationSummary): any => ({
    ...obj,
  });
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

export namespace ListDataIntegrationAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataIntegrationAssociationsResponse): any => ({
    ...obj,
  });
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

export namespace ListDataIntegrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataIntegrationsRequest): any => ({
    ...obj,
  });
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

export namespace DataIntegrationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataIntegrationSummary): any => ({
    ...obj,
  });
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

export namespace ListDataIntegrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDataIntegrationsResponse): any => ({
    ...obj,
  });
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

export namespace ListEventIntegrationAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventIntegrationAssociationsRequest): any => ({
    ...obj,
  });
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
  ClientAssociationMetadata?: { [key: string]: string };
}

export namespace EventIntegrationAssociation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventIntegrationAssociation): any => ({
    ...obj,
  });
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

export namespace ListEventIntegrationAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventIntegrationAssociationsResponse): any => ({
    ...obj,
  });
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

export namespace ListEventIntegrationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventIntegrationsRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace EventIntegration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EventIntegration): any => ({
    ...obj,
  });
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

export namespace ListEventIntegrationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEventIntegrationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
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
   * <p>Information about the tags.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. </p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
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

export namespace UpdateDataIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateDataIntegrationResponse {}

export namespace UpdateDataIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDataIntegrationResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateEventIntegrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventIntegrationResponse {}

export namespace UpdateEventIntegrationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateEventIntegrationResponse): any => ({
    ...obj,
  });
}
