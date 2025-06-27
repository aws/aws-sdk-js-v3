// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateTrustAnchorCommandInput, CreateTrustAnchorCommandOutput } from "../commands/CreateTrustAnchorCommand";
import {
  DeleteAttributeMappingCommandInput,
  DeleteAttributeMappingCommandOutput,
} from "../commands/DeleteAttributeMappingCommand";
import { DeleteCrlCommandInput, DeleteCrlCommandOutput } from "../commands/DeleteCrlCommand";
import { DeleteProfileCommandInput, DeleteProfileCommandOutput } from "../commands/DeleteProfileCommand";
import { DeleteTrustAnchorCommandInput, DeleteTrustAnchorCommandOutput } from "../commands/DeleteTrustAnchorCommand";
import { DisableCrlCommandInput, DisableCrlCommandOutput } from "../commands/DisableCrlCommand";
import { DisableProfileCommandInput, DisableProfileCommandOutput } from "../commands/DisableProfileCommand";
import { DisableTrustAnchorCommandInput, DisableTrustAnchorCommandOutput } from "../commands/DisableTrustAnchorCommand";
import { EnableCrlCommandInput, EnableCrlCommandOutput } from "../commands/EnableCrlCommand";
import { EnableProfileCommandInput, EnableProfileCommandOutput } from "../commands/EnableProfileCommand";
import { EnableTrustAnchorCommandInput, EnableTrustAnchorCommandOutput } from "../commands/EnableTrustAnchorCommand";
import { GetCrlCommandInput, GetCrlCommandOutput } from "../commands/GetCrlCommand";
import { GetProfileCommandInput, GetProfileCommandOutput } from "../commands/GetProfileCommand";
import { GetSubjectCommandInput, GetSubjectCommandOutput } from "../commands/GetSubjectCommand";
import { GetTrustAnchorCommandInput, GetTrustAnchorCommandOutput } from "../commands/GetTrustAnchorCommand";
import { ImportCrlCommandInput, ImportCrlCommandOutput } from "../commands/ImportCrlCommand";
import { ListCrlsCommandInput, ListCrlsCommandOutput } from "../commands/ListCrlsCommand";
import { ListProfilesCommandInput, ListProfilesCommandOutput } from "../commands/ListProfilesCommand";
import { ListSubjectsCommandInput, ListSubjectsCommandOutput } from "../commands/ListSubjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTrustAnchorsCommandInput, ListTrustAnchorsCommandOutput } from "../commands/ListTrustAnchorsCommand";
import {
  PutAttributeMappingCommandInput,
  PutAttributeMappingCommandOutput,
} from "../commands/PutAttributeMappingCommand";
import {
  PutNotificationSettingsCommandInput,
  PutNotificationSettingsCommandOutput,
} from "../commands/PutNotificationSettingsCommand";
import {
  ResetNotificationSettingsCommandInput,
  ResetNotificationSettingsCommandOutput,
} from "../commands/ResetNotificationSettingsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCrlCommandInput, UpdateCrlCommandOutput } from "../commands/UpdateCrlCommand";
import { UpdateProfileCommandInput, UpdateProfileCommandOutput } from "../commands/UpdateProfileCommand";
import { UpdateTrustAnchorCommandInput, UpdateTrustAnchorCommandOutput } from "../commands/UpdateTrustAnchorCommand";
import {
  AccessDeniedException,
  CredentialSummary,
  CrlDetail,
  InstanceProperty,
  MappingRule,
  NotificationSetting,
  NotificationSettingKey,
  ProfileDetail,
  ResourceNotFoundException,
  Source,
  SourceData,
  SubjectDetail,
  SubjectSummary,
  Tag,
  TooManyTagsException,
  TrustAnchorDetail,
  ValidationException,
} from "../models/models_0";
import { RolesAnywhereServiceException as __BaseException } from "../models/RolesAnywhereServiceException";

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
  b.bp("/profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      acceptRoleSessionName: [],
      durationSeconds: [],
      enabled: [],
      managedPolicyArns: (_) => _json(_),
      name: [],
      requireInstanceProperties: [],
      roleArns: (_) => _json(_),
      sessionPolicy: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrustAnchorCommand
 */
export const se_CreateTrustAnchorCommand = async (
  input: CreateTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/trustanchors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enabled: [],
      name: [],
      notificationSettings: (_) => _json(_),
      source: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAttributeMappingCommand
 */
export const se_DeleteAttributeMappingCommand = async (
  input: DeleteAttributeMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profiles/{profileId}/mappings");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  const query: any = map({
    [_cF]: [, __expectNonNull(input[_cF]!, `certificateField`)],
    [_s]: [() => input.specifiers !== void 0, () => input[_s]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCrlCommand
 */
export const se_DeleteCrlCommand = async (
  input: DeleteCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/crl/{crlId}");
  b.p("crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
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
  b.bp("/profile/{profileId}");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrustAnchorCommand
 */
export const se_DeleteTrustAnchorCommand = async (
  input: DeleteTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustanchor/{trustAnchorId}");
  b.p("trustAnchorId", () => input.trustAnchorId!, "{trustAnchorId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableCrlCommand
 */
export const se_DisableCrlCommand = async (
  input: DisableCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/crl/{crlId}/disable");
  b.p("crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableProfileCommand
 */
export const se_DisableProfileCommand = async (
  input: DisableProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profile/{profileId}/disable");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisableTrustAnchorCommand
 */
export const se_DisableTrustAnchorCommand = async (
  input: DisableTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustanchor/{trustAnchorId}/disable");
  b.p("trustAnchorId", () => input.trustAnchorId!, "{trustAnchorId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableCrlCommand
 */
export const se_EnableCrlCommand = async (
  input: EnableCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/crl/{crlId}/enable");
  b.p("crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableProfileCommand
 */
export const se_EnableProfileCommand = async (
  input: EnableProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/profile/{profileId}/enable");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EnableTrustAnchorCommand
 */
export const se_EnableTrustAnchorCommand = async (
  input: EnableTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustanchor/{trustAnchorId}/enable");
  b.p("trustAnchorId", () => input.trustAnchorId!, "{trustAnchorId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCrlCommand
 */
export const se_GetCrlCommand = async (input: GetCrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/crl/{crlId}");
  b.p("crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
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
  b.bp("/profile/{profileId}");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSubjectCommand
 */
export const se_GetSubjectCommand = async (
  input: GetSubjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/subject/{subjectId}");
  b.p("subjectId", () => input.subjectId!, "{subjectId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrustAnchorCommand
 */
export const se_GetTrustAnchorCommand = async (
  input: GetTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustanchor/{trustAnchorId}");
  b.p("trustAnchorId", () => input.trustAnchorId!, "{trustAnchorId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ImportCrlCommand
 */
export const se_ImportCrlCommand = async (
  input: ImportCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/crls");
  let body: any;
  body = JSON.stringify(
    take(input, {
      crlData: (_) => context.base64Encoder(_),
      enabled: [],
      name: [],
      tags: (_) => _json(_),
      trustAnchorArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCrlsCommand
 */
export const se_ListCrlsCommand = async (
  input: ListCrlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/crls");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
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
    [_nT]: [, input[_nT]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSubjectsCommand
 */
export const se_ListSubjectsCommand = async (
  input: ListSubjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/subjects");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
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
  b.bp("/ListTagsForResource");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrustAnchorsCommand
 */
export const se_ListTrustAnchorsCommand = async (
  input: ListTrustAnchorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/trustanchors");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_pS]: [() => input.pageSize !== void 0, () => input[_pS]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutAttributeMappingCommand
 */
export const se_PutAttributeMappingCommand = async (
  input: PutAttributeMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profiles/{profileId}/mappings");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      certificateField: [],
      mappingRules: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutNotificationSettingsCommand
 */
export const se_PutNotificationSettingsCommand = async (
  input: PutNotificationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/put-notifications-settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      notificationSettings: (_) => _json(_),
      trustAnchorId: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ResetNotificationSettingsCommand
 */
export const se_ResetNotificationSettingsCommand = async (
  input: ResetNotificationSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/reset-notifications-settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      notificationSettingKeys: (_) => _json(_),
      trustAnchorId: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
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
  b.bp("/TagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
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
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/UntagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceArn: [],
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCrlCommand
 */
export const se_UpdateCrlCommand = async (
  input: UpdateCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/crl/{crlId}");
  b.p("crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      crlData: (_) => context.base64Encoder(_),
      name: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/profile/{profileId}");
  b.p("profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      acceptRoleSessionName: [],
      durationSeconds: [],
      managedPolicyArns: (_) => _json(_),
      name: [],
      roleArns: (_) => _json(_),
      sessionPolicy: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTrustAnchorCommand
 */
export const se_UpdateTrustAnchorCommand = async (
  input: UpdateTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/trustanchor/{trustAnchorId}");
  b.p("trustAnchorId", () => input.trustAnchorId!, "{trustAnchorId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      source: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrustAnchorCommand
 */
export const de_CreateTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustAnchorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttributeMappingCommand
 */
export const de_DeleteAttributeMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttributeMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCrlCommand
 */
export const de_DeleteCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crl: (_) => de_CrlDetail(_, context),
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
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrustAnchorCommand
 */
export const de_DeleteTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableCrlCommand
 */
export const de_DisableCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crl: (_) => de_CrlDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableProfileCommand
 */
export const de_DisableProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisableTrustAnchorCommand
 */
export const de_DisableTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableCrlCommand
 */
export const de_EnableCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crl: (_) => de_CrlDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableProfileCommand
 */
export const de_EnableProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EnableTrustAnchorCommand
 */
export const de_EnableTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCrlCommand
 */
export const de_GetCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crl: (_) => de_CrlDetail(_, context),
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
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSubjectCommand
 */
export const de_GetSubjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    subject: (_) => de_SubjectDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrustAnchorCommand
 */
export const de_GetTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ImportCrlCommand
 */
export const de_ImportCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCrlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crl: (_) => de_CrlDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCrlsCommand
 */
export const de_ListCrlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crls: (_) => de_CrlDetails(_, context),
    nextToken: __expectString,
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
    nextToken: __expectString,
    profiles: (_) => de_ProfileDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSubjectsCommand
 */
export const de_ListSubjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    subjects: (_) => de_SubjectSummaries(_, context),
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
 * deserializeAws_restJson1ListTrustAnchorsCommand
 */
export const de_ListTrustAnchorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustAnchorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trustAnchors: (_) => de_TrustAnchorDetails(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutAttributeMappingCommand
 */
export const de_PutAttributeMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAttributeMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutNotificationSettingsCommand
 */
export const de_PutNotificationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutNotificationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ResetNotificationSettingsCommand
 */
export const de_ResetNotificationSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResetNotificationSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
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
  if (output.statusCode !== 201 && output.statusCode >= 300) {
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCrlCommand
 */
export const de_UpdateCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    crl: (_) => de_CrlDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    profile: (_) => de_ProfileDetail(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrustAnchorCommand
 */
export const de_UpdateTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trustAnchor: (_) => de_TrustAnchorDetail(_, context),
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
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.rolesanywhere#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
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

// se_ManagedPolicyList omitted.

// se_MappingRule omitted.

// se_MappingRules omitted.

// se_NotificationSetting omitted.

// se_NotificationSettingKey omitted.

// se_NotificationSettingKeys omitted.

// se_NotificationSettings omitted.

// se_RoleArnList omitted.

// se_Source omitted.

// se_SourceData omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// de_AttributeMapping omitted.

// de_AttributeMappings omitted.

/**
 * deserializeAws_restJson1CredentialSummaries
 */
const de_CredentialSummaries = (output: any, context: __SerdeContext): CredentialSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CredentialSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CredentialSummary
 */
const de_CredentialSummary = (output: any, context: __SerdeContext): CredentialSummary => {
  return take(output, {
    enabled: __expectBoolean,
    failed: __expectBoolean,
    issuer: __expectString,
    seenAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    serialNumber: __expectString,
    x509CertificateData: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CrlDetail
 */
const de_CrlDetail = (output: any, context: __SerdeContext): CrlDetail => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    crlArn: __expectString,
    crlData: context.base64Decoder,
    crlId: __expectString,
    enabled: __expectBoolean,
    name: __expectString,
    trustAnchorArn: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CrlDetails
 */
const de_CrlDetails = (output: any, context: __SerdeContext): CrlDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CrlDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceProperties
 */
const de_InstanceProperties = (output: any, context: __SerdeContext): InstanceProperty[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InstanceProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceProperty
 */
const de_InstanceProperty = (output: any, context: __SerdeContext): InstanceProperty => {
  return take(output, {
    failed: __expectBoolean,
    properties: _json,
    seenAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_InstancePropertyMap omitted.

// de_ManagedPolicyList omitted.

// de_MappingRule omitted.

// de_MappingRules omitted.

// de_NotificationSettingDetail omitted.

// de_NotificationSettingDetails omitted.

/**
 * deserializeAws_restJson1ProfileDetail
 */
const de_ProfileDetail = (output: any, context: __SerdeContext): ProfileDetail => {
  return take(output, {
    acceptRoleSessionName: __expectBoolean,
    attributeMappings: _json,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    createdBy: __expectString,
    durationSeconds: __expectInt32,
    enabled: __expectBoolean,
    managedPolicyArns: _json,
    name: __expectString,
    profileArn: __expectString,
    profileId: __expectString,
    requireInstanceProperties: __expectBoolean,
    roleArns: _json,
    sessionPolicy: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ProfileDetails
 */
const de_ProfileDetails = (output: any, context: __SerdeContext): ProfileDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfileDetail(entry, context);
    });
  return retVal;
};

// de_RoleArnList omitted.

// de_Source omitted.

// de_SourceData omitted.

/**
 * deserializeAws_restJson1SubjectDetail
 */
const de_SubjectDetail = (output: any, context: __SerdeContext): SubjectDetail => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    credentials: (_: any) => de_CredentialSummaries(_, context),
    enabled: __expectBoolean,
    instanceProperties: (_: any) => de_InstanceProperties(_, context),
    lastSeenAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    subjectArn: __expectString,
    subjectId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    x509Subject: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SubjectSummaries
 */
const de_SubjectSummaries = (output: any, context: __SerdeContext): SubjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SubjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubjectSummary
 */
const de_SubjectSummary = (output: any, context: __SerdeContext): SubjectSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    enabled: __expectBoolean,
    lastSeenAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    subjectArn: __expectString,
    subjectId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    x509Subject: __expectString,
  }) as any;
};

// de_Tag omitted.

// de_TagList omitted.

/**
 * deserializeAws_restJson1TrustAnchorDetail
 */
const de_TrustAnchorDetail = (output: any, context: __SerdeContext): TrustAnchorDetail => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    enabled: __expectBoolean,
    name: __expectString,
    notificationSettings: _json,
    source: _json,
    trustAnchorArn: __expectString,
    trustAnchorId: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1TrustAnchorDetails
 */
const de_TrustAnchorDetails = (output: any, context: __SerdeContext): TrustAnchorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrustAnchorDetail(entry, context);
    });
  return retVal;
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

const _cF = "certificateField";
const _nT = "nextToken";
const _pS = "pageSize";
const _rA = "resourceArn";
const _s = "specifiers";
