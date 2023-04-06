// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateProfileCommandInput, CreateProfileCommandOutput } from "../commands/CreateProfileCommand";
import { CreateTrustAnchorCommandInput, CreateTrustAnchorCommandOutput } from "../commands/CreateTrustAnchorCommand";
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profiles";
  let body: any;
  body = JSON.stringify({
    ...(input.durationSeconds != null && { durationSeconds: input.durationSeconds }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.managedPolicyArns != null && {
      managedPolicyArns: se_ManagedPolicyList(input.managedPolicyArns, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.requireInstanceProperties != null && { requireInstanceProperties: input.requireInstanceProperties }),
    ...(input.roleArns != null && { roleArns: se_RoleArnList(input.roleArns, context) }),
    ...(input.sessionPolicy != null && { sessionPolicy: input.sessionPolicy }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
 * serializeAws_restJson1CreateTrustAnchorCommand
 */
export const se_CreateTrustAnchorCommand = async (
  input: CreateTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchors";
  let body: any;
  body = JSON.stringify({
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.name != null && { name: input.name }),
    ...(input.source != null && { source: se_Source(input.source, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
 * serializeAws_restJson1DeleteCrlCommand
 */
export const se_DeleteCrlCommand = async (
  input: DeleteCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "crlId", () => input.crlId!, "{crlId}", false);
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
 * serializeAws_restJson1DeleteProfileCommand
 */
export const se_DeleteProfileCommand = async (
  input: DeleteProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileId", () => input.profileId!, "{profileId}", false);
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
 * serializeAws_restJson1DeleteTrustAnchorCommand
 */
export const se_DeleteTrustAnchorCommand = async (
  input: DeleteTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustAnchorId",
    () => input.trustAnchorId!,
    "{trustAnchorId}",
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
 * serializeAws_restJson1DisableCrlCommand
 */
export const se_DisableCrlCommand = async (
  input: DisableCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}/disable";
  resolvedPath = __resolvedPath(resolvedPath, input, "crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
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
 * serializeAws_restJson1DisableProfileCommand
 */
export const se_DisableProfileCommand = async (
  input: DisableProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}/disable";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
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
 * serializeAws_restJson1DisableTrustAnchorCommand
 */
export const se_DisableTrustAnchorCommand = async (
  input: DisableTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}/disable";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustAnchorId",
    () => input.trustAnchorId!,
    "{trustAnchorId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1EnableCrlCommand
 */
export const se_EnableCrlCommand = async (
  input: EnableCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}/enable";
  resolvedPath = __resolvedPath(resolvedPath, input, "crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
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
 * serializeAws_restJson1EnableProfileCommand
 */
export const se_EnableProfileCommand = async (
  input: EnableProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}/enable";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
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
 * serializeAws_restJson1EnableTrustAnchorCommand
 */
export const se_EnableTrustAnchorCommand = async (
  input: EnableTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}/enable";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustAnchorId",
    () => input.trustAnchorId!,
    "{trustAnchorId}",
    false
  );
  let body: any;
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
 * serializeAws_restJson1GetCrlCommand
 */
export const se_GetCrlCommand = async (input: GetCrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "crlId", () => input.crlId!, "{crlId}", false);
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
 * serializeAws_restJson1GetProfileCommand
 */
export const se_GetProfileCommand = async (
  input: GetProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileId", () => input.profileId!, "{profileId}", false);
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
 * serializeAws_restJson1GetSubjectCommand
 */
export const se_GetSubjectCommand = async (
  input: GetSubjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/subject/{subjectId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "subjectId", () => input.subjectId!, "{subjectId}", false);
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
 * serializeAws_restJson1GetTrustAnchorCommand
 */
export const se_GetTrustAnchorCommand = async (
  input: GetTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustAnchorId",
    () => input.trustAnchorId!,
    "{trustAnchorId}",
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
 * serializeAws_restJson1ImportCrlCommand
 */
export const se_ImportCrlCommand = async (
  input: ImportCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crls";
  let body: any;
  body = JSON.stringify({
    ...(input.crlData != null && { crlData: context.base64Encoder(input.crlData) }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.trustAnchorArn != null && { trustAnchorArn: input.trustAnchorArn }),
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
 * serializeAws_restJson1ListCrlsCommand
 */
export const se_ListCrlsCommand = async (
  input: ListCrlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crls";
  const query: any = map({
    nextToken: [, input.nextToken!],
    pageSize: [() => input.pageSize !== void 0, () => input.pageSize!.toString()],
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
 * serializeAws_restJson1ListProfilesCommand
 */
export const se_ListProfilesCommand = async (
  input: ListProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profiles";
  const query: any = map({
    nextToken: [, input.nextToken!],
    pageSize: [() => input.pageSize !== void 0, () => input.pageSize!.toString()],
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
 * serializeAws_restJson1ListSubjectsCommand
 */
export const se_ListSubjectsCommand = async (
  input: ListSubjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/subjects";
  const query: any = map({
    nextToken: [, input.nextToken!],
    pageSize: [() => input.pageSize !== void 0, () => input.pageSize!.toString()],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTagsForResource";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
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
 * serializeAws_restJson1ListTrustAnchorsCommand
 */
export const se_ListTrustAnchorsCommand = async (
  input: ListTrustAnchorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchors";
  const query: any = map({
    nextToken: [, input.nextToken!],
    pageSize: [() => input.pageSize !== void 0, () => input.pageSize!.toString()],
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/TagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UntagResource";
  let body: any;
  body = JSON.stringify({
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
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
 * serializeAws_restJson1UpdateCrlCommand
 */
export const se_UpdateCrlCommand = async (
  input: UpdateCrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crl/{crlId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "crlId", () => input.crlId!, "{crlId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.crlData != null && { crlData: context.base64Encoder(input.crlData) }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1UpdateProfileCommand
 */
export const se_UpdateProfileCommand = async (
  input: UpdateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/profile/{profileId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "profileId", () => input.profileId!, "{profileId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.durationSeconds != null && { durationSeconds: input.durationSeconds }),
    ...(input.managedPolicyArns != null && {
      managedPolicyArns: se_ManagedPolicyList(input.managedPolicyArns, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleArns != null && { roleArns: se_RoleArnList(input.roleArns, context) }),
    ...(input.sessionPolicy != null && { sessionPolicy: input.sessionPolicy }),
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
 * serializeAws_restJson1UpdateTrustAnchorCommand
 */
export const se_UpdateTrustAnchorCommand = async (
  input: UpdateTrustAnchorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/trustanchor/{trustAnchorId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "trustAnchorId",
    () => input.trustAnchorId!,
    "{trustAnchorId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.name != null && { name: input.name }),
    ...(input.source != null && { source: se_Source(input.source, context) }),
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
 * deserializeAws_restJson1CreateProfileCommand
 */
export const de_CreateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile != null) {
    contents.profile = de_ProfileDetail(data.profile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateProfileCommandError
 */
const de_CreateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProfileCommandOutput> => {
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
 * deserializeAws_restJson1CreateTrustAnchorCommand
 */
export const de_CreateTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustAnchorCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateTrustAnchorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor != null) {
    contents.trustAnchor = de_TrustAnchorDetail(data.trustAnchor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrustAnchorCommandError
 */
const de_CreateTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrustAnchorCommandOutput> => {
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
 * deserializeAws_restJson1DeleteCrlCommand
 */
export const de_DeleteCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteCrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl != null) {
    contents.crl = de_CrlDetail(data.crl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCrlCommandError
 */
const de_DeleteCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteProfileCommand
 */
export const de_DeleteProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile != null) {
    contents.profile = de_ProfileDetail(data.profile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProfileCommandError
 */
const de_DeleteProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteTrustAnchorCommand
 */
export const de_DeleteTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteTrustAnchorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor != null) {
    contents.trustAnchor = de_TrustAnchorDetail(data.trustAnchor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTrustAnchorCommandError
 */
const de_DeleteTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisableCrlCommand
 */
export const de_DisableCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableCrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl != null) {
    contents.crl = de_CrlDetail(data.crl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisableCrlCommandError
 */
const de_DisableCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisableProfileCommand
 */
export const de_DisableProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile != null) {
    contents.profile = de_ProfileDetail(data.profile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisableProfileCommandError
 */
const de_DisableProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DisableTrustAnchorCommand
 */
export const de_DisableTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisableTrustAnchorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor != null) {
    contents.trustAnchor = de_TrustAnchorDetail(data.trustAnchor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisableTrustAnchorCommandError
 */
const de_DisableTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableCrlCommand
 */
export const de_EnableCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableCrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl != null) {
    contents.crl = de_CrlDetail(data.crl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EnableCrlCommandError
 */
const de_EnableCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableProfileCommand
 */
export const de_EnableProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile != null) {
    contents.profile = de_ProfileDetail(data.profile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EnableProfileCommandError
 */
const de_EnableProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1EnableTrustAnchorCommand
 */
export const de_EnableTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EnableTrustAnchorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor != null) {
    contents.trustAnchor = de_TrustAnchorDetail(data.trustAnchor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1EnableTrustAnchorCommandError
 */
const de_EnableTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCrlCommand
 */
export const de_GetCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl != null) {
    contents.crl = de_CrlDetail(data.crl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCrlCommandError
 */
const de_GetCrlCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetProfileCommand
 */
export const de_GetProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile != null) {
    contents.profile = de_ProfileDetail(data.profile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetProfileCommandError
 */
const de_GetProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSubjectCommand
 */
export const de_GetSubjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSubjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.subject != null) {
    contents.subject = de_SubjectDetail(data.subject, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSubjectCommandError
 */
const de_GetSubjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSubjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetTrustAnchorCommand
 */
export const de_GetTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTrustAnchorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor != null) {
    contents.trustAnchor = de_TrustAnchorDetail(data.trustAnchor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTrustAnchorCommandError
 */
const de_GetTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1ImportCrlCommand
 */
export const de_ImportCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCrlCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_ImportCrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl != null) {
    contents.crl = de_CrlDetail(data.crl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportCrlCommandError
 */
const de_ImportCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportCrlCommandOutput> => {
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
 * deserializeAws_restJson1ListCrlsCommand
 */
export const de_ListCrlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCrlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crls != null) {
    contents.crls = de_CrlDetails(data.crls, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCrlsCommandError
 */
const de_ListCrlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrlsCommandOutput> => {
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
 * deserializeAws_restJson1ListProfilesCommand
 */
export const de_ListProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.profiles != null) {
    contents.profiles = de_ProfileDetails(data.profiles, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListProfilesCommandError
 */
const de_ListProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProfilesCommandOutput> => {
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
 * deserializeAws_restJson1ListSubjectsCommand
 */
export const de_ListSubjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSubjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.subjects != null) {
    contents.subjects = de_SubjectSummaries(data.subjects, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSubjectsCommandError
 */
const de_ListSubjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubjectsCommandOutput> => {
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagList(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1ListTrustAnchorsCommand
 */
export const de_ListTrustAnchorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustAnchorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTrustAnchorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.trustAnchors != null) {
    contents.trustAnchors = de_TrustAnchorDetails(data.trustAnchors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTrustAnchorsCommandError
 */
const de_ListTrustAnchorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrustAnchorsCommandOutput> => {
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.rolesanywhere#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1UpdateCrlCommand
 */
export const de_UpdateCrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.crl != null) {
    contents.crl = de_CrlDetail(data.crl, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCrlCommandError
 */
const de_UpdateCrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1UpdateProfileCommand
 */
export const de_UpdateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.profile != null) {
    contents.profile = de_ProfileDetail(data.profile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProfileCommandError
 */
const de_UpdateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1UpdateTrustAnchorCommand
 */
export const de_UpdateTrustAnchorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustAnchorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTrustAnchorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.trustAnchor != null) {
    contents.trustAnchor = de_TrustAnchorDetail(data.trustAnchor, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTrustAnchorCommandError
 */
const de_UpdateTrustAnchorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrustAnchorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.rolesanywhere#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.rolesanywhere#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.rolesanywhere#ValidationException":
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
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ManagedPolicyList
 */
const se_ManagedPolicyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1RoleArnList
 */
const se_RoleArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Source
 */
const se_Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.sourceData != null && { sourceData: se_SourceData(input.sourceData, context) }),
    ...(input.sourceType != null && { sourceType: input.sourceType }),
  };
};

/**
 * serializeAws_restJson1SourceData
 */
const se_SourceData = (input: SourceData, context: __SerdeContext): any => {
  return SourceData.visit(input, {
    acmPcaArn: (value) => ({ acmPcaArn: value }),
    x509CertificateData: (value) => ({ x509CertificateData: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * deserializeAws_restJson1CredentialSummaries
 */
const de_CredentialSummaries = (output: any, context: __SerdeContext): CredentialSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CredentialSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CredentialSummary
 */
const de_CredentialSummary = (output: any, context: __SerdeContext): CredentialSummary => {
  return {
    enabled: __expectBoolean(output.enabled),
    failed: __expectBoolean(output.failed),
    issuer: __expectString(output.issuer),
    seenAt: output.seenAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.seenAt)) : undefined,
    serialNumber: __expectString(output.serialNumber),
    x509CertificateData: __expectString(output.x509CertificateData),
  } as any;
};

/**
 * deserializeAws_restJson1CrlDetail
 */
const de_CrlDetail = (output: any, context: __SerdeContext): CrlDetail => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    crlArn: __expectString(output.crlArn),
    crlData: output.crlData != null ? context.base64Decoder(output.crlData) : undefined,
    crlId: __expectString(output.crlId),
    enabled: __expectBoolean(output.enabled),
    name: __expectString(output.name),
    trustAnchorArn: __expectString(output.trustAnchorArn),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CrlDetails
 */
const de_CrlDetails = (output: any, context: __SerdeContext): CrlDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
      if (entry === null) {
        return null as any;
      }
      return de_InstanceProperty(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceProperty
 */
const de_InstanceProperty = (output: any, context: __SerdeContext): InstanceProperty => {
  return {
    failed: __expectBoolean(output.failed),
    properties: output.properties != null ? de_InstancePropertyMap(output.properties, context) : undefined,
    seenAt: output.seenAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.seenAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstancePropertyMap
 */
const de_InstancePropertyMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ManagedPolicyList
 */
const de_ManagedPolicyList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ProfileDetail
 */
const de_ProfileDetail = (output: any, context: __SerdeContext): ProfileDetail => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    createdBy: __expectString(output.createdBy),
    durationSeconds: __expectInt32(output.durationSeconds),
    enabled: __expectBoolean(output.enabled),
    managedPolicyArns:
      output.managedPolicyArns != null ? de_ManagedPolicyList(output.managedPolicyArns, context) : undefined,
    name: __expectString(output.name),
    profileArn: __expectString(output.profileArn),
    profileId: __expectString(output.profileId),
    requireInstanceProperties: __expectBoolean(output.requireInstanceProperties),
    roleArns: output.roleArns != null ? de_RoleArnList(output.roleArns, context) : undefined,
    sessionPolicy: __expectString(output.sessionPolicy),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ProfileDetails
 */
const de_ProfileDetails = (output: any, context: __SerdeContext): ProfileDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProfileDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RoleArnList
 */
const de_RoleArnList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    sourceData: output.sourceData != null ? de_SourceData(__expectUnion(output.sourceData), context) : undefined,
    sourceType: __expectString(output.sourceType),
  } as any;
};

/**
 * deserializeAws_restJson1SourceData
 */
const de_SourceData = (output: any, context: __SerdeContext): SourceData => {
  if (__expectString(output.acmPcaArn) !== undefined) {
    return { acmPcaArn: __expectString(output.acmPcaArn) as any };
  }
  if (__expectString(output.x509CertificateData) !== undefined) {
    return { x509CertificateData: __expectString(output.x509CertificateData) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SubjectDetail
 */
const de_SubjectDetail = (output: any, context: __SerdeContext): SubjectDetail => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    credentials: output.credentials != null ? de_CredentialSummaries(output.credentials, context) : undefined,
    enabled: __expectBoolean(output.enabled),
    instanceProperties:
      output.instanceProperties != null ? de_InstanceProperties(output.instanceProperties, context) : undefined,
    lastSeenAt:
      output.lastSeenAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastSeenAt)) : undefined,
    subjectArn: __expectString(output.subjectArn),
    subjectId: __expectString(output.subjectId),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
    x509Subject: __expectString(output.x509Subject),
  } as any;
};

/**
 * deserializeAws_restJson1SubjectSummaries
 */
const de_SubjectSummaries = (output: any, context: __SerdeContext): SubjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubjectSummary
 */
const de_SubjectSummary = (output: any, context: __SerdeContext): SubjectSummary => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    enabled: __expectBoolean(output.enabled),
    lastSeenAt:
      output.lastSeenAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.lastSeenAt)) : undefined,
    subjectArn: __expectString(output.subjectArn),
    subjectId: __expectString(output.subjectId),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
    x509Subject: __expectString(output.x509Subject),
  } as any;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrustAnchorDetail
 */
const de_TrustAnchorDetail = (output: any, context: __SerdeContext): TrustAnchorDetail => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.createdAt)) : undefined,
    enabled: __expectBoolean(output.enabled),
    name: __expectString(output.name),
    source: output.source != null ? de_Source(output.source, context) : undefined,
    trustAnchorArn: __expectString(output.trustAnchorArn),
    trustAnchorId: __expectString(output.trustAnchorId),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.updatedAt)) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TrustAnchorDetails
 */
const de_TrustAnchorDetails = (output: any, context: __SerdeContext): TrustAnchorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
