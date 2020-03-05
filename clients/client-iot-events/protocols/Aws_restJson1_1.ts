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

export async function serializeAws_restJson1_1CreateDetectorModelCommand(
  input: CreateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/detector-models";
  let body: any;
  const bodyParams: any = {};
  if (input.detectorModelDefinition !== undefined) {
    bodyParams[
      "detectorModelDefinition"
    ] = serializeAws_restJson1_1DetectorModelDefinition(
      input.detectorModelDefinition,
      context
    );
  }
  if (input.detectorModelDescription !== undefined) {
    bodyParams["detectorModelDescription"] = input.detectorModelDescription;
  }
  if (input.detectorModelName !== undefined) {
    bodyParams["detectorModelName"] = input.detectorModelName;
  }
  if (input.evaluationMethod !== undefined) {
    bodyParams["evaluationMethod"] = input.evaluationMethod;
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
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

export async function serializeAws_restJson1_1CreateInputCommand(
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/inputs";
  let body: any;
  const bodyParams: any = {};
  if (input.inputDefinition !== undefined) {
    bodyParams["inputDefinition"] = serializeAws_restJson1_1InputDefinition(
      input.inputDefinition,
      context
    );
  }
  if (input.inputDescription !== undefined) {
    bodyParams["inputDescription"] = input.inputDescription;
  }
  if (input.inputName !== undefined) {
    bodyParams["inputName"] = input.inputName;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
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

export async function serializeAws_restJson1_1DeleteDetectorModelCommand(
  input: DeleteDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteInputCommand(
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeDetectorModelCommand(
  input: DescribeDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.detectorModelVersion !== undefined) {
    query["version"] = input.detectorModelVersion;
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

export async function serializeAws_restJson1_1DescribeInputCommand(
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeLoggingOptionsCommand(
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/logging";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListDetectorModelVersionsCommand(
  input: ListDetectorModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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

export async function serializeAws_restJson1_1ListDetectorModelsCommand(
  input: ListDetectorModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/detector-models";
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

export async function serializeAws_restJson1_1ListInputsCommand(
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/inputs";
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
  let resolvedPath = "/tags";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
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

export async function serializeAws_restJson1_1PutLoggingOptionsCommand(
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/logging";
  let body: any;
  const bodyParams: any = {};
  if (input.loggingOptions !== undefined) {
    bodyParams["loggingOptions"] = serializeAws_restJson1_1LoggingOptions(
      input.loggingOptions,
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

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.tags, context);
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

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags";
  const query: any = {};
  if (input.resourceArn !== undefined) {
    query["resourceArn"] = input.resourceArn;
  }
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

export async function serializeAws_restJson1_1UpdateDetectorModelCommand(
  input: UpdateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.detectorModelDefinition !== undefined) {
    bodyParams[
      "detectorModelDefinition"
    ] = serializeAws_restJson1_1DetectorModelDefinition(
      input.detectorModelDefinition,
      context
    );
  }
  if (input.detectorModelDescription !== undefined) {
    bodyParams["detectorModelDescription"] = input.detectorModelDescription;
  }
  if (input.evaluationMethod !== undefined) {
    bodyParams["evaluationMethod"] = input.evaluationMethod;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
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

export async function serializeAws_restJson1_1UpdateInputCommand(
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.inputDefinition !== undefined) {
    bodyParams["inputDefinition"] = serializeAws_restJson1_1InputDefinition(
      input.inputDefinition,
      context
    );
  }
  if (input.inputDescription !== undefined) {
    bodyParams["inputDescription"] = input.inputDescription;
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

export async function deserializeAws_restJson1_1CreateDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDetectorModelCommandError(
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
    contents.detectorModelConfiguration = deserializeAws_restJson1_1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDetectorModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.iot.columbo.common.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1CreateInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateInputCommandError(output, context);
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
    contents.inputConfiguration = deserializeAws_restJson1_1InputConfiguration(
      data.inputConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1DeleteDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDetectorModelCommandError(
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
}

async function deserializeAws_restJson1_1DeleteDetectorModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1DeleteInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1DescribeDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDetectorModelCommandError(
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
    contents.detectorModel = deserializeAws_restJson1_1DetectorModel(
      data.detectorModel,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDetectorModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1DescribeInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeInputCommandError(output, context);
  }
  const contents: DescribeInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInputResponse",
    input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined && data.input !== null) {
    contents.input = deserializeAws_restJson1_1Input(data.input, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1DescribeLoggingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeLoggingOptionsCommandError(
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
    contents.loggingOptions = deserializeAws_restJson1_1LoggingOptions(
      data.loggingOptions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeLoggingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.iot.columbo.common.exceptions#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedOperationExceptionResponse(
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

export async function deserializeAws_restJson1_1ListDetectorModelVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDetectorModelVersionsCommandError(
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
    contents.detectorModelVersionSummaries = deserializeAws_restJson1_1DetectorModelVersionSummaries(
      data.detectorModelVersionSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDetectorModelVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1ListDetectorModelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDetectorModelsCommandError(
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
    contents.detectorModelSummaries = deserializeAws_restJson1_1DetectorModelSummaries(
      data.detectorModelSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDetectorModelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1ListInputsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListInputsCommandError(output, context);
  }
  const contents: ListInputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInputsResponse",
    inputSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputSummaries !== undefined && data.inputSummaries !== null) {
    contents.inputSummaries = deserializeAws_restJson1_1InputSummaries(
      data.inputSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInputsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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
    contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
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
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1PutLoggingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLoggingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazon.iot.columbo.common.exceptions#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedOperationExceptionResponse(
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
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.iot.columbo.common.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1UpdateDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDetectorModelCommandError(
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
    contents.detectorModelConfiguration = deserializeAws_restJson1_1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateDetectorModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

export async function deserializeAws_restJson1_1UpdateInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateInputCommandError(output, context);
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
    contents.inputConfiguration = deserializeAws_restJson1_1InputConfiguration(
      data.inputConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
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

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
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

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
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

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
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

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined
  };
  const data: any = await parseBody(output.body, context);
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

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
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

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
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

const deserializeAws_restJson1_1UnsupportedOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
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

const serializeAws_restJson1_1Action = (
  input: Action,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clearTimer !== undefined) {
    bodyParams["clearTimer"] = serializeAws_restJson1_1ClearTimerAction(
      input.clearTimer,
      context
    );
  }
  if (input.firehose !== undefined) {
    bodyParams["firehose"] = serializeAws_restJson1_1FirehoseAction(
      input.firehose,
      context
    );
  }
  if (input.iotEvents !== undefined) {
    bodyParams["iotEvents"] = serializeAws_restJson1_1IotEventsAction(
      input.iotEvents,
      context
    );
  }
  if (input.iotTopicPublish !== undefined) {
    bodyParams[
      "iotTopicPublish"
    ] = serializeAws_restJson1_1IotTopicPublishAction(
      input.iotTopicPublish,
      context
    );
  }
  if (input.lambda !== undefined) {
    bodyParams["lambda"] = serializeAws_restJson1_1LambdaAction(
      input.lambda,
      context
    );
  }
  if (input.resetTimer !== undefined) {
    bodyParams["resetTimer"] = serializeAws_restJson1_1ResetTimerAction(
      input.resetTimer,
      context
    );
  }
  if (input.setTimer !== undefined) {
    bodyParams["setTimer"] = serializeAws_restJson1_1SetTimerAction(
      input.setTimer,
      context
    );
  }
  if (input.setVariable !== undefined) {
    bodyParams["setVariable"] = serializeAws_restJson1_1SetVariableAction(
      input.setVariable,
      context
    );
  }
  if (input.sns !== undefined) {
    bodyParams["sns"] = serializeAws_restJson1_1SNSTopicPublishAction(
      input.sns,
      context
    );
  }
  if (input.sqs !== undefined) {
    bodyParams["sqs"] = serializeAws_restJson1_1SqsAction(input.sqs, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1Actions = (
  input: Array<Action>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Action(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Attribute = (
  input: Attribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.jsonPath !== undefined) {
    bodyParams["jsonPath"] = input.jsonPath;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Attributes = (
  input: Array<Attribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Attribute(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1ClearTimerAction = (
  input: ClearTimerAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.timerName !== undefined) {
    bodyParams["timerName"] = input.timerName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DetectorDebugOption = (
  input: DetectorDebugOption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorModelName !== undefined) {
    bodyParams["detectorModelName"] = input.detectorModelName;
  }
  if (input.keyValue !== undefined) {
    bodyParams["keyValue"] = input.keyValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DetectorDebugOptions = (
  input: Array<DetectorDebugOption>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1DetectorDebugOption(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1DetectorModelDefinition = (
  input: DetectorModelDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.initialStateName !== undefined) {
    bodyParams["initialStateName"] = input.initialStateName;
  }
  if (input.states !== undefined) {
    bodyParams["states"] = serializeAws_restJson1_1States(
      input.states,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Event = (
  input: Event,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actions !== undefined) {
    bodyParams["actions"] = serializeAws_restJson1_1Actions(
      input.actions,
      context
    );
  }
  if (input.condition !== undefined) {
    bodyParams["condition"] = input.condition;
  }
  if (input.eventName !== undefined) {
    bodyParams["eventName"] = input.eventName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Events = (
  input: Array<Event>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Event(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1FirehoseAction = (
  input: FirehoseAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deliveryStreamName !== undefined) {
    bodyParams["deliveryStreamName"] = input.deliveryStreamName;
  }
  if (input.separator !== undefined) {
    bodyParams["separator"] = input.separator;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputDefinition = (
  input: InputDefinition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_restJson1_1Attributes(
      input.attributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1IotEventsAction = (
  input: IotEventsAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.inputName !== undefined) {
    bodyParams["inputName"] = input.inputName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IotTopicPublishAction = (
  input: IotTopicPublishAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.mqttTopic !== undefined) {
    bodyParams["mqttTopic"] = input.mqttTopic;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LambdaAction = (
  input: LambdaAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.functionArn !== undefined) {
    bodyParams["functionArn"] = input.functionArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LoggingOptions = (
  input: LoggingOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.detectorDebugOptions !== undefined) {
    bodyParams[
      "detectorDebugOptions"
    ] = serializeAws_restJson1_1DetectorDebugOptions(
      input.detectorDebugOptions,
      context
    );
  }
  if (input.enabled !== undefined) {
    bodyParams["enabled"] = input.enabled;
  }
  if (input.level !== undefined) {
    bodyParams["level"] = input.level;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OnEnterLifecycle = (
  input: OnEnterLifecycle,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.events !== undefined) {
    bodyParams["events"] = serializeAws_restJson1_1Events(
      input.events,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OnExitLifecycle = (
  input: OnExitLifecycle,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.events !== undefined) {
    bodyParams["events"] = serializeAws_restJson1_1Events(
      input.events,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1OnInputLifecycle = (
  input: OnInputLifecycle,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.events !== undefined) {
    bodyParams["events"] = serializeAws_restJson1_1Events(
      input.events,
      context
    );
  }
  if (input.transitionEvents !== undefined) {
    bodyParams["transitionEvents"] = serializeAws_restJson1_1TransitionEvents(
      input.transitionEvents,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ResetTimerAction = (
  input: ResetTimerAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.timerName !== undefined) {
    bodyParams["timerName"] = input.timerName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SNSTopicPublishAction = (
  input: SNSTopicPublishAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.targetArn !== undefined) {
    bodyParams["targetArn"] = input.targetArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SetTimerAction = (
  input: SetTimerAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.seconds !== undefined) {
    bodyParams["seconds"] = input.seconds;
  }
  if (input.timerName !== undefined) {
    bodyParams["timerName"] = input.timerName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SetVariableAction = (
  input: SetVariableAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  if (input.variableName !== undefined) {
    bodyParams["variableName"] = input.variableName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SqsAction = (
  input: SqsAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.queueUrl !== undefined) {
    bodyParams["queueUrl"] = input.queueUrl;
  }
  if (input.useBase64 !== undefined) {
    bodyParams["useBase64"] = input.useBase64;
  }
  return bodyParams;
};

const serializeAws_restJson1_1State = (
  input: State,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.onEnter !== undefined) {
    bodyParams["onEnter"] = serializeAws_restJson1_1OnEnterLifecycle(
      input.onEnter,
      context
    );
  }
  if (input.onExit !== undefined) {
    bodyParams["onExit"] = serializeAws_restJson1_1OnExitLifecycle(
      input.onExit,
      context
    );
  }
  if (input.onInput !== undefined) {
    bodyParams["onInput"] = serializeAws_restJson1_1OnInputLifecycle(
      input.onInput,
      context
    );
  }
  if (input.stateName !== undefined) {
    bodyParams["stateName"] = input.stateName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1States = (
  input: Array<State>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1State(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tags = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TransitionEvent = (
  input: TransitionEvent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.actions !== undefined) {
    bodyParams["actions"] = serializeAws_restJson1_1Actions(
      input.actions,
      context
    );
  }
  if (input.condition !== undefined) {
    bodyParams["condition"] = input.condition;
  }
  if (input.eventName !== undefined) {
    bodyParams["eventName"] = input.eventName;
  }
  if (input.nextState !== undefined) {
    bodyParams["nextState"] = input.nextState;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TransitionEvents = (
  input: Array<TransitionEvent>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1TransitionEvent(entry, context));
  }
  return contents;
};

const deserializeAws_restJson1_1Action = (
  output: any,
  context: __SerdeContext
): Action => {
  let contents: any = {
    __type: "Action",
    clearTimer: undefined,
    firehose: undefined,
    iotEvents: undefined,
    iotTopicPublish: undefined,
    lambda: undefined,
    resetTimer: undefined,
    setTimer: undefined,
    setVariable: undefined,
    sns: undefined,
    sqs: undefined
  };
  if (output.clearTimer !== undefined && output.clearTimer !== null) {
    contents.clearTimer = deserializeAws_restJson1_1ClearTimerAction(
      output.clearTimer,
      context
    );
  }
  if (output.firehose !== undefined && output.firehose !== null) {
    contents.firehose = deserializeAws_restJson1_1FirehoseAction(
      output.firehose,
      context
    );
  }
  if (output.iotEvents !== undefined && output.iotEvents !== null) {
    contents.iotEvents = deserializeAws_restJson1_1IotEventsAction(
      output.iotEvents,
      context
    );
  }
  if (output.iotTopicPublish !== undefined && output.iotTopicPublish !== null) {
    contents.iotTopicPublish = deserializeAws_restJson1_1IotTopicPublishAction(
      output.iotTopicPublish,
      context
    );
  }
  if (output.lambda !== undefined && output.lambda !== null) {
    contents.lambda = deserializeAws_restJson1_1LambdaAction(
      output.lambda,
      context
    );
  }
  if (output.resetTimer !== undefined && output.resetTimer !== null) {
    contents.resetTimer = deserializeAws_restJson1_1ResetTimerAction(
      output.resetTimer,
      context
    );
  }
  if (output.setTimer !== undefined && output.setTimer !== null) {
    contents.setTimer = deserializeAws_restJson1_1SetTimerAction(
      output.setTimer,
      context
    );
  }
  if (output.setVariable !== undefined && output.setVariable !== null) {
    contents.setVariable = deserializeAws_restJson1_1SetVariableAction(
      output.setVariable,
      context
    );
  }
  if (output.sns !== undefined && output.sns !== null) {
    contents.sns = deserializeAws_restJson1_1SNSTopicPublishAction(
      output.sns,
      context
    );
  }
  if (output.sqs !== undefined && output.sqs !== null) {
    contents.sqs = deserializeAws_restJson1_1SqsAction(output.sqs, context);
  }
  return contents;
};

const deserializeAws_restJson1_1Actions = (
  output: any,
  context: __SerdeContext
): Array<Action> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Action(entry, context)
  );
};

const deserializeAws_restJson1_1Attribute = (
  output: any,
  context: __SerdeContext
): Attribute => {
  let contents: any = {
    __type: "Attribute",
    jsonPath: undefined
  };
  if (output.jsonPath !== undefined && output.jsonPath !== null) {
    contents.jsonPath = output.jsonPath;
  }
  return contents;
};

const deserializeAws_restJson1_1Attributes = (
  output: any,
  context: __SerdeContext
): Array<Attribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Attribute(entry, context)
  );
};

const deserializeAws_restJson1_1ClearTimerAction = (
  output: any,
  context: __SerdeContext
): ClearTimerAction => {
  let contents: any = {
    __type: "ClearTimerAction",
    timerName: undefined
  };
  if (output.timerName !== undefined && output.timerName !== null) {
    contents.timerName = output.timerName;
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorDebugOption = (
  output: any,
  context: __SerdeContext
): DetectorDebugOption => {
  let contents: any = {
    __type: "DetectorDebugOption",
    detectorModelName: undefined,
    keyValue: undefined
  };
  if (
    output.detectorModelName !== undefined &&
    output.detectorModelName !== null
  ) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (output.keyValue !== undefined && output.keyValue !== null) {
    contents.keyValue = output.keyValue;
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorDebugOptions = (
  output: any,
  context: __SerdeContext
): Array<DetectorDebugOption> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DetectorDebugOption(entry, context)
  );
};

const deserializeAws_restJson1_1DetectorModel = (
  output: any,
  context: __SerdeContext
): DetectorModel => {
  let contents: any = {
    __type: "DetectorModel",
    detectorModelConfiguration: undefined,
    detectorModelDefinition: undefined
  };
  if (
    output.detectorModelConfiguration !== undefined &&
    output.detectorModelConfiguration !== null
  ) {
    contents.detectorModelConfiguration = deserializeAws_restJson1_1DetectorModelConfiguration(
      output.detectorModelConfiguration,
      context
    );
  }
  if (
    output.detectorModelDefinition !== undefined &&
    output.detectorModelDefinition !== null
  ) {
    contents.detectorModelDefinition = deserializeAws_restJson1_1DetectorModelDefinition(
      output.detectorModelDefinition,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorModelConfiguration = (
  output: any,
  context: __SerdeContext
): DetectorModelConfiguration => {
  let contents: any = {
    __type: "DetectorModelConfiguration",
    creationTime: undefined,
    detectorModelArn: undefined,
    detectorModelDescription: undefined,
    detectorModelName: undefined,
    detectorModelVersion: undefined,
    evaluationMethod: undefined,
    key: undefined,
    lastUpdateTime: undefined,
    roleArn: undefined,
    status: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (
    output.detectorModelArn !== undefined &&
    output.detectorModelArn !== null
  ) {
    contents.detectorModelArn = output.detectorModelArn;
  }
  if (
    output.detectorModelDescription !== undefined &&
    output.detectorModelDescription !== null
  ) {
    contents.detectorModelDescription = output.detectorModelDescription;
  }
  if (
    output.detectorModelName !== undefined &&
    output.detectorModelName !== null
  ) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (
    output.detectorModelVersion !== undefined &&
    output.detectorModelVersion !== null
  ) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (
    output.evaluationMethod !== undefined &&
    output.evaluationMethod !== null
  ) {
    contents.evaluationMethod = output.evaluationMethod;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorModelDefinition = (
  output: any,
  context: __SerdeContext
): DetectorModelDefinition => {
  let contents: any = {
    __type: "DetectorModelDefinition",
    initialStateName: undefined,
    states: undefined
  };
  if (
    output.initialStateName !== undefined &&
    output.initialStateName !== null
  ) {
    contents.initialStateName = output.initialStateName;
  }
  if (output.states !== undefined && output.states !== null) {
    contents.states = deserializeAws_restJson1_1States(output.states, context);
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorModelSummaries = (
  output: any,
  context: __SerdeContext
): Array<DetectorModelSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DetectorModelSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DetectorModelSummary = (
  output: any,
  context: __SerdeContext
): DetectorModelSummary => {
  let contents: any = {
    __type: "DetectorModelSummary",
    creationTime: undefined,
    detectorModelDescription: undefined,
    detectorModelName: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (
    output.detectorModelDescription !== undefined &&
    output.detectorModelDescription !== null
  ) {
    contents.detectorModelDescription = output.detectorModelDescription;
  }
  if (
    output.detectorModelName !== undefined &&
    output.detectorModelName !== null
  ) {
    contents.detectorModelName = output.detectorModelName;
  }
  return contents;
};

const deserializeAws_restJson1_1DetectorModelVersionSummaries = (
  output: any,
  context: __SerdeContext
): Array<DetectorModelVersionSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DetectorModelVersionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DetectorModelVersionSummary = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary => {
  let contents: any = {
    __type: "DetectorModelVersionSummary",
    creationTime: undefined,
    detectorModelArn: undefined,
    detectorModelName: undefined,
    detectorModelVersion: undefined,
    evaluationMethod: undefined,
    lastUpdateTime: undefined,
    roleArn: undefined,
    status: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (
    output.detectorModelArn !== undefined &&
    output.detectorModelArn !== null
  ) {
    contents.detectorModelArn = output.detectorModelArn;
  }
  if (
    output.detectorModelName !== undefined &&
    output.detectorModelName !== null
  ) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (
    output.detectorModelVersion !== undefined &&
    output.detectorModelVersion !== null
  ) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (
    output.evaluationMethod !== undefined &&
    output.evaluationMethod !== null
  ) {
    contents.evaluationMethod = output.evaluationMethod;
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  let contents: any = {
    __type: "Event",
    actions: undefined,
    condition: undefined,
    eventName: undefined
  };
  if (output.actions !== undefined && output.actions !== null) {
    contents.actions = deserializeAws_restJson1_1Actions(
      output.actions,
      context
    );
  }
  if (output.condition !== undefined && output.condition !== null) {
    contents.condition = output.condition;
  }
  if (output.eventName !== undefined && output.eventName !== null) {
    contents.eventName = output.eventName;
  }
  return contents;
};

const deserializeAws_restJson1_1Events = (
  output: any,
  context: __SerdeContext
): Array<Event> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Event(entry, context)
  );
};

const deserializeAws_restJson1_1FirehoseAction = (
  output: any,
  context: __SerdeContext
): FirehoseAction => {
  let contents: any = {
    __type: "FirehoseAction",
    deliveryStreamName: undefined,
    separator: undefined
  };
  if (
    output.deliveryStreamName !== undefined &&
    output.deliveryStreamName !== null
  ) {
    contents.deliveryStreamName = output.deliveryStreamName;
  }
  if (output.separator !== undefined && output.separator !== null) {
    contents.separator = output.separator;
  }
  return contents;
};

const deserializeAws_restJson1_1Input = (
  output: any,
  context: __SerdeContext
): Input => {
  let contents: any = {
    __type: "Input",
    inputConfiguration: undefined,
    inputDefinition: undefined
  };
  if (
    output.inputConfiguration !== undefined &&
    output.inputConfiguration !== null
  ) {
    contents.inputConfiguration = deserializeAws_restJson1_1InputConfiguration(
      output.inputConfiguration,
      context
    );
  }
  if (output.inputDefinition !== undefined && output.inputDefinition !== null) {
    contents.inputDefinition = deserializeAws_restJson1_1InputDefinition(
      output.inputDefinition,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputConfiguration = (
  output: any,
  context: __SerdeContext
): InputConfiguration => {
  let contents: any = {
    __type: "InputConfiguration",
    creationTime: undefined,
    inputArn: undefined,
    inputDescription: undefined,
    inputName: undefined,
    lastUpdateTime: undefined,
    status: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.inputArn !== undefined && output.inputArn !== null) {
    contents.inputArn = output.inputArn;
  }
  if (
    output.inputDescription !== undefined &&
    output.inputDescription !== null
  ) {
    contents.inputDescription = output.inputDescription;
  }
  if (output.inputName !== undefined && output.inputName !== null) {
    contents.inputName = output.inputName;
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1InputDefinition = (
  output: any,
  context: __SerdeContext
): InputDefinition => {
  let contents: any = {
    __type: "InputDefinition",
    attributes: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_restJson1_1Attributes(
      output.attributes,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1InputSummaries = (
  output: any,
  context: __SerdeContext
): Array<InputSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InputSummary(entry, context)
  );
};

const deserializeAws_restJson1_1InputSummary = (
  output: any,
  context: __SerdeContext
): InputSummary => {
  let contents: any = {
    __type: "InputSummary",
    creationTime: undefined,
    inputArn: undefined,
    inputDescription: undefined,
    inputName: undefined,
    lastUpdateTime: undefined,
    status: undefined
  };
  if (output.creationTime !== undefined && output.creationTime !== null) {
    contents.creationTime = new Date(Math.round(output.creationTime * 1000));
  }
  if (output.inputArn !== undefined && output.inputArn !== null) {
    contents.inputArn = output.inputArn;
  }
  if (
    output.inputDescription !== undefined &&
    output.inputDescription !== null
  ) {
    contents.inputDescription = output.inputDescription;
  }
  if (output.inputName !== undefined && output.inputName !== null) {
    contents.inputName = output.inputName;
  }
  if (output.lastUpdateTime !== undefined && output.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(
      Math.round(output.lastUpdateTime * 1000)
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1IotEventsAction = (
  output: any,
  context: __SerdeContext
): IotEventsAction => {
  let contents: any = {
    __type: "IotEventsAction",
    inputName: undefined
  };
  if (output.inputName !== undefined && output.inputName !== null) {
    contents.inputName = output.inputName;
  }
  return contents;
};

const deserializeAws_restJson1_1IotTopicPublishAction = (
  output: any,
  context: __SerdeContext
): IotTopicPublishAction => {
  let contents: any = {
    __type: "IotTopicPublishAction",
    mqttTopic: undefined
  };
  if (output.mqttTopic !== undefined && output.mqttTopic !== null) {
    contents.mqttTopic = output.mqttTopic;
  }
  return contents;
};

const deserializeAws_restJson1_1LambdaAction = (
  output: any,
  context: __SerdeContext
): LambdaAction => {
  let contents: any = {
    __type: "LambdaAction",
    functionArn: undefined
  };
  if (output.functionArn !== undefined && output.functionArn !== null) {
    contents.functionArn = output.functionArn;
  }
  return contents;
};

const deserializeAws_restJson1_1LoggingOptions = (
  output: any,
  context: __SerdeContext
): LoggingOptions => {
  let contents: any = {
    __type: "LoggingOptions",
    detectorDebugOptions: undefined,
    enabled: undefined,
    level: undefined,
    roleArn: undefined
  };
  if (
    output.detectorDebugOptions !== undefined &&
    output.detectorDebugOptions !== null
  ) {
    contents.detectorDebugOptions = deserializeAws_restJson1_1DetectorDebugOptions(
      output.detectorDebugOptions,
      context
    );
  }
  if (output.enabled !== undefined && output.enabled !== null) {
    contents.enabled = output.enabled;
  }
  if (output.level !== undefined && output.level !== null) {
    contents.level = output.level;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_restJson1_1OnEnterLifecycle = (
  output: any,
  context: __SerdeContext
): OnEnterLifecycle => {
  let contents: any = {
    __type: "OnEnterLifecycle",
    events: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_restJson1_1Events(output.events, context);
  }
  return contents;
};

const deserializeAws_restJson1_1OnExitLifecycle = (
  output: any,
  context: __SerdeContext
): OnExitLifecycle => {
  let contents: any = {
    __type: "OnExitLifecycle",
    events: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_restJson1_1Events(output.events, context);
  }
  return contents;
};

const deserializeAws_restJson1_1OnInputLifecycle = (
  output: any,
  context: __SerdeContext
): OnInputLifecycle => {
  let contents: any = {
    __type: "OnInputLifecycle",
    events: undefined,
    transitionEvents: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_restJson1_1Events(output.events, context);
  }
  if (
    output.transitionEvents !== undefined &&
    output.transitionEvents !== null
  ) {
    contents.transitionEvents = deserializeAws_restJson1_1TransitionEvents(
      output.transitionEvents,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ResetTimerAction = (
  output: any,
  context: __SerdeContext
): ResetTimerAction => {
  let contents: any = {
    __type: "ResetTimerAction",
    timerName: undefined
  };
  if (output.timerName !== undefined && output.timerName !== null) {
    contents.timerName = output.timerName;
  }
  return contents;
};

const deserializeAws_restJson1_1SNSTopicPublishAction = (
  output: any,
  context: __SerdeContext
): SNSTopicPublishAction => {
  let contents: any = {
    __type: "SNSTopicPublishAction",
    targetArn: undefined
  };
  if (output.targetArn !== undefined && output.targetArn !== null) {
    contents.targetArn = output.targetArn;
  }
  return contents;
};

const deserializeAws_restJson1_1SetTimerAction = (
  output: any,
  context: __SerdeContext
): SetTimerAction => {
  let contents: any = {
    __type: "SetTimerAction",
    seconds: undefined,
    timerName: undefined
  };
  if (output.seconds !== undefined && output.seconds !== null) {
    contents.seconds = output.seconds;
  }
  if (output.timerName !== undefined && output.timerName !== null) {
    contents.timerName = output.timerName;
  }
  return contents;
};

const deserializeAws_restJson1_1SetVariableAction = (
  output: any,
  context: __SerdeContext
): SetVariableAction => {
  let contents: any = {
    __type: "SetVariableAction",
    value: undefined,
    variableName: undefined
  };
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  if (output.variableName !== undefined && output.variableName !== null) {
    contents.variableName = output.variableName;
  }
  return contents;
};

const deserializeAws_restJson1_1SqsAction = (
  output: any,
  context: __SerdeContext
): SqsAction => {
  let contents: any = {
    __type: "SqsAction",
    queueUrl: undefined,
    useBase64: undefined
  };
  if (output.queueUrl !== undefined && output.queueUrl !== null) {
    contents.queueUrl = output.queueUrl;
  }
  if (output.useBase64 !== undefined && output.useBase64 !== null) {
    contents.useBase64 = output.useBase64;
  }
  return contents;
};

const deserializeAws_restJson1_1State = (
  output: any,
  context: __SerdeContext
): State => {
  let contents: any = {
    __type: "State",
    onEnter: undefined,
    onExit: undefined,
    onInput: undefined,
    stateName: undefined
  };
  if (output.onEnter !== undefined && output.onEnter !== null) {
    contents.onEnter = deserializeAws_restJson1_1OnEnterLifecycle(
      output.onEnter,
      context
    );
  }
  if (output.onExit !== undefined && output.onExit !== null) {
    contents.onExit = deserializeAws_restJson1_1OnExitLifecycle(
      output.onExit,
      context
    );
  }
  if (output.onInput !== undefined && output.onInput !== null) {
    contents.onInput = deserializeAws_restJson1_1OnInputLifecycle(
      output.onInput,
      context
    );
  }
  if (output.stateName !== undefined && output.stateName !== null) {
    contents.stateName = output.stateName;
  }
  return contents;
};

const deserializeAws_restJson1_1States = (
  output: any,
  context: __SerdeContext
): Array<State> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1State(entry, context)
  );
};

const deserializeAws_restJson1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    key: undefined,
    value: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Tag(entry, context)
  );
};

const deserializeAws_restJson1_1TransitionEvent = (
  output: any,
  context: __SerdeContext
): TransitionEvent => {
  let contents: any = {
    __type: "TransitionEvent",
    actions: undefined,
    condition: undefined,
    eventName: undefined,
    nextState: undefined
  };
  if (output.actions !== undefined && output.actions !== null) {
    contents.actions = deserializeAws_restJson1_1Actions(
      output.actions,
      context
    );
  }
  if (output.condition !== undefined && output.condition !== null) {
    contents.condition = output.condition;
  }
  if (output.eventName !== undefined && output.eventName !== null) {
    contents.eventName = output.eventName;
  }
  if (output.nextState !== undefined && output.nextState !== null) {
    contents.nextState = output.nextState;
  }
  return contents;
};

const deserializeAws_restJson1_1TransitionEvents = (
  output: any,
  context: __SerdeContext
): Array<TransitionEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TransitionEvent(entry, context)
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
