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

export const serializeAws_restJson1_1CancelContactCommand = async (
  input: CancelContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateConfigCommand = async (
  input: CreateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/config";
  let body: any;
  body = JSON.stringify({
    ...(input.configData !== undefined && {
      configData: serializeAws_restJson1_1ConfigTypeData(
        input.configData,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagsMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateDataflowEndpointGroupCommand = async (
  input: CreateDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/dataflowEndpointGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.endpointDetails !== undefined && {
      endpointDetails: serializeAws_restJson1_1EndpointDetailsList(
        input.endpointDetails,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagsMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateMissionProfileCommand = async (
  input: CreateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/missionprofile";
  let body: any;
  body = JSON.stringify({
    ...(input.contactPostPassDurationSeconds !== undefined && {
      contactPostPassDurationSeconds: input.contactPostPassDurationSeconds
    }),
    ...(input.contactPrePassDurationSeconds !== undefined && {
      contactPrePassDurationSeconds: input.contactPrePassDurationSeconds
    }),
    ...(input.dataflowEdges !== undefined && {
      dataflowEdges: serializeAws_restJson1_1DataflowEdgeList(
        input.dataflowEdges,
        context
      )
    }),
    ...(input.minimumViableContactDurationSeconds !== undefined && {
      minimumViableContactDurationSeconds:
        input.minimumViableContactDurationSeconds
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagsMap(input.tags, context)
    }),
    ...(input.trackingConfigArn !== undefined && {
      trackingConfigArn: input.trackingConfigArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteConfigCommand = async (
  input: DeleteConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteDataflowEndpointGroupCommand = async (
  input: DeleteDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteMissionProfileCommand = async (
  input: DeleteMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeContactCommand = async (
  input: DescribeContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetConfigCommand = async (
  input: GetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetDataflowEndpointGroupCommand = async (
  input: GetDataflowEndpointGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetMissionProfileCommand = async (
  input: GetMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListConfigsCommand = async (
  input: ListConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/config";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListContactsCommand = async (
  input: ListContactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/contacts";
  let body: any;
  body = JSON.stringify({
    ...(input.endTime !== undefined && {
      endTime: Math.round(input.endTime.getTime() / 1000)
    }),
    ...(input.groundStation !== undefined && {
      groundStation: input.groundStation
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.missionProfileArn !== undefined && {
      missionProfileArn: input.missionProfileArn
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.satelliteArn !== undefined && {
      satelliteArn: input.satelliteArn
    }),
    ...(input.startTime !== undefined && {
      startTime: Math.round(input.startTime.getTime() / 1000)
    }),
    ...(input.statusList !== undefined && {
      statusList: serializeAws_restJson1_1StatusList(input.statusList, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListDataflowEndpointGroupsCommand = async (
  input: ListDataflowEndpointGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/dataflowEndpointGroup";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListMissionProfilesCommand = async (
  input: ListMissionProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/missionprofile";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ReserveContactCommand = async (
  input: ReserveContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/contact";
  let body: any;
  body = JSON.stringify({
    ...(input.endTime !== undefined && {
      endTime: Math.round(input.endTime.getTime() / 1000)
    }),
    ...(input.groundStation !== undefined && {
      groundStation: input.groundStation
    }),
    ...(input.missionProfileArn !== undefined && {
      missionProfileArn: input.missionProfileArn
    }),
    ...(input.satelliteArn !== undefined && {
      satelliteArn: input.satelliteArn
    }),
    ...(input.startTime !== undefined && {
      startTime: Math.round(input.startTime.getTime() / 1000)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagsMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateConfigCommand = async (
  input: UpdateConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.configData !== undefined && {
      configData: serializeAws_restJson1_1ConfigTypeData(
        input.configData,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateMissionProfileCommand = async (
  input: UpdateMissionProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.contactPostPassDurationSeconds !== undefined && {
      contactPostPassDurationSeconds: input.contactPostPassDurationSeconds
    }),
    ...(input.contactPrePassDurationSeconds !== undefined && {
      contactPrePassDurationSeconds: input.contactPrePassDurationSeconds
    }),
    ...(input.dataflowEdges !== undefined && {
      dataflowEdges: serializeAws_restJson1_1DataflowEdgeList(
        input.dataflowEdges,
        context
      )
    }),
    ...(input.minimumViableContactDurationSeconds !== undefined && {
      minimumViableContactDurationSeconds:
        input.minimumViableContactDurationSeconds
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.trackingConfigArn !== undefined && {
      trackingConfigArn: input.trackingConfigArn
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetMinuteUsageCommand = async (
  input: GetMinuteUsageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/minute-usage";
  let body: any;
  body = JSON.stringify({
    ...(input.month !== undefined && { month: input.month }),
    ...(input.year !== undefined && { year: input.year })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetSatelliteCommand = async (
  input: GetSatelliteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListGroundStationsCommand = async (
  input: ListGroundStationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/groundstation";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListSatellitesCommand = async (
  input: ListSatellitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/satellite";
  const query: any = {
    ...(input.maxResults !== undefined && {
      maxResults: input.maxResults.toString()
    }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagsMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.tagKeys !== undefined && {
      tagKeys: (input.tagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const deserializeAws_restJson1_1CancelContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> => {
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
};

const deserializeAws_restJson1_1CancelContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1CreateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1CreateDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateDataflowEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataflowEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1CreateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> => {
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
};

const deserializeAws_restJson1_1CreateMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1DeleteConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteDataflowEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataflowEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1DeleteMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> => {
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
};

const deserializeAws_restJson1_1DeleteMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1DescribeContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
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
};

const deserializeAws_restJson1_1DescribeContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1GetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1GetDataflowEndpointGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetDataflowEndpointGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataflowEndpointGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1GetMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListContactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListContactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListDataflowEndpointGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListDataflowEndpointGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataflowEndpointGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListMissionProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListMissionProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMissionProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ReserveContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> => {
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
};

const deserializeAws_restJson1_1ReserveContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReserveContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1UpdateConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1UpdateMissionProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> => {
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
};

const deserializeAws_restJson1_1UpdateMissionProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMissionProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1GetMinuteUsageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetMinuteUsageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMinuteUsageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1GetSatelliteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> => {
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
};

const deserializeAws_restJson1_1GetSatelliteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSatelliteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListGroundStationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListGroundStationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGroundStationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListSatellitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListSatellitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSatellitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#DependencyException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.awsgsaascontrolplanelambda.r20190311#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

const deserializeAws_restJson1_1DependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyException> => {
  const contents: DependencyException = {
    name: "DependencyException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    parameterName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.parameterName !== undefined && data.parameterName !== null) {
    contents.parameterName = data.parameterName;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    parameterName: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.parameterName !== undefined && data.parameterName !== null) {
    contents.parameterName = data.parameterName;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AntennaDownlinkConfig = (
  input: AntennaDownlinkConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.spectrumConfig !== undefined && {
      spectrumConfig: serializeAws_restJson1_1SpectrumConfig(
        input.spectrumConfig,
        context
      )
    })
  };
};

const serializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig = (
  input: AntennaDownlinkDemodDecodeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.decodeConfig !== undefined && {
      decodeConfig: serializeAws_restJson1_1DecodeConfig(
        input.decodeConfig,
        context
      )
    }),
    ...(input.demodulationConfig !== undefined && {
      demodulationConfig: serializeAws_restJson1_1DemodulationConfig(
        input.demodulationConfig,
        context
      )
    }),
    ...(input.spectrumConfig !== undefined && {
      spectrumConfig: serializeAws_restJson1_1SpectrumConfig(
        input.spectrumConfig,
        context
      )
    })
  };
};

const serializeAws_restJson1_1AntennaUplinkConfig = (
  input: AntennaUplinkConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.spectrumConfig !== undefined && {
      spectrumConfig: serializeAws_restJson1_1UplinkSpectrumConfig(
        input.spectrumConfig,
        context
      )
    }),
    ...(input.targetEirp !== undefined && {
      targetEirp: serializeAws_restJson1_1Eirp(input.targetEirp, context)
    })
  };
};

const serializeAws_restJson1_1ConfigTypeData = (
  input: ConfigTypeData,
  context: __SerdeContext
): any => {
  return ConfigTypeData.visit(input, {
    antennaDownlinkConfig: value => ({
      antennaDownlinkConfig: serializeAws_restJson1_1AntennaDownlinkConfig(
        value,
        context
      )
    }),
    antennaDownlinkDemodDecodeConfig: value => ({
      antennaDownlinkDemodDecodeConfig: serializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig(
        value,
        context
      )
    }),
    antennaUplinkConfig: value => ({
      antennaUplinkConfig: serializeAws_restJson1_1AntennaUplinkConfig(
        value,
        context
      )
    }),
    dataflowEndpointConfig: value => ({
      dataflowEndpointConfig: serializeAws_restJson1_1DataflowEndpointConfig(
        value,
        context
      )
    }),
    trackingConfig: value => ({
      trackingConfig: serializeAws_restJson1_1TrackingConfig(value, context)
    }),
    uplinkEchoConfig: value => ({
      uplinkEchoConfig: serializeAws_restJson1_1UplinkEchoConfig(value, context)
    }),
    _: (name, value) => ({ name: value } as any)
  });
};

const serializeAws_restJson1_1DataflowEdge = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1DataflowEdgeList = (
  input: string[][],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1DataflowEdge(entry, context)
  );
};

const serializeAws_restJson1_1DataflowEndpoint = (
  input: DataflowEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.address !== undefined && {
      address: serializeAws_restJson1_1SocketAddress(input.address, context)
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_restJson1_1DataflowEndpointConfig = (
  input: DataflowEndpointConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.dataflowEndpointName !== undefined && {
      dataflowEndpointName: input.dataflowEndpointName
    })
  };
};

const serializeAws_restJson1_1DecodeConfig = (
  input: DecodeConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.unvalidatedJSON !== undefined && {
      unvalidatedJSON: input.unvalidatedJSON
    })
  };
};

const serializeAws_restJson1_1DemodulationConfig = (
  input: DemodulationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.unvalidatedJSON !== undefined && {
      unvalidatedJSON: input.unvalidatedJSON
    })
  };
};

const serializeAws_restJson1_1EndpointDetails = (
  input: EndpointDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.endpoint !== undefined && {
      endpoint: serializeAws_restJson1_1DataflowEndpoint(
        input.endpoint,
        context
      )
    }),
    ...(input.securityDetails !== undefined && {
      securityDetails: serializeAws_restJson1_1SecurityDetails(
        input.securityDetails,
        context
      )
    })
  };
};

const serializeAws_restJson1_1EndpointDetailsList = (
  input: EndpointDetails[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1EndpointDetails(entry, context)
  );
};

const serializeAws_restJson1_1StatusList = (
  input: (ContactStatus | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TrackingConfig = (
  input: TrackingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.autotrack !== undefined && { autotrack: input.autotrack })
  };
};

const serializeAws_restJson1_1UplinkEchoConfig = (
  input: UplinkEchoConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.antennaUplinkConfigArn !== undefined && {
      antennaUplinkConfigArn: input.antennaUplinkConfigArn
    }),
    ...(input.enabled !== undefined && { enabled: input.enabled })
  };
};

const serializeAws_restJson1_1Eirp = (
  input: Eirp,
  context: __SerdeContext
): any => {
  return {
    ...(input.units !== undefined && { units: input.units }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1Frequency = (
  input: Frequency,
  context: __SerdeContext
): any => {
  return {
    ...(input.units !== undefined && { units: input.units }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1FrequencyBandwidth = (
  input: FrequencyBandwidth,
  context: __SerdeContext
): any => {
  return {
    ...(input.units !== undefined && { units: input.units }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1SecurityDetails = (
  input: SecurityDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.securityGroupIds !== undefined && {
      securityGroupIds: serializeAws_restJson1_1SecurityGroupIdList(
        input.securityGroupIds,
        context
      )
    }),
    ...(input.subnetIds !== undefined && {
      subnetIds: serializeAws_restJson1_1SubnetList(input.subnetIds, context)
    })
  };
};

const serializeAws_restJson1_1SecurityGroupIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1SocketAddress = (
  input: SocketAddress,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.port !== undefined && { port: input.port })
  };
};

const serializeAws_restJson1_1SpectrumConfig = (
  input: SpectrumConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.bandwidth !== undefined && {
      bandwidth: serializeAws_restJson1_1FrequencyBandwidth(
        input.bandwidth,
        context
      )
    }),
    ...(input.centerFrequency !== undefined && {
      centerFrequency: serializeAws_restJson1_1Frequency(
        input.centerFrequency,
        context
      )
    }),
    ...(input.polarization !== undefined && {
      polarization: input.polarization
    })
  };
};

const serializeAws_restJson1_1SubnetList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagsMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1_1UplinkSpectrumConfig = (
  input: UplinkSpectrumConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.centerFrequency !== undefined && {
      centerFrequency: serializeAws_restJson1_1Frequency(
        input.centerFrequency,
        context
      )
    }),
    ...(input.polarization !== undefined && {
      polarization: input.polarization
    })
  };
};

const deserializeAws_restJson1_1AntennaDownlinkConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkConfig => {
  return {
    __type: "AntennaDownlinkConfig",
    spectrumConfig:
      output.spectrumConfig !== undefined && output.spectrumConfig !== null
        ? deserializeAws_restJson1_1SpectrumConfig(
            output.spectrumConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AntennaDownlinkDemodDecodeConfig = (
  output: any,
  context: __SerdeContext
): AntennaDownlinkDemodDecodeConfig => {
  return {
    __type: "AntennaDownlinkDemodDecodeConfig",
    decodeConfig:
      output.decodeConfig !== undefined && output.decodeConfig !== null
        ? deserializeAws_restJson1_1DecodeConfig(output.decodeConfig, context)
        : undefined,
    demodulationConfig:
      output.demodulationConfig !== undefined &&
      output.demodulationConfig !== null
        ? deserializeAws_restJson1_1DemodulationConfig(
            output.demodulationConfig,
            context
          )
        : undefined,
    spectrumConfig:
      output.spectrumConfig !== undefined && output.spectrumConfig !== null
        ? deserializeAws_restJson1_1SpectrumConfig(
            output.spectrumConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AntennaUplinkConfig = (
  output: any,
  context: __SerdeContext
): AntennaUplinkConfig => {
  return {
    __type: "AntennaUplinkConfig",
    spectrumConfig:
      output.spectrumConfig !== undefined && output.spectrumConfig !== null
        ? deserializeAws_restJson1_1UplinkSpectrumConfig(
            output.spectrumConfig,
            context
          )
        : undefined,
    targetEirp:
      output.targetEirp !== undefined && output.targetEirp !== null
        ? deserializeAws_restJson1_1Eirp(output.targetEirp, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ConfigList = (
  output: any,
  context: __SerdeContext
): ConfigListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ConfigListItem(entry, context)
  );
};

const deserializeAws_restJson1_1ConfigListItem = (
  output: any,
  context: __SerdeContext
): ConfigListItem => {
  return {
    __type: "ConfigListItem",
    configArn:
      output.configArn !== undefined && output.configArn !== null
        ? output.configArn
        : undefined,
    configId:
      output.configId !== undefined && output.configId !== null
        ? output.configId
        : undefined,
    configType:
      output.configType !== undefined && output.configType !== null
        ? output.configType
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
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
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1ContactData = (
  output: any,
  context: __SerdeContext
): ContactData => {
  return {
    __type: "ContactData",
    contactId:
      output.contactId !== undefined && output.contactId !== null
        ? output.contactId
        : undefined,
    contactStatus:
      output.contactStatus !== undefined && output.contactStatus !== null
        ? output.contactStatus
        : undefined,
    endTime:
      output.endTime !== undefined && output.endTime !== null
        ? new Date(Math.round(output.endTime * 1000))
        : undefined,
    errorMessage:
      output.errorMessage !== undefined && output.errorMessage !== null
        ? output.errorMessage
        : undefined,
    groundStation:
      output.groundStation !== undefined && output.groundStation !== null
        ? output.groundStation
        : undefined,
    maximumElevation:
      output.maximumElevation !== undefined && output.maximumElevation !== null
        ? deserializeAws_restJson1_1Elevation(output.maximumElevation, context)
        : undefined,
    missionProfileArn:
      output.missionProfileArn !== undefined &&
      output.missionProfileArn !== null
        ? output.missionProfileArn
        : undefined,
    postPassEndTime:
      output.postPassEndTime !== undefined && output.postPassEndTime !== null
        ? new Date(Math.round(output.postPassEndTime * 1000))
        : undefined,
    prePassStartTime:
      output.prePassStartTime !== undefined && output.prePassStartTime !== null
        ? new Date(Math.round(output.prePassStartTime * 1000))
        : undefined,
    satelliteArn:
      output.satelliteArn !== undefined && output.satelliteArn !== null
        ? output.satelliteArn
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? new Date(Math.round(output.startTime * 1000))
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1_1TagsMap(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ContactList = (
  output: any,
  context: __SerdeContext
): ContactData[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ContactData(entry, context)
  );
};

const deserializeAws_restJson1_1DataflowEdge = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DataflowEdgeList = (
  output: any,
  context: __SerdeContext
): string[][] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataflowEdge(entry, context)
  );
};

const deserializeAws_restJson1_1DataflowEndpoint = (
  output: any,
  context: __SerdeContext
): DataflowEndpoint => {
  return {
    __type: "DataflowEndpoint",
    address:
      output.address !== undefined && output.address !== null
        ? deserializeAws_restJson1_1SocketAddress(output.address, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DataflowEndpointConfig = (
  output: any,
  context: __SerdeContext
): DataflowEndpointConfig => {
  return {
    __type: "DataflowEndpointConfig",
    dataflowEndpointName:
      output.dataflowEndpointName !== undefined &&
      output.dataflowEndpointName !== null
        ? output.dataflowEndpointName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DataflowEndpointGroupList = (
  output: any,
  context: __SerdeContext
): DataflowEndpointListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataflowEndpointListItem(entry, context)
  );
};

const deserializeAws_restJson1_1DataflowEndpointListItem = (
  output: any,
  context: __SerdeContext
): DataflowEndpointListItem => {
  return {
    __type: "DataflowEndpointListItem",
    dataflowEndpointGroupArn:
      output.dataflowEndpointGroupArn !== undefined &&
      output.dataflowEndpointGroupArn !== null
        ? output.dataflowEndpointGroupArn
        : undefined,
    dataflowEndpointGroupId:
      output.dataflowEndpointGroupId !== undefined &&
      output.dataflowEndpointGroupId !== null
        ? output.dataflowEndpointGroupId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DecodeConfig = (
  output: any,
  context: __SerdeContext
): DecodeConfig => {
  return {
    __type: "DecodeConfig",
    unvalidatedJSON:
      output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null
        ? output.unvalidatedJSON
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DemodulationConfig = (
  output: any,
  context: __SerdeContext
): DemodulationConfig => {
  return {
    __type: "DemodulationConfig",
    unvalidatedJSON:
      output.unvalidatedJSON !== undefined && output.unvalidatedJSON !== null
        ? output.unvalidatedJSON
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EndpointDetails = (
  output: any,
  context: __SerdeContext
): EndpointDetails => {
  return {
    __type: "EndpointDetails",
    endpoint:
      output.endpoint !== undefined && output.endpoint !== null
        ? deserializeAws_restJson1_1DataflowEndpoint(output.endpoint, context)
        : undefined,
    securityDetails:
      output.securityDetails !== undefined && output.securityDetails !== null
        ? deserializeAws_restJson1_1SecurityDetails(
            output.securityDetails,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EndpointDetailsList = (
  output: any,
  context: __SerdeContext
): EndpointDetails[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EndpointDetails(entry, context)
  );
};

const deserializeAws_restJson1_1MissionProfileList = (
  output: any,
  context: __SerdeContext
): MissionProfileListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MissionProfileListItem(entry, context)
  );
};

const deserializeAws_restJson1_1MissionProfileListItem = (
  output: any,
  context: __SerdeContext
): MissionProfileListItem => {
  return {
    __type: "MissionProfileListItem",
    missionProfileArn:
      output.missionProfileArn !== undefined &&
      output.missionProfileArn !== null
        ? output.missionProfileArn
        : undefined,
    missionProfileId:
      output.missionProfileId !== undefined && output.missionProfileId !== null
        ? output.missionProfileId
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TrackingConfig = (
  output: any,
  context: __SerdeContext
): TrackingConfig => {
  return {
    __type: "TrackingConfig",
    autotrack:
      output.autotrack !== undefined && output.autotrack !== null
        ? output.autotrack
        : undefined
  } as any;
};

const deserializeAws_restJson1_1UplinkEchoConfig = (
  output: any,
  context: __SerdeContext
): UplinkEchoConfig => {
  return {
    __type: "UplinkEchoConfig",
    antennaUplinkConfigArn:
      output.antennaUplinkConfigArn !== undefined &&
      output.antennaUplinkConfigArn !== null
        ? output.antennaUplinkConfigArn
        : undefined,
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Eirp = (
  output: any,
  context: __SerdeContext
): Eirp => {
  return {
    __type: "Eirp",
    units:
      output.units !== undefined && output.units !== null
        ? output.units
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Elevation = (
  output: any,
  context: __SerdeContext
): Elevation => {
  return {
    __type: "Elevation",
    unit:
      output.unit !== undefined && output.unit !== null
        ? output.unit
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Frequency = (
  output: any,
  context: __SerdeContext
): Frequency => {
  return {
    __type: "Frequency",
    units:
      output.units !== undefined && output.units !== null
        ? output.units
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FrequencyBandwidth = (
  output: any,
  context: __SerdeContext
): FrequencyBandwidth => {
  return {
    __type: "FrequencyBandwidth",
    units:
      output.units !== undefined && output.units !== null
        ? output.units
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GroundStationData = (
  output: any,
  context: __SerdeContext
): GroundStationData => {
  return {
    __type: "GroundStationData",
    groundStationId:
      output.groundStationId !== undefined && output.groundStationId !== null
        ? output.groundStationId
        : undefined,
    groundStationName:
      output.groundStationName !== undefined &&
      output.groundStationName !== null
        ? output.groundStationName
        : undefined,
    region:
      output.region !== undefined && output.region !== null
        ? output.region
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GroundStationList = (
  output: any,
  context: __SerdeContext
): GroundStationData[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GroundStationData(entry, context)
  );
};

const deserializeAws_restJson1_1SatelliteList = (
  output: any,
  context: __SerdeContext
): SatelliteListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SatelliteListItem(entry, context)
  );
};

const deserializeAws_restJson1_1SatelliteListItem = (
  output: any,
  context: __SerdeContext
): SatelliteListItem => {
  return {
    __type: "SatelliteListItem",
    noradSatelliteID:
      output.noradSatelliteID !== undefined && output.noradSatelliteID !== null
        ? output.noradSatelliteID
        : undefined,
    satelliteArn:
      output.satelliteArn !== undefined && output.satelliteArn !== null
        ? output.satelliteArn
        : undefined,
    satelliteId:
      output.satelliteId !== undefined && output.satelliteId !== null
        ? output.satelliteId
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SecurityDetails = (
  output: any,
  context: __SerdeContext
): SecurityDetails => {
  return {
    __type: "SecurityDetails",
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_restJson1_1SecurityGroupIdList(
            output.securityGroupIds,
            context
          )
        : undefined,
    subnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_restJson1_1SubnetList(output.subnetIds, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SecurityGroupIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SocketAddress = (
  output: any,
  context: __SerdeContext
): SocketAddress => {
  return {
    __type: "SocketAddress",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    port:
      output.port !== undefined && output.port !== null
        ? output.port
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SpectrumConfig = (
  output: any,
  context: __SerdeContext
): SpectrumConfig => {
  return {
    __type: "SpectrumConfig",
    bandwidth:
      output.bandwidth !== undefined && output.bandwidth !== null
        ? deserializeAws_restJson1_1FrequencyBandwidth(
            output.bandwidth,
            context
          )
        : undefined,
    centerFrequency:
      output.centerFrequency !== undefined && output.centerFrequency !== null
        ? deserializeAws_restJson1_1Frequency(output.centerFrequency, context)
        : undefined,
    polarization:
      output.polarization !== undefined && output.polarization !== null
        ? output.polarization
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SubnetList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1_1UplinkSpectrumConfig = (
  output: any,
  context: __SerdeContext
): UplinkSpectrumConfig => {
  return {
    __type: "UplinkSpectrumConfig",
    centerFrequency:
      output.centerFrequency !== undefined && output.centerFrequency !== null
        ? deserializeAws_restJson1_1Frequency(output.centerFrequency, context)
        : undefined,
    polarization:
      output.polarization !== undefined && output.polarization !== null
        ? output.polarization
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
