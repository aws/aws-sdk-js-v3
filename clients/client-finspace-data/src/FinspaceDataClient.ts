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
  AssociateUserToPermissionGroupCommandInput,
  AssociateUserToPermissionGroupCommandOutput,
} from "./commands/AssociateUserToPermissionGroupCommand";
import { CreateChangesetCommandInput, CreateChangesetCommandOutput } from "./commands/CreateChangesetCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateDataViewCommandInput, CreateDataViewCommandOutput } from "./commands/CreateDataViewCommand";
import {
  CreatePermissionGroupCommandInput,
  CreatePermissionGroupCommandOutput,
} from "./commands/CreatePermissionGroupCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import {
  DeletePermissionGroupCommandInput,
  DeletePermissionGroupCommandOutput,
} from "./commands/DeletePermissionGroupCommand";
import { DisableUserCommandInput, DisableUserCommandOutput } from "./commands/DisableUserCommand";
import {
  DisassociateUserFromPermissionGroupCommandInput,
  DisassociateUserFromPermissionGroupCommandOutput,
} from "./commands/DisassociateUserFromPermissionGroupCommand";
import { EnableUserCommandInput, EnableUserCommandOutput } from "./commands/EnableUserCommand";
import { GetChangesetCommandInput, GetChangesetCommandOutput } from "./commands/GetChangesetCommand";
import { GetDatasetCommandInput, GetDatasetCommandOutput } from "./commands/GetDatasetCommand";
import { GetDataViewCommandInput, GetDataViewCommandOutput } from "./commands/GetDataViewCommand";
import {
  GetExternalDataViewAccessDetailsCommandInput,
  GetExternalDataViewAccessDetailsCommandOutput,
} from "./commands/GetExternalDataViewAccessDetailsCommand";
import { GetPermissionGroupCommandInput, GetPermissionGroupCommandOutput } from "./commands/GetPermissionGroupCommand";
import {
  GetProgrammaticAccessCredentialsCommandInput,
  GetProgrammaticAccessCredentialsCommandOutput,
} from "./commands/GetProgrammaticAccessCredentialsCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetWorkingLocationCommandInput, GetWorkingLocationCommandOutput } from "./commands/GetWorkingLocationCommand";
import { ListChangesetsCommandInput, ListChangesetsCommandOutput } from "./commands/ListChangesetsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListDataViewsCommandInput, ListDataViewsCommandOutput } from "./commands/ListDataViewsCommand";
import {
  ListPermissionGroupsByUserCommandInput,
  ListPermissionGroupsByUserCommandOutput,
} from "./commands/ListPermissionGroupsByUserCommand";
import {
  ListPermissionGroupsCommandInput,
  ListPermissionGroupsCommandOutput,
} from "./commands/ListPermissionGroupsCommand";
import {
  ListUsersByPermissionGroupCommandInput,
  ListUsersByPermissionGroupCommandOutput,
} from "./commands/ListUsersByPermissionGroupCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import { ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput } from "./commands/ResetUserPasswordCommand";
import { UpdateChangesetCommandInput, UpdateChangesetCommandOutput } from "./commands/UpdateChangesetCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import {
  UpdatePermissionGroupCommandInput,
  UpdatePermissionGroupCommandOutput,
} from "./commands/UpdatePermissionGroupCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateUserToPermissionGroupCommandInput
  | CreateChangesetCommandInput
  | CreateDataViewCommandInput
  | CreateDatasetCommandInput
  | CreatePermissionGroupCommandInput
  | CreateUserCommandInput
  | DeleteDatasetCommandInput
  | DeletePermissionGroupCommandInput
  | DisableUserCommandInput
  | DisassociateUserFromPermissionGroupCommandInput
  | EnableUserCommandInput
  | GetChangesetCommandInput
  | GetDataViewCommandInput
  | GetDatasetCommandInput
  | GetExternalDataViewAccessDetailsCommandInput
  | GetPermissionGroupCommandInput
  | GetProgrammaticAccessCredentialsCommandInput
  | GetUserCommandInput
  | GetWorkingLocationCommandInput
  | ListChangesetsCommandInput
  | ListDataViewsCommandInput
  | ListDatasetsCommandInput
  | ListPermissionGroupsByUserCommandInput
  | ListPermissionGroupsCommandInput
  | ListUsersByPermissionGroupCommandInput
  | ListUsersCommandInput
  | ResetUserPasswordCommandInput
  | UpdateChangesetCommandInput
  | UpdateDatasetCommandInput
  | UpdatePermissionGroupCommandInput
  | UpdateUserCommandInput;

export type ServiceOutputTypes =
  | AssociateUserToPermissionGroupCommandOutput
  | CreateChangesetCommandOutput
  | CreateDataViewCommandOutput
  | CreateDatasetCommandOutput
  | CreatePermissionGroupCommandOutput
  | CreateUserCommandOutput
  | DeleteDatasetCommandOutput
  | DeletePermissionGroupCommandOutput
  | DisableUserCommandOutput
  | DisassociateUserFromPermissionGroupCommandOutput
  | EnableUserCommandOutput
  | GetChangesetCommandOutput
  | GetDataViewCommandOutput
  | GetDatasetCommandOutput
  | GetExternalDataViewAccessDetailsCommandOutput
  | GetPermissionGroupCommandOutput
  | GetProgrammaticAccessCredentialsCommandOutput
  | GetUserCommandOutput
  | GetWorkingLocationCommandOutput
  | ListChangesetsCommandOutput
  | ListDataViewsCommandOutput
  | ListDatasetsCommandOutput
  | ListPermissionGroupsByUserCommandOutput
  | ListPermissionGroupsCommandOutput
  | ListUsersByPermissionGroupCommandOutput
  | ListUsersCommandOutput
  | ResetUserPasswordCommandOutput
  | UpdateChangesetCommandOutput
  | UpdateDatasetCommandOutput
  | UpdatePermissionGroupCommandOutput
  | UpdateUserCommandOutput;

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

type FinspaceDataClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of FinspaceDataClient class constructor that set the region, credentials and other options.
 */
export interface FinspaceDataClientConfig extends FinspaceDataClientConfigType {}

type FinspaceDataClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of FinspaceDataClient class. This is resolved and normalized from the {@link FinspaceDataClientConfig | constructor configuration interface}.
 */
export interface FinspaceDataClientResolvedConfig extends FinspaceDataClientResolvedConfigType {}

/**
 * <p> The FinSpace APIs let you take actions inside the FinSpace.</p>
 */
export class FinspaceDataClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  FinspaceDataClientResolvedConfig
> {
  /**
   * The resolved configuration of FinspaceDataClient class. This is resolved and normalized from the {@link FinspaceDataClientConfig | constructor configuration interface}.
   */
  readonly config: FinspaceDataClientResolvedConfig;

  constructor(configuration: FinspaceDataClientConfig) {
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
