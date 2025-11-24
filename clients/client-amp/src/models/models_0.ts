// smithy-typescript generated code
import {
  AlertManagerDefinitionStatusCode,
  AnomalyDetectorStatusCode,
  LoggingConfigurationStatusCode,
  QueryLoggingConfigurationStatusCode,
  RuleGroupsNamespaceStatusCode,
  ScraperComponentType,
  ScraperLoggingConfigurationStatusCode,
  ScraperStatusCode,
  WorkspaceConfigurationStatusCode,
  WorkspacePolicyStatusCode,
  WorkspaceStatusCode,
} from "./enums";

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
   * <p>The alert manager definition to add. A base64-encoded version of the YAML alert manager definition file.</p> <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

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
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
 * <p>The details of an alert manager definition. It is the configuration for the alert manager, including information about receivers for routing alerts.</p>
 * @public
 */
export interface AlertManagerDefinitionDescription {
  /**
   * <p>A structure that displays the current status of the alert manager definition..</p>
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;

  /**
   * <p>The actual alert manager definition.</p> <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
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
   * <p>The alert manager definition to use. A base64-encoded version of the YAML alert manager definition file.</p> <p>For details about the alert manager definition, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html">AlertManagedDefinitionData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
   * <p>The configuration file. Base 64 encoded. For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a>in the <i>Amazon Managed Service for Prometheus User Guide</i>.</p>
   * @public
   */
  configuration: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to list tages for. Must be a workspace, scraper, or rule groups namespace resource.</p>
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
 * <p>The <code>AmpConfiguration</code> structure defines the Amazon Managed Service for Prometheus instance a scraper should send metrics to.</p>
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ampConfiguration: (value: AmpConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.</p>
 * @public
 */
export interface RoleConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the role used in the source account to enable cross-account scraping. For information about the contents of this policy, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#cross-account-remote-write">Cross-account setup</a>.</p>
   * @public
   */
  sourceRoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role used in the target account to enable cross-account scraping. For information about the contents of this policy, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#cross-account-remote-write">Cross-account setup</a>.</p>
   * @public
   */
  targetRoleArn?: string | undefined;
}

/**
 * <p>A scrape configuration for a scraper, base 64 encoded. For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a> in the <i>Amazon Managed Service for Prometheus User Guide</i>.</p>
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    configurationBlob: (value: Uint8Array) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The <code>EksConfiguration</code> structure describes the connection to the Amazon EKS cluster from which a scraper collects metrics.</p>
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
 * <p>The Amazon VPC configuration that specifies the network settings for a Prometheus collector to securely connect to Amazon MSK clusters. This configuration includes the security groups and subnets that control network access and placement for the collector.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The security group IDs that control network access for the Prometheus collector. These security groups must allow the collector to communicate with your Amazon MSK cluster on the required ports.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>The subnet IDs where the Prometheus collector will be deployed. The subnets must be in the same Amazon VPC as your Amazon MSK cluster and have network connectivity to the cluster.</p>
   * @public
   */
  subnetIds: string[] | undefined;
}

/**
 * <p>The source of collected metrics for a scraper.</p>
 * @public
 */
export type Source = Source.EksConfigurationMember | Source.VpcConfigurationMember | Source.$UnknownMember;

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
    vpcConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Amazon VPC configuration for the Prometheus collector when connecting to Amazon MSK clusters. This configuration enables secure, private network connectivity between the collector and your Amazon MSK cluster within your Amazon VPC.</p>
   * @public
   */
  export interface VpcConfigurationMember {
    eksConfiguration?: never;
    vpcConfiguration: VpcConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    eksConfiguration?: never;
    vpcConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    eksConfiguration: (value: EksConfiguration) => T;
    vpcConfiguration: (value: VpcConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Represents the input of a <code>CreateScraper</code> operation.</p>
 * @public
 */
export interface CreateScraperRequest {
  /**
   * <p>(optional) An alias to associate with the scraper. This is for your use, and does not need to be unique.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The configuration file to use in the new scraper. For more information, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration">Scraper configuration</a> in the <i>Amazon Managed Service for Prometheus User Guide</i>.</p>
   * @public
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * <p>The Amazon EKS or Amazon Web Services cluster from which the scraper will collect metrics.</p>
   * @public
   */
  source: Source | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
   */
  destination: Destination | undefined;

  /**
   * <p>Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.</p>
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;

  /**
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</p>
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
 * <p>The <code>ScraperStatus</code> structure contains status information about the scraper.</p>
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
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</p>
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
 * <p>The <code>ScraperDescription</code> structure contains the full details about one scraper in your account.</p>
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
   * <p>The Amazon Resource Name (ARN) of the scraper. For example, <code>arn:aws:aps:&lt;region&gt;:123456798012:scraper/s-example1-1234-abcd-5678-ef9012abcd34</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.</p> <p>For example, <code>arn:aws:iam::123456789012:role/service-role/AmazonGrafanaServiceRole-12example</code>.</p>
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

  /**
   * <p>This structure displays information about the IAM roles used for cross-account scraping configuration.</p>
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;
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
   * <p>(Optional) A list of key-value pairs to filter the list of scrapers returned. Keys include <code>status</code>, <code>sourceArn</code>, <code>destinationArn</code>, and <code>alias</code>.</p> <p>Filters on the same key are <code>OR</code>'d together, and filters on different keys are <code>AND</code>'d together. For example, <code>status=ACTIVE&amp;status=CREATING&amp;alias=Test</code>, will return all scrapers that have the alias Test, and are either in status ACTIVE or CREATING.</p> <p>To find all active scrapers that are sending metrics to a specific Amazon Managed Service for Prometheus workspace, you would use the ARN of the workspace in a query:</p> <p> <code>status=ACTIVE&amp;destinationArn=arn:aws:aps:us-east-1:123456789012:workspace/ws-example1-1234-abcd-56ef-123456789012</code> </p> <p>If this is included, it filters the results to only the scrapers that match the filter.</p>
   * @public
   */
  filters?: Record<string, string[]> | undefined;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Optional) The maximum number of scrapers to return in one <code>ListScrapers</code> operation. The range is 1-1000.</p> <p>If you omit this parameter, the default of 100 is used.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The <code>ScraperSummary</code> structure contains a summary of the details about one scraper in your account.</p>
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
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.</p>
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

  /**
   * <p>This structure displays information about the IAM roles used for cross-account scraping configuration.</p>
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;
}

/**
 * <p>Represents the output of a <code>ListScrapers</code> operation.</p>
 * @public
 */
export interface ListScrapersResponse {
  /**
   * <p>A list of <code>ScraperSummary</code> structures giving information about scrapers in the account that match the filters provided.</p>
   * @public
   */
  scrapers: ScraperSummary[] | undefined;

  /**
   * <p>A token indicating that there are more results to retrieve. You can use this token as part of your next <code>ListScrapers</code> operation to retrieve those results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteScraperLoggingConfigurationRequest {
  /**
   * <p>The ID of the scraper whose logging configuration will be deleted.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is processed exactly once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScraperLoggingConfigurationRequest {
  /**
   * <p>The ID of the scraper whose logging configuration will be described.</p>
   * @public
   */
  scraperId: string | undefined;
}

/**
 * <p>Configuration details for logging to CloudWatch Logs.</p>
 * @public
 */
export interface CloudWatchLogDestination {
  /**
   * <p>The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this operation.</p>
   * @public
   */
  logGroupArn: string | undefined;
}

/**
 * <p>The destination where scraper logs are sent.</p>
 * @public
 */
export type ScraperLoggingDestination =
  | ScraperLoggingDestination.CloudWatchLogsMember
  | ScraperLoggingDestination.$UnknownMember;

/**
 * @public
 */
export namespace ScraperLoggingDestination {
  /**
   * <p>The CloudWatch Logs configuration for the scraper logging destination.</p>
   * @public
   */
  export interface CloudWatchLogsMember {
    cloudWatchLogs: CloudWatchLogDestination;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudWatchLogs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudWatchLogs: (value: CloudWatchLogDestination) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration settings for a scraper component.</p>
 * @public
 */
export interface ComponentConfig {
  /**
   * <p>Configuration options for the scraper component.</p>
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * <p>A component of a Amazon Managed Service for Prometheus scraper that can be configured for logging.</p>
 * @public
 */
export interface ScraperComponent {
  /**
   * <p>The type of the scraper component.</p>
   * @public
   */
  type: ScraperComponentType | undefined;

  /**
   * <p>The configuration settings for the scraper component.</p>
   * @public
   */
  config?: ComponentConfig | undefined;
}

/**
 * <p>The status of a scraper logging configuration.</p>
 * @public
 */
export interface ScraperLoggingConfigurationStatus {
  /**
   * <p>The status code of the scraper logging configuration.</p>
   * @public
   */
  statusCode: ScraperLoggingConfigurationStatusCode | undefined;

  /**
   * <p>The reason for the current status of the scraper logging configuration.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScraperLoggingConfigurationResponse {
  /**
   * <p>The status of the scraper logging configuration.</p>
   * @public
   */
  status: ScraperLoggingConfigurationStatus | undefined;

  /**
   * <p>The ID of the scraper.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The destination where scraper logs are sent.</p>
   * @public
   */
  loggingDestination: ScraperLoggingDestination | undefined;

  /**
   * <p>The list of scraper components configured for logging.</p>
   * @public
   */
  scraperComponents: ScraperComponent[] | undefined;

  /**
   * <p>The date and time when the logging configuration was last modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateScraperLoggingConfigurationRequest {
  /**
   * <p>The ID of the scraper whose logging configuration will be updated.</p>
   * @public
   */
  scraperId: string | undefined;

  /**
   * <p>The destination where scraper logs will be sent.</p>
   * @public
   */
  loggingDestination: ScraperLoggingDestination | undefined;

  /**
   * <p>The list of scraper components to configure for logging.</p>
   * @public
   */
  scraperComponents?: ScraperComponent[] | undefined;
}

/**
 * @public
 */
export interface UpdateScraperLoggingConfigurationResponse {
  /**
   * <p>The status of the updated scraper logging configuration.</p>
   * @public
   */
  status: ScraperLoggingConfigurationStatus | undefined;
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
   * <p>Contains the base-64 encoded YAML configuration for the scraper.</p> <note> <p>For more information about configuring a scraper, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html">Using an Amazon Web Services managed collector</a> in the <i>Amazon Managed Service for Prometheus User Guide</i>.</p> </note>
   * @public
   */
  scrapeConfiguration?: ScrapeConfiguration | undefined;

  /**
   * <p>The new Amazon Managed Service for Prometheus workspace to send metrics to.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.</p>
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
   * <p>The list of tag keys and values to associate with the resource.</p> <p>Keys must not begin with <code>aws:</code>.</p>
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
 * <p>Configuration for threshold settings that determine when values near expected values should be ignored during anomaly detection.</p>
 * @public
 */
export type IgnoreNearExpected =
  | IgnoreNearExpected.AmountMember
  | IgnoreNearExpected.RatioMember
  | IgnoreNearExpected.$UnknownMember;

/**
 * @public
 */
export namespace IgnoreNearExpected {
  /**
   * <p>The absolute amount by which values can differ from expected values before being considered anomalous.</p>
   * @public
   */
  export interface AmountMember {
    amount: number;
    ratio?: never;
    $unknown?: never;
  }

  /**
   * <p>The ratio by which values can differ from expected values before being considered anomalous.</p>
   * @public
   */
  export interface RatioMember {
    amount?: never;
    ratio: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    amount?: never;
    ratio?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    amount: (value: number) => T;
    ratio: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Configuration for the Random Cut Forest algorithm used for anomaly detection in time-series data.</p>
 * @public
 */
export interface RandomCutForestConfiguration {
  /**
   * <p>The Prometheus query used to retrieve the time-series data for anomaly detection.</p> <important> <p>Random Cut Forest queries must be wrapped by a supported PromQL aggregation operator. For more information, see <a href="https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators">Aggregation operators</a> on the <i>Prometheus docs</i> website.</p> <p> <b>Supported PromQL aggregation operators</b>: <code>avg</code>, <code>count</code>, <code>group</code>, <code>max</code>, <code>min</code>, <code>quantile</code>, <code>stddev</code>, <code>stdvar</code>, and <code>sum</code>.</p> </important>
   * @public
   */
  query: string | undefined;

  /**
   * <p>The number of consecutive data points used to create a shingle for the Random Cut Forest algorithm. The default number is 8 consecutive data points.</p>
   * @public
   */
  shingleSize?: number | undefined;

  /**
   * <p>The number of data points sampled from the input stream for the Random Cut Forest algorithm. The default number is 256 consecutive data points.</p>
   * @public
   */
  sampleSize?: number | undefined;

  /**
   * <p>Configuration for ignoring values that are near expected values from above during anomaly detection.</p>
   * @public
   */
  ignoreNearExpectedFromAbove?: IgnoreNearExpected | undefined;

  /**
   * <p>Configuration for ignoring values that are near expected values from below during anomaly detection.</p>
   * @public
   */
  ignoreNearExpectedFromBelow?: IgnoreNearExpected | undefined;
}

/**
 * <p>The configuration for the anomaly detection algorithm.</p>
 * @public
 */
export type AnomalyDetectorConfiguration =
  | AnomalyDetectorConfiguration.RandomCutForestMember
  | AnomalyDetectorConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AnomalyDetectorConfiguration {
  /**
   * <p>The Random Cut Forest algorithm configuration for anomaly detection.</p>
   * @public
   */
  export interface RandomCutForestMember {
    randomCutForest: RandomCutForestConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    randomCutForest?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    randomCutForest: (value: RandomCutForestConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Specifies the action to take when data is missing during anomaly detection evaluation.</p>
 * @public
 */
export type AnomalyDetectorMissingDataAction =
  | AnomalyDetectorMissingDataAction.MarkAsAnomalyMember
  | AnomalyDetectorMissingDataAction.SkipMember
  | AnomalyDetectorMissingDataAction.$UnknownMember;

/**
 * @public
 */
export namespace AnomalyDetectorMissingDataAction {
  /**
   * <p>Marks missing data points as anomalies.</p>
   * @public
   */
  export interface MarkAsAnomalyMember {
    markAsAnomaly: boolean;
    skip?: never;
    $unknown?: never;
  }

  /**
   * <p>Skips evaluation when data is missing.</p>
   * @public
   */
  export interface SkipMember {
    markAsAnomaly?: never;
    skip: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    markAsAnomaly?: never;
    skip?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    markAsAnomaly: (value: boolean) => T;
    skip: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAnomalyDetectorRequest {
  /**
   * <p>The identifier of the workspace where the anomaly detector will be created.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A user-friendly name for the anomaly detector.</p>
   * @public
   */
  alias: string | undefined;

  /**
   * <p>The frequency, in seconds, at which the anomaly detector evaluates metrics. The default value is 60 seconds.</p>
   * @public
   */
  evaluationIntervalInSeconds?: number | undefined;

  /**
   * <p>Specifies the action to take when data is missing during evaluation.</p>
   * @public
   */
  missingDataAction?: AnomalyDetectorMissingDataAction | undefined;

  /**
   * <p>The algorithm configuration for the anomaly detector.</p>
   * @public
   */
  configuration: AnomalyDetectorConfiguration | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus metric labels to associate with the anomaly detector.</p>
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata to apply to the anomaly detector to assist with categorization and organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The status information of an anomaly detector.</p>
 * @public
 */
export interface AnomalyDetectorStatus {
  /**
   * <p>The status code of the anomaly detector.</p>
   * @public
   */
  statusCode: AnomalyDetectorStatusCode | undefined;

  /**
   * <p>A description of the current status of the anomaly detector.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyDetectorResponse {
  /**
   * <p>The unique identifier of the created anomaly detector.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created anomaly detector.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status information of the created anomaly detector.</p>
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * <p>The tags applied to the created anomaly detector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorRequest {
  /**
   * <p>The identifier of the workspace containing the anomaly detector to delete.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The identifier of the anomaly detector to delete.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorRequest {
  /**
   * <p>The identifier of the workspace containing the anomaly detector.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The identifier of the anomaly detector to describe.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;
}

/**
 * <p>Detailed information about an anomaly detector.</p>
 * @public
 */
export interface AnomalyDetectorDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the anomaly detector.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * <p>The user-friendly name of the anomaly detector.</p>
   * @public
   */
  alias: string | undefined;

  /**
   * <p>The frequency, in seconds, at which the anomaly detector evaluates metrics.</p>
   * @public
   */
  evaluationIntervalInSeconds?: number | undefined;

  /**
   * <p>The action taken when data is missing during evaluation.</p>
   * @public
   */
  missingDataAction?: AnomalyDetectorMissingDataAction | undefined;

  /**
   * <p>The algorithm configuration of the anomaly detector.</p>
   * @public
   */
  configuration?: AnomalyDetectorConfiguration | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.</p>
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * <p>The current status of the anomaly detector.</p>
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * <p>The timestamp when the anomaly detector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the anomaly detector was last modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The tags applied to the anomaly detector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorResponse {
  /**
   * <p>The detailed information about the anomaly detector.</p>
   * @public
   */
  anomalyDetector: AnomalyDetectorDescription | undefined;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsRequest {
  /**
   * <p>The identifier of the workspace containing the anomaly detectors to list.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>Filters the results to anomaly detectors with the specified alias.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. Valid range is 1 to 1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token to continue retrieving results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about an anomaly detector for list operations.</p>
 * @public
 */
export interface AnomalyDetectorSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the anomaly detector.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the anomaly detector.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * <p>The user-friendly name of the anomaly detector.</p>
   * @public
   */
  alias: string | undefined;

  /**
   * <p>The current status of the anomaly detector.</p>
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * <p>The timestamp when the anomaly detector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the anomaly detector was last modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * <p>The tags applied to the anomaly detector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsResponse {
  /**
   * <p>The list of anomaly detectors in the workspace.</p>
   * @public
   */
  anomalyDetectors: AnomalyDetectorSummary[] | undefined;

  /**
   * <p>The pagination token to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAnomalyDetectorRequest {
  /**
   * <p>The identifier of the workspace containing the anomaly detector to update.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The identifier of the anomaly detector to update.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * <p>The frequency, in seconds, at which the anomaly detector evaluates metrics.</p>
   * @public
   */
  evaluationIntervalInSeconds?: number | undefined;

  /**
   * <p>Specifies the action to take when data is missing during evaluation.</p>
   * @public
   */
  missingDataAction?: AnomalyDetectorMissingDataAction | undefined;

  /**
   * <p>The algorithm configuration for the anomaly detector.</p>
   * @public
   */
  configuration: AnomalyDetectorConfiguration | undefined;

  /**
   * <p>The Amazon Managed Service for Prometheus metric labels to associate with the anomaly detector.</p>
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAnomalyDetectorResponse {
  /**
   * <p>The unique identifier of the updated anomaly detector.</p>
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated anomaly detector.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status information of the updated anomaly detector.</p>
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * <p>The tags applied to the updated anomaly detector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Represents the input of a <code>CreateWorkspace</code> operation.</p>
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * <p>An alias that you assign to this workspace to help you identify it. It does not need to be unique.</p> <p>Blank spaces at the beginning or end of the alias that you specify will be trimmed from the value used.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of tag keys and values to associate with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>(optional) The ARN for a customer managed KMS key to use for encrypting data within your workspace. For more information about using your own key in your workspace, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/encryption-at-rest-Amazon-Service-Prometheus.html">Encryption at rest</a> in the <i>Amazon Managed Service for Prometheus User Guide</i>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

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
   * <p>The current status of the new workspace. Immediately after you create the workspace, the status is usually <code>CREATING</code>.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The list of tag keys and values that are associated with the workspace.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>(optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.</p>
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
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
   * <p>The unique ID for the workspace. For example, <code>ws-example1-1234-abcd-5678-ef90abcd1234</code>.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The alias that is assigned to this workspace to help identify it. It does not need to be unique.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ARN of the workspace. For example, <code>arn:aws:aps:&lt;region&gt;:123456789012:workspace/ws-example1-1234-abcd-5678-ef90abcd1234</code>.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the workspace.</p>
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * <p>The Prometheus endpoint available for this workspace. For example, <code>https://aps-workspaces.&lt;region&gt;.amazonaws.com/workspaces/ws-example1-1234-abcd-5678-ef90abcd1234/api/v1/</code>.</p>
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
   * <p>(optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.</p>
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
   * <p>The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call.</p> <p>For example, if your initial request has <code>maxResults</code> of 10, and there are 12 workspaces to return, then your initial request will return 10 and a <code>nextToken</code>. Using the next token in a subsequent call will return the remaining 2 workspaces.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>If this is included, it filters the results to only the workspaces with names that start with the value that you specify here.</p> <p>Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.</p>
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
   * <p>The alias that is assigned to this workspace to help identify it. It does not need to be unique.</p>
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
   * <p>(optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.</p>
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
   * <p>An array of <code>WorkspaceSummary</code> structures containing information about the workspaces requested.</p>
   * @public
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * <p>A token indicating that there are more results to retrieve. You can use this token as part of your next <code>ListWorkspaces</code> request to retrieve those results.</p>
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
   * <p>The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this operation.</p>
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The status of the logging configuration. </p>
 * @public
 */
export interface LoggingConfigurationStatus {
  /**
   * <p>The current status of the current rules and alerting logging configuration.</p> <note> <p>These logging configurations are only for rules and alerting logs.</p> </note>
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
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
 * <p>Contains information about the current rules and alerting logging configuration for the workspace.</p> <note> <p>These logging configurations are only for rules and alerting logs.</p> </note>
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
   * <p>The ARN of the CloudWatch log group to which the vended log data will be published.</p>
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
   * <p>The ARN of the CloudWatch log group to which the vended log data will be published.</p>
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
 * <p>Filtering criteria that determine which queries are logged.</p>
 * @public
 */
export interface LoggingFilter {
  /**
   * <p>The Query Samples Processed (QSP) threshold above which queries will be logged. Queries processing more samples than this threshold will be captured in logs.</p>
   * @public
   */
  qspThreshold: number | undefined;
}

/**
 * <p>Defines a destination and its associated filtering criteria for query logging.</p>
 * @public
 */
export interface LoggingDestination {
  /**
   * <p>Configuration details for logging to CloudWatch Logs.</p>
   * @public
   */
  cloudWatchLogs: CloudWatchLogDestination | undefined;

  /**
   * <p>Filtering criteria that determine which queries are logged.</p>
   * @public
   */
  filters: LoggingFilter | undefined;
}

/**
 * @public
 */
export interface CreateQueryLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace for which to create the query logging configuration.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The destinations where query logs will be sent. Only CloudWatch Logs destination is supported. The list must contain exactly one element.</p>
   * @public
   */
  destinations: LoggingDestination[] | undefined;

  /**
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The status information for a query logging configuration.</p>
 * @public
 */
export interface QueryLoggingConfigurationStatus {
  /**
   * <p>The current status of the query logging configuration.</p>
   * @public
   */
  statusCode: QueryLoggingConfigurationStatusCode | undefined;

  /**
   * <p>If there is a failure, the reason for the failure.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateQueryLoggingConfigurationResponse {
  /**
   * <p>The current status of the query logging configuration.</p>
   * @public
   */
  status: QueryLoggingConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteQueryLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace from which to delete the query logging configuration.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueryLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace for which to retrieve the query logging configuration.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>The metadata for a query logging configuration.</p>
 * @public
 */
export interface QueryLoggingConfigurationMetadata {
  /**
   * <p>The current status of the query logging configuration.</p>
   * @public
   */
  status: QueryLoggingConfigurationStatus | undefined;

  /**
   * <p>The ID of the workspace associated with this query logging configuration.</p>
   * @public
   */
  workspace: string | undefined;

  /**
   * <p>The configured destinations for the query logging configuration.</p>
   * @public
   */
  destinations: LoggingDestination[] | undefined;

  /**
   * <p>The date and time when the query logging configuration was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the query logging configuration was last modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryLoggingConfigurationResponse {
  /**
   * <p>The detailed information about the query logging configuration for the specified workspace.</p>
   * @public
   */
  queryLoggingConfiguration: QueryLoggingConfigurationMetadata | undefined;
}

/**
 * @public
 */
export interface UpdateQueryLoggingConfigurationRequest {
  /**
   * <p>The ID of the workspace for which to update the query logging configuration.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The destinations where query logs will be sent. Only CloudWatch Logs destination is supported. The list must contain exactly one element.</p>
   * @public
   */
  destinations: LoggingDestination[] | undefined;

  /**
   * <p>(Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueryLoggingConfigurationResponse {
  /**
   * <p>The current status of the query logging configuration.</p>
   * @public
   */
  status: QueryLoggingConfigurationStatus | undefined;
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
   * <p>The rules file to use in the new namespace.</p> <p>Contains the base64-encoded version of the YAML rules file.</p> <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
   * <p>The ID of the workspace containing the rule groups namespace and definition to delete.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The name of the rule groups namespace to delete.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
   * <p>The ARN of the rule groups namespace. For example, <code>arn:aws:aps:&lt;region&gt;:123456789012:rulegroupsnamespace/ws-example1-1234-abcd-5678-ef90abcd1234/rulesfile1</code>.</p>
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
   * <p>The rule groups file used in the namespace.</p> <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
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
   * <p>The list of tag keys and values that are associated with the rule groups namespace.</p>
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
   * <p>Use this parameter to filter the rule groups namespaces that are returned. Only the namespaces with names that begin with the value that you specify are returned.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call.</p> <p>For example, if your initial request has <code>maxResults</code> of 10, and there are 12 rule groups namespaces to return, then your initial request will return 10 and a <code>nextToken</code>. Using the next token in a subsequent call will return the remaining 2 namespaces.</p>
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
 * <p>The high-level information about a rule groups namespace. To retrieve more information, use <code>DescribeRuleGroupsNamespace</code>.</p>
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
   * <p>The list of tag keys and values that are associated with the rule groups namespace.</p>
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
   * <p>A token indicating that there are more results to retrieve. You can use this token as part of your next <code>ListRuleGroupsNamespaces</code> request to retrieve those results.</p>
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
   * <p>The new rules file to use in the namespace. A base64-encoded version of the YAML rule groups file.</p> <p>For details about the rule groups namespace structure, see <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html">RuleGroupsNamespaceData</a>.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
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
   * <p>The new alias for the workspace. It does not need to be unique.</p> <p>Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationRequest {
  /**
   * <p>The ID of the workspace that you want to retrieve information for. To find the IDs of your workspaces, use the <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/API_ListWorkspaces.htm">ListWorkspaces</a> operation.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * <p>This structure contains the information about the limits that apply to time series that match one label set.</p>
 * @public
 */
export interface LimitsPerLabelSetEntry {
  /**
   * <p>The maximum number of active series that can be ingested that match this label set. </p> <p>Setting this to 0 causes no label set limit to be enforced, but it does cause Amazon Managed Service for Prometheus to vend label set metrics to CloudWatch</p>
   * @public
   */
  maxSeries?: number | undefined;
}

/**
 * <p>This structure defines one label set used to enforce active time series limits for the workspace, and defines the limit for that label set.</p> <p>A label set is a unique combination of label-value pairs. Use them to control time series limits and to monitor usage by specific label groups. Example label sets might be <code>team:finance</code> or <code>env:prod</code> </p>
 * @public
 */
export interface LimitsPerLabelSet {
  /**
   * <p>This structure contains the information about the limits that apply to time series that match this label set.</p>
   * @public
   */
  limits: LimitsPerLabelSetEntry | undefined;

  /**
   * <p>This defines one label set that will have an enforced active time series limit. </p> <p>Label values accept ASCII characters and must contain at least one character that isn't whitespace. ASCII control characters are not accepted. If the label name is metric name label <code>__<i>name</i>__</code>, then the <i>metric</i> part of the name must conform to the following pattern: <code>[a-zA-Z_:][a-zA-Z0-9_:]*</code> </p>
   * @public
   */
  labelSet: Record<string, string> | undefined;
}

/**
 * <p>This structure displays the current status of the workspace configuration, and might also contain a reason for that status.</p>
 * @public
 */
export interface WorkspaceConfigurationStatus {
  /**
   * <p>The current status of the workspace configuration.</p>
   * @public
   */
  statusCode: WorkspaceConfigurationStatusCode | undefined;

  /**
   * <p>The reason for the current status, if a reason is available.</p>
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * <p>This structure contains the description of the workspace configuration.</p>
 * @public
 */
export interface WorkspaceConfigurationDescription {
  /**
   * <p>This structure displays the current status of the workspace configuration, and might also contain a reason for that status.</p>
   * @public
   */
  status: WorkspaceConfigurationStatus | undefined;

  /**
   * <p>This is an array of structures, where each structure displays one label sets for the workspace and the limits for that label set.</p>
   * @public
   */
  limitsPerLabelSet?: LimitsPerLabelSet[] | undefined;

  /**
   * <p>This field displays how many days that metrics are retained in the workspace.</p>
   * @public
   */
  retentionPeriodInDays?: number | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationResponse {
  /**
   * <p>This structure contains the information about the workspace configuration.</p>
   * @public
   */
  workspaceConfiguration: WorkspaceConfigurationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationRequest {
  /**
   * <p>The ID of the workspace that you want to update. To find the IDs of your workspaces, use the <a href="https://docs.aws.amazon.com/prometheus/latest/APIReference/API_ListWorkspaces.htm">ListWorkspaces</a> operation.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>You can include a token in your operation to make it an idempotent opeartion. </p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>This is an array of structures, where each structure defines a label set for the workspace, and defines the active time series limit for each of those label sets. Each label name in a label set must be unique.</p>
   * @public
   */
  limitsPerLabelSet?: LimitsPerLabelSet[] | undefined;

  /**
   * <p>Specifies how many days that metrics will be retained in the workspace.</p>
   * @public
   */
  retentionPeriodInDays?: number | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationResponse {
  /**
   * <p>The status of the workspace configuration.</p>
   * @public
   */
  status: WorkspaceConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The ID of the workspace from which to delete the resource-based policy.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is safe to retry (idempotent).</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The revision ID of the policy to delete. Use this parameter to ensure that you are deleting the correct version of the policy.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * <p>The ID of the workspace to describe the resource-based policy for.</p>
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * <p>The JSON policy document for the resource-based policy attached to the workspace.</p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>The current status of the resource-based policy.</p>
   * @public
   */
  policyStatus: WorkspacePolicyStatusCode | undefined;

  /**
   * <p>The revision ID of the current resource-based policy.</p>
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The ID of the workspace to attach the resource-based policy to.</p>
   * @public
   */
  workspaceId: string | undefined;

  /**
   * <p>The JSON policy document to use as the resource-based policy. This policy defines the permissions that other AWS accounts or services have to access your workspace.</p>
   * @public
   */
  policyDocument: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is safe to retry (idempotent).</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The revision ID of the policy to update. Use this parameter to ensure that you are updating the correct version of the policy. If you don't specify a revision ID, the policy is updated regardless of its current revision.</p> <p>For the first <b>PUT</b> request on a workspace that doesn't have an existing resource policy, you can specify <code>NO_POLICY</code> as the revision ID.</p>
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The current status of the resource-based policy.</p>
   * @public
   */
  policyStatus: WorkspacePolicyStatusCode | undefined;

  /**
   * <p>The revision ID of the newly created or updated resource-based policy.</p>
   * @public
   */
  revisionId: string | undefined;
}
