import {
  AddTagsCommandInput,
  AddTagsCommandOutput
} from "../commands/AddTagsCommand";
import {
  CreateTrailCommandInput,
  CreateTrailCommandOutput
} from "../commands/CreateTrailCommand";
import {
  DeleteTrailCommandInput,
  DeleteTrailCommandOutput
} from "../commands/DeleteTrailCommand";
import {
  DescribeTrailsCommandInput,
  DescribeTrailsCommandOutput
} from "../commands/DescribeTrailsCommand";
import {
  GetEventSelectorsCommandInput,
  GetEventSelectorsCommandOutput
} from "../commands/GetEventSelectorsCommand";
import {
  GetInsightSelectorsCommandInput,
  GetInsightSelectorsCommandOutput
} from "../commands/GetInsightSelectorsCommand";
import {
  GetTrailCommandInput,
  GetTrailCommandOutput
} from "../commands/GetTrailCommand";
import {
  GetTrailStatusCommandInput,
  GetTrailStatusCommandOutput
} from "../commands/GetTrailStatusCommand";
import {
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput
} from "../commands/ListPublicKeysCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  ListTrailsCommandInput,
  ListTrailsCommandOutput
} from "../commands/ListTrailsCommand";
import {
  LookupEventsCommandInput,
  LookupEventsCommandOutput
} from "../commands/LookupEventsCommand";
import {
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput
} from "../commands/PutEventSelectorsCommand";
import {
  PutInsightSelectorsCommandInput,
  PutInsightSelectorsCommandOutput
} from "../commands/PutInsightSelectorsCommand";
import {
  RemoveTagsCommandInput,
  RemoveTagsCommandOutput
} from "../commands/RemoveTagsCommand";
import {
  StartLoggingCommandInput,
  StartLoggingCommandOutput
} from "../commands/StartLoggingCommand";
import {
  StopLoggingCommandInput,
  StopLoggingCommandOutput
} from "../commands/StopLoggingCommand";
import {
  UpdateTrailCommandInput,
  UpdateTrailCommandOutput
} from "../commands/UpdateTrailCommand";
import {
  AddTagsRequest,
  AddTagsResponse,
  CloudTrailARNInvalidException,
  CloudTrailAccessNotEnabledException,
  CloudWatchLogsDeliveryUnavailableException,
  CreateTrailRequest,
  CreateTrailResponse,
  DataResource,
  DeleteTrailRequest,
  DeleteTrailResponse,
  DescribeTrailsRequest,
  DescribeTrailsResponse,
  Event,
  EventSelector,
  GetEventSelectorsRequest,
  GetEventSelectorsResponse,
  GetInsightSelectorsRequest,
  GetInsightSelectorsResponse,
  GetTrailRequest,
  GetTrailResponse,
  GetTrailStatusRequest,
  GetTrailStatusResponse,
  InsightNotEnabledException,
  InsightSelector,
  InsufficientDependencyServiceAccessPermissionException,
  InsufficientEncryptionPolicyException,
  InsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException,
  InvalidEventCategoryException,
  InvalidEventSelectorsException,
  InvalidHomeRegionException,
  InvalidInsightSelectorsException,
  InvalidKmsKeyIdException,
  InvalidLookupAttributesException,
  InvalidMaxResultsException,
  InvalidNextTokenException,
  InvalidParameterCombinationException,
  InvalidS3BucketNameException,
  InvalidS3PrefixException,
  InvalidSnsTopicNameException,
  InvalidTagParameterException,
  InvalidTimeRangeException,
  InvalidTokenException,
  InvalidTrailNameException,
  KmsException,
  KmsKeyDisabledException,
  KmsKeyNotFoundException,
  ListPublicKeysRequest,
  ListPublicKeysResponse,
  ListTagsRequest,
  ListTagsResponse,
  ListTrailsRequest,
  ListTrailsResponse,
  LookupAttribute,
  LookupEventsRequest,
  LookupEventsResponse,
  MaximumNumberOfTrailsExceededException,
  NotOrganizationMasterAccountException,
  OperationNotPermittedException,
  OrganizationNotInAllFeaturesModeException,
  OrganizationsNotInUseException,
  PublicKey,
  PutEventSelectorsRequest,
  PutEventSelectorsResponse,
  PutInsightSelectorsRequest,
  PutInsightSelectorsResponse,
  RemoveTagsRequest,
  RemoveTagsResponse,
  Resource,
  ResourceNotFoundException,
  ResourceTag,
  ResourceTypeNotSupportedException,
  S3BucketDoesNotExistException,
  StartLoggingRequest,
  StartLoggingResponse,
  StopLoggingRequest,
  StopLoggingResponse,
  Tag,
  TagsLimitExceededException,
  Trail,
  TrailAlreadyExistsException,
  TrailInfo,
  TrailNotFoundException,
  TrailNotProvidedException,
  UnsupportedOperationException,
  UpdateTrailRequest,
  UpdateTrailResponse
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

export async function serializeAws_json1_1AddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.AddTags";
  let body: any = {};
  const wrappedBody: any = {
    AddTagsRequest: serializeAws_json1_1AddTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/AddTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1CreateTrailCommand(
  input: CreateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.CreateTrail";
  let body: any = {};
  const wrappedBody: any = {
    CreateTrailRequest: serializeAws_json1_1CreateTrailRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CreateTrail",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DeleteTrailCommand(
  input: DeleteTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.DeleteTrail";
  let body: any = {};
  const wrappedBody: any = {
    DeleteTrailRequest: serializeAws_json1_1DeleteTrailRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeleteTrail",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1DescribeTrailsCommand(
  input: DescribeTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.DescribeTrails";
  let body: any = {};
  const wrappedBody: any = {
    DescribeTrailsRequest: serializeAws_json1_1DescribeTrailsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeTrails",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetEventSelectorsCommand(
  input: GetEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetEventSelectors";
  let body: any = {};
  const wrappedBody: any = {
    GetEventSelectorsRequest: serializeAws_json1_1GetEventSelectorsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetEventSelectors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetInsightSelectorsCommand(
  input: GetInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetInsightSelectors";
  let body: any = {};
  const wrappedBody: any = {
    GetInsightSelectorsRequest: serializeAws_json1_1GetInsightSelectorsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetInsightSelectors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetTrailCommand(
  input: GetTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetTrail";
  let body: any = {};
  const wrappedBody: any = {
    GetTrailRequest: serializeAws_json1_1GetTrailRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTrail",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1GetTrailStatusCommand(
  input: GetTrailStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetTrailStatus";
  let body: any = {};
  const wrappedBody: any = {
    GetTrailStatusRequest: serializeAws_json1_1GetTrailStatusRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetTrailStatus",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListPublicKeysCommand(
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.ListPublicKeys";
  let body: any = {};
  const wrappedBody: any = {
    ListPublicKeysRequest: serializeAws_json1_1ListPublicKeysRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListPublicKeys",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.ListTags";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsRequest: serializeAws_json1_1ListTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1ListTrailsCommand(
  input: ListTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.ListTrails";
  let body: any = {};
  const wrappedBody: any = {
    ListTrailsRequest: serializeAws_json1_1ListTrailsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTrails",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1LookupEventsCommand(
  input: LookupEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.LookupEvents";
  let body: any = {};
  const wrappedBody: any = {
    LookupEventsRequest: serializeAws_json1_1LookupEventsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/LookupEvents",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutEventSelectorsCommand(
  input: PutEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.PutEventSelectors";
  let body: any = {};
  const wrappedBody: any = {
    PutEventSelectorsRequest: serializeAws_json1_1PutEventSelectorsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutEventSelectors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1PutInsightSelectorsCommand(
  input: PutInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.PutInsightSelectors";
  let body: any = {};
  const wrappedBody: any = {
    PutInsightSelectorsRequest: serializeAws_json1_1PutInsightSelectorsRequest(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PutInsightSelectors",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1RemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.RemoveTags";
  let body: any = {};
  const wrappedBody: any = {
    RemoveTagsRequest: serializeAws_json1_1RemoveTagsRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RemoveTags",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StartLoggingCommand(
  input: StartLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.StartLogging";
  let body: any = {};
  const wrappedBody: any = {
    StartLoggingRequest: serializeAws_json1_1StartLoggingRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartLogging",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1StopLoggingCommand(
  input: StopLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.StopLogging";
  let body: any = {};
  const wrappedBody: any = {
    StopLoggingRequest: serializeAws_json1_1StopLoggingRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StopLogging",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_1UpdateTrailCommand(
  input: UpdateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.UpdateTrail";
  let body: any = {};
  const wrappedBody: any = {
    UpdateTrailRequest: serializeAws_json1_1UpdateTrailRequest(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UpdateTrail",
    headers: headers,
    body: body
  });
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
  contents = deserializeAws_json1_1AddTagsResponse(data, context);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AddTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
      response = await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
      response = await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
      response = await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TagsLimitExceededException":
    case "com.amazonaws.cloudtrail.v20131101#TagsLimitExceededException":
      response = await deserializeAws_json1_1TagsLimitExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1CreateTrailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrailCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTrailResponse(data, context);
  const response: CreateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTrailResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTrailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrailCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailAccessNotEnabledException":
      response = await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail.v20131101#CloudWatchLogsDeliveryUnavailableException":
      response = await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
      response = await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
      response = await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientSnsTopicPolicyException":
      response = await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsLogGroupArnException":
      response = await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsRoleArnException":
      response = await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidKmsKeyIdException":
      response = await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3BucketNameException":
      response = await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3PrefixException":
      response = await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidSnsTopicNameException":
      response = await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
      response = await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KmsException":
    case "com.amazonaws.cloudtrail.v20131101#KmsException":
      response = await deserializeAws_json1_1KmsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyDisabledException":
      response = await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyNotFoundException":
      response = await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "MaximumNumberOfTrailsExceededException":
    case "com.amazonaws.cloudtrail.v20131101#MaximumNumberOfTrailsExceededException":
      response = await deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationNotInAllFeaturesModeException":
      response = await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationsNotInUseException":
      response = await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail.v20131101#S3BucketDoesNotExistException":
      response = await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailAlreadyExistsException":
    case "com.amazonaws.cloudtrail.v20131101#TrailAlreadyExistsException":
      response = await deserializeAws_json1_1TrailAlreadyExistsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotProvidedException":
      response = await deserializeAws_json1_1TrailNotProvidedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DeleteTrailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrailCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTrailResponse(data, context);
  const response: DeleteTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTrailResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTrailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrailCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1DescribeTrailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrailsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeTrailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeTrailsResponse(data, context);
  const response: DescribeTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeTrailsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeTrailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrailsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetEventSelectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSelectorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetEventSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetEventSelectorsResponse(data, context);
  const response: GetEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEventSelectorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetEventSelectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSelectorsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetInsightSelectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSelectorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInsightSelectorsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInsightSelectorsResponse(data, context);
  const response: GetInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightSelectorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInsightSelectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightSelectorsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InsightNotEnabledException":
    case "com.amazonaws.cloudtrail.v20131101#InsightNotEnabledException":
      response = await deserializeAws_json1_1InsightNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetTrailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTrailResponse(data, context);
  const response: GetTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTrailResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTrailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1GetTrailStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTrailStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTrailStatusResponse(data, context);
  const response: GetTrailStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTrailStatusResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTrailStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrailStatusCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListPublicKeysCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListPublicKeysCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPublicKeysResponse(data, context);
  const response: ListPublicKeysCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPublicKeysResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListPublicKeysCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPublicKeysCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTimeRangeException":
      response = await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTokenException":
      response = await deserializeAws_json1_1InvalidTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsResponse(data, context);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
      response = await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTokenException":
      response = await deserializeAws_json1_1InvalidTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
      response = await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1ListTrailsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrailsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTrailsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTrailsResponse(data, context);
  const response: ListTrailsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTrailsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTrailsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrailsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1LookupEventsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupEventsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1LookupEventsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LookupEventsResponse(data, context);
  const response: LookupEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LookupEventsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1LookupEventsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupEventsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InvalidEventCategoryException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidEventCategoryException":
      response = await deserializeAws_json1_1InvalidEventCategoryExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidLookupAttributesException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidLookupAttributesException":
      response = await deserializeAws_json1_1InvalidLookupAttributesExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidMaxResultsException":
      response = await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidNextTokenException":
      response = await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTimeRangeException":
      response = await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutEventSelectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventSelectorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutEventSelectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutEventSelectorsResponse(data, context);
  const response: PutEventSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEventSelectorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutEventSelectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEventSelectorsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidEventSelectorsException":
      response = await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1PutInsightSelectorsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightSelectorsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PutInsightSelectorsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutInsightSelectorsResponse(data, context);
  const response: PutInsightSelectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutInsightSelectorsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PutInsightSelectorsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightSelectorsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
      response = await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
      response = await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidInsightSelectorsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidInsightSelectorsException":
      response = await deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
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
  contents = deserializeAws_json1_1RemoveTagsResponse(data, context);
  const response: RemoveTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RemoveTagsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RemoveTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
      response = await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
      response = await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
      response = await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
      response = await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StartLoggingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoggingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StartLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartLoggingResponse(data, context);
  const response: StartLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartLoggingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StartLoggingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLoggingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1StopLoggingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLoggingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopLoggingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopLoggingResponse(data, context);
  const response: StopLoggingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopLoggingResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopLoggingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLoggingCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_1UpdateTrailCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrailCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTrailCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTrailResponse(data, context);
  const response: UpdateTrailCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTrailResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateTrailCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrailCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailAccessNotEnabledException":
      response = await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail.v20131101#CloudWatchLogsDeliveryUnavailableException":
      response = await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
      response = await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
      response = await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientSnsTopicPolicyException":
      response = await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsLogGroupArnException":
      response = await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsRoleArnException":
      response = await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidEventSelectorsException":
      response = await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidKmsKeyIdException":
      response = await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidParameterCombinationException":
      response = await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3BucketNameException":
      response = await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3PrefixException":
      response = await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidSnsTopicNameException":
      response = await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KmsException":
    case "com.amazonaws.cloudtrail.v20131101#KmsException":
      response = await deserializeAws_json1_1KmsExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyDisabledException":
      response = await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyNotFoundException":
      response = await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationNotInAllFeaturesModeException":
      response = await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationsNotInUseException":
      response = await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail.v20131101#S3BucketDoesNotExistException":
      response = await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = await deserializeAws_json1_1TrailNotFoundExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotProvidedException":
      response = await deserializeAws_json1_1TrailNotProvidedExceptionResponse(
        parsedOutput,
        context
      );
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.cloudtrail.v20131101#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudTrailARNInvalidException> => {
  const deserialized: any = deserializeAws_json1_1CloudTrailARNInvalidException(
    output.body,
    context
  );
  const contents: CloudTrailARNInvalidException = {
    __type: "CloudTrailARNInvalidException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudTrailAccessNotEnabledException> => {
  const deserialized: any = deserializeAws_json1_1CloudTrailAccessNotEnabledException(
    output.body,
    context
  );
  const contents: CloudTrailAccessNotEnabledException = {
    __type: "CloudTrailAccessNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CloudWatchLogsDeliveryUnavailableException> => {
  const deserialized: any = deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException(
    output.body,
    context
  );
  const contents: CloudWatchLogsDeliveryUnavailableException = {
    __type: "CloudWatchLogsDeliveryUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsightNotEnabledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsightNotEnabledException> => {
  const deserialized: any = deserializeAws_json1_1InsightNotEnabledException(
    output.body,
    context
  );
  const contents: InsightNotEnabledException = {
    __type: "InsightNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientDependencyServiceAccessPermissionException> => {
  const deserialized: any = deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException(
    output.body,
    context
  );
  const contents: InsufficientDependencyServiceAccessPermissionException = {
    __type: "InsufficientDependencyServiceAccessPermissionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientEncryptionPolicyException> => {
  const deserialized: any = deserializeAws_json1_1InsufficientEncryptionPolicyException(
    output.body,
    context
  );
  const contents: InsufficientEncryptionPolicyException = {
    __type: "InsufficientEncryptionPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientS3BucketPolicyException> => {
  const deserialized: any = deserializeAws_json1_1InsufficientS3BucketPolicyException(
    output.body,
    context
  );
  const contents: InsufficientS3BucketPolicyException = {
    __type: "InsufficientS3BucketPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientSnsTopicPolicyException> => {
  const deserialized: any = deserializeAws_json1_1InsufficientSnsTopicPolicyException(
    output.body,
    context
  );
  const contents: InsufficientSnsTopicPolicyException = {
    __type: "InsufficientSnsTopicPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsLogGroupArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException(
    output.body,
    context
  );
  const contents: InvalidCloudWatchLogsLogGroupArnException = {
    __type: "InvalidCloudWatchLogsLogGroupArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsRoleArnException> => {
  const deserialized: any = deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException(
    output.body,
    context
  );
  const contents: InvalidCloudWatchLogsRoleArnException = {
    __type: "InvalidCloudWatchLogsRoleArnException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventCategoryExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEventCategoryException> => {
  const deserialized: any = deserializeAws_json1_1InvalidEventCategoryException(
    output.body,
    context
  );
  const contents: InvalidEventCategoryException = {
    __type: "InvalidEventCategoryException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventSelectorsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidEventSelectorsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidEventSelectorsException(
    output.body,
    context
  );
  const contents: InvalidEventSelectorsException = {
    __type: "InvalidEventSelectorsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidHomeRegionExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidHomeRegionException> => {
  const deserialized: any = deserializeAws_json1_1InvalidHomeRegionException(
    output.body,
    context
  );
  const contents: InvalidHomeRegionException = {
    __type: "InvalidHomeRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidInsightSelectorsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidInsightSelectorsException(
    output.body,
    context
  );
  const contents: InvalidInsightSelectorsException = {
    __type: "InvalidInsightSelectorsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidKmsKeyIdException> => {
  const deserialized: any = deserializeAws_json1_1InvalidKmsKeyIdException(
    output.body,
    context
  );
  const contents: InvalidKmsKeyIdException = {
    __type: "InvalidKmsKeyIdException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLookupAttributesExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidLookupAttributesException> => {
  const deserialized: any = deserializeAws_json1_1InvalidLookupAttributesException(
    output.body,
    context
  );
  const contents: InvalidLookupAttributesException = {
    __type: "InvalidLookupAttributesException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const deserialized: any = deserializeAws_json1_1InvalidMaxResultsException(
    output.body,
    context
  );
  const contents: InvalidMaxResultsException = {
    __type: "InvalidMaxResultsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    output.body,
    context
  );
  const contents: InvalidNextTokenException = {
    __type: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(
    output.body,
    context
  );
  const contents: InvalidParameterCombinationException = {
    __type: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3BucketNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidS3BucketNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidS3BucketNameException(
    output.body,
    context
  );
  const contents: InvalidS3BucketNameException = {
    __type: "InvalidS3BucketNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3PrefixExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidS3PrefixException> => {
  const deserialized: any = deserializeAws_json1_1InvalidS3PrefixException(
    output.body,
    context
  );
  const contents: InvalidS3PrefixException = {
    __type: "InvalidS3PrefixException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidSnsTopicNameException(
    output.body,
    context
  );
  const contents: InvalidSnsTopicNameException = {
    __type: "InvalidSnsTopicNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(
    output.body,
    context
  );
  const contents: InvalidTagParameterException = {
    __type: "InvalidTagParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(
    output.body,
    context
  );
  const contents: InvalidTimeRangeException = {
    __type: "InvalidTimeRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTokenException(
    output.body,
    context
  );
  const contents: InvalidTokenException = {
    __type: "InvalidTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTrailNameExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidTrailNameException> => {
  const deserialized: any = deserializeAws_json1_1InvalidTrailNameException(
    output.body,
    context
  );
  const contents: InvalidTrailNameException = {
    __type: "InvalidTrailNameException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KmsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<KmsException> => {
  const deserialized: any = deserializeAws_json1_1KmsException(
    output.body,
    context
  );
  const contents: KmsException = {
    __type: "KmsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KmsKeyDisabledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<KmsKeyDisabledException> => {
  const deserialized: any = deserializeAws_json1_1KmsKeyDisabledException(
    output.body,
    context
  );
  const contents: KmsKeyDisabledException = {
    __type: "KmsKeyDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KmsKeyNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<KmsKeyNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1KmsKeyNotFoundException(
    output.body,
    context
  );
  const contents: KmsKeyNotFoundException = {
    __type: "KmsKeyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<MaximumNumberOfTrailsExceededException> => {
  const deserialized: any = deserializeAws_json1_1MaximumNumberOfTrailsExceededException(
    output.body,
    context
  );
  const contents: MaximumNumberOfTrailsExceededException = {
    __type: "MaximumNumberOfTrailsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotOrganizationMasterAccountException> => {
  const deserialized: any = deserializeAws_json1_1NotOrganizationMasterAccountException(
    output.body,
    context
  );
  const contents: NotOrganizationMasterAccountException = {
    __type: "NotOrganizationMasterAccountException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(
    output.body,
    context
  );
  const contents: OperationNotPermittedException = {
    __type: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const deserialized: any = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(
    output.body,
    context
  );
  const contents: OrganizationNotInAllFeaturesModeException = {
    __type: "OrganizationNotInAllFeaturesModeException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationsNotInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OrganizationsNotInUseException> => {
  const deserialized: any = deserializeAws_json1_1OrganizationsNotInUseException(
    output.body,
    context
  );
  const contents: OrganizationsNotInUseException = {
    __type: "OrganizationsNotInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(
    output.body,
    context
  );
  const contents: ResourceNotFoundException = {
    __type: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const deserialized: any = deserializeAws_json1_1ResourceTypeNotSupportedException(
    output.body,
    context
  );
  const contents: ResourceTypeNotSupportedException = {
    __type: "ResourceTypeNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<S3BucketDoesNotExistException> => {
  const deserialized: any = deserializeAws_json1_1S3BucketDoesNotExistException(
    output.body,
    context
  );
  const contents: S3BucketDoesNotExistException = {
    __type: "S3BucketDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagsLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TagsLimitExceededException> => {
  const deserialized: any = deserializeAws_json1_1TagsLimitExceededException(
    output.body,
    context
  );
  const contents: TagsLimitExceededException = {
    __type: "TagsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TrailAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TrailAlreadyExistsException> => {
  const deserialized: any = deserializeAws_json1_1TrailAlreadyExistsException(
    output.body,
    context
  );
  const contents: TrailAlreadyExistsException = {
    __type: "TrailAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TrailNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TrailNotFoundException> => {
  const deserialized: any = deserializeAws_json1_1TrailNotFoundException(
    output.body,
    context
  );
  const contents: TrailNotFoundException = {
    __type: "TrailNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TrailNotProvidedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TrailNotProvidedException> => {
  const deserialized: any = deserializeAws_json1_1TrailNotProvidedException(
    output.body,
    context
  );
  const contents: TrailNotProvidedException = {
    __type: "TrailNotProvidedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(
    output.body,
    context
  );
  const contents: UnsupportedOperationException = {
    __type: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsRequest = (
  input: AddTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagsList !== undefined) {
    bodyParams["TagsList"] = serializeAws_json1_1TagsList(
      input.TagsList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTrailRequest = (
  input: CreateTrailRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLogsLogGroupArn !== undefined) {
    bodyParams["CloudWatchLogsLogGroupArn"] = input.CloudWatchLogsLogGroupArn;
  }
  if (input.CloudWatchLogsRoleArn !== undefined) {
    bodyParams["CloudWatchLogsRoleArn"] = input.CloudWatchLogsRoleArn;
  }
  if (input.EnableLogFileValidation !== undefined) {
    bodyParams["EnableLogFileValidation"] = input.EnableLogFileValidation;
  }
  if (input.IncludeGlobalServiceEvents !== undefined) {
    bodyParams["IncludeGlobalServiceEvents"] = input.IncludeGlobalServiceEvents;
  }
  if (input.IsMultiRegionTrail !== undefined) {
    bodyParams["IsMultiRegionTrail"] = input.IsMultiRegionTrail;
  }
  if (input.IsOrganizationTrail !== undefined) {
    bodyParams["IsOrganizationTrail"] = input.IsOrganizationTrail;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.S3BucketName !== undefined) {
    bodyParams["S3BucketName"] = input.S3BucketName;
  }
  if (input.S3KeyPrefix !== undefined) {
    bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
  }
  if (input.SnsTopicName !== undefined) {
    bodyParams["SnsTopicName"] = input.SnsTopicName;
  }
  if (input.TagsList !== undefined) {
    bodyParams["TagsList"] = serializeAws_json1_1TagsList(
      input.TagsList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataResource = (
  input: DataResource,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.Values !== undefined) {
    bodyParams["Values"] = serializeAws_json1_1DataResourceValues(
      input.Values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DataResourceValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1DataResources = (
  input: Array<DataResource>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1DataResource(entry, context)
  );
};

const serializeAws_json1_1DeleteTrailRequest = (
  input: DeleteTrailRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTrailsRequest = (
  input: DescribeTrailsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.includeShadowTrails !== undefined) {
    bodyParams["includeShadowTrails"] = input.includeShadowTrails;
  }
  if (input.trailNameList !== undefined) {
    bodyParams["trailNameList"] = serializeAws_json1_1TrailNameList(
      input.trailNameList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1EventSelector = (
  input: EventSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataResources !== undefined) {
    bodyParams["DataResources"] = serializeAws_json1_1DataResources(
      input.DataResources,
      context
    );
  }
  if (input.ExcludeManagementEventSources !== undefined) {
    bodyParams[
      "ExcludeManagementEventSources"
    ] = serializeAws_json1_1ExcludeManagementEventSources(
      input.ExcludeManagementEventSources,
      context
    );
  }
  if (input.IncludeManagementEvents !== undefined) {
    bodyParams["IncludeManagementEvents"] = input.IncludeManagementEvents;
  }
  if (input.ReadWriteType !== undefined) {
    bodyParams["ReadWriteType"] = input.ReadWriteType;
  }
  return bodyParams;
};

const serializeAws_json1_1EventSelectors = (
  input: Array<EventSelector>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1EventSelector(entry, context)
  );
};

const serializeAws_json1_1ExcludeManagementEventSources = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1GetEventSelectorsRequest = (
  input: GetEventSelectorsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TrailName !== undefined) {
    bodyParams["TrailName"] = input.TrailName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInsightSelectorsRequest = (
  input: GetInsightSelectorsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.TrailName !== undefined) {
    bodyParams["TrailName"] = input.TrailName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTrailRequest = (
  input: GetTrailRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTrailStatusRequest = (
  input: GetTrailStatusRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1InsightSelector = (
  input: InsightSelector,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.InsightType !== undefined) {
    bodyParams["InsightType"] = input.InsightType;
  }
  return bodyParams;
};

const serializeAws_json1_1InsightSelectors = (
  input: Array<InsightSelector>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1InsightSelector(entry, context)
  );
};

const serializeAws_json1_1ListPublicKeysRequest = (
  input: ListPublicKeysRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsRequest = (
  input: ListTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceIdList !== undefined) {
    bodyParams["ResourceIdList"] = serializeAws_json1_1ResourceIdList(
      input.ResourceIdList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListTrailsRequest = (
  input: ListTrailsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1LookupAttribute = (
  input: LookupAttribute,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.AttributeKey !== undefined) {
    bodyParams["AttributeKey"] = input.AttributeKey;
  }
  if (input.AttributeValue !== undefined) {
    bodyParams["AttributeValue"] = input.AttributeValue;
  }
  return bodyParams;
};

const serializeAws_json1_1LookupAttributesList = (
  input: Array<LookupAttribute>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_1LookupAttribute(entry, context)
  );
};

const serializeAws_json1_1LookupEventsRequest = (
  input: LookupEventsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.EventCategory !== undefined) {
    bodyParams["EventCategory"] = input.EventCategory;
  }
  if (input.LookupAttributes !== undefined) {
    bodyParams["LookupAttributes"] = serializeAws_json1_1LookupAttributesList(
      input.LookupAttributes,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1PutEventSelectorsRequest = (
  input: PutEventSelectorsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EventSelectors !== undefined) {
    bodyParams["EventSelectors"] = serializeAws_json1_1EventSelectors(
      input.EventSelectors,
      context
    );
  }
  if (input.TrailName !== undefined) {
    bodyParams["TrailName"] = input.TrailName;
  }
  return bodyParams;
};

const serializeAws_json1_1PutInsightSelectorsRequest = (
  input: PutInsightSelectorsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.InsightSelectors !== undefined) {
    bodyParams["InsightSelectors"] = serializeAws_json1_1InsightSelectors(
      input.InsightSelectors,
      context
    );
  }
  if (input.TrailName !== undefined) {
    bodyParams["TrailName"] = input.TrailName;
  }
  return bodyParams;
};

const serializeAws_json1_1RemoveTagsRequest = (
  input: RemoveTagsRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ResourceId !== undefined) {
    bodyParams["ResourceId"] = input.ResourceId;
  }
  if (input.TagsList !== undefined) {
    bodyParams["TagsList"] = serializeAws_json1_1TagsList(
      input.TagsList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1StartLoggingRequest = (
  input: StartLoggingRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopLoggingRequest = (
  input: StopLoggingRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  let bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagsList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => serializeAws_json1_1Tag(entry, context));
};

const serializeAws_json1_1TrailNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_1UpdateTrailRequest = (
  input: UpdateTrailRequest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CloudWatchLogsLogGroupArn !== undefined) {
    bodyParams["CloudWatchLogsLogGroupArn"] = input.CloudWatchLogsLogGroupArn;
  }
  if (input.CloudWatchLogsRoleArn !== undefined) {
    bodyParams["CloudWatchLogsRoleArn"] = input.CloudWatchLogsRoleArn;
  }
  if (input.EnableLogFileValidation !== undefined) {
    bodyParams["EnableLogFileValidation"] = input.EnableLogFileValidation;
  }
  if (input.IncludeGlobalServiceEvents !== undefined) {
    bodyParams["IncludeGlobalServiceEvents"] = input.IncludeGlobalServiceEvents;
  }
  if (input.IsMultiRegionTrail !== undefined) {
    bodyParams["IsMultiRegionTrail"] = input.IsMultiRegionTrail;
  }
  if (input.IsOrganizationTrail !== undefined) {
    bodyParams["IsOrganizationTrail"] = input.IsOrganizationTrail;
  }
  if (input.KmsKeyId !== undefined) {
    bodyParams["KmsKeyId"] = input.KmsKeyId;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.S3BucketName !== undefined) {
    bodyParams["S3BucketName"] = input.S3BucketName;
  }
  if (input.S3KeyPrefix !== undefined) {
    bodyParams["S3KeyPrefix"] = input.S3KeyPrefix;
  }
  if (input.SnsTopicName !== undefined) {
    bodyParams["SnsTopicName"] = input.SnsTopicName;
  }
  return bodyParams;
};

const deserializeAws_json1_1AddTagsResponse = (
  output: any,
  context: __SerdeContext
): AddTagsResponse => {
  let contents: any = {
    __type: "AddTagsResponse"
  };
  return contents;
};

const deserializeAws_json1_1CloudTrailARNInvalidException = (
  output: any,
  context: __SerdeContext
): CloudTrailARNInvalidException => {
  let contents: any = {
    __type: "CloudTrailARNInvalidException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CloudTrailAccessNotEnabledException = (
  output: any,
  context: __SerdeContext
): CloudTrailAccessNotEnabledException => {
  let contents: any = {
    __type: "CloudTrailAccessNotEnabledException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDeliveryUnavailableException => {
  let contents: any = {
    __type: "CloudWatchLogsDeliveryUnavailableException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1CreateTrailResponse = (
  output: any,
  context: __SerdeContext
): CreateTrailResponse => {
  let contents: any = {
    __type: "CreateTrailResponse",
    CloudWatchLogsLogGroupArn: undefined,
    CloudWatchLogsRoleArn: undefined,
    IncludeGlobalServiceEvents: undefined,
    IsMultiRegionTrail: undefined,
    IsOrganizationTrail: undefined,
    KmsKeyId: undefined,
    LogFileValidationEnabled: undefined,
    Name: undefined,
    S3BucketName: undefined,
    S3KeyPrefix: undefined,
    SnsTopicARN: undefined,
    SnsTopicName: undefined,
    TrailARN: undefined
  };
  if (output.CloudWatchLogsLogGroupArn !== undefined) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (output.CloudWatchLogsRoleArn !== undefined) {
    contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
  }
  if (output.IncludeGlobalServiceEvents !== undefined) {
    contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
  }
  if (output.IsMultiRegionTrail !== undefined) {
    contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
  }
  if (output.IsOrganizationTrail !== undefined) {
    contents.IsOrganizationTrail = output.IsOrganizationTrail;
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.LogFileValidationEnabled !== undefined) {
    contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.S3BucketName !== undefined) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3KeyPrefix !== undefined) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  if (output.SnsTopicARN !== undefined) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  if (output.SnsTopicName !== undefined) {
    contents.SnsTopicName = output.SnsTopicName;
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1DataResource = (
  output: any,
  context: __SerdeContext
): DataResource => {
  let contents: any = {
    __type: "DataResource",
    Type: undefined,
    Values: undefined
  };
  if (output.Type !== undefined) {
    contents.Type = output.Type;
  }
  if (output.Values !== undefined) {
    contents.Values = deserializeAws_json1_1DataResourceValues(
      output.Values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DataResourceValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DataResources = (
  output: any,
  context: __SerdeContext
): Array<DataResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DataResource(entry, context)
  );
};

const deserializeAws_json1_1DeleteTrailResponse = (
  output: any,
  context: __SerdeContext
): DeleteTrailResponse => {
  let contents: any = {
    __type: "DeleteTrailResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeTrailsResponse = (
  output: any,
  context: __SerdeContext
): DescribeTrailsResponse => {
  let contents: any = {
    __type: "DescribeTrailsResponse",
    trailList: undefined
  };
  if (output.trailList !== undefined) {
    contents.trailList = deserializeAws_json1_1TrailList(
      output.trailList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Event = (
  output: any,
  context: __SerdeContext
): Event => {
  let contents: any = {
    __type: "Event",
    AccessKeyId: undefined,
    CloudTrailEvent: undefined,
    EventId: undefined,
    EventName: undefined,
    EventSource: undefined,
    EventTime: undefined,
    ReadOnly: undefined,
    Resources: undefined,
    Username: undefined
  };
  if (output.AccessKeyId !== undefined) {
    contents.AccessKeyId = output.AccessKeyId;
  }
  if (output.CloudTrailEvent !== undefined) {
    contents.CloudTrailEvent = output.CloudTrailEvent;
  }
  if (output.EventId !== undefined) {
    contents.EventId = output.EventId;
  }
  if (output.EventName !== undefined) {
    contents.EventName = output.EventName;
  }
  if (output.EventSource !== undefined) {
    contents.EventSource = output.EventSource;
  }
  if (output.EventTime !== undefined) {
    contents.EventTime = new Date(
      output.EventTime % 1 != 0
        ? Math.round(output.EventTime * 1000)
        : output.EventTime
    );
  }
  if (output.ReadOnly !== undefined) {
    contents.ReadOnly = output.ReadOnly;
  }
  if (output.Resources !== undefined) {
    contents.Resources = deserializeAws_json1_1ResourceList(
      output.Resources,
      context
    );
  }
  if (output.Username !== undefined) {
    contents.Username = output.Username;
  }
  return contents;
};

const deserializeAws_json1_1EventSelector = (
  output: any,
  context: __SerdeContext
): EventSelector => {
  let contents: any = {
    __type: "EventSelector",
    DataResources: undefined,
    ExcludeManagementEventSources: undefined,
    IncludeManagementEvents: undefined,
    ReadWriteType: undefined
  };
  if (output.DataResources !== undefined) {
    contents.DataResources = deserializeAws_json1_1DataResources(
      output.DataResources,
      context
    );
  }
  if (output.ExcludeManagementEventSources !== undefined) {
    contents.ExcludeManagementEventSources = deserializeAws_json1_1ExcludeManagementEventSources(
      output.ExcludeManagementEventSources,
      context
    );
  }
  if (output.IncludeManagementEvents !== undefined) {
    contents.IncludeManagementEvents = output.IncludeManagementEvents;
  }
  if (output.ReadWriteType !== undefined) {
    contents.ReadWriteType = output.ReadWriteType;
  }
  return contents;
};

const deserializeAws_json1_1EventSelectors = (
  output: any,
  context: __SerdeContext
): Array<EventSelector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EventSelector(entry, context)
  );
};

const deserializeAws_json1_1EventsList = (
  output: any,
  context: __SerdeContext
): Array<Event> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Event(entry, context)
  );
};

const deserializeAws_json1_1ExcludeManagementEventSources = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1GetEventSelectorsResponse = (
  output: any,
  context: __SerdeContext
): GetEventSelectorsResponse => {
  let contents: any = {
    __type: "GetEventSelectorsResponse",
    EventSelectors: undefined,
    TrailARN: undefined
  };
  if (output.EventSelectors !== undefined) {
    contents.EventSelectors = deserializeAws_json1_1EventSelectors(
      output.EventSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1GetInsightSelectorsResponse = (
  output: any,
  context: __SerdeContext
): GetInsightSelectorsResponse => {
  let contents: any = {
    __type: "GetInsightSelectorsResponse",
    InsightSelectors: undefined,
    TrailARN: undefined
  };
  if (output.InsightSelectors !== undefined) {
    contents.InsightSelectors = deserializeAws_json1_1InsightSelectors(
      output.InsightSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1GetTrailResponse = (
  output: any,
  context: __SerdeContext
): GetTrailResponse => {
  let contents: any = {
    __type: "GetTrailResponse",
    Trail: undefined
  };
  if (output.Trail !== undefined) {
    contents.Trail = deserializeAws_json1_1Trail(output.Trail, context);
  }
  return contents;
};

const deserializeAws_json1_1GetTrailStatusResponse = (
  output: any,
  context: __SerdeContext
): GetTrailStatusResponse => {
  let contents: any = {
    __type: "GetTrailStatusResponse",
    IsLogging: undefined,
    LatestCloudWatchLogsDeliveryError: undefined,
    LatestCloudWatchLogsDeliveryTime: undefined,
    LatestDeliveryAttemptSucceeded: undefined,
    LatestDeliveryAttemptTime: undefined,
    LatestDeliveryError: undefined,
    LatestDeliveryTime: undefined,
    LatestDigestDeliveryError: undefined,
    LatestDigestDeliveryTime: undefined,
    LatestNotificationAttemptSucceeded: undefined,
    LatestNotificationAttemptTime: undefined,
    LatestNotificationError: undefined,
    LatestNotificationTime: undefined,
    StartLoggingTime: undefined,
    StopLoggingTime: undefined,
    TimeLoggingStarted: undefined,
    TimeLoggingStopped: undefined
  };
  if (output.IsLogging !== undefined) {
    contents.IsLogging = output.IsLogging;
  }
  if (output.LatestCloudWatchLogsDeliveryError !== undefined) {
    contents.LatestCloudWatchLogsDeliveryError =
      output.LatestCloudWatchLogsDeliveryError;
  }
  if (output.LatestCloudWatchLogsDeliveryTime !== undefined) {
    contents.LatestCloudWatchLogsDeliveryTime = new Date(
      output.LatestCloudWatchLogsDeliveryTime % 1 != 0
        ? Math.round(output.LatestCloudWatchLogsDeliveryTime * 1000)
        : output.LatestCloudWatchLogsDeliveryTime
    );
  }
  if (output.LatestDeliveryAttemptSucceeded !== undefined) {
    contents.LatestDeliveryAttemptSucceeded =
      output.LatestDeliveryAttemptSucceeded;
  }
  if (output.LatestDeliveryAttemptTime !== undefined) {
    contents.LatestDeliveryAttemptTime = output.LatestDeliveryAttemptTime;
  }
  if (output.LatestDeliveryError !== undefined) {
    contents.LatestDeliveryError = output.LatestDeliveryError;
  }
  if (output.LatestDeliveryTime !== undefined) {
    contents.LatestDeliveryTime = new Date(
      output.LatestDeliveryTime % 1 != 0
        ? Math.round(output.LatestDeliveryTime * 1000)
        : output.LatestDeliveryTime
    );
  }
  if (output.LatestDigestDeliveryError !== undefined) {
    contents.LatestDigestDeliveryError = output.LatestDigestDeliveryError;
  }
  if (output.LatestDigestDeliveryTime !== undefined) {
    contents.LatestDigestDeliveryTime = new Date(
      output.LatestDigestDeliveryTime % 1 != 0
        ? Math.round(output.LatestDigestDeliveryTime * 1000)
        : output.LatestDigestDeliveryTime
    );
  }
  if (output.LatestNotificationAttemptSucceeded !== undefined) {
    contents.LatestNotificationAttemptSucceeded =
      output.LatestNotificationAttemptSucceeded;
  }
  if (output.LatestNotificationAttemptTime !== undefined) {
    contents.LatestNotificationAttemptTime =
      output.LatestNotificationAttemptTime;
  }
  if (output.LatestNotificationError !== undefined) {
    contents.LatestNotificationError = output.LatestNotificationError;
  }
  if (output.LatestNotificationTime !== undefined) {
    contents.LatestNotificationTime = new Date(
      output.LatestNotificationTime % 1 != 0
        ? Math.round(output.LatestNotificationTime * 1000)
        : output.LatestNotificationTime
    );
  }
  if (output.StartLoggingTime !== undefined) {
    contents.StartLoggingTime = new Date(
      output.StartLoggingTime % 1 != 0
        ? Math.round(output.StartLoggingTime * 1000)
        : output.StartLoggingTime
    );
  }
  if (output.StopLoggingTime !== undefined) {
    contents.StopLoggingTime = new Date(
      output.StopLoggingTime % 1 != 0
        ? Math.round(output.StopLoggingTime * 1000)
        : output.StopLoggingTime
    );
  }
  if (output.TimeLoggingStarted !== undefined) {
    contents.TimeLoggingStarted = output.TimeLoggingStarted;
  }
  if (output.TimeLoggingStopped !== undefined) {
    contents.TimeLoggingStopped = output.TimeLoggingStopped;
  }
  return contents;
};

const deserializeAws_json1_1InsightNotEnabledException = (
  output: any,
  context: __SerdeContext
): InsightNotEnabledException => {
  let contents: any = {
    __type: "InsightNotEnabledException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InsightSelector = (
  output: any,
  context: __SerdeContext
): InsightSelector => {
  let contents: any = {
    __type: "InsightSelector",
    InsightType: undefined
  };
  if (output.InsightType !== undefined) {
    contents.InsightType = output.InsightType;
  }
  return contents;
};

const deserializeAws_json1_1InsightSelectors = (
  output: any,
  context: __SerdeContext
): Array<InsightSelector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InsightSelector(entry, context)
  );
};

const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException = (
  output: any,
  context: __SerdeContext
): InsufficientDependencyServiceAccessPermissionException => {
  let contents: any = {
    __type: "InsufficientDependencyServiceAccessPermissionException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InsufficientEncryptionPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientEncryptionPolicyException => {
  let contents: any = {
    __type: "InsufficientEncryptionPolicyException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InsufficientS3BucketPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientS3BucketPolicyException => {
  let contents: any = {
    __type: "InsufficientS3BucketPolicyException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InsufficientSnsTopicPolicyException = (
  output: any,
  context: __SerdeContext
): InsufficientSnsTopicPolicyException => {
  let contents: any = {
    __type: "InsufficientSnsTopicPolicyException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchLogsLogGroupArnException => {
  let contents: any = {
    __type: "InvalidCloudWatchLogsLogGroupArnException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException = (
  output: any,
  context: __SerdeContext
): InvalidCloudWatchLogsRoleArnException => {
  let contents: any = {
    __type: "InvalidCloudWatchLogsRoleArnException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEventCategoryException = (
  output: any,
  context: __SerdeContext
): InvalidEventCategoryException => {
  let contents: any = {
    __type: "InvalidEventCategoryException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidEventSelectorsException = (
  output: any,
  context: __SerdeContext
): InvalidEventSelectorsException => {
  let contents: any = {
    __type: "InvalidEventSelectorsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidHomeRegionException = (
  output: any,
  context: __SerdeContext
): InvalidHomeRegionException => {
  let contents: any = {
    __type: "InvalidHomeRegionException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidInsightSelectorsException = (
  output: any,
  context: __SerdeContext
): InvalidInsightSelectorsException => {
  let contents: any = {
    __type: "InvalidInsightSelectorsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidKmsKeyIdException = (
  output: any,
  context: __SerdeContext
): InvalidKmsKeyIdException => {
  let contents: any = {
    __type: "InvalidKmsKeyIdException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidLookupAttributesException = (
  output: any,
  context: __SerdeContext
): InvalidLookupAttributesException => {
  let contents: any = {
    __type: "InvalidLookupAttributesException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidMaxResultsException = (
  output: any,
  context: __SerdeContext
): InvalidMaxResultsException => {
  let contents: any = {
    __type: "InvalidMaxResultsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  let contents: any = {
    __type: "InvalidNextTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  let contents: any = {
    __type: "InvalidParameterCombinationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidS3BucketNameException = (
  output: any,
  context: __SerdeContext
): InvalidS3BucketNameException => {
  let contents: any = {
    __type: "InvalidS3BucketNameException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidS3PrefixException = (
  output: any,
  context: __SerdeContext
): InvalidS3PrefixException => {
  let contents: any = {
    __type: "InvalidS3PrefixException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidSnsTopicNameException = (
  output: any,
  context: __SerdeContext
): InvalidSnsTopicNameException => {
  let contents: any = {
    __type: "InvalidSnsTopicNameException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterException = (
  output: any,
  context: __SerdeContext
): InvalidTagParameterException => {
  let contents: any = {
    __type: "InvalidTagParameterException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeException = (
  output: any,
  context: __SerdeContext
): InvalidTimeRangeException => {
  let contents: any = {
    __type: "InvalidTimeRangeException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTokenException = (
  output: any,
  context: __SerdeContext
): InvalidTokenException => {
  let contents: any = {
    __type: "InvalidTokenException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidTrailNameException = (
  output: any,
  context: __SerdeContext
): InvalidTrailNameException => {
  let contents: any = {
    __type: "InvalidTrailNameException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1KmsException = (
  output: any,
  context: __SerdeContext
): KmsException => {
  let contents: any = {
    __type: "KmsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1KmsKeyDisabledException = (
  output: any,
  context: __SerdeContext
): KmsKeyDisabledException => {
  let contents: any = {
    __type: "KmsKeyDisabledException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1KmsKeyNotFoundException = (
  output: any,
  context: __SerdeContext
): KmsKeyNotFoundException => {
  let contents: any = {
    __type: "KmsKeyNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ListPublicKeysResponse = (
  output: any,
  context: __SerdeContext
): ListPublicKeysResponse => {
  let contents: any = {
    __type: "ListPublicKeysResponse",
    NextToken: undefined,
    PublicKeyList: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.PublicKeyList !== undefined) {
    contents.PublicKeyList = deserializeAws_json1_1PublicKeyList(
      output.PublicKeyList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTagsResponse = (
  output: any,
  context: __SerdeContext
): ListTagsResponse => {
  let contents: any = {
    __type: "ListTagsResponse",
    NextToken: undefined,
    ResourceTagList: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.ResourceTagList !== undefined) {
    contents.ResourceTagList = deserializeAws_json1_1ResourceTagList(
      output.ResourceTagList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTrailsResponse = (
  output: any,
  context: __SerdeContext
): ListTrailsResponse => {
  let contents: any = {
    __type: "ListTrailsResponse",
    NextToken: undefined,
    Trails: undefined
  };
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  if (output.Trails !== undefined) {
    contents.Trails = deserializeAws_json1_1Trails(output.Trails, context);
  }
  return contents;
};

const deserializeAws_json1_1LookupEventsResponse = (
  output: any,
  context: __SerdeContext
): LookupEventsResponse => {
  let contents: any = {
    __type: "LookupEventsResponse",
    Events: undefined,
    NextToken: undefined
  };
  if (output.Events !== undefined) {
    contents.Events = deserializeAws_json1_1EventsList(output.Events, context);
  }
  if (output.NextToken !== undefined) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1MaximumNumberOfTrailsExceededException = (
  output: any,
  context: __SerdeContext
): MaximumNumberOfTrailsExceededException => {
  let contents: any = {
    __type: "MaximumNumberOfTrailsExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1NotOrganizationMasterAccountException = (
  output: any,
  context: __SerdeContext
): NotOrganizationMasterAccountException => {
  let contents: any = {
    __type: "NotOrganizationMasterAccountException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  let contents: any = {
    __type: "OperationNotPermittedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeException = (
  output: any,
  context: __SerdeContext
): OrganizationNotInAllFeaturesModeException => {
  let contents: any = {
    __type: "OrganizationNotInAllFeaturesModeException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1OrganizationsNotInUseException = (
  output: any,
  context: __SerdeContext
): OrganizationsNotInUseException => {
  let contents: any = {
    __type: "OrganizationsNotInUseException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1PublicKey = (
  output: any,
  context: __SerdeContext
): PublicKey => {
  let contents: any = {
    __type: "PublicKey",
    Fingerprint: undefined,
    ValidityEndTime: undefined,
    ValidityStartTime: undefined,
    Value: undefined
  };
  if (output.Fingerprint !== undefined) {
    contents.Fingerprint = output.Fingerprint;
  }
  if (output.ValidityEndTime !== undefined) {
    contents.ValidityEndTime = new Date(
      output.ValidityEndTime % 1 != 0
        ? Math.round(output.ValidityEndTime * 1000)
        : output.ValidityEndTime
    );
  }
  if (output.ValidityStartTime !== undefined) {
    contents.ValidityStartTime = new Date(
      output.ValidityStartTime % 1 != 0
        ? Math.round(output.ValidityStartTime * 1000)
        : output.ValidityStartTime
    );
  }
  if (output.Value !== undefined) {
    contents.Value = context.base64Decoder(output.Value);
  }
  return contents;
};

const deserializeAws_json1_1PublicKeyList = (
  output: any,
  context: __SerdeContext
): Array<PublicKey> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1PublicKey(entry, context)
  );
};

const deserializeAws_json1_1PutEventSelectorsResponse = (
  output: any,
  context: __SerdeContext
): PutEventSelectorsResponse => {
  let contents: any = {
    __type: "PutEventSelectorsResponse",
    EventSelectors: undefined,
    TrailARN: undefined
  };
  if (output.EventSelectors !== undefined) {
    contents.EventSelectors = deserializeAws_json1_1EventSelectors(
      output.EventSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1PutInsightSelectorsResponse = (
  output: any,
  context: __SerdeContext
): PutInsightSelectorsResponse => {
  let contents: any = {
    __type: "PutInsightSelectorsResponse",
    InsightSelectors: undefined,
    TrailARN: undefined
  };
  if (output.InsightSelectors !== undefined) {
    contents.InsightSelectors = deserializeAws_json1_1InsightSelectors(
      output.InsightSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1RemoveTagsResponse = (
  output: any,
  context: __SerdeContext
): RemoveTagsResponse => {
  let contents: any = {
    __type: "RemoveTagsResponse"
  };
  return contents;
};

const deserializeAws_json1_1Resource = (
  output: any,
  context: __SerdeContext
): Resource => {
  let contents: any = {
    __type: "Resource",
    ResourceName: undefined,
    ResourceType: undefined
  };
  if (output.ResourceName !== undefined) {
    contents.ResourceName = output.ResourceName;
  }
  if (output.ResourceType !== undefined) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_json1_1ResourceList = (
  output: any,
  context: __SerdeContext
): Array<Resource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Resource(entry, context)
  );
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceTag = (
  output: any,
  context: __SerdeContext
): ResourceTag => {
  let contents: any = {
    __type: "ResourceTag",
    ResourceId: undefined,
    TagsList: undefined
  };
  if (output.ResourceId !== undefined) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.TagsList !== undefined) {
    contents.TagsList = deserializeAws_json1_1TagsList(
      output.TagsList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ResourceTagList = (
  output: any,
  context: __SerdeContext
): Array<ResourceTag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1ResourceTag(entry, context)
  );
};

const deserializeAws_json1_1ResourceTypeNotSupportedException = (
  output: any,
  context: __SerdeContext
): ResourceTypeNotSupportedException => {
  let contents: any = {
    __type: "ResourceTypeNotSupportedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1S3BucketDoesNotExistException = (
  output: any,
  context: __SerdeContext
): S3BucketDoesNotExistException => {
  let contents: any = {
    __type: "S3BucketDoesNotExistException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1StartLoggingResponse = (
  output: any,
  context: __SerdeContext
): StartLoggingResponse => {
  let contents: any = {
    __type: "StartLoggingResponse"
  };
  return contents;
};

const deserializeAws_json1_1StopLoggingResponse = (
  output: any,
  context: __SerdeContext
): StopLoggingResponse => {
  let contents: any = {
    __type: "StopLoggingResponse"
  };
  return contents;
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagsLimitExceededException = (
  output: any,
  context: __SerdeContext
): TagsLimitExceededException => {
  let contents: any = {
    __type: "TagsLimitExceededException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TagsList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1Trail = (
  output: any,
  context: __SerdeContext
): Trail => {
  let contents: any = {
    __type: "Trail",
    CloudWatchLogsLogGroupArn: undefined,
    CloudWatchLogsRoleArn: undefined,
    HasCustomEventSelectors: undefined,
    HasInsightSelectors: undefined,
    HomeRegion: undefined,
    IncludeGlobalServiceEvents: undefined,
    IsMultiRegionTrail: undefined,
    IsOrganizationTrail: undefined,
    KmsKeyId: undefined,
    LogFileValidationEnabled: undefined,
    Name: undefined,
    S3BucketName: undefined,
    S3KeyPrefix: undefined,
    SnsTopicARN: undefined,
    SnsTopicName: undefined,
    TrailARN: undefined
  };
  if (output.CloudWatchLogsLogGroupArn !== undefined) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (output.CloudWatchLogsRoleArn !== undefined) {
    contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
  }
  if (output.HasCustomEventSelectors !== undefined) {
    contents.HasCustomEventSelectors = output.HasCustomEventSelectors;
  }
  if (output.HasInsightSelectors !== undefined) {
    contents.HasInsightSelectors = output.HasInsightSelectors;
  }
  if (output.HomeRegion !== undefined) {
    contents.HomeRegion = output.HomeRegion;
  }
  if (output.IncludeGlobalServiceEvents !== undefined) {
    contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
  }
  if (output.IsMultiRegionTrail !== undefined) {
    contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
  }
  if (output.IsOrganizationTrail !== undefined) {
    contents.IsOrganizationTrail = output.IsOrganizationTrail;
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.LogFileValidationEnabled !== undefined) {
    contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.S3BucketName !== undefined) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3KeyPrefix !== undefined) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  if (output.SnsTopicARN !== undefined) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  if (output.SnsTopicName !== undefined) {
    contents.SnsTopicName = output.SnsTopicName;
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1TrailAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): TrailAlreadyExistsException => {
  let contents: any = {
    __type: "TrailAlreadyExistsException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TrailInfo = (
  output: any,
  context: __SerdeContext
): TrailInfo => {
  let contents: any = {
    __type: "TrailInfo",
    HomeRegion: undefined,
    Name: undefined,
    TrailARN: undefined
  };
  if (output.HomeRegion !== undefined) {
    contents.HomeRegion = output.HomeRegion;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
};

const deserializeAws_json1_1TrailList = (
  output: any,
  context: __SerdeContext
): Array<Trail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Trail(entry, context)
  );
};

const deserializeAws_json1_1TrailNotFoundException = (
  output: any,
  context: __SerdeContext
): TrailNotFoundException => {
  let contents: any = {
    __type: "TrailNotFoundException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1TrailNotProvidedException = (
  output: any,
  context: __SerdeContext
): TrailNotProvidedException => {
  let contents: any = {
    __type: "TrailNotProvidedException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1Trails = (
  output: any,
  context: __SerdeContext
): Array<TrailInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TrailInfo(entry, context)
  );
};

const deserializeAws_json1_1UnsupportedOperationException = (
  output: any,
  context: __SerdeContext
): UnsupportedOperationException => {
  let contents: any = {
    __type: "UnsupportedOperationException",
    Message: undefined
  };
  if (output.Message !== undefined) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_json1_1UpdateTrailResponse = (
  output: any,
  context: __SerdeContext
): UpdateTrailResponse => {
  let contents: any = {
    __type: "UpdateTrailResponse",
    CloudWatchLogsLogGroupArn: undefined,
    CloudWatchLogsRoleArn: undefined,
    IncludeGlobalServiceEvents: undefined,
    IsMultiRegionTrail: undefined,
    IsOrganizationTrail: undefined,
    KmsKeyId: undefined,
    LogFileValidationEnabled: undefined,
    Name: undefined,
    S3BucketName: undefined,
    S3KeyPrefix: undefined,
    SnsTopicARN: undefined,
    SnsTopicName: undefined,
    TrailARN: undefined
  };
  if (output.CloudWatchLogsLogGroupArn !== undefined) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (output.CloudWatchLogsRoleArn !== undefined) {
    contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
  }
  if (output.IncludeGlobalServiceEvents !== undefined) {
    contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
  }
  if (output.IsMultiRegionTrail !== undefined) {
    contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
  }
  if (output.IsOrganizationTrail !== undefined) {
    contents.IsOrganizationTrail = output.IsOrganizationTrail;
  }
  if (output.KmsKeyId !== undefined) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (output.LogFileValidationEnabled !== undefined) {
    contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
  }
  if (output.Name !== undefined) {
    contents.Name = output.Name;
  }
  if (output.S3BucketName !== undefined) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3KeyPrefix !== undefined) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  if (output.SnsTopicARN !== undefined) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  if (output.SnsTopicName !== undefined) {
    contents.SnsTopicName = output.SnsTopicName;
  }
  if (output.TrailARN !== undefined) {
    contents.TrailARN = output.TrailARN;
  }
  return contents;
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
