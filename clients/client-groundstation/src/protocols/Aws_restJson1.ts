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
import { ReserveContactCommandInput, ReserveContactCommandOutput } from "../commands/ReserveContactCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateConfigCommandInput, UpdateConfigCommandOutput } from "../commands/UpdateConfigCommand";
import { UpdateEphemerisCommandInput, UpdateEphemerisCommandOutput } from "../commands/UpdateEphemerisCommand";
import {
  UpdateMissionProfileCommandInput,
  UpdateMissionProfileCommandOutput,
} from "../commands/UpdateMissionProfileCommand";
import { GroundStationServiceException as __BaseException } from "../models/GroundStationServiceException";
import {
  AntennaDemodDecodeDetails,
  AntennaDownlinkConfig,
  AntennaDownlinkDemodDecodeConfig,
  AntennaUplinkConfig,
  ConfigDetails,
  ConfigListItem,
  ConfigTypeData,
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
  InvalidParameterException,
  MissionProfileListItem,
  OEMEphemeris,
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

export const serializeAws_restJson1CancelContactCommand = async (
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

export const serializeAws_restJson1CreateConfigCommand = async (
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
    ...(input.configData != null && { configData: serializeAws_restJson1ConfigTypeData(input.configData, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateDataflowEndpointGroupCommand = async (
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
    ...(input.endpointDetails != null && {
      endpointDetails: serializeAws_restJson1EndpointDetailsList(input.endpointDetails, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateEphemerisCommand = async (
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
    ...(input.ephemeris != null && { ephemeris: serializeAws_restJson1EphemerisData(input.ephemeris, context) }),
    ...(input.expirationTime != null && { expirationTime: Math.round(input.expirationTime.getTime() / 1000) }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.name != null && { name: input.name }),
    ...(input.priority != null && { priority: input.priority }),
    ...(input.satelliteId != null && { satelliteId: input.satelliteId }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateMissionProfileCommand = async (
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
    ...(input.dataflowEdges != null && {
      dataflowEdges: serializeAws_restJson1DataflowEdgeList(input.dataflowEdges, context),
    }),
    ...(input.minimumViableContactDurationSeconds != null && {
      minimumViableContactDurationSeconds: input.minimumViableContactDurationSeconds,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteConfigCommand = async (
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

export const serializeAws_restJson1DeleteDataflowEndpointGroupCommand = async (
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

export const serializeAws_restJson1DeleteEphemerisCommand = async (
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

export const serializeAws_restJson1DeleteMissionProfileCommand = async (
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

export const serializeAws_restJson1DescribeContactCommand = async (
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

export const serializeAws_restJson1DescribeEphemerisCommand = async (
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

export const serializeAws_restJson1GetConfigCommand = async (
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

export const serializeAws_restJson1GetDataflowEndpointGroupCommand = async (
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

export const serializeAws_restJson1GetMinuteUsageCommand = async (
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

export const serializeAws_restJson1GetMissionProfileCommand = async (
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

export const serializeAws_restJson1GetSatelliteCommand = async (
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

export const serializeAws_restJson1ListConfigsCommand = async (
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

export const serializeAws_restJson1ListContactsCommand = async (
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
    ...(input.statusList != null && { statusList: serializeAws_restJson1StatusList(input.statusList, context) }),
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

export const serializeAws_restJson1ListDataflowEndpointGroupsCommand = async (
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

export const serializeAws_restJson1ListEphemeridesCommand = async (
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
    ...(input.statusList != null && {
      statusList: serializeAws_restJson1EphemerisStatusList(input.statusList, context),
    }),
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

export const serializeAws_restJson1ListGroundStationsCommand = async (
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

export const serializeAws_restJson1ListMissionProfilesCommand = async (
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

export const serializeAws_restJson1ListSatellitesCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ReserveContactCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagsMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateConfigCommand = async (
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
    ...(input.configData != null && { configData: serializeAws_restJson1ConfigTypeData(input.configData, context) }),
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

export const serializeAws_restJson1UpdateEphemerisCommand = async (
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

export const serializeAws_restJson1UpdateMissionProfileCommand = async (
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
    ...(input.dataflowEdges != null && {
      dataflowEdges: serializeAws_restJson1DataflowEdgeList(input.dataflowEdges, context),
    }),
    ...(input.minimumViableContactDurationSeconds != null && {
      minimumViableContactDurationSeconds: input.minimumViableContactDurationSeconds,
    }),
    ...(input.name != null && { name: input.name }),
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

export const deserializeAws_restJson1CancelContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelContactCommandError(output, context);
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

const deserializeAws_restJson1CancelContactCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigCommandError(output, context);
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

const deserializeAws_restJson1CreateConfigCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.groundstation#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataflowEndpointGroupCommandError(output, context);
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

const deserializeAws_restJson1CreateDataflowEndpointGroupCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateEphemerisCommandError(output, context);
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

const deserializeAws_restJson1CreateEphemerisCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMissionProfileCommandError(output, context);
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

const deserializeAws_restJson1CreateMissionProfileCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigCommandError(output, context);
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

const deserializeAws_restJson1DeleteConfigCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataflowEndpointGroupCommandError(output, context);
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

const deserializeAws_restJson1DeleteDataflowEndpointGroupCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteEphemerisCommandError(output, context);
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

const deserializeAws_restJson1DeleteEphemerisCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMissionProfileCommandError(output, context);
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

const deserializeAws_restJson1DeleteMissionProfileCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeContactCommandError(output, context);
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
    contents.dataflowList = deserializeAws_restJson1DataflowList(data.dataflowList, context);
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
    contents.maximumElevation = deserializeAws_restJson1Elevation(data.maximumElevation, context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeContactCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeEphemerisCommandError(output, context);
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
    contents.suppliedData = deserializeAws_restJson1EphemerisTypeDescription(__expectUnion(data.suppliedData), context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeEphemerisCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configArn != null) {
    contents.configArn = __expectString(data.configArn);
  }
  if (data.configData != null) {
    contents.configData = deserializeAws_restJson1ConfigTypeData(__expectUnion(data.configData), context);
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
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetConfigCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataflowEndpointGroupCommandError(output, context);
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
    contents.endpointsDetails = deserializeAws_restJson1EndpointDetailsList(data.endpointsDetails, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDataflowEndpointGroupCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMinuteUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMinuteUsageCommandError(output, context);
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

const deserializeAws_restJson1GetMinuteUsageCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMissionProfileCommandError(output, context);
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
    contents.dataflowEdges = deserializeAws_restJson1DataflowEdgeList(data.dataflowEdges, context);
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
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
  }
  if (data.trackingConfigArn != null) {
    contents.trackingConfigArn = __expectString(data.trackingConfigArn);
  }
  return contents;
};

const deserializeAws_restJson1GetMissionProfileCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetSatelliteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSatelliteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.currentEphemeris != null) {
    contents.currentEphemeris = deserializeAws_restJson1EphemerisMetaData(data.currentEphemeris, context);
  }
  if (data.groundStations != null) {
    contents.groundStations = deserializeAws_restJson1GroundStationIdList(data.groundStations, context);
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

const deserializeAws_restJson1GetSatelliteCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configList != null) {
    contents.configList = deserializeAws_restJson1ConfigList(data.configList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListConfigsCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListContactsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.contactList != null) {
    contents.contactList = deserializeAws_restJson1ContactList(data.contactList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListContactsCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDataflowEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataflowEndpointGroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.dataflowEndpointGroupList != null) {
    contents.dataflowEndpointGroupList = deserializeAws_restJson1DataflowEndpointGroupList(
      data.dataflowEndpointGroupList,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDataflowEndpointGroupsCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEphemeridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEphemeridesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEphemeridesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ephemerides != null) {
    contents.ephemerides = deserializeAws_restJson1EphemeridesList(data.ephemerides, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEphemeridesCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListGroundStationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGroundStationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.groundStationList != null) {
    contents.groundStationList = deserializeAws_restJson1GroundStationList(data.groundStationList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListGroundStationsCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMissionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMissionProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.missionProfileList != null) {
    contents.missionProfileList = deserializeAws_restJson1MissionProfileList(data.missionProfileList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMissionProfilesCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSatellitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSatellitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.satellites != null) {
    contents.satellites = deserializeAws_restJson1SatelliteList(data.satellites, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSatellitesCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagsMap(data.tags, context);
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ReserveContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ReserveContactCommandError(output, context);
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

const deserializeAws_restJson1ReserveContactCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigCommandError(output, context);
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

const deserializeAws_restJson1UpdateConfigCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateEphemerisCommandError(output, context);
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

const deserializeAws_restJson1UpdateEphemerisCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMissionProfileCommandError(output, context);
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

const deserializeAws_restJson1UpdateMissionProfileCommandError = async (
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
      throw await deserializeAws_restJson1DependencyExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1DependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyException> => {
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

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
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

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const serializeAws_restJson1AntennaDownlinkConfig = (input: AntennaDownlinkConfig, context: __SerdeContext): any => {
  return {
    ...(input.spectrumConfig != null && {
      spectrumConfig: serializeAws_restJson1SpectrumConfig(input.spectrumConfig, context),
    }),
  };
};

const serializeAws_restJson1AntennaDownlinkDemodDecodeConfig = (
  input: AntennaDownlinkDemodDecodeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.decodeConfig != null && {
      decodeConfig: serializeAws_restJson1DecodeConfig(input.decodeConfig, context),
    }),
    ...(input.demodulationConfig != null && {
      demodulationConfig: serializeAws_restJson1DemodulationConfig(input.demodulationConfig, context),
    }),
    ...(input.spectrumConfig != null && {
      spectrumConfig: serializeAws_restJson1SpectrumConfig(input.spectrumConfig, context),
    }),
  };
};

const serializeAws_restJson1AntennaUplinkConfig = (input: AntennaUplinkConfig, context: __SerdeContext): any => {
  return {
    ...(input.spectrumConfig != null && {
      spectrumConfig: serializeAws_restJson1UplinkSpectrumConfig(input.spectrumConfig, context),
    }),
    ...(input.targetEirp != null && { targetEirp: serializeAws_restJson1Eirp(input.targetEirp, context) }),
    ...(input.transmitDisabled != null && { transmitDisabled: input.transmitDisabled }),
  };
};

const serializeAws_restJson1ConfigTypeData = (input: ConfigTypeData, context: __SerdeContext): any => {
  return ConfigTypeData.visit(input, {
    antennaDownlinkConfig: (value) => ({
      antennaDownlinkConfig: serializeAws_restJson1AntennaDownlinkConfig(value, context),
    }),
    antennaDownlinkDemodDecodeConfig: (value) => ({
      antennaDownlinkDemodDecodeConfig: serializeAws_restJson1AntennaDownlinkDemodDecodeConfig(value, context),
    }),
    antennaUplinkConfig: (value) => ({
      antennaUplinkConfig: serializeAws_restJson1AntennaUplinkConfig(value, context),
    }),
    dataflowEndpointConfig: (value) => ({
      dataflowEndpointConfig: serializeAws_restJson1DataflowEndpointConfig(value, context),
    }),
    s3RecordingConfig: (value) => ({ s3RecordingConfig: serializeAws_restJson1S3RecordingConfig(value, context) }),
    trackingConfig: (value) => ({ trackingConfig: serializeAws_restJson1TrackingConfig(value, context) }),
    uplinkEchoConfig: (value) => ({ uplinkEchoConfig: serializeAws_restJson1UplinkEchoConfig(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1DataflowEdge = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1DataflowEdgeList = (input: string[][], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataflowEdge(entry, context);
    });
};

const serializeAws_restJson1DataflowEndpoint = (input: DataflowEndpoint, context: __SerdeContext): any => {
  return {
    ...(input.address != null && { address: serializeAws_restJson1SocketAddress(input.address, context) }),
    ...(input.mtu != null && { mtu: input.mtu }),
    ...(input.name != null && { name: input.name }),
    ...(input.status != null && { status: input.status }),
  };
};

const serializeAws_restJson1DataflowEndpointConfig = (input: DataflowEndpointConfig, context: __SerdeContext): any => {
  return {
    ...(input.dataflowEndpointName != null && { dataflowEndpointName: input.dataflowEndpointName }),
    ...(input.dataflowEndpointRegion != null && { dataflowEndpointRegion: input.dataflowEndpointRegion }),
  };
};

const serializeAws_restJson1DecodeConfig = (input: DecodeConfig, context: __SerdeContext): any => {
  return {
    ...(input.unvalidatedJSON != null && { unvalidatedJSON: input.unvalidatedJSON }),
  };
};

const serializeAws_restJson1DemodulationConfig = (input: DemodulationConfig, context: __SerdeContext): any => {
  return {
    ...(input.unvalidatedJSON != null && { unvalidatedJSON: input.unvalidatedJSON }),
  };
};

const serializeAws_restJson1Eirp = (input: Eirp, context: __SerdeContext): any => {
  return {
    ...(input.units != null && { units: input.units }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

const serializeAws_restJson1EndpointDetails = (input: EndpointDetails, context: __SerdeContext): any => {
  return {
    ...(input.endpoint != null && { endpoint: serializeAws_restJson1DataflowEndpoint(input.endpoint, context) }),
    ...(input.securityDetails != null && {
      securityDetails: serializeAws_restJson1SecurityDetails(input.securityDetails, context),
    }),
  };
};

const serializeAws_restJson1EndpointDetailsList = (input: EndpointDetails[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EndpointDetails(entry, context);
    });
};

const serializeAws_restJson1EphemerisData = (input: EphemerisData, context: __SerdeContext): any => {
  return EphemerisData.visit(input, {
    oem: (value) => ({ oem: serializeAws_restJson1OEMEphemeris(value, context) }),
    tle: (value) => ({ tle: serializeAws_restJson1TLEEphemeris(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1EphemerisStatusList = (
  input: (EphemerisStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Frequency = (input: Frequency, context: __SerdeContext): any => {
  return {
    ...(input.units != null && { units: input.units }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

const serializeAws_restJson1FrequencyBandwidth = (input: FrequencyBandwidth, context: __SerdeContext): any => {
  return {
    ...(input.units != null && { units: input.units }),
    ...(input.value != null && { value: __serializeFloat(input.value) }),
  };
};

const serializeAws_restJson1OEMEphemeris = (input: OEMEphemeris, context: __SerdeContext): any => {
  return {
    ...(input.oemData != null && { oemData: input.oemData }),
    ...(input.s3Object != null && { s3Object: serializeAws_restJson1S3Object(input.s3Object, context) }),
  };
};

const serializeAws_restJson1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1S3RecordingConfig = (input: S3RecordingConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucketArn != null && { bucketArn: input.bucketArn }),
    ...(input.prefix != null && { prefix: input.prefix }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1SecurityDetails = (input: SecurityDetails, context: __SerdeContext): any => {
  return {
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1SecurityGroupIdList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1SubnetList(input.subnetIds, context) }),
  };
};

const serializeAws_restJson1SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SocketAddress = (input: SocketAddress, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.port != null && { port: input.port }),
  };
};

const serializeAws_restJson1SpectrumConfig = (input: SpectrumConfig, context: __SerdeContext): any => {
  return {
    ...(input.bandwidth != null && { bandwidth: serializeAws_restJson1FrequencyBandwidth(input.bandwidth, context) }),
    ...(input.centerFrequency != null && {
      centerFrequency: serializeAws_restJson1Frequency(input.centerFrequency, context),
    }),
    ...(input.polarization != null && { polarization: input.polarization }),
  };
};

const serializeAws_restJson1StatusList = (input: (ContactStatus | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SubnetList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return {
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1TLEData = (input: TLEData, context: __SerdeContext): any => {
  return {
    ...(input.tleLine1 != null && { tleLine1: input.tleLine1 }),
    ...(input.tleLine2 != null && { tleLine2: input.tleLine2 }),
    ...(input.validTimeRange != null && {
      validTimeRange: serializeAws_restJson1TimeRange(input.validTimeRange, context),
    }),
  };
};

const serializeAws_restJson1TLEDataList = (input: TLEData[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TLEData(entry, context);
    });
};

const serializeAws_restJson1TLEEphemeris = (input: TLEEphemeris, context: __SerdeContext): any => {
  return {
    ...(input.s3Object != null && { s3Object: serializeAws_restJson1S3Object(input.s3Object, context) }),
    ...(input.tleData != null && { tleData: serializeAws_restJson1TLEDataList(input.tleData, context) }),
  };
};

const serializeAws_restJson1TrackingConfig = (input: TrackingConfig, context: __SerdeContext): any => {
  return {
    ...(input.autotrack != null && { autotrack: input.autotrack }),
  };
};

const serializeAws_restJson1UplinkEchoConfig = (input: UplinkEchoConfig, context: __SerdeContext): any => {
  return {
    ...(input.antennaUplinkConfigArn != null && { antennaUplinkConfigArn: input.antennaUplinkConfigArn }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1UplinkSpectrumConfig = (input: UplinkSpectrumConfig, context: __SerdeContext): any => {
  return {
    ...(input.centerFrequency != null && {
      centerFrequency: serializeAws_restJson1Frequency(input.centerFrequency, context),
    }),
    ...(input.polarization != null && { polarization: input.polarization }),
  };
};

const deserializeAws_restJson1AntennaDemodDecodeDetails = (
  output: any,
  context: __SerdeContext
): AntennaDemodDecodeDetails => {
  return {
    outputNode: __expectString(output.outputNode),
  } as any;
};

const deserializeAws_restJson1AntennaDownlinkConfig = (output: any, context: __SerdeContext): AntennaDownlinkConfig => {
  return {
    spectrumConfig:
      output.spectrumConfig != null
        ? deserializeAws_restJson1SpectrumConfig(output.spectrumConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AntennaDownlinkDemodDecodeConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkDemodDecodeConfig => {
  return {
    decodeConfig:
      output.decodeConfig != null ? deserializeAws_restJson1DecodeConfig(output.decodeConfig, context) : undefined,
    demodulationConfig:
      output.demodulationConfig != null
        ? deserializeAws_restJson1DemodulationConfig(output.demodulationConfig, context)
        : undefined,
    spectrumConfig:
      output.spectrumConfig != null
        ? deserializeAws_restJson1SpectrumConfig(output.spectrumConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AntennaUplinkConfig = (output: any, context: __SerdeContext): AntennaUplinkConfig => {
  return {
    spectrumConfig:
      output.spectrumConfig != null
        ? deserializeAws_restJson1UplinkSpectrumConfig(output.spectrumConfig, context)
        : undefined,
    targetEirp: output.targetEirp != null ? deserializeAws_restJson1Eirp(output.targetEirp, context) : undefined,
    transmitDisabled: __expectBoolean(output.transmitDisabled),
  } as any;
};

const deserializeAws_restJson1ConfigDetails = (output: any, context: __SerdeContext): ConfigDetails => {
  if (output.antennaDemodDecodeDetails != null) {
    return {
      antennaDemodDecodeDetails: deserializeAws_restJson1AntennaDemodDecodeDetails(
        output.antennaDemodDecodeDetails,
        context
      ),
    };
  }
  if (output.endpointDetails != null) {
    return {
      endpointDetails: deserializeAws_restJson1EndpointDetails(output.endpointDetails, context),
    };
  }
  if (output.s3RecordingDetails != null) {
    return {
      s3RecordingDetails: deserializeAws_restJson1S3RecordingDetails(output.s3RecordingDetails, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ConfigList = (output: any, context: __SerdeContext): ConfigListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConfigListItem = (output: any, context: __SerdeContext): ConfigListItem => {
  return {
    configArn: __expectString(output.configArn),
    configId: __expectString(output.configId),
    configType: __expectString(output.configType),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ConfigTypeData = (output: any, context: __SerdeContext): ConfigTypeData => {
  if (output.antennaDownlinkConfig != null) {
    return {
      antennaDownlinkConfig: deserializeAws_restJson1AntennaDownlinkConfig(output.antennaDownlinkConfig, context),
    };
  }
  if (output.antennaDownlinkDemodDecodeConfig != null) {
    return {
      antennaDownlinkDemodDecodeConfig: deserializeAws_restJson1AntennaDownlinkDemodDecodeConfig(
        output.antennaDownlinkDemodDecodeConfig,
        context
      ),
    };
  }
  if (output.antennaUplinkConfig != null) {
    return {
      antennaUplinkConfig: deserializeAws_restJson1AntennaUplinkConfig(output.antennaUplinkConfig, context),
    };
  }
  if (output.dataflowEndpointConfig != null) {
    return {
      dataflowEndpointConfig: deserializeAws_restJson1DataflowEndpointConfig(output.dataflowEndpointConfig, context),
    };
  }
  if (output.s3RecordingConfig != null) {
    return {
      s3RecordingConfig: deserializeAws_restJson1S3RecordingConfig(output.s3RecordingConfig, context),
    };
  }
  if (output.trackingConfig != null) {
    return {
      trackingConfig: deserializeAws_restJson1TrackingConfig(output.trackingConfig, context),
    };
  }
  if (output.uplinkEchoConfig != null) {
    return {
      uplinkEchoConfig: deserializeAws_restJson1UplinkEchoConfig(output.uplinkEchoConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1ContactData = (output: any, context: __SerdeContext): ContactData => {
  return {
    contactId: __expectString(output.contactId),
    contactStatus: __expectString(output.contactStatus),
    endTime:
      output.endTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endTime))) : undefined,
    errorMessage: __expectString(output.errorMessage),
    groundStation: __expectString(output.groundStation),
    maximumElevation:
      output.maximumElevation != null ? deserializeAws_restJson1Elevation(output.maximumElevation, context) : undefined,
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
    tags: output.tags != null ? deserializeAws_restJson1TagsMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ContactList = (output: any, context: __SerdeContext): ContactData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ContactData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataflowDetail = (output: any, context: __SerdeContext): DataflowDetail => {
  return {
    destination:
      output.destination != null ? deserializeAws_restJson1Destination(output.destination, context) : undefined,
    errorMessage: __expectString(output.errorMessage),
    source: output.source != null ? deserializeAws_restJson1Source(output.source, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataflowEdge = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1DataflowEdgeList = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataflowEdge(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataflowEndpoint = (output: any, context: __SerdeContext): DataflowEndpoint => {
  return {
    address: output.address != null ? deserializeAws_restJson1SocketAddress(output.address, context) : undefined,
    mtu: __expectInt32(output.mtu),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DataflowEndpointConfig = (
  output: any,
  context: __SerdeContext
): DataflowEndpointConfig => {
  return {
    dataflowEndpointName: __expectString(output.dataflowEndpointName),
    dataflowEndpointRegion: __expectString(output.dataflowEndpointRegion),
  } as any;
};

const deserializeAws_restJson1DataflowEndpointGroupList = (
  output: any,
  context: __SerdeContext
): DataflowEndpointListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataflowEndpointListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataflowEndpointListItem = (
  output: any,
  context: __SerdeContext
): DataflowEndpointListItem => {
  return {
    dataflowEndpointGroupArn: __expectString(output.dataflowEndpointGroupArn),
    dataflowEndpointGroupId: __expectString(output.dataflowEndpointGroupId),
  } as any;
};

const deserializeAws_restJson1DataflowList = (output: any, context: __SerdeContext): DataflowDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataflowDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DecodeConfig = (output: any, context: __SerdeContext): DecodeConfig => {
  return {
    unvalidatedJSON: __expectString(output.unvalidatedJSON),
  } as any;
};

const deserializeAws_restJson1DemodulationConfig = (output: any, context: __SerdeContext): DemodulationConfig => {
  return {
    unvalidatedJSON: __expectString(output.unvalidatedJSON),
  } as any;
};

const deserializeAws_restJson1Destination = (output: any, context: __SerdeContext): Destination => {
  return {
    configDetails:
      output.configDetails != null
        ? deserializeAws_restJson1ConfigDetails(__expectUnion(output.configDetails), context)
        : undefined,
    configId: __expectString(output.configId),
    configType: __expectString(output.configType),
    dataflowDestinationRegion: __expectString(output.dataflowDestinationRegion),
  } as any;
};

const deserializeAws_restJson1Eirp = (output: any, context: __SerdeContext): Eirp => {
  return {
    units: __expectString(output.units),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_restJson1Elevation = (output: any, context: __SerdeContext): Elevation => {
  return {
    unit: __expectString(output.unit),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_restJson1EndpointDetails = (output: any, context: __SerdeContext): EndpointDetails => {
  return {
    endpoint: output.endpoint != null ? deserializeAws_restJson1DataflowEndpoint(output.endpoint, context) : undefined,
    securityDetails:
      output.securityDetails != null
        ? deserializeAws_restJson1SecurityDetails(output.securityDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EndpointDetailsList = (output: any, context: __SerdeContext): EndpointDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EndpointDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EphemeridesList = (output: any, context: __SerdeContext): EphemerisItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EphemerisItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EphemerisDescription = (output: any, context: __SerdeContext): EphemerisDescription => {
  return {
    ephemerisData: __expectString(output.ephemerisData),
    sourceS3Object:
      output.sourceS3Object != null ? deserializeAws_restJson1S3Object(output.sourceS3Object, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EphemerisItem = (output: any, context: __SerdeContext): EphemerisItem => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    enabled: __expectBoolean(output.enabled),
    ephemerisId: __expectString(output.ephemerisId),
    name: __expectString(output.name),
    priority: __expectInt32(output.priority),
    sourceS3Object:
      output.sourceS3Object != null ? deserializeAws_restJson1S3Object(output.sourceS3Object, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1EphemerisMetaData = (output: any, context: __SerdeContext): EphemerisMetaData => {
  return {
    ephemerisId: __expectString(output.ephemerisId),
    epoch: output.epoch != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.epoch))) : undefined,
    name: __expectString(output.name),
    source: __expectString(output.source),
  } as any;
};

const deserializeAws_restJson1EphemerisTypeDescription = (
  output: any,
  context: __SerdeContext
): EphemerisTypeDescription => {
  if (output.oem != null) {
    return {
      oem: deserializeAws_restJson1EphemerisDescription(output.oem, context),
    };
  }
  if (output.tle != null) {
    return {
      tle: deserializeAws_restJson1EphemerisDescription(output.tle, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1Frequency = (output: any, context: __SerdeContext): Frequency => {
  return {
    units: __expectString(output.units),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_restJson1FrequencyBandwidth = (output: any, context: __SerdeContext): FrequencyBandwidth => {
  return {
    units: __expectString(output.units),
    value: __limitedParseDouble(output.value),
  } as any;
};

const deserializeAws_restJson1GroundStationData = (output: any, context: __SerdeContext): GroundStationData => {
  return {
    groundStationId: __expectString(output.groundStationId),
    groundStationName: __expectString(output.groundStationName),
    region: __expectString(output.region),
  } as any;
};

const deserializeAws_restJson1GroundStationIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1GroundStationList = (output: any, context: __SerdeContext): GroundStationData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GroundStationData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MissionProfileList = (output: any, context: __SerdeContext): MissionProfileListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MissionProfileListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MissionProfileListItem = (
  output: any,
  context: __SerdeContext
): MissionProfileListItem => {
  return {
    missionProfileArn: __expectString(output.missionProfileArn),
    missionProfileId: __expectString(output.missionProfileId),
    name: __expectString(output.name),
    region: __expectString(output.region),
  } as any;
};

const deserializeAws_restJson1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1S3RecordingConfig = (output: any, context: __SerdeContext): S3RecordingConfig => {
  return {
    bucketArn: __expectString(output.bucketArn),
    prefix: __expectString(output.prefix),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1S3RecordingDetails = (output: any, context: __SerdeContext): S3RecordingDetails => {
  return {
    bucketArn: __expectString(output.bucketArn),
    keyTemplate: __expectString(output.keyTemplate),
  } as any;
};

const deserializeAws_restJson1SatelliteList = (output: any, context: __SerdeContext): SatelliteListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SatelliteListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SatelliteListItem = (output: any, context: __SerdeContext): SatelliteListItem => {
  return {
    currentEphemeris:
      output.currentEphemeris != null
        ? deserializeAws_restJson1EphemerisMetaData(output.currentEphemeris, context)
        : undefined,
    groundStations:
      output.groundStations != null
        ? deserializeAws_restJson1GroundStationIdList(output.groundStations, context)
        : undefined,
    noradSatelliteID: __expectInt32(output.noradSatelliteID),
    satelliteArn: __expectString(output.satelliteArn),
    satelliteId: __expectString(output.satelliteId),
  } as any;
};

const deserializeAws_restJson1SecurityDetails = (output: any, context: __SerdeContext): SecurityDetails => {
  return {
    roleArn: __expectString(output.roleArn),
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1SecurityGroupIdList(output.securityGroupIds, context)
        : undefined,
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1SubnetList(output.subnetIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SocketAddress = (output: any, context: __SerdeContext): SocketAddress => {
  return {
    name: __expectString(output.name),
    port: __expectInt32(output.port),
  } as any;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    configDetails:
      output.configDetails != null
        ? deserializeAws_restJson1ConfigDetails(__expectUnion(output.configDetails), context)
        : undefined,
    configId: __expectString(output.configId),
    configType: __expectString(output.configType),
    dataflowSourceRegion: __expectString(output.dataflowSourceRegion),
  } as any;
};

const deserializeAws_restJson1SpectrumConfig = (output: any, context: __SerdeContext): SpectrumConfig => {
  return {
    bandwidth:
      output.bandwidth != null ? deserializeAws_restJson1FrequencyBandwidth(output.bandwidth, context) : undefined,
    centerFrequency:
      output.centerFrequency != null ? deserializeAws_restJson1Frequency(output.centerFrequency, context) : undefined,
    polarization: __expectString(output.polarization),
  } as any;
};

const deserializeAws_restJson1SubnetList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TrackingConfig = (output: any, context: __SerdeContext): TrackingConfig => {
  return {
    autotrack: __expectString(output.autotrack),
  } as any;
};

const deserializeAws_restJson1UplinkEchoConfig = (output: any, context: __SerdeContext): UplinkEchoConfig => {
  return {
    antennaUplinkConfigArn: __expectString(output.antennaUplinkConfigArn),
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1UplinkSpectrumConfig = (output: any, context: __SerdeContext): UplinkSpectrumConfig => {
  return {
    centerFrequency:
      output.centerFrequency != null ? deserializeAws_restJson1Frequency(output.centerFrequency, context) : undefined,
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
