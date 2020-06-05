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

export const serializeAws_json1_1AssociateDRTLogBucketCommand = async (
  input: AssociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.AssociateDRTLogBucket"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDRTLogBucketRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1AssociateDRTRoleCommand = async (
  input: AssociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.AssociateDRTRole"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1AssociateDRTRoleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProtectionCommand = async (
  input: CreateProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.CreateProtection"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProtectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSubscriptionCommand = async (
  input: CreateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.CreateSubscription"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProtectionCommand = async (
  input: DeleteProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DeleteProtection"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteProtectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSubscriptionCommand = async (
  input: DeleteSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DeleteSubscription"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAttackCommand = async (
  input: DescribeAttackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DescribeAttack"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeAttackRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDRTAccessCommand = async (
  input: DescribeDRTAccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DescribeDRTAccess"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeDRTAccessRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeEmergencyContactSettingsCommand = async (
  input: DescribeEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DescribeEmergencyContactSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeEmergencyContactSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeProtectionCommand = async (
  input: DescribeProtectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DescribeProtection"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeProtectionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSubscriptionCommand = async (
  input: DescribeSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DescribeSubscription"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DescribeSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDRTLogBucketCommand = async (
  input: DisassociateDRTLogBucketCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DisassociateDRTLogBucket"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDRTLogBucketRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateDRTRoleCommand = async (
  input: DisassociateDRTRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.DisassociateDRTRole"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DisassociateDRTRoleRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSubscriptionStateCommand = async (
  input: GetSubscriptionStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.GetSubscriptionState"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetSubscriptionStateRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAttacksCommand = async (
  input: ListAttacksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.ListAttacks"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAttacksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProtectionsCommand = async (
  input: ListProtectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.ListProtections"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProtectionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateEmergencyContactSettingsCommand = async (
  input: UpdateEmergencyContactSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.UpdateEmergencyContactSettings"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateEmergencyContactSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSubscriptionCommand = async (
  input: UpdateSubscriptionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSShield_20160616.UpdateSubscription"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateSubscriptionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateDRTLogBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> => {
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
};

const deserializeAws_json1_1AssociateDRTLogBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTLogBucketCommandOutput> => {
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
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAssociatedRoleException":
    case "com.amazonaws.shield#NoAssociatedRoleException":
      response = {
        ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1AssociateDRTRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> => {
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
};

const deserializeAws_json1_1AssociateDRTRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateDRTRoleCommandOutput> => {
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
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreateProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> => {
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
};

const deserializeAws_json1_1CreateProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProtectionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidResourceException":
    case "com.amazonaws.shield#InvalidResourceException":
      response = {
        ...(await deserializeAws_json1_1InvalidResourceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitsExceededException":
    case "com.amazonaws.shield#LimitsExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitsExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
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
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1CreateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
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
};

const deserializeAws_json1_1CreateSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSubscriptionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.shield#ResourceAlreadyExistsException":
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

export const deserializeAws_json1_1DeleteProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProtectionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DeleteSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> => {
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
};

const deserializeAws_json1_1DeleteSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSubscriptionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LockedSubscriptionException":
    case "com.amazonaws.shield#LockedSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeAttackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeAttackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAttackCommandOutput> => {
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
    case "AccessDeniedException":
    case "com.amazonaws.shield#AccessDeniedException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
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

export const deserializeAws_json1_1DescribeDRTAccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeDRTAccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDRTAccessCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeEmergencyContactSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeEmergencyContactSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEmergencyContactSettingsCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeProtectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeProtectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DescribeSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> => {
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
};

const deserializeAws_json1_1DescribeSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscriptionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DisassociateDRTLogBucketCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> => {
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
};

const deserializeAws_json1_1DisassociateDRTLogBucketCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTLogBucketCommandOutput> => {
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
    case "AccessDeniedForDependencyException":
    case "com.amazonaws.shield#AccessDeniedForDependencyException":
      response = {
        ...(await deserializeAws_json1_1AccessDeniedForDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NoAssociatedRoleException":
    case "com.amazonaws.shield#NoAssociatedRoleException":
      response = {
        ...(await deserializeAws_json1_1NoAssociatedRoleExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1DisassociateDRTRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> => {
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
};

const deserializeAws_json1_1DisassociateDRTRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateDRTRoleCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1GetSubscriptionStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> => {
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
};

const deserializeAws_json1_1GetSubscriptionStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubscriptionStateCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
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

export const deserializeAws_json1_1ListAttacksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> => {
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
};

const deserializeAws_json1_1ListAttacksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttacksCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.shield#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
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

export const deserializeAws_json1_1ListProtectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> => {
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
};

const deserializeAws_json1_1ListProtectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectionsCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.shield#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_json1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateEmergencyContactSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateEmergencyContactSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEmergencyContactSettingsCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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

export const deserializeAws_json1_1UpdateSubscriptionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
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
};

const deserializeAws_json1_1UpdateSubscriptionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSubscriptionCommandOutput> => {
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
    case "InternalErrorException":
    case "com.amazonaws.shield#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.shield#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LockedSubscriptionException":
    case "com.amazonaws.shield#LockedSubscriptionException":
      response = {
        ...(await deserializeAws_json1_1LockedSubscriptionExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OptimisticLockException":
    case "com.amazonaws.shield#OptimisticLockException":
      response = {
        ...(await deserializeAws_json1_1OptimisticLockExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.shield#ResourceNotFoundException":
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
  return {
    ...(input.LogBucket !== undefined && { LogBucket: input.LogBucket })
  };
};

const serializeAws_json1_1AssociateDRTRoleRequest = (
  input: AssociateDRTRoleRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoleArn !== undefined && { RoleArn: input.RoleArn })
  };
};

const serializeAws_json1_1CreateProtectionRequest = (
  input: CreateProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1CreateSubscriptionRequest = (
  input: CreateSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DeleteProtectionRequest = (
  input: DeleteProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProtectionId !== undefined && {
      ProtectionId: input.ProtectionId
    })
  };
};

const serializeAws_json1_1DeleteSubscriptionRequest = (
  input: DeleteSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeAttackRequest = (
  input: DescribeAttackRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttackId !== undefined && { AttackId: input.AttackId })
  };
};

const serializeAws_json1_1DescribeDRTAccessRequest = (
  input: DescribeDRTAccessRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeEmergencyContactSettingsRequest = (
  input: DescribeEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DescribeProtectionRequest = (
  input: DescribeProtectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ProtectionId !== undefined && {
      ProtectionId: input.ProtectionId
    }),
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn })
  };
};

const serializeAws_json1_1DescribeSubscriptionRequest = (
  input: DescribeSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DisassociateDRTLogBucketRequest = (
  input: DisassociateDRTLogBucketRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogBucket !== undefined && { LogBucket: input.LogBucket })
  };
};

const serializeAws_json1_1DisassociateDRTRoleRequest = (
  input: DisassociateDRTRoleRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1EmergencyContact = (
  input: EmergencyContact,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmailAddress !== undefined && {
      EmailAddress: input.EmailAddress
    })
  };
};

const serializeAws_json1_1EmergencyContactList = (
  input: EmergencyContact[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_json1_1EmergencyContact(entry, context)
  );
};

const serializeAws_json1_1GetSubscriptionStateRequest = (
  input: GetSubscriptionStateRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1ListAttacksRequest = (
  input: ListAttacksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndTime !== undefined && {
      EndTime: serializeAws_json1_1TimeRange(input.EndTime, context)
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.ResourceArns !== undefined && {
      ResourceArns: serializeAws_json1_1ResourceArnFilterList(
        input.ResourceArns,
        context
      )
    }),
    ...(input.StartTime !== undefined && {
      StartTime: serializeAws_json1_1TimeRange(input.StartTime, context)
    })
  };
};

const serializeAws_json1_1ListProtectionsRequest = (
  input: ListProtectionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  };
};

const serializeAws_json1_1ResourceArnFilterList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_1TimeRange = (
  input: TimeRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromInclusive !== undefined && {
      FromInclusive: Math.round(input.FromInclusive.getTime() / 1000)
    }),
    ...(input.ToExclusive !== undefined && {
      ToExclusive: Math.round(input.ToExclusive.getTime() / 1000)
    })
  };
};

const serializeAws_json1_1UpdateEmergencyContactSettingsRequest = (
  input: UpdateEmergencyContactSettingsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmergencyContactList !== undefined && {
      EmergencyContactList: serializeAws_json1_1EmergencyContactList(
        input.EmergencyContactList,
        context
      )
    })
  };
};

const serializeAws_json1_1UpdateSubscriptionRequest = (
  input: UpdateSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoRenew !== undefined && { AutoRenew: input.AutoRenew })
  };
};

const deserializeAws_json1_1AccessDeniedException = (
  output: any,
  context: __SerdeContext
): AccessDeniedException => {
  return {
    __type: "AccessDeniedException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1AccessDeniedForDependencyException = (
  output: any,
  context: __SerdeContext
): AccessDeniedForDependencyException => {
  return {
    __type: "AccessDeniedForDependencyException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1AssociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): AssociateDRTLogBucketResponse => {
  return {
    __type: "AssociateDRTLogBucketResponse"
  } as any;
};

const deserializeAws_json1_1AssociateDRTRoleResponse = (
  output: any,
  context: __SerdeContext
): AssociateDRTRoleResponse => {
  return {
    __type: "AssociateDRTRoleResponse"
  } as any;
};

const deserializeAws_json1_1AttackDetail = (
  output: any,
  context: __SerdeContext
): AttackDetail => {
  return {
    __type: "AttackDetail",
    AttackCounters:
      output.AttackCounters !== undefined && output.AttackCounters !== null
        ? deserializeAws_json1_1SummarizedCounterList(
            output.AttackCounters,
            context
          )
        : undefined,
    AttackId:
      output.AttackId !== undefined && output.AttackId !== null
        ? output.AttackId
        : undefined,
    AttackProperties:
      output.AttackProperties !== undefined && output.AttackProperties !== null
        ? deserializeAws_json1_1AttackProperties(
            output.AttackProperties,
            context
          )
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    Mitigations:
      output.Mitigations !== undefined && output.Mitigations !== null
        ? deserializeAws_json1_1MitigationList(output.Mitigations, context)
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    SubResources:
      output.SubResources !== undefined && output.SubResources !== null
        ? deserializeAws_json1_1SubResourceSummaryList(
            output.SubResources,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1AttackProperties = (
  output: any,
  context: __SerdeContext
): AttackProperty[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttackProperty(entry, context)
  );
};

const deserializeAws_json1_1AttackProperty = (
  output: any,
  context: __SerdeContext
): AttackProperty => {
  return {
    __type: "AttackProperty",
    AttackLayer:
      output.AttackLayer !== undefined && output.AttackLayer !== null
        ? output.AttackLayer
        : undefined,
    AttackPropertyIdentifier:
      output.AttackPropertyIdentifier !== undefined &&
      output.AttackPropertyIdentifier !== null
        ? output.AttackPropertyIdentifier
        : undefined,
    TopContributors:
      output.TopContributors !== undefined && output.TopContributors !== null
        ? deserializeAws_json1_1TopContributors(output.TopContributors, context)
        : undefined,
    Total:
      output.Total !== undefined && output.Total !== null
        ? output.Total
        : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1AttackSummaries = (
  output: any,
  context: __SerdeContext
): AttackSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttackSummary(entry, context)
  );
};

const deserializeAws_json1_1AttackSummary = (
  output: any,
  context: __SerdeContext
): AttackSummary => {
  return {
    __type: "AttackSummary",
    AttackId:
      output.AttackId !== undefined && output.AttackId !== null
        ? output.AttackId
        : undefined,
    AttackVectors:
      output.AttackVectors !== undefined && output.AttackVectors !== null
        ? deserializeAws_json1_1AttackVectorDescriptionList(
            output.AttackVectors,
            context
          )
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined
  } as any;
};

const deserializeAws_json1_1AttackVectorDescription = (
  output: any,
  context: __SerdeContext
): AttackVectorDescription => {
  return {
    __type: "AttackVectorDescription",
    VectorType:
      output.VectorType !== undefined && output.VectorType !== null
        ? output.VectorType
        : undefined
  } as any;
};

const deserializeAws_json1_1AttackVectorDescriptionList = (
  output: any,
  context: __SerdeContext
): AttackVectorDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1AttackVectorDescription(entry, context)
  );
};

const deserializeAws_json1_1Contributor = (
  output: any,
  context: __SerdeContext
): Contributor => {
  return {
    __type: "Contributor",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateProtectionResponse = (
  output: any,
  context: __SerdeContext
): CreateProtectionResponse => {
  return {
    __type: "CreateProtectionResponse",
    ProtectionId:
      output.ProtectionId !== undefined && output.ProtectionId !== null
        ? output.ProtectionId
        : undefined
  } as any;
};

const deserializeAws_json1_1CreateSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): CreateSubscriptionResponse => {
  return {
    __type: "CreateSubscriptionResponse"
  } as any;
};

const deserializeAws_json1_1DeleteProtectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteProtectionResponse => {
  return {
    __type: "DeleteProtectionResponse"
  } as any;
};

const deserializeAws_json1_1DeleteSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DeleteSubscriptionResponse => {
  return {
    __type: "DeleteSubscriptionResponse"
  } as any;
};

const deserializeAws_json1_1DescribeAttackResponse = (
  output: any,
  context: __SerdeContext
): DescribeAttackResponse => {
  return {
    __type: "DescribeAttackResponse",
    Attack:
      output.Attack !== undefined && output.Attack !== null
        ? deserializeAws_json1_1AttackDetail(output.Attack, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeDRTAccessResponse = (
  output: any,
  context: __SerdeContext
): DescribeDRTAccessResponse => {
  return {
    __type: "DescribeDRTAccessResponse",
    LogBucketList:
      output.LogBucketList !== undefined && output.LogBucketList !== null
        ? deserializeAws_json1_1LogBucketList(output.LogBucketList, context)
        : undefined,
    RoleArn:
      output.RoleArn !== undefined && output.RoleArn !== null
        ? output.RoleArn
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): DescribeEmergencyContactSettingsResponse => {
  return {
    __type: "DescribeEmergencyContactSettingsResponse",
    EmergencyContactList:
      output.EmergencyContactList !== undefined &&
      output.EmergencyContactList !== null
        ? deserializeAws_json1_1EmergencyContactList(
            output.EmergencyContactList,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeProtectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeProtectionResponse => {
  return {
    __type: "DescribeProtectionResponse",
    Protection:
      output.Protection !== undefined && output.Protection !== null
        ? deserializeAws_json1_1Protection(output.Protection, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DescribeSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): DescribeSubscriptionResponse => {
  return {
    __type: "DescribeSubscriptionResponse",
    Subscription:
      output.Subscription !== undefined && output.Subscription !== null
        ? deserializeAws_json1_1Subscription(output.Subscription, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1DisassociateDRTLogBucketResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTLogBucketResponse => {
  return {
    __type: "DisassociateDRTLogBucketResponse"
  } as any;
};

const deserializeAws_json1_1DisassociateDRTRoleResponse = (
  output: any,
  context: __SerdeContext
): DisassociateDRTRoleResponse => {
  return {
    __type: "DisassociateDRTRoleResponse"
  } as any;
};

const deserializeAws_json1_1EmergencyContact = (
  output: any,
  context: __SerdeContext
): EmergencyContact => {
  return {
    __type: "EmergencyContact",
    EmailAddress:
      output.EmailAddress !== undefined && output.EmailAddress !== null
        ? output.EmailAddress
        : undefined
  } as any;
};

const deserializeAws_json1_1EmergencyContactList = (
  output: any,
  context: __SerdeContext
): EmergencyContact[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1EmergencyContact(entry, context)
  );
};

const deserializeAws_json1_1GetSubscriptionStateResponse = (
  output: any,
  context: __SerdeContext
): GetSubscriptionStateResponse => {
  return {
    __type: "GetSubscriptionStateResponse",
    SubscriptionState:
      output.SubscriptionState !== undefined &&
      output.SubscriptionState !== null
        ? output.SubscriptionState
        : undefined
  } as any;
};

const deserializeAws_json1_1InternalErrorException = (
  output: any,
  context: __SerdeContext
): InternalErrorException => {
  return {
    __type: "InternalErrorException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    __type: "InvalidOperationException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidPaginationTokenException = (
  output: any,
  context: __SerdeContext
): InvalidPaginationTokenException => {
  return {
    __type: "InvalidPaginationTokenException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1InvalidResourceException = (
  output: any,
  context: __SerdeContext
): InvalidResourceException => {
  return {
    __type: "InvalidResourceException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Limit = (
  output: any,
  context: __SerdeContext
): Limit => {
  return {
    __type: "Limit",
    Max:
      output.Max !== undefined && output.Max !== null ? output.Max : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1Limits = (
  output: any,
  context: __SerdeContext
): Limit[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Limit(entry, context)
  );
};

const deserializeAws_json1_1LimitsExceededException = (
  output: any,
  context: __SerdeContext
): LimitsExceededException => {
  return {
    __type: "LimitsExceededException",
    Limit:
      output.Limit !== undefined && output.Limit !== null
        ? output.Limit
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined,
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1ListAttacksResponse = (
  output: any,
  context: __SerdeContext
): ListAttacksResponse => {
  return {
    __type: "ListAttacksResponse",
    AttackSummaries:
      output.AttackSummaries !== undefined && output.AttackSummaries !== null
        ? deserializeAws_json1_1AttackSummaries(output.AttackSummaries, context)
        : undefined,
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined
  } as any;
};

const deserializeAws_json1_1ListProtectionsResponse = (
  output: any,
  context: __SerdeContext
): ListProtectionsResponse => {
  return {
    __type: "ListProtectionsResponse",
    NextToken:
      output.NextToken !== undefined && output.NextToken !== null
        ? output.NextToken
        : undefined,
    Protections:
      output.Protections !== undefined && output.Protections !== null
        ? deserializeAws_json1_1Protections(output.Protections, context)
        : undefined
  } as any;
};

const deserializeAws_json1_1LockedSubscriptionException = (
  output: any,
  context: __SerdeContext
): LockedSubscriptionException => {
  return {
    __type: "LockedSubscriptionException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1LogBucketList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Mitigation = (
  output: any,
  context: __SerdeContext
): Mitigation => {
  return {
    __type: "Mitigation",
    MitigationName:
      output.MitigationName !== undefined && output.MitigationName !== null
        ? output.MitigationName
        : undefined
  } as any;
};

const deserializeAws_json1_1MitigationList = (
  output: any,
  context: __SerdeContext
): Mitigation[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Mitigation(entry, context)
  );
};

const deserializeAws_json1_1NoAssociatedRoleException = (
  output: any,
  context: __SerdeContext
): NoAssociatedRoleException => {
  return {
    __type: "NoAssociatedRoleException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1OptimisticLockException = (
  output: any,
  context: __SerdeContext
): OptimisticLockException => {
  return {
    __type: "OptimisticLockException",
    message:
      output.message !== undefined && output.message !== null
        ? output.message
        : undefined
  } as any;
};

const deserializeAws_json1_1Protection = (
  output: any,
  context: __SerdeContext
): Protection => {
  return {
    __type: "Protection",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    ResourceArn:
      output.ResourceArn !== undefined && output.ResourceArn !== null
        ? output.ResourceArn
        : undefined
  } as any;
};

const deserializeAws_json1_1Protections = (
  output: any,
  context: __SerdeContext
): Protection[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Protection(entry, context)
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

const deserializeAws_json1_1SubResourceSummary = (
  output: any,
  context: __SerdeContext
): SubResourceSummary => {
  return {
    __type: "SubResourceSummary",
    AttackVectors:
      output.AttackVectors !== undefined && output.AttackVectors !== null
        ? deserializeAws_json1_1SummarizedAttackVectorList(
            output.AttackVectors,
            context
          )
        : undefined,
    Counters:
      output.Counters !== undefined && output.Counters !== null
        ? deserializeAws_json1_1SummarizedCounterList(output.Counters, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_json1_1SubResourceSummaryList = (
  output: any,
  context: __SerdeContext
): SubResourceSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SubResourceSummary(entry, context)
  );
};

const deserializeAws_json1_1Subscription = (
  output: any,
  context: __SerdeContext
): Subscription => {
  return {
    __type: "Subscription",
    AutoRenew:
      output.AutoRenew !== undefined && output.AutoRenew !== null
        ? output.AutoRenew
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    Limits:
      output.Limits !== undefined && output.Limits !== null
        ? deserializeAws_json1_1Limits(output.Limits, context)
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    TimeCommitmentInSeconds:
      output.TimeCommitmentInSeconds !== undefined &&
      output.TimeCommitmentInSeconds !== null
        ? output.TimeCommitmentInSeconds
        : undefined
  } as any;
};

const deserializeAws_json1_1SummarizedAttackVector = (
  output: any,
  context: __SerdeContext
): SummarizedAttackVector => {
  return {
    __type: "SummarizedAttackVector",
    VectorCounters:
      output.VectorCounters !== undefined && output.VectorCounters !== null
        ? deserializeAws_json1_1SummarizedCounterList(
            output.VectorCounters,
            context
          )
        : undefined,
    VectorType:
      output.VectorType !== undefined && output.VectorType !== null
        ? output.VectorType
        : undefined
  } as any;
};

const deserializeAws_json1_1SummarizedAttackVectorList = (
  output: any,
  context: __SerdeContext
): SummarizedAttackVector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SummarizedAttackVector(entry, context)
  );
};

const deserializeAws_json1_1SummarizedCounter = (
  output: any,
  context: __SerdeContext
): SummarizedCounter => {
  return {
    __type: "SummarizedCounter",
    Average:
      output.Average !== undefined && output.Average !== null
        ? output.Average
        : undefined,
    Max:
      output.Max !== undefined && output.Max !== null ? output.Max : undefined,
    N: output.N !== undefined && output.N !== null ? output.N : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Sum:
      output.Sum !== undefined && output.Sum !== null ? output.Sum : undefined,
    Unit:
      output.Unit !== undefined && output.Unit !== null
        ? output.Unit
        : undefined
  } as any;
};

const deserializeAws_json1_1SummarizedCounterList = (
  output: any,
  context: __SerdeContext
): SummarizedCounter[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1SummarizedCounter(entry, context)
  );
};

const deserializeAws_json1_1TopContributors = (
  output: any,
  context: __SerdeContext
): Contributor[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Contributor(entry, context)
  );
};

const deserializeAws_json1_1UpdateEmergencyContactSettingsResponse = (
  output: any,
  context: __SerdeContext
): UpdateEmergencyContactSettingsResponse => {
  return {
    __type: "UpdateEmergencyContactSettingsResponse"
  } as any;
};

const deserializeAws_json1_1UpdateSubscriptionResponse = (
  output: any,
  context: __SerdeContext
): UpdateSubscriptionResponse => {
  return {
    __type: "UpdateSubscriptionResponse"
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
