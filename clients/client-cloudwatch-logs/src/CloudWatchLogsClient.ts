// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultCloudWatchLogsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput } from "./commands/AssociateKmsKeyCommand";
import type {
  AssociateSourceToS3TableIntegrationCommandInput,
  AssociateSourceToS3TableIntegrationCommandOutput,
} from "./commands/AssociateSourceToS3TableIntegrationCommand";
import type { CancelExportTaskCommandInput, CancelExportTaskCommandOutput } from "./commands/CancelExportTaskCommand";
import type { CancelImportTaskCommandInput, CancelImportTaskCommandOutput } from "./commands/CancelImportTaskCommand";
import type { CreateDeliveryCommandInput, CreateDeliveryCommandOutput } from "./commands/CreateDeliveryCommand";
import type { CreateExportTaskCommandInput, CreateExportTaskCommandOutput } from "./commands/CreateExportTaskCommand";
import type { CreateImportTaskCommandInput, CreateImportTaskCommandOutput } from "./commands/CreateImportTaskCommand";
import type {
  CreateLogAnomalyDetectorCommandInput,
  CreateLogAnomalyDetectorCommandOutput,
} from "./commands/CreateLogAnomalyDetectorCommand";
import type { CreateLogGroupCommandInput, CreateLogGroupCommandOutput } from "./commands/CreateLogGroupCommand";
import type { CreateLogStreamCommandInput, CreateLogStreamCommandOutput } from "./commands/CreateLogStreamCommand";
import type {
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "./commands/CreateScheduledQueryCommand";
import type {
  DeleteAccountPolicyCommandInput,
  DeleteAccountPolicyCommandOutput,
} from "./commands/DeleteAccountPolicyCommand";
import type {
  DeleteDataProtectionPolicyCommandInput,
  DeleteDataProtectionPolicyCommandOutput,
} from "./commands/DeleteDataProtectionPolicyCommand";
import type { DeleteDeliveryCommandInput, DeleteDeliveryCommandOutput } from "./commands/DeleteDeliveryCommand";
import type {
  DeleteDeliveryDestinationCommandInput,
  DeleteDeliveryDestinationCommandOutput,
} from "./commands/DeleteDeliveryDestinationCommand";
import type {
  DeleteDeliveryDestinationPolicyCommandInput,
  DeleteDeliveryDestinationPolicyCommandOutput,
} from "./commands/DeleteDeliveryDestinationPolicyCommand";
import type {
  DeleteDeliverySourceCommandInput,
  DeleteDeliverySourceCommandOutput,
} from "./commands/DeleteDeliverySourceCommand";
import type {
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import type {
  DeleteIndexPolicyCommandInput,
  DeleteIndexPolicyCommandOutput,
} from "./commands/DeleteIndexPolicyCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type {
  DeleteLogAnomalyDetectorCommandInput,
  DeleteLogAnomalyDetectorCommandOutput,
} from "./commands/DeleteLogAnomalyDetectorCommand";
import type { DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput } from "./commands/DeleteLogGroupCommand";
import type { DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput } from "./commands/DeleteLogStreamCommand";
import type {
  DeleteMetricFilterCommandInput,
  DeleteMetricFilterCommandOutput,
} from "./commands/DeleteMetricFilterCommand";
import type {
  DeleteQueryDefinitionCommandInput,
  DeleteQueryDefinitionCommandOutput,
} from "./commands/DeleteQueryDefinitionCommand";
import type {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import type {
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import type {
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "./commands/DeleteScheduledQueryCommand";
import type {
  DeleteSubscriptionFilterCommandInput,
  DeleteSubscriptionFilterCommandOutput,
} from "./commands/DeleteSubscriptionFilterCommand";
import type {
  DeleteTransformerCommandInput,
  DeleteTransformerCommandOutput,
} from "./commands/DeleteTransformerCommand";
import type {
  DescribeAccountPoliciesCommandInput,
  DescribeAccountPoliciesCommandOutput,
} from "./commands/DescribeAccountPoliciesCommand";
import type {
  DescribeConfigurationTemplatesCommandInput,
  DescribeConfigurationTemplatesCommandOutput,
} from "./commands/DescribeConfigurationTemplatesCommand";
import type {
  DescribeDeliveriesCommandInput,
  DescribeDeliveriesCommandOutput,
} from "./commands/DescribeDeliveriesCommand";
import type {
  DescribeDeliveryDestinationsCommandInput,
  DescribeDeliveryDestinationsCommandOutput,
} from "./commands/DescribeDeliveryDestinationsCommand";
import type {
  DescribeDeliverySourcesCommandInput,
  DescribeDeliverySourcesCommandOutput,
} from "./commands/DescribeDeliverySourcesCommand";
import type {
  DescribeDestinationsCommandInput,
  DescribeDestinationsCommandOutput,
} from "./commands/DescribeDestinationsCommand";
import type {
  DescribeExportTasksCommandInput,
  DescribeExportTasksCommandOutput,
} from "./commands/DescribeExportTasksCommand";
import type {
  DescribeFieldIndexesCommandInput,
  DescribeFieldIndexesCommandOutput,
} from "./commands/DescribeFieldIndexesCommand";
import type {
  DescribeImportTaskBatchesCommandInput,
  DescribeImportTaskBatchesCommandOutput,
} from "./commands/DescribeImportTaskBatchesCommand";
import type {
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "./commands/DescribeImportTasksCommand";
import type {
  DescribeIndexPoliciesCommandInput,
  DescribeIndexPoliciesCommandOutput,
} from "./commands/DescribeIndexPoliciesCommand";
import type {
  DescribeLogGroupsCommandInput,
  DescribeLogGroupsCommandOutput,
} from "./commands/DescribeLogGroupsCommand";
import type {
  DescribeLogStreamsCommandInput,
  DescribeLogStreamsCommandOutput,
} from "./commands/DescribeLogStreamsCommand";
import type {
  DescribeMetricFiltersCommandInput,
  DescribeMetricFiltersCommandOutput,
} from "./commands/DescribeMetricFiltersCommand";
import type { DescribeQueriesCommandInput, DescribeQueriesCommandOutput } from "./commands/DescribeQueriesCommand";
import type {
  DescribeQueryDefinitionsCommandInput,
  DescribeQueryDefinitionsCommandOutput,
} from "./commands/DescribeQueryDefinitionsCommand";
import type {
  DescribeResourcePoliciesCommandInput,
  DescribeResourcePoliciesCommandOutput,
} from "./commands/DescribeResourcePoliciesCommand";
import type {
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
} from "./commands/DescribeSubscriptionFiltersCommand";
import type {
  DisassociateKmsKeyCommandInput,
  DisassociateKmsKeyCommandOutput,
} from "./commands/DisassociateKmsKeyCommand";
import type {
  DisassociateSourceFromS3TableIntegrationCommandInput,
  DisassociateSourceFromS3TableIntegrationCommandOutput,
} from "./commands/DisassociateSourceFromS3TableIntegrationCommand";
import type { FilterLogEventsCommandInput, FilterLogEventsCommandOutput } from "./commands/FilterLogEventsCommand";
import type {
  GetDataProtectionPolicyCommandInput,
  GetDataProtectionPolicyCommandOutput,
} from "./commands/GetDataProtectionPolicyCommand";
import type { GetDeliveryCommandInput, GetDeliveryCommandOutput } from "./commands/GetDeliveryCommand";
import type {
  GetDeliveryDestinationCommandInput,
  GetDeliveryDestinationCommandOutput,
} from "./commands/GetDeliveryDestinationCommand";
import type {
  GetDeliveryDestinationPolicyCommandInput,
  GetDeliveryDestinationPolicyCommandOutput,
} from "./commands/GetDeliveryDestinationPolicyCommand";
import type {
  GetDeliverySourceCommandInput,
  GetDeliverySourceCommandOutput,
} from "./commands/GetDeliverySourceCommand";
import type { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import type {
  GetLogAnomalyDetectorCommandInput,
  GetLogAnomalyDetectorCommandOutput,
} from "./commands/GetLogAnomalyDetectorCommand";
import type { GetLogEventsCommandInput, GetLogEventsCommandOutput } from "./commands/GetLogEventsCommand";
import type { GetLogFieldsCommandInput, GetLogFieldsCommandOutput } from "./commands/GetLogFieldsCommand";
import type {
  GetLogGroupFieldsCommandInput,
  GetLogGroupFieldsCommandOutput,
} from "./commands/GetLogGroupFieldsCommand";
import type { GetLogObjectCommandInput, GetLogObjectCommandOutput } from "./commands/GetLogObjectCommand";
import type { GetLogRecordCommandInput, GetLogRecordCommandOutput } from "./commands/GetLogRecordCommand";
import type { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import type {
  GetScheduledQueryCommandInput,
  GetScheduledQueryCommandOutput,
} from "./commands/GetScheduledQueryCommand";
import type {
  GetScheduledQueryHistoryCommandInput,
  GetScheduledQueryHistoryCommandOutput,
} from "./commands/GetScheduledQueryHistoryCommand";
import type { GetTransformerCommandInput, GetTransformerCommandOutput } from "./commands/GetTransformerCommand";
import type {
  ListAggregateLogGroupSummariesCommandInput,
  ListAggregateLogGroupSummariesCommandOutput,
} from "./commands/ListAggregateLogGroupSummariesCommand";
import type { ListAnomaliesCommandInput, ListAnomaliesCommandOutput } from "./commands/ListAnomaliesCommand";
import type { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import type {
  ListLogAnomalyDetectorsCommandInput,
  ListLogAnomalyDetectorsCommandOutput,
} from "./commands/ListLogAnomalyDetectorsCommand";
import type { ListLogGroupsCommandInput, ListLogGroupsCommandOutput } from "./commands/ListLogGroupsCommand";
import type {
  ListLogGroupsForQueryCommandInput,
  ListLogGroupsForQueryCommandOutput,
} from "./commands/ListLogGroupsForQueryCommand";
import type {
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "./commands/ListScheduledQueriesCommand";
import type {
  ListSourcesForS3TableIntegrationCommandInput,
  ListSourcesForS3TableIntegrationCommandOutput,
} from "./commands/ListSourcesForS3TableIntegrationCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput } from "./commands/ListTagsLogGroupCommand";
import type { PutAccountPolicyCommandInput, PutAccountPolicyCommandOutput } from "./commands/PutAccountPolicyCommand";
import type {
  PutBearerTokenAuthenticationCommandInput,
  PutBearerTokenAuthenticationCommandOutput,
} from "./commands/PutBearerTokenAuthenticationCommand";
import type {
  PutDataProtectionPolicyCommandInput,
  PutDataProtectionPolicyCommandOutput,
} from "./commands/PutDataProtectionPolicyCommand";
import type {
  PutDeliveryDestinationCommandInput,
  PutDeliveryDestinationCommandOutput,
} from "./commands/PutDeliveryDestinationCommand";
import type {
  PutDeliveryDestinationPolicyCommandInput,
  PutDeliveryDestinationPolicyCommandOutput,
} from "./commands/PutDeliveryDestinationPolicyCommand";
import type {
  PutDeliverySourceCommandInput,
  PutDeliverySourceCommandOutput,
} from "./commands/PutDeliverySourceCommand";
import type { PutDestinationCommandInput, PutDestinationCommandOutput } from "./commands/PutDestinationCommand";
import type {
  PutDestinationPolicyCommandInput,
  PutDestinationPolicyCommandOutput,
} from "./commands/PutDestinationPolicyCommand";
import type { PutIndexPolicyCommandInput, PutIndexPolicyCommandOutput } from "./commands/PutIndexPolicyCommand";
import type { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import type { PutLogEventsCommandInput, PutLogEventsCommandOutput } from "./commands/PutLogEventsCommand";
import type {
  PutLogGroupDeletionProtectionCommandInput,
  PutLogGroupDeletionProtectionCommandOutput,
} from "./commands/PutLogGroupDeletionProtectionCommand";
import type { PutMetricFilterCommandInput, PutMetricFilterCommandOutput } from "./commands/PutMetricFilterCommand";
import type {
  PutQueryDefinitionCommandInput,
  PutQueryDefinitionCommandOutput,
} from "./commands/PutQueryDefinitionCommand";
import type {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import type {
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "./commands/PutRetentionPolicyCommand";
import type {
  PutSubscriptionFilterCommandInput,
  PutSubscriptionFilterCommandOutput,
} from "./commands/PutSubscriptionFilterCommand";
import type { PutTransformerCommandInput, PutTransformerCommandOutput } from "./commands/PutTransformerCommand";
import type { StartLiveTailCommandInput, StartLiveTailCommandOutput } from "./commands/StartLiveTailCommand";
import type { StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import type { StopQueryCommandInput, StopQueryCommandOutput } from "./commands/StopQueryCommand";
import type { TagLogGroupCommandInput, TagLogGroupCommandOutput } from "./commands/TagLogGroupCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TestMetricFilterCommandInput, TestMetricFilterCommandOutput } from "./commands/TestMetricFilterCommand";
import type { TestTransformerCommandInput, TestTransformerCommandOutput } from "./commands/TestTransformerCommand";
import type { UntagLogGroupCommandInput, UntagLogGroupCommandOutput } from "./commands/UntagLogGroupCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAnomalyCommandInput, UpdateAnomalyCommandOutput } from "./commands/UpdateAnomalyCommand";
import type {
  UpdateDeliveryConfigurationCommandInput,
  UpdateDeliveryConfigurationCommandOutput,
} from "./commands/UpdateDeliveryConfigurationCommand";
import type {
  UpdateLogAnomalyDetectorCommandInput,
  UpdateLogAnomalyDetectorCommandOutput,
} from "./commands/UpdateLogAnomalyDetectorCommand";
import type {
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "./commands/UpdateScheduledQueryCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AssociateKmsKeyCommandInput
  | AssociateSourceToS3TableIntegrationCommandInput
  | CancelExportTaskCommandInput
  | CancelImportTaskCommandInput
  | CreateDeliveryCommandInput
  | CreateExportTaskCommandInput
  | CreateImportTaskCommandInput
  | CreateLogAnomalyDetectorCommandInput
  | CreateLogGroupCommandInput
  | CreateLogStreamCommandInput
  | CreateScheduledQueryCommandInput
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
  | DeleteScheduledQueryCommandInput
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
  | DescribeImportTaskBatchesCommandInput
  | DescribeImportTasksCommandInput
  | DescribeIndexPoliciesCommandInput
  | DescribeLogGroupsCommandInput
  | DescribeLogStreamsCommandInput
  | DescribeMetricFiltersCommandInput
  | DescribeQueriesCommandInput
  | DescribeQueryDefinitionsCommandInput
  | DescribeResourcePoliciesCommandInput
  | DescribeSubscriptionFiltersCommandInput
  | DisassociateKmsKeyCommandInput
  | DisassociateSourceFromS3TableIntegrationCommandInput
  | FilterLogEventsCommandInput
  | GetDataProtectionPolicyCommandInput
  | GetDeliveryCommandInput
  | GetDeliveryDestinationCommandInput
  | GetDeliveryDestinationPolicyCommandInput
  | GetDeliverySourceCommandInput
  | GetIntegrationCommandInput
  | GetLogAnomalyDetectorCommandInput
  | GetLogEventsCommandInput
  | GetLogFieldsCommandInput
  | GetLogGroupFieldsCommandInput
  | GetLogObjectCommandInput
  | GetLogRecordCommandInput
  | GetQueryResultsCommandInput
  | GetScheduledQueryCommandInput
  | GetScheduledQueryHistoryCommandInput
  | GetTransformerCommandInput
  | ListAggregateLogGroupSummariesCommandInput
  | ListAnomaliesCommandInput
  | ListIntegrationsCommandInput
  | ListLogAnomalyDetectorsCommandInput
  | ListLogGroupsCommandInput
  | ListLogGroupsForQueryCommandInput
  | ListScheduledQueriesCommandInput
  | ListSourcesForS3TableIntegrationCommandInput
  | ListTagsForResourceCommandInput
  | ListTagsLogGroupCommandInput
  | PutAccountPolicyCommandInput
  | PutBearerTokenAuthenticationCommandInput
  | PutDataProtectionPolicyCommandInput
  | PutDeliveryDestinationCommandInput
  | PutDeliveryDestinationPolicyCommandInput
  | PutDeliverySourceCommandInput
  | PutDestinationCommandInput
  | PutDestinationPolicyCommandInput
  | PutIndexPolicyCommandInput
  | PutIntegrationCommandInput
  | PutLogEventsCommandInput
  | PutLogGroupDeletionProtectionCommandInput
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
  | UpdateLogAnomalyDetectorCommandInput
  | UpdateScheduledQueryCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateKmsKeyCommandOutput
  | AssociateSourceToS3TableIntegrationCommandOutput
  | CancelExportTaskCommandOutput
  | CancelImportTaskCommandOutput
  | CreateDeliveryCommandOutput
  | CreateExportTaskCommandOutput
  | CreateImportTaskCommandOutput
  | CreateLogAnomalyDetectorCommandOutput
  | CreateLogGroupCommandOutput
  | CreateLogStreamCommandOutput
  | CreateScheduledQueryCommandOutput
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
  | DeleteScheduledQueryCommandOutput
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
  | DescribeImportTaskBatchesCommandOutput
  | DescribeImportTasksCommandOutput
  | DescribeIndexPoliciesCommandOutput
  | DescribeLogGroupsCommandOutput
  | DescribeLogStreamsCommandOutput
  | DescribeMetricFiltersCommandOutput
  | DescribeQueriesCommandOutput
  | DescribeQueryDefinitionsCommandOutput
  | DescribeResourcePoliciesCommandOutput
  | DescribeSubscriptionFiltersCommandOutput
  | DisassociateKmsKeyCommandOutput
  | DisassociateSourceFromS3TableIntegrationCommandOutput
  | FilterLogEventsCommandOutput
  | GetDataProtectionPolicyCommandOutput
  | GetDeliveryCommandOutput
  | GetDeliveryDestinationCommandOutput
  | GetDeliveryDestinationPolicyCommandOutput
  | GetDeliverySourceCommandOutput
  | GetIntegrationCommandOutput
  | GetLogAnomalyDetectorCommandOutput
  | GetLogEventsCommandOutput
  | GetLogFieldsCommandOutput
  | GetLogGroupFieldsCommandOutput
  | GetLogObjectCommandOutput
  | GetLogRecordCommandOutput
  | GetQueryResultsCommandOutput
  | GetScheduledQueryCommandOutput
  | GetScheduledQueryHistoryCommandOutput
  | GetTransformerCommandOutput
  | ListAggregateLogGroupSummariesCommandOutput
  | ListAnomaliesCommandOutput
  | ListIntegrationsCommandOutput
  | ListLogAnomalyDetectorsCommandOutput
  | ListLogGroupsCommandOutput
  | ListLogGroupsForQueryCommandOutput
  | ListScheduledQueriesCommandOutput
  | ListSourcesForS3TableIntegrationCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTagsLogGroupCommandOutput
  | PutAccountPolicyCommandOutput
  | PutBearerTokenAuthenticationCommandOutput
  | PutDataProtectionPolicyCommandOutput
  | PutDeliveryDestinationCommandOutput
  | PutDeliveryDestinationPolicyCommandOutput
  | PutDeliverySourceCommandOutput
  | PutDestinationCommandOutput
  | PutDestinationPolicyCommandOutput
  | PutIndexPolicyCommandOutput
  | PutIntegrationCommandOutput
  | PutLogEventsCommandOutput
  | PutLogGroupDeletionProtectionCommandOutput
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
  | UpdateLogAnomalyDetectorCommandOutput
  | UpdateScheduledQueryCommandOutput;

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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
 *                   <b>Monitor CloudTrail logged events</b>: You
 *           can create alarms in CloudWatch and receive notifications of particular API activity as
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
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
