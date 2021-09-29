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
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput } from "./commands/DescribeTaskSetsCommand";
import { DescribeTasksCommandInput, DescribeTasksCommandOutput } from "./commands/DescribeTasksCommand";
import {
  DiscoverPollEndpointCommandInput,
  DiscoverPollEndpointCommandOutput,
} from "./commands/DiscoverPollEndpointCommand";
import { ExecuteCommandCommandInput, ExecuteCommandCommandOutput } from "./commands/ExecuteCommandCommand";
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
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput } from "./commands/UpdateTaskSetCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

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
  | ListAccountSettingsCommandInput
  | ListAttributesCommandInput
  | ListClustersCommandInput
  | ListContainerInstancesCommandInput
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
  | ListAccountSettingsCommandOutput
  | ListAttributesCommandOutput
  | ListClustersCommandOutput
  | ListContainerInstancesCommandOutput
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
  | UpdateTaskSetCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type ECSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of ECSClient class constructor that set the region, credentials and other options.
 */
export interface ECSClientConfig extends ECSClientConfigType {}

type ECSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of ECSClient class. This is resolved and normalized from the {@link ECSClientConfig | constructor configuration interface}.
 */
export interface ECSClientResolvedConfig extends ECSClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic Container Service</fullname>
 * 		       <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 * 			it easy to run, stop, and manage Docker containers on a cluster. You can host your
 * 			cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 * 			services or tasks on Fargate. For more control, you can host your tasks on a cluster
 * 			of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage.</p>
 * 		       <p>Amazon ECS makes it easy to launch and stop container-based applications with simple API
 * 			calls, allows you to get the state of your cluster from a centralized service, and gives
 * 			you access to many familiar Amazon EC2 features.</p>
 * 		       <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 * 			your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 * 			the need for you to operate your own cluster management and configuration management
 * 			systems or worry about scaling your management infrastructure.</p>
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
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
