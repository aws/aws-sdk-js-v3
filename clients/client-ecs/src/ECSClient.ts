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

import {
  CreateCapacityProviderCommandInput,
  CreateCapacityProviderCommandOutput,
} from "./commands/CreateCapacityProviderCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import { CreateTaskSetCommandInput, CreateTaskSetCommandOutput } from "./commands/CreateTaskSetCommand";
import {
  DeleteAccountSettingCommandInput,
  DeleteAccountSettingCommandOutput,
} from "./commands/DeleteAccountSettingCommand";
import { DeleteAttributesCommandInput, DeleteAttributesCommandOutput } from "./commands/DeleteAttributesCommand";
import {
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
} from "./commands/DeleteCapacityProviderCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import { DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput } from "./commands/DeleteTaskSetCommand";
import {
  DeregisterContainerInstanceCommandInput,
  DeregisterContainerInstanceCommandOutput,
} from "./commands/DeregisterContainerInstanceCommand";
import {
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput,
} from "./commands/DeregisterTaskDefinitionCommand";
import {
  DescribeCapacityProvidersCommandInput,
  DescribeCapacityProvidersCommandOutput,
} from "./commands/DescribeCapacityProvidersCommand";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput } from "./commands/DescribeClustersCommand";
import {
  DescribeContainerInstancesCommandInput,
  DescribeContainerInstancesCommandOutput,
} from "./commands/DescribeContainerInstancesCommand";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand";
import {
  DescribeTaskDefinitionCommandInput,
  DescribeTaskDefinitionCommandOutput,
} from "./commands/DescribeTaskDefinitionCommand";
import { DescribeTasksCommandInput, DescribeTasksCommandOutput } from "./commands/DescribeTasksCommand";
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput } from "./commands/DescribeTaskSetsCommand";
import {
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
} from "./commands/DiscoverPollEndpointCommand";
import { ExecuteCommandCommandInput, ExecuteCommandCommandOutput } from "./commands/ExecuteCommandCommand";
import { GetTaskProtectionCommandInput, GetTaskProtectionCommandOutput } from "./commands/GetTaskProtectionCommand";
import {
  ListAccountSettingsCommandInput,
  ListAccountSettingsCommandOutput,
} from "./commands/ListAccountSettingsCommand";
import { ListAttributesCommandInput, ListAttributesCommandOutput } from "./commands/ListAttributesCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import {
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
} from "./commands/ListContainerInstancesCommand";
import {
  ListServicesByNamespaceCommandInput,
  ListServicesByNamespaceCommandOutput,
} from "./commands/ListServicesByNamespaceCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTaskDefinitionFamiliesCommandInput,
  ListTaskDefinitionFamiliesCommandOutput,
} from "./commands/ListTaskDefinitionFamiliesCommand";
import {
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "./commands/ListTaskDefinitionsCommand";
import { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import { PutAccountSettingCommandInput, PutAccountSettingCommandOutput } from "./commands/PutAccountSettingCommand";
import {
  PutAccountSettingDefaultCommandInput,
  PutAccountSettingDefaultCommandOutput,
} from "./commands/PutAccountSettingDefaultCommand";
import { PutAttributesCommandInput, PutAttributesCommandOutput } from "./commands/PutAttributesCommand";
import {
  PutClusterCapacityProvidersCommandInput,
  PutClusterCapacityProvidersCommandOutput,
} from "./commands/PutClusterCapacityProvidersCommand";
import {
  RegisterContainerInstanceCommandInput,
  RegisterContainerInstanceCommandOutput,
} from "./commands/RegisterContainerInstanceCommand";
import {
  RegisterTaskDefinitionCommandInput,
  RegisterTaskDefinitionCommandOutput,
} from "./commands/RegisterTaskDefinitionCommand";
import { RunTaskCommandInput, RunTaskCommandOutput } from "./commands/RunTaskCommand";
import { StartTaskCommandInput, StartTaskCommandOutput } from "./commands/StartTaskCommand";
import { StopTaskCommandInput, StopTaskCommandOutput } from "./commands/StopTaskCommand";
import {
  SubmitAttachmentStateChangesCommandInput,
  SubmitAttachmentStateChangesCommandOutput,
} from "./commands/SubmitAttachmentStateChangesCommand";
import {
  SubmitContainerStateChangeCommandInput,
  SubmitContainerStateChangeCommandOutput,
} from "./commands/SubmitContainerStateChangeCommand";
import {
  SubmitTaskStateChangeCommandInput,
  SubmitTaskStateChangeCommandOutput,
} from "./commands/SubmitTaskStateChangeCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
} from "./commands/UpdateCapacityProviderCommand";
import { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import {
  UpdateClusterSettingsCommandInput,
  UpdateClusterSettingsCommandOutput,
} from "./commands/UpdateClusterSettingsCommand";
import {
  UpdateContainerAgentCommandInput,
  UpdateContainerAgentCommandOutput,
} from "./commands/UpdateContainerAgentCommand";
import {
  UpdateContainerInstancesStateCommandInput,
  UpdateContainerInstancesStateCommandOutput,
} from "./commands/UpdateContainerInstancesStateCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import {
  UpdateServicePrimaryTaskSetCommandInput,
  UpdateServicePrimaryTaskSetCommandOutput,
} from "./commands/UpdateServicePrimaryTaskSetCommand";
import {
  UpdateTaskProtectionCommandInput,
  UpdateTaskProtectionCommandOutput,
} from "./commands/UpdateTaskProtectionCommand";
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput } from "./commands/UpdateTaskSetCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateCapacityProviderCommandInput
  | CreateClusterCommandInput
  | CreateServiceCommandInput
  | CreateTaskSetCommandInput
  | DeleteAccountSettingCommandInput
  | DeleteAttributesCommandInput
  | DeleteCapacityProviderCommandInput
  | DeleteClusterCommandInput
  | DeleteServiceCommandInput
  | DeleteTaskSetCommandInput
  | DeregisterContainerInstanceCommandInput
  | DeregisterTaskDefinitionCommandInput
  | DescribeCapacityProvidersCommandInput
  | DescribeClustersCommandInput
  | DescribeContainerInstancesCommandInput
  | DescribeServicesCommandInput
  | DescribeTaskDefinitionCommandInput
  | DescribeTaskSetsCommandInput
  | DescribeTasksCommandInput
  | DiscoverPollEndpointCommandInput
  | ExecuteCommandCommandInput
  | GetTaskProtectionCommandInput
  | ListAccountSettingsCommandInput
  | ListAttributesCommandInput
  | ListClustersCommandInput
  | ListContainerInstancesCommandInput
  | ListServicesByNamespaceCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | ListTaskDefinitionFamiliesCommandInput
  | ListTaskDefinitionsCommandInput
  | ListTasksCommandInput
  | PutAccountSettingCommandInput
  | PutAccountSettingDefaultCommandInput
  | PutAttributesCommandInput
  | PutClusterCapacityProvidersCommandInput
  | RegisterContainerInstanceCommandInput
  | RegisterTaskDefinitionCommandInput
  | RunTaskCommandInput
  | StartTaskCommandInput
  | StopTaskCommandInput
  | SubmitAttachmentStateChangesCommandInput
  | SubmitContainerStateChangeCommandInput
  | SubmitTaskStateChangeCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCapacityProviderCommandInput
  | UpdateClusterCommandInput
  | UpdateClusterSettingsCommandInput
  | UpdateContainerAgentCommandInput
  | UpdateContainerInstancesStateCommandInput
  | UpdateServiceCommandInput
  | UpdateServicePrimaryTaskSetCommandInput
  | UpdateTaskProtectionCommandInput
  | UpdateTaskSetCommandInput;

export type ServiceOutputTypes =
  | CreateCapacityProviderCommandOutput
  | CreateClusterCommandOutput
  | CreateServiceCommandOutput
  | CreateTaskSetCommandOutput
  | DeleteAccountSettingCommandOutput
  | DeleteAttributesCommandOutput
  | DeleteCapacityProviderCommandOutput
  | DeleteClusterCommandOutput
  | DeleteServiceCommandOutput
  | DeleteTaskSetCommandOutput
  | DeregisterContainerInstanceCommandOutput
  | DeregisterTaskDefinitionCommandOutput
  | DescribeCapacityProvidersCommandOutput
  | DescribeClustersCommandOutput
  | DescribeContainerInstancesCommandOutput
  | DescribeServicesCommandOutput
  | DescribeTaskDefinitionCommandOutput
  | DescribeTaskSetsCommandOutput
  | DescribeTasksCommandOutput
  | DiscoverPollEndpointCommandOutput
  | ExecuteCommandCommandOutput
  | GetTaskProtectionCommandOutput
  | ListAccountSettingsCommandOutput
  | ListAttributesCommandOutput
  | ListClustersCommandOutput
  | ListContainerInstancesCommandOutput
  | ListServicesByNamespaceCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTaskDefinitionFamiliesCommandOutput
  | ListTaskDefinitionsCommandOutput
  | ListTasksCommandOutput
  | PutAccountSettingCommandOutput
  | PutAccountSettingDefaultCommandOutput
  | PutAttributesCommandOutput
  | PutClusterCapacityProvidersCommandOutput
  | RegisterContainerInstanceCommandOutput
  | RegisterTaskDefinitionCommandOutput
  | RunTaskCommandOutput
  | StartTaskCommandOutput
  | StopTaskCommandOutput
  | SubmitAttachmentStateChangesCommandOutput
  | SubmitContainerStateChangeCommandOutput
  | SubmitTaskStateChangeCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCapacityProviderCommandOutput
  | UpdateClusterCommandOutput
  | UpdateClusterSettingsCommandOutput
  | UpdateContainerAgentCommandOutput
  | UpdateContainerInstancesStateCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServicePrimaryTaskSetCommandOutput
  | UpdateTaskProtectionCommandOutput
  | UpdateTaskSetCommandOutput;

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

type ECSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ECSClient class constructor that set the region, credentials and other options.
 */
export interface ECSClientConfig extends ECSClientConfigType {}

type ECSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ECSClient class. This is resolved and normalized from the {@link ECSClientConfig | constructor configuration interface}.
 */
export interface ECSClientResolvedConfig extends ECSClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic Container Service</fullname>
 *          <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service. It makes
 * 			it easy to run, stop, and manage Docker containers. You can host your cluster on a
 * 			serverless infrastructure that's managed by Amazon ECS by launching your services or tasks on
 * 			Fargate. For more control, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2)
 * 			or External (on-premises) instances that you manage.</p>
 *          <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API
 * 			calls. This makes it easy to get the state of your cluster from a centralized service,
 * 			and gives you access to many familiar Amazon EC2 features.</p>
 *          <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 * 			your resource needs, isolation policies, and availability requirements. With Amazon ECS, you
 * 			don't need to operate your own cluster management and configuration management systems.
 * 			You also don't need to worry about scaling your management infrastructure.</p>
 */
export class ECSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ECSClientResolvedConfig
> {
  /**
   * The resolved configuration of ECSClient class. This is resolved and normalized from the {@link ECSClientConfig | constructor configuration interface}.
   */
  readonly config: ECSClientResolvedConfig;

  constructor(configuration: ECSClientConfig) {
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
