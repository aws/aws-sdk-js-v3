// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateAttributeGroupCommand,
  AssociateAttributeGroupCommandInput,
  AssociateAttributeGroupCommandOutput,
} from "./commands/AssociateAttributeGroupCommand";
import {
  AssociateResourceCommand,
  AssociateResourceCommandInput,
  AssociateResourceCommandOutput,
} from "./commands/AssociateResourceCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateAttributeGroupCommand,
  CreateAttributeGroupCommandInput,
  CreateAttributeGroupCommandOutput,
} from "./commands/CreateAttributeGroupCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteAttributeGroupCommand,
  DeleteAttributeGroupCommandInput,
  DeleteAttributeGroupCommandOutput,
} from "./commands/DeleteAttributeGroupCommand";
import {
  DisassociateAttributeGroupCommand,
  DisassociateAttributeGroupCommandInput,
  DisassociateAttributeGroupCommandOutput,
} from "./commands/DisassociateAttributeGroupCommand";
import {
  DisassociateResourceCommand,
  DisassociateResourceCommandInput,
  DisassociateResourceCommandOutput,
} from "./commands/DisassociateResourceCommand";
import {
  GetApplicationCommand,
  GetApplicationCommandInput,
  GetApplicationCommandOutput,
} from "./commands/GetApplicationCommand";
import {
  GetAssociatedResourceCommand,
  GetAssociatedResourceCommandInput,
  GetAssociatedResourceCommandOutput,
} from "./commands/GetAssociatedResourceCommand";
import {
  GetAttributeGroupCommand,
  GetAttributeGroupCommandInput,
  GetAttributeGroupCommandOutput,
} from "./commands/GetAttributeGroupCommand";
import {
  GetConfigurationCommand,
  GetConfigurationCommandInput,
  GetConfigurationCommandOutput,
} from "./commands/GetConfigurationCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
import {
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedAttributeGroupsCommandInput,
  ListAssociatedAttributeGroupsCommandOutput,
} from "./commands/ListAssociatedAttributeGroupsCommand";
import {
  ListAssociatedResourcesCommand,
  ListAssociatedResourcesCommandInput,
  ListAssociatedResourcesCommandOutput,
} from "./commands/ListAssociatedResourcesCommand";
import {
  ListAttributeGroupsCommand,
  ListAttributeGroupsCommandInput,
  ListAttributeGroupsCommandOutput,
} from "./commands/ListAttributeGroupsCommand";
import {
  ListAttributeGroupsForApplicationCommand,
  ListAttributeGroupsForApplicationCommandInput,
  ListAttributeGroupsForApplicationCommandOutput,
} from "./commands/ListAttributeGroupsForApplicationCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutConfigurationCommand,
  PutConfigurationCommandInput,
  PutConfigurationCommandOutput,
} from "./commands/PutConfigurationCommand";
import {
  SyncResourceCommand,
  SyncResourceCommandInput,
  SyncResourceCommandOutput,
} from "./commands/SyncResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateAttributeGroupCommand,
  UpdateAttributeGroupCommandInput,
  UpdateAttributeGroupCommandOutput,
} from "./commands/UpdateAttributeGroupCommand";
import {
  ServiceCatalogAppRegistryClient,
  ServiceCatalogAppRegistryClientConfig,
} from "./ServiceCatalogAppRegistryClient";

const commands = {
  AssociateAttributeGroupCommand,
  AssociateResourceCommand,
  CreateApplicationCommand,
  CreateAttributeGroupCommand,
  DeleteApplicationCommand,
  DeleteAttributeGroupCommand,
  DisassociateAttributeGroupCommand,
  DisassociateResourceCommand,
  GetApplicationCommand,
  GetAssociatedResourceCommand,
  GetAttributeGroupCommand,
  GetConfigurationCommand,
  ListApplicationsCommand,
  ListAssociatedAttributeGroupsCommand,
  ListAssociatedResourcesCommand,
  ListAttributeGroupsCommand,
  ListAttributeGroupsForApplicationCommand,
  ListTagsForResourceCommand,
  PutConfigurationCommand,
  SyncResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateAttributeGroupCommand,
};

export interface ServiceCatalogAppRegistry {
  /**
   * @see {@link AssociateAttributeGroupCommand}
   */
  associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAttributeGroupCommandOutput>;
  associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): void;
  associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceCommand}
   */
  associateResource(
    args: AssociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceCommandOutput>;
  associateResource(
    args: AssociateResourceCommandInput,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;
  associateResource(
    args: AssociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAttributeGroupCommand}
   */
  createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAttributeGroupCommandOutput>;
  createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): void;
  createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttributeGroupCommand}
   */
  deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAttributeGroupCommandOutput>;
  deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): void;
  deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAttributeGroupCommand}
   */
  disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAttributeGroupCommandOutput>;
  disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): void;
  disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceCommand}
   */
  disassociateResource(
    args: DisassociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceCommandOutput>;
  disassociateResource(
    args: DisassociateResourceCommandInput,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;
  disassociateResource(
    args: DisassociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(args: GetApplicationCommandInput, cb: (err: any, data?: GetApplicationCommandOutput) => void): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociatedResourceCommand}
   */
  getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociatedResourceCommandOutput>;
  getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    cb: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): void;
  getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttributeGroupCommand}
   */
  getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttributeGroupCommandOutput>;
  getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    cb: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): void;
  getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedAttributeGroupsCommand}
   */
  listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedAttributeGroupsCommandOutput>;
  listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): void;
  listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedResourcesCommand}
   */
  listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedResourcesCommandOutput>;
  listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): void;
  listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttributeGroupsCommand}
   */
  listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttributeGroupsCommandOutput>;
  listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): void;
  listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttributeGroupsForApplicationCommand}
   */
  listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttributeGroupsForApplicationCommandOutput>;
  listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    cb: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
  ): void;
  listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
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
   * @see {@link PutConfigurationCommand}
   */
  putConfiguration(
    args: PutConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfigurationCommandOutput>;
  putConfiguration(
    args: PutConfigurationCommandInput,
    cb: (err: any, data?: PutConfigurationCommandOutput) => void
  ): void;
  putConfiguration(
    args: PutConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SyncResourceCommand}
   */
  syncResource(args: SyncResourceCommandInput, options?: __HttpHandlerOptions): Promise<SyncResourceCommandOutput>;
  syncResource(args: SyncResourceCommandInput, cb: (err: any, data?: SyncResourceCommandOutput) => void): void;
  syncResource(
    args: SyncResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SyncResourceCommandOutput) => void
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
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAttributeGroupCommand}
   */
  updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAttributeGroupCommandOutput>;
  updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): void;
  updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p> Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.</p>
 */
export class ServiceCatalogAppRegistry extends ServiceCatalogAppRegistryClient implements ServiceCatalogAppRegistry {}
createAggregatedClient(commands, ServiceCatalogAppRegistry);
