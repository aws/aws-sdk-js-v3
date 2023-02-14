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

import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
} from "./commands/CreateReplicationJobCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput,
} from "./commands/DeleteAppLaunchConfigurationCommand";
import {
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput,
} from "./commands/DeleteAppReplicationConfigurationCommand";
import {
  DeleteAppValidationConfigurationCommandInput,
  DeleteAppValidationConfigurationCommandOutput,
} from "./commands/DeleteAppValidationConfigurationCommand";
import {
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput,
} from "./commands/DeleteReplicationJobCommand";
import {
  DeleteServerCatalogCommandInput,
  DeleteServerCatalogCommandOutput,
} from "./commands/DeleteServerCatalogCommand";
import {
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
} from "./commands/DisassociateConnectorCommand";
import { GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput } from "./commands/GenerateChangeSetCommand";
import { GenerateTemplateCommandInput, GenerateTemplateCommandOutput } from "./commands/GenerateTemplateCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "./commands/GetAppCommand";
import {
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
} from "./commands/GetAppLaunchConfigurationCommand";
import {
  GetAppReplicationConfigurationCommandInput,
  GetAppReplicationConfigurationCommandOutput,
} from "./commands/GetAppReplicationConfigurationCommand";
import {
  GetAppValidationConfigurationCommandInput,
  GetAppValidationConfigurationCommandOutput,
} from "./commands/GetAppValidationConfigurationCommand";
import {
  GetAppValidationOutputCommandInput,
  GetAppValidationOutputCommandOutput,
} from "./commands/GetAppValidationOutputCommand";
import { GetConnectorsCommandInput, GetConnectorsCommandOutput } from "./commands/GetConnectorsCommand";
import { GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput } from "./commands/GetReplicationJobsCommand";
import { GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput } from "./commands/GetReplicationRunsCommand";
import { GetServersCommandInput, GetServersCommandOutput } from "./commands/GetServersCommand";
import { ImportAppCatalogCommandInput, ImportAppCatalogCommandOutput } from "./commands/ImportAppCatalogCommand";
import {
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
} from "./commands/ImportServerCatalogCommand";
import { LaunchAppCommandInput, LaunchAppCommandOutput } from "./commands/LaunchAppCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
} from "./commands/NotifyAppValidationOutputCommand";
import {
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
} from "./commands/PutAppLaunchConfigurationCommand";
import {
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
} from "./commands/PutAppReplicationConfigurationCommand";
import {
  PutAppValidationConfigurationCommandInput,
  PutAppValidationConfigurationCommandOutput,
} from "./commands/PutAppValidationConfigurationCommand";
import {
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput,
} from "./commands/StartAppReplicationCommand";
import {
  StartOnDemandAppReplicationCommandInput,
  StartOnDemandAppReplicationCommandOutput,
} from "./commands/StartOnDemandAppReplicationCommand";
import {
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
} from "./commands/StartOnDemandReplicationRunCommand";
import { StopAppReplicationCommandInput, StopAppReplicationCommandOutput } from "./commands/StopAppReplicationCommand";
import { TerminateAppCommandInput, TerminateAppCommandOutput } from "./commands/TerminateAppCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "./commands/UpdateAppCommand";
import {
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput,
} from "./commands/UpdateReplicationJobCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateAppCommandInput
  | CreateReplicationJobCommandInput
  | DeleteAppCommandInput
  | DeleteAppLaunchConfigurationCommandInput
  | DeleteAppReplicationConfigurationCommandInput
  | DeleteAppValidationConfigurationCommandInput
  | DeleteReplicationJobCommandInput
  | DeleteServerCatalogCommandInput
  | DisassociateConnectorCommandInput
  | GenerateChangeSetCommandInput
  | GenerateTemplateCommandInput
  | GetAppCommandInput
  | GetAppLaunchConfigurationCommandInput
  | GetAppReplicationConfigurationCommandInput
  | GetAppValidationConfigurationCommandInput
  | GetAppValidationOutputCommandInput
  | GetConnectorsCommandInput
  | GetReplicationJobsCommandInput
  | GetReplicationRunsCommandInput
  | GetServersCommandInput
  | ImportAppCatalogCommandInput
  | ImportServerCatalogCommandInput
  | LaunchAppCommandInput
  | ListAppsCommandInput
  | NotifyAppValidationOutputCommandInput
  | PutAppLaunchConfigurationCommandInput
  | PutAppReplicationConfigurationCommandInput
  | PutAppValidationConfigurationCommandInput
  | StartAppReplicationCommandInput
  | StartOnDemandAppReplicationCommandInput
  | StartOnDemandReplicationRunCommandInput
  | StopAppReplicationCommandInput
  | TerminateAppCommandInput
  | UpdateAppCommandInput
  | UpdateReplicationJobCommandInput;

export type ServiceOutputTypes =
  | CreateAppCommandOutput
  | CreateReplicationJobCommandOutput
  | DeleteAppCommandOutput
  | DeleteAppLaunchConfigurationCommandOutput
  | DeleteAppReplicationConfigurationCommandOutput
  | DeleteAppValidationConfigurationCommandOutput
  | DeleteReplicationJobCommandOutput
  | DeleteServerCatalogCommandOutput
  | DisassociateConnectorCommandOutput
  | GenerateChangeSetCommandOutput
  | GenerateTemplateCommandOutput
  | GetAppCommandOutput
  | GetAppLaunchConfigurationCommandOutput
  | GetAppReplicationConfigurationCommandOutput
  | GetAppValidationConfigurationCommandOutput
  | GetAppValidationOutputCommandOutput
  | GetConnectorsCommandOutput
  | GetReplicationJobsCommandOutput
  | GetReplicationRunsCommandOutput
  | GetServersCommandOutput
  | ImportAppCatalogCommandOutput
  | ImportServerCatalogCommandOutput
  | LaunchAppCommandOutput
  | ListAppsCommandOutput
  | NotifyAppValidationOutputCommandOutput
  | PutAppLaunchConfigurationCommandOutput
  | PutAppReplicationConfigurationCommandOutput
  | PutAppValidationConfigurationCommandOutput
  | StartAppReplicationCommandOutput
  | StartOnDemandAppReplicationCommandOutput
  | StartOnDemandReplicationRunCommandOutput
  | StopAppReplicationCommandOutput
  | TerminateAppCommandOutput
  | UpdateAppCommandOutput
  | UpdateReplicationJobCommandOutput;

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

type SMSClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of SMSClient class constructor that set the region, credentials and other options.
 */
export interface SMSClientConfig extends SMSClientConfigType {}

type SMSClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of SMSClient class. This is resolved and normalized from the {@link SMSClientConfig | constructor configuration interface}.
 */
export interface SMSClientResolvedConfig extends SMSClientResolvedConfigType {}

/**
 * <important>
 *             <p>
 *                <b>Product update</b>
 *             </p>
 *             <p>We recommend <a href="http://aws.amazon.com/application-migration-service">Amazon Web Services Application Migration Service</a> (Amazon Web Services
 *                 MGN) as the primary migration service for lift-and-shift migrations. If Amazon Web Services MGN is
 *                 unavailable in a specific Amazon Web Services Region, you can use the Server Migration Service APIs through March
 *                 2023.</p>
 *          </important>
 *
 *         <p>Server Migration Service (Server Migration Service) makes it easier and faster for you to migrate your
 *             on-premises workloads to Amazon Web Services. To learn more about Server Migration Service, see the following
 *             resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="http://aws.amazon.com/server-migration-service/">Server Migration Service
 *                     product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/server-migration-service/latest/userguide/">Server Migration Service User Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class SMSClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SMSClientResolvedConfig
> {
  /**
   * The resolved configuration of SMSClient class. This is resolved and normalized from the {@link SMSClientConfig | constructor configuration interface}.
   */
  readonly config: SMSClientResolvedConfig;

  constructor(configuration: SMSClientConfig) {
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
