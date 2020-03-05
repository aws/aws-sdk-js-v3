import {
  CreateConfigurationSetCommandInput,
  CreateConfigurationSetCommandOutput
} from "../commands/CreateConfigurationSetCommand";
import {
  CreateConfigurationSetEventDestinationCommandInput,
  CreateConfigurationSetEventDestinationCommandOutput
} from "../commands/CreateConfigurationSetEventDestinationCommand";
import {
  DeleteConfigurationSetCommandInput,
  DeleteConfigurationSetCommandOutput
} from "../commands/DeleteConfigurationSetCommand";
import {
  DeleteConfigurationSetEventDestinationCommandInput,
  DeleteConfigurationSetEventDestinationCommandOutput
} from "../commands/DeleteConfigurationSetEventDestinationCommand";
import {
  GetConfigurationSetEventDestinationsCommandInput,
  GetConfigurationSetEventDestinationsCommandOutput
} from "../commands/GetConfigurationSetEventDestinationsCommand";
import {
  ListConfigurationSetsCommandInput,
  ListConfigurationSetsCommandOutput
} from "../commands/ListConfigurationSetsCommand";
import {
  SendVoiceMessageCommandInput,
  SendVoiceMessageCommandOutput
} from "../commands/SendVoiceMessageCommand";
import {
  UpdateConfigurationSetEventDestinationCommandInput,
  UpdateConfigurationSetEventDestinationCommandOutput
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
  VoiceMessageContent
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

export async function serializeAws_restJson1_1CreateConfigurationSetCommand(
  input: CreateConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/sms-voice/configuration-sets";
  let body: any;
  const bodyParams: any = {};
  if (input.ConfigurationSetName !== undefined) {
    bodyParams["ConfigurationSetName"] = input.ConfigurationSetName;
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

export async function serializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand(
  input: CreateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.EventDestination !== undefined) {
    bodyParams[
      "EventDestination"
    ] = serializeAws_restJson1_1EventDestinationDefinition(
      input.EventDestination,
      context
    );
  }
  if (input.EventDestinationName !== undefined) {
    bodyParams["EventDestinationName"] = input.EventDestinationName;
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

export async function serializeAws_restJson1_1DeleteConfigurationSetCommand(
  input: DeleteConfigurationSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/sms-voice/configuration-sets/{ConfigurationSetName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
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

export async function serializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand(
  input: DeleteConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EventDestinationName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EventDestinationName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: EventDestinationName."
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

export async function serializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand(
  input: GetConfigurationSetEventDestinationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
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

export async function serializeAws_restJson1_1ListConfigurationSetsCommand(
  input: ListConfigurationSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/sms-voice/configuration-sets";
  const query: any = {};
  if (input.NextToken !== undefined) {
    query["NextToken"] = input.NextToken;
  }
  if (input.PageSize !== undefined) {
    query["PageSize"] = input.PageSize;
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

export async function serializeAws_restJson1_1SendVoiceMessageCommand(
  input: SendVoiceMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/sms-voice/voice/message";
  let body: any;
  const bodyParams: any = {};
  if (input.CallerId !== undefined) {
    bodyParams["CallerId"] = input.CallerId;
  }
  if (input.ConfigurationSetName !== undefined) {
    bodyParams["ConfigurationSetName"] = input.ConfigurationSetName;
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = serializeAws_restJson1_1VoiceMessageContent(
      input.Content,
      context
    );
  }
  if (input.DestinationPhoneNumber !== undefined) {
    bodyParams["DestinationPhoneNumber"] = input.DestinationPhoneNumber;
  }
  if (input.OriginationPhoneNumber !== undefined) {
    bodyParams["OriginationPhoneNumber"] = input.OriginationPhoneNumber;
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

export async function serializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand(
  input: UpdateConfigurationSetEventDestinationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/sms-voice/configuration-sets/{ConfigurationSetName}/event-destinations/{EventDestinationName}";
  if (input.ConfigurationSetName !== undefined) {
    const labelValue: string = input.ConfigurationSetName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationSetName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationSetName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationSetName."
    );
  }
  if (input.EventDestinationName !== undefined) {
    const labelValue: string = input.EventDestinationName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: EventDestinationName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{EventDestinationName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: EventDestinationName."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.EventDestination !== undefined) {
    bodyParams[
      "EventDestination"
    ] = serializeAws_restJson1_1EventDestinationDefinition(
      input.EventDestination,
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

export async function deserializeAws_restJson1_1CreateConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpoint_sms_voice#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpoint_sms_voice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationSetEventDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationSetEventDestinationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.pinpoint_sms_voice#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.pinpoint_sms_voice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteConfigurationSetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConfigurationSetCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConfigurationSetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConfigurationSetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: DeleteConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteConfigurationSetEventDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationSetEventDestinationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError(
      output,
      context
    );
  }
  const contents: GetConfigurationSetEventDestinationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetConfigurationSetEventDestinationsResponse",
    EventDestinations: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EventDestinations !== undefined && data.EventDestinations !== null) {
    contents.EventDestinations = deserializeAws_restJson1_1EventDestinations(
      data.EventDestinations,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetConfigurationSetEventDestinationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfigurationSetEventDestinationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1ListConfigurationSetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationSetsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationSetsResponse",
    ConfigurationSets: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ConfigurationSets !== undefined && data.ConfigurationSets !== null) {
    contents.ConfigurationSets = deserializeAws_restJson1_1ConfigurationSets(
      data.ConfigurationSets,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationSetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationSetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1SendVoiceMessageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SendVoiceMessageCommandError(
      output,
      context
    );
  }
  const contents: SendVoiceMessageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendVoiceMessageResponse",
    MessageId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.MessageId !== undefined && data.MessageId !== null) {
    contents.MessageId = data.MessageId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SendVoiceMessageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendVoiceMessageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

export async function deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError(
      output,
      context
    );
  }
  const contents: UpdateConfigurationSetEventDestinationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateConfigurationSetEventDestinationResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateConfigurationSetEventDestinationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationSetEventDestinationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.pinpoint_sms_voice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceErrorException":
    case "com.amazonaws.pinpoint_sms_voice#InternalServiceErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServiceErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.pinpoint_sms_voice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.pinpoint_sms_voice#TooManyRequestsException":
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

const deserializeAws_restJson1_1AlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServiceErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: InternalServiceErrorException = {
    name: "InternalServiceErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1CallInstructionsMessageType = (
  input: CallInstructionsMessageType,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CloudWatchLogsDestination = (
  input: CloudWatchLogsDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.LogGroupArn !== undefined) {
    bodyParams["LogGroupArn"] = input.LogGroupArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventDestinationDefinition = (
  input: EventDestinationDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CloudWatchLogsDestination !== undefined) {
    bodyParams[
      "CloudWatchLogsDestination"
    ] = serializeAws_restJson1_1CloudWatchLogsDestination(
      input.CloudWatchLogsDestination,
      context
    );
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.KinesisFirehoseDestination !== undefined) {
    bodyParams[
      "KinesisFirehoseDestination"
    ] = serializeAws_restJson1_1KinesisFirehoseDestination(
      input.KinesisFirehoseDestination,
      context
    );
  }
  if (input.MatchingEventTypes !== undefined) {
    bodyParams["MatchingEventTypes"] = serializeAws_restJson1_1EventTypes(
      input.MatchingEventTypes,
      context
    );
  }
  if (input.SnsDestination !== undefined) {
    bodyParams["SnsDestination"] = serializeAws_restJson1_1SnsDestination(
      input.SnsDestination,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EventTypes = (
  input: Array<EventType | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1KinesisFirehoseDestination = (
  input: KinesisFirehoseDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeliveryStreamArn !== undefined) {
    bodyParams["DeliveryStreamArn"] = input.DeliveryStreamArn;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PlainTextMessageType = (
  input: PlainTextMessageType,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.VoiceId !== undefined) {
    bodyParams["VoiceId"] = input.VoiceId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SSMLMessageType = (
  input: SSMLMessageType,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LanguageCode !== undefined) {
    bodyParams["LanguageCode"] = input.LanguageCode;
  }
  if (input.Text !== undefined) {
    bodyParams["Text"] = input.Text;
  }
  if (input.VoiceId !== undefined) {
    bodyParams["VoiceId"] = input.VoiceId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SnsDestination = (
  input: SnsDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TopicArn !== undefined) {
    bodyParams["TopicArn"] = input.TopicArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VoiceMessageContent = (
  input: VoiceMessageContent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CallInstructionsMessage !== undefined) {
    bodyParams[
      "CallInstructionsMessage"
    ] = serializeAws_restJson1_1CallInstructionsMessageType(
      input.CallInstructionsMessage,
      context
    );
  }
  if (input.PlainTextMessage !== undefined) {
    bodyParams[
      "PlainTextMessage"
    ] = serializeAws_restJson1_1PlainTextMessageType(
      input.PlainTextMessage,
      context
    );
  }
  if (input.SSMLMessage !== undefined) {
    bodyParams["SSMLMessage"] = serializeAws_restJson1_1SSMLMessageType(
      input.SSMLMessage,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1CloudWatchLogsDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestination => {
  let contents: any = {
    __type: "CloudWatchLogsDestination",
    IamRoleArn: undefined,
    LogGroupArn: undefined
  };
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.LogGroupArn !== undefined && output.LogGroupArn !== null) {
    contents.LogGroupArn = output.LogGroupArn;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationSets = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1EventDestination = (
  output: any,
  context: __SerdeContext
): EventDestination => {
  let contents: any = {
    __type: "EventDestination",
    CloudWatchLogsDestination: undefined,
    Enabled: undefined,
    KinesisFirehoseDestination: undefined,
    MatchingEventTypes: undefined,
    Name: undefined,
    SnsDestination: undefined
  };
  if (
    output.CloudWatchLogsDestination !== undefined &&
    output.CloudWatchLogsDestination !== null
  ) {
    contents.CloudWatchLogsDestination = deserializeAws_restJson1_1CloudWatchLogsDestination(
      output.CloudWatchLogsDestination,
      context
    );
  }
  if (output.Enabled !== undefined && output.Enabled !== null) {
    contents.Enabled = output.Enabled;
  }
  if (
    output.KinesisFirehoseDestination !== undefined &&
    output.KinesisFirehoseDestination !== null
  ) {
    contents.KinesisFirehoseDestination = deserializeAws_restJson1_1KinesisFirehoseDestination(
      output.KinesisFirehoseDestination,
      context
    );
  }
  if (
    output.MatchingEventTypes !== undefined &&
    output.MatchingEventTypes !== null
  ) {
    contents.MatchingEventTypes = deserializeAws_restJson1_1EventTypes(
      output.MatchingEventTypes,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.SnsDestination !== undefined && output.SnsDestination !== null) {
    contents.SnsDestination = deserializeAws_restJson1_1SnsDestination(
      output.SnsDestination,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EventDestinations = (
  output: any,
  context: __SerdeContext
): Array<EventDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EventDestination(entry, context)
  );
};

const deserializeAws_restJson1_1EventTypes = (
  output: any,
  context: __SerdeContext
): Array<EventType | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1KinesisFirehoseDestination = (
  output: any,
  context: __SerdeContext
): KinesisFirehoseDestination => {
  let contents: any = {
    __type: "KinesisFirehoseDestination",
    DeliveryStreamArn: undefined,
    IamRoleArn: undefined
  };
  if (
    output.DeliveryStreamArn !== undefined &&
    output.DeliveryStreamArn !== null
  ) {
    contents.DeliveryStreamArn = output.DeliveryStreamArn;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SnsDestination = (
  output: any,
  context: __SerdeContext
): SnsDestination => {
  let contents: any = {
    __type: "SnsDestination",
    TopicArn: undefined
  };
  if (output.TopicArn !== undefined && output.TopicArn !== null) {
    contents.TopicArn = output.TopicArn;
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
