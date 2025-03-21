// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultDirectoryServiceDataHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AddGroupMemberCommandInput, AddGroupMemberCommandOutput } from "./commands/AddGroupMemberCommand";
import { CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import { DescribeGroupCommandInput, DescribeGroupCommandOutput } from "./commands/DescribeGroupCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "./commands/DescribeUserCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import { ListGroupMembersCommandInput, ListGroupMembersCommandOutput } from "./commands/ListGroupMembersCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListGroupsForMemberCommandInput,
  ListGroupsForMemberCommandOutput,
} from "./commands/ListGroupsForMemberCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { RemoveGroupMemberCommandInput, RemoveGroupMemberCommandOutput } from "./commands/RemoveGroupMemberCommand";
import { SearchGroupsCommandInput, SearchGroupsCommandOutput } from "./commands/SearchGroupsCommand";
import { SearchUsersCommandInput, SearchUsersCommandOutput } from "./commands/SearchUsersCommand";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddGroupMemberCommandInput
  | CreateGroupCommandInput
  | CreateUserCommandInput
  | DeleteGroupCommandInput
  | DeleteUserCommandInput
  | DescribeGroupCommandInput
  | DescribeUserCommandInput
  | DisableUserCommandInput
  | ListGroupMembersCommandInput
  | ListGroupsCommandInput
  | ListGroupsForMemberCommandInput
  | ListUsersCommandInput
  | RemoveGroupMemberCommandInput
  | SearchGroupsCommandInput
  | SearchUsersCommandInput
  | UpdateGroupCommandInput
  | UpdateUserCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddGroupMemberCommandOutput
  | CreateGroupCommandOutput
  | CreateUserCommandOutput
  | DeleteGroupCommandOutput
  | DeleteUserCommandOutput
  | DescribeGroupCommandOutput
  | DescribeUserCommandOutput
  | DisableUserCommandOutput
  | ListGroupMembersCommandOutput
  | ListGroupsCommandOutput
  | ListGroupsForMemberCommandOutput
  | ListUsersCommandOutput
  | RemoveGroupMemberCommandOutput
  | SearchGroupsCommandOutput
  | SearchUsersCommandOutput
  | UpdateGroupCommandOutput
  | UpdateUserCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
export type DirectoryServiceDataClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DirectoryServiceDataClient class constructor that set the region, credentials and other options.
 */
export interface DirectoryServiceDataClientConfig extends DirectoryServiceDataClientConfigType {}

/**
 * @public
 */
export type DirectoryServiceDataClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DirectoryServiceDataClient class. This is resolved and normalized from the {@link DirectoryServiceDataClientConfig | constructor configuration interface}.
 */
export interface DirectoryServiceDataClientResolvedConfig extends DirectoryServiceDataClientResolvedConfigType {}

/**
 * <p> Amazon Web Services Directory Service Data is an extension of Directory Service. This API reference provides detailed information
 *       about Directory Service Data operations and object types. </p>
 *          <p> With Directory Service Data, you can create, read, update, and delete users, groups, and memberships from
 *       your Managed Microsoft AD without additional costs and without deploying dedicated management
 *       instances. You can also perform built-in object management tasks across directories without
 *       direct network connectivity, which simplifies provisioning and access management to achieve
 *       fully automated deployments. Directory Service Data supports user and group write operations, such as
 *         <code>CreateUser</code> and <code>CreateGroup</code>, within the organizational unit (OU) of
 *       your Managed Microsoft AD. Directory Service Data supports read operations, such as <code>ListUsers</code> and
 *         <code>ListGroups</code>, on all users, groups, and group memberships within your
 *       Managed Microsoft AD and across trusted realms. Directory Service Data supports adding and removing group members in
 *       your OU and the Amazon Web Services Delegated Groups OU, so you can grant and deny access to specific roles
 *       and permissions. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_manage_users_groups.html">Manage users and
 *         groups</a> in the <i>Directory Service Administration Guide</i>. </p>
 *          <note>
 *             <p> Directory management operations and configuration changes made against the Directory Service
 *         API will also reflect in Directory Service Data API with eventual consistency. You can expect a short delay
 *         between management changes, such as adding a new directory trust and calling the Directory Service Data API
 *         for the newly created trusted realm. </p>
 *          </note>
 *          <p> Directory Service Data connects to your Managed Microsoft AD domain controllers and performs operations on
 *       underlying directory objects. When you create your Managed Microsoft AD, you choose subnets for domain
 *       controllers that Directory Service creates on your behalf. If a domain controller is unavailable, Directory Service Data
 *       uses an available domain controller. As a result, you might notice eventual consistency while
 *       objects replicate from one domain controller to another domain controller. For more
 *       information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_getting_started_what_gets_created.html">What
 *         gets created</a> in the <i>Directory Service Administration Guide</i>.
 *       Directory limits vary by Managed Microsoft AD edition: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard edition</b> – Supports 8 transactions per
 *           second (TPS) for read operations and 4 TPS for write operations per directory. There's a
 *           concurrency limit of 10 concurrent requests. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Enterprise edition</b> – Supports 16 transactions per
 *           second (TPS) for read operations and 8 TPS for write operations per directory. There's a
 *           concurrency limit of 10 concurrent requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Amazon Web Services Account</b> - Supports a total of 100 TPS for
 *           Directory Service Data operations across all directories.</p>
 *             </li>
 *          </ul>
 *          <p> Directory Service Data only supports the Managed Microsoft AD directory type and is only available in the primary
 *       Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html">Managed Microsoft AD</a>
 *       and <a href="https://docs.aws.amazon.com/directoryservice/latest/admin-guide/multi-region-global-primary-additional.html">Primary vs additional Regions</a> in the <i>Directory Service Administration
 *         Guide</i>. </p>
 * @public
 */
export class DirectoryServiceDataClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectoryServiceDataClientResolvedConfig
> {
  /**
   * The resolved configuration of DirectoryServiceDataClient class. This is resolved and normalized from the {@link DirectoryServiceDataClientConfig | constructor configuration interface}.
   */
  readonly config: DirectoryServiceDataClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DirectoryServiceDataClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6, { client: () => this });
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDirectoryServiceDataHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DirectoryServiceDataClientResolvedConfig) =>
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
