// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateBillOfMaterialsImportJobCommand,
  CreateBillOfMaterialsImportJobCommandInput,
  CreateBillOfMaterialsImportJobCommandOutput,
} from "./commands/CreateBillOfMaterialsImportJobCommand";
import {
  CreateDataIntegrationFlowCommand,
  CreateDataIntegrationFlowCommandInput,
  CreateDataIntegrationFlowCommandOutput,
} from "./commands/CreateDataIntegrationFlowCommand";
import {
  CreateDataLakeDatasetCommand,
  CreateDataLakeDatasetCommandInput,
  CreateDataLakeDatasetCommandOutput,
} from "./commands/CreateDataLakeDatasetCommand";
import {
  CreateInstanceCommand,
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
} from "./commands/CreateInstanceCommand";
import {
  DeleteDataIntegrationFlowCommand,
  DeleteDataIntegrationFlowCommandInput,
  DeleteDataIntegrationFlowCommandOutput,
} from "./commands/DeleteDataIntegrationFlowCommand";
import {
  DeleteDataLakeDatasetCommand,
  DeleteDataLakeDatasetCommandInput,
  DeleteDataLakeDatasetCommandOutput,
} from "./commands/DeleteDataLakeDatasetCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
import {
  GetBillOfMaterialsImportJobCommand,
  GetBillOfMaterialsImportJobCommandInput,
  GetBillOfMaterialsImportJobCommandOutput,
} from "./commands/GetBillOfMaterialsImportJobCommand";
import {
  GetDataIntegrationFlowCommand,
  GetDataIntegrationFlowCommandInput,
  GetDataIntegrationFlowCommandOutput,
} from "./commands/GetDataIntegrationFlowCommand";
import {
  GetDataLakeDatasetCommand,
  GetDataLakeDatasetCommandInput,
  GetDataLakeDatasetCommandOutput,
} from "./commands/GetDataLakeDatasetCommand";
import { GetInstanceCommand, GetInstanceCommandInput, GetInstanceCommandOutput } from "./commands/GetInstanceCommand";
import {
  ListDataIntegrationFlowsCommand,
  ListDataIntegrationFlowsCommandInput,
  ListDataIntegrationFlowsCommandOutput,
} from "./commands/ListDataIntegrationFlowsCommand";
import {
  ListDataLakeDatasetsCommand,
  ListDataLakeDatasetsCommandInput,
  ListDataLakeDatasetsCommandOutput,
} from "./commands/ListDataLakeDatasetsCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SendDataIntegrationEventCommand,
  SendDataIntegrationEventCommandInput,
  SendDataIntegrationEventCommandOutput,
} from "./commands/SendDataIntegrationEventCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDataIntegrationFlowCommand,
  UpdateDataIntegrationFlowCommandInput,
  UpdateDataIntegrationFlowCommandOutput,
} from "./commands/UpdateDataIntegrationFlowCommand";
import {
  UpdateDataLakeDatasetCommand,
  UpdateDataLakeDatasetCommandInput,
  UpdateDataLakeDatasetCommandOutput,
} from "./commands/UpdateDataLakeDatasetCommand";
import {
  UpdateInstanceCommand,
  UpdateInstanceCommandInput,
  UpdateInstanceCommandOutput,
} from "./commands/UpdateInstanceCommand";
import { SupplyChainClient, SupplyChainClientConfig } from "./SupplyChainClient";

const commands = {
  CreateBillOfMaterialsImportJobCommand,
  CreateDataIntegrationFlowCommand,
  CreateDataLakeDatasetCommand,
  CreateInstanceCommand,
  DeleteDataIntegrationFlowCommand,
  DeleteDataLakeDatasetCommand,
  DeleteInstanceCommand,
  GetBillOfMaterialsImportJobCommand,
  GetDataIntegrationFlowCommand,
  GetDataLakeDatasetCommand,
  GetInstanceCommand,
  ListDataIntegrationFlowsCommand,
  ListDataLakeDatasetsCommand,
  ListInstancesCommand,
  ListTagsForResourceCommand,
  SendDataIntegrationEventCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDataIntegrationFlowCommand,
  UpdateDataLakeDatasetCommand,
  UpdateInstanceCommand,
};

export interface SupplyChain {
  /**
   * @see {@link CreateBillOfMaterialsImportJobCommand}
   */
  createBillOfMaterialsImportJob(
    args: CreateBillOfMaterialsImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillOfMaterialsImportJobCommandOutput>;
  createBillOfMaterialsImportJob(
    args: CreateBillOfMaterialsImportJobCommandInput,
    cb: (err: any, data?: CreateBillOfMaterialsImportJobCommandOutput) => void
  ): void;
  createBillOfMaterialsImportJob(
    args: CreateBillOfMaterialsImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillOfMaterialsImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataIntegrationFlowCommand}
   */
  createDataIntegrationFlow(
    args: CreateDataIntegrationFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataIntegrationFlowCommandOutput>;
  createDataIntegrationFlow(
    args: CreateDataIntegrationFlowCommandInput,
    cb: (err: any, data?: CreateDataIntegrationFlowCommandOutput) => void
  ): void;
  createDataIntegrationFlow(
    args: CreateDataIntegrationFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataIntegrationFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataLakeDatasetCommand}
   */
  createDataLakeDataset(
    args: CreateDataLakeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataLakeDatasetCommandOutput>;
  createDataLakeDataset(
    args: CreateDataLakeDatasetCommandInput,
    cb: (err: any, data?: CreateDataLakeDatasetCommandOutput) => void
  ): void;
  createDataLakeDataset(
    args: CreateDataLakeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataLakeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceCommand}
   */
  createInstance(): Promise<CreateInstanceCommandOutput>;
  createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  createInstance(args: CreateInstanceCommandInput, cb: (err: any, data?: CreateInstanceCommandOutput) => void): void;
  createInstance(
    args: CreateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataIntegrationFlowCommand}
   */
  deleteDataIntegrationFlow(
    args: DeleteDataIntegrationFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataIntegrationFlowCommandOutput>;
  deleteDataIntegrationFlow(
    args: DeleteDataIntegrationFlowCommandInput,
    cb: (err: any, data?: DeleteDataIntegrationFlowCommandOutput) => void
  ): void;
  deleteDataIntegrationFlow(
    args: DeleteDataIntegrationFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataIntegrationFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataLakeDatasetCommand}
   */
  deleteDataLakeDataset(
    args: DeleteDataLakeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataLakeDatasetCommandOutput>;
  deleteDataLakeDataset(
    args: DeleteDataLakeDatasetCommandInput,
    cb: (err: any, data?: DeleteDataLakeDatasetCommandOutput) => void
  ): void;
  deleteDataLakeDataset(
    args: DeleteDataLakeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataLakeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceCommand}
   */
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  deleteInstance(args: DeleteInstanceCommandInput, cb: (err: any, data?: DeleteInstanceCommandOutput) => void): void;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillOfMaterialsImportJobCommand}
   */
  getBillOfMaterialsImportJob(
    args: GetBillOfMaterialsImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillOfMaterialsImportJobCommandOutput>;
  getBillOfMaterialsImportJob(
    args: GetBillOfMaterialsImportJobCommandInput,
    cb: (err: any, data?: GetBillOfMaterialsImportJobCommandOutput) => void
  ): void;
  getBillOfMaterialsImportJob(
    args: GetBillOfMaterialsImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillOfMaterialsImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataIntegrationFlowCommand}
   */
  getDataIntegrationFlow(
    args: GetDataIntegrationFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataIntegrationFlowCommandOutput>;
  getDataIntegrationFlow(
    args: GetDataIntegrationFlowCommandInput,
    cb: (err: any, data?: GetDataIntegrationFlowCommandOutput) => void
  ): void;
  getDataIntegrationFlow(
    args: GetDataIntegrationFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataIntegrationFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataLakeDatasetCommand}
   */
  getDataLakeDataset(
    args: GetDataLakeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataLakeDatasetCommandOutput>;
  getDataLakeDataset(
    args: GetDataLakeDatasetCommandInput,
    cb: (err: any, data?: GetDataLakeDatasetCommandOutput) => void
  ): void;
  getDataLakeDataset(
    args: GetDataLakeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataLakeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInstanceCommand}
   */
  getInstance(args: GetInstanceCommandInput, options?: __HttpHandlerOptions): Promise<GetInstanceCommandOutput>;
  getInstance(args: GetInstanceCommandInput, cb: (err: any, data?: GetInstanceCommandOutput) => void): void;
  getInstance(
    args: GetInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataIntegrationFlowsCommand}
   */
  listDataIntegrationFlows(
    args: ListDataIntegrationFlowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataIntegrationFlowsCommandOutput>;
  listDataIntegrationFlows(
    args: ListDataIntegrationFlowsCommandInput,
    cb: (err: any, data?: ListDataIntegrationFlowsCommandOutput) => void
  ): void;
  listDataIntegrationFlows(
    args: ListDataIntegrationFlowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataIntegrationFlowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataLakeDatasetsCommand}
   */
  listDataLakeDatasets(
    args: ListDataLakeDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataLakeDatasetsCommandOutput>;
  listDataLakeDatasets(
    args: ListDataLakeDatasetsCommandInput,
    cb: (err: any, data?: ListDataLakeDatasetsCommandOutput) => void
  ): void;
  listDataLakeDatasets(
    args: ListDataLakeDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataLakeDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
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
   * @see {@link SendDataIntegrationEventCommand}
   */
  sendDataIntegrationEvent(
    args: SendDataIntegrationEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataIntegrationEventCommandOutput>;
  sendDataIntegrationEvent(
    args: SendDataIntegrationEventCommandInput,
    cb: (err: any, data?: SendDataIntegrationEventCommandOutput) => void
  ): void;
  sendDataIntegrationEvent(
    args: SendDataIntegrationEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataIntegrationEventCommandOutput) => void
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
   * @see {@link UpdateDataIntegrationFlowCommand}
   */
  updateDataIntegrationFlow(
    args: UpdateDataIntegrationFlowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataIntegrationFlowCommandOutput>;
  updateDataIntegrationFlow(
    args: UpdateDataIntegrationFlowCommandInput,
    cb: (err: any, data?: UpdateDataIntegrationFlowCommandOutput) => void
  ): void;
  updateDataIntegrationFlow(
    args: UpdateDataIntegrationFlowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataIntegrationFlowCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataLakeDatasetCommand}
   */
  updateDataLakeDataset(
    args: UpdateDataLakeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataLakeDatasetCommandOutput>;
  updateDataLakeDataset(
    args: UpdateDataLakeDatasetCommandInput,
    cb: (err: any, data?: UpdateDataLakeDatasetCommandOutput) => void
  ): void;
  updateDataLakeDataset(
    args: UpdateDataLakeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataLakeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceCommand}
   */
  updateInstance(
    args: UpdateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceCommandOutput>;
  updateInstance(args: UpdateInstanceCommandInput, cb: (err: any, data?: UpdateInstanceCommandOutput) => void): void;
  updateInstance(
    args: UpdateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceCommandOutput) => void
  ): void;
}

/**
 * <p>
 *             AWS Supply Chain is a cloud-based application that works with your enterprise resource planning (ERP) and supply chain management systems. Using AWS Supply Chain, you can connect and extract your inventory, supply, and demand related data from existing ERP or supply chain systems into a single data model.
 *         </p>
 *          <p>The AWS Supply Chain API supports configuration data import for Supply Planning.</p>
 *          <p>
 *             All AWS Supply chain API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies.
 *         </p>
 * @public
 */
export class SupplyChain extends SupplyChainClient implements SupplyChain {}
createAggregatedClient(commands, SupplyChain);
