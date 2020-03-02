import {
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput
} from "./commands/CreateAccessPointCommand";
import {
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput
} from "./commands/CreateFileSystemCommand";
import {
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput
} from "./commands/CreateMountTargetCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "./commands/CreateTagsCommand";
import {
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput
} from "./commands/DeleteAccessPointCommand";
import {
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput
} from "./commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput
} from "./commands/DeleteFileSystemPolicyCommand";
import {
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput
} from "./commands/DeleteMountTargetCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "./commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput
} from "./commands/DescribeAccessPointsCommand";
import {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput
} from "./commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput
} from "./commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput
} from "./commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput
} from "./commands/DescribeMountTargetsCommand";
import {
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "./commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput
} from "./commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput
} from "./commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput
} from "./commands/PutLifecycleConfigurationCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput
} from "./commands/UpdateFileSystemCommand";
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
  | CreateAccessPointCommandInput
  | CreateFileSystemCommandInput
  | CreateMountTargetCommandInput
  | CreateTagsCommandInput
  | DeleteAccessPointCommandInput
  | DeleteFileSystemCommandInput
  | DeleteFileSystemPolicyCommandInput
  | DeleteMountTargetCommandInput
  | DeleteTagsCommandInput
  | DescribeAccessPointsCommandInput
  | DescribeFileSystemPolicyCommandInput
  | DescribeFileSystemsCommandInput
  | DescribeLifecycleConfigurationCommandInput
  | DescribeMountTargetSecurityGroupsCommandInput
  | DescribeMountTargetsCommandInput
  | DescribeTagsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyMountTargetSecurityGroupsCommandInput
  | PutFileSystemPolicyCommandInput
  | PutLifecycleConfigurationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFileSystemCommandInput;

export type ServiceOutputTypes =
  | CreateAccessPointCommandOutput
  | CreateFileSystemCommandOutput
  | CreateMountTargetCommandOutput
  | CreateTagsCommandOutput
  | DeleteAccessPointCommandOutput
  | DeleteFileSystemCommandOutput
  | DeleteFileSystemPolicyCommandOutput
  | DeleteMountTargetCommandOutput
  | DeleteTagsCommandOutput
  | DescribeAccessPointsCommandOutput
  | DescribeFileSystemPolicyCommandOutput
  | DescribeFileSystemsCommandOutput
  | DescribeLifecycleConfigurationCommandOutput
  | DescribeMountTargetSecurityGroupsCommandOutput
  | DescribeMountTargetsCommandOutput
  | DescribeTagsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyMountTargetSecurityGroupsCommandOutput
  | PutFileSystemPolicyCommandOutput
  | PutLifecycleConfigurationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFileSystemCommandOutput;

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

export type EFSClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type EFSClientResolvedConfig = __SmithyResolvedConfiguration<
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
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use
 *       with Amazon EC2 instances in the AWS Cloud. With Amazon EFS, storage capacity is elastic,
 *       growing and shrinking automatically as you add and remove files, so your applications have the
 *       storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">User Guide</a>.</p>
 */
export class EFSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EFSClientResolvedConfig
> {
  readonly config: EFSClientResolvedConfig;

  constructor(configuration: EFSClientConfig) {
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
