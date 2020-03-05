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

export async function serializeAws_json1_1ActivatePipelineCommand(
  input: ActivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.ActivatePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ActivatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.AddTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreatePipelineCommand(
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.CreatePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeactivatePipelineCommand(
  input: DeactivatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.DeactivatePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeactivatePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeletePipelineCommand(
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.DeletePipeline";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePipelineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeObjectsCommand(
  input: DescribeObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.DescribeObjects";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeObjectsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribePipelinesCommand(
  input: DescribePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.DescribePipelines";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePipelinesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1EvaluateExpressionCommand(
  input: EvaluateExpressionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.EvaluateExpression";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1EvaluateExpressionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetPipelineDefinitionCommand(
  input: GetPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.GetPipelineDefinition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetPipelineDefinitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPipelinesCommand(
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.ListPipelines";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPipelinesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PollForTaskCommand(
  input: PollForTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.PollForTask";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PollForTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutPipelineDefinitionCommand(
  input: PutPipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.PutPipelineDefinition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutPipelineDefinitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1QueryObjectsCommand(
  input: QueryObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.QueryObjects";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1QueryObjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.RemoveTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ReportTaskProgressCommand(
  input: ReportTaskProgressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.ReportTaskProgress";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ReportTaskProgressInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ReportTaskRunnerHeartbeatCommand(
  input: ReportTaskRunnerHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.ReportTaskRunnerHeartbeat";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ReportTaskRunnerHeartbeatInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetStatusCommand(
  input: SetStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.SetStatus";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1SetTaskStatusCommand(
  input: SetTaskStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.SetTaskStatus";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetTaskStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ValidatePipelineDefinitionCommand(
  input: ValidatePipelineDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DataPipeline.ValidatePipelineDefinition";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ValidatePipelineDefinitionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1ActivatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> {
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
}

async function deserializeAws_json1_1ActivatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivatePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1AddTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
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
}

async function deserializeAws_json1_1AddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
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
}

async function deserializeAws_json1_1CreatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeactivatePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> {
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
}

async function deserializeAws_json1_1DeactivatePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivatePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeletePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePipelineCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeletePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribeObjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> {
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
}

async function deserializeAws_json1_1DescribeObjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObjectsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DescribePipelinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> {
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
}

async function deserializeAws_json1_1DescribePipelinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelinesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1EvaluateExpressionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> {
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
}

async function deserializeAws_json1_1EvaluateExpressionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateExpressionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazon.setl.webservice#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetPipelineDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> {
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
}

async function deserializeAws_json1_1GetPipelineDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPipelineDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListPipelinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
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
}

async function deserializeAws_json1_1ListPipelinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PollForTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> {
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
}

async function deserializeAws_json1_1PollForTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForTaskCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazon.setl.webservice#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PutPipelineDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> {
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
}

async function deserializeAws_json1_1PutPipelineDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPipelineDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1QueryObjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> {
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
}

async function deserializeAws_json1_1QueryObjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryObjectsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RemoveTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
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
}

async function deserializeAws_json1_1RemoveTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ReportTaskProgressCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> {
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
}

async function deserializeAws_json1_1ReportTaskProgressCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskProgressCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazon.setl.webservice#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ReportTaskRunnerHeartbeatCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> {
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
}

async function deserializeAws_json1_1ReportTaskRunnerHeartbeatCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReportTaskRunnerHeartbeatCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SetStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetStatusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetStatusCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1SetStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1SetTaskStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> {
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
}

async function deserializeAws_json1_1SetTaskStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetTaskStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskNotFoundException":
    case "com.amazon.setl.webservice#TaskNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TaskNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ValidatePipelineDefinitionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> {
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
}

async function deserializeAws_json1_1ValidatePipelineDefinitionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ValidatePipelineDefinitionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazon.setl.webservice#InternalServiceError":
      response = {
        ...(await deserializeAws_json1_1InternalServiceErrorResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazon.setl.webservice#InvalidRequestException":
      response = {
        ...(await deserializeAws_json1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineDeletedException":
    case "com.amazon.setl.webservice#PipelineDeletedException":
      response = {
        ...(await deserializeAws_json1_1PipelineDeletedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PipelineNotFoundException":
    case "com.amazon.setl.webservice#PipelineNotFoundException":
      response = {
        ...(await deserializeAws_json1_1PipelineNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

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
  const bodyParams: any = {};
  if (input.parameterValues !== undefined) {
    bodyParams["parameterValues"] = serializeAws_json1_1ParameterValueList(
      input.parameterValues,
      context
    );
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.startTimestamp !== undefined) {
    bodyParams["startTimestamp"] = Math.round(
      input.startTimestamp.getTime() / 1000
    );
  }
  return bodyParams;
};

const serializeAws_json1_1AddTagsInput = (
  input: AddTagsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1tagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreatePipelineInput = (
  input: CreatePipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_1tagList(input.tags, context);
  }
  if (input.uniqueId !== undefined) {
    bodyParams["uniqueId"] = input.uniqueId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeactivatePipelineInput = (
  input: DeactivatePipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cancelActive !== undefined) {
    bodyParams["cancelActive"] = input.cancelActive;
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeletePipelineInput = (
  input: DeletePipelineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeObjectsInput = (
  input: DescribeObjectsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.evaluateExpressions !== undefined) {
    bodyParams["evaluateExpressions"] = input.evaluateExpressions;
  }
  if (input.marker !== undefined) {
    bodyParams["marker"] = input.marker;
  }
  if (input.objectIds !== undefined) {
    bodyParams["objectIds"] = serializeAws_json1_1idList(
      input.objectIds,
      context
    );
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribePipelinesInput = (
  input: DescribePipelinesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineIds !== undefined) {
    bodyParams["pipelineIds"] = serializeAws_json1_1idList(
      input.pipelineIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1EvaluateExpressionInput = (
  input: EvaluateExpressionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.expression !== undefined) {
    bodyParams["expression"] = input.expression;
  }
  if (input.objectId !== undefined) {
    bodyParams["objectId"] = input.objectId;
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  return bodyParams;
};

const serializeAws_json1_1Field = (
  input: Field,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.refValue !== undefined) {
    bodyParams["refValue"] = input.refValue;
  }
  if (input.stringValue !== undefined) {
    bodyParams["stringValue"] = input.stringValue;
  }
  return bodyParams;
};

const serializeAws_json1_1GetPipelineDefinitionInput = (
  input: GetPipelineDefinitionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceIdentity = (
  input: InstanceIdentity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.document !== undefined) {
    bodyParams["document"] = input.document;
  }
  if (input.signature !== undefined) {
    bodyParams["signature"] = input.signature;
  }
  return bodyParams;
};

const serializeAws_json1_1ListPipelinesInput = (
  input: ListPipelinesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.marker !== undefined) {
    bodyParams["marker"] = input.marker;
  }
  return bodyParams;
};

const serializeAws_json1_1Operator = (
  input: Operator,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1stringList(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterAttribute = (
  input: ParameterAttribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.stringValue !== undefined) {
    bodyParams["stringValue"] = input.stringValue;
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterAttributeList = (
  input: Array<ParameterAttribute>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ParameterAttribute(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ParameterObject = (
  input: ParameterObject,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attributes !== undefined) {
    bodyParams["attributes"] = serializeAws_json1_1ParameterAttributeList(
      input.attributes,
      context
    );
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterObjectList = (
  input: Array<ParameterObject>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ParameterObject(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ParameterValue = (
  input: ParameterValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.stringValue !== undefined) {
    bodyParams["stringValue"] = input.stringValue;
  }
  return bodyParams;
};

const serializeAws_json1_1ParameterValueList = (
  input: Array<ParameterValue>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1ParameterValue(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PipelineObject = (
  input: PipelineObject,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.fields !== undefined) {
    bodyParams["fields"] = serializeAws_json1_1fieldList(input.fields, context);
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1PipelineObjectList = (
  input: Array<PipelineObject>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1PipelineObject(entry, context));
  }
  return contents;
};

const serializeAws_json1_1PollForTaskInput = (
  input: PollForTaskInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.hostname !== undefined) {
    bodyParams["hostname"] = input.hostname;
  }
  if (input.instanceIdentity !== undefined) {
    bodyParams["instanceIdentity"] = serializeAws_json1_1InstanceIdentity(
      input.instanceIdentity,
      context
    );
  }
  if (input.workerGroup !== undefined) {
    bodyParams["workerGroup"] = input.workerGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1PutPipelineDefinitionInput = (
  input: PutPipelineDefinitionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.parameterObjects !== undefined) {
    bodyParams["parameterObjects"] = serializeAws_json1_1ParameterObjectList(
      input.parameterObjects,
      context
    );
  }
  if (input.parameterValues !== undefined) {
    bodyParams["parameterValues"] = serializeAws_json1_1ParameterValueList(
      input.parameterValues,
      context
    );
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.pipelineObjects !== undefined) {
    bodyParams["pipelineObjects"] = serializeAws_json1_1PipelineObjectList(
      input.pipelineObjects,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1Query = (
  input: Query,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.selectors !== undefined) {
    bodyParams["selectors"] = serializeAws_json1_1SelectorList(
      input.selectors,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1QueryObjectsInput = (
  input: QueryObjectsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.limit !== undefined) {
    bodyParams["limit"] = input.limit;
  }
  if (input.marker !== undefined) {
    bodyParams["marker"] = input.marker;
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.query !== undefined) {
    bodyParams["query"] = serializeAws_json1_1Query(input.query, context);
  }
  if (input.sphere !== undefined) {
    bodyParams["sphere"] = input.sphere;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsInput = (
  input: RemoveTagsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_1stringList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ReportTaskProgressInput = (
  input: ReportTaskProgressInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.fields !== undefined) {
    bodyParams["fields"] = serializeAws_json1_1fieldList(input.fields, context);
  }
  if (input.taskId !== undefined) {
    bodyParams["taskId"] = input.taskId;
  }
  return bodyParams;
};

const serializeAws_json1_1ReportTaskRunnerHeartbeatInput = (
  input: ReportTaskRunnerHeartbeatInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.hostname !== undefined) {
    bodyParams["hostname"] = input.hostname;
  }
  if (input.taskrunnerId !== undefined) {
    bodyParams["taskrunnerId"] = input.taskrunnerId;
  }
  if (input.workerGroup !== undefined) {
    bodyParams["workerGroup"] = input.workerGroup;
  }
  return bodyParams;
};

const serializeAws_json1_1Selector = (
  input: Selector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.fieldName !== undefined) {
    bodyParams["fieldName"] = input.fieldName;
  }
  if (input.operator !== undefined) {
    bodyParams["operator"] = serializeAws_json1_1Operator(
      input.operator,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1SelectorList = (
  input: Array<Selector>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Selector(entry, context));
  }
  return contents;
};

const serializeAws_json1_1SetStatusInput = (
  input: SetStatusInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.objectIds !== undefined) {
    bodyParams["objectIds"] = serializeAws_json1_1idList(
      input.objectIds,
      context
    );
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1SetTaskStatusInput = (
  input: SetTaskStatusInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.errorId !== undefined) {
    bodyParams["errorId"] = input.errorId;
  }
  if (input.errorMessage !== undefined) {
    bodyParams["errorMessage"] = input.errorMessage;
  }
  if (input.errorStackTrace !== undefined) {
    bodyParams["errorStackTrace"] = input.errorStackTrace;
  }
  if (input.taskId !== undefined) {
    bodyParams["taskId"] = input.taskId;
  }
  if (input.taskStatus !== undefined) {
    bodyParams["taskStatus"] = input.taskStatus;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1ValidatePipelineDefinitionInput = (
  input: ValidatePipelineDefinitionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.parameterObjects !== undefined) {
    bodyParams["parameterObjects"] = serializeAws_json1_1ParameterObjectList(
      input.parameterObjects,
      context
    );
  }
  if (input.parameterValues !== undefined) {
    bodyParams["parameterValues"] = serializeAws_json1_1ParameterValueList(
      input.parameterValues,
      context
    );
  }
  if (input.pipelineId !== undefined) {
    bodyParams["pipelineId"] = input.pipelineId;
  }
  if (input.pipelineObjects !== undefined) {
    bodyParams["pipelineObjects"] = serializeAws_json1_1PipelineObjectList(
      input.pipelineObjects,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1fieldList = (
  input: Array<Field>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Field(entry, context));
  }
  return contents;
};

const serializeAws_json1_1idList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1stringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1tagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const deserializeAws_json1_1ActivatePipelineOutput = (
  output: any,
  context: __SerdeContext
): ActivatePipelineOutput => {
  let contents: any = {
    __type: "ActivatePipelineOutput"
  };
  return contents;
};

const deserializeAws_json1_1AddTagsOutput = (
  output: any,
  context: __SerdeContext
): AddTagsOutput => {
  let contents: any = {
    __type: "AddTagsOutput"
  };
  return contents;
};

const deserializeAws_json1_1CreatePipelineOutput = (
  output: any,
  context: __SerdeContext
): CreatePipelineOutput => {
  let contents: any = {
    __type: "CreatePipelineOutput",
    pipelineId: undefined
  };
  if (output.pipelineId !== undefined && output.pipelineId !== null) {
    contents.pipelineId = output.pipelineId;
  }
  return contents;
};

const deserializeAws_json1_1DeactivatePipelineOutput = (
  output: any,
  context: __SerdeContext
): DeactivatePipelineOutput => {
  let contents: any = {
    __type: "DeactivatePipelineOutput"
  };
  return contents;
};

const deserializeAws_json1_1DescribeObjectsOutput = (
  output: any,
  context: __SerdeContext
): DescribeObjectsOutput => {
  let contents: any = {
    __type: "DescribeObjectsOutput",
    hasMoreResults: undefined,
    marker: undefined,
    pipelineObjects: undefined
  };
  if (output.hasMoreResults !== undefined && output.hasMoreResults !== null) {
    contents.hasMoreResults = output.hasMoreResults;
  }
  if (output.marker !== undefined && output.marker !== null) {
    contents.marker = output.marker;
  }
  if (output.pipelineObjects !== undefined && output.pipelineObjects !== null) {
    contents.pipelineObjects = deserializeAws_json1_1PipelineObjectList(
      output.pipelineObjects,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribePipelinesOutput = (
  output: any,
  context: __SerdeContext
): DescribePipelinesOutput => {
  let contents: any = {
    __type: "DescribePipelinesOutput",
    pipelineDescriptionList: undefined
  };
  if (
    output.pipelineDescriptionList !== undefined &&
    output.pipelineDescriptionList !== null
  ) {
    contents.pipelineDescriptionList = deserializeAws_json1_1PipelineDescriptionList(
      output.pipelineDescriptionList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1EvaluateExpressionOutput = (
  output: any,
  context: __SerdeContext
): EvaluateExpressionOutput => {
  let contents: any = {
    __type: "EvaluateExpressionOutput",
    evaluatedExpression: undefined
  };
  if (
    output.evaluatedExpression !== undefined &&
    output.evaluatedExpression !== null
  ) {
    contents.evaluatedExpression = output.evaluatedExpression;
  }
  return contents;
};

const deserializeAws_json1_1Field = (
  output: any,
  context: __SerdeContext
): Field => {
  let contents: any = {
    __type: "Field",
    key: undefined,
    refValue: undefined,
    stringValue: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.refValue !== undefined && output.refValue !== null) {
    contents.refValue = output.refValue;
  }
  if (output.stringValue !== undefined && output.stringValue !== null) {
    contents.stringValue = output.stringValue;
  }
  return contents;
};

const deserializeAws_json1_1GetPipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): GetPipelineDefinitionOutput => {
  let contents: any = {
    __type: "GetPipelineDefinitionOutput",
    parameterObjects: undefined,
    parameterValues: undefined,
    pipelineObjects: undefined
  };
  if (
    output.parameterObjects !== undefined &&
    output.parameterObjects !== null
  ) {
    contents.parameterObjects = deserializeAws_json1_1ParameterObjectList(
      output.parameterObjects,
      context
    );
  }
  if (output.parameterValues !== undefined && output.parameterValues !== null) {
    contents.parameterValues = deserializeAws_json1_1ParameterValueList(
      output.parameterValues,
      context
    );
  }
  if (output.pipelineObjects !== undefined && output.pipelineObjects !== null) {
    contents.pipelineObjects = deserializeAws_json1_1PipelineObjectList(
      output.pipelineObjects,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InternalServiceError = (
  output: any,
  context: __SerdeContext
): InternalServiceError => {
  let contents: any = {
    __type: "InternalServiceError",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  let contents: any = {
    __type: "InvalidRequestException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListPipelinesOutput = (
  output: any,
  context: __SerdeContext
): ListPipelinesOutput => {
  let contents: any = {
    __type: "ListPipelinesOutput",
    hasMoreResults: undefined,
    marker: undefined,
    pipelineIdList: undefined
  };
  if (output.hasMoreResults !== undefined && output.hasMoreResults !== null) {
    contents.hasMoreResults = output.hasMoreResults;
  }
  if (output.marker !== undefined && output.marker !== null) {
    contents.marker = output.marker;
  }
  if (output.pipelineIdList !== undefined && output.pipelineIdList !== null) {
    contents.pipelineIdList = deserializeAws_json1_1pipelineList(
      output.pipelineIdList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ParameterAttribute = (
  output: any,
  context: __SerdeContext
): ParameterAttribute => {
  let contents: any = {
    __type: "ParameterAttribute",
    key: undefined,
    stringValue: undefined
  };
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  if (output.stringValue !== undefined && output.stringValue !== null) {
    contents.stringValue = output.stringValue;
  }
  return contents;
};

const deserializeAws_json1_1ParameterAttributeList = (
  output: any,
  context: __SerdeContext
): Array<ParameterAttribute> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterAttribute(entry, context)
  );
};

const deserializeAws_json1_1ParameterObject = (
  output: any,
  context: __SerdeContext
): ParameterObject => {
  let contents: any = {
    __type: "ParameterObject",
    attributes: undefined,
    id: undefined
  };
  if (output.attributes !== undefined && output.attributes !== null) {
    contents.attributes = deserializeAws_json1_1ParameterAttributeList(
      output.attributes,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_json1_1ParameterObjectList = (
  output: any,
  context: __SerdeContext
): Array<ParameterObject> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterObject(entry, context)
  );
};

const deserializeAws_json1_1ParameterValue = (
  output: any,
  context: __SerdeContext
): ParameterValue => {
  let contents: any = {
    __type: "ParameterValue",
    id: undefined,
    stringValue: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.stringValue !== undefined && output.stringValue !== null) {
    contents.stringValue = output.stringValue;
  }
  return contents;
};

const deserializeAws_json1_1ParameterValueList = (
  output: any,
  context: __SerdeContext
): Array<ParameterValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ParameterValue(entry, context)
  );
};

const deserializeAws_json1_1PipelineDeletedException = (
  output: any,
  context: __SerdeContext
): PipelineDeletedException => {
  let contents: any = {
    __type: "PipelineDeletedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineDescription = (
  output: any,
  context: __SerdeContext
): PipelineDescription => {
  let contents: any = {
    __type: "PipelineDescription",
    description: undefined,
    fields: undefined,
    name: undefined,
    pipelineId: undefined,
    tags: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.fields !== undefined && output.fields !== null) {
    contents.fields = deserializeAws_json1_1fieldList(output.fields, context);
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.pipelineId !== undefined && output.pipelineId !== null) {
    contents.pipelineId = output.pipelineId;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_1tagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_1PipelineDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<PipelineDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineDescription(entry, context)
  );
};

const deserializeAws_json1_1PipelineIdName = (
  output: any,
  context: __SerdeContext
): PipelineIdName => {
  let contents: any = {
    __type: "PipelineIdName",
    id: undefined,
    name: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1PipelineNotFoundException = (
  output: any,
  context: __SerdeContext
): PipelineNotFoundException => {
  let contents: any = {
    __type: "PipelineNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1PipelineObject = (
  output: any,
  context: __SerdeContext
): PipelineObject => {
  let contents: any = {
    __type: "PipelineObject",
    fields: undefined,
    id: undefined,
    name: undefined
  };
  if (output.fields !== undefined && output.fields !== null) {
    contents.fields = deserializeAws_json1_1fieldList(output.fields, context);
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1PipelineObjectList = (
  output: any,
  context: __SerdeContext
): Array<PipelineObject> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineObject(entry, context)
  );
};

const deserializeAws_json1_1PipelineObjectMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: PipelineObject } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1PipelineObject(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1PollForTaskOutput = (
  output: any,
  context: __SerdeContext
): PollForTaskOutput => {
  let contents: any = {
    __type: "PollForTaskOutput",
    taskObject: undefined
  };
  if (output.taskObject !== undefined && output.taskObject !== null) {
    contents.taskObject = deserializeAws_json1_1TaskObject(
      output.taskObject,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PutPipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): PutPipelineDefinitionOutput => {
  let contents: any = {
    __type: "PutPipelineDefinitionOutput",
    errored: undefined,
    validationErrors: undefined,
    validationWarnings: undefined
  };
  if (output.errored !== undefined && output.errored !== null) {
    contents.errored = output.errored;
  }
  if (
    output.validationErrors !== undefined &&
    output.validationErrors !== null
  ) {
    contents.validationErrors = deserializeAws_json1_1ValidationErrors(
      output.validationErrors,
      context
    );
  }
  if (
    output.validationWarnings !== undefined &&
    output.validationWarnings !== null
  ) {
    contents.validationWarnings = deserializeAws_json1_1ValidationWarnings(
      output.validationWarnings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1QueryObjectsOutput = (
  output: any,
  context: __SerdeContext
): QueryObjectsOutput => {
  let contents: any = {
    __type: "QueryObjectsOutput",
    hasMoreResults: undefined,
    ids: undefined,
    marker: undefined
  };
  if (output.hasMoreResults !== undefined && output.hasMoreResults !== null) {
    contents.hasMoreResults = output.hasMoreResults;
  }
  if (output.ids !== undefined && output.ids !== null) {
    contents.ids = deserializeAws_json1_1idList(output.ids, context);
  }
  if (output.marker !== undefined && output.marker !== null) {
    contents.marker = output.marker;
  }
  return contents;
};

const deserializeAws_json1_1RemoveTagsOutput = (
  output: any,
  context: __SerdeContext
): RemoveTagsOutput => {
  let contents: any = {
    __type: "RemoveTagsOutput"
  };
  return contents;
};

const deserializeAws_json1_1ReportTaskProgressOutput = (
  output: any,
  context: __SerdeContext
): ReportTaskProgressOutput => {
  let contents: any = {
    __type: "ReportTaskProgressOutput",
    canceled: undefined
  };
  if (output.canceled !== undefined && output.canceled !== null) {
    contents.canceled = output.canceled;
  }
  return contents;
};

const deserializeAws_json1_1ReportTaskRunnerHeartbeatOutput = (
  output: any,
  context: __SerdeContext
): ReportTaskRunnerHeartbeatOutput => {
  let contents: any = {
    __type: "ReportTaskRunnerHeartbeatOutput",
    terminate: undefined
  };
  if (output.terminate !== undefined && output.terminate !== null) {
    contents.terminate = output.terminate;
  }
  return contents;
};

const deserializeAws_json1_1SetTaskStatusOutput = (
  output: any,
  context: __SerdeContext
): SetTaskStatusOutput => {
  let contents: any = {
    __type: "SetTaskStatusOutput"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
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

const deserializeAws_json1_1TaskNotFoundException = (
  output: any,
  context: __SerdeContext
): TaskNotFoundException => {
  let contents: any = {
    __type: "TaskNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1TaskObject = (
  output: any,
  context: __SerdeContext
): TaskObject => {
  let contents: any = {
    __type: "TaskObject",
    attemptId: undefined,
    objects: undefined,
    pipelineId: undefined,
    taskId: undefined
  };
  if (output.attemptId !== undefined && output.attemptId !== null) {
    contents.attemptId = output.attemptId;
  }
  if (output.objects !== undefined && output.objects !== null) {
    contents.objects = deserializeAws_json1_1PipelineObjectMap(
      output.objects,
      context
    );
  }
  if (output.pipelineId !== undefined && output.pipelineId !== null) {
    contents.pipelineId = output.pipelineId;
  }
  if (output.taskId !== undefined && output.taskId !== null) {
    contents.taskId = output.taskId;
  }
  return contents;
};

const deserializeAws_json1_1ValidatePipelineDefinitionOutput = (
  output: any,
  context: __SerdeContext
): ValidatePipelineDefinitionOutput => {
  let contents: any = {
    __type: "ValidatePipelineDefinitionOutput",
    errored: undefined,
    validationErrors: undefined,
    validationWarnings: undefined
  };
  if (output.errored !== undefined && output.errored !== null) {
    contents.errored = output.errored;
  }
  if (
    output.validationErrors !== undefined &&
    output.validationErrors !== null
  ) {
    contents.validationErrors = deserializeAws_json1_1ValidationErrors(
      output.validationErrors,
      context
    );
  }
  if (
    output.validationWarnings !== undefined &&
    output.validationWarnings !== null
  ) {
    contents.validationWarnings = deserializeAws_json1_1ValidationWarnings(
      output.validationWarnings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ValidationError = (
  output: any,
  context: __SerdeContext
): ValidationError => {
  let contents: any = {
    __type: "ValidationError",
    errors: undefined,
    id: undefined
  };
  if (output.errors !== undefined && output.errors !== null) {
    contents.errors = deserializeAws_json1_1validationMessages(
      output.errors,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_json1_1ValidationErrors = (
  output: any,
  context: __SerdeContext
): Array<ValidationError> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ValidationError(entry, context)
  );
};

const deserializeAws_json1_1ValidationWarning = (
  output: any,
  context: __SerdeContext
): ValidationWarning => {
  let contents: any = {
    __type: "ValidationWarning",
    id: undefined,
    warnings: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.warnings !== undefined && output.warnings !== null) {
    contents.warnings = deserializeAws_json1_1validationMessages(
      output.warnings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ValidationWarnings = (
  output: any,
  context: __SerdeContext
): Array<ValidationWarning> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ValidationWarning(entry, context)
  );
};

const deserializeAws_json1_1fieldList = (
  output: any,
  context: __SerdeContext
): Array<Field> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Field(entry, context)
  );
};

const deserializeAws_json1_1idList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1pipelineList = (
  output: any,
  context: __SerdeContext
): Array<PipelineIdName> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PipelineIdName(entry, context)
  );
};

const deserializeAws_json1_1tagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1validationMessages = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
