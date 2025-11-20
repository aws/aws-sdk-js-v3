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
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultLicenseManagerHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { AcceptGrantCommandInput, AcceptGrantCommandOutput } from "./commands/AcceptGrantCommand";
import { CheckInLicenseCommandInput, CheckInLicenseCommandOutput } from "./commands/CheckInLicenseCommand";
import {
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
} from "./commands/CheckoutBorrowLicenseCommand";
import { CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput } from "./commands/CheckoutLicenseCommand";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import { CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput } from "./commands/CreateGrantVersionCommand";
import {
  CreateLicenseAssetGroupCommandInput,
  CreateLicenseAssetGroupCommandOutput,
} from "./commands/CreateLicenseAssetGroupCommand";
import {
  CreateLicenseAssetRulesetCommandInput,
  CreateLicenseAssetRulesetCommandOutput,
} from "./commands/CreateLicenseAssetRulesetCommand";
import { CreateLicenseCommandInput, CreateLicenseCommandOutput } from "./commands/CreateLicenseCommand";
import {
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
} from "./commands/CreateLicenseConfigurationCommand";
import {
  CreateLicenseConversionTaskForResourceCommandInput,
  CreateLicenseConversionTaskForResourceCommandOutput,
} from "./commands/CreateLicenseConversionTaskForResourceCommand";
import {
  CreateLicenseManagerReportGeneratorCommandInput,
  CreateLicenseManagerReportGeneratorCommandOutput,
} from "./commands/CreateLicenseManagerReportGeneratorCommand";
import {
  CreateLicenseVersionCommandInput,
  CreateLicenseVersionCommandOutput,
} from "./commands/CreateLicenseVersionCommand";
import { CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { DeleteGrantCommandInput, DeleteGrantCommandOutput } from "./commands/DeleteGrantCommand";
import {
  DeleteLicenseAssetGroupCommandInput,
  DeleteLicenseAssetGroupCommandOutput,
} from "./commands/DeleteLicenseAssetGroupCommand";
import {
  DeleteLicenseAssetRulesetCommandInput,
  DeleteLicenseAssetRulesetCommandOutput,
} from "./commands/DeleteLicenseAssetRulesetCommand";
import { DeleteLicenseCommandInput, DeleteLicenseCommandOutput } from "./commands/DeleteLicenseCommand";
import {
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput,
} from "./commands/DeleteLicenseConfigurationCommand";
import {
  DeleteLicenseManagerReportGeneratorCommandInput,
  DeleteLicenseManagerReportGeneratorCommandOutput,
} from "./commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import {
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
} from "./commands/ExtendLicenseConsumptionCommand";
import { GetAccessTokenCommandInput, GetAccessTokenCommandOutput } from "./commands/GetAccessTokenCommand";
import { GetGrantCommandInput, GetGrantCommandOutput } from "./commands/GetGrantCommand";
import {
  GetLicenseAssetGroupCommandInput,
  GetLicenseAssetGroupCommandOutput,
} from "./commands/GetLicenseAssetGroupCommand";
import {
  GetLicenseAssetRulesetCommandInput,
  GetLicenseAssetRulesetCommandOutput,
} from "./commands/GetLicenseAssetRulesetCommand";
import { GetLicenseCommandInput, GetLicenseCommandOutput } from "./commands/GetLicenseCommand";
import {
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput,
} from "./commands/GetLicenseConfigurationCommand";
import {
  GetLicenseConversionTaskCommandInput,
  GetLicenseConversionTaskCommandOutput,
} from "./commands/GetLicenseConversionTaskCommand";
import {
  GetLicenseManagerReportGeneratorCommandInput,
  GetLicenseManagerReportGeneratorCommandOutput,
} from "./commands/GetLicenseManagerReportGeneratorCommand";
import { GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput } from "./commands/GetLicenseUsageCommand";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "./commands/GetServiceSettingsCommand";
import {
  ListAssetsForLicenseAssetGroupCommandInput,
  ListAssetsForLicenseAssetGroupCommandOutput,
} from "./commands/ListAssetsForLicenseAssetGroupCommand";
import {
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
} from "./commands/ListAssociationsForLicenseConfigurationCommand";
import {
  ListDistributedGrantsCommandInput,
  ListDistributedGrantsCommandOutput,
} from "./commands/ListDistributedGrantsCommand";
import {
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput,
} from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import {
  ListLicenseAssetGroupsCommandInput,
  ListLicenseAssetGroupsCommandOutput,
} from "./commands/ListLicenseAssetGroupsCommand";
import {
  ListLicenseAssetRulesetsCommandInput,
  ListLicenseAssetRulesetsCommandOutput,
} from "./commands/ListLicenseAssetRulesetsCommand";
import {
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput,
} from "./commands/ListLicenseConfigurationsCommand";
import {
  ListLicenseConfigurationsForOrganizationCommandInput,
  ListLicenseConfigurationsForOrganizationCommandOutput,
} from "./commands/ListLicenseConfigurationsForOrganizationCommand";
import {
  ListLicenseConversionTasksCommandInput,
  ListLicenseConversionTasksCommandOutput,
} from "./commands/ListLicenseConversionTasksCommand";
import {
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
} from "./commands/ListLicenseManagerReportGeneratorsCommand";
import { ListLicensesCommandInput, ListLicensesCommandOutput } from "./commands/ListLicensesCommand";
import {
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput,
} from "./commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListLicenseVersionsCommandInput,
  ListLicenseVersionsCommandOutput,
} from "./commands/ListLicenseVersionsCommand";
import { ListReceivedGrantsCommandInput, ListReceivedGrantsCommandOutput } from "./commands/ListReceivedGrantsCommand";
import {
  ListReceivedGrantsForOrganizationCommandInput,
  ListReceivedGrantsForOrganizationCommandOutput,
} from "./commands/ListReceivedGrantsForOrganizationCommand";
import {
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
} from "./commands/ListReceivedLicensesCommand";
import {
  ListReceivedLicensesForOrganizationCommandInput,
  ListReceivedLicensesForOrganizationCommandOutput,
} from "./commands/ListReceivedLicensesForOrganizationCommand";
import {
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput,
} from "./commands/ListResourceInventoryCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTokensCommandInput, ListTokensCommandOutput } from "./commands/ListTokensCommand";
import {
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
} from "./commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommandInput, RejectGrantCommandOutput } from "./commands/RejectGrantCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateLicenseAssetGroupCommandInput,
  UpdateLicenseAssetGroupCommandOutput,
} from "./commands/UpdateLicenseAssetGroupCommand";
import {
  UpdateLicenseAssetRulesetCommandInput,
  UpdateLicenseAssetRulesetCommandOutput,
} from "./commands/UpdateLicenseAssetRulesetCommand";
import {
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput,
} from "./commands/UpdateLicenseConfigurationCommand";
import {
  UpdateLicenseManagerReportGeneratorCommandInput,
  UpdateLicenseManagerReportGeneratorCommandOutput,
} from "./commands/UpdateLicenseManagerReportGeneratorCommand";
import {
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
} from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand";
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
  | AcceptGrantCommandInput
  | CheckInLicenseCommandInput
  | CheckoutBorrowLicenseCommandInput
  | CheckoutLicenseCommandInput
  | CreateGrantCommandInput
  | CreateGrantVersionCommandInput
  | CreateLicenseAssetGroupCommandInput
  | CreateLicenseAssetRulesetCommandInput
  | CreateLicenseCommandInput
  | CreateLicenseConfigurationCommandInput
  | CreateLicenseConversionTaskForResourceCommandInput
  | CreateLicenseManagerReportGeneratorCommandInput
  | CreateLicenseVersionCommandInput
  | CreateTokenCommandInput
  | DeleteGrantCommandInput
  | DeleteLicenseAssetGroupCommandInput
  | DeleteLicenseAssetRulesetCommandInput
  | DeleteLicenseCommandInput
  | DeleteLicenseConfigurationCommandInput
  | DeleteLicenseManagerReportGeneratorCommandInput
  | DeleteTokenCommandInput
  | ExtendLicenseConsumptionCommandInput
  | GetAccessTokenCommandInput
  | GetGrantCommandInput
  | GetLicenseAssetGroupCommandInput
  | GetLicenseAssetRulesetCommandInput
  | GetLicenseCommandInput
  | GetLicenseConfigurationCommandInput
  | GetLicenseConversionTaskCommandInput
  | GetLicenseManagerReportGeneratorCommandInput
  | GetLicenseUsageCommandInput
  | GetServiceSettingsCommandInput
  | ListAssetsForLicenseAssetGroupCommandInput
  | ListAssociationsForLicenseConfigurationCommandInput
  | ListDistributedGrantsCommandInput
  | ListFailuresForLicenseConfigurationOperationsCommandInput
  | ListLicenseAssetGroupsCommandInput
  | ListLicenseAssetRulesetsCommandInput
  | ListLicenseConfigurationsCommandInput
  | ListLicenseConfigurationsForOrganizationCommandInput
  | ListLicenseConversionTasksCommandInput
  | ListLicenseManagerReportGeneratorsCommandInput
  | ListLicenseSpecificationsForResourceCommandInput
  | ListLicenseVersionsCommandInput
  | ListLicensesCommandInput
  | ListReceivedGrantsCommandInput
  | ListReceivedGrantsForOrganizationCommandInput
  | ListReceivedLicensesCommandInput
  | ListReceivedLicensesForOrganizationCommandInput
  | ListResourceInventoryCommandInput
  | ListTagsForResourceCommandInput
  | ListTokensCommandInput
  | ListUsageForLicenseConfigurationCommandInput
  | RejectGrantCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLicenseAssetGroupCommandInput
  | UpdateLicenseAssetRulesetCommandInput
  | UpdateLicenseConfigurationCommandInput
  | UpdateLicenseManagerReportGeneratorCommandInput
  | UpdateLicenseSpecificationsForResourceCommandInput
  | UpdateServiceSettingsCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptGrantCommandOutput
  | CheckInLicenseCommandOutput
  | CheckoutBorrowLicenseCommandOutput
  | CheckoutLicenseCommandOutput
  | CreateGrantCommandOutput
  | CreateGrantVersionCommandOutput
  | CreateLicenseAssetGroupCommandOutput
  | CreateLicenseAssetRulesetCommandOutput
  | CreateLicenseCommandOutput
  | CreateLicenseConfigurationCommandOutput
  | CreateLicenseConversionTaskForResourceCommandOutput
  | CreateLicenseManagerReportGeneratorCommandOutput
  | CreateLicenseVersionCommandOutput
  | CreateTokenCommandOutput
  | DeleteGrantCommandOutput
  | DeleteLicenseAssetGroupCommandOutput
  | DeleteLicenseAssetRulesetCommandOutput
  | DeleteLicenseCommandOutput
  | DeleteLicenseConfigurationCommandOutput
  | DeleteLicenseManagerReportGeneratorCommandOutput
  | DeleteTokenCommandOutput
  | ExtendLicenseConsumptionCommandOutput
  | GetAccessTokenCommandOutput
  | GetGrantCommandOutput
  | GetLicenseAssetGroupCommandOutput
  | GetLicenseAssetRulesetCommandOutput
  | GetLicenseCommandOutput
  | GetLicenseConfigurationCommandOutput
  | GetLicenseConversionTaskCommandOutput
  | GetLicenseManagerReportGeneratorCommandOutput
  | GetLicenseUsageCommandOutput
  | GetServiceSettingsCommandOutput
  | ListAssetsForLicenseAssetGroupCommandOutput
  | ListAssociationsForLicenseConfigurationCommandOutput
  | ListDistributedGrantsCommandOutput
  | ListFailuresForLicenseConfigurationOperationsCommandOutput
  | ListLicenseAssetGroupsCommandOutput
  | ListLicenseAssetRulesetsCommandOutput
  | ListLicenseConfigurationsCommandOutput
  | ListLicenseConfigurationsForOrganizationCommandOutput
  | ListLicenseConversionTasksCommandOutput
  | ListLicenseManagerReportGeneratorsCommandOutput
  | ListLicenseSpecificationsForResourceCommandOutput
  | ListLicenseVersionsCommandOutput
  | ListLicensesCommandOutput
  | ListReceivedGrantsCommandOutput
  | ListReceivedGrantsForOrganizationCommandOutput
  | ListReceivedLicensesCommandOutput
  | ListReceivedLicensesForOrganizationCommandOutput
  | ListResourceInventoryCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTokensCommandOutput
  | ListUsageForLicenseConfigurationCommandOutput
  | RejectGrantCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLicenseAssetGroupCommandOutput
  | UpdateLicenseAssetRulesetCommandOutput
  | UpdateLicenseConfigurationCommandOutput
  | UpdateLicenseManagerReportGeneratorCommandOutput
  | UpdateLicenseSpecificationsForResourceCommandOutput
  | UpdateServiceSettingsCommandOutput;

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
export type LicenseManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of LicenseManagerClient class constructor that set the region, credentials and other options.
 */
export interface LicenseManagerClientConfig extends LicenseManagerClientConfigType {}

/**
 * @public
 */
export type LicenseManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of LicenseManagerClient class. This is resolved and normalized from the {@link LicenseManagerClientConfig | constructor configuration interface}.
 */
export interface LicenseManagerClientResolvedConfig extends LicenseManagerClientResolvedConfigType {}

/**
 * <p>License Manager makes it easier to manage licenses from software vendors across multiple
 *          Amazon Web Services accounts and on-premises servers.</p>
 * @public
 */
export class LicenseManagerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LicenseManagerClientResolvedConfig
> {
  /**
   * The resolved configuration of LicenseManagerClient class. This is resolved and normalized from the {@link LicenseManagerClientConfig | constructor configuration interface}.
   */
  readonly config: LicenseManagerClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<LicenseManagerClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultLicenseManagerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: LicenseManagerClientResolvedConfig) =>
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
