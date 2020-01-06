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
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
  let body: any = {};
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
  let body: any = {};
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
    const labelValue: any = input.detectorModelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", labelValue);
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
    const labelValue: any = input.inputName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace("{inputName}", labelValue);
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
    const labelValue: any = input.detectorModelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  const query: any = {};
  if (input.detectorModelVersion !== undefined) {
    query["version"] = input.detectorModelVersion.toString();
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
    const labelValue: any = input.inputName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace("{inputName}", labelValue);
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
    const labelValue: any = input.detectorModelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", labelValue);
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
    query["nextToken"] = input.nextToken.toString();
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
    query["nextToken"] = input.nextToken.toString();
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
    query["nextToken"] = input.nextToken.toString();
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
    query["resourceArn"] = input.resourceArn.toString();
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
  let body: any = {};
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
    query["resourceArn"] = input.resourceArn.toString();
  }
  let body: any = {};
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
    query["resourceArn"] = input.resourceArn.toString();
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
    const labelValue: any = input.detectorModelName.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: detectorModelName."
      );
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: detectorModelName."
    );
  }
  let body: any = {};
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
    const labelValue: any = input.inputName.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace("{inputName}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
  }
  let body: any = {};
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
  if (output.statusCode !== 200) {
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
  if (data.detectorModelConfiguration !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.iot.columbo.common.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1CreateInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> {
  if (output.statusCode !== 201) {
    return deserializeAws_restJson1_1CreateInputCommandError(output, context);
  }
  const contents: CreateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInputResponse",
    inputConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputConfiguration !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> {
  if (output.statusCode !== 204) {
    return deserializeAws_restJson1_1DeleteDetectorModelCommandError(
      output,
      context
    );
  }
  const contents: DeleteDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDetectorModelResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteDetectorModelCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInputResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.detectorModel !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeInputCommandError(output, context);
  }
  const contents: DescribeInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInputResponse",
    input: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.input !== undefined) {
    contents.input = deserializeAws_restJson1_1Input(data.input, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeInputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeLoggingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.loggingOptions !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.iot.columbo.common.exceptions#UnsupportedOperationException":
      response = await deserializeAws_restJson1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDetectorModelVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.detectorModelVersionSummaries !== undefined) {
    contents.detectorModelVersionSummaries = deserializeAws_restJson1_1DetectorModelVersionSummaries(
      data.detectorModelVersionSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDetectorModelVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListDetectorModelsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.detectorModelSummaries !== undefined) {
    contents.detectorModelSummaries = deserializeAws_restJson1_1DetectorModelSummaries(
      data.detectorModelSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDetectorModelsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListInputsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListInputsCommandError(output, context);
  }
  const contents: ListInputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInputsResponse",
    inputSummaries: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputSummaries !== undefined) {
    contents.inputSummaries = deserializeAws_restJson1_1InputSummaries(
      data.inputSummaries,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListInputsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.tags !== undefined) {
    contents.tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1PutLoggingOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1PutLoggingOptionsCommandError(
      output,
      context
    );
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutLoggingOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazon.iot.columbo.common.exceptions#UnsupportedOperationException":
      response = await deserializeAws_restJson1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededException":
    case "com.amazon.iot.columbo.common.exceptions#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateDetectorModelCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> {
  if (output.statusCode !== 200) {
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
  if (data.detectorModelConfiguration !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateInputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateInputCommandError(output, context);
  }
  const contents: UpdateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInputResponse",
    inputConfiguration: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.inputConfiguration !== undefined) {
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
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String;
  errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazon.iot.columbo.common.exceptions#InternalFailureException":
      response = await deserializeAws_restJson1_1InternalFailureExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidRequestException":
    case "com.amazon.iot.columbo.common.exceptions#InvalidRequestException":
      response = await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceInUseException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceInUseException":
      response = await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazon.iot.columbo.common.exceptions#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazon.iot.columbo.common.exceptions#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ThrottlingException":
    case "com.amazon.iot.columbo.common.exceptions#ThrottlingException":
      response = await deserializeAws_restJson1_1ThrottlingExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      errorCode = errorCode || "UnknownError";
      response = {
        __type: `com.amazon.iot.columbo#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    __type: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    __type: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    __type: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    __type: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  if (data.resourceArn !== undefined) {
    contents.resourceArn = data.resourceArn;
  }
  if (data.resourceId !== undefined) {
    contents.resourceId = data.resourceId;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    __type: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    __type: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: UnsupportedOperationException = {
    __type: "UnsupportedOperationException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = output.body;
  if (data.message !== undefined) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Action = (
  input: Action,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1Action(entry, context)
  );
};

const serializeAws_restJson1_1Attribute = (
  input: Attribute,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.jsonPath !== undefined) {
    bodyParams["jsonPath"] = input.jsonPath;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Attributes = (
  input: Array<Attribute>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Attribute(entry, context)
  );
};

const serializeAws_restJson1_1ClearTimerAction = (
  input: ClearTimerAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.timerName !== undefined) {
    bodyParams["timerName"] = input.timerName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DetectorDebugOption = (
  input: DetectorDebugOption,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1DetectorDebugOption(entry, context)
  );
};

const serializeAws_restJson1_1DetectorModelDefinition = (
  input: DetectorModelDefinition,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1Event(entry, context)
  );
};

const serializeAws_restJson1_1FirehoseAction = (
  input: FirehoseAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.inputName !== undefined) {
    bodyParams["inputName"] = input.inputName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IotTopicPublishAction = (
  input: IotTopicPublishAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.mqttTopic !== undefined) {
    bodyParams["mqttTopic"] = input.mqttTopic;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LambdaAction = (
  input: LambdaAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.functionArn !== undefined) {
    bodyParams["functionArn"] = input.functionArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LoggingOptions = (
  input: LoggingOptions,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
  if (input.timerName !== undefined) {
    bodyParams["timerName"] = input.timerName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SNSTopicPublishAction = (
  input: SNSTopicPublishAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.targetArn !== undefined) {
    bodyParams["targetArn"] = input.targetArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SetTimerAction = (
  input: SetTimerAction,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1State(entry, context)
  );
};

const serializeAws_restJson1_1Tag = (
  input: Tag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1Tag(entry, context)
  );
};

const serializeAws_restJson1_1TransitionEvent = (
  input: TransitionEvent,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
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
  return (input || []).map(entry =>
    serializeAws_restJson1_1TransitionEvent(entry, context)
  );
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
  if (output.clearTimer !== undefined) {
    contents.clearTimer = deserializeAws_restJson1_1ClearTimerAction(
      output.clearTimer,
      context
    );
  }
  if (output.firehose !== undefined) {
    contents.firehose = deserializeAws_restJson1_1FirehoseAction(
      output.firehose,
      context
    );
  }
  if (output.iotEvents !== undefined) {
    contents.iotEvents = deserializeAws_restJson1_1IotEventsAction(
      output.iotEvents,
      context
    );
  }
  if (output.iotTopicPublish !== undefined) {
    contents.iotTopicPublish = deserializeAws_restJson1_1IotTopicPublishAction(
      output.iotTopicPublish,
      context
    );
  }
  if (output.lambda !== undefined) {
    contents.lambda = deserializeAws_restJson1_1LambdaAction(
      output.lambda,
      context
    );
  }
  if (output.resetTimer !== undefined) {
    contents.resetTimer = deserializeAws_restJson1_1ResetTimerAction(
      output.resetTimer,
      context
    );
  }
  if (output.setTimer !== undefined) {
    contents.setTimer = deserializeAws_restJson1_1SetTimerAction(
      output.setTimer,
      context
    );
  }
  if (output.setVariable !== undefined) {
    contents.setVariable = deserializeAws_restJson1_1SetVariableAction(
      output.setVariable,
      context
    );
  }
  if (output.sns !== undefined) {
    contents.sns = deserializeAws_restJson1_1SNSTopicPublishAction(
      output.sns,
      context
    );
  }
  if (output.sqs !== undefined) {
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
  if (output.jsonPath !== undefined) {
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
  if (output.timerName !== undefined) {
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
  if (output.detectorModelName !== undefined) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (output.keyValue !== undefined) {
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
  if (output.detectorModelConfiguration !== undefined) {
    contents.detectorModelConfiguration = deserializeAws_restJson1_1DetectorModelConfiguration(
      output.detectorModelConfiguration,
      context
    );
  }
  if (output.detectorModelDefinition !== undefined) {
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
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.detectorModelArn !== undefined) {
    contents.detectorModelArn = output.detectorModelArn;
  }
  if (output.detectorModelDescription !== undefined) {
    contents.detectorModelDescription = output.detectorModelDescription;
  }
  if (output.detectorModelName !== undefined) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (output.detectorModelVersion !== undefined) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (output.evaluationMethod !== undefined) {
    contents.evaluationMethod = output.evaluationMethod;
  }
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined) {
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
  if (output.initialStateName !== undefined) {
    contents.initialStateName = output.initialStateName;
  }
  if (output.states !== undefined) {
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
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.detectorModelDescription !== undefined) {
    contents.detectorModelDescription = output.detectorModelDescription;
  }
  if (output.detectorModelName !== undefined) {
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
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.detectorModelArn !== undefined) {
    contents.detectorModelArn = output.detectorModelArn;
  }
  if (output.detectorModelName !== undefined) {
    contents.detectorModelName = output.detectorModelName;
  }
  if (output.detectorModelVersion !== undefined) {
    contents.detectorModelVersion = output.detectorModelVersion;
  }
  if (output.evaluationMethod !== undefined) {
    contents.evaluationMethod = output.evaluationMethod;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.roleArn !== undefined) {
    contents.roleArn = output.roleArn;
  }
  if (output.status !== undefined) {
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
  if (output.actions !== undefined) {
    contents.actions = deserializeAws_restJson1_1Actions(
      output.actions,
      context
    );
  }
  if (output.condition !== undefined) {
    contents.condition = output.condition;
  }
  if (output.eventName !== undefined) {
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
  if (output.deliveryStreamName !== undefined) {
    contents.deliveryStreamName = output.deliveryStreamName;
  }
  if (output.separator !== undefined) {
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
  if (output.inputConfiguration !== undefined) {
    contents.inputConfiguration = deserializeAws_restJson1_1InputConfiguration(
      output.inputConfiguration,
      context
    );
  }
  if (output.inputDefinition !== undefined) {
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
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.inputArn !== undefined) {
    contents.inputArn = output.inputArn;
  }
  if (output.inputDescription !== undefined) {
    contents.inputDescription = output.inputDescription;
  }
  if (output.inputName !== undefined) {
    contents.inputName = output.inputName;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.status !== undefined) {
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
  if (output.attributes !== undefined) {
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
  if (output.creationTime !== undefined) {
    contents.creationTime = new Date(
      output.creationTime % 1 != 0
        ? Math.round(output.creationTime * 1000)
        : output.creationTime
    );
  }
  if (output.inputArn !== undefined) {
    contents.inputArn = output.inputArn;
  }
  if (output.inputDescription !== undefined) {
    contents.inputDescription = output.inputDescription;
  }
  if (output.inputName !== undefined) {
    contents.inputName = output.inputName;
  }
  if (output.lastUpdateTime !== undefined) {
    contents.lastUpdateTime = new Date(
      output.lastUpdateTime % 1 != 0
        ? Math.round(output.lastUpdateTime * 1000)
        : output.lastUpdateTime
    );
  }
  if (output.status !== undefined) {
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
  if (output.inputName !== undefined) {
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
  if (output.mqttTopic !== undefined) {
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
  if (output.functionArn !== undefined) {
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
  if (output.detectorDebugOptions !== undefined) {
    contents.detectorDebugOptions = deserializeAws_restJson1_1DetectorDebugOptions(
      output.detectorDebugOptions,
      context
    );
  }
  if (output.enabled !== undefined) {
    contents.enabled = output.enabled;
  }
  if (output.level !== undefined) {
    contents.level = output.level;
  }
  if (output.roleArn !== undefined) {
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
  if (output.events !== undefined) {
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
  if (output.events !== undefined) {
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
  if (output.events !== undefined) {
    contents.events = deserializeAws_restJson1_1Events(output.events, context);
  }
  if (output.transitionEvents !== undefined) {
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
  if (output.timerName !== undefined) {
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
  if (output.targetArn !== undefined) {
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
  if (output.seconds !== undefined) {
    contents.seconds = output.seconds;
  }
  if (output.timerName !== undefined) {
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
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  if (output.variableName !== undefined) {
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
  if (output.queueUrl !== undefined) {
    contents.queueUrl = output.queueUrl;
  }
  if (output.useBase64 !== undefined) {
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
  if (output.onEnter !== undefined) {
    contents.onEnter = deserializeAws_restJson1_1OnEnterLifecycle(
      output.onEnter,
      context
    );
  }
  if (output.onExit !== undefined) {
    contents.onExit = deserializeAws_restJson1_1OnExitLifecycle(
      output.onExit,
      context
    );
  }
  if (output.onInput !== undefined) {
    contents.onInput = deserializeAws_restJson1_1OnInputLifecycle(
      output.onInput,
      context
    );
  }
  if (output.stateName !== undefined) {
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
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
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
  if (output.actions !== undefined) {
    contents.actions = deserializeAws_restJson1_1Actions(
      output.actions,
      context
    );
  }
  if (output.condition !== undefined) {
    contents.condition = output.condition;
  }
  if (output.eventName !== undefined) {
    contents.eventName = output.eventName;
  }
  if (output.nextState !== undefined) {
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

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
