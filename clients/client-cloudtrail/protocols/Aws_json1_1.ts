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
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1AddTagsCommand(
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.AddTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AddTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateTrailCommand(
  input: CreateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.CreateTrail";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTrailCommand(
  input: DeleteTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.DeleteTrail";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeTrailsCommand(
  input: DescribeTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.DescribeTrails";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeTrailsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetEventSelectorsCommand(
  input: GetEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetEventSelectors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetEventSelectorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetInsightSelectorsCommand(
  input: GetInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetInsightSelectors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetInsightSelectorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTrailCommand(
  input: GetTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetTrail";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTrailStatusCommand(
  input: GetTrailStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.GetTrailStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetTrailStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListPublicKeysCommand(
  input: ListPublicKeysCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.ListPublicKeys";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListPublicKeysRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.ListTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTrailsCommand(
  input: ListTrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.ListTrails";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTrailsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1LookupEventsCommand(
  input: LookupEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.LookupEvents";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1LookupEventsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutEventSelectorsCommand(
  input: PutEventSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.PutEventSelectors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutEventSelectorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PutInsightSelectorsCommand(
  input: PutInsightSelectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.PutInsightSelectors";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PutInsightSelectorsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RemoveTagsCommand(
  input: RemoveTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.RemoveTags";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RemoveTagsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StartLoggingCommand(
  input: StartLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.StartLogging";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StartLoggingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopLoggingCommand(
  input: StopLoggingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.StopLogging";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopLoggingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateTrailCommand(
  input: UpdateTrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "CloudTrail_20131101.UpdateTrail";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTrailRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
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
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
      response = {
        ...(await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagsLimitExceededException":
    case "com.amazonaws.cloudtrail.v20131101#TagsLimitExceededException":
      response = {
        ...(await deserializeAws_json1_1TagsLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail.v20131101#CloudWatchLogsDeliveryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = {
        ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientSnsTopicPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsLogGroupArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsRoleArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidKmsKeyIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3BucketNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3PrefixException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidSnsTopicNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KmsException":
    case "com.amazonaws.cloudtrail.v20131101#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MaximumNumberOfTrailsExceededException":
    case "com.amazonaws.cloudtrail.v20131101#MaximumNumberOfTrailsExceededException":
      response = {
        ...(await deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationNotInAllFeaturesModeException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationsNotInUseException":
      response = {
        ...(await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail.v20131101#S3BucketDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailAlreadyExistsException":
    case "com.amazonaws.cloudtrail.v20131101#TrailAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1TrailAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotProvidedException":
      response = {
        ...(await deserializeAws_json1_1TrailNotProvidedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = {
        ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InsightNotEnabledException":
    case "com.amazonaws.cloudtrail.v20131101#InsightNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1InsightNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTimeRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
      response = {
        ...(await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTokenException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InvalidEventCategoryException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidEventCategoryException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventCategoryExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidLookupAttributesException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidLookupAttributesException":
      response = {
        ...(await deserializeAws_json1_1InvalidLookupAttributesExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidMaxResultsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidMaxResultsException":
      response = {
        ...(await deserializeAws_json1_1InvalidMaxResultsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextTokenException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidNextTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidNextTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTimeRangeException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTimeRangeException":
      response = {
        ...(await deserializeAws_json1_1InvalidTimeRangeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = {
        ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidEventSelectorsException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidInsightSelectorsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidInsightSelectorsException":
      response = {
        ...(await deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "CloudTrailARNInvalidException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailARNInvalidException":
      response = {
        ...(await deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTagParameterException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTagParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidTagParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceTypeNotSupportedException":
    case "com.amazonaws.cloudtrail.v20131101#ResourceTypeNotSupportedException":
      response = {
        ...(await deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = {
        ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = {
        ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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
    case "CloudTrailAccessNotEnabledException":
    case "com.amazonaws.cloudtrail.v20131101#CloudTrailAccessNotEnabledException":
      response = {
        ...(await deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CloudWatchLogsDeliveryUnavailableException":
    case "com.amazonaws.cloudtrail.v20131101#CloudWatchLogsDeliveryUnavailableException":
      response = {
        ...(await deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientDependencyServiceAccessPermissionException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientDependencyServiceAccessPermissionException":
      response = {
        ...(await deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientEncryptionPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientEncryptionPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientS3BucketPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientS3BucketPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InsufficientSnsTopicPolicyException":
    case "com.amazonaws.cloudtrail.v20131101#InsufficientSnsTopicPolicyException":
      response = {
        ...(await deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCloudWatchLogsLogGroupArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsLogGroupArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidCloudWatchLogsRoleArnException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidCloudWatchLogsRoleArnException":
      response = {
        ...(await deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidEventSelectorsException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidEventSelectorsException":
      response = {
        ...(await deserializeAws_json1_1InvalidEventSelectorsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidHomeRegionException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidHomeRegionException":
      response = {
        ...(await deserializeAws_json1_1InvalidHomeRegionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidKmsKeyIdException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidKmsKeyIdException":
      response = {
        ...(await deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3BucketNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3BucketNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3BucketNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidS3PrefixException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidS3PrefixException":
      response = {
        ...(await deserializeAws_json1_1InvalidS3PrefixExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSnsTopicNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidSnsTopicNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidTrailNameException":
    case "com.amazonaws.cloudtrail.v20131101#InvalidTrailNameException":
      response = {
        ...(await deserializeAws_json1_1InvalidTrailNameExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KmsException":
    case "com.amazonaws.cloudtrail.v20131101#KmsException":
      response = {
        ...(await deserializeAws_json1_1KmsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KmsKeyDisabledException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyDisabledException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KmsKeyNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#KmsKeyNotFoundException":
      response = {
        ...(await deserializeAws_json1_1KmsKeyNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotOrganizationMasterAccountException":
    case "com.amazonaws.cloudtrail.v20131101#NotOrganizationMasterAccountException":
      response = {
        ...(await deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedException":
    case "com.amazonaws.cloudtrail.v20131101#OperationNotPermittedException":
      response = {
        ...(await deserializeAws_json1_1OperationNotPermittedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationNotInAllFeaturesModeException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationNotInAllFeaturesModeException":
      response = {
        ...(await deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OrganizationsNotInUseException":
    case "com.amazonaws.cloudtrail.v20131101#OrganizationsNotInUseException":
      response = {
        ...(await deserializeAws_json1_1OrganizationsNotInUseExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "S3BucketDoesNotExistException":
    case "com.amazonaws.cloudtrail.v20131101#S3BucketDoesNotExistException":
      response = {
        ...(await deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotFoundException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotFoundException":
      response = {
        ...(await deserializeAws_json1_1TrailNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TrailNotProvidedException":
    case "com.amazonaws.cloudtrail.v20131101#TrailNotProvidedException":
      response = {
        ...(await deserializeAws_json1_1TrailNotProvidedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.cloudtrail.v20131101#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_json1_1UnsupportedOperationExceptionResponse(
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

const deserializeAws_json1_1CloudTrailARNInvalidExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailARNInvalidException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudTrailARNInvalidException(
    body,
    context
  );
  const contents: CloudTrailARNInvalidException = {
    name: "CloudTrailARNInvalidException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudTrailAccessNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudTrailAccessNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudTrailAccessNotEnabledException(
    body,
    context
  );
  const contents: CloudTrailAccessNotEnabledException = {
    name: "CloudTrailAccessNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CloudWatchLogsDeliveryUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CloudWatchLogsDeliveryUnavailableException(
    body,
    context
  );
  const contents: CloudWatchLogsDeliveryUnavailableException = {
    name: "CloudWatchLogsDeliveryUnavailableException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsightNotEnabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsightNotEnabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsightNotEnabledException(
    body,
    context
  );
  const contents: InsightNotEnabledException = {
    name: "InsightNotEnabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientDependencyServiceAccessPermissionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientDependencyServiceAccessPermissionException(
    body,
    context
  );
  const contents: InsufficientDependencyServiceAccessPermissionException = {
    name: "InsufficientDependencyServiceAccessPermissionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientEncryptionPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientEncryptionPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientEncryptionPolicyException(
    body,
    context
  );
  const contents: InsufficientEncryptionPolicyException = {
    name: "InsufficientEncryptionPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientS3BucketPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientS3BucketPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientS3BucketPolicyException(
    body,
    context
  );
  const contents: InsufficientS3BucketPolicyException = {
    name: "InsufficientS3BucketPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InsufficientSnsTopicPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientSnsTopicPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InsufficientSnsTopicPolicyException(
    body,
    context
  );
  const contents: InsufficientSnsTopicPolicyException = {
    name: "InsufficientSnsTopicPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsLogGroupArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCloudWatchLogsLogGroupArnException(
    body,
    context
  );
  const contents: InvalidCloudWatchLogsLogGroupArnException = {
    name: "InvalidCloudWatchLogsLogGroupArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidCloudWatchLogsRoleArnExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidCloudWatchLogsRoleArnException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidCloudWatchLogsRoleArnException(
    body,
    context
  );
  const contents: InvalidCloudWatchLogsRoleArnException = {
    name: "InvalidCloudWatchLogsRoleArnException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventCategoryExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventCategoryException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventCategoryException(
    body,
    context
  );
  const contents: InvalidEventCategoryException = {
    name: "InvalidEventCategoryException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidEventSelectorsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidEventSelectorsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidEventSelectorsException(
    body,
    context
  );
  const contents: InvalidEventSelectorsException = {
    name: "InvalidEventSelectorsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidHomeRegionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidHomeRegionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidHomeRegionException(
    body,
    context
  );
  const contents: InvalidHomeRegionException = {
    name: "InvalidHomeRegionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidInsightSelectorsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInsightSelectorsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInsightSelectorsException(
    body,
    context
  );
  const contents: InvalidInsightSelectorsException = {
    name: "InvalidInsightSelectorsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidKmsKeyIdExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidKmsKeyIdException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidKmsKeyIdException(
    body,
    context
  );
  const contents: InvalidKmsKeyIdException = {
    name: "InvalidKmsKeyIdException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidLookupAttributesExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidLookupAttributesException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidLookupAttributesException(
    body,
    context
  );
  const contents: InvalidLookupAttributesException = {
    name: "InvalidLookupAttributesException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidMaxResultsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidMaxResultsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidMaxResultsException(
    body,
    context
  );
  const contents: InvalidMaxResultsException = {
    name: "InvalidMaxResultsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(
    body,
    context
  );
  const contents: InvalidNextTokenException = {
    name: "InvalidNextTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterCombinationException(
    body,
    context
  );
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3BucketNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3BucketNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3BucketNameException(
    body,
    context
  );
  const contents: InvalidS3BucketNameException = {
    name: "InvalidS3BucketNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidS3PrefixExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidS3PrefixException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidS3PrefixException(
    body,
    context
  );
  const contents: InvalidS3PrefixException = {
    name: "InvalidS3PrefixException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidSnsTopicNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSnsTopicNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSnsTopicNameException(
    body,
    context
  );
  const contents: InvalidSnsTopicNameException = {
    name: "InvalidSnsTopicNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTagParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTagParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTagParameterException(
    body,
    context
  );
  const contents: InvalidTagParameterException = {
    name: "InvalidTagParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTimeRangeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTimeRangeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTimeRangeException(
    body,
    context
  );
  const contents: InvalidTimeRangeException = {
    name: "InvalidTimeRangeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTokenException(
    body,
    context
  );
  const contents: InvalidTokenException = {
    name: "InvalidTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidTrailNameExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidTrailNameException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidTrailNameException(
    body,
    context
  );
  const contents: InvalidTrailNameException = {
    name: "InvalidTrailNameException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KmsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsException(body, context);
  const contents: KmsException = {
    name: "KmsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KmsKeyDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyDisabledException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsKeyDisabledException(
    body,
    context
  );
  const contents: KmsKeyDisabledException = {
    name: "KmsKeyDisabledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1KmsKeyNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KmsKeyNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1KmsKeyNotFoundException(
    body,
    context
  );
  const contents: KmsKeyNotFoundException = {
    name: "KmsKeyNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1MaximumNumberOfTrailsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MaximumNumberOfTrailsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MaximumNumberOfTrailsExceededException(
    body,
    context
  );
  const contents: MaximumNumberOfTrailsExceededException = {
    name: "MaximumNumberOfTrailsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotOrganizationMasterAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotOrganizationMasterAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotOrganizationMasterAccountException(
    body,
    context
  );
  const contents: NotOrganizationMasterAccountException = {
    name: "NotOrganizationMasterAccountException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(
    body,
    context
  );
  const contents: OperationNotPermittedException = {
    name: "OperationNotPermittedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationNotInAllFeaturesModeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationNotInAllFeaturesModeException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationNotInAllFeaturesModeException(
    body,
    context
  );
  const contents: OrganizationNotInAllFeaturesModeException = {
    name: "OrganizationNotInAllFeaturesModeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OrganizationsNotInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OrganizationsNotInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OrganizationsNotInUseException(
    body,
    context
  );
  const contents: OrganizationsNotInUseException = {
    name: "OrganizationsNotInUseException",
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

const deserializeAws_json1_1ResourceTypeNotSupportedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceTypeNotSupportedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceTypeNotSupportedException(
    body,
    context
  );
  const contents: ResourceTypeNotSupportedException = {
    name: "ResourceTypeNotSupportedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1S3BucketDoesNotExistExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<S3BucketDoesNotExistException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1S3BucketDoesNotExistException(
    body,
    context
  );
  const contents: S3BucketDoesNotExistException = {
    name: "S3BucketDoesNotExistException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagsLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagsLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagsLimitExceededException(
    body,
    context
  );
  const contents: TagsLimitExceededException = {
    name: "TagsLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TrailAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TrailAlreadyExistsException(
    body,
    context
  );
  const contents: TrailAlreadyExistsException = {
    name: "TrailAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TrailNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TrailNotFoundException(
    body,
    context
  );
  const contents: TrailNotFoundException = {
    name: "TrailNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TrailNotProvidedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TrailNotProvidedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TrailNotProvidedException(
    body,
    context
  );
  const contents: TrailNotProvidedException = {
    name: "TrailNotProvidedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperationException(
    body,
    context
  );
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AddTagsRequest = (
  input: AddTagsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DataResources = (
  input: Array<DataResource>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1DataResource(entry, context));
  }
  return contents;
};

const serializeAws_json1_1DeleteTrailRequest = (
  input: DeleteTrailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeTrailsRequest = (
  input: DescribeTrailsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EventSelector(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ExcludeManagementEventSources = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1GetEventSelectorsRequest = (
  input: GetEventSelectorsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TrailName !== undefined) {
    bodyParams["TrailName"] = input.TrailName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInsightSelectorsRequest = (
  input: GetInsightSelectorsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TrailName !== undefined) {
    bodyParams["TrailName"] = input.TrailName;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTrailRequest = (
  input: GetTrailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTrailStatusRequest = (
  input: GetTrailStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1InsightSelector = (
  input: InsightSelector,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.InsightType !== undefined) {
    bodyParams["InsightType"] = input.InsightType;
  }
  return bodyParams;
};

const serializeAws_json1_1InsightSelectors = (
  input: Array<InsightSelector>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1InsightSelector(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ListPublicKeysRequest = (
  input: ListPublicKeysRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1LookupAttribute = (
  input: LookupAttribute,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1LookupAttribute(entry, context));
  }
  return contents;
};

const serializeAws_json1_1LookupEventsRequest = (
  input: LookupEventsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1StartLoggingRequest = (
  input: StartLoggingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1StopLoggingRequest = (
  input: StopLoggingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
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
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TrailNameList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1UpdateTrailRequest = (
  input: UpdateTrailRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (
    output.CloudWatchLogsLogGroupArn !== undefined &&
    output.CloudWatchLogsLogGroupArn !== null
  ) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (
    output.CloudWatchLogsRoleArn !== undefined &&
    output.CloudWatchLogsRoleArn !== null
  ) {
    contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
  }
  if (
    output.IncludeGlobalServiceEvents !== undefined &&
    output.IncludeGlobalServiceEvents !== null
  ) {
    contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
  }
  if (
    output.IsMultiRegionTrail !== undefined &&
    output.IsMultiRegionTrail !== null
  ) {
    contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
  }
  if (
    output.IsOrganizationTrail !== undefined &&
    output.IsOrganizationTrail !== null
  ) {
    contents.IsOrganizationTrail = output.IsOrganizationTrail;
  }
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (
    output.LogFileValidationEnabled !== undefined &&
    output.LogFileValidationEnabled !== null
  ) {
    contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  if (output.SnsTopicName !== undefined && output.SnsTopicName !== null) {
    contents.SnsTopicName = output.SnsTopicName;
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.Values !== undefined && output.Values !== null) {
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
  if (output.trailList !== undefined && output.trailList !== null) {
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
  if (output.AccessKeyId !== undefined && output.AccessKeyId !== null) {
    contents.AccessKeyId = output.AccessKeyId;
  }
  if (output.CloudTrailEvent !== undefined && output.CloudTrailEvent !== null) {
    contents.CloudTrailEvent = output.CloudTrailEvent;
  }
  if (output.EventId !== undefined && output.EventId !== null) {
    contents.EventId = output.EventId;
  }
  if (output.EventName !== undefined && output.EventName !== null) {
    contents.EventName = output.EventName;
  }
  if (output.EventSource !== undefined && output.EventSource !== null) {
    contents.EventSource = output.EventSource;
  }
  if (output.EventTime !== undefined && output.EventTime !== null) {
    contents.EventTime = new Date(Math.round(output.EventTime * 1000));
  }
  if (output.ReadOnly !== undefined && output.ReadOnly !== null) {
    contents.ReadOnly = output.ReadOnly;
  }
  if (output.Resources !== undefined && output.Resources !== null) {
    contents.Resources = deserializeAws_json1_1ResourceList(
      output.Resources,
      context
    );
  }
  if (output.Username !== undefined && output.Username !== null) {
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
  if (output.DataResources !== undefined && output.DataResources !== null) {
    contents.DataResources = deserializeAws_json1_1DataResources(
      output.DataResources,
      context
    );
  }
  if (
    output.ExcludeManagementEventSources !== undefined &&
    output.ExcludeManagementEventSources !== null
  ) {
    contents.ExcludeManagementEventSources = deserializeAws_json1_1ExcludeManagementEventSources(
      output.ExcludeManagementEventSources,
      context
    );
  }
  if (
    output.IncludeManagementEvents !== undefined &&
    output.IncludeManagementEvents !== null
  ) {
    contents.IncludeManagementEvents = output.IncludeManagementEvents;
  }
  if (output.ReadWriteType !== undefined && output.ReadWriteType !== null) {
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
  if (output.EventSelectors !== undefined && output.EventSelectors !== null) {
    contents.EventSelectors = deserializeAws_json1_1EventSelectors(
      output.EventSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (
    output.InsightSelectors !== undefined &&
    output.InsightSelectors !== null
  ) {
    contents.InsightSelectors = deserializeAws_json1_1InsightSelectors(
      output.InsightSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (output.Trail !== undefined && output.Trail !== null) {
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
  if (output.IsLogging !== undefined && output.IsLogging !== null) {
    contents.IsLogging = output.IsLogging;
  }
  if (
    output.LatestCloudWatchLogsDeliveryError !== undefined &&
    output.LatestCloudWatchLogsDeliveryError !== null
  ) {
    contents.LatestCloudWatchLogsDeliveryError =
      output.LatestCloudWatchLogsDeliveryError;
  }
  if (
    output.LatestCloudWatchLogsDeliveryTime !== undefined &&
    output.LatestCloudWatchLogsDeliveryTime !== null
  ) {
    contents.LatestCloudWatchLogsDeliveryTime = new Date(
      Math.round(output.LatestCloudWatchLogsDeliveryTime * 1000)
    );
  }
  if (
    output.LatestDeliveryAttemptSucceeded !== undefined &&
    output.LatestDeliveryAttemptSucceeded !== null
  ) {
    contents.LatestDeliveryAttemptSucceeded =
      output.LatestDeliveryAttemptSucceeded;
  }
  if (
    output.LatestDeliveryAttemptTime !== undefined &&
    output.LatestDeliveryAttemptTime !== null
  ) {
    contents.LatestDeliveryAttemptTime = output.LatestDeliveryAttemptTime;
  }
  if (
    output.LatestDeliveryError !== undefined &&
    output.LatestDeliveryError !== null
  ) {
    contents.LatestDeliveryError = output.LatestDeliveryError;
  }
  if (
    output.LatestDeliveryTime !== undefined &&
    output.LatestDeliveryTime !== null
  ) {
    contents.LatestDeliveryTime = new Date(
      Math.round(output.LatestDeliveryTime * 1000)
    );
  }
  if (
    output.LatestDigestDeliveryError !== undefined &&
    output.LatestDigestDeliveryError !== null
  ) {
    contents.LatestDigestDeliveryError = output.LatestDigestDeliveryError;
  }
  if (
    output.LatestDigestDeliveryTime !== undefined &&
    output.LatestDigestDeliveryTime !== null
  ) {
    contents.LatestDigestDeliveryTime = new Date(
      Math.round(output.LatestDigestDeliveryTime * 1000)
    );
  }
  if (
    output.LatestNotificationAttemptSucceeded !== undefined &&
    output.LatestNotificationAttemptSucceeded !== null
  ) {
    contents.LatestNotificationAttemptSucceeded =
      output.LatestNotificationAttemptSucceeded;
  }
  if (
    output.LatestNotificationAttemptTime !== undefined &&
    output.LatestNotificationAttemptTime !== null
  ) {
    contents.LatestNotificationAttemptTime =
      output.LatestNotificationAttemptTime;
  }
  if (
    output.LatestNotificationError !== undefined &&
    output.LatestNotificationError !== null
  ) {
    contents.LatestNotificationError = output.LatestNotificationError;
  }
  if (
    output.LatestNotificationTime !== undefined &&
    output.LatestNotificationTime !== null
  ) {
    contents.LatestNotificationTime = new Date(
      Math.round(output.LatestNotificationTime * 1000)
    );
  }
  if (
    output.StartLoggingTime !== undefined &&
    output.StartLoggingTime !== null
  ) {
    contents.StartLoggingTime = new Date(
      Math.round(output.StartLoggingTime * 1000)
    );
  }
  if (output.StopLoggingTime !== undefined && output.StopLoggingTime !== null) {
    contents.StopLoggingTime = new Date(
      Math.round(output.StopLoggingTime * 1000)
    );
  }
  if (
    output.TimeLoggingStarted !== undefined &&
    output.TimeLoggingStarted !== null
  ) {
    contents.TimeLoggingStarted = output.TimeLoggingStarted;
  }
  if (
    output.TimeLoggingStopped !== undefined &&
    output.TimeLoggingStopped !== null
  ) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.InsightType !== undefined && output.InsightType !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.PublicKeyList !== undefined && output.PublicKeyList !== null) {
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
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.ResourceTagList !== undefined && output.ResourceTagList !== null) {
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
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Trails !== undefined && output.Trails !== null) {
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
  if (output.Events !== undefined && output.Events !== null) {
    contents.Events = deserializeAws_json1_1EventsList(output.Events, context);
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Fingerprint !== undefined && output.Fingerprint !== null) {
    contents.Fingerprint = output.Fingerprint;
  }
  if (output.ValidityEndTime !== undefined && output.ValidityEndTime !== null) {
    contents.ValidityEndTime = new Date(
      Math.round(output.ValidityEndTime * 1000)
    );
  }
  if (
    output.ValidityStartTime !== undefined &&
    output.ValidityStartTime !== null
  ) {
    contents.ValidityStartTime = new Date(
      Math.round(output.ValidityStartTime * 1000)
    );
  }
  if (output.Value !== undefined && output.Value !== null) {
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
  if (output.EventSelectors !== undefined && output.EventSelectors !== null) {
    contents.EventSelectors = deserializeAws_json1_1EventSelectors(
      output.EventSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (
    output.InsightSelectors !== undefined &&
    output.InsightSelectors !== null
  ) {
    contents.InsightSelectors = deserializeAws_json1_1InsightSelectors(
      output.InsightSelectors,
      context
    );
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (output.ResourceName !== undefined && output.ResourceName !== null) {
    contents.ResourceName = output.ResourceName;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.ResourceId !== undefined && output.ResourceId !== null) {
    contents.ResourceId = output.ResourceId;
  }
  if (output.TagsList !== undefined && output.TagsList !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (
    output.CloudWatchLogsLogGroupArn !== undefined &&
    output.CloudWatchLogsLogGroupArn !== null
  ) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (
    output.CloudWatchLogsRoleArn !== undefined &&
    output.CloudWatchLogsRoleArn !== null
  ) {
    contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
  }
  if (
    output.HasCustomEventSelectors !== undefined &&
    output.HasCustomEventSelectors !== null
  ) {
    contents.HasCustomEventSelectors = output.HasCustomEventSelectors;
  }
  if (
    output.HasInsightSelectors !== undefined &&
    output.HasInsightSelectors !== null
  ) {
    contents.HasInsightSelectors = output.HasInsightSelectors;
  }
  if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
    contents.HomeRegion = output.HomeRegion;
  }
  if (
    output.IncludeGlobalServiceEvents !== undefined &&
    output.IncludeGlobalServiceEvents !== null
  ) {
    contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
  }
  if (
    output.IsMultiRegionTrail !== undefined &&
    output.IsMultiRegionTrail !== null
  ) {
    contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
  }
  if (
    output.IsOrganizationTrail !== undefined &&
    output.IsOrganizationTrail !== null
  ) {
    contents.IsOrganizationTrail = output.IsOrganizationTrail;
  }
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (
    output.LogFileValidationEnabled !== undefined &&
    output.LogFileValidationEnabled !== null
  ) {
    contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  if (output.SnsTopicName !== undefined && output.SnsTopicName !== null) {
    contents.SnsTopicName = output.SnsTopicName;
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.HomeRegion !== undefined && output.HomeRegion !== null) {
    contents.HomeRegion = output.HomeRegion;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (output.Message !== undefined && output.Message !== null) {
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
  if (
    output.CloudWatchLogsLogGroupArn !== undefined &&
    output.CloudWatchLogsLogGroupArn !== null
  ) {
    contents.CloudWatchLogsLogGroupArn = output.CloudWatchLogsLogGroupArn;
  }
  if (
    output.CloudWatchLogsRoleArn !== undefined &&
    output.CloudWatchLogsRoleArn !== null
  ) {
    contents.CloudWatchLogsRoleArn = output.CloudWatchLogsRoleArn;
  }
  if (
    output.IncludeGlobalServiceEvents !== undefined &&
    output.IncludeGlobalServiceEvents !== null
  ) {
    contents.IncludeGlobalServiceEvents = output.IncludeGlobalServiceEvents;
  }
  if (
    output.IsMultiRegionTrail !== undefined &&
    output.IsMultiRegionTrail !== null
  ) {
    contents.IsMultiRegionTrail = output.IsMultiRegionTrail;
  }
  if (
    output.IsOrganizationTrail !== undefined &&
    output.IsOrganizationTrail !== null
  ) {
    contents.IsOrganizationTrail = output.IsOrganizationTrail;
  }
  if (output.KmsKeyId !== undefined && output.KmsKeyId !== null) {
    contents.KmsKeyId = output.KmsKeyId;
  }
  if (
    output.LogFileValidationEnabled !== undefined &&
    output.LogFileValidationEnabled !== null
  ) {
    contents.LogFileValidationEnabled = output.LogFileValidationEnabled;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.S3BucketName !== undefined && output.S3BucketName !== null) {
    contents.S3BucketName = output.S3BucketName;
  }
  if (output.S3KeyPrefix !== undefined && output.S3KeyPrefix !== null) {
    contents.S3KeyPrefix = output.S3KeyPrefix;
  }
  if (output.SnsTopicARN !== undefined && output.SnsTopicARN !== null) {
    contents.SnsTopicARN = output.SnsTopicARN;
  }
  if (output.SnsTopicName !== undefined && output.SnsTopicName !== null) {
    contents.SnsTopicName = output.SnsTopicName;
  }
  if (output.TrailARN !== undefined && output.TrailARN !== null) {
    contents.TrailARN = output.TrailARN;
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
