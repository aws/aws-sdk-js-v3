// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AssociateProfileCommandInput, AssociateProfileCommandOutput } from "../commands/AssociateProfileCommand";
import {
  AssociateResourceToProfileCommandInput,
  AssociateResourceToProfileCommandOutput,
} from "../commands/AssociateResourceToProfileCommand";
import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import {
  DisassociateProfileCommandInput,
  DisassociateProfileCommandOutput,
} from "../commands/DisassociateProfileCommand";
import {
  DisassociateResourceFromProfileCommandInput,
  DisassociateResourceFromProfileCommandOutput,
} from "../commands/DisassociateResourceFromProfileCommand";
import {
  GetProfileAssociationCommandInput,
  GetProfileAssociationCommandOutput,
} from "../commands/GetProfileAssociationCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import {
  GetProfileResourceAssociationCommandInput,
  GetProfileResourceAssociationCommandOutput,
} from "../commands/GetProfileResourceAssociationCommand";
import {
  ListProfileAssociationsCommandInput,
  ListProfileAssociationsCommandOutput,
} from "../commands/ListProfileAssociationsCommand";
import {
  ListProfileResourceAssociationsCommandInput,
  ListProfileResourceAssociationsCommandOutput,
} from "../commands/ListProfileResourceAssociationsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "../commands/ListProfilesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateProfileResourceAssociationCommandInput,
  UpdateProfileResourceAssociationCommandOutput,
} from "../commands/UpdateProfileResourceAssociationCommand";
import {
  AccessDeniedException,
  ConflictException,
  InternalServiceErrorException,
  InvalidNextTokenException,
  InvalidParameterException,
  LimitExceededException,
  Profile,
  ProfileAssociation,
  ProfileResourceAssociation,
  ResourceExistsException,
  ResourceNotFoundException,
  Tag,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { Route53ProfilesServiceException as __BaseException } from "../models/Route53ProfilesServiceException";

/**
 * serializeAws_restJson1AssociateProfileCommand
 */
export const se_AssociateProfileCommand = async (
  input: AssociateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profileassociation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ProfileId: [],
      ResourceId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateResourceToProfileCommand
 */
export const se_AssociateResourceToProfileCommand = async (
  input: AssociateResourceToProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profileresourceassociation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ProfileId: [],
      ResourceArn: [],
      ResourceProperties: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProfileCommand
 */
export const se_CreateProfileCommand = async (
  input: CreateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profile");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Name: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profile/{ProfileId}");
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateProfileCommand
 */
export const se_DisassociateProfileCommand = async (
  input: DisassociateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}");
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  b.p("ResourceId", () => input.ResourceId!, "{ResourceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateResourceFromProfileCommand
 */
export const se_DisassociateResourceFromProfileCommand = async (
  input: DisassociateResourceFromProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}");
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profile/{ProfileId}");
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileAssociationCommand
 */
export const se_GetProfileAssociationCommand = async (
  input: GetProfileAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileassociation/{ProfileAssociationId}");
  b.p("ProfileAssociationId", () => input.ProfileAssociationId!, "{ProfileAssociationId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProfileResourceAssociationCommand
 */
export const se_GetProfileResourceAssociationCommand = async (
  input: GetProfileResourceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileresourceassociation/{ProfileResourceAssociationId}");
  b.p(
    "ProfileResourceAssociationId",
    () => input.ProfileResourceAssociationId!,
    "{ProfileResourceAssociationId}",
    false
  );
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileAssociationsCommand
 */
export const se_ListProfileAssociationsCommand = async (
  input: ListProfileAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileassociations");
  const query: any = map({
    [_rI]: [, input[_RI]!],
    [_pI]: [, input[_PI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfileResourceAssociationsCommand
 */
export const se_ListProfileResourceAssociationsCommand = async (
  input: ListProfileResourceAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profileresourceassociations/profileid/{ProfileId}");
  b.p("ProfileId", () => input.ProfileId!, "{ProfileId}", false);
  const query: any = map({
    [_rT]: [, input[_RT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProfilesCommand
 */
export const se_ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profiles");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProfileResourceAssociationCommand
 */
export const se_UpdateProfileResourceAssociationCommand = async (
  input: UpdateProfileResourceAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profileresourceassociation/{ProfileResourceAssociationId}");
  b.p(
    "ProfileResourceAssociationId",
    () => input.ProfileResourceAssociationId!,
    "{ProfileResourceAssociationId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      Name: [],
      ResourceProperties: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateProfileCommand
 */
export const de_AssociateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileAssociation: (_) => de_ProfileAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateResourceToProfileCommand
 */
export const de_AssociateResourceToProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateResourceToProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileResourceAssociation: (_) => de_ProfileResourceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Profile: (_) => de_Profile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Profile: (_) => de_Profile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateProfileCommand
 */
export const de_DisassociateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileAssociation: (_) => de_ProfileAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateResourceFromProfileCommand
 */
export const de_DisassociateResourceFromProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateResourceFromProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileResourceAssociation: (_) => de_ProfileResourceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Profile: (_) => de_Profile(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileAssociationCommand
 */
export const de_GetProfileAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileAssociation: (_) => de_ProfileAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileResourceAssociationCommand
 */
export const de_GetProfileResourceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileResourceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileResourceAssociation: (_) => de_ProfileResourceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileAssociationsCommand
 */
export const de_ListProfileAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProfileAssociations: (_) => de_ProfileAssociations(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfileResourceAssociationsCommand
 */
export const de_ListProfileResourceAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfileResourceAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProfileResourceAssociations: (_) => de_ProfileResourceAssociations(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilesCommand
 */
export const de_ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ProfileSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProfileResourceAssociationCommand
 */
export const de_UpdateProfileResourceAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileResourceAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProfileResourceAssociation: (_) => de_ProfileResourceAssociation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53profiles#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.route53profiles#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.route53profiles#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.route53profiles#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceExistsException":
    case "com.amazonaws.route53profiles#ResourceExistsException":
      throw await de_ResourceExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.route53profiles#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.route53profiles#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.route53profiles#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "InternalServiceErrorException":
    case "com.amazonaws.route53profiles#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.route53profiles#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    FieldName: __expectString,
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceExistsExceptionRes
 */
const de_ResourceExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Tag omitted.

// se_TagList omitted.

// se_TagMap omitted.

/**
 * deserializeAws_restJson1Profile
 */
const de_Profile = (output: any, context: __SerdeContext): Profile => {
  return take(output, {
    Arn: __expectString,
    ClientToken: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    ModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerId: __expectString,
    ShareStatus: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileAssociation
 */
const de_ProfileAssociation = (output: any, context: __SerdeContext): ProfileAssociation => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    ModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerId: __expectString,
    ProfileId: __expectString,
    ResourceId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileAssociations
 */
const de_ProfileAssociations = (output: any, context: __SerdeContext): ProfileAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProfileResourceAssociation
 */
const de_ProfileResourceAssociation = (output: any, context: __SerdeContext): ProfileResourceAssociation => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    ModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    OwnerId: __expectString,
    ProfileId: __expectString,
    ResourceArn: __expectString,
    ResourceProperties: __expectString,
    ResourceType: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileResourceAssociations
 */
const de_ProfileResourceAssociations = (output: any, context: __SerdeContext): ProfileResourceAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileResourceAssociation(entry, context);
    });
  return retVal;
};

// de_ProfileSummary omitted.

// de_ProfileSummaryList omitted.

// de_TagMap omitted.

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

const _MR = "MaxResults";
const _NT = "NextToken";
const _PI = "ProfileId";
const _RI = "ResourceId";
const _RT = "ResourceType";
const _TK = "TagKeys";
const _mR = "maxResults";
const _nT = "nextToken";
const _pI = "profileId";
const _rI = "resourceId";
const _rT = "resourceType";
const _tK = "tagKeys";
