// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type AssociateAttributeGroupCommandInput,
  type AssociateAttributeGroupCommandOutput,
  AssociateAttributeGroupCommand,
} from "./commands/AssociateAttributeGroupCommand";
import {
  type AssociateResourceCommandInput,
  type AssociateResourceCommandOutput,
  AssociateResourceCommand,
} from "./commands/AssociateResourceCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateAttributeGroupCommandInput,
  type CreateAttributeGroupCommandOutput,
  CreateAttributeGroupCommand,
} from "./commands/CreateAttributeGroupCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteAttributeGroupCommandInput,
  type DeleteAttributeGroupCommandOutput,
  DeleteAttributeGroupCommand,
} from "./commands/DeleteAttributeGroupCommand";
import {
  type DisassociateAttributeGroupCommandInput,
  type DisassociateAttributeGroupCommandOutput,
  DisassociateAttributeGroupCommand,
} from "./commands/DisassociateAttributeGroupCommand";
import {
  type DisassociateResourceCommandInput,
  type DisassociateResourceCommandOutput,
  DisassociateResourceCommand,
} from "./commands/DisassociateResourceCommand";
import {
  type GetApplicationCommandInput,
  type GetApplicationCommandOutput,
  GetApplicationCommand,
} from "./commands/GetApplicationCommand";
import {
  type GetAssociatedResourceCommandInput,
  type GetAssociatedResourceCommandOutput,
  GetAssociatedResourceCommand,
} from "./commands/GetAssociatedResourceCommand";
import {
  type GetAttributeGroupCommandInput,
  type GetAttributeGroupCommandOutput,
  GetAttributeGroupCommand,
} from "./commands/GetAttributeGroupCommand";
import {
  type GetConfigurationCommandInput,
  type GetConfigurationCommandOutput,
  GetConfigurationCommand,
} from "./commands/GetConfigurationCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListAssociatedAttributeGroupsCommandInput,
  type ListAssociatedAttributeGroupsCommandOutput,
  ListAssociatedAttributeGroupsCommand,
} from "./commands/ListAssociatedAttributeGroupsCommand";
import {
  type ListAssociatedResourcesCommandInput,
  type ListAssociatedResourcesCommandOutput,
  ListAssociatedResourcesCommand,
} from "./commands/ListAssociatedResourcesCommand";
import {
  type ListAttributeGroupsCommandInput,
  type ListAttributeGroupsCommandOutput,
  ListAttributeGroupsCommand,
} from "./commands/ListAttributeGroupsCommand";
import {
  type ListAttributeGroupsForApplicationCommandInput,
  type ListAttributeGroupsForApplicationCommandOutput,
  ListAttributeGroupsForApplicationCommand,
} from "./commands/ListAttributeGroupsForApplicationCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutConfigurationCommandInput,
  type PutConfigurationCommandOutput,
  PutConfigurationCommand,
} from "./commands/PutConfigurationCommand";
import {
  type SyncResourceCommandInput,
  type SyncResourceCommandOutput,
  SyncResourceCommand,
} from "./commands/SyncResourceCommand";
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
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateAttributeGroupCommandInput,
  type UpdateAttributeGroupCommandOutput,
  UpdateAttributeGroupCommand,
} from "./commands/UpdateAttributeGroupCommand";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import { paginateListAssociatedAttributeGroups } from "./pagination/ListAssociatedAttributeGroupsPaginator";
import { paginateListAssociatedResources } from "./pagination/ListAssociatedResourcesPaginator";
import { paginateListAttributeGroupsForApplication } from "./pagination/ListAttributeGroupsForApplicationPaginator";
import { paginateListAttributeGroups } from "./pagination/ListAttributeGroupsPaginator";
import { ServiceCatalogAppRegistryClient } from "./ServiceCatalogAppRegistryClient";

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
const paginators = {
  paginateListApplications,
  paginateListAssociatedAttributeGroups,
  paginateListAssociatedResources,
  paginateListAttributeGroups,
  paginateListAttributeGroupsForApplication,
};

/**
 * @public
 */
export interface ServiceCatalogAppRegistryRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ServiceCatalogAppRegistry {
  /**
   * @see {@link AssociateAttributeGroupCommand}
   */
  associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<AssociateAttributeGroupCommandOutput>;
  associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): void;
  associateAttributeGroup(
    args: AssociateAttributeGroupCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: AssociateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateResourceCommand}
   */
  associateResource(
    args: AssociateResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<AssociateResourceCommandOutput>;
  associateResource(
    args: AssociateResourceCommandInput,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;
  associateResource(
    args: AssociateResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAttributeGroupCommand}
   */
  createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<CreateAttributeGroupCommandOutput>;
  createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): void;
  createAttributeGroup(
    args: CreateAttributeGroupCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: CreateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAttributeGroupCommand}
   */
  deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<DeleteAttributeGroupCommandOutput>;
  deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): void;
  deleteAttributeGroup(
    args: DeleteAttributeGroupCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: DeleteAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAttributeGroupCommand}
   */
  disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<DisassociateAttributeGroupCommandOutput>;
  disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): void;
  disassociateAttributeGroup(
    args: DisassociateAttributeGroupCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: DisassociateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceCommand}
   */
  disassociateResource(
    args: DisassociateResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<DisassociateResourceCommandOutput>;
  disassociateResource(
    args: DisassociateResourceCommandInput,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;
  disassociateResource(
    args: DisassociateResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationCommand}
   */
  getApplication(
    args: GetApplicationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<GetApplicationCommandOutput>;
  getApplication(
    args: GetApplicationCommandInput,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;
  getApplication(
    args: GetApplicationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: GetApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssociatedResourceCommand}
   */
  getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<GetAssociatedResourceCommandOutput>;
  getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    cb: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): void;
  getAssociatedResource(
    args: GetAssociatedResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: GetAssociatedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAttributeGroupCommand}
   */
  getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<GetAttributeGroupCommandOutput>;
  getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    cb: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): void;
  getAttributeGroup(
    args: GetAttributeGroupCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: GetAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigurationCommand}
   */
  getConfiguration(): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<GetConfigurationCommandOutput>;
  getConfiguration(
    args: GetConfigurationCommandInput,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;
  getConfiguration(
    args: GetConfigurationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: GetConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedAttributeGroupsCommand}
   */
  listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<ListAssociatedAttributeGroupsCommandOutput>;
  listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): void;
  listAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: ListAssociatedAttributeGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedResourcesCommand}
   */
  listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<ListAssociatedResourcesCommandOutput>;
  listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): void;
  listAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: ListAssociatedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttributeGroupsCommand}
   */
  listAttributeGroups(): Promise<ListAttributeGroupsCommandOutput>;
  listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<ListAttributeGroupsCommandOutput>;
  listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): void;
  listAttributeGroups(
    args: ListAttributeGroupsCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: ListAttributeGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAttributeGroupsForApplicationCommand}
   */
  listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<ListAttributeGroupsForApplicationCommandOutput>;
  listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    cb: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
  ): void;
  listAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: ListAttributeGroupsForApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfigurationCommand}
   */
  putConfiguration(
    args: PutConfigurationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<PutConfigurationCommandOutput>;
  putConfiguration(
    args: PutConfigurationCommandInput,
    cb: (err: any, data?: PutConfigurationCommandOutput) => void
  ): void;
  putConfiguration(
    args: PutConfigurationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: PutConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SyncResourceCommand}
   */
  syncResource(
    args: SyncResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<SyncResourceCommandOutput>;
  syncResource(
    args: SyncResourceCommandInput,
    cb: (err: any, data?: SyncResourceCommandOutput) => void
  ): void;
  syncResource(
    args: SyncResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: SyncResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAttributeGroupCommand}
   */
  updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    options?: ServiceCatalogAppRegistryRequestOptions
  ): Promise<UpdateAttributeGroupCommandOutput>;
  updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): void;
  updateAttributeGroup(
    args: UpdateAttributeGroupCommandInput,
    options: ServiceCatalogAppRegistryRequestOptions,
    cb: (err: any, data?: UpdateAttributeGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args?: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListAssociatedAttributeGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociatedAttributeGroupsCommandOutput}.
   */
  paginateListAssociatedAttributeGroups(
    args: ListAssociatedAttributeGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociatedAttributeGroupsCommandOutput>;

  /**
   * @see {@link ListAssociatedResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociatedResourcesCommandOutput}.
   */
  paginateListAssociatedResources(
    args: ListAssociatedResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociatedResourcesCommandOutput>;

  /**
   * @see {@link ListAttributeGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttributeGroupsCommandOutput}.
   */
  paginateListAttributeGroups(
    args?: ListAttributeGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttributeGroupsCommandOutput>;

  /**
   * @see {@link ListAttributeGroupsForApplicationCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAttributeGroupsForApplicationCommandOutput}.
   */
  paginateListAttributeGroupsForApplication(
    args: ListAttributeGroupsForApplicationCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAttributeGroupsForApplicationCommandOutput>;
}

/**
 * <p> Amazon Web Services Service Catalog AppRegistry enables organizations to understand the application context of their Amazon Web Services resources. AppRegistry provides a repository of your applications, their resources, and the application metadata that you use within your enterprise.</p>
 * @public
 */
export class ServiceCatalogAppRegistry extends ServiceCatalogAppRegistryClient implements ServiceCatalogAppRegistry {}
createAggregatedClient(commands, ServiceCatalogAppRegistry, { paginators });
