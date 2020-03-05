import {
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput
} from "../commands/AssociateDRTLogBucketCommand";
import {
  AssociateDRTRoleCommandInput,
  AssociateDRTRoleCommandOutput
} from "../commands/AssociateDRTRoleCommand";
import {
  CreateProtectionCommandInput,
  CreateProtectionCommandOutput
} from "../commands/CreateProtectionCommand";
import {
  CreateSubscriptionCommandInput,
  CreateSubscriptionCommandOutput
} from "../commands/CreateSubscriptionCommand";
import {
  DeleteProtectionCommandInput,
  DeleteProtectionCommandOutput
} from "../commands/DeleteProtectionCommand";
import {
  DeleteSubscriptionCommandInput,
  DeleteSubscriptionCommandOutput
} from "../commands/DeleteSubscriptionCommand";
import {
  DescribeAttackCommandInput,
  DescribeAttackCommandOutput
} from "../commands/DescribeAttackCommand";
import {
  DescribeDRTAccessCommandInput,
  DescribeDRTAccessCommandOutput
} from "../commands/DescribeDRTAccessCommand";
import {
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput
} from "../commands/DescribeEmergencyContactSettingsCommand";
import {
  DescribeProtectionCommandInput,
  DescribeProtectionCommandOutput
} from "../commands/DescribeProtectionCommand";
import {
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput
} from "../commands/DescribeSubscriptionCommand";
import {
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput
} from "../commands/DisassociateDRTLogBucketCommand";
import {
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput
} from "../commands/DisassociateDRTRoleCommand";
import {
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput
} from "../commands/GetSubscriptionStateCommand";
import {
  ListAttacksCommandInput,
  ListAttacksCommandOutput
} from "../commands/ListAttacksCommand";
import {
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput
} from "../commands/ListProtectionsCommand";
import {
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput
} from "../commands/UpdateEmergencyContactSettingsCommand";
import {
  UpdateSubscriptionCommandInput,
  UpdateSubscriptionCommandOutput
} from "../commands/UpdateSubscriptionCommand";
import {
  AccessDeniedException,
  AccessDeniedForDependencyException,
  AssociateDRTLogBucketRequest,
  AssociateDRTLogBucketResponse,
  AssociateDRTRoleRequest,
  AssociateDRTRoleResponse,
  AttackDetail,
  AttackProperty,
  AttackSummary,
  AttackVectorDescription,
  Contributor,
  CreateProtectionRequest,
  CreateProtectionResponse,
  CreateSubscriptionRequest,
  CreateSubscriptionResponse,
  DeleteProtectionRequest,
  DeleteProtectionResponse,
  DeleteSubscriptionRequest,
  DeleteSubscriptionResponse,
  DescribeAttackRequest,
  DescribeAttackResponse,
  DescribeDRTAccessRequest,
  DescribeDRTAccessResponse,
  DescribeEmergencyContactSettingsRequest,
  DescribeEmergencyContactSettingsResponse,
  DescribeProtectionRequest,
  DescribeProtectionResponse,
  DescribeSubscriptionRequest,
  DescribeSubscriptionResponse,
  DisassociateDRTLogBucketRequest,
  DisassociateDRTLogBucketResponse,
  DisassociateDRTRoleRequest,
  DisassociateDRTRoleResponse,
  EmergencyContact,
  GetSubscriptionStateRequest,
  GetSubscriptionStateResponse,
  InternalErrorException,
  InvalidOperationException,
  InvalidPaginationTokenException,
  InvalidParameterException,
  InvalidResourceException,
  Limit,
  LimitsExceededException,
  ListAttacksRequest,
  ListAttacksResponse,
  ListProtectionsRequest,
  ListProtectionsResponse,
  LockedSubscriptionException,
  Mitigation,
  NoAssociatedRoleException,
  OptimisticLockException,
  Protection,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  SubResourceSummary,
  Subscription,
  SummarizedAttackVector,
  SummarizedCounter,
  TimeRange,
  UpdateEmergencyContactSettingsRequest,
  UpdateEmergencyContactSettingsResponse,
  UpdateSubscriptionRequest,
  UpdateSubscriptionResponse
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

export async function serializeAws_json1_1AssociateDRTLogBucketCommand(
  input: AssociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.AssociateDRTLogBucket";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDRTLogBucketRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1AssociateDRTRoleCommand(
  input: AssociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.AssociateDRTRole";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDRTRoleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateProtectionCommand(
  input: CreateProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.CreateProtection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProtectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateSubscriptionCommand(
  input: CreateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.CreateSubscription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteProtectionCommand(
  input: DeleteProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DeleteProtection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteProtectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteSubscriptionCommand(
  input: DeleteSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DeleteSubscription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeAttackCommand(
  input: DescribeAttackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DescribeAttack";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAttackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeDRTAccessCommand(
  input: DescribeDRTAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DescribeDRTAccess";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDRTAccessRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeEmergencyContactSettingsCommand(
  input: DescribeEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] =
    "AWSShield_20160616.DescribeEmergencyContactSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEmergencyContactSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeProtectionCommand(
  input: DescribeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DescribeProtection";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProtectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DescribeSubscriptionCommand(
  input: DescribeSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DescribeSubscription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateDRTLogBucketCommand(
  input: DisassociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DisassociateDRTLogBucket";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDRTLogBucketRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DisassociateDRTRoleCommand(
  input: DisassociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.DisassociateDRTRole";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDRTRoleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSubscriptionStateCommand(
  input: GetSubscriptionStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.GetSubscriptionState";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSubscriptionStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListAttacksCommand(
  input: ListAttacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.ListAttacks";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAttacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListProtectionsCommand(
  input: ListProtectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.ListProtections";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProtectionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateEmergencyContactSettingsCommand(
  input: UpdateEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.UpdateEmergencyContactSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEmergencyContactSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateSubscriptionCommand(
  input: UpdateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "AWSShield_20160616.UpdateSubscription";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1AssociateDRTLogBucketCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateDRTLogBucketCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDRTLogBucketResponse(data, context);
  const response: AssociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateDRTLogBucketResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateDRTLogBucketCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> {
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
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAssociatedRoleException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#NoAssociatedRoleException":
      response = {
        ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1AssociateDRTRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1AssociateDRTRoleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateDRTRoleResponse(data, context);
  const response: AssociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateDRTRoleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1AssociateDRTRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> {
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
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1CreateProtectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProtectionResponse(data, context);
  const response: CreateProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProtectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateProtectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1CreateSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateSubscriptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSubscriptionResponse(data, context);
  const response: CreateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSubscriptionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(
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

export async function deserializeAws_json1_1DeleteProtectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteProtectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProtectionResponse(data, context);
  const response: DeleteProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProtectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteProtectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DeleteSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteSubscriptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSubscriptionResponse(data, context);
  const response: DeleteSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSubscriptionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LockedSubscriptionException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#LockedSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeAttackCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeAttackCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAttackResponse(data, context);
  const response: DescribeAttackCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAttackResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeAttackCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> {
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
    case "AccessDeniedException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
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

export async function deserializeAws_json1_1DescribeDRTAccessCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeDRTAccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDRTAccessResponse(data, context);
  const response: DescribeDRTAccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDRTAccessResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeDRTAccessCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeEmergencyContactSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeEmergencyContactSettingsResponse(
    data,
    context
  );
  const response: DescribeEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeEmergencyContactSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeProtectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeProtectionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeProtectionResponse(data, context);
  const response: DescribeProtectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProtectionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeProtectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DescribeSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeSubscriptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSubscriptionResponse(data, context);
  const response: DescribeSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSubscriptionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DescribeSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateDRTLogBucketCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateDRTLogBucketCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDRTLogBucketResponse(
    data,
    context
  );
  const response: DisassociateDRTLogBucketCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateDRTLogBucketResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateDRTLogBucketCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> {
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
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAssociatedRoleException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#NoAssociatedRoleException":
      response = {
        ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1DisassociateDRTRoleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DisassociateDRTRoleCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateDRTRoleResponse(data, context);
  const response: DisassociateDRTRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateDRTRoleResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DisassociateDRTRoleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1GetSubscriptionStateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSubscriptionStateCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSubscriptionStateResponse(data, context);
  const response: GetSubscriptionStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSubscriptionStateResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSubscriptionStateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
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

export async function deserializeAws_json1_1ListAttacksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListAttacksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAttacksResponse(data, context);
  const response: ListAttacksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAttacksResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListAttacksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
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

export async function deserializeAws_json1_1ListProtectionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProtectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProtectionsResponse(data, context);
  const response: ListProtectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProtectionsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListProtectionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1UpdateEmergencyContactSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateEmergencyContactSettingsResponse(
    data,
    context
  );
  const response: UpdateEmergencyContactSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateEmergencyContactSettingsResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

export async function deserializeAws_json1_1UpdateSubscriptionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateSubscriptionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSubscriptionResponse(data, context);
  const response: UpdateSubscriptionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSubscriptionResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateSubscriptionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> {
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
    case "InternalErrorException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LockedSubscriptionException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#LockedSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.bardockcustomerapiservice.v20160616#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(
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

const deserializeAws_json1_1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedException(
    body,
    context
  );
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedForDependencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1AccessDeniedForDependencyException(
    body,
    context
  );
  const contents: AccessDeniedForDependencyException = {
    name: "AccessDeniedForDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(
    body,
    context
  );
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(
    body,
    context
  );
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPaginationTokenException(
    body,
    context
  );
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(
    body,
    context
  );
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidResourceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidResourceException(
    body,
    context
  );
  const contents: InvalidResourceException = {
    name: "InvalidResourceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitsExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitsExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitsExceededException(
    body,
    context
  );
  const contents: LimitsExceededException = {
    name: "LimitsExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LockedSubscriptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LockedSubscriptionException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LockedSubscriptionException(
    body,
    context
  );
  const contents: LockedSubscriptionException = {
    name: "LockedSubscriptionException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NoAssociatedRoleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoAssociatedRoleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoAssociatedRoleException(
    body,
    context
  );
  const contents: NoAssociatedRoleException = {
    name: "NoAssociatedRoleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1OptimisticLockExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OptimisticLockException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OptimisticLockException(
    body,
    context
  );
  const contents: OptimisticLockException = {
    name: "OptimisticLockException",
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

const serializeAws_json1_1AssociateDRTLogBucketRequest = (
  input: AssociateDRTLogBucketRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LogBucket !== undefined) {
    bodyParams["LogBucket"] = input.LogBucket;
  }
  return bodyParams;
};

const serializeAws_json1_1AssociateDRTRoleRequest = (
  input: AssociateDRTRoleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateProtectionRequest = (
  input: CreateProtectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateSubscriptionRequest = (
  input: CreateSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DeleteProtectionRequest = (
  input: DeleteProtectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProtectionId !== undefined) {
    bodyParams["ProtectionId"] = input.ProtectionId;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteSubscriptionRequest = (
  input: DeleteSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DescribeAttackRequest = (
  input: DescribeAttackRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AttackId !== undefined) {
    bodyParams["AttackId"] = input.AttackId;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeDRTAccessRequest = (
  input: DescribeDRTAccessRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DescribeEmergencyContactSettingsRequest = (
  input: DescribeEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DescribeProtectionRequest = (
  input: DescribeProtectionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ProtectionId !== undefined) {
    bodyParams["ProtectionId"] = input.ProtectionId;
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DescribeSubscriptionRequest = (
  input: DescribeSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1DisassociateDRTLogBucketRequest = (
  input: DisassociateDRTLogBucketRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.LogBucket !== undefined) {
    bodyParams["LogBucket"] = input.LogBucket;
  }
  return bodyParams;
};

const serializeAws_json1_1DisassociateDRTRoleRequest = (
  input: DisassociateDRTRoleRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1EmergencyContact = (
  input: EmergencyContact,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EmailAddress !== undefined) {
    bodyParams["EmailAddress"] = input.EmailAddress;
  }
  return bodyParams;
};

const serializeAws_json1_1EmergencyContactList = (
  input: Array<EmergencyContact>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1EmergencyContact(entry, context));
  }
  return contents;
};

const serializeAws_json1_1GetSubscriptionStateRequest = (
  input: GetSubscriptionStateRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1ListAttacksRequest = (
  input: ListAttacksRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = serializeAws_json1_1TimeRange(
      input.EndTime,
      context
    );
  }
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.ResourceArns !== undefined) {
    bodyParams["ResourceArns"] = serializeAws_json1_1ResourceArnFilterList(
      input.ResourceArns,
      context
    );
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = serializeAws_json1_1TimeRange(
      input.StartTime,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ListProtectionsRequest = (
  input: ListProtectionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.MaxResults !== undefined) {
    bodyParams["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ResourceArnFilterList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TimeRange = (
  input: TimeRange,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FromInclusive !== undefined) {
    bodyParams["FromInclusive"] = Math.round(
      input.FromInclusive.getTime() / 1000
    );
  }
  if (input.ToExclusive !== undefined) {
    bodyParams["ToExclusive"] = Math.round(input.ToExclusive.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateEmergencyContactSettingsRequest = (
  input: UpdateEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EmergencyContactList !== undefined) {
    bodyParams[
      "EmergencyContactList"
    ] = serializeAws_json1_1EmergencyContactList(
      input.EmergencyContactList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateSubscriptionRequest = (
  input: UpdateSubscriptionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AutoRenew !== undefined) {
    bodyParams["AutoRenew"] = input.AutoRenew;
  }
  return bodyParams;
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  let contents: any = {
    __type: "AccessDeniedException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  let contents: any = {
    __type: "AccessDeniedForDependencyException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1AssociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): AssociateDRTLogBucketResponse => {
  let contents: any = {
    __type: "AssociateDRTLogBucketResponse"
  };
  return contents;
};

const deserializeAws_json1_1AssociateDRTRoleResponse = (
  output: any,
  context: __SerdeContext
): AssociateDRTRoleResponse => {
  let contents: any = {
    __type: "AssociateDRTRoleResponse"
  };
  return contents;
};

const deserializeAws_json1_1AttackDetail = (
  output: any,
  context: __SerdeContext
): AttackDetail => {
  let contents: any = {
    __type: "AttackDetail",
    AttackCounters: undefined,
    AttackId: undefined,
    AttackProperties: undefined,
    EndTime: undefined,
    Mitigations: undefined,
    ResourceArn: undefined,
    StartTime: undefined,
    SubResources: undefined
  };
  if (output.AttackCounters !== undefined && output.AttackCounters !== null) {
    contents.AttackCounters = deserializeAws_json1_1SummarizedCounterList(
      output.AttackCounters,
      context
    );
  }
  if (output.AttackId !== undefined && output.AttackId !== null) {
    contents.AttackId = output.AttackId;
  }
  if (
    output.AttackProperties !== undefined &&
    output.AttackProperties !== null
  ) {
    contents.AttackProperties = deserializeAws_json1_1AttackProperties(
      output.AttackProperties,
      context
    );
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.Mitigations !== undefined && output.Mitigations !== null) {
    contents.Mitigations = deserializeAws_json1_1MitigationList(
      output.Mitigations,
      context
    );
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.SubResources !== undefined && output.SubResources !== null) {
    contents.SubResources = deserializeAws_json1_1SubResourceSummaryList(
      output.SubResources,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AttackProperties = (
  output: any,
  context: __SerdeContext
): Array<AttackProperty> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttackProperty(entry, context)
  );
};

const deserializeAws_json1_1AttackProperty = (
  output: any,
  context: __SerdeContext
): AttackProperty => {
  let contents: any = {
    __type: "AttackProperty",
    AttackLayer: undefined,
    AttackPropertyIdentifier: undefined,
    TopContributors: undefined,
    Total: undefined,
    Unit: undefined
  };
  if (output.AttackLayer !== undefined && output.AttackLayer !== null) {
    contents.AttackLayer = output.AttackLayer;
  }
  if (
    output.AttackPropertyIdentifier !== undefined &&
    output.AttackPropertyIdentifier !== null
  ) {
    contents.AttackPropertyIdentifier = output.AttackPropertyIdentifier;
  }
  if (output.TopContributors !== undefined && output.TopContributors !== null) {
    contents.TopContributors = deserializeAws_json1_1TopContributors(
      output.TopContributors,
      context
    );
  }
  if (output.Total !== undefined && output.Total !== null) {
    contents.Total = output.Total;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1AttackSummaries = (
  output: any,
  context: __SerdeContext
): Array<AttackSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttackSummary(entry, context)
  );
};

const deserializeAws_json1_1AttackSummary = (
  output: any,
  context: __SerdeContext
): AttackSummary => {
  let contents: any = {
    __type: "AttackSummary",
    AttackId: undefined,
    AttackVectors: undefined,
    EndTime: undefined,
    ResourceArn: undefined,
    StartTime: undefined
  };
  if (output.AttackId !== undefined && output.AttackId !== null) {
    contents.AttackId = output.AttackId;
  }
  if (output.AttackVectors !== undefined && output.AttackVectors !== null) {
    contents.AttackVectors = deserializeAws_json1_1AttackVectorDescriptionList(
      output.AttackVectors,
      context
    );
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  return contents;
};

const deserializeAws_json1_1AttackVectorDescription = (
  output: any,
  context: __SerdeContext
): AttackVectorDescription => {
  let contents: any = {
    __type: "AttackVectorDescription",
    VectorType: undefined
  };
  if (output.VectorType !== undefined && output.VectorType !== null) {
    contents.VectorType = output.VectorType;
  }
  return contents;
};

const deserializeAws_json1_1AttackVectorDescriptionList = (
  output: any,
  context: __SerdeContext
): Array<AttackVectorDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttackVectorDescription(entry, context)
  );
};

const deserializeAws_json1_1Contributor = (
  output: any,
  context: __SerdeContext
): Contributor => {
  let contents: any = {
    __type: "Contributor",
    Name: undefined,
    Value: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1CreateProtectionResponse = (
  output: any,
  context: __SerdeContext
): CreateProtectionResponse => {
  let contents: any = {
    __type: "CreateProtectionResponse",
    ProtectionId: undefined
  };
  if (output.ProtectionId !== undefined && output.ProtectionId !== null) {
    contents.ProtectionId = output.ProtectionId;
  }
  return contents;
};

const deserializeAws_json1_1CreateSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateSubscriptionResponse => {
  let contents: any = {
    __type: "CreateSubscriptionResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteProtectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteProtectionResponse => {
  let contents: any = {
    __type: "DeleteProtectionResponse"
  };
  return contents;
};

const deserializeAws_json1_1DeleteSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubscriptionResponse => {
  let contents: any = {
    __type: "DeleteSubscriptionResponse"
  };
  return contents;
};

const deserializeAws_json1_1DescribeAttackResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttackResponse => {
  let contents: any = {
    __type: "DescribeAttackResponse",
    Attack: undefined
  };
  if (output.Attack !== undefined && output.Attack !== null) {
    contents.Attack = deserializeAws_json1_1AttackDetail(
      output.Attack,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeDRTAccessResponse = (
  output: any,
  context: __SerdeContext
): DescribeDRTAccessResponse => {
  let contents: any = {
    __type: "DescribeDRTAccessResponse",
    LogBucketList: undefined,
    RoleArn: undefined
  };
  if (output.LogBucketList !== undefined && output.LogBucketList !== null) {
    contents.LogBucketList = deserializeAws_json1_1LogBucketList(
      output.LogBucketList,
      context
    );
  }
  if (output.RoleArn !== undefined && output.RoleArn !== null) {
    contents.RoleArn = output.RoleArn;
  }
  return contents;
};

const deserializeAws_json1_1DescribeEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEmergencyContactSettingsResponse => {
  let contents: any = {
    __type: "DescribeEmergencyContactSettingsResponse",
    EmergencyContactList: undefined
  };
  if (
    output.EmergencyContactList !== undefined &&
    output.EmergencyContactList !== null
  ) {
    contents.EmergencyContactList = deserializeAws_json1_1EmergencyContactList(
      output.EmergencyContactList,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeProtectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeProtectionResponse => {
  let contents: any = {
    __type: "DescribeProtectionResponse",
    Protection: undefined
  };
  if (output.Protection !== undefined && output.Protection !== null) {
    contents.Protection = deserializeAws_json1_1Protection(
      output.Protection,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DescribeSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionResponse => {
  let contents: any = {
    __type: "DescribeSubscriptionResponse",
    Subscription: undefined
  };
  if (output.Subscription !== undefined && output.Subscription !== null) {
    contents.Subscription = deserializeAws_json1_1Subscription(
      output.Subscription,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DisassociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTLogBucketResponse => {
  let contents: any = {
    __type: "DisassociateDRTLogBucketResponse"
  };
  return contents;
};

const deserializeAws_json1_1DisassociateDRTRoleResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTRoleResponse => {
  let contents: any = {
    __type: "DisassociateDRTRoleResponse"
  };
  return contents;
};

const deserializeAws_json1_1EmergencyContact = (
  output: any,
  context: __SerdeContext
): EmergencyContact => {
  let contents: any = {
    __type: "EmergencyContact",
    EmailAddress: undefined
  };
  if (output.EmailAddress !== undefined && output.EmailAddress !== null) {
    contents.EmailAddress = output.EmailAddress;
  }
  return contents;
};

const deserializeAws_json1_1EmergencyContactList = (
  output: any,
  context: __SerdeContext
): Array<EmergencyContact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EmergencyContact(entry, context)
  );
};

const deserializeAws_json1_1GetSubscriptionStateResponse = (
  output: any,
  context: __SerdeContext
): GetSubscriptionStateResponse => {
  let contents: any = {
    __type: "GetSubscriptionStateResponse",
    SubscriptionState: undefined
  };
  if (
    output.SubscriptionState !== undefined &&
    output.SubscriptionState !== null
  ) {
    contents.SubscriptionState = output.SubscriptionState;
  }
  return contents;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  let contents: any = {
    __type: "InternalErrorException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    __type: "InvalidOperationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  let contents: any = {
    __type: "InvalidPaginationTokenException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  let contents: any = {
    __type: "InvalidParameterException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidResourceException = (
  output: any,
  context: __SerdeContext
): InvalidResourceException => {
  let contents: any = {
    __type: "InvalidResourceException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Limit = (
  output: any,
  context: __SerdeContext
): Limit => {
  let contents: any = {
    __type: "Limit",
    Max: undefined,
    Type: undefined
  };
  if (output.Max !== undefined && output.Max !== null) {
    contents.Max = output.Max;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1Limits = (
  output: any,
  context: __SerdeContext
): Array<Limit> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Limit(entry, context)
  );
};

const deserializeAws_json1_1LimitsExceededException = (
  output: any,
  context: __SerdeContext
): LimitsExceededException => {
  let contents: any = {
    __type: "LimitsExceededException",
    Limit: undefined,
    Type: undefined,
    message: undefined
  };
  if (output.Limit !== undefined && output.Limit !== null) {
    contents.Limit = output.Limit;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListAttacksResponse = (
  output: any,
  context: __SerdeContext
): ListAttacksResponse => {
  let contents: any = {
    __type: "ListAttacksResponse",
    AttackSummaries: undefined,
    NextToken: undefined
  };
  if (output.AttackSummaries !== undefined && output.AttackSummaries !== null) {
    contents.AttackSummaries = deserializeAws_json1_1AttackSummaries(
      output.AttackSummaries,
      context
    );
  }
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListProtectionsResponse = (
  output: any,
  context: __SerdeContext
): ListProtectionsResponse => {
  let contents: any = {
    __type: "ListProtectionsResponse",
    NextToken: undefined,
    Protections: undefined
  };
  if (output.NextToken !== undefined && output.NextToken !== null) {
    contents.NextToken = output.NextToken;
  }
  if (output.Protections !== undefined && output.Protections !== null) {
    contents.Protections = deserializeAws_json1_1Protections(
      output.Protections,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1LockedSubscriptionException = (
  output: any,
  context: __SerdeContext
): LockedSubscriptionException => {
  let contents: any = {
    __type: "LockedSubscriptionException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1LogBucketList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Mitigation = (
  output: any,
  context: __SerdeContext
): Mitigation => {
  let contents: any = {
    __type: "Mitigation",
    MitigationName: undefined
  };
  if (output.MitigationName !== undefined && output.MitigationName !== null) {
    contents.MitigationName = output.MitigationName;
  }
  return contents;
};

const deserializeAws_json1_1MitigationList = (
  output: any,
  context: __SerdeContext
): Array<Mitigation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Mitigation(entry, context)
  );
};

const deserializeAws_json1_1NoAssociatedRoleException = (
  output: any,
  context: __SerdeContext
): NoAssociatedRoleException => {
  let contents: any = {
    __type: "NoAssociatedRoleException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1OptimisticLockException = (
  output: any,
  context: __SerdeContext
): OptimisticLockException => {
  let contents: any = {
    __type: "OptimisticLockException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Protection = (
  output: any,
  context: __SerdeContext
): Protection => {
  let contents: any = {
    __type: "Protection",
    Id: undefined,
    Name: undefined,
    ResourceArn: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  return contents;
};

const deserializeAws_json1_1Protections = (
  output: any,
  context: __SerdeContext
): Array<Protection> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Protection(entry, context)
  );
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  let contents: any = {
    __type: "ResourceAlreadyExistsException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1SubResourceSummary = (
  output: any,
  context: __SerdeContext
): SubResourceSummary => {
  let contents: any = {
    __type: "SubResourceSummary",
    AttackVectors: undefined,
    Counters: undefined,
    Id: undefined,
    Type: undefined
  };
  if (output.AttackVectors !== undefined && output.AttackVectors !== null) {
    contents.AttackVectors = deserializeAws_json1_1SummarizedAttackVectorList(
      output.AttackVectors,
      context
    );
  }
  if (output.Counters !== undefined && output.Counters !== null) {
    contents.Counters = deserializeAws_json1_1SummarizedCounterList(
      output.Counters,
      context
    );
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_json1_1SubResourceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<SubResourceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SubResourceSummary(entry, context)
  );
};

const deserializeAws_json1_1Subscription = (
  output: any,
  context: __SerdeContext
): Subscription => {
  let contents: any = {
    __type: "Subscription",
    AutoRenew: undefined,
    EndTime: undefined,
    Limits: undefined,
    StartTime: undefined,
    TimeCommitmentInSeconds: undefined
  };
  if (output.AutoRenew !== undefined && output.AutoRenew !== null) {
    contents.AutoRenew = output.AutoRenew;
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.Limits !== undefined && output.Limits !== null) {
    contents.Limits = deserializeAws_json1_1Limits(output.Limits, context);
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (
    output.TimeCommitmentInSeconds !== undefined &&
    output.TimeCommitmentInSeconds !== null
  ) {
    contents.TimeCommitmentInSeconds = output.TimeCommitmentInSeconds;
  }
  return contents;
};

const deserializeAws_json1_1SummarizedAttackVector = (
  output: any,
  context: __SerdeContext
): SummarizedAttackVector => {
  let contents: any = {
    __type: "SummarizedAttackVector",
    VectorCounters: undefined,
    VectorType: undefined
  };
  if (output.VectorCounters !== undefined && output.VectorCounters !== null) {
    contents.VectorCounters = deserializeAws_json1_1SummarizedCounterList(
      output.VectorCounters,
      context
    );
  }
  if (output.VectorType !== undefined && output.VectorType !== null) {
    contents.VectorType = output.VectorType;
  }
  return contents;
};

const deserializeAws_json1_1SummarizedAttackVectorList = (
  output: any,
  context: __SerdeContext
): Array<SummarizedAttackVector> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SummarizedAttackVector(entry, context)
  );
};

const deserializeAws_json1_1SummarizedCounter = (
  output: any,
  context: __SerdeContext
): SummarizedCounter => {
  let contents: any = {
    __type: "SummarizedCounter",
    Average: undefined,
    Max: undefined,
    N: undefined,
    Name: undefined,
    Sum: undefined,
    Unit: undefined
  };
  if (output.Average !== undefined && output.Average !== null) {
    contents.Average = output.Average;
  }
  if (output.Max !== undefined && output.Max !== null) {
    contents.Max = output.Max;
  }
  if (output.N !== undefined && output.N !== null) {
    contents.N = output.N;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Sum !== undefined && output.Sum !== null) {
    contents.Sum = output.Sum;
  }
  if (output.Unit !== undefined && output.Unit !== null) {
    contents.Unit = output.Unit;
  }
  return contents;
};

const deserializeAws_json1_1SummarizedCounterList = (
  output: any,
  context: __SerdeContext
): Array<SummarizedCounter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SummarizedCounter(entry, context)
  );
};

const deserializeAws_json1_1TopContributors = (
  output: any,
  context: __SerdeContext
): Array<Contributor> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Contributor(entry, context)
  );
};

const deserializeAws_json1_1UpdateEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateEmergencyContactSettingsResponse => {
  let contents: any = {
    __type: "UpdateEmergencyContactSettingsResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriptionResponse => {
  let contents: any = {
    __type: "UpdateSubscriptionResponse"
  };
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
