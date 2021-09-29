import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput,
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput,
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput,
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput,
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput,
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput,
} from "../commands/ListConfigurationSetsCommand";
import { SendVoiceMessageCommandInput, SendVoiceMessageCommandOutput } from "../commands/SendVoiceMessageCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput,
} from "../commands/UpdateConfigurationSetEventDestinationCommand";
import {
  AlreadyExistsException,
  BadRequestException,
  CallInstructionsMessageType,
  CloudWatchLogsDestination,
  EventDestination,
  EventDestinationDefinition,
  EventType,
  InternalServiceErrorException,
  KinesisFirehoseDestination,
  LimitExceededException,
  NotFoundException,
  PlainTextMessageType,
  SSMLMessageType,
  SnsDestination,
  TooManyRequestsException,
  VoiceMessageContent,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
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

export const serializeAws_restJson1CreateConfigurationSetCommand = async (
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/sms-voice/configuration-sets";
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationSetName !== undefined &&
      input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
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

export const serializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination !== undefined &&
      input.EventDestination !== null && {
        EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
      }),
    ...(input.EventDestinationName !== undefined &&
      input.EventDestinationName !== null && { EventDestinationName: input.EventDestinationName }),
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

export const serializeAws_restJson1DeleteConfigurationSetCommand = async (
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
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

export const serializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
    }
    resolvedPath = resolvedPath.replace("{EventDestinationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EventDestinationName.");
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

export const serializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
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

export const serializeAws_restJson1ListConfigurationSetsCommand = async (
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/sms-voice/configuration-sets";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && { PageSize: input.PageSize }),
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

export const serializeAws_restJson1SendVoiceMessageCommand = async (
  input: SendVoiceMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/sms-voice/voice/message";
  let body: any;
  body = JSON.stringify({
    ...(input.CallerId !== undefined && input.CallerId !== null && { CallerId: input.CallerId }),
    ...(input.ConfigurationSetName !== undefined &&
      input.ConfigurationSetName !== null && { ConfigurationSetName: input.ConfigurationSetName }),
    ...(input.Content !== undefined &&
      input.Content !== null && { Content: serializeAws_restJson1VoiceMessageContent(input.Content, context) }),
    ...(input.DestinationPhoneNumber !== undefined &&
      input.DestinationPhoneNumber !== null && { DestinationPhoneNumber: input.DestinationPhoneNumber }),
    ...(input.OriginationPhoneNumber !== undefined &&
      input.OriginationPhoneNumber !== null && { OriginationPhoneNumber: input.OriginationPhoneNumber }),
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

export const serializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationSetName.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationSetName.");
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: EventDestinationName.");
    }
    resolvedPath = resolvedPath.replace("{EventDestinationName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: EventDestinationName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.EventDestination !== undefined &&
      input.EventDestination !== null && {
        EventDestination: serializeAws_restJson1EventDestinationDefinition(input.EventDestination, context),
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

export const deserializeAws_restJson1CreateConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationSetCommandError(output, context);
  }
  const contents: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointsmsvoice#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointsmsvoice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpointsmsvoice#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpointsmsvoice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteConfigurationSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationSetCommandError(output, context);
  }
  const contents: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConfigurationSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError(output, context);
  }
  const contents: GetConfigurationSetEventDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    EventDestinations: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.EventDestinations !== undefined && data.EventDestinations !== null) {
    contents.EventDestinations = deserializeAws_restJson1EventDestinations(data.EventDestinations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetConfigurationSetEventDestinationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListConfigurationSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationSetsCommandError(output, context);
  }
  const contents: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConfigurationSets: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConfigurationSets !== undefined && data.ConfigurationSets !== null) {
    contents.ConfigurationSets = deserializeAws_restJson1ConfigurationSets(data.ConfigurationSets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SendVoiceMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SendVoiceMessageCommandError(output, context);
  }
  const contents: SendVoiceMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    MessageId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = __expectString(data.MessageId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SendVoiceMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError(output, context);
  }
  const contents: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConfigurationSetEventDestinationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpointsmsvoice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpointsmsvoice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServiceErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpointsmsvoice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpointsmsvoice#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const serializeAws_restJson1CallInstructionsMessageType = (
  input: CallInstructionsMessageType,
  context: __SerdeContext
): any => {
  return {
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
  };
};

const serializeAws_restJson1CloudWatchLogsDestination = (
  input: CloudWatchLogsDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.LogGroupArn !== undefined && input.LogGroupArn !== null && { LogGroupArn: input.LogGroupArn }),
  };
};

const serializeAws_restJson1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsDestination !== undefined &&
      input.CloudWatchLogsDestination !== null && {
        CloudWatchLogsDestination: serializeAws_restJson1CloudWatchLogsDestination(
          input.CloudWatchLogsDestination,
          context
        ),
      }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }),
    ...(input.KinesisFirehoseDestination !== undefined &&
      input.KinesisFirehoseDestination !== null && {
        KinesisFirehoseDestination: serializeAws_restJson1KinesisFirehoseDestination(
          input.KinesisFirehoseDestination,
          context
        ),
      }),
    ...(input.MatchingEventTypes !== undefined &&
      input.MatchingEventTypes !== null && {
        MatchingEventTypes: serializeAws_restJson1EventTypes(input.MatchingEventTypes, context),
      }),
    ...(input.SnsDestination !== undefined &&
      input.SnsDestination !== null && {
        SnsDestination: serializeAws_restJson1SnsDestination(input.SnsDestination, context),
      }),
  };
};

const serializeAws_restJson1EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeliveryStreamArn !== undefined &&
      input.DeliveryStreamArn !== null && { DeliveryStreamArn: input.DeliveryStreamArn }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
  };
};

const serializeAws_restJson1PlainTextMessageType = (input: PlainTextMessageType, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
  };
};

const serializeAws_restJson1SnsDestination = (input: SnsDestination, context: __SerdeContext): any => {
  return {
    ...(input.TopicArn !== undefined && input.TopicArn !== null && { TopicArn: input.TopicArn }),
  };
};

const serializeAws_restJson1SSMLMessageType = (input: SSMLMessageType, context: __SerdeContext): any => {
  return {
    ...(input.LanguageCode !== undefined && input.LanguageCode !== null && { LanguageCode: input.LanguageCode }),
    ...(input.Text !== undefined && input.Text !== null && { Text: input.Text }),
    ...(input.VoiceId !== undefined && input.VoiceId !== null && { VoiceId: input.VoiceId }),
  };
};

const serializeAws_restJson1VoiceMessageContent = (input: VoiceMessageContent, context: __SerdeContext): any => {
  return {
    ...(input.CallInstructionsMessage !== undefined &&
      input.CallInstructionsMessage !== null && {
        CallInstructionsMessage: serializeAws_restJson1CallInstructionsMessageType(
          input.CallInstructionsMessage,
          context
        ),
      }),
    ...(input.PlainTextMessage !== undefined &&
      input.PlainTextMessage !== null && {
        PlainTextMessage: serializeAws_restJson1PlainTextMessageType(input.PlainTextMessage, context),
      }),
    ...(input.SSMLMessage !== undefined &&
      input.SSMLMessage !== null && { SSMLMessage: serializeAws_restJson1SSMLMessageType(input.SSMLMessage, context) }),
  };
};

const deserializeAws_restJson1CloudWatchLogsDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestination => {
  return {
    IamRoleArn: __expectString(output.IamRoleArn),
    LogGroupArn: __expectString(output.LogGroupArn),
  } as any;
};

const deserializeAws_restJson1ConfigurationSets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1EventDestination = (output: any, context: __SerdeContext): EventDestination => {
  return {
    CloudWatchLogsDestination:
      output.CloudWatchLogsDestination !== undefined && output.CloudWatchLogsDestination !== null
        ? deserializeAws_restJson1CloudWatchLogsDestination(output.CloudWatchLogsDestination, context)
        : undefined,
    Enabled: __expectBoolean(output.Enabled),
    KinesisFirehoseDestination:
      output.KinesisFirehoseDestination !== undefined && output.KinesisFirehoseDestination !== null
        ? deserializeAws_restJson1KinesisFirehoseDestination(output.KinesisFirehoseDestination, context)
        : undefined,
    MatchingEventTypes:
      output.MatchingEventTypes !== undefined && output.MatchingEventTypes !== null
        ? deserializeAws_restJson1EventTypes(output.MatchingEventTypes, context)
        : undefined,
    Name: __expectString(output.Name),
    SnsDestination:
      output.SnsDestination !== undefined && output.SnsDestination !== null
        ? deserializeAws_restJson1SnsDestination(output.SnsDestination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EventDestinations = (output: any, context: __SerdeContext): EventDestination[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EventDestination(entry, context);
    });
};

const deserializeAws_restJson1EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  return {
    DeliveryStreamArn: __expectString(output.DeliveryStreamArn),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

const deserializeAws_restJson1SnsDestination = (output: any, context: __SerdeContext): SnsDestination => {
  return {
    TopicArn: __expectString(output.TopicArn),
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
