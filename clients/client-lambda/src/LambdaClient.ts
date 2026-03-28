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
  defaultLambdaHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "./commands/AddLayerVersionPermissionCommand";
import type { AddPermissionCommandInput, AddPermissionCommandOutput } from "./commands/AddPermissionCommand";
import type {
  CheckpointDurableExecutionCommandInput,
  CheckpointDurableExecutionCommandOutput,
} from "./commands/CheckpointDurableExecutionCommand";
import type { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import type {
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
} from "./commands/CreateCapacityProviderCommand";
import type {
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "./commands/CreateCodeSigningConfigCommand";
import type {
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "./commands/CreateEventSourceMappingCommand";
import type { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import type {
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "./commands/CreateFunctionUrlConfigCommand";
import type { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import type {
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
} from "./commands/DeleteCapacityProviderCommand";
import type {
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "./commands/DeleteCodeSigningConfigCommand";
import type {
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "./commands/DeleteEventSourceMappingCommand";
import type {
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "./commands/DeleteFunctionCodeSigningConfigCommand";
import type { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import type {
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "./commands/DeleteFunctionConcurrencyCommand";
import type {
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "./commands/DeleteFunctionEventInvokeConfigCommand";
import type {
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "./commands/DeleteFunctionUrlConfigCommand";
import type {
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput,
} from "./commands/DeleteLayerVersionCommand";
import type {
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import type {
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import type { GetAliasCommandInput, GetAliasCommandOutput } from "./commands/GetAliasCommand";
import type {
  GetCapacityProviderCommandInput,
  GetCapacityProviderCommandOutput,
} from "./commands/GetCapacityProviderCommand";
import type {
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "./commands/GetCodeSigningConfigCommand";
import type {
  GetDurableExecutionCommandInput,
  GetDurableExecutionCommandOutput,
} from "./commands/GetDurableExecutionCommand";
import type {
  GetDurableExecutionHistoryCommandInput,
  GetDurableExecutionHistoryCommandOutput,
} from "./commands/GetDurableExecutionHistoryCommand";
import type {
  GetDurableExecutionStateCommandInput,
  GetDurableExecutionStateCommandOutput,
} from "./commands/GetDurableExecutionStateCommand";
import type {
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "./commands/GetEventSourceMappingCommand";
import type {
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "./commands/GetFunctionCodeSigningConfigCommand";
import type { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import type {
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "./commands/GetFunctionConcurrencyCommand";
import type {
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "./commands/GetFunctionConfigurationCommand";
import type {
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "./commands/GetFunctionEventInvokeConfigCommand";
import type {
  GetFunctionRecursionConfigCommandInput,
  GetFunctionRecursionConfigCommandOutput,
} from "./commands/GetFunctionRecursionConfigCommand";
import type {
  GetFunctionScalingConfigCommandInput,
  GetFunctionScalingConfigCommandOutput,
} from "./commands/GetFunctionScalingConfigCommand";
import type {
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "./commands/GetFunctionUrlConfigCommand";
import type {
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "./commands/GetLayerVersionByArnCommand";
import type { GetLayerVersionCommandInput, GetLayerVersionCommandOutput } from "./commands/GetLayerVersionCommand";
import type {
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "./commands/GetLayerVersionPolicyCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type {
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "./commands/GetProvisionedConcurrencyConfigCommand";
import type {
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
} from "./commands/GetRuntimeManagementConfigCommand";
import type { InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "./commands/InvokeAsyncCommand";
import type { InvokeCommandInput, InvokeCommandOutput } from "./commands/InvokeCommand";
import type {
  InvokeWithResponseStreamCommandInput,
  InvokeWithResponseStreamCommandOutput,
} from "./commands/InvokeWithResponseStreamCommand";
import type { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import type {
  ListCapacityProvidersCommandInput,
  ListCapacityProvidersCommandOutput,
} from "./commands/ListCapacityProvidersCommand";
import type {
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "./commands/ListCodeSigningConfigsCommand";
import type {
  ListDurableExecutionsByFunctionCommandInput,
  ListDurableExecutionsByFunctionCommandOutput,
} from "./commands/ListDurableExecutionsByFunctionCommand";
import type {
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "./commands/ListEventSourceMappingsCommand";
import type {
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "./commands/ListFunctionEventInvokeConfigsCommand";
import type {
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "./commands/ListFunctionsByCodeSigningConfigCommand";
import type { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import type {
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "./commands/ListFunctionUrlConfigsCommand";
import type {
  ListFunctionVersionsByCapacityProviderCommandInput,
  ListFunctionVersionsByCapacityProviderCommandOutput,
} from "./commands/ListFunctionVersionsByCapacityProviderCommand";
import type { ListLayersCommandInput, ListLayersCommandOutput } from "./commands/ListLayersCommand";
import type {
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput,
} from "./commands/ListLayerVersionsCommand";
import type {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "./commands/ListProvisionedConcurrencyConfigsCommand";
import type { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import type {
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "./commands/ListVersionsByFunctionCommand";
import type {
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "./commands/PublishLayerVersionCommand";
import type { PublishVersionCommandInput, PublishVersionCommandOutput } from "./commands/PublishVersionCommand";
import type {
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "./commands/PutFunctionCodeSigningConfigCommand";
import type {
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "./commands/PutFunctionConcurrencyCommand";
import type {
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "./commands/PutFunctionEventInvokeConfigCommand";
import type {
  PutFunctionRecursionConfigCommandInput,
  PutFunctionRecursionConfigCommandOutput,
} from "./commands/PutFunctionRecursionConfigCommand";
import type {
  PutFunctionScalingConfigCommandInput,
  PutFunctionScalingConfigCommandOutput,
} from "./commands/PutFunctionScalingConfigCommand";
import type {
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "./commands/PutProvisionedConcurrencyConfigCommand";
import type {
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
} from "./commands/PutRuntimeManagementConfigCommand";
import type {
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "./commands/RemoveLayerVersionPermissionCommand";
import type { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import type {
  SendDurableExecutionCallbackFailureCommandInput,
  SendDurableExecutionCallbackFailureCommandOutput,
} from "./commands/SendDurableExecutionCallbackFailureCommand";
import type {
  SendDurableExecutionCallbackHeartbeatCommandInput,
  SendDurableExecutionCallbackHeartbeatCommandOutput,
} from "./commands/SendDurableExecutionCallbackHeartbeatCommand";
import type {
  SendDurableExecutionCallbackSuccessCommandInput,
  SendDurableExecutionCallbackSuccessCommandOutput,
} from "./commands/SendDurableExecutionCallbackSuccessCommand";
import type {
  StopDurableExecutionCommandInput,
  StopDurableExecutionCommandOutput,
} from "./commands/StopDurableExecutionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import type {
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
} from "./commands/UpdateCapacityProviderCommand";
import type {
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "./commands/UpdateCodeSigningConfigCommand";
import type {
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "./commands/UpdateEventSourceMappingCommand";
import type {
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput,
} from "./commands/UpdateFunctionCodeCommand";
import type {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "./commands/UpdateFunctionConfigurationCommand";
import type {
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "./commands/UpdateFunctionEventInvokeConfigCommand";
import type {
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "./commands/UpdateFunctionUrlConfigCommand";
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
  | AddLayerVersionPermissionCommandInput
  | AddPermissionCommandInput
  | CheckpointDurableExecutionCommandInput
  | CreateAliasCommandInput
  | CreateCapacityProviderCommandInput
  | CreateCodeSigningConfigCommandInput
  | CreateEventSourceMappingCommandInput
  | CreateFunctionCommandInput
  | CreateFunctionUrlConfigCommandInput
  | DeleteAliasCommandInput
  | DeleteCapacityProviderCommandInput
  | DeleteCodeSigningConfigCommandInput
  | DeleteEventSourceMappingCommandInput
  | DeleteFunctionCodeSigningConfigCommandInput
  | DeleteFunctionCommandInput
  | DeleteFunctionConcurrencyCommandInput
  | DeleteFunctionEventInvokeConfigCommandInput
  | DeleteFunctionUrlConfigCommandInput
  | DeleteLayerVersionCommandInput
  | DeleteProvisionedConcurrencyConfigCommandInput
  | GetAccountSettingsCommandInput
  | GetAliasCommandInput
  | GetCapacityProviderCommandInput
  | GetCodeSigningConfigCommandInput
  | GetDurableExecutionCommandInput
  | GetDurableExecutionHistoryCommandInput
  | GetDurableExecutionStateCommandInput
  | GetEventSourceMappingCommandInput
  | GetFunctionCodeSigningConfigCommandInput
  | GetFunctionCommandInput
  | GetFunctionConcurrencyCommandInput
  | GetFunctionConfigurationCommandInput
  | GetFunctionEventInvokeConfigCommandInput
  | GetFunctionRecursionConfigCommandInput
  | GetFunctionScalingConfigCommandInput
  | GetFunctionUrlConfigCommandInput
  | GetLayerVersionByArnCommandInput
  | GetLayerVersionCommandInput
  | GetLayerVersionPolicyCommandInput
  | GetPolicyCommandInput
  | GetProvisionedConcurrencyConfigCommandInput
  | GetRuntimeManagementConfigCommandInput
  | InvokeAsyncCommandInput
  | InvokeCommandInput
  | InvokeWithResponseStreamCommandInput
  | ListAliasesCommandInput
  | ListCapacityProvidersCommandInput
  | ListCodeSigningConfigsCommandInput
  | ListDurableExecutionsByFunctionCommandInput
  | ListEventSourceMappingsCommandInput
  | ListFunctionEventInvokeConfigsCommandInput
  | ListFunctionUrlConfigsCommandInput
  | ListFunctionVersionsByCapacityProviderCommandInput
  | ListFunctionsByCodeSigningConfigCommandInput
  | ListFunctionsCommandInput
  | ListLayerVersionsCommandInput
  | ListLayersCommandInput
  | ListProvisionedConcurrencyConfigsCommandInput
  | ListTagsCommandInput
  | ListVersionsByFunctionCommandInput
  | PublishLayerVersionCommandInput
  | PublishVersionCommandInput
  | PutFunctionCodeSigningConfigCommandInput
  | PutFunctionConcurrencyCommandInput
  | PutFunctionEventInvokeConfigCommandInput
  | PutFunctionRecursionConfigCommandInput
  | PutFunctionScalingConfigCommandInput
  | PutProvisionedConcurrencyConfigCommandInput
  | PutRuntimeManagementConfigCommandInput
  | RemoveLayerVersionPermissionCommandInput
  | RemovePermissionCommandInput
  | SendDurableExecutionCallbackFailureCommandInput
  | SendDurableExecutionCallbackHeartbeatCommandInput
  | SendDurableExecutionCallbackSuccessCommandInput
  | StopDurableExecutionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateCapacityProviderCommandInput
  | UpdateCodeSigningConfigCommandInput
  | UpdateEventSourceMappingCommandInput
  | UpdateFunctionCodeCommandInput
  | UpdateFunctionConfigurationCommandInput
  | UpdateFunctionEventInvokeConfigCommandInput
  | UpdateFunctionUrlConfigCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddLayerVersionPermissionCommandOutput
  | AddPermissionCommandOutput
  | CheckpointDurableExecutionCommandOutput
  | CreateAliasCommandOutput
  | CreateCapacityProviderCommandOutput
  | CreateCodeSigningConfigCommandOutput
  | CreateEventSourceMappingCommandOutput
  | CreateFunctionCommandOutput
  | CreateFunctionUrlConfigCommandOutput
  | DeleteAliasCommandOutput
  | DeleteCapacityProviderCommandOutput
  | DeleteCodeSigningConfigCommandOutput
  | DeleteEventSourceMappingCommandOutput
  | DeleteFunctionCodeSigningConfigCommandOutput
  | DeleteFunctionCommandOutput
  | DeleteFunctionConcurrencyCommandOutput
  | DeleteFunctionEventInvokeConfigCommandOutput
  | DeleteFunctionUrlConfigCommandOutput
  | DeleteLayerVersionCommandOutput
  | DeleteProvisionedConcurrencyConfigCommandOutput
  | GetAccountSettingsCommandOutput
  | GetAliasCommandOutput
  | GetCapacityProviderCommandOutput
  | GetCodeSigningConfigCommandOutput
  | GetDurableExecutionCommandOutput
  | GetDurableExecutionHistoryCommandOutput
  | GetDurableExecutionStateCommandOutput
  | GetEventSourceMappingCommandOutput
  | GetFunctionCodeSigningConfigCommandOutput
  | GetFunctionCommandOutput
  | GetFunctionConcurrencyCommandOutput
  | GetFunctionConfigurationCommandOutput
  | GetFunctionEventInvokeConfigCommandOutput
  | GetFunctionRecursionConfigCommandOutput
  | GetFunctionScalingConfigCommandOutput
  | GetFunctionUrlConfigCommandOutput
  | GetLayerVersionByArnCommandOutput
  | GetLayerVersionCommandOutput
  | GetLayerVersionPolicyCommandOutput
  | GetPolicyCommandOutput
  | GetProvisionedConcurrencyConfigCommandOutput
  | GetRuntimeManagementConfigCommandOutput
  | InvokeAsyncCommandOutput
  | InvokeCommandOutput
  | InvokeWithResponseStreamCommandOutput
  | ListAliasesCommandOutput
  | ListCapacityProvidersCommandOutput
  | ListCodeSigningConfigsCommandOutput
  | ListDurableExecutionsByFunctionCommandOutput
  | ListEventSourceMappingsCommandOutput
  | ListFunctionEventInvokeConfigsCommandOutput
  | ListFunctionUrlConfigsCommandOutput
  | ListFunctionVersionsByCapacityProviderCommandOutput
  | ListFunctionsByCodeSigningConfigCommandOutput
  | ListFunctionsCommandOutput
  | ListLayerVersionsCommandOutput
  | ListLayersCommandOutput
  | ListProvisionedConcurrencyConfigsCommandOutput
  | ListTagsCommandOutput
  | ListVersionsByFunctionCommandOutput
  | PublishLayerVersionCommandOutput
  | PublishVersionCommandOutput
  | PutFunctionCodeSigningConfigCommandOutput
  | PutFunctionConcurrencyCommandOutput
  | PutFunctionEventInvokeConfigCommandOutput
  | PutFunctionRecursionConfigCommandOutput
  | PutFunctionScalingConfigCommandOutput
  | PutProvisionedConcurrencyConfigCommandOutput
  | PutRuntimeManagementConfigCommandOutput
  | RemoveLayerVersionPermissionCommandOutput
  | RemovePermissionCommandOutput
  | SendDurableExecutionCallbackFailureCommandOutput
  | SendDurableExecutionCallbackHeartbeatCommandOutput
  | SendDurableExecutionCallbackSuccessCommandOutput
  | StopDurableExecutionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateCapacityProviderCommandOutput
  | UpdateCodeSigningConfigCommandOutput
  | UpdateEventSourceMappingCommandOutput
  | UpdateFunctionCodeCommandOutput
  | UpdateFunctionConfigurationCommandOutput
  | UpdateFunctionEventInvokeConfigCommandOutput
  | UpdateFunctionUrlConfigCommandOutput;

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
export type LambdaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of LambdaClient class constructor that set the region, credentials and other options.
 */
export interface LambdaClientConfig extends LambdaClientConfigType {}

/**
 * @public
 */
export type LambdaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of LambdaClient class. This is resolved and normalized from the {@link LambdaClientConfig | constructor configuration interface}.
 */
export interface LambdaClientResolvedConfig extends LambdaClientResolvedConfigType {}

/**
 * <fullname>Lambda</fullname> <p> <b>Overview</b> </p> <p>Lambda is a compute service that lets you run code without provisioning or managing servers. Lambda runs your code on a high-availability compute infrastructure and performs all of the administration of the compute resources, including server and operating system maintenance, capacity provisioning and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p> <p>The <i>Lambda API Reference</i> provides information about each of the API methods, including details about the parameters in each API request and response. </p> <p/> <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>. </p> <p>For a list of Region-specific endpoints that Lambda supports, see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html">Lambda endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p> <p>When making the API calls, you will need to authenticate your request by providing a signature. Lambda supports signature version 4. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the <i>Amazon Web Services General Reference.</i>. </p> <p> <b>CA certificates</b> </p> <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate environment and do not manage your own computer, you might need to ask an administrator to assist with the update process. The following list shows minimum operating system and Java versions:</p> <ul> <li> <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and later versions contain at least one of the required CAs in their trust list. </p> </li> <li> <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the required CAs in their default trusted CA list. </p> </li> <li> <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December 2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p> </li> </ul> <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or programmatically, you will need to ensure your client machines support any of the following CAs: </p> <ul> <li> <p>Amazon Root CA 1</p> </li> <li> <p>Starfield Services Root Certificate Authority - G2</p> </li> <li> <p>Starfield Class 2 Certification Authority</p> </li> </ul> <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a> </p>
 * @public
 */
export class LambdaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LambdaClientResolvedConfig
> {
  /**
   * The resolved configuration of LambdaClient class. This is resolved and normalized from the {@link LambdaClientConfig | constructor configuration interface}.
   */
  readonly config: LambdaClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<LambdaClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultLambdaHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: LambdaClientResolvedConfig) =>
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
