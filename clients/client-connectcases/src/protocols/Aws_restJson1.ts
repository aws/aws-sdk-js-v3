// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { BatchGetCaseRuleCommandInput, BatchGetCaseRuleCommandOutput } from "../commands/BatchGetCaseRuleCommand";
import { BatchGetFieldCommandInput, BatchGetFieldCommandOutput } from "../commands/BatchGetFieldCommand";
import {
  BatchPutFieldOptionsCommandInput,
  BatchPutFieldOptionsCommandOutput,
} from "../commands/BatchPutFieldOptionsCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "../commands/CreateCaseCommand";
import { CreateCaseRuleCommandInput, CreateCaseRuleCommandOutput } from "../commands/CreateCaseRuleCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateFieldCommandInput, CreateFieldCommandOutput } from "../commands/CreateFieldCommand";
import { CreateLayoutCommandInput, CreateLayoutCommandOutput } from "../commands/CreateLayoutCommand";
import { CreateRelatedItemCommandInput, CreateRelatedItemCommandOutput } from "../commands/CreateRelatedItemCommand";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput } from "../commands/CreateTemplateCommand";
import { DeleteCaseRuleCommandInput, DeleteCaseRuleCommandOutput } from "../commands/DeleteCaseRuleCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import { DeleteFieldCommandInput, DeleteFieldCommandOutput } from "../commands/DeleteFieldCommand";
import { DeleteLayoutCommandInput, DeleteLayoutCommandOutput } from "../commands/DeleteLayoutCommand";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput } from "../commands/DeleteTemplateCommand";
import { GetCaseAuditEventsCommandInput, GetCaseAuditEventsCommandOutput } from "../commands/GetCaseAuditEventsCommand";
import { GetCaseCommandInput, GetCaseCommandOutput } from "../commands/GetCaseCommand";
import {
  GetCaseEventConfigurationCommandInput,
  GetCaseEventConfigurationCommandOutput,
} from "../commands/GetCaseEventConfigurationCommand";
import { GetDomainCommandInput, GetDomainCommandOutput } from "../commands/GetDomainCommand";
import { GetLayoutCommandInput, GetLayoutCommandOutput } from "../commands/GetLayoutCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import { ListCaseRulesCommandInput, ListCaseRulesCommandOutput } from "../commands/ListCaseRulesCommand";
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
import { UpdateCaseRuleCommandInput, UpdateCaseRuleCommandOutput } from "../commands/UpdateCaseRuleCommand";
import { UpdateFieldCommandInput, UpdateFieldCommandOutput } from "../commands/UpdateFieldCommand";
import { UpdateLayoutCommandInput, UpdateLayoutCommandOutput } from "../commands/UpdateLayoutCommand";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput } from "../commands/UpdateTemplateCommand";
import { ConnectCasesServiceException as __BaseException } from "../models/ConnectCasesServiceException";
import {
  AccessDeniedException,
  AuditEvent,
  AuditEventField,
  AuditEventFieldValueUnion,
  BasicLayout,
  BooleanCondition,
  BooleanOperands,
  CaseEventIncludedData,
  CaseFilter,
  CaseRuleDetails,
  CaseRuleIdentifier,
  CommentContent,
  CommentFilter,
  ConflictException,
  Contact,
  ContactContent,
  ContactFilter,
  EmptyFieldValue,
  EmptyOperandValue,
  EventBridgeConfiguration,
  EventIncludedData,
  FieldFilter,
  FieldGroup,
  FieldIdentifier,
  FieldItem,
  FieldOption,
  FieldValue,
  FieldValueUnion,
  FileContent,
  FileFilter,
  GetCaseRuleResponse,
  GetFieldResponse,
  InternalServerException,
  LayoutConfiguration,
  LayoutContent,
  LayoutSections,
  OperandOne,
  OperandTwo,
  RelatedItemContent,
  RelatedItemEventIncludedData,
  RelatedItemInputContent,
  RelatedItemTypeFilter,
  RequiredCaseRule,
  RequiredField,
  ResourceNotFoundException,
  SearchCasesResponseItem,
  SearchRelatedItemsResponseItem,
  Section,
  ServiceQuotaExceededException,
  Sort,
  TemplateRule,
  ThrottlingException,
  UserUnion,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchGetCaseRuleCommand
 */
export const se_BatchGetCaseRuleCommand = async (
  input: BatchGetCaseRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/rules-batch");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      caseRules: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchGetFieldCommand
 */
export const se_BatchGetFieldCommand = async (
  input: BatchGetFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/fields-batch");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      fields: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutFieldOptionsCommand
 */
export const se_BatchPutFieldOptionsCommand = async (
  input: BatchPutFieldOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/fields/{fieldId}/options");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("fieldId", () => input.fieldId!, "{fieldId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      options: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCaseCommand
 */
export const se_CreateCaseCommand = async (
  input: CreateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      fields: (_) => se_FieldValueList(_, context),
      performedBy: (_) => _json(_),
      templateId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCaseRuleCommand
 */
export const se_CreateCaseRuleCommand = async (
  input: CreateCaseRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/case-rules");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      rule: (_) => se_CaseRuleDetails(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFieldCommand
 */
export const se_CreateFieldCommand = async (
  input: CreateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/fields");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLayoutCommand
 */
export const se_CreateLayoutCommand = async (
  input: CreateLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/layouts");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      content: (_) => _json(_),
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRelatedItemCommand
 */
export const se_CreateRelatedItemCommand = async (
  input: CreateRelatedItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases/{caseId}/related-items");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      content: (_) => _json(_),
      performedBy: (_) => _json(_),
      type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTemplateCommand
 */
export const se_CreateTemplateCommand = async (
  input: CreateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/templates");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      layoutConfiguration: (_) => _json(_),
      name: [],
      requiredFields: (_) => _json(_),
      rules: (_) => _json(_),
      status: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCaseRuleCommand
 */
export const se_DeleteCaseRuleCommand = async (
  input: DeleteCaseRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/case-rules/{caseRuleId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("caseRuleId", () => input.caseRuleId!, "{caseRuleId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFieldCommand
 */
export const se_DeleteFieldCommand = async (
  input: DeleteFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/fields/{fieldId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("fieldId", () => input.fieldId!, "{fieldId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLayoutCommand
 */
export const se_DeleteLayoutCommand = async (
  input: DeleteLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/layouts/{layoutId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("layoutId", () => input.layoutId!, "{layoutId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTemplateCommand
 */
export const se_DeleteTemplateCommand = async (
  input: DeleteTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/templates/{templateId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("templateId", () => input.templateId!, "{templateId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCaseCommand
 */
export const se_GetCaseCommand = async (
  input: GetCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases/{caseId}");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      fields: (_) => _json(_),
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCaseAuditEventsCommand
 */
export const se_GetCaseAuditEventsCommand = async (
  input: GetCaseAuditEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases/{caseId}/audit-history");
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  b.p("domainId", () => input.domainId!, "{domainId}", false);
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
 * serializeAws_restJson1GetCaseEventConfigurationCommand
 */
export const se_GetCaseEventConfigurationCommand = async (
  input: GetCaseEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/case-event-configuration");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDomainCommand
 */
export const se_GetDomainCommand = async (
  input: GetDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLayoutCommand
 */
export const se_GetLayoutCommand = async (
  input: GetLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/layouts/{layoutId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("layoutId", () => input.layoutId!, "{layoutId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTemplateCommand
 */
export const se_GetTemplateCommand = async (
  input: GetTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/templates/{templateId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("templateId", () => input.templateId!, "{templateId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCaseRulesCommand
 */
export const se_ListCaseRulesCommand = async (
  input: ListCaseRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/rules-list");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCasesForContactCommand
 */
export const se_ListCasesForContactCommand = async (
  input: ListCasesForContactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/list-cases-for-contact");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      contactArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains-list");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFieldOptionsCommand
 */
export const se_ListFieldOptionsCommand = async (
  input: ListFieldOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/fields/{fieldId}/options-list");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("fieldId", () => input.fieldId!, "{fieldId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_v]: [() => input.values !== void 0, () => input[_v]! || []],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFieldsCommand
 */
export const se_ListFieldsCommand = async (
  input: ListFieldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/fields-list");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLayoutsCommand
 */
export const se_ListLayoutsCommand = async (
  input: ListLayoutsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/layouts-list");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
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
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTemplatesCommand
 */
export const se_ListTemplatesCommand = async (
  input: ListTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/domains/{domainId}/templates-list");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_s]: [() => input.status !== void 0, () => input[_s]! || []],
  });
  let body: any;
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutCaseEventConfigurationCommand
 */
export const se_PutCaseEventConfigurationCommand = async (
  input: PutCaseEventConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/case-event-configuration");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      eventBridge: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchCasesCommand
 */
export const se_SearchCasesCommand = async (
  input: SearchCasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases-search");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      fields: (_) => _json(_),
      filter: (_) => se_CaseFilter(_, context),
      maxResults: [],
      nextToken: [],
      searchTerm: [],
      sorts: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SearchRelatedItemsCommand
 */
export const se_SearchRelatedItemsCommand = async (
  input: SearchRelatedItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases/{caseId}/related-items-search");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => se_Tags(_, context),
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
  b.bp("/tags/{arn}");
  b.p("arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCaseCommand
 */
export const se_UpdateCaseCommand = async (
  input: UpdateCaseCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/cases/{caseId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("caseId", () => input.caseId!, "{caseId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      fields: (_) => se_FieldValueList(_, context),
      performedBy: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCaseRuleCommand
 */
export const se_UpdateCaseRuleCommand = async (
  input: UpdateCaseRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/case-rules/{caseRuleId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("caseRuleId", () => input.caseRuleId!, "{caseRuleId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      rule: (_) => se_CaseRuleDetails(_, context),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFieldCommand
 */
export const se_UpdateFieldCommand = async (
  input: UpdateFieldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/fields/{fieldId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("fieldId", () => input.fieldId!, "{fieldId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLayoutCommand
 */
export const se_UpdateLayoutCommand = async (
  input: UpdateLayoutCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/layouts/{layoutId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("layoutId", () => input.layoutId!, "{layoutId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      content: (_) => _json(_),
      name: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateTemplateCommand
 */
export const se_UpdateTemplateCommand = async (
  input: UpdateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/domains/{domainId}/templates/{templateId}");
  b.p("domainId", () => input.domainId!, "{domainId}", false);
  b.p("templateId", () => input.templateId!, "{templateId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      layoutConfiguration: (_) => _json(_),
      name: [],
      requiredFields: (_) => _json(_),
      rules: (_) => _json(_),
      status: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchGetCaseRuleCommand
 */
export const de_BatchGetCaseRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetCaseRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseRules: (_) => de_BatchGetCaseRuleList(_, context),
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchGetFieldCommand
 */
export const de_BatchGetFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    fields: (_) => de_BatchGetFieldList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutFieldOptionsCommand
 */
export const de_BatchPutFieldOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutFieldOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCaseCommand
 */
export const de_CreateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseArn: __expectString,
    caseId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCaseRuleCommand
 */
export const de_CreateCaseRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCaseRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseRuleArn: __expectString,
    caseRuleId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domainArn: __expectString,
    domainId: __expectString,
    domainStatus: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFieldCommand
 */
export const de_CreateFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFieldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fieldArn: __expectString,
    fieldId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLayoutCommand
 */
export const de_CreateLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    layoutArn: __expectString,
    layoutId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRelatedItemCommand
 */
export const de_CreateRelatedItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRelatedItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    relatedItemArn: __expectString,
    relatedItemId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTemplateCommand
 */
export const de_CreateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    templateArn: __expectString,
    templateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCaseRuleCommand
 */
export const de_DeleteCaseRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCaseRuleCommandOutput> => {
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
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
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
 * deserializeAws_restJson1DeleteFieldCommand
 */
export const de_DeleteFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFieldCommandOutput> => {
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
 * deserializeAws_restJson1DeleteLayoutCommand
 */
export const de_DeleteLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayoutCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTemplateCommand
 */
export const de_DeleteTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateCommandOutput> => {
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
 * deserializeAws_restJson1GetCaseCommand
 */
export const de_GetCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fields: (_) => de_FieldValueList(_, context),
    nextToken: __expectString,
    tags: (_) => de_Tags(_, context),
    templateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseAuditEventsCommand
 */
export const de_GetCaseAuditEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseAuditEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    auditEvents: (_) => de_AuditEventsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCaseEventConfigurationCommand
 */
export const de_GetCaseEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCaseEventConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventBridge: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainCommand
 */
export const de_GetDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    domainArn: __expectString,
    domainId: __expectString,
    domainStatus: __expectString,
    name: __expectString,
    tags: (_) => de_Tags(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLayoutCommand
 */
export const de_GetLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayoutCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    content: (_) => _json(__expectUnion(_)),
    createdTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deleted: __expectBoolean,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    layoutArn: __expectString,
    layoutId: __expectString,
    name: __expectString,
    tags: (_) => de_Tags(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTemplateCommand
 */
export const de_GetTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deleted: __expectBoolean,
    description: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    layoutConfiguration: _json,
    name: __expectString,
    requiredFields: _json,
    rules: _json,
    status: __expectString,
    tags: (_) => de_Tags(_, context),
    templateArn: __expectString,
    templateId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCaseRulesCommand
 */
export const de_ListCaseRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCaseRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    caseRules: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCasesForContactCommand
 */
export const de_ListCasesForContactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCasesForContactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cases: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domains: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFieldOptionsCommand
 */
export const de_ListFieldOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    options: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFieldsCommand
 */
export const de_ListFieldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFieldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    fields: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLayoutsCommand
 */
export const de_ListLayoutsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayoutsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    layouts: _json,
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
    tags: (_) => de_Tags(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTemplatesCommand
 */
export const de_ListTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    templates: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutCaseEventConfigurationCommand
 */
export const de_PutCaseEventConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCaseEventConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1SearchCasesCommand
 */
export const de_SearchCasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    cases: (_) => de_SearchCasesResponseItemList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1SearchRelatedItemsCommand
 */
export const de_SearchRelatedItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchRelatedItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    relatedItems: (_) => de_SearchRelatedItemsResponseItemList(_, context),
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
 * deserializeAws_restJson1UpdateCaseCommand
 */
export const de_UpdateCaseCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseCommandOutput> => {
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
 * deserializeAws_restJson1UpdateCaseRuleCommand
 */
export const de_UpdateCaseRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCaseRuleCommandOutput> => {
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
 * deserializeAws_restJson1UpdateFieldCommand
 */
export const de_UpdateFieldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFieldCommandOutput> => {
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
 * deserializeAws_restJson1UpdateLayoutCommand
 */
export const de_UpdateLayoutCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLayoutCommandOutput> => {
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
 * deserializeAws_restJson1UpdateTemplateCommand
 */
export const de_UpdateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateCommandOutput> => {
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
    case "ServiceQuotaExceededException":
    case "com.amazonaws.connectcases#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.connectcases#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
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
  const contents: any = map({
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
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
    resourceId: __expectString,
    resourceType: __expectString,
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
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_BasicLayout omitted.

// se_BatchGetFieldIdentifierList omitted.

/**
 * serializeAws_restJson1BooleanCondition
 */
const se_BooleanCondition = (input: BooleanCondition, context: __SerdeContext): any => {
  return BooleanCondition.visit(input, {
    equalTo: (value) => ({ equalTo: se_BooleanOperands(value, context) }),
    notEqualTo: (value) => ({ notEqualTo: se_BooleanOperands(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1BooleanConditionList
 */
const se_BooleanConditionList = (input: BooleanCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BooleanCondition(entry, context);
    });
};

/**
 * serializeAws_restJson1BooleanOperands
 */
const se_BooleanOperands = (input: BooleanOperands, context: __SerdeContext): any => {
  return take(input, {
    operandOne: _json,
    operandTwo: (_) => se_OperandTwo(_, context),
    result: [],
  });
};

// se_CaseEventIncludedData omitted.

/**
 * serializeAws_restJson1CaseFilter
 */
const se_CaseFilter = (input: CaseFilter, context: __SerdeContext): any => {
  return CaseFilter.visit(input, {
    andAll: (value) => ({ andAll: se_CaseFilterList(value, context) }),
    field: (value) => ({ field: se_FieldFilter(value, context) }),
    not: (value) => ({ not: se_CaseFilter(value, context) }),
    orAll: (value) => ({ orAll: se_CaseFilterList(value, context) }),
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
 * serializeAws_restJson1CaseRuleDetails
 */
const se_CaseRuleDetails = (input: CaseRuleDetails, context: __SerdeContext): any => {
  return CaseRuleDetails.visit(input, {
    required: (value) => ({ required: se_RequiredCaseRule(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_CaseRuleIdentifier omitted.

// se_CaseRuleIdentifierList omitted.

// se_ChannelList omitted.

// se_CommentContent omitted.

// se_CommentFilter omitted.

// se_Contact omitted.

// se_ContactFilter omitted.

// se_EmptyFieldValue omitted.

// se_EmptyOperandValue omitted.

// se_EventBridgeConfiguration omitted.

// se_EventIncludedData omitted.

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

// se_FieldGroup omitted.

// se_FieldIdentifier omitted.

// se_FieldIdentifierList omitted.

// se_FieldItem omitted.

// se_FieldList omitted.

// se_FieldOption omitted.

// se_FieldOptionsList omitted.

/**
 * serializeAws_restJson1FieldValue
 */
const se_FieldValue = (input: FieldValue, context: __SerdeContext): any => {
  return take(input, {
    id: [],
    value: (_) => se_FieldValueUnion(_, context),
  });
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
    emptyValue: (value) => ({ emptyValue: _json(value) }),
    stringValue: (value) => ({ stringValue: value }),
    userArnValue: (value) => ({ userArnValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_FileContent omitted.

// se_FileFilter omitted.

// se_LayoutConfiguration omitted.

// se_LayoutContent omitted.

// se_LayoutSections omitted.

// se_OperandOne omitted.

/**
 * serializeAws_restJson1OperandTwo
 */
const se_OperandTwo = (input: OperandTwo, context: __SerdeContext): any => {
  return OperandTwo.visit(input, {
    booleanValue: (value) => ({ booleanValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    emptyValue: (value) => ({ emptyValue: _json(value) }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_RelatedItemEventIncludedData omitted.

// se_RelatedItemFilterList omitted.

// se_RelatedItemInputContent omitted.

// se_RelatedItemTypeFilter omitted.

/**
 * serializeAws_restJson1RequiredCaseRule
 */
const se_RequiredCaseRule = (input: RequiredCaseRule, context: __SerdeContext): any => {
  return take(input, {
    conditions: (_) => se_BooleanConditionList(_, context),
    defaultValue: [],
  });
};

// se_RequiredField omitted.

// se_RequiredFieldList omitted.

// se_Section omitted.

// se_SectionsList omitted.

// se_Sort omitted.

// se_SortList omitted.

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

// se_TemplateCaseRuleList omitted.

// se_TemplateRule omitted.

// se_UserUnion omitted.

/**
 * deserializeAws_restJson1AuditEvent
 */
const de_AuditEvent = (output: any, context: __SerdeContext): AuditEvent => {
  return take(output, {
    eventId: __expectString,
    fields: (_: any) => de_AuditEventFieldList(_, context),
    performedBy: _json,
    performedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    relatedItemType: __expectString,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AuditEventField
 */
const de_AuditEventField = (output: any, context: __SerdeContext): AuditEventField => {
  return take(output, {
    eventFieldId: __expectString,
    newValue: (_: any) => de_AuditEventFieldValueUnion(__expectUnion(_), context),
    oldValue: (_: any) => de_AuditEventFieldValueUnion(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1AuditEventFieldList
 */
const de_AuditEventFieldList = (output: any, context: __SerdeContext): AuditEventField[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return de_AuditEventField(entry, context);
  });
  return retVal;
};

/**
 * deserializeAws_restJson1AuditEventFieldValueUnion
 */
const de_AuditEventFieldValueUnion = (output: any, context: __SerdeContext): AuditEventFieldValueUnion => {
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any };
  }
  if (__limitedParseDouble(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseDouble(output.doubleValue) as any };
  }
  if (output.emptyValue != null) {
    return {
      emptyValue: _json(output.emptyValue),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (__expectString(output.userArnValue) !== undefined) {
    return { userArnValue: __expectString(output.userArnValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_AuditEventPerformedBy omitted.

/**
 * deserializeAws_restJson1AuditEventsList
 */
const de_AuditEventsList = (output: any, context: __SerdeContext): AuditEvent[] => {
  const retVal = (output || []).map((entry: any) => {
    if (entry === null) {
      return null as any;
    }
    return de_AuditEvent(entry, context);
  });
  return retVal;
};

// de_BasicLayout omitted.

// de_BatchGetCaseRuleErrorList omitted.

/**
 * deserializeAws_restJson1BatchGetCaseRuleList
 */
const de_BatchGetCaseRuleList = (output: any, context: __SerdeContext): GetCaseRuleResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetCaseRuleResponse(entry, context);
    });
  return retVal;
};

// de_BatchGetFieldErrorList omitted.

/**
 * deserializeAws_restJson1BatchGetFieldList
 */
const de_BatchGetFieldList = (output: any, context: __SerdeContext): GetFieldResponse[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GetFieldResponse(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BooleanCondition
 */
const de_BooleanCondition = (output: any, context: __SerdeContext): BooleanCondition => {
  if (output.equalTo != null) {
    return {
      equalTo: de_BooleanOperands(output.equalTo, context),
    };
  }
  if (output.notEqualTo != null) {
    return {
      notEqualTo: de_BooleanOperands(output.notEqualTo, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1BooleanConditionList
 */
const de_BooleanConditionList = (output: any, context: __SerdeContext): BooleanCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BooleanCondition(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BooleanOperands
 */
const de_BooleanOperands = (output: any, context: __SerdeContext): BooleanOperands => {
  return take(output, {
    operandOne: (_: any) => _json(__expectUnion(_)),
    operandTwo: (_: any) => de_OperandTwo(__expectUnion(_), context),
    result: __expectBoolean,
  }) as any;
};

// de_CaseEventIncludedData omitted.

/**
 * deserializeAws_restJson1CaseRuleDetails
 */
const de_CaseRuleDetails = (output: any, context: __SerdeContext): CaseRuleDetails => {
  if (output.required != null) {
    return {
      required: de_RequiredCaseRule(output.required, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_CaseRuleError omitted.

// de_CaseRuleSummary omitted.

// de_CaseRuleSummaryList omitted.

// de_CaseSummary omitted.

// de_CaseSummaryList omitted.

// de_CommentContent omitted.

/**
 * deserializeAws_restJson1ContactContent
 */
const de_ContactContent = (output: any, context: __SerdeContext): ContactContent => {
  return take(output, {
    channel: __expectString,
    connectedToSystemTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    contactArn: __expectString,
  }) as any;
};

// de_DomainSummary omitted.

// de_DomainSummaryList omitted.

// de_EmptyFieldValue omitted.

// de_EmptyOperandValue omitted.

// de_EventBridgeConfiguration omitted.

// de_EventIncludedData omitted.

// de_FieldError omitted.

// de_FieldGroup omitted.

// de_FieldIdentifier omitted.

// de_FieldIdentifierList omitted.

// de_FieldItem omitted.

// de_FieldList omitted.

// de_FieldOption omitted.

// de_FieldOptionError omitted.

// de_FieldOptionErrorList omitted.

// de_FieldOptionsList omitted.

// de_FieldSummary omitted.

// de_FieldSummaryList omitted.

/**
 * deserializeAws_restJson1FieldValue
 */
const de_FieldValue = (output: any, context: __SerdeContext): FieldValue => {
  return take(output, {
    id: __expectString,
    value: (_: any) => de_FieldValueUnion(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1FieldValueList
 */
const de_FieldValueList = (output: any, context: __SerdeContext): FieldValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  if (output.emptyValue != null) {
    return {
      emptyValue: _json(output.emptyValue),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  if (__expectString(output.userArnValue) !== undefined) {
    return { userArnValue: __expectString(output.userArnValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_FileContent omitted.

/**
 * deserializeAws_restJson1GetCaseRuleResponse
 */
const de_GetCaseRuleResponse = (output: any, context: __SerdeContext): GetCaseRuleResponse => {
  return take(output, {
    caseRuleArn: __expectString,
    caseRuleId: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deleted: __expectBoolean,
    description: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    rule: (_: any) => de_CaseRuleDetails(__expectUnion(_), context),
    tags: (_: any) => de_Tags(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1GetFieldResponse
 */
const de_GetFieldResponse = (output: any, context: __SerdeContext): GetFieldResponse => {
  return take(output, {
    createdTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deleted: __expectBoolean,
    description: __expectString,
    fieldArn: __expectString,
    fieldId: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    name: __expectString,
    namespace: __expectString,
    tags: (_: any) => de_Tags(_, context),
    type: __expectString,
  }) as any;
};

// de_LayoutConfiguration omitted.

// de_LayoutContent omitted.

// de_LayoutSections omitted.

// de_LayoutSummary omitted.

// de_LayoutSummaryList omitted.

// de_OperandOne omitted.

/**
 * deserializeAws_restJson1OperandTwo
 */
const de_OperandTwo = (output: any, context: __SerdeContext): OperandTwo => {
  if (__expectBoolean(output.booleanValue) !== undefined) {
    return { booleanValue: __expectBoolean(output.booleanValue) as any };
  }
  if (__limitedParseDouble(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseDouble(output.doubleValue) as any };
  }
  if (output.emptyValue != null) {
    return {
      emptyValue: _json(output.emptyValue),
    };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RelatedItemContent
 */
const de_RelatedItemContent = (output: any, context: __SerdeContext): RelatedItemContent => {
  if (output.comment != null) {
    return {
      comment: _json(output.comment),
    };
  }
  if (output.contact != null) {
    return {
      contact: de_ContactContent(output.contact, context),
    };
  }
  if (output.file != null) {
    return {
      file: _json(output.file),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_RelatedItemEventIncludedData omitted.

/**
 * deserializeAws_restJson1RequiredCaseRule
 */
const de_RequiredCaseRule = (output: any, context: __SerdeContext): RequiredCaseRule => {
  return take(output, {
    conditions: (_: any) => de_BooleanConditionList(_, context),
    defaultValue: __expectBoolean,
  }) as any;
};

// de_RequiredField omitted.

// de_RequiredFieldList omitted.

/**
 * deserializeAws_restJson1SearchCasesResponseItem
 */
const de_SearchCasesResponseItem = (output: any, context: __SerdeContext): SearchCasesResponseItem => {
  return take(output, {
    caseId: __expectString,
    fields: (_: any) => de_FieldValueList(_, context),
    tags: (_: any) => de_Tags(_, context),
    templateId: __expectString,
  }) as any;
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
  return take(output, {
    associationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    content: (_: any) => de_RelatedItemContent(__expectUnion(_), context),
    performedBy: (_: any) => _json(__expectUnion(_)),
    relatedItemId: __expectString,
    tags: (_: any) => de_Tags(_, context),
    type: __expectString,
  }) as any;
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

// de_Section omitted.

// de_SectionsList omitted.

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      acc[key as string] = null as any;
      return acc;
    }
    acc[key as string] = __expectString(value) as any;
    return acc;
  }, {} as Record<string, string>);
};

// de_TemplateCaseRuleList omitted.

// de_TemplateRule omitted.

// de_TemplateSummary omitted.

// de_TemplateSummaryList omitted.

// de_UserUnion omitted.

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
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _s = "status";
const _tK = "tagKeys";
const _v = "values";
