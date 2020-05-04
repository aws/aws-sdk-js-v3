import {
  ClaimDevicesByClaimCodeCommandInput,
  ClaimDevicesByClaimCodeCommandOutput
} from "../commands/ClaimDevicesByClaimCodeCommand";
import {
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput
} from "../commands/DescribeDeviceCommand";
import {
  FinalizeDeviceClaimCommandInput,
  FinalizeDeviceClaimCommandOutput
} from "../commands/FinalizeDeviceClaimCommand";
import {
  GetDeviceMethodsCommandInput,
  GetDeviceMethodsCommandOutput
} from "../commands/GetDeviceMethodsCommand";
import {
  InitiateDeviceClaimCommandInput,
  InitiateDeviceClaimCommandOutput
} from "../commands/InitiateDeviceClaimCommand";
import {
  InvokeDeviceMethodCommandInput,
  InvokeDeviceMethodCommandOutput
} from "../commands/InvokeDeviceMethodCommand";
import {
  ListDeviceEventsCommandInput,
  ListDeviceEventsCommandOutput
} from "../commands/ListDeviceEventsCommand";
import {
  ListDevicesCommandInput,
  ListDevicesCommandOutput
} from "../commands/ListDevicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UnclaimDeviceCommandInput,
  UnclaimDeviceCommandOutput
} from "../commands/UnclaimDeviceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDeviceStateCommandInput,
  UpdateDeviceStateCommandOutput
} from "../commands/UpdateDeviceStateCommand";
import {
  Attributes,
  Device,
  DeviceDescription,
  DeviceEvent,
  DeviceMethod,
  ForbiddenException,
  InternalFailureException,
  InvalidRequestException,
  PreconditionFailedException,
  RangeNotSatisfiableException,
  ResourceConflictException,
  ResourceNotFoundException
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

export const serializeAws_restJson1_1ClaimDevicesByClaimCodeCommand = async (
  input: ClaimDevicesByClaimCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/claims/{ClaimCode}";
  if (input.ClaimCode !== undefined) {
    const labelValue: string = input.ClaimCode;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClaimCode.");
    }
    resolvedPath = resolvedPath.replace(
      "{ClaimCode}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ClaimCode.");
  }
  let body: any;
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

export const serializeAws_restJson1_1DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/devices/{DeviceId}";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
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

export const serializeAws_restJson1_1FinalizeDeviceClaimCommand = async (
  input: FinalizeDeviceClaimCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/devices/{DeviceId}/finalize-claim";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
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

export const serializeAws_restJson1_1GetDeviceMethodsCommand = async (
  input: GetDeviceMethodsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/devices/{DeviceId}/methods";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
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

export const serializeAws_restJson1_1InitiateDeviceClaimCommand = async (
  input: InitiateDeviceClaimCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/devices/{DeviceId}/initiate-claim";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
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

export const serializeAws_restJson1_1InvokeDeviceMethodCommand = async (
  input: InvokeDeviceMethodCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/devices/{DeviceId}/methods";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DeviceMethod !== undefined) {
    bodyParams["deviceMethod"] = serializeAws_restJson1_1DeviceMethod(
      input.DeviceMethod,
      context
    );
  }
  if (input.DeviceMethodParameters !== undefined) {
    bodyParams["deviceMethodParameters"] = input.DeviceMethodParameters;
  }
  body = JSON.stringify(bodyParams);
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

export const serializeAws_restJson1_1ListDeviceEventsCommand = async (
  input: ListDeviceEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/devices/{DeviceId}/events";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  const query: any = {};
  if (input.FromTimeStamp !== undefined) {
    query["fromTimeStamp"] = (
      input.FromTimeStamp.toISOString().split(".")[0] + "Z"
    ).toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.ToTimeStamp !== undefined) {
    query["toTimeStamp"] = (
      input.ToTimeStamp.toISOString().split(".")[0] + "Z"
    ).toString();
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/devices";
  const query: any = {};
  if (input.DeviceType !== undefined) {
    query["deviceType"] = input.DeviceType;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
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

export const serializeAws_restJson1_1UnclaimDeviceCommand = async (
  input: UnclaimDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/devices/{DeviceId}/unclaim";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
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

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
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
    query["tagKeys"] = (input.TagKeys || []).map(_entry => _entry);
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
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateDeviceStateCommand = async (
  input: UpdateDeviceStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/devices/{DeviceId}/state";
  if (input.DeviceId !== undefined) {
    const labelValue: string = input.DeviceId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: DeviceId.");
    }
    resolvedPath = resolvedPath.replace(
      "{DeviceId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DeviceId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Enabled !== undefined) {
    bodyParams["enabled"] = input.Enabled;
  }
  body = JSON.stringify(bodyParams);
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

export const deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimDevicesByClaimCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommandError(
      output,
      context
    );
  }
  const contents: ClaimDevicesByClaimCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ClaimDevicesByClaimCodeResponse",
    ClaimCode: undefined,
    Total: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.claimCode !== undefined && data.claimCode !== null) {
    contents.ClaimCode = data.claimCode;
  }
  if (data.total !== undefined && data.total !== null) {
    contents.Total = data.total;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ClaimDevicesByClaimCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ClaimDevicesByClaimCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ForbiddenException":
    case "com.amazonaws.iot_1click_devices_service#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_restJson1_1DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDeviceCommandError(
      output,
      context
    );
  }
  const contents: DescribeDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDeviceResponse",
    DeviceDescription: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.deviceDescription !== undefined && data.deviceDescription !== null) {
    contents.DeviceDescription = deserializeAws_restJson1_1DeviceDescription(
      data.deviceDescription,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1FinalizeDeviceClaimCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FinalizeDeviceClaimCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1FinalizeDeviceClaimCommandError(
      output,
      context
    );
  }
  const contents: FinalizeDeviceClaimCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FinalizeDeviceClaimResponse",
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1FinalizeDeviceClaimCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<FinalizeDeviceClaimCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.iot_1click_devices_service#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.iot_1click_devices_service#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1GetDeviceMethodsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceMethodsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDeviceMethodsCommandError(
      output,
      context
    );
  }
  const contents: GetDeviceMethodsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeviceMethodsResponse",
    DeviceMethods: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.deviceMethods !== undefined && data.deviceMethods !== null) {
    contents.DeviceMethods = deserializeAws_restJson1_1__listOfDeviceMethod(
      data.deviceMethods,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDeviceMethodsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceMethodsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1InitiateDeviceClaimCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDeviceClaimCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateDeviceClaimCommandError(
      output,
      context
    );
  }
  const contents: InitiateDeviceClaimCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateDeviceClaimResponse",
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InitiateDeviceClaimCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateDeviceClaimCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.iot_1click_devices_service#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1InvokeDeviceMethodCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeDeviceMethodCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InvokeDeviceMethodCommandError(
      output,
      context
    );
  }
  const contents: InvokeDeviceMethodCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InvokeDeviceMethodResponse",
    DeviceMethodResponse: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.deviceMethodResponse !== undefined &&
    data.deviceMethodResponse !== null
  ) {
    contents.DeviceMethodResponse = data.deviceMethodResponse;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InvokeDeviceMethodCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeDeviceMethodCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.iot_1click_devices_service#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RangeNotSatisfiableException":
    case "com.amazonaws.iot_1click_devices_service#RangeNotSatisfiableException":
      response = {
        ...(await deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.iot_1click_devices_service#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1ListDeviceEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDeviceEventsCommandError(
      output,
      context
    );
  }
  const contents: ListDeviceEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeviceEventsResponse",
    Events: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.events !== undefined && data.events !== null) {
    contents.Events = deserializeAws_restJson1_1__listOfDeviceEvent(
      data.events,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDeviceEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RangeNotSatisfiableException":
    case "com.amazonaws.iot_1click_devices_service#RangeNotSatisfiableException":
      response = {
        ...(await deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDevicesCommandError(output, context);
  }
  const contents: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDevicesResponse",
    Devices: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.devices !== undefined && data.devices !== null) {
    contents.Devices = deserializeAws_restJson1_1__listOfDeviceDescription(
      data.devices,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RangeNotSatisfiableException":
    case "com.amazonaws.iot_1click_devices_service#RangeNotSatisfiableException":
      response = {
        ...(await deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse(
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
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1UnclaimDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnclaimDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UnclaimDeviceCommandError(output, context);
  }
  const contents: UnclaimDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnclaimDeviceResponse",
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.state !== undefined && data.state !== null) {
    contents.State = data.state;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UnclaimDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnclaimDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

export const deserializeAws_restJson1_1UpdateDeviceStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDeviceStateCommandError(
      output,
      context
    );
  }
  const contents: UpdateDeviceStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDeviceStateResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateDeviceStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iot_1click_devices_service#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iot_1click_devices_service#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iot_1click_devices_service#ResourceNotFoundException":
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

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1PreconditionFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: PreconditionFailedException = {
    name: "PreconditionFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1RangeNotSatisfiableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RangeNotSatisfiableException> => {
  const contents: RangeNotSatisfiableException = {
    name: "RangeNotSatisfiableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.Code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1DeviceMethod = (
  input: DeviceMethod,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeviceType !== undefined) {
    bodyParams["deviceType"] = input.DeviceType;
  }
  if (input.MethodName !== undefined) {
    bodyParams["methodName"] = input.MethodName;
  }
  return bodyParams;
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

const deserializeAws_restJson1_1Attributes = (
  output: any,
  context: __SerdeContext
): Attributes => {
  let contents: any = {
    __type: "Attributes"
  };
  return contents;
};

const deserializeAws_restJson1_1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  let contents: any = {
    __type: "Device",
    Attributes: undefined,
    DeviceId: undefined,
    Type: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.Attributes = deserializeAws_restJson1_1Attributes(
      output.attributes,
      context
    );
  }
  if (output.deviceId !== undefined && output.deviceId !== null) {
    contents.DeviceId = output.deviceId;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceAttributes = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DeviceDescription = (
  output: any,
  context: __SerdeContext
): DeviceDescription => {
  let contents: any = {
    __type: "DeviceDescription",
    Arn: undefined,
    Attributes: undefined,
    DeviceId: undefined,
    Enabled: undefined,
    RemainingLife: undefined,
    Tags: undefined,
    Type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.Attributes = deserializeAws_restJson1_1DeviceAttributes(
      output.attributes,
      context
    );
  }
  if (output.deviceId !== undefined && output.deviceId !== null) {
    contents.DeviceId = output.deviceId;
  }
  if (output.enabled !== undefined && output.enabled !== null) {
    contents.Enabled = output.enabled;
  }
  if (output.remainingLife !== undefined && output.remainingLife !== null) {
    contents.RemainingLife = output.remainingLife;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      output.tags,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.Type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceEvent = (
  output: any,
  context: __SerdeContext
): DeviceEvent => {
  let contents: any = {
    __type: "DeviceEvent",
    Device: undefined,
    StdEvent: undefined
  };
  if (output.device !== undefined && output.device !== null) {
    contents.Device = deserializeAws_restJson1_1Device(output.device, context);
  }
  if (output.stdEvent !== undefined && output.stdEvent !== null) {
    contents.StdEvent = output.stdEvent;
  }
  return contents;
};

const deserializeAws_restJson1_1DeviceMethod = (
  output: any,
  context: __SerdeContext
): DeviceMethod => {
  let contents: any = {
    __type: "DeviceMethod",
    DeviceType: undefined,
    MethodName: undefined
  };
  if (output.deviceType !== undefined && output.deviceType !== null) {
    contents.DeviceType = output.deviceType;
  }
  if (output.methodName !== undefined && output.methodName !== null) {
    contents.MethodName = output.methodName;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfDeviceDescription = (
  output: any,
  context: __SerdeContext
): DeviceDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeviceDescription(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDeviceEvent = (
  output: any,
  context: __SerdeContext
): DeviceEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeviceEvent(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDeviceMethod = (
  output: any,
  context: __SerdeContext
): DeviceMethod[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeviceMethod(entry, context)
  );
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

function isSerializableHeaderValue(value: any): boolean {
  return (
    value !== undefined &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
}

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
