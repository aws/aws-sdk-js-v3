// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { IoTTwinMakerClient } from "./IoTTwinMakerClient";

/**
 * <p>IoT TwinMaker is a service that enables you to build operational digital twins of
 *          physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors,
 *          cameras, and enterprise applications so you can create data visualizations to monitor your
 *          physical factory, building, or industrial plant. You can use this real-world data to
 *          monitor operations and diagnose and repair errors.</p>
 */
export class IoTTwinMaker extends IoTTwinMakerClient {
  /**
   * <p>Sets values for multiple time series properties.</p>
   */
  public batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutPropertyValuesCommandOutput>;
  public batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    cb: (err: any, data?: BatchPutPropertyValuesCommandOutput) => void
  ): void;
  public batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutPropertyValuesCommandOutput) => void
  ): void;
  public batchPutPropertyValues(
    args: BatchPutPropertyValuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutPropertyValuesCommandOutput) => void),
    cb?: (err: any, data?: BatchPutPropertyValuesCommandOutput) => void
  ): Promise<BatchPutPropertyValuesCommandOutput> | void {
    const command = new BatchPutPropertyValuesCommand(args);
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
   * <p>Creates a component type.</p>
   */
  public createComponentType(
    args: CreateComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentTypeCommandOutput>;
  public createComponentType(
    args: CreateComponentTypeCommandInput,
    cb: (err: any, data?: CreateComponentTypeCommandOutput) => void
  ): void;
  public createComponentType(
    args: CreateComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentTypeCommandOutput) => void
  ): void;
  public createComponentType(
    args: CreateComponentTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateComponentTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateComponentTypeCommandOutput) => void
  ): Promise<CreateComponentTypeCommandOutput> | void {
    const command = new CreateComponentTypeCommand(args);
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
   * <p>Creates an entity.</p>
   */
  public createEntity(
    args: CreateEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntityCommandOutput>;
  public createEntity(args: CreateEntityCommandInput, cb: (err: any, data?: CreateEntityCommandOutput) => void): void;
  public createEntity(
    args: CreateEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntityCommandOutput) => void
  ): void;
  public createEntity(
    args: CreateEntityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEntityCommandOutput) => void),
    cb?: (err: any, data?: CreateEntityCommandOutput) => void
  ): Promise<CreateEntityCommandOutput> | void {
    const command = new CreateEntityCommand(args);
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
   * <p>Creates a scene.</p>
   */
  public createScene(args: CreateSceneCommandInput, options?: __HttpHandlerOptions): Promise<CreateSceneCommandOutput>;
  public createScene(args: CreateSceneCommandInput, cb: (err: any, data?: CreateSceneCommandOutput) => void): void;
  public createScene(
    args: CreateSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSceneCommandOutput) => void
  ): void;
  public createScene(
    args: CreateSceneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSceneCommandOutput) => void),
    cb?: (err: any, data?: CreateSceneCommandOutput) => void
  ): Promise<CreateSceneCommandOutput> | void {
    const command = new CreateSceneCommand(args);
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
   * <p>This action creates a SyncJob.</p>
   */
  public createSyncJob(
    args: CreateSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSyncJobCommandOutput>;
  public createSyncJob(
    args: CreateSyncJobCommandInput,
    cb: (err: any, data?: CreateSyncJobCommandOutput) => void
  ): void;
  public createSyncJob(
    args: CreateSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSyncJobCommandOutput) => void
  ): void;
  public createSyncJob(
    args: CreateSyncJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSyncJobCommandOutput) => void),
    cb?: (err: any, data?: CreateSyncJobCommandOutput) => void
  ): Promise<CreateSyncJobCommandOutput> | void {
    const command = new CreateSyncJobCommand(args);
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
   * <p>Creates a workplace.</p>
   */
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceCommandOutput>;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): void;
  public createWorkspace(
    args: CreateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkspaceCommandOutput) => void
  ): Promise<CreateWorkspaceCommandOutput> | void {
    const command = new CreateWorkspaceCommand(args);
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
   * <p>Deletes a component type.</p>
   */
  public deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentTypeCommandOutput>;
  public deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    cb: (err: any, data?: DeleteComponentTypeCommandOutput) => void
  ): void;
  public deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentTypeCommandOutput) => void
  ): void;
  public deleteComponentType(
    args: DeleteComponentTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteComponentTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteComponentTypeCommandOutput) => void
  ): Promise<DeleteComponentTypeCommandOutput> | void {
    const command = new DeleteComponentTypeCommand(args);
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
   * <p>Deletes an entity.</p>
   */
  public deleteEntity(
    args: DeleteEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntityCommandOutput>;
  public deleteEntity(args: DeleteEntityCommandInput, cb: (err: any, data?: DeleteEntityCommandOutput) => void): void;
  public deleteEntity(
    args: DeleteEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntityCommandOutput) => void
  ): void;
  public deleteEntity(
    args: DeleteEntityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEntityCommandOutput) => void),
    cb?: (err: any, data?: DeleteEntityCommandOutput) => void
  ): Promise<DeleteEntityCommandOutput> | void {
    const command = new DeleteEntityCommand(args);
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
   * <p>Deletes a scene.</p>
   */
  public deleteScene(args: DeleteSceneCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSceneCommandOutput>;
  public deleteScene(args: DeleteSceneCommandInput, cb: (err: any, data?: DeleteSceneCommandOutput) => void): void;
  public deleteScene(
    args: DeleteSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSceneCommandOutput) => void
  ): void;
  public deleteScene(
    args: DeleteSceneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSceneCommandOutput) => void),
    cb?: (err: any, data?: DeleteSceneCommandOutput) => void
  ): Promise<DeleteSceneCommandOutput> | void {
    const command = new DeleteSceneCommand(args);
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
   * <p>Delete the SyncJob.</p>
   */
  public deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSyncJobCommandOutput>;
  public deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    cb: (err: any, data?: DeleteSyncJobCommandOutput) => void
  ): void;
  public deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSyncJobCommandOutput) => void
  ): void;
  public deleteSyncJob(
    args: DeleteSyncJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSyncJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteSyncJobCommandOutput) => void
  ): Promise<DeleteSyncJobCommandOutput> | void {
    const command = new DeleteSyncJobCommand(args);
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
   * <p>Deletes a workspace.</p>
   */
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceCommandOutput>;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): void;
  public deleteWorkspace(
    args: DeleteWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkspaceCommandOutput) => void
  ): Promise<DeleteWorkspaceCommandOutput> | void {
    const command = new DeleteWorkspaceCommand(args);
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
   * <p>Run queries to access information from your knowledge graph of entities within individual workspaces.</p>
   */
  public executeQuery(
    args: ExecuteQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteQueryCommandOutput>;
  public executeQuery(args: ExecuteQueryCommandInput, cb: (err: any, data?: ExecuteQueryCommandOutput) => void): void;
  public executeQuery(
    args: ExecuteQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;
  public executeQuery(
    args: ExecuteQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteQueryCommandOutput) => void),
    cb?: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): Promise<ExecuteQueryCommandOutput> | void {
    const command = new ExecuteQueryCommand(args);
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
   * <p>Retrieves information about a component type.</p>
   */
  public getComponentType(
    args: GetComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentTypeCommandOutput>;
  public getComponentType(
    args: GetComponentTypeCommandInput,
    cb: (err: any, data?: GetComponentTypeCommandOutput) => void
  ): void;
  public getComponentType(
    args: GetComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentTypeCommandOutput) => void
  ): void;
  public getComponentType(
    args: GetComponentTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComponentTypeCommandOutput) => void),
    cb?: (err: any, data?: GetComponentTypeCommandOutput) => void
  ): Promise<GetComponentTypeCommandOutput> | void {
    const command = new GetComponentTypeCommand(args);
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
   * <p>Retrieves information about an entity.</p>
   */
  public getEntity(args: GetEntityCommandInput, options?: __HttpHandlerOptions): Promise<GetEntityCommandOutput>;
  public getEntity(args: GetEntityCommandInput, cb: (err: any, data?: GetEntityCommandOutput) => void): void;
  public getEntity(
    args: GetEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEntityCommandOutput) => void
  ): void;
  public getEntity(
    args: GetEntityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEntityCommandOutput) => void),
    cb?: (err: any, data?: GetEntityCommandOutput) => void
  ): Promise<GetEntityCommandOutput> | void {
    const command = new GetEntityCommand(args);
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
   * <p>Gets the pricing plan.</p>
   */
  public getPricingPlan(
    args: GetPricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPricingPlanCommandOutput>;
  public getPricingPlan(
    args: GetPricingPlanCommandInput,
    cb: (err: any, data?: GetPricingPlanCommandOutput) => void
  ): void;
  public getPricingPlan(
    args: GetPricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPricingPlanCommandOutput) => void
  ): void;
  public getPricingPlan(
    args: GetPricingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPricingPlanCommandOutput) => void),
    cb?: (err: any, data?: GetPricingPlanCommandOutput) => void
  ): Promise<GetPricingPlanCommandOutput> | void {
    const command = new GetPricingPlanCommand(args);
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
   * <p>Gets the property values for a component, component type, entity, or workspace.</p>
   *          <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
   */
  public getPropertyValue(
    args: GetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPropertyValueCommandOutput>;
  public getPropertyValue(
    args: GetPropertyValueCommandInput,
    cb: (err: any, data?: GetPropertyValueCommandOutput) => void
  ): void;
  public getPropertyValue(
    args: GetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPropertyValueCommandOutput) => void
  ): void;
  public getPropertyValue(
    args: GetPropertyValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPropertyValueCommandOutput) => void),
    cb?: (err: any, data?: GetPropertyValueCommandOutput) => void
  ): Promise<GetPropertyValueCommandOutput> | void {
    const command = new GetPropertyValueCommand(args);
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
   * <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p>
   *          <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and
   *         <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
   */
  public getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPropertyValueHistoryCommandOutput>;
  public getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    cb: (err: any, data?: GetPropertyValueHistoryCommandOutput) => void
  ): void;
  public getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPropertyValueHistoryCommandOutput) => void
  ): void;
  public getPropertyValueHistory(
    args: GetPropertyValueHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPropertyValueHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetPropertyValueHistoryCommandOutput) => void
  ): Promise<GetPropertyValueHistoryCommandOutput> | void {
    const command = new GetPropertyValueHistoryCommand(args);
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
   * <p>Retrieves information about a scene.</p>
   */
  public getScene(args: GetSceneCommandInput, options?: __HttpHandlerOptions): Promise<GetSceneCommandOutput>;
  public getScene(args: GetSceneCommandInput, cb: (err: any, data?: GetSceneCommandOutput) => void): void;
  public getScene(
    args: GetSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSceneCommandOutput) => void
  ): void;
  public getScene(
    args: GetSceneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSceneCommandOutput) => void),
    cb?: (err: any, data?: GetSceneCommandOutput) => void
  ): Promise<GetSceneCommandOutput> | void {
    const command = new GetSceneCommand(args);
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
   * <p>Gets the SyncJob.</p>
   */
  public getSyncJob(args: GetSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<GetSyncJobCommandOutput>;
  public getSyncJob(args: GetSyncJobCommandInput, cb: (err: any, data?: GetSyncJobCommandOutput) => void): void;
  public getSyncJob(
    args: GetSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSyncJobCommandOutput) => void
  ): void;
  public getSyncJob(
    args: GetSyncJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSyncJobCommandOutput) => void),
    cb?: (err: any, data?: GetSyncJobCommandOutput) => void
  ): Promise<GetSyncJobCommandOutput> | void {
    const command = new GetSyncJobCommand(args);
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
   * <p>Retrieves information about a workspace.</p>
   */
  public getWorkspace(
    args: GetWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkspaceCommandOutput>;
  public getWorkspace(args: GetWorkspaceCommandInput, cb: (err: any, data?: GetWorkspaceCommandOutput) => void): void;
  public getWorkspace(
    args: GetWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkspaceCommandOutput) => void
  ): void;
  public getWorkspace(
    args: GetWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: GetWorkspaceCommandOutput) => void
  ): Promise<GetWorkspaceCommandOutput> | void {
    const command = new GetWorkspaceCommand(args);
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
   * <p>Lists all component types in a workspace.</p>
   */
  public listComponentTypes(
    args: ListComponentTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentTypesCommandOutput>;
  public listComponentTypes(
    args: ListComponentTypesCommandInput,
    cb: (err: any, data?: ListComponentTypesCommandOutput) => void
  ): void;
  public listComponentTypes(
    args: ListComponentTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentTypesCommandOutput) => void
  ): void;
  public listComponentTypes(
    args: ListComponentTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComponentTypesCommandOutput) => void),
    cb?: (err: any, data?: ListComponentTypesCommandOutput) => void
  ): Promise<ListComponentTypesCommandOutput> | void {
    const command = new ListComponentTypesCommand(args);
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
   * <p>Lists all entities in a workspace.</p>
   */
  public listEntities(
    args: ListEntitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEntitiesCommandOutput>;
  public listEntities(args: ListEntitiesCommandInput, cb: (err: any, data?: ListEntitiesCommandOutput) => void): void;
  public listEntities(
    args: ListEntitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEntitiesCommandOutput) => void
  ): void;
  public listEntities(
    args: ListEntitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEntitiesCommandOutput) => void),
    cb?: (err: any, data?: ListEntitiesCommandOutput) => void
  ): Promise<ListEntitiesCommandOutput> | void {
    const command = new ListEntitiesCommand(args);
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
   * <p>Lists all scenes in a workspace.</p>
   */
  public listScenes(args: ListScenesCommandInput, options?: __HttpHandlerOptions): Promise<ListScenesCommandOutput>;
  public listScenes(args: ListScenesCommandInput, cb: (err: any, data?: ListScenesCommandOutput) => void): void;
  public listScenes(
    args: ListScenesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScenesCommandOutput) => void
  ): void;
  public listScenes(
    args: ListScenesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListScenesCommandOutput) => void),
    cb?: (err: any, data?: ListScenesCommandOutput) => void
  ): Promise<ListScenesCommandOutput> | void {
    const command = new ListScenesCommand(args);
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
   * <p>List all SyncJobs.</p>
   */
  public listSyncJobs(
    args: ListSyncJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSyncJobsCommandOutput>;
  public listSyncJobs(args: ListSyncJobsCommandInput, cb: (err: any, data?: ListSyncJobsCommandOutput) => void): void;
  public listSyncJobs(
    args: ListSyncJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSyncJobsCommandOutput) => void
  ): void;
  public listSyncJobs(
    args: ListSyncJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSyncJobsCommandOutput) => void),
    cb?: (err: any, data?: ListSyncJobsCommandOutput) => void
  ): Promise<ListSyncJobsCommandOutput> | void {
    const command = new ListSyncJobsCommand(args);
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
   * <p>Lists the sync resources.</p>
   */
  public listSyncResources(
    args: ListSyncResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSyncResourcesCommandOutput>;
  public listSyncResources(
    args: ListSyncResourcesCommandInput,
    cb: (err: any, data?: ListSyncResourcesCommandOutput) => void
  ): void;
  public listSyncResources(
    args: ListSyncResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSyncResourcesCommandOutput) => void
  ): void;
  public listSyncResources(
    args: ListSyncResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSyncResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListSyncResourcesCommandOutput) => void
  ): Promise<ListSyncResourcesCommandOutput> | void {
    const command = new ListSyncResourcesCommand(args);
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
   * <p>Lists all tags associated with a resource.</p>
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
   * <p>Retrieves information about workspaces in the current account.</p>
   */
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspacesCommandOutput>;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): void;
  public listWorkspaces(
    args: ListWorkspacesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: ListWorkspacesCommandOutput) => void
  ): Promise<ListWorkspacesCommandOutput> | void {
    const command = new ListWorkspacesCommand(args);
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
   * <p>Removes tags from a resource.</p>
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
   * <p>Updates information in a component type.</p>
   */
  public updateComponentType(
    args: UpdateComponentTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComponentTypeCommandOutput>;
  public updateComponentType(
    args: UpdateComponentTypeCommandInput,
    cb: (err: any, data?: UpdateComponentTypeCommandOutput) => void
  ): void;
  public updateComponentType(
    args: UpdateComponentTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComponentTypeCommandOutput) => void
  ): void;
  public updateComponentType(
    args: UpdateComponentTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateComponentTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateComponentTypeCommandOutput) => void
  ): Promise<UpdateComponentTypeCommandOutput> | void {
    const command = new UpdateComponentTypeCommand(args);
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
   * <p>Updates an entity.</p>
   */
  public updateEntity(
    args: UpdateEntityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEntityCommandOutput>;
  public updateEntity(args: UpdateEntityCommandInput, cb: (err: any, data?: UpdateEntityCommandOutput) => void): void;
  public updateEntity(
    args: UpdateEntityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEntityCommandOutput) => void
  ): void;
  public updateEntity(
    args: UpdateEntityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEntityCommandOutput) => void),
    cb?: (err: any, data?: UpdateEntityCommandOutput) => void
  ): Promise<UpdateEntityCommandOutput> | void {
    const command = new UpdateEntityCommand(args);
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
   * <p>Update the pricing plan.</p>
   */
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePricingPlanCommandOutput>;
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): void;
  public updatePricingPlan(
    args: UpdatePricingPlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePricingPlanCommandOutput) => void),
    cb?: (err: any, data?: UpdatePricingPlanCommandOutput) => void
  ): Promise<UpdatePricingPlanCommandOutput> | void {
    const command = new UpdatePricingPlanCommand(args);
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
   * <p>Updates a scene.</p>
   */
  public updateScene(args: UpdateSceneCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSceneCommandOutput>;
  public updateScene(args: UpdateSceneCommandInput, cb: (err: any, data?: UpdateSceneCommandOutput) => void): void;
  public updateScene(
    args: UpdateSceneCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSceneCommandOutput) => void
  ): void;
  public updateScene(
    args: UpdateSceneCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSceneCommandOutput) => void),
    cb?: (err: any, data?: UpdateSceneCommandOutput) => void
  ): Promise<UpdateSceneCommandOutput> | void {
    const command = new UpdateSceneCommand(args);
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
   * <p>Updates a workspace.</p>
   */
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceCommandOutput>;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): void;
  public updateWorkspace(
    args: UpdateWorkspaceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkspaceCommandOutput) => void
  ): Promise<UpdateWorkspaceCommandOutput> | void {
    const command = new UpdateWorkspaceCommand(args);
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
