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
  defaultEMRHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput } from "./commands/AddInstanceFleetCommand";
import type {
  AddInstanceGroupsCommandInput,
  AddInstanceGroupsCommandOutput,
} from "./commands/AddInstanceGroupsCommand";
import type { AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput } from "./commands/AddJobFlowStepsCommand";
import type { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import type { CancelStepsCommandInput, CancelStepsCommandOutput } from "./commands/CancelStepsCommand";
import type {
  CreatePersistentAppUICommandInput,
  CreatePersistentAppUICommandOutput,
} from "./commands/CreatePersistentAppUICommand";
import type {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import type { CreateStudioCommandInput, CreateStudioCommandOutput } from "./commands/CreateStudioCommand";
import type {
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
} from "./commands/CreateStudioSessionMappingCommand";
import type {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import type { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "./commands/DeleteStudioCommand";
import type {
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
} from "./commands/DeleteStudioSessionMappingCommand";
import type { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import type { DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput } from "./commands/DescribeJobFlowsCommand";
import type {
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
} from "./commands/DescribeNotebookExecutionCommand";
import type {
  DescribePersistentAppUICommandInput,
  DescribePersistentAppUICommandOutput,
} from "./commands/DescribePersistentAppUICommand";
import type {
  DescribeReleaseLabelCommandInput,
  DescribeReleaseLabelCommandOutput,
} from "./commands/DescribeReleaseLabelCommand";
import type {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "./commands/DescribeSecurityConfigurationCommand";
import type { DescribeStepCommandInput, DescribeStepCommandOutput } from "./commands/DescribeStepCommand";
import type { DescribeStudioCommandInput, DescribeStudioCommandOutput } from "./commands/DescribeStudioCommand";
import type {
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
} from "./commands/GetAutoTerminationPolicyCommand";
import type {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "./commands/GetBlockPublicAccessConfigurationCommand";
import type {
  GetClusterSessionCredentialsCommandInput,
  GetClusterSessionCredentialsCommandOutput,
} from "./commands/GetClusterSessionCredentialsCommand";
import type {
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
} from "./commands/GetManagedScalingPolicyCommand";
import type {
  GetOnClusterAppUIPresignedURLCommandInput,
  GetOnClusterAppUIPresignedURLCommandOutput,
} from "./commands/GetOnClusterAppUIPresignedURLCommand";
import type {
  GetPersistentAppUIPresignedURLCommandInput,
  GetPersistentAppUIPresignedURLCommandOutput,
} from "./commands/GetPersistentAppUIPresignedURLCommand";
import type {
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
} from "./commands/GetStudioSessionMappingCommand";
import type {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "./commands/ListBootstrapActionsCommand";
import type { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import type {
  ListInstanceFleetsCommandInput,
  ListInstanceFleetsCommandOutput,
} from "./commands/ListInstanceFleetsCommand";
import type {
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
} from "./commands/ListInstanceGroupsCommand";
import type { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import type {
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "./commands/ListNotebookExecutionsCommand";
import type {
  ListReleaseLabelsCommandInput,
  ListReleaseLabelsCommandOutput,
} from "./commands/ListReleaseLabelsCommand";
import type {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "./commands/ListSecurityConfigurationsCommand";
import type { ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import type { ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import type {
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "./commands/ListStudioSessionMappingsCommand";
import type {
  ListSupportedInstanceTypesCommandInput,
  ListSupportedInstanceTypesCommandOutput,
} from "./commands/ListSupportedInstanceTypesCommand";
import type { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand";
import type {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
} from "./commands/ModifyInstanceFleetCommand";
import type {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
} from "./commands/ModifyInstanceGroupsCommand";
import type {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
} from "./commands/PutAutoScalingPolicyCommand";
import type {
  PutAutoTerminationPolicyCommandInput,
  PutAutoTerminationPolicyCommandOutput,
} from "./commands/PutAutoTerminationPolicyCommand";
import type {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
} from "./commands/PutBlockPublicAccessConfigurationCommand";
import type {
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
} from "./commands/PutManagedScalingPolicyCommand";
import type {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput,
} from "./commands/RemoveAutoScalingPolicyCommand";
import type {
  RemoveAutoTerminationPolicyCommandInput,
  RemoveAutoTerminationPolicyCommandOutput,
} from "./commands/RemoveAutoTerminationPolicyCommand";
import type {
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
} from "./commands/RemoveManagedScalingPolicyCommand";
import type { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import type { RunJobFlowCommandInput, RunJobFlowCommandOutput } from "./commands/RunJobFlowCommand";
import type {
  SetKeepJobFlowAliveWhenNoStepsCommandInput,
  SetKeepJobFlowAliveWhenNoStepsCommandOutput,
} from "./commands/SetKeepJobFlowAliveWhenNoStepsCommand";
import type {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
} from "./commands/SetTerminationProtectionCommand";
import type {
  SetUnhealthyNodeReplacementCommandInput,
  SetUnhealthyNodeReplacementCommandOutput,
} from "./commands/SetUnhealthyNodeReplacementCommand";
import type {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
} from "./commands/SetVisibleToAllUsersCommand";
import type {
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
} from "./commands/StartNotebookExecutionCommand";
import type {
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
} from "./commands/StopNotebookExecutionCommand";
import type {
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput,
} from "./commands/TerminateJobFlowsCommand";
import type { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "./commands/UpdateStudioCommand";
import type {
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "./commands/UpdateStudioSessionMappingCommand";
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
  | AddInstanceFleetCommandInput
  | AddInstanceGroupsCommandInput
  | AddJobFlowStepsCommandInput
  | AddTagsCommandInput
  | CancelStepsCommandInput
  | CreatePersistentAppUICommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateStudioCommandInput
  | CreateStudioSessionMappingCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DeleteStudioCommandInput
  | DeleteStudioSessionMappingCommandInput
  | DescribeClusterCommandInput
  | DescribeJobFlowsCommandInput
  | DescribeNotebookExecutionCommandInput
  | DescribePersistentAppUICommandInput
  | DescribeReleaseLabelCommandInput
  | DescribeSecurityConfigurationCommandInput
  | DescribeStepCommandInput
  | DescribeStudioCommandInput
  | GetAutoTerminationPolicyCommandInput
  | GetBlockPublicAccessConfigurationCommandInput
  | GetClusterSessionCredentialsCommandInput
  | GetManagedScalingPolicyCommandInput
  | GetOnClusterAppUIPresignedURLCommandInput
  | GetPersistentAppUIPresignedURLCommandInput
  | GetStudioSessionMappingCommandInput
  | ListBootstrapActionsCommandInput
  | ListClustersCommandInput
  | ListInstanceFleetsCommandInput
  | ListInstanceGroupsCommandInput
  | ListInstancesCommandInput
  | ListNotebookExecutionsCommandInput
  | ListReleaseLabelsCommandInput
  | ListSecurityConfigurationsCommandInput
  | ListStepsCommandInput
  | ListStudioSessionMappingsCommandInput
  | ListStudiosCommandInput
  | ListSupportedInstanceTypesCommandInput
  | ModifyClusterCommandInput
  | ModifyInstanceFleetCommandInput
  | ModifyInstanceGroupsCommandInput
  | PutAutoScalingPolicyCommandInput
  | PutAutoTerminationPolicyCommandInput
  | PutBlockPublicAccessConfigurationCommandInput
  | PutManagedScalingPolicyCommandInput
  | RemoveAutoScalingPolicyCommandInput
  | RemoveAutoTerminationPolicyCommandInput
  | RemoveManagedScalingPolicyCommandInput
  | RemoveTagsCommandInput
  | RunJobFlowCommandInput
  | SetKeepJobFlowAliveWhenNoStepsCommandInput
  | SetTerminationProtectionCommandInput
  | SetUnhealthyNodeReplacementCommandInput
  | SetVisibleToAllUsersCommandInput
  | StartNotebookExecutionCommandInput
  | StopNotebookExecutionCommandInput
  | TerminateJobFlowsCommandInput
  | UpdateStudioCommandInput
  | UpdateStudioSessionMappingCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddInstanceFleetCommandOutput
  | AddInstanceGroupsCommandOutput
  | AddJobFlowStepsCommandOutput
  | AddTagsCommandOutput
  | CancelStepsCommandOutput
  | CreatePersistentAppUICommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateStudioCommandOutput
  | CreateStudioSessionMappingCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DeleteStudioCommandOutput
  | DeleteStudioSessionMappingCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobFlowsCommandOutput
  | DescribeNotebookExecutionCommandOutput
  | DescribePersistentAppUICommandOutput
  | DescribeReleaseLabelCommandOutput
  | DescribeSecurityConfigurationCommandOutput
  | DescribeStepCommandOutput
  | DescribeStudioCommandOutput
  | GetAutoTerminationPolicyCommandOutput
  | GetBlockPublicAccessConfigurationCommandOutput
  | GetClusterSessionCredentialsCommandOutput
  | GetManagedScalingPolicyCommandOutput
  | GetOnClusterAppUIPresignedURLCommandOutput
  | GetPersistentAppUIPresignedURLCommandOutput
  | GetStudioSessionMappingCommandOutput
  | ListBootstrapActionsCommandOutput
  | ListClustersCommandOutput
  | ListInstanceFleetsCommandOutput
  | ListInstanceGroupsCommandOutput
  | ListInstancesCommandOutput
  | ListNotebookExecutionsCommandOutput
  | ListReleaseLabelsCommandOutput
  | ListSecurityConfigurationsCommandOutput
  | ListStepsCommandOutput
  | ListStudioSessionMappingsCommandOutput
  | ListStudiosCommandOutput
  | ListSupportedInstanceTypesCommandOutput
  | ModifyClusterCommandOutput
  | ModifyInstanceFleetCommandOutput
  | ModifyInstanceGroupsCommandOutput
  | PutAutoScalingPolicyCommandOutput
  | PutAutoTerminationPolicyCommandOutput
  | PutBlockPublicAccessConfigurationCommandOutput
  | PutManagedScalingPolicyCommandOutput
  | RemoveAutoScalingPolicyCommandOutput
  | RemoveAutoTerminationPolicyCommandOutput
  | RemoveManagedScalingPolicyCommandOutput
  | RemoveTagsCommandOutput
  | RunJobFlowCommandOutput
  | SetKeepJobFlowAliveWhenNoStepsCommandOutput
  | SetTerminationProtectionCommandOutput
  | SetUnhealthyNodeReplacementCommandOutput
  | SetVisibleToAllUsersCommandOutput
  | StartNotebookExecutionCommandOutput
  | StopNotebookExecutionCommandOutput
  | TerminateJobFlowsCommandOutput
  | UpdateStudioCommandOutput
  | UpdateStudioSessionMappingCommandOutput;

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
export type EMRClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of EMRClient class constructor that set the region, credentials and other options.
 */
export interface EMRClientConfig extends EMRClientConfigType {}

/**
 * @public
 */
export type EMRClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of EMRClient class. This is resolved and normalized from the {@link EMRClientConfig | constructor configuration interface}.
 */
export interface EMRClientResolvedConfig extends EMRClientResolvedConfigType {}

/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of
 *          data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis,
 *          machine learning, scientific simulation, and data warehouse management.</p>
 * @public
 */
export class EMRClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EMRClientResolvedConfig
> {
  /**
   * The resolved configuration of EMRClient class. This is resolved and normalized from the {@link EMRClientConfig | constructor configuration interface}.
   */
  readonly config: EMRClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<EMRClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultEMRHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: EMRClientResolvedConfig) =>
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
