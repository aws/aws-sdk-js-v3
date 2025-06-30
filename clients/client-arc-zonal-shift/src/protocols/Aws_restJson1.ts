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
  limitedParseFloat32 as __limitedParseFloat32,
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

import { CancelPracticeRunCommandInput, CancelPracticeRunCommandOutput } from "../commands/CancelPracticeRunCommand";
import { CancelZonalShiftCommandInput, CancelZonalShiftCommandOutput } from "../commands/CancelZonalShiftCommand";
import {
  CreatePracticeRunConfigurationCommandInput,
  CreatePracticeRunConfigurationCommandOutput,
} from "../commands/CreatePracticeRunConfigurationCommand";
import {
  DeletePracticeRunConfigurationCommandInput,
  DeletePracticeRunConfigurationCommandOutput,
} from "../commands/DeletePracticeRunConfigurationCommand";
import {
  GetAutoshiftObserverNotificationStatusCommandInput,
  GetAutoshiftObserverNotificationStatusCommandOutput,
} from "../commands/GetAutoshiftObserverNotificationStatusCommand";
import { GetManagedResourceCommandInput, GetManagedResourceCommandOutput } from "../commands/GetManagedResourceCommand";
import { ListAutoshiftsCommandInput, ListAutoshiftsCommandOutput } from "../commands/ListAutoshiftsCommand";
import {
  ListManagedResourcesCommandInput,
  ListManagedResourcesCommandOutput,
} from "../commands/ListManagedResourcesCommand";
import { ListZonalShiftsCommandInput, ListZonalShiftsCommandOutput } from "../commands/ListZonalShiftsCommand";
import { StartPracticeRunCommandInput, StartPracticeRunCommandOutput } from "../commands/StartPracticeRunCommand";
import { StartZonalShiftCommandInput, StartZonalShiftCommandOutput } from "../commands/StartZonalShiftCommand";
import {
  UpdateAutoshiftObserverNotificationStatusCommandInput,
  UpdateAutoshiftObserverNotificationStatusCommandOutput,
} from "../commands/UpdateAutoshiftObserverNotificationStatusCommand";
import {
  UpdatePracticeRunConfigurationCommandInput,
  UpdatePracticeRunConfigurationCommandOutput,
} from "../commands/UpdatePracticeRunConfigurationCommand";
import {
  UpdateZonalAutoshiftConfigurationCommandInput,
  UpdateZonalAutoshiftConfigurationCommandOutput,
} from "../commands/UpdateZonalAutoshiftConfigurationCommand";
import { UpdateZonalShiftCommandInput, UpdateZonalShiftCommandOutput } from "../commands/UpdateZonalShiftCommand";
import { ARCZonalShiftServiceException as __BaseException } from "../models/ARCZonalShiftServiceException";
import {
  AccessDeniedException,
  AutoshiftInResource,
  AutoshiftSummary,
  ConflictException,
  ControlCondition,
  InternalServerException,
  ManagedResourceSummary,
  ResourceNotFoundException,
  ThrottlingException,
  ValidationException,
  ZonalShiftInResource,
  ZonalShiftSummary,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelPracticeRunCommand
 */
export const se_CancelPracticeRunCommand = async (
  input: CancelPracticeRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/practiceruns/{zonalShiftId}");
  b.p("zonalShiftId", () => input.zonalShiftId!, "{zonalShiftId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelZonalShiftCommand
 */
export const se_CancelZonalShiftCommand = async (
  input: CancelZonalShiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/zonalshifts/{zonalShiftId}");
  b.p("zonalShiftId", () => input.zonalShiftId!, "{zonalShiftId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePracticeRunConfigurationCommand
 */
export const se_CreatePracticeRunConfigurationCommand = async (
  input: CreatePracticeRunConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedDates: (_) => _json(_),
      blockedWindows: (_) => _json(_),
      blockingAlarms: (_) => _json(_),
      outcomeAlarms: (_) => _json(_),
      resourceIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePracticeRunConfigurationCommand
 */
export const se_DeletePracticeRunConfigurationCommand = async (
  input: DeletePracticeRunConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configuration/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAutoshiftObserverNotificationStatusCommand
 */
export const se_GetAutoshiftObserverNotificationStatusCommand = async (
  input: GetAutoshiftObserverNotificationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/autoshift-observer-notification");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetManagedResourceCommand
 */
export const se_GetManagedResourceCommand = async (
  input: GetManagedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managedresources/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAutoshiftsCommand
 */
export const se_ListAutoshiftsCommand = async (
  input: ListAutoshiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/autoshifts");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListManagedResourcesCommand
 */
export const se_ListManagedResourcesCommand = async (
  input: ListManagedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/managedresources");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListZonalShiftsCommand
 */
export const se_ListZonalShiftsCommand = async (
  input: ListZonalShiftsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/zonalshifts");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_s]: [, input[_s]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_rI]: [, input[_rI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartPracticeRunCommand
 */
export const se_StartPracticeRunCommand = async (
  input: StartPracticeRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/practiceruns");
  let body: any;
  body = JSON.stringify(
    take(input, {
      awayFrom: [],
      comment: [],
      resourceIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartZonalShiftCommand
 */
export const se_StartZonalShiftCommand = async (
  input: StartZonalShiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/zonalshifts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      awayFrom: [],
      comment: [],
      expiresIn: [],
      resourceIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAutoshiftObserverNotificationStatusCommand
 */
export const se_UpdateAutoshiftObserverNotificationStatusCommand = async (
  input: UpdateAutoshiftObserverNotificationStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/autoshift-observer-notification");
  let body: any;
  body = JSON.stringify(
    take(input, {
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdatePracticeRunConfigurationCommand
 */
export const se_UpdatePracticeRunConfigurationCommand = async (
  input: UpdatePracticeRunConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configuration/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedDates: (_) => _json(_),
      blockedWindows: (_) => _json(_),
      blockingAlarms: (_) => _json(_),
      outcomeAlarms: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateZonalAutoshiftConfigurationCommand
 */
export const se_UpdateZonalAutoshiftConfigurationCommand = async (
  input: UpdateZonalAutoshiftConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/managedresources/{resourceIdentifier}");
  b.p("resourceIdentifier", () => input.resourceIdentifier!, "{resourceIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      zonalAutoshiftStatus: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateZonalShiftCommand
 */
export const se_UpdateZonalShiftCommand = async (
  input: UpdateZonalShiftCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/zonalshifts/{zonalShiftId}");
  b.p("zonalShiftId", () => input.zonalShiftId!, "{zonalShiftId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      comment: [],
      expiresIn: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelPracticeRunCommand
 */
export const de_CancelPracticeRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelPracticeRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    zonalShiftId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CancelZonalShiftCommand
 */
export const de_CancelZonalShiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelZonalShiftCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    zonalShiftId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePracticeRunConfigurationCommand
 */
export const de_CreatePracticeRunConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePracticeRunConfigurationCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    name: __expectString,
    practiceRunConfiguration: _json,
    zonalAutoshiftStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePracticeRunConfigurationCommand
 */
export const de_DeletePracticeRunConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePracticeRunConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    name: __expectString,
    zonalAutoshiftStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAutoshiftObserverNotificationStatusCommand
 */
export const de_GetAutoshiftObserverNotificationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAutoshiftObserverNotificationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetManagedResourceCommand
 */
export const de_GetManagedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetManagedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    appliedWeights: (_) => de_AppliedWeights(_, context),
    arn: __expectString,
    autoshifts: (_) => de_AutoshiftsInResource(_, context),
    name: __expectString,
    practiceRunConfiguration: _json,
    zonalAutoshiftStatus: __expectString,
    zonalShifts: (_) => de_ZonalShiftsInResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAutoshiftsCommand
 */
export const de_ListAutoshiftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoshiftsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_AutoshiftSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListManagedResourcesCommand
 */
export const de_ListManagedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ManagedResourceSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListZonalShiftsCommand
 */
export const de_ListZonalShiftsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListZonalShiftsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    items: (_) => de_ZonalShiftSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartPracticeRunCommand
 */
export const de_StartPracticeRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPracticeRunCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    zonalShiftId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartZonalShiftCommand
 */
export const de_StartZonalShiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartZonalShiftCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    zonalShiftId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAutoshiftObserverNotificationStatusCommand
 */
export const de_UpdateAutoshiftObserverNotificationStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAutoshiftObserverNotificationStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePracticeRunConfigurationCommand
 */
export const de_UpdatePracticeRunConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePracticeRunConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    name: __expectString,
    practiceRunConfiguration: _json,
    zonalAutoshiftStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateZonalAutoshiftConfigurationCommand
 */
export const de_UpdateZonalAutoshiftConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateZonalAutoshiftConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    resourceIdentifier: __expectString,
    zonalAutoshiftStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateZonalShiftCommand
 */
export const de_UpdateZonalShiftCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateZonalShiftCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceIdentifier: __expectString,
    startTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    zonalShiftId: __expectString,
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
    message: __expectString,
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
    message: __expectString,
    reason: __expectString,
    zonalShiftId: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
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
    message: __expectString,
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
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_BlockedDates omitted.

// se_BlockedWindows omitted.

// se_ControlCondition omitted.

// se_ControlConditions omitted.

/**
 * deserializeAws_restJson1AppliedWeights
 */
const de_AppliedWeights = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = __limitedParseFloat32(value) as any;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeAws_restJson1AutoshiftInResource
 */
const de_AutoshiftInResource = (output: any, context: __SerdeContext): AutoshiftInResource => {
  return take(output, {
    appliedStatus: __expectString,
    awayFrom: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AutoshiftsInResource
 */
const de_AutoshiftsInResource = (output: any, context: __SerdeContext): AutoshiftInResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoshiftInResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoshiftSummaries
 */
const de_AutoshiftSummaries = (output: any, context: __SerdeContext): AutoshiftSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoshiftSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoshiftSummary
 */
const de_AutoshiftSummary = (output: any, context: __SerdeContext): AutoshiftSummary => {
  return take(output, {
    awayFrom: __expectString,
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_AvailabilityZones omitted.

// de_BlockedDates omitted.

// de_BlockedWindows omitted.

// de_ControlCondition omitted.

// de_ControlConditions omitted.

/**
 * deserializeAws_restJson1ManagedResourceSummaries
 */
const de_ManagedResourceSummaries = (output: any, context: __SerdeContext): ManagedResourceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedResourceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ManagedResourceSummary
 */
const de_ManagedResourceSummary = (output: any, context: __SerdeContext): ManagedResourceSummary => {
  return take(output, {
    appliedWeights: (_: any) => de_AppliedWeights(_, context),
    arn: __expectString,
    autoshifts: (_: any) => de_AutoshiftsInResource(_, context),
    availabilityZones: _json,
    name: __expectString,
    practiceRunStatus: __expectString,
    zonalAutoshiftStatus: __expectString,
    zonalShifts: (_: any) => de_ZonalShiftsInResource(_, context),
  }) as any;
};

// de_PracticeRunConfiguration omitted.

/**
 * deserializeAws_restJson1ZonalShiftInResource
 */
const de_ZonalShiftInResource = (output: any, context: __SerdeContext): ZonalShiftInResource => {
  return take(output, {
    appliedStatus: __expectString,
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    practiceRunOutcome: __expectString,
    resourceIdentifier: __expectString,
    shiftType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    zonalShiftId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ZonalShiftsInResource
 */
const de_ZonalShiftsInResource = (output: any, context: __SerdeContext): ZonalShiftInResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_ZonalShiftSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ZonalShiftSummary
 */
const de_ZonalShiftSummary = (output: any, context: __SerdeContext): ZonalShiftSummary => {
  return take(output, {
    awayFrom: __expectString,
    comment: __expectString,
    expiryTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    practiceRunOutcome: __expectString,
    resourceIdentifier: __expectString,
    shiftType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    zonalShiftId: __expectString,
  }) as any;
};

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

const _mR = "maxResults";
const _nT = "nextToken";
const _rI = "resourceIdentifier";
const _s = "status";
