import {
  CreateNotificationRuleCommandInput,
  CreateNotificationRuleCommandOutput,
} from "../commands/CreateNotificationRuleCommand";
import {
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
} from "../commands/DeleteNotificationRuleCommand";
import {
  DeleteTargetCommandInput,
  DeleteTargetCommandOutput,
} from "../commands/DeleteTargetCommand";
import {
  DescribeNotificationRuleCommandInput,
  DescribeNotificationRuleCommandOutput,
} from "../commands/DescribeNotificationRuleCommand";
import {
  ListEventTypesCommandInput,
  ListEventTypesCommandOutput,
} from "../commands/ListEventTypesCommand";
import {
  ListNotificationRulesCommandInput,
  ListNotificationRulesCommandOutput,
} from "../commands/ListNotificationRulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTargetsCommandInput,
  ListTargetsCommandOutput,
} from "../commands/ListTargetsCommand";
import {
  SubscribeCommandInput,
  SubscribeCommandOutput,
} from "../commands/SubscribeCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput,
} from "../commands/TagResourceCommand";
import {
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput,
} from "../commands/UnsubscribeCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "../commands/UntagResourceCommand";
import {
  UpdateNotificationRuleCommandInput,
  UpdateNotificationRuleCommandOutput,
} from "../commands/UpdateNotificationRuleCommand";
import {
  AccessDeniedException,
  ConcurrentModificationException,
  ConfigurationException,
  EventTypeSummary,
  InvalidNextTokenException,
  LimitExceededException,
  ListEventTypesFilter,
  ListNotificationRulesFilter,
  ListTargetsFilter,
  NotificationRuleSummary,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  Target,
  TargetSummary,
  ValidationException,
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateNotificationRuleCommand(
  input: CreateNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/createNotificationRule";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ClientRequestToken !== undefined) {
    bodyParams['ClientRequestToken'] = input.ClientRequestToken;
  }
  if (input.DetailType !== undefined) {
    bodyParams['DetailType'] = input.DetailType;
  }
  if (input.EventTypeIds !== undefined) {
    bodyParams['EventTypeIds'] = serializeAws_restJson1_1EventTypeIds(input.EventTypeIds, context);
  }
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.Resource !== undefined) {
    bodyParams['Resource'] = input.Resource;
  }
  if (input.Status !== undefined) {
    bodyParams['Status'] = input.Status;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.Targets !== undefined) {
    bodyParams['Targets'] = serializeAws_restJson1_1Targets(input.Targets, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DeleteNotificationRuleCommand(
  input: DeleteNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/deleteNotificationRule";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DeleteTargetCommand(
  input: DeleteTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/deleteTarget";
  let body: any = {};
  const bodyParams: any = {};
  if (input.ForceUnsubscribeAll !== undefined) {
    bodyParams['ForceUnsubscribeAll'] = input.ForceUnsubscribeAll;
  }
  if (input.TargetAddress !== undefined) {
    bodyParams['TargetAddress'] = input.TargetAddress;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1DescribeNotificationRuleCommand(
  input: DescribeNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/describeNotificationRule";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ListEventTypesCommand(
  input: ListEventTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/listEventTypes";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams['Filters'] = serializeAws_restJson1_1ListEventTypesFilters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ListNotificationRulesCommand(
  input: ListNotificationRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/listNotificationRules";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams['Filters'] = serializeAws_restJson1_1ListNotificationRulesFilters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/listTagsForResource";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1ListTargetsCommand(
  input: ListTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/listTargets";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Filters !== undefined) {
    bodyParams['Filters'] = serializeAws_restJson1_1ListTargetsFilters(input.Filters, context);
  }
  if (input.MaxResults !== undefined) {
    bodyParams['MaxResults'] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams['NextToken'] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1SubscribeCommand(
  input: SubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/subscribe";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  if (input.ClientRequestToken !== undefined) {
    bodyParams['ClientRequestToken'] = input.ClientRequestToken;
  }
  if (input.Target !== undefined) {
    bodyParams['Target'] = serializeAws_restJson1_1Target(input.Target, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/tagResource";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  if (input.Tags !== undefined) {
    bodyParams['Tags'] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UnsubscribeCommand(
  input: UnsubscribeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/unsubscribe";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  if (input.TargetAddress !== undefined) {
    bodyParams['TargetAddress'] = input.TargetAddress;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/untagResource";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  if (input.TagKeys !== undefined) {
    bodyParams['TagKeys'] = serializeAws_restJson1_1TagKeys(input.TagKeys, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function serializeAws_restJson1_1UpdateNotificationRuleCommand(
  input: UpdateNotificationRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers['Content-Type'] = "application/json";
  let resolvedPath = "/updateNotificationRule";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams['Arn'] = input.Arn;
  }
  if (input.DetailType !== undefined) {
    bodyParams['DetailType'] = input.DetailType;
  }
  if (input.EventTypeIds !== undefined) {
    bodyParams['EventTypeIds'] = serializeAws_restJson1_1EventTypeIds(input.EventTypeIds, context);
  }
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.Status !== undefined) {
    bodyParams['Status'] = input.Status;
  }
  if (input.Targets !== undefined) {
    bodyParams['Targets'] = serializeAws_restJson1_1Targets(input.Targets, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body,
  });
}

export async function deserializeAws_restJson1_1CreateNotificationRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotificationRuleCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1CreateNotificationRuleCommandError(output, context);
  }
  const contents: CreateNotificationRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNotificationRuleResult",
    Arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateNotificationRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<CreateNotificationRuleCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codestarnotifications#AccessDeniedException":
      response = await deserializeAws_restJson1_1AccessDeniedExceptionResponse(parsedOutput, context);
      break;
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
      break;
    case "ConfigurationException":
    case "com.amazonaws.codestarnotifications#ConfigurationException":
      response = await deserializeAws_restJson1_1ConfigurationExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestarnotifications#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.codestarnotifications#ResourceAlreadyExistsException":
      response = await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteNotificationRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotificationRuleCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteNotificationRuleCommandError(output, context);
  }
  const contents: DeleteNotificationRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNotificationRuleResult",
    Arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteNotificationRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteNotificationRuleCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
      break;
    case "LimitExceededException":
    case "com.amazonaws.codestarnotifications#LimitExceededException":
      response = await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DeleteTargetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTargetCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DeleteTargetCommandError(output, context);
  }
  const contents: DeleteTargetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTargetResult",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTargetCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DeleteTargetCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1DescribeNotificationRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotificationRuleCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1DescribeNotificationRuleCommandError(output, context);
  }
  const contents: DescribeNotificationRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeNotificationRuleResult",
    Arn: undefined,
    CreatedBy: undefined,
    CreatedTimestamp: undefined,
    DetailType: undefined,
    EventTypes: undefined,
    LastModifiedTimestamp: undefined,
    Name: undefined,
    Resource: undefined,
    Status: undefined,
    Tags: undefined,
    Targets: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  if (data.CreatedBy !== undefined) {
    contents.CreatedBy = data.CreatedBy;
  }
  if (data.CreatedTimestamp !== undefined) {
    contents.CreatedTimestamp = new Date(data.CreatedTimestamp % 1 != 0 ? Math.round(data.CreatedTimestamp * 1000) : data.CreatedTimestamp);
  }
  if (data.DetailType !== undefined) {
    contents.DetailType = data.DetailType;
  }
  if (data.EventTypes !== undefined) {
    contents.EventTypes = deserializeAws_restJson1_1EventTypeBatch(data.EventTypes, context);
  }
  if (data.LastModifiedTimestamp !== undefined) {
    contents.LastModifiedTimestamp = new Date(data.LastModifiedTimestamp % 1 != 0 ? Math.round(data.LastModifiedTimestamp * 1000) : data.LastModifiedTimestamp);
  }
  if (data.Name !== undefined) {
    contents.Name = data.Name;
  }
  if (data.Resource !== undefined) {
    contents.Resource = data.Resource;
  }
  if (data.Status !== undefined) {
    contents.Status = data.Status;
  }
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  if (data.Targets !== undefined) {
    contents.Targets = deserializeAws_restJson1_1TargetsBatch(data.Targets, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeNotificationRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<DescribeNotificationRuleCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListEventTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventTypesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListEventTypesCommandError(output, context);
  }
  const contents: ListEventTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventTypesResult",
    EventTypes: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.EventTypes !== undefined) {
    contents.EventTypes = deserializeAws_restJson1_1EventTypeBatch(data.EventTypes, context);
  }
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListEventTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListEventTypesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestarnotifications#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListNotificationRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotificationRulesCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListNotificationRulesCommandError(output, context);
  }
  const contents: ListNotificationRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNotificationRulesResult",
    NextToken: undefined,
    NotificationRules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.NotificationRules !== undefined) {
    contents.NotificationRules = deserializeAws_restJson1_1NotificationRuleBatch(data.NotificationRules, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListNotificationRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListNotificationRulesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestarnotifications#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResult",
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1ListTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTargetsCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1ListTargetsCommandError(output, context);
  }
  const contents: ListTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTargetsResult",
    NextToken: undefined,
    Targets: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined) {
    contents.NextToken = data.NextToken;
  }
  if (data.Targets !== undefined) {
    contents.Targets = deserializeAws_restJson1_1TargetsBatch(data.Targets, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<ListTargetsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.codestarnotifications#InvalidNextTokenException":
      response = await deserializeAws_restJson1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1SubscribeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SubscribeCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1SubscribeCommandError(output, context);
  }
  const contents: SubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SubscribeResult",
    Arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SubscribeCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<SubscribeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
    __type: "TagResourceResult",
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UnsubscribeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnsubscribeCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UnsubscribeCommandError(output, context);
  }
  const contents: UnsubscribeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnsubscribeResult",
    Arn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined) {
    contents.Arn = data.Arn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UnsubscribeCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UnsubscribeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
    __type: "UntagResourceResult",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.codestarnotifications#ConcurrentModificationException":
      response = await deserializeAws_restJson1_1ConcurrentModificationExceptionResponse(parsedOutput, context);
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_restJson1_1UpdateNotificationRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotificationRuleCommandOutput> {
  if (output.statusCode !== 200) {
    return deserializeAws_restJson1_1UpdateNotificationRuleCommandError(output, context);
  }
  const contents: UpdateNotificationRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNotificationRuleResult",
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateNotificationRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext,
): Promise<UpdateNotificationRuleCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data,
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(':')[0];
  }
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.codestarnotifications#ResourceNotFoundException":
      response = await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
      break;
    case "ValidationException":
    case "com.amazonaws.codestarnotifications#ValidationException":
      response = await deserializeAws_restJson1_1ValidationExceptionResponse(parsedOutput, context);
      break;
    default:
      response = {
        __type: `com.amazonaws.codestarnotifications#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_restJson1_1AccessDeniedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    __type: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConcurrentModificationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: ConcurrentModificationException = {
    __type: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConfigurationException> => {
  const contents: ConfigurationException = {
    __type: "ConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
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
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
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
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
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
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ValidationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    __type: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined,
  };
  const data: any = output.body;
  if (data.Message !== undefined) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1EventTypeIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1ListEventTypesFilter = (
  input: ListEventTypesFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_restJson1_1ListEventTypesFilters = (
  input: Array<ListEventTypesFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ListEventTypesFilter(entry, context)
  );
}

const serializeAws_restJson1_1ListNotificationRulesFilter = (
  input: ListNotificationRulesFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_restJson1_1ListNotificationRulesFilters = (
  input: Array<ListNotificationRulesFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ListNotificationRulesFilter(entry, context)
  );
}

const serializeAws_restJson1_1ListTargetsFilter = (
  input: ListTargetsFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams['Name'] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams['Value'] = input.Value;
  }
  return bodyParams;
}

const serializeAws_restJson1_1ListTargetsFilters = (
  input: Array<ListTargetsFilter>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1ListTargetsFilter(entry, context)
  );
}

const serializeAws_restJson1_1TagKeys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    entry
  );
}

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
}

const serializeAws_restJson1_1Target = (
  input: Target,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TargetAddress !== undefined) {
    bodyParams['TargetAddress'] = input.TargetAddress;
  }
  if (input.TargetType !== undefined) {
    bodyParams['TargetType'] = input.TargetType;
  }
  return bodyParams;
}

const serializeAws_restJson1_1Targets = (
  input: Array<Target>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1Target(entry, context)
  );
}

const deserializeAws_restJson1_1EventTypeBatch = (
  output: any,
  context: __SerdeContext
): Array<EventTypeSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EventTypeSummary(entry, context)
  );
}

const deserializeAws_restJson1_1EventTypeSummary = (
  output: any,
  context: __SerdeContext
): EventTypeSummary => {
  let contents: any = {
    __type: "EventTypeSummary",
    EventTypeId: undefined,
    EventTypeName: undefined,
    ResourceType: undefined,
    ServiceName: undefined,
  };
  if (output.EventTypeId !== undefined) {
    contents.EventTypeId = output.EventTypeId;
  }
  if (output.EventTypeName !== undefined) {
    contents.EventTypeName = output.EventTypeName;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.ServiceName !== undefined) {
    contents.ServiceName = output.ServiceName;
  }
  return contents;
}

const deserializeAws_restJson1_1NotificationRuleBatch = (
  output: any,
  context: __SerdeContext
): Array<NotificationRuleSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NotificationRuleSummary(entry, context)
  );
}

const deserializeAws_restJson1_1NotificationRuleSummary = (
  output: any,
  context: __SerdeContext
): NotificationRuleSummary => {
  let contents: any = {
    __type: "NotificationRuleSummary",
    Arn: undefined,
    Id: undefined,
  };
  if (output.Arn !== undefined) {
    contents.Arn = output.Arn;
  }
  if (output.Id !== undefined) {
    contents.Id = output.Id;
  }
  return contents;
}

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
}

const deserializeAws_restJson1_1TargetSummary = (
  output: any,
  context: __SerdeContext
): TargetSummary => {
  let contents: any = {
    __type: "TargetSummary",
    TargetAddress: undefined,
    TargetStatus: undefined,
    TargetType: undefined,
  };
  if (output.TargetAddress !== undefined) {
    contents.TargetAddress = output.TargetAddress;
  }
  if (output.TargetStatus !== undefined) {
    contents.TargetStatus = output.TargetStatus;
  }
  if (output.TargetType !== undefined) {
    contents.TargetType = output.TargetType;
  }
  return contents;
}

const deserializeAws_restJson1_1TargetsBatch = (
  output: any,
  context: __SerdeContext
): Array<TargetSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TargetSummary(entry, context)
  );
}

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
