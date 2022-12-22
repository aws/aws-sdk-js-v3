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
  parseRfc3339DateTime as __parseRfc3339DateTime,
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
  LoRaWANMulticastMetadata,
  LoRaWANMulticastSession,
  LoRaWANSendDataToDevice,
  LoRaWANServiceProfile,
  LoRaWANUpdateGatewayTaskCreate,
  LoRaWANUpdateGatewayTaskEntry,
  LteLocalId,
  LteNmrObj,
  LteObj,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  MulticastGroup,
  MulticastGroupByFuotaTask,
  MulticastWirelessMetadata,
  NetworkAnalyzerConfigurations,
  OtaaV1_0_x,
  OtaaV1_1,
  ParticipatingGateways,
  PositionConfigurationItem,
  Positioning,
  PositionSolverConfigurations,
  PositionSolverDetails,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  ResourceNotFoundException,
  SemtechGnssConfiguration,
  SemtechGnssDetail,
  ServiceProfile,
  SessionKeysAbpV1_0_x,
  SessionKeysAbpV1_1,
  SidewalkAccountInfo,
  SidewalkAccountInfoWithFingerprint,
  SidewalkDevice,
  SidewalkDeviceMetadata,
  SidewalkEventNotificationConfigurations,
  SidewalkListDevice,
  SidewalkResourceTypeEventConfiguration,
  Tag,
  TdscdmaLocalId,
  TdscdmaNmrObj,
  TdscdmaObj,
  ThrottlingException,
  TraceContent,
  UpdateWirelessGatewayTaskCreate,
  UpdateWirelessGatewayTaskEntry,
  ValidationException,
  WcdmaLocalId,
  WcdmaNmrObj,
  WcdmaObj,
  WiFiAccessPoint,
  WirelessDeviceEventLogOption,
  WirelessDeviceLogOption,
  WirelessDeviceStatistics,
  WirelessGatewayEventLogOption,
  WirelessGatewayLogOption,
  WirelessGatewayStatistics,
} from "../models/models_0";
import {
  LoRaWANStartFuotaTask,
  LoRaWANUpdateDevice,
  SidewalkSendDataToDevice,
  SidewalkUpdateAccount,
  TooManyTagsException,
  UpdateAbpV1_0_x,
  UpdateAbpV1_1,
  UpdateFPorts,
  WirelessMetadata,
} from "../models/models_1";

export const serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = async (
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
    ...(input.Sidewalk != null && { Sidewalk: serializeAws_restJson1SidewalkAccountInfo(input.Sidewalk, context) }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommand = async (
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

export const serializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand = async (
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

export const serializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommand = async (
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

export const serializeAws_restJson1AssociateWirelessDeviceWithThingCommand = async (
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

export const serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = async (
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

export const serializeAws_restJson1AssociateWirelessGatewayWithThingCommand = async (
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

export const serializeAws_restJson1CancelMulticastGroupSessionCommand = async (
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

export const serializeAws_restJson1CreateDestinationCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateDeviceProfileCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANDeviceProfile(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateFuotaTaskCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANFuotaTask(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateMulticastGroupCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANMulticast(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TraceContent != null && {
      TraceContent: serializeAws_restJson1TraceContent(input.TraceContent, context),
    }),
    ...(input.WirelessDevices != null && {
      WirelessDevices: serializeAws_restJson1WirelessDeviceList(input.WirelessDevices, context),
    }),
    ...(input.WirelessGateways != null && {
      WirelessGateways: serializeAws_restJson1WirelessGatewayList(input.WirelessGateways, context),
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

export const serializeAws_restJson1CreateServiceProfileCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANServiceProfile(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateWirelessDeviceCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANDevice(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Positioning != null && { Positioning: input.Positioning }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateWirelessGatewayCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANGateway(input.LoRaWAN, context) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateWirelessGatewayTaskCommand = async (
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

export const serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.Update != null && {
      Update: serializeAws_restJson1UpdateWirelessGatewayTaskCreate(input.Update, context),
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

export const serializeAws_restJson1DeleteDestinationCommand = async (
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

export const serializeAws_restJson1DeleteDeviceProfileCommand = async (
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

export const serializeAws_restJson1DeleteFuotaTaskCommand = async (
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

export const serializeAws_restJson1DeleteMulticastGroupCommand = async (
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

export const serializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommand = async (
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

export const serializeAws_restJson1DeleteQueuedMessagesCommand = async (
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

export const serializeAws_restJson1DeleteServiceProfileCommand = async (
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

export const serializeAws_restJson1DeleteWirelessDeviceCommand = async (
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

export const serializeAws_restJson1DeleteWirelessGatewayCommand = async (
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

export const serializeAws_restJson1DeleteWirelessGatewayTaskCommand = async (
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

export const serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = async (
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

export const serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = async (
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

export const serializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommand = async (
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

export const serializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand = async (
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

export const serializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand = async (
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

export const serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = async (
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

export const serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = async (
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

export const serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = async (
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

export const serializeAws_restJson1GetDestinationCommand = async (
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

export const serializeAws_restJson1GetDeviceProfileCommand = async (
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

export const serializeAws_restJson1GetEventConfigurationByResourceTypesCommand = async (
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

export const serializeAws_restJson1GetFuotaTaskCommand = async (
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

export const serializeAws_restJson1GetLogLevelsByResourceTypesCommand = async (
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

export const serializeAws_restJson1GetMulticastGroupCommand = async (
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

export const serializeAws_restJson1GetMulticastGroupSessionCommand = async (
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

export const serializeAws_restJson1GetNetworkAnalyzerConfigurationCommand = async (
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

export const serializeAws_restJson1GetPartnerAccountCommand = async (
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

export const serializeAws_restJson1GetPositionCommand = async (
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

export const serializeAws_restJson1GetPositionConfigurationCommand = async (
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

export const serializeAws_restJson1GetPositionEstimateCommand = async (
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
    ...(input.CellTowers != null && { CellTowers: serializeAws_restJson1CellTowers(input.CellTowers, context) }),
    ...(input.Gnss != null && { Gnss: serializeAws_restJson1Gnss(input.Gnss, context) }),
    ...(input.Ip != null && { Ip: serializeAws_restJson1Ip(input.Ip, context) }),
    ...(input.Timestamp != null && { Timestamp: Math.round(input.Timestamp.getTime() / 1000) }),
    ...(input.WiFiAccessPoints != null && {
      WiFiAccessPoints: serializeAws_restJson1WiFiAccessPoints(input.WiFiAccessPoints, context),
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

export const serializeAws_restJson1GetResourceEventConfigurationCommand = async (
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

export const serializeAws_restJson1GetResourceLogLevelCommand = async (
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

export const serializeAws_restJson1GetResourcePositionCommand = async (
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

export const serializeAws_restJson1GetServiceEndpointCommand = async (
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

export const serializeAws_restJson1GetServiceProfileCommand = async (
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

export const serializeAws_restJson1GetWirelessDeviceCommand = async (
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

export const serializeAws_restJson1GetWirelessDeviceStatisticsCommand = async (
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

export const serializeAws_restJson1GetWirelessGatewayCommand = async (
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

export const serializeAws_restJson1GetWirelessGatewayCertificateCommand = async (
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

export const serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = async (
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

export const serializeAws_restJson1GetWirelessGatewayStatisticsCommand = async (
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

export const serializeAws_restJson1GetWirelessGatewayTaskCommand = async (
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

export const serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = async (
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

export const serializeAws_restJson1ListDestinationsCommand = async (
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

export const serializeAws_restJson1ListDeviceProfilesCommand = async (
  input: ListDeviceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/device-profiles";
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

export const serializeAws_restJson1ListEventConfigurationsCommand = async (
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

export const serializeAws_restJson1ListFuotaTasksCommand = async (
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

export const serializeAws_restJson1ListMulticastGroupsCommand = async (
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

export const serializeAws_restJson1ListMulticastGroupsByFuotaTaskCommand = async (
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

export const serializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand = async (
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

export const serializeAws_restJson1ListPartnerAccountsCommand = async (
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

export const serializeAws_restJson1ListPositionConfigurationsCommand = async (
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

export const serializeAws_restJson1ListQueuedMessagesCommand = async (
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

export const serializeAws_restJson1ListServiceProfilesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListWirelessDevicesCommand = async (
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

export const serializeAws_restJson1ListWirelessGatewaysCommand = async (
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

export const serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = async (
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

export const serializeAws_restJson1PutPositionConfigurationCommand = async (
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
    ...(input.Solvers != null && {
      Solvers: serializeAws_restJson1PositionSolverConfigurations(input.Solvers, context),
    }),
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

export const serializeAws_restJson1PutResourceLogLevelCommand = async (
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

export const serializeAws_restJson1ResetAllResourceLogLevelsCommand = async (
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

export const serializeAws_restJson1ResetResourceLogLevelCommand = async (
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

export const serializeAws_restJson1SendDataToMulticastGroupCommand = async (
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
      WirelessMetadata: serializeAws_restJson1MulticastWirelessMetadata(input.WirelessMetadata, context),
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

export const serializeAws_restJson1SendDataToWirelessDeviceCommand = async (
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
    ...(input.WirelessMetadata != null && {
      WirelessMetadata: serializeAws_restJson1WirelessMetadata(input.WirelessMetadata, context),
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

export const serializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1StartFuotaTaskCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANStartFuotaTask(input.LoRaWAN, context) }),
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

export const serializeAws_restJson1StartMulticastGroupSessionCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANMulticastSession(input.LoRaWAN, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1TestWirelessDeviceCommand = async (
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateDestinationCommand = async (
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

export const serializeAws_restJson1UpdateEventConfigurationByResourceTypesCommand = async (
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
      ConnectionStatus: serializeAws_restJson1ConnectionStatusResourceTypeEventConfiguration(
        input.ConnectionStatus,
        context
      ),
    }),
    ...(input.DeviceRegistrationState != null && {
      DeviceRegistrationState: serializeAws_restJson1DeviceRegistrationStateResourceTypeEventConfiguration(
        input.DeviceRegistrationState,
        context
      ),
    }),
    ...(input.Join != null && { Join: serializeAws_restJson1JoinResourceTypeEventConfiguration(input.Join, context) }),
    ...(input.MessageDeliveryStatus != null && {
      MessageDeliveryStatus: serializeAws_restJson1MessageDeliveryStatusResourceTypeEventConfiguration(
        input.MessageDeliveryStatus,
        context
      ),
    }),
    ...(input.Proximity != null && {
      Proximity: serializeAws_restJson1ProximityResourceTypeEventConfiguration(input.Proximity, context),
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

export const serializeAws_restJson1UpdateFuotaTaskCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANFuotaTask(input.LoRaWAN, context) }),
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

export const serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = async (
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
      WirelessDeviceLogOptions: serializeAws_restJson1WirelessDeviceLogOptionList(
        input.WirelessDeviceLogOptions,
        context
      ),
    }),
    ...(input.WirelessGatewayLogOptions != null && {
      WirelessGatewayLogOptions: serializeAws_restJson1WirelessGatewayLogOptionList(
        input.WirelessGatewayLogOptions,
        context
      ),
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

export const serializeAws_restJson1UpdateMulticastGroupCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANMulticast(input.LoRaWAN, context) }),
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

export const serializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand = async (
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
    ...(input.TraceContent != null && {
      TraceContent: serializeAws_restJson1TraceContent(input.TraceContent, context),
    }),
    ...(input.WirelessDevicesToAdd != null && {
      WirelessDevicesToAdd: serializeAws_restJson1WirelessDeviceList(input.WirelessDevicesToAdd, context),
    }),
    ...(input.WirelessDevicesToRemove != null && {
      WirelessDevicesToRemove: serializeAws_restJson1WirelessDeviceList(input.WirelessDevicesToRemove, context),
    }),
    ...(input.WirelessGatewaysToAdd != null && {
      WirelessGatewaysToAdd: serializeAws_restJson1WirelessGatewayList(input.WirelessGatewaysToAdd, context),
    }),
    ...(input.WirelessGatewaysToRemove != null && {
      WirelessGatewaysToRemove: serializeAws_restJson1WirelessGatewayList(input.WirelessGatewaysToRemove, context),
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

export const serializeAws_restJson1UpdatePartnerAccountCommand = async (
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
    ...(input.Sidewalk != null && { Sidewalk: serializeAws_restJson1SidewalkUpdateAccount(input.Sidewalk, context) }),
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

export const serializeAws_restJson1UpdatePositionCommand = async (
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
    ...(input.Position != null && { Position: serializeAws_restJson1PositionCoordinate(input.Position, context) }),
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

export const serializeAws_restJson1UpdateResourceEventConfigurationCommand = async (
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
      ConnectionStatus: serializeAws_restJson1ConnectionStatusEventConfiguration(input.ConnectionStatus, context),
    }),
    ...(input.DeviceRegistrationState != null && {
      DeviceRegistrationState: serializeAws_restJson1DeviceRegistrationStateEventConfiguration(
        input.DeviceRegistrationState,
        context
      ),
    }),
    ...(input.Join != null && { Join: serializeAws_restJson1JoinEventConfiguration(input.Join, context) }),
    ...(input.MessageDeliveryStatus != null && {
      MessageDeliveryStatus: serializeAws_restJson1MessageDeliveryStatusEventConfiguration(
        input.MessageDeliveryStatus,
        context
      ),
    }),
    ...(input.Proximity != null && {
      Proximity: serializeAws_restJson1ProximityEventConfiguration(input.Proximity, context),
    }),
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

export const serializeAws_restJson1UpdateResourcePositionCommand = async (
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

export const serializeAws_restJson1UpdateWirelessDeviceCommand = async (
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
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANUpdateDevice(input.LoRaWAN, context) }),
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

export const serializeAws_restJson1UpdateWirelessGatewayCommand = async (
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
    ...(input.JoinEuiFilters != null && {
      JoinEuiFilters: serializeAws_restJson1JoinEuiFilters(input.JoinEuiFilters, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NetIdFilters != null && {
      NetIdFilters: serializeAws_restJson1NetIdFilters(input.NetIdFilters, context),
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

export const deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = deserializeAws_restJson1SidewalkAccountInfo(data.Sidewalk, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWirelessDeviceWithThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateWirelessDeviceWithThingCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommandError(output, context);
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

const deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateWirelessGatewayWithThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AssociateWirelessGatewayWithThingCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelMulticastGroupSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelMulticastGroupSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDestinationCommandError(output, context);
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

const deserializeAws_restJson1CreateDestinationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeviceProfileCommandError(output, context);
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

const deserializeAws_restJson1CreateDeviceProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFuotaTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFuotaTaskCommandError(output, context);
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

const deserializeAws_restJson1CreateFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMulticastGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMulticastGroupCommandError(output, context);
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

const deserializeAws_restJson1CreateMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommandError(output, context);
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

const deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateServiceProfileCommandError(output, context);
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

const deserializeAws_restJson1CreateServiceProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWirelessDeviceCommandError(output, context);
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

const deserializeAws_restJson1CreateWirelessDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWirelessGatewayCommandError(output, context);
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

const deserializeAws_restJson1CreateWirelessGatewayCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWirelessGatewayTaskCommandError(output, context);
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

const deserializeAws_restJson1CreateWirelessGatewayTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommandError(output, context);
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

const deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDestinationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeviceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDeviceProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteQueuedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedMessagesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteQueuedMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteQueuedMessagesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteServiceProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteServiceProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWirelessDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWirelessGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWirelessGatewayCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWirelessGatewayTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWirelessGatewayTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDestinationCommandError(output, context);
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

const deserializeAws_restJson1GetDestinationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceProfileCommandError(output, context);
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
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANDeviceProfile(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1GetDeviceProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetEventConfigurationByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventConfigurationByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEventConfigurationByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = deserializeAws_restJson1ConnectionStatusResourceTypeEventConfiguration(
      data.ConnectionStatus,
      context
    );
  }
  if (data.DeviceRegistrationState != null) {
    contents.DeviceRegistrationState = deserializeAws_restJson1DeviceRegistrationStateResourceTypeEventConfiguration(
      data.DeviceRegistrationState,
      context
    );
  }
  if (data.Join != null) {
    contents.Join = deserializeAws_restJson1JoinResourceTypeEventConfiguration(data.Join, context);
  }
  if (data.MessageDeliveryStatus != null) {
    contents.MessageDeliveryStatus = deserializeAws_restJson1MessageDeliveryStatusResourceTypeEventConfiguration(
      data.MessageDeliveryStatus,
      context
    );
  }
  if (data.Proximity != null) {
    contents.Proximity = deserializeAws_restJson1ProximityResourceTypeEventConfiguration(data.Proximity, context);
  }
  return contents;
};

const deserializeAws_restJson1GetEventConfigurationByResourceTypesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFuotaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFuotaTaskCommandError(output, context);
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
  if (data.Id != null) {
    contents.Id = __expectString(data.Id);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANFuotaTaskGetInfo(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1GetFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLogLevelsByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogLevelsByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLogLevelsByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DefaultLogLevel != null) {
    contents.DefaultLogLevel = __expectString(data.DefaultLogLevel);
  }
  if (data.WirelessDeviceLogOptions != null) {
    contents.WirelessDeviceLogOptions = deserializeAws_restJson1WirelessDeviceLogOptionList(
      data.WirelessDeviceLogOptions,
      context
    );
  }
  if (data.WirelessGatewayLogOptions != null) {
    contents.WirelessGatewayLogOptions = deserializeAws_restJson1WirelessGatewayLogOptionList(
      data.WirelessGatewayLogOptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetLogLevelsByResourceTypesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMulticastGroupCommandError(output, context);
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
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANMulticastGet(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1GetMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMulticastGroupSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANMulticastSession(data.LoRaWAN, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMulticastGroupSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommandError(output, context);
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
    contents.TraceContent = deserializeAws_restJson1TraceContent(data.TraceContent, context);
  }
  if (data.WirelessDevices != null) {
    contents.WirelessDevices = deserializeAws_restJson1WirelessDeviceList(data.WirelessDevices, context);
  }
  if (data.WirelessGateways != null) {
    contents.WirelessGateways = deserializeAws_restJson1WirelessGatewayList(data.WirelessGateways, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartnerAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccountLinked != null) {
    contents.AccountLinked = __expectBoolean(data.AccountLinked);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = deserializeAws_restJson1SidewalkAccountInfoWithFingerprint(data.Sidewalk, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPartnerAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Accuracy != null) {
    contents.Accuracy = deserializeAws_restJson1Accuracy(data.Accuracy, context);
  }
  if (data.Position != null) {
    contents.Position = deserializeAws_restJson1PositionCoordinate(data.Position, context);
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

const deserializeAws_restJson1GetPositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPositionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPositionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Destination != null) {
    contents.Destination = __expectString(data.Destination);
  }
  if (data.Solvers != null) {
    contents.Solvers = deserializeAws_restJson1PositionSolverDetails(data.Solvers, context);
  }
  return contents;
};

const deserializeAws_restJson1GetPositionConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetPositionEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionEstimateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPositionEstimateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.GeoJsonPayload = data;
  return contents;
};

const deserializeAws_restJson1GetPositionEstimateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionStatus != null) {
    contents.ConnectionStatus = deserializeAws_restJson1ConnectionStatusEventConfiguration(
      data.ConnectionStatus,
      context
    );
  }
  if (data.DeviceRegistrationState != null) {
    contents.DeviceRegistrationState = deserializeAws_restJson1DeviceRegistrationStateEventConfiguration(
      data.DeviceRegistrationState,
      context
    );
  }
  if (data.Join != null) {
    contents.Join = deserializeAws_restJson1JoinEventConfiguration(data.Join, context);
  }
  if (data.MessageDeliveryStatus != null) {
    contents.MessageDeliveryStatus = deserializeAws_restJson1MessageDeliveryStatusEventConfiguration(
      data.MessageDeliveryStatus,
      context
    );
  }
  if (data.Proximity != null) {
    contents.Proximity = deserializeAws_restJson1ProximityEventConfiguration(data.Proximity, context);
  }
  return contents;
};

const deserializeAws_restJson1GetResourceEventConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceLogLevelCommandError(output, context);
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

const deserializeAws_restJson1GetResourceLogLevelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetResourcePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourcePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.GeoJsonPayload = data;
  return contents;
};

const deserializeAws_restJson1GetResourcePositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServiceEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceEndpointCommandError(output, context);
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

const deserializeAws_restJson1GetServiceEndpointCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceProfileCommandError(output, context);
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
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANGetServiceProfileInfo(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  return contents;
};

const deserializeAws_restJson1GetServiceProfileCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessDeviceCommandError(output, context);
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
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANDevice(data.LoRaWAN, context);
  }
  if (data.Name != null) {
    contents.Name = __expectString(data.Name);
  }
  if (data.Positioning != null) {
    contents.Positioning = __expectString(data.Positioning);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = deserializeAws_restJson1SidewalkDevice(data.Sidewalk, context);
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

const deserializeAws_restJson1GetWirelessDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessDeviceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessDeviceStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LastUplinkReceivedAt != null) {
    contents.LastUplinkReceivedAt = __expectString(data.LastUplinkReceivedAt);
  }
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANDeviceMetadata(data.LoRaWAN, context);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = deserializeAws_restJson1SidewalkDeviceMetadata(data.Sidewalk, context);
  }
  if (data.WirelessDeviceId != null) {
    contents.WirelessDeviceId = __expectString(data.WirelessDeviceId);
  }
  return contents;
};

const deserializeAws_restJson1GetWirelessDeviceStatisticsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessGatewayCommandError(output, context);
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
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANGateway(data.LoRaWAN, context);
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

const deserializeAws_restJson1GetWirelessGatewayCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessGatewayCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessGatewayCertificateCommandError(output, context);
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

const deserializeAws_restJson1GetWirelessGatewayCertificateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LoRaWAN != null) {
    contents.LoRaWAN = deserializeAws_restJson1LoRaWANGatewayCurrentVersion(data.LoRaWAN, context);
  }
  return contents;
};

const deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessGatewayStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessGatewayStatisticsCommandError(output, context);
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

const deserializeAws_restJson1GetWirelessGatewayStatisticsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessGatewayTaskCommandError(output, context);
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

const deserializeAws_restJson1GetWirelessGatewayTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommandError(output, context);
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
    contents.Update = deserializeAws_restJson1UpdateWirelessGatewayTaskCreate(data.Update, context);
  }
  return contents;
};

const deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDestinationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DestinationList != null) {
    contents.DestinationList = deserializeAws_restJson1DestinationList(data.DestinationList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDestinationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDeviceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeviceProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DeviceProfileList != null) {
    contents.DeviceProfileList = deserializeAws_restJson1DeviceProfileList(data.DeviceProfileList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeviceProfilesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEventConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEventConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventConfigurationsList != null) {
    contents.EventConfigurationsList = deserializeAws_restJson1EventConfigurationsList(
      data.EventConfigurationsList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEventConfigurationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFuotaTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFuotaTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFuotaTasksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FuotaTaskList != null) {
    contents.FuotaTaskList = deserializeAws_restJson1FuotaTaskList(data.FuotaTaskList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFuotaTasksCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMulticastGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMulticastGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MulticastGroupList != null) {
    contents.MulticastGroupList = deserializeAws_restJson1MulticastGroupList(data.MulticastGroupList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMulticastGroupsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMulticastGroupsByFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsByFuotaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMulticastGroupsByFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MulticastGroupList != null) {
    contents.MulticastGroupList = deserializeAws_restJson1MulticastGroupListByFuotaTask(
      data.MulticastGroupList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMulticastGroupsByFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NetworkAnalyzerConfigurationList != null) {
    contents.NetworkAnalyzerConfigurationList = deserializeAws_restJson1NetworkAnalyzerConfigurationList(
      data.NetworkAnalyzerConfigurationList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPartnerAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPartnerAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sidewalk != null) {
    contents.Sidewalk = deserializeAws_restJson1SidewalkAccountList(data.Sidewalk, context);
  }
  return contents;
};

const deserializeAws_restJson1ListPartnerAccountsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPositionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPositionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPositionConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PositionConfigurationList != null) {
    contents.PositionConfigurationList = deserializeAws_restJson1PositionConfigurationList(
      data.PositionConfigurationList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListPositionConfigurationsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListQueuedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuedMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListQueuedMessagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DownlinkQueueMessagesList != null) {
    contents.DownlinkQueueMessagesList = deserializeAws_restJson1DownlinkQueueMessagesList(
      data.DownlinkQueueMessagesList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListQueuedMessagesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListServiceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListServiceProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ServiceProfileList != null) {
    contents.ServiceProfileList = deserializeAws_restJson1ServiceProfileList(data.ServiceProfileList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListServiceProfilesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWirelessDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWirelessDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WirelessDeviceList != null) {
    contents.WirelessDeviceList = deserializeAws_restJson1WirelessDeviceStatisticsList(
      data.WirelessDeviceList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWirelessDevicesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWirelessGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWirelessGatewaysCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.WirelessGatewayList != null) {
    contents.WirelessGatewayList = deserializeAws_restJson1WirelessGatewayStatisticsList(
      data.WirelessGatewayList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWirelessGatewaysCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TaskDefinitions != null) {
    contents.TaskDefinitions = deserializeAws_restJson1WirelessGatewayTaskDefinitionList(data.TaskDefinitions, context);
  }
  return contents;
};

const deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutPositionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPositionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutPositionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutPositionConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutResourceLogLevelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutResourceLogLevelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ResetAllResourceLogLevelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAllResourceLogLevelsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetAllResourceLogLevelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ResetAllResourceLogLevelsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ResetResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResetResourceLogLevelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1ResetResourceLogLevelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendDataToMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToMulticastGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendDataToMulticastGroupCommandError(output, context);
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

const deserializeAws_restJson1SendDataToMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SendDataToWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendDataToWirelessDeviceCommandError(output, context);
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

const deserializeAws_restJson1SendDataToWirelessDeviceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartMulticastGroupSessionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StartMulticastGroupSessionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.iotwireless#TooManyTagsException":
      throw await deserializeAws_restJson1TooManyTagsExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TestWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestWirelessDeviceCommandError(output, context);
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

const deserializeAws_restJson1TestWirelessDeviceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDestinationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateDestinationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEventConfigurationByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventConfigurationByResourceTypesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEventConfigurationByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateEventConfigurationByResourceTypesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFuotaTaskCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFuotaTaskCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogLevelsByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMulticastGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateMulticastGroupCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePartnerAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdatePartnerAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdatePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePositionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdatePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdatePositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResourceEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceEventConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResourceEventConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.iotwireless#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateResourcePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePositionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourcePositionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateResourcePositionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWirelessDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateWirelessDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWirelessGatewayCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateWirelessGatewayCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.iotwireless#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotwireless#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotwireless#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.iotwireless#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1TooManyTagsExceptionResponse = async (
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1AbpV1_0_x = (input: AbpV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.DevAddr != null && { DevAddr: input.DevAddr }),
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
    ...(input.SessionKeys != null && {
      SessionKeys: serializeAws_restJson1SessionKeysAbpV1_0_x(input.SessionKeys, context),
    }),
  };
};

const serializeAws_restJson1AbpV1_1 = (input: AbpV1_1, context: __SerdeContext): any => {
  return {
    ...(input.DevAddr != null && { DevAddr: input.DevAddr }),
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
    ...(input.SessionKeys != null && {
      SessionKeys: serializeAws_restJson1SessionKeysAbpV1_1(input.SessionKeys, context),
    }),
  };
};

const serializeAws_restJson1ApplicationConfig = (input: ApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.DestinationName != null && { DestinationName: input.DestinationName }),
    ...(input.FPort != null && { FPort: input.FPort }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1Applications = (input: ApplicationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1AssistPosition = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1Beaconing = (input: Beaconing, context: __SerdeContext): any => {
  return {
    ...(input.DataRate != null && { DataRate: input.DataRate }),
    ...(input.Frequencies != null && {
      Frequencies: serializeAws_restJson1BeaconingFrequencies(input.Frequencies, context),
    }),
  };
};

const serializeAws_restJson1BeaconingFrequencies = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CdmaList = (input: CdmaObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CdmaObj(entry, context);
    });
};

const serializeAws_restJson1CdmaLocalId = (input: CdmaLocalId, context: __SerdeContext): any => {
  return {
    ...(input.CdmaChannel != null && { CdmaChannel: input.CdmaChannel }),
    ...(input.PnOffset != null && { PnOffset: input.PnOffset }),
  };
};

const serializeAws_restJson1CdmaNmrList = (input: CdmaNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CdmaNmrObj(entry, context);
    });
};

const serializeAws_restJson1CdmaNmrObj = (input: CdmaNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.BaseStationId != null && { BaseStationId: input.BaseStationId }),
    ...(input.CdmaChannel != null && { CdmaChannel: input.CdmaChannel }),
    ...(input.PilotPower != null && { PilotPower: input.PilotPower }),
    ...(input.PnOffset != null && { PnOffset: input.PnOffset }),
  };
};

const serializeAws_restJson1CdmaObj = (input: CdmaObj, context: __SerdeContext): any => {
  return {
    ...(input.BaseLat != null && { BaseLat: __serializeFloat(input.BaseLat) }),
    ...(input.BaseLng != null && { BaseLng: __serializeFloat(input.BaseLng) }),
    ...(input.BaseStationId != null && { BaseStationId: input.BaseStationId }),
    ...(input.CdmaLocalId != null && { CdmaLocalId: serializeAws_restJson1CdmaLocalId(input.CdmaLocalId, context) }),
    ...(input.CdmaNmr != null && { CdmaNmr: serializeAws_restJson1CdmaNmrList(input.CdmaNmr, context) }),
    ...(input.NetworkId != null && { NetworkId: input.NetworkId }),
    ...(input.PilotPower != null && { PilotPower: input.PilotPower }),
    ...(input.RegistrationZone != null && { RegistrationZone: input.RegistrationZone }),
    ...(input.SystemId != null && { SystemId: input.SystemId }),
  };
};

const serializeAws_restJson1CellTowers = (input: CellTowers, context: __SerdeContext): any => {
  return {
    ...(input.Cdma != null && { Cdma: serializeAws_restJson1CdmaList(input.Cdma, context) }),
    ...(input.Gsm != null && { Gsm: serializeAws_restJson1GsmList(input.Gsm, context) }),
    ...(input.Lte != null && { Lte: serializeAws_restJson1LteList(input.Lte, context) }),
    ...(input.Tdscdma != null && { Tdscdma: serializeAws_restJson1TdscdmaList(input.Tdscdma, context) }),
    ...(input.Wcdma != null && { Wcdma: serializeAws_restJson1WcdmaList(input.Wcdma, context) }),
  };
};

const serializeAws_restJson1ConnectionStatusEventConfiguration = (
  input: ConnectionStatusEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: serializeAws_restJson1LoRaWANConnectionStatusEventNotificationConfigurations(input.LoRaWAN, context),
    }),
    ...(input.WirelessGatewayIdEventTopic != null && {
      WirelessGatewayIdEventTopic: input.WirelessGatewayIdEventTopic,
    }),
  };
};

const serializeAws_restJson1ConnectionStatusResourceTypeEventConfiguration = (
  input: ConnectionStatusResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: serializeAws_restJson1LoRaWANConnectionStatusResourceTypeEventConfiguration(input.LoRaWAN, context),
    }),
  };
};

const serializeAws_restJson1DeviceRegistrationStateEventConfiguration = (
  input: DeviceRegistrationStateEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkEventNotificationConfigurations(input.Sidewalk, context),
    }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

const serializeAws_restJson1DeviceRegistrationStateResourceTypeEventConfiguration = (
  input: DeviceRegistrationStateResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkResourceTypeEventConfiguration(input.Sidewalk, context),
    }),
  };
};

const serializeAws_restJson1FactoryPresetFreqsList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FPorts = (input: FPorts, context: __SerdeContext): any => {
  return {
    ...(input.Applications != null && {
      Applications: serializeAws_restJson1Applications(input.Applications, context),
    }),
    ...(input.ClockSync != null && { ClockSync: input.ClockSync }),
    ...(input.Fuota != null && { Fuota: input.Fuota }),
    ...(input.Multicast != null && { Multicast: input.Multicast }),
    ...(input.Positioning != null && { Positioning: serializeAws_restJson1Positioning(input.Positioning, context) }),
  };
};

const serializeAws_restJson1GatewayList = (input: GatewayListItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GatewayListItem(entry, context);
    });
};

const serializeAws_restJson1GatewayListItem = (input: GatewayListItem, context: __SerdeContext): any => {
  return {
    ...(input.DownlinkFrequency != null && { DownlinkFrequency: input.DownlinkFrequency }),
    ...(input.GatewayId != null && { GatewayId: input.GatewayId }),
  };
};

const serializeAws_restJson1GlobalIdentity = (input: GlobalIdentity, context: __SerdeContext): any => {
  return {
    ...(input.GeranCid != null && { GeranCid: input.GeranCid }),
    ...(input.Lac != null && { Lac: input.Lac }),
  };
};

const serializeAws_restJson1Gnss = (input: Gnss, context: __SerdeContext): any => {
  return {
    ...(input.AssistAltitude != null && { AssistAltitude: __serializeFloat(input.AssistAltitude) }),
    ...(input.AssistPosition != null && {
      AssistPosition: serializeAws_restJson1AssistPosition(input.AssistPosition, context),
    }),
    ...(input.CaptureTime != null && { CaptureTime: __serializeFloat(input.CaptureTime) }),
    ...(input.CaptureTimeAccuracy != null && { CaptureTimeAccuracy: __serializeFloat(input.CaptureTimeAccuracy) }),
    ...(input.Payload != null && { Payload: input.Payload }),
    ...(input.Use2DSolver != null && { Use2DSolver: input.Use2DSolver }),
  };
};

const serializeAws_restJson1GsmList = (input: GsmObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GsmObj(entry, context);
    });
};

const serializeAws_restJson1GsmLocalId = (input: GsmLocalId, context: __SerdeContext): any => {
  return {
    ...(input.Bcch != null && { Bcch: input.Bcch }),
    ...(input.Bsic != null && { Bsic: input.Bsic }),
  };
};

const serializeAws_restJson1GsmNmrList = (input: GsmNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1GsmNmrObj(entry, context);
    });
};

const serializeAws_restJson1GsmNmrObj = (input: GsmNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.Bcch != null && { Bcch: input.Bcch }),
    ...(input.Bsic != null && { Bsic: input.Bsic }),
    ...(input.GlobalIdentity != null && {
      GlobalIdentity: serializeAws_restJson1GlobalIdentity(input.GlobalIdentity, context),
    }),
    ...(input.RxLevel != null && { RxLevel: input.RxLevel }),
  };
};

const serializeAws_restJson1GsmObj = (input: GsmObj, context: __SerdeContext): any => {
  return {
    ...(input.GeranCid != null && { GeranCid: input.GeranCid }),
    ...(input.GsmLocalId != null && { GsmLocalId: serializeAws_restJson1GsmLocalId(input.GsmLocalId, context) }),
    ...(input.GsmNmr != null && { GsmNmr: serializeAws_restJson1GsmNmrList(input.GsmNmr, context) }),
    ...(input.GsmTimingAdvance != null && { GsmTimingAdvance: input.GsmTimingAdvance }),
    ...(input.Lac != null && { Lac: input.Lac }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.RxLevel != null && { RxLevel: input.RxLevel }),
  };
};

const serializeAws_restJson1Ip = (input: Ip, context: __SerdeContext): any => {
  return {
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
  };
};

const serializeAws_restJson1JoinEuiFilters = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1JoinEuiRange(entry, context);
    });
};

const serializeAws_restJson1JoinEuiRange = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1JoinEventConfiguration = (input: JoinEventConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: serializeAws_restJson1LoRaWANJoinEventNotificationConfigurations(input.LoRaWAN, context),
    }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

const serializeAws_restJson1JoinResourceTypeEventConfiguration = (
  input: JoinResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: serializeAws_restJson1LoRaWANJoinResourceTypeEventConfiguration(input.LoRaWAN, context),
    }),
  };
};

const serializeAws_restJson1LoRaWANConnectionStatusEventNotificationConfigurations = (
  input: LoRaWANConnectionStatusEventNotificationConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.GatewayEuiEventTopic != null && { GatewayEuiEventTopic: input.GatewayEuiEventTopic }),
  };
};

const serializeAws_restJson1LoRaWANConnectionStatusResourceTypeEventConfiguration = (
  input: LoRaWANConnectionStatusResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessGatewayEventTopic != null && { WirelessGatewayEventTopic: input.WirelessGatewayEventTopic }),
  };
};

const serializeAws_restJson1LoRaWANDevice = (input: LoRaWANDevice, context: __SerdeContext): any => {
  return {
    ...(input.AbpV1_0_x != null && { AbpV1_0_x: serializeAws_restJson1AbpV1_0_x(input.AbpV1_0_x, context) }),
    ...(input.AbpV1_1 != null && { AbpV1_1: serializeAws_restJson1AbpV1_1(input.AbpV1_1, context) }),
    ...(input.DevEui != null && { DevEui: input.DevEui }),
    ...(input.DeviceProfileId != null && { DeviceProfileId: input.DeviceProfileId }),
    ...(input.FPorts != null && { FPorts: serializeAws_restJson1FPorts(input.FPorts, context) }),
    ...(input.OtaaV1_0_x != null && { OtaaV1_0_x: serializeAws_restJson1OtaaV1_0_x(input.OtaaV1_0_x, context) }),
    ...(input.OtaaV1_1 != null && { OtaaV1_1: serializeAws_restJson1OtaaV1_1(input.OtaaV1_1, context) }),
    ...(input.ServiceProfileId != null && { ServiceProfileId: input.ServiceProfileId }),
  };
};

const serializeAws_restJson1LoRaWANDeviceProfile = (input: LoRaWANDeviceProfile, context: __SerdeContext): any => {
  return {
    ...(input.ClassBTimeout != null && { ClassBTimeout: input.ClassBTimeout }),
    ...(input.ClassCTimeout != null && { ClassCTimeout: input.ClassCTimeout }),
    ...(input.FactoryPresetFreqsList != null && {
      FactoryPresetFreqsList: serializeAws_restJson1FactoryPresetFreqsList(input.FactoryPresetFreqsList, context),
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

const serializeAws_restJson1LoRaWANFuotaTask = (input: LoRaWANFuotaTask, context: __SerdeContext): any => {
  return {
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
  };
};

const serializeAws_restJson1LoRaWANGateway = (input: LoRaWANGateway, context: __SerdeContext): any => {
  return {
    ...(input.Beaconing != null && { Beaconing: serializeAws_restJson1Beaconing(input.Beaconing, context) }),
    ...(input.GatewayEui != null && { GatewayEui: input.GatewayEui }),
    ...(input.JoinEuiFilters != null && {
      JoinEuiFilters: serializeAws_restJson1JoinEuiFilters(input.JoinEuiFilters, context),
    }),
    ...(input.NetIdFilters != null && {
      NetIdFilters: serializeAws_restJson1NetIdFilters(input.NetIdFilters, context),
    }),
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
    ...(input.SubBands != null && { SubBands: serializeAws_restJson1SubBands(input.SubBands, context) }),
  };
};

const serializeAws_restJson1LoRaWANGatewayVersion = (input: LoRaWANGatewayVersion, context: __SerdeContext): any => {
  return {
    ...(input.Model != null && { Model: input.Model }),
    ...(input.PackageVersion != null && { PackageVersion: input.PackageVersion }),
    ...(input.Station != null && { Station: input.Station }),
  };
};

const serializeAws_restJson1LoRaWANJoinEventNotificationConfigurations = (
  input: LoRaWANJoinEventNotificationConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.DevEuiEventTopic != null && { DevEuiEventTopic: input.DevEuiEventTopic }),
  };
};

const serializeAws_restJson1LoRaWANJoinResourceTypeEventConfiguration = (
  input: LoRaWANJoinResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessDeviceEventTopic != null && { WirelessDeviceEventTopic: input.WirelessDeviceEventTopic }),
  };
};

const serializeAws_restJson1LoRaWANMulticast = (input: LoRaWANMulticast, context: __SerdeContext): any => {
  return {
    ...(input.DlClass != null && { DlClass: input.DlClass }),
    ...(input.RfRegion != null && { RfRegion: input.RfRegion }),
  };
};

const serializeAws_restJson1LoRaWANMulticastMetadata = (
  input: LoRaWANMulticastMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.FPort != null && { FPort: input.FPort }),
  };
};

const serializeAws_restJson1LoRaWANMulticastSession = (
  input: LoRaWANMulticastSession,
  context: __SerdeContext
): any => {
  return {
    ...(input.DlDr != null && { DlDr: input.DlDr }),
    ...(input.DlFreq != null && { DlFreq: input.DlFreq }),
    ...(input.SessionStartTime != null && {
      SessionStartTime: input.SessionStartTime.toISOString().split(".")[0] + "Z",
    }),
    ...(input.SessionTimeout != null && { SessionTimeout: input.SessionTimeout }),
  };
};

const serializeAws_restJson1LoRaWANSendDataToDevice = (
  input: LoRaWANSendDataToDevice,
  context: __SerdeContext
): any => {
  return {
    ...(input.FPort != null && { FPort: input.FPort }),
    ...(input.ParticipatingGateways != null && {
      ParticipatingGateways: serializeAws_restJson1ParticipatingGateways(input.ParticipatingGateways, context),
    }),
  };
};

const serializeAws_restJson1LoRaWANServiceProfile = (input: LoRaWANServiceProfile, context: __SerdeContext): any => {
  return {
    ...(input.AddGwMetadata != null && { AddGwMetadata: input.AddGwMetadata }),
    ...(input.DrMax != null && { DrMax: input.DrMax }),
    ...(input.DrMin != null && { DrMin: input.DrMin }),
  };
};

const serializeAws_restJson1LoRaWANStartFuotaTask = (input: LoRaWANStartFuotaTask, context: __SerdeContext): any => {
  return {
    ...(input.StartTime != null && { StartTime: input.StartTime.toISOString().split(".")[0] + "Z" }),
  };
};

const serializeAws_restJson1LoRaWANUpdateDevice = (input: LoRaWANUpdateDevice, context: __SerdeContext): any => {
  return {
    ...(input.AbpV1_0_x != null && { AbpV1_0_x: serializeAws_restJson1UpdateAbpV1_0_x(input.AbpV1_0_x, context) }),
    ...(input.AbpV1_1 != null && { AbpV1_1: serializeAws_restJson1UpdateAbpV1_1(input.AbpV1_1, context) }),
    ...(input.DeviceProfileId != null && { DeviceProfileId: input.DeviceProfileId }),
    ...(input.FPorts != null && { FPorts: serializeAws_restJson1UpdateFPorts(input.FPorts, context) }),
    ...(input.ServiceProfileId != null && { ServiceProfileId: input.ServiceProfileId }),
  };
};

const serializeAws_restJson1LoRaWANUpdateGatewayTaskCreate = (
  input: LoRaWANUpdateGatewayTaskCreate,
  context: __SerdeContext
): any => {
  return {
    ...(input.CurrentVersion != null && {
      CurrentVersion: serializeAws_restJson1LoRaWANGatewayVersion(input.CurrentVersion, context),
    }),
    ...(input.SigKeyCrc != null && { SigKeyCrc: input.SigKeyCrc }),
    ...(input.UpdateSignature != null && { UpdateSignature: input.UpdateSignature }),
    ...(input.UpdateVersion != null && {
      UpdateVersion: serializeAws_restJson1LoRaWANGatewayVersion(input.UpdateVersion, context),
    }),
  };
};

const serializeAws_restJson1LteList = (input: LteObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LteObj(entry, context);
    });
};

const serializeAws_restJson1LteLocalId = (input: LteLocalId, context: __SerdeContext): any => {
  return {
    ...(input.Earfcn != null && { Earfcn: input.Earfcn }),
    ...(input.Pci != null && { Pci: input.Pci }),
  };
};

const serializeAws_restJson1LteNmrList = (input: LteNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LteNmrObj(entry, context);
    });
};

const serializeAws_restJson1LteNmrObj = (input: LteNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.Earfcn != null && { Earfcn: input.Earfcn }),
    ...(input.EutranCid != null && { EutranCid: input.EutranCid }),
    ...(input.Pci != null && { Pci: input.Pci }),
    ...(input.Rsrp != null && { Rsrp: input.Rsrp }),
    ...(input.Rsrq != null && { Rsrq: __serializeFloat(input.Rsrq) }),
  };
};

const serializeAws_restJson1LteObj = (input: LteObj, context: __SerdeContext): any => {
  return {
    ...(input.EutranCid != null && { EutranCid: input.EutranCid }),
    ...(input.LteLocalId != null && { LteLocalId: serializeAws_restJson1LteLocalId(input.LteLocalId, context) }),
    ...(input.LteNmr != null && { LteNmr: serializeAws_restJson1LteNmrList(input.LteNmr, context) }),
    ...(input.LteTimingAdvance != null && { LteTimingAdvance: input.LteTimingAdvance }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.NrCapable != null && { NrCapable: input.NrCapable }),
    ...(input.Rsrp != null && { Rsrp: input.Rsrp }),
    ...(input.Rsrq != null && { Rsrq: __serializeFloat(input.Rsrq) }),
    ...(input.Tac != null && { Tac: input.Tac }),
  };
};

const serializeAws_restJson1MessageDeliveryStatusEventConfiguration = (
  input: MessageDeliveryStatusEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkEventNotificationConfigurations(input.Sidewalk, context),
    }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

const serializeAws_restJson1MessageDeliveryStatusResourceTypeEventConfiguration = (
  input: MessageDeliveryStatusResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkResourceTypeEventConfiguration(input.Sidewalk, context),
    }),
  };
};

const serializeAws_restJson1MulticastWirelessMetadata = (
  input: MulticastWirelessMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANMulticastMetadata(input.LoRaWAN, context) }),
  };
};

const serializeAws_restJson1NetIdFilters = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OtaaV1_0_x = (input: OtaaV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.AppEui != null && { AppEui: input.AppEui }),
    ...(input.AppKey != null && { AppKey: input.AppKey }),
    ...(input.GenAppKey != null && { GenAppKey: input.GenAppKey }),
  };
};

const serializeAws_restJson1OtaaV1_1 = (input: OtaaV1_1, context: __SerdeContext): any => {
  return {
    ...(input.AppKey != null && { AppKey: input.AppKey }),
    ...(input.JoinEui != null && { JoinEui: input.JoinEui }),
    ...(input.NwkKey != null && { NwkKey: input.NwkKey }),
  };
};

const serializeAws_restJson1ParticipatingGateways = (input: ParticipatingGateways, context: __SerdeContext): any => {
  return {
    ...(input.DownlinkMode != null && { DownlinkMode: input.DownlinkMode }),
    ...(input.GatewayList != null && { GatewayList: serializeAws_restJson1GatewayList(input.GatewayList, context) }),
    ...(input.TransmissionInterval != null && { TransmissionInterval: input.TransmissionInterval }),
  };
};

const serializeAws_restJson1PositionCoordinate = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

const serializeAws_restJson1Positioning = (input: Positioning, context: __SerdeContext): any => {
  return {
    ...(input.ClockSync != null && { ClockSync: input.ClockSync }),
    ...(input.Gnss != null && { Gnss: input.Gnss }),
    ...(input.Stream != null && { Stream: input.Stream }),
  };
};

const serializeAws_restJson1PositionSolverConfigurations = (
  input: PositionSolverConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.SemtechGnss != null && {
      SemtechGnss: serializeAws_restJson1SemtechGnssConfiguration(input.SemtechGnss, context),
    }),
  };
};

const serializeAws_restJson1ProximityEventConfiguration = (
  input: ProximityEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkEventNotificationConfigurations(input.Sidewalk, context),
    }),
    ...(input.WirelessDeviceIdEventTopic != null && { WirelessDeviceIdEventTopic: input.WirelessDeviceIdEventTopic }),
  };
};

const serializeAws_restJson1ProximityResourceTypeEventConfiguration = (
  input: ProximityResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkResourceTypeEventConfiguration(input.Sidewalk, context),
    }),
  };
};

const serializeAws_restJson1SemtechGnssConfiguration = (
  input: SemtechGnssConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Fec != null && { Fec: input.Fec }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1SessionKeysAbpV1_0_x = (input: SessionKeysAbpV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.AppSKey != null && { AppSKey: input.AppSKey }),
    ...(input.NwkSKey != null && { NwkSKey: input.NwkSKey }),
  };
};

const serializeAws_restJson1SessionKeysAbpV1_1 = (input: SessionKeysAbpV1_1, context: __SerdeContext): any => {
  return {
    ...(input.AppSKey != null && { AppSKey: input.AppSKey }),
    ...(input.FNwkSIntKey != null && { FNwkSIntKey: input.FNwkSIntKey }),
    ...(input.NwkSEncKey != null && { NwkSEncKey: input.NwkSEncKey }),
    ...(input.SNwkSIntKey != null && { SNwkSIntKey: input.SNwkSIntKey }),
  };
};

const serializeAws_restJson1SidewalkAccountInfo = (input: SidewalkAccountInfo, context: __SerdeContext): any => {
  return {
    ...(input.AmazonId != null && { AmazonId: input.AmazonId }),
    ...(input.AppServerPrivateKey != null && { AppServerPrivateKey: input.AppServerPrivateKey }),
  };
};

const serializeAws_restJson1SidewalkEventNotificationConfigurations = (
  input: SidewalkEventNotificationConfigurations,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmazonIdEventTopic != null && { AmazonIdEventTopic: input.AmazonIdEventTopic }),
  };
};

const serializeAws_restJson1SidewalkResourceTypeEventConfiguration = (
  input: SidewalkResourceTypeEventConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WirelessDeviceEventTopic != null && { WirelessDeviceEventTopic: input.WirelessDeviceEventTopic }),
  };
};

const serializeAws_restJson1SidewalkSendDataToDevice = (
  input: SidewalkSendDataToDevice,
  context: __SerdeContext
): any => {
  return {
    ...(input.AckModeRetryDurationSecs != null && { AckModeRetryDurationSecs: input.AckModeRetryDurationSecs }),
    ...(input.MessageType != null && { MessageType: input.MessageType }),
    ...(input.Seq != null && { Seq: input.Seq }),
  };
};

const serializeAws_restJson1SidewalkUpdateAccount = (input: SidewalkUpdateAccount, context: __SerdeContext): any => {
  return {
    ...(input.AppServerPrivateKey != null && { AppServerPrivateKey: input.AppServerPrivateKey }),
  };
};

const serializeAws_restJson1SubBands = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TdscdmaList = (input: TdscdmaObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TdscdmaObj(entry, context);
    });
};

const serializeAws_restJson1TdscdmaLocalId = (input: TdscdmaLocalId, context: __SerdeContext): any => {
  return {
    ...(input.CellParams != null && { CellParams: input.CellParams }),
    ...(input.Uarfcn != null && { Uarfcn: input.Uarfcn }),
  };
};

const serializeAws_restJson1TdscdmaNmrList = (input: TdscdmaNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TdscdmaNmrObj(entry, context);
    });
};

const serializeAws_restJson1TdscdmaNmrObj = (input: TdscdmaNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.CellParams != null && { CellParams: input.CellParams }),
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.Uarfcn != null && { Uarfcn: input.Uarfcn }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
  };
};

const serializeAws_restJson1TdscdmaObj = (input: TdscdmaObj, context: __SerdeContext): any => {
  return {
    ...(input.Lac != null && { Lac: input.Lac }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.TdscdmaLocalId != null && {
      TdscdmaLocalId: serializeAws_restJson1TdscdmaLocalId(input.TdscdmaLocalId, context),
    }),
    ...(input.TdscdmaNmr != null && { TdscdmaNmr: serializeAws_restJson1TdscdmaNmrList(input.TdscdmaNmr, context) }),
    ...(input.TdscdmaTimingAdvance != null && { TdscdmaTimingAdvance: input.TdscdmaTimingAdvance }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
  };
};

const serializeAws_restJson1TraceContent = (input: TraceContent, context: __SerdeContext): any => {
  return {
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.WirelessDeviceFrameInfo != null && { WirelessDeviceFrameInfo: input.WirelessDeviceFrameInfo }),
  };
};

const serializeAws_restJson1UpdateAbpV1_0_x = (input: UpdateAbpV1_0_x, context: __SerdeContext): any => {
  return {
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
  };
};

const serializeAws_restJson1UpdateAbpV1_1 = (input: UpdateAbpV1_1, context: __SerdeContext): any => {
  return {
    ...(input.FCntStart != null && { FCntStart: input.FCntStart }),
  };
};

const serializeAws_restJson1UpdateFPorts = (input: UpdateFPorts, context: __SerdeContext): any => {
  return {
    ...(input.Applications != null && {
      Applications: serializeAws_restJson1Applications(input.Applications, context),
    }),
    ...(input.Positioning != null && { Positioning: serializeAws_restJson1Positioning(input.Positioning, context) }),
  };
};

const serializeAws_restJson1UpdateWirelessGatewayTaskCreate = (
  input: UpdateWirelessGatewayTaskCreate,
  context: __SerdeContext
): any => {
  return {
    ...(input.LoRaWAN != null && {
      LoRaWAN: serializeAws_restJson1LoRaWANUpdateGatewayTaskCreate(input.LoRaWAN, context),
    }),
    ...(input.UpdateDataRole != null && { UpdateDataRole: input.UpdateDataRole }),
    ...(input.UpdateDataSource != null && { UpdateDataSource: input.UpdateDataSource }),
  };
};

const serializeAws_restJson1WcdmaList = (input: WcdmaObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WcdmaObj(entry, context);
    });
};

const serializeAws_restJson1WcdmaLocalId = (input: WcdmaLocalId, context: __SerdeContext): any => {
  return {
    ...(input.Psc != null && { Psc: input.Psc }),
    ...(input.Uarfcndl != null && { Uarfcndl: input.Uarfcndl }),
  };
};

const serializeAws_restJson1WcdmaNmrList = (input: WcdmaNmrObj[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WcdmaNmrObj(entry, context);
    });
};

const serializeAws_restJson1WcdmaNmrObj = (input: WcdmaNmrObj, context: __SerdeContext): any => {
  return {
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Psc != null && { Psc: input.Psc }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.Uarfcndl != null && { Uarfcndl: input.Uarfcndl }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
  };
};

const serializeAws_restJson1WcdmaObj = (input: WcdmaObj, context: __SerdeContext): any => {
  return {
    ...(input.Lac != null && { Lac: input.Lac }),
    ...(input.Mcc != null && { Mcc: input.Mcc }),
    ...(input.Mnc != null && { Mnc: input.Mnc }),
    ...(input.PathLoss != null && { PathLoss: input.PathLoss }),
    ...(input.Rscp != null && { Rscp: input.Rscp }),
    ...(input.UtranCid != null && { UtranCid: input.UtranCid }),
    ...(input.WcdmaLocalId != null && {
      WcdmaLocalId: serializeAws_restJson1WcdmaLocalId(input.WcdmaLocalId, context),
    }),
    ...(input.WcdmaNmr != null && { WcdmaNmr: serializeAws_restJson1WcdmaNmrList(input.WcdmaNmr, context) }),
  };
};

const serializeAws_restJson1WiFiAccessPoint = (input: WiFiAccessPoint, context: __SerdeContext): any => {
  return {
    ...(input.MacAddress != null && { MacAddress: input.MacAddress }),
    ...(input.Rss != null && { Rss: input.Rss }),
  };
};

const serializeAws_restJson1WiFiAccessPoints = (input: WiFiAccessPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WiFiAccessPoint(entry, context);
    });
};

const serializeAws_restJson1WirelessDeviceEventLogOption = (
  input: WirelessDeviceEventLogOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Event != null && { Event: input.Event }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
  };
};

const serializeAws_restJson1WirelessDeviceEventLogOptionList = (
  input: WirelessDeviceEventLogOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WirelessDeviceEventLogOption(entry, context);
    });
};

const serializeAws_restJson1WirelessDeviceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1WirelessDeviceLogOption = (
  input: WirelessDeviceLogOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Events != null && {
      Events: serializeAws_restJson1WirelessDeviceEventLogOptionList(input.Events, context),
    }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1WirelessDeviceLogOptionList = (
  input: WirelessDeviceLogOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WirelessDeviceLogOption(entry, context);
    });
};

const serializeAws_restJson1WirelessGatewayEventLogOption = (
  input: WirelessGatewayEventLogOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Event != null && { Event: input.Event }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
  };
};

const serializeAws_restJson1WirelessGatewayEventLogOptionList = (
  input: WirelessGatewayEventLogOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WirelessGatewayEventLogOption(entry, context);
    });
};

const serializeAws_restJson1WirelessGatewayList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1WirelessGatewayLogOption = (
  input: WirelessGatewayLogOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.Events != null && {
      Events: serializeAws_restJson1WirelessGatewayEventLogOptionList(input.Events, context),
    }),
    ...(input.LogLevel != null && { LogLevel: input.LogLevel }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1WirelessGatewayLogOptionList = (
  input: WirelessGatewayLogOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WirelessGatewayLogOption(entry, context);
    });
};

const serializeAws_restJson1WirelessMetadata = (input: WirelessMetadata, context: __SerdeContext): any => {
  return {
    ...(input.LoRaWAN != null && { LoRaWAN: serializeAws_restJson1LoRaWANSendDataToDevice(input.LoRaWAN, context) }),
    ...(input.Sidewalk != null && {
      Sidewalk: serializeAws_restJson1SidewalkSendDataToDevice(input.Sidewalk, context),
    }),
  };
};

const deserializeAws_restJson1AbpV1_0_x = (output: any, context: __SerdeContext): AbpV1_0_x => {
  return {
    DevAddr: __expectString(output.DevAddr),
    FCntStart: __expectInt32(output.FCntStart),
    SessionKeys:
      output.SessionKeys != null
        ? deserializeAws_restJson1SessionKeysAbpV1_0_x(output.SessionKeys, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AbpV1_1 = (output: any, context: __SerdeContext): AbpV1_1 => {
  return {
    DevAddr: __expectString(output.DevAddr),
    FCntStart: __expectInt32(output.FCntStart),
    SessionKeys:
      output.SessionKeys != null ? deserializeAws_restJson1SessionKeysAbpV1_1(output.SessionKeys, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Accuracy = (output: any, context: __SerdeContext): Accuracy => {
  return {
    HorizontalAccuracy: __limitedParseFloat32(output.HorizontalAccuracy),
    VerticalAccuracy: __limitedParseFloat32(output.VerticalAccuracy),
  } as any;
};

const deserializeAws_restJson1ApplicationConfig = (output: any, context: __SerdeContext): ApplicationConfig => {
  return {
    DestinationName: __expectString(output.DestinationName),
    FPort: __expectInt32(output.FPort),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1Applications = (output: any, context: __SerdeContext): ApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ApplicationConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Beaconing = (output: any, context: __SerdeContext): Beaconing => {
  return {
    DataRate: __expectInt32(output.DataRate),
    Frequencies:
      output.Frequencies != null
        ? deserializeAws_restJson1BeaconingFrequencies(output.Frequencies, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BeaconingFrequencies = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1CertificateList = (output: any, context: __SerdeContext): CertificateList => {
  return {
    SigningAlg: __expectString(output.SigningAlg),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ConnectionStatusEventConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionStatusEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? deserializeAws_restJson1LoRaWANConnectionStatusEventNotificationConfigurations(output.LoRaWAN, context)
        : undefined,
    WirelessGatewayIdEventTopic: __expectString(output.WirelessGatewayIdEventTopic),
  } as any;
};

const deserializeAws_restJson1ConnectionStatusResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): ConnectionStatusResourceTypeEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? deserializeAws_restJson1LoRaWANConnectionStatusResourceTypeEventConfiguration(output.LoRaWAN, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DestinationList = (output: any, context: __SerdeContext): Destinations[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Destinations(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Destinations = (output: any, context: __SerdeContext): Destinations => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Expression: __expectString(output.Expression),
    ExpressionType: __expectString(output.ExpressionType),
    Name: __expectString(output.Name),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1DeviceCertificateList = (output: any, context: __SerdeContext): CertificateList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CertificateList(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeviceProfile = (output: any, context: __SerdeContext): DeviceProfile => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1DeviceProfileList = (output: any, context: __SerdeContext): DeviceProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeviceRegistrationStateEventConfiguration = (
  output: any,
  context: __SerdeContext
): DeviceRegistrationStateEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null
        ? deserializeAws_restJson1SidewalkEventNotificationConfigurations(output.Sidewalk, context)
        : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

const deserializeAws_restJson1DeviceRegistrationStateResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): DeviceRegistrationStateResourceTypeEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null
        ? deserializeAws_restJson1SidewalkResourceTypeEventConfiguration(output.Sidewalk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DownlinkQueueMessage = (output: any, context: __SerdeContext): DownlinkQueueMessage => {
  return {
    LoRaWAN:
      output.LoRaWAN != null ? deserializeAws_restJson1LoRaWANSendDataToDevice(output.LoRaWAN, context) : undefined,
    MessageId: __expectString(output.MessageId),
    ReceivedAt: __expectString(output.ReceivedAt),
    TransmitMode: __expectInt32(output.TransmitMode),
  } as any;
};

const deserializeAws_restJson1DownlinkQueueMessagesList = (
  output: any,
  context: __SerdeContext
): DownlinkQueueMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DownlinkQueueMessage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventConfigurationItem = (
  output: any,
  context: __SerdeContext
): EventConfigurationItem => {
  return {
    Events:
      output.Events != null
        ? deserializeAws_restJson1EventNotificationItemConfigurations(output.Events, context)
        : undefined,
    Identifier: __expectString(output.Identifier),
    IdentifierType: __expectString(output.IdentifierType),
    PartnerType: __expectString(output.PartnerType),
  } as any;
};

const deserializeAws_restJson1EventConfigurationsList = (
  output: any,
  context: __SerdeContext
): EventConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventConfigurationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventNotificationItemConfigurations = (
  output: any,
  context: __SerdeContext
): EventNotificationItemConfigurations => {
  return {
    ConnectionStatus:
      output.ConnectionStatus != null
        ? deserializeAws_restJson1ConnectionStatusEventConfiguration(output.ConnectionStatus, context)
        : undefined,
    DeviceRegistrationState:
      output.DeviceRegistrationState != null
        ? deserializeAws_restJson1DeviceRegistrationStateEventConfiguration(output.DeviceRegistrationState, context)
        : undefined,
    Join: output.Join != null ? deserializeAws_restJson1JoinEventConfiguration(output.Join, context) : undefined,
    MessageDeliveryStatus:
      output.MessageDeliveryStatus != null
        ? deserializeAws_restJson1MessageDeliveryStatusEventConfiguration(output.MessageDeliveryStatus, context)
        : undefined,
    Proximity:
      output.Proximity != null
        ? deserializeAws_restJson1ProximityEventConfiguration(output.Proximity, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FactoryPresetFreqsList = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1FPorts = (output: any, context: __SerdeContext): FPorts => {
  return {
    Applications:
      output.Applications != null ? deserializeAws_restJson1Applications(output.Applications, context) : undefined,
    ClockSync: __expectInt32(output.ClockSync),
    Fuota: __expectInt32(output.Fuota),
    Multicast: __expectInt32(output.Multicast),
    Positioning:
      output.Positioning != null ? deserializeAws_restJson1Positioning(output.Positioning, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FuotaTask = (output: any, context: __SerdeContext): FuotaTask => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1FuotaTaskList = (output: any, context: __SerdeContext): FuotaTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FuotaTask(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GatewayList = (output: any, context: __SerdeContext): GatewayListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GatewayListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GatewayListItem = (output: any, context: __SerdeContext): GatewayListItem => {
  return {
    DownlinkFrequency: __expectInt32(output.DownlinkFrequency),
    GatewayId: __expectString(output.GatewayId),
  } as any;
};

const deserializeAws_restJson1JoinEuiFilters = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1JoinEuiRange(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1JoinEuiRange = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1JoinEventConfiguration = (
  output: any,
  context: __SerdeContext
): JoinEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? deserializeAws_restJson1LoRaWANJoinEventNotificationConfigurations(output.LoRaWAN, context)
        : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

const deserializeAws_restJson1JoinResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): JoinResourceTypeEventConfiguration => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? deserializeAws_restJson1LoRaWANJoinResourceTypeEventConfiguration(output.LoRaWAN, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LoRaWANConnectionStatusEventNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): LoRaWANConnectionStatusEventNotificationConfigurations => {
  return {
    GatewayEuiEventTopic: __expectString(output.GatewayEuiEventTopic),
  } as any;
};

const deserializeAws_restJson1LoRaWANConnectionStatusResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): LoRaWANConnectionStatusResourceTypeEventConfiguration => {
  return {
    WirelessGatewayEventTopic: __expectString(output.WirelessGatewayEventTopic),
  } as any;
};

const deserializeAws_restJson1LoRaWANDevice = (output: any, context: __SerdeContext): LoRaWANDevice => {
  return {
    AbpV1_0_x: output.AbpV1_0_x != null ? deserializeAws_restJson1AbpV1_0_x(output.AbpV1_0_x, context) : undefined,
    AbpV1_1: output.AbpV1_1 != null ? deserializeAws_restJson1AbpV1_1(output.AbpV1_1, context) : undefined,
    DevEui: __expectString(output.DevEui),
    DeviceProfileId: __expectString(output.DeviceProfileId),
    FPorts: output.FPorts != null ? deserializeAws_restJson1FPorts(output.FPorts, context) : undefined,
    OtaaV1_0_x: output.OtaaV1_0_x != null ? deserializeAws_restJson1OtaaV1_0_x(output.OtaaV1_0_x, context) : undefined,
    OtaaV1_1: output.OtaaV1_1 != null ? deserializeAws_restJson1OtaaV1_1(output.OtaaV1_1, context) : undefined,
    ServiceProfileId: __expectString(output.ServiceProfileId),
  } as any;
};

const deserializeAws_restJson1LoRaWANDeviceMetadata = (output: any, context: __SerdeContext): LoRaWANDeviceMetadata => {
  return {
    DataRate: __expectInt32(output.DataRate),
    DevEui: __expectString(output.DevEui),
    FPort: __expectInt32(output.FPort),
    Frequency: __expectInt32(output.Frequency),
    Gateways:
      output.Gateways != null
        ? deserializeAws_restJson1LoRaWANGatewayMetadataList(output.Gateways, context)
        : undefined,
    Timestamp: __expectString(output.Timestamp),
  } as any;
};

const deserializeAws_restJson1LoRaWANDeviceProfile = (output: any, context: __SerdeContext): LoRaWANDeviceProfile => {
  return {
    ClassBTimeout: __expectInt32(output.ClassBTimeout),
    ClassCTimeout: __expectInt32(output.ClassCTimeout),
    FactoryPresetFreqsList:
      output.FactoryPresetFreqsList != null
        ? deserializeAws_restJson1FactoryPresetFreqsList(output.FactoryPresetFreqsList, context)
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

const deserializeAws_restJson1LoRaWANFuotaTaskGetInfo = (
  output: any,
  context: __SerdeContext
): LoRaWANFuotaTaskGetInfo => {
  return {
    RfRegion: __expectString(output.RfRegion),
    StartTime: output.StartTime != null ? __expectNonNull(__parseRfc3339DateTime(output.StartTime)) : undefined,
  } as any;
};

const deserializeAws_restJson1LoRaWANGateway = (output: any, context: __SerdeContext): LoRaWANGateway => {
  return {
    Beaconing: output.Beaconing != null ? deserializeAws_restJson1Beaconing(output.Beaconing, context) : undefined,
    GatewayEui: __expectString(output.GatewayEui),
    JoinEuiFilters:
      output.JoinEuiFilters != null
        ? deserializeAws_restJson1JoinEuiFilters(output.JoinEuiFilters, context)
        : undefined,
    NetIdFilters:
      output.NetIdFilters != null ? deserializeAws_restJson1NetIdFilters(output.NetIdFilters, context) : undefined,
    RfRegion: __expectString(output.RfRegion),
    SubBands: output.SubBands != null ? deserializeAws_restJson1SubBands(output.SubBands, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LoRaWANGatewayCurrentVersion = (
  output: any,
  context: __SerdeContext
): LoRaWANGatewayCurrentVersion => {
  return {
    CurrentVersion:
      output.CurrentVersion != null
        ? deserializeAws_restJson1LoRaWANGatewayVersion(output.CurrentVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LoRaWANGatewayMetadata = (
  output: any,
  context: __SerdeContext
): LoRaWANGatewayMetadata => {
  return {
    GatewayEui: __expectString(output.GatewayEui),
    Rssi: __limitedParseDouble(output.Rssi),
    Snr: __limitedParseDouble(output.Snr),
  } as any;
};

const deserializeAws_restJson1LoRaWANGatewayMetadataList = (
  output: any,
  context: __SerdeContext
): LoRaWANGatewayMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LoRaWANGatewayMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LoRaWANGatewayVersion = (output: any, context: __SerdeContext): LoRaWANGatewayVersion => {
  return {
    Model: __expectString(output.Model),
    PackageVersion: __expectString(output.PackageVersion),
    Station: __expectString(output.Station),
  } as any;
};

const deserializeAws_restJson1LoRaWANGetServiceProfileInfo = (
  output: any,
  context: __SerdeContext
): LoRaWANGetServiceProfileInfo => {
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

const deserializeAws_restJson1LoRaWANJoinEventNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): LoRaWANJoinEventNotificationConfigurations => {
  return {
    DevEuiEventTopic: __expectString(output.DevEuiEventTopic),
  } as any;
};

const deserializeAws_restJson1LoRaWANJoinResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): LoRaWANJoinResourceTypeEventConfiguration => {
  return {
    WirelessDeviceEventTopic: __expectString(output.WirelessDeviceEventTopic),
  } as any;
};

const deserializeAws_restJson1LoRaWANListDevice = (output: any, context: __SerdeContext): LoRaWANListDevice => {
  return {
    DevEui: __expectString(output.DevEui),
  } as any;
};

const deserializeAws_restJson1LoRaWANMulticastGet = (output: any, context: __SerdeContext): LoRaWANMulticastGet => {
  return {
    DlClass: __expectString(output.DlClass),
    NumberOfDevicesInGroup: __expectInt32(output.NumberOfDevicesInGroup),
    NumberOfDevicesRequested: __expectInt32(output.NumberOfDevicesRequested),
    RfRegion: __expectString(output.RfRegion),
  } as any;
};

const deserializeAws_restJson1LoRaWANMulticastSession = (
  output: any,
  context: __SerdeContext
): LoRaWANMulticastSession => {
  return {
    DlDr: __expectInt32(output.DlDr),
    DlFreq: __expectInt32(output.DlFreq),
    SessionStartTime:
      output.SessionStartTime != null ? __expectNonNull(__parseRfc3339DateTime(output.SessionStartTime)) : undefined,
    SessionTimeout: __expectInt32(output.SessionTimeout),
  } as any;
};

const deserializeAws_restJson1LoRaWANSendDataToDevice = (
  output: any,
  context: __SerdeContext
): LoRaWANSendDataToDevice => {
  return {
    FPort: __expectInt32(output.FPort),
    ParticipatingGateways:
      output.ParticipatingGateways != null
        ? deserializeAws_restJson1ParticipatingGateways(output.ParticipatingGateways, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LoRaWANUpdateGatewayTaskCreate = (
  output: any,
  context: __SerdeContext
): LoRaWANUpdateGatewayTaskCreate => {
  return {
    CurrentVersion:
      output.CurrentVersion != null
        ? deserializeAws_restJson1LoRaWANGatewayVersion(output.CurrentVersion, context)
        : undefined,
    SigKeyCrc: __expectLong(output.SigKeyCrc),
    UpdateSignature: __expectString(output.UpdateSignature),
    UpdateVersion:
      output.UpdateVersion != null
        ? deserializeAws_restJson1LoRaWANGatewayVersion(output.UpdateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LoRaWANUpdateGatewayTaskEntry = (
  output: any,
  context: __SerdeContext
): LoRaWANUpdateGatewayTaskEntry => {
  return {
    CurrentVersion:
      output.CurrentVersion != null
        ? deserializeAws_restJson1LoRaWANGatewayVersion(output.CurrentVersion, context)
        : undefined,
    UpdateVersion:
      output.UpdateVersion != null
        ? deserializeAws_restJson1LoRaWANGatewayVersion(output.UpdateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageDeliveryStatusEventConfiguration = (
  output: any,
  context: __SerdeContext
): MessageDeliveryStatusEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null
        ? deserializeAws_restJson1SidewalkEventNotificationConfigurations(output.Sidewalk, context)
        : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

const deserializeAws_restJson1MessageDeliveryStatusResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): MessageDeliveryStatusResourceTypeEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null
        ? deserializeAws_restJson1SidewalkResourceTypeEventConfiguration(output.Sidewalk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MulticastGroup = (output: any, context: __SerdeContext): MulticastGroup => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1MulticastGroupByFuotaTask = (
  output: any,
  context: __SerdeContext
): MulticastGroupByFuotaTask => {
  return {
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1MulticastGroupList = (output: any, context: __SerdeContext): MulticastGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MulticastGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MulticastGroupListByFuotaTask = (
  output: any,
  context: __SerdeContext
): MulticastGroupByFuotaTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MulticastGroupByFuotaTask(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetIdFilters = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1NetworkAnalyzerConfigurationList = (
  output: any,
  context: __SerdeContext
): NetworkAnalyzerConfigurations[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkAnalyzerConfigurations(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkAnalyzerConfigurations = (
  output: any,
  context: __SerdeContext
): NetworkAnalyzerConfigurations => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1OtaaV1_0_x = (output: any, context: __SerdeContext): OtaaV1_0_x => {
  return {
    AppEui: __expectString(output.AppEui),
    AppKey: __expectString(output.AppKey),
    GenAppKey: __expectString(output.GenAppKey),
  } as any;
};

const deserializeAws_restJson1OtaaV1_1 = (output: any, context: __SerdeContext): OtaaV1_1 => {
  return {
    AppKey: __expectString(output.AppKey),
    JoinEui: __expectString(output.JoinEui),
    NwkKey: __expectString(output.NwkKey),
  } as any;
};

const deserializeAws_restJson1ParticipatingGateways = (output: any, context: __SerdeContext): ParticipatingGateways => {
  return {
    DownlinkMode: __expectString(output.DownlinkMode),
    GatewayList:
      output.GatewayList != null ? deserializeAws_restJson1GatewayList(output.GatewayList, context) : undefined,
    TransmissionInterval: __expectInt32(output.TransmissionInterval),
  } as any;
};

const deserializeAws_restJson1PositionConfigurationItem = (
  output: any,
  context: __SerdeContext
): PositionConfigurationItem => {
  return {
    Destination: __expectString(output.Destination),
    ResourceIdentifier: __expectString(output.ResourceIdentifier),
    ResourceType: __expectString(output.ResourceType),
    Solvers:
      output.Solvers != null ? deserializeAws_restJson1PositionSolverDetails(output.Solvers, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PositionConfigurationList = (
  output: any,
  context: __SerdeContext
): PositionConfigurationItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PositionConfigurationItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PositionCoordinate = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1Positioning = (output: any, context: __SerdeContext): Positioning => {
  return {
    ClockSync: __expectInt32(output.ClockSync),
    Gnss: __expectInt32(output.Gnss),
    Stream: __expectInt32(output.Stream),
  } as any;
};

const deserializeAws_restJson1PositionSolverDetails = (output: any, context: __SerdeContext): PositionSolverDetails => {
  return {
    SemtechGnss:
      output.SemtechGnss != null ? deserializeAws_restJson1SemtechGnssDetail(output.SemtechGnss, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ProximityEventConfiguration = (
  output: any,
  context: __SerdeContext
): ProximityEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null
        ? deserializeAws_restJson1SidewalkEventNotificationConfigurations(output.Sidewalk, context)
        : undefined,
    WirelessDeviceIdEventTopic: __expectString(output.WirelessDeviceIdEventTopic),
  } as any;
};

const deserializeAws_restJson1ProximityResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): ProximityResourceTypeEventConfiguration => {
  return {
    Sidewalk:
      output.Sidewalk != null
        ? deserializeAws_restJson1SidewalkResourceTypeEventConfiguration(output.Sidewalk, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SemtechGnssDetail = (output: any, context: __SerdeContext): SemtechGnssDetail => {
  return {
    Fec: __expectString(output.Fec),
    Provider: __expectString(output.Provider),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ServiceProfile = (output: any, context: __SerdeContext): ServiceProfile => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ServiceProfileList = (output: any, context: __SerdeContext): ServiceProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ServiceProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SessionKeysAbpV1_0_x = (output: any, context: __SerdeContext): SessionKeysAbpV1_0_x => {
  return {
    AppSKey: __expectString(output.AppSKey),
    NwkSKey: __expectString(output.NwkSKey),
  } as any;
};

const deserializeAws_restJson1SessionKeysAbpV1_1 = (output: any, context: __SerdeContext): SessionKeysAbpV1_1 => {
  return {
    AppSKey: __expectString(output.AppSKey),
    FNwkSIntKey: __expectString(output.FNwkSIntKey),
    NwkSEncKey: __expectString(output.NwkSEncKey),
    SNwkSIntKey: __expectString(output.SNwkSIntKey),
  } as any;
};

const deserializeAws_restJson1SidewalkAccountInfo = (output: any, context: __SerdeContext): SidewalkAccountInfo => {
  return {
    AmazonId: __expectString(output.AmazonId),
    AppServerPrivateKey: __expectString(output.AppServerPrivateKey),
  } as any;
};

const deserializeAws_restJson1SidewalkAccountInfoWithFingerprint = (
  output: any,
  context: __SerdeContext
): SidewalkAccountInfoWithFingerprint => {
  return {
    AmazonId: __expectString(output.AmazonId),
    Arn: __expectString(output.Arn),
    Fingerprint: __expectString(output.Fingerprint),
  } as any;
};

const deserializeAws_restJson1SidewalkAccountList = (
  output: any,
  context: __SerdeContext
): SidewalkAccountInfoWithFingerprint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SidewalkAccountInfoWithFingerprint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SidewalkDevice = (output: any, context: __SerdeContext): SidewalkDevice => {
  return {
    AmazonId: __expectString(output.AmazonId),
    DeviceCertificates:
      output.DeviceCertificates != null
        ? deserializeAws_restJson1DeviceCertificateList(output.DeviceCertificates, context)
        : undefined,
    SidewalkId: __expectString(output.SidewalkId),
    SidewalkManufacturingSn: __expectString(output.SidewalkManufacturingSn),
  } as any;
};

const deserializeAws_restJson1SidewalkDeviceMetadata = (
  output: any,
  context: __SerdeContext
): SidewalkDeviceMetadata => {
  return {
    BatteryLevel: __expectString(output.BatteryLevel),
    DeviceState: __expectString(output.DeviceState),
    Event: __expectString(output.Event),
    Rssi: __expectInt32(output.Rssi),
  } as any;
};

const deserializeAws_restJson1SidewalkEventNotificationConfigurations = (
  output: any,
  context: __SerdeContext
): SidewalkEventNotificationConfigurations => {
  return {
    AmazonIdEventTopic: __expectString(output.AmazonIdEventTopic),
  } as any;
};

const deserializeAws_restJson1SidewalkListDevice = (output: any, context: __SerdeContext): SidewalkListDevice => {
  return {
    AmazonId: __expectString(output.AmazonId),
    DeviceCertificates:
      output.DeviceCertificates != null
        ? deserializeAws_restJson1DeviceCertificateList(output.DeviceCertificates, context)
        : undefined,
    SidewalkId: __expectString(output.SidewalkId),
    SidewalkManufacturingSn: __expectString(output.SidewalkManufacturingSn),
  } as any;
};

const deserializeAws_restJson1SidewalkResourceTypeEventConfiguration = (
  output: any,
  context: __SerdeContext
): SidewalkResourceTypeEventConfiguration => {
  return {
    WirelessDeviceEventTopic: __expectString(output.WirelessDeviceEventTopic),
  } as any;
};

const deserializeAws_restJson1SubBands = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TraceContent = (output: any, context: __SerdeContext): TraceContent => {
  return {
    LogLevel: __expectString(output.LogLevel),
    WirelessDeviceFrameInfo: __expectString(output.WirelessDeviceFrameInfo),
  } as any;
};

const deserializeAws_restJson1UpdateWirelessGatewayTaskCreate = (
  output: any,
  context: __SerdeContext
): UpdateWirelessGatewayTaskCreate => {
  return {
    LoRaWAN:
      output.LoRaWAN != null
        ? deserializeAws_restJson1LoRaWANUpdateGatewayTaskCreate(output.LoRaWAN, context)
        : undefined,
    UpdateDataRole: __expectString(output.UpdateDataRole),
    UpdateDataSource: __expectString(output.UpdateDataSource),
  } as any;
};

const deserializeAws_restJson1UpdateWirelessGatewayTaskEntry = (
  output: any,
  context: __SerdeContext
): UpdateWirelessGatewayTaskEntry => {
  return {
    Arn: __expectString(output.Arn),
    Id: __expectString(output.Id),
    LoRaWAN:
      output.LoRaWAN != null
        ? deserializeAws_restJson1LoRaWANUpdateGatewayTaskEntry(output.LoRaWAN, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WirelessDeviceEventLogOption = (
  output: any,
  context: __SerdeContext
): WirelessDeviceEventLogOption => {
  return {
    Event: __expectString(output.Event),
    LogLevel: __expectString(output.LogLevel),
  } as any;
};

const deserializeAws_restJson1WirelessDeviceEventLogOptionList = (
  output: any,
  context: __SerdeContext
): WirelessDeviceEventLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WirelessDeviceEventLogOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WirelessDeviceList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1WirelessDeviceLogOption = (
  output: any,
  context: __SerdeContext
): WirelessDeviceLogOption => {
  return {
    Events:
      output.Events != null
        ? deserializeAws_restJson1WirelessDeviceEventLogOptionList(output.Events, context)
        : undefined,
    LogLevel: __expectString(output.LogLevel),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1WirelessDeviceLogOptionList = (
  output: any,
  context: __SerdeContext
): WirelessDeviceLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WirelessDeviceLogOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WirelessDeviceStatistics = (
  output: any,
  context: __SerdeContext
): WirelessDeviceStatistics => {
  return {
    Arn: __expectString(output.Arn),
    DestinationName: __expectString(output.DestinationName),
    FuotaDeviceStatus: __expectString(output.FuotaDeviceStatus),
    Id: __expectString(output.Id),
    LastUplinkReceivedAt: __expectString(output.LastUplinkReceivedAt),
    LoRaWAN: output.LoRaWAN != null ? deserializeAws_restJson1LoRaWANListDevice(output.LoRaWAN, context) : undefined,
    McGroupId: __expectInt32(output.McGroupId),
    MulticastDeviceStatus: __expectString(output.MulticastDeviceStatus),
    Name: __expectString(output.Name),
    Sidewalk:
      output.Sidewalk != null ? deserializeAws_restJson1SidewalkListDevice(output.Sidewalk, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1WirelessDeviceStatisticsList = (
  output: any,
  context: __SerdeContext
): WirelessDeviceStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WirelessDeviceStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WirelessGatewayEventLogOption = (
  output: any,
  context: __SerdeContext
): WirelessGatewayEventLogOption => {
  return {
    Event: __expectString(output.Event),
    LogLevel: __expectString(output.LogLevel),
  } as any;
};

const deserializeAws_restJson1WirelessGatewayEventLogOptionList = (
  output: any,
  context: __SerdeContext
): WirelessGatewayEventLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WirelessGatewayEventLogOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WirelessGatewayList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1WirelessGatewayLogOption = (
  output: any,
  context: __SerdeContext
): WirelessGatewayLogOption => {
  return {
    Events:
      output.Events != null
        ? deserializeAws_restJson1WirelessGatewayEventLogOptionList(output.Events, context)
        : undefined,
    LogLevel: __expectString(output.LogLevel),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1WirelessGatewayLogOptionList = (
  output: any,
  context: __SerdeContext
): WirelessGatewayLogOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WirelessGatewayLogOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WirelessGatewayStatistics = (
  output: any,
  context: __SerdeContext
): WirelessGatewayStatistics => {
  return {
    Arn: __expectString(output.Arn),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUplinkReceivedAt: __expectString(output.LastUplinkReceivedAt),
    LoRaWAN: output.LoRaWAN != null ? deserializeAws_restJson1LoRaWANGateway(output.LoRaWAN, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1WirelessGatewayStatisticsList = (
  output: any,
  context: __SerdeContext
): WirelessGatewayStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WirelessGatewayStatistics(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WirelessGatewayTaskDefinitionList = (
  output: any,
  context: __SerdeContext
): UpdateWirelessGatewayTaskEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpdateWirelessGatewayTaskEntry(entry, context);
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
