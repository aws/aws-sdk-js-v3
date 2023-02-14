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
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
} from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import {
  AssociateMulticastGroupWithFuotaTaskCommandInput,
  AssociateMulticastGroupWithFuotaTaskCommandOutput,
} from "./commands/AssociateMulticastGroupWithFuotaTaskCommand";
import {
  AssociateWirelessDeviceWithFuotaTaskCommandInput,
  AssociateWirelessDeviceWithFuotaTaskCommandOutput,
} from "./commands/AssociateWirelessDeviceWithFuotaTaskCommand";
import {
  AssociateWirelessDeviceWithMulticastGroupCommandInput,
  AssociateWirelessDeviceWithMulticastGroupCommandOutput,
} from "./commands/AssociateWirelessDeviceWithMulticastGroupCommand";
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
import {
  CancelMulticastGroupSessionCommandInput,
  CancelMulticastGroupSessionCommandOutput,
} from "./commands/CancelMulticastGroupSessionCommand";
import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "./commands/CreateDestinationCommand";
import {
  CreateDeviceProfileCommandInput,
  CreateDeviceProfileCommandOutput,
} from "./commands/CreateDeviceProfileCommand";
import { CreateFuotaTaskCommandInput, CreateFuotaTaskCommandOutput } from "./commands/CreateFuotaTaskCommand";
import {
  CreateMulticastGroupCommandInput,
  CreateMulticastGroupCommandOutput,
} from "./commands/CreateMulticastGroupCommand";
import {
  CreateNetworkAnalyzerConfigurationCommandInput,
  CreateNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/CreateNetworkAnalyzerConfigurationCommand";
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
import { DeleteFuotaTaskCommandInput, DeleteFuotaTaskCommandOutput } from "./commands/DeleteFuotaTaskCommand";
import {
  DeleteMulticastGroupCommandInput,
  DeleteMulticastGroupCommandOutput,
} from "./commands/DeleteMulticastGroupCommand";
import {
  DeleteNetworkAnalyzerConfigurationCommandInput,
  DeleteNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/DeleteNetworkAnalyzerConfigurationCommand";
import {
  DeleteQueuedMessagesCommandInput,
  DeleteQueuedMessagesCommandOutput,
} from "./commands/DeleteQueuedMessagesCommand";
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
  DisassociateMulticastGroupFromFuotaTaskCommandInput,
  DisassociateMulticastGroupFromFuotaTaskCommandOutput,
} from "./commands/DisassociateMulticastGroupFromFuotaTaskCommand";
import {
  DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  DisassociateWirelessDeviceFromFuotaTaskCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromFuotaTaskCommand";
import {
  DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  DisassociateWirelessDeviceFromMulticastGroupCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromMulticastGroupCommand";
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
  GetEventConfigurationByResourceTypesCommandInput,
  GetEventConfigurationByResourceTypesCommandOutput,
} from "./commands/GetEventConfigurationByResourceTypesCommand";
import { GetFuotaTaskCommandInput, GetFuotaTaskCommandOutput } from "./commands/GetFuotaTaskCommand";
import {
  GetLogLevelsByResourceTypesCommandInput,
  GetLogLevelsByResourceTypesCommandOutput,
} from "./commands/GetLogLevelsByResourceTypesCommand";
import { GetMulticastGroupCommandInput, GetMulticastGroupCommandOutput } from "./commands/GetMulticastGroupCommand";
import {
  GetMulticastGroupSessionCommandInput,
  GetMulticastGroupSessionCommandOutput,
} from "./commands/GetMulticastGroupSessionCommand";
import {
  GetNetworkAnalyzerConfigurationCommandInput,
  GetNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/GetNetworkAnalyzerConfigurationCommand";
import { GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput } from "./commands/GetPartnerAccountCommand";
import { GetPositionCommandInput, GetPositionCommandOutput } from "./commands/GetPositionCommand";
import {
  GetPositionConfigurationCommandInput,
  GetPositionConfigurationCommandOutput,
} from "./commands/GetPositionConfigurationCommand";
import {
  GetPositionEstimateCommandInput,
  GetPositionEstimateCommandOutput,
} from "./commands/GetPositionEstimateCommand";
import {
  GetResourceEventConfigurationCommandInput,
  GetResourceEventConfigurationCommandOutput,
} from "./commands/GetResourceEventConfigurationCommand";
import {
  GetResourceLogLevelCommandInput,
  GetResourceLogLevelCommandOutput,
} from "./commands/GetResourceLogLevelCommand";
import {
  GetResourcePositionCommandInput,
  GetResourcePositionCommandOutput,
} from "./commands/GetResourcePositionCommand";
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
  ListEventConfigurationsCommandInput,
  ListEventConfigurationsCommandOutput,
} from "./commands/ListEventConfigurationsCommand";
import { ListFuotaTasksCommandInput, ListFuotaTasksCommandOutput } from "./commands/ListFuotaTasksCommand";
import {
  ListMulticastGroupsByFuotaTaskCommandInput,
  ListMulticastGroupsByFuotaTaskCommandOutput,
} from "./commands/ListMulticastGroupsByFuotaTaskCommand";
import {
  ListMulticastGroupsCommandInput,
  ListMulticastGroupsCommandOutput,
} from "./commands/ListMulticastGroupsCommand";
import {
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput,
} from "./commands/ListNetworkAnalyzerConfigurationsCommand";
import {
  ListPartnerAccountsCommandInput,
  ListPartnerAccountsCommandOutput,
} from "./commands/ListPartnerAccountsCommand";
import {
  ListPositionConfigurationsCommandInput,
  ListPositionConfigurationsCommandOutput,
} from "./commands/ListPositionConfigurationsCommand";
import { ListQueuedMessagesCommandInput, ListQueuedMessagesCommandOutput } from "./commands/ListQueuedMessagesCommand";
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
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "./commands/ListWirelessGatewaysCommand";
import {
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
} from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import {
  PutPositionConfigurationCommandInput,
  PutPositionConfigurationCommandOutput,
} from "./commands/PutPositionConfigurationCommand";
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
  SendDataToMulticastGroupCommandInput,
  SendDataToMulticastGroupCommandOutput,
} from "./commands/SendDataToMulticastGroupCommand";
import {
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
} from "./commands/SendDataToWirelessDeviceCommand";
import {
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput,
} from "./commands/StartBulkAssociateWirelessDeviceWithMulticastGroupCommand";
import {
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
} from "./commands/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand";
import { StartFuotaTaskCommandInput, StartFuotaTaskCommandOutput } from "./commands/StartFuotaTaskCommand";
import {
  StartMulticastGroupSessionCommandInput,
  StartMulticastGroupSessionCommandOutput,
} from "./commands/StartMulticastGroupSessionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput } from "./commands/TestWirelessDeviceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "./commands/UpdateDestinationCommand";
import {
  UpdateEventConfigurationByResourceTypesCommandInput,
  UpdateEventConfigurationByResourceTypesCommandOutput,
} from "./commands/UpdateEventConfigurationByResourceTypesCommand";
import { UpdateFuotaTaskCommandInput, UpdateFuotaTaskCommandOutput } from "./commands/UpdateFuotaTaskCommand";
import {
  UpdateLogLevelsByResourceTypesCommandInput,
  UpdateLogLevelsByResourceTypesCommandOutput,
} from "./commands/UpdateLogLevelsByResourceTypesCommand";
import {
  UpdateMulticastGroupCommandInput,
  UpdateMulticastGroupCommandOutput,
} from "./commands/UpdateMulticastGroupCommand";
import {
  UpdateNetworkAnalyzerConfigurationCommandInput,
  UpdateNetworkAnalyzerConfigurationCommandOutput,
} from "./commands/UpdateNetworkAnalyzerConfigurationCommand";
import {
  UpdatePartnerAccountCommandInput,
  UpdatePartnerAccountCommandOutput,
} from "./commands/UpdatePartnerAccountCommand";
import { UpdatePositionCommandInput, UpdatePositionCommandOutput } from "./commands/UpdatePositionCommand";
import {
  UpdateResourceEventConfigurationCommandInput,
  UpdateResourceEventConfigurationCommandOutput,
} from "./commands/UpdateResourceEventConfigurationCommand";
import {
  UpdateResourcePositionCommandInput,
  UpdateResourcePositionCommandOutput,
} from "./commands/UpdateResourcePositionCommand";
import {
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
} from "./commands/UpdateWirelessDeviceCommand";
import {
  UpdateWirelessGatewayCommandInput,
  UpdateWirelessGatewayCommandOutput,
} from "./commands/UpdateWirelessGatewayCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateAwsAccountWithPartnerAccountCommandInput
  | AssociateMulticastGroupWithFuotaTaskCommandInput
  | AssociateWirelessDeviceWithFuotaTaskCommandInput
  | AssociateWirelessDeviceWithMulticastGroupCommandInput
  | AssociateWirelessDeviceWithThingCommandInput
  | AssociateWirelessGatewayWithCertificateCommandInput
  | AssociateWirelessGatewayWithThingCommandInput
  | CancelMulticastGroupSessionCommandInput
  | CreateDestinationCommandInput
  | CreateDeviceProfileCommandInput
  | CreateFuotaTaskCommandInput
  | CreateMulticastGroupCommandInput
  | CreateNetworkAnalyzerConfigurationCommandInput
  | CreateServiceProfileCommandInput
  | CreateWirelessDeviceCommandInput
  | CreateWirelessGatewayCommandInput
  | CreateWirelessGatewayTaskCommandInput
  | CreateWirelessGatewayTaskDefinitionCommandInput
  | DeleteDestinationCommandInput
  | DeleteDeviceProfileCommandInput
  | DeleteFuotaTaskCommandInput
  | DeleteMulticastGroupCommandInput
  | DeleteNetworkAnalyzerConfigurationCommandInput
  | DeleteQueuedMessagesCommandInput
  | DeleteServiceProfileCommandInput
  | DeleteWirelessDeviceCommandInput
  | DeleteWirelessGatewayCommandInput
  | DeleteWirelessGatewayTaskCommandInput
  | DeleteWirelessGatewayTaskDefinitionCommandInput
  | DisassociateAwsAccountFromPartnerAccountCommandInput
  | DisassociateMulticastGroupFromFuotaTaskCommandInput
  | DisassociateWirelessDeviceFromFuotaTaskCommandInput
  | DisassociateWirelessDeviceFromMulticastGroupCommandInput
  | DisassociateWirelessDeviceFromThingCommandInput
  | DisassociateWirelessGatewayFromCertificateCommandInput
  | DisassociateWirelessGatewayFromThingCommandInput
  | GetDestinationCommandInput
  | GetDeviceProfileCommandInput
  | GetEventConfigurationByResourceTypesCommandInput
  | GetFuotaTaskCommandInput
  | GetLogLevelsByResourceTypesCommandInput
  | GetMulticastGroupCommandInput
  | GetMulticastGroupSessionCommandInput
  | GetNetworkAnalyzerConfigurationCommandInput
  | GetPartnerAccountCommandInput
  | GetPositionCommandInput
  | GetPositionConfigurationCommandInput
  | GetPositionEstimateCommandInput
  | GetResourceEventConfigurationCommandInput
  | GetResourceLogLevelCommandInput
  | GetResourcePositionCommandInput
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
  | ListEventConfigurationsCommandInput
  | ListFuotaTasksCommandInput
  | ListMulticastGroupsByFuotaTaskCommandInput
  | ListMulticastGroupsCommandInput
  | ListNetworkAnalyzerConfigurationsCommandInput
  | ListPartnerAccountsCommandInput
  | ListPositionConfigurationsCommandInput
  | ListQueuedMessagesCommandInput
  | ListServiceProfilesCommandInput
  | ListTagsForResourceCommandInput
  | ListWirelessDevicesCommandInput
  | ListWirelessGatewayTaskDefinitionsCommandInput
  | ListWirelessGatewaysCommandInput
  | PutPositionConfigurationCommandInput
  | PutResourceLogLevelCommandInput
  | ResetAllResourceLogLevelsCommandInput
  | ResetResourceLogLevelCommandInput
  | SendDataToMulticastGroupCommandInput
  | SendDataToWirelessDeviceCommandInput
  | StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput
  | StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput
  | StartFuotaTaskCommandInput
  | StartMulticastGroupSessionCommandInput
  | TagResourceCommandInput
  | TestWirelessDeviceCommandInput
  | UntagResourceCommandInput
  | UpdateDestinationCommandInput
  | UpdateEventConfigurationByResourceTypesCommandInput
  | UpdateFuotaTaskCommandInput
  | UpdateLogLevelsByResourceTypesCommandInput
  | UpdateMulticastGroupCommandInput
  | UpdateNetworkAnalyzerConfigurationCommandInput
  | UpdatePartnerAccountCommandInput
  | UpdatePositionCommandInput
  | UpdateResourceEventConfigurationCommandInput
  | UpdateResourcePositionCommandInput
  | UpdateWirelessDeviceCommandInput
  | UpdateWirelessGatewayCommandInput;

export type ServiceOutputTypes =
  | AssociateAwsAccountWithPartnerAccountCommandOutput
  | AssociateMulticastGroupWithFuotaTaskCommandOutput
  | AssociateWirelessDeviceWithFuotaTaskCommandOutput
  | AssociateWirelessDeviceWithMulticastGroupCommandOutput
  | AssociateWirelessDeviceWithThingCommandOutput
  | AssociateWirelessGatewayWithCertificateCommandOutput
  | AssociateWirelessGatewayWithThingCommandOutput
  | CancelMulticastGroupSessionCommandOutput
  | CreateDestinationCommandOutput
  | CreateDeviceProfileCommandOutput
  | CreateFuotaTaskCommandOutput
  | CreateMulticastGroupCommandOutput
  | CreateNetworkAnalyzerConfigurationCommandOutput
  | CreateServiceProfileCommandOutput
  | CreateWirelessDeviceCommandOutput
  | CreateWirelessGatewayCommandOutput
  | CreateWirelessGatewayTaskCommandOutput
  | CreateWirelessGatewayTaskDefinitionCommandOutput
  | DeleteDestinationCommandOutput
  | DeleteDeviceProfileCommandOutput
  | DeleteFuotaTaskCommandOutput
  | DeleteMulticastGroupCommandOutput
  | DeleteNetworkAnalyzerConfigurationCommandOutput
  | DeleteQueuedMessagesCommandOutput
  | DeleteServiceProfileCommandOutput
  | DeleteWirelessDeviceCommandOutput
  | DeleteWirelessGatewayCommandOutput
  | DeleteWirelessGatewayTaskCommandOutput
  | DeleteWirelessGatewayTaskDefinitionCommandOutput
  | DisassociateAwsAccountFromPartnerAccountCommandOutput
  | DisassociateMulticastGroupFromFuotaTaskCommandOutput
  | DisassociateWirelessDeviceFromFuotaTaskCommandOutput
  | DisassociateWirelessDeviceFromMulticastGroupCommandOutput
  | DisassociateWirelessDeviceFromThingCommandOutput
  | DisassociateWirelessGatewayFromCertificateCommandOutput
  | DisassociateWirelessGatewayFromThingCommandOutput
  | GetDestinationCommandOutput
  | GetDeviceProfileCommandOutput
  | GetEventConfigurationByResourceTypesCommandOutput
  | GetFuotaTaskCommandOutput
  | GetLogLevelsByResourceTypesCommandOutput
  | GetMulticastGroupCommandOutput
  | GetMulticastGroupSessionCommandOutput
  | GetNetworkAnalyzerConfigurationCommandOutput
  | GetPartnerAccountCommandOutput
  | GetPositionCommandOutput
  | GetPositionConfigurationCommandOutput
  | GetPositionEstimateCommandOutput
  | GetResourceEventConfigurationCommandOutput
  | GetResourceLogLevelCommandOutput
  | GetResourcePositionCommandOutput
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
  | ListEventConfigurationsCommandOutput
  | ListFuotaTasksCommandOutput
  | ListMulticastGroupsByFuotaTaskCommandOutput
  | ListMulticastGroupsCommandOutput
  | ListNetworkAnalyzerConfigurationsCommandOutput
  | ListPartnerAccountsCommandOutput
  | ListPositionConfigurationsCommandOutput
  | ListQueuedMessagesCommandOutput
  | ListServiceProfilesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWirelessDevicesCommandOutput
  | ListWirelessGatewayTaskDefinitionsCommandOutput
  | ListWirelessGatewaysCommandOutput
  | PutPositionConfigurationCommandOutput
  | PutResourceLogLevelCommandOutput
  | ResetAllResourceLogLevelsCommandOutput
  | ResetResourceLogLevelCommandOutput
  | SendDataToMulticastGroupCommandOutput
  | SendDataToWirelessDeviceCommandOutput
  | StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput
  | StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput
  | StartFuotaTaskCommandOutput
  | StartMulticastGroupSessionCommandOutput
  | TagResourceCommandOutput
  | TestWirelessDeviceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDestinationCommandOutput
  | UpdateEventConfigurationByResourceTypesCommandOutput
  | UpdateFuotaTaskCommandOutput
  | UpdateLogLevelsByResourceTypesCommandOutput
  | UpdateMulticastGroupCommandOutput
  | UpdateNetworkAnalyzerConfigurationCommandOutput
  | UpdatePartnerAccountCommandOutput
  | UpdatePositionCommandOutput
  | UpdateResourceEventConfigurationCommandOutput
  | UpdateResourcePositionCommandOutput
  | UpdateWirelessDeviceCommandOutput
  | UpdateWirelessGatewayCommandOutput;

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

type IoTWirelessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IoTWirelessClient class constructor that set the region, credentials and other options.
 */
export interface IoTWirelessClientConfig extends IoTWirelessClientConfigType {}

type IoTWirelessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IoTWirelessClient class. This is resolved and normalized from the {@link IoTWirelessClientConfig | constructor configuration interface}.
 */
export interface IoTWirelessClientResolvedConfig extends IoTWirelessClientResolvedConfigType {}

/**
 * <p>AWS IoT Wireless provides bi-directional communication between internet-connected wireless
 * 	        devices and the AWS Cloud. To onboard both LoRaWAN and Sidewalk devices to AWS IoT, use the
 * 	        IoT Wireless API. These wireless devices use the Low Power Wide Area Networking (LPWAN)
 * 	        communication protocol to communicate with AWS IoT.</p>
 * 	        <p>Using the API, you can perform create, read, update, and delete operations for your wireless
 * 	        devices, gateways, destinations, and profiles. After onboarding your devices, you
 * 	        can use the API operations to set log levels and monitor your devices with CloudWatch.</p>
 * 	        <p>You can also use the API operations to create multicast groups and schedule a multicast session for
 * 	        sending a downlink message to devices in the group. By using Firmware Updates Over-The-Air
 * 	        (FUOTA) API operations, you can create a FUOTA task and schedule a session to update the firmware
 * 	        of individual devices or an entire group of devices in a multicast group.</p>
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
