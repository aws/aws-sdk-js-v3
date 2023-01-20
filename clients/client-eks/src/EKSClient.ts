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
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
} from "./commands/AssociateEncryptionConfigCommand";
import {
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
} from "./commands/AssociateIdentityProviderConfigCommand";
import { CreateAddonCommandInput, CreateAddonCommandOutput } from "./commands/CreateAddonCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
} from "./commands/CreateFargateProfileCommand";
import { CreateNodegroupCommandInput, CreateNodegroupCommandOutput } from "./commands/CreateNodegroupCommand";
import { DeleteAddonCommandInput, DeleteAddonCommandOutput } from "./commands/DeleteAddonCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
} from "./commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput } from "./commands/DeleteNodegroupCommand";
import { DeregisterClusterCommandInput, DeregisterClusterCommandOutput } from "./commands/DeregisterClusterCommand";
import { DescribeAddonCommandInput, DescribeAddonCommandOutput } from "./commands/DescribeAddonCommand";
import {
  DescribeAddonConfigurationCommandInput,
  DescribeAddonConfigurationCommandOutput,
} from "./commands/DescribeAddonConfigurationCommand";
import {
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "./commands/DescribeAddonVersionsCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
} from "./commands/DescribeFargateProfileCommand";
import {
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
} from "./commands/DescribeIdentityProviderConfigCommand";
import { DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput } from "./commands/DescribeNodegroupCommand";
import { DescribeUpdateCommandInput, DescribeUpdateCommandOutput } from "./commands/DescribeUpdateCommand";
import {
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "./commands/DisassociateIdentityProviderConfigCommand";
import { ListAddonsCommandInput, ListAddonsCommandOutput } from "./commands/ListAddonsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "./commands/ListFargateProfilesCommand";
import {
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "./commands/ListIdentityProviderConfigsCommand";
import { ListNodegroupsCommandInput, ListNodegroupsCommandOutput } from "./commands/ListNodegroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUpdatesCommandInput, ListUpdatesCommandOutput } from "./commands/ListUpdatesCommand";
import { RegisterClusterCommandInput, RegisterClusterCommandOutput } from "./commands/RegisterClusterCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAddonCommandInput, UpdateAddonCommandOutput } from "./commands/UpdateAddonCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
} from "./commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
} from "./commands/UpdateClusterVersionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "./commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "./commands/UpdateNodegroupVersionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateEncryptionConfigCommandInput
  | AssociateIdentityProviderConfigCommandInput
  | CreateAddonCommandInput
  | CreateClusterCommandInput
  | CreateFargateProfileCommandInput
  | CreateNodegroupCommandInput
  | DeleteAddonCommandInput
  | DeleteClusterCommandInput
  | DeleteFargateProfileCommandInput
  | DeleteNodegroupCommandInput
  | DeregisterClusterCommandInput
  | DescribeAddonCommandInput
  | DescribeAddonConfigurationCommandInput
  | DescribeAddonVersionsCommandInput
  | DescribeClusterCommandInput
  | DescribeFargateProfileCommandInput
  | DescribeIdentityProviderConfigCommandInput
  | DescribeNodegroupCommandInput
  | DescribeUpdateCommandInput
  | DisassociateIdentityProviderConfigCommandInput
  | ListAddonsCommandInput
  | ListClustersCommandInput
  | ListFargateProfilesCommandInput
  | ListIdentityProviderConfigsCommandInput
  | ListNodegroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListUpdatesCommandInput
  | RegisterClusterCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAddonCommandInput
  | UpdateClusterConfigCommandInput
  | UpdateClusterVersionCommandInput
  | UpdateNodegroupConfigCommandInput
  | UpdateNodegroupVersionCommandInput;

export type ServiceOutputTypes =
  | AssociateEncryptionConfigCommandOutput
  | AssociateIdentityProviderConfigCommandOutput
  | CreateAddonCommandOutput
  | CreateClusterCommandOutput
  | CreateFargateProfileCommandOutput
  | CreateNodegroupCommandOutput
  | DeleteAddonCommandOutput
  | DeleteClusterCommandOutput
  | DeleteFargateProfileCommandOutput
  | DeleteNodegroupCommandOutput
  | DeregisterClusterCommandOutput
  | DescribeAddonCommandOutput
  | DescribeAddonConfigurationCommandOutput
  | DescribeAddonVersionsCommandOutput
  | DescribeClusterCommandOutput
  | DescribeFargateProfileCommandOutput
  | DescribeIdentityProviderConfigCommandOutput
  | DescribeNodegroupCommandOutput
  | DescribeUpdateCommandOutput
  | DisassociateIdentityProviderConfigCommandOutput
  | ListAddonsCommandOutput
  | ListClustersCommandOutput
  | ListFargateProfilesCommandOutput
  | ListIdentityProviderConfigsCommandOutput
  | ListNodegroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUpdatesCommandOutput
  | RegisterClusterCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAddonCommandOutput
  | UpdateClusterConfigCommandOutput
  | UpdateClusterVersionCommandOutput
  | UpdateNodegroupConfigCommandOutput
  | UpdateNodegroupVersionCommandOutput;

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

type EKSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of EKSClient class constructor that set the region, credentials and other options.
 */
export interface EKSClientConfig extends EKSClientConfigType {}

type EKSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of EKSClient class. This is resolved and normalized from the {@link EKSClientConfig | constructor configuration interface}.
 */
export interface EKSClientResolvedConfig extends EKSClientResolvedConfigType {}

/**
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy
 *             for you to run Kubernetes on Amazon Web Services without needing to stand up or maintain
 *             your own Kubernetes control plane. Kubernetes is an open-source system for automating
 *             the deployment, scaling, and management of containerized applications. </p>
 *          <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so
 *             you can use all the existing plugins and tooling from the Kubernetes community.
 *             Applications running on Amazon EKS are fully compatible with applications
 *             running on any standard Kubernetes environment, whether running in on-premises data
 *             centers or public clouds. This means that you can easily migrate any standard Kubernetes
 *             application to Amazon EKS without any code modification required.</p>
 */
export class EKSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EKSClientResolvedConfig
> {
  /**
   * The resolved configuration of EKSClient class. This is resolved and normalized from the {@link EKSClientConfig | constructor configuration interface}.
   */
  readonly config: EKSClientResolvedConfig;

  constructor(configuration: EKSClientConfig) {
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
