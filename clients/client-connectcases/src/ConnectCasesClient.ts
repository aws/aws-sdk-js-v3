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
  defaultConnectCasesHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchGetCaseRuleCommandInput, BatchGetCaseRuleCommandOutput } from "./commands/BatchGetCaseRuleCommand";
import { BatchGetFieldCommandInput, BatchGetFieldCommandOutput } from "./commands/BatchGetFieldCommand";
import {
  BatchPutFieldOptionsCommandInput,
  BatchPutFieldOptionsCommandOutput,
} from "./commands/BatchPutFieldOptionsCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import { CreateCaseRuleCommandInput, CreateCaseRuleCommandOutput } from "./commands/CreateCaseRuleCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateFieldCommandInput, CreateFieldCommandOutput } from "./commands/CreateFieldCommand";
import { CreateLayoutCommandInput, CreateLayoutCommandOutput } from "./commands/CreateLayoutCommand";
import { CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput } from "./commands/CreateRelatedItemCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "./commands/CreateTemplateCommand";
import { DeleteCaseRuleCommandInput, DeleteCaseRuleCommandOutput } from "./commands/DeleteCaseRuleCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteFieldCommandInput, DeleteFieldCommandOutput } from "./commands/DeleteFieldCommand";
import { DeleteLayoutCommandInput, DeleteLayoutCommandOutput } from "./commands/DeleteLayoutCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "./commands/DeleteTemplateCommand";
import { GetCaseAuditEventsCommandInput, GetCaseAuditEventsCommandOutput } from "./commands/GetCaseAuditEventsCommand";
import { GetCaseCommandInput, GetCaseCommandOutput } from "./commands/GetCaseCommand";
import {
  GetCaseEventConfigurationCommandInput,
  GetCaseEventConfigurationCommandOutput,
} from "./commands/GetCaseEventConfigurationCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetLayoutCommandInput, GetLayoutCommandOutput } from "./commands/GetLayoutCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import { ListCaseRulesCommandInput, ListCaseRulesCommandOutput } from "./commands/ListCaseRulesCommand";
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
import { UpdateCaseRuleCommandInput, UpdateCaseRuleCommandOutput } from "./commands/UpdateCaseRuleCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | BatchGetCaseRuleCommandInput
  | BatchGetFieldCommandInput
  | BatchPutFieldOptionsCommandInput
  | CreateCaseCommandInput
  | CreateCaseRuleCommandInput
  | CreateDomainCommandInput
  | CreateFieldCommandInput
  | CreateLayoutCommandInput
  | CreateRelatedItemCommandInput
  | CreateTemplateCommandInput
  | DeleteCaseRuleCommandInput
  | DeleteDomainCommandInput
  | DeleteFieldCommandInput
  | DeleteLayoutCommandInput
  | DeleteTemplateCommandInput
  | GetCaseAuditEventsCommandInput
  | GetCaseCommandInput
  | GetCaseEventConfigurationCommandInput
  | GetDomainCommandInput
  | GetLayoutCommandInput
  | GetTemplateCommandInput
  | ListCaseRulesCommandInput
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
  | UpdateCaseRuleCommandInput
  | UpdateFieldCommandInput
  | UpdateLayoutCommandInput
  | UpdateTemplateCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetCaseRuleCommandOutput
  | BatchGetFieldCommandOutput
  | BatchPutFieldOptionsCommandOutput
  | CreateCaseCommandOutput
  | CreateCaseRuleCommandOutput
  | CreateDomainCommandOutput
  | CreateFieldCommandOutput
  | CreateLayoutCommandOutput
  | CreateRelatedItemCommandOutput
  | CreateTemplateCommandOutput
  | DeleteCaseRuleCommandOutput
  | DeleteDomainCommandOutput
  | DeleteFieldCommandOutput
  | DeleteLayoutCommandOutput
  | DeleteTemplateCommandOutput
  | GetCaseAuditEventsCommandOutput
  | GetCaseCommandOutput
  | GetCaseEventConfigurationCommandOutput
  | GetDomainCommandOutput
  | GetLayoutCommandOutput
  | GetTemplateCommandOutput
  | ListCaseRulesCommandOutput
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
  | UpdateCaseRuleCommandOutput
  | UpdateFieldCommandOutput
  | UpdateLayoutCommandOutput
  | UpdateTemplateCommandOutput;

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
export type ConnectCasesClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ConnectCasesClient class constructor that set the region, credentials and other options.
 */
export interface ConnectCasesClientConfig extends ConnectCasesClientConfigType {}

/**
 * @public
 */
export type ConnectCasesClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ConnectCasesClient class. This is resolved and normalized from the {@link ConnectCasesClientConfig | constructor configuration interface}.
 */
export interface ConnectCasesClientResolvedConfig extends ConnectCasesClientResolvedConfigType {}

/**
 * <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Cases.html">Cases
 *             actions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Cases.html">Cases data
 *             types</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>With Amazon Connect Cases, your agents can track and manage customer issues that require
 *       multiple interactions, follow-up tasks, and teams in your contact center. A case represents a
 *       customer issue. It records the issue, the steps and interactions taken to resolve the issue,
 *       and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the
 *           <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<ConnectCasesClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
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
        httpAuthSchemeParametersProvider: defaultConnectCasesHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ConnectCasesClientResolvedConfig) =>
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
