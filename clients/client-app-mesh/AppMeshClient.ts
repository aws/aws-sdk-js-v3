import {
  CreateMeshInput,
  CreateMeshOutput,
  CreateRouteInput,
  CreateRouteOutput,
  CreateVirtualNodeInput,
  CreateVirtualNodeOutput,
  CreateVirtualRouterInput,
  CreateVirtualRouterOutput,
  CreateVirtualServiceInput,
  CreateVirtualServiceOutput,
  DeleteMeshInput,
  DeleteMeshOutput,
  DeleteRouteInput,
  DeleteRouteOutput,
  DeleteVirtualNodeInput,
  DeleteVirtualNodeOutput,
  DeleteVirtualRouterInput,
  DeleteVirtualRouterOutput,
  DeleteVirtualServiceInput,
  DeleteVirtualServiceOutput,
  DescribeMeshInput,
  DescribeMeshOutput,
  DescribeRouteInput,
  DescribeRouteOutput,
  DescribeVirtualNodeInput,
  DescribeVirtualNodeOutput,
  DescribeVirtualRouterInput,
  DescribeVirtualRouterOutput,
  DescribeVirtualServiceInput,
  DescribeVirtualServiceOutput,
  ListMeshesInput,
  ListMeshesOutput,
  ListRoutesInput,
  ListRoutesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListVirtualNodesInput,
  ListVirtualNodesOutput,
  ListVirtualRoutersInput,
  ListVirtualRoutersOutput,
  ListVirtualServicesInput,
  ListVirtualServicesOutput,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateMeshInput,
  UpdateMeshOutput,
  UpdateRouteInput,
  UpdateRouteOutput,
  UpdateVirtualNodeInput,
  UpdateVirtualNodeOutput,
  UpdateVirtualRouterInput,
  UpdateVirtualRouterOutput,
  UpdateVirtualServiceInput,
  UpdateVirtualServiceOutput
} from "./models/index";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
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
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateMeshInput
  | CreateRouteInput
  | CreateVirtualNodeInput
  | CreateVirtualRouterInput
  | CreateVirtualServiceInput
  | DeleteMeshInput
  | DeleteRouteInput
  | DeleteVirtualNodeInput
  | DeleteVirtualRouterInput
  | DeleteVirtualServiceInput
  | DescribeMeshInput
  | DescribeRouteInput
  | DescribeVirtualNodeInput
  | DescribeVirtualRouterInput
  | DescribeVirtualServiceInput
  | ListMeshesInput
  | ListRoutesInput
  | ListTagsForResourceInput
  | ListVirtualNodesInput
  | ListVirtualRoutersInput
  | ListVirtualServicesInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateMeshInput
  | UpdateRouteInput
  | UpdateVirtualNodeInput
  | UpdateVirtualRouterInput
  | UpdateVirtualServiceInput;

export type ServiceOutputTypes =
  | CreateMeshOutput
  | CreateRouteOutput
  | CreateVirtualNodeOutput
  | CreateVirtualRouterOutput
  | CreateVirtualServiceOutput
  | DeleteMeshOutput
  | DeleteRouteOutput
  | DeleteVirtualNodeOutput
  | DeleteVirtualRouterOutput
  | DeleteVirtualServiceOutput
  | DescribeMeshOutput
  | DescribeRouteOutput
  | DescribeVirtualNodeOutput
  | DescribeVirtualRouterOutput
  | DescribeVirtualServiceOutput
  | ListMeshesOutput
  | ListRoutesOutput
  | ListTagsForResourceOutput
  | ListVirtualNodesOutput
  | ListVirtualRoutersOutput
  | ListVirtualServicesOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateMeshOutput
  | UpdateRouteOutput
  | UpdateVirtualNodeOutput
  | UpdateVirtualRouterOutput
  | UpdateVirtualServiceOutput;

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
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

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

export type AppMeshClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type AppMeshClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>AWS App Mesh is a service mesh based on the Envoy proxy that makes it easy to monitor and
 *          control microservices. App Mesh standardizes how your microservices communicate, giving you
 *          end-to-end visibility and helping to ensure high availability for your applications.</p>
 *          <p>App Mesh gives you consistent visibility and network traffic controls for every
 *          microservice in an application. You can use App Mesh with AWS Fargate, Amazon ECS, Amazon EKS,
 *          Kubernetes on AWS, and Amazon EC2.</p>
 *          <note>
 *             <p>App Mesh supports microservice applications that use service discovery naming for their
 *             components. For more information about service discovery on Amazon ECS, see <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html">Service Discovery</a> in the
 *                <i>Amazon Elastic Container Service Developer Guide</i>. Kubernetes <code>kube-dns</code> and
 *                <code>coredns</code> are supported. For more information, see <a href="https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/">DNS
 *                for Services and Pods</a> in the Kubernetes documentation.</p>
 *          </note>
 */
export class AppMeshClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppMeshClientResolvedConfig
> {
  readonly config: AppMeshClientResolvedConfig;

  constructor(configuration: AppMeshClientConfig) {
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

  destroy(): void {}
}
