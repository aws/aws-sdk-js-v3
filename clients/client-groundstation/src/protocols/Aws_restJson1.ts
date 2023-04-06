// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelContactCommandInput, CancelContactCommandOutput } from "../commands/CancelContactCommand";
import { CreateConfigCommandInput, CreateConfigCommandOutput } from "../commands/CreateConfigCommand";
import {
  CreateDataflowEndpointGroupCommandInput,
  CreateDataflowEndpointGroupCommandOutput,
} from "../commands/CreateDataflowEndpointGroupCommand";
import { CreateEphemerisCommandInput, CreateEphemerisCommandOutput } from "../commands/CreateEphemerisCommand";
import {
  CreateMissionProfileCommandInput,
  CreateMissionProfileCommandOutput,
} from "../commands/CreateMissionProfileCommand";
import { DeleteConfigCommandInput, DeleteConfigCommandOutput } from "../commands/DeleteConfigCommand";
import {
  DeleteDataflowEndpointGroupCommandInput,
  DeleteDataflowEndpointGroupCommandOutput,
} from "../commands/DeleteDataflowEndpointGroupCommand";
import { DeleteEphemerisCommandInput, DeleteEphemerisCommandOutput } from "../commands/DeleteEphemerisCommand";
import {
  DeleteMissionProfileCommandInput,
  DeleteMissionProfileCommandOutput,
} from "../commands/DeleteMissionProfileCommand";
import { DescribeContactCommandInput, DescribeContactCommandOutput } from "../commands/DescribeContactCommand";
import { DescribeEphemerisCommandInput, DescribeEphemerisCommandOutput } from "../commands/DescribeEphemerisCommand";
import {
  GetAgentConfigurationCommandInput,
  GetAgentConfigurationCommandOutput,
} from "../commands/GetAgentConfigurationCommand";
import { GetConfigCommandInput, GetConfigCommandOutput } from "../commands/GetConfigCommand";
import {
  GetDataflowEndpointGroupCommandInput,
  GetDataflowEndpointGroupCommandOutput,
} from "../commands/GetDataflowEndpointGroupCommand";
import { GetMinuteUsageCommandInput, GetMinuteUsageCommandOutput } from "../commands/GetMinuteUsageCommand";
import { GetMissionProfileCommandInput, GetMissionProfileCommandOutput } from "../commands/GetMissionProfileCommand";
import { GetSatelliteCommandInput, GetSatelliteCommandOutput } from "../commands/GetSatelliteCommand";
import { ListConfigsCommandInput, ListConfigsCommandOutput } from "../commands/ListConfigsCommand";
import { ListContactsCommandInput, ListContactsCommandOutput } from "../commands/ListContactsCommand";
import {
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput,
} from "../commands/ListDataflowEndpointGroupsCommand";
import { ListEphemeridesCommandInput, ListEphemeridesCommandOutput } from "../commands/ListEphemeridesCommand";
import { ListGroundStationsCommandInput, ListGroundStationsCommandOutput } from "../commands/ListGroundStationsCommand";
import {
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "../commands/ListMissionProfilesCommand";
import { ListSatellitesCommandInput, ListSatellitesCommandOutput } from "../commands/ListSatellitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RegisterAgentCommandInput, RegisterAgentCommandOutput } from "../commands/RegisterAgentCommand";
import { ReserveContactCommandInput, ReserveContactCommandOutput } from "../commands/ReserveContactCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAgentStatusCommandInput, UpdateAgentStatusCommandOutput } from "../commands/UpdateAgentStatusCommand";
import { UpdateConfigCommandInput, UpdateConfigCommandOutput } from "../commands/UpdateConfigCommand";
import { UpdateEphemerisCommandInput, UpdateEphemerisCommandOutput } from "../commands/UpdateEphemerisCommand";
import {
  UpdateMissionProfileCommandInput,
  UpdateMissionProfileCommandOutput,
} from "../commands/UpdateMissionProfileCommand";
import { GroundStationServiceException as __BaseException } from "../models/GroundStationServiceException";
import {
  AgentDetails,
  AggregateStatus,
  AntennaDemodDecodeDetails,
  AntennaDownlinkConfig,
  AntennaDownlinkDemodDecodeConfig,
  AntennaUplinkConfig,
  AwsGroundStationAgentEndpoint,
  ComponentStatusData,
  ComponentVersion,
  ConfigDetails,
  ConfigListItem,
  ConfigTypeData,
  ConnectionDetails,
  ContactData,
  ContactStatus,
  DataflowDetail,
  DataflowEndpoint,
  DataflowEndpointConfig,
  DataflowEndpointListItem,
  DecodeConfig,
  DemodulationConfig,
  DependencyException,
  Destination,
  DiscoveryData,
  Eirp,
  Elevation,
  EndpointDetails,
  EphemerisData,
  EphemerisDescription,
  EphemerisItem,
  EphemerisMetaData,
  EphemerisStatus,
  EphemerisTypeDescription,
  Frequency,
  FrequencyBandwidth,
  GroundStationData,
  IntegerRange,
  InvalidParameterException,
  KmsKey,
  MissionProfileListItem,
  OEMEphemeris,
  RangedConnectionDetails,
  RangedSocketAddress,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  S3Object,
  S3RecordingConfig,
  S3RecordingDetails,
  SatelliteListItem,
  SecurityDetails,
  SocketAddress,
  Source,
  SpectrumConfig,
  TimeRange,
  TLEData,
  TLEEphemeris,
  TrackingConfig,
  UplinkEchoConfig,
  UplinkSpectrumConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelContactCommand
 */
export const se_CancelContactCommand = async (
  input: CancelContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/{contactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "contactId", () => input.contactId!, "{contactId}", false);
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
 * serializeAws_restJson1CreateConfigCommand
 */
export const se_CreateConfigCommand = async (
  input: CreateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/config";
  let body: any;
  body = JSON.stringify({
    ...(input.configData != null && { configData: se_ConfigTypeData(input.configData, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateDataflowEndpointGroupCommand
 */
export const se_CreateDataflowEndpointGroupCommand = async (
  input: CreateDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataflowEndpointGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.contactPostPassDurationSeconds != null && {
      contactPostPassDurationSeconds: input.contactPostPassDurationSeconds,
    }),
    ...(input.contactPrePassDurationSeconds != null && {
      contactPrePassDurationSeconds: input.contactPrePassDurationSeconds,
    }),
    ...(input.endpointDetails != null && { endpointDetails: se_EndpointDetailsList(input.endpointDetails, context) }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateEphemerisCommand
 */
export const se_CreateEphemerisCommand = async (
  input: CreateEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ephemeris";
  let body: any;
  body = JSON.stringify({
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.ephemeris != null && { ephemeris: se_EphemerisData(input.ephemeris, context) }),
    ...(input.expirationTime != null && { expirationTime: Math.round(input.expirationTime.getTime() / 1000) }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.satelliteId != null && { satelliteId: input.satelliteId }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1CreateMissionProfileCommand
 */
export const se_CreateMissionProfileCommand = async (
  input: CreateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/missionprofile";
  let body: any;
  body = JSON.stringify({
    ...(input.contactPostPassDurationSeconds != null && {
      contactPostPassDurationSeconds: input.contactPostPassDurationSeconds,
    }),
    ...(input.contactPrePassDurationSeconds != null && {
      contactPrePassDurationSeconds: input.contactPrePassDurationSeconds,
    }),
    ...(input.dataflowEdges != null && { dataflowEdges: se_DataflowEdgeList(input.dataflowEdges, context) }),
    ...(input.minimumViableContactDurationSeconds != null && {
      minimumViableContactDurationSeconds: input.minimumViableContactDurationSeconds,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.streamsKmsKey != null && { streamsKmsKey: se_KmsKey(input.streamsKmsKey, context) }),
    ...(input.streamsKmsRole != null && { streamsKmsRole: input.streamsKmsRole }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
    ...(input.trackingConfigArn != null && { trackingConfigArn: input.trackingConfigArn }),
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
 * serializeAws_restJson1DeleteConfigCommand
 */
export const se_DeleteConfigCommand = async (
  input: DeleteConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/config/{configType}/{configId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "configId", () => input.configId!, "{configId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "configType", () => input.configType!, "{configType}", false);
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
 * serializeAws_restJson1DeleteDataflowEndpointGroupCommand
 */
export const se_DeleteDataflowEndpointGroupCommand = async (
  input: DeleteDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "dataflowEndpointGroupId",
    () => input.dataflowEndpointGroupId!,
    "{dataflowEndpointGroupId}",
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
 * serializeAws_restJson1DeleteEphemerisCommand
 */
export const se_DeleteEphemerisCommand = async (
  input: DeleteEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ephemeris/{ephemerisId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ephemerisId", () => input.ephemerisId!, "{ephemerisId}", false);
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
 * serializeAws_restJson1DeleteMissionProfileCommand
 */
export const se_DeleteMissionProfileCommand = async (
  input: DeleteMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/missionprofile/{missionProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "missionProfileId",
    () => input.missionProfileId!,
    "{missionProfileId}",
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
 * serializeAws_restJson1DescribeContactCommand
 */
export const se_DescribeContactCommand = async (
  input: DescribeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact/{contactId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "contactId", () => input.contactId!, "{contactId}", false);
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
 * serializeAws_restJson1DescribeEphemerisCommand
 */
export const se_DescribeEphemerisCommand = async (
  input: DescribeEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ephemeris/{ephemerisId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ephemerisId", () => input.ephemerisId!, "{ephemerisId}", false);
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
 * serializeAws_restJson1GetAgentConfigurationCommand
 */
export const se_GetAgentConfigurationCommand = async (
  input: GetAgentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/agent/{agentId}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "agentId", () => input.agentId!, "{agentId}", false);
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
 * serializeAws_restJson1GetConfigCommand
 */
export const se_GetConfigCommand = async (
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/config/{configType}/{configId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "configId", () => input.configId!, "{configId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "configType", () => input.configType!, "{configType}", false);
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
 * serializeAws_restJson1GetDataflowEndpointGroupCommand
 */
export const se_GetDataflowEndpointGroupCommand = async (
  input: GetDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "dataflowEndpointGroupId",
    () => input.dataflowEndpointGroupId!,
    "{dataflowEndpointGroupId}",
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
 * serializeAws_restJson1GetMinuteUsageCommand
 */
export const se_GetMinuteUsageCommand = async (
  input: GetMinuteUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/minute-usage";
  let body: any;
  body = JSON.stringify({
    ...(input.month != null && { month: input.month }),
    ...(input.year != null && { year: input.year }),
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
 * serializeAws_restJson1GetMissionProfileCommand
 */
export const se_GetMissionProfileCommand = async (
  input: GetMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/missionprofile/{missionProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "missionProfileId",
    () => input.missionProfileId!,
    "{missionProfileId}",
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
 * serializeAws_restJson1GetSatelliteCommand
 */
export const se_GetSatelliteCommand = async (
  input: GetSatelliteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/satellite/{satelliteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "satelliteId", () => input.satelliteId!, "{satelliteId}", false);
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
 * serializeAws_restJson1ListConfigsCommand
 */
export const se_ListConfigsCommand = async (
  input: ListConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/config";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListContactsCommand
 */
export const se_ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contacts";
  let body: any;
  body = JSON.stringify({
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.groundStation != null && { groundStation: input.groundStation }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.missionProfileArn != null && { missionProfileArn: input.missionProfileArn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.satelliteArn != null && { satelliteArn: input.satelliteArn }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statusList != null && { statusList: se_StatusList(input.statusList, context) }),
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
 * serializeAws_restJson1ListDataflowEndpointGroupsCommand
 */
export const se_ListDataflowEndpointGroupsCommand = async (
  input: ListDataflowEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/dataflowEndpointGroup";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListEphemeridesCommand
 */
export const se_ListEphemeridesCommand = async (
  input: ListEphemeridesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ephemerides";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.satelliteId != null && { satelliteId: input.satelliteId }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.statusList != null && { statusList: se_EphemerisStatusList(input.statusList, context) }),
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
 * serializeAws_restJson1ListGroundStationsCommand
 */
export const se_ListGroundStationsCommand = async (
  input: ListGroundStationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/groundstation";
  const query: any = map({
    satelliteId: [, input.satelliteId!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListMissionProfilesCommand
 */
export const se_ListMissionProfilesCommand = async (
  input: ListMissionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/missionprofile";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
 * serializeAws_restJson1ListSatellitesCommand
 */
export const se_ListSatellitesCommand = async (
  input: ListSatellitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/satellite";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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
 * serializeAws_restJson1RegisterAgentCommand
 */
export const se_RegisterAgentCommand = async (
  input: RegisterAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/agent";
  let body: any;
  body = JSON.stringify({
    ...(input.agentDetails != null && { agentDetails: se_AgentDetails(input.agentDetails, context) }),
    ...(input.discoveryData != null && { discoveryData: se_DiscoveryData(input.discoveryData, context) }),
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
 * serializeAws_restJson1ReserveContactCommand
 */
export const se_ReserveContactCommand = async (
  input: ReserveContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/contact";
  let body: any;
  body = JSON.stringify({
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.groundStation != null && { groundStation: input.groundStation }),
    ...(input.missionProfileArn != null && { missionProfileArn: input.missionProfileArn }),
    ...(input.satelliteArn != null && { satelliteArn: input.satelliteArn }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagsMap(input.tags, context) }),
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateAgentStatusCommand
 */
export const se_UpdateAgentStatusCommand = async (
  input: UpdateAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/agent/{agentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.aggregateStatus != null && { aggregateStatus: se_AggregateStatus(input.aggregateStatus, context) }),
    ...(input.componentStatuses != null && {
      componentStatuses: se_ComponentStatusList(input.componentStatuses, context),
    }),
    ...(input.taskId != null && { taskId: input.taskId }),
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
 * serializeAws_restJson1UpdateConfigCommand
 */
export const se_UpdateConfigCommand = async (
  input: UpdateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/config/{configType}/{configId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "configId", () => input.configId!, "{configId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "configType", () => input.configType!, "{configType}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.configData != null && { configData: se_ConfigTypeData(input.configData, context) }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1UpdateEphemerisCommand
 */
export const se_UpdateEphemerisCommand = async (
  input: UpdateEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ephemeris/{ephemerisId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ephemerisId", () => input.ephemerisId!, "{ephemerisId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.name != null && { name: input.name }),
    ...(input.priority != null && { priority: input.priority }),
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
 * serializeAws_restJson1UpdateMissionProfileCommand
 */
export const se_UpdateMissionProfileCommand = async (
  input: UpdateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/missionprofile/{missionProfileId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "missionProfileId",
    () => input.missionProfileId!,
    "{missionProfileId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.contactPostPassDurationSeconds != null && {
      contactPostPassDurationSeconds: input.contactPostPassDurationSeconds,
    }),
    ...(input.contactPrePassDurationSeconds != null && {
      contactPrePassDurationSeconds: input.contactPrePassDurationSeconds,
    }),
    ...(input.dataflowEdges != null && { dataflowEdges: se_DataflowEdgeList(input.dataflowEdges, context) }),
    ...(input.minimumViableContactDurationSeconds != null && {
      minimumViableContactDurationSeconds: input.minimumViableContactDurationSeconds,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.streamsKmsKey != null && { streamsKmsKey: se_KmsKey(input.streamsKmsKey, context) }),
    ...(input.streamsKmsRole != null && { streamsKmsRole: input.streamsKmsRole }),
    ...(input.trackingConfigArn != null && { trackingConfigArn: input.trackingConfigArn }),
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
 * deserializeAws_restJson1CancelContactCommand
 */
export const de_CancelContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactId != null) {
    contents.contactId = __expectString(data.contactId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelContactCommandError
 */
const de_CancelContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfigCommand
 */
export const de_CreateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configArn != null) {
    contents.configArn = __expectString(data.configArn);
  }
  if (data.configId != null) {
    contents.configId = __expectString(data.configId);
  }
  if (data.configType != null) {
    contents.configType = __expectString(data.configType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigCommandError
 */
const de_CreateConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.groundstation#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDataflowEndpointGroupCommand
 */
export const de_CreateDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDataflowEndpointGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataflowEndpointGroupId != null) {
    contents.dataflowEndpointGroupId = __expectString(data.dataflowEndpointGroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataflowEndpointGroupCommandError
 */
const de_CreateDataflowEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateEphemerisCommand
 */
export const de_CreateEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateEphemerisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ephemerisId != null) {
    contents.ephemerisId = __expectString(data.ephemerisId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateEphemerisCommandError
 */
const de_CreateEphemerisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEphemerisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMissionProfileCommand
 */
export const de_CreateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMissionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.missionProfileId != null) {
    contents.missionProfileId = __expectString(data.missionProfileId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMissionProfileCommandError
 */
const de_CreateMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfigCommand
 */
export const de_DeleteConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configArn != null) {
    contents.configArn = __expectString(data.configArn);
  }
  if (data.configId != null) {
    contents.configId = __expectString(data.configId);
  }
  if (data.configType != null) {
    contents.configType = __expectString(data.configType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigCommandError
 */
const de_DeleteConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteDataflowEndpointGroupCommand
 */
export const de_DeleteDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDataflowEndpointGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataflowEndpointGroupId != null) {
    contents.dataflowEndpointGroupId = __expectString(data.dataflowEndpointGroupId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataflowEndpointGroupCommandError
 */
const de_DeleteDataflowEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteEphemerisCommand
 */
export const de_DeleteEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteEphemerisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ephemerisId != null) {
    contents.ephemerisId = __expectString(data.ephemerisId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEphemerisCommandError
 */
const de_DeleteEphemerisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEphemerisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteMissionProfileCommand
 */
export const de_DeleteMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteMissionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.missionProfileId != null) {
    contents.missionProfileId = __expectString(data.missionProfileId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMissionProfileCommandError
 */
const de_DeleteMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeContactCommand
 */
export const de_DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactId != null) {
    contents.contactId = __expectString(data.contactId);
  }
  if (data.contactStatus != null) {
    contents.contactStatus = __expectString(data.contactStatus);
  }
  if (data.dataflowList != null) {
    contents.dataflowList = de_DataflowList(data.dataflowList, context);
  }
  if (data.endTime != null) {
    contents.endTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endTime)));
  }
  if (data.errorMessage != null) {
    contents.errorMessage = __expectString(data.errorMessage);
  }
  if (data.groundStation != null) {
    contents.groundStation = __expectString(data.groundStation);
  }
  if (data.maximumElevation != null) {
    contents.maximumElevation = de_Elevation(data.maximumElevation, context);
  }
  if (data.missionProfileArn != null) {
    contents.missionProfileArn = __expectString(data.missionProfileArn);
  }
  if (data.postPassEndTime != null) {
    contents.postPassEndTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.postPassEndTime)));
  }
  if (data.prePassStartTime != null) {
    contents.prePassStartTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.prePassStartTime)));
  }
  if (data.region != null) {
    contents.region = __expectString(data.region);
  }
  if (data.satelliteArn != null) {
    contents.satelliteArn = __expectString(data.satelliteArn);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactCommandError
 */
const de_DescribeContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeEphemerisCommand
 */
export const de_DescribeEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeEphemerisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.enabled != null) {
    contents.enabled = __expectBoolean(data.enabled);
  }
  if (data.ephemerisId != null) {
    contents.ephemerisId = __expectString(data.ephemerisId);
  }
  if (data.invalidReason != null) {
    contents.invalidReason = __expectString(data.invalidReason);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.priority != null) {
    contents.priority = __expectInt32(data.priority);
  }
  if (data.satelliteId != null) {
    contents.satelliteId = __expectString(data.satelliteId);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.suppliedData != null) {
    contents.suppliedData = de_EphemerisTypeDescription(__expectUnion(data.suppliedData), context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEphemerisCommandError
 */
const de_DescribeEphemerisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEphemerisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAgentConfigurationCommand
 */
export const de_GetAgentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAgentConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.agentId != null) {
    contents.agentId = __expectString(data.agentId);
  }
  if (data.taskingDocument != null) {
    contents.taskingDocument = __expectString(data.taskingDocument);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentConfigurationCommandError
 */
const de_GetAgentConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetConfigCommand
 */
export const de_GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configArn != null) {
    contents.configArn = __expectString(data.configArn);
  }
  if (data.configData != null) {
    contents.configData = de_ConfigTypeData(__expectUnion(data.configData), context);
  }
  if (data.configId != null) {
    contents.configId = __expectString(data.configId);
  }
  if (data.configType != null) {
    contents.configType = __expectString(data.configType);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigCommandError
 */
const de_GetConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDataflowEndpointGroupCommand
 */
export const de_GetDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataflowEndpointGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactPostPassDurationSeconds != null) {
    contents.contactPostPassDurationSeconds = __expectInt32(data.contactPostPassDurationSeconds);
  }
  if (data.contactPrePassDurationSeconds != null) {
    contents.contactPrePassDurationSeconds = __expectInt32(data.contactPrePassDurationSeconds);
  }
  if (data.dataflowEndpointGroupArn != null) {
    contents.dataflowEndpointGroupArn = __expectString(data.dataflowEndpointGroupArn);
  }
  if (data.dataflowEndpointGroupId != null) {
    contents.dataflowEndpointGroupId = __expectString(data.dataflowEndpointGroupId);
  }
  if (data.endpointsDetails != null) {
    contents.endpointsDetails = de_EndpointDetailsList(data.endpointsDetails, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataflowEndpointGroupCommandError
 */
const de_GetDataflowEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMinuteUsageCommand
 */
export const de_GetMinuteUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMinuteUsageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.estimatedMinutesRemaining != null) {
    contents.estimatedMinutesRemaining = __expectInt32(data.estimatedMinutesRemaining);
  }
  if (data.isReservedMinutesCustomer != null) {
    contents.isReservedMinutesCustomer = __expectBoolean(data.isReservedMinutesCustomer);
  }
  if (data.totalReservedMinuteAllocation != null) {
    contents.totalReservedMinuteAllocation = __expectInt32(data.totalReservedMinuteAllocation);
  }
  if (data.totalScheduledMinutes != null) {
    contents.totalScheduledMinutes = __expectInt32(data.totalScheduledMinutes);
  }
  if (data.upcomingMinutesScheduled != null) {
    contents.upcomingMinutesScheduled = __expectInt32(data.upcomingMinutesScheduled);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMinuteUsageCommandError
 */
const de_GetMinuteUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetMissionProfileCommand
 */
export const de_GetMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetMissionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactPostPassDurationSeconds != null) {
    contents.contactPostPassDurationSeconds = __expectInt32(data.contactPostPassDurationSeconds);
  }
  if (data.contactPrePassDurationSeconds != null) {
    contents.contactPrePassDurationSeconds = __expectInt32(data.contactPrePassDurationSeconds);
  }
  if (data.dataflowEdges != null) {
    contents.dataflowEdges = de_DataflowEdgeList(data.dataflowEdges, context);
  }
  if (data.minimumViableContactDurationSeconds != null) {
    contents.minimumViableContactDurationSeconds = __expectInt32(data.minimumViableContactDurationSeconds);
  }
  if (data.missionProfileArn != null) {
    contents.missionProfileArn = __expectString(data.missionProfileArn);
  }
  if (data.missionProfileId != null) {
    contents.missionProfileId = __expectString(data.missionProfileId);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.region != null) {
    contents.region = __expectString(data.region);
  }
  if (data.streamsKmsKey != null) {
    contents.streamsKmsKey = de_KmsKey(__expectUnion(data.streamsKmsKey), context);
  }
  if (data.streamsKmsRole != null) {
    contents.streamsKmsRole = __expectString(data.streamsKmsRole);
  }
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
  }
  if (data.trackingConfigArn != null) {
    contents.trackingConfigArn = __expectString(data.trackingConfigArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetMissionProfileCommandError
 */
const de_GetMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSatelliteCommand
 */
export const de_GetSatelliteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSatelliteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.currentEphemeris != null) {
    contents.currentEphemeris = de_EphemerisMetaData(data.currentEphemeris, context);
  }
  if (data.groundStations != null) {
    contents.groundStations = de_GroundStationIdList(data.groundStations, context);
  }
  if (data.noradSatelliteID != null) {
    contents.noradSatelliteID = __expectInt32(data.noradSatelliteID);
  }
  if (data.satelliteArn != null) {
    contents.satelliteArn = __expectString(data.satelliteArn);
  }
  if (data.satelliteId != null) {
    contents.satelliteId = __expectString(data.satelliteId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSatelliteCommandError
 */
const de_GetSatelliteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigsCommand
 */
export const de_ListConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configList != null) {
    contents.configList = de_ConfigList(data.configList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigsCommandError
 */
const de_ListConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListContactsCommand
 */
export const de_ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactList != null) {
    contents.contactList = de_ContactList(data.contactList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContactsCommandError
 */
const de_ListContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDataflowEndpointGroupsCommand
 */
export const de_ListDataflowEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataflowEndpointGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataflowEndpointGroupList != null) {
    contents.dataflowEndpointGroupList = de_DataflowEndpointGroupList(data.dataflowEndpointGroupList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDataflowEndpointGroupsCommandError
 */
const de_ListDataflowEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListEphemeridesCommand
 */
export const de_ListEphemeridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEphemeridesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEphemeridesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ephemerides != null) {
    contents.ephemerides = de_EphemeridesList(data.ephemerides, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEphemeridesCommandError
 */
const de_ListEphemeridesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEphemeridesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListGroundStationsCommand
 */
export const de_ListGroundStationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListGroundStationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.groundStationList != null) {
    contents.groundStationList = de_GroundStationList(data.groundStationList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListGroundStationsCommandError
 */
const de_ListGroundStationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMissionProfilesCommand
 */
export const de_ListMissionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMissionProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.missionProfileList != null) {
    contents.missionProfileList = de_MissionProfileList(data.missionProfileList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMissionProfilesCommandError
 */
const de_ListMissionProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSatellitesCommand
 */
export const de_ListSatellitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSatellitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.satellites != null) {
    contents.satellites = de_SatelliteList(data.satellites, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSatellitesCommandError
 */
const de_ListSatellitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  if (data.tags != null) {
    contents.tags = de_TagsMap(data.tags, context);
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterAgentCommand
 */
export const de_RegisterAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterAgentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.agentId != null) {
    contents.agentId = __expectString(data.agentId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterAgentCommandError
 */
const de_RegisterAgentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAgentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ReserveContactCommand
 */
export const de_ReserveContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReserveContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactId != null) {
    contents.contactId = __expectString(data.contactId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ReserveContactCommandError
 */
const de_ReserveContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAgentStatusCommand
 */
export const de_UpdateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAgentStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.agentId != null) {
    contents.agentId = __expectString(data.agentId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAgentStatusCommandError
 */
const de_UpdateAgentStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfigCommand
 */
export const de_UpdateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configArn != null) {
    contents.configArn = __expectString(data.configArn);
  }
  if (data.configId != null) {
    contents.configId = __expectString(data.configId);
  }
  if (data.configType != null) {
    contents.configType = __expectString(data.configType);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigCommandError
 */
const de_UpdateConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateEphemerisCommand
 */
export const de_UpdateEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateEphemerisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ephemerisId != null) {
    contents.ephemerisId = __expectString(data.ephemerisId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEphemerisCommandError
 */
const de_UpdateEphemerisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEphemerisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMissionProfileCommand
 */
export const de_UpdateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMissionProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.missionProfileId != null) {
    contents.missionProfileId = __expectString(data.missionProfileId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMissionProfileCommandError
 */
const de_UpdateMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DependencyExceptionRes
 */
const de_DependencyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<DependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.parameterName != null) {
    contents.parameterName = __expectString(data.parameterName);
  }
  const exception = new DependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.parameterName != null) {
    contents.parameterName = __expectString(data.parameterName);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.parameterName != null) {
    contents.parameterName = __expectString(data.parameterName);
  }
  const exception = new ResourceLimitExceededException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AgentDetails
 */
const se_AgentDetails = (input: AgentDetails, context: __SerdeContext): any => {
  return {
    ...(input.agentVersion != null && { agentVersion: input.agentVersion }),
    ...(input.componentVersions != null && {
      componentVersions: se_ComponentVersionList(input.componentVersions, context),
    }),
    ...(input.instanceId != null && { instanceId: input.instanceId }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.reservedCpuCores != null && {
      reservedCpuCores: se_ReservedCpuCoresList(input.reservedCpuCores, context),
    }),
  };
};

/**
 * serializeAws_restJson1AggregateStatus
 */
const se_AggregateStatus = (input: AggregateStatus, context: __SerdeContext): any => {
  return {
    ...(input.signatureMap != null && { signatureMap: se_SignatureMap(input.signatureMap, context) }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1AntennaDownlinkConfig
 */
const se_AntennaDownlinkConfig = (input: AntennaDownlinkConfig, context: __SerdeContext): any => {
  return {
    ...(input.spectrumConfig != null && { spectrumConfig: se_SpectrumConfig(input.spectrumConfig, context) }),
  };
};

/**
 * serializeAws_restJson1AntennaDownlinkDemodDecodeConfig
 */
const se_AntennaDownlinkDemodDecodeConfig = (input: AntennaDownlinkDemodDecodeConfig, context: __SerdeContext): any => {
  return {
    ...(input.decodeConfig != null && { decodeConfig: se_DecodeConfig(input.decodeConfig, context) }),
    ...(input.demodulationConfig != null && {
      demodulationConfig: se_DemodulationConfig(input.demodulationConfig, context),
    }),
    ...(input.spectrumConfig != null && { spectrumConfig: se_SpectrumConfig(input.spectrumConfig, context) }),
  };
};

/**
 * serializeAws_restJson1AntennaUplinkConfig
 */
const se_AntennaUplinkConfig = (input: AntennaUplinkConfig, context: __SerdeContext): any => {
  return {
    ...(input.spectrumConfig != null && { spectrumConfig: se_UplinkSpectrumConfig(input.spectrumConfig, context) }),
    ...(input.targetEirp != null && { targetEirp: se_Eirp(input.targetEirp, context) }),
    ...(input.transmitDisabled != null && { transmitDisabled: input.transmitDisabled }),
  };
};

/**
 * serializeAws_restJson1AwsGroundStationAgentEndpoint
 */
const se_AwsGroundStationAgentEndpoint = (input: AwsGroundStationAgentEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.agentStatus != null && { agentStatus: input.agentStatus }),
    ...(input.auditResults != null && { auditResults: input.auditResults }),
    ...(input.egressAddress != null && { egressAddress: se_ConnectionDetails(input.egressAddress, context) }),
    ...(input.ingressAddress != null && { ingressAddress: se_RangedConnectionDetails(input.ingressAddress, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1CapabilityArnList
 */
const se_CapabilityArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ComponentStatusData
 */
const se_ComponentStatusData = (input: ComponentStatusData, context: __SerdeContext): any => {
  return {
    ...(input.bytesReceived != null && { bytesReceived: input.bytesReceived }),
    ...(input.bytesSent != null && { bytesSent: input.bytesSent }),
    ...(input.capabilityArn != null && { capabilityArn: input.capabilityArn }),
    ...(input.componentType != null && { componentType: input.componentType }),
    ...(input.dataflowId != null && { dataflowId: input.dataflowId }),
    ...(input.packetsDropped != null && { packetsDropped: input.packetsDropped }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1ComponentStatusList
 */
const se_ComponentStatusList = (input: ComponentStatusData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentStatusData(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentVersion
 */
const se_ComponentVersion = (input: ComponentVersion, context: __SerdeContext): any => {
  return {
    ...(input.componentType != null && { componentType: input.componentType }),
    ...(input.versions != null && { versions: se_VersionStringList(input.versions, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentVersionList
 */
const se_ComponentVersionList = (input: ComponentVersion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentVersion(entry, context);
    });
};

/**
 * serializeAws_restJson1ConfigTypeData
 */
const se_ConfigTypeData = (input: ConfigTypeData, context: __SerdeContext): any => {
  return ConfigTypeData.visit(input, {
    antennaDownlinkConfig: (value) => ({ antennaDownlinkConfig: se_AntennaDownlinkConfig(value, context) }),
    antennaDownlinkDemodDecodeConfig: (value) => ({
      antennaDownlinkDemodDecodeConfig: se_AntennaDownlinkDemodDecodeConfig(value, context),
    }),
    antennaUplinkConfig: (value) => ({ antennaUplinkConfig: se_AntennaUplinkConfig(value, context) }),
    dataflowEndpointConfig: (value) => ({ dataflowEndpointConfig: se_DataflowEndpointConfig(value, context) }),
    s3RecordingConfig: (value) => ({ s3RecordingConfig: se_S3RecordingConfig(value, context) }),
    trackingConfig: (value) => ({ trackingConfig: se_TrackingConfig(value, context) }),
    uplinkEchoConfig: (value) => ({ uplinkEchoConfig: se_UplinkEchoConfig(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1ConnectionDetails
 */
const se_ConnectionDetails = (input: ConnectionDetails, context: __SerdeContext): any => {
  return {
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.socketAddress != null && { socketAddress: se_SocketAddress(input.socketAddress, context) }),
  };
};

/**
 * serializeAws_restJson1DataflowEdge
 */
const se_DataflowEdge = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DataflowEdgeList
 */
const se_DataflowEdgeList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataflowEdge(entry, context);
    });
};

/**
 * serializeAws_restJson1DataflowEndpoint
 */
const se_DataflowEndpoint = (input: DataflowEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.address != null && { address: se_SocketAddress(input.address, context) }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.name != null && { name: input.name }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_restJson1DataflowEndpointConfig
 */
const se_DataflowEndpointConfig = (input: DataflowEndpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.dataflowEndpointName != null && { dataflowEndpointName: input.dataflowEndpointName }),
    ...(input.dataflowEndpointRegion != null && { dataflowEndpointRegion: input.dataflowEndpointRegion }),
  };
};

/**
 * serializeAws_restJson1DecodeConfig
 */
const se_DecodeConfig = (input: DecodeConfig, context: __SerdeContext): any => {
  return {
    ...(input.unvalidatedJSON != null && { unvalidatedJSON: input.unvalidatedJSON }),
  };
};

/**
 * serializeAws_restJson1DemodulationConfig
 */
const se_DemodulationConfig = (input: DemodulationConfig, context: __SerdeContext): any => {
  return {
    ...(input.unvalidatedJSON != null && { unvalidatedJSON: input.unvalidatedJSON }),
  };
};

/**
 * serializeAws_restJson1DiscoveryData
 */
const se_DiscoveryData = (input: DiscoveryData, context: __SerdeContext): any => {
  return {
    ...(input.capabilityArns != null && { capabilityArns: se_CapabilityArnList(input.capabilityArns, context) }),
    ...(input.privateIpAddresses != null && {
      privateIpAddresses: se_IpAddressList(input.privateIpAddresses, context),
    }),
    ...(input.publicIpAddresses != null && { publicIpAddresses: se_IpAddressList(input.publicIpAddresses, context) }),
  };
};

/**
 * serializeAws_restJson1Eirp
 */
const se_Eirp = (input: Eirp, context: __SerdeContext): any => {
  return {
    ...(input.units != null && { units: input.units }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

/**
 * serializeAws_restJson1EndpointDetails
 */
const se_EndpointDetails = (input: EndpointDetails, context: __SerdeContext): any => {
  return {
    ...(input.awsGroundStationAgentEndpoint != null && {
      awsGroundStationAgentEndpoint: se_AwsGroundStationAgentEndpoint(input.awsGroundStationAgentEndpoint, context),
    }),
    ...(input.endpoint != null && { endpoint: se_DataflowEndpoint(input.endpoint, context) }),
    ...(input.securityDetails != null && { securityDetails: se_SecurityDetails(input.securityDetails, context) }),
  };
};

/**
 * serializeAws_restJson1EndpointDetailsList
 */
const se_EndpointDetailsList = (input: EndpointDetails[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EndpointDetails(entry, context);
    });
};

/**
 * serializeAws_restJson1EphemerisData
 */
const se_EphemerisData = (input: EphemerisData, context: __SerdeContext): any => {
  return EphemerisData.visit(input, {
    oem: (value) => ({ oem: se_OEMEphemeris(value, context) }),
    tle: (value) => ({ tle: se_TLEEphemeris(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1EphemerisStatusList
 */
const se_EphemerisStatusList = (input: (EphemerisStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Frequency
 */
const se_Frequency = (input: Frequency, context: __SerdeContext): any => {
  return {
    ...(input.units != null && { units: input.units }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

/**
 * serializeAws_restJson1FrequencyBandwidth
 */
const se_FrequencyBandwidth = (input: FrequencyBandwidth, context: __SerdeContext): any => {
  return {
    ...(input.units != null && { units: input.units }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

/**
 * serializeAws_restJson1IntegerRange
 */
const se_IntegerRange = (input: IntegerRange, context: __SerdeContext): any => {
  return {
    ...(input.maximum != null && { maximum: input.maximum }),
    ...(input.minimum != null && { minimum: input.minimum }),
  };
};

/**
 * serializeAws_restJson1IpAddressList
 */
const se_IpAddressList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1KmsKey
 */
const se_KmsKey = (input: KmsKey, context: __SerdeContext): any => {
  return KmsKey.visit(input, {
    kmsAliasArn: (value) => ({ kmsAliasArn: value }),
    kmsKeyArn: (value) => ({ kmsKeyArn: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1OEMEphemeris
 */
const se_OEMEphemeris = (input: OEMEphemeris, context: __SerdeContext): any => {
  return {
    ...(input.oemData != null && { oemData: input.oemData }),
    ...(input.s3Object != null && { s3Object: se_S3Object(input.s3Object, context) }),
  };
};

/**
 * serializeAws_restJson1RangedConnectionDetails
 */
const se_RangedConnectionDetails = (input: RangedConnectionDetails, context: __SerdeContext): any => {
  return {
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.socketAddress != null && { socketAddress: se_RangedSocketAddress(input.socketAddress, context) }),
  };
};

/**
 * serializeAws_restJson1RangedSocketAddress
 */
const se_RangedSocketAddress = (input: RangedSocketAddress, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.portRange != null && { portRange: se_IntegerRange(input.portRange, context) }),
  };
};

/**
 * serializeAws_restJson1ReservedCpuCoresList
 */
const se_ReservedCpuCoresList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3Object
 */
const se_S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1S3RecordingConfig
 */
const se_S3RecordingConfig = (input: S3RecordingConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketArn != null && { bucketArn: input.bucketArn }),
    ...(input.prefix != null && { prefix: input.prefix }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1SecurityDetails
 */
const se_SecurityDetails = (input: SecurityDetails, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: se_SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetList(input.subnetIds, context) }),
  };
};

/**
 * serializeAws_restJson1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SignatureMap
 */
const se_SignatureMap = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SocketAddress
 */
const se_SocketAddress = (input: SocketAddress, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.port != null && { port: input.port }),
  };
};

/**
 * serializeAws_restJson1SpectrumConfig
 */
const se_SpectrumConfig = (input: SpectrumConfig, context: __SerdeContext): any => {
  return {
    ...(input.bandwidth != null && { bandwidth: se_FrequencyBandwidth(input.bandwidth, context) }),
    ...(input.centerFrequency != null && { centerFrequency: se_Frequency(input.centerFrequency, context) }),
    ...(input.polarization != null && { polarization: input.polarization }),
  };
};

/**
 * serializeAws_restJson1StatusList
 */
const se_StatusList = (input: (ContactStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SubnetList
 */
const se_SubnetList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagsMap
 */
const se_TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1TLEData
 */
const se_TLEData = (input: TLEData, context: __SerdeContext): any => {
  return {
    ...(input.tleLine1 != null && { tleLine1: input.tleLine1 }),
    ...(input.tleLine2 != null && { tleLine2: input.tleLine2 }),
    ...(input.validTimeRange != null && { validTimeRange: se_TimeRange(input.validTimeRange, context) }),
  };
};

/**
 * serializeAws_restJson1TLEDataList
 */
const se_TLEDataList = (input: TLEData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TLEData(entry, context);
    });
};

/**
 * serializeAws_restJson1TLEEphemeris
 */
const se_TLEEphemeris = (input: TLEEphemeris, context: __SerdeContext): any => {
  return {
    ...(input.s3Object != null && { s3Object: se_S3Object(input.s3Object, context) }),
    ...(input.tleData != null && { tleData: se_TLEDataList(input.tleData, context) }),
  };
};

/**
 * serializeAws_restJson1TrackingConfig
 */
const se_TrackingConfig = (input: TrackingConfig, context: __SerdeContext): any => {
  return {
    ...(input.autotrack != null && { autotrack: input.autotrack }),
  };
};

/**
 * serializeAws_restJson1UplinkEchoConfig
 */
const se_UplinkEchoConfig = (input: UplinkEchoConfig, context: __SerdeContext): any => {
  return {
    ...(input.antennaUplinkConfigArn != null && { antennaUplinkConfigArn: input.antennaUplinkConfigArn }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1UplinkSpectrumConfig
 */
const se_UplinkSpectrumConfig = (input: UplinkSpectrumConfig, context: __SerdeContext): any => {
  return {
    ...(input.centerFrequency != null && { centerFrequency: se_Frequency(input.centerFrequency, context) }),
    ...(input.polarization != null && { polarization: input.polarization }),
  };
};

/**
 * serializeAws_restJson1VersionStringList
 */
const se_VersionStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AntennaDemodDecodeDetails
 */
const de_AntennaDemodDecodeDetails = (output: any, context: __SerdeContext): AntennaDemodDecodeDetails => {
  return {
    outputNode: __expectString(output.outputNode),
  } as any;
};

/**
 * deserializeAws_restJson1AntennaDownlinkConfig
 */
const de_AntennaDownlinkConfig = (output: any, context: __SerdeContext): AntennaDownlinkConfig => {
  return {
    spectrumConfig: output.spectrumConfig != null ? de_SpectrumConfig(output.spectrumConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AntennaDownlinkDemodDecodeConfig
 */
const de_AntennaDownlinkDemodDecodeConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkDemodDecodeConfig => {
  return {
    decodeConfig: output.decodeConfig != null ? de_DecodeConfig(output.decodeConfig, context) : undefined,
    demodulationConfig:
      output.demodulationConfig != null ? de_DemodulationConfig(output.demodulationConfig, context) : undefined,
    spectrumConfig: output.spectrumConfig != null ? de_SpectrumConfig(output.spectrumConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AntennaUplinkConfig
 */
const de_AntennaUplinkConfig = (output: any, context: __SerdeContext): AntennaUplinkConfig => {
  return {
    spectrumConfig: output.spectrumConfig != null ? de_UplinkSpectrumConfig(output.spectrumConfig, context) : undefined,
    targetEirp: output.targetEirp != null ? de_Eirp(output.targetEirp, context) : undefined,
    transmitDisabled: __expectBoolean(output.transmitDisabled),
  } as any;
};

/**
 * deserializeAws_restJson1AwsGroundStationAgentEndpoint
 */
const de_AwsGroundStationAgentEndpoint = (output: any, context: __SerdeContext): AwsGroundStationAgentEndpoint => {
  return {
    agentStatus: __expectString(output.agentStatus),
    auditResults: __expectString(output.auditResults),
    egressAddress: output.egressAddress != null ? de_ConnectionDetails(output.egressAddress, context) : undefined,
    ingressAddress:
      output.ingressAddress != null ? de_RangedConnectionDetails(output.ingressAddress, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigDetails
 */
const de_ConfigDetails = (output: any, context: __SerdeContext): ConfigDetails => {
  if (output.antennaDemodDecodeDetails != null) {
    return {
      antennaDemodDecodeDetails: de_AntennaDemodDecodeDetails(output.antennaDemodDecodeDetails, context),
    };
  }
  if (output.endpointDetails != null) {
    return {
      endpointDetails: de_EndpointDetails(output.endpointDetails, context),
    };
  }
  if (output.s3RecordingDetails != null) {
    return {
      s3RecordingDetails: de_S3RecordingDetails(output.s3RecordingDetails, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConfigList
 */
const de_ConfigList = (output: any, context: __SerdeContext): ConfigListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfigListItem
 */
const de_ConfigListItem = (output: any, context: __SerdeContext): ConfigListItem => {
  return {
    configArn: __expectString(output.configArn),
    configId: __expectString(output.configId),
    configType: __expectString(output.configType),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigTypeData
 */
const de_ConfigTypeData = (output: any, context: __SerdeContext): ConfigTypeData => {
  if (output.antennaDownlinkConfig != null) {
    return {
      antennaDownlinkConfig: de_AntennaDownlinkConfig(output.antennaDownlinkConfig, context),
    };
  }
  if (output.antennaDownlinkDemodDecodeConfig != null) {
    return {
      antennaDownlinkDemodDecodeConfig: de_AntennaDownlinkDemodDecodeConfig(
        output.antennaDownlinkDemodDecodeConfig,
        context
      ),
    };
  }
  if (output.antennaUplinkConfig != null) {
    return {
      antennaUplinkConfig: de_AntennaUplinkConfig(output.antennaUplinkConfig, context),
    };
  }
  if (output.dataflowEndpointConfig != null) {
    return {
      dataflowEndpointConfig: de_DataflowEndpointConfig(output.dataflowEndpointConfig, context),
    };
  }
  if (output.s3RecordingConfig != null) {
    return {
      s3RecordingConfig: de_S3RecordingConfig(output.s3RecordingConfig, context),
    };
  }
  if (output.trackingConfig != null) {
    return {
      trackingConfig: de_TrackingConfig(output.trackingConfig, context),
    };
  }
  if (output.uplinkEchoConfig != null) {
    return {
      uplinkEchoConfig: de_UplinkEchoConfig(output.uplinkEchoConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1ConnectionDetails
 */
const de_ConnectionDetails = (output: any, context: __SerdeContext): ConnectionDetails => {
  return {
    mtu: __expectInt32(output.mtu),
    socketAddress: output.socketAddress != null ? de_SocketAddress(output.socketAddress, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContactData
 */
const de_ContactData = (output: any, context: __SerdeContext): ContactData => {
  return {
    contactId: __expectString(output.contactId),
    contactStatus: __expectString(output.contactStatus),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    errorMessage: __expectString(output.errorMessage),
    groundStation: __expectString(output.groundStation),
    maximumElevation: output.maximumElevation != null ? de_Elevation(output.maximumElevation, context) : undefined,
    missionProfileArn: __expectString(output.missionProfileArn),
    postPassEndTime:
      output.postPassEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.postPassEndTime)))
        : undefined,
    prePassStartTime:
      output.prePassStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.prePassStartTime)))
        : undefined,
    region: __expectString(output.region),
    satelliteArn: __expectString(output.satelliteArn),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    tags: output.tags != null ? de_TagsMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContactList
 */
const de_ContactList = (output: any, context: __SerdeContext): ContactData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContactData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataflowDetail
 */
const de_DataflowDetail = (output: any, context: __SerdeContext): DataflowDetail => {
  return {
    destination: output.destination != null ? de_Destination(output.destination, context) : undefined,
    errorMessage: __expectString(output.errorMessage),
    source: output.source != null ? de_Source(output.source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataflowEdge
 */
const de_DataflowEdge = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1DataflowEdgeList
 */
const de_DataflowEdgeList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataflowEdge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataflowEndpoint
 */
const de_DataflowEndpoint = (output: any, context: __SerdeContext): DataflowEndpoint => {
  return {
    address: output.address != null ? de_SocketAddress(output.address, context) : undefined,
    mtu: __expectInt32(output.mtu),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DataflowEndpointConfig
 */
const de_DataflowEndpointConfig = (output: any, context: __SerdeContext): DataflowEndpointConfig => {
  return {
    dataflowEndpointName: __expectString(output.dataflowEndpointName),
    dataflowEndpointRegion: __expectString(output.dataflowEndpointRegion),
  } as any;
};

/**
 * deserializeAws_restJson1DataflowEndpointGroupList
 */
const de_DataflowEndpointGroupList = (output: any, context: __SerdeContext): DataflowEndpointListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataflowEndpointListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataflowEndpointListItem
 */
const de_DataflowEndpointListItem = (output: any, context: __SerdeContext): DataflowEndpointListItem => {
  return {
    dataflowEndpointGroupArn: __expectString(output.dataflowEndpointGroupArn),
    dataflowEndpointGroupId: __expectString(output.dataflowEndpointGroupId),
  } as any;
};

/**
 * deserializeAws_restJson1DataflowList
 */
const de_DataflowList = (output: any, context: __SerdeContext): DataflowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataflowDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DecodeConfig
 */
const de_DecodeConfig = (output: any, context: __SerdeContext): DecodeConfig => {
  return {
    unvalidatedJSON: __expectString(output.unvalidatedJSON),
  } as any;
};

/**
 * deserializeAws_restJson1DemodulationConfig
 */
const de_DemodulationConfig = (output: any, context: __SerdeContext): DemodulationConfig => {
  return {
    unvalidatedJSON: __expectString(output.unvalidatedJSON),
  } as any;
};

/**
 * deserializeAws_restJson1Destination
 */
const de_Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    configDetails:
      output.configDetails != null ? de_ConfigDetails(__expectUnion(output.configDetails), context) : undefined,
    configId: __expectString(output.configId),
    configType: __expectString(output.configType),
    dataflowDestinationRegion: __expectString(output.dataflowDestinationRegion),
  } as any;
};

/**
 * deserializeAws_restJson1Eirp
 */
const de_Eirp = (output: any, context: __SerdeContext): Eirp => {
  return {
    units: __expectString(output.units),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1Elevation
 */
const de_Elevation = (output: any, context: __SerdeContext): Elevation => {
  return {
    unit: __expectString(output.unit),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1EndpointDetails
 */
const de_EndpointDetails = (output: any, context: __SerdeContext): EndpointDetails => {
  return {
    awsGroundStationAgentEndpoint:
      output.awsGroundStationAgentEndpoint != null
        ? de_AwsGroundStationAgentEndpoint(output.awsGroundStationAgentEndpoint, context)
        : undefined,
    endpoint: output.endpoint != null ? de_DataflowEndpoint(output.endpoint, context) : undefined,
    securityDetails: output.securityDetails != null ? de_SecurityDetails(output.securityDetails, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EndpointDetailsList
 */
const de_EndpointDetailsList = (output: any, context: __SerdeContext): EndpointDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EndpointDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EphemeridesList
 */
const de_EphemeridesList = (output: any, context: __SerdeContext): EphemerisItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EphemerisItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EphemerisDescription
 */
const de_EphemerisDescription = (output: any, context: __SerdeContext): EphemerisDescription => {
  return {
    ephemerisData: __expectString(output.ephemerisData),
    sourceS3Object: output.sourceS3Object != null ? de_S3Object(output.sourceS3Object, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EphemerisItem
 */
const de_EphemerisItem = (output: any, context: __SerdeContext): EphemerisItem => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    enabled: __expectBoolean(output.enabled),
    ephemerisId: __expectString(output.ephemerisId),
    name: __expectString(output.name),
    priority: __expectInt32(output.priority),
    sourceS3Object: output.sourceS3Object != null ? de_S3Object(output.sourceS3Object, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1EphemerisMetaData
 */
const de_EphemerisMetaData = (output: any, context: __SerdeContext): EphemerisMetaData => {
  return {
    ephemerisId: __expectString(output.ephemerisId),
    epoch: output.epoch != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.epoch))) : undefined,
    name: __expectString(output.name),
    source: __expectString(output.source),
  } as any;
};

/**
 * deserializeAws_restJson1EphemerisTypeDescription
 */
const de_EphemerisTypeDescription = (output: any, context: __SerdeContext): EphemerisTypeDescription => {
  if (output.oem != null) {
    return {
      oem: de_EphemerisDescription(output.oem, context),
    };
  }
  if (output.tle != null) {
    return {
      tle: de_EphemerisDescription(output.tle, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1Frequency
 */
const de_Frequency = (output: any, context: __SerdeContext): Frequency => {
  return {
    units: __expectString(output.units),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1FrequencyBandwidth
 */
const de_FrequencyBandwidth = (output: any, context: __SerdeContext): FrequencyBandwidth => {
  return {
    units: __expectString(output.units),
    value: __limitedParseDouble(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1GroundStationData
 */
const de_GroundStationData = (output: any, context: __SerdeContext): GroundStationData => {
  return {
    groundStationId: __expectString(output.groundStationId),
    groundStationName: __expectString(output.groundStationName),
    region: __expectString(output.region),
  } as any;
};

/**
 * deserializeAws_restJson1GroundStationIdList
 */
const de_GroundStationIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1GroundStationList
 */
const de_GroundStationList = (output: any, context: __SerdeContext): GroundStationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GroundStationData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntegerRange
 */
const de_IntegerRange = (output: any, context: __SerdeContext): IntegerRange => {
  return {
    maximum: __expectInt32(output.maximum),
    minimum: __expectInt32(output.minimum),
  } as any;
};

/**
 * deserializeAws_restJson1KmsKey
 */
const de_KmsKey = (output: any, context: __SerdeContext): KmsKey => {
  if (__expectString(output.kmsAliasArn) !== undefined) {
    return { kmsAliasArn: __expectString(output.kmsAliasArn) as any };
  }
  if (__expectString(output.kmsKeyArn) !== undefined) {
    return { kmsKeyArn: __expectString(output.kmsKeyArn) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1MissionProfileList
 */
const de_MissionProfileList = (output: any, context: __SerdeContext): MissionProfileListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MissionProfileListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MissionProfileListItem
 */
const de_MissionProfileListItem = (output: any, context: __SerdeContext): MissionProfileListItem => {
  return {
    missionProfileArn: __expectString(output.missionProfileArn),
    missionProfileId: __expectString(output.missionProfileId),
    name: __expectString(output.name),
    region: __expectString(output.region),
  } as any;
};

/**
 * deserializeAws_restJson1RangedConnectionDetails
 */
const de_RangedConnectionDetails = (output: any, context: __SerdeContext): RangedConnectionDetails => {
  return {
    mtu: __expectInt32(output.mtu),
    socketAddress: output.socketAddress != null ? de_RangedSocketAddress(output.socketAddress, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RangedSocketAddress
 */
const de_RangedSocketAddress = (output: any, context: __SerdeContext): RangedSocketAddress => {
  return {
    name: __expectString(output.name),
    portRange: output.portRange != null ? de_IntegerRange(output.portRange, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1S3RecordingConfig
 */
const de_S3RecordingConfig = (output: any, context: __SerdeContext): S3RecordingConfig => {
  return {
    bucketArn: __expectString(output.bucketArn),
    prefix: __expectString(output.prefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1S3RecordingDetails
 */
const de_S3RecordingDetails = (output: any, context: __SerdeContext): S3RecordingDetails => {
  return {
    bucketArn: __expectString(output.bucketArn),
    keyTemplate: __expectString(output.keyTemplate),
  } as any;
};

/**
 * deserializeAws_restJson1SatelliteList
 */
const de_SatelliteList = (output: any, context: __SerdeContext): SatelliteListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SatelliteListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SatelliteListItem
 */
const de_SatelliteListItem = (output: any, context: __SerdeContext): SatelliteListItem => {
  return {
    currentEphemeris:
      output.currentEphemeris != null ? de_EphemerisMetaData(output.currentEphemeris, context) : undefined,
    groundStations: output.groundStations != null ? de_GroundStationIdList(output.groundStations, context) : undefined,
    noradSatelliteID: __expectInt32(output.noradSatelliteID),
    satelliteArn: __expectString(output.satelliteArn),
    satelliteId: __expectString(output.satelliteId),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityDetails
 */
const de_SecurityDetails = (output: any, context: __SerdeContext): SecurityDetails => {
  return {
    roleArn: __expectString(output.roleArn),
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIdList(output.securityGroupIds, context) : undefined,
    subnetIds: output.subnetIds != null ? de_SubnetList(output.subnetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SocketAddress
 */
const de_SocketAddress = (output: any, context: __SerdeContext): SocketAddress => {
  return {
    name: __expectString(output.name),
    port: __expectInt32(output.port),
  } as any;
};

/**
 * deserializeAws_restJson1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    configDetails:
      output.configDetails != null ? de_ConfigDetails(__expectUnion(output.configDetails), context) : undefined,
    configId: __expectString(output.configId),
    configType: __expectString(output.configType),
    dataflowSourceRegion: __expectString(output.dataflowSourceRegion),
  } as any;
};

/**
 * deserializeAws_restJson1SpectrumConfig
 */
const de_SpectrumConfig = (output: any, context: __SerdeContext): SpectrumConfig => {
  return {
    bandwidth: output.bandwidth != null ? de_FrequencyBandwidth(output.bandwidth, context) : undefined,
    centerFrequency: output.centerFrequency != null ? de_Frequency(output.centerFrequency, context) : undefined,
    polarization: __expectString(output.polarization),
  } as any;
};

/**
 * deserializeAws_restJson1SubnetList
 */
const de_SubnetList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagsMap
 */
const de_TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TrackingConfig
 */
const de_TrackingConfig = (output: any, context: __SerdeContext): TrackingConfig => {
  return {
    autotrack: __expectString(output.autotrack),
  } as any;
};

/**
 * deserializeAws_restJson1UplinkEchoConfig
 */
const de_UplinkEchoConfig = (output: any, context: __SerdeContext): UplinkEchoConfig => {
  return {
    antennaUplinkConfigArn: __expectString(output.antennaUplinkConfigArn),
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1UplinkSpectrumConfig
 */
const de_UplinkSpectrumConfig = (output: any, context: __SerdeContext): UplinkSpectrumConfig => {
  return {
    centerFrequency: output.centerFrequency != null ? de_Frequency(output.centerFrequency, context) : undefined,
    polarization: __expectString(output.polarization),
  } as any;
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
