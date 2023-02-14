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
  AssociateApplicationFleetCommandInput,
  AssociateApplicationFleetCommandOutput,
} from "./commands/AssociateApplicationFleetCommand";
import {
  AssociateApplicationToEntitlementCommandInput,
  AssociateApplicationToEntitlementCommandOutput,
} from "./commands/AssociateApplicationToEntitlementCommand";
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
import { CreateAppBlockCommandInput, CreateAppBlockCommandOutput } from "./commands/CreateAppBlockCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import {
  CreateDirectoryConfigCommandInput,
  CreateDirectoryConfigCommandOutput,
} from "./commands/CreateDirectoryConfigCommand";
import { CreateEntitlementCommandInput, CreateEntitlementCommandOutput } from "./commands/CreateEntitlementCommand";
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
import { DeleteAppBlockCommandInput, DeleteAppBlockCommandOutput } from "./commands/DeleteAppBlockCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteDirectoryConfigCommandInput,
  DeleteDirectoryConfigCommandOutput,
} from "./commands/DeleteDirectoryConfigCommand";
import { DeleteEntitlementCommandInput, DeleteEntitlementCommandOutput } from "./commands/DeleteEntitlementCommand";
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
import { DescribeAppBlocksCommandInput, DescribeAppBlocksCommandOutput } from "./commands/DescribeAppBlocksCommand";
import {
  DescribeApplicationFleetAssociationsCommandInput,
  DescribeApplicationFleetAssociationsCommandOutput,
} from "./commands/DescribeApplicationFleetAssociationsCommand";
import {
  DescribeApplicationsCommandInput,
  DescribeApplicationsCommandOutput,
} from "./commands/DescribeApplicationsCommand";
import {
  DescribeDirectoryConfigsCommandInput,
  DescribeDirectoryConfigsCommandOutput,
} from "./commands/DescribeDirectoryConfigsCommand";
import {
  DescribeEntitlementsCommandInput,
  DescribeEntitlementsCommandOutput,
} from "./commands/DescribeEntitlementsCommand";
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
import { DescribeUsersCommandInput, DescribeUsersCommandOutput } from "./commands/DescribeUsersCommand";
import {
  DescribeUserStackAssociationsCommandInput,
  DescribeUserStackAssociationsCommandOutput,
} from "./commands/DescribeUserStackAssociationsCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  DisassociateApplicationFleetCommandInput,
  DisassociateApplicationFleetCommandOutput,
} from "./commands/DisassociateApplicationFleetCommand";
import {
  DisassociateApplicationFromEntitlementCommandInput,
  DisassociateApplicationFromEntitlementCommandOutput,
} from "./commands/DisassociateApplicationFromEntitlementCommand";
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
  ListEntitledApplicationsCommandInput,
  ListEntitledApplicationsCommandOutput,
} from "./commands/ListEntitledApplicationsCommand";
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
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateDirectoryConfigCommandInput,
  UpdateDirectoryConfigCommandOutput,
} from "./commands/UpdateDirectoryConfigCommand";
import { UpdateEntitlementCommandInput, UpdateEntitlementCommandOutput } from "./commands/UpdateEntitlementCommand";
import { UpdateFleetCommandInput, UpdateFleetCommandOutput } from "./commands/UpdateFleetCommand";
import {
  UpdateImagePermissionsCommandInput,
  UpdateImagePermissionsCommandOutput,
} from "./commands/UpdateImagePermissionsCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "./commands/UpdateStackCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateApplicationFleetCommandInput
  | AssociateApplicationToEntitlementCommandInput
  | AssociateFleetCommandInput
  | BatchAssociateUserStackCommandInput
  | BatchDisassociateUserStackCommandInput
  | CopyImageCommandInput
  | CreateAppBlockCommandInput
  | CreateApplicationCommandInput
  | CreateDirectoryConfigCommandInput
  | CreateEntitlementCommandInput
  | CreateFleetCommandInput
  | CreateImageBuilderCommandInput
  | CreateImageBuilderStreamingURLCommandInput
  | CreateStackCommandInput
  | CreateStreamingURLCommandInput
  | CreateUpdatedImageCommandInput
  | CreateUsageReportSubscriptionCommandInput
  | CreateUserCommandInput
  | DeleteAppBlockCommandInput
  | DeleteApplicationCommandInput
  | DeleteDirectoryConfigCommandInput
  | DeleteEntitlementCommandInput
  | DeleteFleetCommandInput
  | DeleteImageBuilderCommandInput
  | DeleteImageCommandInput
  | DeleteImagePermissionsCommandInput
  | DeleteStackCommandInput
  | DeleteUsageReportSubscriptionCommandInput
  | DeleteUserCommandInput
  | DescribeAppBlocksCommandInput
  | DescribeApplicationFleetAssociationsCommandInput
  | DescribeApplicationsCommandInput
  | DescribeDirectoryConfigsCommandInput
  | DescribeEntitlementsCommandInput
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
  | DisassociateApplicationFleetCommandInput
  | DisassociateApplicationFromEntitlementCommandInput
  | DisassociateFleetCommandInput
  | EnableUserCommandInput
  | ExpireSessionCommandInput
  | ListAssociatedFleetsCommandInput
  | ListAssociatedStacksCommandInput
  | ListEntitledApplicationsCommandInput
  | ListTagsForResourceCommandInput
  | StartFleetCommandInput
  | StartImageBuilderCommandInput
  | StopFleetCommandInput
  | StopImageBuilderCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateDirectoryConfigCommandInput
  | UpdateEntitlementCommandInput
  | UpdateFleetCommandInput
  | UpdateImagePermissionsCommandInput
  | UpdateStackCommandInput;

export type ServiceOutputTypes =
  | AssociateApplicationFleetCommandOutput
  | AssociateApplicationToEntitlementCommandOutput
  | AssociateFleetCommandOutput
  | BatchAssociateUserStackCommandOutput
  | BatchDisassociateUserStackCommandOutput
  | CopyImageCommandOutput
  | CreateAppBlockCommandOutput
  | CreateApplicationCommandOutput
  | CreateDirectoryConfigCommandOutput
  | CreateEntitlementCommandOutput
  | CreateFleetCommandOutput
  | CreateImageBuilderCommandOutput
  | CreateImageBuilderStreamingURLCommandOutput
  | CreateStackCommandOutput
  | CreateStreamingURLCommandOutput
  | CreateUpdatedImageCommandOutput
  | CreateUsageReportSubscriptionCommandOutput
  | CreateUserCommandOutput
  | DeleteAppBlockCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteDirectoryConfigCommandOutput
  | DeleteEntitlementCommandOutput
  | DeleteFleetCommandOutput
  | DeleteImageBuilderCommandOutput
  | DeleteImageCommandOutput
  | DeleteImagePermissionsCommandOutput
  | DeleteStackCommandOutput
  | DeleteUsageReportSubscriptionCommandOutput
  | DeleteUserCommandOutput
  | DescribeAppBlocksCommandOutput
  | DescribeApplicationFleetAssociationsCommandOutput
  | DescribeApplicationsCommandOutput
  | DescribeDirectoryConfigsCommandOutput
  | DescribeEntitlementsCommandOutput
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
  | DisassociateApplicationFleetCommandOutput
  | DisassociateApplicationFromEntitlementCommandOutput
  | DisassociateFleetCommandOutput
  | EnableUserCommandOutput
  | ExpireSessionCommandOutput
  | ListAssociatedFleetsCommandOutput
  | ListAssociatedStacksCommandOutput
  | ListEntitledApplicationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartFleetCommandOutput
  | StartImageBuilderCommandOutput
  | StopFleetCommandOutput
  | StopImageBuilderCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateDirectoryConfigCommandOutput
  | UpdateEntitlementCommandOutput
  | UpdateFleetCommandOutput
  | UpdateImagePermissionsCommandOutput
  | UpdateStackCommandOutput;

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

type AppStreamClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of AppStreamClient class constructor that set the region, credentials and other options.
 */
export interface AppStreamClientConfig extends AppStreamClientConfigType {}

type AppStreamClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of AppStreamClient class. This is resolved and normalized from the {@link AppStreamClientConfig | constructor configuration interface}.
 */
export interface AppStreamClientResolvedConfig extends AppStreamClientResolvedConfigType {}

/**
 * <fullname>Amazon AppStream 2.0</fullname>
 *          <p>This is the <i>Amazon AppStream 2.0 API Reference</i>. This documentation provides descriptions and syntax for each of the actions and data types in AppStream 2.0. AppStream 2.0 is a fully managed, secure application streaming service that lets you stream desktop applications to users without rewriting applications. AppStream 2.0 manages the AWS resources that are required to host and run your applications, scales automatically, and provides access to your users on demand. </p>
 *          <note>
 *             <p>You can call the AppStream 2.0 API operations by using an interface VPC endpoint (interface endpoint). For more information, see <a href="https://docs.aws.amazon.com/appstream2/latest/developerguide/access-api-cli-through-interface-vpc-endpoint.html">Access AppStream 2.0 API Operations and CLI Commands Through an Interface VPC Endpoint</a> in the <i>Amazon AppStream 2.0 Administration Guide</i>.</p>
 *          </note>
 *          <p>To learn more about AppStream 2.0, see the following resources:</p>
 *          <ul>
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
