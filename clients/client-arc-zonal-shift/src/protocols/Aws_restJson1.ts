// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelZonalShiftCommandInput, CancelZonalShiftCommandOutput } from "../commands/CancelZonalShiftCommand";
import { GetManagedResourceCommandInput, GetManagedResourceCommandOutput } from "../commands/GetManagedResourceCommand";
import {
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput,
} from "../commands/ListManagedResourcesCommand";
import { ListZonalShiftsCommandInput, ListZonalShiftsCommandOutput } from "../commands/ListZonalShiftsCommand";
import { StartZonalShiftCommandInput, StartZonalShiftCommandOutput } from "../commands/StartZonalShiftCommand";
import { UpdateZonalShiftCommandInput, UpdateZonalShiftCommandOutput } from "../commands/UpdateZonalShiftCommand";
import { ARCZonalShiftServiceException as __BaseException } from "../models/ARCZonalShiftServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ManagedResourceSummary,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
  ZonalShiftInResource,
  ZonalShiftSummary,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelZonalShiftCommand
 */
export const se_CancelZonalShiftCommand = async (
  input: CancelZonalShiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/zonalshifts/{zonalShiftId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "zonalShiftId",
    () => input.zonalShiftId!,
    "{zonalShiftId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetManagedResourceCommand
 */
export const se_GetManagedResourceCommand = async (
  input: GetManagedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/managedresources/{resourceIdentifier}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "resourceIdentifier",
    () => input.resourceIdentifier!,
    "{resourceIdentifier}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListManagedResourcesCommand
 */
export const se_ListManagedResourcesCommand = async (
  input: ListManagedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/managedresources";
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListZonalShiftsCommand
 */
export const se_ListZonalShiftsCommand = async (
  input: ListZonalShiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/zonalshifts";
  const query: any = map({
    nextToken: [, input.nextToken!],
    status: [, input.status!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1StartZonalShiftCommand
 */
export const se_StartZonalShiftCommand = async (
  input: StartZonalShiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/zonalshifts";
  let body: any;
  body = JSON.stringify({
    ...(input.awayFrom != null && { awayFrom: input.awayFrom }),
    ...(input.comment != null && { comment: input.comment }),
    ...(input.expiresIn != null && { expiresIn: input.expiresIn }),
    ...(input.resourceIdentifier != null && { resourceIdentifier: input.resourceIdentifier }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateZonalShiftCommand
 */
export const se_UpdateZonalShiftCommand = async (
  input: UpdateZonalShiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/zonalshifts/{zonalShiftId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "zonalShiftId",
    () => input.zonalShiftId!,
    "{zonalShiftId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.comment != null && { comment: input.comment }),
    ...(input.expiresIn != null && { expiresIn: input.expiresIn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CancelZonalShiftCommand
 */
export const de_CancelZonalShiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelZonalShiftCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelZonalShiftCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.awayFrom != null) {
    contents.awayFrom = __expectString(data.awayFrom);
  }
  if (data.comment != null) {
    contents.comment = __expectString(data.comment);
  }
  if (data.expiryTime != null) {
    contents.expiryTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.expiryTime)));
  }
  if (data.resourceIdentifier != null) {
    contents.resourceIdentifier = __expectString(data.resourceIdentifier);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.zonalShiftId != null) {
    contents.zonalShiftId = __expectString(data.zonalShiftId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelZonalShiftCommandError
 */
const de_CancelZonalShiftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelZonalShiftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arczonalshift#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.arczonalshift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arczonalshift#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.arczonalshift#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.arczonalshift#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.arczonalshift#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetManagedResourceCommand
 */
export const de_GetManagedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetManagedResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.appliedWeights != null) {
    contents.appliedWeights = de_AppliedWeights(data.appliedWeights, context);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.zonalShifts != null) {
    contents.zonalShifts = de_ZonalShiftsInResource(data.zonalShifts, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedResourceCommandError
 */
const de_GetManagedResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arczonalshift#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arczonalshift#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.arczonalshift#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.arczonalshift#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.arczonalshift#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListManagedResourcesCommand
 */
export const de_ListManagedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListManagedResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ManagedResourceSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedResourcesCommandError
 */
const de_ListManagedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arczonalshift#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arczonalshift#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.arczonalshift#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.arczonalshift#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListZonalShiftsCommand
 */
export const de_ListZonalShiftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListZonalShiftsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListZonalShiftsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.items != null) {
    contents.items = de_ZonalShiftSummaries(data.items, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListZonalShiftsCommandError
 */
const de_ListZonalShiftsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListZonalShiftsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arczonalshift#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arczonalshift#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.arczonalshift#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.arczonalshift#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartZonalShiftCommand
 */
export const de_StartZonalShiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartZonalShiftCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_StartZonalShiftCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.awayFrom != null) {
    contents.awayFrom = __expectString(data.awayFrom);
  }
  if (data.comment != null) {
    contents.comment = __expectString(data.comment);
  }
  if (data.expiryTime != null) {
    contents.expiryTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.expiryTime)));
  }
  if (data.resourceIdentifier != null) {
    contents.resourceIdentifier = __expectString(data.resourceIdentifier);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.zonalShiftId != null) {
    contents.zonalShiftId = __expectString(data.zonalShiftId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartZonalShiftCommandError
 */
const de_StartZonalShiftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartZonalShiftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arczonalshift#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.arczonalshift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arczonalshift#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.arczonalshift#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.arczonalshift#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.arczonalshift#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateZonalShiftCommand
 */
export const de_UpdateZonalShiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateZonalShiftCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateZonalShiftCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.awayFrom != null) {
    contents.awayFrom = __expectString(data.awayFrom);
  }
  if (data.comment != null) {
    contents.comment = __expectString(data.comment);
  }
  if (data.expiryTime != null) {
    contents.expiryTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.expiryTime)));
  }
  if (data.resourceIdentifier != null) {
    contents.resourceIdentifier = __expectString(data.resourceIdentifier);
  }
  if (data.startTime != null) {
    contents.startTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.zonalShiftId != null) {
    contents.zonalShiftId = __expectString(data.zonalShiftId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateZonalShiftCommandError
 */
const de_UpdateZonalShiftCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateZonalShiftCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.arczonalshift#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.arczonalshift#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.arczonalshift#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.arczonalshift#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.arczonalshift#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.arczonalshift#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  if (data.zonalShiftId != null) {
    contents.zonalShiftId = __expectString(data.zonalShiftId);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AppliedWeights
 */
const de_AppliedWeights = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __limitedParseFloat32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AvailabilityZones
 */
const de_AvailabilityZones = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ManagedResourceSummaries
 */
const de_ManagedResourceSummaries = (output: any, context: __SerdeContext): ManagedResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ManagedResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ManagedResourceSummary
 */
const de_ManagedResourceSummary = (output: any, context: __SerdeContext): ManagedResourceSummary => {
  return {
    arn: __expectString(output.arn),
    availabilityZones:
      output.availabilityZones != null ? de_AvailabilityZones(output.availabilityZones, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ZonalShiftInResource
 */
const de_ZonalShiftInResource = (output: any, context: __SerdeContext): ZonalShiftInResource => {
  return {
    appliedStatus: __expectString(output.appliedStatus),
    awayFrom: __expectString(output.awayFrom),
    comment: __expectString(output.comment),
    expiryTime:
      output.expiryTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiryTime))) : undefined,
    resourceIdentifier: __expectString(output.resourceIdentifier),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    zonalShiftId: __expectString(output.zonalShiftId),
  } as any;
};

/**
 * deserializeAws_restJson1ZonalShiftsInResource
 */
const de_ZonalShiftsInResource = (output: any, context: __SerdeContext): ZonalShiftInResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ZonalShiftInResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ZonalShiftSummaries
 */
const de_ZonalShiftSummaries = (output: any, context: __SerdeContext): ZonalShiftSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ZonalShiftSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ZonalShiftSummary
 */
const de_ZonalShiftSummary = (output: any, context: __SerdeContext): ZonalShiftSummary => {
  return {
    awayFrom: __expectString(output.awayFrom),
    comment: __expectString(output.comment),
    expiryTime:
      output.expiryTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expiryTime))) : undefined,
    resourceIdentifier: __expectString(output.resourceIdentifier),
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
    status: __expectString(output.status),
    zonalShiftId: __expectString(output.zonalShiftId),
  } as any;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
