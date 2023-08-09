// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BatchPutPropertyValuesCommand,
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
} from "./commands/BatchPutPropertyValuesCommand";
import {
  CreateComponentTypeCommand,
  CreateComponentTypeCommandInput,
  CreateComponentTypeCommandOutput,
} from "./commands/CreateComponentTypeCommand";
import {
  CreateEntityCommand,
  CreateEntityCommandInput,
  CreateEntityCommandOutput,
} from "./commands/CreateEntityCommand";
import { CreateSceneCommand, CreateSceneCommandInput, CreateSceneCommandOutput } from "./commands/CreateSceneCommand";
import {
  CreateSyncJobCommand,
  CreateSyncJobCommandInput,
  CreateSyncJobCommandOutput,
} from "./commands/CreateSyncJobCommand";
import {
  CreateWorkspaceCommand,
  CreateWorkspaceCommandInput,
  CreateWorkspaceCommandOutput,
} from "./commands/CreateWorkspaceCommand";
import {
  DeleteComponentTypeCommand,
  DeleteComponentTypeCommandInput,
  DeleteComponentTypeCommandOutput,
} from "./commands/DeleteComponentTypeCommand";
import {
  DeleteEntityCommand,
  DeleteEntityCommandInput,
  DeleteEntityCommandOutput,
} from "./commands/DeleteEntityCommand";
import { DeleteSceneCommand, DeleteSceneCommandInput, DeleteSceneCommandOutput } from "./commands/DeleteSceneCommand";
import {
  DeleteSyncJobCommand,
  DeleteSyncJobCommandInput,
  DeleteSyncJobCommandOutput,
} from "./commands/DeleteSyncJobCommand";
import {
  DeleteWorkspaceCommand,
  DeleteWorkspaceCommandInput,
  DeleteWorkspaceCommandOutput,
} from "./commands/DeleteWorkspaceCommand";
import {
  ExecuteQueryCommand,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput,
} from "./commands/ExecuteQueryCommand";
import {
  GetComponentTypeCommand,
  GetComponentTypeCommandInput,
  GetComponentTypeCommandOutput,
} from "./commands/GetComponentTypeCommand";
import { GetEntityCommand, GetEntityCommandInput, GetEntityCommandOutput } from "./commands/GetEntityCommand";
import {
  GetPricingPlanCommand,
  GetPricingPlanCommandInput,
  GetPricingPlanCommandOutput,
} from "./commands/GetPricingPlanCommand";
import {
  GetPropertyValueCommand,
  GetPropertyValueCommandInput,
  GetPropertyValueCommandOutput,
} from "./commands/GetPropertyValueCommand";
import {
  GetPropertyValueHistoryCommand,
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "./commands/GetPropertyValueHistoryCommand";
import { GetSceneCommand, GetSceneCommandInput, GetSceneCommandOutput } from "./commands/GetSceneCommand";
import { GetSyncJobCommand, GetSyncJobCommandInput, GetSyncJobCommandOutput } from "./commands/GetSyncJobCommand";
import {
  GetWorkspaceCommand,
  GetWorkspaceCommandInput,
  GetWorkspaceCommandOutput,
} from "./commands/GetWorkspaceCommand";
import {
  ListComponentTypesCommand,
  ListComponentTypesCommandInput,
  ListComponentTypesCommandOutput,
} from "./commands/ListComponentTypesCommand";
import {
  ListEntitiesCommand,
  ListEntitiesCommandInput,
  ListEntitiesCommandOutput,
} from "./commands/ListEntitiesCommand";
import { ListScenesCommand, ListScenesCommandInput, ListScenesCommandOutput } from "./commands/ListScenesCommand";
import {
  ListSyncJobsCommand,
  ListSyncJobsCommandInput,
  ListSyncJobsCommandOutput,
} from "./commands/ListSyncJobsCommand";
import {
  ListSyncResourcesCommand,
  ListSyncResourcesCommandInput,
  ListSyncResourcesCommandOutput,
} from "./commands/ListSyncResourcesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkspacesCommand,
  ListWorkspacesCommandInput,
  ListWorkspacesCommandOutput,
} from "./commands/ListWorkspacesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateComponentTypeCommand,
  UpdateComponentTypeCommandInput,
  UpdateComponentTypeCommandOutput,
} from "./commands/UpdateComponentTypeCommand";
import {
  UpdateEntityCommand,
  UpdateEntityCommandInput,
  UpdateEntityCommandOutput,
} from "./commands/UpdateEntityCommand";
import {
  UpdatePricingPlanCommand,
  UpdatePricingPlanCommandInput,
  UpdatePricingPlanCommandOutput,
} from "./commands/UpdatePricingPlanCommand";
import { UpdateSceneCommand, UpdateSceneCommandInput, UpdateSceneCommandOutput } from "./commands/UpdateSceneCommand";
import {
  UpdateWorkspaceCommand,
  UpdateWorkspaceCommandInput,
  UpdateWorkspaceCommandOutput,
} from "./commands/UpdateWorkspaceCommand";
import { IoTTwinMakerClient, IoTTwinMakerClientConfig } from "./IoTTwinMakerClient";

const commands = {
  BatchPutPropertyValuesCommand,
  CreateComponentTypeCommand,
  CreateEntityCommand,
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
  GetPricingPlanCommand,
  GetPropertyValueCommand,
  GetPropertyValueHistoryCommand,
  GetSceneCommand,
  GetSyncJobCommand,
  GetWorkspaceCommand,
  ListComponentTypesCommand,
  ListEntitiesCommand,
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
  createEntity(args: CreateEntityCommandInput, options?: __HttpHandlerOptions): Promise<CreateEntityCommandOutput>;
  createEntity(args: CreateEntityCommandInput, cb: (err: any, data?: CreateEntityCommandOutput) => void): void;
  createEntity(
    args: CreateEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSceneCommand}
   */
  createScene(args: CreateSceneCommandInput, options?: __HttpHandlerOptions): Promise<CreateSceneCommandOutput>;
  createScene(args: CreateSceneCommandInput, cb: (err: any, data?: CreateSceneCommandOutput) => void): void;
  createScene(
    args: CreateSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSyncJobCommand}
   */
  createSyncJob(args: CreateSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateSyncJobCommandOutput>;
  createSyncJob(args: CreateSyncJobCommandInput, cb: (err: any, data?: CreateSyncJobCommandOutput) => void): void;
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
  createWorkspace(args: CreateWorkspaceCommandInput, cb: (err: any, data?: CreateWorkspaceCommandOutput) => void): void;
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
  deleteEntity(args: DeleteEntityCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEntityCommandOutput>;
  deleteEntity(args: DeleteEntityCommandInput, cb: (err: any, data?: DeleteEntityCommandOutput) => void): void;
  deleteEntity(
    args: DeleteEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSceneCommand}
   */
  deleteScene(args: DeleteSceneCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSceneCommandOutput>;
  deleteScene(args: DeleteSceneCommandInput, cb: (err: any, data?: DeleteSceneCommandOutput) => void): void;
  deleteScene(
    args: DeleteSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSyncJobCommand}
   */
  deleteSyncJob(args: DeleteSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSyncJobCommandOutput>;
  deleteSyncJob(args: DeleteSyncJobCommandInput, cb: (err: any, data?: DeleteSyncJobCommandOutput) => void): void;
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
  deleteWorkspace(args: DeleteWorkspaceCommandInput, cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void): void;
  deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteQueryCommand}
   */
  executeQuery(args: ExecuteQueryCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteQueryCommandOutput>;
  executeQuery(args: ExecuteQueryCommandInput, cb: (err: any, data?: ExecuteQueryCommandOutput) => void): void;
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
  getEntity(args: GetEntityCommandInput, options?: __HttpHandlerOptions): Promise<GetEntityCommandOutput>;
  getEntity(args: GetEntityCommandInput, cb: (err: any, data?: GetEntityCommandOutput) => void): void;
  getEntity(
    args: GetEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPricingPlanCommand}
   */
  getPricingPlan(
    args: GetPricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPricingPlanCommandOutput>;
  getPricingPlan(args: GetPricingPlanCommandInput, cb: (err: any, data?: GetPricingPlanCommandOutput) => void): void;
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
  getScene(args: GetSceneCommandInput, options?: __HttpHandlerOptions): Promise<GetSceneCommandOutput>;
  getScene(args: GetSceneCommandInput, cb: (err: any, data?: GetSceneCommandOutput) => void): void;
  getScene(
    args: GetSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSceneCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSyncJobCommand}
   */
  getSyncJob(args: GetSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<GetSyncJobCommandOutput>;
  getSyncJob(args: GetSyncJobCommandInput, cb: (err: any, data?: GetSyncJobCommandOutput) => void): void;
  getSyncJob(
    args: GetSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSyncJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkspaceCommand}
   */
  getWorkspace(args: GetWorkspaceCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkspaceCommandOutput>;
  getWorkspace(args: GetWorkspaceCommandInput, cb: (err: any, data?: GetWorkspaceCommandOutput) => void): void;
  getWorkspace(
    args: GetWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkspaceCommandOutput) => void
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
  listEntities(args: ListEntitiesCommandInput, options?: __HttpHandlerOptions): Promise<ListEntitiesCommandOutput>;
  listEntities(args: ListEntitiesCommandInput, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
  listEntities(
    args: ListEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScenesCommand}
   */
  listScenes(args: ListScenesCommandInput, options?: __HttpHandlerOptions): Promise<ListScenesCommandOutput>;
  listScenes(args: ListScenesCommandInput, cb: (err: any, data?: ListScenesCommandOutput) => void): void;
  listScenes(
    args: ListScenesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScenesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSyncJobsCommand}
   */
  listSyncJobs(args: ListSyncJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListSyncJobsCommandOutput>;
  listSyncJobs(args: ListSyncJobsCommandInput, cb: (err: any, data?: ListSyncJobsCommandOutput) => void): void;
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
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  listWorkspaces(args: ListWorkspacesCommandInput, cb: (err: any, data?: ListWorkspacesCommandOutput) => void): void;
  listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
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
  updateEntity(args: UpdateEntityCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEntityCommandOutput>;
  updateEntity(args: UpdateEntityCommandInput, cb: (err: any, data?: UpdateEntityCommandOutput) => void): void;
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
  updateScene(args: UpdateSceneCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSceneCommandOutput>;
  updateScene(args: UpdateSceneCommandInput, cb: (err: any, data?: UpdateSceneCommandOutput) => void): void;
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
  updateWorkspace(args: UpdateWorkspaceCommandInput, cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void): void;
  updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>IoT TwinMaker is a service with which you
 *          can
 *          build operational digital twins of physical systems. IoT TwinMaker overlays measurements
 *          and analysis from real-world sensors, cameras, and enterprise applications so you can
 *          create data visualizations to monitor your physical factory, building, or industrial plant.
 *          You can use this real-world data to monitor operations and diagnose and repair
 *          errors.</p>
 */
export class IoTTwinMaker extends IoTTwinMakerClient implements IoTTwinMaker {}
createAggregatedClient(commands, IoTTwinMaker);
