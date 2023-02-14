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
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput,
} from "./commands/AddLayerVersionPermissionCommand";
import { AddPermissionCommandInput, AddPermissionCommandOutput } from "./commands/AddPermissionCommand";
import { CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import {
  CreateCodeSigningConfigCommandInput,
  CreateCodeSigningConfigCommandOutput,
} from "./commands/CreateCodeSigningConfigCommand";
import {
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput,
} from "./commands/CreateEventSourceMappingCommand";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput } from "./commands/CreateFunctionCommand";
import {
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
} from "./commands/CreateFunctionUrlConfigCommand";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import {
  DeleteCodeSigningConfigCommandInput,
  DeleteCodeSigningConfigCommandOutput,
} from "./commands/DeleteCodeSigningConfigCommand";
import {
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput,
} from "./commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCodeSigningConfigCommandInput,
  DeleteFunctionCodeSigningConfigCommandOutput,
} from "./commands/DeleteFunctionCodeSigningConfigCommand";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput } from "./commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput,
} from "./commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput,
} from "./commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteFunctionUrlConfigCommandInput,
  DeleteFunctionUrlConfigCommandOutput,
} from "./commands/DeleteFunctionUrlConfigCommand";
import { DeleteLayerVersionCommandInput, DeleteLayerVersionCommandOutput } from "./commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput,
} from "./commands/DeleteProvisionedConcurrencyConfigCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetAliasCommandInput, GetAliasCommandOutput } from "./commands/GetAliasCommand";
import {
  GetCodeSigningConfigCommandInput,
  GetCodeSigningConfigCommandOutput,
} from "./commands/GetCodeSigningConfigCommand";
import {
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput,
} from "./commands/GetEventSourceMappingCommand";
import {
  GetFunctionCodeSigningConfigCommandInput,
  GetFunctionCodeSigningConfigCommandOutput,
} from "./commands/GetFunctionCodeSigningConfigCommand";
import { GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput,
} from "./commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput,
} from "./commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput,
} from "./commands/GetFunctionEventInvokeConfigCommand";
import {
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
} from "./commands/GetFunctionUrlConfigCommand";
import {
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput,
} from "./commands/GetLayerVersionByArnCommand";
import { GetLayerVersionCommandInput, GetLayerVersionCommandOutput } from "./commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput,
} from "./commands/GetLayerVersionPolicyCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput,
} from "./commands/GetProvisionedConcurrencyConfigCommand";
import {
  GetRuntimeManagementConfigCommandInput,
  GetRuntimeManagementConfigCommandOutput,
} from "./commands/GetRuntimeManagementConfigCommand";
import { InvokeAsyncCommandInput, InvokeAsyncCommandOutput } from "./commands/InvokeAsyncCommand";
import { InvokeCommandInput, InvokeCommandOutput } from "./commands/InvokeCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListCodeSigningConfigsCommandInput,
  ListCodeSigningConfigsCommandOutput,
} from "./commands/ListCodeSigningConfigsCommand";
import {
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput,
} from "./commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput,
} from "./commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsByCodeSigningConfigCommandInput,
  ListFunctionsByCodeSigningConfigCommandOutput,
} from "./commands/ListFunctionsByCodeSigningConfigCommand";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput } from "./commands/ListFunctionsCommand";
import {
  ListFunctionUrlConfigsCommandInput,
  ListFunctionUrlConfigsCommandOutput,
} from "./commands/ListFunctionUrlConfigsCommand";
import { ListLayersCommandInput, ListLayersCommandOutput } from "./commands/ListLayersCommand";
import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput } from "./commands/ListLayerVersionsCommand";
import {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput,
} from "./commands/ListProvisionedConcurrencyConfigsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput,
} from "./commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput,
} from "./commands/PublishLayerVersionCommand";
import { PublishVersionCommandInput, PublishVersionCommandOutput } from "./commands/PublishVersionCommand";
import {
  PutFunctionCodeSigningConfigCommandInput,
  PutFunctionCodeSigningConfigCommandOutput,
} from "./commands/PutFunctionCodeSigningConfigCommand";
import {
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput,
} from "./commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput,
} from "./commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput,
} from "./commands/PutProvisionedConcurrencyConfigCommand";
import {
  PutRuntimeManagementConfigCommandInput,
  PutRuntimeManagementConfigCommandOutput,
} from "./commands/PutRuntimeManagementConfigCommand";
import {
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput,
} from "./commands/RemoveLayerVersionPermissionCommand";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput } from "./commands/RemovePermissionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput } from "./commands/UpdateAliasCommand";
import {
  UpdateCodeSigningConfigCommandInput,
  UpdateCodeSigningConfigCommandOutput,
} from "./commands/UpdateCodeSigningConfigCommand";
import {
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput,
} from "./commands/UpdateEventSourceMappingCommand";
import { UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput } from "./commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput,
} from "./commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput,
} from "./commands/UpdateFunctionEventInvokeConfigCommand";
import {
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
} from "./commands/UpdateFunctionUrlConfigCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddLayerVersionPermissionCommandInput
  | AddPermissionCommandInput
  | CreateAliasCommandInput
  | CreateCodeSigningConfigCommandInput
  | CreateEventSourceMappingCommandInput
  | CreateFunctionCommandInput
  | CreateFunctionUrlConfigCommandInput
  | DeleteAliasCommandInput
  | DeleteCodeSigningConfigCommandInput
  | DeleteEventSourceMappingCommandInput
  | DeleteFunctionCodeSigningConfigCommandInput
  | DeleteFunctionCommandInput
  | DeleteFunctionConcurrencyCommandInput
  | DeleteFunctionEventInvokeConfigCommandInput
  | DeleteFunctionUrlConfigCommandInput
  | DeleteLayerVersionCommandInput
  | DeleteProvisionedConcurrencyConfigCommandInput
  | GetAccountSettingsCommandInput
  | GetAliasCommandInput
  | GetCodeSigningConfigCommandInput
  | GetEventSourceMappingCommandInput
  | GetFunctionCodeSigningConfigCommandInput
  | GetFunctionCommandInput
  | GetFunctionConcurrencyCommandInput
  | GetFunctionConfigurationCommandInput
  | GetFunctionEventInvokeConfigCommandInput
  | GetFunctionUrlConfigCommandInput
  | GetLayerVersionByArnCommandInput
  | GetLayerVersionCommandInput
  | GetLayerVersionPolicyCommandInput
  | GetPolicyCommandInput
  | GetProvisionedConcurrencyConfigCommandInput
  | GetRuntimeManagementConfigCommandInput
  | InvokeAsyncCommandInput
  | InvokeCommandInput
  | ListAliasesCommandInput
  | ListCodeSigningConfigsCommandInput
  | ListEventSourceMappingsCommandInput
  | ListFunctionEventInvokeConfigsCommandInput
  | ListFunctionUrlConfigsCommandInput
  | ListFunctionsByCodeSigningConfigCommandInput
  | ListFunctionsCommandInput
  | ListLayerVersionsCommandInput
  | ListLayersCommandInput
  | ListProvisionedConcurrencyConfigsCommandInput
  | ListTagsCommandInput
  | ListVersionsByFunctionCommandInput
  | PublishLayerVersionCommandInput
  | PublishVersionCommandInput
  | PutFunctionCodeSigningConfigCommandInput
  | PutFunctionConcurrencyCommandInput
  | PutFunctionEventInvokeConfigCommandInput
  | PutProvisionedConcurrencyConfigCommandInput
  | PutRuntimeManagementConfigCommandInput
  | RemoveLayerVersionPermissionCommandInput
  | RemovePermissionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAliasCommandInput
  | UpdateCodeSigningConfigCommandInput
  | UpdateEventSourceMappingCommandInput
  | UpdateFunctionCodeCommandInput
  | UpdateFunctionConfigurationCommandInput
  | UpdateFunctionEventInvokeConfigCommandInput
  | UpdateFunctionUrlConfigCommandInput;

export type ServiceOutputTypes =
  | AddLayerVersionPermissionCommandOutput
  | AddPermissionCommandOutput
  | CreateAliasCommandOutput
  | CreateCodeSigningConfigCommandOutput
  | CreateEventSourceMappingCommandOutput
  | CreateFunctionCommandOutput
  | CreateFunctionUrlConfigCommandOutput
  | DeleteAliasCommandOutput
  | DeleteCodeSigningConfigCommandOutput
  | DeleteEventSourceMappingCommandOutput
  | DeleteFunctionCodeSigningConfigCommandOutput
  | DeleteFunctionCommandOutput
  | DeleteFunctionConcurrencyCommandOutput
  | DeleteFunctionEventInvokeConfigCommandOutput
  | DeleteFunctionUrlConfigCommandOutput
  | DeleteLayerVersionCommandOutput
  | DeleteProvisionedConcurrencyConfigCommandOutput
  | GetAccountSettingsCommandOutput
  | GetAliasCommandOutput
  | GetCodeSigningConfigCommandOutput
  | GetEventSourceMappingCommandOutput
  | GetFunctionCodeSigningConfigCommandOutput
  | GetFunctionCommandOutput
  | GetFunctionConcurrencyCommandOutput
  | GetFunctionConfigurationCommandOutput
  | GetFunctionEventInvokeConfigCommandOutput
  | GetFunctionUrlConfigCommandOutput
  | GetLayerVersionByArnCommandOutput
  | GetLayerVersionCommandOutput
  | GetLayerVersionPolicyCommandOutput
  | GetPolicyCommandOutput
  | GetProvisionedConcurrencyConfigCommandOutput
  | GetRuntimeManagementConfigCommandOutput
  | InvokeAsyncCommandOutput
  | InvokeCommandOutput
  | ListAliasesCommandOutput
  | ListCodeSigningConfigsCommandOutput
  | ListEventSourceMappingsCommandOutput
  | ListFunctionEventInvokeConfigsCommandOutput
  | ListFunctionUrlConfigsCommandOutput
  | ListFunctionsByCodeSigningConfigCommandOutput
  | ListFunctionsCommandOutput
  | ListLayerVersionsCommandOutput
  | ListLayersCommandOutput
  | ListProvisionedConcurrencyConfigsCommandOutput
  | ListTagsCommandOutput
  | ListVersionsByFunctionCommandOutput
  | PublishLayerVersionCommandOutput
  | PublishVersionCommandOutput
  | PutFunctionCodeSigningConfigCommandOutput
  | PutFunctionConcurrencyCommandOutput
  | PutFunctionEventInvokeConfigCommandOutput
  | PutProvisionedConcurrencyConfigCommandOutput
  | PutRuntimeManagementConfigCommandOutput
  | RemoveLayerVersionPermissionCommandOutput
  | RemovePermissionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAliasCommandOutput
  | UpdateCodeSigningConfigCommandOutput
  | UpdateEventSourceMappingCommandOutput
  | UpdateFunctionCodeCommandOutput
  | UpdateFunctionConfigurationCommandOutput
  | UpdateFunctionEventInvokeConfigCommandOutput
  | UpdateFunctionUrlConfigCommandOutput;

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

type LambdaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LambdaClient class constructor that set the region, credentials and other options.
 */
export interface LambdaClientConfig extends LambdaClientConfigType {}

type LambdaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LambdaClient class. This is resolved and normalized from the {@link LambdaClientConfig | constructor configuration interface}.
 */
export interface LambdaClientResolvedConfig extends LambdaClientResolvedConfigType {}

/**
 * <fullname>Lambda</fullname>
 *          <p>
 *             <b>Overview</b>
 *          </p>
 *          <p>Lambda is a compute service that lets you run code without provisioning or managing servers.
 *         Lambda runs your code on a high-availability compute infrastructure and performs all of the
 *       administration of the compute resources, including server and operating system maintenance, capacity provisioning
 *       and automatic scaling, code monitoring and logging. With Lambda, you can run code for virtually any
 *       type of application or backend service. For more information about the Lambda service, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html">What is Lambda</a> in the <b>Lambda Developer Guide</b>.</p>
 *          <p>The <i>Lambda API Reference</i> provides information about
 *       each of the API methods, including details about the parameters in each API request and
 *       response. </p>
 *          <p></p>
 *          <p>You can use Software Development Kits (SDKs), Integrated Development Environment (IDE) Toolkits, and command
 *       line tools to access the API. For installation instructions, see <a href="http://aws.amazon.com/tools/">Tools for
 *         Amazon Web Services</a>. </p>
 *          <p>For a list of Region-specific endpoints that Lambda supports,
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/lambda-service.html/">Lambda
 *         endpoints and quotas </a> in the <i>Amazon Web Services General Reference.</i>. </p>
 *          <p>When making the API calls, you will need to
 *       authenticate your request by providing a signature. Lambda supports signature version 4. For more information,
 *       see <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 signing process</a> in the
 *       <i>Amazon Web Services General Reference.</i>. </p>
 *          <p>
 *             <b>CA certificates</b>
 *          </p>
 *          <p>Because Amazon Web Services SDKs use the CA certificates from your computer, changes to the certificates on the Amazon Web Services servers
 *         can cause connection failures when you attempt to use an SDK. You can prevent these failures by keeping your
 *         computer's CA certificates and operating system up-to-date. If you encounter this issue in a corporate
 *         environment and do not manage your own computer, you might need to ask an administrator to assist with the
 *         update process. The following list shows minimum operating system and Java versions:</p>
 *          <ul>
 *             <li>
 *                <p>Microsoft Windows versions that have updates from January 2005 or later installed contain at least one
 *             of the required CAs in their trust list. </p>
 *             </li>
 *             <li>
 *                <p>Mac OS X 10.4 with Java for Mac OS X 10.4 Release 5 (February 2007), Mac OS X 10.5 (October 2007), and
 *             later versions contain at least one of the required CAs in their trust list. </p>
 *             </li>
 *             <li>
 *                <p>Red Hat Enterprise Linux 5 (March 2007), 6, and 7 and CentOS 5, 6, and 7 all contain at least one of the
 *             required CAs in their default trusted CA list. </p>
 *             </li>
 *             <li>
 *                <p>Java 1.4.2_12 (May 2006), 5 Update 2 (March 2005), and all later versions, including Java 6 (December
 *             2006), 7, and 8, contain at least one of the required CAs in their default trusted CA list. </p>
 *             </li>
 *          </ul>
 *          <p>When accessing the Lambda management console or Lambda API endpoints, whether through browsers or
 *         programmatically, you will need to ensure your client machines support any of the following CAs: </p>
 *          <ul>
 *             <li>
 *                <p>Amazon Root CA 1</p>
 *             </li>
 *             <li>
 *                <p>Starfield Services Root Certificate Authority - G2</p>
 *             </li>
 *             <li>
 *                <p>Starfield Class 2 Certification Authority</p>
 *             </li>
 *          </ul>
 *          <p>Root certificates from the first two authorities are available from <a href="https://www.amazontrust.com/repository/">Amazon trust services</a>, but keeping your computer
 *         up-to-date is the more straightforward solution. To learn more about ACM-provided certificates, see <a href="http://aws.amazon.com/certificate-manager/faqs/#certificates">Amazon Web Services Certificate Manager FAQs.</a>
 *          </p>
 */
export class LambdaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LambdaClientResolvedConfig
> {
  /**
   * The resolved configuration of LambdaClient class. This is resolved and normalized from the {@link LambdaClientConfig | constructor configuration interface}.
   */
  readonly config: LambdaClientResolvedConfig;

  constructor(configuration: LambdaClientConfig) {
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
