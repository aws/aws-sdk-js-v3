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
  CreateConnectorProfileCommandInput,
  CreateConnectorProfileCommandOutput,
} from "./commands/CreateConnectorProfileCommand";
import { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import {
  DeleteConnectorProfileCommandInput,
  DeleteConnectorProfileCommandOutput,
} from "./commands/DeleteConnectorProfileCommand";
import { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import { DescribeConnectorCommandInput, DescribeConnectorCommandOutput } from "./commands/DescribeConnectorCommand";
import {
  DescribeConnectorEntityCommandInput,
  DescribeConnectorEntityCommandOutput,
} from "./commands/DescribeConnectorEntityCommand";
import {
  DescribeConnectorProfilesCommandInput,
  DescribeConnectorProfilesCommandOutput,
} from "./commands/DescribeConnectorProfilesCommand";
import { DescribeConnectorsCommandInput, DescribeConnectorsCommandOutput } from "./commands/DescribeConnectorsCommand";
import { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "./commands/DescribeFlowCommand";
import {
  DescribeFlowExecutionRecordsCommandInput,
  DescribeFlowExecutionRecordsCommandOutput,
} from "./commands/DescribeFlowExecutionRecordsCommand";
import {
  ListConnectorEntitiesCommandInput,
  ListConnectorEntitiesCommandOutput,
} from "./commands/ListConnectorEntitiesCommand";
import { ListConnectorsCommandInput, ListConnectorsCommandOutput } from "./commands/ListConnectorsCommand";
import { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RegisterConnectorCommandInput, RegisterConnectorCommandOutput } from "./commands/RegisterConnectorCommand";
import { StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import { StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UnregisterConnectorCommandInput,
  UnregisterConnectorCommandOutput,
} from "./commands/UnregisterConnectorCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
} from "./commands/UpdateConnectorProfileCommand";
import {
  UpdateConnectorRegistrationCommandInput,
  UpdateConnectorRegistrationCommandOutput,
} from "./commands/UpdateConnectorRegistrationCommand";
import { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateConnectorProfileCommandInput
  | CreateFlowCommandInput
  | DeleteConnectorProfileCommandInput
  | DeleteFlowCommandInput
  | DescribeConnectorCommandInput
  | DescribeConnectorEntityCommandInput
  | DescribeConnectorProfilesCommandInput
  | DescribeConnectorsCommandInput
  | DescribeFlowCommandInput
  | DescribeFlowExecutionRecordsCommandInput
  | ListConnectorEntitiesCommandInput
  | ListConnectorsCommandInput
  | ListFlowsCommandInput
  | ListTagsForResourceCommandInput
  | RegisterConnectorCommandInput
  | StartFlowCommandInput
  | StopFlowCommandInput
  | TagResourceCommandInput
  | UnregisterConnectorCommandInput
  | UntagResourceCommandInput
  | UpdateConnectorProfileCommandInput
  | UpdateConnectorRegistrationCommandInput
  | UpdateFlowCommandInput;

export type ServiceOutputTypes =
  | CreateConnectorProfileCommandOutput
  | CreateFlowCommandOutput
  | DeleteConnectorProfileCommandOutput
  | DeleteFlowCommandOutput
  | DescribeConnectorCommandOutput
  | DescribeConnectorEntityCommandOutput
  | DescribeConnectorProfilesCommandOutput
  | DescribeConnectorsCommandOutput
  | DescribeFlowCommandOutput
  | DescribeFlowExecutionRecordsCommandOutput
  | ListConnectorEntitiesCommandOutput
  | ListConnectorsCommandOutput
  | ListFlowsCommandOutput
  | ListTagsForResourceCommandOutput
  | RegisterConnectorCommandOutput
  | StartFlowCommandOutput
  | StopFlowCommandOutput
  | TagResourceCommandOutput
  | UnregisterConnectorCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectorProfileCommandOutput
  | UpdateConnectorRegistrationCommandOutput
  | UpdateFlowCommandOutput;

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

type AppflowClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of AppflowClient class constructor that set the region, credentials and other options.
 */
export interface AppflowClientConfig extends AppflowClientConfigType {}

type AppflowClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of AppflowClient class. This is resolved and normalized from the {@link AppflowClientConfig | constructor configuration interface}.
 */
export interface AppflowClientResolvedConfig extends AppflowClientResolvedConfigType {}

/**
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need
 *       detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely
 *       transfer data between software as a service (SaaS) applications like Salesforce, Marketo,
 *       Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p>
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API
 *           operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data
 *             types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common
 *             errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include
 *       applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with
 *       the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector
 *       profile using Amazon AppFlow API operations. For example, Salesforce users can refer to
 *       the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 */
export class AppflowClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  AppflowClientResolvedConfig
> {
  /**
   * The resolved configuration of AppflowClient class. This is resolved and normalized from the {@link AppflowClientConfig | constructor configuration interface}.
   */
  readonly config: AppflowClientResolvedConfig;

  constructor(configuration: AppflowClientConfig) {
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
