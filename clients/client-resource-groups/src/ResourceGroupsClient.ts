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

import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
} from "./commands/GetGroupConfigurationCommand";
import { GetGroupQueryCommandInput, GetGroupQueryCommandOutput } from "./commands/GetGroupQueryCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GroupResourcesCommandInput, GroupResourcesCommandOutput } from "./commands/GroupResourcesCommand";
import { ListGroupResourcesCommandInput, ListGroupResourcesCommandOutput } from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  PutGroupConfigurationCommandInput,
  PutGroupConfigurationCommandOutput,
} from "./commands/PutGroupConfigurationCommand";
import { SearchResourcesCommandInput, SearchResourcesCommandOutput } from "./commands/SearchResourcesCommand";
import { TagCommandInput, TagCommandOutput } from "./commands/TagCommand";
import { UngroupResourcesCommandInput, UngroupResourcesCommandOutput } from "./commands/UngroupResourcesCommand";
import { UntagCommandInput, UntagCommandOutput } from "./commands/UntagCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateGroupQueryCommandInput, UpdateGroupQueryCommandOutput } from "./commands/UpdateGroupQueryCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateGroupCommandInput
  | DeleteGroupCommandInput
  | GetAccountSettingsCommandInput
  | GetGroupCommandInput
  | GetGroupConfigurationCommandInput
  | GetGroupQueryCommandInput
  | GetTagsCommandInput
  | GroupResourcesCommandInput
  | ListGroupResourcesCommandInput
  | ListGroupsCommandInput
  | PutGroupConfigurationCommandInput
  | SearchResourcesCommandInput
  | TagCommandInput
  | UngroupResourcesCommandInput
  | UntagCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateGroupCommandInput
  | UpdateGroupQueryCommandInput;

export type ServiceOutputTypes =
  | CreateGroupCommandOutput
  | DeleteGroupCommandOutput
  | GetAccountSettingsCommandOutput
  | GetGroupCommandOutput
  | GetGroupConfigurationCommandOutput
  | GetGroupQueryCommandOutput
  | GetTagsCommandOutput
  | GroupResourcesCommandOutput
  | ListGroupResourcesCommandOutput
  | ListGroupsCommandOutput
  | PutGroupConfigurationCommandOutput
  | SearchResourcesCommandOutput
  | TagCommandOutput
  | UngroupResourcesCommandOutput
  | UntagCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateGroupCommandOutput
  | UpdateGroupQueryCommandOutput;

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

type ResourceGroupsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ResourceGroupsClient class constructor that set the region, credentials and other options.
 */
export interface ResourceGroupsClientConfig extends ResourceGroupsClientConfigType {}

type ResourceGroupsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ResourceGroupsClient class. This is resolved and normalized from the {@link ResourceGroupsClientConfig | constructor configuration interface}.
 */
export interface ResourceGroupsClientResolvedConfig extends ResourceGroupsClientResolvedConfigType {}

/**
 * <p>Resource Groups lets you organize Amazon Web Services resources such as Amazon Elastic Compute Cloud instances, Amazon Relational Database Service
 *             databases, and Amazon Simple Storage Service buckets into groups using criteria that you define as tags. A
 *             resource group is a collection of resources that match the resource types specified in a
 *             query, and share one or more tags or portions of tags. You can create a group of
 *             resources based on their roles in your cloud infrastructure, lifecycle stages, regions,
 *             application layers, or virtually any criteria. Resource Groups enable you to automate management
 *             tasks, such as those in Amazon Web Services Systems Manager Automation documents, on tag-related resources in
 *             Amazon Web Services Systems Manager. Groups of tagged resources also let you quickly view a custom console in
 *             Amazon Web Services Systems Manager that shows Config compliance and other monitoring data about member
 *             resources.</p>
 *          <p>To create a resource group, build a resource query, and specify tags that identify the
 *             criteria that members of the group have in common. Tags are key-value pairs.</p>
 *          <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">Resource Groups User Guide</a>.</p>
 *          <p>Resource Groups uses a REST-compliant API that you can use to perform the following types of
 *             operations.</p>
 *          <ul>
 *             <li>
 *                <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and
 *                     resource query entities</p>
 *             </li>
 *             <li>
 *                <p>Applying, editing, and removing tags from resource groups</p>
 *             </li>
 *             <li>
 *                <p>Resolving resource group member ARNs so they can be returned as search
 *                     results</p>
 *             </li>
 *             <li>
 *                <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                <p>Searching Amazon Web Services resources based on a resource query</p>
 *             </li>
 *          </ul>
 */
export class ResourceGroupsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ResourceGroupsClientResolvedConfig
> {
  /**
   * The resolved configuration of ResourceGroupsClient class. This is resolved and normalized from the {@link ResourceGroupsClientConfig | constructor configuration interface}.
   */
  readonly config: ResourceGroupsClientResolvedConfig;

  constructor(configuration: ResourceGroupsClientConfig) {
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
