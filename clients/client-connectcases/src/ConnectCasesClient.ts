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

import { BatchGetFieldCommandInput, BatchGetFieldCommandOutput } from "./commands/BatchGetFieldCommand";
import {
  BatchPutFieldOptionsCommandInput,
  BatchPutFieldOptionsCommandOutput,
} from "./commands/BatchPutFieldOptionsCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateFieldCommandInput, CreateFieldCommandOutput } from "./commands/CreateFieldCommand";
import { CreateLayoutCommandInput, CreateLayoutCommandOutput } from "./commands/CreateLayoutCommand";
import { CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput } from "./commands/CreateRelatedItemCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { GetCaseCommandInput, GetCaseCommandOutput } from "./commands/GetCaseCommand";
import {
  GetCaseEventConfigurationCommandInput,
  GetCaseEventConfigurationCommandOutput,
} from "./commands/GetCaseEventConfigurationCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetLayoutCommandInput, GetLayoutCommandOutput } from "./commands/GetLayoutCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  ListCasesForContactCommandInput,
  ListCasesForContactCommandOutput,
} from "./commands/ListCasesForContactCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListFieldOptionsCommandInput, ListFieldOptionsCommandOutput } from "./commands/ListFieldOptionsCommand";
import { ListFieldsCommandInput, ListFieldsCommandOutput } from "./commands/ListFieldsCommand";
import { ListLayoutsCommandInput, ListLayoutsCommandOutput } from "./commands/ListLayoutsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import {
  PutCaseEventConfigurationCommandInput,
  PutCaseEventConfigurationCommandOutput,
} from "./commands/PutCaseEventConfigurationCommand";
import { SearchCasesCommandInput, SearchCasesCommandOutput } from "./commands/SearchCasesCommand";
import { SearchRelatedItemsCommandInput, SearchRelatedItemsCommandOutput } from "./commands/SearchRelatedItemsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateCaseCommandInput, UpdateCaseCommandOutput } from "./commands/UpdateCaseCommand";
import { UpdateFieldCommandInput, UpdateFieldCommandOutput } from "./commands/UpdateFieldCommand";
import { UpdateLayoutCommandInput, UpdateLayoutCommandOutput } from "./commands/UpdateLayoutCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "./commands/UpdateTemplateCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchGetFieldCommandInput
  | BatchPutFieldOptionsCommandInput
  | CreateCaseCommandInput
  | CreateDomainCommandInput
  | CreateFieldCommandInput
  | CreateLayoutCommandInput
  | CreateRelatedItemCommandInput
  | CreateTemplateCommandInput
  | GetCaseCommandInput
  | GetCaseEventConfigurationCommandInput
  | GetDomainCommandInput
  | GetLayoutCommandInput
  | GetTemplateCommandInput
  | ListCasesForContactCommandInput
  | ListDomainsCommandInput
  | ListFieldOptionsCommandInput
  | ListFieldsCommandInput
  | ListLayoutsCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplatesCommandInput
  | PutCaseEventConfigurationCommandInput
  | SearchCasesCommandInput
  | SearchRelatedItemsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateCaseCommandInput
  | UpdateFieldCommandInput
  | UpdateLayoutCommandInput
  | UpdateTemplateCommandInput;

export type ServiceOutputTypes =
  | BatchGetFieldCommandOutput
  | BatchPutFieldOptionsCommandOutput
  | CreateCaseCommandOutput
  | CreateDomainCommandOutput
  | CreateFieldCommandOutput
  | CreateLayoutCommandOutput
  | CreateRelatedItemCommandOutput
  | CreateTemplateCommandOutput
  | GetCaseCommandOutput
  | GetCaseEventConfigurationCommandOutput
  | GetDomainCommandOutput
  | GetLayoutCommandOutput
  | GetTemplateCommandOutput
  | ListCasesForContactCommandOutput
  | ListDomainsCommandOutput
  | ListFieldOptionsCommandOutput
  | ListFieldsCommandOutput
  | ListLayoutsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplatesCommandOutput
  | PutCaseEventConfigurationCommandOutput
  | SearchCasesCommandOutput
  | SearchRelatedItemsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateCaseCommandOutput
  | UpdateFieldCommandOutput
  | UpdateLayoutCommandOutput
  | UpdateTemplateCommandOutput;

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

type ConnectCasesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ConnectCasesClient class constructor that set the region, credentials and other options.
 */
export interface ConnectCasesClientConfig extends ConnectCasesClientConfigType {}

type ConnectCasesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ConnectCasesClient class. This is resolved and normalized from the {@link ConnectCasesClientConfig | constructor configuration interface}.
 */
export interface ConnectCasesClientResolvedConfig extends ConnectCasesClientResolvedConfigType {}

/**
 * <p>Welcome to the Amazon Connect Cases API Reference. This guide provides information about the
 *       Amazon Connect Cases API, which you can use to create, update, get, and list Cases domains,
 *       fields, field options, layouts, templates, cases, related items, and tags.</p>
 *
 *          <p>For more information about Amazon Connect Cases, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the
 *           <i>Amazon Connect Administrator Guide</i>. </p>
 */
export class ConnectCasesClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ConnectCasesClientResolvedConfig
> {
  /**
   * The resolved configuration of ConnectCasesClient class. This is resolved and normalized from the {@link ConnectCasesClientConfig | constructor configuration interface}.
   */
  readonly config: ConnectCasesClientResolvedConfig;

  constructor(configuration: ConnectCasesClientConfig) {
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
