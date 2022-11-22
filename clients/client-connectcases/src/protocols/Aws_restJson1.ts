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
  parseRfc3339DateTime as __parseRfc3339DateTime,
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

export const serializeAws_restJson1BatchGetFieldCommand = async (
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
    ...(input.fields != null && { fields: serializeAws_restJson1BatchGetFieldIdentifierList(input.fields, context) }),
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

export const serializeAws_restJson1BatchPutFieldOptionsCommand = async (
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
    ...(input.options != null && { options: serializeAws_restJson1FieldOptionsList(input.options, context) }),
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

export const serializeAws_restJson1CreateCaseCommand = async (
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
    ...(input.fields != null && { fields: serializeAws_restJson1FieldValueList(input.fields, context) }),
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

export const serializeAws_restJson1CreateDomainCommand = async (
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

export const serializeAws_restJson1CreateFieldCommand = async (
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

export const serializeAws_restJson1CreateLayoutCommand = async (
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
    ...(input.content != null && { content: serializeAws_restJson1LayoutContent(input.content, context) }),
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

export const serializeAws_restJson1CreateRelatedItemCommand = async (
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
    ...(input.content != null && { content: serializeAws_restJson1RelatedItemInputContent(input.content, context) }),
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

export const serializeAws_restJson1CreateTemplateCommand = async (
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
      layoutConfiguration: serializeAws_restJson1LayoutConfiguration(input.layoutConfiguration, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.requiredFields != null && {
      requiredFields: serializeAws_restJson1RequiredFieldList(input.requiredFields, context),
    }),
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

export const serializeAws_restJson1GetCaseCommand = async (
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
    ...(input.fields != null && { fields: serializeAws_restJson1FieldIdentifierList(input.fields, context) }),
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

export const serializeAws_restJson1GetCaseEventConfigurationCommand = async (
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

export const serializeAws_restJson1GetDomainCommand = async (
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

export const serializeAws_restJson1GetLayoutCommand = async (
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

export const serializeAws_restJson1GetTemplateCommand = async (
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

export const serializeAws_restJson1ListCasesForContactCommand = async (
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

export const serializeAws_restJson1ListDomainsCommand = async (
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

export const serializeAws_restJson1ListFieldOptionsCommand = async (
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

export const serializeAws_restJson1ListFieldsCommand = async (
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

export const serializeAws_restJson1ListLayoutsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListTemplatesCommand = async (
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

export const serializeAws_restJson1PutCaseEventConfigurationCommand = async (
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
    ...(input.eventBridge != null && {
      eventBridge: serializeAws_restJson1EventBridgeConfiguration(input.eventBridge, context),
    }),
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

export const serializeAws_restJson1SearchCasesCommand = async (
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
    ...(input.fields != null && { fields: serializeAws_restJson1FieldIdentifierList(input.fields, context) }),
    ...(input.filter != null && { filter: serializeAws_restJson1CaseFilter(input.filter, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.searchTerm != null && { searchTerm: input.searchTerm }),
    ...(input.sorts != null && { sorts: serializeAws_restJson1SortList(input.sorts, context) }),
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

export const serializeAws_restJson1SearchRelatedItemsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1RelatedItemFilterList(input.filters, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateCaseCommand = async (
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
    ...(input.fields != null && { fields: serializeAws_restJson1FieldValueList(input.fields, context) }),
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

export const serializeAws_restJson1UpdateFieldCommand = async (
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

export const serializeAws_restJson1UpdateLayoutCommand = async (
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
    ...(input.content != null && { content: serializeAws_restJson1LayoutContent(input.content, context) }),
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

export const serializeAws_restJson1UpdateTemplateCommand = async (
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
      layoutConfiguration: serializeAws_restJson1LayoutConfiguration(input.layoutConfiguration, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.requiredFields != null && {
      requiredFields: serializeAws_restJson1RequiredFieldList(input.requiredFields, context),
    }),
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

export const deserializeAws_restJson1BatchGetFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGetFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = deserializeAws_restJson1BatchGetFieldErrorList(data.errors, context);
  }
  if (data.fields != null) {
    contents.fields = deserializeAws_restJson1BatchGetFieldList(data.fields, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchGetFieldCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchPutFieldOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutFieldOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutFieldOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errors != null) {
    contents.errors = deserializeAws_restJson1FieldOptionErrorList(data.errors, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchPutFieldOptionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCaseCommandError(output, context);
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

const deserializeAws_restJson1CreateCaseCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDomainCommandError(output, context);
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

const deserializeAws_restJson1CreateDomainCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFieldCommandError(output, context);
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

const deserializeAws_restJson1CreateFieldCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLayoutCommandError(output, context);
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

const deserializeAws_restJson1CreateLayoutCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelatedItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRelatedItemCommandError(output, context);
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

const deserializeAws_restJson1CreateRelatedItemCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTemplateCommandError(output, context);
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

const deserializeAws_restJson1CreateTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fields != null) {
    contents.fields = deserializeAws_restJson1FieldValueList(data.fields, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  return contents;
};

const deserializeAws_restJson1GetCaseCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCaseEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCaseEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventBridge != null) {
    contents.eventBridge = deserializeAws_restJson1EventBridgeConfiguration(data.eventBridge, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCaseEventConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.createdTime != null) {
    contents.createdTime = __expectNonNull(__parseRfc3339DateTime(data.createdTime));
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDomainCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLayoutCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.content != null) {
    contents.content = deserializeAws_restJson1LayoutContent(__expectUnion(data.content), context);
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
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLayoutCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.layoutConfiguration != null) {
    contents.layoutConfiguration = deserializeAws_restJson1LayoutConfiguration(data.layoutConfiguration, context);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.requiredFields != null) {
    contents.requiredFields = deserializeAws_restJson1RequiredFieldList(data.requiredFields, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  if (data.templateArn != null) {
    contents.templateArn = __expectString(data.templateArn);
  }
  if (data.templateId != null) {
    contents.templateId = __expectString(data.templateId);
  }
  return contents;
};

const deserializeAws_restJson1GetTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCasesForContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCasesForContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCasesForContactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cases != null) {
    contents.cases = deserializeAws_restJson1CaseSummaryList(data.cases, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCasesForContactCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDomainsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.domains != null) {
    contents.domains = deserializeAws_restJson1DomainSummaryList(data.domains, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDomainsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFieldOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFieldOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.options != null) {
    contents.options = deserializeAws_restJson1FieldOptionsList(data.options, context);
  }
  return contents;
};

const deserializeAws_restJson1ListFieldOptionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFieldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fields != null) {
    contents.fields = deserializeAws_restJson1FieldSummaryList(data.fields, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFieldsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListLayoutsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayoutsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLayoutsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.layouts != null) {
    contents.layouts = deserializeAws_restJson1LayoutSummaryList(data.layouts, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLayoutsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templates != null) {
    contents.templates = deserializeAws_restJson1TemplateSummaryList(data.templates, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PutCaseEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCaseEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutCaseEventConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutCaseEventConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchCasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cases != null) {
    contents.cases = deserializeAws_restJson1SearchCasesResponseItemList(data.cases, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1SearchCasesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SearchRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRelatedItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchRelatedItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.relatedItems != null) {
    contents.relatedItems = deserializeAws_restJson1SearchRelatedItemsResponseItemList(data.relatedItems, context);
  }
  return contents;
};

const deserializeAws_restJson1SearchRelatedItemsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCaseCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateCaseCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFieldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFieldCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLayoutCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateLayoutCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateTemplateCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.connectcases#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.connectcases#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.connectcases#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.connectcases#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1BasicLayout = (input: BasicLayout, context: __SerdeContext): any => {
  return {
    ...(input.moreInfo != null && { moreInfo: serializeAws_restJson1LayoutSections(input.moreInfo, context) }),
    ...(input.topPanel != null && { topPanel: serializeAws_restJson1LayoutSections(input.topPanel, context) }),
  };
};

const serializeAws_restJson1BatchGetFieldIdentifierList = (input: FieldIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FieldIdentifier(entry, context);
    });
};

const serializeAws_restJson1CaseEventIncludedData = (input: CaseEventIncludedData, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: serializeAws_restJson1FieldIdentifierList(input.fields, context) }),
  };
};

const serializeAws_restJson1CaseFilter = (input: CaseFilter, context: __SerdeContext): any => {
  return CaseFilter.visit(input, {
    andAll: (value) => ({ andAll: serializeAws_restJson1CaseFilterList(value, context) }),
    field: (value) => ({ field: serializeAws_restJson1FieldFilter(value, context) }),
    not: (value) => ({ not: serializeAws_restJson1CaseFilter(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1CaseFilterList = (input: CaseFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CaseFilter(entry, context);
    });
};

const serializeAws_restJson1ChannelList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1CommentContent = (input: CommentContent, context: __SerdeContext): any => {
  return {
    ...(input.body != null && { body: input.body }),
    ...(input.contentType != null && { contentType: input.contentType }),
  };
};

const serializeAws_restJson1CommentFilter = (input: CommentFilter, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1Contact = (input: Contact, context: __SerdeContext): any => {
  return {
    ...(input.contactArn != null && { contactArn: input.contactArn }),
  };
};

const serializeAws_restJson1ContactFilter = (input: ContactFilter, context: __SerdeContext): any => {
  return {
    ...(input.channel != null && { channel: serializeAws_restJson1ChannelList(input.channel, context) }),
    ...(input.contactArn != null && { contactArn: input.contactArn }),
  };
};

const serializeAws_restJson1EventBridgeConfiguration = (
  input: EventBridgeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.includedData != null && {
      includedData: serializeAws_restJson1EventIncludedData(input.includedData, context),
    }),
  };
};

const serializeAws_restJson1EventIncludedData = (input: EventIncludedData, context: __SerdeContext): any => {
  return {
    ...(input.caseData != null && { caseData: serializeAws_restJson1CaseEventIncludedData(input.caseData, context) }),
    ...(input.relatedItemData != null && {
      relatedItemData: serializeAws_restJson1RelatedItemEventIncludedData(input.relatedItemData, context),
    }),
  };
};

const serializeAws_restJson1FieldFilter = (input: FieldFilter, context: __SerdeContext): any => {
  return FieldFilter.visit(input, {
    contains: (value) => ({ contains: serializeAws_restJson1FieldValue(value, context) }),
    equalTo: (value) => ({ equalTo: serializeAws_restJson1FieldValue(value, context) }),
    greaterThan: (value) => ({ greaterThan: serializeAws_restJson1FieldValue(value, context) }),
    greaterThanOrEqualTo: (value) => ({ greaterThanOrEqualTo: serializeAws_restJson1FieldValue(value, context) }),
    lessThan: (value) => ({ lessThan: serializeAws_restJson1FieldValue(value, context) }),
    lessThanOrEqualTo: (value) => ({ lessThanOrEqualTo: serializeAws_restJson1FieldValue(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1FieldGroup = (input: FieldGroup, context: __SerdeContext): any => {
  return {
    ...(input.fields != null && { fields: serializeAws_restJson1FieldList(input.fields, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1FieldIdentifier = (input: FieldIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_restJson1FieldIdentifierList = (input: FieldIdentifier[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FieldIdentifier(entry, context);
    });
};

const serializeAws_restJson1FieldItem = (input: FieldItem, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_restJson1FieldList = (input: FieldItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FieldItem(entry, context);
    });
};

const serializeAws_restJson1FieldOption = (input: FieldOption, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1FieldOptionsList = (input: FieldOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FieldOption(entry, context);
    });
};

const serializeAws_restJson1FieldValue = (input: FieldValue, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.value != null && { value: serializeAws_restJson1FieldValueUnion(input.value, context) }),
  };
};

const serializeAws_restJson1FieldValueList = (input: FieldValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FieldValue(entry, context);
    });
};

const serializeAws_restJson1FieldValueUnion = (input: FieldValueUnion, context: __SerdeContext): any => {
  return FieldValueUnion.visit(input, {
    booleanValue: (value) => ({ booleanValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1LayoutConfiguration = (input: LayoutConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.defaultLayout != null && { defaultLayout: input.defaultLayout }),
  };
};

const serializeAws_restJson1LayoutContent = (input: LayoutContent, context: __SerdeContext): any => {
  return LayoutContent.visit(input, {
    basic: (value) => ({ basic: serializeAws_restJson1BasicLayout(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1LayoutSections = (input: LayoutSections, context: __SerdeContext): any => {
  return {
    ...(input.sections != null && { sections: serializeAws_restJson1SectionsList(input.sections, context) }),
  };
};

const serializeAws_restJson1RelatedItemEventIncludedData = (
  input: RelatedItemEventIncludedData,
  context: __SerdeContext
): any => {
  return {
    ...(input.includeContent != null && { includeContent: input.includeContent }),
  };
};

const serializeAws_restJson1RelatedItemFilterList = (input: RelatedItemTypeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RelatedItemTypeFilter(entry, context);
    });
};

const serializeAws_restJson1RelatedItemInputContent = (
  input: RelatedItemInputContent,
  context: __SerdeContext
): any => {
  return RelatedItemInputContent.visit(input, {
    comment: (value) => ({ comment: serializeAws_restJson1CommentContent(value, context) }),
    contact: (value) => ({ contact: serializeAws_restJson1Contact(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1RelatedItemTypeFilter = (input: RelatedItemTypeFilter, context: __SerdeContext): any => {
  return RelatedItemTypeFilter.visit(input, {
    comment: (value) => ({ comment: serializeAws_restJson1CommentFilter(value, context) }),
    contact: (value) => ({ contact: serializeAws_restJson1ContactFilter(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1RequiredField = (input: RequiredField, context: __SerdeContext): any => {
  return {
    ...(input.fieldId != null && { fieldId: input.fieldId }),
  };
};

const serializeAws_restJson1RequiredFieldList = (input: RequiredField[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RequiredField(entry, context);
    });
};

const serializeAws_restJson1Section = (input: Section, context: __SerdeContext): any => {
  return Section.visit(input, {
    fieldGroup: (value) => ({ fieldGroup: serializeAws_restJson1FieldGroup(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1SectionsList = (input: Section[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Section(entry, context);
    });
};

const serializeAws_restJson1Sort = (input: Sort, context: __SerdeContext): any => {
  return {
    ...(input.fieldId != null && { fieldId: input.fieldId }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_restJson1SortList = (input: Sort[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Sort(entry, context);
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1BasicLayout = (output: any, context: __SerdeContext): BasicLayout => {
  return {
    moreInfo: output.moreInfo != null ? deserializeAws_restJson1LayoutSections(output.moreInfo, context) : undefined,
    topPanel: output.topPanel != null ? deserializeAws_restJson1LayoutSections(output.topPanel, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BatchGetFieldErrorList = (output: any, context: __SerdeContext): FieldError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchGetFieldList = (output: any, context: __SerdeContext): GetFieldResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GetFieldResponse(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CaseEventIncludedData = (output: any, context: __SerdeContext): CaseEventIncludedData => {
  return {
    fields: output.fields != null ? deserializeAws_restJson1FieldIdentifierList(output.fields, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CaseSummary = (output: any, context: __SerdeContext): CaseSummary => {
  return {
    caseId: __expectString(output.caseId),
    templateId: __expectString(output.templateId),
  } as any;
};

const deserializeAws_restJson1CaseSummaryList = (output: any, context: __SerdeContext): CaseSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CaseSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CommentContent = (output: any, context: __SerdeContext): CommentContent => {
  return {
    body: __expectString(output.body),
    contentType: __expectString(output.contentType),
  } as any;
};

const deserializeAws_restJson1ContactContent = (output: any, context: __SerdeContext): ContactContent => {
  return {
    channel: __expectString(output.channel),
    connectedToSystemTime:
      output.connectedToSystemTime != null
        ? __expectNonNull(__parseRfc3339DateTime(output.connectedToSystemTime))
        : undefined,
    contactArn: __expectString(output.contactArn),
  } as any;
};

const deserializeAws_restJson1DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    domainArn: __expectString(output.domainArn),
    domainId: __expectString(output.domainId),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DomainSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EventBridgeConfiguration = (
  output: any,
  context: __SerdeContext
): EventBridgeConfiguration => {
  return {
    enabled: __expectBoolean(output.enabled),
    includedData:
      output.includedData != null ? deserializeAws_restJson1EventIncludedData(output.includedData, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EventIncludedData = (output: any, context: __SerdeContext): EventIncludedData => {
  return {
    caseData:
      output.caseData != null ? deserializeAws_restJson1CaseEventIncludedData(output.caseData, context) : undefined,
    relatedItemData:
      output.relatedItemData != null
        ? deserializeAws_restJson1RelatedItemEventIncludedData(output.relatedItemData, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FieldError = (output: any, context: __SerdeContext): FieldError => {
  return {
    errorCode: __expectString(output.errorCode),
    id: __expectString(output.id),
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1FieldGroup = (output: any, context: __SerdeContext): FieldGroup => {
  return {
    fields: output.fields != null ? deserializeAws_restJson1FieldList(output.fields, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1FieldIdentifier = (output: any, context: __SerdeContext): FieldIdentifier => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1FieldIdentifierList = (output: any, context: __SerdeContext): FieldIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FieldItem = (output: any, context: __SerdeContext): FieldItem => {
  return {
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_restJson1FieldList = (output: any, context: __SerdeContext): FieldItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FieldOption = (output: any, context: __SerdeContext): FieldOption => {
  return {
    active: __expectBoolean(output.active),
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1FieldOptionError = (output: any, context: __SerdeContext): FieldOptionError => {
  return {
    errorCode: __expectString(output.errorCode),
    message: __expectString(output.message),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1FieldOptionErrorList = (output: any, context: __SerdeContext): FieldOptionError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldOptionError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FieldOptionsList = (output: any, context: __SerdeContext): FieldOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FieldSummary = (output: any, context: __SerdeContext): FieldSummary => {
  return {
    fieldArn: __expectString(output.fieldArn),
    fieldId: __expectString(output.fieldId),
    name: __expectString(output.name),
    namespace: __expectString(output.namespace),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1FieldSummaryList = (output: any, context: __SerdeContext): FieldSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FieldValue = (output: any, context: __SerdeContext): FieldValue => {
  return {
    id: __expectString(output.id),
    value:
      output.value != null ? deserializeAws_restJson1FieldValueUnion(__expectUnion(output.value), context) : undefined,
  } as any;
};

const deserializeAws_restJson1FieldValueList = (output: any, context: __SerdeContext): FieldValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FieldValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FieldValueUnion = (output: any, context: __SerdeContext): FieldValueUnion => {
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

const deserializeAws_restJson1GetFieldResponse = (output: any, context: __SerdeContext): GetFieldResponse => {
  return {
    description: __expectString(output.description),
    fieldArn: __expectString(output.fieldArn),
    fieldId: __expectString(output.fieldId),
    name: __expectString(output.name),
    namespace: __expectString(output.namespace),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1LayoutConfiguration = (output: any, context: __SerdeContext): LayoutConfiguration => {
  return {
    defaultLayout: __expectString(output.defaultLayout),
  } as any;
};

const deserializeAws_restJson1LayoutContent = (output: any, context: __SerdeContext): LayoutContent => {
  if (output.basic != null) {
    return {
      basic: deserializeAws_restJson1BasicLayout(output.basic, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1LayoutSections = (output: any, context: __SerdeContext): LayoutSections => {
  return {
    sections: output.sections != null ? deserializeAws_restJson1SectionsList(output.sections, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LayoutSummary = (output: any, context: __SerdeContext): LayoutSummary => {
  return {
    layoutArn: __expectString(output.layoutArn),
    layoutId: __expectString(output.layoutId),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1LayoutSummaryList = (output: any, context: __SerdeContext): LayoutSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LayoutSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RelatedItemContent = (output: any, context: __SerdeContext): RelatedItemContent => {
  if (output.comment != null) {
    return {
      comment: deserializeAws_restJson1CommentContent(output.comment, context),
    };
  }
  if (output.contact != null) {
    return {
      contact: deserializeAws_restJson1ContactContent(output.contact, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1RelatedItemEventIncludedData = (
  output: any,
  context: __SerdeContext
): RelatedItemEventIncludedData => {
  return {
    includeContent: __expectBoolean(output.includeContent),
  } as any;
};

const deserializeAws_restJson1RequiredField = (output: any, context: __SerdeContext): RequiredField => {
  return {
    fieldId: __expectString(output.fieldId),
  } as any;
};

const deserializeAws_restJson1RequiredFieldList = (output: any, context: __SerdeContext): RequiredField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RequiredField(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SearchCasesResponseItem = (
  output: any,
  context: __SerdeContext
): SearchCasesResponseItem => {
  return {
    caseId: __expectString(output.caseId),
    fields: output.fields != null ? deserializeAws_restJson1FieldValueList(output.fields, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    templateId: __expectString(output.templateId),
  } as any;
};

const deserializeAws_restJson1SearchCasesResponseItemList = (
  output: any,
  context: __SerdeContext
): SearchCasesResponseItem[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return deserializeAws_restJson1SearchCasesResponseItem(entry, context);
  });
  return retVal;
};

const deserializeAws_restJson1SearchRelatedItemsResponseItem = (
  output: any,
  context: __SerdeContext
): SearchRelatedItemsResponseItem => {
  return {
    associationTime:
      output.associationTime != null ? __expectNonNull(__parseRfc3339DateTime(output.associationTime)) : undefined,
    content:
      output.content != null
        ? deserializeAws_restJson1RelatedItemContent(__expectUnion(output.content), context)
        : undefined,
    relatedItemId: __expectString(output.relatedItemId),
    tags: output.tags != null ? deserializeAws_restJson1Tags(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1SearchRelatedItemsResponseItemList = (
  output: any,
  context: __SerdeContext
): SearchRelatedItemsResponseItem[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return deserializeAws_restJson1SearchRelatedItemsResponseItem(entry, context);
  });
  return retVal;
};

const deserializeAws_restJson1Section = (output: any, context: __SerdeContext): Section => {
  if (output.fieldGroup != null) {
    return {
      fieldGroup: deserializeAws_restJson1FieldGroup(output.fieldGroup, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1SectionsList = (output: any, context: __SerdeContext): Section[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Section(__expectUnion(entry), context);
    });
  return retVal;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key] = null as any;
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    name: __expectString(output.name),
    status: __expectString(output.status),
    templateArn: __expectString(output.templateArn),
    templateId: __expectString(output.templateId),
  } as any;
};

const deserializeAws_restJson1TemplateSummaryList = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateSummary(entry, context);
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
