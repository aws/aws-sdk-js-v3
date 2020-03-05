import {
  AddFlowOutputsCommandInput,
  AddFlowOutputsCommandOutput
} from "../commands/AddFlowOutputsCommand";
import {
  CreateFlowCommandInput,
  CreateFlowCommandOutput
} from "../commands/CreateFlowCommand";
import {
  DeleteFlowCommandInput,
  DeleteFlowCommandOutput
} from "../commands/DeleteFlowCommand";
import {
  DescribeFlowCommandInput,
  DescribeFlowCommandOutput
} from "../commands/DescribeFlowCommand";
import {
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput
} from "../commands/GrantFlowEntitlementsCommand";
import {
  ListEntitlementsCommandInput,
  ListEntitlementsCommandOutput
} from "../commands/ListEntitlementsCommand";
import {
  ListFlowsCommandInput,
  ListFlowsCommandOutput
} from "../commands/ListFlowsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  RemoveFlowOutputCommandInput,
  RemoveFlowOutputCommandOutput
} from "../commands/RemoveFlowOutputCommand";
import {
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput
} from "../commands/RevokeFlowEntitlementCommand";
import {
  StartFlowCommandInput,
  StartFlowCommandOutput
} from "../commands/StartFlowCommand";
import {
  StopFlowCommandInput,
  StopFlowCommandOutput
} from "../commands/StopFlowCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput
} from "../commands/UpdateFlowEntitlementCommand";
import {
  UpdateFlowOutputCommandInput,
  UpdateFlowOutputCommandOutput
} from "../commands/UpdateFlowOutputCommand";
import {
  UpdateFlowSourceCommandInput,
  UpdateFlowSourceCommandOutput
} from "../commands/UpdateFlowSourceCommand";
import {
  AddFlowOutputs420Exception,
  AddOutputRequest,
  BadRequestException,
  CreateFlow420Exception,
  Encryption,
  Entitlement,
  Flow,
  ForbiddenException,
  GrantEntitlementRequest,
  GrantFlowEntitlements420Exception,
  InternalServerErrorException,
  ListedEntitlement,
  ListedFlow,
  Messages,
  NotFoundException,
  Output,
  ServiceUnavailableException,
  SetSourceRequest,
  Source,
  TooManyRequestsException,
  Transport,
  UpdateEncryption
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

export async function serializeAws_restJson1_1AddFlowOutputsCommand(
  input: AddFlowOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/flows/{FlowArn}/outputs";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Outputs !== undefined) {
    bodyParams["outputs"] = serializeAws_restJson1_1__listOfAddOutputRequest(
      input.Outputs,
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

export async function serializeAws_restJson1_1CreateFlowCommand(
  input: CreateFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/flows";
  let body: any;
  const bodyParams: any = {};
  if (input.AvailabilityZone !== undefined) {
    bodyParams["availabilityZone"] = input.AvailabilityZone;
  }
  if (input.Entitlements !== undefined) {
    bodyParams[
      "entitlements"
    ] = serializeAws_restJson1_1__listOfGrantEntitlementRequest(
      input.Entitlements,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Outputs !== undefined) {
    bodyParams["outputs"] = serializeAws_restJson1_1__listOfAddOutputRequest(
      input.Outputs,
      context
    );
  }
  if (input.Source !== undefined) {
    bodyParams["source"] = serializeAws_restJson1_1SetSourceRequest(
      input.Source,
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

export async function serializeAws_restJson1_1DeleteFlowCommand(
  input: DeleteFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeFlowCommand(
  input: DescribeFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GrantFlowEntitlementsCommand(
  input: GrantFlowEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/flows/{FlowArn}/entitlements";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Entitlements !== undefined) {
    bodyParams[
      "entitlements"
    ] = serializeAws_restJson1_1__listOfGrantEntitlementRequest(
      input.Entitlements,
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

export async function serializeAws_restJson1_1ListEntitlementsCommand(
  input: ListEntitlementsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/entitlements";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListFlowsCommand(
  input: ListFlowsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RemoveFlowOutputCommand(
  input: RemoveFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.OutputArn !== undefined) {
    const labelValue: string = input.OutputArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutputArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{OutputArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OutputArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RevokeFlowEntitlementCommand(
  input: RevokeFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  if (input.EntitlementArn !== undefined) {
    const labelValue: string = input.EntitlementArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EntitlementArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EntitlementArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EntitlementArn.");
  }
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StartFlowCommand(
  input: StartFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows/start/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1StopFlowCommand(
  input: StopFlowCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/flows/stop/{FlowArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
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
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
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

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
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

export async function serializeAws_restJson1_1UpdateFlowEntitlementCommand(
  input: UpdateFlowEntitlementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/flows/{FlowArn}/entitlements/{EntitlementArn}";
  if (input.EntitlementArn !== undefined) {
    const labelValue: string = input.EntitlementArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EntitlementArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EntitlementArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: EntitlementArn.");
  }
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1UpdateEncryption(
      input.Encryption,
      context
    );
  }
  if (input.Subscribers !== undefined) {
    bodyParams["subscribers"] = serializeAws_restJson1_1__listOf__string(
      input.Subscribers,
      context
    );
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

export async function serializeAws_restJson1_1UpdateFlowOutputCommand(
  input: UpdateFlowOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/flows/{FlowArn}/outputs/{OutputArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.OutputArn !== undefined) {
    const labelValue: string = input.OutputArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutputArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{OutputArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: OutputArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.CidrAllowList !== undefined) {
    bodyParams["cidrAllowList"] = serializeAws_restJson1_1__listOf__string(
      input.CidrAllowList,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1UpdateEncryption(
      input.Encryption,
      context
    );
  }
  if (input.MaxLatency !== undefined) {
    bodyParams["maxLatency"] = input.MaxLatency;
  }
  if (input.Port !== undefined) {
    bodyParams["port"] = input.Port;
  }
  if (input.Protocol !== undefined) {
    bodyParams["protocol"] = input.Protocol;
  }
  if (input.RemoteId !== undefined) {
    bodyParams["remoteId"] = input.RemoteId;
  }
  if (input.SmoothingLatency !== undefined) {
    bodyParams["smoothingLatency"] = input.SmoothingLatency;
  }
  if (input.StreamId !== undefined) {
    bodyParams["streamId"] = input.StreamId;
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

export async function serializeAws_restJson1_1UpdateFlowSourceCommand(
  input: UpdateFlowSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/flows/{FlowArn}/source/{SourceArn}";
  if (input.FlowArn !== undefined) {
    const labelValue: string = input.FlowArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: FlowArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{FlowArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FlowArn.");
  }
  if (input.SourceArn !== undefined) {
    const labelValue: string = input.SourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SourceArn.");
    }
    resolvedPath = resolvedPath.replace(
      "{SourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Decryption !== undefined) {
    bodyParams["decryption"] = serializeAws_restJson1_1UpdateEncryption(
      input.Decryption,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.EntitlementArn !== undefined) {
    bodyParams["entitlementArn"] = input.EntitlementArn;
  }
  if (input.IngestPort !== undefined) {
    bodyParams["ingestPort"] = input.IngestPort;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MaxLatency !== undefined) {
    bodyParams["maxLatency"] = input.MaxLatency;
  }
  if (input.Protocol !== undefined) {
    bodyParams["protocol"] = input.Protocol;
  }
  if (input.StreamId !== undefined) {
    bodyParams["streamId"] = input.StreamId;
  }
  if (input.WhitelistCidr !== undefined) {
    bodyParams["whitelistCidr"] = input.WhitelistCidr;
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

export async function deserializeAws_restJson1_1AddFlowOutputsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddFlowOutputsCommandError(
      output,
      context
    );
  }
  const contents: AddFlowOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddFlowOutputsResponse",
    FlowArn: undefined,
    Outputs: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.outputs !== undefined && data.outputs !== null) {
    contents.Outputs = deserializeAws_restJson1_1__listOfOutput(
      data.outputs,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AddFlowOutputsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddFlowOutputsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AddFlowOutputs420Exception":
    case "com.amazonaws.mediaconnect#AddFlowOutputs420Exception":
      response = {
        ...(await deserializeAws_restJson1_1AddFlowOutputs420ExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateFlowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFlowCommandError(output, context);
  }
  const contents: CreateFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFlowResponse",
    Flow: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flow !== undefined && data.flow !== null) {
    contents.Flow = deserializeAws_restJson1_1Flow(data.flow, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFlowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CreateFlow420Exception":
    case "com.amazonaws.mediaconnect#CreateFlow420Exception":
      response = {
        ...(await deserializeAws_restJson1_1CreateFlow420ExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteFlowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFlowCommandError(output, context);
  }
  const contents: DeleteFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFlowResponse",
    FlowArn: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFlowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeFlowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeFlowCommandError(output, context);
  }
  const contents: DescribeFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFlowResponse",
    Flow: undefined,
    Messages: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flow !== undefined && data.flow !== null) {
    contents.Flow = deserializeAws_restJson1_1Flow(data.flow, context);
  }
  if (data.messages !== undefined && data.messages !== null) {
    contents.Messages = deserializeAws_restJson1_1Messages(
      data.messages,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeFlowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1GrantFlowEntitlementsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GrantFlowEntitlementsCommandError(
      output,
      context
    );
  }
  const contents: GrantFlowEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GrantFlowEntitlementsResponse",
    Entitlements: undefined,
    FlowArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlements !== undefined && data.entitlements !== null) {
    contents.Entitlements = deserializeAws_restJson1_1__listOfEntitlement(
      data.entitlements,
      context
    );
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GrantFlowEntitlementsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantFlowEntitlementsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GrantFlowEntitlements420Exception":
    case "com.amazonaws.mediaconnect#GrantFlowEntitlements420Exception":
      response = {
        ...(await deserializeAws_restJson1_1GrantFlowEntitlements420ExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListEntitlementsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListEntitlementsCommandError(
      output,
      context
    );
  }
  const contents: ListEntitlementsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEntitlementsResponse",
    Entitlements: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlements !== undefined && data.entitlements !== null) {
    contents.Entitlements = deserializeAws_restJson1_1__listOfListedEntitlement(
      data.entitlements,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListEntitlementsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEntitlementsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1ListFlowsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFlowsCommandError(output, context);
  }
  const contents: ListFlowsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFlowsResponse",
    Flows: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flows !== undefined && data.flows !== null) {
    contents.Flows = deserializeAws_restJson1_1__listOfListedFlow(
      data.flows,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFlowsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
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
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1RemoveFlowOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveFlowOutputCommandError(
      output,
      context
    );
  }
  const contents: RemoveFlowOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveFlowOutputResponse",
    FlowArn: undefined,
    OutputArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.outputArn !== undefined && data.outputArn !== null) {
    contents.OutputArn = data.outputArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RemoveFlowOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveFlowOutputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1RevokeFlowEntitlementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RevokeFlowEntitlementCommandError(
      output,
      context
    );
  }
  const contents: RevokeFlowEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RevokeFlowEntitlementResponse",
    EntitlementArn: undefined,
    FlowArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlementArn !== undefined && data.entitlementArn !== null) {
    contents.EntitlementArn = data.entitlementArn;
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RevokeFlowEntitlementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeFlowEntitlementCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1StartFlowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartFlowCommandError(output, context);
  }
  const contents: StartFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartFlowResponse",
    FlowArn: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartFlowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartFlowCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1StopFlowCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopFlowCommandError(output, context);
  }
  const contents: StopFlowCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopFlowResponse",
    FlowArn: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.Status = data.status;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopFlowCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopFlowCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateFlowEntitlementCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFlowEntitlementCommandError(
      output,
      context
    );
  }
  const contents: UpdateFlowEntitlementCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFlowEntitlementResponse",
    Entitlement: undefined,
    FlowArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.entitlement !== undefined && data.entitlement !== null) {
    contents.Entitlement = deserializeAws_restJson1_1Entitlement(
      data.entitlement,
      context
    );
  }
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFlowEntitlementCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowEntitlementCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateFlowOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFlowOutputCommandError(
      output,
      context
    );
  }
  const contents: UpdateFlowOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFlowOutputResponse",
    FlowArn: undefined,
    Output: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.output !== undefined && data.output !== null) {
    contents.Output = deserializeAws_restJson1_1Output(data.output, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFlowOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowOutputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateFlowSourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFlowSourceCommandError(
      output,
      context
    );
  }
  const contents: UpdateFlowSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateFlowSourceResponse",
    FlowArn: undefined,
    Source: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.flowArn !== undefined && data.flowArn !== null) {
    contents.FlowArn = data.flowArn;
  }
  if (data.source !== undefined && data.source !== null) {
    contents.Source = deserializeAws_restJson1_1Source(data.source, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateFlowSourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFlowSourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mediaconnect#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mediaconnect#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mediaconnect#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mediaconnect#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.mediaconnect#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.mediaconnect#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1_1AddFlowOutputs420ExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AddFlowOutputs420Exception> => {
  const contents: AddFlowOutputs420Exception = {
    name: "AddFlowOutputs420Exception",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1CreateFlow420ExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CreateFlow420Exception> => {
  const contents: CreateFlow420Exception = {
    name: "CreateFlow420Exception",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1GrantFlowEntitlements420ExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<GrantFlowEntitlements420Exception> => {
  const contents: GrantFlowEntitlements420Exception = {
    name: "GrantFlowEntitlements420Exception",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AddOutputRequest = (
  input: AddOutputRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CidrAllowList !== undefined) {
    bodyParams["cidrAllowList"] = serializeAws_restJson1_1__listOf__string(
      input.CidrAllowList,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Destination !== undefined) {
    bodyParams["destination"] = input.Destination;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.MaxLatency !== undefined) {
    bodyParams["maxLatency"] = input.MaxLatency;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Port !== undefined) {
    bodyParams["port"] = input.Port;
  }
  if (input.Protocol !== undefined) {
    bodyParams["protocol"] = input.Protocol;
  }
  if (input.RemoteId !== undefined) {
    bodyParams["remoteId"] = input.RemoteId;
  }
  if (input.SmoothingLatency !== undefined) {
    bodyParams["smoothingLatency"] = input.SmoothingLatency;
  }
  if (input.StreamId !== undefined) {
    bodyParams["streamId"] = input.StreamId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Encryption = (
  input: Encryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Algorithm !== undefined) {
    bodyParams["algorithm"] = input.Algorithm;
  }
  if (input.ConstantInitializationVector !== undefined) {
    bodyParams["constantInitializationVector"] =
      input.ConstantInitializationVector;
  }
  if (input.DeviceId !== undefined) {
    bodyParams["deviceId"] = input.DeviceId;
  }
  if (input.KeyType !== undefined) {
    bodyParams["keyType"] = input.KeyType;
  }
  if (input.Region !== undefined) {
    bodyParams["region"] = input.Region;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["resourceId"] = input.ResourceId;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.SecretArn !== undefined) {
    bodyParams["secretArn"] = input.SecretArn;
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1GrantEntitlementRequest = (
  input: GrantEntitlementRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DataTransferSubscriberFeePercent !== undefined) {
    bodyParams["dataTransferSubscriberFeePercent"] =
      input.DataTransferSubscriberFeePercent;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.Encryption !== undefined) {
    bodyParams["encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Subscribers !== undefined) {
    bodyParams["subscribers"] = serializeAws_restJson1_1__listOf__string(
      input.Subscribers,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SetSourceRequest = (
  input: SetSourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Decryption !== undefined) {
    bodyParams["decryption"] = serializeAws_restJson1_1Encryption(
      input.Decryption,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.EntitlementArn !== undefined) {
    bodyParams["entitlementArn"] = input.EntitlementArn;
  }
  if (input.IngestPort !== undefined) {
    bodyParams["ingestPort"] = input.IngestPort;
  }
  if (input.MaxBitrate !== undefined) {
    bodyParams["maxBitrate"] = input.MaxBitrate;
  }
  if (input.MaxLatency !== undefined) {
    bodyParams["maxLatency"] = input.MaxLatency;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Protocol !== undefined) {
    bodyParams["protocol"] = input.Protocol;
  }
  if (input.StreamId !== undefined) {
    bodyParams["streamId"] = input.StreamId;
  }
  if (input.WhitelistCidr !== undefined) {
    bodyParams["whitelistCidr"] = input.WhitelistCidr;
  }
  return bodyParams;
};

const serializeAws_restJson1_1UpdateEncryption = (
  input: UpdateEncryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Algorithm !== undefined) {
    bodyParams["algorithm"] = input.Algorithm;
  }
  if (input.ConstantInitializationVector !== undefined) {
    bodyParams["constantInitializationVector"] =
      input.ConstantInitializationVector;
  }
  if (input.DeviceId !== undefined) {
    bodyParams["deviceId"] = input.DeviceId;
  }
  if (input.KeyType !== undefined) {
    bodyParams["keyType"] = input.KeyType;
  }
  if (input.Region !== undefined) {
    bodyParams["region"] = input.Region;
  }
  if (input.ResourceId !== undefined) {
    bodyParams["resourceId"] = input.ResourceId;
  }
  if (input.RoleArn !== undefined) {
    bodyParams["roleArn"] = input.RoleArn;
  }
  if (input.SecretArn !== undefined) {
    bodyParams["secretArn"] = input.SecretArn;
  }
  if (input.Url !== undefined) {
    bodyParams["url"] = input.Url;
  }
  return bodyParams;
};

const serializeAws_restJson1_1__listOfAddOutputRequest = (
  input: Array<AddOutputRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1AddOutputRequest(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOfGrantEntitlementRequest = (
  input: Array<GrantEntitlementRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1GrantEntitlementRequest(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Encryption = (
  output: any,
  context: __SerdeContext
): Encryption => {
  let contents: any = {
    __type: "Encryption",
    Algorithm: undefined,
    ConstantInitializationVector: undefined,
    DeviceId: undefined,
    KeyType: undefined,
    Region: undefined,
    ResourceId: undefined,
    RoleArn: undefined,
    SecretArn: undefined,
    Url: undefined
  };
  if (output.algorithm !== undefined && output.algorithm !== null) {
    contents.Algorithm = output.algorithm;
  }
  if (
    output.constantInitializationVector !== undefined &&
    output.constantInitializationVector !== null
  ) {
    contents.ConstantInitializationVector = output.constantInitializationVector;
  }
  if (output.deviceId !== undefined && output.deviceId !== null) {
    contents.DeviceId = output.deviceId;
  }
  if (output.keyType !== undefined && output.keyType !== null) {
    contents.KeyType = output.keyType;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.Region = output.region;
  }
  if (output.resourceId !== undefined && output.resourceId !== null) {
    contents.ResourceId = output.resourceId;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.RoleArn = output.roleArn;
  }
  if (output.secretArn !== undefined && output.secretArn !== null) {
    contents.SecretArn = output.secretArn;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.Url = output.url;
  }
  return contents;
};

const deserializeAws_restJson1_1Entitlement = (
  output: any,
  context: __SerdeContext
): Entitlement => {
  let contents: any = {
    __type: "Entitlement",
    DataTransferSubscriberFeePercent: undefined,
    Description: undefined,
    Encryption: undefined,
    EntitlementArn: undefined,
    Name: undefined,
    Subscribers: undefined
  };
  if (
    output.dataTransferSubscriberFeePercent !== undefined &&
    output.dataTransferSubscriberFeePercent !== null
  ) {
    contents.DataTransferSubscriberFeePercent =
      output.dataTransferSubscriberFeePercent;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.encryption,
      context
    );
  }
  if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
    contents.EntitlementArn = output.entitlementArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.subscribers !== undefined && output.subscribers !== null) {
    contents.Subscribers = deserializeAws_restJson1_1__listOf__string(
      output.subscribers,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Flow = (
  output: any,
  context: __SerdeContext
): Flow => {
  let contents: any = {
    __type: "Flow",
    AvailabilityZone: undefined,
    Description: undefined,
    EgressIp: undefined,
    Entitlements: undefined,
    FlowArn: undefined,
    Name: undefined,
    Outputs: undefined,
    Source: undefined,
    Status: undefined
  };
  if (
    output.availabilityZone !== undefined &&
    output.availabilityZone !== null
  ) {
    contents.AvailabilityZone = output.availabilityZone;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.egressIp !== undefined && output.egressIp !== null) {
    contents.EgressIp = output.egressIp;
  }
  if (output.entitlements !== undefined && output.entitlements !== null) {
    contents.Entitlements = deserializeAws_restJson1_1__listOfEntitlement(
      output.entitlements,
      context
    );
  }
  if (output.flowArn !== undefined && output.flowArn !== null) {
    contents.FlowArn = output.flowArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.outputs !== undefined && output.outputs !== null) {
    contents.Outputs = deserializeAws_restJson1_1__listOfOutput(
      output.outputs,
      context
    );
  }
  if (output.source !== undefined && output.source !== null) {
    contents.Source = deserializeAws_restJson1_1Source(output.source, context);
  }
  if (output.status !== undefined && output.status !== null) {
    contents.Status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ListedEntitlement = (
  output: any,
  context: __SerdeContext
): ListedEntitlement => {
  let contents: any = {
    __type: "ListedEntitlement",
    DataTransferSubscriberFeePercent: undefined,
    EntitlementArn: undefined,
    EntitlementName: undefined
  };
  if (
    output.dataTransferSubscriberFeePercent !== undefined &&
    output.dataTransferSubscriberFeePercent !== null
  ) {
    contents.DataTransferSubscriberFeePercent =
      output.dataTransferSubscriberFeePercent;
  }
  if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
    contents.EntitlementArn = output.entitlementArn;
  }
  if (output.entitlementName !== undefined && output.entitlementName !== null) {
    contents.EntitlementName = output.entitlementName;
  }
  return contents;
};

const deserializeAws_restJson1_1ListedFlow = (
  output: any,
  context: __SerdeContext
): ListedFlow => {
  let contents: any = {
    __type: "ListedFlow",
    AvailabilityZone: undefined,
    Description: undefined,
    FlowArn: undefined,
    Name: undefined,
    SourceType: undefined,
    Status: undefined
  };
  if (
    output.availabilityZone !== undefined &&
    output.availabilityZone !== null
  ) {
    contents.AvailabilityZone = output.availabilityZone;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.flowArn !== undefined && output.flowArn !== null) {
    contents.FlowArn = output.flowArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.sourceType !== undefined && output.sourceType !== null) {
    contents.SourceType = output.sourceType;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.Status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1Messages = (
  output: any,
  context: __SerdeContext
): Messages => {
  let contents: any = {
    __type: "Messages",
    Errors: undefined
  };
  if (output.errors !== undefined && output.errors !== null) {
    contents.Errors = deserializeAws_restJson1_1__listOf__string(
      output.errors,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Output = (
  output: any,
  context: __SerdeContext
): Output => {
  let contents: any = {
    __type: "Output",
    DataTransferSubscriberFeePercent: undefined,
    Description: undefined,
    Destination: undefined,
    Encryption: undefined,
    EntitlementArn: undefined,
    MediaLiveInputArn: undefined,
    Name: undefined,
    OutputArn: undefined,
    Port: undefined,
    Transport: undefined
  };
  if (
    output.dataTransferSubscriberFeePercent !== undefined &&
    output.dataTransferSubscriberFeePercent !== null
  ) {
    contents.DataTransferSubscriberFeePercent =
      output.dataTransferSubscriberFeePercent;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.destination !== undefined && output.destination !== null) {
    contents.Destination = output.destination;
  }
  if (output.encryption !== undefined && output.encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.encryption,
      context
    );
  }
  if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
    contents.EntitlementArn = output.entitlementArn;
  }
  if (
    output.mediaLiveInputArn !== undefined &&
    output.mediaLiveInputArn !== null
  ) {
    contents.MediaLiveInputArn = output.mediaLiveInputArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.outputArn !== undefined && output.outputArn !== null) {
    contents.OutputArn = output.outputArn;
  }
  if (output.port !== undefined && output.port !== null) {
    contents.Port = output.port;
  }
  if (output.transport !== undefined && output.transport !== null) {
    contents.Transport = deserializeAws_restJson1_1Transport(
      output.transport,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Source = (
  output: any,
  context: __SerdeContext
): Source => {
  let contents: any = {
    __type: "Source",
    DataTransferSubscriberFeePercent: undefined,
    Decryption: undefined,
    Description: undefined,
    EntitlementArn: undefined,
    IngestIp: undefined,
    IngestPort: undefined,
    Name: undefined,
    SourceArn: undefined,
    Transport: undefined,
    WhitelistCidr: undefined
  };
  if (
    output.dataTransferSubscriberFeePercent !== undefined &&
    output.dataTransferSubscriberFeePercent !== null
  ) {
    contents.DataTransferSubscriberFeePercent =
      output.dataTransferSubscriberFeePercent;
  }
  if (output.decryption !== undefined && output.decryption !== null) {
    contents.Decryption = deserializeAws_restJson1_1Encryption(
      output.decryption,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.entitlementArn !== undefined && output.entitlementArn !== null) {
    contents.EntitlementArn = output.entitlementArn;
  }
  if (output.ingestIp !== undefined && output.ingestIp !== null) {
    contents.IngestIp = output.ingestIp;
  }
  if (output.ingestPort !== undefined && output.ingestPort !== null) {
    contents.IngestPort = output.ingestPort;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.sourceArn !== undefined && output.sourceArn !== null) {
    contents.SourceArn = output.sourceArn;
  }
  if (output.transport !== undefined && output.transport !== null) {
    contents.Transport = deserializeAws_restJson1_1Transport(
      output.transport,
      context
    );
  }
  if (output.whitelistCidr !== undefined && output.whitelistCidr !== null) {
    contents.WhitelistCidr = output.whitelistCidr;
  }
  return contents;
};

const deserializeAws_restJson1_1Transport = (
  output: any,
  context: __SerdeContext
): Transport => {
  let contents: any = {
    __type: "Transport",
    CidrAllowList: undefined,
    MaxBitrate: undefined,
    MaxLatency: undefined,
    Protocol: undefined,
    RemoteId: undefined,
    SmoothingLatency: undefined,
    StreamId: undefined
  };
  if (output.cidrAllowList !== undefined && output.cidrAllowList !== null) {
    contents.CidrAllowList = deserializeAws_restJson1_1__listOf__string(
      output.cidrAllowList,
      context
    );
  }
  if (output.maxBitrate !== undefined && output.maxBitrate !== null) {
    contents.MaxBitrate = output.maxBitrate;
  }
  if (output.maxLatency !== undefined && output.maxLatency !== null) {
    contents.MaxLatency = output.maxLatency;
  }
  if (output.protocol !== undefined && output.protocol !== null) {
    contents.Protocol = output.protocol;
  }
  if (output.remoteId !== undefined && output.remoteId !== null) {
    contents.RemoteId = output.remoteId;
  }
  if (
    output.smoothingLatency !== undefined &&
    output.smoothingLatency !== null
  ) {
    contents.SmoothingLatency = output.smoothingLatency;
  }
  if (output.streamId !== undefined && output.streamId !== null) {
    contents.StreamId = output.streamId;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfEntitlement = (
  output: any,
  context: __SerdeContext
): Array<Entitlement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Entitlement(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfListedEntitlement = (
  output: any,
  context: __SerdeContext
): Array<ListedEntitlement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ListedEntitlement(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfListedFlow = (
  output: any,
  context: __SerdeContext
): Array<ListedFlow> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ListedFlow(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfOutput = (
  output: any,
  context: __SerdeContext
): Array<Output> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Output(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
