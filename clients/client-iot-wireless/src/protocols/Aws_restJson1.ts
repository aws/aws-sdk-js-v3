// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  GetMetricConfigurationCommandInput,
  GetMetricConfigurationCommandOutput,
} from "../commands/GetMetricConfigurationCommand";
import { GetMetricsCommandInput, GetMetricsCommandOutput } from "../commands/GetMetricsCommand";
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
  UpdateMetricConfigurationCommandInput,
  UpdateMetricConfigurationCommandOutput,
} from "../commands/UpdateMetricConfigurationCommand";
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
  ConflictException,
  ConnectionStatusEventConfiguration,
  ConnectionStatusResourceTypeEventConfiguration,
  DeviceRegistrationStateEventConfiguration,
  DeviceRegistrationStateResourceTypeEventConfiguration,
  Dimension,
  FPorts,
  FuotaTaskEventLogOption,
  FuotaTaskLogOption,
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
  LoRaWANGatewayMetadata,
  LoRaWANGatewayVersion,
  LoRaWANJoinEventNotificationConfigurations,
  LoRaWANJoinResourceTypeEventConfiguration,
  LoRaWANMulticast,
  LoRaWANMulticastSession,
  LoRaWANPublicGatewayMetadata,
  LoRaWANSendDataToDevice,
  LoRaWANServiceProfile,
  LoRaWANUpdateGatewayTaskCreate,
  LteLocalId,
  LteNmrObj,
  LteObj,
  MessageDeliveryStatusEventConfiguration,
  MessageDeliveryStatusResourceTypeEventConfiguration,
  MetricQueryValue,
  OtaaV1_0_x,
  OtaaV1_1,
  ParticipatingGateways,
  ParticipatingGatewaysMulticast,
  Positioning,
  ProximityEventConfiguration,
  ProximityResourceTypeEventConfiguration,
  ResourceNotFoundException,
  SessionKeysAbpV1_0_x,
  SessionKeysAbpV1_1,
  SidewalkAccountInfo,
  SidewalkCreateDeviceProfile,
  SidewalkCreateWirelessDevice,
  SidewalkEventNotificationConfigurations,
  SidewalkResourceTypeEventConfiguration,
  SummaryMetricConfiguration,
  SummaryMetricQuery,
  SummaryMetricQueryResult,
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
  WirelessDeviceLogOption,
  WirelessGatewayEventLogOption,
  WirelessGatewayLogOption,
} from "../models/models_0";
import {
  LoRaWANMulticastMetadata,
  LoRaWANStartFuotaTask,
  LoRaWANUpdateDevice,
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
  WirelessDeviceImportTask,
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/partner-accounts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Sidewalk: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommand
 */
export const se_AssociateMulticastGroupWithFuotaTaskCommand = async (
  input: AssociateMulticastGroupWithFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fuota-tasks/{Id}/multicast-group");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MulticastGroupId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand
 */
export const se_AssociateWirelessDeviceWithFuotaTaskCommand = async (
  input: AssociateWirelessDeviceWithFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fuota-tasks/{Id}/wireless-device");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      WirelessDeviceId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommand
 */
export const se_AssociateWirelessDeviceWithMulticastGroupCommand = async (
  input: AssociateWirelessDeviceWithMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups/{Id}/wireless-device");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      WirelessDeviceId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateWirelessDeviceWithThingCommand
 */
export const se_AssociateWirelessDeviceWithThingCommand = async (
  input: AssociateWirelessDeviceWithThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-devices/{Id}/thing");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ThingArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand
 */
export const se_AssociateWirelessGatewayWithCertificateCommand = async (
  input: AssociateWirelessGatewayWithCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-gateways/{Id}/certificate");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IotCertificateId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateWirelessGatewayWithThingCommand
 */
export const se_AssociateWirelessGatewayWithThingCommand = async (
  input: AssociateWirelessGatewayWithThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-gateways/{Id}/thing");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ThingArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelMulticastGroupSessionCommand
 */
export const se_CancelMulticastGroupSessionCommand = async (
  input: CancelMulticastGroupSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/multicast-groups/{Id}/session");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDestinationCommand
 */
export const se_CreateDestinationCommand = async (
  input: CreateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/destinations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Expression: [],
      ExpressionType: [],
      Name: [],
      RoleArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeviceProfileCommand
 */
export const se_CreateDeviceProfileCommand = async (
  input: CreateDeviceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/device-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      LoRaWAN: (_) => _json(_),
      Name: [],
      Sidewalk: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFuotaTaskCommand
 */
export const se_CreateFuotaTaskCommand = async (
  input: CreateFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fuota-tasks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      Descriptor: [],
      FirmwareUpdateImage: [],
      FirmwareUpdateRole: [],
      FragmentIntervalMS: [],
      FragmentSizeBytes: [],
      LoRaWAN: (_) => _json(_),
      Name: [],
      RedundancyPercent: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMulticastGroupCommand
 */
export const se_CreateMulticastGroupCommand = async (
  input: CreateMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      LoRaWAN: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand
 */
export const se_CreateNetworkAnalyzerConfigurationCommand = async (
  input: CreateNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/network-analyzer-configurations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      MulticastGroups: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
      TraceContent: (_) => _json(_),
      WirelessDevices: (_) => _json(_),
      WirelessGateways: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateServiceProfileCommand
 */
export const se_CreateServiceProfileCommand = async (
  input: CreateServiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/service-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      LoRaWAN: (_) => _json(_),
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWirelessDeviceCommand
 */
export const se_CreateWirelessDeviceCommand = async (
  input: CreateWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-devices");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      DestinationName: [],
      LoRaWAN: (_) => _json(_),
      Name: [],
      Positioning: [],
      Sidewalk: (_) => _json(_),
      Tags: (_) => _json(_),
      Type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWirelessGatewayCommand
 */
export const se_CreateWirelessGatewayCommand = async (
  input: CreateWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-gateways");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      LoRaWAN: (_) => se_LoRaWANGateway(_, context),
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWirelessGatewayTaskCommand
 */
export const se_CreateWirelessGatewayTaskCommand = async (
  input: CreateWirelessGatewayTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-gateways/{Id}/tasks");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      WirelessGatewayTaskDefinitionId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand
 */
export const se_CreateWirelessGatewayTaskDefinitionCommand = async (
  input: CreateWirelessGatewayTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-gateway-task-definitions");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AutoCreateTasks: [],
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      Tags: (_) => _json(_),
      Update: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDestinationCommand
 */
export const se_DeleteDestinationCommand = async (
  input: DeleteDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeviceProfileCommand
 */
export const se_DeleteDeviceProfileCommand = async (
  input: DeleteDeviceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/device-profiles/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFuotaTaskCommand
 */
export const se_DeleteFuotaTaskCommand = async (
  input: DeleteFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fuota-tasks/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMulticastGroupCommand
 */
export const se_DeleteMulticastGroupCommand = async (
  input: DeleteMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/multicast-groups/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommand
 */
export const se_DeleteNetworkAnalyzerConfigurationCommand = async (
  input: DeleteNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/network-analyzer-configurations/{ConfigurationName}");
  b.p("ConfigurationName", () => input.ConfigurationName!, "{ConfigurationName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteQueuedMessagesCommand
 */
export const se_DeleteQueuedMessagesCommand = async (
  input: DeleteQueuedMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Id}/data");
  b.p("Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    [_mI]: [, __expectNonNull(input[_MI]!, `MessageId`)],
    [_WDT]: [, input[_WDT]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteServiceProfileCommand
 */
export const se_DeleteServiceProfileCommand = async (
  input: DeleteServiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/service-profiles/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWirelessDeviceCommand
 */
export const se_DeleteWirelessDeviceCommand = async (
  input: DeleteWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWirelessDeviceImportTaskCommand
 */
export const se_DeleteWirelessDeviceImportTaskCommand = async (
  input: DeleteWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless_device_import_task/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWirelessGatewayCommand
 */
export const se_DeleteWirelessGatewayCommand = async (
  input: DeleteWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWirelessGatewayTaskCommand
 */
export const se_DeleteWirelessGatewayTaskCommand = async (
  input: DeleteWirelessGatewayTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}/tasks");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand
 */
export const se_DeleteWirelessGatewayTaskDefinitionCommand = async (
  input: DeleteWirelessGatewayTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateway-task-definitions/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterWirelessDeviceCommand
 */
export const se_DeregisterWirelessDeviceCommand = async (
  input: DeregisterWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Identifier}/deregister");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_WDT]: [, input[_WDT]!],
  });
  let body: any;
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand
 */
export const se_DisassociateAwsAccountFromPartnerAccountCommand = async (
  input: DisassociateAwsAccountFromPartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/partner-accounts/{PartnerAccountId}");
  b.p("PartnerAccountId", () => input.PartnerAccountId!, "{PartnerAccountId}", false);
  const query: any = map({
    [_pT]: [, __expectNonNull(input[_PT]!, `PartnerType`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommand
 */
export const se_DisassociateMulticastGroupFromFuotaTaskCommand = async (
  input: DisassociateMulticastGroupFromFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fuota-tasks/{Id}/multicast-groups/{MulticastGroupId}");
  b.p("Id", () => input.Id!, "{Id}", false);
  b.p("MulticastGroupId", () => input.MulticastGroupId!, "{MulticastGroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand
 */
export const se_DisassociateWirelessDeviceFromFuotaTaskCommand = async (
  input: DisassociateWirelessDeviceFromFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fuota-tasks/{Id}/wireless-devices/{WirelessDeviceId}");
  b.p("Id", () => input.Id!, "{Id}", false);
  b.p("WirelessDeviceId", () => input.WirelessDeviceId!, "{WirelessDeviceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const se_DisassociateWirelessDeviceFromMulticastGroupCommand = async (
  input: DisassociateWirelessDeviceFromMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/multicast-groups/{Id}/wireless-devices/{WirelessDeviceId}");
  b.p("Id", () => input.Id!, "{Id}", false);
  b.p("WirelessDeviceId", () => input.WirelessDeviceId!, "{WirelessDeviceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateWirelessDeviceFromThingCommand
 */
export const se_DisassociateWirelessDeviceFromThingCommand = async (
  input: DisassociateWirelessDeviceFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Id}/thing");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand
 */
export const se_DisassociateWirelessGatewayFromCertificateCommand = async (
  input: DisassociateWirelessGatewayFromCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}/certificate");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateWirelessGatewayFromThingCommand
 */
export const se_DisassociateWirelessGatewayFromThingCommand = async (
  input: DisassociateWirelessGatewayFromThingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}/thing");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDestinationCommand
 */
export const se_GetDestinationCommand = async (
  input: GetDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceProfileCommand
 */
export const se_GetDeviceProfileCommand = async (
  input: GetDeviceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/device-profiles/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEventConfigurationByResourceTypesCommand
 */
export const se_GetEventConfigurationByResourceTypesCommand = async (
  input: GetEventConfigurationByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-configurations-resource-types");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFuotaTaskCommand
 */
export const se_GetFuotaTaskCommand = async (
  input: GetFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fuota-tasks/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLogLevelsByResourceTypesCommand
 */
export const se_GetLogLevelsByResourceTypesCommand = async (
  input: GetLogLevelsByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/log-levels");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetricConfigurationCommand
 */
export const se_GetMetricConfigurationCommand = async (
  input: GetMetricConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/metric-configuration");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMetricsCommand
 */
export const se_GetMetricsCommand = async (
  input: GetMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metrics");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SummaryMetricQueries: (_) => se_SummaryMetricQueries(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMulticastGroupCommand
 */
export const se_GetMulticastGroupCommand = async (
  input: GetMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/multicast-groups/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMulticastGroupSessionCommand
 */
export const se_GetMulticastGroupSessionCommand = async (
  input: GetMulticastGroupSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/multicast-groups/{Id}/session");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkAnalyzerConfigurationCommand
 */
export const se_GetNetworkAnalyzerConfigurationCommand = async (
  input: GetNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/network-analyzer-configurations/{ConfigurationName}");
  b.p("ConfigurationName", () => input.ConfigurationName!, "{ConfigurationName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPartnerAccountCommand
 */
export const se_GetPartnerAccountCommand = async (
  input: GetPartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/partner-accounts/{PartnerAccountId}");
  b.p("PartnerAccountId", () => input.PartnerAccountId!, "{PartnerAccountId}", false);
  const query: any = map({
    [_pT]: [, __expectNonNull(input[_PT]!, `PartnerType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPositionCommand
 */
export const se_GetPositionCommand = async (
  input: GetPositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/positions/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPositionConfigurationCommand
 */
export const se_GetPositionConfigurationCommand = async (
  input: GetPositionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/position-configurations/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPositionEstimateCommand
 */
export const se_GetPositionEstimateCommand = async (
  input: GetPositionEstimateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/position-estimate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CellTowers: (_) => se_CellTowers(_, context),
      Gnss: (_) => se_Gnss(_, context),
      Ip: (_) => _json(_),
      Timestamp: (_) => _.getTime() / 1_000,
      WiFiAccessPoints: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceEventConfigurationCommand
 */
export const se_GetResourceEventConfigurationCommand = async (
  input: GetResourceEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_iT]: [, __expectNonNull(input[_IT]!, `IdentifierType`)],
    [_pT]: [, input[_PT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourceLogLevelCommand
 */
export const se_GetResourceLogLevelCommand = async (
  input: GetResourceLogLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/log-levels/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePositionCommand
 */
export const se_GetResourcePositionCommand = async (
  input: GetResourcePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resource-positions/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceEndpointCommand
 */
export const se_GetServiceEndpointCommand = async (
  input: GetServiceEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/service-endpoint");
  const query: any = map({
    [_sT]: [, input[_ST]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetServiceProfileCommand
 */
export const se_GetServiceProfileCommand = async (
  input: GetServiceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/service-profiles/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessDeviceCommand
 */
export const se_GetWirelessDeviceCommand = async (
  input: GetWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_iT]: [, __expectNonNull(input[_IT]!, `IdentifierType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessDeviceImportTaskCommand
 */
export const se_GetWirelessDeviceImportTaskCommand = async (
  input: GetWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless_device_import_task/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessDeviceStatisticsCommand
 */
export const se_GetWirelessDeviceStatisticsCommand = async (
  input: GetWirelessDeviceStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{WirelessDeviceId}/statistics");
  b.p("WirelessDeviceId", () => input.WirelessDeviceId!, "{WirelessDeviceId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessGatewayCommand
 */
export const se_GetWirelessGatewayCommand = async (
  input: GetWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_iT]: [, __expectNonNull(input[_IT]!, `IdentifierType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessGatewayCertificateCommand
 */
export const se_GetWirelessGatewayCertificateCommand = async (
  input: GetWirelessGatewayCertificateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}/certificate");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand
 */
export const se_GetWirelessGatewayFirmwareInformationCommand = async (
  input: GetWirelessGatewayFirmwareInformationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}/firmware-information");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessGatewayStatisticsCommand
 */
export const se_GetWirelessGatewayStatisticsCommand = async (
  input: GetWirelessGatewayStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{WirelessGatewayId}/statistics");
  b.p("WirelessGatewayId", () => input.WirelessGatewayId!, "{WirelessGatewayId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessGatewayTaskCommand
 */
export const se_GetWirelessGatewayTaskCommand = async (
  input: GetWirelessGatewayTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways/{Id}/tasks");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand
 */
export const se_GetWirelessGatewayTaskDefinitionCommand = async (
  input: GetWirelessGatewayTaskDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateway-task-definitions/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDestinationsCommand
 */
export const se_ListDestinationsCommand = async (
  input: ListDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/destinations");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeviceProfilesCommand
 */
export const se_ListDeviceProfilesCommand = async (
  input: ListDeviceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/device-profiles");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_dPT]: [, input[_DPT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDevicesForWirelessDeviceImportTaskCommand
 */
export const se_ListDevicesForWirelessDeviceImportTaskCommand = async (
  input: ListDevicesForWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless_device_import_task");
  const query: any = map({
    [_i]: [, __expectNonNull(input[_I]!, `Id`)],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_s]: [, input[_S]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEventConfigurationsCommand
 */
export const se_ListEventConfigurationsCommand = async (
  input: ListEventConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/event-configurations");
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFuotaTasksCommand
 */
export const se_ListFuotaTasksCommand = async (
  input: ListFuotaTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fuota-tasks");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMulticastGroupsCommand
 */
export const se_ListMulticastGroupsCommand = async (
  input: ListMulticastGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/multicast-groups");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMulticastGroupsByFuotaTaskCommand
 */
export const se_ListMulticastGroupsByFuotaTaskCommand = async (
  input: ListMulticastGroupsByFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/fuota-tasks/{Id}/multicast-groups");
  b.p("Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand
 */
export const se_ListNetworkAnalyzerConfigurationsCommand = async (
  input: ListNetworkAnalyzerConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/network-analyzer-configurations");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPartnerAccountsCommand
 */
export const se_ListPartnerAccountsCommand = async (
  input: ListPartnerAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/partner-accounts");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPositionConfigurationsCommand
 */
export const se_ListPositionConfigurationsCommand = async (
  input: ListPositionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/position-configurations");
  const query: any = map({
    [_rT]: [, input[_RT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListQueuedMessagesCommand
 */
export const se_ListQueuedMessagesCommand = async (
  input: ListQueuedMessagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Id}/data");
  b.p("Id", () => input.Id!, "{Id}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_WDT]: [, input[_WDT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListServiceProfilesCommand
 */
export const se_ListServiceProfilesCommand = async (
  input: ListServiceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/service-profiles");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWirelessDeviceImportTasksCommand
 */
export const se_ListWirelessDeviceImportTasksCommand = async (
  input: ListWirelessDeviceImportTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless_device_import_tasks");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWirelessDevicesCommand
 */
export const se_ListWirelessDevicesCommand = async (
  input: ListWirelessDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_dN]: [, input[_DN]!],
    [_dPI]: [, input[_DPI]!],
    [_sPI]: [, input[_SPI]!],
    [_wDT]: [, input[_WDT]!],
    [_fTI]: [, input[_FTI]!],
    [_mGI]: [, input[_MGI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWirelessGatewaysCommand
 */
export const se_ListWirelessGatewaysCommand = async (
  input: ListWirelessGatewaysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateways");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand
 */
export const se_ListWirelessGatewayTaskDefinitionsCommand = async (
  input: ListWirelessGatewayTaskDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-gateway-task-definitions");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
    [_tDT]: [, input[_TDT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutPositionConfigurationCommand
 */
export const se_PutPositionConfigurationCommand = async (
  input: PutPositionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/position-configurations/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Destination: [],
      Solvers: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutResourceLogLevelCommand
 */
export const se_PutResourceLogLevelCommand = async (
  input: PutResourceLogLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/log-levels/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      LogLevel: [],
    })
  );
  b.m("PUT").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetAllResourceLogLevelsCommand
 */
export const se_ResetAllResourceLogLevelsCommand = async (
  input: ResetAllResourceLogLevelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/log-levels");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetResourceLogLevelCommand
 */
export const se_ResetResourceLogLevelCommand = async (
  input: ResetResourceLogLevelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/log-levels/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendDataToMulticastGroupCommand
 */
export const se_SendDataToMulticastGroupCommand = async (
  input: SendDataToMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups/{Id}/data");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PayloadData: [],
      WirelessMetadata: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SendDataToWirelessDeviceCommand
 */
export const se_SendDataToWirelessDeviceCommand = async (
  input: SendDataToWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-devices/{Id}/data");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PayloadData: [],
      TransmitMode: [],
      WirelessMetadata: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand
 */
export const se_StartBulkAssociateWirelessDeviceWithMulticastGroupCommand = async (
  input: StartBulkAssociateWirelessDeviceWithMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups/{Id}/bulk");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueryString: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const se_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand = async (
  input: StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups/{Id}/bulk");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      QueryString: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartFuotaTaskCommand
 */
export const se_StartFuotaTaskCommand = async (
  input: StartFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fuota-tasks/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LoRaWAN: (_) => se_LoRaWANStartFuotaTask(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartMulticastGroupSessionCommand
 */
export const se_StartMulticastGroupSessionCommand = async (
  input: StartMulticastGroupSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups/{Id}/session");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      LoRaWAN: (_) => se_LoRaWANMulticastSession(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSingleWirelessDeviceImportTaskCommand
 */
export const se_StartSingleWirelessDeviceImportTaskCommand = async (
  input: StartSingleWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless_single_device_import_task");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DestinationName: [],
      DeviceName: [],
      Sidewalk: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartWirelessDeviceImportTaskCommand
 */
export const se_StartWirelessDeviceImportTaskCommand = async (
  input: StartWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless_device_import_task");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      DestinationName: [],
      Sidewalk: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TestWirelessDeviceCommand
 */
export const se_TestWirelessDeviceCommand = async (
  input: TestWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/wireless-devices/{Id}/test");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_RA]!, `ResourceArn`)],
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDestinationCommand
 */
export const se_UpdateDestinationCommand = async (
  input: UpdateDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/destinations/{Name}");
  b.p("Name", () => input.Name!, "{Name}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Expression: [],
      ExpressionType: [],
      RoleArn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEventConfigurationByResourceTypesCommand
 */
export const se_UpdateEventConfigurationByResourceTypesCommand = async (
  input: UpdateEventConfigurationByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-configurations-resource-types");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectionStatus: (_) => _json(_),
      DeviceRegistrationState: (_) => _json(_),
      Join: (_) => _json(_),
      MessageDeliveryStatus: (_) => _json(_),
      Proximity: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFuotaTaskCommand
 */
export const se_UpdateFuotaTaskCommand = async (
  input: UpdateFuotaTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/fuota-tasks/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Descriptor: [],
      FirmwareUpdateImage: [],
      FirmwareUpdateRole: [],
      FragmentIntervalMS: [],
      FragmentSizeBytes: [],
      LoRaWAN: (_) => _json(_),
      Name: [],
      RedundancyPercent: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLogLevelsByResourceTypesCommand
 */
export const se_UpdateLogLevelsByResourceTypesCommand = async (
  input: UpdateLogLevelsByResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/log-levels");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DefaultLogLevel: [],
      FuotaTaskLogOptions: (_) => _json(_),
      WirelessDeviceLogOptions: (_) => _json(_),
      WirelessGatewayLogOptions: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMetricConfigurationCommand
 */
export const se_UpdateMetricConfigurationCommand = async (
  input: UpdateMetricConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/metric-configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      SummaryMetric: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMulticastGroupCommand
 */
export const se_UpdateMulticastGroupCommand = async (
  input: UpdateMulticastGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/multicast-groups/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      LoRaWAN: (_) => _json(_),
      Name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand
 */
export const se_UpdateNetworkAnalyzerConfigurationCommand = async (
  input: UpdateNetworkAnalyzerConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/network-analyzer-configurations/{ConfigurationName}");
  b.p("ConfigurationName", () => input.ConfigurationName!, "{ConfigurationName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      MulticastGroupsToAdd: (_) => _json(_),
      MulticastGroupsToRemove: (_) => _json(_),
      TraceContent: (_) => _json(_),
      WirelessDevicesToAdd: (_) => _json(_),
      WirelessDevicesToRemove: (_) => _json(_),
      WirelessGatewaysToAdd: (_) => _json(_),
      WirelessGatewaysToRemove: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePartnerAccountCommand
 */
export const se_UpdatePartnerAccountCommand = async (
  input: UpdatePartnerAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/partner-accounts/{PartnerAccountId}");
  b.p("PartnerAccountId", () => input.PartnerAccountId!, "{PartnerAccountId}", false);
  const query: any = map({
    [_pT]: [, __expectNonNull(input[_PT]!, `PartnerType`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Sidewalk: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePositionCommand
 */
export const se_UpdatePositionCommand = async (
  input: UpdatePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/positions/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Position: (_) => se_PositionCoordinate(_, context),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResourceEventConfigurationCommand
 */
export const se_UpdateResourceEventConfigurationCommand = async (
  input: UpdateResourceEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/event-configurations/{Identifier}");
  b.p("Identifier", () => input.Identifier!, "{Identifier}", false);
  const query: any = map({
    [_iT]: [, __expectNonNull(input[_IT]!, `IdentifierType`)],
    [_pT]: [, input[_PT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectionStatus: (_) => _json(_),
      DeviceRegistrationState: (_) => _json(_),
      Join: (_) => _json(_),
      MessageDeliveryStatus: (_) => _json(_),
      Proximity: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateResourcePositionCommand
 */
export const se_UpdateResourcePositionCommand = async (
  input: UpdateResourcePositionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/octet-stream",
  };
  b.bp("/resource-positions/{ResourceIdentifier}");
  b.p("ResourceIdentifier", () => input.ResourceIdentifier!, "{ResourceIdentifier}", false);
  const query: any = map({
    [_rT]: [, __expectNonNull(input[_RT]!, `ResourceType`)],
  });
  let body: any;
  if (input.GeoJsonPayload !== undefined) {
    body = input.GeoJsonPayload;
  }
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWirelessDeviceCommand
 */
export const se_UpdateWirelessDeviceCommand = async (
  input: UpdateWirelessDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-devices/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      DestinationName: [],
      LoRaWAN: (_) => _json(_),
      Name: [],
      Positioning: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWirelessDeviceImportTaskCommand
 */
export const se_UpdateWirelessDeviceImportTaskCommand = async (
  input: UpdateWirelessDeviceImportTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless_device_import_task/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Sidewalk: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWirelessGatewayCommand
 */
export const se_UpdateWirelessGatewayCommand = async (
  input: UpdateWirelessGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/wireless-gateways/{Id}");
  b.p("Id", () => input.Id!, "{Id}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      JoinEuiFilters: (_) => _json(_),
      MaxEirp: (_) => __serializeFloat(_),
      Name: [],
      NetIdFilters: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand
 */
export const de_AssociateAwsAccountWithPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Sidewalk: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateMulticastGroupWithFuotaTaskCommand
 */
export const de_AssociateMulticastGroupWithFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateMulticastGroupWithFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithFuotaTaskCommand
 */
export const de_AssociateWirelessDeviceWithFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithMulticastGroupCommand
 */
export const de_AssociateWirelessDeviceWithMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessDeviceWithThingCommand
 */
export const de_AssociateWirelessDeviceWithThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessDeviceWithThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand
 */
export const de_AssociateWirelessGatewayWithCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IotCertificateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateWirelessGatewayWithThingCommand
 */
export const de_AssociateWirelessGatewayWithThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateWirelessGatewayWithThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelMulticastGroupSessionCommand
 */
export const de_CancelMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDestinationCommand
 */
export const de_CreateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDestinationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceProfileCommand
 */
export const de_CreateDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFuotaTaskCommand
 */
export const de_CreateFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFuotaTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMulticastGroupCommand
 */
export const de_CreateMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMulticastGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand
 */
export const de_CreateNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateServiceProfileCommand
 */
export const de_CreateServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessDeviceCommand
 */
export const de_CreateWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayCommand
 */
export const de_CreateWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayTaskCommand
 */
export const de_CreateWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
    WirelessGatewayTaskDefinitionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateWirelessGatewayTaskDefinitionCommand
 */
export const de_CreateWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDestinationCommand
 */
export const de_DeleteDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceProfileCommand
 */
export const de_DeleteDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFuotaTaskCommand
 */
export const de_DeleteFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMulticastGroupCommand
 */
export const de_DeleteMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNetworkAnalyzerConfigurationCommand
 */
export const de_DeleteNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteQueuedMessagesCommand
 */
export const de_DeleteQueuedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteQueuedMessagesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteServiceProfileCommand
 */
export const de_DeleteServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceProfileCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessDeviceCommand
 */
export const de_DeleteWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessDeviceImportTaskCommand
 */
export const de_DeleteWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayCommand
 */
export const de_DeleteWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayTaskCommand
 */
export const de_DeleteWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWirelessGatewayTaskDefinitionCommand
 */
export const de_DeleteWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterWirelessDeviceCommand
 */
export const de_DeregisterWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateAwsAccountFromPartnerAccountCommand
 */
export const de_DisassociateAwsAccountFromPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateMulticastGroupFromFuotaTaskCommand
 */
export const de_DisassociateMulticastGroupFromFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMulticastGroupFromFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromFuotaTaskCommand
 */
export const de_DisassociateWirelessDeviceFromFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const de_DisassociateWirelessDeviceFromMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessDeviceFromThingCommand
 */
export const de_DisassociateWirelessDeviceFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessDeviceFromThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessGatewayFromCertificateCommand
 */
export const de_DisassociateWirelessGatewayFromCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateWirelessGatewayFromThingCommand
 */
export const de_DisassociateWirelessGatewayFromThingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateWirelessGatewayFromThingCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetDestinationCommand
 */
export const de_GetDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    Expression: __expectString,
    ExpressionType: __expectString,
    Name: __expectString,
    RoleArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceProfileCommand
 */
export const de_GetDeviceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
    LoRaWAN: _json,
    Name: __expectString,
    Sidewalk: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEventConfigurationByResourceTypesCommand
 */
export const de_GetEventConfigurationByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventConfigurationByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionStatus: _json,
    DeviceRegistrationState: _json,
    Join: _json,
    MessageDeliveryStatus: _json,
    Proximity: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFuotaTaskCommand
 */
export const de_GetFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFuotaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Descriptor: __expectString,
    FirmwareUpdateImage: __expectString,
    FirmwareUpdateRole: __expectString,
    FragmentIntervalMS: __expectInt32,
    FragmentSizeBytes: __expectInt32,
    Id: __expectString,
    LoRaWAN: (_) => de_LoRaWANFuotaTaskGetInfo(_, context),
    Name: __expectString,
    RedundancyPercent: __expectInt32,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLogLevelsByResourceTypesCommand
 */
export const de_GetLogLevelsByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLogLevelsByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DefaultLogLevel: __expectString,
    FuotaTaskLogOptions: _json,
    WirelessDeviceLogOptions: _json,
    WirelessGatewayLogOptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricConfigurationCommand
 */
export const de_GetMetricConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SummaryMetric: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMetricsCommand
 */
export const de_GetMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SummaryMetricQueryResults: (_) => de_SummaryMetricQueryResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMulticastGroupCommand
 */
export const de_GetMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    LoRaWAN: _json,
    Name: __expectString,
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMulticastGroupSessionCommand
 */
export const de_GetMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LoRaWAN: (_) => de_LoRaWANMulticastSession(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkAnalyzerConfigurationCommand
 */
export const de_GetNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    MulticastGroups: _json,
    Name: __expectString,
    TraceContent: _json,
    WirelessDevices: _json,
    WirelessGateways: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPartnerAccountCommand
 */
export const de_GetPartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPartnerAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountLinked: __expectBoolean,
    Sidewalk: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPositionCommand
 */
export const de_GetPositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Accuracy: (_) => de_Accuracy(_, context),
    Position: (_) => de_PositionCoordinate(_, context),
    SolverProvider: __expectString,
    SolverType: __expectString,
    SolverVersion: __expectString,
    Timestamp: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPositionConfigurationCommand
 */
export const de_GetPositionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Destination: __expectString,
    Solvers: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPositionEstimateCommand
 */
export const de_GetPositionEstimateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPositionEstimateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.GeoJsonPayload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceEventConfigurationCommand
 */
export const de_GetResourceEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionStatus: _json,
    DeviceRegistrationState: _json,
    Join: _json,
    MessageDeliveryStatus: _json,
    Proximity: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceLogLevelCommand
 */
export const de_GetResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LogLevel: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePositionCommand
 */
export const de_GetResourcePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePositionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = await collectBody(output.body, context);
  contents.GeoJsonPayload = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceEndpointCommand
 */
export const de_GetServiceEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ServerTrust: __expectString,
    ServiceEndpoint: __expectString,
    ServiceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceProfileCommand
 */
export const de_GetServiceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
    LoRaWAN: _json,
    Name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessDeviceCommand
 */
export const de_GetWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    DestinationName: __expectString,
    Id: __expectString,
    LoRaWAN: _json,
    Name: __expectString,
    Positioning: __expectString,
    Sidewalk: _json,
    ThingArn: __expectString,
    ThingName: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessDeviceImportTaskCommand
 */
export const de_GetWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    CreationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DestinationName: __expectString,
    FailedImportedDeviceCount: __expectLong,
    Id: __expectString,
    InitializedImportedDeviceCount: __expectLong,
    OnboardedImportedDeviceCount: __expectLong,
    PendingImportedDeviceCount: __expectLong,
    Sidewalk: _json,
    Status: __expectString,
    StatusReason: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessDeviceStatisticsCommand
 */
export const de_GetWirelessDeviceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessDeviceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastUplinkReceivedAt: __expectString,
    LoRaWAN: (_) => de_LoRaWANDeviceMetadata(_, context),
    Sidewalk: _json,
    WirelessDeviceId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayCommand
 */
export const de_GetWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Description: __expectString,
    Id: __expectString,
    LoRaWAN: (_) => de_LoRaWANGateway(_, context),
    Name: __expectString,
    ThingArn: __expectString,
    ThingName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayCertificateCommand
 */
export const de_GetWirelessGatewayCertificateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayCertificateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IotCertificateId: __expectString,
    LoRaWANNetworkServerCertificateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand
 */
export const de_GetWirelessGatewayFirmwareInformationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LoRaWAN: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayStatisticsCommand
 */
export const de_GetWirelessGatewayStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionStatus: __expectString,
    LastUplinkReceivedAt: __expectString,
    WirelessGatewayId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayTaskCommand
 */
export const de_GetWirelessGatewayTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastUplinkReceivedAt: __expectString,
    Status: __expectString,
    TaskCreatedAt: __expectString,
    WirelessGatewayId: __expectString,
    WirelessGatewayTaskDefinitionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetWirelessGatewayTaskDefinitionCommand
 */
export const de_GetWirelessGatewayTaskDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    AutoCreateTasks: __expectBoolean,
    Name: __expectString,
    Update: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDestinationsCommand
 */
export const de_ListDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DestinationList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceProfilesCommand
 */
export const de_ListDeviceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DeviceProfileList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDevicesForWirelessDeviceImportTaskCommand
 */
export const de_ListDevicesForWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesForWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DestinationName: __expectString,
    ImportedWirelessDeviceList: (_) => de_ImportedWirelessDeviceList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEventConfigurationsCommand
 */
export const de_ListEventConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EventConfigurationsList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFuotaTasksCommand
 */
export const de_ListFuotaTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFuotaTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FuotaTaskList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMulticastGroupsCommand
 */
export const de_ListMulticastGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MulticastGroupList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMulticastGroupsByFuotaTaskCommand
 */
export const de_ListMulticastGroupsByFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMulticastGroupsByFuotaTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MulticastGroupList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworkAnalyzerConfigurationsCommand
 */
export const de_ListNetworkAnalyzerConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkAnalyzerConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NetworkAnalyzerConfigurationList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPartnerAccountsCommand
 */
export const de_ListPartnerAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Sidewalk: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPositionConfigurationsCommand
 */
export const de_ListPositionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPositionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    PositionConfigurationList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListQueuedMessagesCommand
 */
export const de_ListQueuedMessagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListQueuedMessagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DownlinkQueueMessagesList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListServiceProfilesCommand
 */
export const de_ListServiceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ServiceProfileList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessDeviceImportTasksCommand
 */
export const de_ListWirelessDeviceImportTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDeviceImportTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    WirelessDeviceImportTaskList: (_) => de_WirelessDeviceImportTaskList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessDevicesCommand
 */
export const de_ListWirelessDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    WirelessDeviceList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessGatewaysCommand
 */
export const de_ListWirelessGatewaysCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewaysCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    WirelessGatewayList: (_) => de_WirelessGatewayStatisticsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListWirelessGatewayTaskDefinitionsCommand
 */
export const de_ListWirelessGatewayTaskDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TaskDefinitions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutPositionConfigurationCommand
 */
export const de_PutPositionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPositionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourceLogLevelCommand
 */
export const de_PutResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResetAllResourceLogLevelsCommand
 */
export const de_ResetAllResourceLogLevelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetAllResourceLogLevelsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ResetResourceLogLevelCommand
 */
export const de_ResetResourceLogLevelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetResourceLogLevelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SendDataToMulticastGroupCommand
 */
export const de_SendDataToMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToMulticastGroupCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SendDataToWirelessDeviceCommand
 */
export const de_SendDataToWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendDataToWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    MessageId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartBulkAssociateWirelessDeviceWithMulticastGroupCommand
 */
export const de_StartBulkAssociateWirelessDeviceWithMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkAssociateWirelessDeviceWithMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand
 */
export const de_StartBulkDisassociateWirelessDeviceFromMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBulkDisassociateWirelessDeviceFromMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartFuotaTaskCommand
 */
export const de_StartFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartMulticastGroupSessionCommand
 */
export const de_StartMulticastGroupSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMulticastGroupSessionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartSingleWirelessDeviceImportTaskCommand
 */
export const de_StartSingleWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSingleWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartWirelessDeviceImportTaskCommand
 */
export const de_StartWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Arn: __expectString,
    Id: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TestWirelessDeviceCommand
 */
export const de_TestWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Result: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDestinationCommand
 */
export const de_UpdateDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDestinationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEventConfigurationByResourceTypesCommand
 */
export const de_UpdateEventConfigurationByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventConfigurationByResourceTypesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFuotaTaskCommand
 */
export const de_UpdateFuotaTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFuotaTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLogLevelsByResourceTypesCommand
 */
export const de_UpdateLogLevelsByResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLogLevelsByResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMetricConfigurationCommand
 */
export const de_UpdateMetricConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMulticastGroupCommand
 */
export const de_UpdateMulticastGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMulticastGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkAnalyzerConfigurationCommand
 */
export const de_UpdateNetworkAnalyzerConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkAnalyzerConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePartnerAccountCommand
 */
export const de_UpdatePartnerAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePartnerAccountCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePositionCommand
 */
export const de_UpdatePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePositionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceEventConfigurationCommand
 */
export const de_UpdateResourceEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceEventConfigurationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourcePositionCommand
 */
export const de_UpdateResourcePositionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePositionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWirelessDeviceCommand
 */
export const de_UpdateWirelessDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWirelessDeviceImportTaskCommand
 */
export const de_UpdateWirelessDeviceImportTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessDeviceImportTaskCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWirelessGatewayCommand
 */
export const de_UpdateWirelessGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWirelessGatewayCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "TooManyTagsException":
    case "com.amazonaws.iotwireless#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AbpV1_0_x omitted.

// se_AbpV1_1 omitted.

// se_ApplicationConfig omitted.

// se_Applications omitted.

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

// se_Beaconing omitted.

// se_BeaconingFrequencies omitted.

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

// se_CdmaLocalId omitted.

// se_CdmaNmrList omitted.

// se_CdmaNmrObj omitted.

/**
 * serializeAws_restJson1CdmaObj
 */
const se_CdmaObj = (input: CdmaObj, context: __SerdeContext): any => {
  return take(input, {
    BaseLat: __serializeFloat,
    BaseLng: __serializeFloat,
    BaseStationId: [],
    CdmaLocalId: _json,
    CdmaNmr: _json,
    NetworkId: [],
    PilotPower: [],
    RegistrationZone: [],
    SystemId: [],
  });
};

/**
 * serializeAws_restJson1CellTowers
 */
const se_CellTowers = (input: CellTowers, context: __SerdeContext): any => {
  return take(input, {
    Cdma: (_) => se_CdmaList(_, context),
    Gsm: _json,
    Lte: (_) => se_LteList(_, context),
    Tdscdma: _json,
    Wcdma: _json,
  });
};

// se_ConnectionStatusEventConfiguration omitted.

// se_ConnectionStatusResourceTypeEventConfiguration omitted.

// se_DeviceRegistrationStateEventConfiguration omitted.

// se_DeviceRegistrationStateResourceTypeEventConfiguration omitted.

// se_Dimension omitted.

// se_Dimensions omitted.

// se_FactoryPresetFreqsList omitted.

// se_FPorts omitted.

// se_FuotaTaskEventLogOption omitted.

// se_FuotaTaskEventLogOptionList omitted.

// se_FuotaTaskLogOption omitted.

// se_FuotaTaskLogOptionList omitted.

// se_GatewayList omitted.

// se_GatewayListItem omitted.

// se_GatewayListMulticast omitted.

// se_GlobalIdentity omitted.

/**
 * serializeAws_restJson1Gnss
 */
const se_Gnss = (input: Gnss, context: __SerdeContext): any => {
  return take(input, {
    AssistAltitude: __serializeFloat,
    AssistPosition: (_) => se_AssistPosition(_, context),
    CaptureTime: __serializeFloat,
    CaptureTimeAccuracy: __serializeFloat,
    Payload: [],
    Use2DSolver: [],
  });
};

// se_GsmList omitted.

// se_GsmLocalId omitted.

// se_GsmNmrList omitted.

// se_GsmNmrObj omitted.

// se_GsmObj omitted.

// se_Ip omitted.

// se_JoinEuiFilters omitted.

// se_JoinEuiRange omitted.

// se_JoinEventConfiguration omitted.

// se_JoinResourceTypeEventConfiguration omitted.

// se_LoRaWANConnectionStatusEventNotificationConfigurations omitted.

// se_LoRaWANConnectionStatusResourceTypeEventConfiguration omitted.

// se_LoRaWANDevice omitted.

// se_LoRaWANDeviceProfile omitted.

// se_LoRaWANFuotaTask omitted.

/**
 * serializeAws_restJson1LoRaWANGateway
 */
const se_LoRaWANGateway = (input: LoRaWANGateway, context: __SerdeContext): any => {
  return take(input, {
    Beaconing: _json,
    GatewayEui: [],
    JoinEuiFilters: _json,
    MaxEirp: __serializeFloat,
    NetIdFilters: _json,
    RfRegion: [],
    SubBands: _json,
  });
};

// se_LoRaWANGatewayVersion omitted.

// se_LoRaWANJoinEventNotificationConfigurations omitted.

// se_LoRaWANJoinResourceTypeEventConfiguration omitted.

// se_LoRaWANMulticast omitted.

// se_LoRaWANMulticastMetadata omitted.

/**
 * serializeAws_restJson1LoRaWANMulticastSession
 */
const se_LoRaWANMulticastSession = (input: LoRaWANMulticastSession, context: __SerdeContext): any => {
  return take(input, {
    DlDr: [],
    DlFreq: [],
    PingSlotPeriod: [],
    SessionStartTime: __serializeDateTime,
    SessionTimeout: [],
  });
};

// se_LoRaWANSendDataToDevice omitted.

// se_LoRaWANServiceProfile omitted.

/**
 * serializeAws_restJson1LoRaWANStartFuotaTask
 */
const se_LoRaWANStartFuotaTask = (input: LoRaWANStartFuotaTask, context: __SerdeContext): any => {
  return take(input, {
    StartTime: __serializeDateTime,
  });
};

// se_LoRaWANUpdateDevice omitted.

// se_LoRaWANUpdateGatewayTaskCreate omitted.

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

// se_LteLocalId omitted.

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
  return take(input, {
    Earfcn: [],
    EutranCid: [],
    Pci: [],
    Rsrp: [],
    Rsrq: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1LteObj
 */
const se_LteObj = (input: LteObj, context: __SerdeContext): any => {
  return take(input, {
    EutranCid: [],
    LteLocalId: _json,
    LteNmr: (_) => se_LteNmrList(_, context),
    LteTimingAdvance: [],
    Mcc: [],
    Mnc: [],
    NrCapable: [],
    Rsrp: [],
    Rsrq: __serializeFloat,
    Tac: [],
  });
};

// se_MessageDeliveryStatusEventConfiguration omitted.

// se_MessageDeliveryStatusResourceTypeEventConfiguration omitted.

// se_MulticastWirelessMetadata omitted.

// se_NetIdFilters omitted.

// se_NetworkAnalyzerMulticastGroupList omitted.

// se_OtaaV1_0_x omitted.

// se_OtaaV1_1 omitted.

// se_ParticipatingGateways omitted.

// se_ParticipatingGatewaysMulticast omitted.

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

// se_Positioning omitted.

// se_PositionSolverConfigurations omitted.

// se_ProximityEventConfiguration omitted.

// se_ProximityResourceTypeEventConfiguration omitted.

// se_SemtechGnssConfiguration omitted.

// se_SessionKeysAbpV1_0_x omitted.

// se_SessionKeysAbpV1_1 omitted.

// se_SidewalkAccountInfo omitted.

// se_SidewalkCreateDeviceProfile omitted.

// se_SidewalkCreateWirelessDevice omitted.

// se_SidewalkEventNotificationConfigurations omitted.

// se_SidewalkResourceTypeEventConfiguration omitted.

// se_SidewalkSendDataToDevice omitted.

// se_SidewalkSingleStartImportInfo omitted.

// se_SidewalkStartImportInfo omitted.

// se_SidewalkUpdateAccount omitted.

// se_SidewalkUpdateImportInfo omitted.

// se_SubBands omitted.

// se_SummaryMetricConfiguration omitted.

/**
 * serializeAws_restJson1SummaryMetricQueries
 */
const se_SummaryMetricQueries = (input: SummaryMetricQuery[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SummaryMetricQuery(entry, context);
    });
};

/**
 * serializeAws_restJson1SummaryMetricQuery
 */
const se_SummaryMetricQuery = (input: SummaryMetricQuery, context: __SerdeContext): any => {
  return take(input, {
    AggregationPeriod: [],
    Dimensions: _json,
    EndTimestamp: (_) => _.getTime() / 1_000,
    MetricName: [],
    QueryId: [],
    StartTimestamp: (_) => _.getTime() / 1_000,
  });
};

// se_Tag omitted.

// se_TagList omitted.

// se_TdscdmaList omitted.

// se_TdscdmaLocalId omitted.

// se_TdscdmaNmrList omitted.

// se_TdscdmaNmrObj omitted.

// se_TdscdmaObj omitted.

// se_TraceContent omitted.

// se_UpdateAbpV1_0_x omitted.

// se_UpdateAbpV1_1 omitted.

// se_UpdateFPorts omitted.

// se_UpdateWirelessGatewayTaskCreate omitted.

// se_WcdmaList omitted.

// se_WcdmaLocalId omitted.

// se_WcdmaNmrList omitted.

// se_WcdmaNmrObj omitted.

// se_WcdmaObj omitted.

// se_WiFiAccessPoint omitted.

// se_WiFiAccessPoints omitted.

// se_WirelessDeviceEventLogOption omitted.

// se_WirelessDeviceEventLogOptionList omitted.

// se_WirelessDeviceList omitted.

// se_WirelessDeviceLogOption omitted.

// se_WirelessDeviceLogOptionList omitted.

// se_WirelessGatewayEventLogOption omitted.

// se_WirelessGatewayEventLogOptionList omitted.

// se_WirelessGatewayList omitted.

// se_WirelessGatewayLogOption omitted.

// se_WirelessGatewayLogOptionList omitted.

// se_WirelessMetadata omitted.

// de_AbpV1_0_x omitted.

// de_AbpV1_1 omitted.

/**
 * deserializeAws_restJson1Accuracy
 */
const de_Accuracy = (output: any, context: __SerdeContext): Accuracy => {
  return take(output, {
    HorizontalAccuracy: __limitedParseFloat32,
    VerticalAccuracy: __limitedParseFloat32,
  }) as any;
};

// de_ApplicationConfig omitted.

// de_Applications omitted.

// de_Beaconing omitted.

// de_BeaconingFrequencies omitted.

// de_CertificateList omitted.

// de_ConnectionStatusEventConfiguration omitted.

// de_ConnectionStatusResourceTypeEventConfiguration omitted.

// de_DakCertificateMetadata omitted.

// de_DakCertificateMetadataList omitted.

// de_DestinationList omitted.

// de_Destinations omitted.

// de_DeviceCertificateList omitted.

// de_DeviceCreationFileList omitted.

// de_DeviceProfile omitted.

// de_DeviceProfileList omitted.

// de_DeviceRegistrationStateEventConfiguration omitted.

// de_DeviceRegistrationStateResourceTypeEventConfiguration omitted.

// de_Dimension omitted.

// de_Dimensions omitted.

// de_DownlinkQueueMessage omitted.

// de_DownlinkQueueMessagesList omitted.

// de_EventConfigurationItem omitted.

// de_EventConfigurationsList omitted.

// de_EventNotificationItemConfigurations omitted.

// de_FactoryPresetFreqsList omitted.

// de_FPorts omitted.

// de_FuotaTask omitted.

// de_FuotaTaskEventLogOption omitted.

// de_FuotaTaskEventLogOptionList omitted.

// de_FuotaTaskList omitted.

// de_FuotaTaskLogOption omitted.

// de_FuotaTaskLogOptionList omitted.

// de_GatewayList omitted.

// de_GatewayListItem omitted.

// de_GatewayListMulticast omitted.

/**
 * deserializeAws_restJson1ImportedSidewalkDevice
 */
const de_ImportedSidewalkDevice = (output: any, context: __SerdeContext): ImportedSidewalkDevice => {
  return take(output, {
    LastUpdateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    OnboardingStatus: __expectString,
    OnboardingStatusReason: __expectString,
    SidewalkManufacturingSn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportedWirelessDevice
 */
const de_ImportedWirelessDevice = (output: any, context: __SerdeContext): ImportedWirelessDevice => {
  return take(output, {
    Sidewalk: (_: any) => de_ImportedSidewalkDevice(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ImportedWirelessDeviceList
 */
const de_ImportedWirelessDeviceList = (output: any, context: __SerdeContext): ImportedWirelessDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportedWirelessDevice(entry, context);
    });
  return retVal;
};

// de_JoinEuiFilters omitted.

// de_JoinEuiRange omitted.

// de_JoinEventConfiguration omitted.

// de_JoinResourceTypeEventConfiguration omitted.

// de_LoRaWANConnectionStatusEventNotificationConfigurations omitted.

// de_LoRaWANConnectionStatusResourceTypeEventConfiguration omitted.

// de_LoRaWANDevice omitted.

/**
 * deserializeAws_restJson1LoRaWANDeviceMetadata
 */
const de_LoRaWANDeviceMetadata = (output: any, context: __SerdeContext): LoRaWANDeviceMetadata => {
  return take(output, {
    DataRate: __expectInt32,
    DevEui: __expectString,
    FPort: __expectInt32,
    Frequency: __expectInt32,
    Gateways: (_: any) => de_LoRaWANGatewayMetadataList(_, context),
    PublicGateways: (_: any) => de_LoRaWANPublicGatewayMetadataList(_, context),
    Timestamp: __expectString,
  }) as any;
};

// de_LoRaWANDeviceProfile omitted.

/**
 * deserializeAws_restJson1LoRaWANFuotaTaskGetInfo
 */
const de_LoRaWANFuotaTaskGetInfo = (output: any, context: __SerdeContext): LoRaWANFuotaTaskGetInfo => {
  return take(output, {
    RfRegion: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1LoRaWANGateway
 */
const de_LoRaWANGateway = (output: any, context: __SerdeContext): LoRaWANGateway => {
  return take(output, {
    Beaconing: _json,
    GatewayEui: __expectString,
    JoinEuiFilters: _json,
    MaxEirp: __limitedParseFloat32,
    NetIdFilters: _json,
    RfRegion: __expectString,
    SubBands: _json,
  }) as any;
};

// de_LoRaWANGatewayCurrentVersion omitted.

/**
 * deserializeAws_restJson1LoRaWANGatewayMetadata
 */
const de_LoRaWANGatewayMetadata = (output: any, context: __SerdeContext): LoRaWANGatewayMetadata => {
  return take(output, {
    GatewayEui: __expectString,
    Rssi: __limitedParseDouble,
    Snr: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1LoRaWANGatewayMetadataList
 */
const de_LoRaWANGatewayMetadataList = (output: any, context: __SerdeContext): LoRaWANGatewayMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoRaWANGatewayMetadata(entry, context);
    });
  return retVal;
};

// de_LoRaWANGatewayVersion omitted.

// de_LoRaWANGetServiceProfileInfo omitted.

// de_LoRaWANJoinEventNotificationConfigurations omitted.

// de_LoRaWANJoinResourceTypeEventConfiguration omitted.

// de_LoRaWANListDevice omitted.

// de_LoRaWANMulticastGet omitted.

/**
 * deserializeAws_restJson1LoRaWANMulticastSession
 */
const de_LoRaWANMulticastSession = (output: any, context: __SerdeContext): LoRaWANMulticastSession => {
  return take(output, {
    DlDr: __expectInt32,
    DlFreq: __expectInt32,
    PingSlotPeriod: __expectInt32,
    SessionStartTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    SessionTimeout: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1LoRaWANPublicGatewayMetadata
 */
const de_LoRaWANPublicGatewayMetadata = (output: any, context: __SerdeContext): LoRaWANPublicGatewayMetadata => {
  return take(output, {
    DlAllowed: __expectBoolean,
    Id: __expectString,
    ProviderNetId: __expectString,
    RfRegion: __expectString,
    Rssi: __limitedParseDouble,
    Snr: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1LoRaWANPublicGatewayMetadataList
 */
const de_LoRaWANPublicGatewayMetadataList = (output: any, context: __SerdeContext): LoRaWANPublicGatewayMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LoRaWANPublicGatewayMetadata(entry, context);
    });
  return retVal;
};

// de_LoRaWANSendDataToDevice omitted.

// de_LoRaWANUpdateGatewayTaskCreate omitted.

// de_LoRaWANUpdateGatewayTaskEntry omitted.

// de_MessageDeliveryStatusEventConfiguration omitted.

// de_MessageDeliveryStatusResourceTypeEventConfiguration omitted.

/**
 * deserializeAws_restJson1MetricQueryTimestamps
 */
const de_MetricQueryTimestamps = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricQueryValue
 */
const de_MetricQueryValue = (output: any, context: __SerdeContext): MetricQueryValue => {
  return take(output, {
    Avg: __limitedParseDouble,
    Max: __limitedParseDouble,
    Min: __limitedParseDouble,
    P90: __limitedParseDouble,
    Std: __limitedParseDouble,
    Sum: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1MetricQueryValues
 */
const de_MetricQueryValues = (output: any, context: __SerdeContext): MetricQueryValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricQueryValue(entry, context);
    });
  return retVal;
};

// de_MulticastGroup omitted.

// de_MulticastGroupByFuotaTask omitted.

// de_MulticastGroupList omitted.

// de_MulticastGroupListByFuotaTask omitted.

// de_NetIdFilters omitted.

// de_NetworkAnalyzerConfigurationList omitted.

// de_NetworkAnalyzerConfigurations omitted.

// de_NetworkAnalyzerMulticastGroupList omitted.

// de_OtaaV1_0_x omitted.

// de_OtaaV1_1 omitted.

// de_ParticipatingGateways omitted.

// de_ParticipatingGatewaysMulticast omitted.

// de_PositionConfigurationItem omitted.

// de_PositionConfigurationList omitted.

/**
 * deserializeAws_restJson1PositionCoordinate
 */
const de_PositionCoordinate = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseFloat32(entry) as any;
    });
  return retVal;
};

// de_Positioning omitted.

// de_PositionSolverDetails omitted.

// de_PrivateKeysList omitted.

// de_ProximityEventConfiguration omitted.

// de_ProximityResourceTypeEventConfiguration omitted.

// de_SemtechGnssDetail omitted.

// de_ServiceProfile omitted.

// de_ServiceProfileList omitted.

// de_SessionKeysAbpV1_0_x omitted.

// de_SessionKeysAbpV1_1 omitted.

// de_SidewalkAccountInfo omitted.

// de_SidewalkAccountInfoWithFingerprint omitted.

// de_SidewalkAccountList omitted.

// de_SidewalkDevice omitted.

// de_SidewalkDeviceMetadata omitted.

// de_SidewalkEventNotificationConfigurations omitted.

// de_SidewalkGetDeviceProfile omitted.

// de_SidewalkGetStartImportInfo omitted.

// de_SidewalkListDevice omitted.

// de_SidewalkResourceTypeEventConfiguration omitted.

// de_SubBands omitted.

// de_SummaryMetricConfiguration omitted.

/**
 * deserializeAws_restJson1SummaryMetricQueryResult
 */
const de_SummaryMetricQueryResult = (output: any, context: __SerdeContext): SummaryMetricQueryResult => {
  return take(output, {
    AggregationPeriod: __expectString,
    Dimensions: _json,
    EndTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Error: __expectString,
    MetricName: __expectString,
    QueryId: __expectString,
    QueryStatus: __expectString,
    StartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Timestamps: (_: any) => de_MetricQueryTimestamps(_, context),
    Unit: __expectString,
    Values: (_: any) => de_MetricQueryValues(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SummaryMetricQueryResults
 */
const de_SummaryMetricQueryResults = (output: any, context: __SerdeContext): SummaryMetricQueryResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SummaryMetricQueryResult(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TraceContent omitted.

// de_UpdateWirelessGatewayTaskCreate omitted.

// de_UpdateWirelessGatewayTaskEntry omitted.

// de_WirelessDeviceEventLogOption omitted.

// de_WirelessDeviceEventLogOptionList omitted.

/**
 * deserializeAws_restJson1WirelessDeviceImportTask
 */
const de_WirelessDeviceImportTask = (output: any, context: __SerdeContext): WirelessDeviceImportTask => {
  return take(output, {
    Arn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    DestinationName: __expectString,
    FailedImportedDeviceCount: __expectLong,
    Id: __expectString,
    InitializedImportedDeviceCount: __expectLong,
    OnboardedImportedDeviceCount: __expectLong,
    PendingImportedDeviceCount: __expectLong,
    Sidewalk: _json,
    Status: __expectString,
    StatusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WirelessDeviceImportTaskList
 */
const de_WirelessDeviceImportTaskList = (output: any, context: __SerdeContext): WirelessDeviceImportTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WirelessDeviceImportTask(entry, context);
    });
  return retVal;
};

// de_WirelessDeviceList omitted.

// de_WirelessDeviceLogOption omitted.

// de_WirelessDeviceLogOptionList omitted.

// de_WirelessDeviceStatistics omitted.

// de_WirelessDeviceStatisticsList omitted.

// de_WirelessGatewayEventLogOption omitted.

// de_WirelessGatewayEventLogOptionList omitted.

// de_WirelessGatewayList omitted.

// de_WirelessGatewayLogOption omitted.

// de_WirelessGatewayLogOptionList omitted.

/**
 * deserializeAws_restJson1WirelessGatewayStatistics
 */
const de_WirelessGatewayStatistics = (output: any, context: __SerdeContext): WirelessGatewayStatistics => {
  return take(output, {
    Arn: __expectString,
    Description: __expectString,
    Id: __expectString,
    LastUplinkReceivedAt: __expectString,
    LoRaWAN: (_: any) => de_LoRaWANGateway(_, context),
    Name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1WirelessGatewayStatisticsList
 */
const de_WirelessGatewayStatisticsList = (output: any, context: __SerdeContext): WirelessGatewayStatistics[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WirelessGatewayStatistics(entry, context);
    });
  return retVal;
};

// de_WirelessGatewayTaskDefinitionList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _DN = "DestinationName";
const _DPI = "DeviceProfileId";
const _DPT = "DeviceProfileType";
const _FTI = "FuotaTaskId";
const _I = "Id";
const _IT = "IdentifierType";
const _MGI = "MulticastGroupId";
const _MI = "MessageId";
const _MR = "MaxResults";
const _NT = "NextToken";
const _PT = "PartnerType";
const _RA = "ResourceArn";
const _RT = "ResourceType";
const _S = "Status";
const _SPI = "ServiceProfileId";
const _ST = "ServiceType";
const _TDT = "TaskDefinitionType";
const _TK = "TagKeys";
const _WDT = "WirelessDeviceType";
const _dN = "destinationName";
const _dPI = "deviceProfileId";
const _dPT = "deviceProfileType";
const _fTI = "fuotaTaskId";
const _i = "id";
const _iT = "identifierType";
const _mGI = "multicastGroupId";
const _mI = "messageId";
const _mR = "maxResults";
const _nT = "nextToken";
const _pT = "partnerType";
const _rA = "resourceArn";
const _rT = "resourceType";
const _s = "status";
const _sPI = "serviceProfileId";
const _sT = "serviceType";
const _tDT = "taskDefinitionType";
const _tK = "tagKeys";
const _wDT = "wirelessDeviceType";
