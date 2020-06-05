import {
  ActivateEventSourceCommandInput,
  ActivateEventSourceCommandOutput
} from "../commands/ActivateEventSourceCommand";
import {
  CreateEventBusCommandInput,
  CreateEventBusCommandOutput
} from "../commands/CreateEventBusCommand";
import {
  CreatePartnerEventSourceCommandInput,
  CreatePartnerEventSourceCommandOutput
} from "../commands/CreatePartnerEventSourceCommand";
import {
  DeactivateEventSourceCommandInput,
  DeactivateEventSourceCommandOutput
} from "../commands/DeactivateEventSourceCommand";
import {
  DeleteEventBusCommandInput,
  DeleteEventBusCommandOutput
} from "../commands/DeleteEventBusCommand";
import {
  DeletePartnerEventSourceCommandInput,
  DeletePartnerEventSourceCommandOutput
} from "../commands/DeletePartnerEventSourceCommand";
import {
  DeleteRuleCommandInput,
  DeleteRuleCommandOutput
} from "../commands/DeleteRuleCommand";
import {
  DescribeEventBusCommandInput,
  DescribeEventBusCommandOutput
} from "../commands/DescribeEventBusCommand";
import {
  DescribeEventSourceCommandInput,
  DescribeEventSourceCommandOutput
} from "../commands/DescribeEventSourceCommand";
import {
  DescribePartnerEventSourceCommandInput,
  DescribePartnerEventSourceCommandOutput
} from "../commands/DescribePartnerEventSourceCommand";
import {
  DescribeRuleCommandInput,
  DescribeRuleCommandOutput
} from "../commands/DescribeRuleCommand";
import {
  DisableRuleCommandInput,
  DisableRuleCommandOutput
} from "../commands/DisableRuleCommand";
import {
  EnableRuleCommandInput,
  EnableRuleCommandOutput
} from "../commands/EnableRuleCommand";
import {
  ListEventBusesCommandInput,
  ListEventBusesCommandOutput
} from "../commands/ListEventBusesCommand";
import {
  ListEventSourcesCommandInput,
  ListEventSourcesCommandOutput
} from "../commands/ListEventSourcesCommand";
import {
  ListPartnerEventSourceAccountsCommandInput,
  ListPartnerEventSourceAccountsCommandOutput
} from "../commands/ListPartnerEventSourceAccountsCommand";
import {
  ListPartnerEventSourcesCommandInput,
  ListPartnerEventSourcesCommandOutput
} from "../commands/ListPartnerEventSourcesCommand";
import {
  ListRuleNamesByTargetCommandInput,
  ListRuleNamesByTargetCommandOutput
} from "../commands/ListRuleNamesByTargetCommand";
import {
  ListRulesCommandInput,
  ListRulesCommandOutput
} from "../commands/ListRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetsByRuleCommandInput,
  ListTargetsByRuleCommandOutput
} from "../commands/ListTargetsByRuleCommand";
import {
  PutEventsCommandInput,
  PutEventsCommandOutput
} from "../commands/PutEventsCommand";
import {
  PutPartnerEventsCommandInput,
  PutPartnerEventsCommandOutput
} from "../commands/PutPartnerEventsCommand";
import {
  PutPermissionCommandInput,
  PutPermissionCommandOutput
} from "../commands/PutPermissionCommand";
import {
  PutRuleCommandInput,
  PutRuleCommandOutput
} from "../commands/PutRuleCommand";
import {
  PutTargetsCommandInput,
  PutTargetsCommandOutput
} from "../commands/PutTargetsCommand";
import {
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput
} from "../commands/RemovePermissionCommand";
import {
  RemoveTargetsCommandInput,
  RemoveTargetsCommandOutput
} from "../commands/RemoveTargetsCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TestEventPatternCommandInput,
  TestEventPatternCommandOutput
} from "../commands/TestEventPatternCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  ActivateEventSourceRequest,
  AwsVpcConfiguration,
  BatchArrayProperties,
  BatchParameters,
  BatchRetryStrategy,
  ConcurrentModificationException,
  Condition,
  CreateEventBusRequest,
  CreateEventBusResponse,
  CreatePartnerEventSourceRequest,
  CreatePartnerEventSourceResponse,
  DeactivateEventSourceRequest,
  DeleteEventBusRequest,
  DeletePartnerEventSourceRequest,
  DeleteRuleRequest,
  DescribeEventBusRequest,
  DescribeEventBusResponse,
  DescribeEventSourceRequest,
  DescribeEventSourceResponse,
  DescribePartnerEventSourceRequest,
  DescribePartnerEventSourceResponse,
  DescribeRuleRequest,
  DescribeRuleResponse,
  DisableRuleRequest,
  EcsParameters,
  EnableRuleRequest,
  EventBus,
  EventSource,
  InputTransformer,
  InternalException,
  InvalidEventPatternException,
  InvalidStateException,
  KinesisParameters,
  LimitExceededException,
  ListEventBusesRequest,
  ListEventBusesResponse,
  ListEventSourcesRequest,
  ListEventSourcesResponse,
  ListPartnerEventSourceAccountsRequest,
  ListPartnerEventSourceAccountsResponse,
  ListPartnerEventSourcesRequest,
  ListPartnerEventSourcesResponse,
  ListRuleNamesByTargetRequest,
  ListRuleNamesByTargetResponse,
  ListRulesRequest,
  ListRulesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTargetsByRuleRequest,
  ListTargetsByRuleResponse,
  ManagedRuleException,
  NetworkConfiguration,
  PartnerEventSource,
  PartnerEventSourceAccount,
  PolicyLengthExceededException,
  PutEventsRequest,
  PutEventsRequestEntry,
  PutEventsResponse,
  PutEventsResultEntry,
  PutPartnerEventsRequest,
  PutPartnerEventsRequestEntry,
  PutPartnerEventsResponse,
  PutPartnerEventsResultEntry,
  PutPermissionRequest,
  PutRuleRequest,
  PutRuleResponse,
  PutTargetsRequest,
  PutTargetsResponse,
  PutTargetsResultEntry,
  RemovePermissionRequest,
  RemoveTargetsRequest,
  RemoveTargetsResponse,
  RemoveTargetsResultEntry,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  Rule,
  RunCommandParameters,
  RunCommandTarget,
  SqsParameters,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  Target,
  TestEventPatternRequest,
  TestEventPatternResponse,
  UntagResourceRequest,
  UntagResourceResponse
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

export const serializeAws_json1_1ActivateEventSourceCommand = async (
  input: ActivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ActivateEventSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ActivateEventSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateEventBusCommand = async (
  input: CreateEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.CreateEventBus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateEventBusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePartnerEventSourceCommand = async (
  input: CreatePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.CreatePartnerEventSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreatePartnerEventSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeactivateEventSourceCommand = async (
  input: DeactivateEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeactivateEventSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeactivateEventSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteEventBusCommand = async (
  input: DeleteEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeleteEventBus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteEventBusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePartnerEventSourceCommand = async (
  input: DeletePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeletePartnerEventSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeletePartnerEventSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRuleCommand = async (
  input: DeleteRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DeleteRule"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventBusCommand = async (
  input: DescribeEventBusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeEventBus"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventBusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEventSourceCommand = async (
  input: DescribeEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeEventSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEventSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePartnerEventSourceCommand = async (
  input: DescribePartnerEventSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribePartnerEventSource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribePartnerEventSourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeRuleCommand = async (
  input: DescribeRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DescribeRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisableRuleCommand = async (
  input: DisableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.DisableRule"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1EnableRuleCommand = async (
  input: EnableRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.EnableRule"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1EnableRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventBusesCommand = async (
  input: ListEventBusesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListEventBuses"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEventBusesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListEventSourcesCommand = async (
  input: ListEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListEventSources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListEventSourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (
  input: ListPartnerEventSourceAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListPartnerEventSourceAccounts"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPartnerEventSourceAccountsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPartnerEventSourcesCommand = async (
  input: ListPartnerEventSourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListPartnerEventSources"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPartnerEventSourcesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRuleNamesByTargetCommand = async (
  input: ListRuleNamesByTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListRuleNamesByTarget"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRuleNamesByTargetRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListRules"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTargetsByRuleCommand = async (
  input: ListTargetsByRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.ListTargetsByRule"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTargetsByRuleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutEventsCommand = async (
  input: PutEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutEvents"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutEventsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPartnerEventsCommand = async (
  input: PutPartnerEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutPartnerEvents"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutPartnerEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutPermissionCommand = async (
  input: PutPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutPermission"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutPermissionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutRuleCommand = async (
  input: PutRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutRule"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutRuleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutTargetsCommand = async (
  input: PutTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.PutTargets"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutTargetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.RemovePermission"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemovePermissionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RemoveTargetsCommand = async (
  input: RemoveTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.RemoveTargets"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RemoveTargetsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.TagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TestEventPatternCommand = async (
  input: TestEventPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.TestEventPattern"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1TestEventPatternRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSEvents.UntagResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1ActivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ActivateEventSourceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: ActivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ActivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateEventSourceCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.cloudwatchevents#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1CreateEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateEventBusResponse(data, context);
  const response: CreateEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateEventBusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventBusCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.cloudwatchevents#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1CreatePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreatePartnerEventSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePartnerEventSourceResponse(
    data,
    context
  );
  const response: CreatePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreatePartnerEventSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePartnerEventSourceCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.cloudwatchevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
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

export const deserializeAws_json1_1DeactivateEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeactivateEventSourceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeactivateEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeactivateEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateEventSourceCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidStateException":
    case "com.amazonaws.cloudwatchevents#InvalidStateException":
      response = {
        ...(await deserializeAws_json1_1InvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DeleteEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteEventBusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEventBusCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventBusCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1DeletePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeletePartnerEventSourceCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeletePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePartnerEventSourceCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1DeleteRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRuleCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeEventBusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventBusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventBusResponse(data, context);
  const response: DescribeEventBusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventBusResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventBusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventBusCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEventSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEventSourceResponse(data, context);
  const response: DescribeEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEventSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEventSourceCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribePartnerEventSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribePartnerEventSourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePartnerEventSourceResponse(
    data,
    context
  );
  const response: DescribePartnerEventSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePartnerEventSourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePartnerEventSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePartnerEventSourceCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DescribeRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeRuleResponse(data, context);
  const response: DescribeRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRuleCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1DisableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableRuleCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1EnableRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1EnableRuleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableRuleCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1EnableRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableRuleCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListEventBusesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEventBusesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventBusesResponse(data, context);
  const response: ListEventBusesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventBusesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventBusesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventBusesCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1ListEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListEventSourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListEventSourcesResponse(data, context);
  const response: ListEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventSourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourcesCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1ListPartnerEventSourceAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourceAccountsResponse(
    data,
    context
  );
  const response: ListPartnerEventSourceAccountsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPartnerEventSourceAccountsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListPartnerEventSourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPartnerEventSourcesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPartnerEventSourcesResponse(
    data,
    context
  );
  const response: ListPartnerEventSourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPartnerEventSourcesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPartnerEventSourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartnerEventSourcesCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1ListRuleNamesByTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRuleNamesByTargetCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRuleNamesByTargetResponse(data, context);
  const response: ListRuleNamesByTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRuleNamesByTargetResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRuleNamesByTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRuleNamesByTargetCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRulesResponse(data, context);
  const response: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRulesResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1ListTargetsByRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTargetsByRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTargetsByRuleResponse(data, context);
  const response: ListTargetsByRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTargetsByRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTargetsByRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsByRuleCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PutEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventsResponse(data, context);
  const response: PutEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventsCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1PutPartnerEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPartnerEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutPartnerEventsResponse(data, context);
  const response: PutPartnerEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutPartnerEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPartnerEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPartnerEventsCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
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

export const deserializeAws_json1_1PutPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutPermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutPermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPermissionCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.cloudwatchevents#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_json1_1PolicyLengthExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PutRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutRuleResponse(data, context);
  const response: PutRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRuleResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRuleCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1PutTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutTargetsResponse(data, context);
  const response: PutTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTargetsCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatchevents#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemovePermissionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1RemoveTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RemoveTargetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RemoveTargetsResponse(data, context);
  const response: RemoveTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTargetsResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RemoveTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTargetsCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export const deserializeAws_json1_1TestEventPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TestEventPatternCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TestEventPatternResponse(data, context);
  const response: TestEventPatternCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TestEventPatternResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TestEventPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestEventPatternCommandOutput> => {
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
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEventPatternException":
    case "com.amazonaws.cloudwatchevents#InvalidEventPatternException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventPatternExceptionResponse(
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatchevents#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalException":
    case "com.amazonaws.cloudwatchevents#InternalException":
      response = {
        ...(await deserializeAws_json1_1InternalExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ManagedRuleException":
    case "com.amazonaws.cloudwatchevents#ManagedRuleException":
      response = {
        ...(await deserializeAws_json1_1ManagedRuleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatchevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(
    body,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalException(
    body,
    context
  );
  const contents: InternalException = {
    name: "InternalException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventPatternExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventPatternException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventPatternException(
    body,
    context
  );
  const contents: InvalidEventPatternException = {
    name: "InvalidEventPatternException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidStateException(
    body,
    context
  );
  const contents: InvalidStateException = {
    name: "InvalidStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ManagedRuleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ManagedRuleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ManagedRuleException(
    body,
    context
  );
  const contents: ManagedRuleException = {
    name: "ManagedRuleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1PolicyLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1PolicyLengthExceededException(
    body,
    context
  );
  const contents: PolicyLengthExceededException = {
    name: "PolicyLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(
    body,
    context
  );
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    body,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1ActivateEventSourceRequest = (
  input: ActivateEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1AwsVpcConfiguration = (
  input: AwsVpcConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignPublicIp !== undefined && {
      AssignPublicIp: input.AssignPublicIp
    }),
    ...(input.SecurityGroups !== undefined && {
      SecurityGroups: serializeAws_json1_1StringList(
        input.SecurityGroups,
        context
      )
    }),
    ...(input.Subnets !== undefined && {
      Subnets: serializeAws_json1_1StringList(input.Subnets, context)
    })
  };
};

const serializeAws_json1_1BatchArrayProperties = (
  input: BatchArrayProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.Size !== undefined && { Size: input.Size })
  };
};

const serializeAws_json1_1BatchParameters = (
  input: BatchParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArrayProperties !== undefined && {
      ArrayProperties: serializeAws_json1_1BatchArrayProperties(
        input.ArrayProperties,
        context
      )
    }),
    ...(input.JobDefinition !== undefined && {
      JobDefinition: input.JobDefinition
    }),
    ...(input.JobName !== undefined && { JobName: input.JobName }),
    ...(input.RetryStrategy !== undefined && {
      RetryStrategy: serializeAws_json1_1BatchRetryStrategy(
        input.RetryStrategy,
        context
      )
    })
  };
};

const serializeAws_json1_1BatchRetryStrategy = (
  input: BatchRetryStrategy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attempts !== undefined && { Attempts: input.Attempts })
  };
};

const serializeAws_json1_1Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1CreateEventBusRequest = (
  input: CreateEventBusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventSourceName !== undefined && {
      EventSourceName: input.EventSourceName
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1CreatePartnerEventSourceRequest = (
  input: CreatePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Account !== undefined && { Account: input.Account }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeactivateEventSourceRequest = (
  input: DeactivateEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeleteEventBusRequest = (
  input: DeleteEventBusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeletePartnerEventSourceRequest = (
  input: DeletePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Account !== undefined && { Account: input.Account }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DeleteRuleRequest = (
  input: DeleteRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Force !== undefined && { Force: input.Force }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DescribeEventBusRequest = (
  input: DescribeEventBusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DescribeEventSourceRequest = (
  input: DescribeEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DescribePartnerEventSourceRequest = (
  input: DescribePartnerEventSourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DescribeRuleRequest = (
  input: DescribeRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1DisableRuleRequest = (
  input: DisableRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1EcsParameters = (
  input: EcsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Group !== undefined && { Group: input.Group }),
    ...(input.LaunchType !== undefined && { LaunchType: input.LaunchType }),
    ...(input.NetworkConfiguration !== undefined && {
      NetworkConfiguration: serializeAws_json1_1NetworkConfiguration(
        input.NetworkConfiguration,
        context
      )
    }),
    ...(input.PlatformVersion !== undefined && {
      PlatformVersion: input.PlatformVersion
    }),
    ...(input.TaskCount !== undefined && { TaskCount: input.TaskCount }),
    ...(input.TaskDefinitionArn !== undefined && {
      TaskDefinitionArn: input.TaskDefinitionArn
    })
  };
};

const serializeAws_json1_1EnableRuleRequest = (
  input: EnableRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Name !== undefined && { Name: input.Name })
  };
};

const serializeAws_json1_1EventResourceList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1InputTransformer = (
  input: InputTransformer,
  context: __SerdeContext
): any => {
  return {
    ...(input.InputPathsMap !== undefined && {
      InputPathsMap: serializeAws_json1_1TransformerPaths(
        input.InputPathsMap,
        context
      )
    }),
    ...(input.InputTemplate !== undefined && {
      InputTemplate: input.InputTemplate
    })
  };
};

const serializeAws_json1_1KinesisParameters = (
  input: KinesisParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.PartitionKeyPath !== undefined && {
      PartitionKeyPath: input.PartitionKeyPath
    })
  };
};

const serializeAws_json1_1ListEventBusesRequest = (
  input: ListEventBusesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListEventSourcesRequest = (
  input: ListEventSourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListPartnerEventSourceAccountsRequest = (
  input: ListPartnerEventSourceAccountsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventSourceName !== undefined && {
      EventSourceName: input.EventSourceName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListPartnerEventSourcesRequest = (
  input: ListPartnerEventSourcesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListRuleNamesByTargetRequest = (
  input: ListRuleNamesByTargetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TargetArn !== undefined && { TargetArn: input.TargetArn })
  };
};

const serializeAws_json1_1ListRulesRequest = (
  input: ListRulesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NamePrefix !== undefined && { NamePrefix: input.NamePrefix }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN })
  };
};

const serializeAws_json1_1ListTargetsByRuleRequest = (
  input: ListTargetsByRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Rule !== undefined && { Rule: input.Rule })
  };
};

const serializeAws_json1_1NetworkConfiguration = (
  input: NetworkConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.awsvpcConfiguration !== undefined && {
      awsvpcConfiguration: serializeAws_json1_1AwsVpcConfiguration(
        input.awsvpcConfiguration,
        context
      )
    })
  };
};

const serializeAws_json1_1PutEventsRequest = (
  input: PutEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Entries !== undefined && {
      Entries: serializeAws_json1_1PutEventsRequestEntryList(
        input.Entries,
        context
      )
    })
  };
};

const serializeAws_json1_1PutEventsRequestEntry = (
  input: PutEventsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Detail !== undefined && { Detail: input.Detail }),
    ...(input.DetailType !== undefined && { DetailType: input.DetailType }),
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Resources !== undefined && {
      Resources: serializeAws_json1_1EventResourceList(input.Resources, context)
    }),
    ...(input.Source !== undefined && { Source: input.Source }),
    ...(input.Time !== undefined && {
      Time: Math.round(input.Time.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1PutEventsRequestEntryList = (
  input: PutEventsRequestEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1PutEventsRequestEntry(entry, context)
  );
};

const serializeAws_json1_1PutPartnerEventsRequest = (
  input: PutPartnerEventsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Entries !== undefined && {
      Entries: serializeAws_json1_1PutPartnerEventsRequestEntryList(
        input.Entries,
        context
      )
    })
  };
};

const serializeAws_json1_1PutPartnerEventsRequestEntry = (
  input: PutPartnerEventsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Detail !== undefined && { Detail: input.Detail }),
    ...(input.DetailType !== undefined && { DetailType: input.DetailType }),
    ...(input.Resources !== undefined && {
      Resources: serializeAws_json1_1EventResourceList(input.Resources, context)
    }),
    ...(input.Source !== undefined && { Source: input.Source }),
    ...(input.Time !== undefined && {
      Time: Math.round(input.Time.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1PutPartnerEventsRequestEntryList = (
  input: PutPartnerEventsRequestEntry[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1PutPartnerEventsRequestEntry(entry, context)
  );
};

const serializeAws_json1_1PutPermissionRequest = (
  input: PutPermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.Condition !== undefined && {
      Condition: serializeAws_json1_1Condition(input.Condition, context)
    }),
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Principal !== undefined && { Principal: input.Principal }),
    ...(input.StatementId !== undefined && { StatementId: input.StatementId })
  };
};

const serializeAws_json1_1PutRuleRequest = (
  input: PutRuleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.EventPattern !== undefined && {
      EventPattern: input.EventPattern
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.ScheduleExpression !== undefined && {
      ScheduleExpression: input.ScheduleExpression
    }),
    ...(input.State !== undefined && { State: input.State }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1PutTargetsRequest = (
  input: PutTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Rule !== undefined && { Rule: input.Rule }),
    ...(input.Targets !== undefined && {
      Targets: serializeAws_json1_1TargetList(input.Targets, context)
    })
  };
};

const serializeAws_json1_1RemovePermissionRequest = (
  input: RemovePermissionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.StatementId !== undefined && { StatementId: input.StatementId })
  };
};

const serializeAws_json1_1RemoveTargetsRequest = (
  input: RemoveTargetsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EventBusName !== undefined && {
      EventBusName: input.EventBusName
    }),
    ...(input.Force !== undefined && { Force: input.Force }),
    ...(input.Ids !== undefined && {
      Ids: serializeAws_json1_1TargetIdList(input.Ids, context)
    }),
    ...(input.Rule !== undefined && { Rule: input.Rule })
  };
};

const serializeAws_json1_1RunCommandParameters = (
  input: RunCommandParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.RunCommandTargets !== undefined && {
      RunCommandTargets: serializeAws_json1_1RunCommandTargets(
        input.RunCommandTargets,
        context
      )
    })
  };
};

const serializeAws_json1_1RunCommandTarget = (
  input: RunCommandTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Values !== undefined && {
      Values: serializeAws_json1_1RunCommandTargetValues(input.Values, context)
    })
  };
};

const serializeAws_json1_1RunCommandTargets = (
  input: RunCommandTarget[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1RunCommandTarget(entry, context)
  );
};

const serializeAws_json1_1RunCommandTargetValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1SqsParameters = (
  input: SqsParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.MessageGroupId !== undefined && {
      MessageGroupId: input.MessageGroupId
    })
  };
};

const serializeAws_json1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && { Key: input.Key }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_json1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_json1_1TagList(input.Tags, context)
    })
  };
};

const serializeAws_json1_1Target = (
  input: Target,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn !== undefined && { Arn: input.Arn }),
    ...(input.BatchParameters !== undefined && {
      BatchParameters: serializeAws_json1_1BatchParameters(
        input.BatchParameters,
        context
      )
    }),
    ...(input.EcsParameters !== undefined && {
      EcsParameters: serializeAws_json1_1EcsParameters(
        input.EcsParameters,
        context
      )
    }),
    ...(input.Id !== undefined && { Id: input.Id }),
    ...(input.Input !== undefined && { Input: input.Input }),
    ...(input.InputPath !== undefined && { InputPath: input.InputPath }),
    ...(input.InputTransformer !== undefined && {
      InputTransformer: serializeAws_json1_1InputTransformer(
        input.InputTransformer,
        context
      )
    }),
    ...(input.KinesisParameters !== undefined && {
      KinesisParameters: serializeAws_json1_1KinesisParameters(
        input.KinesisParameters,
        context
      )
    }),
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn }),
    ...(input.RunCommandParameters !== undefined && {
      RunCommandParameters: serializeAws_json1_1RunCommandParameters(
        input.RunCommandParameters,
        context
      )
    }),
    ...(input.SqsParameters !== undefined && {
      SqsParameters: serializeAws_json1_1SqsParameters(
        input.SqsParameters,
        context
      )
    })
  };
};

const serializeAws_json1_1TargetIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TargetList = (
  input: Target[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_1Target(entry, context));
};

const serializeAws_json1_1TestEventPatternRequest = (
  input: TestEventPatternRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Event !== undefined && { Event: input.Event }),
    ...(input.EventPattern !== undefined && {
      EventPattern: input.EventPattern
    })
  };
};

const serializeAws_json1_1TransformerPaths = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context)
    })
  };
};

const deserializeAws_json1_1AwsVpcConfiguration = (
  output: any,
  context: __SerdeContext
): AwsVpcConfiguration => {
  return {
    __type: "AwsVpcConfiguration",
    AssignPublicIp:
      output.AssignPublicIp !== undefined && output.AssignPublicIp !== null
        ? output.AssignPublicIp
        : undefined,
    SecurityGroups:
      output.SecurityGroups !== undefined && output.SecurityGroups !== null
        ? deserializeAws_json1_1StringList(output.SecurityGroups, context)
        : undefined,
    Subnets:
      output.Subnets !== undefined && output.Subnets !== null
        ? deserializeAws_json1_1StringList(output.Subnets, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchArrayProperties = (
  output: any,
  context: __SerdeContext
): BatchArrayProperties => {
  return {
    __type: "BatchArrayProperties",
    Size:
      output.Size !== undefined && output.Size !== null
        ? output.Size
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchParameters = (
  output: any,
  context: __SerdeContext
): BatchParameters => {
  return {
    __type: "BatchParameters",
    ArrayProperties:
      output.ArrayProperties !== undefined && output.ArrayProperties !== null
        ? deserializeAws_json1_1BatchArrayProperties(
            output.ArrayProperties,
            context
          )
        : undefined,
    JobDefinition:
      output.JobDefinition !== undefined && output.JobDefinition !== null
        ? output.JobDefinition
        : undefined,
    JobName:
      output.JobName !== undefined && output.JobName !== null
        ? output.JobName
        : undefined,
    RetryStrategy:
      output.RetryStrategy !== undefined && output.RetryStrategy !== null
        ? deserializeAws_json1_1BatchRetryStrategy(
            output.RetryStrategy,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1BatchRetryStrategy = (
  output: any,
  context: __SerdeContext
): BatchRetryStrategy => {
  return {
    __type: "BatchRetryStrategy",
    Attempts:
      output.Attempts !== undefined && output.Attempts !== null
        ? output.Attempts
        : undefined
  } as any;
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateEventBusResponse = (
  output: any,
  context: __SerdeContext
): CreateEventBusResponse => {
  return {
    __type: "CreateEventBusResponse",
    EventBusArn:
      output.EventBusArn !== undefined && output.EventBusArn !== null
        ? output.EventBusArn
        : undefined
  } as any;
};

const deserializeAws_json1_1CreatePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): CreatePartnerEventSourceResponse => {
  return {
    __type: "CreatePartnerEventSourceResponse",
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null
        ? output.EventSourceArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventBusResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventBusResponse => {
  return {
    __type: "DescribeEventBusResponse",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? output.Policy
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribeEventSourceResponse => {
  return {
    __type: "DescribeEventSourceResponse",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? output.CreatedBy
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribePartnerEventSourceResponse = (
  output: any,
  context: __SerdeContext
): DescribePartnerEventSourceResponse => {
  return {
    __type: "DescribePartnerEventSourceResponse",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeRuleResponse = (
  output: any,
  context: __SerdeContext
): DescribeRuleResponse => {
  return {
    __type: "DescribeRuleResponse",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    EventBusName:
      output.EventBusName !== undefined && output.EventBusName !== null
        ? output.EventBusName
        : undefined,
    EventPattern:
      output.EventPattern !== undefined && output.EventPattern !== null
        ? output.EventPattern
        : undefined,
    ManagedBy:
      output.ManagedBy !== undefined && output.ManagedBy !== null
        ? output.ManagedBy
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RoleArn:
      output.RoleArn !== undefined && output.RoleArn !== null
        ? output.RoleArn
        : undefined,
    ScheduleExpression:
      output.ScheduleExpression !== undefined &&
      output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1EcsParameters = (
  output: any,
  context: __SerdeContext
): EcsParameters => {
  return {
    __type: "EcsParameters",
    Group:
      output.Group !== undefined && output.Group !== null
        ? output.Group
        : undefined,
    LaunchType:
      output.LaunchType !== undefined && output.LaunchType !== null
        ? output.LaunchType
        : undefined,
    NetworkConfiguration:
      output.NetworkConfiguration !== undefined &&
      output.NetworkConfiguration !== null
        ? deserializeAws_json1_1NetworkConfiguration(
            output.NetworkConfiguration,
            context
          )
        : undefined,
    PlatformVersion:
      output.PlatformVersion !== undefined && output.PlatformVersion !== null
        ? output.PlatformVersion
        : undefined,
    TaskCount:
      output.TaskCount !== undefined && output.TaskCount !== null
        ? output.TaskCount
        : undefined,
    TaskDefinitionArn:
      output.TaskDefinitionArn !== undefined &&
      output.TaskDefinitionArn !== null
        ? output.TaskDefinitionArn
        : undefined
  } as any;
};

const deserializeAws_json1_1EventBus = (
  output: any,
  context: __SerdeContext
): EventBus => {
  return {
    __type: "EventBus",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Policy:
      output.Policy !== undefined && output.Policy !== null
        ? output.Policy
        : undefined
  } as any;
};

const deserializeAws_json1_1EventBusList = (
  output: any,
  context: __SerdeContext
): EventBus[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventBus(entry, context)
  );
};

const deserializeAws_json1_1EventSource = (
  output: any,
  context: __SerdeContext
): EventSource => {
  return {
    __type: "EventSource",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? output.CreatedBy
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1EventSourceList = (
  output: any,
  context: __SerdeContext
): EventSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventSource(entry, context)
  );
};

const deserializeAws_json1_1InputTransformer = (
  output: any,
  context: __SerdeContext
): InputTransformer => {
  return {
    __type: "InputTransformer",
    InputPathsMap:
      output.InputPathsMap !== undefined && output.InputPathsMap !== null
        ? deserializeAws_json1_1TransformerPaths(output.InputPathsMap, context)
        : undefined,
    InputTemplate:
      output.InputTemplate !== undefined && output.InputTemplate !== null
        ? output.InputTemplate
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalException = (
  output: any,
  context: __SerdeContext
): InternalException => {
  return {
    __type: "InternalException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidEventPatternException = (
  output: any,
  context: __SerdeContext
): InvalidEventPatternException => {
  return {
    __type: "InvalidEventPatternException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidStateException = (
  output: any,
  context: __SerdeContext
): InvalidStateException => {
  return {
    __type: "InvalidStateException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1KinesisParameters = (
  output: any,
  context: __SerdeContext
): KinesisParameters => {
  return {
    __type: "KinesisParameters",
    PartitionKeyPath:
      output.PartitionKeyPath !== undefined && output.PartitionKeyPath !== null
        ? output.PartitionKeyPath
        : undefined
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListEventBusesResponse = (
  output: any,
  context: __SerdeContext
): ListEventBusesResponse => {
  return {
    __type: "ListEventBusesResponse",
    EventBuses:
      output.EventBuses !== undefined && output.EventBuses !== null
        ? deserializeAws_json1_1EventBusList(output.EventBuses, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListEventSourcesResponse => {
  return {
    __type: "ListEventSourcesResponse",
    EventSources:
      output.EventSources !== undefined && output.EventSources !== null
        ? deserializeAws_json1_1EventSourceList(output.EventSources, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPartnerEventSourceAccountsResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourceAccountsResponse => {
  return {
    __type: "ListPartnerEventSourceAccountsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    PartnerEventSourceAccounts:
      output.PartnerEventSourceAccounts !== undefined &&
      output.PartnerEventSourceAccounts !== null
        ? deserializeAws_json1_1PartnerEventSourceAccountList(
            output.PartnerEventSourceAccounts,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListPartnerEventSourcesResponse = (
  output: any,
  context: __SerdeContext
): ListPartnerEventSourcesResponse => {
  return {
    __type: "ListPartnerEventSourcesResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    PartnerEventSources:
      output.PartnerEventSources !== undefined &&
      output.PartnerEventSources !== null
        ? deserializeAws_json1_1PartnerEventSourceList(
            output.PartnerEventSources,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRuleNamesByTargetResponse = (
  output: any,
  context: __SerdeContext
): ListRuleNamesByTargetResponse => {
  return {
    __type: "ListRuleNamesByTargetResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    RuleNames:
      output.RuleNames !== undefined && output.RuleNames !== null
        ? deserializeAws_json1_1RuleNameList(output.RuleNames, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListRulesResponse = (
  output: any,
  context: __SerdeContext
): ListRulesResponse => {
  return {
    __type: "ListRulesResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1RuleResponseList(output.Rules, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    __type: "ListTagsForResourceResponse",
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ListTargetsByRuleResponse = (
  output: any,
  context: __SerdeContext
): ListTargetsByRuleResponse => {
  return {
    __type: "ListTargetsByRuleResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Targets:
      output.Targets !== undefined && output.Targets !== null
        ? deserializeAws_json1_1TargetList(output.Targets, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1ManagedRuleException = (
  output: any,
  context: __SerdeContext
): ManagedRuleException => {
  return {
    __type: "ManagedRuleException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1NetworkConfiguration = (
  output: any,
  context: __SerdeContext
): NetworkConfiguration => {
  return {
    __type: "NetworkConfiguration",
    awsvpcConfiguration:
      output.awsvpcConfiguration !== undefined &&
      output.awsvpcConfiguration !== null
        ? deserializeAws_json1_1AwsVpcConfiguration(
            output.awsvpcConfiguration,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1PartnerEventSource = (
  output: any,
  context: __SerdeContext
): PartnerEventSource => {
  return {
    __type: "PartnerEventSource",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_json1_1PartnerEventSourceAccount = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount => {
  return {
    __type: "PartnerEventSourceAccount",
    Account:
      output.Account !== undefined && output.Account !== null
        ? output.Account
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? new Date(Math.round(output.CreationTime * 1000))
        : undefined,
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? new Date(Math.round(output.ExpirationTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1PartnerEventSourceAccountList = (
  output: any,
  context: __SerdeContext
): PartnerEventSourceAccount[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PartnerEventSourceAccount(entry, context)
  );
};

const deserializeAws_json1_1PartnerEventSourceList = (
  output: any,
  context: __SerdeContext
): PartnerEventSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PartnerEventSource(entry, context)
  );
};

const deserializeAws_json1_1PolicyLengthExceededException = (
  output: any,
  context: __SerdeContext
): PolicyLengthExceededException => {
  return {
    __type: "PolicyLengthExceededException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1PutEventsResponse = (
  output: any,
  context: __SerdeContext
): PutEventsResponse => {
  return {
    __type: "PutEventsResponse",
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_json1_1PutEventsResultEntryList(
            output.Entries,
            context
          )
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null
        ? output.FailedEntryCount
        : undefined
  } as any;
};

const deserializeAws_json1_1PutEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutEventsResultEntry => {
  return {
    __type: "PutEventsResultEntry",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    EventId:
      output.EventId !== undefined && output.EventId !== null
        ? output.EventId
        : undefined
  } as any;
};

const deserializeAws_json1_1PutEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutEventsResultEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutEventsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1PutPartnerEventsResponse = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResponse => {
  return {
    __type: "PutPartnerEventsResponse",
    Entries:
      output.Entries !== undefined && output.Entries !== null
        ? deserializeAws_json1_1PutPartnerEventsResultEntryList(
            output.Entries,
            context
          )
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null
        ? output.FailedEntryCount
        : undefined
  } as any;
};

const deserializeAws_json1_1PutPartnerEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry => {
  return {
    __type: "PutPartnerEventsResultEntry",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    EventId:
      output.EventId !== undefined && output.EventId !== null
        ? output.EventId
        : undefined
  } as any;
};

const deserializeAws_json1_1PutPartnerEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutPartnerEventsResultEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutPartnerEventsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1PutRuleResponse = (
  output: any,
  context: __SerdeContext
): PutRuleResponse => {
  return {
    __type: "PutRuleResponse",
    RuleArn:
      output.RuleArn !== undefined && output.RuleArn !== null
        ? output.RuleArn
        : undefined
  } as any;
};

const deserializeAws_json1_1PutTargetsResponse = (
  output: any,
  context: __SerdeContext
): PutTargetsResponse => {
  return {
    __type: "PutTargetsResponse",
    FailedEntries:
      output.FailedEntries !== undefined && output.FailedEntries !== null
        ? deserializeAws_json1_1PutTargetsResultEntryList(
            output.FailedEntries,
            context
          )
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null
        ? output.FailedEntryCount
        : undefined
  } as any;
};

const deserializeAws_json1_1PutTargetsResultEntry = (
  output: any,
  context: __SerdeContext
): PutTargetsResultEntry => {
  return {
    __type: "PutTargetsResultEntry",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    TargetId:
      output.TargetId !== undefined && output.TargetId !== null
        ? output.TargetId
        : undefined
  } as any;
};

const deserializeAws_json1_1PutTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutTargetsResultEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PutTargetsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1RemoveTargetsResponse = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResponse => {
  return {
    __type: "RemoveTargetsResponse",
    FailedEntries:
      output.FailedEntries !== undefined && output.FailedEntries !== null
        ? deserializeAws_json1_1RemoveTargetsResultEntryList(
            output.FailedEntries,
            context
          )
        : undefined,
    FailedEntryCount:
      output.FailedEntryCount !== undefined && output.FailedEntryCount !== null
        ? output.FailedEntryCount
        : undefined
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResultEntry = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry => {
  return {
    __type: "RemoveTargetsResultEntry",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    ErrorMessage:
      output.ErrorMessage !== undefined && output.ErrorMessage !== null
        ? output.ErrorMessage
        : undefined,
    TargetId:
      output.TargetId !== undefined && output.TargetId !== null
        ? output.TargetId
        : undefined
  } as any;
};

const deserializeAws_json1_1RemoveTargetsResultEntryList = (
  output: any,
  context: __SerdeContext
): RemoveTargetsResultEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RemoveTargetsResultEntry(entry, context)
  );
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    __type: "ResourceAlreadyExistsException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  return {
    __type: "Rule",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    EventBusName:
      output.EventBusName !== undefined && output.EventBusName !== null
        ? output.EventBusName
        : undefined,
    EventPattern:
      output.EventPattern !== undefined && output.EventPattern !== null
        ? output.EventPattern
        : undefined,
    ManagedBy:
      output.ManagedBy !== undefined && output.ManagedBy !== null
        ? output.ManagedBy
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RoleArn:
      output.RoleArn !== undefined && output.RoleArn !== null
        ? output.RoleArn
        : undefined,
    ScheduleExpression:
      output.ScheduleExpression !== undefined &&
      output.ScheduleExpression !== null
        ? output.ScheduleExpression
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined
  } as any;
};

const deserializeAws_json1_1RuleNameList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1RuleResponseList = (
  output: any,
  context: __SerdeContext
): Rule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1RunCommandParameters = (
  output: any,
  context: __SerdeContext
): RunCommandParameters => {
  return {
    __type: "RunCommandParameters",
    RunCommandTargets:
      output.RunCommandTargets !== undefined &&
      output.RunCommandTargets !== null
        ? deserializeAws_json1_1RunCommandTargets(
            output.RunCommandTargets,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1RunCommandTarget = (
  output: any,
  context: __SerdeContext
): RunCommandTarget => {
  return {
    __type: "RunCommandTarget",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1RunCommandTargetValues(output.Values, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1RunCommandTargets = (
  output: any,
  context: __SerdeContext
): RunCommandTarget[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RunCommandTarget(entry, context)
  );
};

const deserializeAws_json1_1RunCommandTargetValues = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1SqsParameters = (
  output: any,
  context: __SerdeContext
): SqsParameters => {
  return {
    __type: "SqsParameters",
    MessageGroupId:
      output.MessageGroupId !== undefined && output.MessageGroupId !== null
        ? output.MessageGroupId
        : undefined
  } as any;
};

const deserializeAws_json1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  return {
    __type: "Tag",
    Key:
      output.Key !== undefined && output.Key !== null ? output.Key : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  return {
    __type: "TagResourceResponse"
  } as any;
};

const deserializeAws_json1_1Target = (
  output: any,
  context: __SerdeContext
): Target => {
  return {
    __type: "Target",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    BatchParameters:
      output.BatchParameters !== undefined && output.BatchParameters !== null
        ? deserializeAws_json1_1BatchParameters(output.BatchParameters, context)
        : undefined,
    EcsParameters:
      output.EcsParameters !== undefined && output.EcsParameters !== null
        ? deserializeAws_json1_1EcsParameters(output.EcsParameters, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Input:
      output.Input !== undefined && output.Input !== null
        ? output.Input
        : undefined,
    InputPath:
      output.InputPath !== undefined && output.InputPath !== null
        ? output.InputPath
        : undefined,
    InputTransformer:
      output.InputTransformer !== undefined && output.InputTransformer !== null
        ? deserializeAws_json1_1InputTransformer(
            output.InputTransformer,
            context
          )
        : undefined,
    KinesisParameters:
      output.KinesisParameters !== undefined &&
      output.KinesisParameters !== null
        ? deserializeAws_json1_1KinesisParameters(
            output.KinesisParameters,
            context
          )
        : undefined,
    RoleArn:
      output.RoleArn !== undefined && output.RoleArn !== null
        ? output.RoleArn
        : undefined,
    RunCommandParameters:
      output.RunCommandParameters !== undefined &&
      output.RunCommandParameters !== null
        ? deserializeAws_json1_1RunCommandParameters(
            output.RunCommandParameters,
            context
          )
        : undefined,
    SqsParameters:
      output.SqsParameters !== undefined && output.SqsParameters !== null
        ? deserializeAws_json1_1SqsParameters(output.SqsParameters, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1TargetList = (
  output: any,
  context: __SerdeContext
): Target[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Target(entry, context)
  );
};

const deserializeAws_json1_1TestEventPatternResponse = (
  output: any,
  context: __SerdeContext
): TestEventPatternResponse => {
  return {
    __type: "TestEventPatternResponse",
    Result:
      output.Result !== undefined && output.Result !== null
        ? output.Result
        : undefined
  } as any;
};

const deserializeAws_json1_1TransformerPaths = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse"
  } as any;
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
