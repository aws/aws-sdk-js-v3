import { CreateAccessPointCommandInput, CreateAccessPointCommandOutput } from "./commands/CreateAccessPointCommand";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "./commands/CreateFileSystemCommand";
import { CreateMountTargetCommandInput, CreateMountTargetCommandOutput } from "./commands/CreateMountTargetCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import { DeleteAccessPointCommandInput, DeleteAccessPointCommandOutput } from "./commands/DeleteAccessPointCommand";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "./commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "./commands/DeleteFileSystemPolicyCommand";
import { DeleteMountTargetCommandInput, DeleteMountTargetCommandOutput } from "./commands/DeleteMountTargetCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "./commands/DescribeAccessPointsCommand";
import {
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
} from "./commands/DescribeAccountPreferencesCommand";
import {
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "./commands/DescribeBackupPolicyCommand";
import {
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "./commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "./commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "./commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "./commands/DescribeMountTargetsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "./commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
} from "./commands/PutAccountPreferencesCommand";
import { PutBackupPolicyCommandInput, PutBackupPolicyCommandOutput } from "./commands/PutBackupPolicyCommand";
import {
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "./commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "./commands/PutLifecycleConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "./commands/UpdateFileSystemCommand";
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
  | DescribeAccountPreferencesCommandInput
  | DescribeBackupPolicyCommandInput
  | DescribeFileSystemPolicyCommandInput
  | DescribeFileSystemsCommandInput
  | DescribeLifecycleConfigurationCommandInput
  | DescribeMountTargetSecurityGroupsCommandInput
  | DescribeMountTargetsCommandInput
  | DescribeTagsCommandInput
  | ListTagsForResourceCommandInput
  | ModifyMountTargetSecurityGroupsCommandInput
  | PutAccountPreferencesCommandInput
  | PutBackupPolicyCommandInput
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
  | DescribeAccountPreferencesCommandOutput
  | DescribeBackupPolicyCommandOutput
  | DescribeFileSystemPolicyCommandOutput
  | DescribeFileSystemsCommandOutput
  | DescribeLifecycleConfigurationCommandOutput
  | DescribeMountTargetSecurityGroupsCommandOutput
  | DescribeMountTargetsCommandOutput
  | DescribeTagsCommandOutput
  | ListTagsForResourceCommandOutput
  | ModifyMountTargetSecurityGroupsCommandOutput
  | PutAccountPreferencesCommandOutput
  | PutBackupPolicyCommandOutput
  | PutFileSystemPolicyCommandOutput
  | PutLifecycleConfigurationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFileSystemCommandOutput;

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

type EFSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of EFSClient class constructor that set the region, credentials and other options.
 */
export interface EFSClientConfig extends EFSClientConfigType {}

type EFSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of EFSClient class. This is resolved and normalized from the {@link EFSClientConfig | constructor configuration interface}.
 */
export interface EFSClientResolvedConfig extends EFSClientResolvedConfigType {}

/**
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for use
 *       with Amazon EC2 instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic,
 *       growing and shrinking automatically as you add and remove files, so your applications have the
 *       storage they need, when they need it. For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>
 */
export class EFSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  EFSClientResolvedConfig
> {
  /**
   * The resolved configuration of EFSClient class. This is resolved and normalized from the {@link EFSClientConfig | constructor configuration interface}.
   */
  readonly config: EFSClientResolvedConfig;

  constructor(configuration: EFSClientConfig) {
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
