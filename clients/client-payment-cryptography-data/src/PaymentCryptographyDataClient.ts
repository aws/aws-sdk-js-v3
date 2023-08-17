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
import { Credentials as __Credentials } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandler as __HttpHandler } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
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
} from "@smithy/types";

import { DecryptDataCommandInput, DecryptDataCommandOutput } from "./commands/DecryptDataCommand";
import { EncryptDataCommandInput, EncryptDataCommandOutput } from "./commands/EncryptDataCommand";
import {
  GenerateCardValidationDataCommandInput,
  GenerateCardValidationDataCommandOutput,
} from "./commands/GenerateCardValidationDataCommand";
import { GenerateMacCommandInput, GenerateMacCommandOutput } from "./commands/GenerateMacCommand";
import { GeneratePinDataCommandInput, GeneratePinDataCommandOutput } from "./commands/GeneratePinDataCommand";
import { ReEncryptDataCommandInput, ReEncryptDataCommandOutput } from "./commands/ReEncryptDataCommand";
import { TranslatePinDataCommandInput, TranslatePinDataCommandOutput } from "./commands/TranslatePinDataCommand";
import {
  VerifyAuthRequestCryptogramCommandInput,
  VerifyAuthRequestCryptogramCommandOutput,
} from "./commands/VerifyAuthRequestCryptogramCommand";
import {
  VerifyCardValidationDataCommandInput,
  VerifyCardValidationDataCommandOutput,
} from "./commands/VerifyCardValidationDataCommand";
import { VerifyMacCommandInput, VerifyMacCommandOutput } from "./commands/VerifyMacCommand";
import { VerifyPinDataCommandInput, VerifyPinDataCommandOutput } from "./commands/VerifyPinDataCommand";
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
  | DecryptDataCommandInput
  | EncryptDataCommandInput
  | GenerateCardValidationDataCommandInput
  | GenerateMacCommandInput
  | GeneratePinDataCommandInput
  | ReEncryptDataCommandInput
  | TranslatePinDataCommandInput
  | VerifyAuthRequestCryptogramCommandInput
  | VerifyCardValidationDataCommandInput
  | VerifyMacCommandInput
  | VerifyPinDataCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | DecryptDataCommandOutput
  | EncryptDataCommandOutput
  | GenerateCardValidationDataCommandOutput
  | GenerateMacCommandOutput
  | GeneratePinDataCommandOutput
  | ReEncryptDataCommandOutput
  | TranslatePinDataCommandOutput
  | VerifyAuthRequestCryptogramCommandOutput
  | VerifyCardValidationDataCommandOutput
  | VerifyMacCommandOutput
  | VerifyPinDataCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

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
export type PaymentCryptographyDataClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of PaymentCryptographyDataClient class constructor that set the region, credentials and other options.
 */
export interface PaymentCryptographyDataClientConfig extends PaymentCryptographyDataClientConfigType {}

/**
 * @public
 */
export type PaymentCryptographyDataClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of PaymentCryptographyDataClient class. This is resolved and normalized from the {@link PaymentCryptographyDataClientConfig | constructor configuration interface}.
 */
export interface PaymentCryptographyDataClientResolvedConfig extends PaymentCryptographyDataClientResolvedConfigType {}

/**
 * @public
 * <p>You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.html">Data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p>
 *          <p>To manage your encryption keys, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/Welcome.html">Amazon Web Services Payment Cryptography Control Plane</a>. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. </p>
 */
export class PaymentCryptographyDataClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  PaymentCryptographyDataClientResolvedConfig
> {
  /**
   * The resolved configuration of PaymentCryptographyDataClient class. This is resolved and normalized from the {@link PaymentCryptographyDataClientConfig | constructor configuration interface}.
   */
  readonly config: PaymentCryptographyDataClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<PaymentCryptographyDataClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
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
