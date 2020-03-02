import {
  ConfigureAgentCommandInput,
  ConfigureAgentCommandOutput
} from "../commands/ConfigureAgentCommand";
import {
  CreateProfilingGroupCommandInput,
  CreateProfilingGroupCommandOutput
} from "../commands/CreateProfilingGroupCommand";
import {
  DeleteProfilingGroupCommandInput,
  DeleteProfilingGroupCommandOutput
} from "../commands/DeleteProfilingGroupCommand";
import {
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput
} from "../commands/DescribeProfilingGroupCommand";
import {
  GetProfileCommandInput,
  GetProfileCommandOutput
} from "../commands/GetProfileCommand";
import {
  ListProfileTimesCommandInput,
  ListProfileTimesCommandOutput
} from "../commands/ListProfileTimesCommand";
import {
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput
} from "../commands/ListProfilingGroupsCommand";
import {
  PostAgentProfileCommandInput,
  PostAgentProfileCommandOutput
} from "../commands/PostAgentProfileCommand";
import {
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput
} from "../commands/UpdateProfilingGroupCommand";
import {
  AgentConfiguration,
  AgentOrchestrationConfig,
  AggregatedProfileTime,
  ConflictException,
  InternalServerException,
  ProfileTime,
  ProfilingGroupDescription,
  ProfilingStatus,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException
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
import { v4 as generateIdempotencyToken } from "uuid";

export async function serializeAws_restJson1_1ConfigureAgentCommand(
  input: ConfigureAgentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/profilingGroups/{profilingGroupName}/configureAgent";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.fleetInstanceId !== undefined) {
    bodyParams["fleetInstanceId"] = input.fleetInstanceId;
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

export async function serializeAws_restJson1_1CreateProfilingGroupCommand(
  input: CreateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/profilingGroups";
  const query: any = {};
  if (input.clientToken !== undefined) {
    query["clientToken"] = input.clientToken;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.agentOrchestrationConfig !== undefined) {
    bodyParams[
      "agentOrchestrationConfig"
    ] = serializeAws_restJson1_1AgentOrchestrationConfig(
      input.agentOrchestrationConfig,
      context
    );
  }
  if (input.profilingGroupName !== undefined) {
    bodyParams["profilingGroupName"] = input.profilingGroupName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteProfilingGroupCommand(
  input: DeleteProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/profilingGroups/{profilingGroupName}";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
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

export async function serializeAws_restJson1_1DescribeProfilingGroupCommand(
  input: DescribeProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/profilingGroups/{profilingGroupName}";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
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

export async function serializeAws_restJson1_1ListProfilingGroupsCommand(
  input: ListProfilingGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/profilingGroups";
  const query: any = {};
  if (input.includeDescription !== undefined) {
    query["includeDescription"] = input.includeDescription.toString();
  }
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

export async function serializeAws_restJson1_1UpdateProfilingGroupCommand(
  input: UpdateProfilingGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/profilingGroups/{profilingGroupName}";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.agentOrchestrationConfig !== undefined) {
    bodyParams[
      "agentOrchestrationConfig"
    ] = serializeAws_restJson1_1AgentOrchestrationConfig(
      input.agentOrchestrationConfig,
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

export async function serializeAws_restJson1_1GetProfileCommand(
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.accept !== undefined) {
    headers["Accept"] = input.accept;
  }
  let resolvedPath = "/profilingGroups/{profilingGroupName}/profile";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  const query: any = {};
  if (input.endTime !== undefined) {
    query["endTime"] = input.endTime.toISOString().toString();
  }
  if (input.maxDepth !== undefined) {
    query["maxDepth"] = input.maxDepth.toString();
  }
  if (input.period !== undefined) {
    query["period"] = input.period;
  }
  if (input.startTime !== undefined) {
    query["startTime"] = input.startTime.toISOString().toString();
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

export async function serializeAws_restJson1_1ListProfileTimesCommand(
  input: ListProfileTimesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/profilingGroups/{profilingGroupName}/profileTimes";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  const query: any = {};
  if (input.endTime !== undefined) {
    query["endTime"] = input.endTime.toISOString().toString();
  }
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.orderBy !== undefined) {
    query["orderBy"] = input.orderBy;
  }
  if (input.period !== undefined) {
    query["period"] = input.period;
  }
  if (input.startTime !== undefined) {
    query["startTime"] = input.startTime.toISOString().toString();
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

export async function serializeAws_restJson1_1PostAgentProfileCommand(
  input: PostAgentProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (input.contentType !== undefined) {
    headers["Content-Type"] = input.contentType;
  }
  let resolvedPath = "/profilingGroups/{profilingGroupName}/agentProfile";
  if (input.profilingGroupName !== undefined) {
    const labelValue: string = input.profilingGroupName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: profilingGroupName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{profilingGroupName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: profilingGroupName."
    );
  }
  const query: any = {};
  if (input.profileToken !== undefined) {
    query["profileToken"] = input.profileToken;
  }
  let body: any;
  if (input.agentProfile !== undefined) {
    body = input.agentProfile;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function deserializeAws_restJson1_1ConfigureAgentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ConfigureAgentCommandError(
      output,
      context
    );
  }
  const contents: ConfigureAgentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ConfigureAgentResponse",
    configuration: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.configuration = deserializeAws_restJson1_1AgentConfiguration(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ConfigureAgentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAgentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateProfilingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: CreateProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProfilingGroupResponse",
    profilingGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateProfilingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfilingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConflictException":
    case "com.aws.skysail#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.aws.skysail#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DeleteProfilingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: DeleteProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProfilingGroupResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteProfilingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfilingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeProfilingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: DescribeProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProfilingGroupResponse",
    profilingGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeProfilingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProfilingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListProfilingGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProfilingGroupsCommandError(
      output,
      context
    );
  }
  const contents: ListProfilingGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProfilingGroupsResponse",
    nextToken: undefined,
    profilingGroupNames: undefined,
    profilingGroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.profilingGroupNames !== undefined &&
    data.profilingGroupNames !== null
  ) {
    contents.profilingGroupNames = deserializeAws_restJson1_1ProfilingGroupNames(
      data.profilingGroupNames,
      context
    );
  }
  if (data.profilingGroups !== undefined && data.profilingGroups !== null) {
    contents.profilingGroups = deserializeAws_restJson1_1ProfilingGroupDescriptions(
      data.profilingGroups,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProfilingGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilingGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
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

export async function deserializeAws_restJson1_1UpdateProfilingGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateProfilingGroupCommandError(
      output,
      context
    );
  }
  const contents: UpdateProfilingGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProfilingGroupResponse",
    profilingGroup: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.profilingGroup = deserializeAws_restJson1_1ProfilingGroupDescription(
    data,
    context
  );
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateProfilingGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfilingGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConflictException":
    case "com.aws.skysail#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1GetProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetProfileCommandError(output, context);
  }
  const contents: GetProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProfileResponse",
    contentEncoding: undefined,
    contentType: undefined,
    profile: undefined
  };
  if (output.headers["content-encoding"] !== undefined) {
    contents.contentEncoding = output.headers["content-encoding"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  const data: any = await collectBody(output.body, context);
  contents.profile = data;
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListProfileTimesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProfileTimesCommandError(
      output,
      context
    );
  }
  const contents: ListProfileTimesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProfileTimesResponse",
    nextToken: undefined,
    profileTimes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.profileTimes !== undefined && data.profileTimes !== null) {
    contents.profileTimes = deserializeAws_restJson1_1ProfileTimes(
      data.profileTimes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProfileTimesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileTimesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

export async function deserializeAws_restJson1_1PostAgentProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PostAgentProfileCommandError(
      output,
      context
    );
  }
  const contents: PostAgentProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PostAgentProfileResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PostAgentProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PostAgentProfileCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.aws.skysail#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.aws.skysail#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.aws.skysail#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ValidationException":
    case "com.aws.skysail#ValidationException":
      response = {
        ...(await deserializeAws_restJson1_1ValidationExceptionResponse(
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

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
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

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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

const deserializeAws_restJson1_1ServiceQuotaExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
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

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
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

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
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

const serializeAws_restJson1_1AgentOrchestrationConfig = (
  input: AgentOrchestrationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.profilingEnabled !== undefined) {
    bodyParams["profilingEnabled"] = input.profilingEnabled;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AggregatedProfileTime = (
  output: any,
  context: __SerdeContext
): AggregatedProfileTime => {
  let contents: any = {
    __type: "AggregatedProfileTime",
    period: undefined,
    start: undefined
  };
  if (output.period !== undefined && output.period !== null) {
    contents.period = output.period;
  }
  if (output.start !== undefined && output.start !== null) {
    contents.start = new Date(output.start);
  }
  return contents;
};

const deserializeAws_restJson1_1AgentConfiguration = (
  output: any,
  context: __SerdeContext
): AgentConfiguration => {
  let contents: any = {
    __type: "AgentConfiguration",
    periodInSeconds: undefined,
    shouldProfile: undefined
  };
  if (output.periodInSeconds !== undefined && output.periodInSeconds !== null) {
    contents.periodInSeconds = output.periodInSeconds;
  }
  if (output.shouldProfile !== undefined && output.shouldProfile !== null) {
    contents.shouldProfile = output.shouldProfile;
  }
  return contents;
};

const deserializeAws_restJson1_1AgentOrchestrationConfig = (
  output: any,
  context: __SerdeContext
): AgentOrchestrationConfig => {
  let contents: any = {
    __type: "AgentOrchestrationConfig",
    profilingEnabled: undefined
  };
  if (
    output.profilingEnabled !== undefined &&
    output.profilingEnabled !== null
  ) {
    contents.profilingEnabled = output.profilingEnabled;
  }
  return contents;
};

const deserializeAws_restJson1_1ProfilingGroupDescription = (
  output: any,
  context: __SerdeContext
): ProfilingGroupDescription => {
  let contents: any = {
    __type: "ProfilingGroupDescription",
    agentOrchestrationConfig: undefined,
    arn: undefined,
    createdAt: undefined,
    name: undefined,
    profilingStatus: undefined,
    updatedAt: undefined
  };
  if (
    output.agentOrchestrationConfig !== undefined &&
    output.agentOrchestrationConfig !== null
  ) {
    contents.agentOrchestrationConfig = deserializeAws_restJson1_1AgentOrchestrationConfig(
      output.agentOrchestrationConfig,
      context
    );
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(output.createdAt);
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.profilingStatus !== undefined && output.profilingStatus !== null) {
    contents.profilingStatus = deserializeAws_restJson1_1ProfilingStatus(
      output.profilingStatus,
      context
    );
  }
  if (output.updatedAt !== undefined && output.updatedAt !== null) {
    contents.updatedAt = new Date(output.updatedAt);
  }
  return contents;
};

const deserializeAws_restJson1_1ProfilingGroupDescriptions = (
  output: any,
  context: __SerdeContext
): Array<ProfilingGroupDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProfilingGroupDescription(entry, context)
  );
};

const deserializeAws_restJson1_1ProfilingGroupNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ProfilingStatus = (
  output: any,
  context: __SerdeContext
): ProfilingStatus => {
  let contents: any = {
    __type: "ProfilingStatus",
    latestAgentOrchestratedAt: undefined,
    latestAgentProfileReportedAt: undefined,
    latestAggregatedProfile: undefined
  };
  if (
    output.latestAgentOrchestratedAt !== undefined &&
    output.latestAgentOrchestratedAt !== null
  ) {
    contents.latestAgentOrchestratedAt = new Date(
      output.latestAgentOrchestratedAt
    );
  }
  if (
    output.latestAgentProfileReportedAt !== undefined &&
    output.latestAgentProfileReportedAt !== null
  ) {
    contents.latestAgentProfileReportedAt = new Date(
      output.latestAgentProfileReportedAt
    );
  }
  if (
    output.latestAggregatedProfile !== undefined &&
    output.latestAggregatedProfile !== null
  ) {
    contents.latestAggregatedProfile = deserializeAws_restJson1_1AggregatedProfileTime(
      output.latestAggregatedProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ProfileTime = (
  output: any,
  context: __SerdeContext
): ProfileTime => {
  let contents: any = {
    __type: "ProfileTime",
    start: undefined
  };
  if (output.start !== undefined && output.start !== null) {
    contents.start = new Date(output.start);
  }
  return contents;
};

const deserializeAws_restJson1_1ProfileTimes = (
  output: any,
  context: __SerdeContext
): Array<ProfileTime> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProfileTime(entry, context)
  );
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
