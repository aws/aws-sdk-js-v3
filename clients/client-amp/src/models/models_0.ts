// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AmpServiceException as __BaseException } from "./AmpServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * <p>The request would cause an inconsistent state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
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
 * <p>Represents the input of a <code>CreateAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface CreateAlertManagerDefinitionRequest {
  /**
   * <p>The ID of the workspace to add the alert manager definition to.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The alert manager definition to add. A base64-encoded version of the YAML alert
   *             manager definition file.</p>
   *          <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
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
 * <p>The status of the alert manager. </p>
 * @public
 */
export interface AlertManagerDefinitionStatus {
  /**
   * <p>The current status of the alert manager. </p>
   * @public
   */
  statusCode: AlertManagerDefinitionStatusCode | undefined;

  /**
   * <p>If there is a failure, the reason for the failure.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Represents the output of a <code>CreateAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface CreateAlertManagerDefinitionResponse {
  /**
   * <p>A structure that displays the current status of the alert manager definition.</p>
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * <p>An unexpected error occurred during the processing of the request.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
 * <p>The request references a resources that doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
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
 * <p>Completing the request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Identifier of the resource affected.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>Type of the resource affected.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * <p>Service quotas code for the originating service.</p>
   * @public
   */
  serviceCode: string | undefined;

  /**
   * <p>Service quotas code of the originating quota.</p>
   * @public
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
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>Service quotas code for the originating service.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>Service quotas code for the originating quota.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * <p>Advice to clients on when the call can be safely retried.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

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
 * <p>Information about a field passed into a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that caused an exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why the field caused an exception.</p>
   * @public
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>Reason the request failed validation.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The field that caused the error, if applicable.</p>
   * @public
   */
  fieldList?: ValidationExceptionField[] | undefined;

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
 * <p>Represents the input of a <code>DeleteAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface DeleteAlertManagerDefinitionRequest {
  /**
   * <p>The ID of the workspace to delete the alert manager definition from.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface DescribeAlertManagerDefinitionRequest {
  /**
   * <p>The ID of the workspace to retrieve the alert manager definition from.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>The details of an alert manager definition. It is the configuration for the
 *             alert manager, including information about receivers for routing alerts.</p>
 * @public
 */
export interface AlertManagerDefinitionDescription {
  /**
   * <p>A structure that displays the current status of the alert manager definition..</p>
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;

  /**
   * <p>The actual alert manager definition.</p>
   *          <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>The date and time that the alert manager definition was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the alert manager definition was most recently changed.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface DescribeAlertManagerDefinitionResponse {
  /**
   * <p>The alert manager definition.</p>
   * @public
   */
  alertManagerDefinition: AlertManagerDefinitionDescription | undefined;
}

/**
 * <p>Represents the input of a <code>PutAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface PutAlertManagerDefinitionRequest {
  /**
   * <p>The ID of the workspace to update the alert manager definition in.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The alert manager definition to use. A base64-encoded version of the YAML alert
   *             manager definition file.</p>
   *          <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>PutAlertManagerDefinition</code> operation.</p>
 * @public
 */
export interface PutAlertManagerDefinitionResponse {
  /**
   * <p>A structure that returns the current status of the alert manager definition.</p>
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * <p>Represents the input of a <code>GetDefaultScraperConfiguration</code> operation.</p>
 * @public
 */
export interface GetDefaultScraperConfigurationRequest {}

/**
 * <p>Represents the output of a <code>GetDefaultScraperConfiguration</code> operation.</p>
 * @public
 */
export interface GetDefaultScraperConfigurationResponse {
  /**
   * <p>The configuration file. Base 64 encoded.
   *             For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a>in the <i>Amazon Managed Service for Prometheus User
   *                     Guide</i>.</p>
   * @public
   */
  configuration: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to list tages for. Must be a workspace, scraper, or rule groups
   *             namespace resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The <code>AmpConfiguration</code> structure defines the Amazon Managed Service for Prometheus instance a scraper
 *             should send metrics to.</p>
 * @public
 */
export interface AmpConfiguration {
  /**
   * <p>ARN of the Amazon Managed Service for Prometheus workspace.</p>
   * @public
   */
  workspaceArn: string | undefined;
}

/**
 * <p>Where to send the metrics from a scraper.</p>
 * @public
 */
export type Destination = Destination.AmpConfigurationMember | Destination.$UnknownMember;

/**
 * @public
 */
export namespace Destination {
  /**
   * <p>The Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
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
 * <p>A scrape configuration for a scraper, base 64 encoded. For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a> in the <i>Amazon Managed Service for Prometheus User
 *                 Guide</i>.</p>
 * @public
 */
export type ScrapeConfiguration = ScrapeConfiguration.ConfigurationBlobMember | ScrapeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ScrapeConfiguration {
  /**
   * <p>The base 64 encoded scrape configuration file.</p>
   * @public
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
 * <p>The <code>EksConfiguration</code> structure describes the connection to the
 *             Amazon EKS cluster from which a scraper collects metrics.</p>
 * @public
 */
export interface EksConfiguration {
  /**
   * <p>ARN of the Amazon EKS cluster.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>A list of the security group IDs for the Amazon EKS cluster VPC configuration.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>A list of subnet IDs for the Amazon EKS cluster VPC configuration.</p>
   * @public
   */
  subnetIds: string[] | undefined;
}

/**
 * <p>The source of collected metrics for a scraper.</p>
 * @public
 */
export type Source = Source.EksConfigurationMember | Source.$UnknownMember;

/**
 * @public
 */
export namespace Source {
  /**
   * <p>The Amazon EKS cluster from which a scraper collects metrics.</p>
   * @public
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
 * <p>Represents the input of a <code>CreateScraper</code> operation.</p>
 * @public
 */
export interface CreateScraperRequest {
  /**
   * <p>(optional) An alias to associate with the scraper. This is for your use, and does not
   *             need to be unique.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The configuration file to use in the new scraper. For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a> in the <i>Amazon Managed Service for Prometheus User
   *                 Guide</i>.</p>
   * @public
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * <p>The Amazon EKS cluster from which the scraper will collect metrics.</p>
   * @public
   */
  source: Source | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
   */
  destination: Destination | undefined;

  /**
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the
   *             idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>(Optional) The list of tag keys and values to associate with the scraper.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
  /**
   * Scraper update failed.
   */
  UPDATE_FAILED: "UPDATE_FAILED",
  /**
   * Scraper is being updated. Deletion is disallowed until status is ACTIVE.
   */
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ScraperStatusCode = (typeof ScraperStatusCode)[keyof typeof ScraperStatusCode];

/**
 * <p>The <code>ScraperStatus</code> structure contains status information about the
 *             scraper.</p>
 * @public
 */
export interface ScraperStatus {
  /**
   * <p>The current status of the scraper.</p>
   * @public
   */
  statusCode: ScraperStatusCode | undefined;
}

/**
 * <p>Represents the output of a <code>CreateScraper</code> operation.</p>
 * @public
 */
export interface CreateScraperResponse {
  /**
   * <p>The ID of the new scraper.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new scraper.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A structure that displays the current status of the scraper.</p>
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the scraper.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteScraper</code> operation.</p>
 * @public
 */
export interface DeleteScraperRequest {
  /**
   * <p>The ID of the scraper to delete.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the
   *             idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DeleteScraper</code> operation.</p>
 * @public
 */
export interface DeleteScraperResponse {
  /**
   * <p>The ID of the scraper to delete.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The current status of the scraper.</p>
   * @public
   */
  status: ScraperStatus | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeScraper</code> operation.</p>
 * @public
 */
export interface DescribeScraperRequest {
  /**
   * <p>The ID of the scraper to describe.</p>
   * @public
   */
  scraperId: string | undefined;
}

/**
 * <p>The <code>ScraperDescription</code> structure contains the full details about one
 *             scraper in your account.</p>
 * @public
 */
export interface ScraperDescription {
  /**
   * <p>(Optional) A name associated with the scraper.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the scraper. For example, <code>s-example1-1234-abcd-5678-ef9012abcd34</code>.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scraper. For example,
   *             <code>arn:aws:aps:&lt;region&gt;:123456798012:scraper/s-example1-1234-abcd-5678-ef9012abcd34</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides
   *             permissions for the scraper to discover and collect metrics on your behalf.</p>
   *          <p>For example, <code>arn:aws:iam::123456789012:role/service-role/AmazonGrafanaServiceRole-12example</code>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A structure that contains the current status of the scraper.</p>
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * <p>The date and time that the scraper was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the scraper was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>(Optional) The list of tag keys and values associated with the scraper.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>If there is a failure, the reason for the failure.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The configuration in use by the scraper.</p>
   * @public
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * <p>The Amazon EKS cluster from which the scraper collects metrics.</p>
   * @public
   */
  source: Source | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.</p>
   * @public
   */
  destination: Destination | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeScraper</code> operation.</p>
 * @public
 */
export interface DescribeScraperResponse {
  /**
   * <p>Contains details about the scraper.</p>
   * @public
   */
  scraper: ScraperDescription | undefined;
}

/**
 * <p>Represents the input of a <code>ListScrapers</code> operation.</p>
 * @public
 */
export interface ListScrapersRequest {
  /**
   * <p>(Optional) A list of key-value pairs to filter the list of scrapers returned.
   *             Keys include <code>status</code>, <code>sourceArn</code>,
   *             <code>destinationArn</code>, and <code>alias</code>.</p>
   *          <p>Filters on the same key are <code>OR</code>'d together, and filters on different
   *             keys are <code>AND</code>'d together. For example,
   *             <code>status=ACTIVE&amp;status=CREATING&amp;alias=Test</code>, will return all
   *             scrapers that have the alias Test, and are either in status ACTIVE or CREATING.</p>
   *          <p>To find all active scrapers that are sending metrics to a specific Amazon Managed Service for Prometheus
   *             workspace, you would use the ARN of the workspace in a query:</p>
   *          <p>
   *             <code>status=ACTIVE&amp;destinationArn=arn:aws:aps:us-east-1:123456789012:workspace/ws-example1-1234-abcd-56ef-123456789012</code>
   *          </p>
   *          <p>If this is included, it filters the results to only the scrapers that match
   *             the filter.</p>
   * @public
   */
  filters?: Record<string, string[]> | undefined;

  /**
   * <p>(Optional) The token for the next set of
   *             items to return. (You received this token from a previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional) The maximum number of
   *             scrapers to return in one <code>ListScrapers</code> operation. The range is
   *             1-1000.</p>
   *          <p>If you omit this parameter, the default of 100 is used.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The <code>ScraperSummary</code> structure contains a summary of the details about one
 *             scraper in your account.</p>
 * @public
 */
export interface ScraperSummary {
  /**
   * <p>(Optional) A name associated with the scraper.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the scraper.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the scraper.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides
   *             permissions for the scraper to discover and collect metrics on your behalf.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A structure that contains the current status of the scraper.</p>
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * <p>The date and time that the scraper was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the scraper was last modified.</p>
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * <p>(Optional) The list of tag keys and values associated with the scraper.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>If there is a failure, the reason for the failure.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The Amazon EKS cluster from which the scraper collects metrics.</p>
   * @public
   */
  source: Source | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.</p>
   * @public
   */
  destination: Destination | undefined;
}

/**
 * <p>Represents the output of a <code>ListScrapers</code> operation.</p>
 * @public
 */
export interface ListScrapersResponse {
  /**
   * <p>A list of <code>ScraperSummary</code> structures giving information about scrapers
   *             in the account that match the filters provided.</p>
   * @public
   */
  scrapers: ScraperSummary[] | undefined;

  /**
   * <p>A token indicating that there are more
   *             results to retrieve. You can use this token as part of your next
   *             <code>ListScrapers</code> operation to retrieve those results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateScraperRequest {
  /**
   * <p>The ID of the scraper to update.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The new alias of the scraper.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>Contains the base-64 encoded YAML configuration for the scraper.</p>
   *          <note>
   *             <p>For more information about configuring a scraper, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html">Using an
   *                     Amazon Web Services managed collector</a> in the <i>Amazon Managed Service for Prometheus
   *                         User Guide</i>.</p>
   *          </note>
   * @public
   */
  scrapeConfiguration?: ScrapeConfiguration | undefined;

  /**
   * <p>The new Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateScraperResponse {
  /**
   * <p>The ID of the updated scraper.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated scraper.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A structure that displays the current status of the scraper.</p>
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the scraper.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource to apply tags to.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys and values to associate with the resource.</p>
   *          <p>Keys must not begin with <code>aws:</code>.</p>
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
   * <p>The ARN of the resource from which to remove a tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Represents the input of a <code>CreateWorkspace</code> operation.</p>
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * <p>An alias that you assign to this workspace to help you identify it. It does not need
   *             to be unique.</p>
   *          <p>Blank spaces at the beginning or end of the alias that you specify will be trimmed
   *             from the value used.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of tag keys and values to associate with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>(optional) The ARN for a customer managed KMS key to use for
   *             encrypting data within your workspace. For more information about using your
   *             own key in your workspace, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/encryption-at-rest-Amazon-Service-Prometheus.html">Encryption at rest</a> in the <i>Amazon Managed Service for Prometheus User
   *                     Guide</i>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
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
 * <p>The status of the workspace.</p>
 * @public
 */
export interface WorkspaceStatus {
  /**
   * <p>The current status of the workspace.</p>
   * @public
   */
  statusCode: WorkspaceStatusCode | undefined;
}

/**
 * <p>Represents the output of a <code>CreateWorkspace</code> operation.</p>
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * <p>The unique ID for the new workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN for the new workspace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the new workspace. Immediately after you create the workspace,
   *             the status is usually <code>CREATING</code>.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>(optional) If the workspace was created with a customer managed KMS
   *             key, the ARN for the key used.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteWorkspace</code> operation.</p>
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * <p>The ID of the workspace to delete.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeWorkspace</code> operation.</p>
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * <p>The ID of the workspace to describe.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>The full details about one Amazon Managed Service for Prometheus workspace in your account.</p>
 * @public
 */
export interface WorkspaceDescription {
  /**
   * <p>The unique ID for the workspace. For example,
   *             <code>ws-example1-1234-abcd-5678-ef90abcd1234</code>.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The alias that is assigned to this workspace to help identify it. It does not need
   *             to be unique.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ARN of the workspace. For example,
   *             <code>arn:aws:aps:&lt;region&gt;:123456789012:workspace/ws-example1-1234-abcd-5678-ef90abcd1234</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the workspace.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The Prometheus endpoint available for this workspace. For example,
   *             <code>https://aps-workspaces.&lt;region&gt;.amazonaws.com/workspaces/ws-example1-1234-abcd-5678-ef90abcd1234/api/v1/</code>.</p>
   * @public
   */
  prometheusEndpoint?: string | undefined;

  /**
   * <p>The date and time that the workspace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>(optional) If the workspace was created with a customer managed KMS
   *             key, the ARN for the key used.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeWorkspace</code> operation.</p>
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * <p>A structure that contains details about the workspace.</p>
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * <p>Represents the input of a <code>ListWorkspaces</code> operation.</p>
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * <p>The token for the next set of items to return. You receive this token from a previous
   *             call, and use it to get the next page of results. The other parameters must be the same
   *             as the initial call.</p>
   *          <p>For example, if your initial request has <code>maxResults</code> of 10, and there are
   *             12 workspaces to return, then your initial request will return 10 and a
   *                 <code>nextToken</code>. Using the next token in a subsequent call will return the
   *             remaining 2 workspaces.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>If this is included, it filters the results to only the workspaces with names that
   *             start with the value that you specify here.</p>
   *          <p>Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning
   *             and end of the alias that you specify.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The maximum number of workspaces to return per request. The default is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The information about one Amazon Managed Service for Prometheus workspace in your account. </p>
 * @public
 */
export interface WorkspaceSummary {
  /**
   * <p>The unique ID for the workspace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The alias that is assigned to this workspace to help identify it. It does not
   *             need to be unique.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the workspace.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The date and time that the workspace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>(optional) If the workspace was created with a customer managed KMS
   *             key, the ARN for the key used.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Represents the output of a <code>ListWorkspaces</code> operation.</p>
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * <p>An array of <code>WorkspaceSummary</code> structures containing information about the
   *             workspaces requested.</p>
   * @public
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * <p>A token indicating that there are more results to retrieve. You can use this token as
   *             part of your next <code>ListWorkspaces</code> request to retrieve those results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>CreateLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface CreateLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace to create the logging configuration for.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the CloudWatch log group to which the vended log data will be
   *             published. This log group must exist prior to calling this operation.</p>
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
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
 * <p>The status of the logging configuration. </p>
 * @public
 */
export interface LoggingConfigurationStatus {
  /**
   * <p>The current status of the logging configuration.</p>
   * @public
   */
  statusCode: LoggingConfigurationStatusCode | undefined;

  /**
   * <p>If failed, the reason for the failure.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Represents the output of a <code>CreateLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface CreateLoggingConfigurationResponse {
  /**
   * <p>A structure that displays the current status of the logging configuration.</p>
   * @public
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace containing the logging configuration to delete.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace to describe the logging configuration for.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>Contains information about the logging configuration for the workspace.</p>
 * @public
 */
export interface LoggingConfigurationMetadata {
  /**
   * <p>The current status of the logging configuration.</p>
   * @public
   */
  status: LoggingConfigurationStatus | undefined;

  /**
   * <p>The ID of the workspace the logging configuration is for.</p>
   * @public
   */
  workspace: string | undefined;

  /**
   * <p>The ARN of the CloudWatch log group to which the vended log data will be
   *             published.</p>
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * <p>The date and time that the logging configuration was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the logging configuration was most recently changed.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * <p>A structure that displays the information about the logging configuration.</p>
   * @public
   */
  loggingConfiguration: LoggingConfigurationMetadata | undefined;
}

/**
 * <p>Represents the input of an <code>UpdateLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace to update the logging configuration for.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The ARN of the CloudWatch log group to which the vended log data will be
   *             published.</p>
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the output of an <code>UpdateLoggingConfiguration</code> operation.</p>
 * @public
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * <p>A structure that contains the current status of the logging configuration.</p>
   * @public
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * <p>Represents the input of a <code>CreateRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface CreateRuleGroupsNamespaceRequest {
  /**
   * <p>The ID of the workspace to add the rule groups namespace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The name for the new rule groups namespace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The rules file to use in the new namespace.</p>
   *          <p>Contains the base64-encoded version of the YAML rules file.</p>
   *          <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of tag keys and values to associate with the rule groups namespace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * <p>The status information about a rule groups namespace. </p>
 * @public
 */
export interface RuleGroupsNamespaceStatus {
  /**
   * <p>The current status of the namespace.</p>
   * @public
   */
  statusCode: RuleGroupsNamespaceStatusCode | undefined;

  /**
   * <p>The reason for the failure, if any.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>Represents the output of a <code>CreateRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface CreateRuleGroupsNamespaceResponse {
  /**
   * <p>The name of the new rule groups namespace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the new rule groups namespace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A structure that returns the current status of the rule groups namespace.</p>
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the namespace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the input of a <code>DeleteRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface DeleteRuleGroupsNamespaceRequest {
  /**
   * <p>The ID of the workspace containing the rule groups namespace and definition to
   *             delete.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The name of the rule groups namespace to delete.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>DescribeRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface DescribeRuleGroupsNamespaceRequest {
  /**
   * <p>The ID of the workspace containing the rule groups namespace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The name of the rule groups namespace that you want information for.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The details about one rule groups namespace. </p>
 * @public
 */
export interface RuleGroupsNamespaceDescription {
  /**
   * <p>The ARN of the rule groups namespace. For example,
   *             <code>arn:aws:aps:&lt;region&gt;:123456789012:rulegroupsnamespace/ws-example1-1234-abcd-5678-ef90abcd1234/rulesfile1</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the rule groups namespace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the rule groups namespace.</p>
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * <p>The rule groups file used in the namespace.</p>
   *          <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>The date and time that the rule groups namespace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the rule groups namespace was most recently changed.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the rule groups
   *             namespace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the output of a <code>DescribeRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface DescribeRuleGroupsNamespaceResponse {
  /**
   * <p>The information about the rule groups namespace.</p>
   * @public
   */
  ruleGroupsNamespace: RuleGroupsNamespaceDescription | undefined;
}

/**
 * <p>Represents the input of a <code>ListRuleGroupsNamespaces</code> operation.</p>
 * @public
 */
export interface ListRuleGroupsNamespacesRequest {
  /**
   * <p>The ID of the workspace containing the rule groups namespaces.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>Use this parameter to filter the rule groups namespaces that are returned. Only the
   *             namespaces with names that begin with the value that you specify are returned.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The token for the next set of items to return. You receive this token from a previous
   *             call, and use it to get the next page of results. The other parameters must be the same
   *             as the initial call.</p>
   *          <p>For example, if your initial request has <code>maxResults</code> of 10, and there are
   *             12 rule groups namespaces to return, then your initial request will return 10 and a
   *                 <code>nextToken</code>. Using the next token in a subsequent call will return the
   *             remaining 2 namespaces.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The high-level information about a rule groups namespace. To retrieve more
 *             information, use <code>DescribeRuleGroupsNamespace</code>.</p>
 * @public
 */
export interface RuleGroupsNamespaceSummary {
  /**
   * <p>The ARN of the rule groups namespace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the rule groups namespace.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A structure that displays the current status of the rule groups namespace.</p>
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * <p>The date and time that the rule groups namespace was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time that the rule groups namespace was most recently changed.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the rule groups
   *             namespace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the output of a <code>ListRuleGroupsNamespaces</code> operation.</p>
 * @public
 */
export interface ListRuleGroupsNamespacesResponse {
  /**
   * <p>The returned list of rule groups namespaces.</p>
   * @public
   */
  ruleGroupsNamespaces: RuleGroupsNamespaceSummary[] | undefined;

  /**
   * <p>A token indicating that there are more results to retrieve. You can use this token as
   *             part of your next <code>ListRuleGroupsNamespaces</code> request to retrieve those
   *             results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the input of a <code>PutRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface PutRuleGroupsNamespaceRequest {
  /**
   * <p>The ID of the workspace where you are updating the rule groups namespace.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The name of the rule groups namespace that you are updating.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new rules file to use in the namespace. A base64-encoded version of the YAML rule
   *             groups file.</p>
   *          <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents the output of a <code>PutRuleGroupsNamespace</code> operation.</p>
 * @public
 */
export interface PutRuleGroupsNamespaceResponse {
  /**
   * <p>The name of the rule groups namespace that was updated.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the rule groups namespace.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A structure that includes the current status of the rule groups namespace.</p>
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the namespace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the input of an <code>UpdateWorkspaceAlias</code> operation.</p>
 * @public
 */
export interface UpdateWorkspaceAliasRequest {
  /**
   * <p>The ID of the workspace to update.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The new alias for the workspace. It does not need to be unique.</p>
   *          <p>Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning
   *             and end of the alias that you specify.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}
