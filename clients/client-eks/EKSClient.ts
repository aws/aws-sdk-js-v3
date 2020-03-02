import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "./commands/CreateClusterCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput
} from "./commands/CreateFargateProfileCommand";
import {
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput
} from "./commands/CreateNodegroupCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "./commands/DeleteClusterCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput
} from "./commands/DeleteFargateProfileCommand";
import {
  DeleteNodegroupCommandInput,
  DeleteNodegroupCommandOutput
} from "./commands/DeleteNodegroupCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "./commands/DescribeClusterCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput
} from "./commands/DescribeFargateProfileCommand";
import {
  DescribeNodegroupCommandInput,
  DescribeNodegroupCommandOutput
} from "./commands/DescribeNodegroupCommand";
import {
  DescribeUpdateCommandInput,
  DescribeUpdateCommandOutput
} from "./commands/DescribeUpdateCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "./commands/ListClustersCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput
} from "./commands/ListFargateProfilesCommand";
import {
  ListNodegroupsCommandInput,
  ListNodegroupsCommandOutput
} from "./commands/ListNodegroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ListUpdatesCommandInput,
  ListUpdatesCommandOutput
} from "./commands/ListUpdatesCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput
} from "./commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput
} from "./commands/UpdateClusterVersionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput
} from "./commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput
} from "./commands/UpdateNodegroupVersionCommand";
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
  | CreateClusterCommandInput
  | CreateFargateProfileCommandInput
  | CreateNodegroupCommandInput
  | DeleteClusterCommandInput
  | DeleteFargateProfileCommandInput
  | DeleteNodegroupCommandInput
  | DescribeClusterCommandInput
  | DescribeFargateProfileCommandInput
  | DescribeNodegroupCommandInput
  | DescribeUpdateCommandInput
  | ListClustersCommandInput
  | ListFargateProfilesCommandInput
  | ListNodegroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListUpdatesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateClusterConfigCommandInput
  | UpdateClusterVersionCommandInput
  | UpdateNodegroupConfigCommandInput
  | UpdateNodegroupVersionCommandInput;

export type ServiceOutputTypes =
  | CreateClusterCommandOutput
  | CreateFargateProfileCommandOutput
  | CreateNodegroupCommandOutput
  | DeleteClusterCommandOutput
  | DeleteFargateProfileCommandOutput
  | DeleteNodegroupCommandOutput
  | DescribeClusterCommandOutput
  | DescribeFargateProfileCommandOutput
  | DescribeNodegroupCommandOutput
  | DescribeUpdateCommandOutput
  | ListClustersCommandOutput
  | ListFargateProfilesCommandOutput
  | ListNodegroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListUpdatesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateClusterConfigCommandOutput
  | UpdateClusterVersionCommandOutput
  | UpdateNodegroupConfigCommandOutput
  | UpdateNodegroupVersionCommandOutput;

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

export type EKSClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type EKSClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <p>Amazon Elastic Kubernetes Service (Amazon EKS) is a managed service that makes it easy for you to run Kubernetes on
 *             AWS without needing to stand up or maintain your own Kubernetes control plane.
 *             Kubernetes is an open-source system for automating the deployment, scaling, and
 *             management of containerized applications. </p>
 *         <p>Amazon EKS runs up-to-date versions of the open-source Kubernetes software, so you can use
 *             all the existing plugins and tooling from the Kubernetes community. Applications running
 *             on Amazon EKS are fully compatible with applications running on any standard Kubernetes
 *             environment, whether running in on-premises data centers or public clouds. This means
 *             that you can easily migrate any standard Kubernetes application to Amazon EKS without any
 *             code modification required.</p>
 */
export class EKSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EKSClientResolvedConfig
> {
  readonly config: EKSClientResolvedConfig;

  constructor(configuration: EKSClientConfig) {
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
