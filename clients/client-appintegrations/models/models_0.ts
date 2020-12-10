import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>The event filter.</p>
 */
export interface EventFilter {
  /**
   * <p>The source of the events.</p>
   */
  Source: string | undefined;
}

export namespace EventFilter {
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
   * <p>The Eventbridge bus.</p>
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
  export const filterSensitiveLog = (obj: CreateEventIntegrationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the specified name already exists.</p>
 */
export interface DuplicateResourceException extends __SmithyException, $MetadataBearer {
  name: "DuplicateResourceException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateResourceException {
  export const filterSensitiveLog = (obj: DuplicateResourceException): any => ({
    ...obj,
  });
}

/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export interface InternalServiceError extends __SmithyException, $MetadataBearer {
  name: "InternalServiceError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServiceError {
  export const filterSensitiveLog = (obj: InternalServiceError): any => ({
    ...obj,
  });
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The allowed quota for the resource has been exceeded.</p>
 */
export interface ResourceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceQuotaExceededException {
  export const filterSensitiveLog = (obj: ResourceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The throttling limit has been exceeded.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface DeleteEventIntegrationRequest {
  /**
   * <p>The name of the event integration.</p>
   */
  Name: string | undefined;
}

export namespace DeleteEventIntegrationRequest {
  export const filterSensitiveLog = (obj: DeleteEventIntegrationRequest): any => ({
    ...obj,
  });
}

export interface DeleteEventIntegrationResponse {}

export namespace DeleteEventIntegrationResponse {
  export const filterSensitiveLog = (obj: DeleteEventIntegrationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
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
   * <p>The Eventbridge bus.</p>
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
  export const filterSensitiveLog = (obj: GetEventIntegrationResponse): any => ({
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
  export const filterSensitiveLog = (obj: ListEventIntegrationAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>The event integration association.</p>
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
   * <p>The name of the Eventbridge rule.</p>
   */
  EventBridgeRuleName?: string;

  /**
   * <p>The metadata associated with the client.</p>
   */
  ClientAssociationMetadata?: { [key: string]: string };
}

export namespace EventIntegrationAssociation {
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
  export const filterSensitiveLog = (obj: ListEventIntegrationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon AppIntegrations APIs are in preview release and are subject to change.</p>
 *          <p>The event integration.</p>
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
   * <p>The Amazon Eventbridge bus for the event integration.</p>
   */
  EventBridgeBus?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace EventIntegration {
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
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
  export const filterSensitiveLog = (obj: UpdateEventIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateEventIntegrationResponse {}

export namespace UpdateEventIntegrationResponse {
  export const filterSensitiveLog = (obj: UpdateEventIntegrationResponse): any => ({
    ...obj,
  });
}
