import {
  CreateActivityCommandInput,
  CreateActivityCommandOutput
} from "../commands/CreateActivityCommand";
import {
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput
} from "../commands/CreateStateMachineCommand";
import {
  DeleteActivityCommandInput,
  DeleteActivityCommandOutput
} from "../commands/DeleteActivityCommand";
import {
  DeleteStateMachineCommandInput,
  DeleteStateMachineCommandOutput
} from "../commands/DeleteStateMachineCommand";
import {
  DescribeActivityCommandInput,
  DescribeActivityCommandOutput
} from "../commands/DescribeActivityCommand";
import {
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput
} from "../commands/DescribeExecutionCommand";
import {
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput
} from "../commands/DescribeStateMachineCommand";
import {
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput
} from "../commands/DescribeStateMachineForExecutionCommand";
import {
  GetActivityTaskCommandInput,
  GetActivityTaskCommandOutput
} from "../commands/GetActivityTaskCommand";
import {
  GetExecutionHistoryCommandInput,
  GetExecutionHistoryCommandOutput
} from "../commands/GetExecutionHistoryCommand";
import {
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput
} from "../commands/ListActivitiesCommand";
import {
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput
} from "../commands/ListExecutionsCommand";
import {
  ListStateMachinesCommandInput,
  ListStateMachinesCommandOutput
} from "../commands/ListStateMachinesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  SendTaskFailureCommandInput,
  SendTaskFailureCommandOutput
} from "../commands/SendTaskFailureCommand";
import {
  SendTaskHeartbeatCommandInput,
  SendTaskHeartbeatCommandOutput
} from "../commands/SendTaskHeartbeatCommand";
import {
  SendTaskSuccessCommandInput,
  SendTaskSuccessCommandOutput
} from "../commands/SendTaskSuccessCommand";
import {
  StartExecutionCommandInput,
  StartExecutionCommandOutput
} from "../commands/StartExecutionCommand";
import {
  StopExecutionCommandInput,
  StopExecutionCommandOutput
} from "../commands/StopExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput
} from "../commands/UpdateStateMachineCommand";
import {
  ActivityDoesNotExist,
  ActivityFailedEventDetails,
  ActivityLimitExceeded,
  ActivityListItem,
  ActivityScheduleFailedEventDetails,
  ActivityScheduledEventDetails,
  ActivityStartedEventDetails,
  ActivitySucceededEventDetails,
  ActivityTimedOutEventDetails,
  ActivityWorkerLimitExceeded,
  CloudWatchLogsLogGroup,
  CreateActivityInput,
  CreateActivityOutput,
  CreateStateMachineInput,
  CreateStateMachineOutput,
  DeleteActivityInput,
  DeleteActivityOutput,
  DeleteStateMachineInput,
  DeleteStateMachineOutput,
  DescribeActivityInput,
  DescribeActivityOutput,
  DescribeExecutionInput,
  DescribeExecutionOutput,
  DescribeStateMachineForExecutionInput,
  DescribeStateMachineForExecutionOutput,
  DescribeStateMachineInput,
  DescribeStateMachineOutput,
  ExecutionAbortedEventDetails,
  ExecutionAlreadyExists,
  ExecutionDoesNotExist,
  ExecutionFailedEventDetails,
  ExecutionLimitExceeded,
  ExecutionListItem,
  ExecutionStartedEventDetails,
  ExecutionSucceededEventDetails,
  ExecutionTimedOutEventDetails,
  GetActivityTaskInput,
  GetActivityTaskOutput,
  GetExecutionHistoryInput,
  GetExecutionHistoryOutput,
  HistoryEvent,
  InvalidArn,
  InvalidDefinition,
  InvalidExecutionInput,
  InvalidLoggingConfiguration,
  InvalidName,
  InvalidOutput,
  InvalidToken,
  LambdaFunctionFailedEventDetails,
  LambdaFunctionScheduleFailedEventDetails,
  LambdaFunctionScheduledEventDetails,
  LambdaFunctionStartFailedEventDetails,
  LambdaFunctionSucceededEventDetails,
  LambdaFunctionTimedOutEventDetails,
  ListActivitiesInput,
  ListActivitiesOutput,
  ListExecutionsInput,
  ListExecutionsOutput,
  ListStateMachinesInput,
  ListStateMachinesOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  LogDestination,
  LoggingConfiguration,
  MapIterationEventDetails,
  MapStateStartedEventDetails,
  MissingRequiredParameter,
  ResourceNotFound,
  SendTaskFailureInput,
  SendTaskFailureOutput,
  SendTaskHeartbeatInput,
  SendTaskHeartbeatOutput,
  SendTaskSuccessInput,
  SendTaskSuccessOutput,
  StartExecutionInput,
  StartExecutionOutput,
  StateEnteredEventDetails,
  StateExitedEventDetails,
  StateMachineAlreadyExists,
  StateMachineDeleting,
  StateMachineDoesNotExist,
  StateMachineLimitExceeded,
  StateMachineListItem,
  StateMachineTypeNotSupported,
  StopExecutionInput,
  StopExecutionOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TaskDoesNotExist,
  TaskFailedEventDetails,
  TaskScheduledEventDetails,
  TaskStartFailedEventDetails,
  TaskStartedEventDetails,
  TaskSubmitFailedEventDetails,
  TaskSubmittedEventDetails,
  TaskSucceededEventDetails,
  TaskTimedOut,
  TaskTimedOutEventDetails,
  TooManyTags,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateStateMachineInput,
  UpdateStateMachineOutput
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

export async function serializeAws_json1_0CreateActivityCommand(
  input: CreateActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.CreateActivity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CreateActivityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0CreateStateMachineCommand(
  input: CreateStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.CreateStateMachine";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CreateStateMachineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0DeleteActivityCommand(
  input: DeleteActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.DeleteActivity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DeleteActivityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0DeleteStateMachineCommand(
  input: DeleteStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.DeleteStateMachine";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DeleteStateMachineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0DescribeActivityCommand(
  input: DescribeActivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.DescribeActivity";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeActivityInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0DescribeExecutionCommand(
  input: DescribeExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.DescribeExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0DescribeStateMachineCommand(
  input: DescribeStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.DescribeStateMachine";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeStateMachineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0DescribeStateMachineForExecutionCommand(
  input: DescribeStateMachineForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.DescribeStateMachineForExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeStateMachineForExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0GetActivityTaskCommand(
  input: GetActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.GetActivityTask";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetActivityTaskInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0GetExecutionHistoryCommand(
  input: GetExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.GetExecutionHistory";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetExecutionHistoryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0ListActivitiesCommand(
  input: ListActivitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.ListActivities";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListActivitiesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0ListExecutionsCommand(
  input: ListExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.ListExecutions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0ListStateMachinesCommand(
  input: ListStateMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.ListStateMachines";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListStateMachinesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0SendTaskFailureCommand(
  input: SendTaskFailureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.SendTaskFailure";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0SendTaskFailureInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0SendTaskHeartbeatCommand(
  input: SendTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.SendTaskHeartbeat";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0SendTaskHeartbeatInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0SendTaskSuccessCommand(
  input: SendTaskSuccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.SendTaskSuccess";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0SendTaskSuccessInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0StartExecutionCommand(
  input: StartExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.StartExecution";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0StartExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0StopExecutionCommand(
  input: StopExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.StopExecution";
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StopExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.UntagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_0UpdateStateMachineCommand(
  input: UpdateStateMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "AWSStepFunctions.UpdateStateMachine";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UpdateStateMachineInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_0CreateActivityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CreateActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateActivityOutput(data, context);
  const response: CreateActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateActivityOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0CreateActivityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActivityCommandOutput> {
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
    case "ActivityLimitExceeded":
    case "com.amazonaws.swf.service.v2.model#ActivityLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0ActivityLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidName":
    case "com.amazonaws.swf.service.v2.model#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTags":
    case "com.amazonaws.swf.service.v2.model#TooManyTags":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsResponse(
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

export async function deserializeAws_json1_0CreateStateMachineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStateMachineCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CreateStateMachineCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateStateMachineOutput(data, context);
  const response: CreateStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateStateMachineOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0CreateStateMachineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStateMachineCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDefinition":
    case "com.amazonaws.swf.service.v2.model#InvalidDefinition":
      response = {
        ...(await deserializeAws_json1_0InvalidDefinitionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoggingConfiguration":
    case "com.amazonaws.swf.service.v2.model#InvalidLoggingConfiguration":
      response = {
        ...(await deserializeAws_json1_0InvalidLoggingConfigurationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidName":
    case "com.amazonaws.swf.service.v2.model#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineAlreadyExists":
    case "com.amazonaws.swf.service.v2.model#StateMachineAlreadyExists":
      response = {
        ...(await deserializeAws_json1_0StateMachineAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.swf.service.v2.model#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineLimitExceeded":
    case "com.amazonaws.swf.service.v2.model#StateMachineLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0StateMachineLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.swf.service.v2.model#StateMachineTypeNotSupported":
      response = {
        ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTags":
    case "com.amazonaws.swf.service.v2.model#TooManyTags":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsResponse(
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

export async function deserializeAws_json1_0DeleteActivityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeleteActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteActivityOutput(data, context);
  const response: DeleteActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteActivityOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DeleteActivityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActivityCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0DeleteStateMachineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStateMachineCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeleteStateMachineCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteStateMachineOutput(data, context);
  const response: DeleteStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteStateMachineOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DeleteStateMachineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStateMachineCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0DescribeActivityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeActivityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeActivityOutput(data, context);
  const response: DescribeActivityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeActivityOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DescribeActivityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityCommandOutput> {
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
    case "ActivityDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#ActivityDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ActivityDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0DescribeExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeExecutionOutput(data, context);
  const response: DescribeExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DescribeExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExecutionCommandOutput> {
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
    case "ExecutionDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0DescribeStateMachineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeStateMachineCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeStateMachineOutput(data, context);
  const response: DescribeStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStateMachineOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DescribeStateMachineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(
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

export async function deserializeAws_json1_0DescribeStateMachineForExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineForExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeStateMachineForExecutionOutput(
    data,
    context
  );
  const response: DescribeStateMachineForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeStateMachineForExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DescribeStateMachineForExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStateMachineForExecutionCommandOutput> {
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
    case "ExecutionDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0GetActivityTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActivityTaskCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetActivityTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetActivityTaskOutput(data, context);
  const response: GetActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetActivityTaskOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetActivityTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetActivityTaskCommandOutput> {
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
    case "ActivityDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#ActivityDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ActivityDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ActivityWorkerLimitExceeded":
    case "com.amazonaws.swf.service.v2.model#ActivityWorkerLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0ActivityWorkerLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0GetExecutionHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExecutionHistoryCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetExecutionHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetExecutionHistoryOutput(data, context);
  const response: GetExecutionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExecutionHistoryOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0GetExecutionHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExecutionHistoryCommandOutput> {
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
    case "ExecutionDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
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

export async function deserializeAws_json1_0ListActivitiesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivitiesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListActivitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListActivitiesOutput(data, context);
  const response: ListActivitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListActivitiesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0ListActivitiesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivitiesCommandOutput> {
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
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
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

export async function deserializeAws_json1_0ListExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListExecutionsOutput(data, context);
  const response: ListExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListExecutionsOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0ListExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExecutionsCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineTypeNotSupported":
    case "com.amazonaws.swf.service.v2.model#StateMachineTypeNotSupported":
      response = {
        ...(await deserializeAws_json1_0StateMachineTypeNotSupportedResponse(
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

export async function deserializeAws_json1_0ListStateMachinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStateMachinesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListStateMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListStateMachinesOutput(data, context);
  const response: ListStateMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListStateMachinesOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0ListStateMachinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStateMachinesCommandOutput> {
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
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
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

export async function deserializeAws_json1_0ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.swf.service.v2.model#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundResponse(
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

export async function deserializeAws_json1_0SendTaskFailureCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskFailureCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0SendTaskFailureCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTaskFailureOutput(data, context);
  const response: SendTaskFailureCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendTaskFailureOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0SendTaskFailureCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskFailureCommandOutput> {
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
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#TaskDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0TaskDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskTimedOut":
    case "com.amazonaws.swf.service.v2.model#TaskTimedOut":
      response = {
        ...(await deserializeAws_json1_0TaskTimedOutResponse(
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

export async function deserializeAws_json1_0SendTaskHeartbeatCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskHeartbeatCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0SendTaskHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTaskHeartbeatOutput(data, context);
  const response: SendTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendTaskHeartbeatOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0SendTaskHeartbeatCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskHeartbeatCommandOutput> {
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
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#TaskDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0TaskDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskTimedOut":
    case "com.amazonaws.swf.service.v2.model#TaskTimedOut":
      response = {
        ...(await deserializeAws_json1_0TaskTimedOutResponse(
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

export async function deserializeAws_json1_0SendTaskSuccessCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskSuccessCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0SendTaskSuccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0SendTaskSuccessOutput(data, context);
  const response: SendTaskSuccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SendTaskSuccessOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0SendTaskSuccessCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendTaskSuccessCommandOutput> {
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
    case "InvalidOutput":
    case "com.amazonaws.swf.service.v2.model#InvalidOutput":
      response = {
        ...(await deserializeAws_json1_0InvalidOutputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidToken":
    case "com.amazonaws.swf.service.v2.model#InvalidToken":
      response = {
        ...(await deserializeAws_json1_0InvalidTokenResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#TaskDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0TaskDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TaskTimedOut":
    case "com.amazonaws.swf.service.v2.model#TaskTimedOut":
      response = {
        ...(await deserializeAws_json1_0TaskTimedOutResponse(
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

export async function deserializeAws_json1_0StartExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0StartExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartExecutionOutput(data, context);
  const response: StartExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0StartExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExecutionCommandOutput> {
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
    case "ExecutionAlreadyExists":
    case "com.amazonaws.swf.service.v2.model#ExecutionAlreadyExists":
      response = {
        ...(await deserializeAws_json1_0ExecutionAlreadyExistsResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ExecutionLimitExceeded":
    case "com.amazonaws.swf.service.v2.model#ExecutionLimitExceeded":
      response = {
        ...(await deserializeAws_json1_0ExecutionLimitExceededResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidExecutionInput":
    case "com.amazonaws.swf.service.v2.model#InvalidExecutionInput":
      response = {
        ...(await deserializeAws_json1_0InvalidExecutionInputResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidName":
    case "com.amazonaws.swf.service.v2.model#InvalidName":
      response = {
        ...(await deserializeAws_json1_0InvalidNameResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.swf.service.v2.model#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(
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

export async function deserializeAws_json1_0StopExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0StopExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StopExecutionOutput(data, context);
  const response: StopExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopExecutionOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0StopExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExecutionCommandOutput> {
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
    case "ExecutionDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#ExecutionDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0ExecutionDoesNotExistResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
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

export async function deserializeAws_json1_0TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceOutput(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.swf.service.v2.model#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTags":
    case "com.amazonaws.swf.service.v2.model#TooManyTags":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsResponse(
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

export async function deserializeAws_json1_0UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceOutput(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.swf.service.v2.model#ResourceNotFound":
      response = {
        ...(await deserializeAws_json1_0ResourceNotFoundResponse(
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

export async function deserializeAws_json1_0UpdateStateMachineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStateMachineCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UpdateStateMachineCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateStateMachineOutput(data, context);
  const response: UpdateStateMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateStateMachineOutput",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UpdateStateMachineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStateMachineCommandOutput> {
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
    case "InvalidArn":
    case "com.amazonaws.swf.service.v2.model#InvalidArn":
      response = {
        ...(await deserializeAws_json1_0InvalidArnResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidDefinition":
    case "com.amazonaws.swf.service.v2.model#InvalidDefinition":
      response = {
        ...(await deserializeAws_json1_0InvalidDefinitionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLoggingConfiguration":
    case "com.amazonaws.swf.service.v2.model#InvalidLoggingConfiguration":
      response = {
        ...(await deserializeAws_json1_0InvalidLoggingConfigurationResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameter":
    case "com.amazonaws.swf.service.v2.model#MissingRequiredParameter":
      response = {
        ...(await deserializeAws_json1_0MissingRequiredParameterResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDeleting":
    case "com.amazonaws.swf.service.v2.model#StateMachineDeleting":
      response = {
        ...(await deserializeAws_json1_0StateMachineDeletingResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "StateMachineDoesNotExist":
    case "com.amazonaws.swf.service.v2.model#StateMachineDoesNotExist":
      response = {
        ...(await deserializeAws_json1_0StateMachineDoesNotExistResponse(
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

const deserializeAws_json1_0ActivityDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ActivityDoesNotExist(
    body,
    context
  );
  const contents: ActivityDoesNotExist = {
    name: "ActivityDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ActivityLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ActivityLimitExceeded(
    body,
    context
  );
  const contents: ActivityLimitExceeded = {
    name: "ActivityLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ActivityWorkerLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActivityWorkerLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ActivityWorkerLimitExceeded(
    body,
    context
  );
  const contents: ActivityWorkerLimitExceeded = {
    name: "ActivityWorkerLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ExecutionAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExecutionAlreadyExists(
    body,
    context
  );
  const contents: ExecutionAlreadyExists = {
    name: "ExecutionAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ExecutionDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExecutionDoesNotExist(
    body,
    context
  );
  const contents: ExecutionDoesNotExist = {
    name: "ExecutionDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ExecutionLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExecutionLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ExecutionLimitExceeded(
    body,
    context
  );
  const contents: ExecutionLimitExceeded = {
    name: "ExecutionLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidArnResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidArn> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidArn(body, context);
  const contents: InvalidArn = {
    name: "InvalidArn",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidDefinitionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDefinition> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidDefinition(
    body,
    context
  );
  const contents: InvalidDefinition = {
    name: "InvalidDefinition",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidExecutionInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExecutionInput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidExecutionInput(
    body,
    context
  );
  const contents: InvalidExecutionInput = {
    name: "InvalidExecutionInput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidLoggingConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLoggingConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidLoggingConfiguration(
    body,
    context
  );
  const contents: InvalidLoggingConfiguration = {
    name: "InvalidLoggingConfiguration",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidNameResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidName> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidName(body, context);
  const contents: InvalidName = {
    name: "InvalidName",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidOutputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOutput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidOutput(body, context);
  const contents: InvalidOutput = {
    name: "InvalidOutput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0InvalidTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidToken(body, context);
  const contents: InvalidToken = {
    name: "InvalidToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0MissingRequiredParameterResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameter> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0MissingRequiredParameter(
    body,
    context
  );
  const contents: MissingRequiredParameter = {
    name: "MissingRequiredParameter",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0ResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFound(
    body,
    context
  );
  const contents: ResourceNotFound = {
    name: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0StateMachineAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineAlreadyExists(
    body,
    context
  );
  const contents: StateMachineAlreadyExists = {
    name: "StateMachineAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0StateMachineDeletingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineDeleting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineDeleting(
    body,
    context
  );
  const contents: StateMachineDeleting = {
    name: "StateMachineDeleting",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0StateMachineDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineDoesNotExist(
    body,
    context
  );
  const contents: StateMachineDoesNotExist = {
    name: "StateMachineDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0StateMachineLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineLimitExceeded(
    body,
    context
  );
  const contents: StateMachineLimitExceeded = {
    name: "StateMachineLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0StateMachineTypeNotSupportedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StateMachineTypeNotSupported> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0StateMachineTypeNotSupported(
    body,
    context
  );
  const contents: StateMachineTypeNotSupported = {
    name: "StateMachineTypeNotSupported",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TaskDoesNotExistResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskDoesNotExist> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TaskDoesNotExist(
    body,
    context
  );
  const contents: TaskDoesNotExist = {
    name: "TaskDoesNotExist",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TaskTimedOutResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TaskTimedOut> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TaskTimedOut(body, context);
  const contents: TaskTimedOut = {
    name: "TaskTimedOut",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TooManyTagsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTags> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TooManyTags(body, context);
  const contents: TooManyTags = {
    name: "TooManyTags",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0CloudWatchLogsLogGroup = (
  input: CloudWatchLogsLogGroup,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.logGroupArn !== undefined) {
    bodyParams["logGroupArn"] = input.logGroupArn;
  }
  return bodyParams;
};

const serializeAws_json1_0LogDestination = (
  input: LogDestination,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cloudWatchLogsLogGroup !== undefined) {
    bodyParams[
      "cloudWatchLogsLogGroup"
    ] = serializeAws_json1_0CloudWatchLogsLogGroup(
      input.cloudWatchLogsLogGroup,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0LogDestinationList = (
  input: Array<LogDestination>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_0LogDestination(entry, context));
  }
  return contents;
};

const serializeAws_json1_0LoggingConfiguration = (
  input: LoggingConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destinations !== undefined) {
    bodyParams["destinations"] = serializeAws_json1_0LogDestinationList(
      input.destinations,
      context
    );
  }
  if (input.includeExecutionData !== undefined) {
    bodyParams["includeExecutionData"] = input.includeExecutionData;
  }
  if (input.level !== undefined) {
    bodyParams["level"] = input.level;
  }
  return bodyParams;
};

const serializeAws_json1_0CreateActivityInput = (
  input: CreateActivityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_0TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_0CreateStateMachineInput = (
  input: CreateStateMachineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.definition !== undefined) {
    bodyParams["definition"] = input.definition;
  }
  if (input.loggingConfiguration !== undefined) {
    bodyParams[
      "loggingConfiguration"
    ] = serializeAws_json1_0LoggingConfiguration(
      input.loggingConfiguration,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_0TagList(input.tags, context);
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteActivityInput = (
  input: DeleteActivityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.activityArn !== undefined) {
    bodyParams["activityArn"] = input.activityArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DeleteStateMachineInput = (
  input: DeleteStateMachineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.stateMachineArn !== undefined) {
    bodyParams["stateMachineArn"] = input.stateMachineArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeActivityInput = (
  input: DescribeActivityInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.activityArn !== undefined) {
    bodyParams["activityArn"] = input.activityArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeExecutionInput = (
  input: DescribeExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.executionArn !== undefined) {
    bodyParams["executionArn"] = input.executionArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeStateMachineForExecutionInput = (
  input: DescribeStateMachineForExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.executionArn !== undefined) {
    bodyParams["executionArn"] = input.executionArn;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeStateMachineInput = (
  input: DescribeStateMachineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.stateMachineArn !== undefined) {
    bodyParams["stateMachineArn"] = input.stateMachineArn;
  }
  return bodyParams;
};

const serializeAws_json1_0GetActivityTaskInput = (
  input: GetActivityTaskInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.activityArn !== undefined) {
    bodyParams["activityArn"] = input.activityArn;
  }
  if (input.workerName !== undefined) {
    bodyParams["workerName"] = input.workerName;
  }
  return bodyParams;
};

const serializeAws_json1_0GetExecutionHistoryInput = (
  input: GetExecutionHistoryInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.executionArn !== undefined) {
    bodyParams["executionArn"] = input.executionArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  return bodyParams;
};

const serializeAws_json1_0ListActivitiesInput = (
  input: ListActivitiesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_0ListExecutionsInput = (
  input: ListExecutionsInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.stateMachineArn !== undefined) {
    bodyParams["stateMachineArn"] = input.stateMachineArn;
  }
  if (input.statusFilter !== undefined) {
    bodyParams["statusFilter"] = input.statusFilter;
  }
  return bodyParams;
};

const serializeAws_json1_0ListStateMachinesInput = (
  input: ListStateMachinesInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_0SendTaskFailureInput = (
  input: SendTaskFailureInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cause !== undefined) {
    bodyParams["cause"] = input.cause;
  }
  if (input.error !== undefined) {
    bodyParams["error"] = input.error;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0SendTaskHeartbeatInput = (
  input: SendTaskHeartbeatInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0SendTaskSuccessInput = (
  input: SendTaskSuccessInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.output !== undefined) {
    bodyParams["output"] = input.output;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0StartExecutionInput = (
  input: StartExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.stateMachineArn !== undefined) {
    bodyParams["stateMachineArn"] = input.stateMachineArn;
  }
  return bodyParams;
};

const serializeAws_json1_0StopExecutionInput = (
  input: StopExecutionInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.cause !== undefined) {
    bodyParams["cause"] = input.cause;
  }
  if (input.error !== undefined) {
    bodyParams["error"] = input.error;
  }
  if (input.executionArn !== undefined) {
    bodyParams["executionArn"] = input.executionArn;
  }
  return bodyParams;
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_0TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_0TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_0Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_0TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_0TagList(input.tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_0UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_0TagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0UpdateStateMachineInput = (
  input: UpdateStateMachineInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.definition !== undefined) {
    bodyParams["definition"] = input.definition;
  }
  if (input.loggingConfiguration !== undefined) {
    bodyParams[
      "loggingConfiguration"
    ] = serializeAws_json1_0LoggingConfiguration(
      input.loggingConfiguration,
      context
    );
  }
  if (input.roleArn !== undefined) {
    bodyParams["roleArn"] = input.roleArn;
  }
  if (input.stateMachineArn !== undefined) {
    bodyParams["stateMachineArn"] = input.stateMachineArn;
  }
  return bodyParams;
};

const deserializeAws_json1_0ActivityFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityFailedEventDetails => {
  let contents: any = {
    __type: "ActivityFailedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0ActivityScheduleFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityScheduleFailedEventDetails => {
  let contents: any = {
    __type: "ActivityScheduleFailedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0ActivityScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityScheduledEventDetails => {
  let contents: any = {
    __type: "ActivityScheduledEventDetails",
    heartbeatInSeconds: undefined,
    input: undefined,
    resource: undefined,
    timeoutInSeconds: undefined
  };
  if (
    output.heartbeatInSeconds !== undefined &&
    output.heartbeatInSeconds !== null
  ) {
    contents.heartbeatInSeconds = output.heartbeatInSeconds;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (
    output.timeoutInSeconds !== undefined &&
    output.timeoutInSeconds !== null
  ) {
    contents.timeoutInSeconds = output.timeoutInSeconds;
  }
  return contents;
};

const deserializeAws_json1_0ActivityStartedEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityStartedEventDetails => {
  let contents: any = {
    __type: "ActivityStartedEventDetails",
    workerName: undefined
  };
  if (output.workerName !== undefined && output.workerName !== null) {
    contents.workerName = output.workerName;
  }
  return contents;
};

const deserializeAws_json1_0ActivitySucceededEventDetails = (
  output: any,
  context: __SerdeContext
): ActivitySucceededEventDetails => {
  let contents: any = {
    __type: "ActivitySucceededEventDetails",
    output: undefined
  };
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): ActivityTimedOutEventDetails => {
  let contents: any = {
    __type: "ActivityTimedOutEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0CloudWatchLogsLogGroup = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsLogGroup => {
  let contents: any = {
    __type: "CloudWatchLogsLogGroup",
    logGroupArn: undefined
  };
  if (output.logGroupArn !== undefined && output.logGroupArn !== null) {
    contents.logGroupArn = output.logGroupArn;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionAbortedEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionAbortedEventDetails => {
  let contents: any = {
    __type: "ExecutionAbortedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionFailedEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionFailedEventDetails => {
  let contents: any = {
    __type: "ExecutionFailedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionStartedEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionStartedEventDetails => {
  let contents: any = {
    __type: "ExecutionStartedEventDetails",
    input: undefined,
    roleArn: undefined
  };
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionSucceededEventDetails => {
  let contents: any = {
    __type: "ExecutionSucceededEventDetails",
    output: undefined
  };
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): ExecutionTimedOutEventDetails => {
  let contents: any = {
    __type: "ExecutionTimedOutEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0HistoryEvent = (
  output: any,
  context: __SerdeContext
): HistoryEvent => {
  let contents: any = {
    __type: "HistoryEvent",
    activityFailedEventDetails: undefined,
    activityScheduleFailedEventDetails: undefined,
    activityScheduledEventDetails: undefined,
    activityStartedEventDetails: undefined,
    activitySucceededEventDetails: undefined,
    activityTimedOutEventDetails: undefined,
    executionAbortedEventDetails: undefined,
    executionFailedEventDetails: undefined,
    executionStartedEventDetails: undefined,
    executionSucceededEventDetails: undefined,
    executionTimedOutEventDetails: undefined,
    id: undefined,
    lambdaFunctionFailedEventDetails: undefined,
    lambdaFunctionScheduleFailedEventDetails: undefined,
    lambdaFunctionScheduledEventDetails: undefined,
    lambdaFunctionStartFailedEventDetails: undefined,
    lambdaFunctionSucceededEventDetails: undefined,
    lambdaFunctionTimedOutEventDetails: undefined,
    mapIterationAbortedEventDetails: undefined,
    mapIterationFailedEventDetails: undefined,
    mapIterationStartedEventDetails: undefined,
    mapIterationSucceededEventDetails: undefined,
    mapStateStartedEventDetails: undefined,
    previousEventId: undefined,
    stateEnteredEventDetails: undefined,
    stateExitedEventDetails: undefined,
    taskFailedEventDetails: undefined,
    taskScheduledEventDetails: undefined,
    taskStartFailedEventDetails: undefined,
    taskStartedEventDetails: undefined,
    taskSubmitFailedEventDetails: undefined,
    taskSubmittedEventDetails: undefined,
    taskSucceededEventDetails: undefined,
    taskTimedOutEventDetails: undefined,
    timestamp: undefined,
    type: undefined
  };
  if (
    output.activityFailedEventDetails !== undefined &&
    output.activityFailedEventDetails !== null
  ) {
    contents.activityFailedEventDetails = deserializeAws_json1_0ActivityFailedEventDetails(
      output.activityFailedEventDetails,
      context
    );
  }
  if (
    output.activityScheduleFailedEventDetails !== undefined &&
    output.activityScheduleFailedEventDetails !== null
  ) {
    contents.activityScheduleFailedEventDetails = deserializeAws_json1_0ActivityScheduleFailedEventDetails(
      output.activityScheduleFailedEventDetails,
      context
    );
  }
  if (
    output.activityScheduledEventDetails !== undefined &&
    output.activityScheduledEventDetails !== null
  ) {
    contents.activityScheduledEventDetails = deserializeAws_json1_0ActivityScheduledEventDetails(
      output.activityScheduledEventDetails,
      context
    );
  }
  if (
    output.activityStartedEventDetails !== undefined &&
    output.activityStartedEventDetails !== null
  ) {
    contents.activityStartedEventDetails = deserializeAws_json1_0ActivityStartedEventDetails(
      output.activityStartedEventDetails,
      context
    );
  }
  if (
    output.activitySucceededEventDetails !== undefined &&
    output.activitySucceededEventDetails !== null
  ) {
    contents.activitySucceededEventDetails = deserializeAws_json1_0ActivitySucceededEventDetails(
      output.activitySucceededEventDetails,
      context
    );
  }
  if (
    output.activityTimedOutEventDetails !== undefined &&
    output.activityTimedOutEventDetails !== null
  ) {
    contents.activityTimedOutEventDetails = deserializeAws_json1_0ActivityTimedOutEventDetails(
      output.activityTimedOutEventDetails,
      context
    );
  }
  if (
    output.executionAbortedEventDetails !== undefined &&
    output.executionAbortedEventDetails !== null
  ) {
    contents.executionAbortedEventDetails = deserializeAws_json1_0ExecutionAbortedEventDetails(
      output.executionAbortedEventDetails,
      context
    );
  }
  if (
    output.executionFailedEventDetails !== undefined &&
    output.executionFailedEventDetails !== null
  ) {
    contents.executionFailedEventDetails = deserializeAws_json1_0ExecutionFailedEventDetails(
      output.executionFailedEventDetails,
      context
    );
  }
  if (
    output.executionStartedEventDetails !== undefined &&
    output.executionStartedEventDetails !== null
  ) {
    contents.executionStartedEventDetails = deserializeAws_json1_0ExecutionStartedEventDetails(
      output.executionStartedEventDetails,
      context
    );
  }
  if (
    output.executionSucceededEventDetails !== undefined &&
    output.executionSucceededEventDetails !== null
  ) {
    contents.executionSucceededEventDetails = deserializeAws_json1_0ExecutionSucceededEventDetails(
      output.executionSucceededEventDetails,
      context
    );
  }
  if (
    output.executionTimedOutEventDetails !== undefined &&
    output.executionTimedOutEventDetails !== null
  ) {
    contents.executionTimedOutEventDetails = deserializeAws_json1_0ExecutionTimedOutEventDetails(
      output.executionTimedOutEventDetails,
      context
    );
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (
    output.lambdaFunctionFailedEventDetails !== undefined &&
    output.lambdaFunctionFailedEventDetails !== null
  ) {
    contents.lambdaFunctionFailedEventDetails = deserializeAws_json1_0LambdaFunctionFailedEventDetails(
      output.lambdaFunctionFailedEventDetails,
      context
    );
  }
  if (
    output.lambdaFunctionScheduleFailedEventDetails !== undefined &&
    output.lambdaFunctionScheduleFailedEventDetails !== null
  ) {
    contents.lambdaFunctionScheduleFailedEventDetails = deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails(
      output.lambdaFunctionScheduleFailedEventDetails,
      context
    );
  }
  if (
    output.lambdaFunctionScheduledEventDetails !== undefined &&
    output.lambdaFunctionScheduledEventDetails !== null
  ) {
    contents.lambdaFunctionScheduledEventDetails = deserializeAws_json1_0LambdaFunctionScheduledEventDetails(
      output.lambdaFunctionScheduledEventDetails,
      context
    );
  }
  if (
    output.lambdaFunctionStartFailedEventDetails !== undefined &&
    output.lambdaFunctionStartFailedEventDetails !== null
  ) {
    contents.lambdaFunctionStartFailedEventDetails = deserializeAws_json1_0LambdaFunctionStartFailedEventDetails(
      output.lambdaFunctionStartFailedEventDetails,
      context
    );
  }
  if (
    output.lambdaFunctionSucceededEventDetails !== undefined &&
    output.lambdaFunctionSucceededEventDetails !== null
  ) {
    contents.lambdaFunctionSucceededEventDetails = deserializeAws_json1_0LambdaFunctionSucceededEventDetails(
      output.lambdaFunctionSucceededEventDetails,
      context
    );
  }
  if (
    output.lambdaFunctionTimedOutEventDetails !== undefined &&
    output.lambdaFunctionTimedOutEventDetails !== null
  ) {
    contents.lambdaFunctionTimedOutEventDetails = deserializeAws_json1_0LambdaFunctionTimedOutEventDetails(
      output.lambdaFunctionTimedOutEventDetails,
      context
    );
  }
  if (
    output.mapIterationAbortedEventDetails !== undefined &&
    output.mapIterationAbortedEventDetails !== null
  ) {
    contents.mapIterationAbortedEventDetails = deserializeAws_json1_0MapIterationEventDetails(
      output.mapIterationAbortedEventDetails,
      context
    );
  }
  if (
    output.mapIterationFailedEventDetails !== undefined &&
    output.mapIterationFailedEventDetails !== null
  ) {
    contents.mapIterationFailedEventDetails = deserializeAws_json1_0MapIterationEventDetails(
      output.mapIterationFailedEventDetails,
      context
    );
  }
  if (
    output.mapIterationStartedEventDetails !== undefined &&
    output.mapIterationStartedEventDetails !== null
  ) {
    contents.mapIterationStartedEventDetails = deserializeAws_json1_0MapIterationEventDetails(
      output.mapIterationStartedEventDetails,
      context
    );
  }
  if (
    output.mapIterationSucceededEventDetails !== undefined &&
    output.mapIterationSucceededEventDetails !== null
  ) {
    contents.mapIterationSucceededEventDetails = deserializeAws_json1_0MapIterationEventDetails(
      output.mapIterationSucceededEventDetails,
      context
    );
  }
  if (
    output.mapStateStartedEventDetails !== undefined &&
    output.mapStateStartedEventDetails !== null
  ) {
    contents.mapStateStartedEventDetails = deserializeAws_json1_0MapStateStartedEventDetails(
      output.mapStateStartedEventDetails,
      context
    );
  }
  if (output.previousEventId !== undefined && output.previousEventId !== null) {
    contents.previousEventId = output.previousEventId;
  }
  if (
    output.stateEnteredEventDetails !== undefined &&
    output.stateEnteredEventDetails !== null
  ) {
    contents.stateEnteredEventDetails = deserializeAws_json1_0StateEnteredEventDetails(
      output.stateEnteredEventDetails,
      context
    );
  }
  if (
    output.stateExitedEventDetails !== undefined &&
    output.stateExitedEventDetails !== null
  ) {
    contents.stateExitedEventDetails = deserializeAws_json1_0StateExitedEventDetails(
      output.stateExitedEventDetails,
      context
    );
  }
  if (
    output.taskFailedEventDetails !== undefined &&
    output.taskFailedEventDetails !== null
  ) {
    contents.taskFailedEventDetails = deserializeAws_json1_0TaskFailedEventDetails(
      output.taskFailedEventDetails,
      context
    );
  }
  if (
    output.taskScheduledEventDetails !== undefined &&
    output.taskScheduledEventDetails !== null
  ) {
    contents.taskScheduledEventDetails = deserializeAws_json1_0TaskScheduledEventDetails(
      output.taskScheduledEventDetails,
      context
    );
  }
  if (
    output.taskStartFailedEventDetails !== undefined &&
    output.taskStartFailedEventDetails !== null
  ) {
    contents.taskStartFailedEventDetails = deserializeAws_json1_0TaskStartFailedEventDetails(
      output.taskStartFailedEventDetails,
      context
    );
  }
  if (
    output.taskStartedEventDetails !== undefined &&
    output.taskStartedEventDetails !== null
  ) {
    contents.taskStartedEventDetails = deserializeAws_json1_0TaskStartedEventDetails(
      output.taskStartedEventDetails,
      context
    );
  }
  if (
    output.taskSubmitFailedEventDetails !== undefined &&
    output.taskSubmitFailedEventDetails !== null
  ) {
    contents.taskSubmitFailedEventDetails = deserializeAws_json1_0TaskSubmitFailedEventDetails(
      output.taskSubmitFailedEventDetails,
      context
    );
  }
  if (
    output.taskSubmittedEventDetails !== undefined &&
    output.taskSubmittedEventDetails !== null
  ) {
    contents.taskSubmittedEventDetails = deserializeAws_json1_0TaskSubmittedEventDetails(
      output.taskSubmittedEventDetails,
      context
    );
  }
  if (
    output.taskSucceededEventDetails !== undefined &&
    output.taskSucceededEventDetails !== null
  ) {
    contents.taskSucceededEventDetails = deserializeAws_json1_0TaskSucceededEventDetails(
      output.taskSucceededEventDetails,
      context
    );
  }
  if (
    output.taskTimedOutEventDetails !== undefined &&
    output.taskTimedOutEventDetails !== null
  ) {
    contents.taskTimedOutEventDetails = deserializeAws_json1_0TaskTimedOutEventDetails(
      output.taskTimedOutEventDetails,
      context
    );
  }
  if (output.timestamp !== undefined && output.timestamp !== null) {
    contents.timestamp = new Date(Math.round(output.timestamp * 1000));
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_0HistoryEventList = (
  output: any,
  context: __SerdeContext
): Array<HistoryEvent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0HistoryEvent(entry, context)
  );
};

const deserializeAws_json1_0LambdaFunctionFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionFailedEventDetails => {
  let contents: any = {
    __type: "LambdaFunctionFailedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionScheduleFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduleFailedEventDetails => {
  let contents: any = {
    __type: "LambdaFunctionScheduleFailedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduledEventDetails => {
  let contents: any = {
    __type: "LambdaFunctionScheduledEventDetails",
    input: undefined,
    resource: undefined,
    timeoutInSeconds: undefined
  };
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (
    output.timeoutInSeconds !== undefined &&
    output.timeoutInSeconds !== null
  ) {
    contents.timeoutInSeconds = output.timeoutInSeconds;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionStartFailedEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionStartFailedEventDetails => {
  let contents: any = {
    __type: "LambdaFunctionStartFailedEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionSucceededEventDetails => {
  let contents: any = {
    __type: "LambdaFunctionSucceededEventDetails",
    output: undefined
  };
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): LambdaFunctionTimedOutEventDetails => {
  let contents: any = {
    __type: "LambdaFunctionTimedOutEventDetails",
    cause: undefined,
    error: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  return contents;
};

const deserializeAws_json1_0LogDestination = (
  output: any,
  context: __SerdeContext
): LogDestination => {
  let contents: any = {
    __type: "LogDestination",
    cloudWatchLogsLogGroup: undefined
  };
  if (
    output.cloudWatchLogsLogGroup !== undefined &&
    output.cloudWatchLogsLogGroup !== null
  ) {
    contents.cloudWatchLogsLogGroup = deserializeAws_json1_0CloudWatchLogsLogGroup(
      output.cloudWatchLogsLogGroup,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0LogDestinationList = (
  output: any,
  context: __SerdeContext
): Array<LogDestination> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0LogDestination(entry, context)
  );
};

const deserializeAws_json1_0LoggingConfiguration = (
  output: any,
  context: __SerdeContext
): LoggingConfiguration => {
  let contents: any = {
    __type: "LoggingConfiguration",
    destinations: undefined,
    includeExecutionData: undefined,
    level: undefined
  };
  if (output.destinations !== undefined && output.destinations !== null) {
    contents.destinations = deserializeAws_json1_0LogDestinationList(
      output.destinations,
      context
    );
  }
  if (
    output.includeExecutionData !== undefined &&
    output.includeExecutionData !== null
  ) {
    contents.includeExecutionData = output.includeExecutionData;
  }
  if (output.level !== undefined && output.level !== null) {
    contents.level = output.level;
  }
  return contents;
};

const deserializeAws_json1_0MapIterationEventDetails = (
  output: any,
  context: __SerdeContext
): MapIterationEventDetails => {
  let contents: any = {
    __type: "MapIterationEventDetails",
    index: undefined,
    name: undefined
  };
  if (output.index !== undefined && output.index !== null) {
    contents.index = output.index;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_0MapStateStartedEventDetails = (
  output: any,
  context: __SerdeContext
): MapStateStartedEventDetails => {
  let contents: any = {
    __type: "MapStateStartedEventDetails",
    length: undefined
  };
  if (output.length !== undefined && output.length !== null) {
    contents.length = output.length;
  }
  return contents;
};

const deserializeAws_json1_0StateEnteredEventDetails = (
  output: any,
  context: __SerdeContext
): StateEnteredEventDetails => {
  let contents: any = {
    __type: "StateEnteredEventDetails",
    input: undefined,
    name: undefined
  };
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_0StateExitedEventDetails = (
  output: any,
  context: __SerdeContext
): StateExitedEventDetails => {
  let contents: any = {
    __type: "StateExitedEventDetails",
    name: undefined,
    output: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  return contents;
};

const deserializeAws_json1_0TaskFailedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskFailedEventDetails => {
  let contents: any = {
    __type: "TaskFailedEventDetails",
    cause: undefined,
    error: undefined,
    resource: undefined,
    resourceType: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0TaskScheduledEventDetails = (
  output: any,
  context: __SerdeContext
): TaskScheduledEventDetails => {
  let contents: any = {
    __type: "TaskScheduledEventDetails",
    parameters: undefined,
    region: undefined,
    resource: undefined,
    resourceType: undefined,
    timeoutInSeconds: undefined
  };
  if (output.parameters !== undefined && output.parameters !== null) {
    contents.parameters = output.parameters;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  if (
    output.timeoutInSeconds !== undefined &&
    output.timeoutInSeconds !== null
  ) {
    contents.timeoutInSeconds = output.timeoutInSeconds;
  }
  return contents;
};

const deserializeAws_json1_0TaskStartFailedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskStartFailedEventDetails => {
  let contents: any = {
    __type: "TaskStartFailedEventDetails",
    cause: undefined,
    error: undefined,
    resource: undefined,
    resourceType: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0TaskStartedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskStartedEventDetails => {
  let contents: any = {
    __type: "TaskStartedEventDetails",
    resource: undefined,
    resourceType: undefined
  };
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0TaskSubmitFailedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskSubmitFailedEventDetails => {
  let contents: any = {
    __type: "TaskSubmitFailedEventDetails",
    cause: undefined,
    error: undefined,
    resource: undefined,
    resourceType: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0TaskSubmittedEventDetails = (
  output: any,
  context: __SerdeContext
): TaskSubmittedEventDetails => {
  let contents: any = {
    __type: "TaskSubmittedEventDetails",
    output: undefined,
    resource: undefined,
    resourceType: undefined
  };
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0TaskSucceededEventDetails = (
  output: any,
  context: __SerdeContext
): TaskSucceededEventDetails => {
  let contents: any = {
    __type: "TaskSucceededEventDetails",
    output: undefined,
    resource: undefined,
    resourceType: undefined
  };
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0TaskTimedOutEventDetails = (
  output: any,
  context: __SerdeContext
): TaskTimedOutEventDetails => {
  let contents: any = {
    __type: "TaskTimedOutEventDetails",
    cause: undefined,
    error: undefined,
    resource: undefined,
    resourceType: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.error !== undefined && output.error !== null) {
    contents.error = output.error;
  }
  if (output.resource !== undefined && output.resource !== null) {
    contents.resource = output.resource;
  }
  if (output.resourceType !== undefined && output.resourceType !== null) {
    contents.resourceType = output.resourceType;
  }
  return contents;
};

const deserializeAws_json1_0ActivityDoesNotExist = (
  output: any,
  context: __SerdeContext
): ActivityDoesNotExist => {
  let contents: any = {
    __type: "ActivityDoesNotExist",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ActivityLimitExceeded = (
  output: any,
  context: __SerdeContext
): ActivityLimitExceeded => {
  let contents: any = {
    __type: "ActivityLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ActivityList = (
  output: any,
  context: __SerdeContext
): Array<ActivityListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ActivityListItem(entry, context)
  );
};

const deserializeAws_json1_0ActivityListItem = (
  output: any,
  context: __SerdeContext
): ActivityListItem => {
  let contents: any = {
    __type: "ActivityListItem",
    activityArn: undefined,
    creationDate: undefined,
    name: undefined
  };
  if (output.activityArn !== undefined && output.activityArn !== null) {
    contents.activityArn = output.activityArn;
  }
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_0ActivityWorkerLimitExceeded = (
  output: any,
  context: __SerdeContext
): ActivityWorkerLimitExceeded => {
  let contents: any = {
    __type: "ActivityWorkerLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0CreateActivityOutput = (
  output: any,
  context: __SerdeContext
): CreateActivityOutput => {
  let contents: any = {
    __type: "CreateActivityOutput",
    activityArn: undefined,
    creationDate: undefined
  };
  if (output.activityArn !== undefined && output.activityArn !== null) {
    contents.activityArn = output.activityArn;
  }
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_0CreateStateMachineOutput = (
  output: any,
  context: __SerdeContext
): CreateStateMachineOutput => {
  let contents: any = {
    __type: "CreateStateMachineOutput",
    creationDate: undefined,
    stateMachineArn: undefined
  };
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
    contents.stateMachineArn = output.stateMachineArn;
  }
  return contents;
};

const deserializeAws_json1_0DeleteActivityOutput = (
  output: any,
  context: __SerdeContext
): DeleteActivityOutput => {
  let contents: any = {
    __type: "DeleteActivityOutput"
  };
  return contents;
};

const deserializeAws_json1_0DeleteStateMachineOutput = (
  output: any,
  context: __SerdeContext
): DeleteStateMachineOutput => {
  let contents: any = {
    __type: "DeleteStateMachineOutput"
  };
  return contents;
};

const deserializeAws_json1_0DescribeActivityOutput = (
  output: any,
  context: __SerdeContext
): DescribeActivityOutput => {
  let contents: any = {
    __type: "DescribeActivityOutput",
    activityArn: undefined,
    creationDate: undefined,
    name: undefined
  };
  if (output.activityArn !== undefined && output.activityArn !== null) {
    contents.activityArn = output.activityArn;
  }
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_0DescribeExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeExecutionOutput => {
  let contents: any = {
    __type: "DescribeExecutionOutput",
    executionArn: undefined,
    input: undefined,
    name: undefined,
    output: undefined,
    startDate: undefined,
    stateMachineArn: undefined,
    status: undefined,
    stopDate: undefined
  };
  if (output.executionArn !== undefined && output.executionArn !== null) {
    contents.executionArn = output.executionArn;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.output !== undefined && output.output !== null) {
    contents.output = output.output;
  }
  if (output.startDate !== undefined && output.startDate !== null) {
    contents.startDate = new Date(Math.round(output.startDate * 1000));
  }
  if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
    contents.stateMachineArn = output.stateMachineArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopDate !== undefined && output.stopDate !== null) {
    contents.stopDate = new Date(Math.round(output.stopDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_0DescribeStateMachineForExecutionOutput = (
  output: any,
  context: __SerdeContext
): DescribeStateMachineForExecutionOutput => {
  let contents: any = {
    __type: "DescribeStateMachineForExecutionOutput",
    definition: undefined,
    name: undefined,
    roleArn: undefined,
    stateMachineArn: undefined,
    updateDate: undefined
  };
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = output.definition;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
    contents.stateMachineArn = output.stateMachineArn;
  }
  if (output.updateDate !== undefined && output.updateDate !== null) {
    contents.updateDate = new Date(Math.round(output.updateDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_0DescribeStateMachineOutput = (
  output: any,
  context: __SerdeContext
): DescribeStateMachineOutput => {
  let contents: any = {
    __type: "DescribeStateMachineOutput",
    creationDate: undefined,
    definition: undefined,
    loggingConfiguration: undefined,
    name: undefined,
    roleArn: undefined,
    stateMachineArn: undefined,
    status: undefined,
    type: undefined
  };
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.definition !== undefined && output.definition !== null) {
    contents.definition = output.definition;
  }
  if (
    output.loggingConfiguration !== undefined &&
    output.loggingConfiguration !== null
  ) {
    contents.loggingConfiguration = deserializeAws_json1_0LoggingConfiguration(
      output.loggingConfiguration,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.roleArn !== undefined && output.roleArn !== null) {
    contents.roleArn = output.roleArn;
  }
  if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
    contents.stateMachineArn = output.stateMachineArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionAlreadyExists = (
  output: any,
  context: __SerdeContext
): ExecutionAlreadyExists => {
  let contents: any = {
    __type: "ExecutionAlreadyExists",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionDoesNotExist = (
  output: any,
  context: __SerdeContext
): ExecutionDoesNotExist => {
  let contents: any = {
    __type: "ExecutionDoesNotExist",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionLimitExceeded = (
  output: any,
  context: __SerdeContext
): ExecutionLimitExceeded => {
  let contents: any = {
    __type: "ExecutionLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ExecutionList = (
  output: any,
  context: __SerdeContext
): Array<ExecutionListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ExecutionListItem(entry, context)
  );
};

const deserializeAws_json1_0ExecutionListItem = (
  output: any,
  context: __SerdeContext
): ExecutionListItem => {
  let contents: any = {
    __type: "ExecutionListItem",
    executionArn: undefined,
    name: undefined,
    startDate: undefined,
    stateMachineArn: undefined,
    status: undefined,
    stopDate: undefined
  };
  if (output.executionArn !== undefined && output.executionArn !== null) {
    contents.executionArn = output.executionArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.startDate !== undefined && output.startDate !== null) {
    contents.startDate = new Date(Math.round(output.startDate * 1000));
  }
  if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
    contents.stateMachineArn = output.stateMachineArn;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopDate !== undefined && output.stopDate !== null) {
    contents.stopDate = new Date(Math.round(output.stopDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_0GetActivityTaskOutput = (
  output: any,
  context: __SerdeContext
): GetActivityTaskOutput => {
  let contents: any = {
    __type: "GetActivityTaskOutput",
    input: undefined,
    taskToken: undefined
  };
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.taskToken !== undefined && output.taskToken !== null) {
    contents.taskToken = output.taskToken;
  }
  return contents;
};

const deserializeAws_json1_0GetExecutionHistoryOutput = (
  output: any,
  context: __SerdeContext
): GetExecutionHistoryOutput => {
  let contents: any = {
    __type: "GetExecutionHistoryOutput",
    events: undefined,
    nextToken: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_json1_0HistoryEventList(
      output.events,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_0InvalidArn = (
  output: any,
  context: __SerdeContext
): InvalidArn => {
  let contents: any = {
    __type: "InvalidArn",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidDefinition = (
  output: any,
  context: __SerdeContext
): InvalidDefinition => {
  let contents: any = {
    __type: "InvalidDefinition",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidExecutionInput = (
  output: any,
  context: __SerdeContext
): InvalidExecutionInput => {
  let contents: any = {
    __type: "InvalidExecutionInput",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): InvalidLoggingConfiguration => {
  let contents: any = {
    __type: "InvalidLoggingConfiguration",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidName = (
  output: any,
  context: __SerdeContext
): InvalidName => {
  let contents: any = {
    __type: "InvalidName",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidOutput = (
  output: any,
  context: __SerdeContext
): InvalidOutput => {
  let contents: any = {
    __type: "InvalidOutput",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0InvalidToken = (
  output: any,
  context: __SerdeContext
): InvalidToken => {
  let contents: any = {
    __type: "InvalidToken",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ListActivitiesOutput = (
  output: any,
  context: __SerdeContext
): ListActivitiesOutput => {
  let contents: any = {
    __type: "ListActivitiesOutput",
    activities: undefined,
    nextToken: undefined
  };
  if (output.activities !== undefined && output.activities !== null) {
    contents.activities = deserializeAws_json1_0ActivityList(
      output.activities,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_0ListExecutionsOutput = (
  output: any,
  context: __SerdeContext
): ListExecutionsOutput => {
  let contents: any = {
    __type: "ListExecutionsOutput",
    executions: undefined,
    nextToken: undefined
  };
  if (output.executions !== undefined && output.executions !== null) {
    contents.executions = deserializeAws_json1_0ExecutionList(
      output.executions,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_0ListStateMachinesOutput = (
  output: any,
  context: __SerdeContext
): ListStateMachinesOutput => {
  let contents: any = {
    __type: "ListStateMachinesOutput",
    nextToken: undefined,
    stateMachines: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.stateMachines !== undefined && output.stateMachines !== null) {
    contents.stateMachines = deserializeAws_json1_0StateMachineList(
      output.stateMachines,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    tags: undefined
  };
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_0TagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_0MissingRequiredParameter = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameter => {
  let contents: any = {
    __type: "MissingRequiredParameter",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0ResourceNotFound = (
  output: any,
  context: __SerdeContext
): ResourceNotFound => {
  let contents: any = {
    __type: "ResourceNotFound",
    message: undefined,
    resourceName: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceName !== undefined && output.resourceName !== null) {
    contents.resourceName = output.resourceName;
  }
  return contents;
};

const deserializeAws_json1_0SendTaskFailureOutput = (
  output: any,
  context: __SerdeContext
): SendTaskFailureOutput => {
  let contents: any = {
    __type: "SendTaskFailureOutput"
  };
  return contents;
};

const deserializeAws_json1_0SendTaskHeartbeatOutput = (
  output: any,
  context: __SerdeContext
): SendTaskHeartbeatOutput => {
  let contents: any = {
    __type: "SendTaskHeartbeatOutput"
  };
  return contents;
};

const deserializeAws_json1_0SendTaskSuccessOutput = (
  output: any,
  context: __SerdeContext
): SendTaskSuccessOutput => {
  let contents: any = {
    __type: "SendTaskSuccessOutput"
  };
  return contents;
};

const deserializeAws_json1_0StartExecutionOutput = (
  output: any,
  context: __SerdeContext
): StartExecutionOutput => {
  let contents: any = {
    __type: "StartExecutionOutput",
    executionArn: undefined,
    startDate: undefined
  };
  if (output.executionArn !== undefined && output.executionArn !== null) {
    contents.executionArn = output.executionArn;
  }
  if (output.startDate !== undefined && output.startDate !== null) {
    contents.startDate = new Date(Math.round(output.startDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_0StateMachineAlreadyExists = (
  output: any,
  context: __SerdeContext
): StateMachineAlreadyExists => {
  let contents: any = {
    __type: "StateMachineAlreadyExists",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0StateMachineDeleting = (
  output: any,
  context: __SerdeContext
): StateMachineDeleting => {
  let contents: any = {
    __type: "StateMachineDeleting",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0StateMachineDoesNotExist = (
  output: any,
  context: __SerdeContext
): StateMachineDoesNotExist => {
  let contents: any = {
    __type: "StateMachineDoesNotExist",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0StateMachineLimitExceeded = (
  output: any,
  context: __SerdeContext
): StateMachineLimitExceeded => {
  let contents: any = {
    __type: "StateMachineLimitExceeded",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0StateMachineList = (
  output: any,
  context: __SerdeContext
): Array<StateMachineListItem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0StateMachineListItem(entry, context)
  );
};

const deserializeAws_json1_0StateMachineListItem = (
  output: any,
  context: __SerdeContext
): StateMachineListItem => {
  let contents: any = {
    __type: "StateMachineListItem",
    creationDate: undefined,
    name: undefined,
    stateMachineArn: undefined,
    type: undefined
  };
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.stateMachineArn !== undefined && output.stateMachineArn !== null) {
    contents.stateMachineArn = output.stateMachineArn;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_0StateMachineTypeNotSupported = (
  output: any,
  context: __SerdeContext
): StateMachineTypeNotSupported => {
  let contents: any = {
    __type: "StateMachineTypeNotSupported",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0StopExecutionOutput = (
  output: any,
  context: __SerdeContext
): StopExecutionOutput => {
  let contents: any = {
    __type: "StopExecutionOutput",
    stopDate: undefined
  };
  if (output.stopDate !== undefined && output.stopDate !== null) {
    contents.stopDate = new Date(Math.round(output.stopDate * 1000));
  }
  return contents;
};

const deserializeAws_json1_0Tag = (
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

const deserializeAws_json1_0TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0Tag(entry, context)
  );
};

const deserializeAws_json1_0TagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  let contents: any = {
    __type: "TagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_0TaskDoesNotExist = (
  output: any,
  context: __SerdeContext
): TaskDoesNotExist => {
  let contents: any = {
    __type: "TaskDoesNotExist",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TaskTimedOut = (
  output: any,
  context: __SerdeContext
): TaskTimedOut => {
  let contents: any = {
    __type: "TaskTimedOut",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TooManyTags = (
  output: any,
  context: __SerdeContext
): TooManyTags => {
  let contents: any = {
    __type: "TooManyTags",
    message: undefined,
    resourceName: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceName !== undefined && output.resourceName !== null) {
    contents.resourceName = output.resourceName;
  }
  return contents;
};

const deserializeAws_json1_0UntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  let contents: any = {
    __type: "UntagResourceOutput"
  };
  return contents;
};

const deserializeAws_json1_0UpdateStateMachineOutput = (
  output: any,
  context: __SerdeContext
): UpdateStateMachineOutput => {
  let contents: any = {
    __type: "UpdateStateMachineOutput",
    updateDate: undefined
  };
  if (output.updateDate !== undefined && output.updateDate !== null) {
    contents.updateDate = new Date(Math.round(output.updateDate * 1000));
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
