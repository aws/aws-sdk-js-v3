import { AssociateFleetCommandInput, AssociateFleetCommandOutput } from "./commands/AssociateFleetCommand";
import {
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
} from "./commands/BatchAssociateUserStackCommand";
import {
  BatchDisassociateUserStackCommandInput,
  BatchDisassociateUserStackCommandOutput,
} from "./commands/BatchDisassociateUserStackCommand";
import { CopyImageCommandInput, CopyImageCommandOutput } from "./commands/CopyImageCommand";
import {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "./commands/CreateDirectoryConfigCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateImageBuilderCommandInput, CreateImageBuilderCommandOutput } from "./commands/CreateImageBuilderCommand";
import {
  CreateImageBuilderStreamingURLCommandInput,
  CreateImageBuilderStreamingURLCommandOutput,
} from "./commands/CreateImageBuilderStreamingURLCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "./commands/CreateStackCommand";
import { CreateStreamingURLCommandInput, CreateStreamingURLCommandOutput } from "./commands/CreateStreamingURLCommand";
import { CreateUpdatedImageCommandInput, CreateUpdatedImageCommandOutput } from "./commands/CreateUpdatedImageCommand";
import {
  CreateUsageReportSubscriptionCommandInput,
  CreateUsageReportSubscriptionCommandOutput,
} from "./commands/CreateUsageReportSubscriptionCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "./commands/DeleteDirectoryConfigCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import { DeleteImageBuilderCommandInput, DeleteImageBuilderCommandOutput } from "./commands/DeleteImageBuilderCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePermissionsCommandInput,
  DeleteImagePermissionsCommandOutput,
} from "./commands/DeleteImagePermissionsCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "./commands/DeleteStackCommand";
import {
  DeleteUsageReportSubscriptionCommandInput,
  DeleteUsageReportSubscriptionCommandOutput,
} from "./commands/DeleteUsageReportSubscriptionCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "./commands/DescribeDirectoryConfigsCommand";
import { DescribeFleetsCommandInput, DescribeFleetsCommandOutput } from "./commands/DescribeFleetsCommand";
import {
  DescribeImageBuildersCommandInput,
  DescribeImageBuildersCommandOutput,
} from "./commands/DescribeImageBuildersCommand";
import {
  DescribeImagePermissionsCommandInput,
  DescribeImagePermissionsCommandOutput,
} from "./commands/DescribeImagePermissionsCommand";
import { DescribeImagesCommandInput, DescribeImagesCommandOutput } from "./commands/DescribeImagesCommand";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput } from "./commands/DescribeSessionsCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "./commands/DescribeStacksCommand";
import {
  DescribeUsageReportSubscriptionsCommandInput,
  DescribeUsageReportSubscriptionsCommandOutput,
} from "./commands/DescribeUsageReportSubscriptionsCommand";
import {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "./commands/DescribeUserStackAssociationsCommand";
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import { DisassociateFleetCommandInput, DisassociateFleetCommandOutput } from "./commands/DisassociateFleetCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import { ExpireSessionCommandInput, ExpireSessionCommandOutput } from "./commands/ExpireSessionCommand";
import {
  ListAssociatedFleetsCommandInput,
  ListAssociatedFleetsCommandOutput,
} from "./commands/ListAssociatedFleetsCommand";
import {
  ListAssociatedStacksCommandInput,
  ListAssociatedStacksCommandOutput,
} from "./commands/ListAssociatedStacksCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartFleetCommandInput, StartFleetCommandOutput } from "./commands/StartFleetCommand";
import { StartImageBuilderCommandInput, StartImageBuilderCommandOutput } from "./commands/StartImageBuilderCommand";
import { StopFleetCommandInput, StopFleetCommandOutput } from "./commands/StopFleetCommand";
import { StopImageBuilderCommandInput, StopImageBuilderCommandOutput } from "./commands/StopImageBuilderCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "./commands/UpdateDirectoryConfigCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
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
  | AssociateFleetCommandInput
  | BatchAssociateUserStackCommandInput
  | BatchDisassociateUserStackCommandInput
  | CopyImageCommandInput
  | CreateDirectoryConfigCommandInput
  | CreateFleetCommandInput
  | CreateImageBuilderCommandInput
  | CreateImageBuilderStreamingURLCommandInput
  | CreateStackCommandInput
  | CreateStreamingURLCommandInput
  | CreateUpdatedImageCommandInput
  | CreateUsageReportSubscriptionCommandInput
  | CreateUserCommandInput
  | DeleteDirectoryConfigCommandInput
  | DeleteFleetCommandInput
  | DeleteImageBuilderCommandInput
  | DeleteImageCommandInput
  | DeleteImagePermissionsCommandInput
  | DeleteStackCommandInput
  | DeleteUsageReportSubscriptionCommandInput
  | DeleteUserCommandInput
  | DescribeDirectoryConfigsCommandInput
  | DescribeFleetsCommandInput
  | DescribeImageBuildersCommandInput
  | DescribeImagePermissionsCommandInput
  | DescribeImagesCommandInput
  | DescribeSessionsCommandInput
  | DescribeStacksCommandInput
  | DescribeUsageReportSubscriptionsCommandInput
  | DescribeUserStackAssociationsCommandInput
  | DescribeUsersCommandInput
  | DisableUserCommandInput
  | DisassociateFleetCommandInput
  | EnableUserCommandInput
  | ExpireSessionCommandInput
  | ListAssociatedFleetsCommandInput
  | ListAssociatedStacksCommandInput
  | ListTagsForResourceCommandInput
  | StartFleetCommandInput
  | StartImageBuilderCommandInput
  | StopFleetCommandInput
  | StopImageBuilderCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDirectoryConfigCommandInput
  | UpdateFleetCommandInput
  | UpdateImagePermissionsCommandInput
  | UpdateStackCommandInput;

export type ServiceOutputTypes =
  | AssociateFleetCommandOutput
  | BatchAssociateUserStackCommandOutput
  | BatchDisassociateUserStackCommandOutput
  | CopyImageCommandOutput
  | CreateDirectoryConfigCommandOutput
  | CreateFleetCommandOutput
  | CreateImageBuilderCommandOutput
  | CreateImageBuilderStreamingURLCommandOutput
  | CreateStackCommandOutput
  | CreateStreamingURLCommandOutput
  | CreateUpdatedImageCommandOutput
  | CreateUsageReportSubscriptionCommandOutput
  | CreateUserCommandOutput
  | DeleteDirectoryConfigCommandOutput
  | DeleteFleetCommandOutput
  | DeleteImageBuilderCommandOutput
  | DeleteImageCommandOutput
  | DeleteImagePermissionsCommandOutput
  | DeleteStackCommandOutput
  | DeleteUsageReportSubscriptionCommandOutput
  | DeleteUserCommandOutput
  | DescribeDirectoryConfigsCommandOutput
  | DescribeFleetsCommandOutput
  | DescribeImageBuildersCommandOutput
  | DescribeImagePermissionsCommandOutput
  | DescribeImagesCommandOutput
  | DescribeSessionsCommandOutput
  | DescribeStacksCommandOutput
  | DescribeUsageReportSubscriptionsCommandOutput
  | DescribeUserStackAssociationsCommandOutput
  | DescribeUsersCommandOutput
  | DisableUserCommandOutput
  | DisassociateFleetCommandOutput
  | EnableUserCommandOutput
  | ExpireSessionCommandOutput
  | ListAssociatedFleetsCommandOutput
  | ListAssociatedStacksCommandOutput
  | ListTagsForResourceCommandOutput
  | StartFleetCommandOutput
  | StartImageBuilderCommandOutput
  | StopFleetCommandOutput
  | StopImageBuilderCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDirectoryConfigCommandOutput
  | UpdateFleetCommandOutput
  | UpdateImagePermissionsCommandOutput
  | UpdateStackCommandOutput;

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

type AppStreamClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of AppStreamClient class constructor that set the region, credentials and other options.
 */
export interface AppStreamClientConfig extends AppStreamClientConfigType {}

type AppStreamClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of AppStreamClient class. This is resolved and normalized from the {@link AppStreamClientConfig | constructor configuration interface}.
 */
export interface AppStreamClientResolvedConfig extends AppStreamClientResolvedConfigType {}

/**
 * <fullname>Amazon AppStream 2.0</fullname>
 *         <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *
 *         <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *
 *         <p>To learn more about AppStream 2.0, see the following resources:</p>
 *
 *             <ul>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/appstream2">Amazon AppStream 2.0 product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="http://aws.amazon.com/documentation/appstream2">Amazon AppStream 2.0 documentation</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class AppStreamClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppStreamClientResolvedConfig
> {
  /**
   * The resolved configuration of AppStreamClient class. This is resolved and normalized from the {@link AppStreamClientConfig | constructor configuration interface}.
   */
  readonly config: AppStreamClientResolvedConfig;

  constructor(configuration: AppStreamClientConfig) {
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
