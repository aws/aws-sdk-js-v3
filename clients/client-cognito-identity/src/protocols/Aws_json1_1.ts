// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
import {
  GetPrincipalTagAttributeMapCommandInput,
  GetPrincipalTagAttributeMapCommandOutput,
} from "../commands/GetPrincipalTagAttributeMapCommand";
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
import {
  SetPrincipalTagAttributeMapCommandInput,
  SetPrincipalTagAttributeMapCommandOutput,
} from "../commands/SetPrincipalTagAttributeMapCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  UnlinkDeveloperIdentityCommandInput,
  UnlinkDeveloperIdentityCommandOutput,
} from "../commands/UnlinkDeveloperIdentityCommand";
import { UnlinkIdentityCommandInput, UnlinkIdentityCommandOutput } from "../commands/UnlinkIdentityCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateIdentityPoolCommandInput, UpdateIdentityPoolCommandOutput } from "../commands/UpdateIdentityPoolCommand";
import { CognitoIdentityServiceException as __BaseException } from "../models/CognitoIdentityServiceException";
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
  GetIdentityPoolRolesInput,
  GetIdentityPoolRolesResponse,
  GetIdInput,
  GetIdResponse,
  GetOpenIdTokenForDeveloperIdentityInput,
  GetOpenIdTokenForDeveloperIdentityResponse,
  GetOpenIdTokenInput,
  GetOpenIdTokenResponse,
  GetPrincipalTagAttributeMapInput,
  GetPrincipalTagAttributeMapResponse,
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
  SetPrincipalTagAttributeMapInput,
  SetPrincipalTagAttributeMapResponse,
  TagResourceInput,
  TagResourceResponse,
  TooManyRequestsException,
  UnlinkDeveloperIdentityInput,
  UnlinkIdentityInput,
  UnprocessedIdentityId,
  UntagResourceInput,
  UntagResourceResponse,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateIdentityPoolCommand
 */
export const se_CreateIdentityPoolCommand = async (
  input: CreateIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.CreateIdentityPool",
  };
  let body: any;
  body = JSON.stringify(se_CreateIdentityPoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIdentitiesCommand
 */
export const se_DeleteIdentitiesCommand = async (
  input: DeleteIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.DeleteIdentities",
  };
  let body: any;
  body = JSON.stringify(se_DeleteIdentitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteIdentityPoolCommand
 */
export const se_DeleteIdentityPoolCommand = async (
  input: DeleteIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.DeleteIdentityPool",
  };
  let body: any;
  body = JSON.stringify(se_DeleteIdentityPoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIdentityCommand
 */
export const se_DescribeIdentityCommand = async (
  input: DescribeIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.DescribeIdentity",
  };
  let body: any;
  body = JSON.stringify(se_DescribeIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeIdentityPoolCommand
 */
export const se_DescribeIdentityPoolCommand = async (
  input: DescribeIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.DescribeIdentityPool",
  };
  let body: any;
  body = JSON.stringify(se_DescribeIdentityPoolInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCredentialsForIdentityCommand
 */
export const se_GetCredentialsForIdentityCommand = async (
  input: GetCredentialsForIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.GetCredentialsForIdentity",
  };
  let body: any;
  body = JSON.stringify(se_GetCredentialsForIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIdCommand
 */
export const se_GetIdCommand = async (input: GetIdCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.GetId",
  };
  let body: any;
  body = JSON.stringify(se_GetIdInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetIdentityPoolRolesCommand
 */
export const se_GetIdentityPoolRolesCommand = async (
  input: GetIdentityPoolRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.GetIdentityPoolRoles",
  };
  let body: any;
  body = JSON.stringify(se_GetIdentityPoolRolesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpenIdTokenCommand
 */
export const se_GetOpenIdTokenCommand = async (
  input: GetOpenIdTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.GetOpenIdToken",
  };
  let body: any;
  body = JSON.stringify(se_GetOpenIdTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand
 */
export const se_GetOpenIdTokenForDeveloperIdentityCommand = async (
  input: GetOpenIdTokenForDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity",
  };
  let body: any;
  body = JSON.stringify(se_GetOpenIdTokenForDeveloperIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetPrincipalTagAttributeMapCommand
 */
export const se_GetPrincipalTagAttributeMapCommand = async (
  input: GetPrincipalTagAttributeMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.GetPrincipalTagAttributeMap",
  };
  let body: any;
  body = JSON.stringify(se_GetPrincipalTagAttributeMapInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIdentitiesCommand
 */
export const se_ListIdentitiesCommand = async (
  input: ListIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.ListIdentities",
  };
  let body: any;
  body = JSON.stringify(se_ListIdentitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListIdentityPoolsCommand
 */
export const se_ListIdentityPoolsCommand = async (
  input: ListIdentityPoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.ListIdentityPools",
  };
  let body: any;
  body = JSON.stringify(se_ListIdentityPoolsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LookupDeveloperIdentityCommand
 */
export const se_LookupDeveloperIdentityCommand = async (
  input: LookupDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.LookupDeveloperIdentity",
  };
  let body: any;
  body = JSON.stringify(se_LookupDeveloperIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1MergeDeveloperIdentitiesCommand
 */
export const se_MergeDeveloperIdentitiesCommand = async (
  input: MergeDeveloperIdentitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.MergeDeveloperIdentities",
  };
  let body: any;
  body = JSON.stringify(se_MergeDeveloperIdentitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetIdentityPoolRolesCommand
 */
export const se_SetIdentityPoolRolesCommand = async (
  input: SetIdentityPoolRolesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.SetIdentityPoolRoles",
  };
  let body: any;
  body = JSON.stringify(se_SetIdentityPoolRolesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SetPrincipalTagAttributeMapCommand
 */
export const se_SetPrincipalTagAttributeMapCommand = async (
  input: SetPrincipalTagAttributeMapCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.SetPrincipalTagAttributeMap",
  };
  let body: any;
  body = JSON.stringify(se_SetPrincipalTagAttributeMapInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnlinkDeveloperIdentityCommand
 */
export const se_UnlinkDeveloperIdentityCommand = async (
  input: UnlinkDeveloperIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.UnlinkDeveloperIdentity",
  };
  let body: any;
  body = JSON.stringify(se_UnlinkDeveloperIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UnlinkIdentityCommand
 */
export const se_UnlinkIdentityCommand = async (
  input: UnlinkIdentityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.UnlinkIdentity",
  };
  let body: any;
  body = JSON.stringify(se_UnlinkIdentityInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateIdentityPoolCommand
 */
export const se_UpdateIdentityPoolCommand = async (
  input: UpdateIdentityPoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSCognitoIdentityService.UpdateIdentityPool",
  };
  let body: any;
  body = JSON.stringify(se_IdentityPool(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateIdentityPoolCommand
 */
export const de_CreateIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateIdentityPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IdentityPool(data, context);
  const response: CreateIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateIdentityPoolCommandError
 */
const de_CreateIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteIdentitiesCommand
 */
export const de_DeleteIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteIdentitiesResponse(data, context);
  const response: DeleteIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteIdentitiesCommandError
 */
const de_DeleteIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteIdentityPoolCommand
 */
export const de_DeleteIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIdentityPoolCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteIdentityPoolCommandError
 */
const de_DeleteIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeIdentityCommand
 */
export const de_DescribeIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IdentityDescription(data, context);
  const response: DescribeIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeIdentityCommandError
 */
const de_DescribeIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeIdentityPoolCommand
 */
export const de_DescribeIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeIdentityPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IdentityPool(data, context);
  const response: DescribeIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeIdentityPoolCommandError
 */
const de_DescribeIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetCredentialsForIdentityCommand
 */
export const de_GetCredentialsForIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsForIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetCredentialsForIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCredentialsForIdentityResponse(data, context);
  const response: GetCredentialsForIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetCredentialsForIdentityCommandError
 */
const de_GetCredentialsForIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCredentialsForIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      throw await de_ExternalServiceExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidIdentityPoolConfigurationException":
    case "com.amazonaws.cognitoidentity#InvalidIdentityPoolConfigurationException":
      throw await de_InvalidIdentityPoolConfigurationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetIdCommand
 */
export const de_GetIdCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<GetIdCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdResponse(data, context);
  const response: GetIdCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetIdCommandError
 */
const de_GetIdCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetIdCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      throw await de_ExternalServiceExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetIdentityPoolRolesCommand
 */
export const de_GetIdentityPoolRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentityPoolRolesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentityPoolRolesResponse(data, context);
  const response: GetIdentityPoolRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetIdentityPoolRolesCommandError
 */
const de_GetIdentityPoolRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentityPoolRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOpenIdTokenCommand
 */
export const de_GetOpenIdTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOpenIdTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpenIdTokenResponse(data, context);
  const response: GetOpenIdTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOpenIdTokenCommandError
 */
const de_GetOpenIdTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      throw await de_ExternalServiceExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommand
 */
export const de_GetOpenIdTokenForDeveloperIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOpenIdTokenForDeveloperIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOpenIdTokenForDeveloperIdentityResponse(data, context);
  const response: GetOpenIdTokenForDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityCommandError
 */
const de_GetOpenIdTokenForDeveloperIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOpenIdTokenForDeveloperIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DeveloperUserAlreadyRegisteredException":
    case "com.amazonaws.cognitoidentity#DeveloperUserAlreadyRegisteredException":
      throw await de_DeveloperUserAlreadyRegisteredExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetPrincipalTagAttributeMapCommand
 */
export const de_GetPrincipalTagAttributeMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrincipalTagAttributeMapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPrincipalTagAttributeMapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPrincipalTagAttributeMapResponse(data, context);
  const response: GetPrincipalTagAttributeMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetPrincipalTagAttributeMapCommandError
 */
const de_GetPrincipalTagAttributeMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPrincipalTagAttributeMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListIdentitiesCommand
 */
export const de_ListIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentitiesResponse(data, context);
  const response: ListIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListIdentitiesCommandError
 */
const de_ListIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListIdentityPoolsCommand
 */
export const de_ListIdentityPoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIdentityPoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentityPoolsResponse(data, context);
  const response: ListIdentityPoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListIdentityPoolsCommandError
 */
const de_ListIdentityPoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityPoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1LookupDeveloperIdentityCommand
 */
export const de_LookupDeveloperIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupDeveloperIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_LookupDeveloperIdentityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LookupDeveloperIdentityResponse(data, context);
  const response: LookupDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1LookupDeveloperIdentityCommandError
 */
const de_LookupDeveloperIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LookupDeveloperIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1MergeDeveloperIdentitiesCommand
 */
export const de_MergeDeveloperIdentitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeDeveloperIdentitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_MergeDeveloperIdentitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_MergeDeveloperIdentitiesResponse(data, context);
  const response: MergeDeveloperIdentitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1MergeDeveloperIdentitiesCommandError
 */
const de_MergeDeveloperIdentitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<MergeDeveloperIdentitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetIdentityPoolRolesCommand
 */
export const de_SetIdentityPoolRolesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolRolesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetIdentityPoolRolesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetIdentityPoolRolesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetIdentityPoolRolesCommandError
 */
const de_SetIdentityPoolRolesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetIdentityPoolRolesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SetPrincipalTagAttributeMapCommand
 */
export const de_SetPrincipalTagAttributeMapCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPrincipalTagAttributeMapCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetPrincipalTagAttributeMapCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SetPrincipalTagAttributeMapResponse(data, context);
  const response: SetPrincipalTagAttributeMapCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1SetPrincipalTagAttributeMapCommandError
 */
const de_SetPrincipalTagAttributeMapCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetPrincipalTagAttributeMapCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UnlinkDeveloperIdentityCommand
 */
export const de_UnlinkDeveloperIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkDeveloperIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnlinkDeveloperIdentityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnlinkDeveloperIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnlinkDeveloperIdentityCommandError
 */
const de_UnlinkDeveloperIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkDeveloperIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UnlinkIdentityCommand
 */
export const de_UnlinkIdentityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkIdentityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UnlinkIdentityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UnlinkIdentityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UnlinkIdentityCommandError
 */
const de_UnlinkIdentityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlinkIdentityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ExternalServiceException":
    case "com.amazonaws.cognitoidentity#ExternalServiceException":
      throw await de_ExternalServiceExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateIdentityPoolCommand
 */
export const de_UpdateIdentityPoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateIdentityPoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_IdentityPool(data, context);
  const response: UpdateIdentityPoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateIdentityPoolCommandError
 */
const de_UpdateIdentityPoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentityPoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cognitoidentity#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalErrorException":
    case "com.amazonaws.cognitoidentity#InternalErrorException":
      throw await de_InternalErrorExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.cognitoidentity#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cognitoidentity#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotAuthorizedException":
    case "com.amazonaws.cognitoidentity#NotAuthorizedException":
      throw await de_NotAuthorizedExceptionRes(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.cognitoidentity#ResourceConflictException":
      throw await de_ResourceConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cognitoidentity#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.cognitoidentity#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DeveloperUserAlreadyRegisteredExceptionRes
 */
const de_DeveloperUserAlreadyRegisteredExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DeveloperUserAlreadyRegisteredException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DeveloperUserAlreadyRegisteredException(body, context);
  const exception = new DeveloperUserAlreadyRegisteredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ExternalServiceExceptionRes
 */
const de_ExternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ExternalServiceException(body, context);
  const exception = new ExternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalErrorExceptionRes
 */
const de_InternalErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalErrorException(body, context);
  const exception = new InternalErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidIdentityPoolConfigurationExceptionRes
 */
const de_InvalidIdentityPoolConfigurationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidIdentityPoolConfigurationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidIdentityPoolConfigurationException(body, context);
  const exception = new InvalidIdentityPoolConfigurationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotAuthorizedExceptionRes
 */
const de_NotAuthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotAuthorizedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NotAuthorizedException(body, context);
  const exception = new NotAuthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceConflictExceptionRes
 */
const de_ResourceConflictExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceConflictException(body, context);
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyRequestsException(body, context);
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1CognitoIdentityProvider
 */
const se_CognitoIdentityProvider = (input: CognitoIdentityProvider, context: __SerdeContext): any => {
  return {
    ...(input.ClientId != null && { ClientId: input.ClientId }),
    ...(input.ProviderName != null && { ProviderName: input.ProviderName }),
    ...(input.ServerSideTokenCheck != null && { ServerSideTokenCheck: input.ServerSideTokenCheck }),
  };
};

/**
 * serializeAws_json1_1CognitoIdentityProviderList
 */
const se_CognitoIdentityProviderList = (input: CognitoIdentityProvider[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CognitoIdentityProvider(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateIdentityPoolInput
 */
const se_CreateIdentityPoolInput = (input: CreateIdentityPoolInput, context: __SerdeContext): any => {
  return {
    ...(input.AllowClassicFlow != null && { AllowClassicFlow: input.AllowClassicFlow }),
    ...(input.AllowUnauthenticatedIdentities != null && {
      AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
    }),
    ...(input.CognitoIdentityProviders != null && {
      CognitoIdentityProviders: se_CognitoIdentityProviderList(input.CognitoIdentityProviders, context),
    }),
    ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.IdentityPoolName != null && { IdentityPoolName: input.IdentityPoolName }),
    ...(input.IdentityPoolTags != null && {
      IdentityPoolTags: se_IdentityPoolTagsType(input.IdentityPoolTags, context),
    }),
    ...(input.OpenIdConnectProviderARNs != null && {
      OpenIdConnectProviderARNs: se_OIDCProviderList(input.OpenIdConnectProviderARNs, context),
    }),
    ...(input.SamlProviderARNs != null && { SamlProviderARNs: se_SAMLProviderList(input.SamlProviderARNs, context) }),
    ...(input.SupportedLoginProviders != null && {
      SupportedLoginProviders: se_IdentityProviders(input.SupportedLoginProviders, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteIdentitiesInput
 */
const se_DeleteIdentitiesInput = (input: DeleteIdentitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityIdsToDelete != null && {
      IdentityIdsToDelete: se_IdentityIdList(input.IdentityIdsToDelete, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteIdentityPoolInput
 */
const se_DeleteIdentityPoolInput = (input: DeleteIdentityPoolInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
  };
};

/**
 * serializeAws_json1_1DescribeIdentityInput
 */
const se_DescribeIdentityInput = (input: DescribeIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
  };
};

/**
 * serializeAws_json1_1DescribeIdentityPoolInput
 */
const se_DescribeIdentityPoolInput = (input: DescribeIdentityPoolInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
  };
};

/**
 * serializeAws_json1_1GetCredentialsForIdentityInput
 */
const se_GetCredentialsForIdentityInput = (input: GetCredentialsForIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.CustomRoleArn != null && { CustomRoleArn: input.CustomRoleArn }),
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.Logins != null && { Logins: se_LoginsMap(input.Logins, context) }),
  };
};

/**
 * serializeAws_json1_1GetIdentityPoolRolesInput
 */
const se_GetIdentityPoolRolesInput = (input: GetIdentityPoolRolesInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
  };
};

/**
 * serializeAws_json1_1GetIdInput
 */
const se_GetIdInput = (input: GetIdInput, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.Logins != null && { Logins: se_LoginsMap(input.Logins, context) }),
  };
};

/**
 * serializeAws_json1_1GetOpenIdTokenForDeveloperIdentityInput
 */
const se_GetOpenIdTokenForDeveloperIdentityInput = (
  input: GetOpenIdTokenForDeveloperIdentityInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.Logins != null && { Logins: se_LoginsMap(input.Logins, context) }),
    ...(input.PrincipalTags != null && { PrincipalTags: se_PrincipalTags(input.PrincipalTags, context) }),
    ...(input.TokenDuration != null && { TokenDuration: input.TokenDuration }),
  };
};

/**
 * serializeAws_json1_1GetOpenIdTokenInput
 */
const se_GetOpenIdTokenInput = (input: GetOpenIdTokenInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.Logins != null && { Logins: se_LoginsMap(input.Logins, context) }),
  };
};

/**
 * serializeAws_json1_1GetPrincipalTagAttributeMapInput
 */
const se_GetPrincipalTagAttributeMapInput = (input: GetPrincipalTagAttributeMapInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.IdentityProviderName != null && { IdentityProviderName: input.IdentityProviderName }),
  };
};

/**
 * serializeAws_json1_1IdentityIdList
 */
const se_IdentityIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IdentityPool
 */
const se_IdentityPool = (input: IdentityPool, context: __SerdeContext): any => {
  return {
    ...(input.AllowClassicFlow != null && { AllowClassicFlow: input.AllowClassicFlow }),
    ...(input.AllowUnauthenticatedIdentities != null && {
      AllowUnauthenticatedIdentities: input.AllowUnauthenticatedIdentities,
    }),
    ...(input.CognitoIdentityProviders != null && {
      CognitoIdentityProviders: se_CognitoIdentityProviderList(input.CognitoIdentityProviders, context),
    }),
    ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.IdentityPoolName != null && { IdentityPoolName: input.IdentityPoolName }),
    ...(input.IdentityPoolTags != null && {
      IdentityPoolTags: se_IdentityPoolTagsType(input.IdentityPoolTags, context),
    }),
    ...(input.OpenIdConnectProviderARNs != null && {
      OpenIdConnectProviderARNs: se_OIDCProviderList(input.OpenIdConnectProviderARNs, context),
    }),
    ...(input.SamlProviderARNs != null && { SamlProviderARNs: se_SAMLProviderList(input.SamlProviderARNs, context) }),
    ...(input.SupportedLoginProviders != null && {
      SupportedLoginProviders: se_IdentityProviders(input.SupportedLoginProviders, context),
    }),
  };
};

/**
 * serializeAws_json1_1IdentityPoolTagsListType
 */
const se_IdentityPoolTagsListType = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IdentityPoolTagsType
 */
const se_IdentityPoolTagsType = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1IdentityProviders
 */
const se_IdentityProviders = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ListIdentitiesInput
 */
const se_ListIdentitiesInput = (input: ListIdentitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.HideDisabled != null && { HideDisabled: input.HideDisabled }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListIdentityPoolsInput
 */
const se_ListIdentityPoolsInput = (input: ListIdentityPoolsInput, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1LoginsList
 */
const se_LoginsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LoginsMap
 */
const se_LoginsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1LookupDeveloperIdentityInput
 */
const se_LookupDeveloperIdentityInput = (input: LookupDeveloperIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.DeveloperUserIdentifier != null && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1MappingRule
 */
const se_MappingRule = (input: MappingRule, context: __SerdeContext): any => {
  return {
    ...(input.Claim != null && { Claim: input.Claim }),
    ...(input.MatchType != null && { MatchType: input.MatchType }),
    ...(input.RoleARN != null && { RoleARN: input.RoleARN }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1MappingRulesList
 */
const se_MappingRulesList = (input: MappingRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MappingRule(entry, context);
    });
};

/**
 * serializeAws_json1_1MergeDeveloperIdentitiesInput
 */
const se_MergeDeveloperIdentitiesInput = (input: MergeDeveloperIdentitiesInput, context: __SerdeContext): any => {
  return {
    ...(input.DestinationUserIdentifier != null && { DestinationUserIdentifier: input.DestinationUserIdentifier }),
    ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.SourceUserIdentifier != null && { SourceUserIdentifier: input.SourceUserIdentifier }),
  };
};

/**
 * serializeAws_json1_1OIDCProviderList
 */
const se_OIDCProviderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PrincipalTags
 */
const se_PrincipalTags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RoleMapping
 */
const se_RoleMapping = (input: RoleMapping, context: __SerdeContext): any => {
  return {
    ...(input.AmbiguousRoleResolution != null && { AmbiguousRoleResolution: input.AmbiguousRoleResolution }),
    ...(input.RulesConfiguration != null && {
      RulesConfiguration: se_RulesConfigurationType(input.RulesConfiguration, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1RoleMappingMap
 */
const se_RoleMappingMap = (input: Record<string, RoleMapping>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_RoleMapping(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RolesMap
 */
const se_RolesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1RulesConfigurationType
 */
const se_RulesConfigurationType = (input: RulesConfigurationType, context: __SerdeContext): any => {
  return {
    ...(input.Rules != null && { Rules: se_MappingRulesList(input.Rules, context) }),
  };
};

/**
 * serializeAws_json1_1SAMLProviderList
 */
const se_SAMLProviderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SetIdentityPoolRolesInput
 */
const se_SetIdentityPoolRolesInput = (input: SetIdentityPoolRolesInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.RoleMappings != null && { RoleMappings: se_RoleMappingMap(input.RoleMappings, context) }),
    ...(input.Roles != null && { Roles: se_RolesMap(input.Roles, context) }),
  };
};

/**
 * serializeAws_json1_1SetPrincipalTagAttributeMapInput
 */
const se_SetPrincipalTagAttributeMapInput = (input: SetPrincipalTagAttributeMapInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
    ...(input.IdentityProviderName != null && { IdentityProviderName: input.IdentityProviderName }),
    ...(input.PrincipalTags != null && { PrincipalTags: se_PrincipalTags(input.PrincipalTags, context) }),
    ...(input.UseDefaults != null && { UseDefaults: input.UseDefaults }),
  };
};

/**
 * serializeAws_json1_1TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_IdentityPoolTagsType(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UnlinkDeveloperIdentityInput
 */
const se_UnlinkDeveloperIdentityInput = (input: UnlinkDeveloperIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.DeveloperProviderName != null && { DeveloperProviderName: input.DeveloperProviderName }),
    ...(input.DeveloperUserIdentifier != null && { DeveloperUserIdentifier: input.DeveloperUserIdentifier }),
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.IdentityPoolId != null && { IdentityPoolId: input.IdentityPoolId }),
  };
};

/**
 * serializeAws_json1_1UnlinkIdentityInput
 */
const se_UnlinkIdentityInput = (input: UnlinkIdentityInput, context: __SerdeContext): any => {
  return {
    ...(input.IdentityId != null && { IdentityId: input.IdentityId }),
    ...(input.Logins != null && { Logins: se_LoginsMap(input.Logins, context) }),
    ...(input.LoginsToRemove != null && { LoginsToRemove: se_LoginsList(input.LoginsToRemove, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_IdentityPoolTagsListType(input.TagKeys, context) }),
  };
};

/**
 * deserializeAws_json1_1CognitoIdentityProvider
 */
const de_CognitoIdentityProvider = (output: any, context: __SerdeContext): CognitoIdentityProvider => {
  return {
    ClientId: __expectString(output.ClientId),
    ProviderName: __expectString(output.ProviderName),
    ServerSideTokenCheck: __expectBoolean(output.ServerSideTokenCheck),
  } as any;
};

/**
 * deserializeAws_json1_1CognitoIdentityProviderList
 */
const de_CognitoIdentityProviderList = (output: any, context: __SerdeContext): CognitoIdentityProvider[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CognitoIdentityProvider(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Credentials
 */
const de_Credentials = (output: any, context: __SerdeContext): Credentials => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    Expiration:
      output.Expiration != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Expiration))) : undefined,
    SecretKey: __expectString(output.SecretKey),
    SessionToken: __expectString(output.SessionToken),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteIdentitiesResponse
 */
const de_DeleteIdentitiesResponse = (output: any, context: __SerdeContext): DeleteIdentitiesResponse => {
  return {
    UnprocessedIdentityIds:
      output.UnprocessedIdentityIds != null
        ? de_UnprocessedIdentityIdList(output.UnprocessedIdentityIds, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeveloperUserAlreadyRegisteredException
 */
const de_DeveloperUserAlreadyRegisteredException = (
  output: any,
  context: __SerdeContext
): DeveloperUserAlreadyRegisteredException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1DeveloperUserIdentifierList
 */
const de_DeveloperUserIdentifierList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExternalServiceException
 */
const de_ExternalServiceException = (output: any, context: __SerdeContext): ExternalServiceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GetCredentialsForIdentityResponse
 */
const de_GetCredentialsForIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetCredentialsForIdentityResponse => {
  return {
    Credentials: output.Credentials != null ? de_Credentials(output.Credentials, context) : undefined,
    IdentityId: __expectString(output.IdentityId),
  } as any;
};

/**
 * deserializeAws_json1_1GetIdentityPoolRolesResponse
 */
const de_GetIdentityPoolRolesResponse = (output: any, context: __SerdeContext): GetIdentityPoolRolesResponse => {
  return {
    IdentityPoolId: __expectString(output.IdentityPoolId),
    RoleMappings: output.RoleMappings != null ? de_RoleMappingMap(output.RoleMappings, context) : undefined,
    Roles: output.Roles != null ? de_RolesMap(output.Roles, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetIdResponse
 */
const de_GetIdResponse = (output: any, context: __SerdeContext): GetIdResponse => {
  return {
    IdentityId: __expectString(output.IdentityId),
  } as any;
};

/**
 * deserializeAws_json1_1GetOpenIdTokenForDeveloperIdentityResponse
 */
const de_GetOpenIdTokenForDeveloperIdentityResponse = (
  output: any,
  context: __SerdeContext
): GetOpenIdTokenForDeveloperIdentityResponse => {
  return {
    IdentityId: __expectString(output.IdentityId),
    Token: __expectString(output.Token),
  } as any;
};

/**
 * deserializeAws_json1_1GetOpenIdTokenResponse
 */
const de_GetOpenIdTokenResponse = (output: any, context: __SerdeContext): GetOpenIdTokenResponse => {
  return {
    IdentityId: __expectString(output.IdentityId),
    Token: __expectString(output.Token),
  } as any;
};

/**
 * deserializeAws_json1_1GetPrincipalTagAttributeMapResponse
 */
const de_GetPrincipalTagAttributeMapResponse = (
  output: any,
  context: __SerdeContext
): GetPrincipalTagAttributeMapResponse => {
  return {
    IdentityPoolId: __expectString(output.IdentityPoolId),
    IdentityProviderName: __expectString(output.IdentityProviderName),
    PrincipalTags: output.PrincipalTags != null ? de_PrincipalTags(output.PrincipalTags, context) : undefined,
    UseDefaults: __expectBoolean(output.UseDefaults),
  } as any;
};

/**
 * deserializeAws_json1_1IdentitiesList
 */
const de_IdentitiesList = (output: any, context: __SerdeContext): IdentityDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdentityDescription
 */
const de_IdentityDescription = (output: any, context: __SerdeContext): IdentityDescription => {
  return {
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    IdentityId: __expectString(output.IdentityId),
    LastModifiedDate:
      output.LastModifiedDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModifiedDate)))
        : undefined,
    Logins: output.Logins != null ? de_LoginsList(output.Logins, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdentityPool
 */
const de_IdentityPool = (output: any, context: __SerdeContext): IdentityPool => {
  return {
    AllowClassicFlow: __expectBoolean(output.AllowClassicFlow),
    AllowUnauthenticatedIdentities: __expectBoolean(output.AllowUnauthenticatedIdentities),
    CognitoIdentityProviders:
      output.CognitoIdentityProviders != null
        ? de_CognitoIdentityProviderList(output.CognitoIdentityProviders, context)
        : undefined,
    DeveloperProviderName: __expectString(output.DeveloperProviderName),
    IdentityPoolId: __expectString(output.IdentityPoolId),
    IdentityPoolName: __expectString(output.IdentityPoolName),
    IdentityPoolTags:
      output.IdentityPoolTags != null ? de_IdentityPoolTagsType(output.IdentityPoolTags, context) : undefined,
    OpenIdConnectProviderARNs:
      output.OpenIdConnectProviderARNs != null
        ? de_OIDCProviderList(output.OpenIdConnectProviderARNs, context)
        : undefined,
    SamlProviderARNs:
      output.SamlProviderARNs != null ? de_SAMLProviderList(output.SamlProviderARNs, context) : undefined,
    SupportedLoginProviders:
      output.SupportedLoginProviders != null
        ? de_IdentityProviders(output.SupportedLoginProviders, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdentityPoolShortDescription
 */
const de_IdentityPoolShortDescription = (output: any, context: __SerdeContext): IdentityPoolShortDescription => {
  return {
    IdentityPoolId: __expectString(output.IdentityPoolId),
    IdentityPoolName: __expectString(output.IdentityPoolName),
  } as any;
};

/**
 * deserializeAws_json1_1IdentityPoolsList
 */
const de_IdentityPoolsList = (output: any, context: __SerdeContext): IdentityPoolShortDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityPoolShortDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IdentityPoolTagsType
 */
const de_IdentityPoolTagsType = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1IdentityProviders
 */
const de_IdentityProviders = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1InternalErrorException
 */
const de_InternalErrorException = (output: any, context: __SerdeContext): InternalErrorException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidIdentityPoolConfigurationException
 */
const de_InvalidIdentityPoolConfigurationException = (
  output: any,
  context: __SerdeContext
): InvalidIdentityPoolConfigurationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListIdentitiesResponse
 */
const de_ListIdentitiesResponse = (output: any, context: __SerdeContext): ListIdentitiesResponse => {
  return {
    Identities: output.Identities != null ? de_IdentitiesList(output.Identities, context) : undefined,
    IdentityPoolId: __expectString(output.IdentityPoolId),
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListIdentityPoolsResponse
 */
const de_ListIdentityPoolsResponse = (output: any, context: __SerdeContext): ListIdentityPoolsResponse => {
  return {
    IdentityPools: output.IdentityPools != null ? de_IdentityPoolsList(output.IdentityPools, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_IdentityPoolTagsType(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LoginsList
 */
const de_LoginsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LookupDeveloperIdentityResponse
 */
const de_LookupDeveloperIdentityResponse = (output: any, context: __SerdeContext): LookupDeveloperIdentityResponse => {
  return {
    DeveloperUserIdentifierList:
      output.DeveloperUserIdentifierList != null
        ? de_DeveloperUserIdentifierList(output.DeveloperUserIdentifierList, context)
        : undefined,
    IdentityId: __expectString(output.IdentityId),
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1MappingRule
 */
const de_MappingRule = (output: any, context: __SerdeContext): MappingRule => {
  return {
    Claim: __expectString(output.Claim),
    MatchType: __expectString(output.MatchType),
    RoleARN: __expectString(output.RoleARN),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1MappingRulesList
 */
const de_MappingRulesList = (output: any, context: __SerdeContext): MappingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MappingRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MergeDeveloperIdentitiesResponse
 */
const de_MergeDeveloperIdentitiesResponse = (
  output: any,
  context: __SerdeContext
): MergeDeveloperIdentitiesResponse => {
  return {
    IdentityId: __expectString(output.IdentityId),
  } as any;
};

/**
 * deserializeAws_json1_1NotAuthorizedException
 */
const de_NotAuthorizedException = (output: any, context: __SerdeContext): NotAuthorizedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1OIDCProviderList
 */
const de_OIDCProviderList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PrincipalTags
 */
const de_PrincipalTags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ResourceConflictException
 */
const de_ResourceConflictException = (output: any, context: __SerdeContext): ResourceConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1RoleMapping
 */
const de_RoleMapping = (output: any, context: __SerdeContext): RoleMapping => {
  return {
    AmbiguousRoleResolution: __expectString(output.AmbiguousRoleResolution),
    RulesConfiguration:
      output.RulesConfiguration != null ? de_RulesConfigurationType(output.RulesConfiguration, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1RoleMappingMap
 */
const de_RoleMappingMap = (output: any, context: __SerdeContext): Record<string, RoleMapping> => {
  return Object.entries(output).reduce((acc: Record<string, RoleMapping>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_RoleMapping(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1RolesMap
 */
const de_RolesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1RulesConfigurationType
 */
const de_RulesConfigurationType = (output: any, context: __SerdeContext): RulesConfigurationType => {
  return {
    Rules: output.Rules != null ? de_MappingRulesList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SAMLProviderList
 */
const de_SAMLProviderList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SetPrincipalTagAttributeMapResponse
 */
const de_SetPrincipalTagAttributeMapResponse = (
  output: any,
  context: __SerdeContext
): SetPrincipalTagAttributeMapResponse => {
  return {
    IdentityPoolId: __expectString(output.IdentityPoolId),
    IdentityProviderName: __expectString(output.IdentityProviderName),
    PrincipalTags: output.PrincipalTags != null ? de_PrincipalTags(output.PrincipalTags, context) : undefined,
    UseDefaults: __expectBoolean(output.UseDefaults),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TooManyRequestsException
 */
const de_TooManyRequestsException = (output: any, context: __SerdeContext): TooManyRequestsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedIdentityId
 */
const de_UnprocessedIdentityId = (output: any, context: __SerdeContext): UnprocessedIdentityId => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    IdentityId: __expectString(output.IdentityId),
  } as any;
};

/**
 * deserializeAws_json1_1UnprocessedIdentityIdList
 */
const de_UnprocessedIdentityIdList = (output: any, context: __SerdeContext): UnprocessedIdentityId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedIdentityId(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
