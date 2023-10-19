// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
} from "../commands/CreateIdentitySourceCommand";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput } from "../commands/CreatePolicyCommand";
import { CreatePolicyStoreCommandInput, CreatePolicyStoreCommandOutput } from "../commands/CreatePolicyStoreCommand";
import {
  CreatePolicyTemplateCommandInput,
  CreatePolicyTemplateCommandOutput,
} from "../commands/CreatePolicyTemplateCommand";
import {
  DeleteIdentitySourceCommandInput,
  DeleteIdentitySourceCommandOutput,
} from "../commands/DeleteIdentitySourceCommand";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput } from "../commands/DeletePolicyCommand";
import { DeletePolicyStoreCommandInput, DeletePolicyStoreCommandOutput } from "../commands/DeletePolicyStoreCommand";
import {
  DeletePolicyTemplateCommandInput,
  DeletePolicyTemplateCommandOutput,
} from "../commands/DeletePolicyTemplateCommand";
import { GetIdentitySourceCommandInput, GetIdentitySourceCommandOutput } from "../commands/GetIdentitySourceCommand";
import { GetPolicyCommandInput, GetPolicyCommandOutput } from "../commands/GetPolicyCommand";
import { GetPolicyStoreCommandInput, GetPolicyStoreCommandOutput } from "../commands/GetPolicyStoreCommand";
import { GetPolicyTemplateCommandInput, GetPolicyTemplateCommandOutput } from "../commands/GetPolicyTemplateCommand";
import { GetSchemaCommandInput, GetSchemaCommandOutput } from "../commands/GetSchemaCommand";
import { IsAuthorizedCommandInput, IsAuthorizedCommandOutput } from "../commands/IsAuthorizedCommand";
import {
  IsAuthorizedWithTokenCommandInput,
  IsAuthorizedWithTokenCommandOutput,
} from "../commands/IsAuthorizedWithTokenCommand";
import {
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "../commands/ListIdentitySourcesCommand";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput } from "../commands/ListPoliciesCommand";
import { ListPolicyStoresCommandInput, ListPolicyStoresCommandOutput } from "../commands/ListPolicyStoresCommand";
import {
  ListPolicyTemplatesCommandInput,
  ListPolicyTemplatesCommandOutput,
} from "../commands/ListPolicyTemplatesCommand";
import { PutSchemaCommandInput, PutSchemaCommandOutput } from "../commands/PutSchemaCommand";
import {
  UpdateIdentitySourceCommandInput,
  UpdateIdentitySourceCommandOutput,
} from "../commands/UpdateIdentitySourceCommand";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput } from "../commands/UpdatePolicyCommand";
import { UpdatePolicyStoreCommandInput, UpdatePolicyStoreCommandOutput } from "../commands/UpdatePolicyStoreCommand";
import {
  UpdatePolicyTemplateCommandInput,
  UpdatePolicyTemplateCommandOutput,
} from "../commands/UpdatePolicyTemplateCommand";
import {
  AccessDeniedException,
  ActionIdentifier,
  AttributeValue,
  CognitoUserPoolConfiguration,
  Configuration,
  ConflictException,
  ContextDefinition,
  CreateIdentitySourceInput,
  CreateIdentitySourceOutput,
  CreatePolicyInput,
  CreatePolicyOutput,
  CreatePolicyStoreInput,
  CreatePolicyStoreOutput,
  CreatePolicyTemplateInput,
  CreatePolicyTemplateOutput,
  DeleteIdentitySourceInput,
  DeletePolicyInput,
  DeletePolicyStoreInput,
  DeletePolicyTemplateInput,
  EntitiesDefinition,
  EntityIdentifier,
  EntityItem,
  EntityReference,
  GetIdentitySourceInput,
  GetIdentitySourceOutput,
  GetPolicyInput,
  GetPolicyOutput,
  GetPolicyStoreInput,
  GetPolicyStoreOutput,
  GetPolicyTemplateInput,
  GetPolicyTemplateOutput,
  GetSchemaInput,
  GetSchemaOutput,
  IdentitySourceFilter,
  IdentitySourceItem,
  InternalServerException,
  IsAuthorizedInput,
  IsAuthorizedWithTokenInput,
  ListIdentitySourcesInput,
  ListIdentitySourcesOutput,
  ListPoliciesInput,
  ListPoliciesOutput,
  ListPolicyStoresInput,
  ListPolicyStoresOutput,
  ListPolicyTemplatesInput,
  ListPolicyTemplatesOutput,
  PolicyDefinition,
  PolicyFilter,
  PolicyItem,
  PolicyStoreItem,
  PolicyTemplateItem,
  PutSchemaInput,
  PutSchemaOutput,
  ResourceNotFoundException,
  SchemaDefinition,
  ServiceQuotaExceededException,
  StaticPolicyDefinition,
  TemplateLinkedPolicyDefinition,
  ThrottlingException,
  UpdateCognitoUserPoolConfiguration,
  UpdateConfiguration,
  UpdateIdentitySourceInput,
  UpdateIdentitySourceOutput,
  UpdatePolicyDefinition,
  UpdatePolicyInput,
  UpdatePolicyOutput,
  UpdatePolicyStoreInput,
  UpdatePolicyStoreOutput,
  UpdatePolicyTemplateInput,
  UpdatePolicyTemplateOutput,
  UpdateStaticPolicyDefinition,
  ValidationException,
  ValidationSettings,
} from "../models/models_0";
import { VerifiedPermissionsServiceException as __BaseException } from "../models/VerifiedPermissionsServiceException";

/**
 * serializeAws_json1_0CreateIdentitySourceCommand
 */
export const se_CreateIdentitySourceCommand = async (
  input: CreateIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateIdentitySource");
  let body: any;
  body = JSON.stringify(se_CreateIdentitySourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePolicyCommand
 */
export const se_CreatePolicyCommand = async (
  input: CreatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicy");
  let body: any;
  body = JSON.stringify(se_CreatePolicyInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePolicyStoreCommand
 */
export const se_CreatePolicyStoreCommand = async (
  input: CreatePolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicyStore");
  let body: any;
  body = JSON.stringify(se_CreatePolicyStoreInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreatePolicyTemplateCommand
 */
export const se_CreatePolicyTemplateCommand = async (
  input: CreatePolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePolicyTemplate");
  let body: any;
  body = JSON.stringify(se_CreatePolicyTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteIdentitySourceCommand
 */
export const se_DeleteIdentitySourceCommand = async (
  input: DeleteIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteIdentitySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePolicyCommand
 */
export const se_DeletePolicyCommand = async (
  input: DeletePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePolicyStoreCommand
 */
export const se_DeletePolicyStoreCommand = async (
  input: DeletePolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeletePolicyTemplateCommand
 */
export const se_DeletePolicyTemplateCommand = async (
  input: DeletePolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePolicyTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetIdentitySourceCommand
 */
export const se_GetIdentitySourceCommand = async (
  input: GetIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetIdentitySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPolicyCommand
 */
export const se_GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPolicyStoreCommand
 */
export const se_GetPolicyStoreCommand = async (
  input: GetPolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetPolicyTemplateCommand
 */
export const se_GetPolicyTemplateCommand = async (
  input: GetPolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetPolicyTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetSchemaCommand
 */
export const se_GetSchemaCommand = async (
  input: GetSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0IsAuthorizedCommand
 */
export const se_IsAuthorizedCommand = async (
  input: IsAuthorizedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IsAuthorized");
  let body: any;
  body = JSON.stringify(se_IsAuthorizedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0IsAuthorizedWithTokenCommand
 */
export const se_IsAuthorizedWithTokenCommand = async (
  input: IsAuthorizedWithTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("IsAuthorizedWithToken");
  let body: any;
  body = JSON.stringify(se_IsAuthorizedWithTokenInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListIdentitySourcesCommand
 */
export const se_ListIdentitySourcesCommand = async (
  input: ListIdentitySourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListIdentitySources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPoliciesCommand
 */
export const se_ListPoliciesCommand = async (
  input: ListPoliciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPolicyStoresCommand
 */
export const se_ListPolicyStoresCommand = async (
  input: ListPolicyStoresCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicyStores");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListPolicyTemplatesCommand
 */
export const se_ListPolicyTemplatesCommand = async (
  input: ListPolicyTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPolicyTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PutSchemaCommand
 */
export const se_PutSchemaCommand = async (
  input: PutSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutSchema");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateIdentitySourceCommand
 */
export const se_UpdateIdentitySourceCommand = async (
  input: UpdateIdentitySourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateIdentitySource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePolicyCommand
 */
export const se_UpdatePolicyCommand = async (
  input: UpdatePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePolicyStoreCommand
 */
export const se_UpdatePolicyStoreCommand = async (
  input: UpdatePolicyStoreCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicyStore");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdatePolicyTemplateCommand
 */
export const se_UpdatePolicyTemplateCommand = async (
  input: UpdatePolicyTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePolicyTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0CreateIdentitySourceCommand
 */
export const de_CreateIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateIdentitySourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateIdentitySourceOutput(data, context);
  const response: CreateIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateIdentitySourceCommandError
 */
const de_CreateIdentitySourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIdentitySourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0CreatePolicyCommand
 */
export const de_CreatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyOutput(data, context);
  const response: CreatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePolicyCommandError
 */
const de_CreatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0CreatePolicyStoreCommand
 */
export const de_CreatePolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePolicyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyStoreOutput(data, context);
  const response: CreatePolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePolicyStoreCommandError
 */
const de_CreatePolicyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0CreatePolicyTemplateCommand
 */
export const de_CreatePolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePolicyTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePolicyTemplateOutput(data, context);
  const response: CreatePolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreatePolicyTemplateCommandError
 */
const de_CreatePolicyTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePolicyTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0DeleteIdentitySourceCommand
 */
export const de_DeleteIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteIdentitySourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteIdentitySourceCommandError
 */
const de_DeleteIdentitySourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIdentitySourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0DeletePolicyCommand
 */
export const de_DeletePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePolicyCommandError
 */
const de_DeletePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0DeletePolicyStoreCommand
 */
export const de_DeletePolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePolicyStoreCommandError
 */
const de_DeletePolicyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0DeletePolicyTemplateCommand
 */
export const de_DeletePolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePolicyTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeletePolicyTemplateCommandError
 */
const de_DeletePolicyTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePolicyTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0GetIdentitySourceCommand
 */
export const de_GetIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetIdentitySourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetIdentitySourceOutput(data, context);
  const response: GetIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetIdentitySourceCommandError
 */
const de_GetIdentitySourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIdentitySourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0GetPolicyCommand
 */
export const de_GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyOutput(data, context);
  const response: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPolicyCommandError
 */
const de_GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0GetPolicyStoreCommand
 */
export const de_GetPolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPolicyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyStoreOutput(data, context);
  const response: GetPolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPolicyStoreCommandError
 */
const de_GetPolicyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0GetPolicyTemplateCommand
 */
export const de_GetPolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetPolicyTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetPolicyTemplateOutput(data, context);
  const response: GetPolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetPolicyTemplateCommandError
 */
const de_GetPolicyTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0GetSchemaCommand
 */
export const de_GetSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSchemaOutput(data, context);
  const response: GetSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetSchemaCommandError
 */
const de_GetSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0IsAuthorizedCommand
 */
export const de_IsAuthorizedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsAuthorizedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IsAuthorizedCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: IsAuthorizedCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0IsAuthorizedCommandError
 */
const de_IsAuthorizedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsAuthorizedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0IsAuthorizedWithTokenCommand
 */
export const de_IsAuthorizedWithTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsAuthorizedWithTokenCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_IsAuthorizedWithTokenCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: IsAuthorizedWithTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0IsAuthorizedWithTokenCommandError
 */
const de_IsAuthorizedWithTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<IsAuthorizedWithTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0ListIdentitySourcesCommand
 */
export const de_ListIdentitySourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitySourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListIdentitySourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListIdentitySourcesOutput(data, context);
  const response: ListIdentitySourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListIdentitySourcesCommandError
 */
const de_ListIdentitySourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentitySourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0ListPoliciesCommand
 */
export const de_ListPoliciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPoliciesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPoliciesOutput(data, context);
  const response: ListPoliciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPoliciesCommandError
 */
const de_ListPoliciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPoliciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0ListPolicyStoresCommand
 */
export const de_ListPolicyStoresCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyStoresCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPolicyStoresCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPolicyStoresOutput(data, context);
  const response: ListPolicyStoresCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPolicyStoresCommandError
 */
const de_ListPolicyStoresCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyStoresCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0ListPolicyTemplatesCommand
 */
export const de_ListPolicyTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPolicyTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPolicyTemplatesOutput(data, context);
  const response: ListPolicyTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListPolicyTemplatesCommandError
 */
const de_ListPolicyTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPolicyTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0PutSchemaCommand
 */
export const de_PutSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutSchemaCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutSchemaOutput(data, context);
  const response: PutSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PutSchemaCommandError
 */
const de_PutSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0UpdateIdentitySourceCommand
 */
export const de_UpdateIdentitySourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentitySourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateIdentitySourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateIdentitySourceOutput(data, context);
  const response: UpdateIdentitySourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateIdentitySourceCommandError
 */
const de_UpdateIdentitySourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIdentitySourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0UpdatePolicyCommand
 */
export const de_UpdatePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyOutput(data, context);
  const response: UpdatePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePolicyCommandError
 */
const de_UpdatePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.verifiedpermissions#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0UpdatePolicyStoreCommand
 */
export const de_UpdatePolicyStoreCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyStoreCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePolicyStoreCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyStoreOutput(data, context);
  const response: UpdatePolicyStoreCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePolicyStoreCommandError
 */
const de_UpdatePolicyStoreCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyStoreCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0UpdatePolicyTemplateCommand
 */
export const de_UpdatePolicyTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePolicyTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePolicyTemplateOutput(data, context);
  const response: UpdatePolicyTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdatePolicyTemplateCommandError
 */
const de_UpdatePolicyTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePolicyTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.verifiedpermissions#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.verifiedpermissions#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.verifiedpermissions#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.verifiedpermissions#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.verifiedpermissions#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.verifiedpermissions#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionIdentifier omitted.

/**
 * serializeAws_json1_0AttributeValue
 */
const se_AttributeValue = (input: AttributeValue, context: __SerdeContext): any => {
  return AttributeValue.visit(input, {
    boolean: (value) => ({ boolean: value }),
    entityIdentifier: (value) => ({ entityIdentifier: _json(value) }),
    long: (value) => ({ long: value }),
    record: (value) => ({ record: se_RecordAttribute(value, context) }),
    set: (value) => ({ set: se_SetAttribute(value, context) }),
    string: (value) => ({ string: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_ClientIds omitted.

// se_CognitoUserPoolConfiguration omitted.

// se_Configuration omitted.

/**
 * serializeAws_json1_0ContextDefinition
 */
const se_ContextDefinition = (input: ContextDefinition, context: __SerdeContext): any => {
  return ContextDefinition.visit(input, {
    contextMap: (value) => ({ contextMap: se_ContextMap(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0ContextMap
 */
const se_ContextMap = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0CreateIdentitySourceInput
 */
const se_CreateIdentitySourceInput = (input: CreateIdentitySourceInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    configuration: _json,
    policyStoreId: [],
    principalEntityType: [],
  });
};

/**
 * serializeAws_json1_0CreatePolicyInput
 */
const se_CreatePolicyInput = (input: CreatePolicyInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    definition: _json,
    policyStoreId: [],
  });
};

/**
 * serializeAws_json1_0CreatePolicyStoreInput
 */
const se_CreatePolicyStoreInput = (input: CreatePolicyStoreInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    validationSettings: _json,
  });
};

/**
 * serializeAws_json1_0CreatePolicyTemplateInput
 */
const se_CreatePolicyTemplateInput = (input: CreatePolicyTemplateInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    policyStoreId: [],
    statement: [],
  });
};

// se_DeleteIdentitySourceInput omitted.

// se_DeletePolicyInput omitted.

// se_DeletePolicyStoreInput omitted.

// se_DeletePolicyTemplateInput omitted.

/**
 * serializeAws_json1_0EntitiesDefinition
 */
const se_EntitiesDefinition = (input: EntitiesDefinition, context: __SerdeContext): any => {
  return EntitiesDefinition.visit(input, {
    entityList: (value) => ({ entityList: se_EntityList(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0EntityAttributes
 */
const se_EntityAttributes = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

// se_EntityIdentifier omitted.

/**
 * serializeAws_json1_0EntityItem
 */
const se_EntityItem = (input: EntityItem, context: __SerdeContext): any => {
  return take(input, {
    attributes: (_) => se_EntityAttributes(_, context),
    identifier: _json,
    parents: _json,
  });
};

/**
 * serializeAws_json1_0EntityList
 */
const se_EntityList = (input: EntityItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EntityItem(entry, context);
    });
};

// se_EntityReference omitted.

// se_GetIdentitySourceInput omitted.

// se_GetPolicyInput omitted.

// se_GetPolicyStoreInput omitted.

// se_GetPolicyTemplateInput omitted.

// se_GetSchemaInput omitted.

// se_IdentitySourceFilter omitted.

// se_IdentitySourceFilters omitted.

/**
 * serializeAws_json1_0IsAuthorizedInput
 */
const se_IsAuthorizedInput = (input: IsAuthorizedInput, context: __SerdeContext): any => {
  return take(input, {
    action: _json,
    context: (_) => se_ContextDefinition(_, context),
    entities: (_) => se_EntitiesDefinition(_, context),
    policyStoreId: [],
    principal: _json,
    resource: _json,
  });
};

/**
 * serializeAws_json1_0IsAuthorizedWithTokenInput
 */
const se_IsAuthorizedWithTokenInput = (input: IsAuthorizedWithTokenInput, context: __SerdeContext): any => {
  return take(input, {
    accessToken: [],
    action: _json,
    context: (_) => se_ContextDefinition(_, context),
    entities: (_) => se_EntitiesDefinition(_, context),
    identityToken: [],
    policyStoreId: [],
    resource: _json,
  });
};

// se_ListIdentitySourcesInput omitted.

// se_ListPoliciesInput omitted.

// se_ListPolicyStoresInput omitted.

// se_ListPolicyTemplatesInput omitted.

// se_ParentList omitted.

// se_PolicyDefinition omitted.

// se_PolicyFilter omitted.

// se_PutSchemaInput omitted.

/**
 * serializeAws_json1_0RecordAttribute
 */
const se_RecordAttribute = (input: Record<string, AttributeValue>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AttributeValue(value, context);
    return acc;
  }, {});
};

// se_SchemaDefinition omitted.

/**
 * serializeAws_json1_0SetAttribute
 */
const se_SetAttribute = (input: AttributeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeValue(entry, context);
    });
};

// se_StaticPolicyDefinition omitted.

// se_TemplateLinkedPolicyDefinition omitted.

// se_UpdateCognitoUserPoolConfiguration omitted.

// se_UpdateConfiguration omitted.

// se_UpdateIdentitySourceInput omitted.

// se_UpdatePolicyDefinition omitted.

// se_UpdatePolicyInput omitted.

// se_UpdatePolicyStoreInput omitted.

// se_UpdatePolicyTemplateInput omitted.

// se_UpdateStaticPolicyDefinition omitted.

// se_ValidationSettings omitted.

// de_AccessDeniedException omitted.

// de_ClientIds omitted.

// de_ConflictException omitted.

/**
 * deserializeAws_json1_0CreateIdentitySourceOutput
 */
const de_CreateIdentitySourceOutput = (output: any, context: __SerdeContext): CreateIdentitySourceOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePolicyOutput
 */
const de_CreatePolicyOutput = (output: any, context: __SerdeContext): CreatePolicyOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePolicyStoreOutput
 */
const de_CreatePolicyStoreOutput = (output: any, context: __SerdeContext): CreatePolicyStoreOutput => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0CreatePolicyTemplateOutput
 */
const de_CreatePolicyTemplateOutput = (output: any, context: __SerdeContext): CreatePolicyTemplateOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
  }) as any;
};

// de_DeleteIdentitySourceOutput omitted.

// de_DeletePolicyOutput omitted.

// de_DeletePolicyStoreOutput omitted.

// de_DeletePolicyTemplateOutput omitted.

// de_DeterminingPolicyItem omitted.

// de_DeterminingPolicyList omitted.

// de_EntityIdentifier omitted.

// de_EvaluationErrorItem omitted.

// de_EvaluationErrorList omitted.

/**
 * deserializeAws_json1_0GetIdentitySourceOutput
 */
const de_GetIdentitySourceOutput = (output: any, context: __SerdeContext): GetIdentitySourceOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    details: _json,
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    principalEntityType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPolicyOutput
 */
const de_GetPolicyOutput = (output: any, context: __SerdeContext): GetPolicyOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: (_: any) => _json(__expectUnion(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPolicyStoreOutput
 */
const de_GetPolicyStoreOutput = (output: any, context: __SerdeContext): GetPolicyStoreOutput => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    validationSettings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0GetPolicyTemplateOutput
 */
const de_GetPolicyTemplateOutput = (output: any, context: __SerdeContext): GetPolicyTemplateOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
    statement: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0GetSchemaOutput
 */
const de_GetSchemaOutput = (output: any, context: __SerdeContext): GetSchemaOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    schema: __expectString,
  }) as any;
};

// de_IdentitySourceDetails omitted.

/**
 * deserializeAws_json1_0IdentitySourceItem
 */
const de_IdentitySourceItem = (output: any, context: __SerdeContext): IdentitySourceItem => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    details: _json,
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    principalEntityType: __expectString,
  }) as any;
};

// de_IdentitySourceItemDetails omitted.

/**
 * deserializeAws_json1_0IdentitySources
 */
const de_IdentitySources = (output: any, context: __SerdeContext): IdentitySourceItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IdentitySourceItem(entry, context);
    });
  return retVal;
};

// de_InternalServerException omitted.

// de_IsAuthorizedOutput omitted.

// de_IsAuthorizedWithTokenOutput omitted.

/**
 * deserializeAws_json1_0ListIdentitySourcesOutput
 */
const de_ListIdentitySourcesOutput = (output: any, context: __SerdeContext): ListIdentitySourcesOutput => {
  return take(output, {
    identitySources: (_: any) => de_IdentitySources(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListPoliciesOutput
 */
const de_ListPoliciesOutput = (output: any, context: __SerdeContext): ListPoliciesOutput => {
  return take(output, {
    nextToken: __expectString,
    policies: (_: any) => de_PolicyList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListPolicyStoresOutput
 */
const de_ListPolicyStoresOutput = (output: any, context: __SerdeContext): ListPolicyStoresOutput => {
  return take(output, {
    nextToken: __expectString,
    policyStores: (_: any) => de_PolicyStoreList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListPolicyTemplatesOutput
 */
const de_ListPolicyTemplatesOutput = (output: any, context: __SerdeContext): ListPolicyTemplatesOutput => {
  return take(output, {
    nextToken: __expectString,
    policyTemplates: (_: any) => de_PolicyTemplatesList(_, context),
  }) as any;
};

// de_NamespaceList omitted.

// de_PolicyDefinitionDetail omitted.

// de_PolicyDefinitionItem omitted.

/**
 * deserializeAws_json1_0PolicyItem
 */
const de_PolicyItem = (output: any, context: __SerdeContext): PolicyItem => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    definition: (_: any) => _json(__expectUnion(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0PolicyList
 */
const de_PolicyList = (output: any, context: __SerdeContext): PolicyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PolicyStoreItem
 */
const de_PolicyStoreItem = (output: any, context: __SerdeContext): PolicyStoreItem => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0PolicyStoreList
 */
const de_PolicyStoreList = (output: any, context: __SerdeContext): PolicyStoreItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyStoreItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PolicyTemplateItem
 */
const de_PolicyTemplateItem = (output: any, context: __SerdeContext): PolicyTemplateItem => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0PolicyTemplatesList
 */
const de_PolicyTemplatesList = (output: any, context: __SerdeContext): PolicyTemplateItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PolicyTemplateItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PutSchemaOutput
 */
const de_PutSchemaOutput = (output: any, context: __SerdeContext): PutSchemaOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    namespaces: _json,
    policyStoreId: __expectString,
  }) as any;
};

// de_ResourceConflict omitted.

// de_ResourceConflictList omitted.

// de_ResourceNotFoundException omitted.

// de_ServiceQuotaExceededException omitted.

// de_StaticPolicyDefinitionDetail omitted.

// de_StaticPolicyDefinitionItem omitted.

// de_TemplateLinkedPolicyDefinitionDetail omitted.

// de_TemplateLinkedPolicyDefinitionItem omitted.

// de_ThrottlingException omitted.

/**
 * deserializeAws_json1_0UpdateIdentitySourceOutput
 */
const de_UpdateIdentitySourceOutput = (output: any, context: __SerdeContext): UpdateIdentitySourceOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    identitySourceId: __expectString,
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePolicyOutput
 */
const de_UpdatePolicyOutput = (output: any, context: __SerdeContext): UpdatePolicyOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyId: __expectString,
    policyStoreId: __expectString,
    policyType: __expectString,
    principal: _json,
    resource: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePolicyStoreOutput
 */
const de_UpdatePolicyStoreOutput = (output: any, context: __SerdeContext): UpdatePolicyStoreOutput => {
  return take(output, {
    arn: __expectString,
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0UpdatePolicyTemplateOutput
 */
const de_UpdatePolicyTemplateOutput = (output: any, context: __SerdeContext): UpdatePolicyTemplateOutput => {
  return take(output, {
    createdDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    lastUpdatedDate: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    policyStoreId: __expectString,
    policyTemplateId: __expectString,
  }) as any;
};

// de_ValidationException omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_ValidationSettings omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `VerifiedPermissions.${operation}`,
  };
}

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
