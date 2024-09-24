// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AntennaDownlinkConfig,
  AntennaDownlinkDemodDecodeConfig,
  AntennaUplinkConfig,
  AwsGroundStationAgentEndpoint,
  CapabilityHealthReason,
  ComponentStatusData,
  ComponentVersion,
  ConfigTypeData,
  ConnectionDetails,
  ContactData,
  ContactStatus,
  DataflowEndpoint,
  DataflowEndpointConfig,
  DecodeConfig,
  DemodulationConfig,
  DependencyException,
  DiscoveryData,
  Eirp,
  Elevation,
  EndpointDetails,
  EphemerisData,
  EphemerisItem,
  EphemerisMetaData,
  EphemerisStatus,
  Frequency,
  FrequencyBandwidth,
  IntegerRange,
  InvalidParameterException,
  KmsKey,
  OEMEphemeris,
  RangedConnectionDetails,
  RangedSocketAddress,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  S3Object,
  S3RecordingConfig,
  SatelliteListItem,
  SecurityDetails,
  SocketAddress,
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
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact/{contactId}");
  b.p("contactId", () => input.contactId!, "{contactId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfigCommand
 */
export const se_CreateConfigCommand = async (
  input: CreateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/config");
  let body: any;
  body = JSON.stringify(
    take(input, {
      configData: (_) => se_ConfigTypeData(_, context),
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDataflowEndpointGroupCommand
 */
export const se_CreateDataflowEndpointGroupCommand = async (
  input: CreateDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/dataflowEndpointGroup");
  let body: any;
  body = JSON.stringify(
    take(input, {
      contactPostPassDurationSeconds: [],
      contactPrePassDurationSeconds: [],
      endpointDetails: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEphemerisCommand
 */
export const se_CreateEphemerisCommand = async (
  input: CreateEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ephemeris");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabled: [],
      ephemeris: (_) => se_EphemerisData(_, context),
      expirationTime: (_) => _.getTime() / 1_000,
      kmsKeyArn: [],
      name: [],
      priority: [],
      satelliteId: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMissionProfileCommand
 */
export const se_CreateMissionProfileCommand = async (
  input: CreateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/missionprofile");
  let body: any;
  body = JSON.stringify(
    take(input, {
      contactPostPassDurationSeconds: [],
      contactPrePassDurationSeconds: [],
      dataflowEdges: (_) => _json(_),
      minimumViableContactDurationSeconds: [],
      name: [],
      streamsKmsKey: (_) => _json(_),
      streamsKmsRole: [],
      tags: (_) => _json(_),
      trackingConfigArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfigCommand
 */
export const se_DeleteConfigCommand = async (
  input: DeleteConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/config/{configType}/{configId}");
  b.p("configId", () => input.configId!, "{configId}", false);
  b.p("configType", () => input.configType!, "{configType}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDataflowEndpointGroupCommand
 */
export const se_DeleteDataflowEndpointGroupCommand = async (
  input: DeleteDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataflowEndpointGroup/{dataflowEndpointGroupId}");
  b.p("dataflowEndpointGroupId", () => input.dataflowEndpointGroupId!, "{dataflowEndpointGroupId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteEphemerisCommand
 */
export const se_DeleteEphemerisCommand = async (
  input: DeleteEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ephemeris/{ephemerisId}");
  b.p("ephemerisId", () => input.ephemerisId!, "{ephemerisId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMissionProfileCommand
 */
export const se_DeleteMissionProfileCommand = async (
  input: DeleteMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/missionprofile/{missionProfileId}");
  b.p("missionProfileId", () => input.missionProfileId!, "{missionProfileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeContactCommand
 */
export const se_DescribeContactCommand = async (
  input: DescribeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/contact/{contactId}");
  b.p("contactId", () => input.contactId!, "{contactId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeEphemerisCommand
 */
export const se_DescribeEphemerisCommand = async (
  input: DescribeEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ephemeris/{ephemerisId}");
  b.p("ephemerisId", () => input.ephemerisId!, "{ephemerisId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAgentConfigurationCommand
 */
export const se_GetAgentConfigurationCommand = async (
  input: GetAgentConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/agent/{agentId}/configuration");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfigCommand
 */
export const se_GetConfigCommand = async (
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/config/{configType}/{configId}");
  b.p("configId", () => input.configId!, "{configId}", false);
  b.p("configType", () => input.configType!, "{configType}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDataflowEndpointGroupCommand
 */
export const se_GetDataflowEndpointGroupCommand = async (
  input: GetDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataflowEndpointGroup/{dataflowEndpointGroupId}");
  b.p("dataflowEndpointGroupId", () => input.dataflowEndpointGroupId!, "{dataflowEndpointGroupId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMinuteUsageCommand
 */
export const se_GetMinuteUsageCommand = async (
  input: GetMinuteUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/minute-usage");
  let body: any;
  body = JSON.stringify(
    take(input, {
      month: [],
      year: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMissionProfileCommand
 */
export const se_GetMissionProfileCommand = async (
  input: GetMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/missionprofile/{missionProfileId}");
  b.p("missionProfileId", () => input.missionProfileId!, "{missionProfileId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSatelliteCommand
 */
export const se_GetSatelliteCommand = async (
  input: GetSatelliteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/satellite/{satelliteId}");
  b.p("satelliteId", () => input.satelliteId!, "{satelliteId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfigsCommand
 */
export const se_ListConfigsCommand = async (
  input: ListConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/config");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListContactsCommand
 */
export const se_ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contacts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      endTime: (_) => _.getTime() / 1_000,
      groundStation: [],
      maxResults: [],
      missionProfileArn: [],
      nextToken: [],
      satelliteArn: [],
      startTime: (_) => _.getTime() / 1_000,
      statusList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDataflowEndpointGroupsCommand
 */
export const se_ListDataflowEndpointGroupsCommand = async (
  input: ListDataflowEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/dataflowEndpointGroup");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEphemeridesCommand
 */
export const se_ListEphemeridesCommand = async (
  input: ListEphemeridesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ephemerides");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      endTime: (_) => _.getTime() / 1_000,
      satelliteId: [],
      startTime: (_) => _.getTime() / 1_000,
      statusList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGroundStationsCommand
 */
export const se_ListGroundStationsCommand = async (
  input: ListGroundStationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/groundstation");
  const query: any = map({
    [_sI]: [, input[_sI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMissionProfilesCommand
 */
export const se_ListMissionProfilesCommand = async (
  input: ListMissionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/missionprofile");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSatellitesCommand
 */
export const se_ListSatellitesCommand = async (
  input: ListSatellitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/satellite");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterAgentCommand
 */
export const se_RegisterAgentCommand = async (
  input: RegisterAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agent");
  let body: any;
  body = JSON.stringify(
    take(input, {
      agentDetails: (_) => _json(_),
      discoveryData: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReserveContactCommand
 */
export const se_ReserveContactCommand = async (
  input: ReserveContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/contact");
  let body: any;
  body = JSON.stringify(
    take(input, {
      endTime: (_) => _.getTime() / 1_000,
      groundStation: [],
      missionProfileArn: [],
      satelliteArn: [],
      startTime: (_) => _.getTime() / 1_000,
      tags: (_) => _json(_),
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAgentStatusCommand
 */
export const se_UpdateAgentStatusCommand = async (
  input: UpdateAgentStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/agent/{agentId}");
  b.p("agentId", () => input.agentId!, "{agentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      aggregateStatus: (_) => _json(_),
      componentStatuses: (_) => _json(_),
      taskId: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfigCommand
 */
export const se_UpdateConfigCommand = async (
  input: UpdateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/config/{configType}/{configId}");
  b.p("configId", () => input.configId!, "{configId}", false);
  b.p("configType", () => input.configType!, "{configType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configData: (_) => se_ConfigTypeData(_, context),
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEphemerisCommand
 */
export const se_UpdateEphemerisCommand = async (
  input: UpdateEphemerisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/ephemeris/{ephemerisId}");
  b.p("ephemerisId", () => input.ephemerisId!, "{ephemerisId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabled: [],
      name: [],
      priority: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMissionProfileCommand
 */
export const se_UpdateMissionProfileCommand = async (
  input: UpdateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/missionprofile/{missionProfileId}");
  b.p("missionProfileId", () => input.missionProfileId!, "{missionProfileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contactPostPassDurationSeconds: [],
      contactPrePassDurationSeconds: [],
      dataflowEdges: (_) => _json(_),
      minimumViableContactDurationSeconds: [],
      name: [],
      streamsKmsKey: (_) => _json(_),
      streamsKmsRole: [],
      trackingConfigArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelContactCommand
 */
export const de_CancelContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contactId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigCommand
 */
export const de_CreateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configArn: __expectString,
    configId: __expectString,
    configType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataflowEndpointGroupCommand
 */
export const de_CreateDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataflowEndpointGroupId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEphemerisCommand
 */
export const de_CreateEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ephemerisId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMissionProfileCommand
 */
export const de_CreateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    missionProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigCommand
 */
export const de_DeleteConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configArn: __expectString,
    configId: __expectString,
    configType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataflowEndpointGroupCommand
 */
export const de_DeleteDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataflowEndpointGroupId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteEphemerisCommand
 */
export const de_DeleteEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ephemerisId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMissionProfileCommand
 */
export const de_DeleteMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    missionProfileId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeContactCommand
 */
export const de_DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contactId: __expectString,
    contactStatus: __expectString,
    dataflowList: _json,
    endTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorMessage: __expectString,
    groundStation: __expectString,
    maximumElevation: (_) => de_Elevation(_, context),
    missionProfileArn: __expectString,
    postPassEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    prePassStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    region: __expectString,
    satelliteArn: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
    visibilityEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    visibilityStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeEphemerisCommand
 */
export const de_DescribeEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    enabled: __expectBoolean,
    ephemerisId: __expectString,
    invalidReason: __expectString,
    name: __expectString,
    priority: __expectInt32,
    satelliteId: __expectString,
    status: __expectString,
    suppliedData: (_) => _json(__expectUnion(_)),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAgentConfigurationCommand
 */
export const de_GetAgentConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAgentConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentId: __expectString,
    taskingDocument: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfigCommand
 */
export const de_GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configArn: __expectString,
    configData: (_) => de_ConfigTypeData(__expectUnion(_), context),
    configId: __expectString,
    configType: __expectString,
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataflowEndpointGroupCommand
 */
export const de_GetDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contactPostPassDurationSeconds: __expectInt32,
    contactPrePassDurationSeconds: __expectInt32,
    dataflowEndpointGroupArn: __expectString,
    dataflowEndpointGroupId: __expectString,
    endpointsDetails: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMinuteUsageCommand
 */
export const de_GetMinuteUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    estimatedMinutesRemaining: __expectInt32,
    isReservedMinutesCustomer: __expectBoolean,
    totalReservedMinuteAllocation: __expectInt32,
    totalScheduledMinutes: __expectInt32,
    upcomingMinutesScheduled: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMissionProfileCommand
 */
export const de_GetMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contactPostPassDurationSeconds: __expectInt32,
    contactPrePassDurationSeconds: __expectInt32,
    dataflowEdges: _json,
    minimumViableContactDurationSeconds: __expectInt32,
    missionProfileArn: __expectString,
    missionProfileId: __expectString,
    name: __expectString,
    region: __expectString,
    streamsKmsKey: (_) => _json(__expectUnion(_)),
    streamsKmsRole: __expectString,
    tags: _json,
    trackingConfigArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSatelliteCommand
 */
export const de_GetSatelliteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    currentEphemeris: (_) => de_EphemerisMetaData(_, context),
    groundStations: _json,
    noradSatelliteID: __expectInt32,
    satelliteArn: __expectString,
    satelliteId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigsCommand
 */
export const de_ListConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListContactsCommand
 */
export const de_ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contactList: (_) => de_ContactList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDataflowEndpointGroupsCommand
 */
export const de_ListDataflowEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dataflowEndpointGroupList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEphemeridesCommand
 */
export const de_ListEphemeridesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEphemeridesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ephemerides: (_) => de_EphemeridesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGroundStationsCommand
 */
export const de_ListGroundStationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    groundStationList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMissionProfilesCommand
 */
export const de_ListMissionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    missionProfileList: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSatellitesCommand
 */
export const de_ListSatellitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    satellites: (_) => de_SatelliteList(_, context),
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterAgentCommand
 */
export const de_RegisterAgentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterAgentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReserveContactCommand
 */
export const de_ReserveContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    contactId: __expectString,
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
 * deserializeAws_restJson1UpdateAgentStatusCommand
 */
export const de_UpdateAgentStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAgentStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    agentId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigCommand
 */
export const de_UpdateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configArn: __expectString,
    configId: __expectString,
    configType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEphemerisCommand
 */
export const de_UpdateEphemerisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEphemerisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ephemerisId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMissionProfileCommand
 */
export const de_UpdateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    missionProfileId: __expectString,
  });
  Object.assign(contents, doc);
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
    case "DependencyException":
    case "com.amazonaws.groundstation#DependencyException":
      throw await de_DependencyExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.groundstation#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.groundstation#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.groundstation#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DependencyExceptionRes
 */
const de_DependencyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<DependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    parameterName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    parameterName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    parameterName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AgentCpuCoresList omitted.

// se_AgentDetails omitted.

// se_AggregateStatus omitted.

/**
 * serializeAws_restJson1AntennaDownlinkConfig
 */
const se_AntennaDownlinkConfig = (input: AntennaDownlinkConfig, context: __SerdeContext): any => {
  return take(input, {
    spectrumConfig: (_) => se_SpectrumConfig(_, context),
  });
};

/**
 * serializeAws_restJson1AntennaDownlinkDemodDecodeConfig
 */
const se_AntennaDownlinkDemodDecodeConfig = (input: AntennaDownlinkDemodDecodeConfig, context: __SerdeContext): any => {
  return take(input, {
    decodeConfig: _json,
    demodulationConfig: _json,
    spectrumConfig: (_) => se_SpectrumConfig(_, context),
  });
};

/**
 * serializeAws_restJson1AntennaUplinkConfig
 */
const se_AntennaUplinkConfig = (input: AntennaUplinkConfig, context: __SerdeContext): any => {
  return take(input, {
    spectrumConfig: (_) => se_UplinkSpectrumConfig(_, context),
    targetEirp: (_) => se_Eirp(_, context),
    transmitDisabled: [],
  });
};

// se_AwsGroundStationAgentEndpoint omitted.

// se_CapabilityArnList omitted.

// se_CapabilityHealthReasonList omitted.

// se_ComponentStatusData omitted.

// se_ComponentStatusList omitted.

// se_ComponentVersion omitted.

// se_ComponentVersionList omitted.

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
    dataflowEndpointConfig: (value) => ({ dataflowEndpointConfig: _json(value) }),
    s3RecordingConfig: (value) => ({ s3RecordingConfig: _json(value) }),
    trackingConfig: (value) => ({ trackingConfig: _json(value) }),
    uplinkEchoConfig: (value) => ({ uplinkEchoConfig: _json(value) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_ConnectionDetails omitted.

// se_DataflowEdge omitted.

// se_DataflowEdgeList omitted.

// se_DataflowEndpoint omitted.

// se_DataflowEndpointConfig omitted.

// se_DecodeConfig omitted.

// se_DemodulationConfig omitted.

// se_DiscoveryData omitted.

/**
 * serializeAws_restJson1Eirp
 */
const se_Eirp = (input: Eirp, context: __SerdeContext): any => {
  return take(input, {
    units: [],
    value: __serializeFloat,
  });
};

// se_EndpointDetails omitted.

// se_EndpointDetailsList omitted.

/**
 * serializeAws_restJson1EphemerisData
 */
const se_EphemerisData = (input: EphemerisData, context: __SerdeContext): any => {
  return EphemerisData.visit(input, {
    oem: (value) => ({ oem: _json(value) }),
    tle: (value) => ({ tle: se_TLEEphemeris(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_EphemerisStatusList omitted.

/**
 * serializeAws_restJson1Frequency
 */
const se_Frequency = (input: Frequency, context: __SerdeContext): any => {
  return take(input, {
    units: [],
    value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1FrequencyBandwidth
 */
const se_FrequencyBandwidth = (input: FrequencyBandwidth, context: __SerdeContext): any => {
  return take(input, {
    units: [],
    value: __serializeFloat,
  });
};

// se_IntegerRange omitted.

// se_IpAddressList omitted.

// se_KmsKey omitted.

// se_OEMEphemeris omitted.

// se_RangedConnectionDetails omitted.

// se_RangedSocketAddress omitted.

// se_S3Object omitted.

// se_S3RecordingConfig omitted.

// se_SecurityDetails omitted.

// se_SecurityGroupIdList omitted.

// se_SignatureMap omitted.

// se_SocketAddress omitted.

/**
 * serializeAws_restJson1SpectrumConfig
 */
const se_SpectrumConfig = (input: SpectrumConfig, context: __SerdeContext): any => {
  return take(input, {
    bandwidth: (_) => se_FrequencyBandwidth(_, context),
    centerFrequency: (_) => se_Frequency(_, context),
    polarization: [],
  });
};

// se_StatusList omitted.

// se_SubnetList omitted.

// se_TagsMap omitted.

/**
 * serializeAws_restJson1TimeRange
 */
const se_TimeRange = (input: TimeRange, context: __SerdeContext): any => {
  return take(input, {
    endTime: (_) => _.getTime() / 1_000,
    startTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeAws_restJson1TLEData
 */
const se_TLEData = (input: TLEData, context: __SerdeContext): any => {
  return take(input, {
    tleLine1: [],
    tleLine2: [],
    validTimeRange: (_) => se_TimeRange(_, context),
  });
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
  return take(input, {
    s3Object: _json,
    tleData: (_) => se_TLEDataList(_, context),
  });
};

// se_TrackingConfig omitted.

// se_UplinkEchoConfig omitted.

/**
 * serializeAws_restJson1UplinkSpectrumConfig
 */
const se_UplinkSpectrumConfig = (input: UplinkSpectrumConfig, context: __SerdeContext): any => {
  return take(input, {
    centerFrequency: (_) => se_Frequency(_, context),
    polarization: [],
  });
};

// se_VersionStringList omitted.

// de_AntennaDemodDecodeDetails omitted.

/**
 * deserializeAws_restJson1AntennaDownlinkConfig
 */
const de_AntennaDownlinkConfig = (output: any, context: __SerdeContext): AntennaDownlinkConfig => {
  return take(output, {
    spectrumConfig: (_: any) => de_SpectrumConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AntennaDownlinkDemodDecodeConfig
 */
const de_AntennaDownlinkDemodDecodeConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkDemodDecodeConfig => {
  return take(output, {
    decodeConfig: _json,
    demodulationConfig: _json,
    spectrumConfig: (_: any) => de_SpectrumConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AntennaUplinkConfig
 */
const de_AntennaUplinkConfig = (output: any, context: __SerdeContext): AntennaUplinkConfig => {
  return take(output, {
    spectrumConfig: (_: any) => de_UplinkSpectrumConfig(_, context),
    targetEirp: (_: any) => de_Eirp(_, context),
    transmitDisabled: __expectBoolean,
  }) as any;
};

// de_AwsGroundStationAgentEndpoint omitted.

// de_CapabilityHealthReasonList omitted.

// de_ConfigDetails omitted.

// de_ConfigList omitted.

// de_ConfigListItem omitted.

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
      dataflowEndpointConfig: _json(output.dataflowEndpointConfig),
    };
  }
  if (output.s3RecordingConfig != null) {
    return {
      s3RecordingConfig: _json(output.s3RecordingConfig),
    };
  }
  if (output.trackingConfig != null) {
    return {
      trackingConfig: _json(output.trackingConfig),
    };
  }
  if (output.uplinkEchoConfig != null) {
    return {
      uplinkEchoConfig: _json(output.uplinkEchoConfig),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_ConnectionDetails omitted.

/**
 * deserializeAws_restJson1ContactData
 */
const de_ContactData = (output: any, context: __SerdeContext): ContactData => {
  return take(output, {
    contactId: __expectString,
    contactStatus: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errorMessage: __expectString,
    groundStation: __expectString,
    maximumElevation: (_: any) => de_Elevation(_, context),
    missionProfileArn: __expectString,
    postPassEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    prePassStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    region: __expectString,
    satelliteArn: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tags: _json,
    visibilityEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    visibilityStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ContactList
 */
const de_ContactList = (output: any, context: __SerdeContext): ContactData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContactData(entry, context);
    });
  return retVal;
};

// de_DataflowDetail omitted.

// de_DataflowEdge omitted.

// de_DataflowEdgeList omitted.

// de_DataflowEndpoint omitted.

// de_DataflowEndpointConfig omitted.

// de_DataflowEndpointGroupList omitted.

// de_DataflowEndpointListItem omitted.

// de_DataflowList omitted.

// de_DecodeConfig omitted.

// de_DemodulationConfig omitted.

// de_Destination omitted.

/**
 * deserializeAws_restJson1Eirp
 */
const de_Eirp = (output: any, context: __SerdeContext): Eirp => {
  return take(output, {
    units: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1Elevation
 */
const de_Elevation = (output: any, context: __SerdeContext): Elevation => {
  return take(output, {
    unit: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

// de_EndpointDetails omitted.

// de_EndpointDetailsList omitted.

/**
 * deserializeAws_restJson1EphemeridesList
 */
const de_EphemeridesList = (output: any, context: __SerdeContext): EphemerisItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EphemerisItem(entry, context);
    });
  return retVal;
};

// de_EphemerisDescription omitted.

/**
 * deserializeAws_restJson1EphemerisItem
 */
const de_EphemerisItem = (output: any, context: __SerdeContext): EphemerisItem => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    enabled: __expectBoolean,
    ephemerisId: __expectString,
    name: __expectString,
    priority: __expectInt32,
    sourceS3Object: _json,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EphemerisMetaData
 */
const de_EphemerisMetaData = (output: any, context: __SerdeContext): EphemerisMetaData => {
  return take(output, {
    ephemerisId: __expectString,
    epoch: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    source: __expectString,
  }) as any;
};

// de_EphemerisTypeDescription omitted.

/**
 * deserializeAws_restJson1Frequency
 */
const de_Frequency = (output: any, context: __SerdeContext): Frequency => {
  return take(output, {
    units: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1FrequencyBandwidth
 */
const de_FrequencyBandwidth = (output: any, context: __SerdeContext): FrequencyBandwidth => {
  return take(output, {
    units: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

// de_GroundStationData omitted.

// de_GroundStationIdList omitted.

// de_GroundStationList omitted.

// de_IntegerRange omitted.

// de_KmsKey omitted.

// de_MissionProfileList omitted.

// de_MissionProfileListItem omitted.

// de_RangedConnectionDetails omitted.

// de_RangedSocketAddress omitted.

// de_S3Object omitted.

// de_S3RecordingConfig omitted.

// de_S3RecordingDetails omitted.

/**
 * deserializeAws_restJson1SatelliteList
 */
const de_SatelliteList = (output: any, context: __SerdeContext): SatelliteListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SatelliteListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SatelliteListItem
 */
const de_SatelliteListItem = (output: any, context: __SerdeContext): SatelliteListItem => {
  return take(output, {
    currentEphemeris: (_: any) => de_EphemerisMetaData(_, context),
    groundStations: _json,
    noradSatelliteID: __expectInt32,
    satelliteArn: __expectString,
    satelliteId: __expectString,
  }) as any;
};

// de_SecurityDetails omitted.

// de_SecurityGroupIdList omitted.

// de_SocketAddress omitted.

// de_Source omitted.

/**
 * deserializeAws_restJson1SpectrumConfig
 */
const de_SpectrumConfig = (output: any, context: __SerdeContext): SpectrumConfig => {
  return take(output, {
    bandwidth: (_: any) => de_FrequencyBandwidth(_, context),
    centerFrequency: (_: any) => de_Frequency(_, context),
    polarization: __expectString,
  }) as any;
};

// de_SubnetList omitted.

// de_TagsMap omitted.

// de_TrackingConfig omitted.

// de_UplinkEchoConfig omitted.

/**
 * deserializeAws_restJson1UplinkSpectrumConfig
 */
const de_UplinkSpectrumConfig = (output: any, context: __SerdeContext): UplinkSpectrumConfig => {
  return take(output, {
    centerFrequency: (_: any) => de_Frequency(_, context),
    polarization: __expectString,
  }) as any;
};

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

const _mR = "maxResults";
const _nT = "nextToken";
const _sI = "satelliteId";
const _tK = "tagKeys";
