// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchGetCaseRuleCommandInput,
  type BatchGetCaseRuleCommandOutput,
  BatchGetCaseRuleCommand,
} from "./commands/BatchGetCaseRuleCommand";
import {
  type BatchGetFieldCommandInput,
  type BatchGetFieldCommandOutput,
  BatchGetFieldCommand,
} from "./commands/BatchGetFieldCommand";
import {
  type BatchPutFieldOptionsCommandInput,
  type BatchPutFieldOptionsCommandOutput,
  BatchPutFieldOptionsCommand,
} from "./commands/BatchPutFieldOptionsCommand";
import {
  type CreateCaseCommandInput,
  type CreateCaseCommandOutput,
  CreateCaseCommand,
} from "./commands/CreateCaseCommand";
import {
  type CreateCaseRuleCommandInput,
  type CreateCaseRuleCommandOutput,
  CreateCaseRuleCommand,
} from "./commands/CreateCaseRuleCommand";
import {
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateDomainCommand,
} from "./commands/CreateDomainCommand";
import {
  type CreateFieldCommandInput,
  type CreateFieldCommandOutput,
  CreateFieldCommand,
} from "./commands/CreateFieldCommand";
import {
  type CreateLayoutCommandInput,
  type CreateLayoutCommandOutput,
  CreateLayoutCommand,
} from "./commands/CreateLayoutCommand";
import {
  type CreateRelatedItemCommandInput,
  type CreateRelatedItemCommandOutput,
  CreateRelatedItemCommand,
} from "./commands/CreateRelatedItemCommand";
import {
  type CreateTemplateCommandInput,
  type CreateTemplateCommandOutput,
  CreateTemplateCommand,
} from "./commands/CreateTemplateCommand";
import {
  type DeleteCaseCommandInput,
  type DeleteCaseCommandOutput,
  DeleteCaseCommand,
} from "./commands/DeleteCaseCommand";
import {
  type DeleteCaseRuleCommandInput,
  type DeleteCaseRuleCommandOutput,
  DeleteCaseRuleCommand,
} from "./commands/DeleteCaseRuleCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type DeleteFieldCommandInput,
  type DeleteFieldCommandOutput,
  DeleteFieldCommand,
} from "./commands/DeleteFieldCommand";
import {
  type DeleteLayoutCommandInput,
  type DeleteLayoutCommandOutput,
  DeleteLayoutCommand,
} from "./commands/DeleteLayoutCommand";
import {
  type DeleteRelatedItemCommandInput,
  type DeleteRelatedItemCommandOutput,
  DeleteRelatedItemCommand,
} from "./commands/DeleteRelatedItemCommand";
import {
  type DeleteTemplateCommandInput,
  type DeleteTemplateCommandOutput,
  DeleteTemplateCommand,
} from "./commands/DeleteTemplateCommand";
import {
  type GetCaseAuditEventsCommandInput,
  type GetCaseAuditEventsCommandOutput,
  GetCaseAuditEventsCommand,
} from "./commands/GetCaseAuditEventsCommand";
import { type GetCaseCommandInput, type GetCaseCommandOutput, GetCaseCommand } from "./commands/GetCaseCommand";
import {
  type GetCaseEventConfigurationCommandInput,
  type GetCaseEventConfigurationCommandOutput,
  GetCaseEventConfigurationCommand,
} from "./commands/GetCaseEventConfigurationCommand";
import { type GetDomainCommandInput, type GetDomainCommandOutput, GetDomainCommand } from "./commands/GetDomainCommand";
import { type GetLayoutCommandInput, type GetLayoutCommandOutput, GetLayoutCommand } from "./commands/GetLayoutCommand";
import {
  type GetTemplateCommandInput,
  type GetTemplateCommandOutput,
  GetTemplateCommand,
} from "./commands/GetTemplateCommand";
import {
  type ListCaseRulesCommandInput,
  type ListCaseRulesCommandOutput,
  ListCaseRulesCommand,
} from "./commands/ListCaseRulesCommand";
import {
  type ListCasesForContactCommandInput,
  type ListCasesForContactCommandOutput,
  ListCasesForContactCommand,
} from "./commands/ListCasesForContactCommand";
import {
  type ListDomainsCommandInput,
  type ListDomainsCommandOutput,
  ListDomainsCommand,
} from "./commands/ListDomainsCommand";
import {
  type ListFieldOptionsCommandInput,
  type ListFieldOptionsCommandOutput,
  ListFieldOptionsCommand,
} from "./commands/ListFieldOptionsCommand";
import {
  type ListFieldsCommandInput,
  type ListFieldsCommandOutput,
  ListFieldsCommand,
} from "./commands/ListFieldsCommand";
import {
  type ListLayoutsCommandInput,
  type ListLayoutsCommandOutput,
  ListLayoutsCommand,
} from "./commands/ListLayoutsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTemplatesCommandInput,
  type ListTemplatesCommandOutput,
  ListTemplatesCommand,
} from "./commands/ListTemplatesCommand";
import {
  type PutCaseEventConfigurationCommandInput,
  type PutCaseEventConfigurationCommandOutput,
  PutCaseEventConfigurationCommand,
} from "./commands/PutCaseEventConfigurationCommand";
import {
  type SearchAllRelatedItemsCommandInput,
  type SearchAllRelatedItemsCommandOutput,
  SearchAllRelatedItemsCommand,
} from "./commands/SearchAllRelatedItemsCommand";
import {
  type SearchCasesCommandInput,
  type SearchCasesCommandOutput,
  SearchCasesCommand,
} from "./commands/SearchCasesCommand";
import {
  type SearchRelatedItemsCommandInput,
  type SearchRelatedItemsCommandOutput,
  SearchRelatedItemsCommand,
} from "./commands/SearchRelatedItemsCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateCaseCommandInput,
  type UpdateCaseCommandOutput,
  UpdateCaseCommand,
} from "./commands/UpdateCaseCommand";
import {
  type UpdateCaseRuleCommandInput,
  type UpdateCaseRuleCommandOutput,
  UpdateCaseRuleCommand,
} from "./commands/UpdateCaseRuleCommand";
import {
  type UpdateFieldCommandInput,
  type UpdateFieldCommandOutput,
  UpdateFieldCommand,
} from "./commands/UpdateFieldCommand";
import {
  type UpdateLayoutCommandInput,
  type UpdateLayoutCommandOutput,
  UpdateLayoutCommand,
} from "./commands/UpdateLayoutCommand";
import {
  type UpdateRelatedItemCommandInput,
  type UpdateRelatedItemCommandOutput,
  UpdateRelatedItemCommand,
} from "./commands/UpdateRelatedItemCommand";
import {
  type UpdateTemplateCommandInput,
  type UpdateTemplateCommandOutput,
  UpdateTemplateCommand,
} from "./commands/UpdateTemplateCommand";
import { ConnectCasesClient } from "./ConnectCasesClient";
import { paginateGetCaseAuditEvents } from "./pagination/GetCaseAuditEventsPaginator";
import { paginateGetCase } from "./pagination/GetCasePaginator";
import { paginateListCaseRules } from "./pagination/ListCaseRulesPaginator";
import { paginateListCasesForContact } from "./pagination/ListCasesForContactPaginator";
import { paginateListDomains } from "./pagination/ListDomainsPaginator";
import { paginateListFieldOptions } from "./pagination/ListFieldOptionsPaginator";
import { paginateListFields } from "./pagination/ListFieldsPaginator";
import { paginateListLayouts } from "./pagination/ListLayoutsPaginator";
import { paginateListTemplates } from "./pagination/ListTemplatesPaginator";
import { paginateSearchAllRelatedItems } from "./pagination/SearchAllRelatedItemsPaginator";
import { paginateSearchCases } from "./pagination/SearchCasesPaginator";
import { paginateSearchRelatedItems } from "./pagination/SearchRelatedItemsPaginator";

const commands = {
  BatchGetCaseRuleCommand,
  BatchGetFieldCommand,
  BatchPutFieldOptionsCommand,
  CreateCaseCommand,
  CreateCaseRuleCommand,
  CreateDomainCommand,
  CreateFieldCommand,
  CreateLayoutCommand,
  CreateRelatedItemCommand,
  CreateTemplateCommand,
  DeleteCaseCommand,
  DeleteCaseRuleCommand,
  DeleteDomainCommand,
  DeleteFieldCommand,
  DeleteLayoutCommand,
  DeleteRelatedItemCommand,
  DeleteTemplateCommand,
  GetCaseCommand,
  GetCaseAuditEventsCommand,
  GetCaseEventConfigurationCommand,
  GetDomainCommand,
  GetLayoutCommand,
  GetTemplateCommand,
  ListCaseRulesCommand,
  ListCasesForContactCommand,
  ListDomainsCommand,
  ListFieldOptionsCommand,
  ListFieldsCommand,
  ListLayoutsCommand,
  ListTagsForResourceCommand,
  ListTemplatesCommand,
  PutCaseEventConfigurationCommand,
  SearchAllRelatedItemsCommand,
  SearchCasesCommand,
  SearchRelatedItemsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCaseCommand,
  UpdateCaseRuleCommand,
  UpdateFieldCommand,
  UpdateLayoutCommand,
  UpdateRelatedItemCommand,
  UpdateTemplateCommand,
};
const paginators = {
  paginateGetCase,
  paginateGetCaseAuditEvents,
  paginateListCaseRules,
  paginateListCasesForContact,
  paginateListDomains,
  paginateListFieldOptions,
  paginateListFields,
  paginateListLayouts,
  paginateListTemplates,
  paginateSearchAllRelatedItems,
  paginateSearchCases,
  paginateSearchRelatedItems,
};

export interface ConnectCases {
  /**
   * @see {@link BatchGetCaseRuleCommand}
   */
  batchGetCaseRule(
    args: BatchGetCaseRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetCaseRuleCommandOutput>;
  batchGetCaseRule(
    args: BatchGetCaseRuleCommandInput,
    cb: (err: any, data?: BatchGetCaseRuleCommandOutput) => void
  ): void;
  batchGetCaseRule(
    args: BatchGetCaseRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetCaseRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetFieldCommand}
   */
  batchGetField(
    args: BatchGetFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFieldCommandOutput>;
  batchGetField(
    args: BatchGetFieldCommandInput,
    cb: (err: any, data?: BatchGetFieldCommandOutput) => void
  ): void;
  batchGetField(
    args: BatchGetFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutFieldOptionsCommand}
   */
  batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutFieldOptionsCommandOutput>;
  batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    cb: (err: any, data?: BatchPutFieldOptionsCommandOutput) => void
  ): void;
  batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutFieldOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCaseCommand}
   */
  createCase(
    args: CreateCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCaseCommandOutput>;
  createCase(
    args: CreateCaseCommandInput,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;
  createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCaseRuleCommand}
   */
  createCaseRule(
    args: CreateCaseRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCaseRuleCommandOutput>;
  createCaseRule(
    args: CreateCaseRuleCommandInput,
    cb: (err: any, data?: CreateCaseRuleCommandOutput) => void
  ): void;
  createCaseRule(
    args: CreateCaseRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFieldCommand}
   */
  createField(
    args: CreateFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldCommandOutput>;
  createField(
    args: CreateFieldCommandInput,
    cb: (err: any, data?: CreateFieldCommandOutput) => void
  ): void;
  createField(
    args: CreateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLayoutCommand}
   */
  createLayout(
    args: CreateLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLayoutCommandOutput>;
  createLayout(
    args: CreateLayoutCommandInput,
    cb: (err: any, data?: CreateLayoutCommandOutput) => void
  ): void;
  createLayout(
    args: CreateLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRelatedItemCommand}
   */
  createRelatedItem(
    args: CreateRelatedItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelatedItemCommandOutput>;
  createRelatedItem(
    args: CreateRelatedItemCommandInput,
    cb: (err: any, data?: CreateRelatedItemCommandOutput) => void
  ): void;
  createRelatedItem(
    args: CreateRelatedItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelatedItemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTemplateCommand}
   */
  createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCaseCommand}
   */
  deleteCase(
    args: DeleteCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCaseCommandOutput>;
  deleteCase(
    args: DeleteCaseCommandInput,
    cb: (err: any, data?: DeleteCaseCommandOutput) => void
  ): void;
  deleteCase(
    args: DeleteCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCaseRuleCommand}
   */
  deleteCaseRule(
    args: DeleteCaseRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCaseRuleCommandOutput>;
  deleteCaseRule(
    args: DeleteCaseRuleCommandInput,
    cb: (err: any, data?: DeleteCaseRuleCommandOutput) => void
  ): void;
  deleteCaseRule(
    args: DeleteCaseRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCaseRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFieldCommand}
   */
  deleteField(
    args: DeleteFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldCommandOutput>;
  deleteField(
    args: DeleteFieldCommandInput,
    cb: (err: any, data?: DeleteFieldCommandOutput) => void
  ): void;
  deleteField(
    args: DeleteFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLayoutCommand}
   */
  deleteLayout(
    args: DeleteLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLayoutCommandOutput>;
  deleteLayout(
    args: DeleteLayoutCommandInput,
    cb: (err: any, data?: DeleteLayoutCommandOutput) => void
  ): void;
  deleteLayout(
    args: DeleteLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRelatedItemCommand}
   */
  deleteRelatedItem(
    args: DeleteRelatedItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelatedItemCommandOutput>;
  deleteRelatedItem(
    args: DeleteRelatedItemCommandInput,
    cb: (err: any, data?: DeleteRelatedItemCommandOutput) => void
  ): void;
  deleteRelatedItem(
    args: DeleteRelatedItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelatedItemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseCommand}
   */
  getCase(
    args: GetCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseCommandOutput>;
  getCase(
    args: GetCaseCommandInput,
    cb: (err: any, data?: GetCaseCommandOutput) => void
  ): void;
  getCase(
    args: GetCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseAuditEventsCommand}
   */
  getCaseAuditEvents(
    args: GetCaseAuditEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseAuditEventsCommandOutput>;
  getCaseAuditEvents(
    args: GetCaseAuditEventsCommandInput,
    cb: (err: any, data?: GetCaseAuditEventsCommandOutput) => void
  ): void;
  getCaseAuditEvents(
    args: GetCaseAuditEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseAuditEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseEventConfigurationCommand}
   */
  getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseEventConfigurationCommandOutput>;
  getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    cb: (err: any, data?: GetCaseEventConfigurationCommandOutput) => void
  ): void;
  getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseEventConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainCommand}
   */
  getDomain(
    args: GetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainCommandOutput>;
  getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLayoutCommand}
   */
  getLayout(
    args: GetLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLayoutCommandOutput>;
  getLayout(
    args: GetLayoutCommandInput,
    cb: (err: any, data?: GetLayoutCommandOutput) => void
  ): void;
  getLayout(
    args: GetLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(
    args: GetTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateCommandOutput>;
  getTemplate(
    args: GetTemplateCommandInput,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCaseRulesCommand}
   */
  listCaseRules(
    args: ListCaseRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCaseRulesCommandOutput>;
  listCaseRules(
    args: ListCaseRulesCommandInput,
    cb: (err: any, data?: ListCaseRulesCommandOutput) => void
  ): void;
  listCaseRules(
    args: ListCaseRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCaseRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCasesForContactCommand}
   */
  listCasesForContact(
    args: ListCasesForContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCasesForContactCommandOutput>;
  listCasesForContact(
    args: ListCasesForContactCommandInput,
    cb: (err: any, data?: ListCasesForContactCommandOutput) => void
  ): void;
  listCasesForContact(
    args: ListCasesForContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCasesForContactCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainsCommandOutput>;
  listDomains(
    args: ListDomainsCommandInput,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFieldOptionsCommand}
   */
  listFieldOptions(
    args: ListFieldOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldOptionsCommandOutput>;
  listFieldOptions(
    args: ListFieldOptionsCommandInput,
    cb: (err: any, data?: ListFieldOptionsCommandOutput) => void
  ): void;
  listFieldOptions(
    args: ListFieldOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFieldsCommand}
   */
  listFields(
    args: ListFieldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldsCommandOutput>;
  listFields(
    args: ListFieldsCommandInput,
    cb: (err: any, data?: ListFieldsCommandOutput) => void
  ): void;
  listFields(
    args: ListFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLayoutsCommand}
   */
  listLayouts(
    args: ListLayoutsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLayoutsCommandOutput>;
  listLayouts(
    args: ListLayoutsCommandInput,
    cb: (err: any, data?: ListLayoutsCommandOutput) => void
  ): void;
  listLayouts(
    args: ListLayoutsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLayoutsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTemplatesCommand}
   */
  listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCaseEventConfigurationCommand}
   */
  putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCaseEventConfigurationCommandOutput>;
  putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    cb: (err: any, data?: PutCaseEventConfigurationCommandOutput) => void
  ): void;
  putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCaseEventConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchAllRelatedItemsCommand}
   */
  searchAllRelatedItems(
    args: SearchAllRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchAllRelatedItemsCommandOutput>;
  searchAllRelatedItems(
    args: SearchAllRelatedItemsCommandInput,
    cb: (err: any, data?: SearchAllRelatedItemsCommandOutput) => void
  ): void;
  searchAllRelatedItems(
    args: SearchAllRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchAllRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCasesCommand}
   */
  searchCases(
    args: SearchCasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchCasesCommandOutput>;
  searchCases(
    args: SearchCasesCommandInput,
    cb: (err: any, data?: SearchCasesCommandOutput) => void
  ): void;
  searchCases(
    args: SearchCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCasesCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchRelatedItemsCommand}
   */
  searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRelatedItemsCommandOutput>;
  searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    cb: (err: any, data?: SearchRelatedItemsCommandOutput) => void
  ): void;
  searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRelatedItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCaseCommand}
   */
  updateCase(
    args: UpdateCaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCaseCommandOutput>;
  updateCase(
    args: UpdateCaseCommandInput,
    cb: (err: any, data?: UpdateCaseCommandOutput) => void
  ): void;
  updateCase(
    args: UpdateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCaseRuleCommand}
   */
  updateCaseRule(
    args: UpdateCaseRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCaseRuleCommandOutput>;
  updateCaseRule(
    args: UpdateCaseRuleCommandInput,
    cb: (err: any, data?: UpdateCaseRuleCommandOutput) => void
  ): void;
  updateCaseRule(
    args: UpdateCaseRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFieldCommand}
   */
  updateField(
    args: UpdateFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldCommandOutput>;
  updateField(
    args: UpdateFieldCommandInput,
    cb: (err: any, data?: UpdateFieldCommandOutput) => void
  ): void;
  updateField(
    args: UpdateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLayoutCommand}
   */
  updateLayout(
    args: UpdateLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLayoutCommandOutput>;
  updateLayout(
    args: UpdateLayoutCommandInput,
    cb: (err: any, data?: UpdateLayoutCommandOutput) => void
  ): void;
  updateLayout(
    args: UpdateLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRelatedItemCommand}
   */
  updateRelatedItem(
    args: UpdateRelatedItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelatedItemCommandOutput>;
  updateRelatedItem(
    args: UpdateRelatedItemCommandInput,
    cb: (err: any, data?: UpdateRelatedItemCommandOutput) => void
  ): void;
  updateRelatedItem(
    args: UpdateRelatedItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelatedItemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCaseCommandOutput}.
   */
  paginateGetCase(
    args: GetCaseCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCaseCommandOutput>;

  /**
   * @see {@link GetCaseAuditEventsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetCaseAuditEventsCommandOutput}.
   */
  paginateGetCaseAuditEvents(
    args: GetCaseAuditEventsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetCaseAuditEventsCommandOutput>;

  /**
   * @see {@link ListCaseRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCaseRulesCommandOutput}.
   */
  paginateListCaseRules(
    args: ListCaseRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCaseRulesCommandOutput>;

  /**
   * @see {@link ListCasesForContactCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCasesForContactCommandOutput}.
   */
  paginateListCasesForContact(
    args: ListCasesForContactCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCasesForContactCommandOutput>;

  /**
   * @see {@link ListDomainsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDomainsCommandOutput}.
   */
  paginateListDomains(
    args?: ListDomainsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDomainsCommandOutput>;

  /**
   * @see {@link ListFieldOptionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFieldOptionsCommandOutput}.
   */
  paginateListFieldOptions(
    args: ListFieldOptionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFieldOptionsCommandOutput>;

  /**
   * @see {@link ListFieldsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFieldsCommandOutput}.
   */
  paginateListFields(
    args: ListFieldsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFieldsCommandOutput>;

  /**
   * @see {@link ListLayoutsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLayoutsCommandOutput}.
   */
  paginateListLayouts(
    args: ListLayoutsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLayoutsCommandOutput>;

  /**
   * @see {@link ListTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTemplatesCommandOutput}.
   */
  paginateListTemplates(
    args: ListTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTemplatesCommandOutput>;

  /**
   * @see {@link SearchAllRelatedItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchAllRelatedItemsCommandOutput}.
   */
  paginateSearchAllRelatedItems(
    args: SearchAllRelatedItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchAllRelatedItemsCommandOutput>;

  /**
   * @see {@link SearchCasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchCasesCommandOutput}.
   */
  paginateSearchCases(
    args: SearchCasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchCasesCommandOutput>;

  /**
   * @see {@link SearchRelatedItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchRelatedItemsCommandOutput}.
   */
  paginateSearchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchRelatedItemsCommandOutput>;
}

/**
 * <ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Connect_Cases.html">Cases actions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Connect_Cases.html">Cases data types</a> </p> </li> </ul> <p>With Amazon Connect Cases, your agents can track and manage customer issues that require multiple interactions, follow-up tasks, and teams in your contact center. A case represents a customer issue. It records the issue, the steps and interactions taken to resolve the issue, and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export class ConnectCases extends ConnectCasesClient implements ConnectCases {}
createAggregatedClient(commands, ConnectCases, { paginators });
