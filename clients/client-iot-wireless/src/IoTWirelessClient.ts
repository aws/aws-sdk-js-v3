import {
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
} from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import {
  AssociateWirelessDeviceWithThingCommandInput,
  AssociateWirelessDeviceWithThingCommandOutput,
} from "./commands/AssociateWirelessDeviceWithThingCommand";
import {
  AssociateWirelessGatewayWithCertificateCommandInput,
  AssociateWirelessGatewayWithCertificateCommandOutput,
} from "./commands/AssociateWirelessGatewayWithCertificateCommand";
import {
  AssociateWirelessGatewayWithThingCommandInput,
  AssociateWirelessGatewayWithThingCommandOutput,
} from "./commands/AssociateWirelessGatewayWithThingCommand";
import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "./commands/CreateDestinationCommand";
import {
  CreateDeviceProfileCommandInput,
  CreateDeviceProfileCommandOutput,
} from "./commands/CreateDeviceProfileCommand";
import {
  CreateServiceProfileCommandInput,
  CreateServiceProfileCommandOutput,
} from "./commands/CreateServiceProfileCommand";
import {
  CreateWirelessDeviceCommandInput,
  CreateWirelessDeviceCommandOutput,
} from "./commands/CreateWirelessDeviceCommand";
import {
  CreateWirelessGatewayCommandInput,
  CreateWirelessGatewayCommandOutput,
} from "./commands/CreateWirelessGatewayCommand";
import {
  CreateWirelessGatewayTaskCommandInput,
  CreateWirelessGatewayTaskCommandOutput,
} from "./commands/CreateWirelessGatewayTaskCommand";
import {
  CreateWirelessGatewayTaskDefinitionCommandInput,
  CreateWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/CreateWirelessGatewayTaskDefinitionCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "./commands/DeleteDestinationCommand";
import {
  DeleteDeviceProfileCommandInput,
  DeleteDeviceProfileCommandOutput,
} from "./commands/DeleteDeviceProfileCommand";
import {
  DeleteServiceProfileCommandInput,
  DeleteServiceProfileCommandOutput,
} from "./commands/DeleteServiceProfileCommand";
import {
  DeleteWirelessDeviceCommandInput,
  DeleteWirelessDeviceCommandOutput,
} from "./commands/DeleteWirelessDeviceCommand";
import {
  DeleteWirelessGatewayCommandInput,
  DeleteWirelessGatewayCommandOutput,
} from "./commands/DeleteWirelessGatewayCommand";
import {
  DeleteWirelessGatewayTaskCommandInput,
  DeleteWirelessGatewayTaskCommandOutput,
} from "./commands/DeleteWirelessGatewayTaskCommand";
import {
  DeleteWirelessGatewayTaskDefinitionCommandInput,
  DeleteWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/DeleteWirelessGatewayTaskDefinitionCommand";
import {
  DisassociateAwsAccountFromPartnerAccountCommandInput,
  DisassociateAwsAccountFromPartnerAccountCommandOutput,
} from "./commands/DisassociateAwsAccountFromPartnerAccountCommand";
import {
  DisassociateWirelessDeviceFromThingCommandInput,
  DisassociateWirelessDeviceFromThingCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromThingCommand";
import {
  DisassociateWirelessGatewayFromCertificateCommandInput,
  DisassociateWirelessGatewayFromCertificateCommandOutput,
} from "./commands/DisassociateWirelessGatewayFromCertificateCommand";
import {
  DisassociateWirelessGatewayFromThingCommandInput,
  DisassociateWirelessGatewayFromThingCommandOutput,
} from "./commands/DisassociateWirelessGatewayFromThingCommand";
import { GetDestinationCommandInput, GetDestinationCommandOutput } from "./commands/GetDestinationCommand";
import { GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput } from "./commands/GetDeviceProfileCommand";
import {
  GetLogLevelsByResourceTypesCommandInput,
  GetLogLevelsByResourceTypesCommandOutput,
} from "./commands/GetLogLevelsByResourceTypesCommand";
import { GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput } from "./commands/GetPartnerAccountCommand";
import {
  GetResourceLogLevelCommandInput,
  GetResourceLogLevelCommandOutput,
} from "./commands/GetResourceLogLevelCommand";
import { GetServiceEndpointCommandInput, GetServiceEndpointCommandOutput } from "./commands/GetServiceEndpointCommand";
import { GetServiceProfileCommandInput, GetServiceProfileCommandOutput } from "./commands/GetServiceProfileCommand";
import { GetWirelessDeviceCommandInput, GetWirelessDeviceCommandOutput } from "./commands/GetWirelessDeviceCommand";
import {
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
} from "./commands/GetWirelessDeviceStatisticsCommand";
import {
  GetWirelessGatewayCertificateCommandInput,
  GetWirelessGatewayCertificateCommandOutput,
} from "./commands/GetWirelessGatewayCertificateCommand";
import { GetWirelessGatewayCommandInput, GetWirelessGatewayCommandOutput } from "./commands/GetWirelessGatewayCommand";
import {
  GetWirelessGatewayFirmwareInformationCommandInput,
  GetWirelessGatewayFirmwareInformationCommandOutput,
} from "./commands/GetWirelessGatewayFirmwareInformationCommand";
import {
  GetWirelessGatewayStatisticsCommandInput,
  GetWirelessGatewayStatisticsCommandOutput,
} from "./commands/GetWirelessGatewayStatisticsCommand";
import {
  GetWirelessGatewayTaskCommandInput,
  GetWirelessGatewayTaskCommandOutput,
} from "./commands/GetWirelessGatewayTaskCommand";
import {
  GetWirelessGatewayTaskDefinitionCommandInput,
  GetWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/GetWirelessGatewayTaskDefinitionCommand";
import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "./commands/ListDestinationsCommand";
import { ListDeviceProfilesCommandInput, ListDeviceProfilesCommandOutput } from "./commands/ListDeviceProfilesCommand";
import {
  ListPartnerAccountsCommandInput,
  ListPartnerAccountsCommandOutput,
} from "./commands/ListPartnerAccountsCommand";
import {
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput,
} from "./commands/ListServiceProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "./commands/ListWirelessDevicesCommand";
import {
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
} from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import {
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "./commands/ListWirelessGatewaysCommand";
import {
  PutResourceLogLevelCommandInput,
  PutResourceLogLevelCommandOutput,
} from "./commands/PutResourceLogLevelCommand";
import {
  ResetAllResourceLogLevelsCommandInput,
  ResetAllResourceLogLevelsCommandOutput,
} from "./commands/ResetAllResourceLogLevelsCommand";
import {
  ResetResourceLogLevelCommandInput,
  ResetResourceLogLevelCommandOutput,
} from "./commands/ResetResourceLogLevelCommand";
import {
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
} from "./commands/SendDataToWirelessDeviceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput } from "./commands/TestWirelessDeviceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "./commands/UpdateDestinationCommand";
import {
  UpdateLogLevelsByResourceTypesCommandInput,
  UpdateLogLevelsByResourceTypesCommandOutput,
} from "./commands/UpdateLogLevelsByResourceTypesCommand";
import {
  UpdatePartnerAccountCommandInput,
  UpdatePartnerAccountCommandOutput,
} from "./commands/UpdatePartnerAccountCommand";
import {
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
} from "./commands/UpdateWirelessDeviceCommand";
import {
  UpdateWirelessGatewayCommandInput,
  UpdateWirelessGatewayCommandOutput,
} from "./commands/UpdateWirelessGatewayCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateAwsAccountWithPartnerAccountCommandInput
  | AssociateWirelessDeviceWithThingCommandInput
  | AssociateWirelessGatewayWithCertificateCommandInput
  | AssociateWirelessGatewayWithThingCommandInput
  | CreateDestinationCommandInput
  | CreateDeviceProfileCommandInput
  | CreateServiceProfileCommandInput
  | CreateWirelessDeviceCommandInput
  | CreateWirelessGatewayCommandInput
  | CreateWirelessGatewayTaskCommandInput
  | CreateWirelessGatewayTaskDefinitionCommandInput
  | DeleteDestinationCommandInput
  | DeleteDeviceProfileCommandInput
  | DeleteServiceProfileCommandInput
  | DeleteWirelessDeviceCommandInput
  | DeleteWirelessGatewayCommandInput
  | DeleteWirelessGatewayTaskCommandInput
  | DeleteWirelessGatewayTaskDefinitionCommandInput
  | DisassociateAwsAccountFromPartnerAccountCommandInput
  | DisassociateWirelessDeviceFromThingCommandInput
  | DisassociateWirelessGatewayFromCertificateCommandInput
  | DisassociateWirelessGatewayFromThingCommandInput
  | GetDestinationCommandInput
  | GetDeviceProfileCommandInput
  | GetLogLevelsByResourceTypesCommandInput
  | GetPartnerAccountCommandInput
  | GetResourceLogLevelCommandInput
  | GetServiceEndpointCommandInput
  | GetServiceProfileCommandInput
  | GetWirelessDeviceCommandInput
  | GetWirelessDeviceStatisticsCommandInput
  | GetWirelessGatewayCertificateCommandInput
  | GetWirelessGatewayCommandInput
  | GetWirelessGatewayFirmwareInformationCommandInput
  | GetWirelessGatewayStatisticsCommandInput
  | GetWirelessGatewayTaskCommandInput
  | GetWirelessGatewayTaskDefinitionCommandInput
  | ListDestinationsCommandInput
  | ListDeviceProfilesCommandInput
  | ListPartnerAccountsCommandInput
  | ListServiceProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListWirelessDevicesCommandInput
  | ListWirelessGatewayTaskDefinitionsCommandInput
  | ListWirelessGatewaysCommandInput
  | PutResourceLogLevelCommandInput
  | ResetAllResourceLogLevelsCommandInput
  | ResetResourceLogLevelCommandInput
  | SendDataToWirelessDeviceCommandInput
  | TagResourceCommandInput
  | TestWirelessDeviceCommandInput
  | UntagResourceCommandInput
  | UpdateDestinationCommandInput
  | UpdateLogLevelsByResourceTypesCommandInput
  | UpdatePartnerAccountCommandInput
  | UpdateWirelessDeviceCommandInput
  | UpdateWirelessGatewayCommandInput;

export type ServiceOutputTypes =
  | AssociateAwsAccountWithPartnerAccountCommandOutput
  | AssociateWirelessDeviceWithThingCommandOutput
  | AssociateWirelessGatewayWithCertificateCommandOutput
  | AssociateWirelessGatewayWithThingCommandOutput
  | CreateDestinationCommandOutput
  | CreateDeviceProfileCommandOutput
  | CreateServiceProfileCommandOutput
  | CreateWirelessDeviceCommandOutput
  | CreateWirelessGatewayCommandOutput
  | CreateWirelessGatewayTaskCommandOutput
  | CreateWirelessGatewayTaskDefinitionCommandOutput
  | DeleteDestinationCommandOutput
  | DeleteDeviceProfileCommandOutput
  | DeleteServiceProfileCommandOutput
  | DeleteWirelessDeviceCommandOutput
  | DeleteWirelessGatewayCommandOutput
  | DeleteWirelessGatewayTaskCommandOutput
  | DeleteWirelessGatewayTaskDefinitionCommandOutput
  | DisassociateAwsAccountFromPartnerAccountCommandOutput
  | DisassociateWirelessDeviceFromThingCommandOutput
  | DisassociateWirelessGatewayFromCertificateCommandOutput
  | DisassociateWirelessGatewayFromThingCommandOutput
  | GetDestinationCommandOutput
  | GetDeviceProfileCommandOutput
  | GetLogLevelsByResourceTypesCommandOutput
  | GetPartnerAccountCommandOutput
  | GetResourceLogLevelCommandOutput
  | GetServiceEndpointCommandOutput
  | GetServiceProfileCommandOutput
  | GetWirelessDeviceCommandOutput
  | GetWirelessDeviceStatisticsCommandOutput
  | GetWirelessGatewayCertificateCommandOutput
  | GetWirelessGatewayCommandOutput
  | GetWirelessGatewayFirmwareInformationCommandOutput
  | GetWirelessGatewayStatisticsCommandOutput
  | GetWirelessGatewayTaskCommandOutput
  | GetWirelessGatewayTaskDefinitionCommandOutput
  | ListDestinationsCommandOutput
  | ListDeviceProfilesCommandOutput
  | ListPartnerAccountsCommandOutput
  | ListServiceProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWirelessDevicesCommandOutput
  | ListWirelessGatewayTaskDefinitionsCommandOutput
  | ListWirelessGatewaysCommandOutput
  | PutResourceLogLevelCommandOutput
  | ResetAllResourceLogLevelsCommandOutput
  | ResetResourceLogLevelCommandOutput
  | SendDataToWirelessDeviceCommandOutput
  | TagResourceCommandOutput
  | TestWirelessDeviceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDestinationCommandOutput
  | UpdateLogLevelsByResourceTypesCommandOutput
  | UpdatePartnerAccountCommandOutput
  | UpdateWirelessDeviceCommandOutput
  | UpdateWirelessGatewayCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type IoTWirelessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of IoTWirelessClient class constructor that set the region, credentials and other options.
 */
export interface IoTWirelessClientConfig extends IoTWirelessClientConfigType {}

type IoTWirelessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of IoTWirelessClient class. This is resolved and normalized from the {@link IoTWirelessClientConfig | constructor configuration interface}.
 */
export interface IoTWirelessClientResolvedConfig extends IoTWirelessClientResolvedConfigType {}

/**
 * <p>AWS IoT Wireless API documentation</p>
 */
export class IoTWirelessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTWirelessClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTWirelessClient class. This is resolved and normalized from the {@link IoTWirelessClientConfig | constructor configuration interface}.
   */
  readonly config: IoTWirelessClientResolvedConfig;

  constructor(configuration: IoTWirelessClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
