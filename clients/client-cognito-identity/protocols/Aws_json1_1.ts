import { CreateIdentityPoolCommandInput, CreateIdentityPoolCommandOutput } from "../commands/CreateIdentityPoolCommand";
import { DeleteIdentitiesCommandInput, DeleteIdentitiesCommandOutput } from "../commands/DeleteIdentitiesCommand";
import { DeleteIdentityPoolCommandInput, DeleteIdentityPoolCommandOutput } from "../commands/DeleteIdentityPoolCommand";
import { DescribeIdentityCommandInput, DescribeIdentityCommandOutput } from "../commands/DescribeIdentityCommand";
import {
  DescribeIdentityPoolCommandInput,
  DescribeIdentityPoolCommandOutput,
} from "../commands/DescribeIdentityPoolCommand";
import {
  GetCredentialsForIdentityCommandInput,
  GetCredentialsForIdentityCommandOutput,
} from "../commands/GetCredentialsForIdentityCommand";
import { GetIdCommandInput, GetIdCommandOutput } from "../commands/GetIdCommand";
import {
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
} from "../commands/GetIdentityPoolRolesCommand";
import { GetOpenIdTokenCommandInput, GetOpenIdTokenCommandOutput } from "../commands/GetOpenIdTokenCommand";
import {
  GetOpenIdTokenForDeveloperIdentityCommandInput,
  GetOpenIdTokenForDeveloperIdentityCommandOutput,
} from "../commands/GetOpenIdTokenForDeveloperIdentityCommand";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput } from "../commands/ListIdentitiesCommand";
import { ListIdentityPoolsCommandInput, ListIdentityPoolsCommandOutput } from "../commands/ListIdentityPoolsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  LookupDeveloperIdentityCommandInput,
  LookupDeveloperIdentityCommandOutput,
} from "../commands/LookupDeveloperIdentityCommand";
import {
  MergeDeveloperIdentitiesCommandInput,
  MergeDeveloperIdentitiesCommandOutput,
} from "../commands/MergeDeveloperIdentitiesCommand";
import {
  SetIdentityPoolRolesCommandInput,
  SetIdentityPoolRolesCommandOutput,
} from "../commands/SetIdentityPoolRolesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
} from "../commands/UnlinkDeveloperIdentityCommand";
import { UnlinkIdentityCommandInput, UnlinkIdentityCommandOutput } from "../commands/UnlinkIdentityCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput } from "../commands/UpdateIdentityPoolCommand";
import {
  CognitoIdentityProvider,
  ConcurrentModificationException,
  CreateIdentityPoolInput,
  Credentials,
  DeleteIdentitiesInput,
  DeleteIdentitiesResponse,
  DeleteIdentityPoolInput,
  DescribeIdentityInput,
  DescribeIdentityPoolInput,
  DeveloperUserAlreadyRegisteredException,
  ExternalServiceException,
  GetCredentialsForIdentityInput,
  GetCredentialsForIdentityResponse,
  GetIdInput,
  GetIdResponse,
  GetIdentityPoolRolesInput,
  GetIdentityPoolRolesResponse,
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
  GetOpenIdTokenInput,
  GetOpenIdTokenResponse,
  IdentityDescription,
  IdentityPool,
  IdentityPoolShortDescription,
  InternalErrorException,
  InvalidIdentityPoolConfigurationException,
  InvalidParameterException,
  LimitExceededException,
  ListIdentitiesInput,
  ListIdentitiesResponse,
  ListIdentityPoolsInput,
  ListIdentityPoolsResponse,
  ListTagsForResourceInput,
  ListTagsForResourceResponse,
  LookupDeveloperIdentityInput,
  LookupDeveloperIdentityResponse,
  MappingRule,
  MergeDeveloperIdentitiesInput,
  MergeDeveloperIdentitiesResponse,
  NotAuthorizedException,
  ResourceConflictException,
  ResourceNotFoundException,
  RoleMapping,
  RulesConfigurationType,
  SetIdentityPoolRolesInput,
  TagResourceInput,
  TagResourceResponse,
  TooManyRequestsException,
  UnlinkDeveloperIdentityInput,
  UnlinkIdentityInput,
  UnprocessedIdentityId,
  UntagResourceInput,
  UntagResourceResponse,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateIdentityPoolCommand = async (
  input: CreateIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.CreateIdentityPool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateIdentityPoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIdentitiesCommand = async (
  input: DeleteIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.DeleteIdentities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIdentitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteIdentityPoolCommand = async (
  input: DeleteIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.DeleteIdentityPool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteIdentityPoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeIdentityCommand = async (
  input: DescribeIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.DescribeIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeIdentityPoolCommand = async (
  input: DescribeIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.DescribeIdentityPool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeIdentityPoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetCredentialsForIdentityCommand = async (
  input: GetCredentialsForIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.GetCredentialsForIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetCredentialsForIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetIdCommand = async (
  input: GetIdCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.GetId",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetIdInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetIdentityPoolRolesCommand = async (
  input: GetIdentityPoolRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.GetIdentityPoolRoles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetIdentityPoolRolesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOpenIdTokenCommand = async (
  input: GetOpenIdTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.GetOpenIdToken",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = async (
  input: GetOpenIdTokenForDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIdentitiesCommand = async (
  input: ListIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.ListIdentities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIdentitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListIdentityPoolsCommand = async (
  input: ListIdentityPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.ListIdentityPools",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListIdentityPoolsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1LookupDeveloperIdentityCommand = async (
  input: LookupDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.LookupDeveloperIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1LookupDeveloperIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1MergeDeveloperIdentitiesCommand = async (
  input: MergeDeveloperIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.MergeDeveloperIdentities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1MergeDeveloperIdentitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1SetIdentityPoolRolesCommand = async (
  input: SetIdentityPoolRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.SetIdentityPoolRoles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1SetIdentityPoolRolesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnlinkDeveloperIdentityCommand = async (
  input: UnlinkDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.UnlinkDeveloperIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnlinkDeveloperIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UnlinkIdentityCommand = async (
  input: UnlinkIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.UnlinkIdentity",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UnlinkIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateIdentityPoolCommand = async (
  input: UpdateIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.1",
    "X-Amz-Target": "AWSCognitoIdentityService.UpdateIdentityPool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1IdentityPool(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityPoolCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateIdentityPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityPool(data, context);
  const response: CreateIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityPool",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteIdentitiesResponse(data, context);
  const response: DeleteIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteIdentitiesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DeleteIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPoolCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteIdentityPoolCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityDescription(data, context);
  const response: DescribeIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityDescription",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1DescribeIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DescribeIdentityPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityPool(data, context);
  const response: DescribeIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityPool",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetCredentialsForIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsForIdentityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetCredentialsForIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetCredentialsForIdentityResponse(data, context);
  const response: GetCredentialsForIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCredentialsForIdentityResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetCredentialsForIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsForIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
      response = {
        ...(await deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetIdCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetIdResponse(data, context);
  const response: GetIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIdResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetIdCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetIdentityPoolRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolRolesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetIdentityPoolRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetIdentityPoolRolesResponse(data, context);
  const response: GetIdentityPoolRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIdentityPoolRolesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetIdentityPoolRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetOpenIdTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOpenIdTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpenIdTokenResponse(data, context);
  const response: GetOpenIdTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOpenIdTokenResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOpenIdTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse(data, context);
  const response: GetOpenIdTokenForDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOpenIdTokenForDeveloperIdentityResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
      response = {
        ...(await deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIdentitiesResponse(data, context);
  const response: ListIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIdentitiesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1ListIdentityPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListIdentityPoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListIdentityPoolsResponse(data, context);
  const response: ListIdentityPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListIdentityPoolsResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListIdentityPoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1LookupDeveloperIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupDeveloperIdentityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1LookupDeveloperIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LookupDeveloperIdentityResponse(data, context);
  const response: LookupDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LookupDeveloperIdentityResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1LookupDeveloperIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupDeveloperIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1MergeDeveloperIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeDeveloperIdentitiesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1MergeDeveloperIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1MergeDeveloperIdentitiesResponse(data, context);
  const response: MergeDeveloperIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "MergeDeveloperIdentitiesResponse",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1MergeDeveloperIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeDeveloperIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1SetIdentityPoolRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolRolesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1SetIdentityPoolRolesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetIdentityPoolRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1SetIdentityPoolRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UnlinkDeveloperIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkDeveloperIdentityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnlinkDeveloperIdentityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnlinkDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnlinkDeveloperIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkDeveloperIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UnlinkIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkIdentityCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UnlinkIdentityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnlinkIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UnlinkIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      response = {
        ...(await deserializeAws_json1_1ExternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_1UpdateIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPoolCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateIdentityPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1IdentityPool(data, context);
  const response: UpdateIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "IdentityPool",
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode = errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_json1_1ConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      response = {
        ...(await deserializeAws_json1_1InternalErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      response = {
        ...(await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      response = {
        ...(await deserializeAws_json1_1NotAuthorizedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      response = {
        ...(await deserializeAws_json1_1ResourceConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      response = {
        ...(await deserializeAws_json1_1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
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
  const deserialized: any = deserializeAws_json1_1ConcurrentModificationException(body, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeveloperUserAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DeveloperUserAlreadyRegisteredException(body, context);
  const contents: DeveloperUserAlreadyRegisteredException = {
    name: "DeveloperUserAlreadyRegisteredException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ExternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ExternalServiceException(body, context);
  const contents: ExternalServiceException = {
    name: "ExternalServiceException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalErrorException(body, context);
  const contents: InternalErrorException = {
    name: "InternalErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdentityPoolConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidIdentityPoolConfigurationException(body, context);
  const contents: InvalidIdentityPoolConfigurationException = {
    name: "InvalidIdentityPoolConfigurationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotAuthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotAuthorizedException(body, context);
  const contents: NotAuthorizedException = {
    name: "NotAuthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceConflictException(body, context);
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyRequestsException(body, context);
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1CognitoIdentityProvider = (input: CognitoIdentityProvider, context: __SerdeContext): any => {
  return {
    ...(input.ClientId !== undefined && { ClientId: input.ClientId }),
    ...(input.ProviderName !== undefined && { ProviderName: input.ProviderName }),
    ...(input.ServerSideTokenCheck !== undefined && { ServerSideTokenCheck: input.ServerSideTokenCheck }),
  };
};

const serializeAws_json1_1CognitoIdentityProviderList = (
  input: CognitoIdentityProvider[],
  context: __SerdeContext
): any => {
  return input.map((entry) => serializeAws_json1_1CognitoIdentityProvider(entry, context));
};

const serializeAws_json1_1CreateIdentityPoolInput = (input: CreateIdentityPoolInput, context: __SerdeContext): any => {
  return {
    ...(input.AllowClassicFlow !== undefined && { AllowClassicFlow: input.AllowClassicFlow }),
    ...(input.AllowUnauthenticatedIdentities !== undefined && {
      AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
    }),
    ...(input.CognitoIdentityProviders !== undefined && {
      CognitoIdentityProviders: serializeAws_json1_1CognitoIdentityProviderList(
        input.CognitoIdentityProviders,
        context
      ),
    }),
    ...(input.DeveloperProviderName !== undefined && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.IdentityPoolName !== undefined && { IdentityPoolName: input.IdentityPoolName }),
    ...(input.IdentityPoolTags !== undefined && {
      IdentityPoolTags: serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context),
    }),
    ...(input.OpenIdConnectProviderARNs !== undefined && {
      OpenIdConnectProviderARNs: serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context),
    }),
    ...(input.SamlProviderARNs !== undefined && {
      SamlProviderARNs: serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context),
    }),
    ...(input.SupportedLoginProviders !== undefined && {
      SupportedLoginProviders: serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context),
    }),
  };
};

const serializeAws_json1_1DeleteIdentitiesInput = (input: DeleteIdentitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityIdsToDelete !== undefined && {
      IdentityIdsToDelete: serializeAws_json1_1IdentityIdList(input.IdentityIdsToDelete, context),
    }),
  };
};

const serializeAws_json1_1DeleteIdentityPoolInput = (input: DeleteIdentityPoolInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
  };
};

const serializeAws_json1_1DescribeIdentityInput = (input: DescribeIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
  };
};

const serializeAws_json1_1DescribeIdentityPoolInput = (
  input: DescribeIdentityPoolInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
  };
};

const serializeAws_json1_1GetCredentialsForIdentityInput = (
  input: GetCredentialsForIdentityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomRoleArn !== undefined && { CustomRoleArn: input.CustomRoleArn }),
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
    ...(input.Logins !== undefined && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
  };
};

const serializeAws_json1_1GetIdentityPoolRolesInput = (
  input: GetIdentityPoolRolesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
  };
};

const serializeAws_json1_1GetIdInput = (input: GetIdInput, context: __SerdeContext): any => {
  return {
    ...(input.AccountId !== undefined && { AccountId: input.AccountId }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.Logins !== undefined && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
  };
};

const serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput = (
  input: GetOpenIdTokenForDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.Logins !== undefined && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    ...(input.TokenDuration !== undefined && { TokenDuration: input.TokenDuration }),
  };
};

const serializeAws_json1_1GetOpenIdTokenInput = (input: GetOpenIdTokenInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
    ...(input.Logins !== undefined && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
  };
};

const serializeAws_json1_1IdentityIdList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1IdentityPool = (input: IdentityPool, context: __SerdeContext): any => {
  return {
    ...(input.AllowClassicFlow !== undefined && { AllowClassicFlow: input.AllowClassicFlow }),
    ...(input.AllowUnauthenticatedIdentities !== undefined && {
      AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
    }),
    ...(input.CognitoIdentityProviders !== undefined && {
      CognitoIdentityProviders: serializeAws_json1_1CognitoIdentityProviderList(
        input.CognitoIdentityProviders,
        context
      ),
    }),
    ...(input.DeveloperProviderName !== undefined && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.IdentityPoolName !== undefined && { IdentityPoolName: input.IdentityPoolName }),
    ...(input.IdentityPoolTags !== undefined && {
      IdentityPoolTags: serializeAws_json1_1IdentityPoolTagsType(input.IdentityPoolTags, context),
    }),
    ...(input.OpenIdConnectProviderARNs !== undefined && {
      OpenIdConnectProviderARNs: serializeAws_json1_1OIDCProviderList(input.OpenIdConnectProviderARNs, context),
    }),
    ...(input.SamlProviderARNs !== undefined && {
      SamlProviderARNs: serializeAws_json1_1SAMLProviderList(input.SamlProviderARNs, context),
    }),
    ...(input.SupportedLoginProviders !== undefined && {
      SupportedLoginProviders: serializeAws_json1_1IdentityProviders(input.SupportedLoginProviders, context),
    }),
  };
};

const serializeAws_json1_1IdentityPoolTagsListType = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1IdentityPoolTagsType = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_json1_1IdentityProviders = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_json1_1ListIdentitiesInput = (input: ListIdentitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.HideDisabled !== undefined && { HideDisabled: input.HideDisabled }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListIdentityPoolsInput = (input: ListIdentityPoolsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1LoginsList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1LoginsMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_json1_1LookupDeveloperIdentityInput = (
  input: LookupDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeveloperUserIdentifier !== undefined && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1MappingRule = (input: MappingRule, context: __SerdeContext): any => {
  return {
    ...(input.Claim !== undefined && { Claim: input.Claim }),
    ...(input.MatchType !== undefined && { MatchType: input.MatchType }),
    ...(input.RoleARN !== undefined && { RoleARN: input.RoleARN }),
    ...(input.Value !== undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_1MappingRulesList = (input: MappingRule[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_json1_1MappingRule(entry, context));
};

const serializeAws_json1_1MergeDeveloperIdentitiesInput = (
  input: MergeDeveloperIdentitiesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationUserIdentifier !== undefined && {
      DestinationUserIdentifier: input.DestinationUserIdentifier,
    }),
    ...(input.DeveloperProviderName !== undefined && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.SourceUserIdentifier !== undefined && { SourceUserIdentifier: input.SourceUserIdentifier }),
  };
};

const serializeAws_json1_1OIDCProviderList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1RoleMapping = (input: RoleMapping, context: __SerdeContext): any => {
  return {
    ...(input.AmbiguousRoleResolution !== undefined && { AmbiguousRoleResolution: input.AmbiguousRoleResolution }),
    ...(input.RulesConfiguration !== undefined && {
      RulesConfiguration: serializeAws_json1_1RulesConfigurationType(input.RulesConfiguration, context),
    }),
    ...(input.Type !== undefined && { Type: input.Type }),
  };
};

const serializeAws_json1_1RoleMappingMap = (input: { [key: string]: RoleMapping }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: RoleMapping }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: serializeAws_json1_1RoleMapping(value, context),
    }),
    {}
  );
};

const serializeAws_json1_1RolesMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_json1_1RulesConfigurationType = (input: RulesConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.Rules !== undefined && { Rules: serializeAws_json1_1MappingRulesList(input.Rules, context) }),
  };
};

const serializeAws_json1_1SAMLProviderList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_json1_1SetIdentityPoolRolesInput = (
  input: SetIdentityPoolRolesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.RoleMappings !== undefined && {
      RoleMappings: serializeAws_json1_1RoleMappingMap(input.RoleMappings, context),
    }),
    ...(input.Roles !== undefined && { Roles: serializeAws_json1_1RolesMap(input.Roles, context) }),
  };
};

const serializeAws_json1_1TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && { Tags: serializeAws_json1_1IdentityPoolTagsType(input.Tags, context) }),
  };
};

const serializeAws_json1_1UnlinkDeveloperIdentityInput = (
  input: UnlinkDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeveloperProviderName !== undefined && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.DeveloperUserIdentifier !== undefined && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
    ...(input.IdentityPoolId !== undefined && { IdentityPoolId: input.IdentityPoolId }),
  };
};

const serializeAws_json1_1UnlinkIdentityInput = (input: UnlinkIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId !== undefined && { IdentityId: input.IdentityId }),
    ...(input.Logins !== undefined && { Logins: serializeAws_json1_1LoginsMap(input.Logins, context) }),
    ...(input.LoginsToRemove !== undefined && {
      LoginsToRemove: serializeAws_json1_1LoginsList(input.LoginsToRemove, context),
    }),
  };
};

const serializeAws_json1_1UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_json1_1IdentityPoolTagsListType(input.TagKeys, context),
    }),
  };
};

const deserializeAws_json1_1CognitoIdentityProvider = (
  output: any,
  context: __SerdeContext
): CognitoIdentityProvider => {
  return {
    __type: "CognitoIdentityProvider",
    ClientId: output.ClientId !== undefined && output.ClientId !== null ? output.ClientId : undefined,
    ProviderName: output.ProviderName !== undefined && output.ProviderName !== null ? output.ProviderName : undefined,
    ServerSideTokenCheck:
      output.ServerSideTokenCheck !== undefined && output.ServerSideTokenCheck !== null
        ? output.ServerSideTokenCheck
        : undefined,
  } as any;
};

const deserializeAws_json1_1CognitoIdentityProviderList = (
  output: any,
  context: __SerdeContext
): CognitoIdentityProvider[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1CognitoIdentityProvider(entry, context));
};

const deserializeAws_json1_1ConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  return {
    __type: "ConcurrentModificationException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    __type: "Credentials",
    AccessKeyId: output.AccessKeyId !== undefined && output.AccessKeyId !== null ? output.AccessKeyId : undefined,
    Expiration:
      output.Expiration !== undefined && output.Expiration !== null
        ? new Date(Math.round(output.Expiration * 1000))
        : undefined,
    SecretKey: output.SecretKey !== undefined && output.SecretKey !== null ? output.SecretKey : undefined,
    SessionToken: output.SessionToken !== undefined && output.SessionToken !== null ? output.SessionToken : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteIdentitiesResponse = (
  output: any,
  context: __SerdeContext
): DeleteIdentitiesResponse => {
  return {
    __type: "DeleteIdentitiesResponse",
    UnprocessedIdentityIds:
      output.UnprocessedIdentityIds !== undefined && output.UnprocessedIdentityIds !== null
        ? deserializeAws_json1_1UnprocessedIdentityIdList(output.UnprocessedIdentityIds, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeveloperUserAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): DeveloperUserAlreadyRegisteredException => {
  return {
    __type: "DeveloperUserAlreadyRegisteredException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1DeveloperUserIdentifierList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ExternalServiceException = (
  output: any,
  context: __SerdeContext
): ExternalServiceException => {
  return {
    __type: "ExternalServiceException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1GetCredentialsForIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetCredentialsForIdentityResponse => {
  return {
    __type: "GetCredentialsForIdentityResponse",
    Credentials:
      output.Credentials !== undefined && output.Credentials !== null
        ? deserializeAws_json1_1Credentials(output.Credentials, context)
        : undefined,
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
  } as any;
};

const deserializeAws_json1_1GetIdentityPoolRolesResponse = (
  output: any,
  context: __SerdeContext
): GetIdentityPoolRolesResponse => {
  return {
    __type: "GetIdentityPoolRolesResponse",
    IdentityPoolId:
      output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
    RoleMappings:
      output.RoleMappings !== undefined && output.RoleMappings !== null
        ? deserializeAws_json1_1RoleMappingMap(output.RoleMappings, context)
        : undefined,
    Roles:
      output.Roles !== undefined && output.Roles !== null
        ? deserializeAws_json1_1RolesMap(output.Roles, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetIdResponse = (output: any, context: __SerdeContext): GetIdResponse => {
  return {
    __type: "GetIdResponse",
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
  } as any;
};

const deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetOpenIdTokenForDeveloperIdentityResponse => {
  return {
    __type: "GetOpenIdTokenForDeveloperIdentityResponse",
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    Token: output.Token !== undefined && output.Token !== null ? output.Token : undefined,
  } as any;
};

const deserializeAws_json1_1GetOpenIdTokenResponse = (output: any, context: __SerdeContext): GetOpenIdTokenResponse => {
  return {
    __type: "GetOpenIdTokenResponse",
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    Token: output.Token !== undefined && output.Token !== null ? output.Token : undefined,
  } as any;
};

const deserializeAws_json1_1IdentitiesList = (output: any, context: __SerdeContext): IdentityDescription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1IdentityDescription(entry, context));
};

const deserializeAws_json1_1IdentityDescription = (output: any, context: __SerdeContext): IdentityDescription => {
  return {
    __type: "IdentityDescription",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    LastModifiedDate:
      output.LastModifiedDate !== undefined && output.LastModifiedDate !== null
        ? new Date(Math.round(output.LastModifiedDate * 1000))
        : undefined,
    Logins:
      output.Logins !== undefined && output.Logins !== null
        ? deserializeAws_json1_1LoginsList(output.Logins, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IdentityPool = (output: any, context: __SerdeContext): IdentityPool => {
  return {
    __type: "IdentityPool",
    AllowClassicFlow:
      output.AllowClassicFlow !== undefined && output.AllowClassicFlow !== null ? output.AllowClassicFlow : undefined,
    AllowUnauthenticatedIdentities:
      output.AllowUnauthenticatedIdentities !== undefined && output.AllowUnauthenticatedIdentities !== null
        ? output.AllowUnauthenticatedIdentities
        : undefined,
    CognitoIdentityProviders:
      output.CognitoIdentityProviders !== undefined && output.CognitoIdentityProviders !== null
        ? deserializeAws_json1_1CognitoIdentityProviderList(output.CognitoIdentityProviders, context)
        : undefined,
    DeveloperProviderName:
      output.DeveloperProviderName !== undefined && output.DeveloperProviderName !== null
        ? output.DeveloperProviderName
        : undefined,
    IdentityPoolId:
      output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
    IdentityPoolName:
      output.IdentityPoolName !== undefined && output.IdentityPoolName !== null ? output.IdentityPoolName : undefined,
    IdentityPoolTags:
      output.IdentityPoolTags !== undefined && output.IdentityPoolTags !== null
        ? deserializeAws_json1_1IdentityPoolTagsType(output.IdentityPoolTags, context)
        : undefined,
    OpenIdConnectProviderARNs:
      output.OpenIdConnectProviderARNs !== undefined && output.OpenIdConnectProviderARNs !== null
        ? deserializeAws_json1_1OIDCProviderList(output.OpenIdConnectProviderARNs, context)
        : undefined,
    SamlProviderARNs:
      output.SamlProviderARNs !== undefined && output.SamlProviderARNs !== null
        ? deserializeAws_json1_1SAMLProviderList(output.SamlProviderARNs, context)
        : undefined,
    SupportedLoginProviders:
      output.SupportedLoginProviders !== undefined && output.SupportedLoginProviders !== null
        ? deserializeAws_json1_1IdentityProviders(output.SupportedLoginProviders, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IdentityPoolShortDescription = (
  output: any,
  context: __SerdeContext
): IdentityPoolShortDescription => {
  return {
    __type: "IdentityPoolShortDescription",
    IdentityPoolId:
      output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
    IdentityPoolName:
      output.IdentityPoolName !== undefined && output.IdentityPoolName !== null ? output.IdentityPoolName : undefined,
  } as any;
};

const deserializeAws_json1_1IdentityPoolsList = (
  output: any,
  context: __SerdeContext
): IdentityPoolShortDescription[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1IdentityPoolShortDescription(entry, context));
};

const deserializeAws_json1_1IdentityPoolTagsType = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1IdentityProviders = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    __type: "InternalErrorException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidIdentityPoolConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidIdentityPoolConfigurationException => {
  return {
    __type: "InvalidIdentityPoolConfigurationException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    __type: "InvalidParameterException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    __type: "LimitExceededException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ListIdentitiesResponse = (output: any, context: __SerdeContext): ListIdentitiesResponse => {
  return {
    __type: "ListIdentitiesResponse",
    Identities:
      output.Identities !== undefined && output.Identities !== null
        ? deserializeAws_json1_1IdentitiesList(output.Identities, context)
        : undefined,
    IdentityPoolId:
      output.IdentityPoolId !== undefined && output.IdentityPoolId !== null ? output.IdentityPoolId : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1ListIdentityPoolsResponse = (
  output: any,
  context: __SerdeContext
): ListIdentityPoolsResponse => {
  return {
    __type: "ListIdentityPoolsResponse",
    IdentityPools:
      output.IdentityPools !== undefined && output.IdentityPools !== null
        ? deserializeAws_json1_1IdentityPoolsList(output.IdentityPools, context)
        : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
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
        ? deserializeAws_json1_1IdentityPoolTagsType(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1LoginsList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1LookupDeveloperIdentityResponse = (
  output: any,
  context: __SerdeContext
): LookupDeveloperIdentityResponse => {
  return {
    __type: "LookupDeveloperIdentityResponse",
    DeveloperUserIdentifierList:
      output.DeveloperUserIdentifierList !== undefined && output.DeveloperUserIdentifierList !== null
        ? deserializeAws_json1_1DeveloperUserIdentifierList(output.DeveloperUserIdentifierList, context)
        : undefined,
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
    NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
  } as any;
};

const deserializeAws_json1_1MappingRule = (output: any, context: __SerdeContext): MappingRule => {
  return {
    __type: "MappingRule",
    Claim: output.Claim !== undefined && output.Claim !== null ? output.Claim : undefined,
    MatchType: output.MatchType !== undefined && output.MatchType !== null ? output.MatchType : undefined,
    RoleARN: output.RoleARN !== undefined && output.RoleARN !== null ? output.RoleARN : undefined,
    Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
  } as any;
};

const deserializeAws_json1_1MappingRulesList = (output: any, context: __SerdeContext): MappingRule[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1MappingRule(entry, context));
};

const deserializeAws_json1_1MergeDeveloperIdentitiesResponse = (
  output: any,
  context: __SerdeContext
): MergeDeveloperIdentitiesResponse => {
  return {
    __type: "MergeDeveloperIdentitiesResponse",
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
  } as any;
};

const deserializeAws_json1_1NotAuthorizedException = (output: any, context: __SerdeContext): NotAuthorizedException => {
  return {
    __type: "NotAuthorizedException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1OIDCProviderList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ResourceConflictException = (
  output: any,
  context: __SerdeContext
): ResourceConflictException => {
  return {
    __type: "ResourceConflictException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    __type: "ResourceNotFoundException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1RoleMapping = (output: any, context: __SerdeContext): RoleMapping => {
  return {
    __type: "RoleMapping",
    AmbiguousRoleResolution:
      output.AmbiguousRoleResolution !== undefined && output.AmbiguousRoleResolution !== null
        ? output.AmbiguousRoleResolution
        : undefined,
    RulesConfiguration:
      output.RulesConfiguration !== undefined && output.RulesConfiguration !== null
        ? deserializeAws_json1_1RulesConfigurationType(output.RulesConfiguration, context)
        : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
  } as any;
};

const deserializeAws_json1_1RoleMappingMap = (output: any, context: __SerdeContext): { [key: string]: RoleMapping } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: RoleMapping }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_json1_1RoleMapping(value, context),
    }),
    {}
  );
};

const deserializeAws_json1_1RolesMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_json1_1RulesConfigurationType = (output: any, context: __SerdeContext): RulesConfigurationType => {
  return {
    __type: "RulesConfigurationType",
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_json1_1MappingRulesList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SAMLProviderList = (output: any, context: __SerdeContext): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {
    __type: "TagResourceResponse",
  } as any;
};

const deserializeAws_json1_1TooManyRequestsException = (
  output: any,
  context: __SerdeContext
): TooManyRequestsException => {
  return {
    __type: "TooManyRequestsException",
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_json1_1UnprocessedIdentityId = (output: any, context: __SerdeContext): UnprocessedIdentityId => {
  return {
    __type: "UnprocessedIdentityId",
    ErrorCode: output.ErrorCode !== undefined && output.ErrorCode !== null ? output.ErrorCode : undefined,
    IdentityId: output.IdentityId !== undefined && output.IdentityId !== null ? output.IdentityId : undefined,
  } as any;
};

const deserializeAws_json1_1UnprocessedIdentityIdList = (
  output: any,
  context: __SerdeContext
): UnprocessedIdentityId[] => {
  return (output || []).map((entry: any) => deserializeAws_json1_1UnprocessedIdentityId(entry, context));
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {
    __type: "UntagResourceResponse",
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
    headers,
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
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
