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
  defaultACMPCAHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateCertificateAuthorityAuditReportCommandInput,
  CreateCertificateAuthorityAuditReportCommandOutput,
} from "./commands/CreateCertificateAuthorityAuditReportCommand";
import {
  CreateCertificateAuthorityCommandInput,
  CreateCertificateAuthorityCommandOutput,
} from "./commands/CreateCertificateAuthorityCommand";
import { CreatePermissionCommandInput, CreatePermissionCommandOutput } from "./commands/CreatePermissionCommand";
import {
  DeleteCertificateAuthorityCommandInput,
  DeleteCertificateAuthorityCommandOutput,
} from "./commands/DeleteCertificateAuthorityCommand";
import { DeletePermissionCommandInput, DeletePermissionCommandOutput } from "./commands/DeletePermissionCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "./commands/DeletePolicyCommand";
import {
  DescribeCertificateAuthorityAuditReportCommandInput,
  DescribeCertificateAuthorityAuditReportCommandOutput,
} from "./commands/DescribeCertificateAuthorityAuditReportCommand";
import {
  DescribeCertificateAuthorityCommandInput,
  DescribeCertificateAuthorityCommandOutput,
} from "./commands/DescribeCertificateAuthorityCommand";
import {
  GetCertificateAuthorityCertificateCommandInput,
  GetCertificateAuthorityCertificateCommandOutput,
} from "./commands/GetCertificateAuthorityCertificateCommand";
import {
  GetCertificateAuthorityCsrCommandInput,
  GetCertificateAuthorityCsrCommandOutput,
} from "./commands/GetCertificateAuthorityCsrCommand";
import { GetCertificateCommandInput, GetCertificateCommandOutput } from "./commands/GetCertificateCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  ImportCertificateAuthorityCertificateCommandInput,
  ImportCertificateAuthorityCertificateCommandOutput,
} from "./commands/ImportCertificateAuthorityCertificateCommand";
import { IssueCertificateCommandInput, IssueCertificateCommandOutput } from "./commands/IssueCertificateCommand";
import {
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "./commands/ListCertificateAuthoritiesCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import {
  RestoreCertificateAuthorityCommandInput,
  RestoreCertificateAuthorityCommandOutput,
} from "./commands/RestoreCertificateAuthorityCommand";
import { RevokeCertificateCommandInput, RevokeCertificateCommandOutput } from "./commands/RevokeCertificateCommand";
import {
  TagCertificateAuthorityCommandInput,
  TagCertificateAuthorityCommandOutput,
} from "./commands/TagCertificateAuthorityCommand";
import {
  UntagCertificateAuthorityCommandInput,
  UntagCertificateAuthorityCommandOutput,
} from "./commands/UntagCertificateAuthorityCommand";
import {
  UpdateCertificateAuthorityCommandInput,
  UpdateCertificateAuthorityCommandOutput,
} from "./commands/UpdateCertificateAuthorityCommand";
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
  | CreateCertificateAuthorityAuditReportCommandInput
  | CreateCertificateAuthorityCommandInput
  | CreatePermissionCommandInput
  | DeleteCertificateAuthorityCommandInput
  | DeletePermissionCommandInput
  | DeletePolicyCommandInput
  | DescribeCertificateAuthorityAuditReportCommandInput
  | DescribeCertificateAuthorityCommandInput
  | GetCertificateAuthorityCertificateCommandInput
  | GetCertificateAuthorityCsrCommandInput
  | GetCertificateCommandInput
  | GetPolicyCommandInput
  | ImportCertificateAuthorityCertificateCommandInput
  | IssueCertificateCommandInput
  | ListCertificateAuthoritiesCommandInput
  | ListPermissionsCommandInput
  | ListTagsCommandInput
  | PutPolicyCommandInput
  | RestoreCertificateAuthorityCommandInput
  | RevokeCertificateCommandInput
  | TagCertificateAuthorityCommandInput
  | UntagCertificateAuthorityCommandInput
  | UpdateCertificateAuthorityCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateCertificateAuthorityAuditReportCommandOutput
  | CreateCertificateAuthorityCommandOutput
  | CreatePermissionCommandOutput
  | DeleteCertificateAuthorityCommandOutput
  | DeletePermissionCommandOutput
  | DeletePolicyCommandOutput
  | DescribeCertificateAuthorityAuditReportCommandOutput
  | DescribeCertificateAuthorityCommandOutput
  | GetCertificateAuthorityCertificateCommandOutput
  | GetCertificateAuthorityCsrCommandOutput
  | GetCertificateCommandOutput
  | GetPolicyCommandOutput
  | ImportCertificateAuthorityCertificateCommandOutput
  | IssueCertificateCommandOutput
  | ListCertificateAuthoritiesCommandOutput
  | ListPermissionsCommandOutput
  | ListTagsCommandOutput
  | PutPolicyCommandOutput
  | RestoreCertificateAuthorityCommandOutput
  | RevokeCertificateCommandOutput
  | TagCertificateAuthorityCommandOutput
  | UntagCertificateAuthorityCommandOutput
  | UpdateCertificateAuthorityCommandOutput;

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
export type ACMPCAClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ACMPCAClient class constructor that set the region, credentials and other options.
 */
export interface ACMPCAClientConfig extends ACMPCAClientConfigType {}

/**
 * @public
 */
export type ACMPCAClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ACMPCAClient class. This is resolved and normalized from the {@link ACMPCAClientConfig | constructor configuration interface}.
 */
export interface ACMPCAClientResolvedConfig extends ACMPCAClientResolvedConfigType {}

/**
 * <p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions, syntax, and usage examples for each of the actions and data types involved in creating and managing a private certificate authority (CA) for your organization.</p> <p>The documentation for each action shows the API request parameters and the JSON response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is tailored to the programming language or platform that you prefer. For more information, see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> <p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid request because the request exceeds the operation's quota for the number of requests per second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request rate for APIs. </p> <p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase, log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a> console.</p>
 * @public
 */
export class ACMPCAClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ACMPCAClientResolvedConfig
> {
  /**
   * The resolved configuration of ACMPCAClient class. This is resolved and normalized from the {@link ACMPCAClientConfig | constructor configuration interface}.
   */
  readonly config: ACMPCAClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ACMPCAClientConfig>) {
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
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultACMPCAHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ACMPCAClientResolvedConfig) =>
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
