// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AmpServiceException as __BaseException } from "./AmpServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * <p>The request would cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the resource affected.</p>
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
 * <p>Represents the input of a <code>CreateAlertManagerDefinition</code> operation.</p>
 */
export interface CreateAlertManagerDefinitionRequest {
  /**
   * @public
   * <p>The ID of the workspace to add the alert manager definition to.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The alert manager definition to add. A base64-encoded version of the YAML alert
   *             manager definition file.</p>
   *          <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
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
 * <p>The status of the alert manager. </p>
 */
export interface AlertManagerDefinitionStatus {
  /**
   * @public
   * <p>The current status of the alert manager. </p>
   */
  statusCode: AlertManagerDefinitionStatusCode | undefined;

  /**
   * @public
   * <p>If there is a failure, the reason for the failure.</p>
   */
  statusReason?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateAlertManagerDefinition</code> operation.</p>
 */
export interface CreateAlertManagerDefinitionResponse {
  /**
   * @public
   * <p>A structure that displays the current status of the alert manager definition.</p>
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * @public
 * <p>An unexpected error occurred during the processing of the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>Advice to clients on when the call can be safely retried.</p>
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
 * <p>The request references a resources that doesn't exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the resource affected.</p>
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
 * <p>Completing the request would cause a service quota to be exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Identifier of the resource affected.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>Type of the resource affected.</p>
   */
  resourceType: string | undefined;

  /**
   * @public
   * <p>Service quotas code for the originating service.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>Service quotas code of the originating quota.</p>
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
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>Service quotas code for the originating service.</p>
   */
  serviceCode?: string;

  /**
   * @public
   * <p>Service quotas code for the originating quota.</p>
   */
  quotaCode?: string;

  /**
   * @public
   * <p>Advice to clients on when the call can be safely retried.</p>
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
 * <p>Information about a field passed into a request that resulted in an exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field that caused an exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A message describing why the field caused an exception.</p>
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
 * <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Reason the request failed validation.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The field that caused the error, if applicable.</p>
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
 * <p>Represents the input of a <code>DeleteAlertManagerDefinition</code> operation.</p>
 */
export interface DeleteAlertManagerDefinitionRequest {
  /**
   * @public
   * <p>The ID of the workspace to delete the alert manager definition from.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>DescribeAlertManagerDefinition</code> operation.</p>
 */
export interface DescribeAlertManagerDefinitionRequest {
  /**
   * @public
   * <p>The ID of the workspace to retrieve the alert manager definition from.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>The details of an alert manager definition. </p>
 */
export interface AlertManagerDefinitionDescription {
  /**
   * @public
   * <p>A structure that displays the current status of the alert manager definition..</p>
   */
  status: AlertManagerDefinitionStatus | undefined;

  /**
   * @public
   * <p>The actual alert manager definition.</p>
   *          <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>The date and time that the alert manager definition was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the alert manager definition was most recently changed.</p>
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>DescribeAlertManagerDefinition</code> operation.</p>
 */
export interface DescribeAlertManagerDefinitionResponse {
  /**
   * @public
   * <p>The alert manager definition.</p>
   */
  alertManagerDefinition: AlertManagerDefinitionDescription | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>PutAlertManagerDefinition</code> operation.</p>
 */
export interface PutAlertManagerDefinitionRequest {
  /**
   * @public
   * <p>The ID of the workspace to update the alert manager definition in.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The alert manager definition to use. A base64-encoded version of the YAML alert
   *             manager definition file.</p>
   *          <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>PutAlertManagerDefinition</code> operation.</p>
 */
export interface PutAlertManagerDefinitionResponse {
  /**
   * @public
   * <p>A structure that returns the current status of the alert manager definition.</p>
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>GetDefaultScraperConfiguration</code> operation.</p>
 */
export interface GetDefaultScraperConfigurationRequest {}

/**
 * @public
 * <p>Represents the output of a <code>GetDefaultScraperConfiguration</code> operation.</p>
 */
export interface GetDefaultScraperConfigurationResponse {
  /**
   * @public
   * <p>The configuration file. Base 64 encoded.
   *             For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a>in the <i>Amazon Managed Service for Prometheus User
   *                     Guide</i>.</p>
   */
  configuration: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the resource to list tages for. Must be a workspace or rule groups
   *             namespace resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tag keys and values associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The <code>AmpConfiguration</code> structure defines the Amazon Managed Service for Prometheus instance a scraper
 *             should send metrics to.</p>
 */
export interface AmpConfiguration {
  /**
   * @public
   * <p>ARN of the Amazon Managed Service for Prometheus workspace.</p>
   */
  workspaceArn: string | undefined;
}

/**
 * @public
 * <p>Where to send the metrics from a scraper.</p>
 */
export type Destination = Destination.AmpConfigurationMember | Destination.$UnknownMember;

/**
 * @public
 */
export namespace Destination {
  /**
   * @public
   * <p>The Amazon Managed Service for Prometheusworkspace to send metrics to.</p>
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
 * <p>A scrape configuration for a scraper, base 64 encoded. For more information, see <a href="prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a> in the <i>Amazon Managed Service for Prometheus User
 *                 Guide</i>.</p>
 */
export type ScrapeConfiguration = ScrapeConfiguration.ConfigurationBlobMember | ScrapeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ScrapeConfiguration {
  /**
   * @public
   * <p>The base 64 encoded scrape configuration file.</p>
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
 * <p>The <code>EksConfiguration</code> structure describes the connection to the
 *             Amazon EKS cluster from which a scraper collects metrics.</p>
 */
export interface EksConfiguration {
  /**
   * @public
   * <p>ARN of the Amazon EKS cluster.</p>
   */
  clusterArn: string | undefined;

  /**
   * @public
   * <p>A list of the security group IDs for the Amazon EKS cluster VPC configuration.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>A list of subnet IDs for the Amazon EKS cluster VPC configuration.</p>
   */
  subnetIds: string[] | undefined;
}

/**
 * @public
 * <p>The source of collected metrics for a scraper.</p>
 */
export type Source = Source.EksConfigurationMember | Source.$UnknownMember;

/**
 * @public
 */
export namespace Source {
  /**
   * @public
   * <p>The Amazon EKS cluster from which a scraper collects metrics.</p>
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
 * <p>Represents the input of a <code>CreateScraper</code> operation.</p>
 */
export interface CreateScraperRequest {
  /**
   * @public
   * <p>(optional) a name to associate with the scraper. This is for your use, and does not
   *             need to be unique.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The configuration file to use in the new scraper. For more information, see <a href="prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a> in the <i>Amazon Managed Service for Prometheus User
   *                 Guide</i>.</p>
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * @public
   * <p>The Amazon EKS cluster from which the scraper will collect metrics.</p>
   */
  source: Source | undefined;

  /**
   * @public
   * <p>The Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   */
  destination: Destination | undefined;

  /**
   * @public
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the
   *             idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>(Optional) The list of tag keys and values to associate with the scraper.</p>
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
 * <p>The <code>ScraperStatus</code> structure contains status information about the
 *             scraper.</p>
 */
export interface ScraperStatus {
  /**
   * @public
   * <p>The current status of the scraper.</p>
   */
  statusCode: ScraperStatusCode | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateScraper</code> operation.</p>
 */
export interface CreateScraperResponse {
  /**
   * @public
   * <p>The ID of the new scraper.</p>
   */
  scraperId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new scraper.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A structure that displays the current status of the scraper.</p>
   */
  status: ScraperStatus | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the scraper.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteScraper</code> operation.</p>
 */
export interface DeleteScraperRequest {
  /**
   * @public
   * <p>The ID of the scraper to delete.</p>
   */
  scraperId: string | undefined;

  /**
   * @public
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the
   *             idempotency of the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>DeleteScraper</code> operation.</p>
 */
export interface DeleteScraperResponse {
  /**
   * @public
   * <p>The ID of the scraper to delete.</p>
   */
  scraperId: string | undefined;

  /**
   * @public
   * <p>The current status of the scraper.</p>
   */
  status: ScraperStatus | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>DescribeScraper</code> operation.</p>
 */
export interface DescribeScraperRequest {
  /**
   * @public
   * <p>The ID of the scraper to describe.</p>
   */
  scraperId: string | undefined;
}

/**
 * @public
 * <p>The <code>ScraperDescription</code> structure contains the full details about one
 *             scraper in your account.</p>
 */
export interface ScraperDescription {
  /**
   * @public
   * <p>(Optional) A name associated with the scraper.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ID of the scraper.</p>
   */
  scraperId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the scraper.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides
   *             permissions for the scraper to discover and collect metrics on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A structure that contains the current status of the scraper.</p>
   */
  status: ScraperStatus | undefined;

  /**
   * @public
   * <p>The date and time that the scraper was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the scraper was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>(Optional) The list of tag keys and values associated with the scraper.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>If there is a failure, the reason for the failure.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The configuration file in use by the scraper.</p>
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * @public
   * <p>The Amazon EKS cluster from which the scraper collects metrics.</p>
   */
  source: Source | undefined;

  /**
   * @public
   * <p>The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.</p>
   */
  destination: Destination | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>DescribeScraper</code> operation.</p>
 */
export interface DescribeScraperResponse {
  /**
   * @public
   * <p>Contains details about the scraper.</p>
   */
  scraper: ScraperDescription | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>ListScrapers</code> operation.</p>
 */
export interface ListScrapersRequest {
  /**
   * @public
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
   */
  filters?: Record<string, string[]>;

  /**
   * @public
   * <p>(Optional) The token for the next set of
   *             items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Optional) The maximum number of
   *             scrapers to return in one <code>ListScrapers</code> operation. The range is
   *             1-1000.</p>
   *          <p>If you omit this parameter, the default of 100 is used.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The <code>ScraperSummary</code> structure contains a summary of the details about one
 *             scraper in your account.</p>
 */
export interface ScraperSummary {
  /**
   * @public
   * <p>(Optional) A name associated with the scraper.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ID of the scraper.</p>
   */
  scraperId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the scraper.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides
   *             permissions for the scraper to discover and collect metrics on your behalf.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A structure that contains the current status of the scraper.</p>
   */
  status: ScraperStatus | undefined;

  /**
   * @public
   * <p>The date and time that the scraper was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the scraper was last modified.</p>
   */
  lastModifiedAt: Date | undefined;

  /**
   * @public
   * <p>(Optional) The list of tag keys and values associated with the scraper.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>If there is a failure, the reason for the failure.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The Amazon EKS cluster from which the scraper collects metrics.</p>
   */
  source: Source | undefined;

  /**
   * @public
   * <p>The Amazon Managed Service for Prometheus workspace the scraper sends metrics to.</p>
   */
  destination: Destination | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>ListScrapers</code> operation.</p>
 */
export interface ListScrapersResponse {
  /**
   * @public
   * <p>A list of <code>ScraperSummary</code> structures giving information about scrapers
   *             in the account that match the filters provided.</p>
   */
  scrapers: ScraperSummary[] | undefined;

  /**
   * @public
   * <p>A token indicating that there are more
   *             results to retrieve. You can use this token as part of your next
   *             <code>ListScrapers</code> operation to retrieve those results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the workspace or rule groups namespace to apply tags to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of tag keys and values to associate with the resource.</p>
   *          <p>Keys may not begin with <code>aws:</code>.</p>
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
   * <p>The ARN of the workspace or rule groups namespace.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to remove.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>Represents the input of a <code>CreateWorkspace</code> operation.</p>
 */
export interface CreateWorkspaceRequest {
  /**
   * @public
   * <p>An alias that you assign to this workspace to help you identify it. It does not need
   *             to be unique.</p>
   *          <p>Blank spaces at the beginning or end of the alias that you specify will be trimmed
   *             from the value used.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The list of tag keys and values to associate with the workspace.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>(optional) The ARN for a customer managed KMS key to use for
   *             encrypting data within your workspace. For more information about using your
   *             own key in your workspace, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/encryption-at-rest-Amazon-Service-Prometheus.html">Encryption at rest</a> in the <i>Amazon Managed Service for Prometheus User
   *                     Guide</i>.</p>
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
 * <p>The status of the workspace.</p>
 */
export interface WorkspaceStatus {
  /**
   * @public
   * <p>The current status of the workspace.</p>
   */
  statusCode: WorkspaceStatusCode | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateWorkspace</code> operation.</p>
 */
export interface CreateWorkspaceResponse {
  /**
   * @public
   * <p>The unique ID for the new workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The ARN for the new workspace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The current status of the new workspace. Immediately after you create the workspace,
   *             the status is usually <code>CREATING</code>.</p>
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>(optional) If the workspace was created with a customer managed KMS
   *             key, the ARN for the key used.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteWorkspace</code> operation.</p>
 */
export interface DeleteWorkspaceRequest {
  /**
   * @public
   * <p>The ID of the workspace to delete.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>DescribeWorkspace</code> operation.</p>
 */
export interface DescribeWorkspaceRequest {
  /**
   * @public
   * <p>The ID of the workspace to describe.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>The full details about one Amazon Managed Service for Prometheus workspace in your account.</p>
 */
export interface WorkspaceDescription {
  /**
   * @public
   * <p>The unique ID for the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The alias that is assigned to this workspace to help identify it. It may not be
   *             unique.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ARN of the workspace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The current status of the workspace.</p>
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * <p>The Prometheus endpoint available for this workspace. </p>
   */
  prometheusEndpoint?: string;

  /**
   * @public
   * <p>The date and time that the workspace was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>(optional) If the workspace was created with a customer managed KMS
   *             key, the ARN for the key used.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>DescribeWorkspace</code> operation.</p>
 */
export interface DescribeWorkspaceResponse {
  /**
   * @public
   * <p>A structure that contains details about the workspace.</p>
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>ListWorkspaces</code> operation.</p>
 */
export interface ListWorkspacesRequest {
  /**
   * @public
   * <p>The token for the next set of items to return. You receive this token from a previous
   *             call, and use it to get the next page of results. The other parameters must be the same
   *             as the initial call.</p>
   *          <p>For example, if your initial request has <code>maxResults</code> of 10, and there are
   *             12 workspaces to return, then your initial request will return 10 and a
   *                 <code>nextToken</code>. Using the next token in a subsequent call will return the
   *             remaining 2 workspaces.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>If this is included, it filters the results to only the workspaces with names that
   *             start with the value that you specify here.</p>
   *          <p>Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning
   *             and end of the alias that you specify.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The maximum number of workspaces to return per request. The default is 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The information about one Amazon Managed Service for Prometheus workspace in your account. </p>
 */
export interface WorkspaceSummary {
  /**
   * @public
   * <p>The unique ID for the workspace.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The alias that is assigned to this workspace to help identify it. It may not be
   *             unique.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ARN of the workspace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The current status of the workspace.</p>
   */
  status: WorkspaceStatus | undefined;

  /**
   * @public
   * <p>The date and time that the workspace was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>(optional) If the workspace was created with a customer managed KMS
   *             key, the ARN for the key used.</p>
   */
  kmsKeyArn?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>ListWorkspaces</code> operation.</p>
 */
export interface ListWorkspacesResponse {
  /**
   * @public
   * <p>An array of <code>WorkspaceSummary</code> structures containing information about the
   *             workspaces requested.</p>
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * @public
   * <p>A token indicating that there are more results to retrieve. You can use this token as
   *             part of your next <code>ListWorkspaces</code> request to retrieve those results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>CreateLoggingConfiguration</code> operation.</p>
 */
export interface CreateLoggingConfigurationRequest {
  /**
   * @public
   * <p>The ID of the workspace to create the logging configuration for.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The ARN of the CloudWatch log group to which the vended log data will be
   *             published. This log group must exist prior to calling this API.</p>
   */
  logGroupArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
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
 * <p>The status of the logging configuration. </p>
 */
export interface LoggingConfigurationStatus {
  /**
   * @public
   * <p>The current status of the logging configuration.</p>
   */
  statusCode: LoggingConfigurationStatusCode | undefined;

  /**
   * @public
   * <p>If failed, the reason for the failure.</p>
   */
  statusReason?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateLoggingConfiguration</code> operation.</p>
 */
export interface CreateLoggingConfigurationResponse {
  /**
   * @public
   * <p>A structure that displays the current status of the logging configuration.</p>
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteLoggingConfiguration</code> operation.</p>
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * @public
   * <p>The ID of the workspace containing the logging configuration to delete.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>DescribeLoggingConfiguration</code> operation.</p>
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * @public
   * <p>The ID of the workspace to describe the logging configuration for.</p>
   */
  workspaceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about the logging configuration. </p>
 */
export interface LoggingConfigurationMetadata {
  /**
   * @public
   * <p>The current status of the logging configuration.</p>
   */
  status: LoggingConfigurationStatus | undefined;

  /**
   * @public
   * <p>The ID of the workspace the logging configuration is for.</p>
   */
  workspace: string | undefined;

  /**
   * @public
   * <p>The ARN of the CloudWatch log group to which the vended log data will be
   *             published.</p>
   */
  logGroupArn: string | undefined;

  /**
   * @public
   * <p>The date and time that the logging configuration was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the logging configuration was most recently changed.</p>
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 * <p>Represents the output of a <code>DescribeLoggingConfiguration</code> operation.</p>
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * @public
   * <p>A structure that displays the information about the logging configuration.</p>
   */
  loggingConfiguration: LoggingConfigurationMetadata | undefined;
}

/**
 * @public
 * <p>Represents the input of an <code>UpdateLoggingConfiguration</code> operation.</p>
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * @public
   * <p>The ID of the workspace to update the logging configuration for.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The ARN of the CloudWatch log group to which the vended log data will be
   *             published.</p>
   */
  logGroupArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the output of an <code>UpdateLoggingConfiguration</code> operation.</p>
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * @public
   * <p>A structure that contains the current status of the logging configuration.</p>
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>CreateRuleGroupsNamespace</code> operation.</p>
 */
export interface CreateRuleGroupsNamespaceRequest {
  /**
   * @public
   * <p>The ID of the workspace to add the rule groups namespace.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The name for the new rule groups namespace.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The rules file to use in the new namespace.</p>
   *          <p>Contains the base64-encoded version of the YAML rules file.</p>
   *          <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The list of tag keys and values to associate with the rule groups namespace.</p>
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
 * <p>The status information about a rule groups namespace. </p>
 */
export interface RuleGroupsNamespaceStatus {
  /**
   * @public
   * <p>The current status of the namespace.</p>
   */
  statusCode: RuleGroupsNamespaceStatusCode | undefined;

  /**
   * @public
   * <p>The reason for the failure, if any.</p>
   */
  statusReason?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>CreateRuleGroupsNamespace</code> operation.</p>
 */
export interface CreateRuleGroupsNamespaceResponse {
  /**
   * @public
   * <p>The name of the new rule groups namespace.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new rule groups namespace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A structure that returns the current status of the rule groups namespace.</p>
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the namespace.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the input of a <code>DeleteRuleGroupsNamespace</code> operation.</p>
 */
export interface DeleteRuleGroupsNamespaceRequest {
  /**
   * @public
   * <p>The ID of the workspace containing the rule groups namespace and definition to
   *             delete.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The name of the rule groups namespace to delete.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>DescribeRuleGroupsNamespace</code> operation.</p>
 */
export interface DescribeRuleGroupsNamespaceRequest {
  /**
   * @public
   * <p>The ID of the workspace containing the rule groups namespace.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The name of the rule groups namespace that you want information for.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>The details about one rule groups namespace. </p>
 */
export interface RuleGroupsNamespaceDescription {
  /**
   * @public
   * <p>The ARN of the rule groups namespace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the rule groups namespace.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The current status of the rule groups namespace.</p>
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
   * <p>The rule groups file used in the namespace.</p>
   *          <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>The date and time that the rule groups namespace was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the rule groups namespace was most recently changed.</p>
   */
  modifiedAt: Date | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the rule groups
   *             namespace.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the output of a <code>DescribeRuleGroupsNamespace</code> operation.</p>
 */
export interface DescribeRuleGroupsNamespaceResponse {
  /**
   * @public
   * <p>The information about the rule groups namespace.</p>
   */
  ruleGroupsNamespace: RuleGroupsNamespaceDescription | undefined;
}

/**
 * @public
 * <p>Represents the input of a <code>ListRuleGroupsNamespaces</code> operation.</p>
 */
export interface ListRuleGroupsNamespacesRequest {
  /**
   * @public
   * <p>The ID of the workspace containing the rule groups namespaces.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>Use this parameter to filter the rule groups namespaces that are returned. Only the
   *             namespaces with names that begin with the value that you specify are returned.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The token for the next set of items to return. You receive this token from a previous
   *             call, and use it to get the next page of results. The other parameters must be the same
   *             as the initial call.</p>
   *          <p>For example, if your initial request has <code>maxResults</code> of 10, and there are
   *             12 rule groups namespaces to return, then your initial request will return 10 and a
   *                 <code>nextToken</code>. Using the next token in a subsequent call will return the
   *             remaining 2 namespaces.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return. The default is 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The high-level information about a rule groups namespace. To retrieve more
 *             information, use <code>DescribeRuleGroupsNamespace</code>.</p>
 */
export interface RuleGroupsNamespaceSummary {
  /**
   * @public
   * <p>The ARN of the rule groups namespace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the rule groups namespace.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A structure that displays the current status of the rule groups namespace.</p>
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
   * <p>The date and time that the rule groups namespace was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the rule groups namespace was most recently changed.</p>
   */
  modifiedAt: Date | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the rule groups
   *             namespace.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the output of a <code>ListRuleGroupsNamespaces</code> operation.</p>
 */
export interface ListRuleGroupsNamespacesResponse {
  /**
   * @public
   * <p>The returned list of rule groups namespaces.</p>
   */
  ruleGroupsNamespaces: RuleGroupsNamespaceSummary[] | undefined;

  /**
   * @public
   * <p>A token indicating that there are more results to retrieve. You can use this token as
   *             part of your next <code>ListRuleGroupsNamespaces</code> request to retrieve those
   *             results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Represents the input of a <code>PutRuleGroupsNamespace</code> operation.</p>
 */
export interface PutRuleGroupsNamespaceRequest {
  /**
   * @public
   * <p>The ID of the workspace where you are updating the rule groups namespace.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The name of the rule groups namespace that you are updating.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The new rules file to use in the namespace. A base64-encoded version of the YAML rule
   *             groups file.</p>
   *          <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Represents the output of a <code>PutRuleGroupsNamespace</code> operation.</p>
 */
export interface PutRuleGroupsNamespaceResponse {
  /**
   * @public
   * <p>The name of the rule groups namespace that was updated.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ARN of the rule groups namespace.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A structure that includes the current status of the rule groups namespace.</p>
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * @public
   * <p>The list of tag keys and values that are associated with the namespace.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Represents the input of an <code>UpdateWorkspaceAlias</code> operation.</p>
 */
export interface UpdateWorkspaceAliasRequest {
  /**
   * @public
   * <p>The ID of the workspace to update.</p>
   */
  workspaceId: string | undefined;

  /**
   * @public
   * <p>The new alias for the workspace. It does not need to be unique.</p>
   *          <p>Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning
   *             and end of the alias that you specify.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>A unique identifier that you can provide to ensure the idempotency of the request.
   *             Case-sensitive.</p>
   */
  clientToken?: string;
}
