// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AddInstanceFleetCommandInput, AddInstanceFleetCommandOutput } from "./commands/AddInstanceFleetCommand";
import { AddInstanceGroupsCommandInput, AddInstanceGroupsCommandOutput } from "./commands/AddInstanceGroupsCommand";
import { AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput } from "./commands/AddJobFlowStepsCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CancelStepsCommandInput, CancelStepsCommandOutput } from "./commands/CancelStepsCommand";
import {
  CreateSecurityConfigurationCommandInput,
  CreateSecurityConfigurationCommandOutput,
} from "./commands/CreateSecurityConfigurationCommand";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "./commands/CreateStudioCommand";
import {
  CreateStudioSessionMappingCommandInput,
  CreateStudioSessionMappingCommandOutput,
} from "./commands/CreateStudioSessionMappingCommand";
import {
  DeleteSecurityConfigurationCommandInput,
  DeleteSecurityConfigurationCommandOutput,
} from "./commands/DeleteSecurityConfigurationCommand";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "./commands/DeleteStudioCommand";
import {
  DeleteStudioSessionMappingCommandInput,
  DeleteStudioSessionMappingCommandOutput,
} from "./commands/DeleteStudioSessionMappingCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import { DescribeJobFlowsCommandInput, DescribeJobFlowsCommandOutput } from "./commands/DescribeJobFlowsCommand";
import {
  DescribeNotebookExecutionCommandInput,
  DescribeNotebookExecutionCommandOutput,
} from "./commands/DescribeNotebookExecutionCommand";
import {
  DescribeReleaseLabelCommandInput,
  DescribeReleaseLabelCommandOutput,
} from "./commands/DescribeReleaseLabelCommand";
import {
  DescribeSecurityConfigurationCommandInput,
  DescribeSecurityConfigurationCommandOutput,
} from "./commands/DescribeSecurityConfigurationCommand";
import { DescribeStepCommandInput, DescribeStepCommandOutput } from "./commands/DescribeStepCommand";
import { DescribeStudioCommandInput, DescribeStudioCommandOutput } from "./commands/DescribeStudioCommand";
import {
  GetAutoTerminationPolicyCommandInput,
  GetAutoTerminationPolicyCommandOutput,
} from "./commands/GetAutoTerminationPolicyCommand";
import {
  GetBlockPublicAccessConfigurationCommandInput,
  GetBlockPublicAccessConfigurationCommandOutput,
} from "./commands/GetBlockPublicAccessConfigurationCommand";
import {
  GetClusterSessionCredentialsCommandInput,
  GetClusterSessionCredentialsCommandOutput,
} from "./commands/GetClusterSessionCredentialsCommand";
import {
  GetManagedScalingPolicyCommandInput,
  GetManagedScalingPolicyCommandOutput,
} from "./commands/GetManagedScalingPolicyCommand";
import {
  GetStudioSessionMappingCommandInput,
  GetStudioSessionMappingCommandOutput,
} from "./commands/GetStudioSessionMappingCommand";
import {
  ListBootstrapActionsCommandInput,
  ListBootstrapActionsCommandOutput,
} from "./commands/ListBootstrapActionsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListInstanceFleetsCommandInput, ListInstanceFleetsCommandOutput } from "./commands/ListInstanceFleetsCommand";
import { ListInstanceGroupsCommandInput, ListInstanceGroupsCommandOutput } from "./commands/ListInstanceGroupsCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "./commands/ListInstancesCommand";
import {
  ListNotebookExecutionsCommandInput,
  ListNotebookExecutionsCommandOutput,
} from "./commands/ListNotebookExecutionsCommand";
import { ListReleaseLabelsCommandInput, ListReleaseLabelsCommandOutput } from "./commands/ListReleaseLabelsCommand";
import {
  ListSecurityConfigurationsCommandInput,
  ListSecurityConfigurationsCommandOutput,
} from "./commands/ListSecurityConfigurationsCommand";
import { ListStepsCommandInput, ListStepsCommandOutput } from "./commands/ListStepsCommand";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import {
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
} from "./commands/ListStudioSessionMappingsCommand";
import { ModifyClusterCommandInput, ModifyClusterCommandOutput } from "./commands/ModifyClusterCommand";
import {
  ModifyInstanceFleetCommandInput,
  ModifyInstanceFleetCommandOutput,
} from "./commands/ModifyInstanceFleetCommand";
import {
  ModifyInstanceGroupsCommandInput,
  ModifyInstanceGroupsCommandOutput,
} from "./commands/ModifyInstanceGroupsCommand";
import {
  PutAutoScalingPolicyCommandInput,
  PutAutoScalingPolicyCommandOutput,
} from "./commands/PutAutoScalingPolicyCommand";
import {
  PutAutoTerminationPolicyCommandInput,
  PutAutoTerminationPolicyCommandOutput,
} from "./commands/PutAutoTerminationPolicyCommand";
import {
  PutBlockPublicAccessConfigurationCommandInput,
  PutBlockPublicAccessConfigurationCommandOutput,
} from "./commands/PutBlockPublicAccessConfigurationCommand";
import {
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
} from "./commands/PutManagedScalingPolicyCommand";
import {
  RemoveAutoScalingPolicyCommandInput,
  RemoveAutoScalingPolicyCommandOutput,
} from "./commands/RemoveAutoScalingPolicyCommand";
import {
  RemoveAutoTerminationPolicyCommandInput,
  RemoveAutoTerminationPolicyCommandOutput,
} from "./commands/RemoveAutoTerminationPolicyCommand";
import {
  RemoveManagedScalingPolicyCommandInput,
  RemoveManagedScalingPolicyCommandOutput,
} from "./commands/RemoveManagedScalingPolicyCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import { RunJobFlowCommandInput, RunJobFlowCommandOutput } from "./commands/RunJobFlowCommand";
import {
  SetTerminationProtectionCommandInput,
  SetTerminationProtectionCommandOutput,
} from "./commands/SetTerminationProtectionCommand";
import {
  SetVisibleToAllUsersCommandInput,
  SetVisibleToAllUsersCommandOutput,
} from "./commands/SetVisibleToAllUsersCommand";
import {
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
} from "./commands/StartNotebookExecutionCommand";
import {
  StopNotebookExecutionCommandInput,
  StopNotebookExecutionCommandOutput,
} from "./commands/StopNotebookExecutionCommand";
import { TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput } from "./commands/TerminateJobFlowsCommand";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "./commands/UpdateStudioCommand";
import {
  UpdateStudioSessionMappingCommandInput,
  UpdateStudioSessionMappingCommandOutput,
} from "./commands/UpdateStudioSessionMappingCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddInstanceFleetCommandInput
  | AddInstanceGroupsCommandInput
  | AddJobFlowStepsCommandInput
  | AddTagsCommandInput
  | CancelStepsCommandInput
  | CreateSecurityConfigurationCommandInput
  | CreateStudioCommandInput
  | CreateStudioSessionMappingCommandInput
  | DeleteSecurityConfigurationCommandInput
  | DeleteStudioCommandInput
  | DeleteStudioSessionMappingCommandInput
  | DescribeClusterCommandInput
  | DescribeJobFlowsCommandInput
  | DescribeNotebookExecutionCommandInput
  | DescribeReleaseLabelCommandInput
  | DescribeSecurityConfigurationCommandInput
  | DescribeStepCommandInput
  | DescribeStudioCommandInput
  | GetAutoTerminationPolicyCommandInput
  | GetBlockPublicAccessConfigurationCommandInput
  | GetClusterSessionCredentialsCommandInput
  | GetManagedScalingPolicyCommandInput
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
  | SetTerminationProtectionCommandInput
  | SetVisibleToAllUsersCommandInput
  | StartNotebookExecutionCommandInput
  | StopNotebookExecutionCommandInput
  | TerminateJobFlowsCommandInput
  | UpdateStudioCommandInput
  | UpdateStudioSessionMappingCommandInput;

export type ServiceOutputTypes =
  | AddInstanceFleetCommandOutput
  | AddInstanceGroupsCommandOutput
  | AddJobFlowStepsCommandOutput
  | AddTagsCommandOutput
  | CancelStepsCommandOutput
  | CreateSecurityConfigurationCommandOutput
  | CreateStudioCommandOutput
  | CreateStudioSessionMappingCommandOutput
  | DeleteSecurityConfigurationCommandOutput
  | DeleteStudioCommandOutput
  | DeleteStudioSessionMappingCommandOutput
  | DescribeClusterCommandOutput
  | DescribeJobFlowsCommandOutput
  | DescribeNotebookExecutionCommandOutput
  | DescribeReleaseLabelCommandOutput
  | DescribeSecurityConfigurationCommandOutput
  | DescribeStepCommandOutput
  | DescribeStudioCommandOutput
  | GetAutoTerminationPolicyCommandOutput
  | GetBlockPublicAccessConfigurationCommandOutput
  | GetClusterSessionCredentialsCommandOutput
  | GetManagedScalingPolicyCommandOutput
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
  | SetTerminationProtectionCommandOutput
  | SetVisibleToAllUsersCommandOutput
  | StartNotebookExecutionCommandOutput
  | StopNotebookExecutionCommandOutput
  | TerminateJobFlowsCommandOutput
  | UpdateStudioCommandOutput
  | UpdateStudioSessionMappingCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type EMRClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of EMRClient class constructor that set the region, credentials and other options.
 */
export interface EMRClientConfig extends EMRClientConfigType {}

type EMRClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of EMRClient class. This is resolved and normalized from the {@link EMRClientConfig | constructor configuration interface}.
 */
export interface EMRClientResolvedConfig extends EMRClientResolvedConfigType {}

/**
 * <p>Amazon EMR is a web service that makes it easier to process large amounts of
 *          data efficiently. Amazon EMR uses Hadoop processing combined with several Amazon Web Services services to do tasks such as web indexing, data mining, log file analysis,
 *          machine learning, scientific simulation, and data warehouse management.</p>
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

  constructor(configuration: EMRClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
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
