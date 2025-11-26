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
  defaultRoute53DomainsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptDomainTransferFromAnotherAwsAccountCommandInput,
  AcceptDomainTransferFromAnotherAwsAccountCommandOutput,
} from "./commands/AcceptDomainTransferFromAnotherAwsAccountCommand";
import {
  AssociateDelegationSignerToDomainCommandInput,
  AssociateDelegationSignerToDomainCommandOutput,
} from "./commands/AssociateDelegationSignerToDomainCommand";
import {
  CancelDomainTransferToAnotherAwsAccountCommandInput,
  CancelDomainTransferToAnotherAwsAccountCommandOutput,
} from "./commands/CancelDomainTransferToAnotherAwsAccountCommand";
import {
  CheckDomainAvailabilityCommandInput,
  CheckDomainAvailabilityCommandOutput,
} from "./commands/CheckDomainAvailabilityCommand";
import {
  CheckDomainTransferabilityCommandInput,
  CheckDomainTransferabilityCommandOutput,
} from "./commands/CheckDomainTransferabilityCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import {
  DeleteTagsForDomainCommandInput,
  DeleteTagsForDomainCommandOutput,
} from "./commands/DeleteTagsForDomainCommand";
import {
  DisableDomainAutoRenewCommandInput,
  DisableDomainAutoRenewCommandOutput,
} from "./commands/DisableDomainAutoRenewCommand";
import {
  DisableDomainTransferLockCommandInput,
  DisableDomainTransferLockCommandOutput,
} from "./commands/DisableDomainTransferLockCommand";
import {
  DisassociateDelegationSignerFromDomainCommandInput,
  DisassociateDelegationSignerFromDomainCommandOutput,
} from "./commands/DisassociateDelegationSignerFromDomainCommand";
import {
  EnableDomainAutoRenewCommandInput,
  EnableDomainAutoRenewCommandOutput,
} from "./commands/EnableDomainAutoRenewCommand";
import {
  EnableDomainTransferLockCommandInput,
  EnableDomainTransferLockCommandOutput,
} from "./commands/EnableDomainTransferLockCommand";
import {
  GetContactReachabilityStatusCommandInput,
  GetContactReachabilityStatusCommandOutput,
} from "./commands/GetContactReachabilityStatusCommand";
import { GetDomainDetailCommandInput, GetDomainDetailCommandOutput } from "./commands/GetDomainDetailCommand";
import {
  GetDomainSuggestionsCommandInput,
  GetDomainSuggestionsCommandOutput,
} from "./commands/GetDomainSuggestionsCommand";
import { GetOperationDetailCommandInput, GetOperationDetailCommandOutput } from "./commands/GetOperationDetailCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "./commands/ListOperationsCommand";
import { ListPricesCommandInput, ListPricesCommandOutput } from "./commands/ListPricesCommand";
import { ListTagsForDomainCommandInput, ListTagsForDomainCommandOutput } from "./commands/ListTagsForDomainCommand";
import { PushDomainCommandInput, PushDomainCommandOutput } from "./commands/PushDomainCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "./commands/RegisterDomainCommand";
import {
  RejectDomainTransferFromAnotherAwsAccountCommandInput,
  RejectDomainTransferFromAnotherAwsAccountCommandOutput,
} from "./commands/RejectDomainTransferFromAnotherAwsAccountCommand";
import { RenewDomainCommandInput, RenewDomainCommandOutput } from "./commands/RenewDomainCommand";
import {
  ResendContactReachabilityEmailCommandInput,
  ResendContactReachabilityEmailCommandOutput,
} from "./commands/ResendContactReachabilityEmailCommand";
import {
  ResendOperationAuthorizationCommandInput,
  ResendOperationAuthorizationCommandOutput,
} from "./commands/ResendOperationAuthorizationCommand";
import {
  RetrieveDomainAuthCodeCommandInput,
  RetrieveDomainAuthCodeCommandOutput,
} from "./commands/RetrieveDomainAuthCodeCommand";
import { TransferDomainCommandInput, TransferDomainCommandOutput } from "./commands/TransferDomainCommand";
import {
  TransferDomainToAnotherAwsAccountCommandInput,
  TransferDomainToAnotherAwsAccountCommandOutput,
} from "./commands/TransferDomainToAnotherAwsAccountCommand";
import {
  UpdateDomainContactCommandInput,
  UpdateDomainContactCommandOutput,
} from "./commands/UpdateDomainContactCommand";
import {
  UpdateDomainContactPrivacyCommandInput,
  UpdateDomainContactPrivacyCommandOutput,
} from "./commands/UpdateDomainContactPrivacyCommand";
import {
  UpdateDomainNameserversCommandInput,
  UpdateDomainNameserversCommandOutput,
} from "./commands/UpdateDomainNameserversCommand";
import {
  UpdateTagsForDomainCommandInput,
  UpdateTagsForDomainCommandOutput,
} from "./commands/UpdateTagsForDomainCommand";
import { ViewBillingCommandInput, ViewBillingCommandOutput } from "./commands/ViewBillingCommand";
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
  | AcceptDomainTransferFromAnotherAwsAccountCommandInput
  | AssociateDelegationSignerToDomainCommandInput
  | CancelDomainTransferToAnotherAwsAccountCommandInput
  | CheckDomainAvailabilityCommandInput
  | CheckDomainTransferabilityCommandInput
  | DeleteDomainCommandInput
  | DeleteTagsForDomainCommandInput
  | DisableDomainAutoRenewCommandInput
  | DisableDomainTransferLockCommandInput
  | DisassociateDelegationSignerFromDomainCommandInput
  | EnableDomainAutoRenewCommandInput
  | EnableDomainTransferLockCommandInput
  | GetContactReachabilityStatusCommandInput
  | GetDomainDetailCommandInput
  | GetDomainSuggestionsCommandInput
  | GetOperationDetailCommandInput
  | ListDomainsCommandInput
  | ListOperationsCommandInput
  | ListPricesCommandInput
  | ListTagsForDomainCommandInput
  | PushDomainCommandInput
  | RegisterDomainCommandInput
  | RejectDomainTransferFromAnotherAwsAccountCommandInput
  | RenewDomainCommandInput
  | ResendContactReachabilityEmailCommandInput
  | ResendOperationAuthorizationCommandInput
  | RetrieveDomainAuthCodeCommandInput
  | TransferDomainCommandInput
  | TransferDomainToAnotherAwsAccountCommandInput
  | UpdateDomainContactCommandInput
  | UpdateDomainContactPrivacyCommandInput
  | UpdateDomainNameserversCommandInput
  | UpdateTagsForDomainCommandInput
  | ViewBillingCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptDomainTransferFromAnotherAwsAccountCommandOutput
  | AssociateDelegationSignerToDomainCommandOutput
  | CancelDomainTransferToAnotherAwsAccountCommandOutput
  | CheckDomainAvailabilityCommandOutput
  | CheckDomainTransferabilityCommandOutput
  | DeleteDomainCommandOutput
  | DeleteTagsForDomainCommandOutput
  | DisableDomainAutoRenewCommandOutput
  | DisableDomainTransferLockCommandOutput
  | DisassociateDelegationSignerFromDomainCommandOutput
  | EnableDomainAutoRenewCommandOutput
  | EnableDomainTransferLockCommandOutput
  | GetContactReachabilityStatusCommandOutput
  | GetDomainDetailCommandOutput
  | GetDomainSuggestionsCommandOutput
  | GetOperationDetailCommandOutput
  | ListDomainsCommandOutput
  | ListOperationsCommandOutput
  | ListPricesCommandOutput
  | ListTagsForDomainCommandOutput
  | PushDomainCommandOutput
  | RegisterDomainCommandOutput
  | RejectDomainTransferFromAnotherAwsAccountCommandOutput
  | RenewDomainCommandOutput
  | ResendContactReachabilityEmailCommandOutput
  | ResendOperationAuthorizationCommandOutput
  | RetrieveDomainAuthCodeCommandOutput
  | TransferDomainCommandOutput
  | TransferDomainToAnotherAwsAccountCommandOutput
  | UpdateDomainContactCommandOutput
  | UpdateDomainContactPrivacyCommandOutput
  | UpdateDomainNameserversCommandOutput
  | UpdateTagsForDomainCommandOutput
  | ViewBillingCommandOutput;

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
export type Route53DomainsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Route53DomainsClient class constructor that set the region, credentials and other options.
 */
export interface Route53DomainsClientConfig extends Route53DomainsClientConfigType {}

/**
 * @public
 */
export type Route53DomainsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Route53DomainsClient class. This is resolved and normalized from the {@link Route53DomainsClientConfig | constructor configuration interface}.
 */
export interface Route53DomainsClientResolvedConfig extends Route53DomainsClientResolvedConfigType {}

/**
 * <p>Amazon Route 53 API actions let you register domain names and perform related
 * 			operations.</p>
 * @public
 */
export class Route53DomainsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53DomainsClientResolvedConfig
> {
  /**
   * The resolved configuration of Route53DomainsClient class. This is resolved and normalized from the {@link Route53DomainsClientConfig | constructor configuration interface}.
   */
  readonly config: Route53DomainsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Route53DomainsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRoute53DomainsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Route53DomainsClientResolvedConfig) =>
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
