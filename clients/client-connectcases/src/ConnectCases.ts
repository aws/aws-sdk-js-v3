// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchGetFieldCommand,
  BatchGetFieldCommandInput,
  BatchGetFieldCommandOutput,
} from "./commands/BatchGetFieldCommand";
import {
  BatchPutFieldOptionsCommand,
  BatchPutFieldOptionsCommandInput,
  BatchPutFieldOptionsCommandOutput,
} from "./commands/BatchPutFieldOptionsCommand";
import { CreateCaseCommand, CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import { CreateFieldCommand, CreateFieldCommandInput, CreateFieldCommandOutput } from "./commands/CreateFieldCommand";
import {
  CreateLayoutCommand,
  CreateLayoutCommandInput,
  CreateLayoutCommandOutput,
} from "./commands/CreateLayoutCommand";
import {
  CreateRelatedItemCommand,
  CreateRelatedItemCommandInput,
  CreateRelatedItemCommandOutput,
} from "./commands/CreateRelatedItemCommand";
import {
  CreateTemplateCommand,
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
} from "./commands/CreateTemplateCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import { GetCaseCommand, GetCaseCommandInput, GetCaseCommandOutput } from "./commands/GetCaseCommand";
import {
  GetCaseEventConfigurationCommand,
  GetCaseEventConfigurationCommandInput,
  GetCaseEventConfigurationCommandOutput,
} from "./commands/GetCaseEventConfigurationCommand";
import { GetDomainCommand, GetDomainCommandInput, GetDomainCommandOutput } from "./commands/GetDomainCommand";
import { GetLayoutCommand, GetLayoutCommandInput, GetLayoutCommandOutput } from "./commands/GetLayoutCommand";
import { GetTemplateCommand, GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  ListCasesForContactCommand,
  ListCasesForContactCommandInput,
  ListCasesForContactCommandOutput,
} from "./commands/ListCasesForContactCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListFieldOptionsCommand,
  ListFieldOptionsCommandInput,
  ListFieldOptionsCommandOutput,
} from "./commands/ListFieldOptionsCommand";
import { ListFieldsCommand, ListFieldsCommandInput, ListFieldsCommandOutput } from "./commands/ListFieldsCommand";
import { ListLayoutsCommand, ListLayoutsCommandInput, ListLayoutsCommandOutput } from "./commands/ListLayoutsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import {
  PutCaseEventConfigurationCommand,
  PutCaseEventConfigurationCommandInput,
  PutCaseEventConfigurationCommandOutput,
} from "./commands/PutCaseEventConfigurationCommand";
import { SearchCasesCommand, SearchCasesCommandInput, SearchCasesCommandOutput } from "./commands/SearchCasesCommand";
import {
  SearchRelatedItemsCommand,
  SearchRelatedItemsCommandInput,
  SearchRelatedItemsCommandOutput,
} from "./commands/SearchRelatedItemsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateCaseCommand, UpdateCaseCommandInput, UpdateCaseCommandOutput } from "./commands/UpdateCaseCommand";
import { UpdateFieldCommand, UpdateFieldCommandInput, UpdateFieldCommandOutput } from "./commands/UpdateFieldCommand";
import {
  UpdateLayoutCommand,
  UpdateLayoutCommandInput,
  UpdateLayoutCommandOutput,
} from "./commands/UpdateLayoutCommand";
import {
  UpdateTemplateCommand,
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput,
} from "./commands/UpdateTemplateCommand";
import { ConnectCasesClient, ConnectCasesClientConfig } from "./ConnectCasesClient";

const commands = {
  BatchGetFieldCommand,
  BatchPutFieldOptionsCommand,
  CreateCaseCommand,
  CreateDomainCommand,
  CreateFieldCommand,
  CreateLayoutCommand,
  CreateRelatedItemCommand,
  CreateTemplateCommand,
  DeleteDomainCommand,
  GetCaseCommand,
  GetCaseEventConfigurationCommand,
  GetDomainCommand,
  GetLayoutCommand,
  GetTemplateCommand,
  ListCasesForContactCommand,
  ListDomainsCommand,
  ListFieldOptionsCommand,
  ListFieldsCommand,
  ListLayoutsCommand,
  ListTagsForResourceCommand,
  ListTemplatesCommand,
  PutCaseEventConfigurationCommand,
  SearchCasesCommand,
  SearchRelatedItemsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCaseCommand,
  UpdateFieldCommand,
  UpdateLayoutCommand,
  UpdateTemplateCommand,
};

export interface ConnectCases {
  /**
   * @see {@link BatchGetFieldCommand}
   */
  batchGetField(args: BatchGetFieldCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetFieldCommandOutput>;
  batchGetField(args: BatchGetFieldCommandInput, cb: (err: any, data?: BatchGetFieldCommandOutput) => void): void;
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
  createCase(args: CreateCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateCaseCommandOutput>;
  createCase(args: CreateCaseCommandInput, cb: (err: any, data?: CreateCaseCommandOutput) => void): void;
  createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFieldCommand}
   */
  createField(args: CreateFieldCommandInput, options?: __HttpHandlerOptions): Promise<CreateFieldCommandOutput>;
  createField(args: CreateFieldCommandInput, cb: (err: any, data?: CreateFieldCommandOutput) => void): void;
  createField(
    args: CreateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLayoutCommand}
   */
  createLayout(args: CreateLayoutCommandInput, options?: __HttpHandlerOptions): Promise<CreateLayoutCommandOutput>;
  createLayout(args: CreateLayoutCommandInput, cb: (err: any, data?: CreateLayoutCommandOutput) => void): void;
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
  createTemplate(args: CreateTemplateCommandInput, cb: (err: any, data?: CreateTemplateCommandOutput) => void): void;
  createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCaseCommand}
   */
  getCase(args: GetCaseCommandInput, options?: __HttpHandlerOptions): Promise<GetCaseCommandOutput>;
  getCase(args: GetCaseCommandInput, cb: (err: any, data?: GetCaseCommandOutput) => void): void;
  getCase(
    args: GetCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseCommandOutput) => void
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
  getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
  getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
  getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLayoutCommand}
   */
  getLayout(args: GetLayoutCommandInput, options?: __HttpHandlerOptions): Promise<GetLayoutCommandOutput>;
  getLayout(args: GetLayoutCommandInput, cb: (err: any, data?: GetLayoutCommandOutput) => void): void;
  getLayout(
    args: GetLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemplateCommand}
   */
  getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
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
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
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
  listFields(args: ListFieldsCommandInput, options?: __HttpHandlerOptions): Promise<ListFieldsCommandOutput>;
  listFields(args: ListFieldsCommandInput, cb: (err: any, data?: ListFieldsCommandOutput) => void): void;
  listFields(
    args: ListFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLayoutsCommand}
   */
  listLayouts(args: ListLayoutsCommandInput, options?: __HttpHandlerOptions): Promise<ListLayoutsCommandOutput>;
  listLayouts(args: ListLayoutsCommandInput, cb: (err: any, data?: ListLayoutsCommandOutput) => void): void;
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
  listTemplates(args: ListTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListTemplatesCommandOutput>;
  listTemplates(args: ListTemplatesCommandInput, cb: (err: any, data?: ListTemplatesCommandOutput) => void): void;
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
   * @see {@link SearchCasesCommand}
   */
  searchCases(args: SearchCasesCommandInput, options?: __HttpHandlerOptions): Promise<SearchCasesCommandOutput>;
  searchCases(args: SearchCasesCommandInput, cb: (err: any, data?: SearchCasesCommandOutput) => void): void;
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
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCaseCommand}
   */
  updateCase(args: UpdateCaseCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCaseCommandOutput>;
  updateCase(args: UpdateCaseCommandInput, cb: (err: any, data?: UpdateCaseCommandOutput) => void): void;
  updateCase(
    args: UpdateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFieldCommand}
   */
  updateField(args: UpdateFieldCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFieldCommandOutput>;
  updateField(args: UpdateFieldCommandInput, cb: (err: any, data?: UpdateFieldCommandOutput) => void): void;
  updateField(
    args: UpdateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLayoutCommand}
   */
  updateLayout(args: UpdateLayoutCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLayoutCommandOutput>;
  updateLayout(args: UpdateLayoutCommandInput, cb: (err: any, data?: UpdateLayoutCommandOutput) => void): void;
  updateLayout(
    args: UpdateLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLayoutCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTemplateCommand}
   */
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  updateTemplate(args: UpdateTemplateCommandInput, cb: (err: any, data?: UpdateTemplateCommandOutput) => void): void;
  updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>With Amazon Connect Cases, your agents can track and manage customer issues that require
 *       multiple interactions, follow-up tasks, and teams in your contact center. A case represents a
 *       customer issue. It records the issue, the steps and interactions taken to resolve the issue,
 *       and the outcome. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the
 *           <i>Amazon Connect Administrator Guide</i>.</p>
 */
export class ConnectCases extends ConnectCasesClient implements ConnectCases {}
createAggregatedClient(commands, ConnectCases);
