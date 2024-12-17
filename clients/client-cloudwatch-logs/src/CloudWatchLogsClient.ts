// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultCloudWatchLogsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput } from "./commands/AssociateKmsKeyCommand";
import { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "./commands/CancelExportTaskCommand";
import { CreateDeliveryCommandInput, CreateDeliveryCommandOutput } from "./commands/CreateDeliveryCommand";
import { CreateExportTaskCommandInput, CreateExportTaskCommandOutput } from "./commands/CreateExportTaskCommand";
import {
  CreateLogAnomalyDetectorCommandInput,
  CreateLogAnomalyDetectorCommandOutput,
} from "./commands/CreateLogAnomalyDetectorCommand";
import { CreateLogGroupCommandInput, CreateLogGroupCommandOutput } from "./commands/CreateLogGroupCommand";
import { CreateLogStreamCommandInput, CreateLogStreamCommandOutput } from "./commands/CreateLogStreamCommand";
import {
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
} from "./commands/DeleteAccountPolicyCommand";
import {
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
} from "./commands/DeleteDataProtectionPolicyCommand";
import { DeleteDeliveryCommandInput, DeleteDeliveryCommandOutput } from "./commands/DeleteDeliveryCommand";
import {
  DeleteDeliveryDestinationCommandInput,
  DeleteDeliveryDestinationCommandOutput,
} from "./commands/DeleteDeliveryDestinationCommand";
import {
  DeleteDeliveryDestinationPolicyCommandInput,
  DeleteDeliveryDestinationPolicyCommandOutput,
} from "./commands/DeleteDeliveryDestinationPolicyCommand";
import {
  DeleteDeliverySourceCommandInput,
  DeleteDeliverySourceCommandOutput,
} from "./commands/DeleteDeliverySourceCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "./commands/DeleteDestinationCommand";
import { DeleteIndexPolicyCommandInput, DeleteIndexPolicyCommandOutput } from "./commands/DeleteIndexPolicyCommand";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput } from "./commands/DeleteIntegrationCommand";
import {
  DeleteLogAnomalyDetectorCommandInput,
  DeleteLogAnomalyDetectorCommandOutput,
} from "./commands/DeleteLogAnomalyDetectorCommand";
import { DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput } from "./commands/DeleteLogGroupCommand";
import { DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput } from "./commands/DeleteLogStreamCommand";
import { DeleteMetricFilterCommandInput, DeleteMetricFilterCommandOutput } from "./commands/DeleteMetricFilterCommand";
import {
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
} from "./commands/DeleteQueryDefinitionCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import {
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "./commands/DeleteSubscriptionFilterCommand";
import { DeleteTransformerCommandInput, DeleteTransformerCommandOutput } from "./commands/DeleteTransformerCommand";
import {
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "./commands/DescribeAccountPoliciesCommand";
import {
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "./commands/DescribeConfigurationTemplatesCommand";
import { DescribeDeliveriesCommandInput, DescribeDeliveriesCommandOutput } from "./commands/DescribeDeliveriesCommand";
import {
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "./commands/DescribeDeliveryDestinationsCommand";
import {
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "./commands/DescribeDeliverySourcesCommand";
import {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "./commands/DescribeDestinationsCommand";
import {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import {
  DescribeFieldIndexesCommandInput,
  DescribeFieldIndexesCommandOutput,
} from "./commands/DescribeFieldIndexesCommand";
import {
  DescribeIndexPoliciesCommandInput,
  DescribeIndexPoliciesCommandOutput,
} from "./commands/DescribeIndexPoliciesCommand";
import { DescribeLogGroupsCommandInput, DescribeLogGroupsCommandOutput } from "./commands/DescribeLogGroupsCommand";
import { DescribeLogStreamsCommandInput, DescribeLogStreamsCommandOutput } from "./commands/DescribeLogStreamsCommand";
import {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "./commands/DescribeMetricFiltersCommand";
import { DescribeQueriesCommandInput, DescribeQueriesCommandOutput } from "./commands/DescribeQueriesCommand";
import {
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
} from "./commands/DescribeQueryDefinitionsCommand";
import {
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
} from "./commands/DescribeResourcePoliciesCommand";
import {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "./commands/DescribeSubscriptionFiltersCommand";
import { DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput } from "./commands/DisassociateKmsKeyCommand";
import { FilterLogEventsCommandInput, FilterLogEventsCommandOutput } from "./commands/FilterLogEventsCommand";
import {
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "./commands/GetDataProtectionPolicyCommand";
import { GetDeliveryCommandInput, GetDeliveryCommandOutput } from "./commands/GetDeliveryCommand";
import {
  GetDeliveryDestinationCommandInput,
  GetDeliveryDestinationCommandOutput,
} from "./commands/GetDeliveryDestinationCommand";
import {
  GetDeliveryDestinationPolicyCommandInput,
  GetDeliveryDestinationPolicyCommandOutput,
} from "./commands/GetDeliveryDestinationPolicyCommand";
import { GetDeliverySourceCommandInput, GetDeliverySourceCommandOutput } from "./commands/GetDeliverySourceCommand";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import {
  GetLogAnomalyDetectorCommandInput,
  GetLogAnomalyDetectorCommandOutput,
} from "./commands/GetLogAnomalyDetectorCommand";
import { GetLogEventsCommandInput, GetLogEventsCommandOutput } from "./commands/GetLogEventsCommand";
import { GetLogGroupFieldsCommandInput, GetLogGroupFieldsCommandOutput } from "./commands/GetLogGroupFieldsCommand";
import { GetLogRecordCommandInput, GetLogRecordCommandOutput } from "./commands/GetLogRecordCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import { GetTransformerCommandInput, GetTransformerCommandOutput } from "./commands/GetTransformerCommand";
import { ListAnomaliesCommandInput, ListAnomaliesCommandOutput } from "./commands/ListAnomaliesCommand";
import { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import {
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
} from "./commands/ListLogAnomalyDetectorsCommand";
import {
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "./commands/ListLogGroupsForQueryCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput } from "./commands/ListTagsLogGroupCommand";
import { PutAccountPolicyCommandInput, PutAccountPolicyCommandOutput } from "./commands/PutAccountPolicyCommand";
import {
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "./commands/PutDataProtectionPolicyCommand";
import {
  PutDeliveryDestinationCommandInput,
  PutDeliveryDestinationCommandOutput,
} from "./commands/PutDeliveryDestinationCommand";
import {
  PutDeliveryDestinationPolicyCommandInput,
  PutDeliveryDestinationPolicyCommandOutput,
} from "./commands/PutDeliveryDestinationPolicyCommand";
import { PutDeliverySourceCommandInput, PutDeliverySourceCommandOutput } from "./commands/PutDeliverySourceCommand";
import { PutDestinationCommandInput, PutDestinationCommandOutput } from "./commands/PutDestinationCommand";
import {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "./commands/PutDestinationPolicyCommand";
import { PutIndexPolicyCommandInput, PutIndexPolicyCommandOutput } from "./commands/PutIndexPolicyCommand";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import { PutLogEventsCommandInput, PutLogEventsCommandOutput } from "./commands/PutLogEventsCommand";
import { PutMetricFilterCommandInput, PutMetricFilterCommandOutput } from "./commands/PutMetricFilterCommand";
import { PutQueryDefinitionCommandInput, PutQueryDefinitionCommandOutput } from "./commands/PutQueryDefinitionCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput } from "./commands/PutRetentionPolicyCommand";
import {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "./commands/PutSubscriptionFilterCommand";
import { PutTransformerCommandInput, PutTransformerCommandOutput } from "./commands/PutTransformerCommand";
import { StartLiveTailCommandInput, StartLiveTailCommandOutput } from "./commands/StartLiveTailCommand";
import { StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import { StopQueryCommandInput, StopQueryCommandOutput } from "./commands/StopQueryCommand";
import { TagLogGroupCommandInput, TagLogGroupCommandOutput } from "./commands/TagLogGroupCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestMetricFilterCommandInput, TestMetricFilterCommandOutput } from "./commands/TestMetricFilterCommand";
import { TestTransformerCommandInput, TestTransformerCommandOutput } from "./commands/TestTransformerCommand";
import { UntagLogGroupCommandInput, UntagLogGroupCommandOutput } from "./commands/UntagLogGroupCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAnomalyCommandInput, UpdateAnomalyCommandOutput } from "./commands/UpdateAnomalyCommand";
import {
  UpdateDeliveryConfigurationCommandInput,
  UpdateDeliveryConfigurationCommandOutput,
} from "./commands/UpdateDeliveryConfigurationCommand";
import {
  UpdateLogAnomalyDetectorCommandInput,
  UpdateLogAnomalyDetectorCommandOutput,
} from "./commands/UpdateLogAnomalyDetectorCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateKmsKeyCommandInput
  | CancelExportTaskCommandInput
  | CreateDeliveryCommandInput
  | CreateExportTaskCommandInput
  | CreateLogAnomalyDetectorCommandInput
  | CreateLogGroupCommandInput
  | CreateLogStreamCommandInput
  | DeleteAccountPolicyCommandInput
  | DeleteDataProtectionPolicyCommandInput
  | DeleteDeliveryCommandInput
  | DeleteDeliveryDestinationCommandInput
  | DeleteDeliveryDestinationPolicyCommandInput
  | DeleteDeliverySourceCommandInput
  | DeleteDestinationCommandInput
  | DeleteIndexPolicyCommandInput
  | DeleteIntegrationCommandInput
  | DeleteLogAnomalyDetectorCommandInput
  | DeleteLogGroupCommandInput
  | DeleteLogStreamCommandInput
  | DeleteMetricFilterCommandInput
  | DeleteQueryDefinitionCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteRetentionPolicyCommandInput
  | DeleteSubscriptionFilterCommandInput
  | DeleteTransformerCommandInput
  | DescribeAccountPoliciesCommandInput
  | DescribeConfigurationTemplatesCommandInput
  | DescribeDeliveriesCommandInput
  | DescribeDeliveryDestinationsCommandInput
  | DescribeDeliverySourcesCommandInput
  | DescribeDestinationsCommandInput
  | DescribeExportTasksCommandInput
  | DescribeFieldIndexesCommandInput
  | DescribeIndexPoliciesCommandInput
  | DescribeLogGroupsCommandInput
  | DescribeLogStreamsCommandInput
  | DescribeMetricFiltersCommandInput
  | DescribeQueriesCommandInput
  | DescribeQueryDefinitionsCommandInput
  | DescribeResourcePoliciesCommandInput
  | DescribeSubscriptionFiltersCommandInput
  | DisassociateKmsKeyCommandInput
  | FilterLogEventsCommandInput
  | GetDataProtectionPolicyCommandInput
  | GetDeliveryCommandInput
  | GetDeliveryDestinationCommandInput
  | GetDeliveryDestinationPolicyCommandInput
  | GetDeliverySourceCommandInput
  | GetIntegrationCommandInput
  | GetLogAnomalyDetectorCommandInput
  | GetLogEventsCommandInput
  | GetLogGroupFieldsCommandInput
  | GetLogRecordCommandInput
  | GetQueryResultsCommandInput
  | GetTransformerCommandInput
  | ListAnomaliesCommandInput
  | ListIntegrationsCommandInput
  | ListLogAnomalyDetectorsCommandInput
  | ListLogGroupsForQueryCommandInput
  | ListTagsForResourceCommandInput
  | ListTagsLogGroupCommandInput
  | PutAccountPolicyCommandInput
  | PutDataProtectionPolicyCommandInput
  | PutDeliveryDestinationCommandInput
  | PutDeliveryDestinationPolicyCommandInput
  | PutDeliverySourceCommandInput
  | PutDestinationCommandInput
  | PutDestinationPolicyCommandInput
  | PutIndexPolicyCommandInput
  | PutIntegrationCommandInput
  | PutLogEventsCommandInput
  | PutMetricFilterCommandInput
  | PutQueryDefinitionCommandInput
  | PutResourcePolicyCommandInput
  | PutRetentionPolicyCommandInput
  | PutSubscriptionFilterCommandInput
  | PutTransformerCommandInput
  | StartLiveTailCommandInput
  | StartQueryCommandInput
  | StopQueryCommandInput
  | TagLogGroupCommandInput
  | TagResourceCommandInput
  | TestMetricFilterCommandInput
  | TestTransformerCommandInput
  | UntagLogGroupCommandInput
  | UntagResourceCommandInput
  | UpdateAnomalyCommandInput
  | UpdateDeliveryConfigurationCommandInput
  | UpdateLogAnomalyDetectorCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateKmsKeyCommandOutput
  | CancelExportTaskCommandOutput
  | CreateDeliveryCommandOutput
  | CreateExportTaskCommandOutput
  | CreateLogAnomalyDetectorCommandOutput
  | CreateLogGroupCommandOutput
  | CreateLogStreamCommandOutput
  | DeleteAccountPolicyCommandOutput
  | DeleteDataProtectionPolicyCommandOutput
  | DeleteDeliveryCommandOutput
  | DeleteDeliveryDestinationCommandOutput
  | DeleteDeliveryDestinationPolicyCommandOutput
  | DeleteDeliverySourceCommandOutput
  | DeleteDestinationCommandOutput
  | DeleteIndexPolicyCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteLogAnomalyDetectorCommandOutput
  | DeleteLogGroupCommandOutput
  | DeleteLogStreamCommandOutput
  | DeleteMetricFilterCommandOutput
  | DeleteQueryDefinitionCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteRetentionPolicyCommandOutput
  | DeleteSubscriptionFilterCommandOutput
  | DeleteTransformerCommandOutput
  | DescribeAccountPoliciesCommandOutput
  | DescribeConfigurationTemplatesCommandOutput
  | DescribeDeliveriesCommandOutput
  | DescribeDeliveryDestinationsCommandOutput
  | DescribeDeliverySourcesCommandOutput
  | DescribeDestinationsCommandOutput
  | DescribeExportTasksCommandOutput
  | DescribeFieldIndexesCommandOutput
  | DescribeIndexPoliciesCommandOutput
  | DescribeLogGroupsCommandOutput
  | DescribeLogStreamsCommandOutput
  | DescribeMetricFiltersCommandOutput
  | DescribeQueriesCommandOutput
  | DescribeQueryDefinitionsCommandOutput
  | DescribeResourcePoliciesCommandOutput
  | DescribeSubscriptionFiltersCommandOutput
  | DisassociateKmsKeyCommandOutput
  | FilterLogEventsCommandOutput
  | GetDataProtectionPolicyCommandOutput
  | GetDeliveryCommandOutput
  | GetDeliveryDestinationCommandOutput
  | GetDeliveryDestinationPolicyCommandOutput
  | GetDeliverySourceCommandOutput
  | GetIntegrationCommandOutput
  | GetLogAnomalyDetectorCommandOutput
  | GetLogEventsCommandOutput
  | GetLogGroupFieldsCommandOutput
  | GetLogRecordCommandOutput
  | GetQueryResultsCommandOutput
  | GetTransformerCommandOutput
  | ListAnomaliesCommandOutput
  | ListIntegrationsCommandOutput
  | ListLogAnomalyDetectorsCommandOutput
  | ListLogGroupsForQueryCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTagsLogGroupCommandOutput
  | PutAccountPolicyCommandOutput
  | PutDataProtectionPolicyCommandOutput
  | PutDeliveryDestinationCommandOutput
  | PutDeliveryDestinationPolicyCommandOutput
  | PutDeliverySourceCommandOutput
  | PutDestinationCommandOutput
  | PutDestinationPolicyCommandOutput
  | PutIndexPolicyCommandOutput
  | PutIntegrationCommandOutput
  | PutLogEventsCommandOutput
  | PutMetricFilterCommandOutput
  | PutQueryDefinitionCommandOutput
  | PutResourcePolicyCommandOutput
  | PutRetentionPolicyCommandOutput
  | PutSubscriptionFilterCommandOutput
  | PutTransformerCommandOutput
  | StartLiveTailCommandOutput
  | StartQueryCommandOutput
  | StopQueryCommandOutput
  | TagLogGroupCommandOutput
  | TagResourceCommandOutput
  | TestMetricFilterCommandOutput
  | TestTransformerCommandOutput
  | UntagLogGroupCommandOutput
  | UntagResourceCommandOutput
  | UpdateAnomalyCommandOutput
  | UpdateDeliveryConfigurationCommandOutput
  | UpdateLogAnomalyDetectorCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CloudWatchLogsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CloudWatchLogsClient class constructor that set the region, credentials and other options.
 */
export interface CloudWatchLogsClientConfig extends CloudWatchLogsClientConfigType {}

/**
 * @public
 */
export type CloudWatchLogsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CloudWatchLogsClient class. This is resolved and normalized from the {@link CloudWatchLogsClientConfig | constructor configuration interface}.
 */
export interface CloudWatchLogsClientResolvedConfig extends CloudWatchLogsClientResolvedConfigType {}

/**
 * <p>You can use Amazon CloudWatch Logs to monitor, store, and access your log files from
 *       EC2 instances, CloudTrail, and other sources. You can then retrieve the associated
 *       log data from CloudWatch Logs using the CloudWatch console. Alternatively, you can use
 *       CloudWatch Logs commands in the Amazon Web Services CLI, CloudWatch Logs API, or CloudWatch
 *       Logs SDK.</p>
 *          <p>You can use CloudWatch Logs to:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Monitor logs from EC2 instances in real time</b>: You
 *           can use CloudWatch Logs to monitor applications and systems using log data. For example,
 *           CloudWatch Logs can track the number of errors that occur in your application logs. Then,
 *           it can send you a notification whenever the rate of errors exceeds a threshold that you
 *           specify. CloudWatch Logs uses your log data for monitoring so no code changes are
 *           required. For example, you can monitor application logs for specific literal terms (such
 *           as "NullReferenceException"). You can also count the number of occurrences of a literal
 *           term at a particular position in log data (such as "404" status codes in an Apache access
 *           log). When the term you are searching for is found, CloudWatch Logs reports the data to a
 *           CloudWatch metric that you specify.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Monitor CloudTrail logged events</b>: You can
 *           create alarms in CloudWatch and receive notifications of particular API activity as
 *           captured by CloudTrail. You can use the notification to perform troubleshooting.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Archive log data</b>: You can use CloudWatch Logs to
 *           store your log data in highly durable storage. You can change the log retention setting so
 *           that any log events earlier than this setting are automatically deleted. The CloudWatch
 *           Logs agent helps to quickly send both rotated and non-rotated log data off of a host and
 *           into the log service. You can then access the raw log data when you need it.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class CloudWatchLogsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CloudWatchLogsClientResolvedConfig
> {
  /**
   * The resolved configuration of CloudWatchLogsClient class. This is resolved and normalized from the {@link CloudWatchLogsClientConfig | constructor configuration interface}.
   */
  readonly config: CloudWatchLogsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CloudWatchLogsClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    super(_config_9);
    this.config = _config_9;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCloudWatchLogsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CloudWatchLogsClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
