// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultDataExchangeHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AcceptDataGrantCommandInput, AcceptDataGrantCommandOutput } from "./commands/AcceptDataGrantCommand";
import { CancelJobCommandInput, CancelJobCommandOutput } from "./commands/CancelJobCommand";
import { CreateDataGrantCommandInput, CreateDataGrantCommandOutput } from "./commands/CreateDataGrantCommand";
import { CreateDataSetCommandInput, CreateDataSetCommandOutput } from "./commands/CreateDataSetCommand";
import { CreateEventActionCommandInput, CreateEventActionCommandOutput } from "./commands/CreateEventActionCommand";
import { CreateJobCommandInput, CreateJobCommandOutput } from "./commands/CreateJobCommand";
import { CreateRevisionCommandInput, CreateRevisionCommandOutput } from "./commands/CreateRevisionCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteDataGrantCommandInput, DeleteDataGrantCommandOutput } from "./commands/DeleteDataGrantCommand";
import { DeleteDataSetCommandInput, DeleteDataSetCommandOutput } from "./commands/DeleteDataSetCommand";
import { DeleteEventActionCommandInput, DeleteEventActionCommandOutput } from "./commands/DeleteEventActionCommand";
import { DeleteRevisionCommandInput, DeleteRevisionCommandOutput } from "./commands/DeleteRevisionCommand";
import { GetAssetCommandInput, GetAssetCommandOutput } from "./commands/GetAssetCommand";
import { GetDataGrantCommandInput, GetDataGrantCommandOutput } from "./commands/GetDataGrantCommand";
import { GetDataSetCommandInput, GetDataSetCommandOutput } from "./commands/GetDataSetCommand";
import { GetEventActionCommandInput, GetEventActionCommandOutput } from "./commands/GetEventActionCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "./commands/GetJobCommand";
import {
  GetReceivedDataGrantCommandInput,
  GetReceivedDataGrantCommandOutput,
} from "./commands/GetReceivedDataGrantCommand";
import { GetRevisionCommandInput, GetRevisionCommandOutput } from "./commands/GetRevisionCommand";
import { ListDataGrantsCommandInput, ListDataGrantsCommandOutput } from "./commands/ListDataGrantsCommand";
import {
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "./commands/ListDataSetRevisionsCommand";
import { ListDataSetsCommandInput, ListDataSetsCommandOutput } from "./commands/ListDataSetsCommand";
import { ListEventActionsCommandInput, ListEventActionsCommandOutput } from "./commands/ListEventActionsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import {
  ListReceivedDataGrantsCommandInput,
  ListReceivedDataGrantsCommandOutput,
} from "./commands/ListReceivedDataGrantsCommand";
import { ListRevisionAssetsCommandInput, ListRevisionAssetsCommandOutput } from "./commands/ListRevisionAssetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RevokeRevisionCommandInput, RevokeRevisionCommandOutput } from "./commands/RevokeRevisionCommand";
import { SendApiAssetCommandInput, SendApiAssetCommandOutput } from "./commands/SendApiAssetCommand";
import {
  SendDataSetNotificationCommandInput,
  SendDataSetNotificationCommandOutput,
} from "./commands/SendDataSetNotificationCommand";
import { StartJobCommandInput, StartJobCommandOutput } from "./commands/StartJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import { UpdateDataSetCommandInput, UpdateDataSetCommandOutput } from "./commands/UpdateDataSetCommand";
import { UpdateEventActionCommandInput, UpdateEventActionCommandOutput } from "./commands/UpdateEventActionCommand";
import { UpdateRevisionCommandInput, UpdateRevisionCommandOutput } from "./commands/UpdateRevisionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptDataGrantCommandInput
  | CancelJobCommandInput
  | CreateDataGrantCommandInput
  | CreateDataSetCommandInput
  | CreateEventActionCommandInput
  | CreateJobCommandInput
  | CreateRevisionCommandInput
  | DeleteAssetCommandInput
  | DeleteDataGrantCommandInput
  | DeleteDataSetCommandInput
  | DeleteEventActionCommandInput
  | DeleteRevisionCommandInput
  | GetAssetCommandInput
  | GetDataGrantCommandInput
  | GetDataSetCommandInput
  | GetEventActionCommandInput
  | GetJobCommandInput
  | GetReceivedDataGrantCommandInput
  | GetRevisionCommandInput
  | ListDataGrantsCommandInput
  | ListDataSetRevisionsCommandInput
  | ListDataSetsCommandInput
  | ListEventActionsCommandInput
  | ListJobsCommandInput
  | ListReceivedDataGrantsCommandInput
  | ListRevisionAssetsCommandInput
  | ListTagsForResourceCommandInput
  | RevokeRevisionCommandInput
  | SendApiAssetCommandInput
  | SendDataSetNotificationCommandInput
  | StartJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAssetCommandInput
  | UpdateDataSetCommandInput
  | UpdateEventActionCommandInput
  | UpdateRevisionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptDataGrantCommandOutput
  | CancelJobCommandOutput
  | CreateDataGrantCommandOutput
  | CreateDataSetCommandOutput
  | CreateEventActionCommandOutput
  | CreateJobCommandOutput
  | CreateRevisionCommandOutput
  | DeleteAssetCommandOutput
  | DeleteDataGrantCommandOutput
  | DeleteDataSetCommandOutput
  | DeleteEventActionCommandOutput
  | DeleteRevisionCommandOutput
  | GetAssetCommandOutput
  | GetDataGrantCommandOutput
  | GetDataSetCommandOutput
  | GetEventActionCommandOutput
  | GetJobCommandOutput
  | GetReceivedDataGrantCommandOutput
  | GetRevisionCommandOutput
  | ListDataGrantsCommandOutput
  | ListDataSetRevisionsCommandOutput
  | ListDataSetsCommandOutput
  | ListEventActionsCommandOutput
  | ListJobsCommandOutput
  | ListReceivedDataGrantsCommandOutput
  | ListRevisionAssetsCommandOutput
  | ListTagsForResourceCommandOutput
  | RevokeRevisionCommandOutput
  | SendApiAssetCommandOutput
  | SendDataSetNotificationCommandOutput
  | StartJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAssetCommandOutput
  | UpdateDataSetCommandOutput
  | UpdateEventActionCommandOutput
  | UpdateRevisionCommandOutput;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type DataExchangeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DataExchangeClient class constructor that set the region, credentials and other options.
 */
export interface DataExchangeClientConfig extends DataExchangeClientConfigType {}

/**
 * @public
 */
export type DataExchangeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DataExchangeClient class. This is resolved and normalized from the {@link DataExchangeClientConfig | constructor configuration interface}.
 */
export interface DataExchangeClientResolvedConfig extends DataExchangeClientResolvedConfigType {}

/**
 * <p>AWS Data Exchange is a service that makes it easy for AWS customers to exchange data in
 *          the cloud. You can use the AWS Data Exchange APIs to create, update, manage, and access
 *          file-based data set in the AWS Cloud.</p>
 *          <p>As a subscriber, you can view and access the data sets that you have an entitlement to
 *          through a subscription. You can use the APIs to download or copy your entitled data sets to
 *          Amazon Simple Storage Service (Amazon S3) for use across a variety of AWS analytics and
 *          machine learning services.</p>
 *          <p>As a provider, you can create and manage your data sets that you would like to publish
 *          to a product. Being able to package and provide your data sets into products requires a few
 *          steps to determine eligibility. For more information, visit the <i>AWS Data Exchange
 *             User Guide</i>.</p>
 *          <p>A data set is a collection of data that can be changed or updated over time. Data sets
 *          can be updated using revisions, which represent a new version or incremental change to a
 *          data set. A revision contains one or more assets. An asset in AWS Data Exchange is a piece
 *          of data that can be stored as an Amazon S3 object, Redshift datashare, API Gateway API, AWS
 *          Lake Formation data permission, or Amazon S3 data access. The asset can be a structured
 *          data file, an image file, or some other data file. Jobs are asynchronous import or export
 *          operations used to create or copy assets.</p>
 * @public
 */
export class DataExchangeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataExchangeClientResolvedConfig
> {
  /**
   * The resolved configuration of DataExchangeClient class. This is resolved and normalized from the {@link DataExchangeClientConfig | constructor configuration interface}.
   */
  readonly config: DataExchangeClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DataExchangeClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDataExchangeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DataExchangeClientResolvedConfig) =>
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
