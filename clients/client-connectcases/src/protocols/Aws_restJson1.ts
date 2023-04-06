// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { BatchGetFieldCommandInput, BatchGetFieldCommandOutput } from "../commands/BatchGetFieldCommand";
import {
  BatchPutFieldOptionsCommandInput,
  BatchPutFieldOptionsCommandOutput,
} from "../commands/BatchPutFieldOptionsCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "../commands/CreateCaseCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateFieldCommandInput, CreateFieldCommandOutput } from "../commands/CreateFieldCommand";
import { CreateLayoutCommandInput, CreateLayoutCommandOutput } from "../commands/CreateLayoutCommand";
import { CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput } from "../commands/CreateRelatedItemCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { GetCaseCommandInput, GetCaseCommandOutput } from "../commands/GetCaseCommand";
import {
  GetCaseEventConfigurationCommandInput,
  GetCaseEventConfigurationCommandOutput,
} from "../commands/GetCaseEventConfigurationCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import { GetLayoutCommandInput, GetLayoutCommandOutput } from "../commands/GetLayoutCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import {
  ListCasesForContactCommandInput,
  ListCasesForContactCommandOutput,
} from "../commands/ListCasesForContactCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListFieldOptionsCommandInput, ListFieldOptionsCommandOutput } from "../commands/ListFieldOptionsCommand";
import { ListFieldsCommandInput, ListFieldsCommandOutput } from "../commands/ListFieldsCommand";
import { ListLayoutsCommandInput, ListLayoutsCommandOutput } from "../commands/ListLayoutsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "../commands/ListTemplatesCommand";
import {
  PutCaseEventConfigurationCommandInput,
  PutCaseEventConfigurationCommandOutput,
} from "../commands/PutCaseEventConfigurationCommand";
import { SearchCasesCommandInput, SearchCasesCommandOutput } from "../commands/SearchCasesCommand";
import { SearchRelatedItemsCommandInput, SearchRelatedItemsCommandOutput } from "../commands/SearchRelatedItemsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCaseCommandInput, UpdateCaseCommandOutput } from "../commands/UpdateCaseCommand";
import { UpdateFieldCommandInput, UpdateFieldCommandOutput } from "../commands/UpdateFieldCommand";
import { UpdateLayoutCommandInput, UpdateLayoutCommandOutput } from "../commands/UpdateLayoutCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "../commands/UpdateTemplateCommand";
import { ConnectCasesServiceException as __BaseException } from "../models/ConnectCasesServiceException";
import {
  AccessDeniedException,
  BasicLayout,
  CaseEventIncludedData,
  CaseFilter,
  CaseSummary,
  CommentContent,
  CommentFilter,
  ConflictException,
  Contact,
  ContactContent,
  ContactFilter,
  DomainSummary,
  EventBridgeConfiguration,
  EventIncludedData,
  FieldError,
  FieldFilter,
  FieldGroup,
  FieldIdentifier,
  FieldItem,
  FieldOption,
  FieldOptionError,
  FieldSummary,
  FieldValue,
  FieldValueUnion,
  GetFieldResponse,
  InternalServerException,
  LayoutConfiguration,
  LayoutContent,
  LayoutSections,
  LayoutSummary,
  RelatedItemContent,
  RelatedItemEventIncludedData,
  RelatedItemInputContent,
  RelatedItemTypeFilter,
  RequiredField,
  ResourceNotFoundException,
  SearchCasesResponseItem,
  SearchRelatedItemsResponseItem,
  Section,
  ServiceQuotaExceededException,
  Sort,
  TemplateSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetFieldCommand
 */
export const se_BatchGetFieldCommand = async (
  input: BatchGetFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/fields-batch";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.fields != null && { fields: se_BatchGetFieldIdentifierList(input.fields, context) }),
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
 * serializeAws_restJson1BatchPutFieldOptionsCommand
 */
export const se_BatchPutFieldOptionsCommand = async (
  input: BatchPutFieldOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/fields/{fieldId}/options";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "fieldId", () => input.fieldId!, "{fieldId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.options != null && { options: se_FieldOptionsList(input.options, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateCaseCommand
 */
export const se_CreateCaseCommand = async (
  input: CreateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/cases";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.fields != null && { fields: se_FieldValueList(input.fields, context) }),
    ...(input.templateId != null && { templateId: input.templateId }),
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
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains";
  let body: any;
  body = JSON.stringify({
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1CreateFieldCommand
 */
export const se_CreateFieldCommand = async (
  input: CreateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/fields";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
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
 * serializeAws_restJson1CreateLayoutCommand
 */
export const se_CreateLayoutCommand = async (
  input: CreateLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/layouts";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.content != null && { content: se_LayoutContent(input.content, context) }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1CreateRelatedItemCommand
 */
export const se_CreateRelatedItemCommand = async (
  input: CreateRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/cases/{caseId}/related-items";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.content != null && { content: se_RelatedItemInputContent(input.content, context) }),
    ...(input.type != null && { type: input.type }),
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
 * serializeAws_restJson1CreateTemplateCommand
 */
export const se_CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/templates";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.layoutConfiguration != null && {
      layoutConfiguration: se_LayoutConfiguration(input.layoutConfiguration, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.requiredFields != null && { requiredFields: se_RequiredFieldList(input.requiredFields, context) }),
    ...(input.status != null && { status: input.status }),
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
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
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
 * serializeAws_restJson1GetCaseCommand
 */
export const se_GetCaseCommand = async (
  input: GetCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/cases/{caseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "caseId", () => input.caseId!, "{caseId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.fields != null && { fields: se_FieldIdentifierList(input.fields, context) }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1GetCaseEventConfigurationCommand
 */
export const se_GetCaseEventConfigurationCommand = async (
  input: GetCaseEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/case-event-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
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
 * serializeAws_restJson1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
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
 * serializeAws_restJson1GetLayoutCommand
 */
export const se_GetLayoutCommand = async (
  input: GetLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/layouts/{layoutId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "layoutId", () => input.layoutId!, "{layoutId}", false);
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
 * serializeAws_restJson1GetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/templates/{templateId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "templateId", () => input.templateId!, "{templateId}", false);
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
 * serializeAws_restJson1ListCasesForContactCommand
 */
export const se_ListCasesForContactCommand = async (
  input: ListCasesForContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/list-cases-for-contact";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.contactArn != null && { contactArn: input.contactArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains-list";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFieldOptionsCommand
 */
export const se_ListFieldOptionsCommand = async (
  input: ListFieldOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/fields/{fieldId}/options-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "fieldId", () => input.fieldId!, "{fieldId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    values: [() => input.values !== void 0, () => (input.values! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListFieldsCommand
 */
export const se_ListFieldsCommand = async (
  input: ListFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/fields-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListLayoutsCommand
 */
export const se_ListLayoutsCommand = async (
  input: ListLayoutsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/layouts-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
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
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/templates-list";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    status: [() => input.status !== void 0, () => (input.status! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutCaseEventConfigurationCommand
 */
export const se_PutCaseEventConfigurationCommand = async (
  input: PutCaseEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/case-event-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.eventBridge != null && { eventBridge: se_EventBridgeConfiguration(input.eventBridge, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchCasesCommand
 */
export const se_SearchCasesCommand = async (
  input: SearchCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/cases-search";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.fields != null && { fields: se_FieldIdentifierList(input.fields, context) }),
    ...(input.filter != null && { filter: se_CaseFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.searchTerm != null && { searchTerm: input.searchTerm }),
    ...(input.sorts != null && { sorts: se_SortList(input.sorts, context) }),
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
 * serializeAws_restJson1SearchRelatedItemsCommand
 */
export const se_SearchRelatedItemsCommand = async (
  input: SearchRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/cases/{caseId}/related-items-search";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_RelatedItemFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
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
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateCaseCommand
 */
export const se_UpdateCaseCommand = async (
  input: UpdateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/cases/{caseId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.fields != null && { fields: se_FieldValueList(input.fields, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateFieldCommand
 */
export const se_UpdateFieldCommand = async (
  input: UpdateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/fields/{fieldId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "fieldId", () => input.fieldId!, "{fieldId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLayoutCommand
 */
export const se_UpdateLayoutCommand = async (
  input: UpdateLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/domains/{domainId}/layouts/{layoutId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "layoutId", () => input.layoutId!, "{layoutId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.content != null && { content: se_LayoutContent(input.content, context) }),
    ...(input.name != null && { name: input.name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTemplateCommand
 */
export const se_UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/domains/{domainId}/templates/{templateId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "domainId", () => input.domainId!, "{domainId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "templateId", () => input.templateId!, "{templateId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.layoutConfiguration != null && {
      layoutConfiguration: se_LayoutConfiguration(input.layoutConfiguration, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.requiredFields != null && { requiredFields: se_RequiredFieldList(input.requiredFields, context) }),
    ...(input.status != null && { status: input.status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1BatchGetFieldCommand
 */
export const de_BatchGetFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGetFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_BatchGetFieldErrorList(data.errors, context);
  }
  if (data.fields != null) {
    contents.fields = de_BatchGetFieldList(data.fields, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFieldCommandError
 */
const de_BatchGetFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1BatchPutFieldOptionsCommand
 */
export const de_BatchPutFieldOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutFieldOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchPutFieldOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = de_FieldOptionErrorList(data.errors, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutFieldOptionsCommandError
 */
const de_BatchPutFieldOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutFieldOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1CreateCaseCommand
 */
export const de_CreateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.caseArn != null) {
    contents.caseArn = __expectString(data.caseArn);
  }
  if (data.caseId != null) {
    contents.caseId = __expectString(data.caseId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateCaseCommandError
 */
const de_CreateCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domainArn != null) {
    contents.domainArn = __expectString(data.domainArn);
  }
  if (data.domainId != null) {
    contents.domainId = __expectString(data.domainId);
  }
  if (data.domainStatus != null) {
    contents.domainStatus = __expectString(data.domainStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1CreateFieldCommand
 */
export const de_CreateFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fieldArn != null) {
    contents.fieldArn = __expectString(data.fieldArn);
  }
  if (data.fieldId != null) {
    contents.fieldId = __expectString(data.fieldId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFieldCommandError
 */
const de_CreateFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1CreateLayoutCommand
 */
export const de_CreateLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLayoutCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.layoutArn != null) {
    contents.layoutArn = __expectString(data.layoutArn);
  }
  if (data.layoutId != null) {
    contents.layoutId = __expectString(data.layoutId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateLayoutCommandError
 */
const de_CreateLayoutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayoutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1CreateRelatedItemCommand
 */
export const de_CreateRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelatedItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRelatedItemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.relatedItemArn != null) {
    contents.relatedItemArn = __expectString(data.relatedItemArn);
  }
  if (data.relatedItemId != null) {
    contents.relatedItemId = __expectString(data.relatedItemId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateRelatedItemCommandError
 */
const de_CreateRelatedItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelatedItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1CreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.templateArn != null) {
    contents.templateArn = __expectString(data.templateArn);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateCommandError
 */
const de_CreateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1GetCaseCommand
 */
export const de_GetCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fields != null) {
    contents.fields = de_FieldValueList(data.fields, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseCommandError
 */
const de_GetCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1GetCaseEventConfigurationCommand
 */
export const de_GetCaseEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCaseEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventBridge != null) {
    contents.eventBridge = de_EventBridgeConfiguration(data.eventBridge, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseEventConfigurationCommandError
 */
const de_GetCaseEventConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseEventConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1GetDomainCommand
 */
export const de_GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdTime != null) {
    contents.createdTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.createdTime));
  }
  if (data.domainArn != null) {
    contents.domainArn = __expectString(data.domainArn);
  }
  if (data.domainId != null) {
    contents.domainId = __expectString(data.domainId);
  }
  if (data.domainStatus != null) {
    contents.domainStatus = __expectString(data.domainStatus);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainCommandError
 */
const de_GetDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1GetLayoutCommand
 */
export const de_GetLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLayoutCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content != null) {
    contents.content = de_LayoutContent(__expectUnion(data.content), context);
  }
  if (data.layoutArn != null) {
    contents.layoutArn = __expectString(data.layoutArn);
  }
  if (data.layoutId != null) {
    contents.layoutId = __expectString(data.layoutId);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLayoutCommandError
 */
const de_GetLayoutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayoutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1GetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.layoutConfiguration != null) {
    contents.layoutConfiguration = de_LayoutConfiguration(data.layoutConfiguration, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.requiredFields != null) {
    contents.requiredFields = de_RequiredFieldList(data.requiredFields, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  if (data.templateArn != null) {
    contents.templateArn = __expectString(data.templateArn);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateCommandError
 */
const de_GetTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1ListCasesForContactCommand
 */
export const de_ListCasesForContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCasesForContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCasesForContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cases != null) {
    contents.cases = de_CaseSummaryList(data.cases, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCasesForContactCommandError
 */
const de_ListCasesForContactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCasesForContactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domains != null) {
    contents.domains = de_DomainSummaryList(data.domains, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1ListFieldOptionsCommand
 */
export const de_ListFieldOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFieldOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.options != null) {
    contents.options = de_FieldOptionsList(data.options, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFieldOptionsCommandError
 */
const de_ListFieldOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1ListFieldsCommand
 */
export const de_ListFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFieldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fields != null) {
    contents.fields = de_FieldSummaryList(data.fields, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFieldsCommandError
 */
const de_ListFieldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1ListLayoutsCommand
 */
export const de_ListLayoutsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayoutsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLayoutsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.layouts != null) {
    contents.layouts = de_LayoutSummaryList(data.layouts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLayoutsCommandError
 */
const de_ListLayoutsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayoutsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
    contents.tags = de_Tags(data.tags, context);
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
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templates != null) {
    contents.templates = de_TemplateSummaryList(data.templates, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplatesCommandError
 */
const de_ListTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1PutCaseEventConfigurationCommand
 */
export const de_PutCaseEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCaseEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutCaseEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutCaseEventConfigurationCommandError
 */
const de_PutCaseEventConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCaseEventConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1SearchCasesCommand
 */
export const de_SearchCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchCasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cases != null) {
    contents.cases = de_SearchCasesResponseItemList(data.cases, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchCasesCommandError
 */
const de_SearchCasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1SearchRelatedItemsCommand
 */
export const de_SearchRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRelatedItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchRelatedItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.relatedItems != null) {
    contents.relatedItems = de_SearchRelatedItemsResponseItemList(data.relatedItems, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchRelatedItemsCommandError
 */
const de_SearchRelatedItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRelatedItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
  if (output.statusCode !== 200 && output.statusCode >= 300) {
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
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1UpdateCaseCommand
 */
export const de_UpdateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCaseCommandError
 */
const de_UpdateCaseCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1UpdateFieldCommand
 */
export const de_UpdateFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFieldCommandError
 */
const de_UpdateFieldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1UpdateLayoutCommand
 */
export const de_UpdateLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLayoutCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLayoutCommandError
 */
const de_UpdateLayoutCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayoutCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
 * deserializeAws_restJson1UpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTemplateCommandError
 */
const de_UpdateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.connectcases#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
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
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
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
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1BasicLayout
 */
const se_BasicLayout = (input: BasicLayout, context: __SerdeContext): any => {
  return {
    ...(input.moreInfo != null && { moreInfo: se_LayoutSections(input.moreInfo, context) }),
    ...(input.topPanel != null && { topPanel: se_LayoutSections(input.topPanel, context) }),
  };
};

/**
 * serializeAws_restJson1BatchGetFieldIdentifierList
 */
const se_BatchGetFieldIdentifierList = (input: FieldIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldIdentifier(entry, context);
    });
};

/**
 * serializeAws_restJson1CaseEventIncludedData
 */
const se_CaseEventIncludedData = (input: CaseEventIncludedData, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: se_FieldIdentifierList(input.fields, context) }),
  };
};

/**
 * serializeAws_restJson1CaseFilter
 */
const se_CaseFilter = (input: CaseFilter, context: __SerdeContext): any => {
  return CaseFilter.visit(input, {
    andAll: (value) => ({ andAll: se_CaseFilterList(value, context) }),
    field: (value) => ({ field: se_FieldFilter(value, context) }),
    not: (value) => ({ not: se_CaseFilter(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1CaseFilterList
 */
const se_CaseFilterList = (input: CaseFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CaseFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ChannelList
 */
const se_ChannelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1CommentContent
 */
const se_CommentContent = (input: CommentContent, context: __SerdeContext): any => {
  return {
    ...(input.body != null && { body: input.body }),
    ...(input.contentType != null && { contentType: input.contentType }),
  };
};

/**
 * serializeAws_restJson1CommentFilter
 */
const se_CommentFilter = (input: CommentFilter, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1Contact
 */
const se_Contact = (input: Contact, context: __SerdeContext): any => {
  return {
    ...(input.contactArn != null && { contactArn: input.contactArn }),
  };
};

/**
 * serializeAws_restJson1ContactFilter
 */
const se_ContactFilter = (input: ContactFilter, context: __SerdeContext): any => {
  return {
    ...(input.channel != null && { channel: se_ChannelList(input.channel, context) }),
    ...(input.contactArn != null && { contactArn: input.contactArn }),
  };
};

/**
 * serializeAws_restJson1EventBridgeConfiguration
 */
const se_EventBridgeConfiguration = (input: EventBridgeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.includedData != null && { includedData: se_EventIncludedData(input.includedData, context) }),
  };
};

/**
 * serializeAws_restJson1EventIncludedData
 */
const se_EventIncludedData = (input: EventIncludedData, context: __SerdeContext): any => {
  return {
    ...(input.caseData != null && { caseData: se_CaseEventIncludedData(input.caseData, context) }),
    ...(input.relatedItemData != null && {
      relatedItemData: se_RelatedItemEventIncludedData(input.relatedItemData, context),
    }),
  };
};

/**
 * serializeAws_restJson1FieldFilter
 */
const se_FieldFilter = (input: FieldFilter, context: __SerdeContext): any => {
  return FieldFilter.visit(input, {
    contains: (value) => ({ contains: se_FieldValue(value, context) }),
    equalTo: (value) => ({ equalTo: se_FieldValue(value, context) }),
    greaterThan: (value) => ({ greaterThan: se_FieldValue(value, context) }),
    greaterThanOrEqualTo: (value) => ({ greaterThanOrEqualTo: se_FieldValue(value, context) }),
    lessThan: (value) => ({ lessThan: se_FieldValue(value, context) }),
    lessThanOrEqualTo: (value) => ({ lessThanOrEqualTo: se_FieldValue(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1FieldGroup
 */
const se_FieldGroup = (input: FieldGroup, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: se_FieldList(input.fields, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1FieldIdentifier
 */
const se_FieldIdentifier = (input: FieldIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1FieldIdentifierList
 */
const se_FieldIdentifierList = (input: FieldIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldIdentifier(entry, context);
    });
};

/**
 * serializeAws_restJson1FieldItem
 */
const se_FieldItem = (input: FieldItem, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_restJson1FieldList
 */
const se_FieldList = (input: FieldItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldItem(entry, context);
    });
};

/**
 * serializeAws_restJson1FieldOption
 */
const se_FieldOption = (input: FieldOption, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1FieldOptionsList
 */
const se_FieldOptionsList = (input: FieldOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldOption(entry, context);
    });
};

/**
 * serializeAws_restJson1FieldValue
 */
const se_FieldValue = (input: FieldValue, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.value != null && { value: se_FieldValueUnion(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1FieldValueList
 */
const se_FieldValueList = (input: FieldValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FieldValue(entry, context);
    });
};

/**
 * serializeAws_restJson1FieldValueUnion
 */
const se_FieldValueUnion = (input: FieldValueUnion, context: __SerdeContext): any => {
  return FieldValueUnion.visit(input, {
    booleanValue: (value) => ({ booleanValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1LayoutConfiguration
 */
const se_LayoutConfiguration = (input: LayoutConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.defaultLayout != null && { defaultLayout: input.defaultLayout }),
  };
};

/**
 * serializeAws_restJson1LayoutContent
 */
const se_LayoutContent = (input: LayoutContent, context: __SerdeContext): any => {
  return LayoutContent.visit(input, {
    basic: (value) => ({ basic: se_BasicLayout(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1LayoutSections
 */
const se_LayoutSections = (input: LayoutSections, context: __SerdeContext): any => {
  return {
    ...(input.sections != null && { sections: se_SectionsList(input.sections, context) }),
  };
};

/**
 * serializeAws_restJson1RelatedItemEventIncludedData
 */
const se_RelatedItemEventIncludedData = (input: RelatedItemEventIncludedData, context: __SerdeContext): any => {
  return {
    ...(input.includeContent != null && { includeContent: input.includeContent }),
  };
};

/**
 * serializeAws_restJson1RelatedItemFilterList
 */
const se_RelatedItemFilterList = (input: RelatedItemTypeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RelatedItemTypeFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RelatedItemInputContent
 */
const se_RelatedItemInputContent = (input: RelatedItemInputContent, context: __SerdeContext): any => {
  return RelatedItemInputContent.visit(input, {
    comment: (value) => ({ comment: se_CommentContent(value, context) }),
    contact: (value) => ({ contact: se_Contact(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RelatedItemTypeFilter
 */
const se_RelatedItemTypeFilter = (input: RelatedItemTypeFilter, context: __SerdeContext): any => {
  return RelatedItemTypeFilter.visit(input, {
    comment: (value) => ({ comment: se_CommentFilter(value, context) }),
    contact: (value) => ({ contact: se_ContactFilter(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1RequiredField
 */
const se_RequiredField = (input: RequiredField, context: __SerdeContext): any => {
  return {
    ...(input.fieldId != null && { fieldId: input.fieldId }),
  };
};

/**
 * serializeAws_restJson1RequiredFieldList
 */
const se_RequiredFieldList = (input: RequiredField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RequiredField(entry, context);
    });
};

/**
 * serializeAws_restJson1Section
 */
const se_Section = (input: Section, context: __SerdeContext): any => {
  return Section.visit(input, {
    fieldGroup: (value) => ({ fieldGroup: se_FieldGroup(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1SectionsList
 */
const se_SectionsList = (input: Section[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Section(entry, context);
    });
};

/**
 * serializeAws_restJson1Sort
 */
const se_Sort = (input: Sort, context: __SerdeContext): any => {
  return {
    ...(input.fieldId != null && { fieldId: input.fieldId }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_restJson1SortList
 */
const se_SortList = (input: Sort[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Sort(entry, context);
    });
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BasicLayout
 */
const de_BasicLayout = (output: any, context: __SerdeContext): BasicLayout => {
  return {
    moreInfo: output.moreInfo != null ? de_LayoutSections(output.moreInfo, context) : undefined,
    topPanel: output.topPanel != null ? de_LayoutSections(output.topPanel, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchGetFieldErrorList
 */
const de_BatchGetFieldErrorList = (output: any, context: __SerdeContext): FieldError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchGetFieldList
 */
const de_BatchGetFieldList = (output: any, context: __SerdeContext): GetFieldResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GetFieldResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CaseEventIncludedData
 */
const de_CaseEventIncludedData = (output: any, context: __SerdeContext): CaseEventIncludedData => {
  return {
    fields: output.fields != null ? de_FieldIdentifierList(output.fields, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CaseSummary
 */
const de_CaseSummary = (output: any, context: __SerdeContext): CaseSummary => {
  return {
    caseId: __expectString(output.caseId),
    templateId: __expectString(output.templateId),
  } as any;
};

/**
 * deserializeAws_restJson1CaseSummaryList
 */
const de_CaseSummaryList = (output: any, context: __SerdeContext): CaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CaseSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CommentContent
 */
const de_CommentContent = (output: any, context: __SerdeContext): CommentContent => {
  return {
    body: __expectString(output.body),
    contentType: __expectString(output.contentType),
  } as any;
};

/**
 * deserializeAws_restJson1ContactContent
 */
const de_ContactContent = (output: any, context: __SerdeContext): ContactContent => {
  return {
    channel: __expectString(output.channel),
    connectedToSystemTime:
      output.connectedToSystemTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.connectedToSystemTime))
        : undefined,
    contactArn: __expectString(output.contactArn),
  } as any;
};

/**
 * deserializeAws_restJson1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    domainArn: __expectString(output.domainArn),
    domainId: __expectString(output.domainId),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1DomainSummaryList
 */
const de_DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EventBridgeConfiguration
 */
const de_EventBridgeConfiguration = (output: any, context: __SerdeContext): EventBridgeConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
    includedData: output.includedData != null ? de_EventIncludedData(output.includedData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EventIncludedData
 */
const de_EventIncludedData = (output: any, context: __SerdeContext): EventIncludedData => {
  return {
    caseData: output.caseData != null ? de_CaseEventIncludedData(output.caseData, context) : undefined,
    relatedItemData:
      output.relatedItemData != null ? de_RelatedItemEventIncludedData(output.relatedItemData, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FieldError
 */
const de_FieldError = (output: any, context: __SerdeContext): FieldError => {
  return {
    errorCode: __expectString(output.errorCode),
    id: __expectString(output.id),
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1FieldGroup
 */
const de_FieldGroup = (output: any, context: __SerdeContext): FieldGroup => {
  return {
    fields: output.fields != null ? de_FieldList(output.fields, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1FieldIdentifier
 */
const de_FieldIdentifier = (output: any, context: __SerdeContext): FieldIdentifier => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1FieldIdentifierList
 */
const de_FieldIdentifierList = (output: any, context: __SerdeContext): FieldIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldIdentifier(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldItem
 */
const de_FieldItem = (output: any, context: __SerdeContext): FieldItem => {
  return {
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_restJson1FieldList
 */
const de_FieldList = (output: any, context: __SerdeContext): FieldItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldOption
 */
const de_FieldOption = (output: any, context: __SerdeContext): FieldOption => {
  return {
    active: __expectBoolean(output.active),
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1FieldOptionError
 */
const de_FieldOptionError = (output: any, context: __SerdeContext): FieldOptionError => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1FieldOptionErrorList
 */
const de_FieldOptionErrorList = (output: any, context: __SerdeContext): FieldOptionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldOptionError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldOptionsList
 */
const de_FieldOptionsList = (output: any, context: __SerdeContext): FieldOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldSummary
 */
const de_FieldSummary = (output: any, context: __SerdeContext): FieldSummary => {
  return {
    fieldArn: __expectString(output.fieldArn),
    fieldId: __expectString(output.fieldId),
    name: __expectString(output.name),
    namespace: __expectString(output.namespace),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1FieldSummaryList
 */
const de_FieldSummaryList = (output: any, context: __SerdeContext): FieldSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldValue
 */
const de_FieldValue = (output: any, context: __SerdeContext): FieldValue => {
  return {
    id: __expectString(output.id),
    value: output.value != null ? de_FieldValueUnion(__expectUnion(output.value), context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FieldValueList
 */
const de_FieldValueList = (output: any, context: __SerdeContext): FieldValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FieldValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FieldValueUnion
 */
const de_FieldValueUnion = (output: any, context: __SerdeContext): FieldValueUnion => {
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any };
  }
  if (__limitedParseDouble(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseDouble(output.doubleValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1GetFieldResponse
 */
const de_GetFieldResponse = (output: any, context: __SerdeContext): GetFieldResponse => {
  return {
    description: __expectString(output.description),
    fieldArn: __expectString(output.fieldArn),
    fieldId: __expectString(output.fieldId),
    name: __expectString(output.name),
    namespace: __expectString(output.namespace),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1LayoutConfiguration
 */
const de_LayoutConfiguration = (output: any, context: __SerdeContext): LayoutConfiguration => {
  return {
    defaultLayout: __expectString(output.defaultLayout),
  } as any;
};

/**
 * deserializeAws_restJson1LayoutContent
 */
const de_LayoutContent = (output: any, context: __SerdeContext): LayoutContent => {
  if (output.basic != null) {
    return {
      basic: de_BasicLayout(output.basic, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1LayoutSections
 */
const de_LayoutSections = (output: any, context: __SerdeContext): LayoutSections => {
  return {
    sections: output.sections != null ? de_SectionsList(output.sections, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LayoutSummary
 */
const de_LayoutSummary = (output: any, context: __SerdeContext): LayoutSummary => {
  return {
    layoutArn: __expectString(output.layoutArn),
    layoutId: __expectString(output.layoutId),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1LayoutSummaryList
 */
const de_LayoutSummaryList = (output: any, context: __SerdeContext): LayoutSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LayoutSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RelatedItemContent
 */
const de_RelatedItemContent = (output: any, context: __SerdeContext): RelatedItemContent => {
  if (output.comment != null) {
    return {
      comment: de_CommentContent(output.comment, context),
    };
  }
  if (output.contact != null) {
    return {
      contact: de_ContactContent(output.contact, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RelatedItemEventIncludedData
 */
const de_RelatedItemEventIncludedData = (output: any, context: __SerdeContext): RelatedItemEventIncludedData => {
  return {
    includeContent: __expectBoolean(output.includeContent),
  } as any;
};

/**
 * deserializeAws_restJson1RequiredField
 */
const de_RequiredField = (output: any, context: __SerdeContext): RequiredField => {
  return {
    fieldId: __expectString(output.fieldId),
  } as any;
};

/**
 * deserializeAws_restJson1RequiredFieldList
 */
const de_RequiredFieldList = (output: any, context: __SerdeContext): RequiredField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RequiredField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchCasesResponseItem
 */
const de_SearchCasesResponseItem = (output: any, context: __SerdeContext): SearchCasesResponseItem => {
  return {
    caseId: __expectString(output.caseId),
    fields: output.fields != null ? de_FieldValueList(output.fields, context) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    templateId: __expectString(output.templateId),
  } as any;
};

/**
 * deserializeAws_restJson1SearchCasesResponseItemList
 */
const de_SearchCasesResponseItemList = (output: any, context: __SerdeContext): SearchCasesResponseItem[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return de_SearchCasesResponseItem(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1SearchRelatedItemsResponseItem
 */
const de_SearchRelatedItemsResponseItem = (output: any, context: __SerdeContext): SearchRelatedItemsResponseItem => {
  return {
    associationTime:
      output.associationTime != null
        ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.associationTime))
        : undefined,
    content: output.content != null ? de_RelatedItemContent(__expectUnion(output.content), context) : undefined,
    relatedItemId: __expectString(output.relatedItemId),
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1SearchRelatedItemsResponseItemList
 */
const de_SearchRelatedItemsResponseItemList = (
  output: any,
  context: __SerdeContext
): SearchRelatedItemsResponseItem[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return de_SearchRelatedItemsResponseItem(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1Section
 */
const de_Section = (output: any, context: __SerdeContext): Section => {
  if (output.fieldGroup != null) {
    return {
      fieldGroup: de_FieldGroup(output.fieldGroup, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1SectionsList
 */
const de_SectionsList = (output: any, context: __SerdeContext): Section[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Section(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TemplateSummary
 */
const de_TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
    templateArn: __expectString(output.templateArn),
    templateId: __expectString(output.templateId),
  } as any;
};

/**
 * deserializeAws_restJson1TemplateSummaryList
 */
const de_TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateSummary(entry, context);
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
