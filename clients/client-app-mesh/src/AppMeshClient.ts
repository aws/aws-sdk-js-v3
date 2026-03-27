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
  defaultAppMeshHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateGatewayRouteCommandInput,
  CreateGatewayRouteCommandOutput,
} from "./commands/CreateGatewayRouteCommand";
import type { CreateMeshCommandInput, CreateMeshCommandOutput } from "./commands/CreateMeshCommand";
import type { CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import type {
  CreateVirtualGatewayCommandInput,
  CreateVirtualGatewayCommandOutput,
} from "./commands/CreateVirtualGatewayCommand";
import type {
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput,
} from "./commands/CreateVirtualNodeCommand";
import type {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput,
} from "./commands/CreateVirtualRouterCommand";
import type {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput,
} from "./commands/CreateVirtualServiceCommand";
import type {
  DeleteGatewayRouteCommandInput,
  DeleteGatewayRouteCommandOutput,
} from "./commands/DeleteGatewayRouteCommand";
import type { DeleteMeshCommandInput, DeleteMeshCommandOutput } from "./commands/DeleteMeshCommand";
import type { DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import type {
  DeleteVirtualGatewayCommandInput,
  DeleteVirtualGatewayCommandOutput,
} from "./commands/DeleteVirtualGatewayCommand";
import type {
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput,
} from "./commands/DeleteVirtualNodeCommand";
import type {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput,
} from "./commands/DeleteVirtualRouterCommand";
import type {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput,
} from "./commands/DeleteVirtualServiceCommand";
import type {
  DescribeGatewayRouteCommandInput,
  DescribeGatewayRouteCommandOutput,
} from "./commands/DescribeGatewayRouteCommand";
import type { DescribeMeshCommandInput, DescribeMeshCommandOutput } from "./commands/DescribeMeshCommand";
import type { DescribeRouteCommandInput, DescribeRouteCommandOutput } from "./commands/DescribeRouteCommand";
import type {
  DescribeVirtualGatewayCommandInput,
  DescribeVirtualGatewayCommandOutput,
} from "./commands/DescribeVirtualGatewayCommand";
import type {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
} from "./commands/DescribeVirtualNodeCommand";
import type {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput,
} from "./commands/DescribeVirtualRouterCommand";
import type {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput,
} from "./commands/DescribeVirtualServiceCommand";
import type {
  ListGatewayRoutesCommandInput,
  ListGatewayRoutesCommandOutput,
} from "./commands/ListGatewayRoutesCommand";
import type { ListMeshesCommandInput, ListMeshesCommandOutput } from "./commands/ListMeshesCommand";
import type { ListRoutesCommandInput, ListRoutesCommandOutput } from "./commands/ListRoutesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListVirtualGatewaysCommandInput,
  ListVirtualGatewaysCommandOutput,
} from "./commands/ListVirtualGatewaysCommand";
import type { ListVirtualNodesCommandInput, ListVirtualNodesCommandOutput } from "./commands/ListVirtualNodesCommand";
import type {
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput,
} from "./commands/ListVirtualRoutersCommand";
import type {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput,
} from "./commands/ListVirtualServicesCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateGatewayRouteCommandInput,
  UpdateGatewayRouteCommandOutput,
} from "./commands/UpdateGatewayRouteCommand";
import type { UpdateMeshCommandInput, UpdateMeshCommandOutput } from "./commands/UpdateMeshCommand";
import type { UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import type {
  UpdateVirtualGatewayCommandInput,
  UpdateVirtualGatewayCommandOutput,
} from "./commands/UpdateVirtualGatewayCommand";
import type {
  UpdateVirtualNodeCommandInput,
  UpdateVirtualNodeCommandOutput,
} from "./commands/UpdateVirtualNodeCommand";
import type {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput,
} from "./commands/UpdateVirtualRouterCommand";
import type {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput,
} from "./commands/UpdateVirtualServiceCommand";
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

/**
 * @public
 */
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
export type AppMeshClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of AppMeshClient class constructor that set the region, credentials and other options.
 */
export interface AppMeshClientConfig extends AppMeshClientConfigType {}

/**
 * @public
 */
export type AppMeshClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of AppMeshClient class. This is resolved and normalized from the {@link AppMeshClientConfig | constructor configuration interface}.
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
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<AppMeshClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultAppMeshHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: AppMeshClientResolvedConfig) =>
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
