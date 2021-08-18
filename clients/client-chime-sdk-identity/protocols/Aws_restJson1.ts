import {
  CreateAppInstanceAdminCommandInput,
  CreateAppInstanceAdminCommandOutput,
} from "../commands/CreateAppInstanceAdminCommand";
import { CreateAppInstanceCommandInput, CreateAppInstanceCommandOutput } from "../commands/CreateAppInstanceCommand";
import {
  CreateAppInstanceUserCommandInput,
  CreateAppInstanceUserCommandOutput,
} from "../commands/CreateAppInstanceUserCommand";
import {
  DeleteAppInstanceAdminCommandInput,
  DeleteAppInstanceAdminCommandOutput,
} from "../commands/DeleteAppInstanceAdminCommand";
import { DeleteAppInstanceCommandInput, DeleteAppInstanceCommandOutput } from "../commands/DeleteAppInstanceCommand";
import {
  DeleteAppInstanceUserCommandInput,
  DeleteAppInstanceUserCommandOutput,
} from "../commands/DeleteAppInstanceUserCommand";
import {
  DescribeAppInstanceAdminCommandInput,
  DescribeAppInstanceAdminCommandOutput,
} from "../commands/DescribeAppInstanceAdminCommand";
import {
  DescribeAppInstanceCommandInput,
  DescribeAppInstanceCommandOutput,
} from "../commands/DescribeAppInstanceCommand";
import {
  DescribeAppInstanceUserCommandInput,
  DescribeAppInstanceUserCommandOutput,
} from "../commands/DescribeAppInstanceUserCommand";
import {
  GetAppInstanceRetentionSettingsCommandInput,
  GetAppInstanceRetentionSettingsCommandOutput,
} from "../commands/GetAppInstanceRetentionSettingsCommand";
import {
  ListAppInstanceAdminsCommandInput,
  ListAppInstanceAdminsCommandOutput,
} from "../commands/ListAppInstanceAdminsCommand";
import {
  ListAppInstanceUsersCommandInput,
  ListAppInstanceUsersCommandOutput,
} from "../commands/ListAppInstanceUsersCommand";
import { ListAppInstancesCommandInput, ListAppInstancesCommandOutput } from "../commands/ListAppInstancesCommand";
import {
  PutAppInstanceRetentionSettingsCommandInput,
  PutAppInstanceRetentionSettingsCommandOutput,
} from "../commands/PutAppInstanceRetentionSettingsCommand";
import { UpdateAppInstanceCommandInput, UpdateAppInstanceCommandOutput } from "../commands/UpdateAppInstanceCommand";
import {
  UpdateAppInstanceUserCommandInput,
  UpdateAppInstanceUserCommandOutput,
} from "../commands/UpdateAppInstanceUserCommand";
import {
  AppInstance,
  AppInstanceAdmin,
  AppInstanceAdminSummary,
  AppInstanceRetentionSettings,
  AppInstanceSummary,
  AppInstanceUser,
  AppInstanceUserSummary,
  BadRequestException,
  ChannelRetentionSettings,
  ConflictException,
  ForbiddenException,
  Identity,
  ResourceLimitExceededException,
  ServiceFailureException,
  ServiceUnavailableException,
  Tag,
  ThrottledClientException,
  UnauthorizedClientException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1CreateAppInstanceCommand = async (
  input: CreateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances";
  let body: any;
  body = JSON.stringify({
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1CreateAppInstanceAdminCommand = async (
  input: CreateAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}/admins";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceAdminArn !== undefined &&
      input.AppInstanceAdminArn !== null && { AppInstanceAdminArn: input.AppInstanceAdminArn }),
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

export const serializeAws_restJson1CreateAppInstanceUserCommand = async (
  input: CreateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users";
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceArn !== undefined &&
      input.AppInstanceArn !== null && { AppInstanceArn: input.AppInstanceArn }),
    ...(input.AppInstanceUserId !== undefined &&
      input.AppInstanceUserId !== null && { AppInstanceUserId: input.AppInstanceUserId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteAppInstanceCommand = async (
  input: DeleteAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
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

export const serializeAws_restJson1DeleteAppInstanceAdminCommand = async (
  input: DeleteAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}";
  if (input.AppInstanceAdminArn !== undefined) {
    const labelValue: string = input.AppInstanceAdminArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceAdminArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceAdminArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceAdminArn.");
  }
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
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

export const serializeAws_restJson1DeleteAppInstanceUserCommand = async (
  input: DeleteAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  if (input.AppInstanceUserArn !== undefined) {
    const labelValue: string = input.AppInstanceUserArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceUserArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceUserArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceUserArn.");
  }
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

export const serializeAws_restJson1DescribeAppInstanceCommand = async (
  input: DescribeAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
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

export const serializeAws_restJson1DescribeAppInstanceAdminCommand = async (
  input: DescribeAppInstanceAdminCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}";
  if (input.AppInstanceAdminArn !== undefined) {
    const labelValue: string = input.AppInstanceAdminArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceAdminArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceAdminArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceAdminArn.");
  }
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
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

export const serializeAws_restJson1DescribeAppInstanceUserCommand = async (
  input: DescribeAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  if (input.AppInstanceUserArn !== undefined) {
    const labelValue: string = input.AppInstanceUserArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceUserArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceUserArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceUserArn.");
  }
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

export const serializeAws_restJson1GetAppInstanceRetentionSettingsCommand = async (
  input: GetAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/retention-settings";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
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

export const serializeAws_restJson1ListAppInstanceAdminsCommand = async (
  input: ListAppInstanceAdminsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}/admins";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListAppInstancesCommand = async (
  input: ListAppInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances";
  const query: any = {
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1ListAppInstanceUsersCommand = async (
  input: ListAppInstanceUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users";
  const query: any = {
    ...(input.AppInstanceArn !== undefined && { "app-instance-arn": input.AppInstanceArn }),
    ...(input.MaxResults !== undefined && { "max-results": input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { "next-token": input.NextToken }),
  };
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

export const serializeAws_restJson1PutAppInstanceRetentionSettingsCommand = async (
  input: PutAppInstanceRetentionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/app-instances/{AppInstanceArn}/retention-settings";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AppInstanceRetentionSettings !== undefined &&
      input.AppInstanceRetentionSettings !== null && {
        AppInstanceRetentionSettings: serializeAws_restJson1AppInstanceRetentionSettings(
          input.AppInstanceRetentionSettings,
          context
        ),
      }),
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

export const serializeAws_restJson1UpdateAppInstanceCommand = async (
  input: UpdateAppInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instances/{AppInstanceArn}";
  if (input.AppInstanceArn !== undefined) {
    const labelValue: string = input.AppInstanceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const serializeAws_restJson1UpdateAppInstanceUserCommand = async (
  input: UpdateAppInstanceUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/app-instance-users/{AppInstanceUserArn}";
  if (input.AppInstanceUserArn !== undefined) {
    const labelValue: string = input.AppInstanceUserArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: AppInstanceUserArn.");
    }
    resolvedPath = resolvedPath.replace("{AppInstanceUserArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: AppInstanceUserArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Metadata !== undefined && input.Metadata !== null && { Metadata: input.Metadata }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
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

export const deserializeAws_restJson1CreateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceCommandError(output, context);
  }
  const contents: CreateAppInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceArn !== undefined && data.AppInstanceArn !== null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceAdminCommandError(output, context);
  }
  const contents: CreateAppInstanceAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceAdmin: undefined,
    AppInstanceArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceAdmin !== undefined && data.AppInstanceAdmin !== null) {
    contents.AppInstanceAdmin = deserializeAws_restJson1Identity(data.AppInstanceAdmin, context);
  }
  if (data.AppInstanceArn !== undefined && data.AppInstanceArn !== null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAppInstanceUserCommandError(output, context);
  }
  const contents: CreateAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceUserArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceUserArn !== undefined && data.AppInstanceUserArn !== null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceCommandError(output, context);
  }
  const contents: DeleteAppInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceAdminCommandError(output, context);
  }
  const contents: DeleteAppInstanceAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAppInstanceUserCommandError(output, context);
  }
  const contents: DeleteAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceCommandError(output, context);
  }
  const contents: DescribeAppInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstance: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstance !== undefined && data.AppInstance !== null) {
    contents.AppInstance = deserializeAws_restJson1AppInstance(data.AppInstance, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAppInstanceAdminCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceAdminCommandError(output, context);
  }
  const contents: DescribeAppInstanceAdminCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceAdmin: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceAdmin !== undefined && data.AppInstanceAdmin !== null) {
    contents.AppInstanceAdmin = deserializeAws_restJson1AppInstanceAdmin(data.AppInstanceAdmin, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAppInstanceAdminCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceAdminCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAppInstanceUserCommandError(output, context);
  }
  const contents: DescribeAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceUser: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceUser !== undefined && data.AppInstanceUser !== null) {
    contents.AppInstanceUser = deserializeAws_restJson1AppInstanceUser(data.AppInstanceUser, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: GetAppInstanceRetentionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceRetentionSettings: undefined,
    InitiateDeletionTimestamp: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceRetentionSettings !== undefined && data.AppInstanceRetentionSettings !== null) {
    contents.AppInstanceRetentionSettings = deserializeAws_restJson1AppInstanceRetentionSettings(
      data.AppInstanceRetentionSettings,
      context
    );
  }
  if (data.InitiateDeletionTimestamp !== undefined && data.InitiateDeletionTimestamp !== null) {
    contents.InitiateDeletionTimestamp = new Date(Math.round(data.InitiateDeletionTimestamp * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAppInstanceRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppInstanceRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAppInstanceAdminsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceAdminsCommandError(output, context);
  }
  const contents: ListAppInstanceAdminsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceAdmins: undefined,
    AppInstanceArn: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceAdmins !== undefined && data.AppInstanceAdmins !== null) {
    contents.AppInstanceAdmins = deserializeAws_restJson1AppInstanceAdminList(data.AppInstanceAdmins, context);
  }
  if (data.AppInstanceArn !== undefined && data.AppInstanceArn !== null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAppInstanceAdminsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceAdminsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAppInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstancesCommandError(output, context);
  }
  const contents: ListAppInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstances: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstances !== undefined && data.AppInstances !== null) {
    contents.AppInstances = deserializeAws_restJson1AppInstanceList(data.AppInstances, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAppInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAppInstanceUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAppInstanceUsersCommandError(output, context);
  }
  const contents: ListAppInstanceUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceArn: undefined,
    AppInstanceUsers: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceArn !== undefined && data.AppInstanceArn !== null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  if (data.AppInstanceUsers !== undefined && data.AppInstanceUsers !== null) {
    contents.AppInstanceUsers = deserializeAws_restJson1AppInstanceUserList(data.AppInstanceUsers, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAppInstanceUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppInstanceUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutAppInstanceRetentionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError(output, context);
  }
  const contents: PutAppInstanceRetentionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceRetentionSettings: undefined,
    InitiateDeletionTimestamp: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceRetentionSettings !== undefined && data.AppInstanceRetentionSettings !== null) {
    contents.AppInstanceRetentionSettings = deserializeAws_restJson1AppInstanceRetentionSettings(
      data.AppInstanceRetentionSettings,
      context
    );
  }
  if (data.InitiateDeletionTimestamp !== undefined && data.InitiateDeletionTimestamp !== null) {
    contents.InitiateDeletionTimestamp = new Date(Math.round(data.InitiateDeletionTimestamp * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutAppInstanceRetentionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppInstanceRetentionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAppInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceCommandError(output, context);
  }
  const contents: UpdateAppInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceArn !== undefined && data.AppInstanceArn !== null) {
    contents.AppInstanceArn = __expectString(data.AppInstanceArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAppInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAppInstanceUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAppInstanceUserCommandError(output, context);
  }
  const contents: UpdateAppInstanceUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    AppInstanceUserArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AppInstanceUserArn !== undefined && data.AppInstanceUserArn !== null) {
    contents.AppInstanceUserArn = __expectString(data.AppInstanceUserArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAppInstanceUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppInstanceUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.chimesdkidentity#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.chimesdkidentity#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.chimesdkidentity#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceededException":
    case "com.amazonaws.chimesdkidentity#ResourceLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceFailureException":
    case "com.amazonaws.chimesdkidentity#ServiceFailureException":
      response = {
        ...(await deserializeAws_restJson1ServiceFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.chimesdkidentity#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottledClientException":
    case "com.amazonaws.chimesdkidentity#ThrottledClientException":
      response = {
        ...(await deserializeAws_restJson1ThrottledClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedClientException":
    case "com.amazonaws.chimesdkidentity#UnauthorizedClientException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedClientExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: ResourceLimitExceededException = {
    name: "ResourceLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceFailureException> => {
  const contents: ServiceFailureException = {
    name: "ServiceFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottledClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledClientException> => {
  const contents: ThrottledClientException = {
    name: "ThrottledClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedClientException> => {
  const contents: UnauthorizedClientException = {
    name: "UnauthorizedClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1AppInstanceRetentionSettings = (
  input: AppInstanceRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.ChannelRetentionSettings !== undefined &&
      input.ChannelRetentionSettings !== null && {
        ChannelRetentionSettings: serializeAws_restJson1ChannelRetentionSettings(
          input.ChannelRetentionSettings,
          context
        ),
      }),
  };
};

const serializeAws_restJson1ChannelRetentionSettings = (
  input: ChannelRetentionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.RetentionDays !== undefined && input.RetentionDays !== null && { RetentionDays: input.RetentionDays }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1AppInstance = (output: any, context: __SerdeContext): AppInstance => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceAdmin = (output: any, context: __SerdeContext): AppInstanceAdmin => {
  return {
    Admin:
      output.Admin !== undefined && output.Admin !== null
        ? deserializeAws_restJson1Identity(output.Admin, context)
        : undefined,
    AppInstanceArn: __expectString(output.AppInstanceArn),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceAdminList = (
  output: any,
  context: __SerdeContext
): AppInstanceAdminSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceAdminSummary(entry, context);
    });
};

const deserializeAws_restJson1AppInstanceAdminSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceAdminSummary => {
  return {
    Admin:
      output.Admin !== undefined && output.Admin !== null
        ? deserializeAws_restJson1Identity(output.Admin, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceList = (output: any, context: __SerdeContext): AppInstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceSummary(entry, context);
    });
};

const deserializeAws_restJson1AppInstanceRetentionSettings = (
  output: any,
  context: __SerdeContext
): AppInstanceRetentionSettings => {
  return {
    ChannelRetentionSettings:
      output.ChannelRetentionSettings !== undefined && output.ChannelRetentionSettings !== null
        ? deserializeAws_restJson1ChannelRetentionSettings(output.ChannelRetentionSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AppInstanceSummary = (output: any, context: __SerdeContext): AppInstanceSummary => {
  return {
    AppInstanceArn: __expectString(output.AppInstanceArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceUser = (output: any, context: __SerdeContext): AppInstanceUser => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    CreatedTimestamp:
      output.CreatedTimestamp !== undefined && output.CreatedTimestamp !== null
        ? new Date(Math.round(output.CreatedTimestamp * 1000))
        : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp !== undefined && output.LastUpdatedTimestamp !== null
        ? new Date(Math.round(output.LastUpdatedTimestamp * 1000))
        : undefined,
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AppInstanceUserList = (
  output: any,
  context: __SerdeContext
): AppInstanceUserSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AppInstanceUserSummary(entry, context);
    });
};

const deserializeAws_restJson1AppInstanceUserSummary = (
  output: any,
  context: __SerdeContext
): AppInstanceUserSummary => {
  return {
    AppInstanceUserArn: __expectString(output.AppInstanceUserArn),
    Metadata: __expectString(output.Metadata),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ChannelRetentionSettings = (
  output: any,
  context: __SerdeContext
): ChannelRetentionSettings => {
  return {
    RetentionDays: __expectInt(output.RetentionDays),
  } as any;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
