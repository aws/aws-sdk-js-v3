import {
  ActivatePipelineCommandInput,
  ActivatePipelineCommandOutput
} from "../commands/ActivatePipelineCommand";
import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput
} from "../commands/CreatePipelineCommand";
import {
  DeactivatePipelineCommandInput,
  DeactivatePipelineCommandOutput
} from "../commands/DeactivatePipelineCommand";
import {
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput
} from "../commands/DeletePipelineCommand";
import {
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput
} from "../commands/DescribeObjectsCommand";
import {
  DescribePipelinesCommandInput,
  DescribePipelinesCommandOutput
} from "../commands/DescribePipelinesCommand";
import {
  EvaluateExpressionCommandInput,
  EvaluateExpressionCommandOutput
} from "../commands/EvaluateExpressionCommand";
import {
  GetPipelineDefinitionCommandInput,
  GetPipelineDefinitionCommandOutput
} from "../commands/GetPipelineDefinitionCommand";
import {
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput
} from "../commands/ListPipelinesCommand";
import {
  PollForTaskCommandInput,
  PollForTaskCommandOutput
} from "../commands/PollForTaskCommand";
import {
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput
} from "../commands/PutPipelineDefinitionCommand";
import {
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput
} from "../commands/QueryObjectsCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "../commands/RemoveTagsCommand";
import {
  ReportTaskProgressCommandInput,
  ReportTaskProgressCommandOutput
} from "../commands/ReportTaskProgressCommand";
import {
  ReportTaskRunnerHeartbeatCommandInput,
  ReportTaskRunnerHeartbeatCommandOutput
} from "../commands/ReportTaskRunnerHeartbeatCommand";
import {
  SetStatusCommandInput,
  SetStatusCommandOutput
} from "../commands/SetStatusCommand";
import {
  SetTaskStatusCommandInput,
  SetTaskStatusCommandOutput
} from "../commands/SetTaskStatusCommand";
import {
  ValidatePipelineDefinitionCommandInput,
  ValidatePipelineDefinitionCommandOutput
} from "../commands/ValidatePipelineDefinitionCommand";
import {
  ActivatePipelineInput,
  ActivatePipelineOutput,
  AddTagsInput,
  AddTagsOutput,
  CreatePipelineInput,
  CreatePipelineOutput,
  DeactivatePipelineInput,
  DeactivatePipelineOutput,
  DeletePipelineInput,
  DescribeObjectsInput,
  DescribeObjectsOutput,
  DescribePipelinesInput,
  DescribePipelinesOutput,
  EvaluateExpressionInput,
  EvaluateExpressionOutput,
  Field,
  GetPipelineDefinitionInput,
  GetPipelineDefinitionOutput,
  InstanceIdentity,
  InternalServiceError,
  InvalidRequestException,
  ListPipelinesInput,
  ListPipelinesOutput,
  Operator,
  ParameterAttribute,
  ParameterObject,
  ParameterValue,
  PipelineDeletedException,
  PipelineDescription,
  PipelineIdName,
  PipelineNotFoundException,
  PipelineObject,
  PollForTaskInput,
  PollForTaskOutput,
  PutPipelineDefinitionInput,
  PutPipelineDefinitionOutput,
  Query,
  QueryObjectsInput,
  QueryObjectsOutput,
  RemoveTagsInput,
  RemoveTagsOutput,
  ReportTaskProgressInput,
  ReportTaskProgressOutput,
  ReportTaskRunnerHeartbeatInput,
  ReportTaskRunnerHeartbeatOutput,
  Selector,
  SetStatusInput,
  SetTaskStatusInput,
  SetTaskStatusOutput,
  Tag,
  TaskNotFoundException,
  TaskObject,
  ValidatePipelineDefinitionInput,
  ValidatePipelineDefinitionOutput,
  ValidationError,
  ValidationWarning
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_json1_1ActivatePipelineCommand = async (
  input: ActivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.ActivatePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ActivatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.AddTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.CreatePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeactivatePipelineCommand = async (
  input: DeactivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.DeactivatePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeactivatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.DeletePipeline"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeObjectsCommand = async (
  input: DescribeObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.DescribeObjects"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeObjectsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePipelinesCommand = async (
  input: DescribePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.DescribePipelines"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePipelinesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EvaluateExpressionCommand = async (
  input: EvaluateExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.EvaluateExpression"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EvaluateExpressionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetPipelineDefinitionCommand = async (
  input: GetPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.GetPipelineDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPipelineDefinitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.ListPipelines"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PollForTaskCommand = async (
  input: PollForTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.PollForTask"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PollForTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPipelineDefinitionCommand = async (
  input: PutPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.PutPipelineDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutPipelineDefinitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1QueryObjectsCommand = async (
  input: QueryObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.QueryObjects"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QueryObjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTagsCommand = async (
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.RemoveTags"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReportTaskProgressCommand = async (
  input: ReportTaskProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.ReportTaskProgress"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ReportTaskProgressInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReportTaskRunnerHeartbeatCommand = async (
  input: ReportTaskRunnerHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.ReportTaskRunnerHeartbeat"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ReportTaskRunnerHeartbeatInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetStatusCommand = async (
  input: SetStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.SetStatus"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetTaskStatusCommand = async (
  input: SetTaskStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.SetTaskStatus"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetTaskStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ValidatePipelineDefinitionCommand = async (
  input: ValidatePipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "DataPipeline.ValidatePipelineDefinition"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ValidatePipelineDefinitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ActivatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ActivatePipelineOutput(data, context);
  const response: ActivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivatePipelineOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AddTagsOutput(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePipelineOutput(data, context);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePipelineOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1DeactivatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeactivatePipelineCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeactivatePipelineOutput(data, context);
  const response: DeactivatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeactivatePipelineOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeactivatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeObjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeObjectsOutput(data, context);
  const response: DescribeObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeObjectsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePipelinesOutput(data, context);
  const response: DescribePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePipelinesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1EvaluateExpressionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EvaluateExpressionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1EvaluateExpressionOutput(data, context);
  const response: EvaluateExpressionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EvaluateExpressionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EvaluateExpressionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
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

export const deserializeAws_json1_1GetPipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetPipelineDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetPipelineDefinitionOutput(data, context);
  const response: GetPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPipelineDefinitionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetPipelineDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPipelinesOutput(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPipelinesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1PollForTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PollForTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PollForTaskOutput(data, context);
  const response: PollForTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PollForTaskOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PollForTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PutPipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPipelineDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPipelineDefinitionOutput(data, context);
  const response: PutPipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutPipelineDefinitionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPipelineDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1QueryObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1QueryObjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1QueryObjectsOutput(data, context);
  const response: QueryObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "QueryObjectsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1QueryObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1RemoveTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTagsOutput(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ReportTaskProgressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ReportTaskProgressCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReportTaskProgressOutput(data, context);
  const response: ReportTaskProgressCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReportTaskProgressOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReportTaskProgressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput(
    data,
    context
  );
  const response: ReportTaskRunnerHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ReportTaskRunnerHeartbeatOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
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

export const deserializeAws_json1_1SetStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetStatusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStatusCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

export const deserializeAws_json1_1SetTaskStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetTaskStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1SetTaskStatusOutput(data, context);
  const response: SetTaskStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SetTaskStatusOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetTaskStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazonaws.datapipeline#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ValidatePipelineDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ValidatePipelineDefinitionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ValidatePipelineDefinitionOutput(
    data,
    context
  );
  const response: ValidatePipelineDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ValidatePipelineDefinitionOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ValidatePipelineDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.datapipeline#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.datapipeline#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazonaws.datapipeline#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazonaws.datapipeline#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
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

const deserializeAws_json1_1InternalServiceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceError(
    body,
    context
  );
  const contents: InternalServiceError = {
    name: "InternalServiceError",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRequestException(
    body,
    context
  );
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineDeletedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineDeletedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineDeletedException(
    body,
    context
  );
  const contents: PipelineDeletedException = {
    name: "PipelineDeletedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PipelineNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PipelineNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PipelineNotFoundException(
    body,
    context
  );
  const contents: PipelineNotFoundException = {
    name: "PipelineNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TaskNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TaskNotFoundException(
    body,
    context
  );
  const contents: TaskNotFoundException = {
    name: "TaskNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ActivatePipelineInput = (
  input: ActivatePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameterValues !== undefined && {
      parameterValues: serializeAws_json1_1ParameterValueList(
        input.parameterValues,
        context
      )
    }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.startTimestamp !== undefined && {
      startTimestamp: Math.round(input.startTimestamp.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1AddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1tagList(input.tags, context)
    })
  };
};

const serializeAws_json1_1CreatePipelineInput = (
  input: CreatePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_1tagList(input.tags, context)
    }),
    ...(input.uniqueId !== undefined && { uniqueId: input.uniqueId })
  };
};

const serializeAws_json1_1DeactivatePipelineInput = (
  input: DeactivatePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.cancelActive !== undefined && {
      cancelActive: input.cancelActive
    }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId })
  };
};

const serializeAws_json1_1DeletePipelineInput = (
  input: DeletePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId })
  };
};

const serializeAws_json1_1DescribeObjectsInput = (
  input: DescribeObjectsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.evaluateExpressions !== undefined && {
      evaluateExpressions: input.evaluateExpressions
    }),
    ...(input.marker !== undefined && { marker: input.marker }),
    ...(input.objectIds !== undefined && {
      objectIds: serializeAws_json1_1idList(input.objectIds, context)
    }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId })
  };
};

const serializeAws_json1_1DescribePipelinesInput = (
  input: DescribePipelinesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineIds !== undefined && {
      pipelineIds: serializeAws_json1_1idList(input.pipelineIds, context)
    })
  };
};

const serializeAws_json1_1EvaluateExpressionInput = (
  input: EvaluateExpressionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.expression !== undefined && { expression: input.expression }),
    ...(input.objectId !== undefined && { objectId: input.objectId }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId })
  };
};

const serializeAws_json1_1Field = (
  input: Field,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.refValue !== undefined && { refValue: input.refValue }),
    ...(input.stringValue !== undefined && { stringValue: input.stringValue })
  };
};

const serializeAws_json1_1fieldList = (
  input: Field[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Field(entry, context));
};

const serializeAws_json1_1GetPipelineDefinitionInput = (
  input: GetPipelineDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_1idList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InstanceIdentity = (
  input: InstanceIdentity,
  context: __SerdeContext
): any => {
  return {
    ...(input.document !== undefined && { document: input.document }),
    ...(input.signature !== undefined && { signature: input.signature })
  };
};

const serializeAws_json1_1ListPipelinesInput = (
  input: ListPipelinesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.marker !== undefined && { marker: input.marker })
  };
};

const serializeAws_json1_1Operator = (
  input: Operator,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && { type: input.type }),
    ...(input.values !== undefined && {
      values: serializeAws_json1_1stringList(input.values, context)
    })
  };
};

const serializeAws_json1_1ParameterAttribute = (
  input: ParameterAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.stringValue !== undefined && { stringValue: input.stringValue })
  };
};

const serializeAws_json1_1ParameterAttributeList = (
  input: ParameterAttribute[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ParameterAttribute(entry, context)
  );
};

const serializeAws_json1_1ParameterObject = (
  input: ParameterObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined && {
      attributes: serializeAws_json1_1ParameterAttributeList(
        input.attributes,
        context
      )
    }),
    ...(input.id !== undefined && { id: input.id })
  };
};

const serializeAws_json1_1ParameterObjectList = (
  input: ParameterObject[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1ParameterObject(entry, context)
  );
};

const serializeAws_json1_1ParameterValue = (
  input: ParameterValue,
  context: __SerdeContext
): any => {
  return {
    ...(input.id !== undefined && { id: input.id }),
    ...(input.stringValue !== undefined && { stringValue: input.stringValue })
  };
};

const serializeAws_json1_1ParameterValueList = (
  input: ParameterValue[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1ParameterValue(entry, context));
};

const serializeAws_json1_1PipelineObject = (
  input: PipelineObject,
  context: __SerdeContext
): any => {
  return {
    ...(input.fields !== undefined && {
      fields: serializeAws_json1_1fieldList(input.fields, context)
    }),
    ...(input.id !== undefined && { id: input.id }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_1PipelineObjectList = (
  input: PipelineObject[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1PipelineObject(entry, context));
};

const serializeAws_json1_1PollForTaskInput = (
  input: PollForTaskInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname !== undefined && { hostname: input.hostname }),
    ...(input.instanceIdentity !== undefined && {
      instanceIdentity: serializeAws_json1_1InstanceIdentity(
        input.instanceIdentity,
        context
      )
    }),
    ...(input.workerGroup !== undefined && { workerGroup: input.workerGroup })
  };
};

const serializeAws_json1_1PutPipelineDefinitionInput = (
  input: PutPipelineDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameterObjects !== undefined && {
      parameterObjects: serializeAws_json1_1ParameterObjectList(
        input.parameterObjects,
        context
      )
    }),
    ...(input.parameterValues !== undefined && {
      parameterValues: serializeAws_json1_1ParameterValueList(
        input.parameterValues,
        context
      )
    }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.pipelineObjects !== undefined && {
      pipelineObjects: serializeAws_json1_1PipelineObjectList(
        input.pipelineObjects,
        context
      )
    })
  };
};

const serializeAws_json1_1Query = (
  input: Query,
  context: __SerdeContext
): any => {
  return {
    ...(input.selectors !== undefined && {
      selectors: serializeAws_json1_1SelectorList(input.selectors, context)
    })
  };
};

const serializeAws_json1_1QueryObjectsInput = (
  input: QueryObjectsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.marker !== undefined && { marker: input.marker }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.query !== undefined && {
      query: serializeAws_json1_1Query(input.query, context)
    }),
    ...(input.sphere !== undefined && { sphere: input.sphere })
  };
};

const serializeAws_json1_1RemoveTagsInput = (
  input: RemoveTagsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_json1_1stringList(input.tagKeys, context)
    })
  };
};

const serializeAws_json1_1ReportTaskProgressInput = (
  input: ReportTaskProgressInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.fields !== undefined && {
      fields: serializeAws_json1_1fieldList(input.fields, context)
    }),
    ...(input.taskId !== undefined && { taskId: input.taskId })
  };
};

const serializeAws_json1_1ReportTaskRunnerHeartbeatInput = (
  input: ReportTaskRunnerHeartbeatInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname !== undefined && { hostname: input.hostname }),
    ...(input.taskrunnerId !== undefined && {
      taskrunnerId: input.taskrunnerId
    }),
    ...(input.workerGroup !== undefined && { workerGroup: input.workerGroup })
  };
};

const serializeAws_json1_1Selector = (
  input: Selector,
  context: __SerdeContext
): any => {
  return {
    ...(input.fieldName !== undefined && { fieldName: input.fieldName }),
    ...(input.operator !== undefined && {
      operator: serializeAws_json1_1Operator(input.operator, context)
    })
  };
};

const serializeAws_json1_1SelectorList = (
  input: Selector[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Selector(entry, context));
};

const serializeAws_json1_1SetStatusInput = (
  input: SetStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.objectIds !== undefined && {
      objectIds: serializeAws_json1_1idList(input.objectIds, context)
    }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_1SetTaskStatusInput = (
  input: SetTaskStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.errorId !== undefined && { errorId: input.errorId }),
    ...(input.errorMessage !== undefined && {
      errorMessage: input.errorMessage
    }),
    ...(input.errorStackTrace !== undefined && {
      errorStackTrace: input.errorStackTrace
    }),
    ...(input.taskId !== undefined && { taskId: input.taskId }),
    ...(input.taskStatus !== undefined && { taskStatus: input.taskStatus })
  };
};

const serializeAws_json1_1stringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_1tagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1ValidatePipelineDefinitionInput = (
  input: ValidatePipelineDefinitionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.parameterObjects !== undefined && {
      parameterObjects: serializeAws_json1_1ParameterObjectList(
        input.parameterObjects,
        context
      )
    }),
    ...(input.parameterValues !== undefined && {
      parameterValues: serializeAws_json1_1ParameterValueList(
        input.parameterValues,
        context
      )
    }),
    ...(input.pipelineId !== undefined && { pipelineId: input.pipelineId }),
    ...(input.pipelineObjects !== undefined && {
      pipelineObjects: serializeAws_json1_1PipelineObjectList(
        input.pipelineObjects,
        context
      )
    })
  };
};

const deserializeAws_json1_1ActivatePipelineOutput = (
  output: any,
  context: __SerdeContext
): ActivatePipelineOutput => {
  return {
    __type: "ActivatePipelineOutput"
  } as any;
};

const deserializeAws_json1_1AddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  return {
    __type: "AddTagsOutput"
  } as any;
};

const deserializeAws_json1_1CreatePipelineOutput = (
  output: any,
  context: __SerdeContext
): CreatePipelineOutput => {
  return {
    __type: "CreatePipelineOutput",
    pipelineId:
      output.pipelineId !== undefined && output.pipelineId !== null
        ? output.pipelineId
        : undefined
  } as any;
};

const deserializeAws_json1_1DeactivatePipelineOutput = (
  output: any,
  context: __SerdeContext
): DeactivatePipelineOutput => {
  return {
    __type: "DeactivatePipelineOutput"
  } as any;
};

const deserializeAws_json1_1DescribeObjectsOutput = (
  output: any,
  context: __SerdeContext
): DescribeObjectsOutput => {
  return {
    __type: "DescribeObjectsOutput",
    hasMoreResults:
      output.hasMoreResults !== undefined && output.hasMoreResults !== null
        ? output.hasMoreResults
        : undefined,
    marker:
      output.marker !== undefined && output.marker !== null
        ? output.marker
        : undefined,
    pipelineObjects:
      output.pipelineObjects !== undefined && output.pipelineObjects !== null
        ? deserializeAws_json1_1PipelineObjectList(
            output.pipelineObjects,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribePipelinesOutput = (
  output: any,
  context: __SerdeContext
): DescribePipelinesOutput => {
  return {
    __type: "DescribePipelinesOutput",
    pipelineDescriptionList:
      output.pipelineDescriptionList !== undefined &&
      output.pipelineDescriptionList !== null
        ? deserializeAws_json1_1PipelineDescriptionList(
            output.pipelineDescriptionList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1EvaluateExpressionOutput = (
  output: any,
  context: __SerdeContext
): EvaluateExpressionOutput => {
  return {
    __type: "EvaluateExpressionOutput",
    evaluatedExpression:
      output.evaluatedExpression !== undefined &&
      output.evaluatedExpression !== null
        ? output.evaluatedExpression
        : undefined
  } as any;
};

const deserializeAws_json1_1Field = (
  output: any,
  context: __SerdeContext
): Field => {
  return {
    __type: "Field",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    refValue:
      output.refValue !== undefined && output.refValue !== null
        ? output.refValue
        : undefined,
    stringValue:
      output.stringValue !== undefined && output.stringValue !== null
        ? output.stringValue
        : undefined
  } as any;
};

const deserializeAws_json1_1fieldList = (
  output: any,
  context: __SerdeContext
): Field[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Field(entry, context)
  );
};

const deserializeAws_json1_1GetPipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineDefinitionOutput => {
  return {
    __type: "GetPipelineDefinitionOutput",
    parameterObjects:
      output.parameterObjects !== undefined && output.parameterObjects !== null
        ? deserializeAws_json1_1ParameterObjectList(
            output.parameterObjects,
            context
          )
        : undefined,
    parameterValues:
      output.parameterValues !== undefined && output.parameterValues !== null
        ? deserializeAws_json1_1ParameterValueList(
            output.parameterValues,
            context
          )
        : undefined,
    pipelineObjects:
      output.pipelineObjects !== undefined && output.pipelineObjects !== null
        ? deserializeAws_json1_1PipelineObjectList(
            output.pipelineObjects,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1idList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  return {
    __type: "InternalServiceError",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    __type: "InvalidRequestException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPipelinesOutput = (
  output: any,
  context: __SerdeContext
): ListPipelinesOutput => {
  return {
    __type: "ListPipelinesOutput",
    hasMoreResults:
      output.hasMoreResults !== undefined && output.hasMoreResults !== null
        ? output.hasMoreResults
        : undefined,
    marker:
      output.marker !== undefined && output.marker !== null
        ? output.marker
        : undefined,
    pipelineIdList:
      output.pipelineIdList !== undefined && output.pipelineIdList !== null
        ? deserializeAws_json1_1pipelineList(output.pipelineIdList, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterAttribute = (
  output: any,
  context: __SerdeContext
): ParameterAttribute => {
  return {
    __type: "ParameterAttribute",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    stringValue:
      output.stringValue !== undefined && output.stringValue !== null
        ? output.stringValue
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterAttributeList = (
  output: any,
  context: __SerdeContext
): ParameterAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterAttribute(entry, context)
  );
};

const deserializeAws_json1_1ParameterObject = (
  output: any,
  context: __SerdeContext
): ParameterObject => {
  return {
    __type: "ParameterObject",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_json1_1ParameterAttributeList(
            output.attributes,
            context
          )
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined
  } as any;
};

const deserializeAws_json1_1ParameterObjectList = (
  output: any,
  context: __SerdeContext
): ParameterObject[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterObject(entry, context)
  );
};

const deserializeAws_json1_1ParameterValue = (
  output: any,
  context: __SerdeContext
): ParameterValue => {
  return {
    __type: "ParameterValue",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    stringValue:
      output.stringValue !== undefined && output.stringValue !== null
        ? output.stringValue
        : undefined
  } as any;
};

const deserializeAws_json1_1ParameterValueList = (
  output: any,
  context: __SerdeContext
): ParameterValue[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterValue(entry, context)
  );
};

const deserializeAws_json1_1PipelineDeletedException = (
  output: any,
  context: __SerdeContext
): PipelineDeletedException => {
  return {
    __type: "PipelineDeletedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineDescription = (
  output: any,
  context: __SerdeContext
): PipelineDescription => {
  return {
    __type: "PipelineDescription",
    description:
      output.description !== undefined && output.description !== null
        ? output.description
        : undefined,
    fields:
      output.fields !== undefined && output.fields !== null
        ? deserializeAws_json1_1fieldList(output.fields, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    pipelineId:
      output.pipelineId !== undefined && output.pipelineId !== null
        ? output.pipelineId
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_1tagList(output.tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineDescriptionList = (
  output: any,
  context: __SerdeContext
): PipelineDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineDescription(entry, context)
  );
};

const deserializeAws_json1_1PipelineIdName = (
  output: any,
  context: __SerdeContext
): PipelineIdName => {
  return {
    __type: "PipelineIdName",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1pipelineList = (
  output: any,
  context: __SerdeContext
): PipelineIdName[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineIdName(entry, context)
  );
};

const deserializeAws_json1_1PipelineNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineNotFoundException => {
  return {
    __type: "PipelineNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineObject = (
  output: any,
  context: __SerdeContext
): PipelineObject => {
  return {
    __type: "PipelineObject",
    fields:
      output.fields !== undefined && output.fields !== null
        ? deserializeAws_json1_1fieldList(output.fields, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_json1_1PipelineObjectList = (
  output: any,
  context: __SerdeContext
): PipelineObject[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineObject(entry, context)
  );
};

const deserializeAws_json1_1PipelineObjectMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: PipelineObject } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: PipelineObject }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1PipelineObject(value, context)
    }),
    {}
  );
};

const deserializeAws_json1_1PollForTaskOutput = (
  output: any,
  context: __SerdeContext
): PollForTaskOutput => {
  return {
    __type: "PollForTaskOutput",
    taskObject:
      output.taskObject !== undefined && output.taskObject !== null
        ? deserializeAws_json1_1TaskObject(output.taskObject, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1PutPipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): PutPipelineDefinitionOutput => {
  return {
    __type: "PutPipelineDefinitionOutput",
    errored:
      output.errored !== undefined && output.errored !== null
        ? output.errored
        : undefined,
    validationErrors:
      output.validationErrors !== undefined && output.validationErrors !== null
        ? deserializeAws_json1_1ValidationErrors(
            output.validationErrors,
            context
          )
        : undefined,
    validationWarnings:
      output.validationWarnings !== undefined &&
      output.validationWarnings !== null
        ? deserializeAws_json1_1ValidationWarnings(
            output.validationWarnings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1QueryObjectsOutput = (
  output: any,
  context: __SerdeContext
): QueryObjectsOutput => {
  return {
    __type: "QueryObjectsOutput",
    hasMoreResults:
      output.hasMoreResults !== undefined && output.hasMoreResults !== null
        ? output.hasMoreResults
        : undefined,
    ids:
      output.ids !== undefined && output.ids !== null
        ? deserializeAws_json1_1idList(output.ids, context)
        : undefined,
    marker:
      output.marker !== undefined && output.marker !== null
        ? output.marker
        : undefined
  } as any;
};

const deserializeAws_json1_1RemoveTagsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsOutput => {
  return {
    __type: "RemoveTagsOutput"
  } as any;
};

const deserializeAws_json1_1ReportTaskProgressOutput = (
  output: any,
  context: __SerdeContext
): ReportTaskProgressOutput => {
  return {
    __type: "ReportTaskProgressOutput",
    canceled:
      output.canceled !== undefined && output.canceled !== null
        ? output.canceled
        : undefined
  } as any;
};

const deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput = (
  output: any,
  context: __SerdeContext
): ReportTaskRunnerHeartbeatOutput => {
  return {
    __type: "ReportTaskRunnerHeartbeatOutput",
    terminate:
      output.terminate !== undefined && output.terminate !== null
        ? output.terminate
        : undefined
  } as any;
};

const deserializeAws_json1_1SetTaskStatusOutput = (
  output: any,
  context: __SerdeContext
): SetTaskStatusOutput => {
  return {
    __type: "SetTaskStatusOutput"
  } as any;
};

const deserializeAws_json1_1Tag = (
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

const deserializeAws_json1_1tagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TaskNotFoundException = (
  output: any,
  context: __SerdeContext
): TaskNotFoundException => {
  return {
    __type: "TaskNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1TaskObject = (
  output: any,
  context: __SerdeContext
): TaskObject => {
  return {
    __type: "TaskObject",
    attemptId:
      output.attemptId !== undefined && output.attemptId !== null
        ? output.attemptId
        : undefined,
    objects:
      output.objects !== undefined && output.objects !== null
        ? deserializeAws_json1_1PipelineObjectMap(output.objects, context)
        : undefined,
    pipelineId:
      output.pipelineId !== undefined && output.pipelineId !== null
        ? output.pipelineId
        : undefined,
    taskId:
      output.taskId !== undefined && output.taskId !== null
        ? output.taskId
        : undefined
  } as any;
};

const deserializeAws_json1_1ValidatePipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): ValidatePipelineDefinitionOutput => {
  return {
    __type: "ValidatePipelineDefinitionOutput",
    errored:
      output.errored !== undefined && output.errored !== null
        ? output.errored
        : undefined,
    validationErrors:
      output.validationErrors !== undefined && output.validationErrors !== null
        ? deserializeAws_json1_1ValidationErrors(
            output.validationErrors,
            context
          )
        : undefined,
    validationWarnings:
      output.validationWarnings !== undefined &&
      output.validationWarnings !== null
        ? deserializeAws_json1_1ValidationWarnings(
            output.validationWarnings,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ValidationError = (
  output: any,
  context: __SerdeContext
): ValidationError => {
  return {
    __type: "ValidationError",
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_json1_1validationMessages(output.errors, context)
        : undefined,
    id: output.id !== undefined && output.id !== null ? output.id : undefined
  } as any;
};

const deserializeAws_json1_1ValidationErrors = (
  output: any,
  context: __SerdeContext
): ValidationError[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ValidationError(entry, context)
  );
};

const deserializeAws_json1_1validationMessages = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ValidationWarning = (
  output: any,
  context: __SerdeContext
): ValidationWarning => {
  return {
    __type: "ValidationWarning",
    id: output.id !== undefined && output.id !== null ? output.id : undefined,
    warnings:
      output.warnings !== undefined && output.warnings !== null
        ? deserializeAws_json1_1validationMessages(output.warnings, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ValidationWarnings = (
  output: any,
  context: __SerdeContext
): ValidationWarning[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ValidationWarning(entry, context)
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
