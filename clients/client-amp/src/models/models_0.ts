// smithy-typescript generated code
import type {
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
 * Represents the input of a `CreateAlertManagerDefinition` operation.
 *
 * @public
 */
export interface CreateAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace to add the alert manager definition to.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The alert manager definition to add. A base64-encoded version of the YAML alert manager definition file.
   *
   * For details about the alert manager definition, see [AlertManagedDefinitionData](https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html).
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The status of the alert manager.
 *
 * @public
 */
export interface AlertManagerDefinitionStatus {
  /**
   * The current status of the alert manager.
   *
   * @public
   */
  statusCode: AlertManagerDefinitionStatusCode | undefined;

  /**
   * If there is a failure, the reason for the failure.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Represents the output of a `CreateAlertManagerDefinition` operation.
 *
 * @public
 */
export interface CreateAlertManagerDefinitionResponse {
  /**
   * A structure that displays the current status of the alert manager definition.
   *
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * Information about a field passed into a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that caused an exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why the field caused an exception.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Represents the input of a `DeleteAlertManagerDefinition` operation.
 *
 * @public
 */
export interface DeleteAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace to delete the alert manager definition from.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the input of a `DescribeAlertManagerDefinition` operation.
 *
 * @public
 */
export interface DescribeAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace to retrieve the alert manager definition from.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * The details of an alert manager definition. It is the configuration for the alert manager, including information about receivers for routing alerts.
 *
 * @public
 */
export interface AlertManagerDefinitionDescription {
  /**
   * A structure that displays the current status of the alert manager definition..
   *
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;

  /**
   * The actual alert manager definition.
   *
   * For details about the alert manager definition, see [AlertManagedDefinitionData](https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html).
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * The date and time that the alert manager definition was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the alert manager definition was most recently changed.
   *
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * Represents the output of a `DescribeAlertManagerDefinition` operation.
 *
 * @public
 */
export interface DescribeAlertManagerDefinitionResponse {
  /**
   * The alert manager definition.
   *
   * @public
   */
  alertManagerDefinition: AlertManagerDefinitionDescription | undefined;
}

/**
 * Represents the input of a `PutAlertManagerDefinition` operation.
 *
 * @public
 */
export interface PutAlertManagerDefinitionRequest {
  /**
   * The ID of the workspace to update the alert manager definition in.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The alert manager definition to use. A base64-encoded version of the YAML alert manager definition file.
   *
   * For details about the alert manager definition, see [AlertManagedDefinitionData](https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-AlertManagerDefinitionData.html).
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the output of a `PutAlertManagerDefinition` operation.
 *
 * @public
 */
export interface PutAlertManagerDefinitionResponse {
  /**
   * A structure that returns the current status of the alert manager definition.
   *
   * @public
   */
  status: AlertManagerDefinitionStatus | undefined;
}

/**
 * Represents the input of a `GetDefaultScraperConfiguration` operation.
 *
 * @public
 */
export interface GetDefaultScraperConfigurationRequest {}

/**
 * Represents the output of a `GetDefaultScraperConfiguration` operation.
 *
 * @public
 */
export interface GetDefaultScraperConfigurationResponse {
  /**
   * The configuration file. Base 64 encoded. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration)in the *Amazon Managed Service for Prometheus User Guide*.
   *
   * @public
   */
  configuration: Uint8Array | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to list tages for. Must be a workspace, scraper, or rule groups namespace resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tag keys and values associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The `AmpConfiguration` structure defines the Amazon Managed Service for Prometheus instance a scraper should send metrics to.
 *
 * @public
 */
export interface AmpConfiguration {
  /**
   * ARN of the Amazon Managed Service for Prometheus workspace.
   *
   * @public
   */
  workspaceArn: string | undefined;
}

/**
 * The configuration identifies the CloudWatch dataset used as a scraper destination.
 *
 * @public
 */
export interface CloudWatchConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the CloudWatch dataset. To use the default dataset, specify `arn:aws:cloudwatch:<region>:<account-id>:dataset/default`.
   *
   * @public
   */
  datasetArn: string | undefined;
}

/**
 * Where to send the metrics from a scraper.
 *
 * @public
 */
export type Destination =
  | Destination.AmpConfigurationMember
  | Destination.CloudWatchConfigurationMember
  | Destination.$UnknownMember;

/**
 * @public
 */
export namespace Destination {
  /**
   * The Amazon Managed Service for Prometheus workspace to send metrics to.
   *
   * @public
   */
  export interface AmpConfigurationMember {
    ampConfiguration: AmpConfiguration;
    cloudWatchConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The CloudWatch dataset to send metrics to.
   *
   * @public
   */
  export interface CloudWatchConfigurationMember {
    ampConfiguration?: never;
    cloudWatchConfiguration: CloudWatchConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ampConfiguration?: never;
    cloudWatchConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ampConfiguration: (value: AmpConfiguration) => T;
    cloudWatchConfiguration: (value: CloudWatchConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for collecting broker, topic, and consumer-group metrics from an Amazon MSK cluster through a managed Kafka exporter. The cluster must be active, have IAM authentication enabled, and be in the same account and Region as the scraper. Provisioned clusters with Standard brokers are supported. MSK Serverless clusters are not supported.
 *
 * Use a VPC source that can connect to the cluster's IAM bootstrap brokers. The exporter authenticates with the scraper's service-linked role. Metrics can be sent to an Amazon Managed Service for Prometheus workspace or a CloudWatch dataset.
 *
 * You must have an Amazon MSK cluster policy that grants the scraper's service-linked role access to the cluster. Without this policy, the scraper collects no Kafka metrics. For the required actions and example policies, see [Grant the scraper access to the cluster](https://docs.aws.amazon.com/prometheus/latest/userguide/prom-msk-kafka-exporter.html#prom-msk-kafka-exporter-access) in the *Amazon Managed Service for Prometheus User Guide*.
 *
 * @public
 */
export interface KafkaExporterConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon MSK cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * An anchored RE2 regular expression that selects the Kafka topics to monitor. The expression must start with `^` and end with `$`. If omitted, the default is `^.*$`, which selects all topics.
   *
   * @public
   */
  topicFilter?: string | undefined;

  /**
   * An anchored RE2 regular expression that selects the Kafka consumer groups to monitor. The expression must start with `^` and end with `$`. If omitted, the default is `^.*$`, which selects all consumer groups.
   *
   * @public
   */
  consumerGroupFilter?: string | undefined;
}

/**
 * The configuration for exporting metrics to an Amazon OpenSearch Service domain.
 *
 * @public
 */
export interface OpenSearchExporterConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon OpenSearch Service domain.
   *
   * @public
   */
  domainArn: string | undefined;
}

/**
 * Contains the configuration for an exporter managed by the scraper.
 *
 * @public
 */
export type ExporterConfiguration =
  | ExporterConfiguration.KafkaConfigurationMember
  | ExporterConfiguration.OpenSearchConfigurationMember
  | ExporterConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExporterConfiguration {
  /**
   * The configuration that the scraper uses to export metrics to an Amazon OpenSearch Service domain.
   *
   * @public
   */
  export interface OpenSearchConfigurationMember {
    openSearchConfiguration: OpenSearchExporterConfiguration;
    kafkaConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration that the scraper uses to collect metrics from an Amazon MSK cluster through a managed Kafka exporter.
   *
   * @public
   */
  export interface KafkaConfigurationMember {
    openSearchConfiguration?: never;
    kafkaConfiguration: KafkaExporterConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openSearchConfiguration?: never;
    kafkaConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openSearchConfiguration: (value: OpenSearchExporterConfiguration) => T;
    kafkaConfiguration: (value: KafkaExporterConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.
 *
 * @public
 */
export interface RoleConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the role used in the source account to enable cross-account scraping. For information about the contents of this policy, see [Cross-account setup](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#cross-account-remote-write).
   *
   * @public
   */
  sourceRoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role used in the target account to enable cross-account scraping. For information about the contents of this policy, see [Cross-account setup](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#cross-account-remote-write).
   *
   * @public
   */
  targetRoleArn?: string | undefined;
}

/**
 * A scrape configuration for a scraper, base 64 encoded. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration) in the *Amazon Managed Service for Prometheus User Guide*.
 *
 * @public
 */
export type ScrapeConfiguration =
  | ScrapeConfiguration.ConfigurationBlobMember
  | ScrapeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ScrapeConfiguration {
  /**
   * The base 64 encoded scrape configuration file.
   *
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
 * The `EksConfiguration` structure describes the connection to the Amazon EKS cluster from which a scraper collects metrics.
 *
 * @public
 */
export interface EksConfiguration {
  /**
   * ARN of the Amazon EKS cluster.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * A list of the security group IDs for the Amazon EKS cluster VPC configuration.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs for the Amazon EKS cluster VPC configuration.
   *
   * @public
   */
  subnetIds: string[] | undefined;
}

/**
 * The Amazon VPC configuration that specifies the network settings for a Prometheus collector to securely connect to Amazon MSK clusters. This configuration includes the security groups and subnets that control network access and placement for the collector.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The security group IDs that control network access for the Prometheus collector. These security groups must allow the collector to communicate with your Amazon MSK cluster on the required ports.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * The subnet IDs where the Prometheus collector will be deployed. The subnets must be in the same Amazon VPC as your Amazon MSK cluster and have network connectivity to the cluster.
   *
   * @public
   */
  subnetIds: string[] | undefined;
}

/**
 * The source of collected metrics for a scraper.
 *
 * @public
 */
export type Source =
  | Source.EksConfigurationMember
  | Source.VpcConfigurationMember
  | Source.$UnknownMember;

/**
 * @public
 */
export namespace Source {
  /**
   * The Amazon EKS cluster from which a scraper collects metrics.
   *
   * @public
   */
  export interface EksConfigurationMember {
    eksConfiguration: EksConfiguration;
    vpcConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The Amazon VPC configuration for the Prometheus collector when connecting to Amazon MSK clusters. This configuration enables secure, private network connectivity between the collector and your Amazon MSK cluster within your Amazon VPC.
   *
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
 * Represents the input of a `CreateScraper` operation.
 *
 * @public
 */
export interface CreateScraperRequest {
  /**
   * (optional) An alias to associate with the scraper. This is for your use, and does not need to be unique.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The configuration file to use in the new scraper. For more information, see [Scraper configuration](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-configuration) in the *Amazon Managed Service for Prometheus User Guide*.
   *
   * @public
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * The Amazon EKS or Amazon Web Services cluster from which the scraper will collect metrics.
   *
   * @public
   */
  source: Source | undefined;

  /**
   * The destination where the scraper sends the collected metrics. Valid destinations are Amazon Managed Service for Prometheus workspaces and CloudWatch datasets.
   *
   * @public
   */
  destination: Destination | undefined;

  /**
   * Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.
   *
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;

  /**
   * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * (Optional) The list of tag keys and values to associate with the scraper.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The exporter configurations for the scraper. You can configure at most one exporter, for either an Amazon OpenSearch Service domain or an Amazon MSK cluster. If you don't specify a value, the scraper is created without an exporter configuration.
   *
   * @public
   */
  exporters?: ExporterConfiguration[] | undefined;
}

/**
 * The `ScraperStatus` structure contains status information about the scraper.
 *
 * @public
 */
export interface ScraperStatus {
  /**
   * The current status of the scraper.
   *
   * @public
   */
  statusCode: ScraperStatusCode | undefined;
}

/**
 * Represents the output of a `CreateScraper` operation.
 *
 * @public
 */
export interface CreateScraperResponse {
  /**
   * The ID of the new scraper.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new scraper.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A structure that displays the current status of the scraper.
   *
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * The list of tag keys and values that are associated with the scraper.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents the input of a `DeleteScraper` operation.
 *
 * @public
 */
export interface DeleteScraperRequest {
  /**
   * The ID of the scraper to delete.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the output of a `DeleteScraper` operation.
 *
 * @public
 */
export interface DeleteScraperResponse {
  /**
   * The ID of the scraper to delete.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The current status of the scraper.
   *
   * @public
   */
  status: ScraperStatus | undefined;
}

/**
 * Represents the input of a `DescribeScraper` operation.
 *
 * @public
 */
export interface DescribeScraperRequest {
  /**
   * The ID of the scraper to describe.
   *
   * @public
   */
  scraperId: string | undefined;
}

/**
 * The `ScraperDescription` structure contains the full details about one scraper in your account.
 *
 * @public
 */
export interface ScraperDescription {
  /**
   * (Optional) A name associated with the scraper.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ID of the scraper. For example, `s-example1-1234-abcd-5678-ef9012abcd34`.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scraper. For example, `arn:aws:aps:<region>:123456798012:scraper/s-example1-1234-abcd-5678-ef9012abcd34`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.
   *
   * For example, `arn:aws:iam::123456789012:role/service-role/AmazonGrafanaServiceRole-12example`.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A structure that contains the current status of the scraper.
   *
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * The date and time that the scraper was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the scraper was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * (Optional) The list of tag keys and values associated with the scraper.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * If there is a failure, the reason for the failure.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The configuration in use by the scraper.
   *
   * @public
   */
  scrapeConfiguration: ScrapeConfiguration | undefined;

  /**
   * The Amazon EKS cluster from which the scraper collects metrics.
   *
   * @public
   */
  source: Source | undefined;

  /**
   * The destination where the scraper sends metrics. Valid destinations are Amazon Managed Service for Prometheus workspaces and CloudWatch datasets.
   *
   * @public
   */
  destination: Destination | undefined;

  /**
   * This structure displays information about the IAM roles used for cross-account scraping configuration.
   *
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;

  /**
   * The exporter configurations for the scraper, if configured. The list contains at most one configuration, for either an Amazon OpenSearch Service domain or an Amazon MSK cluster.
   *
   * @public
   */
  exporters?: ExporterConfiguration[] | undefined;
}

/**
 * Represents the output of a `DescribeScraper` operation.
 *
 * @public
 */
export interface DescribeScraperResponse {
  /**
   * Contains details about the scraper.
   *
   * @public
   */
  scraper: ScraperDescription | undefined;
}

/**
 * Represents the input of a `ListScrapers` operation.
 *
 * @public
 */
export interface ListScrapersRequest {
  /**
   * (Optional) A list of key-value pairs to filter the list of scrapers returned. Keys include `status`, `sourceArn`, `destinationArn`, and `alias`.
   *
   * Filters on the same key are `OR`'d together, and filters on different keys are `AND`'d together. For example, `status=ACTIVE&status=CREATING&alias=Test`, will return all scrapers that have the alias Test, and are either in status ACTIVE or CREATING.
   *
   * To find all active scrapers that are sending metrics to a specific Amazon Managed Service for Prometheus workspace, you would use the ARN of the workspace in a query:
   *
   * `status=ACTIVE&destinationArn=arn:aws:aps:us-east-1:123456789012:workspace/ws-example1-1234-abcd-56ef-123456789012`
   *
   * If this is included, it filters the results to only the scrapers that match the filter.
   *
   * @public
   */
  filters?: Record<string, string[]> | undefined;

  /**
   * (Optional) The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Optional) The maximum number of scrapers to return in one `ListScrapers` operation. The range is 1-1000.
   *
   * If you omit this parameter, the default of 100 is used.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The `ScraperSummary` structure contains a summary of the details about one scraper in your account.
 *
 * @public
 */
export interface ScraperSummary {
  /**
   * (Optional) A name associated with the scraper.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ID of the scraper.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scraper.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the scraper to discover and collect metrics on your behalf.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A structure that contains the current status of the scraper.
   *
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * The date and time that the scraper was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the scraper was last modified.
   *
   * @public
   */
  lastModifiedAt: Date | undefined;

  /**
   * (Optional) The list of tag keys and values associated with the scraper.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * If there is a failure, the reason for the failure.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The Amazon EKS cluster from which the scraper collects metrics.
   *
   * @public
   */
  source: Source | undefined;

  /**
   * The destination where the scraper sends metrics. Valid destinations are Amazon Managed Service for Prometheus workspaces and CloudWatch datasets.
   *
   * @public
   */
  destination: Destination | undefined;

  /**
   * This structure displays information about the IAM roles used for cross-account scraping configuration.
   *
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;

  /**
   * The exporter configurations for the scraper, if configured. The list contains at most one configuration, for either an Amazon OpenSearch Service domain or an Amazon MSK cluster.
   *
   * @public
   */
  exporters?: ExporterConfiguration[] | undefined;
}

/**
 * Represents the output of a `ListScrapers` operation.
 *
 * @public
 */
export interface ListScrapersResponse {
  /**
   * A list of `ScraperSummary` structures giving information about scrapers in the account that match the filters provided.
   *
   * @public
   */
  scrapers: ScraperSummary[] | undefined;

  /**
   * A token indicating that there are more results to retrieve. You can use this token as part of your next `ListScrapers` operation to retrieve those results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteScraperLoggingConfigurationRequest {
  /**
   * The ID of the scraper whose logging configuration will be deleted.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is processed exactly once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScraperLoggingConfigurationRequest {
  /**
   * The ID of the scraper whose logging configuration will be described.
   *
   * @public
   */
  scraperId: string | undefined;
}

/**
 * Configuration details for logging to CloudWatch Logs.
 *
 * @public
 */
export interface CloudWatchLogDestination {
  /**
   * The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this operation.
   *
   * @public
   */
  logGroupArn: string | undefined;
}

/**
 * The destination where scraper logs are sent.
 *
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
   * The CloudWatch Logs configuration for the scraper logging destination.
   *
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
 * Configuration settings for a scraper component.
 *
 * @public
 */
export interface ComponentConfig {
  /**
   * Configuration options for the scraper component.
   *
   * @public
   */
  options?: Record<string, string> | undefined;
}

/**
 * A component of a Amazon Managed Service for Prometheus scraper that can be configured for logging.
 *
 * @public
 */
export interface ScraperComponent {
  /**
   * The type of the scraper component.
   *
   * @public
   */
  type: ScraperComponentType | undefined;

  /**
   * The configuration settings for the scraper component.
   *
   * @public
   */
  config?: ComponentConfig | undefined;
}

/**
 * The status of a scraper logging configuration.
 *
 * @public
 */
export interface ScraperLoggingConfigurationStatus {
  /**
   * The status code of the scraper logging configuration.
   *
   * @public
   */
  statusCode: ScraperLoggingConfigurationStatusCode | undefined;

  /**
   * The reason for the current status of the scraper logging configuration.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScraperLoggingConfigurationResponse {
  /**
   * The status of the scraper logging configuration.
   *
   * @public
   */
  status: ScraperLoggingConfigurationStatus | undefined;

  /**
   * The ID of the scraper.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The destination where scraper logs are sent.
   *
   * @public
   */
  loggingDestination: ScraperLoggingDestination | undefined;

  /**
   * The list of scraper components configured for logging.
   *
   * @public
   */
  scraperComponents: ScraperComponent[] | undefined;

  /**
   * The date and time when the logging configuration was last modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateScraperLoggingConfigurationRequest {
  /**
   * The ID of the scraper whose logging configuration will be updated.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The destination where scraper logs will be sent.
   *
   * @public
   */
  loggingDestination: ScraperLoggingDestination | undefined;

  /**
   * The list of scraper components to configure for logging.
   *
   * @public
   */
  scraperComponents?: ScraperComponent[] | undefined;
}

/**
 * @public
 */
export interface UpdateScraperLoggingConfigurationResponse {
  /**
   * The status of the updated scraper logging configuration.
   *
   * @public
   */
  status: ScraperLoggingConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface UpdateScraperRequest {
  /**
   * The ID of the scraper to update.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The new alias of the scraper.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * Contains the base-64 encoded YAML configuration for the scraper.
   *
   * > **Note:** For more information about configuring a scraper, see [Using an Amazon Web Services managed collector](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html) in the *Amazon Managed Service for Prometheus User Guide*.
   *
   * @public
   */
  scrapeConfiguration?: ScrapeConfiguration | undefined;

  /**
   * The new destination where the scraper sends metrics. Valid destinations are Amazon Managed Service for Prometheus workspaces and CloudWatch datasets.
   *
   * @public
   */
  destination?: Destination | undefined;

  /**
   * Use this structure to enable cross-account access, so that you can use a target account to access Prometheus metrics from source accounts.
   *
   * @public
   */
  roleConfiguration?: RoleConfiguration | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The exporter configurations for the scraper. You can configure at most one exporter, for either an Amazon OpenSearch Service domain or an Amazon MSK cluster. If you don't specify a value, the existing exporter configuration remains unchanged. Specify an empty list to remove the exporter.
   *
   * @public
   */
  exporters?: ExporterConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateScraperResponse {
  /**
   * The ID of the updated scraper.
   *
   * @public
   */
  scraperId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated scraper.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A structure that displays the current status of the scraper.
   *
   * @public
   */
  status: ScraperStatus | undefined;

  /**
   * The list of tag keys and values that are associated with the scraper.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource to apply tags to.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys and values to associate with the resource.
   *
   * Keys must not begin with `aws:`.
   *
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
   * The ARN of the resource from which to remove a tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to remove.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Configuration for threshold settings that determine when values near expected values should be ignored during anomaly detection.
 *
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
   * The absolute amount by which values can differ from expected values before being considered anomalous.
   *
   * @public
   */
  export interface AmountMember {
    amount: number;
    ratio?: never;
    $unknown?: never;
  }

  /**
   * The ratio by which values can differ from expected values before being considered anomalous.
   *
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
 * Configuration for the Random Cut Forest algorithm used for anomaly detection in time-series data.
 *
 * @public
 */
export interface RandomCutForestConfiguration {
  /**
   * The Prometheus query used to retrieve the time-series data for anomaly detection.
   *
   * > **Important:**
   * >
   * > Random Cut Forest queries must be wrapped by a supported PromQL aggregation operator. For more information, see [Aggregation operators](https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators) on the *Prometheus docs* website.
   * >
   * > **Supported PromQL aggregation operators**: `avg`, `count`, `group`, `max`, `min`, `quantile`, `stddev`, `stdvar`, and `sum`.
   *
   * @public
   */
  query: string | undefined;

  /**
   * The number of consecutive data points used to create a shingle for the Random Cut Forest algorithm. The default number is 8 consecutive data points.
   *
   * @public
   */
  shingleSize?: number | undefined;

  /**
   * The number of data points sampled from the input stream for the Random Cut Forest algorithm. The default number is 256 consecutive data points.
   *
   * @public
   */
  sampleSize?: number | undefined;

  /**
   * Configuration for ignoring values that are near expected values from above during anomaly detection.
   *
   * @public
   */
  ignoreNearExpectedFromAbove?: IgnoreNearExpected | undefined;

  /**
   * Configuration for ignoring values that are near expected values from below during anomaly detection.
   *
   * @public
   */
  ignoreNearExpectedFromBelow?: IgnoreNearExpected | undefined;
}

/**
 * The configuration for the anomaly detection algorithm.
 *
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
   * The Random Cut Forest algorithm configuration for anomaly detection.
   *
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
 * Specifies the action to take when data is missing during anomaly detection evaluation.
 *
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
   * Marks missing data points as anomalies.
   *
   * @public
   */
  export interface MarkAsAnomalyMember {
    markAsAnomaly: boolean;
    skip?: never;
    $unknown?: never;
  }

  /**
   * Skips evaluation when data is missing.
   *
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
   * The identifier of the workspace where the anomaly detector will be created.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A user-friendly name for the anomaly detector.
   *
   * @public
   */
  alias: string | undefined;

  /**
   * The frequency, in seconds, at which the anomaly detector evaluates metrics. The default value is 60 seconds.
   *
   * @public
   */
  evaluationIntervalInSeconds?: number | undefined;

  /**
   * Specifies the action to take when data is missing during evaluation.
   *
   * @public
   */
  missingDataAction?: AnomalyDetectorMissingDataAction | undefined;

  /**
   * The algorithm configuration for the anomaly detector.
   *
   * @public
   */
  configuration: AnomalyDetectorConfiguration | undefined;

  /**
   * The Amazon Managed Service for Prometheus metric labels to associate with the anomaly detector.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The metadata to apply to the anomaly detector to assist with categorization and organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The status information of an anomaly detector.
 *
 * @public
 */
export interface AnomalyDetectorStatus {
  /**
   * The status code of the anomaly detector.
   *
   * @public
   */
  statusCode: AnomalyDetectorStatusCode | undefined;

  /**
   * A description of the current status of the anomaly detector.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateAnomalyDetectorResponse {
  /**
   * The unique identifier of the created anomaly detector.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created anomaly detector.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status information of the created anomaly detector.
   *
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * The tags applied to the created anomaly detector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteAnomalyDetectorRequest {
  /**
   * The identifier of the workspace containing the anomaly detector to delete.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The identifier of the anomaly detector to delete.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorRequest {
  /**
   * The identifier of the workspace containing the anomaly detector.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The identifier of the anomaly detector to describe.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;
}

/**
 * Detailed information about an anomaly detector.
 *
 * @public
 */
export interface AnomalyDetectorDescription {
  /**
   * The Amazon Resource Name (ARN) of the anomaly detector.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the anomaly detector.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * The user-friendly name of the anomaly detector.
   *
   * @public
   */
  alias: string | undefined;

  /**
   * The frequency, in seconds, at which the anomaly detector evaluates metrics.
   *
   * @public
   */
  evaluationIntervalInSeconds?: number | undefined;

  /**
   * The action taken when data is missing during evaluation.
   *
   * @public
   */
  missingDataAction?: AnomalyDetectorMissingDataAction | undefined;

  /**
   * The algorithm configuration of the anomaly detector.
   *
   * @public
   */
  configuration?: AnomalyDetectorConfiguration | undefined;

  /**
   * The Amazon Managed Service for Prometheus metric labels associated with the anomaly detector.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * The current status of the anomaly detector.
   *
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * The timestamp when the anomaly detector was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the anomaly detector was last modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The tags applied to the anomaly detector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeAnomalyDetectorResponse {
  /**
   * The detailed information about the anomaly detector.
   *
   * @public
   */
  anomalyDetector: AnomalyDetectorDescription | undefined;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsRequest {
  /**
   * The identifier of the workspace containing the anomaly detectors to list.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * Filters the results to anomaly detectors with the specified alias.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The maximum number of results to return in a single call. Valid range is 1 to 1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token to continue retrieving results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about an anomaly detector for list operations.
 *
 * @public
 */
export interface AnomalyDetectorSummary {
  /**
   * The Amazon Resource Name (ARN) of the anomaly detector.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the anomaly detector.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * The user-friendly name of the anomaly detector.
   *
   * @public
   */
  alias: string | undefined;

  /**
   * The current status of the anomaly detector.
   *
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * The timestamp when the anomaly detector was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the anomaly detector was last modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The tags applied to the anomaly detector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAnomalyDetectorsResponse {
  /**
   * The list of anomaly detectors in the workspace.
   *
   * @public
   */
  anomalyDetectors: AnomalyDetectorSummary[] | undefined;

  /**
   * The pagination token to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAnomalyDetectorRequest {
  /**
   * The identifier of the workspace containing the anomaly detector to update.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The identifier of the anomaly detector to update.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * The frequency, in seconds, at which the anomaly detector evaluates metrics.
   *
   * @public
   */
  evaluationIntervalInSeconds?: number | undefined;

  /**
   * Specifies the action to take when data is missing during evaluation.
   *
   * @public
   */
  missingDataAction?: AnomalyDetectorMissingDataAction | undefined;

  /**
   * The algorithm configuration for the anomaly detector.
   *
   * @public
   */
  configuration: AnomalyDetectorConfiguration | undefined;

  /**
   * The Amazon Managed Service for Prometheus metric labels to associate with the anomaly detector.
   *
   * @public
   */
  labels?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface PutAnomalyDetectorResponse {
  /**
   * The unique identifier of the updated anomaly detector.
   *
   * @public
   */
  anomalyDetectorId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated anomaly detector.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status information of the updated anomaly detector.
   *
   * @public
   */
  status: AnomalyDetectorStatus | undefined;

  /**
   * The tags applied to the updated anomaly detector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents the input of a `CreateWorkspace` operation.
 *
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * An alias that you assign to this workspace to help you identify it. It does not need to be unique.
   *
   * Blank spaces at the beginning or end of the alias that you specify will be trimmed from the value used.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The list of tag keys and values to associate with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * (optional) The ARN for a customer managed KMS key to use for encrypting data within your workspace. For more information about using your own key in your workspace, see [Encryption at rest](https://docs.aws.amazon.com/prometheus/latest/userguide/encryption-at-rest-Amazon-Service-Prometheus.html) in the *Amazon Managed Service for Prometheus User Guide*.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * The status of the workspace.
 *
 * @public
 */
export interface WorkspaceStatus {
  /**
   * The current status of the workspace.
   *
   * @public
   */
  statusCode: WorkspaceStatusCode | undefined;
}

/**
 * Represents the output of a `CreateWorkspace` operation.
 *
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * The unique ID for the new workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ARN for the new workspace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the new workspace. Immediately after you create the workspace, the status is usually `CREATING`.
   *
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * The list of tag keys and values that are associated with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * (optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Represents the input of a `DeleteWorkspace` operation.
 *
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * The ID of the workspace to delete.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the input of a `DescribeWorkspace` operation.
 *
 * @public
 */
export interface DescribeWorkspaceRequest {
  /**
   * The ID of the workspace to describe.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * The full details about one Amazon Managed Service for Prometheus workspace in your account.
 *
 * @public
 */
export interface WorkspaceDescription {
  /**
   * The unique ID for the workspace. For example, `ws-example1-1234-abcd-5678-ef90abcd1234`.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The alias that is assigned to this workspace to help identify it. It does not need to be unique.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ARN of the workspace. For example, `arn:aws:aps:<region>:123456789012:workspace/ws-example1-1234-abcd-5678-ef90abcd1234`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the workspace.
   *
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * The Prometheus endpoint available for this workspace. For example, `https://aps-workspaces.<region>.amazonaws.com/workspaces/ws-example1-1234-abcd-5678-ef90abcd1234/api/v1/`.
   *
   * @public
   */
  prometheusEndpoint?: string | undefined;

  /**
   * The date and time that the workspace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The list of tag keys and values that are associated with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * (optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Represents the output of a `DescribeWorkspace` operation.
 *
 * @public
 */
export interface DescribeWorkspaceResponse {
  /**
   * A structure that contains details about the workspace.
   *
   * @public
   */
  workspace: WorkspaceDescription | undefined;
}

/**
 * Represents the input of a `ListWorkspaces` operation.
 *
 * @public
 */
export interface ListWorkspacesRequest {
  /**
   * The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call.
   *
   * For example, if your initial request has `maxResults` of 10, and there are 12 workspaces to return, then your initial request will return 10 and a `nextToken`. Using the next token in a subsequent call will return the remaining 2 workspaces.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * If this is included, it filters the results to only the workspaces with names that start with the value that you specify here.
   *
   * Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The maximum number of workspaces to return per request. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The information about one Amazon Managed Service for Prometheus workspace in your account.
 *
 * @public
 */
export interface WorkspaceSummary {
  /**
   * The unique ID for the workspace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The alias that is assigned to this workspace to help identify it. It does not need to be unique.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ARN of the workspace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the workspace.
   *
   * @public
   */
  status: WorkspaceStatus | undefined;

  /**
   * The date and time that the workspace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The list of tag keys and values that are associated with the workspace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * (optional) If the workspace was created with a customer managed KMS key, the ARN for the key used.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * Represents the output of a `ListWorkspaces` operation.
 *
 * @public
 */
export interface ListWorkspacesResponse {
  /**
   * An array of `WorkspaceSummary` structures containing information about the workspaces requested.
   *
   * @public
   */
  workspaces: WorkspaceSummary[] | undefined;

  /**
   * A token indicating that there are more results to retrieve. You can use this token as part of your next `ListWorkspaces` request to retrieve those results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `CreateLoggingConfiguration` operation.
 *
 * @public
 */
export interface CreateLoggingConfigurationRequest {
  /**
   * The ID of the workspace to create the logging configuration for.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the CloudWatch log group to which the vended log data will be published. This log group must exist prior to calling this operation.
   *
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The status of the logging configuration.
 *
 * @public
 */
export interface LoggingConfigurationStatus {
  /**
   * The current status of the current rules and alerting logging configuration.
   *
   * > **Note:** These logging configurations are only for rules and alerting logs.
   *
   * @public
   */
  statusCode: LoggingConfigurationStatusCode | undefined;

  /**
   * If failed, the reason for the failure.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Represents the output of a `CreateLoggingConfiguration` operation.
 *
 * @public
 */
export interface CreateLoggingConfigurationResponse {
  /**
   * A structure that displays the current status of the logging configuration.
   *
   * @public
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * Represents the input of a `DeleteLoggingConfiguration` operation.
 *
 * @public
 */
export interface DeleteLoggingConfigurationRequest {
  /**
   * The ID of the workspace containing the logging configuration to delete.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the input of a `DescribeLoggingConfiguration` operation.
 *
 * @public
 */
export interface DescribeLoggingConfigurationRequest {
  /**
   * The ID of the workspace to describe the logging configuration for.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * Contains information about the current rules and alerting logging configuration for the workspace.
 *
 * > **Note:** These logging configurations are only for rules and alerting logs.
 *
 * @public
 */
export interface LoggingConfigurationMetadata {
  /**
   * The current status of the logging configuration.
   *
   * @public
   */
  status: LoggingConfigurationStatus | undefined;

  /**
   * The ID of the workspace the logging configuration is for.
   *
   * @public
   */
  workspace: string | undefined;

  /**
   * The ARN of the CloudWatch log group to which the vended log data will be published.
   *
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * The date and time that the logging configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the logging configuration was most recently changed.
   *
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * Represents the output of a `DescribeLoggingConfiguration` operation.
 *
 * @public
 */
export interface DescribeLoggingConfigurationResponse {
  /**
   * A structure that displays the information about the logging configuration.
   *
   * @public
   */
  loggingConfiguration: LoggingConfigurationMetadata | undefined;
}

/**
 * Represents the input of an `UpdateLoggingConfiguration` operation.
 *
 * @public
 */
export interface UpdateLoggingConfigurationRequest {
  /**
   * The ID of the workspace to update the logging configuration for.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The ARN of the CloudWatch log group to which the vended log data will be published.
   *
   * @public
   */
  logGroupArn: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the output of an `UpdateLoggingConfiguration` operation.
 *
 * @public
 */
export interface UpdateLoggingConfigurationResponse {
  /**
   * A structure that contains the current status of the logging configuration.
   *
   * @public
   */
  status: LoggingConfigurationStatus | undefined;
}

/**
 * Filtering criteria that determine which queries are logged.
 *
 * @public
 */
export interface LoggingFilter {
  /**
   * The Query Samples Processed (QSP) threshold above which queries will be logged. Queries processing more samples than this threshold will be captured in logs.
   *
   * @public
   */
  qspThreshold: number | undefined;
}

/**
 * Defines a destination and its associated filtering criteria for query logging.
 *
 * @public
 */
export interface LoggingDestination {
  /**
   * Configuration details for logging to CloudWatch Logs.
   *
   * @public
   */
  cloudWatchLogs: CloudWatchLogDestination | undefined;

  /**
   * Filtering criteria that determine which queries are logged.
   *
   * @public
   */
  filters: LoggingFilter | undefined;
}

/**
 * @public
 */
export interface CreateQueryLoggingConfigurationRequest {
  /**
   * The ID of the workspace for which to create the query logging configuration.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The destinations where query logs will be sent. Only CloudWatch Logs destination is supported. The list must contain exactly one element.
   *
   * @public
   */
  destinations: LoggingDestination[] | undefined;

  /**
   * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The status information for a query logging configuration.
 *
 * @public
 */
export interface QueryLoggingConfigurationStatus {
  /**
   * The current status of the query logging configuration.
   *
   * @public
   */
  statusCode: QueryLoggingConfigurationStatusCode | undefined;

  /**
   * If there is a failure, the reason for the failure.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateQueryLoggingConfigurationResponse {
  /**
   * The current status of the query logging configuration.
   *
   * @public
   */
  status: QueryLoggingConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteQueryLoggingConfigurationRequest {
  /**
   * The ID of the workspace from which to delete the query logging configuration.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueryLoggingConfigurationRequest {
  /**
   * The ID of the workspace for which to retrieve the query logging configuration.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * The metadata for a query logging configuration.
 *
 * @public
 */
export interface QueryLoggingConfigurationMetadata {
  /**
   * The current status of the query logging configuration.
   *
   * @public
   */
  status: QueryLoggingConfigurationStatus | undefined;

  /**
   * The ID of the workspace associated with this query logging configuration.
   *
   * @public
   */
  workspace: string | undefined;

  /**
   * The configured destinations for the query logging configuration.
   *
   * @public
   */
  destinations: LoggingDestination[] | undefined;

  /**
   * The date and time when the query logging configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the query logging configuration was last modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryLoggingConfigurationResponse {
  /**
   * The detailed information about the query logging configuration for the specified workspace.
   *
   * @public
   */
  queryLoggingConfiguration: QueryLoggingConfigurationMetadata | undefined;
}

/**
 * @public
 */
export interface UpdateQueryLoggingConfigurationRequest {
  /**
   * The ID of the workspace for which to update the query logging configuration.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The destinations where query logs will be sent. Only CloudWatch Logs destination is supported. The list must contain exactly one element.
   *
   * @public
   */
  destinations: LoggingDestination[] | undefined;

  /**
   * (Optional) A unique, case-sensitive identifier that you can provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueryLoggingConfigurationResponse {
  /**
   * The current status of the query logging configuration.
   *
   * @public
   */
  status: QueryLoggingConfigurationStatus | undefined;
}

/**
 * Represents the input of a `CreateRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface CreateRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace to add the rule groups namespace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The name for the new rule groups namespace.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The rules file to use in the new namespace.
   *
   * Contains the base64-encoded version of the YAML rules file.
   *
   * For details about the rule groups namespace structure, see [RuleGroupsNamespaceData](https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html).
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The list of tag keys and values to associate with the rule groups namespace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The status information about a rule groups namespace.
 *
 * @public
 */
export interface RuleGroupsNamespaceStatus {
  /**
   * The current status of the namespace.
   *
   * @public
   */
  statusCode: RuleGroupsNamespaceStatusCode | undefined;

  /**
   * The reason for the failure, if any.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * Represents the output of a `CreateRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface CreateRuleGroupsNamespaceResponse {
  /**
   * The name of the new rule groups namespace.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the new rule groups namespace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A structure that returns the current status of the rule groups namespace.
   *
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The list of tag keys and values that are associated with the namespace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents the input of a `DeleteRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface DeleteRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace containing the rule groups namespace and definition to delete.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The name of the rule groups namespace to delete.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the input of a `DescribeRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface DescribeRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace containing the rule groups namespace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The name of the rule groups namespace that you want information for.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * The details about one rule groups namespace.
 *
 * @public
 */
export interface RuleGroupsNamespaceDescription {
  /**
   * The ARN of the rule groups namespace. For example, `arn:aws:aps:<region>:123456789012:rulegroupsnamespace/ws-example1-1234-abcd-5678-ef90abcd1234/rulesfile1`.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the rule groups namespace.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the rule groups namespace.
   *
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The rule groups file used in the namespace.
   *
   * For details about the rule groups namespace structure, see [RuleGroupsNamespaceData](https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html).
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * The date and time that the rule groups namespace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the rule groups namespace was most recently changed.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The list of tag keys and values that are associated with the rule groups namespace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents the output of a `DescribeRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface DescribeRuleGroupsNamespaceResponse {
  /**
   * The information about the rule groups namespace.
   *
   * @public
   */
  ruleGroupsNamespace: RuleGroupsNamespaceDescription | undefined;
}

/**
 * Represents the input of a `ListRuleGroupsNamespaces` operation.
 *
 * @public
 */
export interface ListRuleGroupsNamespacesRequest {
  /**
   * The ID of the workspace containing the rule groups namespaces.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * Use this parameter to filter the rule groups namespaces that are returned. Only the namespaces with names that begin with the value that you specify are returned.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The token for the next set of items to return. You receive this token from a previous call, and use it to get the next page of results. The other parameters must be the same as the initial call.
   *
   * For example, if your initial request has `maxResults` of 10, and there are 12 rule groups namespaces to return, then your initial request will return 10 and a `nextToken`. Using the next token in a subsequent call will return the remaining 2 namespaces.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The high-level information about a rule groups namespace. To retrieve more information, use `DescribeRuleGroupsNamespace`.
 *
 * @public
 */
export interface RuleGroupsNamespaceSummary {
  /**
   * The ARN of the rule groups namespace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the rule groups namespace.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A structure that displays the current status of the rule groups namespace.
   *
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The date and time that the rule groups namespace was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time that the rule groups namespace was most recently changed.
   *
   * @public
   */
  modifiedAt: Date | undefined;

  /**
   * The list of tag keys and values that are associated with the rule groups namespace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents the output of a `ListRuleGroupsNamespaces` operation.
 *
 * @public
 */
export interface ListRuleGroupsNamespacesResponse {
  /**
   * The returned list of rule groups namespaces.
   *
   * @public
   */
  ruleGroupsNamespaces: RuleGroupsNamespaceSummary[] | undefined;

  /**
   * A token indicating that there are more results to retrieve. You can use this token as part of your next `ListRuleGroupsNamespaces` request to retrieve those results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the input of a `PutRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface PutRuleGroupsNamespaceRequest {
  /**
   * The ID of the workspace where you are updating the rule groups namespace.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The name of the rule groups namespace that you are updating.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new rules file to use in the namespace. A base64-encoded version of the YAML rule groups file.
   *
   * For details about the rule groups namespace structure, see [RuleGroupsNamespaceData](https://docs.aws.amazon.com/prometheus/latest/APIReference/yaml-RuleGroupsNamespaceData.html).
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents the output of a `PutRuleGroupsNamespace` operation.
 *
 * @public
 */
export interface PutRuleGroupsNamespaceResponse {
  /**
   * The name of the rule groups namespace that was updated.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the rule groups namespace.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A structure that includes the current status of the rule groups namespace.
   *
   * @public
   */
  status: RuleGroupsNamespaceStatus | undefined;

  /**
   * The list of tag keys and values that are associated with the namespace.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Represents the input of an `UpdateWorkspaceAlias` operation.
 *
 * @public
 */
export interface UpdateWorkspaceAliasRequest {
  /**
   * The ID of the workspace to update.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The new alias for the workspace. It does not need to be unique.
   *
   * Amazon Managed Service for Prometheus will automatically strip any blank spaces from the beginning and end of the alias that you specify.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * A unique identifier that you can provide to ensure the idempotency of the request. Case-sensitive.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationRequest {
  /**
   * The ID of the workspace that you want to retrieve information for. To find the IDs of your workspaces, use the [ListWorkspaces](https://docs.aws.amazon.com/prometheus/latest/APIReference/API_ListWorkspaces.htm) operation.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * This structure contains the information about the limits that apply to time series that match one label set.
 *
 * @public
 */
export interface LimitsPerLabelSetEntry {
  /**
   * The maximum number of active series that can be ingested that match this label set.
   *
   * Setting this to 0 causes no label set limit to be enforced, but it does cause Amazon Managed Service for Prometheus to vend label set metrics to CloudWatch
   *
   * @public
   */
  maxSeries?: number | undefined;
}

/**
 * This structure defines one label set used to enforce active time series limits for the workspace, and defines the limit for that label set.
 *
 * A label set is a unique combination of label-value pairs. Use them to control time series limits and to monitor usage by specific label groups. Example label sets might be `team:finance` or `env:prod`
 *
 * @public
 */
export interface LimitsPerLabelSet {
  /**
   * This structure contains the information about the limits that apply to time series that match this label set.
   *
   * @public
   */
  limits: LimitsPerLabelSetEntry | undefined;

  /**
   * This defines one label set that will have an enforced active time series limit.
   *
   * Label values accept ASCII characters and must contain at least one character that isn't whitespace. ASCII control characters are not accepted. If the label name is metric name label `__name__`, then the *metric* part of the name must conform to the following pattern: `[a-zA-Z_:][a-zA-Z0-9_:]*`
   *
   * @public
   */
  labelSet: Record<string, string> | undefined;
}

/**
 * This structure displays the current status of the workspace configuration, and might also contain a reason for that status.
 *
 * @public
 */
export interface WorkspaceConfigurationStatus {
  /**
   * The current status of the workspace configuration.
   *
   * @public
   */
  statusCode: WorkspaceConfigurationStatusCode | undefined;

  /**
   * The reason for the current status, if a reason is available.
   *
   * @public
   */
  statusReason?: string | undefined;
}

/**
 * This structure contains the description of the workspace configuration.
 *
 * @public
 */
export interface WorkspaceConfigurationDescription {
  /**
   * This structure displays the current status of the workspace configuration, and might also contain a reason for that status.
   *
   * @public
   */
  status: WorkspaceConfigurationStatus | undefined;

  /**
   * This is an array of structures, where each structure displays one label sets for the workspace and the limits for that label set.
   *
   * @public
   */
  limitsPerLabelSet?: LimitsPerLabelSet[] | undefined;

  /**
   * This field displays how many days that metrics are retained in the workspace.
   *
   * @public
   */
  retentionPeriodInDays?: number | undefined;

  /**
   * This field displays the out of order time window in seconds for accepting out of order samples.
   *
   * @public
   */
  outOfOrderTimeWindowInSeconds?: number | undefined;

  /**
   * This field displays the duration in seconds that rule evaluation queries are offset into the past.
   *
   * @public
   */
  ruleQueryOffsetInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface DescribeWorkspaceConfigurationResponse {
  /**
   * This structure contains the information about the workspace configuration.
   *
   * @public
   */
  workspaceConfiguration: WorkspaceConfigurationDescription | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationRequest {
  /**
   * The ID of the workspace that you want to update. To find the IDs of your workspaces, use the [ListWorkspaces](https://docs.aws.amazon.com/prometheus/latest/APIReference/API_ListWorkspaces.htm) operation.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * You can include a token in your operation to make it an idempotent opeartion.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * This is an array of structures, where each structure defines a label set for the workspace, and defines the active time series limit for each of those label sets. Each label name in a label set must be unique.
   *
   * @public
   */
  limitsPerLabelSet?: LimitsPerLabelSet[] | undefined;

  /**
   * Specifies how many days that metrics will be retained in the workspace.
   *
   * @public
   */
  retentionPeriodInDays?: number | undefined;

  /**
   * Specifies the time window in seconds for accepting out of order samples. Out of order samples older than this window are rejected.
   *
   * @public
   */
  outOfOrderTimeWindowInSeconds?: number | undefined;

  /**
   * Specifies the duration in seconds to offset rule evaluation queries into the past. This allows ingested samples to be available before rule evaluation.
   *
   * @public
   */
  ruleQueryOffsetInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateWorkspaceConfigurationResponse {
  /**
   * The status of the workspace configuration.
   *
   * @public
   */
  status: WorkspaceConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The ID of the workspace from which to delete the resource-based policy.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is safe to retry (idempotent).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The revision ID of the policy to delete. Use this parameter to ensure that you are deleting the correct version of the policy.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyRequest {
  /**
   * The ID of the workspace to describe the resource-based policy for.
   *
   * @public
   */
  workspaceId: string | undefined;
}

/**
 * @public
 */
export interface DescribeResourcePolicyResponse {
  /**
   * The JSON policy document for the resource-based policy attached to the workspace.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * The current status of the resource-based policy.
   *
   * @public
   */
  policyStatus: WorkspacePolicyStatusCode | undefined;

  /**
   * The revision ID of the current resource-based policy.
   *
   * @public
   */
  revisionId: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The ID of the workspace to attach the resource-based policy to.
   *
   * @public
   */
  workspaceId: string | undefined;

  /**
   * The JSON policy document to use as the resource-based policy. This policy defines the permissions that other AWS accounts or services have to access your workspace.
   *
   * @public
   */
  policyDocument: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is safe to retry (idempotent).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The revision ID of the policy to update. Use this parameter to ensure that you are updating the correct version of the policy. If you don't specify a revision ID, the policy is updated regardless of its current revision.
   *
   * For the first **PUT** request on a workspace that doesn't have an existing resource policy, you can specify `NO_POLICY` as the revision ID.
   *
   * @public
   */
  revisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The current status of the resource-based policy.
   *
   * @public
   */
  policyStatus: WorkspacePolicyStatusCode | undefined;

  /**
   * The revision ID of the newly created or updated resource-based policy.
   *
   * @public
   */
  revisionId: string | undefined;
}
