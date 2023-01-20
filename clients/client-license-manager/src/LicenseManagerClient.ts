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

import { AcceptGrantCommandInput, AcceptGrantCommandOutput } from "./commands/AcceptGrantCommand";
import { CheckInLicenseCommandInput, CheckInLicenseCommandOutput } from "./commands/CheckInLicenseCommand";
import {
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
} from "./commands/CheckoutBorrowLicenseCommand";
import { CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput } from "./commands/CheckoutLicenseCommand";
import { CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import { CreateGrantVersionCommandInput, CreateGrantVersionCommandOutput } from "./commands/CreateGrantVersionCommand";
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
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput,
} from "./commands/ListLicenseConfigurationsCommand";
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

export type ServiceInputTypes =
  | AcceptGrantCommandInput
  | CheckInLicenseCommandInput
  | CheckoutBorrowLicenseCommandInput
  | CheckoutLicenseCommandInput
  | CreateGrantCommandInput
  | CreateGrantVersionCommandInput
  | CreateLicenseCommandInput
  | CreateLicenseConfigurationCommandInput
  | CreateLicenseConversionTaskForResourceCommandInput
  | CreateLicenseManagerReportGeneratorCommandInput
  | CreateLicenseVersionCommandInput
  | CreateTokenCommandInput
  | DeleteGrantCommandInput
  | DeleteLicenseCommandInput
  | DeleteLicenseConfigurationCommandInput
  | DeleteLicenseManagerReportGeneratorCommandInput
  | DeleteTokenCommandInput
  | ExtendLicenseConsumptionCommandInput
  | GetAccessTokenCommandInput
  | GetGrantCommandInput
  | GetLicenseCommandInput
  | GetLicenseConfigurationCommandInput
  | GetLicenseConversionTaskCommandInput
  | GetLicenseManagerReportGeneratorCommandInput
  | GetLicenseUsageCommandInput
  | GetServiceSettingsCommandInput
  | ListAssociationsForLicenseConfigurationCommandInput
  | ListDistributedGrantsCommandInput
  | ListFailuresForLicenseConfigurationOperationsCommandInput
  | ListLicenseConfigurationsCommandInput
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
  | UpdateLicenseConfigurationCommandInput
  | UpdateLicenseManagerReportGeneratorCommandInput
  | UpdateLicenseSpecificationsForResourceCommandInput
  | UpdateServiceSettingsCommandInput;

export type ServiceOutputTypes =
  | AcceptGrantCommandOutput
  | CheckInLicenseCommandOutput
  | CheckoutBorrowLicenseCommandOutput
  | CheckoutLicenseCommandOutput
  | CreateGrantCommandOutput
  | CreateGrantVersionCommandOutput
  | CreateLicenseCommandOutput
  | CreateLicenseConfigurationCommandOutput
  | CreateLicenseConversionTaskForResourceCommandOutput
  | CreateLicenseManagerReportGeneratorCommandOutput
  | CreateLicenseVersionCommandOutput
  | CreateTokenCommandOutput
  | DeleteGrantCommandOutput
  | DeleteLicenseCommandOutput
  | DeleteLicenseConfigurationCommandOutput
  | DeleteLicenseManagerReportGeneratorCommandOutput
  | DeleteTokenCommandOutput
  | ExtendLicenseConsumptionCommandOutput
  | GetAccessTokenCommandOutput
  | GetGrantCommandOutput
  | GetLicenseCommandOutput
  | GetLicenseConfigurationCommandOutput
  | GetLicenseConversionTaskCommandOutput
  | GetLicenseManagerReportGeneratorCommandOutput
  | GetLicenseUsageCommandOutput
  | GetServiceSettingsCommandOutput
  | ListAssociationsForLicenseConfigurationCommandOutput
  | ListDistributedGrantsCommandOutput
  | ListFailuresForLicenseConfigurationOperationsCommandOutput
  | ListLicenseConfigurationsCommandOutput
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
  | UpdateLicenseConfigurationCommandOutput
  | UpdateLicenseManagerReportGeneratorCommandOutput
  | UpdateLicenseSpecificationsForResourceCommandOutput
  | UpdateServiceSettingsCommandOutput;

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

type LicenseManagerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LicenseManagerClient class constructor that set the region, credentials and other options.
 */
export interface LicenseManagerClientConfig extends LicenseManagerClientConfigType {}

type LicenseManagerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LicenseManagerClient class. This is resolved and normalized from the {@link LicenseManagerClientConfig | constructor configuration interface}.
 */
export interface LicenseManagerClientResolvedConfig extends LicenseManagerClientResolvedConfigType {}

/**
 * <p>License Manager makes it easier to manage licenses from software vendors across multiple
 *          Amazon Web Services accounts and on-premises servers.</p>
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

  constructor(configuration: LicenseManagerClientConfig) {
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
