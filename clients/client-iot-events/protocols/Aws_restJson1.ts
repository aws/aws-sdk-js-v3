import {
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput
} from "../commands/CreateDetectorModelCommand";
import {
  CreateInputCommandInput,
  CreateInputCommandOutput
} from "../commands/CreateInputCommand";
import {
  DeleteDetectorModelCommandInput,
  DeleteDetectorModelCommandOutput
} from "../commands/DeleteDetectorModelCommand";
import {
  DeleteInputCommandInput,
  DeleteInputCommandOutput
} from "../commands/DeleteInputCommand";
import {
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput
} from "../commands/DescribeDetectorModelCommand";
import {
  DescribeInputCommandInput,
  DescribeInputCommandOutput
} from "../commands/DescribeInputCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput
} from "../commands/DescribeLoggingOptionsCommand";
import {
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput
} from "../commands/ListDetectorModelVersionsCommand";
import {
  ListDetectorModelsCommandInput,
  ListDetectorModelsCommandOutput
} from "../commands/ListDetectorModelsCommand";
import {
  ListInputsCommandInput,
  ListInputsCommandOutput
} from "../commands/ListInputsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput
} from "../commands/PutLoggingOptionsCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDetectorModelCommandInput,
  UpdateDetectorModelCommandOutput
} from "../commands/UpdateDetectorModelCommand";
import {
  UpdateInputCommandInput,
  UpdateInputCommandOutput
} from "../commands/UpdateInputCommand";
import {
  Action,
  Attribute,
  ClearTimerAction,
  DetectorDebugOption,
  DetectorModel,
  DetectorModelConfiguration,
  DetectorModelDefinition,
  DetectorModelSummary,
  DetectorModelVersionSummary,
  Event,
  FirehoseAction,
  Input,
  InputConfiguration,
  InputDefinition,
  InputSummary,
  InternalFailureException,
  InvalidRequestException,
  IotEventsAction,
  IotTopicPublishAction,
  LambdaAction,
  LimitExceededException,
  LoggingOptions,
  OnEnterLifecycle,
  OnExitLifecycle,
  OnInputLifecycle,
  ResetTimerAction,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  SNSTopicPublishAction,
  ServiceUnavailableException,
  SetTimerAction,
  SetVariableAction,
  SqsAction,
  State,
  Tag,
  ThrottlingException,
  TransitionEvent,
  UnsupportedOperationException
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

export const serializeAws_restJson1CreateDetectorModelCommand = async (
  input: CreateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector-models";
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition !== undefined && {
      detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(
        input.detectorModelDefinition,
        context
      )
    }),
    ...(input.detectorModelDescription !== undefined && {
      detectorModelDescription: input.detectorModelDescription
    }),
    ...(input.detectorModelName !== undefined && {
      detectorModelName: input.detectorModelName
    }),
    ...(input.evaluationMethod !== undefined && {
      evaluationMethod: input.evaluationMethod
    }),
    ...(input.key !== undefined && { key: input.key }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.tags, context)
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

export const serializeAws_restJson1CreateInputCommand = async (
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/inputs";
  let body: any;
  body = JSON.stringify({
    ...(input.inputDefinition !== undefined && {
      inputDefinition: serializeAws_restJson1InputDefinition(
        input.inputDefinition,
        context
      )
    }),
    ...(input.inputDescription !== undefined && {
      inputDescription: input.inputDescription
    }),
    ...(input.inputName !== undefined && { inputName: input.inputName }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.tags, context)
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

export const serializeAws_restJson1DeleteDetectorModelCommand = async (
  input: DeleteDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector-models/{detectorModelName}";
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{detectorModelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
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

export const serializeAws_restJson1DeleteInputCommand = async (
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/inputs/{inputName}";
  if (input.inputName !== undefined) {
    const labelValue: string = input.inputName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace(
      "{inputName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
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

export const serializeAws_restJson1DescribeDetectorModelCommand = async (
  input: DescribeDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector-models/{detectorModelName}";
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{detectorModelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  const query: any = {
    ...(input.detectorModelVersion !== undefined && {
      version: input.detectorModelVersion
    })
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

export const serializeAws_restJson1DescribeInputCommand = async (
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/inputs/{inputName}";
  if (input.inputName !== undefined) {
    const labelValue: string = input.inputName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace(
      "{inputName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
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

export const serializeAws_restJson1DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/logging";
  let body: any;
  body = "{}";
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

export const serializeAws_restJson1ListDetectorModelsCommand = async (
  input: ListDetectorModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector-models";
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

export const serializeAws_restJson1ListDetectorModelVersionsCommand = async (
  input: ListDetectorModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/detector-models/{detectorModelName}/versions";
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{detectorModelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
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

export const serializeAws_restJson1ListInputsCommand = async (
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/inputs";
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
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

export const serializeAws_restJson1PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/logging";
  let body: any;
  body = JSON.stringify({
    ...(input.loggingOptions !== undefined && {
      loggingOptions: serializeAws_restJson1LoggingOptions(
        input.loggingOptions,
        context
      )
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1Tags(input.tags, context)
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
    query,
    body
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
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

export const serializeAws_restJson1UpdateDetectorModelCommand = async (
  input: UpdateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/detector-models/{detectorModelName}";
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{detectorModelName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition !== undefined && {
      detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(
        input.detectorModelDefinition,
        context
      )
    }),
    ...(input.detectorModelDescription !== undefined && {
      detectorModelDescription: input.detectorModelDescription
    }),
    ...(input.evaluationMethod !== undefined && {
      evaluationMethod: input.evaluationMethod
    }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn })
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

export const serializeAws_restJson1UpdateInputCommand = async (
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/inputs/{inputName}";
  if (input.inputName !== undefined) {
    const labelValue: string = input.inputName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace(
      "{inputName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.inputDefinition !== undefined && {
      inputDefinition: serializeAws_restJson1InputDefinition(
        input.inputDefinition,
        context
      )
    }),
    ...(input.inputDescription !== undefined && {
      inputDescription: input.inputDescription
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

export const deserializeAws_restJson1CreateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateDetectorModelCommandError(
      output,
      context
    );
  }
  const contents: CreateDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDetectorModelResponse",
    detectorModelConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.detectorModelConfiguration !== undefined &&
    data.detectorModelConfiguration !== null
  ) {
    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateInputCommandError(output, context);
  }
  const contents: CreateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInputResponse",
    inputConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.inputConfiguration !== undefined &&
    data.inputConfiguration !== null
  ) {
    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(
      data.inputConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DeleteDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteDetectorModelCommandError(
      output,
      context
    );
  }
  const contents: DeleteDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDetectorModelResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DescribeDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeDetectorModelCommandError(
      output,
      context
    );
  }
  const contents: DescribeDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDetectorModelResponse",
    detectorModel: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.detectorModel !== undefined && data.detectorModel !== null) {
    contents.detectorModel = deserializeAws_restJson1DetectorModel(
      data.detectorModel,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeInputCommandError(output, context);
  }
  const contents: DescribeInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInputResponse",
    input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined && data.input !== null) {
    contents.input = deserializeAws_restJson1Input(data.input, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeLoggingOptionsResponse",
    loggingOptions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
    contents.loggingOptions = deserializeAws_restJson1LoggingOptions(
      data.loggingOptions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(
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

export const deserializeAws_restJson1ListDetectorModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDetectorModelsCommandError(
      output,
      context
    );
  }
  const contents: ListDetectorModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDetectorModelsResponse",
    detectorModelSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.detectorModelSummaries !== undefined &&
    data.detectorModelSummaries !== null
  ) {
    contents.detectorModelSummaries = deserializeAws_restJson1DetectorModelSummaries(
      data.detectorModelSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDetectorModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListDetectorModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDetectorModelVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListDetectorModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDetectorModelVersionsResponse",
    detectorModelVersionSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.detectorModelVersionSummaries !== undefined &&
    data.detectorModelVersionSummaries !== null
  ) {
    contents.detectorModelVersionSummaries = deserializeAws_restJson1DetectorModelVersionSummaries(
      data.detectorModelVersionSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDetectorModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListInputsCommandError(output, context);
  }
  const contents: ListInputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInputsResponse",
    inputSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputSummaries !== undefined && data.inputSummaries !== null) {
    contents.inputSummaries = deserializeAws_restJson1InputSummaries(
      data.inputSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1UpdateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateDetectorModelCommandError(
      output,
      context
    );
  }
  const contents: UpdateDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDetectorModelResponse",
    detectorModelConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.detectorModelConfiguration !== undefined &&
    data.detectorModelConfiguration !== null
  ) {
    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

export const deserializeAws_restJson1UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateInputCommandError(output, context);
  }
  const contents: UpdateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInputResponse",
    inputConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.inputConfiguration !== undefined &&
    data.inputConfiguration !== null
  ) {
    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(
      data.inputConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
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

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = data.resourceArn;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
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

const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1Action = (
  input: Action,
  context: __SerdeContext
): any => {
  return {
    ...(input.clearTimer !== undefined && {
      clearTimer: serializeAws_restJson1ClearTimerAction(
        input.clearTimer,
        context
      )
    }),
    ...(input.firehose !== undefined && {
      firehose: serializeAws_restJson1FirehoseAction(input.firehose, context)
    }),
    ...(input.iotEvents !== undefined && {
      iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context)
    }),
    ...(input.iotTopicPublish !== undefined && {
      iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(
        input.iotTopicPublish,
        context
      )
    }),
    ...(input.lambda !== undefined && {
      lambda: serializeAws_restJson1LambdaAction(input.lambda, context)
    }),
    ...(input.resetTimer !== undefined && {
      resetTimer: serializeAws_restJson1ResetTimerAction(
        input.resetTimer,
        context
      )
    }),
    ...(input.setTimer !== undefined && {
      setTimer: serializeAws_restJson1SetTimerAction(input.setTimer, context)
    }),
    ...(input.setVariable !== undefined && {
      setVariable: serializeAws_restJson1SetVariableAction(
        input.setVariable,
        context
      )
    }),
    ...(input.sns !== undefined && {
      sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context)
    }),
    ...(input.sqs !== undefined && {
      sqs: serializeAws_restJson1SqsAction(input.sqs, context)
    })
  };
};

const serializeAws_restJson1Actions = (
  input: Action[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Action(entry, context));
};

const serializeAws_restJson1Attribute = (
  input: Attribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.jsonPath !== undefined && { jsonPath: input.jsonPath })
  };
};

const serializeAws_restJson1Attributes = (
  input: Attribute[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Attribute(entry, context));
};

const serializeAws_restJson1ClearTimerAction = (
  input: ClearTimerAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.timerName !== undefined && { timerName: input.timerName })
  };
};

const serializeAws_restJson1DetectorDebugOption = (
  input: DetectorDebugOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorModelName !== undefined && {
      detectorModelName: input.detectorModelName
    }),
    ...(input.keyValue !== undefined && { keyValue: input.keyValue })
  };
};

const serializeAws_restJson1DetectorDebugOptions = (
  input: DetectorDebugOption[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1DetectorDebugOption(entry, context)
  );
};

const serializeAws_restJson1DetectorModelDefinition = (
  input: DetectorModelDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.initialStateName !== undefined && {
      initialStateName: input.initialStateName
    }),
    ...(input.states !== undefined && {
      states: serializeAws_restJson1States(input.states, context)
    })
  };
};

const serializeAws_restJson1Event = (
  input: Event,
  context: __SerdeContext
): any => {
  return {
    ...(input.actions !== undefined && {
      actions: serializeAws_restJson1Actions(input.actions, context)
    }),
    ...(input.condition !== undefined && { condition: input.condition }),
    ...(input.eventName !== undefined && { eventName: input.eventName })
  };
};

const serializeAws_restJson1Events = (
  input: Event[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Event(entry, context));
};

const serializeAws_restJson1FirehoseAction = (
  input: FirehoseAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.deliveryStreamName !== undefined && {
      deliveryStreamName: input.deliveryStreamName
    }),
    ...(input.separator !== undefined && { separator: input.separator })
  };
};

const serializeAws_restJson1InputDefinition = (
  input: InputDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined && {
      attributes: serializeAws_restJson1Attributes(input.attributes, context)
    })
  };
};

const serializeAws_restJson1IotEventsAction = (
  input: IotEventsAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputName !== undefined && { inputName: input.inputName })
  };
};

const serializeAws_restJson1IotTopicPublishAction = (
  input: IotTopicPublishAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.mqttTopic !== undefined && { mqttTopic: input.mqttTopic })
  };
};

const serializeAws_restJson1LambdaAction = (
  input: LambdaAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.functionArn !== undefined && { functionArn: input.functionArn })
  };
};

const serializeAws_restJson1LoggingOptions = (
  input: LoggingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectorDebugOptions !== undefined && {
      detectorDebugOptions: serializeAws_restJson1DetectorDebugOptions(
        input.detectorDebugOptions,
        context
      )
    }),
    ...(input.enabled !== undefined && { enabled: input.enabled }),
    ...(input.level !== undefined && { level: input.level }),
    ...(input.roleArn !== undefined && { roleArn: input.roleArn })
  };
};

const serializeAws_restJson1OnEnterLifecycle = (
  input: OnEnterLifecycle,
  context: __SerdeContext
): any => {
  return {
    ...(input.events !== undefined && {
      events: serializeAws_restJson1Events(input.events, context)
    })
  };
};

const serializeAws_restJson1OnExitLifecycle = (
  input: OnExitLifecycle,
  context: __SerdeContext
): any => {
  return {
    ...(input.events !== undefined && {
      events: serializeAws_restJson1Events(input.events, context)
    })
  };
};

const serializeAws_restJson1OnInputLifecycle = (
  input: OnInputLifecycle,
  context: __SerdeContext
): any => {
  return {
    ...(input.events !== undefined && {
      events: serializeAws_restJson1Events(input.events, context)
    }),
    ...(input.transitionEvents !== undefined && {
      transitionEvents: serializeAws_restJson1TransitionEvents(
        input.transitionEvents,
        context
      )
    })
  };
};

const serializeAws_restJson1ResetTimerAction = (
  input: ResetTimerAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.timerName !== undefined && { timerName: input.timerName })
  };
};

const serializeAws_restJson1SetTimerAction = (
  input: SetTimerAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.seconds !== undefined && { seconds: input.seconds }),
    ...(input.timerName !== undefined && { timerName: input.timerName })
  };
};

const serializeAws_restJson1SetVariableAction = (
  input: SetVariableAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.value !== undefined && { value: input.value }),
    ...(input.variableName !== undefined && {
      variableName: input.variableName
    })
  };
};

const serializeAws_restJson1SNSTopicPublishAction = (
  input: SNSTopicPublishAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.targetArn !== undefined && { targetArn: input.targetArn })
  };
};

const serializeAws_restJson1SqsAction = (
  input: SqsAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.queueUrl !== undefined && { queueUrl: input.queueUrl }),
    ...(input.useBase64 !== undefined && { useBase64: input.useBase64 })
  };
};

const serializeAws_restJson1State = (
  input: State,
  context: __SerdeContext
): any => {
  return {
    ...(input.onEnter !== undefined && {
      onEnter: serializeAws_restJson1OnEnterLifecycle(input.onEnter, context)
    }),
    ...(input.onExit !== undefined && {
      onExit: serializeAws_restJson1OnExitLifecycle(input.onExit, context)
    }),
    ...(input.onInput !== undefined && {
      onInput: serializeAws_restJson1OnInputLifecycle(input.onInput, context)
    }),
    ...(input.stateName !== undefined && { stateName: input.stateName })
  };
};

const serializeAws_restJson1States = (
  input: State[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1State(entry, context));
};

const serializeAws_restJson1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1Tags = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Tag(entry, context));
};

const serializeAws_restJson1TransitionEvent = (
  input: TransitionEvent,
  context: __SerdeContext
): any => {
  return {
    ...(input.actions !== undefined && {
      actions: serializeAws_restJson1Actions(input.actions, context)
    }),
    ...(input.condition !== undefined && { condition: input.condition }),
    ...(input.eventName !== undefined && { eventName: input.eventName }),
    ...(input.nextState !== undefined && { nextState: input.nextState })
  };
};

const serializeAws_restJson1TransitionEvents = (
  input: TransitionEvent[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1TransitionEvent(entry, context)
  );
};

const deserializeAws_restJson1Action = (
  output: any,
  context: __SerdeContext
): Action => {
  return {
    __type: "Action",
    clearTimer:
      output.clearTimer !== undefined && output.clearTimer !== null
        ? deserializeAws_restJson1ClearTimerAction(output.clearTimer, context)
        : undefined,
    firehose:
      output.firehose !== undefined && output.firehose !== null
        ? deserializeAws_restJson1FirehoseAction(output.firehose, context)
        : undefined,
    iotEvents:
      output.iotEvents !== undefined && output.iotEvents !== null
        ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context)
        : undefined,
    iotTopicPublish:
      output.iotTopicPublish !== undefined && output.iotTopicPublish !== null
        ? deserializeAws_restJson1IotTopicPublishAction(
            output.iotTopicPublish,
            context
          )
        : undefined,
    lambda:
      output.lambda !== undefined && output.lambda !== null
        ? deserializeAws_restJson1LambdaAction(output.lambda, context)
        : undefined,
    resetTimer:
      output.resetTimer !== undefined && output.resetTimer !== null
        ? deserializeAws_restJson1ResetTimerAction(output.resetTimer, context)
        : undefined,
    setTimer:
      output.setTimer !== undefined && output.setTimer !== null
        ? deserializeAws_restJson1SetTimerAction(output.setTimer, context)
        : undefined,
    setVariable:
      output.setVariable !== undefined && output.setVariable !== null
        ? deserializeAws_restJson1SetVariableAction(output.setVariable, context)
        : undefined,
    sns:
      output.sns !== undefined && output.sns !== null
        ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context)
        : undefined,
    sqs:
      output.sqs !== undefined && output.sqs !== null
        ? deserializeAws_restJson1SqsAction(output.sqs, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1Actions = (
  output: any,
  context: __SerdeContext
): Action[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Action(entry, context)
  );
};

const deserializeAws_restJson1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  return {
    __type: "Attribute",
    jsonPath:
      output.jsonPath !== undefined && output.jsonPath !== null
        ? output.jsonPath
        : undefined
  } as any;
};

const deserializeAws_restJson1Attributes = (
  output: any,
  context: __SerdeContext
): Attribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Attribute(entry, context)
  );
};

const deserializeAws_restJson1ClearTimerAction = (
  output: any,
  context: __SerdeContext
): ClearTimerAction => {
  return {
    __type: "ClearTimerAction",
    timerName:
      output.timerName !== undefined && output.timerName !== null
        ? output.timerName
        : undefined
  } as any;
};

const deserializeAws_restJson1DetectorDebugOption = (
  output: any,
  context: __SerdeContext
): DetectorDebugOption => {
  return {
    __type: "DetectorDebugOption",
    detectorModelName:
      output.detectorModelName !== undefined &&
      output.detectorModelName !== null
        ? output.detectorModelName
        : undefined,
    keyValue:
      output.keyValue !== undefined && output.keyValue !== null
        ? output.keyValue
        : undefined
  } as any;
};

const deserializeAws_restJson1DetectorDebugOptions = (
  output: any,
  context: __SerdeContext
): DetectorDebugOption[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DetectorDebugOption(entry, context)
  );
};

const deserializeAws_restJson1DetectorModel = (
  output: any,
  context: __SerdeContext
): DetectorModel => {
  return {
    __type: "DetectorModel",
    detectorModelConfiguration:
      output.detectorModelConfiguration !== undefined &&
      output.detectorModelConfiguration !== null
        ? deserializeAws_restJson1DetectorModelConfiguration(
            output.detectorModelConfiguration,
            context
          )
        : undefined,
    detectorModelDefinition:
      output.detectorModelDefinition !== undefined &&
      output.detectorModelDefinition !== null
        ? deserializeAws_restJson1DetectorModelDefinition(
            output.detectorModelDefinition,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DetectorModelConfiguration = (
  output: any,
  context: __SerdeContext
): DetectorModelConfiguration => {
  return {
    __type: "DetectorModelConfiguration",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    detectorModelArn:
      output.detectorModelArn !== undefined && output.detectorModelArn !== null
        ? output.detectorModelArn
        : undefined,
    detectorModelDescription:
      output.detectorModelDescription !== undefined &&
      output.detectorModelDescription !== null
        ? output.detectorModelDescription
        : undefined,
    detectorModelName:
      output.detectorModelName !== undefined &&
      output.detectorModelName !== null
        ? output.detectorModelName
        : undefined,
    detectorModelVersion:
      output.detectorModelVersion !== undefined &&
      output.detectorModelVersion !== null
        ? output.detectorModelVersion
        : undefined,
    evaluationMethod:
      output.evaluationMethod !== undefined && output.evaluationMethod !== null
        ? output.evaluationMethod
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1DetectorModelDefinition = (
  output: any,
  context: __SerdeContext
): DetectorModelDefinition => {
  return {
    __type: "DetectorModelDefinition",
    initialStateName:
      output.initialStateName !== undefined && output.initialStateName !== null
        ? output.initialStateName
        : undefined,
    states:
      output.states !== undefined && output.states !== null
        ? deserializeAws_restJson1States(output.states, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1DetectorModelSummaries = (
  output: any,
  context: __SerdeContext
): DetectorModelSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DetectorModelSummary(entry, context)
  );
};

const deserializeAws_restJson1DetectorModelSummary = (
  output: any,
  context: __SerdeContext
): DetectorModelSummary => {
  return {
    __type: "DetectorModelSummary",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    detectorModelDescription:
      output.detectorModelDescription !== undefined &&
      output.detectorModelDescription !== null
        ? output.detectorModelDescription
        : undefined,
    detectorModelName:
      output.detectorModelName !== undefined &&
      output.detectorModelName !== null
        ? output.detectorModelName
        : undefined
  } as any;
};

const deserializeAws_restJson1DetectorModelVersionSummaries = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DetectorModelVersionSummary(entry, context)
  );
};

const deserializeAws_restJson1DetectorModelVersionSummary = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary => {
  return {
    __type: "DetectorModelVersionSummary",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    detectorModelArn:
      output.detectorModelArn !== undefined && output.detectorModelArn !== null
        ? output.detectorModelArn
        : undefined,
    detectorModelName:
      output.detectorModelName !== undefined &&
      output.detectorModelName !== null
        ? output.detectorModelName
        : undefined,
    detectorModelVersion:
      output.detectorModelVersion !== undefined &&
      output.detectorModelVersion !== null
        ? output.detectorModelVersion
        : undefined,
    evaluationMethod:
      output.evaluationMethod !== undefined && output.evaluationMethod !== null
        ? output.evaluationMethod
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  return {
    __type: "Event",
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1Actions(output.actions, context)
        : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? output.condition
        : undefined,
    eventName:
      output.eventName !== undefined && output.eventName !== null
        ? output.eventName
        : undefined
  } as any;
};

const deserializeAws_restJson1Events = (
  output: any,
  context: __SerdeContext
): Event[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Event(entry, context)
  );
};

const deserializeAws_restJson1FirehoseAction = (
  output: any,
  context: __SerdeContext
): FirehoseAction => {
  return {
    __type: "FirehoseAction",
    deliveryStreamName:
      output.deliveryStreamName !== undefined &&
      output.deliveryStreamName !== null
        ? output.deliveryStreamName
        : undefined,
    separator:
      output.separator !== undefined && output.separator !== null
        ? output.separator
        : undefined
  } as any;
};

const deserializeAws_restJson1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  return {
    __type: "Input",
    inputConfiguration:
      output.inputConfiguration !== undefined &&
      output.inputConfiguration !== null
        ? deserializeAws_restJson1InputConfiguration(
            output.inputConfiguration,
            context
          )
        : undefined,
    inputDefinition:
      output.inputDefinition !== undefined && output.inputDefinition !== null
        ? deserializeAws_restJson1InputDefinition(
            output.inputDefinition,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1InputConfiguration = (
  output: any,
  context: __SerdeContext
): InputConfiguration => {
  return {
    __type: "InputConfiguration",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    inputArn:
      output.inputArn !== undefined && output.inputArn !== null
        ? output.inputArn
        : undefined,
    inputDescription:
      output.inputDescription !== undefined && output.inputDescription !== null
        ? output.inputDescription
        : undefined,
    inputName:
      output.inputName !== undefined && output.inputName !== null
        ? output.inputName
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1InputDefinition = (
  output: any,
  context: __SerdeContext
): InputDefinition => {
  return {
    __type: "InputDefinition",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1Attributes(output.attributes, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1InputSummaries = (
  output: any,
  context: __SerdeContext
): InputSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InputSummary(entry, context)
  );
};

const deserializeAws_restJson1InputSummary = (
  output: any,
  context: __SerdeContext
): InputSummary => {
  return {
    __type: "InputSummary",
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    inputArn:
      output.inputArn !== undefined && output.inputArn !== null
        ? output.inputArn
        : undefined,
    inputDescription:
      output.inputDescription !== undefined && output.inputDescription !== null
        ? output.inputDescription
        : undefined,
    inputName:
      output.inputName !== undefined && output.inputName !== null
        ? output.inputName
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1IotEventsAction = (
  output: any,
  context: __SerdeContext
): IotEventsAction => {
  return {
    __type: "IotEventsAction",
    inputName:
      output.inputName !== undefined && output.inputName !== null
        ? output.inputName
        : undefined
  } as any;
};

const deserializeAws_restJson1IotTopicPublishAction = (
  output: any,
  context: __SerdeContext
): IotTopicPublishAction => {
  return {
    __type: "IotTopicPublishAction",
    mqttTopic:
      output.mqttTopic !== undefined && output.mqttTopic !== null
        ? output.mqttTopic
        : undefined
  } as any;
};

const deserializeAws_restJson1LambdaAction = (
  output: any,
  context: __SerdeContext
): LambdaAction => {
  return {
    __type: "LambdaAction",
    functionArn:
      output.functionArn !== undefined && output.functionArn !== null
        ? output.functionArn
        : undefined
  } as any;
};

const deserializeAws_restJson1LoggingOptions = (
  output: any,
  context: __SerdeContext
): LoggingOptions => {
  return {
    __type: "LoggingOptions",
    detectorDebugOptions:
      output.detectorDebugOptions !== undefined &&
      output.detectorDebugOptions !== null
        ? deserializeAws_restJson1DetectorDebugOptions(
            output.detectorDebugOptions,
            context
          )
        : undefined,
    enabled:
      output.enabled !== undefined && output.enabled !== null
        ? output.enabled
        : undefined,
    level:
      output.level !== undefined && output.level !== null
        ? output.level
        : undefined,
    roleArn:
      output.roleArn !== undefined && output.roleArn !== null
        ? output.roleArn
        : undefined
  } as any;
};

const deserializeAws_restJson1OnEnterLifecycle = (
  output: any,
  context: __SerdeContext
): OnEnterLifecycle => {
  return {
    __type: "OnEnterLifecycle",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_restJson1Events(output.events, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1OnExitLifecycle = (
  output: any,
  context: __SerdeContext
): OnExitLifecycle => {
  return {
    __type: "OnExitLifecycle",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_restJson1Events(output.events, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1OnInputLifecycle = (
  output: any,
  context: __SerdeContext
): OnInputLifecycle => {
  return {
    __type: "OnInputLifecycle",
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_restJson1Events(output.events, context)
        : undefined,
    transitionEvents:
      output.transitionEvents !== undefined && output.transitionEvents !== null
        ? deserializeAws_restJson1TransitionEvents(
            output.transitionEvents,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ResetTimerAction = (
  output: any,
  context: __SerdeContext
): ResetTimerAction => {
  return {
    __type: "ResetTimerAction",
    timerName:
      output.timerName !== undefined && output.timerName !== null
        ? output.timerName
        : undefined
  } as any;
};

const deserializeAws_restJson1SetTimerAction = (
  output: any,
  context: __SerdeContext
): SetTimerAction => {
  return {
    __type: "SetTimerAction",
    seconds:
      output.seconds !== undefined && output.seconds !== null
        ? output.seconds
        : undefined,
    timerName:
      output.timerName !== undefined && output.timerName !== null
        ? output.timerName
        : undefined
  } as any;
};

const deserializeAws_restJson1SetVariableAction = (
  output: any,
  context: __SerdeContext
): SetVariableAction => {
  return {
    __type: "SetVariableAction",
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined,
    variableName:
      output.variableName !== undefined && output.variableName !== null
        ? output.variableName
        : undefined
  } as any;
};

const deserializeAws_restJson1SNSTopicPublishAction = (
  output: any,
  context: __SerdeContext
): SNSTopicPublishAction => {
  return {
    __type: "SNSTopicPublishAction",
    targetArn:
      output.targetArn !== undefined && output.targetArn !== null
        ? output.targetArn
        : undefined
  } as any;
};

const deserializeAws_restJson1SqsAction = (
  output: any,
  context: __SerdeContext
): SqsAction => {
  return {
    __type: "SqsAction",
    queueUrl:
      output.queueUrl !== undefined && output.queueUrl !== null
        ? output.queueUrl
        : undefined,
    useBase64:
      output.useBase64 !== undefined && output.useBase64 !== null
        ? output.useBase64
        : undefined
  } as any;
};

const deserializeAws_restJson1State = (
  output: any,
  context: __SerdeContext
): State => {
  return {
    __type: "State",
    onEnter:
      output.onEnter !== undefined && output.onEnter !== null
        ? deserializeAws_restJson1OnEnterLifecycle(output.onEnter, context)
        : undefined,
    onExit:
      output.onExit !== undefined && output.onExit !== null
        ? deserializeAws_restJson1OnExitLifecycle(output.onExit, context)
        : undefined,
    onInput:
      output.onInput !== undefined && output.onInput !== null
        ? deserializeAws_restJson1OnInputLifecycle(output.onInput, context)
        : undefined,
    stateName:
      output.stateName !== undefined && output.stateName !== null
        ? output.stateName
        : undefined
  } as any;
};

const deserializeAws_restJson1States = (
  output: any,
  context: __SerdeContext
): State[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1State(entry, context)
  );
};

const deserializeAws_restJson1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1Tags = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Tag(entry, context)
  );
};

const deserializeAws_restJson1TransitionEvent = (
  output: any,
  context: __SerdeContext
): TransitionEvent => {
  return {
    __type: "TransitionEvent",
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1Actions(output.actions, context)
        : undefined,
    condition:
      output.condition !== undefined && output.condition !== null
        ? output.condition
        : undefined,
    eventName:
      output.eventName !== undefined && output.eventName !== null
        ? output.eventName
        : undefined,
    nextState:
      output.nextState !== undefined && output.nextState !== null
        ? output.nextState
        : undefined
  } as any;
};

const deserializeAws_restJson1TransitionEvents = (
  output: any,
  context: __SerdeContext
): TransitionEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1TransitionEvent(entry, context)
  );
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
