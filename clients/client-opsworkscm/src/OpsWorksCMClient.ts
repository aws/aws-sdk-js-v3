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

import { AssociateNodeCommandInput, AssociateNodeCommandOutput } from "./commands/AssociateNodeCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "./commands/CreateBackupCommand";
import { CreateServerCommandInput, CreateServerCommandOutput } from "./commands/CreateServerCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "./commands/DeleteBackupCommand";
import { DeleteServerCommandInput, DeleteServerCommandOutput } from "./commands/DeleteServerCommand";
import {
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
} from "./commands/DescribeAccountAttributesCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "./commands/DescribeBackupsCommand";
import { DescribeEventsCommandInput, DescribeEventsCommandOutput } from "./commands/DescribeEventsCommand";
import {
  DescribeNodeAssociationStatusCommandInput,
  DescribeNodeAssociationStatusCommandOutput,
} from "./commands/DescribeNodeAssociationStatusCommand";
import { DescribeServersCommandInput, DescribeServersCommandOutput } from "./commands/DescribeServersCommand";
import { DisassociateNodeCommandInput, DisassociateNodeCommandOutput } from "./commands/DisassociateNodeCommand";
import {
  ExportServerEngineAttributeCommandInput,
  ExportServerEngineAttributeCommandOutput,
} from "./commands/ExportServerEngineAttributeCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RestoreServerCommandInput, RestoreServerCommandOutput } from "./commands/RestoreServerCommand";
import { StartMaintenanceCommandInput, StartMaintenanceCommandOutput } from "./commands/StartMaintenanceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateServerCommandInput, UpdateServerCommandOutput } from "./commands/UpdateServerCommand";
import {
  UpdateServerEngineAttributesCommandInput,
  UpdateServerEngineAttributesCommandOutput,
} from "./commands/UpdateServerEngineAttributesCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateNodeCommandInput
  | CreateBackupCommandInput
  | CreateServerCommandInput
  | DeleteBackupCommandInput
  | DeleteServerCommandInput
  | DescribeAccountAttributesCommandInput
  | DescribeBackupsCommandInput
  | DescribeEventsCommandInput
  | DescribeNodeAssociationStatusCommandInput
  | DescribeServersCommandInput
  | DisassociateNodeCommandInput
  | ExportServerEngineAttributeCommandInput
  | ListTagsForResourceCommandInput
  | RestoreServerCommandInput
  | StartMaintenanceCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateServerCommandInput
  | UpdateServerEngineAttributesCommandInput;

export type ServiceOutputTypes =
  | AssociateNodeCommandOutput
  | CreateBackupCommandOutput
  | CreateServerCommandOutput
  | DeleteBackupCommandOutput
  | DeleteServerCommandOutput
  | DescribeAccountAttributesCommandOutput
  | DescribeBackupsCommandOutput
  | DescribeEventsCommandOutput
  | DescribeNodeAssociationStatusCommandOutput
  | DescribeServersCommandOutput
  | DisassociateNodeCommandOutput
  | ExportServerEngineAttributeCommandOutput
  | ListTagsForResourceCommandOutput
  | RestoreServerCommandOutput
  | StartMaintenanceCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateServerCommandOutput
  | UpdateServerEngineAttributesCommandOutput;

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

type OpsWorksCMClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of OpsWorksCMClient class constructor that set the region, credentials and other options.
 */
export interface OpsWorksCMClientConfig extends OpsWorksCMClientConfigType {}

type OpsWorksCMClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of OpsWorksCMClient class. This is resolved and normalized from the {@link OpsWorksCMClientConfig | constructor configuration interface}.
 */
export interface OpsWorksCMClientResolvedConfig extends OpsWorksCMClientResolvedConfigType {}

/**
 * <fullname>AWS OpsWorks CM</fullname>
 *          <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages
 *       configuration management servers. You can use AWS OpsWorks CM to create and manage AWS
 *       OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove
 *       nodes for the servers to manage.</p>
 *          <p>
 *             <b>Glossary of terms</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Server</b>: A configuration management server that can be
 *         highly-available. The configuration management server runs on
 *       an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational
 *       Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration
 *       manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start
 *       or stop servers. After you create servers, they continue to run until they are deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Engine</b>: The engine is the specific configuration manager
 *         that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Backup</b>: This
 *       is an application-level backup of the data that the configuration manager
 *       stores. AWS OpsWorks CM
 *       creates an S3 bucket for backups when you launch the first
 *       server. A backup maintains a snapshot of a server's configuration-related
 *       attributes at the time the backup starts.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Events</b>:
 *       Events are always related to a server. Events are written
 *       during server creation, when health checks run, when backups
 *       are created, when system maintenance is performed, etc. When you delete a server, the server's events are
 *       also deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Account attributes</b>:
 *       Every account has attributes that are assigned in the AWS OpsWorks CM
 *       database. These attributes store information about configuration limits (servers,
 *       backups, etc.) and your customer account.
 *       </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers
 *       can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks-cm.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-west-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">AWS OpsWorks endpoints and quotas</a> in the AWS General Reference.</p>
 *          <p>
 *             <b>Throttling limits</b>
 *          </p>
 *          <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>
 */
export class OpsWorksCMClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OpsWorksCMClientResolvedConfig
> {
  /**
   * The resolved configuration of OpsWorksCMClient class. This is resolved and normalized from the {@link OpsWorksCMClientConfig | constructor configuration interface}.
   */
  readonly config: OpsWorksCMClientResolvedConfig;

  constructor(configuration: OpsWorksCMClientConfig) {
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
