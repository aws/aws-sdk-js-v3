// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateConnectorCommand,
  CreateConnectorCommandInput,
  CreateConnectorCommandOutput,
} from "./commands/CreateConnectorCommand";
import {
  CreateDirectoryRegistrationCommand,
  CreateDirectoryRegistrationCommandInput,
  CreateDirectoryRegistrationCommandOutput,
} from "./commands/CreateDirectoryRegistrationCommand";
import {
  CreateServicePrincipalNameCommand,
  CreateServicePrincipalNameCommandInput,
  CreateServicePrincipalNameCommandOutput,
} from "./commands/CreateServicePrincipalNameCommand";
import {
  CreateTemplateCommand,
  CreateTemplateCommandInput,
  CreateTemplateCommandOutput,
} from "./commands/CreateTemplateCommand";
import {
  CreateTemplateGroupAccessControlEntryCommand,
  CreateTemplateGroupAccessControlEntryCommandInput,
  CreateTemplateGroupAccessControlEntryCommandOutput,
} from "./commands/CreateTemplateGroupAccessControlEntryCommand";
import {
  DeleteConnectorCommand,
  DeleteConnectorCommandInput,
  DeleteConnectorCommandOutput,
} from "./commands/DeleteConnectorCommand";
import {
  DeleteDirectoryRegistrationCommand,
  DeleteDirectoryRegistrationCommandInput,
  DeleteDirectoryRegistrationCommandOutput,
} from "./commands/DeleteDirectoryRegistrationCommand";
import {
  DeleteServicePrincipalNameCommand,
  DeleteServicePrincipalNameCommandInput,
  DeleteServicePrincipalNameCommandOutput,
} from "./commands/DeleteServicePrincipalNameCommand";
import {
  DeleteTemplateCommand,
  DeleteTemplateCommandInput,
  DeleteTemplateCommandOutput,
} from "./commands/DeleteTemplateCommand";
import {
  DeleteTemplateGroupAccessControlEntryCommand,
  DeleteTemplateGroupAccessControlEntryCommandInput,
  DeleteTemplateGroupAccessControlEntryCommandOutput,
} from "./commands/DeleteTemplateGroupAccessControlEntryCommand";
import {
  GetConnectorCommand,
  GetConnectorCommandInput,
  GetConnectorCommandOutput,
} from "./commands/GetConnectorCommand";
import {
  GetDirectoryRegistrationCommand,
  GetDirectoryRegistrationCommandInput,
  GetDirectoryRegistrationCommandOutput,
} from "./commands/GetDirectoryRegistrationCommand";
import {
  GetServicePrincipalNameCommand,
  GetServicePrincipalNameCommandInput,
  GetServicePrincipalNameCommandOutput,
} from "./commands/GetServicePrincipalNameCommand";
import { GetTemplateCommand, GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import {
  GetTemplateGroupAccessControlEntryCommand,
  GetTemplateGroupAccessControlEntryCommandInput,
  GetTemplateGroupAccessControlEntryCommandOutput,
} from "./commands/GetTemplateGroupAccessControlEntryCommand";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "./commands/ListConnectorsCommand";
import {
  ListDirectoryRegistrationsCommand,
  ListDirectoryRegistrationsCommandInput,
  ListDirectoryRegistrationsCommandOutput,
} from "./commands/ListDirectoryRegistrationsCommand";
import {
  ListServicePrincipalNamesCommand,
  ListServicePrincipalNamesCommandInput,
  ListServicePrincipalNamesCommandOutput,
} from "./commands/ListServicePrincipalNamesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTemplateGroupAccessControlEntriesCommand,
  ListTemplateGroupAccessControlEntriesCommandInput,
  ListTemplateGroupAccessControlEntriesCommandOutput,
} from "./commands/ListTemplateGroupAccessControlEntriesCommand";
import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "./commands/ListTemplatesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateTemplateCommand,
  UpdateTemplateCommandInput,
  UpdateTemplateCommandOutput,
} from "./commands/UpdateTemplateCommand";
import {
  UpdateTemplateGroupAccessControlEntryCommand,
  UpdateTemplateGroupAccessControlEntryCommandInput,
  UpdateTemplateGroupAccessControlEntryCommandOutput,
} from "./commands/UpdateTemplateGroupAccessControlEntryCommand";
import { PcaConnectorAdClient, PcaConnectorAdClientConfig } from "./PcaConnectorAdClient";

const commands = {
  CreateConnectorCommand,
  CreateDirectoryRegistrationCommand,
  CreateServicePrincipalNameCommand,
  CreateTemplateCommand,
  CreateTemplateGroupAccessControlEntryCommand,
  DeleteConnectorCommand,
  DeleteDirectoryRegistrationCommand,
  DeleteServicePrincipalNameCommand,
  DeleteTemplateCommand,
  DeleteTemplateGroupAccessControlEntryCommand,
  GetConnectorCommand,
  GetDirectoryRegistrationCommand,
  GetServicePrincipalNameCommand,
  GetTemplateCommand,
  GetTemplateGroupAccessControlEntryCommand,
  ListConnectorsCommand,
  ListDirectoryRegistrationsCommand,
  ListServicePrincipalNamesCommand,
  ListTagsForResourceCommand,
  ListTemplateGroupAccessControlEntriesCommand,
  ListTemplatesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateTemplateCommand,
  UpdateTemplateGroupAccessControlEntryCommand,
};

export interface PcaConnectorAd {
  /**
   * @see {@link CreateConnectorCommand}
   */
  createConnector(
    args: CreateConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectorCommandOutput>;
  createConnector(args: CreateConnectorCommandInput, cb: (err: any, data?: CreateConnectorCommandOutput) => void): void;
  createConnector(
    args: CreateConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDirectoryRegistrationCommand}
   */
  createDirectoryRegistration(
    args: CreateDirectoryRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryRegistrationCommandOutput>;
  createDirectoryRegistration(
    args: CreateDirectoryRegistrationCommandInput,
    cb: (err: any, data?: CreateDirectoryRegistrationCommandOutput) => void
  ): void;
  createDirectoryRegistration(
    args: CreateDirectoryRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateServicePrincipalNameCommand}
   */
  createServicePrincipalName(
    args: CreateServicePrincipalNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServicePrincipalNameCommandOutput>;
  createServicePrincipalName(
    args: CreateServicePrincipalNameCommandInput,
    cb: (err: any, data?: CreateServicePrincipalNameCommandOutput) => void
  ): void;
  createServicePrincipalName(
    args: CreateServicePrincipalNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServicePrincipalNameCommandOutput) => void
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
   * @see {@link CreateTemplateGroupAccessControlEntryCommand}
   */
  createTemplateGroupAccessControlEntry(
    args: CreateTemplateGroupAccessControlEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTemplateGroupAccessControlEntryCommandOutput>;
  createTemplateGroupAccessControlEntry(
    args: CreateTemplateGroupAccessControlEntryCommandInput,
    cb: (err: any, data?: CreateTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;
  createTemplateGroupAccessControlEntry(
    args: CreateTemplateGroupAccessControlEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectorCommand}
   */
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectorCommandOutput>;
  deleteConnector(args: DeleteConnectorCommandInput, cb: (err: any, data?: DeleteConnectorCommandOutput) => void): void;
  deleteConnector(
    args: DeleteConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDirectoryRegistrationCommand}
   */
  deleteDirectoryRegistration(
    args: DeleteDirectoryRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryRegistrationCommandOutput>;
  deleteDirectoryRegistration(
    args: DeleteDirectoryRegistrationCommandInput,
    cb: (err: any, data?: DeleteDirectoryRegistrationCommandOutput) => void
  ): void;
  deleteDirectoryRegistration(
    args: DeleteDirectoryRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteServicePrincipalNameCommand}
   */
  deleteServicePrincipalName(
    args: DeleteServicePrincipalNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServicePrincipalNameCommandOutput>;
  deleteServicePrincipalName(
    args: DeleteServicePrincipalNameCommandInput,
    cb: (err: any, data?: DeleteServicePrincipalNameCommandOutput) => void
  ): void;
  deleteServicePrincipalName(
    args: DeleteServicePrincipalNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServicePrincipalNameCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateCommand}
   */
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateCommandOutput>;
  deleteTemplate(args: DeleteTemplateCommandInput, cb: (err: any, data?: DeleteTemplateCommandOutput) => void): void;
  deleteTemplate(
    args: DeleteTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTemplateGroupAccessControlEntryCommand}
   */
  deleteTemplateGroupAccessControlEntry(
    args: DeleteTemplateGroupAccessControlEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTemplateGroupAccessControlEntryCommandOutput>;
  deleteTemplateGroupAccessControlEntry(
    args: DeleteTemplateGroupAccessControlEntryCommandInput,
    cb: (err: any, data?: DeleteTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;
  deleteTemplateGroupAccessControlEntry(
    args: DeleteTemplateGroupAccessControlEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectorCommand}
   */
  getConnector(args: GetConnectorCommandInput, options?: __HttpHandlerOptions): Promise<GetConnectorCommandOutput>;
  getConnector(args: GetConnectorCommandInput, cb: (err: any, data?: GetConnectorCommandOutput) => void): void;
  getConnector(
    args: GetConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDirectoryRegistrationCommand}
   */
  getDirectoryRegistration(
    args: GetDirectoryRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDirectoryRegistrationCommandOutput>;
  getDirectoryRegistration(
    args: GetDirectoryRegistrationCommandInput,
    cb: (err: any, data?: GetDirectoryRegistrationCommandOutput) => void
  ): void;
  getDirectoryRegistration(
    args: GetDirectoryRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectoryRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServicePrincipalNameCommand}
   */
  getServicePrincipalName(
    args: GetServicePrincipalNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServicePrincipalNameCommandOutput>;
  getServicePrincipalName(
    args: GetServicePrincipalNameCommandInput,
    cb: (err: any, data?: GetServicePrincipalNameCommandOutput) => void
  ): void;
  getServicePrincipalName(
    args: GetServicePrincipalNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServicePrincipalNameCommandOutput) => void
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
   * @see {@link GetTemplateGroupAccessControlEntryCommand}
   */
  getTemplateGroupAccessControlEntry(
    args: GetTemplateGroupAccessControlEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemplateGroupAccessControlEntryCommandOutput>;
  getTemplateGroupAccessControlEntry(
    args: GetTemplateGroupAccessControlEntryCommandInput,
    cb: (err: any, data?: GetTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;
  getTemplateGroupAccessControlEntry(
    args: GetTemplateGroupAccessControlEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectorsCommand}
   */
  listConnectors(
    args: ListConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConnectorsCommandOutput>;
  listConnectors(args: ListConnectorsCommandInput, cb: (err: any, data?: ListConnectorsCommandOutput) => void): void;
  listConnectors(
    args: ListConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDirectoryRegistrationsCommand}
   */
  listDirectoryRegistrations(
    args: ListDirectoryRegistrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDirectoryRegistrationsCommandOutput>;
  listDirectoryRegistrations(
    args: ListDirectoryRegistrationsCommandInput,
    cb: (err: any, data?: ListDirectoryRegistrationsCommandOutput) => void
  ): void;
  listDirectoryRegistrations(
    args: ListDirectoryRegistrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDirectoryRegistrationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServicePrincipalNamesCommand}
   */
  listServicePrincipalNames(
    args: ListServicePrincipalNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicePrincipalNamesCommandOutput>;
  listServicePrincipalNames(
    args: ListServicePrincipalNamesCommandInput,
    cb: (err: any, data?: ListServicePrincipalNamesCommandOutput) => void
  ): void;
  listServicePrincipalNames(
    args: ListServicePrincipalNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicePrincipalNamesCommandOutput) => void
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
   * @see {@link ListTemplateGroupAccessControlEntriesCommand}
   */
  listTemplateGroupAccessControlEntries(
    args: ListTemplateGroupAccessControlEntriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTemplateGroupAccessControlEntriesCommandOutput>;
  listTemplateGroupAccessControlEntries(
    args: ListTemplateGroupAccessControlEntriesCommandInput,
    cb: (err: any, data?: ListTemplateGroupAccessControlEntriesCommandOutput) => void
  ): void;
  listTemplateGroupAccessControlEntries(
    args: ListTemplateGroupAccessControlEntriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTemplateGroupAccessControlEntriesCommandOutput) => void
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

  /**
   * @see {@link UpdateTemplateGroupAccessControlEntryCommand}
   */
  updateTemplateGroupAccessControlEntry(
    args: UpdateTemplateGroupAccessControlEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTemplateGroupAccessControlEntryCommandOutput>;
  updateTemplateGroupAccessControlEntry(
    args: UpdateTemplateGroupAccessControlEntryCommandInput,
    cb: (err: any, data?: UpdateTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;
  updateTemplateGroupAccessControlEntry(
    args: UpdateTemplateGroupAccessControlEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTemplateGroupAccessControlEntryCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Web Services Private CA Connector for Active Directory creates a connector between Amazon Web Services Private CA and Active Directory (AD) that enables you to
 *          provision security certificates for AD signed by a private CA that you own. For more
 *          information, see <a href="https://docs.aws.amazon.com/privateca/latest/userguide/ad-connector.html">Amazon Web Services Private CA Connector for Active Directory</a>.</p>
 */
export class PcaConnectorAd extends PcaConnectorAdClient implements PcaConnectorAd {}
createAggregatedClient(commands, PcaConnectorAd);
