// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type BatchPutPropertyValuesCommandInput,
  type BatchPutPropertyValuesCommandOutput,
  BatchPutPropertyValuesCommand,
} from "./commands/BatchPutPropertyValuesCommand";
import {
  type CancelMetadataTransferJobCommandInput,
  type CancelMetadataTransferJobCommandOutput,
  CancelMetadataTransferJobCommand,
} from "./commands/CancelMetadataTransferJobCommand";
import {
  type CreateComponentTypeCommandInput,
  type CreateComponentTypeCommandOutput,
  CreateComponentTypeCommand,
} from "./commands/CreateComponentTypeCommand";
import {
  type CreateEntityCommandInput,
  type CreateEntityCommandOutput,
  CreateEntityCommand,
} from "./commands/CreateEntityCommand";
import {
  type CreateMetadataTransferJobCommandInput,
  type CreateMetadataTransferJobCommandOutput,
  CreateMetadataTransferJobCommand,
} from "./commands/CreateMetadataTransferJobCommand";
import {
  type CreateSceneCommandInput,
  type CreateSceneCommandOutput,
  CreateSceneCommand,
} from "./commands/CreateSceneCommand";
import {
  type CreateSyncJobCommandInput,
  type CreateSyncJobCommandOutput,
  CreateSyncJobCommand,
} from "./commands/CreateSyncJobCommand";
import {
  type CreateWorkspaceCommandInput,
  type CreateWorkspaceCommandOutput,
  CreateWorkspaceCommand,
} from "./commands/CreateWorkspaceCommand";
import {
  type DeleteComponentTypeCommandInput,
  type DeleteComponentTypeCommandOutput,
  DeleteComponentTypeCommand,
} from "./commands/DeleteComponentTypeCommand";
import {
  type DeleteEntityCommandInput,
  type DeleteEntityCommandOutput,
  DeleteEntityCommand,
} from "./commands/DeleteEntityCommand";
import {
  type DeleteSceneCommandInput,
  type DeleteSceneCommandOutput,
  DeleteSceneCommand,
} from "./commands/DeleteSceneCommand";
import {
  type DeleteSyncJobCommandInput,
  type DeleteSyncJobCommandOutput,
  DeleteSyncJobCommand,
} from "./commands/DeleteSyncJobCommand";
import {
  type DeleteWorkspaceCommandInput,
  type DeleteWorkspaceCommandOutput,
  DeleteWorkspaceCommand,
} from "./commands/DeleteWorkspaceCommand";
import {
  type ExecuteQueryCommandInput,
  type ExecuteQueryCommandOutput,
  ExecuteQueryCommand,
} from "./commands/ExecuteQueryCommand";
import {
  type GetComponentTypeCommandInput,
  type GetComponentTypeCommandOutput,
  GetComponentTypeCommand,
} from "./commands/GetComponentTypeCommand";
import { type GetEntityCommandInput, type GetEntityCommandOutput, GetEntityCommand } from "./commands/GetEntityCommand";
import {
  type GetMetadataTransferJobCommandInput,
  type GetMetadataTransferJobCommandOutput,
  GetMetadataTransferJobCommand,
} from "./commands/GetMetadataTransferJobCommand";
import {
  type GetPricingPlanCommandInput,
  type GetPricingPlanCommandOutput,
  GetPricingPlanCommand,
} from "./commands/GetPricingPlanCommand";
import {
  type GetPropertyValueCommandInput,
  type GetPropertyValueCommandOutput,
  GetPropertyValueCommand,
} from "./commands/GetPropertyValueCommand";
import {
  type GetPropertyValueHistoryCommandInput,
  type GetPropertyValueHistoryCommandOutput,
  GetPropertyValueHistoryCommand,
} from "./commands/GetPropertyValueHistoryCommand";
import { type GetSceneCommandInput, type GetSceneCommandOutput, GetSceneCommand } from "./commands/GetSceneCommand";
import {
  type GetSyncJobCommandInput,
  type GetSyncJobCommandOutput,
  GetSyncJobCommand,
} from "./commands/GetSyncJobCommand";
import {
  type GetWorkspaceCommandInput,
  type GetWorkspaceCommandOutput,
  GetWorkspaceCommand,
} from "./commands/GetWorkspaceCommand";
import {
  type ListComponentsCommandInput,
  type ListComponentsCommandOutput,
  ListComponentsCommand,
} from "./commands/ListComponentsCommand";
import {
  type ListComponentTypesCommandInput,
  type ListComponentTypesCommandOutput,
  ListComponentTypesCommand,
} from "./commands/ListComponentTypesCommand";
import {
  type ListEntitiesCommandInput,
  type ListEntitiesCommandOutput,
  ListEntitiesCommand,
} from "./commands/ListEntitiesCommand";
import {
  type ListMetadataTransferJobsCommandInput,
  type ListMetadataTransferJobsCommandOutput,
  ListMetadataTransferJobsCommand,
} from "./commands/ListMetadataTransferJobsCommand";
import {
  type ListPropertiesCommandInput,
  type ListPropertiesCommandOutput,
  ListPropertiesCommand,
} from "./commands/ListPropertiesCommand";
import {
  type ListScenesCommandInput,
  type ListScenesCommandOutput,
  ListScenesCommand,
} from "./commands/ListScenesCommand";
import {
  type ListSyncJobsCommandInput,
  type ListSyncJobsCommandOutput,
  ListSyncJobsCommand,
} from "./commands/ListSyncJobsCommand";
import {
  type ListSyncResourcesCommandInput,
  type ListSyncResourcesCommandOutput,
  ListSyncResourcesCommand,
} from "./commands/ListSyncResourcesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWorkspacesCommandInput,
  type ListWorkspacesCommandOutput,
  ListWorkspacesCommand,
} from "./commands/ListWorkspacesCommand";
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
  type UpdateComponentTypeCommandInput,
  type UpdateComponentTypeCommandOutput,
  UpdateComponentTypeCommand,
} from "./commands/UpdateComponentTypeCommand";
import {
  type UpdateEntityCommandInput,
  type UpdateEntityCommandOutput,
  UpdateEntityCommand,
} from "./commands/UpdateEntityCommand";
import {
  type UpdatePricingPlanCommandInput,
  type UpdatePricingPlanCommandOutput,
  UpdatePricingPlanCommand,
} from "./commands/UpdatePricingPlanCommand";
import {
  type UpdateSceneCommandInput,
  type UpdateSceneCommandOutput,
  UpdateSceneCommand,
} from "./commands/UpdateSceneCommand";
import {
  type UpdateWorkspaceCommandInput,
  type UpdateWorkspaceCommandOutput,
  UpdateWorkspaceCommand,
} from "./commands/UpdateWorkspaceCommand";
import { IoTTwinMakerClient } from "./IoTTwinMakerClient";
import { paginateExecuteQuery } from "./pagination/ExecuteQueryPaginator";
import { paginateGetPropertyValueHistory } from "./pagination/GetPropertyValueHistoryPaginator";
import { paginateGetPropertyValue } from "./pagination/GetPropertyValuePaginator";
import { paginateListComponents } from "./pagination/ListComponentsPaginator";
import { paginateListComponentTypes } from "./pagination/ListComponentTypesPaginator";
import { paginateListEntities } from "./pagination/ListEntitiesPaginator";
import { paginateListMetadataTransferJobs } from "./pagination/ListMetadataTransferJobsPaginator";
import { paginateListProperties } from "./pagination/ListPropertiesPaginator";
import { paginateListScenes } from "./pagination/ListScenesPaginator";
import { paginateListSyncJobs } from "./pagination/ListSyncJobsPaginator";
import { paginateListSyncResources } from "./pagination/ListSyncResourcesPaginator";
import { paginateListWorkspaces } from "./pagination/ListWorkspacesPaginator";

const commands = {
  BatchPutPropertyValuesCommand,
  CancelMetadataTransferJobCommand,
  CreateComponentTypeCommand,
  CreateEntityCommand,
  CreateMetadataTransferJobCommand,
  CreateSceneCommand,
  CreateSyncJobCommand,
  CreateWorkspaceCommand,
  DeleteComponentTypeCommand,
  DeleteEntityCommand,
  DeleteSceneCommand,
  DeleteSyncJobCommand,
  DeleteWorkspaceCommand,
  ExecuteQueryCommand,
  GetComponentTypeCommand,
  GetEntityCommand,
  GetMetadataTransferJobCommand,
  GetPricingPlanCommand,
  GetPropertyValueCommand,
  GetPropertyValueHistoryCommand,
  GetSceneCommand,
  GetSyncJobCommand,
  GetWorkspaceCommand,
  ListComponentsCommand,
  ListComponentTypesCommand,
  ListEntitiesCommand,
  ListMetadataTransferJobsCommand,
  ListPropertiesCommand,
  ListScenesCommand,
  ListSyncJobsCommand,
  ListSyncResourcesCommand,
  ListTagsForResourceCommand,
  ListWorkspacesCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateComponentTypeCommand,
  UpdateEntityCommand,
  UpdatePricingPlanCommand,
  UpdateSceneCommand,
  UpdateWorkspaceCommand,
};
const paginators = {
  paginateExecuteQuery,
  paginateGetPropertyValue,
  paginateGetPropertyValueHistory,
  paginateListComponents,
  paginateListComponentTypes,
  paginateListEntities,
  paginateListMetadataTransferJobs,
  paginateListProperties,
  paginateListScenes,
  paginateListSyncJobs,
  paginateListSyncResources,
  paginateListWorkspaces,
};

export interface IoTTwinMaker {
  /**
   * @see {@link BatchPutPropertyValuesCommand}
   */
  batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutPropertyValuesCommandOutput>;
  batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    cb: (err: any, data?: BatchPutPropertyValuesCommandOutput) => void
  ): void;
  batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutPropertyValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMetadataTransferJobCommand}
   */
  cancelMetadataTransferJob(
    args: CancelMetadataTransferJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMetadataTransferJobCommandOutput>;
  cancelMetadataTransferJob(
    args: CancelMetadataTransferJobCommandInput,
    cb: (err: any, data?: CancelMetadataTransferJobCommandOutput) => void
  ): void;
  cancelMetadataTransferJob(
    args: CancelMetadataTransferJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMetadataTransferJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComponentTypeCommand}
   */
  createComponentType(
    args: CreateComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentTypeCommandOutput>;
  createComponentType(
    args: CreateComponentTypeCommandInput,
    cb: (err: any, data?: CreateComponentTypeCommandOutput) => void
  ): void;
  createComponentType(
    args: CreateComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEntityCommand}
   */
  createEntity(
    args: CreateEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntityCommandOutput>;
  createEntity(
    args: CreateEntityCommandInput,
    cb: (err: any, data?: CreateEntityCommandOutput) => void
  ): void;
  createEntity(
    args: CreateEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMetadataTransferJobCommand}
   */
  createMetadataTransferJob(
    args: CreateMetadataTransferJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMetadataTransferJobCommandOutput>;
  createMetadataTransferJob(
    args: CreateMetadataTransferJobCommandInput,
    cb: (err: any, data?: CreateMetadataTransferJobCommandOutput) => void
  ): void;
  createMetadataTransferJob(
    args: CreateMetadataTransferJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMetadataTransferJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSceneCommand}
   */
  createScene(
    args: CreateSceneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSceneCommandOutput>;
  createScene(
    args: CreateSceneCommandInput,
    cb: (err: any, data?: CreateSceneCommandOutput) => void
  ): void;
  createScene(
    args: CreateSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSyncJobCommand}
   */
  createSyncJob(
    args: CreateSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSyncJobCommandOutput>;
  createSyncJob(
    args: CreateSyncJobCommandInput,
    cb: (err: any, data?: CreateSyncJobCommandOutput) => void
  ): void;
  createSyncJob(
    args: CreateSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceCommand}
   */
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentTypeCommand}
   */
  deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentTypeCommandOutput>;
  deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    cb: (err: any, data?: DeleteComponentTypeCommandOutput) => void
  ): void;
  deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntityCommand}
   */
  deleteEntity(
    args: DeleteEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntityCommandOutput>;
  deleteEntity(
    args: DeleteEntityCommandInput,
    cb: (err: any, data?: DeleteEntityCommandOutput) => void
  ): void;
  deleteEntity(
    args: DeleteEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSceneCommand}
   */
  deleteScene(
    args: DeleteSceneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSceneCommandOutput>;
  deleteScene(
    args: DeleteSceneCommandInput,
    cb: (err: any, data?: DeleteSceneCommandOutput) => void
  ): void;
  deleteScene(
    args: DeleteSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSyncJobCommand}
   */
  deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSyncJobCommandOutput>;
  deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    cb: (err: any, data?: DeleteSyncJobCommandOutput) => void
  ): void;
  deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceCommand}
   */
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteQueryCommand}
   */
  executeQuery(
    args: ExecuteQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteQueryCommandOutput>;
  executeQuery(
    args: ExecuteQueryCommandInput,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;
  executeQuery(
    args: ExecuteQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentTypeCommand}
   */
  getComponentType(
    args: GetComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentTypeCommandOutput>;
  getComponentType(
    args: GetComponentTypeCommandInput,
    cb: (err: any, data?: GetComponentTypeCommandOutput) => void
  ): void;
  getComponentType(
    args: GetComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEntityCommand}
   */
  getEntity(
    args: GetEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEntityCommandOutput>;
  getEntity(
    args: GetEntityCommandInput,
    cb: (err: any, data?: GetEntityCommandOutput) => void
  ): void;
  getEntity(
    args: GetEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetadataTransferJobCommand}
   */
  getMetadataTransferJob(
    args: GetMetadataTransferJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetadataTransferJobCommandOutput>;
  getMetadataTransferJob(
    args: GetMetadataTransferJobCommandInput,
    cb: (err: any, data?: GetMetadataTransferJobCommandOutput) => void
  ): void;
  getMetadataTransferJob(
    args: GetMetadataTransferJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetadataTransferJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPricingPlanCommand}
   */
  getPricingPlan(): Promise<GetPricingPlanCommandOutput>;
  getPricingPlan(
    args: GetPricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPricingPlanCommandOutput>;
  getPricingPlan(
    args: GetPricingPlanCommandInput,
    cb: (err: any, data?: GetPricingPlanCommandOutput) => void
  ): void;
  getPricingPlan(
    args: GetPricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPricingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertyValueCommand}
   */
  getPropertyValue(
    args: GetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPropertyValueCommandOutput>;
  getPropertyValue(
    args: GetPropertyValueCommandInput,
    cb: (err: any, data?: GetPropertyValueCommandOutput) => void
  ): void;
  getPropertyValue(
    args: GetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPropertyValueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertyValueHistoryCommand}
   */
  getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPropertyValueHistoryCommandOutput>;
  getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    cb: (err: any, data?: GetPropertyValueHistoryCommandOutput) => void
  ): void;
  getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPropertyValueHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSceneCommand}
   */
  getScene(
    args: GetSceneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSceneCommandOutput>;
  getScene(
    args: GetSceneCommandInput,
    cb: (err: any, data?: GetSceneCommandOutput) => void
  ): void;
  getScene(
    args: GetSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSyncJobCommand}
   */
  getSyncJob(
    args: GetSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSyncJobCommandOutput>;
  getSyncJob(
    args: GetSyncJobCommandInput,
    cb: (err: any, data?: GetSyncJobCommandOutput) => void
  ): void;
  getSyncJob(
    args: GetSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkspaceCommand}
   */
  getWorkspace(
    args: GetWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkspaceCommandOutput>;
  getWorkspace(
    args: GetWorkspaceCommandInput,
    cb: (err: any, data?: GetWorkspaceCommandOutput) => void
  ): void;
  getWorkspace(
    args: GetWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(
    args: ListComponentsCommandInput,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentTypesCommand}
   */
  listComponentTypes(
    args: ListComponentTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentTypesCommandOutput>;
  listComponentTypes(
    args: ListComponentTypesCommandInput,
    cb: (err: any, data?: ListComponentTypesCommandOutput) => void
  ): void;
  listComponentTypes(
    args: ListComponentTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEntitiesCommand}
   */
  listEntities(
    args: ListEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesCommandOutput>;
  listEntities(
    args: ListEntitiesCommandInput,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;
  listEntities(
    args: ListEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMetadataTransferJobsCommand}
   */
  listMetadataTransferJobs(
    args: ListMetadataTransferJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMetadataTransferJobsCommandOutput>;
  listMetadataTransferJobs(
    args: ListMetadataTransferJobsCommandInput,
    cb: (err: any, data?: ListMetadataTransferJobsCommandOutput) => void
  ): void;
  listMetadataTransferJobs(
    args: ListMetadataTransferJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMetadataTransferJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPropertiesCommand}
   */
  listProperties(
    args: ListPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPropertiesCommandOutput>;
  listProperties(
    args: ListPropertiesCommandInput,
    cb: (err: any, data?: ListPropertiesCommandOutput) => void
  ): void;
  listProperties(
    args: ListPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScenesCommand}
   */
  listScenes(
    args: ListScenesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScenesCommandOutput>;
  listScenes(
    args: ListScenesCommandInput,
    cb: (err: any, data?: ListScenesCommandOutput) => void
  ): void;
  listScenes(
    args: ListScenesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScenesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSyncJobsCommand}
   */
  listSyncJobs(
    args: ListSyncJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSyncJobsCommandOutput>;
  listSyncJobs(
    args: ListSyncJobsCommandInput,
    cb: (err: any, data?: ListSyncJobsCommandOutput) => void
  ): void;
  listSyncJobs(
    args: ListSyncJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSyncJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSyncResourcesCommand}
   */
  listSyncResources(
    args: ListSyncResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSyncResourcesCommandOutput>;
  listSyncResources(
    args: ListSyncResourcesCommandInput,
    cb: (err: any, data?: ListSyncResourcesCommandOutput) => void
  ): void;
  listSyncResources(
    args: ListSyncResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSyncResourcesCommandOutput) => void
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
   * @see {@link ListWorkspacesCommand}
   */
  listWorkspaces(): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
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
   * @see {@link UpdateComponentTypeCommand}
   */
  updateComponentType(
    args: UpdateComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentTypeCommandOutput>;
  updateComponentType(
    args: UpdateComponentTypeCommandInput,
    cb: (err: any, data?: UpdateComponentTypeCommandOutput) => void
  ): void;
  updateComponentType(
    args: UpdateComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEntityCommand}
   */
  updateEntity(
    args: UpdateEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEntityCommandOutput>;
  updateEntity(
    args: UpdateEntityCommandInput,
    cb: (err: any, data?: UpdateEntityCommandOutput) => void
  ): void;
  updateEntity(
    args: UpdateEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePricingPlanCommand}
   */
  updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePricingPlanCommandOutput>;
  updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;
  updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSceneCommand}
   */
  updateScene(
    args: UpdateSceneCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSceneCommandOutput>;
  updateScene(
    args: UpdateSceneCommandInput,
    cb: (err: any, data?: UpdateSceneCommandOutput) => void
  ): void;
  updateScene(
    args: UpdateSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceCommand}
   */
  updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceCommandOutput>;
  updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteQueryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ExecuteQueryCommandOutput}.
   */
  paginateExecuteQuery(
    args: ExecuteQueryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ExecuteQueryCommandOutput>;

  /**
   * @see {@link GetPropertyValueCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetPropertyValueCommandOutput}.
   */
  paginateGetPropertyValue(
    args: GetPropertyValueCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetPropertyValueCommandOutput>;

  /**
   * @see {@link GetPropertyValueHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetPropertyValueHistoryCommandOutput}.
   */
  paginateGetPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetPropertyValueHistoryCommandOutput>;

  /**
   * @see {@link ListComponentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComponentsCommandOutput}.
   */
  paginateListComponents(
    args: ListComponentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComponentsCommandOutput>;

  /**
   * @see {@link ListComponentTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComponentTypesCommandOutput}.
   */
  paginateListComponentTypes(
    args: ListComponentTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComponentTypesCommandOutput>;

  /**
   * @see {@link ListEntitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEntitiesCommandOutput}.
   */
  paginateListEntities(
    args: ListEntitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEntitiesCommandOutput>;

  /**
   * @see {@link ListMetadataTransferJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMetadataTransferJobsCommandOutput}.
   */
  paginateListMetadataTransferJobs(
    args: ListMetadataTransferJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMetadataTransferJobsCommandOutput>;

  /**
   * @see {@link ListPropertiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPropertiesCommandOutput}.
   */
  paginateListProperties(
    args: ListPropertiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPropertiesCommandOutput>;

  /**
   * @see {@link ListScenesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScenesCommandOutput}.
   */
  paginateListScenes(
    args: ListScenesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScenesCommandOutput>;

  /**
   * @see {@link ListSyncJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSyncJobsCommandOutput}.
   */
  paginateListSyncJobs(
    args: ListSyncJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSyncJobsCommandOutput>;

  /**
   * @see {@link ListSyncResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSyncResourcesCommandOutput}.
   */
  paginateListSyncResources(
    args: ListSyncResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSyncResourcesCommandOutput>;

  /**
   * @see {@link ListWorkspacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkspacesCommandOutput}.
   */
  paginateListWorkspaces(
    args?: ListWorkspacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkspacesCommandOutput>;
}

/**
 * <p>IoT TwinMaker is a service with which you can
 *          build operational digital twins of physical systems. IoT TwinMaker overlays measurements
 *          and analysis from real-world sensors, cameras, and enterprise applications so you can
 *          create data visualizations to monitor your physical factory, building, or industrial plant.
 *          You can use this real-world data to monitor operations and diagnose and repair
 *          errors.</p>
 * @public
 */
export class IoTTwinMaker extends IoTTwinMakerClient implements IoTTwinMaker {}
createAggregatedClient(commands, IoTTwinMaker, { paginators });
