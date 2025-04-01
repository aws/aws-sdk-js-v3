// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateLandingZoneCommandInput, CreateLandingZoneCommandOutput } from "../commands/CreateLandingZoneCommand";
import { DeleteLandingZoneCommandInput, DeleteLandingZoneCommandOutput } from "../commands/DeleteLandingZoneCommand";
import { DisableBaselineCommandInput, DisableBaselineCommandOutput } from "../commands/DisableBaselineCommand";
import { DisableControlCommandInput, DisableControlCommandOutput } from "../commands/DisableControlCommand";
import { EnableBaselineCommandInput, EnableBaselineCommandOutput } from "../commands/EnableBaselineCommand";
import { EnableControlCommandInput, EnableControlCommandOutput } from "../commands/EnableControlCommand";
import { GetBaselineCommandInput, GetBaselineCommandOutput } from "../commands/GetBaselineCommand";
import {
  GetBaselineOperationCommandInput,
  GetBaselineOperationCommandOutput,
} from "../commands/GetBaselineOperationCommand";
import {
  GetControlOperationCommandInput,
  GetControlOperationCommandOutput,
} from "../commands/GetControlOperationCommand";
import { GetEnabledBaselineCommandInput, GetEnabledBaselineCommandOutput } from "../commands/GetEnabledBaselineCommand";
import { GetEnabledControlCommandInput, GetEnabledControlCommandOutput } from "../commands/GetEnabledControlCommand";
import { GetLandingZoneCommandInput, GetLandingZoneCommandOutput } from "../commands/GetLandingZoneCommand";
import {
  GetLandingZoneOperationCommandInput,
  GetLandingZoneOperationCommandOutput,
} from "../commands/GetLandingZoneOperationCommand";
import { ListBaselinesCommandInput, ListBaselinesCommandOutput } from "../commands/ListBaselinesCommand";
import {
  ListControlOperationsCommandInput,
  ListControlOperationsCommandOutput,
} from "../commands/ListControlOperationsCommand";
import {
  ListEnabledBaselinesCommandInput,
  ListEnabledBaselinesCommandOutput,
} from "../commands/ListEnabledBaselinesCommand";
import {
  ListEnabledControlsCommandInput,
  ListEnabledControlsCommandOutput,
} from "../commands/ListEnabledControlsCommand";
import {
  ListLandingZoneOperationsCommandInput,
  ListLandingZoneOperationsCommandOutput,
} from "../commands/ListLandingZoneOperationsCommand";
import { ListLandingZonesCommandInput, ListLandingZonesCommandOutput } from "../commands/ListLandingZonesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ResetEnabledBaselineCommandInput,
  ResetEnabledBaselineCommandOutput,
} from "../commands/ResetEnabledBaselineCommand";
import {
  ResetEnabledControlCommandInput,
  ResetEnabledControlCommandOutput,
} from "../commands/ResetEnabledControlCommand";
import { ResetLandingZoneCommandInput, ResetLandingZoneCommandOutput } from "../commands/ResetLandingZoneCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateEnabledBaselineCommandInput,
  UpdateEnabledBaselineCommandOutput,
} from "../commands/UpdateEnabledBaselineCommand";
import {
  UpdateEnabledControlCommandInput,
  UpdateEnabledControlCommandOutput,
} from "../commands/UpdateEnabledControlCommand";
import { UpdateLandingZoneCommandInput, UpdateLandingZoneCommandOutput } from "../commands/UpdateLandingZoneCommand";
import { ControlTowerServiceException as __BaseException } from "../models/ControlTowerServiceException";
import {
  AccessDeniedException,
  BaselineOperation,
  ConflictException,
  ControlOperation,
  ControlOperationFilter,
  ControlOperationStatus,
  ControlOperationSummary,
  ControlOperationType,
  DriftStatus,
  EnabledBaselineDetails,
  EnabledBaselineFilter,
  EnabledBaselineParameter,
  EnabledBaselineParameterSummary,
  EnabledControlDetails,
  EnabledControlFilter,
  EnabledControlParameter,
  EnabledControlParameterSummary,
  EnablementStatus,
  InternalServerException,
  LandingZoneDetail,
  LandingZoneOperationDetail,
  LandingZoneOperationFilter,
  LandingZoneOperationStatus,
  LandingZoneOperationType,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateLandingZoneCommand
 */
export const se_CreateLandingZoneCommand = async (
  input: CreateLandingZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/create-landingzone");
  let body: any;
  body = JSON.stringify(
    take(input, {
      manifest: (_) => se_Manifest(_, context),
      tags: (_) => _json(_),
      version: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLandingZoneCommand
 */
export const se_DeleteLandingZoneCommand = async (
  input: DeleteLandingZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/delete-landingzone");
  let body: any;
  body = JSON.stringify(
    take(input, {
      landingZoneIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableBaselineCommand
 */
export const se_DisableBaselineCommand = async (
  input: DisableBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disable-baseline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledBaselineIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableControlCommand
 */
export const se_DisableControlCommand = async (
  input: DisableControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/disable-control");
  let body: any;
  body = JSON.stringify(
    take(input, {
      controlIdentifier: [],
      targetIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableBaselineCommand
 */
export const se_EnableBaselineCommand = async (
  input: EnableBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/enable-baseline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baselineIdentifier: [],
      baselineVersion: [],
      parameters: (_) => se_EnabledBaselineParameters(_, context),
      tags: (_) => _json(_),
      targetIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableControlCommand
 */
export const se_EnableControlCommand = async (
  input: EnableControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/enable-control");
  let body: any;
  body = JSON.stringify(
    take(input, {
      controlIdentifier: [],
      parameters: (_) => se_EnabledControlParameters(_, context),
      tags: (_) => _json(_),
      targetIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBaselineCommand
 */
export const se_GetBaselineCommand = async (
  input: GetBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-baseline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baselineIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBaselineOperationCommand
 */
export const se_GetBaselineOperationCommand = async (
  input: GetBaselineOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-baseline-operation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      operationIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetControlOperationCommand
 */
export const se_GetControlOperationCommand = async (
  input: GetControlOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-control-operation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      operationIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnabledBaselineCommand
 */
export const se_GetEnabledBaselineCommand = async (
  input: GetEnabledBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-enabled-baseline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledBaselineIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEnabledControlCommand
 */
export const se_GetEnabledControlCommand = async (
  input: GetEnabledControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-enabled-control");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledControlIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLandingZoneCommand
 */
export const se_GetLandingZoneCommand = async (
  input: GetLandingZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-landingzone");
  let body: any;
  body = JSON.stringify(
    take(input, {
      landingZoneIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLandingZoneOperationCommand
 */
export const se_GetLandingZoneOperationCommand = async (
  input: GetLandingZoneOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/get-landingzone-operation");
  let body: any;
  body = JSON.stringify(
    take(input, {
      operationIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBaselinesCommand
 */
export const se_ListBaselinesCommand = async (
  input: ListBaselinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-baselines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListControlOperationsCommand
 */
export const se_ListControlOperationsCommand = async (
  input: ListControlOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-control-operations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnabledBaselinesCommand
 */
export const se_ListEnabledBaselinesCommand = async (
  input: ListEnabledBaselinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-enabled-baselines");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      includeChildren: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEnabledControlsCommand
 */
export const se_ListEnabledControlsCommand = async (
  input: ListEnabledControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-enabled-controls");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      targetIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLandingZoneOperationsCommand
 */
export const se_ListLandingZoneOperationsCommand = async (
  input: ListLandingZoneOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-landingzone-operations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLandingZonesCommand
 */
export const se_ListLandingZonesCommand = async (
  input: ListLandingZonesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/list-landingzones");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetEnabledBaselineCommand
 */
export const se_ResetEnabledBaselineCommand = async (
  input: ResetEnabledBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reset-enabled-baseline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledBaselineIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetEnabledControlCommand
 */
export const se_ResetEnabledControlCommand = async (
  input: ResetEnabledControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reset-enabled-control");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledControlIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetLandingZoneCommand
 */
export const se_ResetLandingZoneCommand = async (
  input: ResetLandingZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reset-landingzone");
  let body: any;
  body = JSON.stringify(
    take(input, {
      landingZoneIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnabledBaselineCommand
 */
export const se_UpdateEnabledBaselineCommand = async (
  input: UpdateEnabledBaselineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-enabled-baseline");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baselineVersion: [],
      enabledBaselineIdentifier: [],
      parameters: (_) => se_EnabledBaselineParameters(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateEnabledControlCommand
 */
export const se_UpdateEnabledControlCommand = async (
  input: UpdateEnabledControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-enabled-control");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabledControlIdentifier: [],
      parameters: (_) => se_EnabledControlParameters(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLandingZoneCommand
 */
export const se_UpdateLandingZoneCommand = async (
  input: UpdateLandingZoneCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/update-landingzone");
  let body: any;
  body = JSON.stringify(
    take(input, {
      landingZoneIdentifier: [],
      manifest: (_) => se_Manifest(_, context),
      version: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateLandingZoneCommand
 */
export const de_CreateLandingZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLandingZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLandingZoneCommand
 */
export const de_DeleteLandingZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLandingZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableBaselineCommand
 */
export const de_DisableBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableBaselineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableControlCommand
 */
export const de_DisableControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableBaselineCommand
 */
export const de_EnableBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableBaselineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableControlCommand
 */
export const de_EnableControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBaselineCommand
 */
export const de_GetBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaselineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    arn: __expectString,
    description: __expectString,
    name: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBaselineOperationCommand
 */
export const de_GetBaselineOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBaselineOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baselineOperation: (_) => de_BaselineOperation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetControlOperationCommand
 */
export const de_GetControlOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetControlOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlOperation: (_) => de_ControlOperation(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnabledBaselineCommand
 */
export const de_GetEnabledBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledBaselineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    enabledBaselineDetails: (_) => de_EnabledBaselineDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEnabledControlCommand
 */
export const de_GetEnabledControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    enabledControlDetails: (_) => de_EnabledControlDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLandingZoneCommand
 */
export const de_GetLandingZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLandingZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    landingZone: (_) => de_LandingZoneDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLandingZoneOperationCommand
 */
export const de_GetLandingZoneOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLandingZoneOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationDetails: (_) => de_LandingZoneOperationDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBaselinesCommand
 */
export const de_ListBaselinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBaselinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baselines: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListControlOperationsCommand
 */
export const de_ListControlOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListControlOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    controlOperations: (_) => de_ControlOperations(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnabledBaselinesCommand
 */
export const de_ListEnabledBaselinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledBaselinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    enabledBaselines: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEnabledControlsCommand
 */
export const de_ListEnabledControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    enabledControls: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLandingZoneOperationsCommand
 */
export const de_ListLandingZoneOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLandingZoneOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    landingZoneOperations: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLandingZonesCommand
 */
export const de_ListLandingZonesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLandingZonesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    landingZones: _json,
    nextToken: __expectString,
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetEnabledBaselineCommand
 */
export const de_ResetEnabledBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetEnabledBaselineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetEnabledControlCommand
 */
export const de_ResetEnabledControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetEnabledControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetLandingZoneCommand
 */
export const de_ResetLandingZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetLandingZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
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
 * deserializeAws_restJson1UpdateEnabledBaselineCommand
 */
export const de_UpdateEnabledBaselineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnabledBaselineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateEnabledControlCommand
 */
export const de_UpdateEnabledControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnabledControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLandingZoneCommand
 */
export const de_UpdateLandingZoneCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLandingZoneCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    operationIdentifier: __expectString,
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
    case "com.amazonaws.controltower#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.controltower#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.controltower#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.controltower#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.controltower#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.controltower#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.controltower#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    serviceCode: __expectString,
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
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ControlIdentifiers omitted.

// se_ControlOperationFilter omitted.

// se_ControlOperationStatuses omitted.

// se_ControlOperationTypes omitted.

// se_DriftStatuses omitted.

// se_EnabledBaselineBaselineIdentifiers omitted.

// se_EnabledBaselineFilter omitted.

/**
 * serializeAws_restJson1EnabledBaselineParameter
 */
const se_EnabledBaselineParameter = (input: EnabledBaselineParameter, context: __SerdeContext): any => {
  return take(input, {
    key: [],
    value: (_) => se_EnabledBaselineParameterDocument(_, context),
  });
};

/**
 * serializeAws_restJson1EnabledBaselineParameterDocument
 */
const se_EnabledBaselineParameterDocument = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1EnabledBaselineParameters
 */
const se_EnabledBaselineParameters = (input: EnabledBaselineParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnabledBaselineParameter(entry, context);
    });
};

// se_EnabledBaselineParentIdentifiers omitted.

// se_EnabledBaselineTargetIdentifiers omitted.

// se_EnabledControlFilter omitted.

// se_EnabledControlIdentifiers omitted.

/**
 * serializeAws_restJson1EnabledControlParameter
 */
const se_EnabledControlParameter = (input: EnabledControlParameter, context: __SerdeContext): any => {
  return take(input, {
    key: [],
    value: (_) => se_Document(_, context),
  });
};

/**
 * serializeAws_restJson1EnabledControlParameters
 */
const se_EnabledControlParameters = (input: EnabledControlParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnabledControlParameter(entry, context);
    });
};

// se_EnablementStatuses omitted.

// se_LandingZoneOperationFilter omitted.

// se_LandingZoneOperationStatuses omitted.

// se_LandingZoneOperationTypes omitted.

/**
 * serializeAws_restJson1Manifest
 */
const se_Manifest = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_TagMap omitted.

// se_TargetIdentifiers omitted.

/**
 * serializeAws_restJson1Document
 */
const se_Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * deserializeAws_restJson1BaselineOperation
 */
const de_BaselineOperation = (output: any, context: __SerdeContext): BaselineOperation => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    operationIdentifier: __expectString,
    operationType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusMessage: __expectString,
  }) as any;
};

// de_Baselines omitted.

// de_BaselineSummary omitted.

/**
 * deserializeAws_restJson1ControlOperation
 */
const de_ControlOperation = (output: any, context: __SerdeContext): ControlOperation => {
  return take(output, {
    controlIdentifier: __expectString,
    enabledControlIdentifier: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    operationIdentifier: __expectString,
    operationType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusMessage: __expectString,
    targetIdentifier: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ControlOperations
 */
const de_ControlOperations = (output: any, context: __SerdeContext): ControlOperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ControlOperationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlOperationSummary
 */
const de_ControlOperationSummary = (output: any, context: __SerdeContext): ControlOperationSummary => {
  return take(output, {
    controlIdentifier: __expectString,
    enabledControlIdentifier: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    operationIdentifier: __expectString,
    operationType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusMessage: __expectString,
    targetIdentifier: __expectString,
  }) as any;
};

// de_DriftStatusSummary omitted.

/**
 * deserializeAws_restJson1EnabledBaselineDetails
 */
const de_EnabledBaselineDetails = (output: any, context: __SerdeContext): EnabledBaselineDetails => {
  return take(output, {
    arn: __expectString,
    baselineIdentifier: __expectString,
    baselineVersion: __expectString,
    parameters: (_: any) => de_EnabledBaselineParameterSummaries(_, context),
    parentIdentifier: __expectString,
    statusSummary: _json,
    targetIdentifier: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EnabledBaselineParameterDocument
 */
const de_EnabledBaselineParameterDocument = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

/**
 * deserializeAws_restJson1EnabledBaselineParameterSummaries
 */
const de_EnabledBaselineParameterSummaries = (
  output: any,
  context: __SerdeContext
): EnabledBaselineParameterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnabledBaselineParameterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnabledBaselineParameterSummary
 */
const de_EnabledBaselineParameterSummary = (output: any, context: __SerdeContext): EnabledBaselineParameterSummary => {
  return take(output, {
    key: __expectString,
    value: (_: any) => de_EnabledBaselineParameterDocument(_, context),
  }) as any;
};

// de_EnabledBaselines omitted.

// de_EnabledBaselineSummary omitted.

/**
 * deserializeAws_restJson1EnabledControlDetails
 */
const de_EnabledControlDetails = (output: any, context: __SerdeContext): EnabledControlDetails => {
  return take(output, {
    arn: __expectString,
    controlIdentifier: __expectString,
    driftStatusSummary: _json,
    parameters: (_: any) => de_EnabledControlParameterSummaries(_, context),
    statusSummary: _json,
    targetIdentifier: __expectString,
    targetRegions: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1EnabledControlParameterSummaries
 */
const de_EnabledControlParameterSummaries = (
  output: any,
  context: __SerdeContext
): EnabledControlParameterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnabledControlParameterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EnabledControlParameterSummary
 */
const de_EnabledControlParameterSummary = (output: any, context: __SerdeContext): EnabledControlParameterSummary => {
  return take(output, {
    key: __expectString,
    value: (_: any) => de_Document(_, context),
  }) as any;
};

// de_EnabledControls omitted.

// de_EnabledControlSummary omitted.

// de_EnablementStatusSummary omitted.

/**
 * deserializeAws_restJson1LandingZoneDetail
 */
const de_LandingZoneDetail = (output: any, context: __SerdeContext): LandingZoneDetail => {
  return take(output, {
    arn: __expectString,
    driftStatus: _json,
    latestAvailableVersion: __expectString,
    manifest: (_: any) => de_Manifest(_, context),
    status: __expectString,
    version: __expectString,
  }) as any;
};

// de_LandingZoneDriftStatusSummary omitted.

/**
 * deserializeAws_restJson1LandingZoneOperationDetail
 */
const de_LandingZoneOperationDetail = (output: any, context: __SerdeContext): LandingZoneOperationDetail => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    operationIdentifier: __expectString,
    operationType: __expectString,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
    statusMessage: __expectString,
  }) as any;
};

// de_LandingZoneOperations omitted.

// de_LandingZoneOperationSummary omitted.

// de_LandingZoneSummaries omitted.

// de_LandingZoneSummary omitted.

/**
 * deserializeAws_restJson1Manifest
 */
const de_Manifest = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_Region omitted.

// de_TagMap omitted.

// de_TargetRegions omitted.

/**
 * deserializeAws_restJson1Document
 */
const de_Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
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

const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
