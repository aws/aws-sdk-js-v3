// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ConnectCasesClient } from "./ConnectCasesClient";

/**
 * <p>Welcome to the Amazon Connect Cases API Reference. This guide provides information about the
 *       Amazon Connect Cases API, which you can use to create, update, get, and list Cases domains,
 *       fields, field options, layouts, templates, cases, related items, and tags.</p>
 *
 *          <p>For more information about Amazon Connect Cases, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Amazon Connect Cases</a> in the
 *           <i>Amazon Connect Administrator Guide</i>. </p>
 */
export class ConnectCases extends ConnectCasesClient {
  /**
   * <p>Returns the description for the list of fields in the request parameters. </p>
   */
  public batchGetField(
    args: BatchGetFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetFieldCommandOutput>;
  public batchGetField(
    args: BatchGetFieldCommandInput,
    cb: (err: any, data?: BatchGetFieldCommandOutput) => void
  ): void;
  public batchGetField(
    args: BatchGetFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetFieldCommandOutput) => void
  ): void;
  public batchGetField(
    args: BatchGetFieldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetFieldCommandOutput) => void),
    cb?: (err: any, data?: BatchGetFieldCommandOutput) => void
  ): Promise<BatchGetFieldCommandOutput> | void {
    const command = new BatchGetFieldCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates and updates a set of field options for a single select field in a Cases
   *       domain.</p>
   */
  public batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutFieldOptionsCommandOutput>;
  public batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    cb: (err: any, data?: BatchPutFieldOptionsCommandOutput) => void
  ): void;
  public batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutFieldOptionsCommandOutput) => void
  ): void;
  public batchPutFieldOptions(
    args: BatchPutFieldOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutFieldOptionsCommandOutput) => void),
    cb?: (err: any, data?: BatchPutFieldOptionsCommandOutput) => void
  ): Promise<BatchPutFieldOptionsCommandOutput> | void {
    const command = new BatchPutFieldOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a case in the specified Cases domain. Case system and custom fields are taken
   *       as an array id/value pairs with a declared data types.</p>
   *          <note>
   *             <p>
   *                <code>customer_id</code> is a required field when creating a case.</p>
   *          </note>
   */
  public createCase(args: CreateCaseCommandInput, options?: __HttpHandlerOptions): Promise<CreateCaseCommandOutput>;
  public createCase(args: CreateCaseCommandInput, cb: (err: any, data?: CreateCaseCommandOutput) => void): void;
  public createCase(
    args: CreateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCaseCommandOutput) => void
  ): void;
  public createCase(
    args: CreateCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCaseCommandOutput) => void),
    cb?: (err: any, data?: CreateCaseCommandOutput) => void
  ): Promise<CreateCaseCommandOutput> | void {
    const command = new CreateCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a domain, which is a container for all case data, such as cases, fields, templates
   *       and layouts. Each Amazon Connect instance can be associated with only one Cases
   *       domain.</p>
   *          <important>
   *             <p>This will not associate your connect instance to Cases domain. Instead, use the
   *           Amazon Connect
   *         <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateIntegrationAssociation.html">CreateIntegrationAssociation</a> API.</p>
   *          </important>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a field in the Cases domain. This field is used to define the case object
   *       model (that is, defines what data can be captured on cases) in a Cases domain. </p>
   */
  public createField(args: CreateFieldCommandInput, options?: __HttpHandlerOptions): Promise<CreateFieldCommandOutput>;
  public createField(args: CreateFieldCommandInput, cb: (err: any, data?: CreateFieldCommandOutput) => void): void;
  public createField(
    args: CreateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldCommandOutput) => void
  ): void;
  public createField(
    args: CreateFieldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFieldCommandOutput) => void),
    cb?: (err: any, data?: CreateFieldCommandOutput) => void
  ): Promise<CreateFieldCommandOutput> | void {
    const command = new CreateFieldCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a layout in the Cases domain. Layouts define the following configuration in
   *       the top section and More Info tab of the Cases user interface:</p>
   *          <ul>
   *             <li>
   *                <p>Fields to display to the users</p>
   *             </li>
   *             <li>
   *                <p>Field ordering</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Title and Status fields cannot be part of layouts since they are not
   *         configurable.</p>
   *          </note>
   */
  public createLayout(
    args: CreateLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLayoutCommandOutput>;
  public createLayout(args: CreateLayoutCommandInput, cb: (err: any, data?: CreateLayoutCommandOutput) => void): void;
  public createLayout(
    args: CreateLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLayoutCommandOutput) => void
  ): void;
  public createLayout(
    args: CreateLayoutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLayoutCommandOutput) => void),
    cb?: (err: any, data?: CreateLayoutCommandOutput) => void
  ): Promise<CreateLayoutCommandOutput> | void {
    const command = new CreateLayoutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a related item (comments, tasks, and contacts) and associates it with a
   *       case.</p>
   *          <note>
   *             <p>A Related Item is a resource that is associated with a case. It may or may not have an
   *         external identifier linking it to an external resource (for example, a
   *           <code>contactArn</code>). All Related Items have their own internal identifier, the
   *           <code>relatedItemArn</code>. Examples of related items include <code>comments</code> and
   *           <code>contacts</code>.</p>
   *          </note>
   */
  public createRelatedItem(
    args: CreateRelatedItemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelatedItemCommandOutput>;
  public createRelatedItem(
    args: CreateRelatedItemCommandInput,
    cb: (err: any, data?: CreateRelatedItemCommandOutput) => void
  ): void;
  public createRelatedItem(
    args: CreateRelatedItemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelatedItemCommandOutput) => void
  ): void;
  public createRelatedItem(
    args: CreateRelatedItemCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRelatedItemCommandOutput) => void),
    cb?: (err: any, data?: CreateRelatedItemCommandOutput) => void
  ): Promise<CreateRelatedItemCommandOutput> | void {
    const command = new CreateRelatedItemCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a template in the Cases domain. This template is used to define the case object
   *       model (that is, to define what data can be captured on cases) in a Cases domain. A template
   *       must have a unique name within a domain, and it must reference existing field IDs and layout
   *       IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A
   *       template can be either Active or Inactive, as indicated by its status. Inactive templates
   *       cannot be used to create cases.</p>
   */
  public createTemplate(
    args: CreateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateCommandOutput>;
  public createTemplate(
    args: CreateTemplateCommandInput,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateCommandOutput) => void
  ): void;
  public createTemplate(
    args: CreateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateTemplateCommandOutput) => void
  ): Promise<CreateTemplateCommandOutput> | void {
    const command = new CreateTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a specific case if it exists. </p>
   */
  public getCase(args: GetCaseCommandInput, options?: __HttpHandlerOptions): Promise<GetCaseCommandOutput>;
  public getCase(args: GetCaseCommandInput, cb: (err: any, data?: GetCaseCommandOutput) => void): void;
  public getCase(
    args: GetCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseCommandOutput) => void
  ): void;
  public getCase(
    args: GetCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCaseCommandOutput) => void),
    cb?: (err: any, data?: GetCaseCommandOutput) => void
  ): Promise<GetCaseCommandOutput> | void {
    const command = new GetCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the case event publishing configuration.</p>
   */
  public getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCaseEventConfigurationCommandOutput>;
  public getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    cb: (err: any, data?: GetCaseEventConfigurationCommandOutput) => void
  ): void;
  public getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCaseEventConfigurationCommandOutput) => void
  ): void;
  public getCaseEventConfiguration(
    args: GetCaseEventConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCaseEventConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetCaseEventConfigurationCommandOutput) => void
  ): Promise<GetCaseEventConfigurationCommandOutput> | void {
    const command = new GetCaseEventConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a specific domain if it exists. </p>
   */
  public getDomain(args: GetDomainCommandInput, options?: __HttpHandlerOptions): Promise<GetDomainCommandOutput>;
  public getDomain(args: GetDomainCommandInput, cb: (err: any, data?: GetDomainCommandOutput) => void): void;
  public getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  public getDomain(
    args: GetDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainCommandOutput) => void),
    cb?: (err: any, data?: GetDomainCommandOutput) => void
  ): Promise<GetDomainCommandOutput> | void {
    const command = new GetDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details for the requested layout.</p>
   */
  public getLayout(args: GetLayoutCommandInput, options?: __HttpHandlerOptions): Promise<GetLayoutCommandOutput>;
  public getLayout(args: GetLayoutCommandInput, cb: (err: any, data?: GetLayoutCommandOutput) => void): void;
  public getLayout(
    args: GetLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLayoutCommandOutput) => void
  ): void;
  public getLayout(
    args: GetLayoutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLayoutCommandOutput) => void),
    cb?: (err: any, data?: GetLayoutCommandOutput) => void
  ): Promise<GetLayoutCommandOutput> | void {
    const command = new GetLayoutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details for the requested template. </p>
   */
  public getTemplate(args: GetTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetTemplateCommandOutput>;
  public getTemplate(args: GetTemplateCommandInput, cb: (err: any, data?: GetTemplateCommandOutput) => void): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateCommandOutput) => void
  ): void;
  public getTemplate(
    args: GetTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetTemplateCommandOutput) => void
  ): Promise<GetTemplateCommandOutput> | void {
    const command = new GetTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists cases for a given contact.</p>
   */
  public listCasesForContact(
    args: ListCasesForContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCasesForContactCommandOutput>;
  public listCasesForContact(
    args: ListCasesForContactCommandInput,
    cb: (err: any, data?: ListCasesForContactCommandOutput) => void
  ): void;
  public listCasesForContact(
    args: ListCasesForContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCasesForContactCommandOutput) => void
  ): void;
  public listCasesForContact(
    args: ListCasesForContactCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCasesForContactCommandOutput) => void),
    cb?: (err: any, data?: ListCasesForContactCommandOutput) => void
  ): Promise<ListCasesForContactCommandOutput> | void {
    const command = new ListCasesForContactCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all cases domains in the Amazon Web Services account. Each list item is a condensed
   *       summary object of the domain.</p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the field options for a field identifier in the domain. </p>
   */
  public listFieldOptions(
    args: ListFieldOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldOptionsCommandOutput>;
  public listFieldOptions(
    args: ListFieldOptionsCommandInput,
    cb: (err: any, data?: ListFieldOptionsCommandOutput) => void
  ): void;
  public listFieldOptions(
    args: ListFieldOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldOptionsCommandOutput) => void
  ): void;
  public listFieldOptions(
    args: ListFieldOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFieldOptionsCommandOutput) => void),
    cb?: (err: any, data?: ListFieldOptionsCommandOutput) => void
  ): Promise<ListFieldOptionsCommandOutput> | void {
    const command = new ListFieldOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all fields in a Cases domain.</p>
   */
  public listFields(args: ListFieldsCommandInput, options?: __HttpHandlerOptions): Promise<ListFieldsCommandOutput>;
  public listFields(args: ListFieldsCommandInput, cb: (err: any, data?: ListFieldsCommandOutput) => void): void;
  public listFields(
    args: ListFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldsCommandOutput) => void
  ): void;
  public listFields(
    args: ListFieldsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFieldsCommandOutput) => void),
    cb?: (err: any, data?: ListFieldsCommandOutput) => void
  ): Promise<ListFieldsCommandOutput> | void {
    const command = new ListFieldsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all layouts in the given cases domain. Each list item is a condensed summary object
   *       of the layout.</p>
   */
  public listLayouts(args: ListLayoutsCommandInput, options?: __HttpHandlerOptions): Promise<ListLayoutsCommandOutput>;
  public listLayouts(args: ListLayoutsCommandInput, cb: (err: any, data?: ListLayoutsCommandOutput) => void): void;
  public listLayouts(
    args: ListLayoutsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLayoutsCommandOutput) => void
  ): void;
  public listLayouts(
    args: ListLayoutsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLayoutsCommandOutput) => void),
    cb?: (err: any, data?: ListLayoutsCommandOutput) => void
  ): Promise<ListLayoutsCommandOutput> | void {
    const command = new ListLayoutsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists tags for a resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all of the templates in a Cases domain. Each list item is a condensed summary
   *       object of the template. </p>
   */
  public listTemplates(
    args: ListTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplatesCommandOutput>;
  public listTemplates(
    args: ListTemplatesCommandInput,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplatesCommandOutput) => void
  ): void;
  public listTemplates(
    args: ListTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListTemplatesCommandOutput) => void
  ): Promise<ListTemplatesCommandOutput> | void {
    const command = new ListTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>API for adding case event publishing configuration</p>
   */
  public putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCaseEventConfigurationCommandOutput>;
  public putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    cb: (err: any, data?: PutCaseEventConfigurationCommandOutput) => void
  ): void;
  public putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCaseEventConfigurationCommandOutput) => void
  ): void;
  public putCaseEventConfiguration(
    args: PutCaseEventConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutCaseEventConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutCaseEventConfigurationCommandOutput) => void
  ): Promise<PutCaseEventConfigurationCommandOutput> | void {
    const command = new PutCaseEventConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches for cases within their associated Cases domain. Search results are returned
   *       as a paginated list of abridged case documents.</p>
   */
  public searchCases(args: SearchCasesCommandInput, options?: __HttpHandlerOptions): Promise<SearchCasesCommandOutput>;
  public searchCases(args: SearchCasesCommandInput, cb: (err: any, data?: SearchCasesCommandOutput) => void): void;
  public searchCases(
    args: SearchCasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCasesCommandOutput) => void
  ): void;
  public searchCases(
    args: SearchCasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchCasesCommandOutput) => void),
    cb?: (err: any, data?: SearchCasesCommandOutput) => void
  ): Promise<SearchCasesCommandOutput> | void {
    const command = new SearchCasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches for related items that are associated with a case.</p>
   *          <note>
   *             <p>If no filters are provided, this returns all related items associated with a
   *         case.</p>
   *          </note>
   */
  public searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchRelatedItemsCommandOutput>;
  public searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    cb: (err: any, data?: SearchRelatedItemsCommandOutput) => void
  ): void;
  public searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchRelatedItemsCommandOutput) => void
  ): void;
  public searchRelatedItems(
    args: SearchRelatedItemsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchRelatedItemsCommandOutput) => void),
    cb?: (err: any, data?: SearchRelatedItemsCommandOutput) => void
  ): Promise<SearchRelatedItemsCommandOutput> | void {
    const command = new SearchRelatedItemsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds tags to a resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Untags a resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the values of fields on a case. Fields to be updated are received as an array of
   *       id/value pairs identical to the <code>CreateCase</code> input .</p>
   *          <p>If the action is successful, the service sends back an HTTP 200 response with an empty
   *       HTTP body.</p>
   */
  public updateCase(args: UpdateCaseCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCaseCommandOutput>;
  public updateCase(args: UpdateCaseCommandInput, cb: (err: any, data?: UpdateCaseCommandOutput) => void): void;
  public updateCase(
    args: UpdateCaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCaseCommandOutput) => void
  ): void;
  public updateCase(
    args: UpdateCaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCaseCommandOutput) => void),
    cb?: (err: any, data?: UpdateCaseCommandOutput) => void
  ): Promise<UpdateCaseCommandOutput> | void {
    const command = new UpdateCaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the properties of an existing field. </p>
   */
  public updateField(args: UpdateFieldCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFieldCommandOutput>;
  public updateField(args: UpdateFieldCommandInput, cb: (err: any, data?: UpdateFieldCommandOutput) => void): void;
  public updateField(
    args: UpdateFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldCommandOutput) => void
  ): void;
  public updateField(
    args: UpdateFieldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFieldCommandOutput) => void),
    cb?: (err: any, data?: UpdateFieldCommandOutput) => void
  ): Promise<UpdateFieldCommandOutput> | void {
    const command = new UpdateFieldCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the attributes of an existing layout.</p>
   *          <p>If the action is successful, the service sends back an HTTP 200 response with an empty
   *       HTTP body.</p>
   *          <p>A <code>ValidationException</code> is returned when you add non-existent
   *         <code>fieldIds</code> to a layout.</p>
   *          <note>
   *             <p>Title and Status fields cannot be part of layouts because they are not
   *         configurable.</p>
   *          </note>
   */
  public updateLayout(
    args: UpdateLayoutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLayoutCommandOutput>;
  public updateLayout(args: UpdateLayoutCommandInput, cb: (err: any, data?: UpdateLayoutCommandOutput) => void): void;
  public updateLayout(
    args: UpdateLayoutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLayoutCommandOutput) => void
  ): void;
  public updateLayout(
    args: UpdateLayoutCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLayoutCommandOutput) => void),
    cb?: (err: any, data?: UpdateLayoutCommandOutput) => void
  ): Promise<UpdateLayoutCommandOutput> | void {
    const command = new UpdateLayoutCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the attributes of an existing template. The template attributes that can be
   *       modified include <code>name</code>, <code>description</code>,
   *       <code>layoutConfiguration</code>, <code>requiredFields</code>, and <code>status</code>. At
   *       least one of these attributes must not be null. If a null value is provided for a given
   *       attribute, that attribute is ignored and its current value is preserved.</p>
   */
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateCommandOutput>;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): void;
  public updateTemplate(
    args: UpdateTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateTemplateCommandOutput) => void
  ): Promise<UpdateTemplateCommandOutput> | void {
    const command = new UpdateTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
