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

import { CreateGatewayRouteCommandInput, CreateGatewayRouteCommandOutput } from "./commands/CreateGatewayRouteCommand";
import { CreateMeshCommandInput, CreateMeshCommandOutput } from "./commands/CreateMeshCommand";
import { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
} from "./commands/CreateVirtualGatewayCommand";
import { CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput } from "./commands/CreateVirtualNodeCommand";
import {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
} from "./commands/CreateVirtualRouterCommand";
import {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
} from "./commands/CreateVirtualServiceCommand";
import { DeleteGatewayRouteCommandInput, DeleteGatewayRouteCommandOutput } from "./commands/DeleteGatewayRouteCommand";
import { DeleteMeshCommandInput, DeleteMeshCommandOutput } from "./commands/DeleteMeshCommand";
import { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
} from "./commands/DeleteVirtualGatewayCommand";
import { DeleteVirtualNodeCommandInput, DeleteVirtualNodeCommandOutput } from "./commands/DeleteVirtualNodeCommand";
import {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
} from "./commands/DeleteVirtualRouterCommand";
import {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput,
} from "./commands/DeleteVirtualServiceCommand";
import {
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
} from "./commands/DescribeGatewayRouteCommand";
import { DescribeMeshCommandInput, DescribeMeshCommandOutput } from "./commands/DescribeMeshCommand";
import { DescribeRouteCommandInput, DescribeRouteCommandOutput } from "./commands/DescribeRouteCommand";
import {
  DescribeVirtualGatewayCommandInput,
  DescribeVirtualGatewayCommandOutput,
} from "./commands/DescribeVirtualGatewayCommand";
import {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
} from "./commands/DescribeVirtualNodeCommand";
import {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput,
} from "./commands/DescribeVirtualRouterCommand";
import {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput,
} from "./commands/DescribeVirtualServiceCommand";
import { ListGatewayRoutesCommandInput, ListGatewayRoutesCommandOutput } from "./commands/ListGatewayRoutesCommand";
import { ListMeshesCommandInput, ListMeshesCommandOutput } from "./commands/ListMeshesCommand";
import { ListRoutesCommandInput, ListRoutesCommandOutput } from "./commands/ListRoutesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "./commands/ListVirtualGatewaysCommand";
import { ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput } from "./commands/ListVirtualNodesCommand";
import { ListVirtualRoutersCommandInput, ListVirtualRoutersCommandOutput } from "./commands/ListVirtualRoutersCommand";
import {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "./commands/ListVirtualServicesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateGatewayRouteCommandInput, UpdateGatewayRouteCommandOutput } from "./commands/UpdateGatewayRouteCommand";
import { UpdateMeshCommandInput, UpdateMeshCommandOutput } from "./commands/UpdateMeshCommand";
import { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
} from "./commands/UpdateVirtualGatewayCommand";
import { UpdateVirtualNodeCommandInput, UpdateVirtualNodeCommandOutput } from "./commands/UpdateVirtualNodeCommand";
import {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
} from "./commands/UpdateVirtualRouterCommand";
import {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
} from "./commands/UpdateVirtualServiceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateGatewayRouteCommandInput
  | CreateMeshCommandInput
  | CreateRouteCommandInput
  | CreateVirtualGatewayCommandInput
  | CreateVirtualNodeCommandInput
  | CreateVirtualRouterCommandInput
  | CreateVirtualServiceCommandInput
  | DeleteGatewayRouteCommandInput
  | DeleteMeshCommandInput
  | DeleteRouteCommandInput
  | DeleteVirtualGatewayCommandInput
  | DeleteVirtualNodeCommandInput
  | DeleteVirtualRouterCommandInput
  | DeleteVirtualServiceCommandInput
  | DescribeGatewayRouteCommandInput
  | DescribeMeshCommandInput
  | DescribeRouteCommandInput
  | DescribeVirtualGatewayCommandInput
  | DescribeVirtualNodeCommandInput
  | DescribeVirtualRouterCommandInput
  | DescribeVirtualServiceCommandInput
  | ListGatewayRoutesCommandInput
  | ListMeshesCommandInput
  | ListRoutesCommandInput
  | ListTagsForResourceCommandInput
  | ListVirtualGatewaysCommandInput
  | ListVirtualNodesCommandInput
  | ListVirtualRoutersCommandInput
  | ListVirtualServicesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGatewayRouteCommandInput
  | UpdateMeshCommandInput
  | UpdateRouteCommandInput
  | UpdateVirtualGatewayCommandInput
  | UpdateVirtualNodeCommandInput
  | UpdateVirtualRouterCommandInput
  | UpdateVirtualServiceCommandInput;

export type ServiceOutputTypes =
  | CreateGatewayRouteCommandOutput
  | CreateMeshCommandOutput
  | CreateRouteCommandOutput
  | CreateVirtualGatewayCommandOutput
  | CreateVirtualNodeCommandOutput
  | CreateVirtualRouterCommandOutput
  | CreateVirtualServiceCommandOutput
  | DeleteGatewayRouteCommandOutput
  | DeleteMeshCommandOutput
  | DeleteRouteCommandOutput
  | DeleteVirtualGatewayCommandOutput
  | DeleteVirtualNodeCommandOutput
  | DeleteVirtualRouterCommandOutput
  | DeleteVirtualServiceCommandOutput
  | DescribeGatewayRouteCommandOutput
  | DescribeMeshCommandOutput
  | DescribeRouteCommandOutput
  | DescribeVirtualGatewayCommandOutput
  | DescribeVirtualNodeCommandOutput
  | DescribeVirtualRouterCommandOutput
  | DescribeVirtualServiceCommandOutput
  | ListGatewayRoutesCommandOutput
  | ListMeshesCommandOutput
  | ListRoutesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVirtualGatewaysCommandOutput
  | ListVirtualNodesCommandOutput
  | ListVirtualRoutersCommandOutput
  | ListVirtualServicesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGatewayRouteCommandOutput
  | UpdateMeshCommandOutput
  | UpdateRouteCommandOutput
  | UpdateVirtualGatewayCommandOutput
  | UpdateVirtualNodeCommandOutput
  | UpdateVirtualRouterCommandOutput
  | UpdateVirtualServiceCommandOutput;

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

type AppMeshClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of AppMeshClient class constructor that set the region, credentials and other options.
 */
export interface AppMeshClientConfig extends AppMeshClientConfigType {}

type AppMeshClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of AppMeshClient class. This is resolved and normalized from the {@link AppMeshClientConfig | constructor configuration interface}.
 */
export interface AppMeshClientResolvedConfig extends AppMeshClientResolvedConfigType {}

/**
 * <p>App Mesh is a service mesh based on the Envoy proxy that makes it easy to
 *          monitor and control microservices. App Mesh standardizes how your microservices
 *          communicate, giving you end-to-end visibility and helping to ensure high availability for
 *          your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for
 *          every microservice in an application. You can use App Mesh with Amazon Web Services Fargate, Amazon ECS, Amazon EKS, Kubernetes on Amazon Web Services, and
 *             Amazon EC2.</p>
 *          <note>
 *             <p>App Mesh supports microservice applications that use service discovery
 *             naming for their components. For more information about service discovery on Amazon ECS, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service
 *                Discovery</a> in the <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes
 *                <code>kube-dns</code> and <code>coredns</code> are supported. For more information,
 *             see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 */
export class AppMeshClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppMeshClientResolvedConfig
> {
  /**
   * The resolved configuration of AppMeshClient class. This is resolved and normalized from the {@link AppMeshClientConfig | constructor configuration interface}.
   */
  readonly config: AppMeshClientResolvedConfig;

  constructor(configuration: AppMeshClientConfig) {
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
