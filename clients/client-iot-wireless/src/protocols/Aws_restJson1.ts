// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
} from "../commands/AssociateAwsAccountWithPartnerAccountCommand";
import {
  AssociateMulticastGroupWithFuotaTaskCommandInput,
  AssociateMulticastGroupWithFuotaTaskCommandOutput,
} from "../commands/AssociateMulticastGroupWithFuotaTaskCommand";
import {
  AssociateWirelessDeviceWithFuotaTaskCommandInput,
  AssociateWirelessDeviceWithFuotaTaskCommandOutput,
} from "../commands/AssociateWirelessDeviceWithFuotaTaskCommand";
import {
  AssociateWirelessDeviceWithMulticastGroupCommandInput,
  AssociateWirelessDeviceWithMulticastGroupCommandOutput,
} from "../commands/AssociateWirelessDeviceWithMulticastGroupCommand";
import {
  AssociateWirelessDeviceWithThingCommandInput,
  AssociateWirelessDeviceWithThingCommandOutput,
} from "../commands/AssociateWirelessDeviceWithThingCommand";
import {
  AssociateWirelessGatewayWithCertificateCommandInput,
  AssociateWirelessGatewayWithCertificateCommandOutput,
} from "../commands/AssociateWirelessGatewayWithCertificateCommand";
import {
  AssociateWirelessGatewayWithThingCommandInput,
  AssociateWirelessGatewayWithThingCommandOutput,
} from "../commands/AssociateWirelessGatewayWithThingCommand";
import {
  CancelMulticastGroupSessionCommandInput,
  CancelMulticastGroupSessionCommandOutput,
} from "../commands/CancelMulticastGroupSessionCommand";
import { CreateDestinationCommandInput, CreateDestinationCommandOutput } from "../commands/CreateDestinationCommand";
import {
  CreateDeviceProfileCommandInput,
  CreateDeviceProfileCommandOutput,
} from "../commands/CreateDeviceProfileCommand";
import { CreateFuotaTaskCommandInput, CreateFuotaTaskCommandOutput } from "../commands/CreateFuotaTaskCommand";
import {
  CreateMulticastGroupCommandInput,
  CreateMulticastGroupCommandOutput,
} from "../commands/CreateMulticastGroupCommand";
import {
  CreateNetworkAnalyzerConfigurationCommandInput,
  CreateNetworkAnalyzerConfigurationCommandOutput,
} from "../commands/CreateNetworkAnalyzerConfigurationCommand";
import {
  CreateServiceProfileCommandInput,
  CreateServiceProfileCommandOutput,
} from "../commands/CreateServiceProfileCommand";
import {
  CreateWirelessDeviceCommandInput,
  CreateWirelessDeviceCommandOutput,
} from "../commands/CreateWirelessDeviceCommand";
import {
  CreateWirelessGatewayCommandInput,
  CreateWirelessGatewayCommandOutput,
} from "../commands/CreateWirelessGatewayCommand";
import {
  CreateWirelessGatewayTaskCommandInput,
  CreateWirelessGatewayTaskCommandOutput,
} from "../commands/CreateWirelessGatewayTaskCommand";
import {
  CreateWirelessGatewayTaskDefinitionCommandInput,
  CreateWirelessGatewayTaskDefinitionCommandOutput,
} from "../commands/CreateWirelessGatewayTaskDefinitionCommand";
import { DeleteDestinationCommandInput, DeleteDestinationCommandOutput } from "../commands/DeleteDestinationCommand";
import {
  DeleteDeviceProfileCommandInput,
  DeleteDeviceProfileCommandOutput,
} from "../commands/DeleteDeviceProfileCommand";
import { DeleteFuotaTaskCommandInput, DeleteFuotaTaskCommandOutput } from "../commands/DeleteFuotaTaskCommand";
import {
  DeleteMulticastGroupCommandInput,
  DeleteMulticastGroupCommandOutput,
} from "../commands/DeleteMulticastGroupCommand";
import {
  DeleteNetworkAnalyzerConfigurationCommandInput,
  DeleteNetworkAnalyzerConfigurationCommandOutput,
} from "../commands/DeleteNetworkAnalyzerConfigurationCommand";
import {
  DeleteQueuedMessagesCommandInput,
  DeleteQueuedMessagesCommandOutput,
} from "../commands/DeleteQueuedMessagesCommand";
import {
  DeleteServiceProfileCommandInput,
  DeleteServiceProfileCommandOutput,
} from "../commands/DeleteServiceProfileCommand";
import {
  DeleteWirelessDeviceCommandInput,
  DeleteWirelessDeviceCommandOutput,
} from "../commands/DeleteWirelessDeviceCommand";
import {
  DeleteWirelessDeviceImportTaskCommandInput,
  DeleteWirelessDeviceImportTaskCommandOutput,
} from "../commands/DeleteWirelessDeviceImportTaskCommand";
import {
  DeleteWirelessGatewayCommandInput,
  DeleteWirelessGatewayCommandOutput,
} from "../commands/DeleteWirelessGatewayCommand";
import {
  DeleteWirelessGatewayTaskCommandInput,
  DeleteWirelessGatewayTaskCommandOutput,
} from "../commands/DeleteWirelessGatewayTaskCommand";
import {
  DeleteWirelessGatewayTaskDefinitionCommandInput,
  DeleteWirelessGatewayTaskDefinitionCommandOutput,
} from "../commands/DeleteWirelessGatewayTaskDefinitionCommand";
import {
  DeregisterWirelessDeviceCommandInput,
  DeregisterWirelessDeviceCommandOutput,
} from "../commands/DeregisterWirelessDeviceCommand";
import {
  DisassociateAwsAccountFromPartnerAccountCommandInput,
  DisassociateAwsAccountFromPartnerAccountCommandOutput,
} from "../commands/DisassociateAwsAccountFromPartnerAccountCommand";
import {
  DisassociateMulticastGroupFromFuotaTaskCommandInput,
  DisassociateMulticastGroupFromFuotaTaskCommandOutput,
} from "../commands/DisassociateMulticastGroupFromFuotaTaskCommand";
import {
  DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  DisassociateWirelessDeviceFromFuotaTaskCommandOutput,
} from "../commands/DisassociateWirelessDeviceFromFuotaTaskCommand";
import {
  DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  DisassociateWirelessDeviceFromMulticastGroupCommandOutput,
} from "../commands/DisassociateWirelessDeviceFromMulticastGroupCommand";
import {
  DisassociateWirelessDeviceFromThingCommandInput,
  DisassociateWirelessDeviceFromThingCommandOutput,
} from "../commands/DisassociateWirelessDeviceFromThingCommand";
import {
  DisassociateWirelessGatewayFromCertificateCommandInput,
  DisassociateWirelessGatewayFromCertificateCommandOutput,
} from "../commands/DisassociateWirelessGatewayFromCertificateCommand";
import {
  DisassociateWirelessGatewayFromThingCommandInput,
  DisassociateWirelessGatewayFromThingCommandOutput,
} from "../commands/DisassociateWirelessGatewayFromThingCommand";
import { GetDestinationCommandInput, GetDestinationCommandOutput } from "../commands/GetDestinationCommand";
import { GetDeviceProfileCommandInput, GetDeviceProfileCommandOutput } from "../commands/GetDeviceProfileCommand";
import {
  GetEventConfigurationByResourceTypesCommandInput,
  GetEventConfigurationByResourceTypesCommandOutput,
} from "../commands/GetEventConfigurationByResourceTypesCommand";
import { GetFuotaTaskCommandInput, GetFuotaTaskCommandOutput } from "../commands/GetFuotaTaskCommand";
import {
  GetLogLevelsByResourceTypesCommandInput,
  GetLogLevelsByResourceTypesCommandOutput,
} from "../commands/GetLogLevelsByResourceTypesCommand";
import { GetMulticastGroupCommandInput, GetMulticastGroupCommandOutput } from "../commands/GetMulticastGroupCommand";
import {
  GetMulticastGroupSessionCommandInput,
  GetMulticastGroupSessionCommandOutput,
} from "../commands/GetMulticastGroupSessionCommand";
import {
  GetNetworkAnalyzerConfigurationCommandInput,
  GetNetworkAnalyzerConfigurationCommandOutput,
} from "../commands/GetNetworkAnalyzerConfigurationCommand";
import { GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput } from "../commands/GetPartnerAccountCommand";
import { GetPositionCommandInput, GetPositionCommandOutput } from "../commands/GetPositionCommand";
import {
  GetPositionConfigurationCommandInput,
  GetPositionConfigurationCommandOutput,
} from "../commands/GetPositionConfigurationCommand";
import {
  GetPositionEstimateCommandInput,
  GetPositionEstimateCommandOutput,
} from "../commands/GetPositionEstimateCommand";
import {
  GetResourceEventConfigurationCommandInput,
  GetResourceEventConfigurationCommandOutput,
} from "../commands/GetResourceEventConfigurationCommand";
import {
  GetResourceLogLevelCommandInput,
  GetResourceLogLevelCommandOutput,
} from "../commands/GetResourceLogLevelCommand";
import {
  GetResourcePositionCommandInput,
  GetResourcePositionCommandOutput,
} from "../commands/GetResourcePositionCommand";
import { GetServiceEndpointCommandInput, GetServiceEndpointCommandOutput } from "../commands/GetServiceEndpointCommand";
import { GetServiceProfileCommandInput, GetServiceProfileCommandOutput } from "../commands/GetServiceProfileCommand";
import { GetWirelessDeviceCommandInput, GetWirelessDeviceCommandOutput } from "../commands/GetWirelessDeviceCommand";
import {
  GetWirelessDeviceImportTaskCommandInput,
  GetWirelessDeviceImportTaskCommandOutput,
} from "../commands/GetWirelessDeviceImportTaskCommand";
import {
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
} from "../commands/GetWirelessDeviceStatisticsCommand";
import {
  GetWirelessGatewayCertificateCommandInput,
  GetWirelessGatewayCertificateCommandOutput,
} from "../commands/GetWirelessGatewayCertificateCommand";
import { GetWirelessGatewayCommandInput, GetWirelessGatewayCommandOutput } from "../commands/GetWirelessGatewayCommand";
import {
  GetWirelessGatewayFirmwareInformationCommandInput,
  GetWirelessGatewayFirmwareInformationCommandOutput,
} from "../commands/GetWirelessGatewayFirmwareInformationCommand";
import {
  GetWirelessGatewayStatisticsCommandInput,
  GetWirelessGatewayStatisticsCommandOutput,
} from "../commands/GetWirelessGatewayStatisticsCommand";
import {
  GetWirelessGatewayTaskCommandInput,
  GetWirelessGatewayTaskCommandOutput,
} from "../commands/GetWirelessGatewayTaskCommand";
import {
  GetWirelessGatewayTaskDefinitionCommandInput,
  GetWirelessGatewayTaskDefinitionCommandOutput,
} from "../commands/GetWirelessGatewayTaskDefinitionCommand";
import { ListDestinationsCommandInput, ListDestinationsCommandOutput } from "../commands/ListDestinationsCommand";
import { ListDeviceProfilesCommandInput, ListDeviceProfilesCommandOutput } from "../commands/ListDeviceProfilesCommand";
import {
  ListDevicesForWirelessDeviceImportTaskCommandInput,
  ListDevicesForWirelessDeviceImportTaskCommandOutput,
} from "../commands/ListDevicesForWirelessDeviceImportTaskCommand";
import {
  ListEventConfigurationsCommandInput,
  ListEventConfigurationsCommandOutput,
} from "../commands/ListEventConfigurationsCommand";
import { ListFuotaTasksCommandInput, ListFuotaTasksCommandOutput } from "../commands/ListFuotaTasksCommand";
import {
  ListMulticastGroupsByFuotaTaskCommandInput,
  ListMulticastGroupsByFuotaTaskCommandOutput,
} from "../commands/ListMulticastGroupsByFuotaTaskCommand";
import {
  ListMulticastGroupsCommandInput,
  ListMulticastGroupsCommandOutput,
} from "../commands/ListMulticastGroupsCommand";
import {
  ListNetworkAnalyzerConfigurationsCommandInput,
  ListNetworkAnalyzerConfigurationsCommandOutput,
} from "../commands/ListNetworkAnalyzerConfigurationsCommand";
import {
  ListPartnerAccountsCommandInput,
  ListPartnerAccountsCommandOutput,
} from "../commands/ListPartnerAccountsCommand";
import {
  ListPositionConfigurationsCommandInput,
  ListPositionConfigurationsCommandOutput,
} from "../commands/ListPositionConfigurationsCommand";
import { ListQueuedMessagesCommandInput, ListQueuedMessagesCommandOutput } from "../commands/ListQueuedMessagesCommand";
import {
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput,
} from "../commands/ListServiceProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWirelessDeviceImportTasksCommandInput,
  ListWirelessDeviceImportTasksCommandOutput,
} from "../commands/ListWirelessDeviceImportTasksCommand";
import {
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "../commands/ListWirelessDevicesCommand";
import {
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "../commands/ListWirelessGatewaysCommand";
import {
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
} from "../commands/ListWirelessGatewayTaskDefinitionsCommand";
import {
  PutPositionConfigurationCommandInput,
  PutPositionConfigurationCommandOutput,
} from "../commands/PutPositionConfigurationCommand";
import {
  PutResourceLogLevelCommandInput,
  PutResourceLogLevelCommandOutput,
} from "../commands/PutResourceLogLevelCommand";
import {
  ResetAllResourceLogLevelsCommandInput,
  ResetAllResourceLogLevelsCommandOutput,
} from "../commands/ResetAllResourceLogLevelsCommand";
import {
  ResetResourceLogLevelCommandInput,
  ResetResourceLogLevelCommandOutput,
} from "../commands/ResetResourceLogLevelCommand";
import {
  SendDataToMulticastGroupCommandInput,
  SendDataToMulticastGroupCommandOutput,
} from "../commands/SendDataToMulticastGroupCommand";
import {
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
} from "../commands/SendDataToWirelessDeviceCommand";
import {
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput,
} from "../commands/StartBulkAssociateWirelessDeviceWithMulticastGroupCommand";
import {
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput,
} from "../commands/StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand";
import { StartFuotaTaskCommandInput, StartFuotaTaskCommandOutput } from "../commands/StartFuotaTaskCommand";
import {
  StartMulticastGroupSessionCommandInput,
  StartMulticastGroupSessionCommandOutput,
} from "../commands/StartMulticastGroupSessionCommand";
import {
  StartSingleWirelessDeviceImportTaskCommandInput,
  StartSingleWirelessDeviceImportTaskCommandOutput,
} from "../commands/StartSingleWirelessDeviceImportTaskCommand";
import {
  StartWirelessDeviceImportTaskCommandInput,
  StartWirelessDeviceImportTaskCommandOutput,
} from "../commands/StartWirelessDeviceImportTaskCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { TestWirelessDeviceCommandInput, TestWirelessDeviceCommandOutput } from "../commands/TestWirelessDeviceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDestinationCommandInput, UpdateDestinationCommandOutput } from "../commands/UpdateDestinationCommand";
import {
  UpdateEventConfigurationByResourceTypesCommandInput,
  UpdateEventConfigurationByResourceTypesCommandOutput,
} from "../commands/UpdateEventConfigurationByResourceTypesCommand";
import { UpdateFuotaTaskCommandInput, UpdateFuotaTaskCommandOutput } from "../commands/UpdateFuotaTaskCommand";
import {
  UpdateLogLevelsByResourceTypesCommandInput,
  UpdateLogLevelsByResourceTypesCommandOutput,
} from "../commands/UpdateLogLevelsByResourceTypesCommand";
import {
  UpdateMulticastGroupCommandInput,
  UpdateMulticastGroupCommandOutput,
} from "../commands/UpdateMulticastGroupCommand";
import {
  UpdateNetworkAnalyzerConfigurationCommandInput,
  UpdateNetworkAnalyzerConfigurationCommandOutput,
} from "../commands/UpdateNetworkAnalyzerConfigurationCommand";
import {
  UpdatePartnerAccountCommandInput,
  UpdatePartnerAccountCommandOutput,
} from "../commands/UpdatePartnerAccountCommand";
import { UpdatePositionCommandInput, UpdatePositionCommandOutput } from "../commands/UpdatePositionCommand";
import {
  UpdateResourceEventConfigurationCommandInput,
  UpdateResourceEventConfigurationCommandOutput,
} from "../commands/UpdateResourceEventConfigurationCommand";
import {
  UpdateResourcePositionCommandInput,
  UpdateResourcePositionCommandOutput,
} from "../commands/UpdateResourcePositionCommand";
import {
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
} from "../commands/UpdateWirelessDeviceCommand";
import {
  UpdateWirelessDeviceImportTaskCommandInput,
  UpdateWirelessDeviceImportTaskCommandOutput,
} from "../commands/UpdateWirelessDeviceImportTaskCommand";
import {
  UpdateWirelessGatewayCommandInput,
  UpdateWirelessGatewayCommandOutput,
} from "../commands/UpdateWirelessGatewayCommand";
import { IoTWirelessServiceException as __BaseException } from "../models/IoTWirelessServiceException";
import {
  AbpV1_0_x,
  AbpV1_1,
  AccessDeniedException,
  Accuracy,
  ApplicationConfig,
  Beaconing,
  CdmaLocalId,
  CdmaNmrObj,
  CdmaObj,
  CellTowers,
  CertificateList,
  ConflictException,
  ConnectionStatusEventConfiguration,
  ConnectionStatusResourceTypeEventConfiguration,
  DakCertificateMetadata,
  Destinations,
  DeviceProfile,
  DeviceRegistrationStateEventConfiguration,
  DeviceRegistrationStateResourceTypeEventConfiguration,
  DownlinkQueueMessage,
  EventConfigurationItem,
  EventNotificationItemConfigurations,
  FPorts,
  FuotaTask,
  GatewayListItem,
  GlobalIdentity,
  Gnss,
  GsmLocalId,
  GsmNmrObj,
  GsmObj,
  ImportedSidewalkDevice,
  ImportedWirelessDevice,
  InternalServerException,
  Ip,
  JoinEventConfiguration,
  JoinResourceTypeEventConfiguration,
  LoRaWANConnectionStatusEventNotificationConfigurations,
  LoRaWANConnectionStatusResourceTypeEventConfiguration,
  LoRaWANDevice,
  LoRaWANDeviceMetadata,
  LoRaWANDeviceProfile,
  LoRaWANFuotaTask,
  LoRaWANFuotaTaskGetInfo,
  LoRaWANGateway,
  LoRaWANGatewayCurrentVersion,
  LoRaWANGatewayMetadata,
  LoRaWANGatewayVersion,
  LoRaWANGetServiceProfileInfo,
  LoRaWANJoinEventNotificationConfigurations,
  LoRaWANJoinResourceTypeEventConfiguration,
  LoRaWANListDevice,
  LoRaWANMulticast,
  LoRaWANMulticastGet,
  LoRaWANMulticastSession,
  LoRaWANSendDataToDevice,
  LoRaWANServiceProfile,
  LoRaWANUpdateGatewayTaskCreate,
  LteLocalId,
  LteNmrObj,
  LteObj,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  MulticastGroup,
  MulticastGroupByFuotaTask,
  NetworkAnalyzerConfigurations,
  OtaaV1_0_x,
  OtaaV1_1,
  ParticipatingGateways,
  PositionConfigurationItem,
  Positioning,
  PositionSolverDetails,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  ResourceNotFoundException,
  SemtechGnssDetail,
  ServiceProfile,
  SessionKeysAbpV1_0_x,
  SessionKeysAbpV1_1,
  SidewalkAccountInfo,
  SidewalkAccountInfoWithFingerprint,
  SidewalkCreateDeviceProfile,
  SidewalkCreateWirelessDevice,
  SidewalkDevice,
  SidewalkDeviceMetadata,
  SidewalkEventNotificationConfigurations,
  SidewalkGetDeviceProfile,
  SidewalkGetStartImportInfo,
  SidewalkListDevice,
  SidewalkResourceTypeEventConfiguration,
  Tag,
  TdscdmaLocalId,
  TdscdmaNmrObj,
  TdscdmaObj,
  ThrottlingException,
  TraceContent,
  UpdateWirelessGatewayTaskCreate,
  ValidationException,
  WcdmaLocalId,
  WcdmaNmrObj,
  WcdmaObj,
  WiFiAccessPoint,
  WirelessDeviceEventLogOption,
  WirelessDeviceImportTask,
  WirelessDeviceLogOption,
  WirelessGatewayEventLogOption,
  WirelessGatewayLogOption,
} from "../models/models_0";
import {
  LoRaWANMulticastMetadata,
  LoRaWANStartFuotaTask,
  LoRaWANUpdateDevice,
  LoRaWANUpdateGatewayTaskEntry,
  MulticastWirelessMetadata,
  PositionSolverConfigurations,
  SemtechGnssConfiguration,
  SidewalkSendDataToDevice,
  SidewalkSingleStartImportInfo,
  SidewalkStartImportInfo,
  SidewalkUpdateAccount,
  SidewalkUpdateImportInfo,
  TooManyTagsException,
  UpdateAbpV1_0_x,
  UpdateAbpV1_1,
  UpdateFPorts,
  UpdateWirelessGatewayTaskEntry,
  WirelessDeviceStatistics,
  WirelessGatewayStatistics,
  WirelessMetadata,
} from "../models/models_1";

/**
 * serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand
 */
export const se_AssociateAwsAccountWithPartnerAccountCommand = async (
  input: AssociateAwsAccountWithPartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/partner-accounts";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkAccountInfo(input.Sidewalk, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommand
 */
export const se_AssociateMulticastGroupWithFuotaTaskCommand = async (
  input: AssociateMulticastGroupWithFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}/multicast-group";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.MulticastGroupId != null && { MulticastGroupId: input.MulticastGroupId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand
 */
export const se_AssociateWirelessDeviceWithFuotaTaskCommand = async (
  input: AssociateWirelessDeviceWithFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}/wireless-device";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.WirelessDeviceId != null && { WirelessDeviceId: input.WirelessDeviceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommand
 */
export const se_AssociateWirelessDeviceWithMulticastGroupCommand = async (
  input: AssociateWirelessDeviceWithMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/wireless-device";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.WirelessDeviceId != null && { WirelessDeviceId: input.WirelessDeviceId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateWirelessDeviceWithThingCommand
 */
export const se_AssociateWirelessDeviceWithThingCommand = async (
  input: AssociateWirelessDeviceWithThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}/thing";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ThingArn != null && { ThingArn: input.ThingArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand
 */
export const se_AssociateWirelessGatewayWithCertificateCommand = async (
  input: AssociateWirelessGatewayWithCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/certificate";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.IotCertificateId != null && { IotCertificateId: input.IotCertificateId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssociateWirelessGatewayWithThingCommand
 */
export const se_AssociateWirelessGatewayWithThingCommand = async (
  input: AssociateWirelessGatewayWithThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/thing";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ThingArn != null && { ThingArn: input.ThingArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CancelMulticastGroupSessionCommand
 */
export const se_CancelMulticastGroupSessionCommand = async (
  input: CancelMulticastGroupSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDestinationCommand
 */
export const se_CreateDestinationCommand = async (
  input: CreateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/destinations";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.ExpressionType != null && { ExpressionType: input.ExpressionType }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDeviceProfileCommand
 */
export const se_CreateDeviceProfileCommand = async (
  input: CreateDeviceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device-profiles";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANDeviceProfile(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkCreateDeviceProfile(input.Sidewalk, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateFuotaTaskCommand
 */
export const se_CreateFuotaTaskCommand = async (
  input: CreateFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FirmwareUpdateImage != null && { FirmwareUpdateImage: input.FirmwareUpdateImage }),
    ...(input.FirmwareUpdateRole != null && { FirmwareUpdateRole: input.FirmwareUpdateRole }),
    ...(input.FragmentIntervalMS != null && { FragmentIntervalMS: input.FragmentIntervalMS }),
    ...(input.FragmentSizeBytes != null && { FragmentSizeBytes: input.FragmentSizeBytes }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANFuotaTask(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedundancyPercent != null && { RedundancyPercent: input.RedundancyPercent }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateMulticastGroupCommand
 */
export const se_CreateMulticastGroupCommand = async (
  input: CreateMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANMulticast(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand
 */
export const se_CreateNetworkAnalyzerConfigurationCommand = async (
  input: CreateNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/network-analyzer-configurations";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TraceContent != null && { TraceContent: se_TraceContent(input.TraceContent, context) }),
    ...(input.WirelessDevices != null && { WirelessDevices: se_WirelessDeviceList(input.WirelessDevices, context) }),
    ...(input.WirelessGateways != null && {
      WirelessGateways: se_WirelessGatewayList(input.WirelessGateways, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateServiceProfileCommand
 */
export const se_CreateServiceProfileCommand = async (
  input: CreateServiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-profiles";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANServiceProfile(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWirelessDeviceCommand
 */
export const se_CreateWirelessDeviceCommand = async (
  input: CreateWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DestinationName != null && { DestinationName: input.DestinationName }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANDevice(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Positioning != null && { Positioning: input.Positioning }),
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkCreateWirelessDevice(input.Sidewalk, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWirelessGatewayCommand
 */
export const se_CreateWirelessGatewayCommand = async (
  input: CreateWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANGateway(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWirelessGatewayTaskCommand
 */
export const se_CreateWirelessGatewayTaskCommand = async (
  input: CreateWirelessGatewayTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/tasks";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.WirelessGatewayTaskDefinitionId != null && {
      WirelessGatewayTaskDefinitionId: input.WirelessGatewayTaskDefinitionId,
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand
 */
export const se_CreateWirelessGatewayTaskDefinitionCommand = async (
  input: CreateWirelessGatewayTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateway-task-definitions";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoCreateTasks != null && { AutoCreateTasks: input.AutoCreateTasks }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Update != null && { Update: se_UpdateWirelessGatewayTaskCreate(input.Update, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDestinationCommand
 */
export const se_DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/destinations/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDeviceProfileCommand
 */
export const se_DeleteDeviceProfileCommand = async (
  input: DeleteDeviceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device-profiles/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteFuotaTaskCommand
 */
export const se_DeleteFuotaTaskCommand = async (
  input: DeleteFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteMulticastGroupCommand
 */
export const se_DeleteMulticastGroupCommand = async (
  input: DeleteMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommand
 */
export const se_DeleteNetworkAnalyzerConfigurationCommand = async (
  input: DeleteNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/network-analyzer-configurations/{ConfigurationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationName",
    () => input.ConfigurationName!,
    "{ConfigurationName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteQueuedMessagesCommand
 */
export const se_DeleteQueuedMessagesCommand = async (
  input: DeleteQueuedMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}/data";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    messageId: [, __expectNonNull(input.MessageId!, `MessageId`)],
    WirelessDeviceType: [, input.WirelessDeviceType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteServiceProfileCommand
 */
export const se_DeleteServiceProfileCommand = async (
  input: DeleteServiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-profiles/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWirelessDeviceCommand
 */
export const se_DeleteWirelessDeviceCommand = async (
  input: DeleteWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWirelessDeviceImportTaskCommand
 */
export const se_DeleteWirelessDeviceImportTaskCommand = async (
  input: DeleteWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_device_import_task/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWirelessGatewayCommand
 */
export const se_DeleteWirelessGatewayCommand = async (
  input: DeleteWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWirelessGatewayTaskCommand
 */
export const se_DeleteWirelessGatewayTaskCommand = async (
  input: DeleteWirelessGatewayTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/tasks";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand
 */
export const se_DeleteWirelessGatewayTaskDefinitionCommand = async (
  input: DeleteWirelessGatewayTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateway-task-definitions/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeregisterWirelessDeviceCommand
 */
export const se_DeregisterWirelessDeviceCommand = async (
  input: DeregisterWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Identifier}/deregister";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    WirelessDeviceType: [, input.WirelessDeviceType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand
 */
export const se_DisassociateAwsAccountFromPartnerAccountCommand = async (
  input: DisassociateAwsAccountFromPartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/partner-accounts/{PartnerAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PartnerAccountId",
    () => input.PartnerAccountId!,
    "{PartnerAccountId}",
    false
  );
  const query: any = map({
    partnerType: [, __expectNonNull(input.PartnerType!, `PartnerType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommand
 */
export const se_DisassociateMulticastGroupFromFuotaTaskCommand = async (
  input: DisassociateMulticastGroupFromFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "MulticastGroupId",
    () => input.MulticastGroupId!,
    "{MulticastGroupId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand
 */
export const se_DisassociateWirelessDeviceFromFuotaTaskCommand = async (
  input: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "WirelessDeviceId",
    () => input.WirelessDeviceId!,
    "{WirelessDeviceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const se_DisassociateWirelessDeviceFromMulticastGroupCommand = async (
  input: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "WirelessDeviceId",
    () => input.WirelessDeviceId!,
    "{WirelessDeviceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand
 */
export const se_DisassociateWirelessDeviceFromThingCommand = async (
  input: DisassociateWirelessDeviceFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}/thing";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand
 */
export const se_DisassociateWirelessGatewayFromCertificateCommand = async (
  input: DisassociateWirelessGatewayFromCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/certificate";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand
 */
export const se_DisassociateWirelessGatewayFromThingCommand = async (
  input: DisassociateWirelessGatewayFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/thing";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDestinationCommand
 */
export const se_GetDestinationCommand = async (
  input: GetDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/destinations/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDeviceProfileCommand
 */
export const se_GetDeviceProfileCommand = async (
  input: GetDeviceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device-profiles/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetEventConfigurationByResourceTypesCommand
 */
export const se_GetEventConfigurationByResourceTypesCommand = async (
  input: GetEventConfigurationByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-configurations-resource-types";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFuotaTaskCommand
 */
export const se_GetFuotaTaskCommand = async (
  input: GetFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLogLevelsByResourceTypesCommand
 */
export const se_GetLogLevelsByResourceTypesCommand = async (
  input: GetLogLevelsByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/log-levels";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetMulticastGroupCommand
 */
export const se_GetMulticastGroupCommand = async (
  input: GetMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetMulticastGroupSessionCommand
 */
export const se_GetMulticastGroupSessionCommand = async (
  input: GetMulticastGroupSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetNetworkAnalyzerConfigurationCommand
 */
export const se_GetNetworkAnalyzerConfigurationCommand = async (
  input: GetNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/network-analyzer-configurations/{ConfigurationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationName",
    () => input.ConfigurationName!,
    "{ConfigurationName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetPartnerAccountCommand
 */
export const se_GetPartnerAccountCommand = async (
  input: GetPartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/partner-accounts/{PartnerAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PartnerAccountId",
    () => input.PartnerAccountId!,
    "{PartnerAccountId}",
    false
  );
  const query: any = map({
    partnerType: [, __expectNonNull(input.PartnerType!, `PartnerType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetPositionCommand
 */
export const se_GetPositionCommand = async (
  input: GetPositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/positions/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetPositionConfigurationCommand
 */
export const se_GetPositionConfigurationCommand = async (
  input: GetPositionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/position-configurations/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetPositionEstimateCommand
 */
export const se_GetPositionEstimateCommand = async (
  input: GetPositionEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/position-estimate";
  let body: any;
  body = JSON.stringify({
    ...(input.CellTowers != null && { CellTowers: se_CellTowers(input.CellTowers, context) }),
    ...(input.Gnss != null && { Gnss: se_Gnss(input.Gnss, context) }),
    ...(input.Ip != null && { Ip: se_Ip(input.Ip, context) }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.WiFiAccessPoints != null && { WiFiAccessPoints: se_WiFiAccessPoints(input.WiFiAccessPoints, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourceEventConfigurationCommand
 */
export const se_GetResourceEventConfigurationCommand = async (
  input: GetResourceEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-configurations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    identifierType: [, __expectNonNull(input.IdentifierType!, `IdentifierType`)],
    partnerType: [, input.PartnerType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourceLogLevelCommand
 */
export const se_GetResourceLogLevelCommand = async (
  input: GetResourceLogLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/log-levels/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourcePositionCommand
 */
export const se_GetResourcePositionCommand = async (
  input: GetResourcePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-positions/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetServiceEndpointCommand
 */
export const se_GetServiceEndpointCommand = async (
  input: GetServiceEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-endpoint";
  const query: any = map({
    serviceType: [, input.ServiceType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetServiceProfileCommand
 */
export const se_GetServiceProfileCommand = async (
  input: GetServiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-profiles/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessDeviceCommand
 */
export const se_GetWirelessDeviceCommand = async (
  input: GetWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    identifierType: [, __expectNonNull(input.IdentifierType!, `IdentifierType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessDeviceImportTaskCommand
 */
export const se_GetWirelessDeviceImportTaskCommand = async (
  input: GetWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_device_import_task/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessDeviceStatisticsCommand
 */
export const se_GetWirelessDeviceStatisticsCommand = async (
  input: GetWirelessDeviceStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/wireless-devices/{WirelessDeviceId}/statistics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "WirelessDeviceId",
    () => input.WirelessDeviceId!,
    "{WirelessDeviceId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessGatewayCommand
 */
export const se_GetWirelessGatewayCommand = async (
  input: GetWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    identifierType: [, __expectNonNull(input.IdentifierType!, `IdentifierType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessGatewayCertificateCommand
 */
export const se_GetWirelessGatewayCertificateCommand = async (
  input: GetWirelessGatewayCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/certificate";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand
 */
export const se_GetWirelessGatewayFirmwareInformationCommand = async (
  input: GetWirelessGatewayFirmwareInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/wireless-gateways/{Id}/firmware-information";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessGatewayStatisticsCommand
 */
export const se_GetWirelessGatewayStatisticsCommand = async (
  input: GetWirelessGatewayStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/wireless-gateways/{WirelessGatewayId}/statistics";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "WirelessGatewayId",
    () => input.WirelessGatewayId!,
    "{WirelessGatewayId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessGatewayTaskCommand
 */
export const se_GetWirelessGatewayTaskCommand = async (
  input: GetWirelessGatewayTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}/tasks";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand
 */
export const se_GetWirelessGatewayTaskDefinitionCommand = async (
  input: GetWirelessGatewayTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateway-task-definitions/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListDestinationsCommand
 */
export const se_ListDestinationsCommand = async (
  input: ListDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/destinations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDeviceProfilesCommand
 */
export const se_ListDeviceProfilesCommand = async (
  input: ListDeviceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device-profiles";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    deviceProfileType: [, input.DeviceProfileType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDevicesForWirelessDeviceImportTaskCommand
 */
export const se_ListDevicesForWirelessDeviceImportTaskCommand = async (
  input: ListDevicesForWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_device_import_task";
  const query: any = map({
    id: [, __expectNonNull(input.Id!, `Id`)],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    status: [, input.Status!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListEventConfigurationsCommand
 */
export const se_ListEventConfigurationsCommand = async (
  input: ListEventConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-configurations";
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFuotaTasksCommand
 */
export const se_ListFuotaTasksCommand = async (
  input: ListFuotaTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListMulticastGroupsCommand
 */
export const se_ListMulticastGroupsCommand = async (
  input: ListMulticastGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListMulticastGroupsByFuotaTaskCommand
 */
export const se_ListMulticastGroupsByFuotaTaskCommand = async (
  input: ListMulticastGroupsByFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}/multicast-groups";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand
 */
export const se_ListNetworkAnalyzerConfigurationsCommand = async (
  input: ListNetworkAnalyzerConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/network-analyzer-configurations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPartnerAccountsCommand
 */
export const se_ListPartnerAccountsCommand = async (
  input: ListPartnerAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/partner-accounts";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPositionConfigurationsCommand
 */
export const se_ListPositionConfigurationsCommand = async (
  input: ListPositionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/position-configurations";
  const query: any = map({
    resourceType: [, input.ResourceType!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListQueuedMessagesCommand
 */
export const se_ListQueuedMessagesCommand = async (
  input: ListQueuedMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}/data";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    WirelessDeviceType: [, input.WirelessDeviceType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListServiceProfilesCommand
 */
export const se_ListServiceProfilesCommand = async (
  input: ListServiceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/service-profiles";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.ResourceArn!, `ResourceArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWirelessDeviceImportTasksCommand
 */
export const se_ListWirelessDeviceImportTasksCommand = async (
  input: ListWirelessDeviceImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_device_import_tasks";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWirelessDevicesCommand
 */
export const se_ListWirelessDevicesCommand = async (
  input: ListWirelessDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    destinationName: [, input.DestinationName!],
    deviceProfileId: [, input.DeviceProfileId!],
    serviceProfileId: [, input.ServiceProfileId!],
    wirelessDeviceType: [, input.WirelessDeviceType!],
    fuotaTaskId: [, input.FuotaTaskId!],
    multicastGroupId: [, input.MulticastGroupId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWirelessGatewaysCommand
 */
export const se_ListWirelessGatewaysCommand = async (
  input: ListWirelessGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand
 */
export const se_ListWirelessGatewayTaskDefinitionsCommand = async (
  input: ListWirelessGatewayTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateway-task-definitions";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
    taskDefinitionType: [, input.TaskDefinitionType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutPositionConfigurationCommand
 */
export const se_PutPositionConfigurationCommand = async (
  input: PutPositionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/position-configurations/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.Solvers != null && { Solvers: se_PositionSolverConfigurations(input.Solvers, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutResourceLogLevelCommand
 */
export const se_PutResourceLogLevelCommand = async (
  input: PutResourceLogLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/log-levels/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ResetAllResourceLogLevelsCommand
 */
export const se_ResetAllResourceLogLevelsCommand = async (
  input: ResetAllResourceLogLevelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/log-levels";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ResetResourceLogLevelCommand
 */
export const se_ResetResourceLogLevelCommand = async (
  input: ResetResourceLogLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/log-levels/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SendDataToMulticastGroupCommand
 */
export const se_SendDataToMulticastGroupCommand = async (
  input: SendDataToMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/data";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.PayloadData != null && { PayloadData: input.PayloadData }),
    ...(input.WirelessMetadata != null && {
      WirelessMetadata: se_MulticastWirelessMetadata(input.WirelessMetadata, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SendDataToWirelessDeviceCommand
 */
export const se_SendDataToWirelessDeviceCommand = async (
  input: SendDataToWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}/data";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.PayloadData != null && { PayloadData: input.PayloadData }),
    ...(input.TransmitMode != null && { TransmitMode: input.TransmitMode }),
    ...(input.WirelessMetadata != null && { WirelessMetadata: se_WirelessMetadata(input.WirelessMetadata, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand
 */
export const se_StartBulkAssociateWirelessDeviceWithMulticastGroupCommand = async (
  input: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/bulk";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const se_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand = async (
  input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/bulk";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.QueryString != null && { QueryString: input.QueryString }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartFuotaTaskCommand
 */
export const se_StartFuotaTaskCommand = async (
  input: StartFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANStartFuotaTask(input.LoRaWAN, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartMulticastGroupSessionCommand
 */
export const se_StartMulticastGroupSessionCommand = async (
  input: StartMulticastGroupSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}/session";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANMulticastSession(input.LoRaWAN, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartSingleWirelessDeviceImportTaskCommand
 */
export const se_StartSingleWirelessDeviceImportTaskCommand = async (
  input: StartSingleWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_single_device_import_task";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DestinationName != null && { DestinationName: input.DestinationName }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkSingleStartImportInfo(input.Sidewalk, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartWirelessDeviceImportTaskCommand
 */
export const se_StartWirelessDeviceImportTaskCommand = async (
  input: StartWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_device_import_task";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DestinationName != null && { DestinationName: input.DestinationName }),
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkStartImportInfo(input.Sidewalk, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.ResourceArn!, `ResourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1TestWirelessDeviceCommand
 */
export const se_TestWirelessDeviceCommand = async (
  input: TestWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}/test";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.ResourceArn!, `ResourceArn`)],
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDestinationCommand
 */
export const se_UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/destinations/{Name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.ExpressionType != null && { ExpressionType: input.ExpressionType }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateEventConfigurationByResourceTypesCommand
 */
export const se_UpdateEventConfigurationByResourceTypesCommand = async (
  input: UpdateEventConfigurationByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-configurations-resource-types";
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionStatus != null && {
      ConnectionStatus: se_ConnectionStatusResourceTypeEventConfiguration(input.ConnectionStatus, context),
    }),
    ...(input.DeviceRegistrationState != null && {
      DeviceRegistrationState: se_DeviceRegistrationStateResourceTypeEventConfiguration(
        input.DeviceRegistrationState,
        context
      ),
    }),
    ...(input.Join != null && { Join: se_JoinResourceTypeEventConfiguration(input.Join, context) }),
    ...(input.MessageDeliveryStatus != null && {
      MessageDeliveryStatus: se_MessageDeliveryStatusResourceTypeEventConfiguration(
        input.MessageDeliveryStatus,
        context
      ),
    }),
    ...(input.Proximity != null && { Proximity: se_ProximityResourceTypeEventConfiguration(input.Proximity, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFuotaTaskCommand
 */
export const se_UpdateFuotaTaskCommand = async (
  input: UpdateFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/fuota-tasks/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FirmwareUpdateImage != null && { FirmwareUpdateImage: input.FirmwareUpdateImage }),
    ...(input.FirmwareUpdateRole != null && { FirmwareUpdateRole: input.FirmwareUpdateRole }),
    ...(input.FragmentIntervalMS != null && { FragmentIntervalMS: input.FragmentIntervalMS }),
    ...(input.FragmentSizeBytes != null && { FragmentSizeBytes: input.FragmentSizeBytes }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANFuotaTask(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RedundancyPercent != null && { RedundancyPercent: input.RedundancyPercent }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand
 */
export const se_UpdateLogLevelsByResourceTypesCommand = async (
  input: UpdateLogLevelsByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/log-levels";
  let body: any;
  body = JSON.stringify({
    ...(input.DefaultLogLevel != null && { DefaultLogLevel: input.DefaultLogLevel }),
    ...(input.WirelessDeviceLogOptions != null && {
      WirelessDeviceLogOptions: se_WirelessDeviceLogOptionList(input.WirelessDeviceLogOptions, context),
    }),
    ...(input.WirelessGatewayLogOptions != null && {
      WirelessGatewayLogOptions: se_WirelessGatewayLogOptionList(input.WirelessGatewayLogOptions, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateMulticastGroupCommand
 */
export const se_UpdateMulticastGroupCommand = async (
  input: UpdateMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/multicast-groups/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANMulticast(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand
 */
export const se_UpdateNetworkAnalyzerConfigurationCommand = async (
  input: UpdateNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/network-analyzer-configurations/{ConfigurationName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ConfigurationName",
    () => input.ConfigurationName!,
    "{ConfigurationName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.TraceContent != null && { TraceContent: se_TraceContent(input.TraceContent, context) }),
    ...(input.WirelessDevicesToAdd != null && {
      WirelessDevicesToAdd: se_WirelessDeviceList(input.WirelessDevicesToAdd, context),
    }),
    ...(input.WirelessDevicesToRemove != null && {
      WirelessDevicesToRemove: se_WirelessDeviceList(input.WirelessDevicesToRemove, context),
    }),
    ...(input.WirelessGatewaysToAdd != null && {
      WirelessGatewaysToAdd: se_WirelessGatewayList(input.WirelessGatewaysToAdd, context),
    }),
    ...(input.WirelessGatewaysToRemove != null && {
      WirelessGatewaysToRemove: se_WirelessGatewayList(input.WirelessGatewaysToRemove, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePartnerAccountCommand
 */
export const se_UpdatePartnerAccountCommand = async (
  input: UpdatePartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/partner-accounts/{PartnerAccountId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "PartnerAccountId",
    () => input.PartnerAccountId!,
    "{PartnerAccountId}",
    false
  );
  const query: any = map({
    partnerType: [, __expectNonNull(input.PartnerType!, `PartnerType`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkUpdateAccount(input.Sidewalk, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePositionCommand
 */
export const se_UpdatePositionCommand = async (
  input: UpdatePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/positions/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.Position != null && { Position: se_PositionCoordinate(input.Position, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResourceEventConfigurationCommand
 */
export const se_UpdateResourceEventConfigurationCommand = async (
  input: UpdateResourceEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/event-configurations/{Identifier}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    identifierType: [, __expectNonNull(input.IdentifierType!, `IdentifierType`)],
    partnerType: [, input.PartnerType!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectionStatus != null && {
      ConnectionStatus: se_ConnectionStatusEventConfiguration(input.ConnectionStatus, context),
    }),
    ...(input.DeviceRegistrationState != null && {
      DeviceRegistrationState: se_DeviceRegistrationStateEventConfiguration(input.DeviceRegistrationState, context),
    }),
    ...(input.Join != null && { Join: se_JoinEventConfiguration(input.Join, context) }),
    ...(input.MessageDeliveryStatus != null && {
      MessageDeliveryStatus: se_MessageDeliveryStatusEventConfiguration(input.MessageDeliveryStatus, context),
    }),
    ...(input.Proximity != null && { Proximity: se_ProximityEventConfiguration(input.Proximity, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResourcePositionCommand
 */
export const se_UpdateResourcePositionCommand = async (
  input: UpdateResourcePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resource-positions/{ResourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ResourceIdentifier",
    () => input.ResourceIdentifier!,
    "{ResourceIdentifier}",
    false
  );
  const query: any = map({
    resourceType: [, __expectNonNull(input.ResourceType!, `ResourceType`)],
  });
  let body: any;
  if (input.GeoJsonPayload !== undefined) {
    body = input.GeoJsonPayload;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWirelessDeviceCommand
 */
export const se_UpdateWirelessDeviceCommand = async (
  input: UpdateWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-devices/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DestinationName != null && { DestinationName: input.DestinationName }),
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANUpdateDevice(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Positioning != null && { Positioning: input.Positioning }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWirelessDeviceImportTaskCommand
 */
export const se_UpdateWirelessDeviceImportTaskCommand = async (
  input: UpdateWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless_device_import_task/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkUpdateImportInfo(input.Sidewalk, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateWirelessGatewayCommand
 */
export const se_UpdateWirelessGatewayCommand = async (
  input: UpdateWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/wireless-gateways/{Id}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.JoinEuiFilters != null && { JoinEuiFilters: se_JoinEuiFilters(input.JoinEuiFilters, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NetIdFilters != null && { NetIdFilters: se_NetIdFilters(input.NetIdFilters, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand
 */
export const de_AssociateAwsAccountWithPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateAwsAccountWithPartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkAccountInfo(data.Sidewalk, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommandError
 */
const de_AssociateAwsAccountWithPartnerAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommand
 */
export const de_AssociateMulticastGroupWithFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AssociateMulticastGroupWithFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommandError
 */
const de_AssociateMulticastGroupWithFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand
 */
export const de_AssociateWirelessDeviceWithFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AssociateWirelessDeviceWithFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommandError
 */
const de_AssociateWirelessDeviceWithFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommand
 */
export const de_AssociateWirelessDeviceWithMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AssociateWirelessDeviceWithMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommandError
 */
const de_AssociateWirelessDeviceWithMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand
 */
export const de_AssociateWirelessDeviceWithThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AssociateWirelessDeviceWithThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithThingCommandError
 */
const de_AssociateWirelessDeviceWithThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand
 */
export const de_AssociateWirelessGatewayWithCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateWirelessGatewayWithCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IotCertificateId != null) {
    contents.IotCertificateId = __expectString(data.IotCertificateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommandError
 */
const de_AssociateWirelessGatewayWithCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand
 */
export const de_AssociateWirelessGatewayWithThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AssociateWirelessGatewayWithThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessGatewayWithThingCommandError
 */
const de_AssociateWirelessGatewayWithThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CancelMulticastGroupSessionCommand
 */
export const de_CancelMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CancelMulticastGroupSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMulticastGroupSessionCommandError
 */
const de_CancelMulticastGroupSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMulticastGroupSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDestinationCommand
 */
export const de_CreateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDestinationCommandError
 */
const de_CreateDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDeviceProfileCommand
 */
export const de_CreateDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDeviceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceProfileCommandError
 */
const de_CreateDeviceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFuotaTaskCommand
 */
export const de_CreateFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFuotaTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFuotaTaskCommandError
 */
const de_CreateFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateMulticastGroupCommand
 */
export const de_CreateMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMulticastGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMulticastGroupCommandError
 */
const de_CreateMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand
 */
export const de_CreateNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateNetworkAnalyzerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommandError
 */
const de_CreateNetworkAnalyzerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkAnalyzerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateServiceProfileCommand
 */
export const de_CreateServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateServiceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceProfileCommandError
 */
const de_CreateServiceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWirelessDeviceCommand
 */
export const de_CreateWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessDeviceCommandError
 */
const de_CreateWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayCommand
 */
export const de_CreateWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateWirelessGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayCommandError
 */
const de_CreateWirelessGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayTaskCommand
 */
export const de_CreateWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateWirelessGatewayTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.WirelessGatewayTaskDefinitionId != null) {
    contents.WirelessGatewayTaskDefinitionId = __expectString(data.WirelessGatewayTaskDefinitionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayTaskCommandError
 */
const de_CreateWirelessGatewayTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand
 */
export const de_CreateWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateWirelessGatewayTaskDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommandError
 */
const de_CreateWirelessGatewayTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDestinationCommand
 */
export const de_DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDestinationCommandError
 */
const de_DeleteDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDeviceProfileCommand
 */
export const de_DeleteDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDeviceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceProfileCommandError
 */
const de_DeleteDeviceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFuotaTaskCommand
 */
export const de_DeleteFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFuotaTaskCommandError
 */
const de_DeleteFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteMulticastGroupCommand
 */
export const de_DeleteMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMulticastGroupCommandError
 */
const de_DeleteMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommand
 */
export const de_DeleteNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteNetworkAnalyzerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommandError
 */
const de_DeleteNetworkAnalyzerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteQueuedMessagesCommand
 */
export const de_DeleteQueuedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedMessagesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteQueuedMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQueuedMessagesCommandError
 */
const de_DeleteQueuedMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteServiceProfileCommand
 */
export const de_DeleteServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteServiceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceProfileCommandError
 */
const de_DeleteServiceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWirelessDeviceCommand
 */
export const de_DeleteWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessDeviceCommandError
 */
const de_DeleteWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWirelessDeviceImportTaskCommand
 */
export const de_DeleteWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteWirelessDeviceImportTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessDeviceImportTaskCommandError
 */
const de_DeleteWirelessDeviceImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayCommand
 */
export const de_DeleteWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteWirelessGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayCommandError
 */
const de_DeleteWirelessGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayTaskCommand
 */
export const de_DeleteWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteWirelessGatewayTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayTaskCommandError
 */
const de_DeleteWirelessGatewayTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand
 */
export const de_DeleteWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteWirelessGatewayTaskDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommandError
 */
const de_DeleteWirelessGatewayTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeregisterWirelessDeviceCommand
 */
export const de_DeregisterWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterWirelessDeviceCommandError
 */
const de_DeregisterWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand
 */
export const de_DisassociateAwsAccountFromPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateAwsAccountFromPartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommandError
 */
const de_DisassociateAwsAccountFromPartnerAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommand
 */
export const de_DisassociateMulticastGroupFromFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateMulticastGroupFromFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommandError
 */
const de_DisassociateMulticastGroupFromFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand
 */
export const de_DisassociateWirelessDeviceFromFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateWirelessDeviceFromFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommandError
 */
const de_DisassociateWirelessDeviceFromFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const de_DisassociateWirelessDeviceFromMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateWirelessDeviceFromMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommandError
 */
const de_DisassociateWirelessDeviceFromMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand
 */
export const de_DisassociateWirelessDeviceFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateWirelessDeviceFromThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommandError
 */
const de_DisassociateWirelessDeviceFromThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand
 */
export const de_DisassociateWirelessGatewayFromCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateWirelessGatewayFromCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommandError
 */
const de_DisassociateWirelessGatewayFromCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand
 */
export const de_DisassociateWirelessGatewayFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateWirelessGatewayFromThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommandError
 */
const de_DisassociateWirelessGatewayFromThingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromThingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDestinationCommand
 */
export const de_GetDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Expression != null) {
    contents.Expression = __expectString(data.Expression);
  }
  if (data.ExpressionType != null) {
    contents.ExpressionType = __expectString(data.ExpressionType);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RoleArn != null) {
    contents.RoleArn = __expectString(data.RoleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDestinationCommandError
 */
const de_GetDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDeviceProfileCommand
 */
export const de_GetDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeviceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANDeviceProfile(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkGetDeviceProfile(data.Sidewalk, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceProfileCommandError
 */
const de_GetDeviceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEventConfigurationByResourceTypesCommand
 */
export const de_GetEventConfigurationByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventConfigurationByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEventConfigurationByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = de_ConnectionStatusResourceTypeEventConfiguration(data.ConnectionStatus, context);
  }
  if (data.DeviceRegistrationState != null) {
    contents.DeviceRegistrationState = de_DeviceRegistrationStateResourceTypeEventConfiguration(
      data.DeviceRegistrationState,
      context
    );
  }
  if (data.Join != null) {
    contents.Join = de_JoinResourceTypeEventConfiguration(data.Join, context);
  }
  if (data.MessageDeliveryStatus != null) {
    contents.MessageDeliveryStatus = de_MessageDeliveryStatusResourceTypeEventConfiguration(
      data.MessageDeliveryStatus,
      context
    );
  }
  if (data.Proximity != null) {
    contents.Proximity = de_ProximityResourceTypeEventConfiguration(data.Proximity, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEventConfigurationByResourceTypesCommandError
 */
const de_GetEventConfigurationByResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventConfigurationByResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFuotaTaskCommand
 */
export const de_GetFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFuotaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.FirmwareUpdateImage != null) {
    contents.FirmwareUpdateImage = __expectString(data.FirmwareUpdateImage);
  }
  if (data.FirmwareUpdateRole != null) {
    contents.FirmwareUpdateRole = __expectString(data.FirmwareUpdateRole);
  }
  if (data.FragmentIntervalMS != null) {
    contents.FragmentIntervalMS = __expectInt32(data.FragmentIntervalMS);
  }
  if (data.FragmentSizeBytes != null) {
    contents.FragmentSizeBytes = __expectInt32(data.FragmentSizeBytes);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANFuotaTaskGetInfo(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.RedundancyPercent != null) {
    contents.RedundancyPercent = __expectInt32(data.RedundancyPercent);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFuotaTaskCommandError
 */
const de_GetFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLogLevelsByResourceTypesCommand
 */
export const de_GetLogLevelsByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogLevelsByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLogLevelsByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DefaultLogLevel != null) {
    contents.DefaultLogLevel = __expectString(data.DefaultLogLevel);
  }
  if (data.WirelessDeviceLogOptions != null) {
    contents.WirelessDeviceLogOptions = de_WirelessDeviceLogOptionList(data.WirelessDeviceLogOptions, context);
  }
  if (data.WirelessGatewayLogOptions != null) {
    contents.WirelessGatewayLogOptions = de_WirelessGatewayLogOptionList(data.WirelessGatewayLogOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLogLevelsByResourceTypesCommandError
 */
const de_GetLogLevelsByResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogLevelsByResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMulticastGroupCommand
 */
export const de_GetMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreatedAt != null) {
    contents.CreatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreatedAt)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANMulticastGet(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMulticastGroupCommandError
 */
const de_GetMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetMulticastGroupSessionCommand
 */
export const de_GetMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMulticastGroupSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANMulticastSession(data.LoRaWAN, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMulticastGroupSessionCommandError
 */
const de_GetMulticastGroupSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommand
 */
export const de_GetNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetNetworkAnalyzerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.TraceContent != null) {
    contents.TraceContent = de_TraceContent(data.TraceContent, context);
  }
  if (data.WirelessDevices != null) {
    contents.WirelessDevices = de_WirelessDeviceList(data.WirelessDevices, context);
  }
  if (data.WirelessGateways != null) {
    contents.WirelessGateways = de_WirelessGatewayList(data.WirelessGateways, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommandError
 */
const de_GetNetworkAnalyzerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkAnalyzerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPartnerAccountCommand
 */
export const de_GetPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartnerAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountLinked != null) {
    contents.AccountLinked = __expectBoolean(data.AccountLinked);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkAccountInfoWithFingerprint(data.Sidewalk, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPartnerAccountCommandError
 */
const de_GetPartnerAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartnerAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPositionCommand
 */
export const de_GetPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Accuracy != null) {
    contents.Accuracy = de_Accuracy(data.Accuracy, context);
  }
  if (data.Position != null) {
    contents.Position = de_PositionCoordinate(data.Position, context);
  }
  if (data.SolverProvider != null) {
    contents.SolverProvider = __expectString(data.SolverProvider);
  }
  if (data.SolverType != null) {
    contents.SolverType = __expectString(data.SolverType);
  }
  if (data.SolverVersion != null) {
    contents.SolverVersion = __expectString(data.SolverVersion);
  }
  if (data.Timestamp != null) {
    contents.Timestamp = __expectString(data.Timestamp);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPositionCommandError
 */
const de_GetPositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPositionConfigurationCommand
 */
export const de_GetPositionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPositionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Destination != null) {
    contents.Destination = __expectString(data.Destination);
  }
  if (data.Solvers != null) {
    contents.Solvers = de_PositionSolverDetails(data.Solvers, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetPositionConfigurationCommandError
 */
const de_GetPositionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetPositionEstimateCommand
 */
export const de_GetPositionEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionEstimateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPositionEstimateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.GeoJsonPayload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetPositionEstimateCommandError
 */
const de_GetPositionEstimateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionEstimateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourceEventConfigurationCommand
 */
export const de_GetResourceEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = de_ConnectionStatusEventConfiguration(data.ConnectionStatus, context);
  }
  if (data.DeviceRegistrationState != null) {
    contents.DeviceRegistrationState = de_DeviceRegistrationStateEventConfiguration(
      data.DeviceRegistrationState,
      context
    );
  }
  if (data.Join != null) {
    contents.Join = de_JoinEventConfiguration(data.Join, context);
  }
  if (data.MessageDeliveryStatus != null) {
    contents.MessageDeliveryStatus = de_MessageDeliveryStatusEventConfiguration(data.MessageDeliveryStatus, context);
  }
  if (data.Proximity != null) {
    contents.Proximity = de_ProximityEventConfiguration(data.Proximity, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceEventConfigurationCommandError
 */
const de_GetResourceEventConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEventConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourceLogLevelCommand
 */
export const de_GetResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceLogLevelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LogLevel != null) {
    contents.LogLevel = __expectString(data.LogLevel);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceLogLevelCommandError
 */
const de_GetResourceLogLevelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLogLevelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourcePositionCommand
 */
export const de_GetResourcePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourcePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.GeoJsonPayload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePositionCommandError
 */
const de_GetResourcePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetServiceEndpointCommand
 */
export const de_GetServiceEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServiceEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ServerTrust != null) {
    contents.ServerTrust = __expectString(data.ServerTrust);
  }
  if (data.ServiceEndpoint != null) {
    contents.ServiceEndpoint = __expectString(data.ServiceEndpoint);
  }
  if (data.ServiceType != null) {
    contents.ServiceType = __expectString(data.ServiceType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceEndpointCommandError
 */
const de_GetServiceEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetServiceProfileCommand
 */
export const de_GetServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServiceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANGetServiceProfileInfo(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceProfileCommandError
 */
const de_GetServiceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessDeviceCommand
 */
export const de_GetWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.DestinationName != null) {
    contents.DestinationName = __expectString(data.DestinationName);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANDevice(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Positioning != null) {
    contents.Positioning = __expectString(data.Positioning);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkDevice(data.Sidewalk, context);
  }
  if (data.ThingArn != null) {
    contents.ThingArn = __expectString(data.ThingArn);
  }
  if (data.ThingName != null) {
    contents.ThingName = __expectString(data.ThingName);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessDeviceCommandError
 */
const de_GetWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessDeviceImportTaskCommand
 */
export const de_GetWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessDeviceImportTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.CreationTime));
  }
  if (data.DestinationName != null) {
    contents.DestinationName = __expectString(data.DestinationName);
  }
  if (data.FailedImportedDeviceCount != null) {
    contents.FailedImportedDeviceCount = __expectLong(data.FailedImportedDeviceCount);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.InitializedImportedDeviceCount != null) {
    contents.InitializedImportedDeviceCount = __expectLong(data.InitializedImportedDeviceCount);
  }
  if (data.OnboardedImportedDeviceCount != null) {
    contents.OnboardedImportedDeviceCount = __expectLong(data.OnboardedImportedDeviceCount);
  }
  if (data.PendingImportedDeviceCount != null) {
    contents.PendingImportedDeviceCount = __expectLong(data.PendingImportedDeviceCount);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkGetStartImportInfo(data.Sidewalk, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusReason != null) {
    contents.StatusReason = __expectString(data.StatusReason);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessDeviceImportTaskCommandError
 */
const de_GetWirelessDeviceImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessDeviceStatisticsCommand
 */
export const de_GetWirelessDeviceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessDeviceStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastUplinkReceivedAt != null) {
    contents.LastUplinkReceivedAt = __expectString(data.LastUplinkReceivedAt);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANDeviceMetadata(data.LoRaWAN, context);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkDeviceMetadata(data.Sidewalk, context);
  }
  if (data.WirelessDeviceId != null) {
    contents.WirelessDeviceId = __expectString(data.WirelessDeviceId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessDeviceStatisticsCommandError
 */
const de_GetWirelessDeviceStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessGatewayCommand
 */
export const de_GetWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANGateway(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.ThingArn != null) {
    contents.ThingArn = __expectString(data.ThingArn);
  }
  if (data.ThingName != null) {
    contents.ThingName = __expectString(data.ThingName);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayCommandError
 */
const de_GetWirelessGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessGatewayCertificateCommand
 */
export const de_GetWirelessGatewayCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessGatewayCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.IotCertificateId != null) {
    contents.IotCertificateId = __expectString(data.IotCertificateId);
  }
  if (data.LoRaWANNetworkServerCertificateId != null) {
    contents.LoRaWANNetworkServerCertificateId = __expectString(data.LoRaWANNetworkServerCertificateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayCertificateCommandError
 */
const de_GetWirelessGatewayCertificateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCertificateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand
 */
export const de_GetWirelessGatewayFirmwareInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessGatewayFirmwareInformationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = de_LoRaWANGatewayCurrentVersion(data.LoRaWAN, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommandError
 */
const de_GetWirelessGatewayFirmwareInformationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessGatewayStatisticsCommand
 */
export const de_GetWirelessGatewayStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessGatewayStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = __expectString(data.ConnectionStatus);
  }
  if (data.LastUplinkReceivedAt != null) {
    contents.LastUplinkReceivedAt = __expectString(data.LastUplinkReceivedAt);
  }
  if (data.WirelessGatewayId != null) {
    contents.WirelessGatewayId = __expectString(data.WirelessGatewayId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayStatisticsCommandError
 */
const de_GetWirelessGatewayStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessGatewayTaskCommand
 */
export const de_GetWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessGatewayTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastUplinkReceivedAt != null) {
    contents.LastUplinkReceivedAt = __expectString(data.LastUplinkReceivedAt);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.TaskCreatedAt != null) {
    contents.TaskCreatedAt = __expectString(data.TaskCreatedAt);
  }
  if (data.WirelessGatewayId != null) {
    contents.WirelessGatewayId = __expectString(data.WirelessGatewayId);
  }
  if (data.WirelessGatewayTaskDefinitionId != null) {
    contents.WirelessGatewayTaskDefinitionId = __expectString(data.WirelessGatewayTaskDefinitionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayTaskCommandError
 */
const de_GetWirelessGatewayTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand
 */
export const de_GetWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWirelessGatewayTaskDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.AutoCreateTasks != null) {
    contents.AutoCreateTasks = __expectBoolean(data.AutoCreateTasks);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Update != null) {
    contents.Update = de_UpdateWirelessGatewayTaskCreate(data.Update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommandError
 */
const de_GetWirelessGatewayTaskDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDestinationsCommand
 */
export const de_ListDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationList != null) {
    contents.DestinationList = de_DestinationList(data.DestinationList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDestinationsCommandError
 */
const de_ListDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDeviceProfilesCommand
 */
export const de_ListDeviceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeviceProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceProfileList != null) {
    contents.DeviceProfileList = de_DeviceProfileList(data.DeviceProfileList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceProfilesCommandError
 */
const de_ListDeviceProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDevicesForWirelessDeviceImportTaskCommand
 */
export const de_ListDevicesForWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesForWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDevicesForWirelessDeviceImportTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationName != null) {
    contents.DestinationName = __expectString(data.DestinationName);
  }
  if (data.ImportedWirelessDeviceList != null) {
    contents.ImportedWirelessDeviceList = de_ImportedWirelessDeviceList(data.ImportedWirelessDeviceList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesForWirelessDeviceImportTaskCommandError
 */
const de_ListDevicesForWirelessDeviceImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesForWirelessDeviceImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListEventConfigurationsCommand
 */
export const de_ListEventConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEventConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventConfigurationsList != null) {
    contents.EventConfigurationsList = de_EventConfigurationsList(data.EventConfigurationsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEventConfigurationsCommandError
 */
const de_ListEventConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFuotaTasksCommand
 */
export const de_ListFuotaTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFuotaTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFuotaTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FuotaTaskList != null) {
    contents.FuotaTaskList = de_FuotaTaskList(data.FuotaTaskList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFuotaTasksCommandError
 */
const de_ListFuotaTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFuotaTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMulticastGroupsCommand
 */
export const de_ListMulticastGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMulticastGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MulticastGroupList != null) {
    contents.MulticastGroupList = de_MulticastGroupList(data.MulticastGroupList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMulticastGroupsCommandError
 */
const de_ListMulticastGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListMulticastGroupsByFuotaTaskCommand
 */
export const de_ListMulticastGroupsByFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsByFuotaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMulticastGroupsByFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MulticastGroupList != null) {
    contents.MulticastGroupList = de_MulticastGroupListByFuotaTask(data.MulticastGroupList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMulticastGroupsByFuotaTaskCommandError
 */
const de_ListMulticastGroupsByFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsByFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand
 */
export const de_ListNetworkAnalyzerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNetworkAnalyzerConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkAnalyzerConfigurationList != null) {
    contents.NetworkAnalyzerConfigurationList = de_NetworkAnalyzerConfigurationList(
      data.NetworkAnalyzerConfigurationList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommandError
 */
const de_ListNetworkAnalyzerConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPartnerAccountsCommand
 */
export const de_ListPartnerAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPartnerAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = de_SidewalkAccountList(data.Sidewalk, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPartnerAccountsCommandError
 */
const de_ListPartnerAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPositionConfigurationsCommand
 */
export const de_ListPositionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPositionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPositionConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PositionConfigurationList != null) {
    contents.PositionConfigurationList = de_PositionConfigurationList(data.PositionConfigurationList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPositionConfigurationsCommandError
 */
const de_ListPositionConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPositionConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListQueuedMessagesCommand
 */
export const de_ListQueuedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuedMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListQueuedMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DownlinkQueueMessagesList != null) {
    contents.DownlinkQueueMessagesList = de_DownlinkQueueMessagesList(data.DownlinkQueueMessagesList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListQueuedMessagesCommandError
 */
const de_ListQueuedMessagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuedMessagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListServiceProfilesCommand
 */
export const de_ListServiceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListServiceProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ServiceProfileList != null) {
    contents.ServiceProfileList = de_ServiceProfileList(data.ServiceProfileList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceProfilesCommandError
 */
const de_ListServiceProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_TagList(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWirelessDeviceImportTasksCommand
 */
export const de_ListWirelessDeviceImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDeviceImportTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWirelessDeviceImportTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WirelessDeviceImportTaskList != null) {
    contents.WirelessDeviceImportTaskList = de_WirelessDeviceImportTaskList(data.WirelessDeviceImportTaskList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessDeviceImportTasksCommandError
 */
const de_ListWirelessDeviceImportTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDeviceImportTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWirelessDevicesCommand
 */
export const de_ListWirelessDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWirelessDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WirelessDeviceList != null) {
    contents.WirelessDeviceList = de_WirelessDeviceStatisticsList(data.WirelessDeviceList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessDevicesCommandError
 */
const de_ListWirelessDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWirelessGatewaysCommand
 */
export const de_ListWirelessGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWirelessGatewaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WirelessGatewayList != null) {
    contents.WirelessGatewayList = de_WirelessGatewayStatisticsList(data.WirelessGatewayList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessGatewaysCommandError
 */
const de_ListWirelessGatewaysCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewaysCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand
 */
export const de_ListWirelessGatewayTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWirelessGatewayTaskDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TaskDefinitions != null) {
    contents.TaskDefinitions = de_WirelessGatewayTaskDefinitionList(data.TaskDefinitions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommandError
 */
const de_ListWirelessGatewayTaskDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutPositionConfigurationCommand
 */
export const de_PutPositionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPositionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPositionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutPositionConfigurationCommandError
 */
const de_PutPositionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPositionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutResourceLogLevelCommand
 */
export const de_PutResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutResourceLogLevelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourceLogLevelCommandError
 */
const de_PutResourceLogLevelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceLogLevelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ResetAllResourceLogLevelsCommand
 */
export const de_ResetAllResourceLogLevelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAllResourceLogLevelsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_ResetAllResourceLogLevelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResetAllResourceLogLevelsCommandError
 */
const de_ResetAllResourceLogLevelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAllResourceLogLevelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ResetResourceLogLevelCommand
 */
export const de_ResetResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_ResetResourceLogLevelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResetResourceLogLevelCommandError
 */
const de_ResetResourceLogLevelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetResourceLogLevelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SendDataToMulticastGroupCommand
 */
export const de_SendDataToMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToMulticastGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_SendDataToMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SendDataToMulticastGroupCommandError
 */
const de_SendDataToMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SendDataToWirelessDeviceCommand
 */
export const de_SendDataToWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_SendDataToWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId != null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SendDataToWirelessDeviceCommandError
 */
const de_SendDataToWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand
 */
export const de_StartBulkAssociateWirelessDeviceWithMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_StartBulkAssociateWirelessDeviceWithMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommandError
 */
const de_StartBulkAssociateWirelessDeviceWithMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandError
 */
const de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartFuotaTaskCommand
 */
export const de_StartFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_StartFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartFuotaTaskCommandError
 */
const de_StartFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartMulticastGroupSessionCommand
 */
export const de_StartMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_StartMulticastGroupSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartMulticastGroupSessionCommandError
 */
const de_StartMulticastGroupSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMulticastGroupSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartSingleWirelessDeviceImportTaskCommand
 */
export const de_StartSingleWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSingleWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartSingleWirelessDeviceImportTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartSingleWirelessDeviceImportTaskCommandError
 */
const de_StartSingleWirelessDeviceImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSingleWirelessDeviceImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartWirelessDeviceImportTaskCommand
 */
export const de_StartWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartWirelessDeviceImportTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartWirelessDeviceImportTaskCommandError
 */
const de_StartWirelessDeviceImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWirelessDeviceImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iotwireless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TestWirelessDeviceCommand
 */
export const de_TestWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Result != null) {
    contents.Result = __expectString(data.Result);
  }
  return contents;
};

/**
 * deserializeAws_restJson1TestWirelessDeviceCommandError
 */
const de_TestWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDestinationCommand
 */
export const de_UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDestinationCommandError
 */
const de_UpdateDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateEventConfigurationByResourceTypesCommand
 */
export const de_UpdateEventConfigurationByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventConfigurationByResourceTypesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateEventConfigurationByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventConfigurationByResourceTypesCommandError
 */
const de_UpdateEventConfigurationByResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventConfigurationByResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFuotaTaskCommand
 */
export const de_UpdateFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFuotaTaskCommandError
 */
const de_UpdateFuotaTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFuotaTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand
 */
export const de_UpdateLogLevelsByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogLevelsByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLogLevelsByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommandError
 */
const de_UpdateLogLevelsByResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogLevelsByResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateMulticastGroupCommand
 */
export const de_UpdateMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMulticastGroupCommandError
 */
const de_UpdateMulticastGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMulticastGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand
 */
export const de_UpdateNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateNetworkAnalyzerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommandError
 */
const de_UpdateNetworkAnalyzerConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePartnerAccountCommand
 */
export const de_UpdatePartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdatePartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePartnerAccountCommandError
 */
const de_UpdatePartnerAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdatePositionCommand
 */
export const de_UpdatePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePositionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdatePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePositionCommandError
 */
const de_UpdatePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateResourceEventConfigurationCommand
 */
export const de_UpdateResourceEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceEventConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateResourceEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceEventConfigurationCommandError
 */
const de_UpdateResourceEventConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceEventConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateResourcePositionCommand
 */
export const de_UpdateResourcePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePositionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateResourcePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourcePositionCommandError
 */
const de_UpdateResourcePositionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePositionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWirelessDeviceCommand
 */
export const de_UpdateWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWirelessDeviceCommandError
 */
const de_UpdateWirelessDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWirelessDeviceImportTaskCommand
 */
export const de_UpdateWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateWirelessDeviceImportTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWirelessDeviceImportTaskCommandError
 */
const de_UpdateWirelessDeviceImportTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceImportTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateWirelessGatewayCommand
 */
export const de_UpdateWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UpdateWirelessGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWirelessGatewayCommandError
 */
const de_UpdateWirelessGatewayCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessGatewayCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.iotwireless#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AbpV1_0_x
 */
const se_AbpV1_0_x = (input: AbpV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.DevAddr != null && { DevAddr: input.DevAddr }),
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
    ...(input.SessionKeys != null && { SessionKeys: se_SessionKeysAbpV1_0_x(input.SessionKeys, context) }),
  };
};

/**
 * serializeAws_restJson1AbpV1_1
 */
const se_AbpV1_1 = (input: AbpV1_1, context: __SerdeContext): any => {
  return {
    ...(input.DevAddr != null && { DevAddr: input.DevAddr }),
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
    ...(input.SessionKeys != null && { SessionKeys: se_SessionKeysAbpV1_1(input.SessionKeys, context) }),
  };
};

/**
 * serializeAws_restJson1ApplicationConfig
 */
const se_ApplicationConfig = (input: ApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.DestinationName != null && { DestinationName: input.DestinationName }),
    ...(input.FPort != null && { FPort: input.FPort }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1Applications
 */
const se_Applications = (input: ApplicationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ApplicationConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1AssistPosition
 */
const se_AssistPosition = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1Beaconing
 */
const se_Beaconing = (input: Beaconing, context: __SerdeContext): any => {
  return {
    ...(input.DataRate != null && { DataRate: input.DataRate }),
    ...(input.Frequencies != null && { Frequencies: se_BeaconingFrequencies(input.Frequencies, context) }),
  };
};

/**
 * serializeAws_restJson1BeaconingFrequencies
 */
const se_BeaconingFrequencies = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CdmaList
 */
const se_CdmaList = (input: CdmaObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CdmaObj(entry, context);
    });
};

/**
 * serializeAws_restJson1CdmaLocalId
 */
const se_CdmaLocalId = (input: CdmaLocalId, context: __SerdeContext): any => {
  return {
    ...(input.CdmaChannel != null && { CdmaChannel: input.CdmaChannel }),
    ...(input.PnOffset != null && { PnOffset: input.PnOffset }),
  };
};

/**
 * serializeAws_restJson1CdmaNmrList
 */
const se_CdmaNmrList = (input: CdmaNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CdmaNmrObj(entry, context);
    });
};

/**
 * serializeAws_restJson1CdmaNmrObj
 */
const se_CdmaNmrObj = (input: CdmaNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.BaseStationId != null && { BaseStationId: input.BaseStationId }),
    ...(input.CdmaChannel != null && { CdmaChannel: input.CdmaChannel }),
    ...(input.PilotPower != null && { PilotPower: input.PilotPower }),
    ...(input.PnOffset != null && { PnOffset: input.PnOffset }),
  };
};

/**
 * serializeAws_restJson1CdmaObj
 */
const se_CdmaObj = (input: CdmaObj, context: __SerdeContext): any => {
  return {
    ...(input.BaseLat != null && { BaseLat: __serializeFloat(input.BaseLat) }),
    ...(input.BaseLng != null && { BaseLng: __serializeFloat(input.BaseLng) }),
    ...(input.BaseStationId != null && { BaseStationId: input.BaseStationId }),
    ...(input.CdmaLocalId != null && { CdmaLocalId: se_CdmaLocalId(input.CdmaLocalId, context) }),
    ...(input.CdmaNmr != null && { CdmaNmr: se_CdmaNmrList(input.CdmaNmr, context) }),
    ...(input.NetworkId != null && { NetworkId: input.NetworkId }),
    ...(input.PilotPower != null && { PilotPower: input.PilotPower }),
    ...(input.RegistrationZone != null && { RegistrationZone: input.RegistrationZone }),
    ...(input.SystemId != null && { SystemId: input.SystemId }),
  };
};

/**
 * serializeAws_restJson1CellTowers
 */
const se_CellTowers = (input: CellTowers, context: __SerdeContext): any => {
  return {
    ...(input.Cdma != null && { Cdma: se_CdmaList(input.Cdma, context) }),
    ...(input.Gsm != null && { Gsm: se_GsmList(input.Gsm, context) }),
    ...(input.Lte != null && { Lte: se_LteList(input.Lte, context) }),
    ...(input.Tdscdma != null && { Tdscdma: se_TdscdmaList(input.Tdscdma, context) }),
    ...(input.Wcdma != null && { Wcdma: se_WcdmaList(input.Wcdma, context) }),
  };
};

/**
 * serializeAws_restJson1ConnectionStatusEventConfiguration
 */
const se_ConnectionStatusEventConfiguration = (
  input: ConnectionStatusEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: se_LoRaWANConnectionStatusEventNotificationConfigurations(input.LoRaWAN, context),
    }),
    ...(input.WirelessGatewayIdEventTopic != null && {
      WirelessGatewayIdEventTopic: input.WirelessGatewayIdEventTopic,
    }),
  };
};

/**
 * serializeAws_restJson1ConnectionStatusResourceTypeEventConfiguration
 */
const se_ConnectionStatusResourceTypeEventConfiguration = (
  input: ConnectionStatusResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: se_LoRaWANConnectionStatusResourceTypeEventConfiguration(input.LoRaWAN, context),
    }),
  };
};

/**
 * serializeAws_restJson1DeviceRegistrationStateEventConfiguration
 */
const se_DeviceRegistrationStateEventConfiguration = (
  input: DeviceRegistrationStateEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkEventNotificationConfigurations(input.Sidewalk, context) }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

/**
 * serializeAws_restJson1DeviceRegistrationStateResourceTypeEventConfiguration
 */
const se_DeviceRegistrationStateResourceTypeEventConfiguration = (
  input: DeviceRegistrationStateResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkResourceTypeEventConfiguration(input.Sidewalk, context) }),
  };
};

/**
 * serializeAws_restJson1FactoryPresetFreqsList
 */
const se_FactoryPresetFreqsList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FPorts
 */
const se_FPorts = (input: FPorts, context: __SerdeContext): any => {
  return {
    ...(input.Applications != null && { Applications: se_Applications(input.Applications, context) }),
    ...(input.ClockSync != null && { ClockSync: input.ClockSync }),
    ...(input.Fuota != null && { Fuota: input.Fuota }),
    ...(input.Multicast != null && { Multicast: input.Multicast }),
    ...(input.Positioning != null && { Positioning: se_Positioning(input.Positioning, context) }),
  };
};

/**
 * serializeAws_restJson1GatewayList
 */
const se_GatewayList = (input: GatewayListItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GatewayListItem(entry, context);
    });
};

/**
 * serializeAws_restJson1GatewayListItem
 */
const se_GatewayListItem = (input: GatewayListItem, context: __SerdeContext): any => {
  return {
    ...(input.DownlinkFrequency != null && { DownlinkFrequency: input.DownlinkFrequency }),
    ...(input.GatewayId != null && { GatewayId: input.GatewayId }),
  };
};

/**
 * serializeAws_restJson1GlobalIdentity
 */
const se_GlobalIdentity = (input: GlobalIdentity, context: __SerdeContext): any => {
  return {
    ...(input.GeranCid != null && { GeranCid: input.GeranCid }),
    ...(input.Lac != null && { Lac: input.Lac }),
  };
};

/**
 * serializeAws_restJson1Gnss
 */
const se_Gnss = (input: Gnss, context: __SerdeContext): any => {
  return {
    ...(input.AssistAltitude != null && { AssistAltitude: __serializeFloat(input.AssistAltitude) }),
    ...(input.AssistPosition != null && { AssistPosition: se_AssistPosition(input.AssistPosition, context) }),
    ...(input.CaptureTime != null && { CaptureTime: __serializeFloat(input.CaptureTime) }),
    ...(input.CaptureTimeAccuracy != null && { CaptureTimeAccuracy: __serializeFloat(input.CaptureTimeAccuracy) }),
    ...(input.Payload != null && { Payload: input.Payload }),
    ...(input.Use2DSolver != null && { Use2DSolver: input.Use2DSolver }),
  };
};

/**
 * serializeAws_restJson1GsmList
 */
const se_GsmList = (input: GsmObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GsmObj(entry, context);
    });
};

/**
 * serializeAws_restJson1GsmLocalId
 */
const se_GsmLocalId = (input: GsmLocalId, context: __SerdeContext): any => {
  return {
    ...(input.Bcch != null && { Bcch: input.Bcch }),
    ...(input.Bsic != null && { Bsic: input.Bsic }),
  };
};

/**
 * serializeAws_restJson1GsmNmrList
 */
const se_GsmNmrList = (input: GsmNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GsmNmrObj(entry, context);
    });
};

/**
 * serializeAws_restJson1GsmNmrObj
 */
const se_GsmNmrObj = (input: GsmNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.Bcch != null && { Bcch: input.Bcch }),
    ...(input.Bsic != null && { Bsic: input.Bsic }),
    ...(input.GlobalIdentity != null && { GlobalIdentity: se_GlobalIdentity(input.GlobalIdentity, context) }),
    ...(input.RxLevel != null && { RxLevel: input.RxLevel }),
  };
};

/**
 * serializeAws_restJson1GsmObj
 */
const se_GsmObj = (input: GsmObj, context: __SerdeContext): any => {
  return {
    ...(input.GeranCid != null && { GeranCid: input.GeranCid }),
    ...(input.GsmLocalId != null && { GsmLocalId: se_GsmLocalId(input.GsmLocalId, context) }),
    ...(input.GsmNmr != null && { GsmNmr: se_GsmNmrList(input.GsmNmr, context) }),
    ...(input.GsmTimingAdvance != null && { GsmTimingAdvance: input.GsmTimingAdvance }),
    ...(input.Lac != null && { Lac: input.Lac }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.RxLevel != null && { RxLevel: input.RxLevel }),
  };
};

/**
 * serializeAws_restJson1Ip
 */
const se_Ip = (input: Ip, context: __SerdeContext): any => {
  return {
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
  };
};

/**
 * serializeAws_restJson1JoinEuiFilters
 */
const se_JoinEuiFilters = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_JoinEuiRange(entry, context);
    });
};

/**
 * serializeAws_restJson1JoinEuiRange
 */
const se_JoinEuiRange = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1JoinEventConfiguration
 */
const se_JoinEventConfiguration = (input: JoinEventConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANJoinEventNotificationConfigurations(input.LoRaWAN, context) }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

/**
 * serializeAws_restJson1JoinResourceTypeEventConfiguration
 */
const se_JoinResourceTypeEventConfiguration = (
  input: JoinResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANJoinResourceTypeEventConfiguration(input.LoRaWAN, context) }),
  };
};

/**
 * serializeAws_restJson1LoRaWANConnectionStatusEventNotificationConfigurations
 */
const se_LoRaWANConnectionStatusEventNotificationConfigurations = (
  input: LoRaWANConnectionStatusEventNotificationConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayEuiEventTopic != null && { GatewayEuiEventTopic: input.GatewayEuiEventTopic }),
  };
};

/**
 * serializeAws_restJson1LoRaWANConnectionStatusResourceTypeEventConfiguration
 */
const se_LoRaWANConnectionStatusResourceTypeEventConfiguration = (
  input: LoRaWANConnectionStatusResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessGatewayEventTopic != null && { WirelessGatewayEventTopic: input.WirelessGatewayEventTopic }),
  };
};

/**
 * serializeAws_restJson1LoRaWANDevice
 */
const se_LoRaWANDevice = (input: LoRaWANDevice, context: __SerdeContext): any => {
  return {
    ...(input.AbpV1_0_x != null && { AbpV1_0_x: se_AbpV1_0_x(input.AbpV1_0_x, context) }),
    ...(input.AbpV1_1 != null && { AbpV1_1: se_AbpV1_1(input.AbpV1_1, context) }),
    ...(input.DevEui != null && { DevEui: input.DevEui }),
    ...(input.DeviceProfileId != null && { DeviceProfileId: input.DeviceProfileId }),
    ...(input.FPorts != null && { FPorts: se_FPorts(input.FPorts, context) }),
    ...(input.OtaaV1_0_x != null && { OtaaV1_0_x: se_OtaaV1_0_x(input.OtaaV1_0_x, context) }),
    ...(input.OtaaV1_1 != null && { OtaaV1_1: se_OtaaV1_1(input.OtaaV1_1, context) }),
    ...(input.ServiceProfileId != null && { ServiceProfileId: input.ServiceProfileId }),
  };
};

/**
 * serializeAws_restJson1LoRaWANDeviceProfile
 */
const se_LoRaWANDeviceProfile = (input: LoRaWANDeviceProfile, context: __SerdeContext): any => {
  return {
    ...(input.ClassBTimeout != null && { ClassBTimeout: input.ClassBTimeout }),
    ...(input.ClassCTimeout != null && { ClassCTimeout: input.ClassCTimeout }),
    ...(input.FactoryPresetFreqsList != null && {
      FactoryPresetFreqsList: se_FactoryPresetFreqsList(input.FactoryPresetFreqsList, context),
    }),
    ...(input.MacVersion != null && { MacVersion: input.MacVersion }),
    ...(input.MaxDutyCycle != null && { MaxDutyCycle: input.MaxDutyCycle }),
    ...(input.MaxEirp != null && { MaxEirp: input.MaxEirp }),
    ...(input.PingSlotDr != null && { PingSlotDr: input.PingSlotDr }),
    ...(input.PingSlotFreq != null && { PingSlotFreq: input.PingSlotFreq }),
    ...(input.PingSlotPeriod != null && { PingSlotPeriod: input.PingSlotPeriod }),
    ...(input.RegParamsRevision != null && { RegParamsRevision: input.RegParamsRevision }),
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
    ...(input.RxDataRate2 != null && { RxDataRate2: input.RxDataRate2 }),
    ...(input.RxDelay1 != null && { RxDelay1: input.RxDelay1 }),
    ...(input.RxDrOffset1 != null && { RxDrOffset1: input.RxDrOffset1 }),
    ...(input.RxFreq2 != null && { RxFreq2: input.RxFreq2 }),
    ...(input.Supports32BitFCnt != null && { Supports32BitFCnt: input.Supports32BitFCnt }),
    ...(input.SupportsClassB != null && { SupportsClassB: input.SupportsClassB }),
    ...(input.SupportsClassC != null && { SupportsClassC: input.SupportsClassC }),
    ...(input.SupportsJoin != null && { SupportsJoin: input.SupportsJoin }),
  };
};

/**
 * serializeAws_restJson1LoRaWANFuotaTask
 */
const se_LoRaWANFuotaTask = (input: LoRaWANFuotaTask, context: __SerdeContext): any => {
  return {
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
  };
};

/**
 * serializeAws_restJson1LoRaWANGateway
 */
const se_LoRaWANGateway = (input: LoRaWANGateway, context: __SerdeContext): any => {
  return {
    ...(input.Beaconing != null && { Beaconing: se_Beaconing(input.Beaconing, context) }),
    ...(input.GatewayEui != null && { GatewayEui: input.GatewayEui }),
    ...(input.JoinEuiFilters != null && { JoinEuiFilters: se_JoinEuiFilters(input.JoinEuiFilters, context) }),
    ...(input.NetIdFilters != null && { NetIdFilters: se_NetIdFilters(input.NetIdFilters, context) }),
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
    ...(input.SubBands != null && { SubBands: se_SubBands(input.SubBands, context) }),
  };
};

/**
 * serializeAws_restJson1LoRaWANGatewayVersion
 */
const se_LoRaWANGatewayVersion = (input: LoRaWANGatewayVersion, context: __SerdeContext): any => {
  return {
    ...(input.Model != null && { Model: input.Model }),
    ...(input.PackageVersion != null && { PackageVersion: input.PackageVersion }),
    ...(input.Station != null && { Station: input.Station }),
  };
};

/**
 * serializeAws_restJson1LoRaWANJoinEventNotificationConfigurations
 */
const se_LoRaWANJoinEventNotificationConfigurations = (
  input: LoRaWANJoinEventNotificationConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.DevEuiEventTopic != null && { DevEuiEventTopic: input.DevEuiEventTopic }),
  };
};

/**
 * serializeAws_restJson1LoRaWANJoinResourceTypeEventConfiguration
 */
const se_LoRaWANJoinResourceTypeEventConfiguration = (
  input: LoRaWANJoinResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessDeviceEventTopic != null && { WirelessDeviceEventTopic: input.WirelessDeviceEventTopic }),
  };
};

/**
 * serializeAws_restJson1LoRaWANMulticast
 */
const se_LoRaWANMulticast = (input: LoRaWANMulticast, context: __SerdeContext): any => {
  return {
    ...(input.DlClass != null && { DlClass: input.DlClass }),
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
  };
};

/**
 * serializeAws_restJson1LoRaWANMulticastMetadata
 */
const se_LoRaWANMulticastMetadata = (input: LoRaWANMulticastMetadata, context: __SerdeContext): any => {
  return {
    ...(input.FPort != null && { FPort: input.FPort }),
  };
};

/**
 * serializeAws_restJson1LoRaWANMulticastSession
 */
const se_LoRaWANMulticastSession = (input: LoRaWANMulticastSession, context: __SerdeContext): any => {
  return {
    ...(input.DlDr != null && { DlDr: input.DlDr }),
    ...(input.DlFreq != null && { DlFreq: input.DlFreq }),
    ...(input.SessionStartTime != null && {
      SessionStartTime: input.SessionStartTime.toISOString().split(".")[0] + "Z",
    }),
    ...(input.SessionTimeout != null && { SessionTimeout: input.SessionTimeout }),
  };
};

/**
 * serializeAws_restJson1LoRaWANSendDataToDevice
 */
const se_LoRaWANSendDataToDevice = (input: LoRaWANSendDataToDevice, context: __SerdeContext): any => {
  return {
    ...(input.FPort != null && { FPort: input.FPort }),
    ...(input.ParticipatingGateways != null && {
      ParticipatingGateways: se_ParticipatingGateways(input.ParticipatingGateways, context),
    }),
  };
};

/**
 * serializeAws_restJson1LoRaWANServiceProfile
 */
const se_LoRaWANServiceProfile = (input: LoRaWANServiceProfile, context: __SerdeContext): any => {
  return {
    ...(input.AddGwMetadata != null && { AddGwMetadata: input.AddGwMetadata }),
    ...(input.DrMax != null && { DrMax: input.DrMax }),
    ...(input.DrMin != null && { DrMin: input.DrMin }),
  };
};

/**
 * serializeAws_restJson1LoRaWANStartFuotaTask
 */
const se_LoRaWANStartFuotaTask = (input: LoRaWANStartFuotaTask, context: __SerdeContext): any => {
  return {
    ...(input.StartTime != null && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
  };
};

/**
 * serializeAws_restJson1LoRaWANUpdateDevice
 */
const se_LoRaWANUpdateDevice = (input: LoRaWANUpdateDevice, context: __SerdeContext): any => {
  return {
    ...(input.AbpV1_0_x != null && { AbpV1_0_x: se_UpdateAbpV1_0_x(input.AbpV1_0_x, context) }),
    ...(input.AbpV1_1 != null && { AbpV1_1: se_UpdateAbpV1_1(input.AbpV1_1, context) }),
    ...(input.DeviceProfileId != null && { DeviceProfileId: input.DeviceProfileId }),
    ...(input.FPorts != null && { FPorts: se_UpdateFPorts(input.FPorts, context) }),
    ...(input.ServiceProfileId != null && { ServiceProfileId: input.ServiceProfileId }),
  };
};

/**
 * serializeAws_restJson1LoRaWANUpdateGatewayTaskCreate
 */
const se_LoRaWANUpdateGatewayTaskCreate = (input: LoRaWANUpdateGatewayTaskCreate, context: __SerdeContext): any => {
  return {
    ...(input.CurrentVersion != null && { CurrentVersion: se_LoRaWANGatewayVersion(input.CurrentVersion, context) }),
    ...(input.SigKeyCrc != null && { SigKeyCrc: input.SigKeyCrc }),
    ...(input.UpdateSignature != null && { UpdateSignature: input.UpdateSignature }),
    ...(input.UpdateVersion != null && { UpdateVersion: se_LoRaWANGatewayVersion(input.UpdateVersion, context) }),
  };
};

/**
 * serializeAws_restJson1LteList
 */
const se_LteList = (input: LteObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LteObj(entry, context);
    });
};

/**
 * serializeAws_restJson1LteLocalId
 */
const se_LteLocalId = (input: LteLocalId, context: __SerdeContext): any => {
  return {
    ...(input.Earfcn != null && { Earfcn: input.Earfcn }),
    ...(input.Pci != null && { Pci: input.Pci }),
  };
};

/**
 * serializeAws_restJson1LteNmrList
 */
const se_LteNmrList = (input: LteNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LteNmrObj(entry, context);
    });
};

/**
 * serializeAws_restJson1LteNmrObj
 */
const se_LteNmrObj = (input: LteNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.Earfcn != null && { Earfcn: input.Earfcn }),
    ...(input.EutranCid != null && { EutranCid: input.EutranCid }),
    ...(input.Pci != null && { Pci: input.Pci }),
    ...(input.Rsrp != null && { Rsrp: input.Rsrp }),
    ...(input.Rsrq != null && { Rsrq: __serializeFloat(input.Rsrq) }),
  };
};

/**
 * serializeAws_restJson1LteObj
 */
const se_LteObj = (input: LteObj, context: __SerdeContext): any => {
  return {
    ...(input.EutranCid != null && { EutranCid: input.EutranCid }),
    ...(input.LteLocalId != null && { LteLocalId: se_LteLocalId(input.LteLocalId, context) }),
    ...(input.LteNmr != null && { LteNmr: se_LteNmrList(input.LteNmr, context) }),
    ...(input.LteTimingAdvance != null && { LteTimingAdvance: input.LteTimingAdvance }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.NrCapable != null && { NrCapable: input.NrCapable }),
    ...(input.Rsrp != null && { Rsrp: input.Rsrp }),
    ...(input.Rsrq != null && { Rsrq: __serializeFloat(input.Rsrq) }),
    ...(input.Tac != null && { Tac: input.Tac }),
  };
};

/**
 * serializeAws_restJson1MessageDeliveryStatusEventConfiguration
 */
const se_MessageDeliveryStatusEventConfiguration = (
  input: MessageDeliveryStatusEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkEventNotificationConfigurations(input.Sidewalk, context) }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

/**
 * serializeAws_restJson1MessageDeliveryStatusResourceTypeEventConfiguration
 */
const se_MessageDeliveryStatusResourceTypeEventConfiguration = (
  input: MessageDeliveryStatusResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkResourceTypeEventConfiguration(input.Sidewalk, context) }),
  };
};

/**
 * serializeAws_restJson1MulticastWirelessMetadata
 */
const se_MulticastWirelessMetadata = (input: MulticastWirelessMetadata, context: __SerdeContext): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANMulticastMetadata(input.LoRaWAN, context) }),
  };
};

/**
 * serializeAws_restJson1NetIdFilters
 */
const se_NetIdFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OtaaV1_0_x
 */
const se_OtaaV1_0_x = (input: OtaaV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.AppEui != null && { AppEui: input.AppEui }),
    ...(input.AppKey != null && { AppKey: input.AppKey }),
    ...(input.GenAppKey != null && { GenAppKey: input.GenAppKey }),
  };
};

/**
 * serializeAws_restJson1OtaaV1_1
 */
const se_OtaaV1_1 = (input: OtaaV1_1, context: __SerdeContext): any => {
  return {
    ...(input.AppKey != null && { AppKey: input.AppKey }),
    ...(input.JoinEui != null && { JoinEui: input.JoinEui }),
    ...(input.NwkKey != null && { NwkKey: input.NwkKey }),
  };
};

/**
 * serializeAws_restJson1ParticipatingGateways
 */
const se_ParticipatingGateways = (input: ParticipatingGateways, context: __SerdeContext): any => {
  return {
    ...(input.DownlinkMode != null && { DownlinkMode: input.DownlinkMode }),
    ...(input.GatewayList != null && { GatewayList: se_GatewayList(input.GatewayList, context) }),
    ...(input.TransmissionInterval != null && { TransmissionInterval: input.TransmissionInterval }),
  };
};

/**
 * serializeAws_restJson1PositionCoordinate
 */
const se_PositionCoordinate = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * serializeAws_restJson1Positioning
 */
const se_Positioning = (input: Positioning, context: __SerdeContext): any => {
  return {
    ...(input.ClockSync != null && { ClockSync: input.ClockSync }),
    ...(input.Gnss != null && { Gnss: input.Gnss }),
    ...(input.Stream != null && { Stream: input.Stream }),
  };
};

/**
 * serializeAws_restJson1PositionSolverConfigurations
 */
const se_PositionSolverConfigurations = (input: PositionSolverConfigurations, context: __SerdeContext): any => {
  return {
    ...(input.SemtechGnss != null && { SemtechGnss: se_SemtechGnssConfiguration(input.SemtechGnss, context) }),
  };
};

/**
 * serializeAws_restJson1ProximityEventConfiguration
 */
const se_ProximityEventConfiguration = (input: ProximityEventConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkEventNotificationConfigurations(input.Sidewalk, context) }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

/**
 * serializeAws_restJson1ProximityResourceTypeEventConfiguration
 */
const se_ProximityResourceTypeEventConfiguration = (
  input: ProximityResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkResourceTypeEventConfiguration(input.Sidewalk, context) }),
  };
};

/**
 * serializeAws_restJson1SemtechGnssConfiguration
 */
const se_SemtechGnssConfiguration = (input: SemtechGnssConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Fec != null && { Fec: input.Fec }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_restJson1SessionKeysAbpV1_0_x
 */
const se_SessionKeysAbpV1_0_x = (input: SessionKeysAbpV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.AppSKey != null && { AppSKey: input.AppSKey }),
    ...(input.NwkSKey != null && { NwkSKey: input.NwkSKey }),
  };
};

/**
 * serializeAws_restJson1SessionKeysAbpV1_1
 */
const se_SessionKeysAbpV1_1 = (input: SessionKeysAbpV1_1, context: __SerdeContext): any => {
  return {
    ...(input.AppSKey != null && { AppSKey: input.AppSKey }),
    ...(input.FNwkSIntKey != null && { FNwkSIntKey: input.FNwkSIntKey }),
    ...(input.NwkSEncKey != null && { NwkSEncKey: input.NwkSEncKey }),
    ...(input.SNwkSIntKey != null && { SNwkSIntKey: input.SNwkSIntKey }),
  };
};

/**
 * serializeAws_restJson1SidewalkAccountInfo
 */
const se_SidewalkAccountInfo = (input: SidewalkAccountInfo, context: __SerdeContext): any => {
  return {
    ...(input.AmazonId != null && { AmazonId: input.AmazonId }),
    ...(input.AppServerPrivateKey != null && { AppServerPrivateKey: input.AppServerPrivateKey }),
  };
};

/**
 * serializeAws_restJson1SidewalkCreateDeviceProfile
 */
const se_SidewalkCreateDeviceProfile = (input: SidewalkCreateDeviceProfile, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1SidewalkCreateWirelessDevice
 */
const se_SidewalkCreateWirelessDevice = (input: SidewalkCreateWirelessDevice, context: __SerdeContext): any => {
  return {
    ...(input.DeviceProfileId != null && { DeviceProfileId: input.DeviceProfileId }),
  };
};

/**
 * serializeAws_restJson1SidewalkEventNotificationConfigurations
 */
const se_SidewalkEventNotificationConfigurations = (
  input: SidewalkEventNotificationConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmazonIdEventTopic != null && { AmazonIdEventTopic: input.AmazonIdEventTopic }),
  };
};

/**
 * serializeAws_restJson1SidewalkResourceTypeEventConfiguration
 */
const se_SidewalkResourceTypeEventConfiguration = (
  input: SidewalkResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessDeviceEventTopic != null && { WirelessDeviceEventTopic: input.WirelessDeviceEventTopic }),
  };
};

/**
 * serializeAws_restJson1SidewalkSendDataToDevice
 */
const se_SidewalkSendDataToDevice = (input: SidewalkSendDataToDevice, context: __SerdeContext): any => {
  return {
    ...(input.AckModeRetryDurationSecs != null && { AckModeRetryDurationSecs: input.AckModeRetryDurationSecs }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.Seq != null && { Seq: input.Seq }),
  };
};

/**
 * serializeAws_restJson1SidewalkSingleStartImportInfo
 */
const se_SidewalkSingleStartImportInfo = (input: SidewalkSingleStartImportInfo, context: __SerdeContext): any => {
  return {
    ...(input.SidewalkManufacturingSn != null && { SidewalkManufacturingSn: input.SidewalkManufacturingSn }),
  };
};

/**
 * serializeAws_restJson1SidewalkStartImportInfo
 */
const se_SidewalkStartImportInfo = (input: SidewalkStartImportInfo, context: __SerdeContext): any => {
  return {
    ...(input.DeviceCreationFile != null && { DeviceCreationFile: input.DeviceCreationFile }),
    ...(input.Role != null && { Role: input.Role }),
  };
};

/**
 * serializeAws_restJson1SidewalkUpdateAccount
 */
const se_SidewalkUpdateAccount = (input: SidewalkUpdateAccount, context: __SerdeContext): any => {
  return {
    ...(input.AppServerPrivateKey != null && { AppServerPrivateKey: input.AppServerPrivateKey }),
  };
};

/**
 * serializeAws_restJson1SidewalkUpdateImportInfo
 */
const se_SidewalkUpdateImportInfo = (input: SidewalkUpdateImportInfo, context: __SerdeContext): any => {
  return {
    ...(input.DeviceCreationFile != null && { DeviceCreationFile: input.DeviceCreationFile }),
  };
};

/**
 * serializeAws_restJson1SubBands
 */
const se_SubBands = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TdscdmaList
 */
const se_TdscdmaList = (input: TdscdmaObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TdscdmaObj(entry, context);
    });
};

/**
 * serializeAws_restJson1TdscdmaLocalId
 */
const se_TdscdmaLocalId = (input: TdscdmaLocalId, context: __SerdeContext): any => {
  return {
    ...(input.CellParams != null && { CellParams: input.CellParams }),
    ...(input.Uarfcn != null && { Uarfcn: input.Uarfcn }),
  };
};

/**
 * serializeAws_restJson1TdscdmaNmrList
 */
const se_TdscdmaNmrList = (input: TdscdmaNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TdscdmaNmrObj(entry, context);
    });
};

/**
 * serializeAws_restJson1TdscdmaNmrObj
 */
const se_TdscdmaNmrObj = (input: TdscdmaNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.CellParams != null && { CellParams: input.CellParams }),
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.Uarfcn != null && { Uarfcn: input.Uarfcn }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
  };
};

/**
 * serializeAws_restJson1TdscdmaObj
 */
const se_TdscdmaObj = (input: TdscdmaObj, context: __SerdeContext): any => {
  return {
    ...(input.Lac != null && { Lac: input.Lac }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.TdscdmaLocalId != null && { TdscdmaLocalId: se_TdscdmaLocalId(input.TdscdmaLocalId, context) }),
    ...(input.TdscdmaNmr != null && { TdscdmaNmr: se_TdscdmaNmrList(input.TdscdmaNmr, context) }),
    ...(input.TdscdmaTimingAdvance != null && { TdscdmaTimingAdvance: input.TdscdmaTimingAdvance }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
  };
};

/**
 * serializeAws_restJson1TraceContent
 */
const se_TraceContent = (input: TraceContent, context: __SerdeContext): any => {
  return {
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.WirelessDeviceFrameInfo != null && { WirelessDeviceFrameInfo: input.WirelessDeviceFrameInfo }),
  };
};

/**
 * serializeAws_restJson1UpdateAbpV1_0_x
 */
const se_UpdateAbpV1_0_x = (input: UpdateAbpV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
  };
};

/**
 * serializeAws_restJson1UpdateAbpV1_1
 */
const se_UpdateAbpV1_1 = (input: UpdateAbpV1_1, context: __SerdeContext): any => {
  return {
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
  };
};

/**
 * serializeAws_restJson1UpdateFPorts
 */
const se_UpdateFPorts = (input: UpdateFPorts, context: __SerdeContext): any => {
  return {
    ...(input.Applications != null && { Applications: se_Applications(input.Applications, context) }),
    ...(input.Positioning != null && { Positioning: se_Positioning(input.Positioning, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateWirelessGatewayTaskCreate
 */
const se_UpdateWirelessGatewayTaskCreate = (input: UpdateWirelessGatewayTaskCreate, context: __SerdeContext): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANUpdateGatewayTaskCreate(input.LoRaWAN, context) }),
    ...(input.UpdateDataRole != null && { UpdateDataRole: input.UpdateDataRole }),
    ...(input.UpdateDataSource != null && { UpdateDataSource: input.UpdateDataSource }),
  };
};

/**
 * serializeAws_restJson1WcdmaList
 */
const se_WcdmaList = (input: WcdmaObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WcdmaObj(entry, context);
    });
};

/**
 * serializeAws_restJson1WcdmaLocalId
 */
const se_WcdmaLocalId = (input: WcdmaLocalId, context: __SerdeContext): any => {
  return {
    ...(input.Psc != null && { Psc: input.Psc }),
    ...(input.Uarfcndl != null && { Uarfcndl: input.Uarfcndl }),
  };
};

/**
 * serializeAws_restJson1WcdmaNmrList
 */
const se_WcdmaNmrList = (input: WcdmaNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WcdmaNmrObj(entry, context);
    });
};

/**
 * serializeAws_restJson1WcdmaNmrObj
 */
const se_WcdmaNmrObj = (input: WcdmaNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Psc != null && { Psc: input.Psc }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.Uarfcndl != null && { Uarfcndl: input.Uarfcndl }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
  };
};

/**
 * serializeAws_restJson1WcdmaObj
 */
const se_WcdmaObj = (input: WcdmaObj, context: __SerdeContext): any => {
  return {
    ...(input.Lac != null && { Lac: input.Lac }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
    ...(input.WcdmaLocalId != null && { WcdmaLocalId: se_WcdmaLocalId(input.WcdmaLocalId, context) }),
    ...(input.WcdmaNmr != null && { WcdmaNmr: se_WcdmaNmrList(input.WcdmaNmr, context) }),
  };
};

/**
 * serializeAws_restJson1WiFiAccessPoint
 */
const se_WiFiAccessPoint = (input: WiFiAccessPoint, context: __SerdeContext): any => {
  return {
    ...(input.MacAddress != null && { MacAddress: input.MacAddress }),
    ...(input.Rss != null && { Rss: input.Rss }),
  };
};

/**
 * serializeAws_restJson1WiFiAccessPoints
 */
const se_WiFiAccessPoints = (input: WiFiAccessPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WiFiAccessPoint(entry, context);
    });
};

/**
 * serializeAws_restJson1WirelessDeviceEventLogOption
 */
const se_WirelessDeviceEventLogOption = (input: WirelessDeviceEventLogOption, context: __SerdeContext): any => {
  return {
    ...(input.Event != null && { Event: input.Event }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
  };
};

/**
 * serializeAws_restJson1WirelessDeviceEventLogOptionList
 */
const se_WirelessDeviceEventLogOptionList = (input: WirelessDeviceEventLogOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WirelessDeviceEventLogOption(entry, context);
    });
};

/**
 * serializeAws_restJson1WirelessDeviceList
 */
const se_WirelessDeviceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WirelessDeviceLogOption
 */
const se_WirelessDeviceLogOption = (input: WirelessDeviceLogOption, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: se_WirelessDeviceEventLogOptionList(input.Events, context) }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1WirelessDeviceLogOptionList
 */
const se_WirelessDeviceLogOptionList = (input: WirelessDeviceLogOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WirelessDeviceLogOption(entry, context);
    });
};

/**
 * serializeAws_restJson1WirelessGatewayEventLogOption
 */
const se_WirelessGatewayEventLogOption = (input: WirelessGatewayEventLogOption, context: __SerdeContext): any => {
  return {
    ...(input.Event != null && { Event: input.Event }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
  };
};

/**
 * serializeAws_restJson1WirelessGatewayEventLogOptionList
 */
const se_WirelessGatewayEventLogOptionList = (input: WirelessGatewayEventLogOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WirelessGatewayEventLogOption(entry, context);
    });
};

/**
 * serializeAws_restJson1WirelessGatewayList
 */
const se_WirelessGatewayList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1WirelessGatewayLogOption
 */
const se_WirelessGatewayLogOption = (input: WirelessGatewayLogOption, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: se_WirelessGatewayEventLogOptionList(input.Events, context) }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1WirelessGatewayLogOptionList
 */
const se_WirelessGatewayLogOptionList = (input: WirelessGatewayLogOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WirelessGatewayLogOption(entry, context);
    });
};

/**
 * serializeAws_restJson1WirelessMetadata
 */
const se_WirelessMetadata = (input: WirelessMetadata, context: __SerdeContext): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: se_LoRaWANSendDataToDevice(input.LoRaWAN, context) }),
    ...(input.Sidewalk != null && { Sidewalk: se_SidewalkSendDataToDevice(input.Sidewalk, context) }),
  };
};

/**
 * deserializeAws_restJson1AbpV1_0_x
 */
const de_AbpV1_0_x = (output: any, context: __SerdeContext): AbpV1_0_x => {
  return {
    DevAddr: __expectString(output.DevAddr),
    FCntStart: __expectInt32(output.FCntStart),
    SessionKeys: output.SessionKeys != null ? de_SessionKeysAbpV1_0_x(output.SessionKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AbpV1_1
 */
const de_AbpV1_1 = (output: any, context: __SerdeContext): AbpV1_1 => {
  return {
    DevAddr: __expectString(output.DevAddr),
    FCntStart: __expectInt32(output.FCntStart),
    SessionKeys: output.SessionKeys != null ? de_SessionKeysAbpV1_1(output.SessionKeys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Accuracy
 */
const de_Accuracy = (output: any, context: __SerdeContext): Accuracy => {
  return {
    HorizontalAccuracy: __limitedParseFloat32(output.HorizontalAccuracy),
    VerticalAccuracy: __limitedParseFloat32(output.VerticalAccuracy),
  } as any;
};

/**
 * deserializeAws_restJson1ApplicationConfig
 */
const de_ApplicationConfig = (output: any, context: __SerdeContext): ApplicationConfig => {
  return {
    DestinationName: __expectString(output.DestinationName),
    FPort: __expectInt32(output.FPort),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1Applications
 */
const de_Applications = (output: any, context: __SerdeContext): ApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ApplicationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Beaconing
 */
const de_Beaconing = (output: any, context: __SerdeContext): Beaconing => {
  return {
    DataRate: __expectInt32(output.DataRate),
    Frequencies: output.Frequencies != null ? de_BeaconingFrequencies(output.Frequencies, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BeaconingFrequencies
 */
const de_BeaconingFrequencies = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CertificateList
 */
const de_CertificateList = (output: any, context: __SerdeContext): CertificateList => {
  return {
    SigningAlg: __expectString(output.SigningAlg),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectionStatusEventConfiguration
 */
const de_ConnectionStatusEventConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionStatusEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? de_LoRaWANConnectionStatusEventNotificationConfigurations(output.LoRaWAN, context)
        : undefined,
    WirelessGatewayIdEventTopic: __expectString(output.WirelessGatewayIdEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectionStatusResourceTypeEventConfiguration
 */
const de_ConnectionStatusResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionStatusResourceTypeEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? de_LoRaWANConnectionStatusResourceTypeEventConfiguration(output.LoRaWAN, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DakCertificateMetadata
 */
const de_DakCertificateMetadata = (output: any, context: __SerdeContext): DakCertificateMetadata => {
  return {
    ApId: __expectString(output.ApId),
    CertificateId: __expectString(output.CertificateId),
    DeviceTypeId: __expectString(output.DeviceTypeId),
    FactorySupport: __expectBoolean(output.FactorySupport),
    MaxAllowedSignature: __expectInt32(output.MaxAllowedSignature),
  } as any;
};

/**
 * deserializeAws_restJson1DakCertificateMetadataList
 */
const de_DakCertificateMetadataList = (output: any, context: __SerdeContext): DakCertificateMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DakCertificateMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DestinationList
 */
const de_DestinationList = (output: any, context: __SerdeContext): Destinations[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Destinations(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Destinations
 */
const de_Destinations = (output: any, context: __SerdeContext): Destinations => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Expression: __expectString(output.Expression),
    ExpressionType: __expectString(output.ExpressionType),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceCertificateList
 */
const de_DeviceCertificateList = (output: any, context: __SerdeContext): CertificateList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeviceCreationFileList
 */
const de_DeviceCreationFileList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeviceProfile
 */
const de_DeviceProfile = (output: any, context: __SerdeContext): DeviceProfile => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceProfileList
 */
const de_DeviceProfileList = (output: any, context: __SerdeContext): DeviceProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeviceRegistrationStateEventConfiguration
 */
const de_DeviceRegistrationStateEventConfiguration = (
  output: any,
  context: __SerdeContext
): DeviceRegistrationStateEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null ? de_SidewalkEventNotificationConfigurations(output.Sidewalk, context) : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1DeviceRegistrationStateResourceTypeEventConfiguration
 */
const de_DeviceRegistrationStateResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): DeviceRegistrationStateResourceTypeEventConfiguration => {
  return {
    Sidewalk: output.Sidewalk != null ? de_SidewalkResourceTypeEventConfiguration(output.Sidewalk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DownlinkQueueMessage
 */
const de_DownlinkQueueMessage = (output: any, context: __SerdeContext): DownlinkQueueMessage => {
  return {
    LoRaWAN: output.LoRaWAN != null ? de_LoRaWANSendDataToDevice(output.LoRaWAN, context) : undefined,
    MessageId: __expectString(output.MessageId),
    ReceivedAt: __expectString(output.ReceivedAt),
    TransmitMode: __expectInt32(output.TransmitMode),
  } as any;
};

/**
 * deserializeAws_restJson1DownlinkQueueMessagesList
 */
const de_DownlinkQueueMessagesList = (output: any, context: __SerdeContext): DownlinkQueueMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DownlinkQueueMessage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventConfigurationItem
 */
const de_EventConfigurationItem = (output: any, context: __SerdeContext): EventConfigurationItem => {
  return {
    Events: output.Events != null ? de_EventNotificationItemConfigurations(output.Events, context) : undefined,
    Identifier: __expectString(output.Identifier),
    IdentifierType: __expectString(output.IdentifierType),
    PartnerType: __expectString(output.PartnerType),
  } as any;
};

/**
 * deserializeAws_restJson1EventConfigurationsList
 */
const de_EventConfigurationsList = (output: any, context: __SerdeContext): EventConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EventConfigurationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventNotificationItemConfigurations
 */
const de_EventNotificationItemConfigurations = (
  output: any,
  context: __SerdeContext
): EventNotificationItemConfigurations => {
  return {
    ConnectionStatus:
      output.ConnectionStatus != null
        ? de_ConnectionStatusEventConfiguration(output.ConnectionStatus, context)
        : undefined,
    DeviceRegistrationState:
      output.DeviceRegistrationState != null
        ? de_DeviceRegistrationStateEventConfiguration(output.DeviceRegistrationState, context)
        : undefined,
    Join: output.Join != null ? de_JoinEventConfiguration(output.Join, context) : undefined,
    MessageDeliveryStatus:
      output.MessageDeliveryStatus != null
        ? de_MessageDeliveryStatusEventConfiguration(output.MessageDeliveryStatus, context)
        : undefined,
    Proximity: output.Proximity != null ? de_ProximityEventConfiguration(output.Proximity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FactoryPresetFreqsList
 */
const de_FactoryPresetFreqsList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FPorts
 */
const de_FPorts = (output: any, context: __SerdeContext): FPorts => {
  return {
    Applications: output.Applications != null ? de_Applications(output.Applications, context) : undefined,
    ClockSync: __expectInt32(output.ClockSync),
    Fuota: __expectInt32(output.Fuota),
    Multicast: __expectInt32(output.Multicast),
    Positioning: output.Positioning != null ? de_Positioning(output.Positioning, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FuotaTask
 */
const de_FuotaTask = (output: any, context: __SerdeContext): FuotaTask => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1FuotaTaskList
 */
const de_FuotaTaskList = (output: any, context: __SerdeContext): FuotaTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FuotaTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewayList
 */
const de_GatewayList = (output: any, context: __SerdeContext): GatewayListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GatewayListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GatewayListItem
 */
const de_GatewayListItem = (output: any, context: __SerdeContext): GatewayListItem => {
  return {
    DownlinkFrequency: __expectInt32(output.DownlinkFrequency),
    GatewayId: __expectString(output.GatewayId),
  } as any;
};

/**
 * deserializeAws_restJson1ImportedSidewalkDevice
 */
const de_ImportedSidewalkDevice = (output: any, context: __SerdeContext): ImportedSidewalkDevice => {
  return {
    LastUpdateTime:
      output.LastUpdateTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.LastUpdateTime))
        : undefined,
    OnboardingStatus: __expectString(output.OnboardingStatus),
    OnboardingStatusReason: __expectString(output.OnboardingStatusReason),
    SidewalkManufacturingSn: __expectString(output.SidewalkManufacturingSn),
  } as any;
};

/**
 * deserializeAws_restJson1ImportedWirelessDevice
 */
const de_ImportedWirelessDevice = (output: any, context: __SerdeContext): ImportedWirelessDevice => {
  return {
    Sidewalk: output.Sidewalk != null ? de_ImportedSidewalkDevice(output.Sidewalk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportedWirelessDeviceList
 */
const de_ImportedWirelessDeviceList = (output: any, context: __SerdeContext): ImportedWirelessDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportedWirelessDevice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JoinEuiFilters
 */
const de_JoinEuiFilters = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_JoinEuiRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JoinEuiRange
 */
const de_JoinEuiRange = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JoinEventConfiguration
 */
const de_JoinEventConfiguration = (output: any, context: __SerdeContext): JoinEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null ? de_LoRaWANJoinEventNotificationConfigurations(output.LoRaWAN, context) : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1JoinResourceTypeEventConfiguration
 */
const de_JoinResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): JoinResourceTypeEventConfiguration => {
  return {
    LoRaWAN: output.LoRaWAN != null ? de_LoRaWANJoinResourceTypeEventConfiguration(output.LoRaWAN, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANConnectionStatusEventNotificationConfigurations
 */
const de_LoRaWANConnectionStatusEventNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): LoRaWANConnectionStatusEventNotificationConfigurations => {
  return {
    GatewayEuiEventTopic: __expectString(output.GatewayEuiEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANConnectionStatusResourceTypeEventConfiguration
 */
const de_LoRaWANConnectionStatusResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): LoRaWANConnectionStatusResourceTypeEventConfiguration => {
  return {
    WirelessGatewayEventTopic: __expectString(output.WirelessGatewayEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANDevice
 */
const de_LoRaWANDevice = (output: any, context: __SerdeContext): LoRaWANDevice => {
  return {
    AbpV1_0_x: output.AbpV1_0_x != null ? de_AbpV1_0_x(output.AbpV1_0_x, context) : undefined,
    AbpV1_1: output.AbpV1_1 != null ? de_AbpV1_1(output.AbpV1_1, context) : undefined,
    DevEui: __expectString(output.DevEui),
    DeviceProfileId: __expectString(output.DeviceProfileId),
    FPorts: output.FPorts != null ? de_FPorts(output.FPorts, context) : undefined,
    OtaaV1_0_x: output.OtaaV1_0_x != null ? de_OtaaV1_0_x(output.OtaaV1_0_x, context) : undefined,
    OtaaV1_1: output.OtaaV1_1 != null ? de_OtaaV1_1(output.OtaaV1_1, context) : undefined,
    ServiceProfileId: __expectString(output.ServiceProfileId),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANDeviceMetadata
 */
const de_LoRaWANDeviceMetadata = (output: any, context: __SerdeContext): LoRaWANDeviceMetadata => {
  return {
    DataRate: __expectInt32(output.DataRate),
    DevEui: __expectString(output.DevEui),
    FPort: __expectInt32(output.FPort),
    Frequency: __expectInt32(output.Frequency),
    Gateways: output.Gateways != null ? de_LoRaWANGatewayMetadataList(output.Gateways, context) : undefined,
    Timestamp: __expectString(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANDeviceProfile
 */
const de_LoRaWANDeviceProfile = (output: any, context: __SerdeContext): LoRaWANDeviceProfile => {
  return {
    ClassBTimeout: __expectInt32(output.ClassBTimeout),
    ClassCTimeout: __expectInt32(output.ClassCTimeout),
    FactoryPresetFreqsList:
      output.FactoryPresetFreqsList != null
        ? de_FactoryPresetFreqsList(output.FactoryPresetFreqsList, context)
        : undefined,
    MacVersion: __expectString(output.MacVersion),
    MaxDutyCycle: __expectInt32(output.MaxDutyCycle),
    MaxEirp: __expectInt32(output.MaxEirp),
    PingSlotDr: __expectInt32(output.PingSlotDr),
    PingSlotFreq: __expectInt32(output.PingSlotFreq),
    PingSlotPeriod: __expectInt32(output.PingSlotPeriod),
    RegParamsRevision: __expectString(output.RegParamsRevision),
    RfRegion: __expectString(output.RfRegion),
    RxDataRate2: __expectInt32(output.RxDataRate2),
    RxDelay1: __expectInt32(output.RxDelay1),
    RxDrOffset1: __expectInt32(output.RxDrOffset1),
    RxFreq2: __expectInt32(output.RxFreq2),
    Supports32BitFCnt: __expectBoolean(output.Supports32BitFCnt),
    SupportsClassB: __expectBoolean(output.SupportsClassB),
    SupportsClassC: __expectBoolean(output.SupportsClassC),
    SupportsJoin: __expectBoolean(output.SupportsJoin),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANFuotaTaskGetInfo
 */
const de_LoRaWANFuotaTaskGetInfo = (output: any, context: __SerdeContext): LoRaWANFuotaTaskGetInfo => {
  return {
    RfRegion: __expectString(output.RfRegion),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.StartTime)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANGateway
 */
const de_LoRaWANGateway = (output: any, context: __SerdeContext): LoRaWANGateway => {
  return {
    Beaconing: output.Beaconing != null ? de_Beaconing(output.Beaconing, context) : undefined,
    GatewayEui: __expectString(output.GatewayEui),
    JoinEuiFilters: output.JoinEuiFilters != null ? de_JoinEuiFilters(output.JoinEuiFilters, context) : undefined,
    NetIdFilters: output.NetIdFilters != null ? de_NetIdFilters(output.NetIdFilters, context) : undefined,
    RfRegion: __expectString(output.RfRegion),
    SubBands: output.SubBands != null ? de_SubBands(output.SubBands, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANGatewayCurrentVersion
 */
const de_LoRaWANGatewayCurrentVersion = (output: any, context: __SerdeContext): LoRaWANGatewayCurrentVersion => {
  return {
    CurrentVersion:
      output.CurrentVersion != null ? de_LoRaWANGatewayVersion(output.CurrentVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANGatewayMetadata
 */
const de_LoRaWANGatewayMetadata = (output: any, context: __SerdeContext): LoRaWANGatewayMetadata => {
  return {
    GatewayEui: __expectString(output.GatewayEui),
    Rssi: __limitedParseDouble(output.Rssi),
    Snr: __limitedParseDouble(output.Snr),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANGatewayMetadataList
 */
const de_LoRaWANGatewayMetadataList = (output: any, context: __SerdeContext): LoRaWANGatewayMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LoRaWANGatewayMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LoRaWANGatewayVersion
 */
const de_LoRaWANGatewayVersion = (output: any, context: __SerdeContext): LoRaWANGatewayVersion => {
  return {
    Model: __expectString(output.Model),
    PackageVersion: __expectString(output.PackageVersion),
    Station: __expectString(output.Station),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANGetServiceProfileInfo
 */
const de_LoRaWANGetServiceProfileInfo = (output: any, context: __SerdeContext): LoRaWANGetServiceProfileInfo => {
  return {
    AddGwMetadata: __expectBoolean(output.AddGwMetadata),
    ChannelMask: __expectString(output.ChannelMask),
    DevStatusReqFreq: __expectInt32(output.DevStatusReqFreq),
    DlBucketSize: __expectInt32(output.DlBucketSize),
    DlRate: __expectInt32(output.DlRate),
    DlRatePolicy: __expectString(output.DlRatePolicy),
    DrMax: __expectInt32(output.DrMax),
    DrMin: __expectInt32(output.DrMin),
    HrAllowed: __expectBoolean(output.HrAllowed),
    MinGwDiversity: __expectInt32(output.MinGwDiversity),
    NwkGeoLoc: __expectBoolean(output.NwkGeoLoc),
    PrAllowed: __expectBoolean(output.PrAllowed),
    RaAllowed: __expectBoolean(output.RaAllowed),
    ReportDevStatusBattery: __expectBoolean(output.ReportDevStatusBattery),
    ReportDevStatusMargin: __expectBoolean(output.ReportDevStatusMargin),
    TargetPer: __expectInt32(output.TargetPer),
    UlBucketSize: __expectInt32(output.UlBucketSize),
    UlRate: __expectInt32(output.UlRate),
    UlRatePolicy: __expectString(output.UlRatePolicy),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANJoinEventNotificationConfigurations
 */
const de_LoRaWANJoinEventNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): LoRaWANJoinEventNotificationConfigurations => {
  return {
    DevEuiEventTopic: __expectString(output.DevEuiEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANJoinResourceTypeEventConfiguration
 */
const de_LoRaWANJoinResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): LoRaWANJoinResourceTypeEventConfiguration => {
  return {
    WirelessDeviceEventTopic: __expectString(output.WirelessDeviceEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANListDevice
 */
const de_LoRaWANListDevice = (output: any, context: __SerdeContext): LoRaWANListDevice => {
  return {
    DevEui: __expectString(output.DevEui),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANMulticastGet
 */
const de_LoRaWANMulticastGet = (output: any, context: __SerdeContext): LoRaWANMulticastGet => {
  return {
    DlClass: __expectString(output.DlClass),
    NumberOfDevicesInGroup: __expectInt32(output.NumberOfDevicesInGroup),
    NumberOfDevicesRequested: __expectInt32(output.NumberOfDevicesRequested),
    RfRegion: __expectString(output.RfRegion),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANMulticastSession
 */
const de_LoRaWANMulticastSession = (output: any, context: __SerdeContext): LoRaWANMulticastSession => {
  return {
    DlDr: __expectInt32(output.DlDr),
    DlFreq: __expectInt32(output.DlFreq),
    SessionStartTime:
      output.SessionStartTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.SessionStartTime))
        : undefined,
    SessionTimeout: __expectInt32(output.SessionTimeout),
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANSendDataToDevice
 */
const de_LoRaWANSendDataToDevice = (output: any, context: __SerdeContext): LoRaWANSendDataToDevice => {
  return {
    FPort: __expectInt32(output.FPort),
    ParticipatingGateways:
      output.ParticipatingGateways != null
        ? de_ParticipatingGateways(output.ParticipatingGateways, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANUpdateGatewayTaskCreate
 */
const de_LoRaWANUpdateGatewayTaskCreate = (output: any, context: __SerdeContext): LoRaWANUpdateGatewayTaskCreate => {
  return {
    CurrentVersion:
      output.CurrentVersion != null ? de_LoRaWANGatewayVersion(output.CurrentVersion, context) : undefined,
    SigKeyCrc: __expectLong(output.SigKeyCrc),
    UpdateSignature: __expectString(output.UpdateSignature),
    UpdateVersion: output.UpdateVersion != null ? de_LoRaWANGatewayVersion(output.UpdateVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoRaWANUpdateGatewayTaskEntry
 */
const de_LoRaWANUpdateGatewayTaskEntry = (output: any, context: __SerdeContext): LoRaWANUpdateGatewayTaskEntry => {
  return {
    CurrentVersion:
      output.CurrentVersion != null ? de_LoRaWANGatewayVersion(output.CurrentVersion, context) : undefined,
    UpdateVersion: output.UpdateVersion != null ? de_LoRaWANGatewayVersion(output.UpdateVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MessageDeliveryStatusEventConfiguration
 */
const de_MessageDeliveryStatusEventConfiguration = (
  output: any,
  context: __SerdeContext
): MessageDeliveryStatusEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null ? de_SidewalkEventNotificationConfigurations(output.Sidewalk, context) : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1MessageDeliveryStatusResourceTypeEventConfiguration
 */
const de_MessageDeliveryStatusResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): MessageDeliveryStatusResourceTypeEventConfiguration => {
  return {
    Sidewalk: output.Sidewalk != null ? de_SidewalkResourceTypeEventConfiguration(output.Sidewalk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MulticastGroup
 */
const de_MulticastGroup = (output: any, context: __SerdeContext): MulticastGroup => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1MulticastGroupByFuotaTask
 */
const de_MulticastGroupByFuotaTask = (output: any, context: __SerdeContext): MulticastGroupByFuotaTask => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_restJson1MulticastGroupList
 */
const de_MulticastGroupList = (output: any, context: __SerdeContext): MulticastGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MulticastGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MulticastGroupListByFuotaTask
 */
const de_MulticastGroupListByFuotaTask = (output: any, context: __SerdeContext): MulticastGroupByFuotaTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MulticastGroupByFuotaTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetIdFilters
 */
const de_NetIdFilters = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkAnalyzerConfigurationList
 */
const de_NetworkAnalyzerConfigurationList = (output: any, context: __SerdeContext): NetworkAnalyzerConfigurations[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkAnalyzerConfigurations(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkAnalyzerConfigurations
 */
const de_NetworkAnalyzerConfigurations = (output: any, context: __SerdeContext): NetworkAnalyzerConfigurations => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1OtaaV1_0_x
 */
const de_OtaaV1_0_x = (output: any, context: __SerdeContext): OtaaV1_0_x => {
  return {
    AppEui: __expectString(output.AppEui),
    AppKey: __expectString(output.AppKey),
    GenAppKey: __expectString(output.GenAppKey),
  } as any;
};

/**
 * deserializeAws_restJson1OtaaV1_1
 */
const de_OtaaV1_1 = (output: any, context: __SerdeContext): OtaaV1_1 => {
  return {
    AppKey: __expectString(output.AppKey),
    JoinEui: __expectString(output.JoinEui),
    NwkKey: __expectString(output.NwkKey),
  } as any;
};

/**
 * deserializeAws_restJson1ParticipatingGateways
 */
const de_ParticipatingGateways = (output: any, context: __SerdeContext): ParticipatingGateways => {
  return {
    DownlinkMode: __expectString(output.DownlinkMode),
    GatewayList: output.GatewayList != null ? de_GatewayList(output.GatewayList, context) : undefined,
    TransmissionInterval: __expectInt32(output.TransmissionInterval),
  } as any;
};

/**
 * deserializeAws_restJson1PositionConfigurationItem
 */
const de_PositionConfigurationItem = (output: any, context: __SerdeContext): PositionConfigurationItem => {
  return {
    Destination: __expectString(output.Destination),
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
    ResourceType: __expectString(output.ResourceType),
    Solvers: output.Solvers != null ? de_PositionSolverDetails(output.Solvers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PositionConfigurationList
 */
const de_PositionConfigurationList = (output: any, context: __SerdeContext): PositionConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PositionConfigurationItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PositionCoordinate
 */
const de_PositionCoordinate = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseFloat32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Positioning
 */
const de_Positioning = (output: any, context: __SerdeContext): Positioning => {
  return {
    ClockSync: __expectInt32(output.ClockSync),
    Gnss: __expectInt32(output.Gnss),
    Stream: __expectInt32(output.Stream),
  } as any;
};

/**
 * deserializeAws_restJson1PositionSolverDetails
 */
const de_PositionSolverDetails = (output: any, context: __SerdeContext): PositionSolverDetails => {
  return {
    SemtechGnss: output.SemtechGnss != null ? de_SemtechGnssDetail(output.SemtechGnss, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PrivateKeysList
 */
const de_PrivateKeysList = (output: any, context: __SerdeContext): CertificateList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateList(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProximityEventConfiguration
 */
const de_ProximityEventConfiguration = (output: any, context: __SerdeContext): ProximityEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null ? de_SidewalkEventNotificationConfigurations(output.Sidewalk, context) : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1ProximityResourceTypeEventConfiguration
 */
const de_ProximityResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): ProximityResourceTypeEventConfiguration => {
  return {
    Sidewalk: output.Sidewalk != null ? de_SidewalkResourceTypeEventConfiguration(output.Sidewalk, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SemtechGnssDetail
 */
const de_SemtechGnssDetail = (output: any, context: __SerdeContext): SemtechGnssDetail => {
  return {
    Fec: __expectString(output.Fec),
    Provider: __expectString(output.Provider),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceProfile
 */
const de_ServiceProfile = (output: any, context: __SerdeContext): ServiceProfile => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ServiceProfileList
 */
const de_ServiceProfileList = (output: any, context: __SerdeContext): ServiceProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SessionKeysAbpV1_0_x
 */
const de_SessionKeysAbpV1_0_x = (output: any, context: __SerdeContext): SessionKeysAbpV1_0_x => {
  return {
    AppSKey: __expectString(output.AppSKey),
    NwkSKey: __expectString(output.NwkSKey),
  } as any;
};

/**
 * deserializeAws_restJson1SessionKeysAbpV1_1
 */
const de_SessionKeysAbpV1_1 = (output: any, context: __SerdeContext): SessionKeysAbpV1_1 => {
  return {
    AppSKey: __expectString(output.AppSKey),
    FNwkSIntKey: __expectString(output.FNwkSIntKey),
    NwkSEncKey: __expectString(output.NwkSEncKey),
    SNwkSIntKey: __expectString(output.SNwkSIntKey),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkAccountInfo
 */
const de_SidewalkAccountInfo = (output: any, context: __SerdeContext): SidewalkAccountInfo => {
  return {
    AmazonId: __expectString(output.AmazonId),
    AppServerPrivateKey: __expectString(output.AppServerPrivateKey),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkAccountInfoWithFingerprint
 */
const de_SidewalkAccountInfoWithFingerprint = (
  output: any,
  context: __SerdeContext
): SidewalkAccountInfoWithFingerprint => {
  return {
    AmazonId: __expectString(output.AmazonId),
    Arn: __expectString(output.Arn),
    Fingerprint: __expectString(output.Fingerprint),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkAccountList
 */
const de_SidewalkAccountList = (output: any, context: __SerdeContext): SidewalkAccountInfoWithFingerprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SidewalkAccountInfoWithFingerprint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SidewalkDevice
 */
const de_SidewalkDevice = (output: any, context: __SerdeContext): SidewalkDevice => {
  return {
    AmazonId: __expectString(output.AmazonId),
    CertificateId: __expectString(output.CertificateId),
    DeviceCertificates:
      output.DeviceCertificates != null ? de_DeviceCertificateList(output.DeviceCertificates, context) : undefined,
    DeviceProfileId: __expectString(output.DeviceProfileId),
    PrivateKeys: output.PrivateKeys != null ? de_PrivateKeysList(output.PrivateKeys, context) : undefined,
    SidewalkId: __expectString(output.SidewalkId),
    SidewalkManufacturingSn: __expectString(output.SidewalkManufacturingSn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkDeviceMetadata
 */
const de_SidewalkDeviceMetadata = (output: any, context: __SerdeContext): SidewalkDeviceMetadata => {
  return {
    BatteryLevel: __expectString(output.BatteryLevel),
    DeviceState: __expectString(output.DeviceState),
    Event: __expectString(output.Event),
    Rssi: __expectInt32(output.Rssi),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkEventNotificationConfigurations
 */
const de_SidewalkEventNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): SidewalkEventNotificationConfigurations => {
  return {
    AmazonIdEventTopic: __expectString(output.AmazonIdEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkGetDeviceProfile
 */
const de_SidewalkGetDeviceProfile = (output: any, context: __SerdeContext): SidewalkGetDeviceProfile => {
  return {
    ApplicationServerPublicKey: __expectString(output.ApplicationServerPublicKey),
    DakCertificateMetadata:
      output.DakCertificateMetadata != null
        ? de_DakCertificateMetadataList(output.DakCertificateMetadata, context)
        : undefined,
    QualificationStatus: __expectBoolean(output.QualificationStatus),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkGetStartImportInfo
 */
const de_SidewalkGetStartImportInfo = (output: any, context: __SerdeContext): SidewalkGetStartImportInfo => {
  return {
    DeviceCreationFileList:
      output.DeviceCreationFileList != null
        ? de_DeviceCreationFileList(output.DeviceCreationFileList, context)
        : undefined,
    Role: __expectString(output.Role),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkListDevice
 */
const de_SidewalkListDevice = (output: any, context: __SerdeContext): SidewalkListDevice => {
  return {
    AmazonId: __expectString(output.AmazonId),
    DeviceCertificates:
      output.DeviceCertificates != null ? de_DeviceCertificateList(output.DeviceCertificates, context) : undefined,
    DeviceProfileId: __expectString(output.DeviceProfileId),
    SidewalkId: __expectString(output.SidewalkId),
    SidewalkManufacturingSn: __expectString(output.SidewalkManufacturingSn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_restJson1SidewalkResourceTypeEventConfiguration
 */
const de_SidewalkResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): SidewalkResourceTypeEventConfiguration => {
  return {
    WirelessDeviceEventTopic: __expectString(output.WirelessDeviceEventTopic),
  } as any;
};

/**
 * deserializeAws_restJson1SubBands
 */
const de_SubBands = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TraceContent
 */
const de_TraceContent = (output: any, context: __SerdeContext): TraceContent => {
  return {
    LogLevel: __expectString(output.LogLevel),
    WirelessDeviceFrameInfo: __expectString(output.WirelessDeviceFrameInfo),
  } as any;
};

/**
 * deserializeAws_restJson1UpdateWirelessGatewayTaskCreate
 */
const de_UpdateWirelessGatewayTaskCreate = (output: any, context: __SerdeContext): UpdateWirelessGatewayTaskCreate => {
  return {
    LoRaWAN: output.LoRaWAN != null ? de_LoRaWANUpdateGatewayTaskCreate(output.LoRaWAN, context) : undefined,
    UpdateDataRole: __expectString(output.UpdateDataRole),
    UpdateDataSource: __expectString(output.UpdateDataSource),
  } as any;
};

/**
 * deserializeAws_restJson1UpdateWirelessGatewayTaskEntry
 */
const de_UpdateWirelessGatewayTaskEntry = (output: any, context: __SerdeContext): UpdateWirelessGatewayTaskEntry => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    LoRaWAN: output.LoRaWAN != null ? de_LoRaWANUpdateGatewayTaskEntry(output.LoRaWAN, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WirelessDeviceEventLogOption
 */
const de_WirelessDeviceEventLogOption = (output: any, context: __SerdeContext): WirelessDeviceEventLogOption => {
  return {
    Event: __expectString(output.Event),
    LogLevel: __expectString(output.LogLevel),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessDeviceEventLogOptionList
 */
const de_WirelessDeviceEventLogOptionList = (output: any, context: __SerdeContext): WirelessDeviceEventLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessDeviceEventLogOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessDeviceImportTask
 */
const de_WirelessDeviceImportTask = (output: any, context: __SerdeContext): WirelessDeviceImportTask => {
  return {
    Arn: __expectString(output.Arn),
    CreationTime:
      output.CreationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.CreationTime)) : undefined,
    DestinationName: __expectString(output.DestinationName),
    FailedImportedDeviceCount: __expectLong(output.FailedImportedDeviceCount),
    Id: __expectString(output.Id),
    InitializedImportedDeviceCount: __expectLong(output.InitializedImportedDeviceCount),
    OnboardedImportedDeviceCount: __expectLong(output.OnboardedImportedDeviceCount),
    PendingImportedDeviceCount: __expectLong(output.PendingImportedDeviceCount),
    Sidewalk: output.Sidewalk != null ? de_SidewalkGetStartImportInfo(output.Sidewalk, context) : undefined,
    Status: __expectString(output.Status),
    StatusReason: __expectString(output.StatusReason),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessDeviceImportTaskList
 */
const de_WirelessDeviceImportTaskList = (output: any, context: __SerdeContext): WirelessDeviceImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessDeviceImportTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessDeviceList
 */
const de_WirelessDeviceList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessDeviceLogOption
 */
const de_WirelessDeviceLogOption = (output: any, context: __SerdeContext): WirelessDeviceLogOption => {
  return {
    Events: output.Events != null ? de_WirelessDeviceEventLogOptionList(output.Events, context) : undefined,
    LogLevel: __expectString(output.LogLevel),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessDeviceLogOptionList
 */
const de_WirelessDeviceLogOptionList = (output: any, context: __SerdeContext): WirelessDeviceLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessDeviceLogOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessDeviceStatistics
 */
const de_WirelessDeviceStatistics = (output: any, context: __SerdeContext): WirelessDeviceStatistics => {
  return {
    Arn: __expectString(output.Arn),
    DestinationName: __expectString(output.DestinationName),
    FuotaDeviceStatus: __expectString(output.FuotaDeviceStatus),
    Id: __expectString(output.Id),
    LastUplinkReceivedAt: __expectString(output.LastUplinkReceivedAt),
    LoRaWAN: output.LoRaWAN != null ? de_LoRaWANListDevice(output.LoRaWAN, context) : undefined,
    McGroupId: __expectInt32(output.McGroupId),
    MulticastDeviceStatus: __expectString(output.MulticastDeviceStatus),
    Name: __expectString(output.Name),
    Sidewalk: output.Sidewalk != null ? de_SidewalkListDevice(output.Sidewalk, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessDeviceStatisticsList
 */
const de_WirelessDeviceStatisticsList = (output: any, context: __SerdeContext): WirelessDeviceStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessDeviceStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessGatewayEventLogOption
 */
const de_WirelessGatewayEventLogOption = (output: any, context: __SerdeContext): WirelessGatewayEventLogOption => {
  return {
    Event: __expectString(output.Event),
    LogLevel: __expectString(output.LogLevel),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessGatewayEventLogOptionList
 */
const de_WirelessGatewayEventLogOptionList = (
  output: any,
  context: __SerdeContext
): WirelessGatewayEventLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessGatewayEventLogOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessGatewayList
 */
const de_WirelessGatewayList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessGatewayLogOption
 */
const de_WirelessGatewayLogOption = (output: any, context: __SerdeContext): WirelessGatewayLogOption => {
  return {
    Events: output.Events != null ? de_WirelessGatewayEventLogOptionList(output.Events, context) : undefined,
    LogLevel: __expectString(output.LogLevel),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessGatewayLogOptionList
 */
const de_WirelessGatewayLogOptionList = (output: any, context: __SerdeContext): WirelessGatewayLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessGatewayLogOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessGatewayStatistics
 */
const de_WirelessGatewayStatistics = (output: any, context: __SerdeContext): WirelessGatewayStatistics => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUplinkReceivedAt: __expectString(output.LastUplinkReceivedAt),
    LoRaWAN: output.LoRaWAN != null ? de_LoRaWANGateway(output.LoRaWAN, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1WirelessGatewayStatisticsList
 */
const de_WirelessGatewayStatisticsList = (output: any, context: __SerdeContext): WirelessGatewayStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WirelessGatewayStatistics(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WirelessGatewayTaskDefinitionList
 */
const de_WirelessGatewayTaskDefinitionList = (
  output: any,
  context: __SerdeContext
): UpdateWirelessGatewayTaskEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateWirelessGatewayTaskEntry(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
