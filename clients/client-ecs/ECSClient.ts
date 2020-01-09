import {
  CreateCapacityProviderRequest,
  CreateCapacityProviderResponse,
  CreateClusterRequest,
  CreateClusterResponse,
  CreateServiceRequest,
  CreateServiceResponse,
  CreateTaskSetRequest,
  CreateTaskSetResponse,
  DeleteAccountSettingRequest,
  DeleteAccountSettingResponse,
  DeleteAttributesRequest,
  DeleteAttributesResponse,
  DeleteClusterRequest,
  DeleteClusterResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeleteTaskSetRequest,
  DeleteTaskSetResponse,
  DeregisterContainerInstanceRequest,
  DeregisterContainerInstanceResponse,
  DeregisterTaskDefinitionRequest,
  DeregisterTaskDefinitionResponse,
  DescribeCapacityProvidersRequest,
  DescribeCapacityProvidersResponse,
  DescribeClustersRequest,
  DescribeClustersResponse,
  DescribeContainerInstancesRequest,
  DescribeContainerInstancesResponse,
  DescribeServicesRequest,
  DescribeServicesResponse,
  DescribeTaskDefinitionRequest,
  DescribeTaskDefinitionResponse,
  DescribeTaskSetsRequest,
  DescribeTaskSetsResponse,
  DescribeTasksRequest,
  DescribeTasksResponse,
  DiscoverPollEndpointRequest,
  DiscoverPollEndpointResponse,
  ListAccountSettingsRequest,
  ListAccountSettingsResponse,
  ListAttributesRequest,
  ListAttributesResponse,
  ListClustersRequest,
  ListClustersResponse,
  ListContainerInstancesRequest,
  ListContainerInstancesResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTaskDefinitionFamiliesRequest,
  ListTaskDefinitionFamiliesResponse,
  ListTaskDefinitionsRequest,
  ListTaskDefinitionsResponse,
  ListTasksRequest,
  ListTasksResponse,
  PutAccountSettingDefaultRequest,
  PutAccountSettingDefaultResponse,
  PutAccountSettingRequest,
  PutAccountSettingResponse,
  PutAttributesRequest,
  PutAttributesResponse,
  PutClusterCapacityProvidersRequest,
  PutClusterCapacityProvidersResponse,
  RegisterContainerInstanceRequest,
  RegisterContainerInstanceResponse,
  RegisterTaskDefinitionRequest,
  RegisterTaskDefinitionResponse,
  RunTaskRequest,
  RunTaskResponse,
  StartTaskRequest,
  StartTaskResponse,
  StopTaskRequest,
  StopTaskResponse,
  SubmitAttachmentStateChangesRequest,
  SubmitAttachmentStateChangesResponse,
  SubmitContainerStateChangeRequest,
  SubmitContainerStateChangeResponse,
  SubmitTaskStateChangeRequest,
  SubmitTaskStateChangeResponse,
  TagResourceRequest,
  TagResourceResponse,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateClusterSettingsRequest,
  UpdateClusterSettingsResponse,
  UpdateContainerAgentRequest,
  UpdateContainerAgentResponse,
  UpdateContainerInstancesStateRequest,
  UpdateContainerInstancesStateResponse,
  UpdateServicePrimaryTaskSetRequest,
  UpdateServicePrimaryTaskSetResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
  UpdateTaskSetRequest,
  UpdateTaskSetResponse,
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@aws-sdk/middleware-retry";
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
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateCapacityProviderRequest
  | CreateClusterRequest
  | CreateServiceRequest
  | CreateTaskSetRequest
  | DeleteAccountSettingRequest
  | DeleteAttributesRequest
  | DeleteClusterRequest
  | DeleteServiceRequest
  | DeleteTaskSetRequest
  | DeregisterContainerInstanceRequest
  | DeregisterTaskDefinitionRequest
  | DescribeCapacityProvidersRequest
  | DescribeClustersRequest
  | DescribeContainerInstancesRequest
  | DescribeServicesRequest
  | DescribeTaskDefinitionRequest
  | DescribeTaskSetsRequest
  | DescribeTasksRequest
  | DiscoverPollEndpointRequest
  | ListAccountSettingsRequest
  | ListAttributesRequest
  | ListClustersRequest
  | ListContainerInstancesRequest
  | ListServicesRequest
  | ListTagsForResourceRequest
  | ListTaskDefinitionFamiliesRequest
  | ListTaskDefinitionsRequest
  | ListTasksRequest
  | PutAccountSettingDefaultRequest
  | PutAccountSettingRequest
  | PutAttributesRequest
  | PutClusterCapacityProvidersRequest
  | RegisterContainerInstanceRequest
  | RegisterTaskDefinitionRequest
  | RunTaskRequest
  | StartTaskRequest
  | StopTaskRequest
  | SubmitAttachmentStateChangesRequest
  | SubmitContainerStateChangeRequest
  | SubmitTaskStateChangeRequest
  | TagResourceRequest
  | UntagResourceRequest
  | UpdateClusterSettingsRequest
  | UpdateContainerAgentRequest
  | UpdateContainerInstancesStateRequest
  | UpdateServicePrimaryTaskSetRequest
  | UpdateServiceRequest
  | UpdateTaskSetRequest;

export type ServiceOutputTypes =
  | CreateCapacityProviderResponse
  | CreateClusterResponse
  | CreateServiceResponse
  | CreateTaskSetResponse
  | DeleteAccountSettingResponse
  | DeleteAttributesResponse
  | DeleteClusterResponse
  | DeleteServiceResponse
  | DeleteTaskSetResponse
  | DeregisterContainerInstanceResponse
  | DeregisterTaskDefinitionResponse
  | DescribeCapacityProvidersResponse
  | DescribeClustersResponse
  | DescribeContainerInstancesResponse
  | DescribeServicesResponse
  | DescribeTaskDefinitionResponse
  | DescribeTaskSetsResponse
  | DescribeTasksResponse
  | DiscoverPollEndpointResponse
  | ListAccountSettingsResponse
  | ListAttributesResponse
  | ListClustersResponse
  | ListContainerInstancesResponse
  | ListServicesResponse
  | ListTagsForResourceResponse
  | ListTaskDefinitionFamiliesResponse
  | ListTaskDefinitionsResponse
  | ListTasksResponse
  | PutAccountSettingDefaultResponse
  | PutAccountSettingResponse
  | PutAttributesResponse
  | PutClusterCapacityProvidersResponse
  | RegisterContainerInstanceResponse
  | RegisterTaskDefinitionResponse
  | RunTaskResponse
  | StartTaskResponse
  | StopTaskResponse
  | SubmitAttachmentStateChangesResponse
  | SubmitContainerStateChangeResponse
  | SubmitTaskStateChangeResponse
  | TagResourceResponse
  | UntagResourceResponse
  | UpdateClusterSettingsResponse
  | UpdateContainerAgentResponse
  | UpdateContainerInstancesStateResponse
  | UpdateServicePrimaryTaskSetResponse
  | UpdateServiceResponse
  | UpdateTaskSetResponse;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type ECSClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>>
  & ClientDefaults
  & RegionInputConfig
  & EndpointsInputConfig
  & AwsAuthInputConfig
  & RetryInputConfig
  & UserAgentInputConfig
  & HostHeaderInputConfig

export type ECSClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions>
  & Required<ClientDefaults>
  & RegionResolvedConfig
  & EndpointsResolvedConfig
  & AwsAuthResolvedConfig
  & RetryResolvedConfig
  & UserAgentResolvedConfig
  & HostHeaderResolvedConfig

/**
 *
 *         <fullname>Amazon Elastic Container Service</fullname>
 *         <p>Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes
 *             it easy to run, stop, and manage Docker containers on a cluster. You can host your
 *             cluster on a serverless infrastructure that is managed by Amazon ECS by launching your
 *             services or tasks using the Fargate launch type. For more control, you can host your
 *             tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2
 *             launch type. For more information about launch types, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html">Amazon ECS Launch
 *             Types</a>.</p>
 *         <p>Amazon ECS lets you launch and stop container-based applications with simple API calls,
 *             allows you to get the state of your cluster from a centralized service, and gives you
 *             access to many familiar Amazon EC2 features.</p>
 *         <p>You can use Amazon ECS to schedule the placement of containers across your cluster based on
 *             your resource needs, isolation policies, and availability requirements. Amazon ECS eliminates
 *             the need for you to operate your own cluster management and configuration management
 *             systems or worry about scaling your management infrastructure.</p>
 *
 */
export class ECSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ECSClientResolvedConfig
> {
  readonly config: ECSClientResolvedConfig;

  constructor(configuration: ECSClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
  }
}
