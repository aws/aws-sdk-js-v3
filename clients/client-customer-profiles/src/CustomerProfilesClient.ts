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
  defaultCustomerProfilesHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddProfileKeyCommandInput, AddProfileKeyCommandOutput } from "./commands/AddProfileKeyCommand";
import type {
  BatchGetCalculatedAttributeForProfileCommandInput,
  BatchGetCalculatedAttributeForProfileCommandOutput,
} from "./commands/BatchGetCalculatedAttributeForProfileCommand";
import type { BatchGetProfileCommandInput, BatchGetProfileCommandOutput } from "./commands/BatchGetProfileCommand";
import type {
  CreateCalculatedAttributeDefinitionCommandInput,
  CreateCalculatedAttributeDefinitionCommandOutput,
} from "./commands/CreateCalculatedAttributeDefinitionCommand";
import type { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import type {
  CreateDomainLayoutCommandInput,
  CreateDomainLayoutCommandOutput,
} from "./commands/CreateDomainLayoutCommand";
import type {
  CreateEventStreamCommandInput,
  CreateEventStreamCommandOutput,
} from "./commands/CreateEventStreamCommand";
import type {
  CreateEventTriggerCommandInput,
  CreateEventTriggerCommandOutput,
} from "./commands/CreateEventTriggerCommand";
import type {
  CreateIntegrationWorkflowCommandInput,
  CreateIntegrationWorkflowCommandOutput,
} from "./commands/CreateIntegrationWorkflowCommand";
import type { CreateProfileCommandInput, CreateProfileCommandOutput } from "./commands/CreateProfileCommand";
import type {
  CreateRecommenderCommandInput,
  CreateRecommenderCommandOutput,
} from "./commands/CreateRecommenderCommand";
import type {
  CreateRecommenderFilterCommandInput,
  CreateRecommenderFilterCommandOutput,
} from "./commands/CreateRecommenderFilterCommand";
import type {
  CreateSegmentDefinitionCommandInput,
  CreateSegmentDefinitionCommandOutput,
} from "./commands/CreateSegmentDefinitionCommand";
import type {
  CreateSegmentEstimateCommandInput,
  CreateSegmentEstimateCommandOutput,
} from "./commands/CreateSegmentEstimateCommand";
import type {
  CreateSegmentSnapshotCommandInput,
  CreateSegmentSnapshotCommandOutput,
} from "./commands/CreateSegmentSnapshotCommand";
import type { CreateUploadJobCommandInput, CreateUploadJobCommandOutput } from "./commands/CreateUploadJobCommand";
import type {
  DeleteCalculatedAttributeDefinitionCommandInput,
  DeleteCalculatedAttributeDefinitionCommandOutput,
} from "./commands/DeleteCalculatedAttributeDefinitionCommand";
import type { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import type {
  DeleteDomainLayoutCommandInput,
  DeleteDomainLayoutCommandOutput,
} from "./commands/DeleteDomainLayoutCommand";
import type {
  DeleteDomainObjectTypeCommandInput,
  DeleteDomainObjectTypeCommandOutput,
} from "./commands/DeleteDomainObjectTypeCommand";
import type {
  DeleteEventStreamCommandInput,
  DeleteEventStreamCommandOutput,
} from "./commands/DeleteEventStreamCommand";
import type {
  DeleteEventTriggerCommandInput,
  DeleteEventTriggerCommandOutput,
} from "./commands/DeleteEventTriggerCommand";
import type {
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import type { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "./commands/DeleteProfileCommand";
import type { DeleteProfileKeyCommandInput, DeleteProfileKeyCommandOutput } from "./commands/DeleteProfileKeyCommand";
import type {
  DeleteProfileObjectCommandInput,
  DeleteProfileObjectCommandOutput,
} from "./commands/DeleteProfileObjectCommand";
import type {
  DeleteProfileObjectTypeCommandInput,
  DeleteProfileObjectTypeCommandOutput,
} from "./commands/DeleteProfileObjectTypeCommand";
import type {
  DeleteRecommenderCommandInput,
  DeleteRecommenderCommandOutput,
} from "./commands/DeleteRecommenderCommand";
import type {
  DeleteRecommenderFilterCommandInput,
  DeleteRecommenderFilterCommandOutput,
} from "./commands/DeleteRecommenderFilterCommand";
import type {
  DeleteSegmentDefinitionCommandInput,
  DeleteSegmentDefinitionCommandOutput,
} from "./commands/DeleteSegmentDefinitionCommand";
import type { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import type {
  DetectProfileObjectTypeCommandInput,
  DetectProfileObjectTypeCommandOutput,
} from "./commands/DetectProfileObjectTypeCommand";
import type {
  GetAutoMergingPreviewCommandInput,
  GetAutoMergingPreviewCommandOutput,
} from "./commands/GetAutoMergingPreviewCommand";
import type {
  GetCalculatedAttributeDefinitionCommandInput,
  GetCalculatedAttributeDefinitionCommandOutput,
} from "./commands/GetCalculatedAttributeDefinitionCommand";
import type {
  GetCalculatedAttributeForProfileCommandInput,
  GetCalculatedAttributeForProfileCommandOutput,
} from "./commands/GetCalculatedAttributeForProfileCommand";
import type { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import type { GetDomainLayoutCommandInput, GetDomainLayoutCommandOutput } from "./commands/GetDomainLayoutCommand";
import type {
  GetDomainObjectTypeCommandInput,
  GetDomainObjectTypeCommandOutput,
} from "./commands/GetDomainObjectTypeCommand";
import type { GetEventStreamCommandInput, GetEventStreamCommandOutput } from "./commands/GetEventStreamCommand";
import type { GetEventTriggerCommandInput, GetEventTriggerCommandOutput } from "./commands/GetEventTriggerCommand";
import type {
  GetIdentityResolutionJobCommandInput,
  GetIdentityResolutionJobCommandOutput,
} from "./commands/GetIdentityResolutionJobCommand";
import type { GetIntegrationCommandInput, GetIntegrationCommandOutput } from "./commands/GetIntegrationCommand";
import type { GetMatchesCommandInput, GetMatchesCommandOutput } from "./commands/GetMatchesCommand";
import type {
  GetObjectTypeAttributeStatisticsCommandInput,
  GetObjectTypeAttributeStatisticsCommandOutput,
} from "./commands/GetObjectTypeAttributeStatisticsCommand";
import type {
  GetProfileHistoryRecordCommandInput,
  GetProfileHistoryRecordCommandOutput,
} from "./commands/GetProfileHistoryRecordCommand";
import type {
  GetProfileObjectTypeCommandInput,
  GetProfileObjectTypeCommandOutput,
} from "./commands/GetProfileObjectTypeCommand";
import type {
  GetProfileObjectTypeTemplateCommandInput,
  GetProfileObjectTypeTemplateCommandOutput,
} from "./commands/GetProfileObjectTypeTemplateCommand";
import type {
  GetProfileRecommendationsCommandInput,
  GetProfileRecommendationsCommandOutput,
} from "./commands/GetProfileRecommendationsCommand";
import type { GetRecommenderCommandInput, GetRecommenderCommandOutput } from "./commands/GetRecommenderCommand";
import type {
  GetRecommenderFilterCommandInput,
  GetRecommenderFilterCommandOutput,
} from "./commands/GetRecommenderFilterCommand";
import type {
  GetSegmentDefinitionCommandInput,
  GetSegmentDefinitionCommandOutput,
} from "./commands/GetSegmentDefinitionCommand";
import type {
  GetSegmentEstimateCommandInput,
  GetSegmentEstimateCommandOutput,
} from "./commands/GetSegmentEstimateCommand";
import type {
  GetSegmentMembershipCommandInput,
  GetSegmentMembershipCommandOutput,
} from "./commands/GetSegmentMembershipCommand";
import type {
  GetSegmentSnapshotCommandInput,
  GetSegmentSnapshotCommandOutput,
} from "./commands/GetSegmentSnapshotCommand";
import type {
  GetSimilarProfilesCommandInput,
  GetSimilarProfilesCommandOutput,
} from "./commands/GetSimilarProfilesCommand";
import type { GetUploadJobCommandInput, GetUploadJobCommandOutput } from "./commands/GetUploadJobCommand";
import type { GetUploadJobPathCommandInput, GetUploadJobPathCommandOutput } from "./commands/GetUploadJobPathCommand";
import type { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import type { GetWorkflowStepsCommandInput, GetWorkflowStepsCommandOutput } from "./commands/GetWorkflowStepsCommand";
import type {
  ListAccountIntegrationsCommandInput,
  ListAccountIntegrationsCommandOutput,
} from "./commands/ListAccountIntegrationsCommand";
import type {
  ListCalculatedAttributeDefinitionsCommandInput,
  ListCalculatedAttributeDefinitionsCommandOutput,
} from "./commands/ListCalculatedAttributeDefinitionsCommand";
import type {
  ListCalculatedAttributesForProfileCommandInput,
  ListCalculatedAttributesForProfileCommandOutput,
} from "./commands/ListCalculatedAttributesForProfileCommand";
import type {
  ListDomainLayoutsCommandInput,
  ListDomainLayoutsCommandOutput,
} from "./commands/ListDomainLayoutsCommand";
import type {
  ListDomainObjectTypesCommandInput,
  ListDomainObjectTypesCommandOutput,
} from "./commands/ListDomainObjectTypesCommand";
import type { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import type { ListEventStreamsCommandInput, ListEventStreamsCommandOutput } from "./commands/ListEventStreamsCommand";
import type {
  ListEventTriggersCommandInput,
  ListEventTriggersCommandOutput,
} from "./commands/ListEventTriggersCommand";
import type {
  ListIdentityResolutionJobsCommandInput,
  ListIdentityResolutionJobsCommandOutput,
} from "./commands/ListIdentityResolutionJobsCommand";
import type { ListIntegrationsCommandInput, ListIntegrationsCommandOutput } from "./commands/ListIntegrationsCommand";
import type {
  ListObjectTypeAttributesCommandInput,
  ListObjectTypeAttributesCommandOutput,
} from "./commands/ListObjectTypeAttributesCommand";
import type {
  ListObjectTypeAttributeValuesCommandInput,
  ListObjectTypeAttributeValuesCommandOutput,
} from "./commands/ListObjectTypeAttributeValuesCommand";
import type {
  ListProfileAttributeValuesCommandInput,
  ListProfileAttributeValuesCommandOutput,
} from "./commands/ListProfileAttributeValuesCommand";
import type {
  ListProfileHistoryRecordsCommandInput,
  ListProfileHistoryRecordsCommandOutput,
} from "./commands/ListProfileHistoryRecordsCommand";
import type {
  ListProfileObjectsCommandInput,
  ListProfileObjectsCommandOutput,
} from "./commands/ListProfileObjectsCommand";
import type {
  ListProfileObjectTypesCommandInput,
  ListProfileObjectTypesCommandOutput,
} from "./commands/ListProfileObjectTypesCommand";
import type {
  ListProfileObjectTypeTemplatesCommandInput,
  ListProfileObjectTypeTemplatesCommandOutput,
} from "./commands/ListProfileObjectTypeTemplatesCommand";
import type {
  ListRecommenderFiltersCommandInput,
  ListRecommenderFiltersCommandOutput,
} from "./commands/ListRecommenderFiltersCommand";
import type {
  ListRecommenderRecipesCommandInput,
  ListRecommenderRecipesCommandOutput,
} from "./commands/ListRecommenderRecipesCommand";
import type { ListRecommendersCommandInput, ListRecommendersCommandOutput } from "./commands/ListRecommendersCommand";
import type {
  ListRuleBasedMatchesCommandInput,
  ListRuleBasedMatchesCommandOutput,
} from "./commands/ListRuleBasedMatchesCommand";
import type {
  ListSegmentDefinitionsCommandInput,
  ListSegmentDefinitionsCommandOutput,
} from "./commands/ListSegmentDefinitionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListUploadJobsCommandInput, ListUploadJobsCommandOutput } from "./commands/ListUploadJobsCommand";
import type { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import type { MergeProfilesCommandInput, MergeProfilesCommandOutput } from "./commands/MergeProfilesCommand";
import type {
  PutDomainObjectTypeCommandInput,
  PutDomainObjectTypeCommandOutput,
} from "./commands/PutDomainObjectTypeCommand";
import type { PutIntegrationCommandInput, PutIntegrationCommandOutput } from "./commands/PutIntegrationCommand";
import type { PutProfileObjectCommandInput, PutProfileObjectCommandOutput } from "./commands/PutProfileObjectCommand";
import type {
  PutProfileObjectTypeCommandInput,
  PutProfileObjectTypeCommandOutput,
} from "./commands/PutProfileObjectTypeCommand";
import type { SearchProfilesCommandInput, SearchProfilesCommandOutput } from "./commands/SearchProfilesCommand";
import type { StartRecommenderCommandInput, StartRecommenderCommandOutput } from "./commands/StartRecommenderCommand";
import type { StartUploadJobCommandInput, StartUploadJobCommandOutput } from "./commands/StartUploadJobCommand";
import type { StopRecommenderCommandInput, StopRecommenderCommandOutput } from "./commands/StopRecommenderCommand";
import type { StopUploadJobCommandInput, StopUploadJobCommandOutput } from "./commands/StopUploadJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateCalculatedAttributeDefinitionCommandInput,
  UpdateCalculatedAttributeDefinitionCommandOutput,
} from "./commands/UpdateCalculatedAttributeDefinitionCommand";
import type { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import type {
  UpdateDomainLayoutCommandInput,
  UpdateDomainLayoutCommandOutput,
} from "./commands/UpdateDomainLayoutCommand";
import type {
  UpdateEventTriggerCommandInput,
  UpdateEventTriggerCommandOutput,
} from "./commands/UpdateEventTriggerCommand";
import type { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "./commands/UpdateProfileCommand";
import type {
  UpdateRecommenderCommandInput,
  UpdateRecommenderCommandOutput,
} from "./commands/UpdateRecommenderCommand";
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
  | AddProfileKeyCommandInput
  | BatchGetCalculatedAttributeForProfileCommandInput
  | BatchGetProfileCommandInput
  | CreateCalculatedAttributeDefinitionCommandInput
  | CreateDomainCommandInput
  | CreateDomainLayoutCommandInput
  | CreateEventStreamCommandInput
  | CreateEventTriggerCommandInput
  | CreateIntegrationWorkflowCommandInput
  | CreateProfileCommandInput
  | CreateRecommenderCommandInput
  | CreateRecommenderFilterCommandInput
  | CreateSegmentDefinitionCommandInput
  | CreateSegmentEstimateCommandInput
  | CreateSegmentSnapshotCommandInput
  | CreateUploadJobCommandInput
  | DeleteCalculatedAttributeDefinitionCommandInput
  | DeleteDomainCommandInput
  | DeleteDomainLayoutCommandInput
  | DeleteDomainObjectTypeCommandInput
  | DeleteEventStreamCommandInput
  | DeleteEventTriggerCommandInput
  | DeleteIntegrationCommandInput
  | DeleteProfileCommandInput
  | DeleteProfileKeyCommandInput
  | DeleteProfileObjectCommandInput
  | DeleteProfileObjectTypeCommandInput
  | DeleteRecommenderCommandInput
  | DeleteRecommenderFilterCommandInput
  | DeleteSegmentDefinitionCommandInput
  | DeleteWorkflowCommandInput
  | DetectProfileObjectTypeCommandInput
  | GetAutoMergingPreviewCommandInput
  | GetCalculatedAttributeDefinitionCommandInput
  | GetCalculatedAttributeForProfileCommandInput
  | GetDomainCommandInput
  | GetDomainLayoutCommandInput
  | GetDomainObjectTypeCommandInput
  | GetEventStreamCommandInput
  | GetEventTriggerCommandInput
  | GetIdentityResolutionJobCommandInput
  | GetIntegrationCommandInput
  | GetMatchesCommandInput
  | GetObjectTypeAttributeStatisticsCommandInput
  | GetProfileHistoryRecordCommandInput
  | GetProfileObjectTypeCommandInput
  | GetProfileObjectTypeTemplateCommandInput
  | GetProfileRecommendationsCommandInput
  | GetRecommenderCommandInput
  | GetRecommenderFilterCommandInput
  | GetSegmentDefinitionCommandInput
  | GetSegmentEstimateCommandInput
  | GetSegmentMembershipCommandInput
  | GetSegmentSnapshotCommandInput
  | GetSimilarProfilesCommandInput
  | GetUploadJobCommandInput
  | GetUploadJobPathCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowStepsCommandInput
  | ListAccountIntegrationsCommandInput
  | ListCalculatedAttributeDefinitionsCommandInput
  | ListCalculatedAttributesForProfileCommandInput
  | ListDomainLayoutsCommandInput
  | ListDomainObjectTypesCommandInput
  | ListDomainsCommandInput
  | ListEventStreamsCommandInput
  | ListEventTriggersCommandInput
  | ListIdentityResolutionJobsCommandInput
  | ListIntegrationsCommandInput
  | ListObjectTypeAttributeValuesCommandInput
  | ListObjectTypeAttributesCommandInput
  | ListProfileAttributeValuesCommandInput
  | ListProfileHistoryRecordsCommandInput
  | ListProfileObjectTypeTemplatesCommandInput
  | ListProfileObjectTypesCommandInput
  | ListProfileObjectsCommandInput
  | ListRecommenderFiltersCommandInput
  | ListRecommenderRecipesCommandInput
  | ListRecommendersCommandInput
  | ListRuleBasedMatchesCommandInput
  | ListSegmentDefinitionsCommandInput
  | ListTagsForResourceCommandInput
  | ListUploadJobsCommandInput
  | ListWorkflowsCommandInput
  | MergeProfilesCommandInput
  | PutDomainObjectTypeCommandInput
  | PutIntegrationCommandInput
  | PutProfileObjectCommandInput
  | PutProfileObjectTypeCommandInput
  | SearchProfilesCommandInput
  | StartRecommenderCommandInput
  | StartUploadJobCommandInput
  | StopRecommenderCommandInput
  | StopUploadJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCalculatedAttributeDefinitionCommandInput
  | UpdateDomainCommandInput
  | UpdateDomainLayoutCommandInput
  | UpdateEventTriggerCommandInput
  | UpdateProfileCommandInput
  | UpdateRecommenderCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddProfileKeyCommandOutput
  | BatchGetCalculatedAttributeForProfileCommandOutput
  | BatchGetProfileCommandOutput
  | CreateCalculatedAttributeDefinitionCommandOutput
  | CreateDomainCommandOutput
  | CreateDomainLayoutCommandOutput
  | CreateEventStreamCommandOutput
  | CreateEventTriggerCommandOutput
  | CreateIntegrationWorkflowCommandOutput
  | CreateProfileCommandOutput
  | CreateRecommenderCommandOutput
  | CreateRecommenderFilterCommandOutput
  | CreateSegmentDefinitionCommandOutput
  | CreateSegmentEstimateCommandOutput
  | CreateSegmentSnapshotCommandOutput
  | CreateUploadJobCommandOutput
  | DeleteCalculatedAttributeDefinitionCommandOutput
  | DeleteDomainCommandOutput
  | DeleteDomainLayoutCommandOutput
  | DeleteDomainObjectTypeCommandOutput
  | DeleteEventStreamCommandOutput
  | DeleteEventTriggerCommandOutput
  | DeleteIntegrationCommandOutput
  | DeleteProfileCommandOutput
  | DeleteProfileKeyCommandOutput
  | DeleteProfileObjectCommandOutput
  | DeleteProfileObjectTypeCommandOutput
  | DeleteRecommenderCommandOutput
  | DeleteRecommenderFilterCommandOutput
  | DeleteSegmentDefinitionCommandOutput
  | DeleteWorkflowCommandOutput
  | DetectProfileObjectTypeCommandOutput
  | GetAutoMergingPreviewCommandOutput
  | GetCalculatedAttributeDefinitionCommandOutput
  | GetCalculatedAttributeForProfileCommandOutput
  | GetDomainCommandOutput
  | GetDomainLayoutCommandOutput
  | GetDomainObjectTypeCommandOutput
  | GetEventStreamCommandOutput
  | GetEventTriggerCommandOutput
  | GetIdentityResolutionJobCommandOutput
  | GetIntegrationCommandOutput
  | GetMatchesCommandOutput
  | GetObjectTypeAttributeStatisticsCommandOutput
  | GetProfileHistoryRecordCommandOutput
  | GetProfileObjectTypeCommandOutput
  | GetProfileObjectTypeTemplateCommandOutput
  | GetProfileRecommendationsCommandOutput
  | GetRecommenderCommandOutput
  | GetRecommenderFilterCommandOutput
  | GetSegmentDefinitionCommandOutput
  | GetSegmentEstimateCommandOutput
  | GetSegmentMembershipCommandOutput
  | GetSegmentSnapshotCommandOutput
  | GetSimilarProfilesCommandOutput
  | GetUploadJobCommandOutput
  | GetUploadJobPathCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowStepsCommandOutput
  | ListAccountIntegrationsCommandOutput
  | ListCalculatedAttributeDefinitionsCommandOutput
  | ListCalculatedAttributesForProfileCommandOutput
  | ListDomainLayoutsCommandOutput
  | ListDomainObjectTypesCommandOutput
  | ListDomainsCommandOutput
  | ListEventStreamsCommandOutput
  | ListEventTriggersCommandOutput
  | ListIdentityResolutionJobsCommandOutput
  | ListIntegrationsCommandOutput
  | ListObjectTypeAttributeValuesCommandOutput
  | ListObjectTypeAttributesCommandOutput
  | ListProfileAttributeValuesCommandOutput
  | ListProfileHistoryRecordsCommandOutput
  | ListProfileObjectTypeTemplatesCommandOutput
  | ListProfileObjectTypesCommandOutput
  | ListProfileObjectsCommandOutput
  | ListRecommenderFiltersCommandOutput
  | ListRecommenderRecipesCommandOutput
  | ListRecommendersCommandOutput
  | ListRuleBasedMatchesCommandOutput
  | ListSegmentDefinitionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUploadJobsCommandOutput
  | ListWorkflowsCommandOutput
  | MergeProfilesCommandOutput
  | PutDomainObjectTypeCommandOutput
  | PutIntegrationCommandOutput
  | PutProfileObjectCommandOutput
  | PutProfileObjectTypeCommandOutput
  | SearchProfilesCommandOutput
  | StartRecommenderCommandOutput
  | StartUploadJobCommandOutput
  | StopRecommenderCommandOutput
  | StopUploadJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCalculatedAttributeDefinitionCommandOutput
  | UpdateDomainCommandOutput
  | UpdateDomainLayoutCommandOutput
  | UpdateEventTriggerCommandOutput
  | UpdateProfileCommandOutput
  | UpdateRecommenderCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type CustomerProfilesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of CustomerProfilesClient class constructor that set the region, credentials and other options.
 */
export interface CustomerProfilesClientConfig extends CustomerProfilesClientConfigType {}

/**
 * @public
 */
export type CustomerProfilesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of CustomerProfilesClient class. This is resolved and normalized from the {@link CustomerProfilesClientConfig | constructor configuration interface}.
 */
export interface CustomerProfilesClientResolvedConfig extends CustomerProfilesClientResolvedConfigType {}

/**
 * <fullname>Amazon Connect Customer Profiles</fullname>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Customer_Profiles.html">Customer Profiles actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Customer_Profiles.html">Customer Profiles data types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>Amazon Connect Customer Profiles is a unified customer profile for your contact
 *          center that has pre-built connectors powered by AppFlow that make it easy to combine
 *          customer information from third party applications, such as Salesforce (CRM), ServiceNow
 *          (ITSM), and your enterprise resource planning (ERP), with contact history from your Amazon Connect contact center. </p>
 *          <p>For more information about the Amazon Connect Customer Profiles feature, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/customer-profiles.html">Use Customer
 *             Profiles</a> in the <i>Amazon Connect Administrator's Guide</i>. </p>
 * @public
 */
export class CustomerProfilesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CustomerProfilesClientResolvedConfig
> {
  /**
   * The resolved configuration of CustomerProfilesClient class. This is resolved and normalized from the {@link CustomerProfilesClientConfig | constructor configuration interface}.
   */
  readonly config: CustomerProfilesClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<CustomerProfilesClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultCustomerProfilesHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: CustomerProfilesClientResolvedConfig) =>
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
