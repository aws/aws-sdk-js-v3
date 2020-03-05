import {
  CancelContactCommandInput,
  CancelContactCommandOutput
} from "../commands/CancelContactCommand";
import {
  CreateConfigCommandInput,
  CreateConfigCommandOutput
} from "../commands/CreateConfigCommand";
import {
  CreateDataflowEndpointGroupCommandInput,
  CreateDataflowEndpointGroupCommandOutput
} from "../commands/CreateDataflowEndpointGroupCommand";
import {
  CreateMissionProfileCommandInput,
  CreateMissionProfileCommandOutput
} from "../commands/CreateMissionProfileCommand";
import {
  DeleteConfigCommandInput,
  DeleteConfigCommandOutput
} from "../commands/DeleteConfigCommand";
import {
  DeleteDataflowEndpointGroupCommandInput,
  DeleteDataflowEndpointGroupCommandOutput
} from "../commands/DeleteDataflowEndpointGroupCommand";
import {
  DeleteMissionProfileCommandInput,
  DeleteMissionProfileCommandOutput
} from "../commands/DeleteMissionProfileCommand";
import {
  DescribeContactCommandInput,
  DescribeContactCommandOutput
} from "../commands/DescribeContactCommand";
import {
  GetConfigCommandInput,
  GetConfigCommandOutput
} from "../commands/GetConfigCommand";
import {
  GetDataflowEndpointGroupCommandInput,
  GetDataflowEndpointGroupCommandOutput
} from "../commands/GetDataflowEndpointGroupCommand";
import {
  GetMinuteUsageCommandInput,
  GetMinuteUsageCommandOutput
} from "../commands/GetMinuteUsageCommand";
import {
  GetMissionProfileCommandInput,
  GetMissionProfileCommandOutput
} from "../commands/GetMissionProfileCommand";
import {
  GetSatelliteCommandInput,
  GetSatelliteCommandOutput
} from "../commands/GetSatelliteCommand";
import {
  ListConfigsCommandInput,
  ListConfigsCommandOutput
} from "../commands/ListConfigsCommand";
import {
  ListContactsCommandInput,
  ListContactsCommandOutput
} from "../commands/ListContactsCommand";
import {
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput
} from "../commands/ListDataflowEndpointGroupsCommand";
import {
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput
} from "../commands/ListGroundStationsCommand";
import {
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput
} from "../commands/ListMissionProfilesCommand";
import {
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput
} from "../commands/ListSatellitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ReserveContactCommandInput,
  ReserveContactCommandOutput
} from "../commands/ReserveContactCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateConfigCommandInput,
  UpdateConfigCommandOutput
} from "../commands/UpdateConfigCommand";
import {
  UpdateMissionProfileCommandInput,
  UpdateMissionProfileCommandOutput
} from "../commands/UpdateMissionProfileCommand";
import {
  AntennaDownlinkConfig,
  AntennaDownlinkDemodDecodeConfig,
  AntennaUplinkConfig,
  ConfigListItem,
  ConfigTypeData,
  ContactData,
  ContactStatus,
  DataflowEndpoint,
  DataflowEndpointConfig,
  DataflowEndpointListItem,
  DecodeConfig,
  DemodulationConfig,
  DependencyException,
  Eirp,
  Elevation,
  EndpointDetails,
  Frequency,
  FrequencyBandwidth,
  GroundStationData,
  InvalidParameterException,
  MissionProfileListItem,
  ResourceNotFoundException,
  SatelliteListItem,
  SecurityDetails,
  SocketAddress,
  SpectrumConfig,
  TrackingConfig,
  UplinkEchoConfig,
  UplinkSpectrumConfig
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CancelContactCommand(
  input: CancelContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/contact/{contactId}";
  if (input.contactId !== undefined) {
    const labelValue: string = input.contactId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: contactId.");
    }
    resolvedPath = resolvedPath.replace(
      "{contactId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: contactId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateConfigCommand(
  input: CreateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/config";
  let body: any;
  const bodyParams: any = {};
  if (input.configData !== undefined) {
    bodyParams["configData"] = serializeAws_restJson1_1ConfigTypeData(
      input.configData,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDataflowEndpointGroupCommand(
  input: CreateDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/dataflowEndpointGroup";
  let body: any;
  const bodyParams: any = {};
  if (input.endpointDetails !== undefined) {
    bodyParams["endpointDetails"] = serializeAws_restJson1_1EndpointDetailsList(
      input.endpointDetails,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateMissionProfileCommand(
  input: CreateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/missionprofile";
  let body: any;
  const bodyParams: any = {};
  if (input.contactPostPassDurationSeconds !== undefined) {
    bodyParams["contactPostPassDurationSeconds"] =
      input.contactPostPassDurationSeconds;
  }
  if (input.contactPrePassDurationSeconds !== undefined) {
    bodyParams["contactPrePassDurationSeconds"] =
      input.contactPrePassDurationSeconds;
  }
  if (input.dataflowEdges !== undefined) {
    bodyParams["dataflowEdges"] = serializeAws_restJson1_1DataflowEdgeList(
      input.dataflowEdges,
      context
    );
  }
  if (input.minimumViableContactDurationSeconds !== undefined) {
    bodyParams["minimumViableContactDurationSeconds"] =
      input.minimumViableContactDurationSeconds;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  if (input.trackingConfigArn !== undefined) {
    bodyParams["trackingConfigArn"] = input.trackingConfigArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteConfigCommand(
  input: DeleteConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/config/{configType}/{configId}";
  if (input.configId !== undefined) {
    const labelValue: string = input.configId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: configId.");
    }
    resolvedPath = resolvedPath.replace(
      "{configId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: configId.");
  }
  if (input.configType !== undefined) {
    const labelValue: string = input.configType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: configType.");
    }
    resolvedPath = resolvedPath.replace(
      "{configType}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: configType.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteDataflowEndpointGroupCommand(
  input: DeleteDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
  if (input.dataflowEndpointGroupId !== undefined) {
    const labelValue: string = input.dataflowEndpointGroupId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: dataflowEndpointGroupId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{dataflowEndpointGroupId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: dataflowEndpointGroupId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteMissionProfileCommand(
  input: DeleteMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/missionprofile/{missionProfileId}";
  if (input.missionProfileId !== undefined) {
    const labelValue: string = input.missionProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: missionProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{missionProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: missionProfileId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeContactCommand(
  input: DescribeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/contact/{contactId}";
  if (input.contactId !== undefined) {
    const labelValue: string = input.contactId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: contactId.");
    }
    resolvedPath = resolvedPath.replace(
      "{contactId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: contactId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetConfigCommand(
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/config/{configType}/{configId}";
  if (input.configId !== undefined) {
    const labelValue: string = input.configId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: configId.");
    }
    resolvedPath = resolvedPath.replace(
      "{configId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: configId.");
  }
  if (input.configType !== undefined) {
    const labelValue: string = input.configType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: configType.");
    }
    resolvedPath = resolvedPath.replace(
      "{configType}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: configType.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDataflowEndpointGroupCommand(
  input: GetDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/dataflowEndpointGroup/{dataflowEndpointGroupId}";
  if (input.dataflowEndpointGroupId !== undefined) {
    const labelValue: string = input.dataflowEndpointGroupId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: dataflowEndpointGroupId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{dataflowEndpointGroupId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: dataflowEndpointGroupId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetMissionProfileCommand(
  input: GetMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/missionprofile/{missionProfileId}";
  if (input.missionProfileId !== undefined) {
    const labelValue: string = input.missionProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: missionProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{missionProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: missionProfileId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListConfigsCommand(
  input: ListConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/config";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListContactsCommand(
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/contacts";
  let body: any;
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.groundStation !== undefined) {
    bodyParams["groundStation"] = input.groundStation;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.missionProfileArn !== undefined) {
    bodyParams["missionProfileArn"] = input.missionProfileArn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.satelliteArn !== undefined) {
    bodyParams["satelliteArn"] = input.satelliteArn;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.statusList !== undefined) {
    bodyParams["statusList"] = serializeAws_restJson1_1StatusList(
      input.statusList,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListDataflowEndpointGroupsCommand(
  input: ListDataflowEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/dataflowEndpointGroup";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListMissionProfilesCommand(
  input: ListMissionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/missionprofile";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ReserveContactCommand(
  input: ReserveContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/contact";
  let body: any;
  const bodyParams: any = {};
  if (input.endTime !== undefined) {
    bodyParams["endTime"] = Math.round(input.endTime.getTime() / 1000);
  }
  if (input.groundStation !== undefined) {
    bodyParams["groundStation"] = input.groundStation;
  }
  if (input.missionProfileArn !== undefined) {
    bodyParams["missionProfileArn"] = input.missionProfileArn;
  }
  if (input.satelliteArn !== undefined) {
    bodyParams["satelliteArn"] = input.satelliteArn;
  }
  if (input.startTime !== undefined) {
    bodyParams["startTime"] = Math.round(input.startTime.getTime() / 1000);
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateConfigCommand(
  input: UpdateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/config/{configType}/{configId}";
  if (input.configId !== undefined) {
    const labelValue: string = input.configId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: configId.");
    }
    resolvedPath = resolvedPath.replace(
      "{configId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: configId.");
  }
  if (input.configType !== undefined) {
    const labelValue: string = input.configType;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: configType.");
    }
    resolvedPath = resolvedPath.replace(
      "{configType}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: configType.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.configData !== undefined) {
    bodyParams["configData"] = serializeAws_restJson1_1ConfigTypeData(
      input.configData,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateMissionProfileCommand(
  input: UpdateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/missionprofile/{missionProfileId}";
  if (input.missionProfileId !== undefined) {
    const labelValue: string = input.missionProfileId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: missionProfileId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{missionProfileId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: missionProfileId."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.contactPostPassDurationSeconds !== undefined) {
    bodyParams["contactPostPassDurationSeconds"] =
      input.contactPostPassDurationSeconds;
  }
  if (input.contactPrePassDurationSeconds !== undefined) {
    bodyParams["contactPrePassDurationSeconds"] =
      input.contactPrePassDurationSeconds;
  }
  if (input.dataflowEdges !== undefined) {
    bodyParams["dataflowEdges"] = serializeAws_restJson1_1DataflowEdgeList(
      input.dataflowEdges,
      context
    );
  }
  if (input.minimumViableContactDurationSeconds !== undefined) {
    bodyParams["minimumViableContactDurationSeconds"] =
      input.minimumViableContactDurationSeconds;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.trackingConfigArn !== undefined) {
    bodyParams["trackingConfigArn"] = input.trackingConfigArn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetMinuteUsageCommand(
  input: GetMinuteUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/minute-usage";
  let body: any;
  const bodyParams: any = {};
  if (input.month !== undefined) {
    bodyParams["month"] = input.month;
  }
  if (input.year !== undefined) {
    bodyParams["year"] = input.year;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetSatelliteCommand(
  input: GetSatelliteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/satellite/{satelliteId}";
  if (input.satelliteId !== undefined) {
    const labelValue: string = input.satelliteId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: satelliteId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{satelliteId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: satelliteId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListGroundStationsCommand(
  input: ListGroundStationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/groundstation";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListSatellitesCommand(
  input: ListSatellitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/satellite";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagsMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function deserializeAws_restJson1_1CancelContactCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelContactCommandError(output, context);
  }
  const contents: CancelContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ContactIdResponse",
    contactId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contactId !== undefined && data.contactId !== null) {
    contents.contactId = data.contactId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CancelContactCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigCommandError(output, context);
  }
  const contents: CreateConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigIdResponse",
    configArn: undefined,
    configId: undefined,
    configType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configArn !== undefined && data.configArn !== null) {
    contents.configArn = data.configArn;
  }
  if (data.configId !== undefined && data.configId !== null) {
    contents.configId = data.configId;
  }
  if (data.configType !== undefined && data.configType !== null) {
    contents.configType = data.configType;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateDataflowEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDataflowEndpointGroupCommandError(
      output,
      context
    );
  }
  const contents: CreateDataflowEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DataflowEndpointGroupIdResponse",
    dataflowEndpointGroupId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.dataflowEndpointGroupId !== undefined &&
    data.dataflowEndpointGroupId !== null
  ) {
    contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDataflowEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateMissionProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMissionProfileCommandError(
      output,
      context
    );
  }
  const contents: CreateMissionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MissionProfileIdResponse",
    missionProfileId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
    contents.missionProfileId = data.missionProfileId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateMissionProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConfigCommandError(output, context);
  }
  const contents: DeleteConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigIdResponse",
    configArn: undefined,
    configId: undefined,
    configType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configArn !== undefined && data.configArn !== null) {
    contents.configArn = data.configArn;
  }
  if (data.configId !== undefined && data.configId !== null) {
    contents.configId = data.configId;
  }
  if (data.configType !== undefined && data.configType !== null) {
    contents.configType = data.configType;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommandError(
      output,
      context
    );
  }
  const contents: DeleteDataflowEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DataflowEndpointGroupIdResponse",
    dataflowEndpointGroupId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.dataflowEndpointGroupId !== undefined &&
    data.dataflowEndpointGroupId !== null
  ) {
    contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteMissionProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMissionProfileCommandError(
      output,
      context
    );
  }
  const contents: DeleteMissionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MissionProfileIdResponse",
    missionProfileId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
    contents.missionProfileId = data.missionProfileId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteMissionProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DescribeContactCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeContactCommandError(
      output,
      context
    );
  }
  const contents: DescribeContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeContactResponse",
    contactId: undefined,
    contactStatus: undefined,
    endTime: undefined,
    errorMessage: undefined,
    groundStation: undefined,
    maximumElevation: undefined,
    missionProfileArn: undefined,
    postPassEndTime: undefined,
    prePassStartTime: undefined,
    satelliteArn: undefined,
    startTime: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contactId !== undefined && data.contactId !== null) {
    contents.contactId = data.contactId;
  }
  if (data.contactStatus !== undefined && data.contactStatus !== null) {
    contents.contactStatus = data.contactStatus;
  }
  if (data.endTime !== undefined && data.endTime !== null) {
    contents.endTime = new Date(Math.round(data.endTime * 1000));
  }
  if (data.errorMessage !== undefined && data.errorMessage !== null) {
    contents.errorMessage = data.errorMessage;
  }
  if (data.groundStation !== undefined && data.groundStation !== null) {
    contents.groundStation = data.groundStation;
  }
  if (data.maximumElevation !== undefined && data.maximumElevation !== null) {
    contents.maximumElevation = deserializeAws_restJson1_1Elevation(
      data.maximumElevation,
      context
    );
  }
  if (data.missionProfileArn !== undefined && data.missionProfileArn !== null) {
    contents.missionProfileArn = data.missionProfileArn;
  }
  if (data.postPassEndTime !== undefined && data.postPassEndTime !== null) {
    contents.postPassEndTime = new Date(
      Math.round(data.postPassEndTime * 1000)
    );
  }
  if (data.prePassStartTime !== undefined && data.prePassStartTime !== null) {
    contents.prePassStartTime = new Date(
      Math.round(data.prePassStartTime * 1000)
    );
  }
  if (data.satelliteArn !== undefined && data.satelliteArn !== null) {
    contents.satelliteArn = data.satelliteArn;
  }
  if (data.startTime !== undefined && data.startTime !== null) {
    contents.startTime = new Date(Math.round(data.startTime * 1000));
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeContactCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConfigCommandError(output, context);
  }
  const contents: GetConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConfigResponse",
    configArn: undefined,
    configData: undefined,
    configId: undefined,
    configType: undefined,
    name: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configArn !== undefined && data.configArn !== null) {
    contents.configArn = data.configArn;
  }
  if (data.configData !== undefined && data.configData !== null) {
    contents.configData = deserializeAws_restJson1_1ConfigTypeData(
      data.configData,
      context
    );
  }
  if (data.configId !== undefined && data.configId !== null) {
    contents.configId = data.configId;
  }
  if (data.configType !== undefined && data.configType !== null) {
    contents.configType = data.configType;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetDataflowEndpointGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDataflowEndpointGroupCommandError(
      output,
      context
    );
  }
  const contents: GetDataflowEndpointGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataflowEndpointGroupResponse",
    dataflowEndpointGroupArn: undefined,
    dataflowEndpointGroupId: undefined,
    endpointsDetails: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.dataflowEndpointGroupArn !== undefined &&
    data.dataflowEndpointGroupArn !== null
  ) {
    contents.dataflowEndpointGroupArn = data.dataflowEndpointGroupArn;
  }
  if (
    data.dataflowEndpointGroupId !== undefined &&
    data.dataflowEndpointGroupId !== null
  ) {
    contents.dataflowEndpointGroupId = data.dataflowEndpointGroupId;
  }
  if (data.endpointsDetails !== undefined && data.endpointsDetails !== null) {
    contents.endpointsDetails = deserializeAws_restJson1_1EndpointDetailsList(
      data.endpointsDetails,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDataflowEndpointGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetMissionProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMissionProfileCommandError(
      output,
      context
    );
  }
  const contents: GetMissionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMissionProfileResponse",
    contactPostPassDurationSeconds: undefined,
    contactPrePassDurationSeconds: undefined,
    dataflowEdges: undefined,
    minimumViableContactDurationSeconds: undefined,
    missionProfileArn: undefined,
    missionProfileId: undefined,
    name: undefined,
    region: undefined,
    tags: undefined,
    trackingConfigArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.contactPostPassDurationSeconds !== undefined &&
    data.contactPostPassDurationSeconds !== null
  ) {
    contents.contactPostPassDurationSeconds =
      data.contactPostPassDurationSeconds;
  }
  if (
    data.contactPrePassDurationSeconds !== undefined &&
    data.contactPrePassDurationSeconds !== null
  ) {
    contents.contactPrePassDurationSeconds = data.contactPrePassDurationSeconds;
  }
  if (data.dataflowEdges !== undefined && data.dataflowEdges !== null) {
    contents.dataflowEdges = deserializeAws_restJson1_1DataflowEdgeList(
      data.dataflowEdges,
      context
    );
  }
  if (
    data.minimumViableContactDurationSeconds !== undefined &&
    data.minimumViableContactDurationSeconds !== null
  ) {
    contents.minimumViableContactDurationSeconds =
      data.minimumViableContactDurationSeconds;
  }
  if (data.missionProfileArn !== undefined && data.missionProfileArn !== null) {
    contents.missionProfileArn = data.missionProfileArn;
  }
  if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
    contents.missionProfileId = data.missionProfileId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.region !== undefined && data.region !== null) {
    contents.region = data.region;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  if (data.trackingConfigArn !== undefined && data.trackingConfigArn !== null) {
    contents.trackingConfigArn = data.trackingConfigArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMissionProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListConfigsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigsCommandError(output, context);
  }
  const contents: ListConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigsResponse",
    configList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configList !== undefined && data.configList !== null) {
    contents.configList = deserializeAws_restJson1_1ConfigList(
      data.configList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListContactsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListContactsCommandError(output, context);
  }
  const contents: ListContactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListContactsResponse",
    contactList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contactList !== undefined && data.contactList !== null) {
    contents.contactList = deserializeAws_restJson1_1ContactList(
      data.contactList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListContactsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListDataflowEndpointGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDataflowEndpointGroupsCommandError(
      output,
      context
    );
  }
  const contents: ListDataflowEndpointGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDataflowEndpointGroupsResponse",
    dataflowEndpointGroupList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.dataflowEndpointGroupList !== undefined &&
    data.dataflowEndpointGroupList !== null
  ) {
    contents.dataflowEndpointGroupList = deserializeAws_restJson1_1DataflowEndpointGroupList(
      data.dataflowEndpointGroupList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDataflowEndpointGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListMissionProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMissionProfilesCommandError(
      output,
      context
    );
  }
  const contents: ListMissionProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMissionProfilesResponse",
    missionProfileList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.missionProfileList !== undefined &&
    data.missionProfileList !== null
  ) {
    contents.missionProfileList = deserializeAws_restJson1_1MissionProfileList(
      data.missionProfileList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMissionProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ReserveContactCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ReserveContactCommandError(
      output,
      context
    );
  }
  const contents: ReserveContactCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ContactIdResponse",
    contactId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.contactId !== undefined && data.contactId !== null) {
    contents.contactId = data.contactId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ReserveContactCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateConfigCommandError(output, context);
  }
  const contents: UpdateConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigIdResponse",
    configArn: undefined,
    configId: undefined,
    configType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configArn !== undefined && data.configArn !== null) {
    contents.configArn = data.configArn;
  }
  if (data.configId !== undefined && data.configId !== null) {
    contents.configId = data.configId;
  }
  if (data.configType !== undefined && data.configType !== null) {
    contents.configType = data.configType;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateMissionProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateMissionProfileCommandError(
      output,
      context
    );
  }
  const contents: UpdateMissionProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MissionProfileIdResponse",
    missionProfileId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.missionProfileId !== undefined && data.missionProfileId !== null) {
    contents.missionProfileId = data.missionProfileId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateMissionProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetMinuteUsageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetMinuteUsageCommandError(
      output,
      context
    );
  }
  const contents: GetMinuteUsageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMinuteUsageResponse",
    estimatedMinutesRemaining: undefined,
    isReservedMinutesCustomer: undefined,
    totalReservedMinuteAllocation: undefined,
    totalScheduledMinutes: undefined,
    upcomingMinutesScheduled: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.estimatedMinutesRemaining !== undefined &&
    data.estimatedMinutesRemaining !== null
  ) {
    contents.estimatedMinutesRemaining = data.estimatedMinutesRemaining;
  }
  if (
    data.isReservedMinutesCustomer !== undefined &&
    data.isReservedMinutesCustomer !== null
  ) {
    contents.isReservedMinutesCustomer = data.isReservedMinutesCustomer;
  }
  if (
    data.totalReservedMinuteAllocation !== undefined &&
    data.totalReservedMinuteAllocation !== null
  ) {
    contents.totalReservedMinuteAllocation = data.totalReservedMinuteAllocation;
  }
  if (
    data.totalScheduledMinutes !== undefined &&
    data.totalScheduledMinutes !== null
  ) {
    contents.totalScheduledMinutes = data.totalScheduledMinutes;
  }
  if (
    data.upcomingMinutesScheduled !== undefined &&
    data.upcomingMinutesScheduled !== null
  ) {
    contents.upcomingMinutesScheduled = data.upcomingMinutesScheduled;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetMinuteUsageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSatelliteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSatelliteCommandError(output, context);
  }
  const contents: GetSatelliteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSatelliteResponse",
    dateCreated: undefined,
    lastUpdated: undefined,
    noradSatelliteID: undefined,
    satelliteArn: undefined,
    satelliteId: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.dateCreated !== undefined && data.dateCreated !== null) {
    contents.dateCreated = new Date(Math.round(data.dateCreated * 1000));
  }
  if (data.lastUpdated !== undefined && data.lastUpdated !== null) {
    contents.lastUpdated = new Date(Math.round(data.lastUpdated * 1000));
  }
  if (data.noradSatelliteID !== undefined && data.noradSatelliteID !== null) {
    contents.noradSatelliteID = data.noradSatelliteID;
  }
  if (data.satelliteArn !== undefined && data.satelliteArn !== null) {
    contents.satelliteArn = data.satelliteArn;
  }
  if (data.satelliteId !== undefined && data.satelliteId !== null) {
    contents.satelliteId = data.satelliteId;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSatelliteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListGroundStationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListGroundStationsCommandError(
      output,
      context
    );
  }
  const contents: ListGroundStationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListGroundStationsResponse",
    groundStationList: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.groundStationList !== undefined && data.groundStationList !== null) {
    contents.groundStationList = deserializeAws_restJson1_1GroundStationList(
      data.groundStationList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListGroundStationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListSatellitesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSatellitesCommandError(
      output,
      context
    );
  }
  const contents: ListSatellitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSatellitesResponse",
    nextToken: undefined,
    satellites: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.satellites !== undefined && data.satellites !== null) {
    contents.satellites = deserializeAws_restJson1_1SatelliteList(
      data.satellites,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSatellitesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1DependencyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyException> => {
  const contents: DependencyException = {
    name: "DependencyException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined,
    parameterName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.parameterName !== undefined && data.parameterName !== null) {
    contents.parameterName = data.parameterName;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    parameterName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.parameterName !== undefined && data.parameterName !== null) {
    contents.parameterName = data.parameterName;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AntennaDownlinkConfig = (
  input: AntennaDownlinkConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.spectrumConfig !== undefined) {
    bodyParams["spectrumConfig"] = serializeAws_restJson1_1SpectrumConfig(
      input.spectrumConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig = (
  input: AntennaDownlinkDemodDecodeConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.decodeConfig !== undefined) {
    bodyParams["decodeConfig"] = serializeAws_restJson1_1DecodeConfig(
      input.decodeConfig,
      context
    );
  }
  if (input.demodulationConfig !== undefined) {
    bodyParams[
      "demodulationConfig"
    ] = serializeAws_restJson1_1DemodulationConfig(
      input.demodulationConfig,
      context
    );
  }
  if (input.spectrumConfig !== undefined) {
    bodyParams["spectrumConfig"] = serializeAws_restJson1_1SpectrumConfig(
      input.spectrumConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1AntennaUplinkConfig = (
  input: AntennaUplinkConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.spectrumConfig !== undefined) {
    bodyParams["spectrumConfig"] = serializeAws_restJson1_1UplinkSpectrumConfig(
      input.spectrumConfig,
      context
    );
  }
  if (input.targetEirp !== undefined) {
    bodyParams["targetEirp"] = serializeAws_restJson1_1Eirp(
      input.targetEirp,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ConfigTypeData = (
  input: ConfigTypeData,
  context: __SerdeContext
): any => {
  return ConfigTypeData.visit(input, {
    antennaDownlinkConfig: value =>
      serializeAws_restJson1_1AntennaDownlinkConfig(value, context),
    antennaDownlinkDemodDecodeConfig: value =>
      serializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig(value, context),
    antennaUplinkConfig: value =>
      serializeAws_restJson1_1AntennaUplinkConfig(value, context),
    dataflowEndpointConfig: value =>
      serializeAws_restJson1_1DataflowEndpointConfig(value, context),
    trackingConfig: value =>
      serializeAws_restJson1_1TrackingConfig(value, context),
    uplinkEchoConfig: value =>
      serializeAws_restJson1_1UplinkEchoConfig(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1DataflowEdge = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1DataflowEdgeList = (
  input: Array<Array<string>>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1DataflowEdge(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1DataflowEndpoint = (
  input: DataflowEndpoint,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.address !== undefined) {
    bodyParams["address"] = serializeAws_restJson1_1SocketAddress(
      input.address,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DataflowEndpointConfig = (
  input: DataflowEndpointConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.dataflowEndpointName !== undefined) {
    bodyParams["dataflowEndpointName"] = input.dataflowEndpointName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DecodeConfig = (
  input: DecodeConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.unvalidatedJSON !== undefined) {
    bodyParams["unvalidatedJSON"] = input.unvalidatedJSON;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DemodulationConfig = (
  input: DemodulationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.unvalidatedJSON !== undefined) {
    bodyParams["unvalidatedJSON"] = input.unvalidatedJSON;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EndpointDetails = (
  input: EndpointDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.endpoint !== undefined) {
    bodyParams["endpoint"] = serializeAws_restJson1_1DataflowEndpoint(
      input.endpoint,
      context
    );
  }
  if (input.securityDetails !== undefined) {
    bodyParams["securityDetails"] = serializeAws_restJson1_1SecurityDetails(
      input.securityDetails,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EndpointDetailsList = (
  input: Array<EndpointDetails>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1EndpointDetails(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1StatusList = (
  input: Array<ContactStatus | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TrackingConfig = (
  input: TrackingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.autotrack !== undefined) {
    bodyParams["autotrack"] = input.autotrack;
  }
  return bodyParams;
};

const serializeAws_restJson1_1UplinkEchoConfig = (
  input: UplinkEchoConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.antennaUplinkConfigArn !== undefined) {
    bodyParams["antennaUplinkConfigArn"] = input.antennaUplinkConfigArn;
  }
  if (input.enabled !== undefined) {
    bodyParams["enabled"] = input.enabled;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Eirp = (
  input: Eirp,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.units !== undefined) {
    bodyParams["units"] = input.units;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Frequency = (
  input: Frequency,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.units !== undefined) {
    bodyParams["units"] = input.units;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1FrequencyBandwidth = (
  input: FrequencyBandwidth,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.units !== undefined) {
    bodyParams["units"] = input.units;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecurityDetails = (
  input: SecurityDetails,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.securityGroupIds !== undefined) {
    bodyParams[
      "securityGroupIds"
    ] = serializeAws_restJson1_1SecurityGroupIdList(
      input.securityGroupIds,
      context
    );
  }
  if (input.subnetIds !== undefined) {
    bodyParams["subnetIds"] = serializeAws_restJson1_1SubnetList(
      input.subnetIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecurityGroupIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SocketAddress = (
  input: SocketAddress,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.port !== undefined) {
    bodyParams["port"] = input.port;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SpectrumConfig = (
  input: SpectrumConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bandwidth !== undefined) {
    bodyParams["bandwidth"] = serializeAws_restJson1_1FrequencyBandwidth(
      input.bandwidth,
      context
    );
  }
  if (input.centerFrequency !== undefined) {
    bodyParams["centerFrequency"] = serializeAws_restJson1_1Frequency(
      input.centerFrequency,
      context
    );
  }
  if (input.polarization !== undefined) {
    bodyParams["polarization"] = input.polarization;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SubnetList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1UplinkSpectrumConfig = (
  input: UplinkSpectrumConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.centerFrequency !== undefined) {
    bodyParams["centerFrequency"] = serializeAws_restJson1_1Frequency(
      input.centerFrequency,
      context
    );
  }
  if (input.polarization !== undefined) {
    bodyParams["polarization"] = input.polarization;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AntennaDownlinkConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkConfig => {
  let contents: any = {
    __type: "AntennaDownlinkConfig",
    spectrumConfig: undefined
  };
  if (output.spectrumConfig !== undefined && output.spectrumConfig !== null) {
    contents.spectrumConfig = deserializeAws_restJson1_1SpectrumConfig(
      output.spectrumConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkDemodDecodeConfig => {
  let contents: any = {
    __type: "AntennaDownlinkDemodDecodeConfig",
    decodeConfig: undefined,
    demodulationConfig: undefined,
    spectrumConfig: undefined
  };
  if (output.decodeConfig !== undefined && output.decodeConfig !== null) {
    contents.decodeConfig = deserializeAws_restJson1_1DecodeConfig(
      output.decodeConfig,
      context
    );
  }
  if (
    output.demodulationConfig !== undefined &&
    output.demodulationConfig !== null
  ) {
    contents.demodulationConfig = deserializeAws_restJson1_1DemodulationConfig(
      output.demodulationConfig,
      context
    );
  }
  if (output.spectrumConfig !== undefined && output.spectrumConfig !== null) {
    contents.spectrumConfig = deserializeAws_restJson1_1SpectrumConfig(
      output.spectrumConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AntennaUplinkConfig = (
  output: any,
  context: __SerdeContext
): AntennaUplinkConfig => {
  let contents: any = {
    __type: "AntennaUplinkConfig",
    spectrumConfig: undefined,
    targetEirp: undefined
  };
  if (output.spectrumConfig !== undefined && output.spectrumConfig !== null) {
    contents.spectrumConfig = deserializeAws_restJson1_1UplinkSpectrumConfig(
      output.spectrumConfig,
      context
    );
  }
  if (output.targetEirp !== undefined && output.targetEirp !== null) {
    contents.targetEirp = deserializeAws_restJson1_1Eirp(
      output.targetEirp,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigList = (
  output: any,
  context: __SerdeContext
): Array<ConfigListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ConfigListItem(entry, context)
  );
};

const deserializeAws_restJson1_1ConfigListItem = (
  output: any,
  context: __SerdeContext
): ConfigListItem => {
  let contents: any = {
    __type: "ConfigListItem",
    configArn: undefined,
    configId: undefined,
    configType: undefined,
    name: undefined
  };
  if (output.configArn !== undefined && output.configArn !== null) {
    contents.configArn = output.configArn;
  }
  if (output.configId !== undefined && output.configId !== null) {
    contents.configId = output.configId;
  }
  if (output.configType !== undefined && output.configType !== null) {
    contents.configType = output.configType;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigTypeData = (
  output: any,
  context: __SerdeContext
): ConfigTypeData => {
  if (
    output.antennaDownlinkConfig !== undefined &&
    output.antennaDownlinkConfig !== null
  ) {
    return {
      antennaDownlinkConfig: deserializeAws_restJson1_1AntennaDownlinkConfig(
        output.antennaDownlinkConfig,
        context
      )
    };
  }
  if (
    output.antennaDownlinkDemodDecodeConfig !== undefined &&
    output.antennaDownlinkDemodDecodeConfig !== null
  ) {
    return {
      antennaDownlinkDemodDecodeConfig: deserializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig(
        output.antennaDownlinkDemodDecodeConfig,
        context
      )
    };
  }
  if (
    output.antennaUplinkConfig !== undefined &&
    output.antennaUplinkConfig !== null
  ) {
    return {
      antennaUplinkConfig: deserializeAws_restJson1_1AntennaUplinkConfig(
        output.antennaUplinkConfig,
        context
      )
    };
  }
  if (
    output.dataflowEndpointConfig !== undefined &&
    output.dataflowEndpointConfig !== null
  ) {
    return {
      dataflowEndpointConfig: deserializeAws_restJson1_1DataflowEndpointConfig(
        output.dataflowEndpointConfig,
        context
      )
    };
  }
  if (output.trackingConfig !== undefined && output.trackingConfig !== null) {
    return {
      trackingConfig: deserializeAws_restJson1_1TrackingConfig(
        output.trackingConfig,
        context
      )
    };
  }
  if (
    output.uplinkEchoConfig !== undefined &&
    output.uplinkEchoConfig !== null
  ) {
    return {
      uplinkEchoConfig: deserializeAws_restJson1_1UplinkEchoConfig(
        output.uplinkEchoConfig,
        context
      )
    };
  }
  const key = Object.keys(output)[0];
  return { $unknown: [key, output[key]] };
};

const deserializeAws_restJson1_1ContactData = (
  output: any,
  context: __SerdeContext
): ContactData => {
  let contents: any = {
    __type: "ContactData",
    contactId: undefined,
    contactStatus: undefined,
    endTime: undefined,
    errorMessage: undefined,
    groundStation: undefined,
    maximumElevation: undefined,
    missionProfileArn: undefined,
    postPassEndTime: undefined,
    prePassStartTime: undefined,
    satelliteArn: undefined,
    startTime: undefined,
    tags: undefined
  };
  if (output.contactId !== undefined && output.contactId !== null) {
    contents.contactId = output.contactId;
  }
  if (output.contactStatus !== undefined && output.contactStatus !== null) {
    contents.contactStatus = output.contactStatus;
  }
  if (output.endTime !== undefined && output.endTime !== null) {
    contents.endTime = new Date(Math.round(output.endTime * 1000));
  }
  if (output.errorMessage !== undefined && output.errorMessage !== null) {
    contents.errorMessage = output.errorMessage;
  }
  if (output.groundStation !== undefined && output.groundStation !== null) {
    contents.groundStation = output.groundStation;
  }
  if (
    output.maximumElevation !== undefined &&
    output.maximumElevation !== null
  ) {
    contents.maximumElevation = deserializeAws_restJson1_1Elevation(
      output.maximumElevation,
      context
    );
  }
  if (
    output.missionProfileArn !== undefined &&
    output.missionProfileArn !== null
  ) {
    contents.missionProfileArn = output.missionProfileArn;
  }
  if (output.postPassEndTime !== undefined && output.postPassEndTime !== null) {
    contents.postPassEndTime = new Date(
      Math.round(output.postPassEndTime * 1000)
    );
  }
  if (
    output.prePassStartTime !== undefined &&
    output.prePassStartTime !== null
  ) {
    contents.prePassStartTime = new Date(
      Math.round(output.prePassStartTime * 1000)
    );
  }
  if (output.satelliteArn !== undefined && output.satelliteArn !== null) {
    contents.satelliteArn = output.satelliteArn;
  }
  if (output.startTime !== undefined && output.startTime !== null) {
    contents.startTime = new Date(Math.round(output.startTime * 1000));
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagsMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ContactList = (
  output: any,
  context: __SerdeContext
): Array<ContactData> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ContactData(entry, context)
  );
};

const deserializeAws_restJson1_1DataflowEdge = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DataflowEdgeList = (
  output: any,
  context: __SerdeContext
): Array<Array<string>> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataflowEdge(entry, context)
  );
};

const deserializeAws_restJson1_1DataflowEndpoint = (
  output: any,
  context: __SerdeContext
): DataflowEndpoint => {
  let contents: any = {
    __type: "DataflowEndpoint",
    address: undefined,
    name: undefined,
    status: undefined
  };
  if (output.address !== undefined && output.address !== null) {
    contents.address = deserializeAws_restJson1_1SocketAddress(
      output.address,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1DataflowEndpointConfig = (
  output: any,
  context: __SerdeContext
): DataflowEndpointConfig => {
  let contents: any = {
    __type: "DataflowEndpointConfig",
    dataflowEndpointName: undefined
  };
  if (
    output.dataflowEndpointName !== undefined &&
    output.dataflowEndpointName !== null
  ) {
    contents.dataflowEndpointName = output.dataflowEndpointName;
  }
  return contents;
};

const deserializeAws_restJson1_1DataflowEndpointGroupList = (
  output: any,
  context: __SerdeContext
): Array<DataflowEndpointListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataflowEndpointListItem(entry, context)
  );
};

const deserializeAws_restJson1_1DataflowEndpointListItem = (
  output: any,
  context: __SerdeContext
): DataflowEndpointListItem => {
  let contents: any = {
    __type: "DataflowEndpointListItem",
    dataflowEndpointGroupArn: undefined,
    dataflowEndpointGroupId: undefined
  };
  if (
    output.dataflowEndpointGroupArn !== undefined &&
    output.dataflowEndpointGroupArn !== null
  ) {
    contents.dataflowEndpointGroupArn = output.dataflowEndpointGroupArn;
  }
  if (
    output.dataflowEndpointGroupId !== undefined &&
    output.dataflowEndpointGroupId !== null
  ) {
    contents.dataflowEndpointGroupId = output.dataflowEndpointGroupId;
  }
  return contents;
};

const deserializeAws_restJson1_1DecodeConfig = (
  output: any,
  context: __SerdeContext
): DecodeConfig => {
  let contents: any = {
    __type: "DecodeConfig",
    unvalidatedJSON: undefined
  };
  if (output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null) {
    contents.unvalidatedJSON = output.unvalidatedJSON;
  }
  return contents;
};

const deserializeAws_restJson1_1DemodulationConfig = (
  output: any,
  context: __SerdeContext
): DemodulationConfig => {
  let contents: any = {
    __type: "DemodulationConfig",
    unvalidatedJSON: undefined
  };
  if (output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null) {
    contents.unvalidatedJSON = output.unvalidatedJSON;
  }
  return contents;
};

const deserializeAws_restJson1_1EndpointDetails = (
  output: any,
  context: __SerdeContext
): EndpointDetails => {
  let contents: any = {
    __type: "EndpointDetails",
    endpoint: undefined,
    securityDetails: undefined
  };
  if (output.endpoint !== undefined && output.endpoint !== null) {
    contents.endpoint = deserializeAws_restJson1_1DataflowEndpoint(
      output.endpoint,
      context
    );
  }
  if (output.securityDetails !== undefined && output.securityDetails !== null) {
    contents.securityDetails = deserializeAws_restJson1_1SecurityDetails(
      output.securityDetails,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EndpointDetailsList = (
  output: any,
  context: __SerdeContext
): Array<EndpointDetails> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EndpointDetails(entry, context)
  );
};

const deserializeAws_restJson1_1MissionProfileList = (
  output: any,
  context: __SerdeContext
): Array<MissionProfileListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MissionProfileListItem(entry, context)
  );
};

const deserializeAws_restJson1_1MissionProfileListItem = (
  output: any,
  context: __SerdeContext
): MissionProfileListItem => {
  let contents: any = {
    __type: "MissionProfileListItem",
    missionProfileArn: undefined,
    missionProfileId: undefined,
    name: undefined,
    region: undefined
  };
  if (
    output.missionProfileArn !== undefined &&
    output.missionProfileArn !== null
  ) {
    contents.missionProfileArn = output.missionProfileArn;
  }
  if (
    output.missionProfileId !== undefined &&
    output.missionProfileId !== null
  ) {
    contents.missionProfileId = output.missionProfileId;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  return contents;
};

const deserializeAws_restJson1_1TrackingConfig = (
  output: any,
  context: __SerdeContext
): TrackingConfig => {
  let contents: any = {
    __type: "TrackingConfig",
    autotrack: undefined
  };
  if (output.autotrack !== undefined && output.autotrack !== null) {
    contents.autotrack = output.autotrack;
  }
  return contents;
};

const deserializeAws_restJson1_1UplinkEchoConfig = (
  output: any,
  context: __SerdeContext
): UplinkEchoConfig => {
  let contents: any = {
    __type: "UplinkEchoConfig",
    antennaUplinkConfigArn: undefined,
    enabled: undefined
  };
  if (
    output.antennaUplinkConfigArn !== undefined &&
    output.antennaUplinkConfigArn !== null
  ) {
    contents.antennaUplinkConfigArn = output.antennaUplinkConfigArn;
  }
  if (output.enabled !== undefined && output.enabled !== null) {
    contents.enabled = output.enabled;
  }
  return contents;
};

const deserializeAws_restJson1_1Eirp = (
  output: any,
  context: __SerdeContext
): Eirp => {
  let contents: any = {
    __type: "Eirp",
    units: undefined,
    value: undefined
  };
  if (output.units !== undefined && output.units !== null) {
    contents.units = output.units;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1Elevation = (
  output: any,
  context: __SerdeContext
): Elevation => {
  let contents: any = {
    __type: "Elevation",
    unit: undefined,
    value: undefined
  };
  if (output.unit !== undefined && output.unit !== null) {
    contents.unit = output.unit;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1Frequency = (
  output: any,
  context: __SerdeContext
): Frequency => {
  let contents: any = {
    __type: "Frequency",
    units: undefined,
    value: undefined
  };
  if (output.units !== undefined && output.units !== null) {
    contents.units = output.units;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1FrequencyBandwidth = (
  output: any,
  context: __SerdeContext
): FrequencyBandwidth => {
  let contents: any = {
    __type: "FrequencyBandwidth",
    units: undefined,
    value: undefined
  };
  if (output.units !== undefined && output.units !== null) {
    contents.units = output.units;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1GroundStationData = (
  output: any,
  context: __SerdeContext
): GroundStationData => {
  let contents: any = {
    __type: "GroundStationData",
    groundStationId: undefined,
    groundStationName: undefined,
    region: undefined
  };
  if (output.groundStationId !== undefined && output.groundStationId !== null) {
    contents.groundStationId = output.groundStationId;
  }
  if (
    output.groundStationName !== undefined &&
    output.groundStationName !== null
  ) {
    contents.groundStationName = output.groundStationName;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  return contents;
};

const deserializeAws_restJson1_1GroundStationList = (
  output: any,
  context: __SerdeContext
): Array<GroundStationData> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GroundStationData(entry, context)
  );
};

const deserializeAws_restJson1_1SatelliteList = (
  output: any,
  context: __SerdeContext
): Array<SatelliteListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SatelliteListItem(entry, context)
  );
};

const deserializeAws_restJson1_1SatelliteListItem = (
  output: any,
  context: __SerdeContext
): SatelliteListItem => {
  let contents: any = {
    __type: "SatelliteListItem",
    noradSatelliteID: undefined,
    satelliteArn: undefined,
    satelliteId: undefined
  };
  if (
    output.noradSatelliteID !== undefined &&
    output.noradSatelliteID !== null
  ) {
    contents.noradSatelliteID = output.noradSatelliteID;
  }
  if (output.satelliteArn !== undefined && output.satelliteArn !== null) {
    contents.satelliteArn = output.satelliteArn;
  }
  if (output.satelliteId !== undefined && output.satelliteId !== null) {
    contents.satelliteId = output.satelliteId;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityDetails = (
  output: any,
  context: __SerdeContext
): SecurityDetails => {
  let contents: any = {
    __type: "SecurityDetails",
    roleArn: undefined,
    securityGroupIds: undefined,
    subnetIds: undefined
  };
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (
    output.securityGroupIds !== undefined &&
    output.securityGroupIds !== null
  ) {
    contents.securityGroupIds = deserializeAws_restJson1_1SecurityGroupIdList(
      output.securityGroupIds,
      context
    );
  }
  if (output.subnetIds !== undefined && output.subnetIds !== null) {
    contents.subnetIds = deserializeAws_restJson1_1SubnetList(
      output.subnetIds,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SocketAddress = (
  output: any,
  context: __SerdeContext
): SocketAddress => {
  let contents: any = {
    __type: "SocketAddress",
    name: undefined,
    port: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.port !== undefined && output.port !== null) {
    contents.port = output.port;
  }
  return contents;
};

const deserializeAws_restJson1_1SpectrumConfig = (
  output: any,
  context: __SerdeContext
): SpectrumConfig => {
  let contents: any = {
    __type: "SpectrumConfig",
    bandwidth: undefined,
    centerFrequency: undefined,
    polarization: undefined
  };
  if (output.bandwidth !== undefined && output.bandwidth !== null) {
    contents.bandwidth = deserializeAws_restJson1_1FrequencyBandwidth(
      output.bandwidth,
      context
    );
  }
  if (output.centerFrequency !== undefined && output.centerFrequency !== null) {
    contents.centerFrequency = deserializeAws_restJson1_1Frequency(
      output.centerFrequency,
      context
    );
  }
  if (output.polarization !== undefined && output.polarization !== null) {
    contents.polarization = output.polarization;
  }
  return contents;
};

const deserializeAws_restJson1_1SubnetList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1UplinkSpectrumConfig = (
  output: any,
  context: __SerdeContext
): UplinkSpectrumConfig => {
  let contents: any = {
    __type: "UplinkSpectrumConfig",
    centerFrequency: undefined,
    polarization: undefined
  };
  if (output.centerFrequency !== undefined && output.centerFrequency !== null) {
    contents.centerFrequency = deserializeAws_restJson1_1Frequency(
      output.centerFrequency,
      context
    );
  }
  if (output.polarization !== undefined && output.polarization !== null) {
    contents.polarization = output.polarization;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
