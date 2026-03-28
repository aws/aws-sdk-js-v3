// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BCMPricingCalculatorClient } from "./BCMPricingCalculatorClient";
import {
  type BatchCreateBillScenarioCommitmentModificationCommandInput,
  type BatchCreateBillScenarioCommitmentModificationCommandOutput,
  BatchCreateBillScenarioCommitmentModificationCommand,
} from "./commands/BatchCreateBillScenarioCommitmentModificationCommand";
import {
  type BatchCreateBillScenarioUsageModificationCommandInput,
  type BatchCreateBillScenarioUsageModificationCommandOutput,
  BatchCreateBillScenarioUsageModificationCommand,
} from "./commands/BatchCreateBillScenarioUsageModificationCommand";
import {
  type BatchCreateWorkloadEstimateUsageCommandInput,
  type BatchCreateWorkloadEstimateUsageCommandOutput,
  BatchCreateWorkloadEstimateUsageCommand,
} from "./commands/BatchCreateWorkloadEstimateUsageCommand";
import {
  type BatchDeleteBillScenarioCommitmentModificationCommandInput,
  type BatchDeleteBillScenarioCommitmentModificationCommandOutput,
  BatchDeleteBillScenarioCommitmentModificationCommand,
} from "./commands/BatchDeleteBillScenarioCommitmentModificationCommand";
import {
  type BatchDeleteBillScenarioUsageModificationCommandInput,
  type BatchDeleteBillScenarioUsageModificationCommandOutput,
  BatchDeleteBillScenarioUsageModificationCommand,
} from "./commands/BatchDeleteBillScenarioUsageModificationCommand";
import {
  type BatchDeleteWorkloadEstimateUsageCommandInput,
  type BatchDeleteWorkloadEstimateUsageCommandOutput,
  BatchDeleteWorkloadEstimateUsageCommand,
} from "./commands/BatchDeleteWorkloadEstimateUsageCommand";
import {
  type BatchUpdateBillScenarioCommitmentModificationCommandInput,
  type BatchUpdateBillScenarioCommitmentModificationCommandOutput,
  BatchUpdateBillScenarioCommitmentModificationCommand,
} from "./commands/BatchUpdateBillScenarioCommitmentModificationCommand";
import {
  type BatchUpdateBillScenarioUsageModificationCommandInput,
  type BatchUpdateBillScenarioUsageModificationCommandOutput,
  BatchUpdateBillScenarioUsageModificationCommand,
} from "./commands/BatchUpdateBillScenarioUsageModificationCommand";
import {
  type BatchUpdateWorkloadEstimateUsageCommandInput,
  type BatchUpdateWorkloadEstimateUsageCommandOutput,
  BatchUpdateWorkloadEstimateUsageCommand,
} from "./commands/BatchUpdateWorkloadEstimateUsageCommand";
import {
  type CreateBillEstimateCommandInput,
  type CreateBillEstimateCommandOutput,
  CreateBillEstimateCommand,
} from "./commands/CreateBillEstimateCommand";
import {
  type CreateBillScenarioCommandInput,
  type CreateBillScenarioCommandOutput,
  CreateBillScenarioCommand,
} from "./commands/CreateBillScenarioCommand";
import {
  type CreateWorkloadEstimateCommandInput,
  type CreateWorkloadEstimateCommandOutput,
  CreateWorkloadEstimateCommand,
} from "./commands/CreateWorkloadEstimateCommand";
import {
  type DeleteBillEstimateCommandInput,
  type DeleteBillEstimateCommandOutput,
  DeleteBillEstimateCommand,
} from "./commands/DeleteBillEstimateCommand";
import {
  type DeleteBillScenarioCommandInput,
  type DeleteBillScenarioCommandOutput,
  DeleteBillScenarioCommand,
} from "./commands/DeleteBillScenarioCommand";
import {
  type DeleteWorkloadEstimateCommandInput,
  type DeleteWorkloadEstimateCommandOutput,
  DeleteWorkloadEstimateCommand,
} from "./commands/DeleteWorkloadEstimateCommand";
import {
  type GetBillEstimateCommandInput,
  type GetBillEstimateCommandOutput,
  GetBillEstimateCommand,
} from "./commands/GetBillEstimateCommand";
import {
  type GetBillScenarioCommandInput,
  type GetBillScenarioCommandOutput,
  GetBillScenarioCommand,
} from "./commands/GetBillScenarioCommand";
import {
  type GetPreferencesCommandInput,
  type GetPreferencesCommandOutput,
  GetPreferencesCommand,
} from "./commands/GetPreferencesCommand";
import {
  type GetWorkloadEstimateCommandInput,
  type GetWorkloadEstimateCommandOutput,
  GetWorkloadEstimateCommand,
} from "./commands/GetWorkloadEstimateCommand";
import {
  type ListBillEstimateCommitmentsCommandInput,
  type ListBillEstimateCommitmentsCommandOutput,
  ListBillEstimateCommitmentsCommand,
} from "./commands/ListBillEstimateCommitmentsCommand";
import {
  type ListBillEstimateInputCommitmentModificationsCommandInput,
  type ListBillEstimateInputCommitmentModificationsCommandOutput,
  ListBillEstimateInputCommitmentModificationsCommand,
} from "./commands/ListBillEstimateInputCommitmentModificationsCommand";
import {
  type ListBillEstimateInputUsageModificationsCommandInput,
  type ListBillEstimateInputUsageModificationsCommandOutput,
  ListBillEstimateInputUsageModificationsCommand,
} from "./commands/ListBillEstimateInputUsageModificationsCommand";
import {
  type ListBillEstimateLineItemsCommandInput,
  type ListBillEstimateLineItemsCommandOutput,
  ListBillEstimateLineItemsCommand,
} from "./commands/ListBillEstimateLineItemsCommand";
import {
  type ListBillEstimatesCommandInput,
  type ListBillEstimatesCommandOutput,
  ListBillEstimatesCommand,
} from "./commands/ListBillEstimatesCommand";
import {
  type ListBillScenarioCommitmentModificationsCommandInput,
  type ListBillScenarioCommitmentModificationsCommandOutput,
  ListBillScenarioCommitmentModificationsCommand,
} from "./commands/ListBillScenarioCommitmentModificationsCommand";
import {
  type ListBillScenariosCommandInput,
  type ListBillScenariosCommandOutput,
  ListBillScenariosCommand,
} from "./commands/ListBillScenariosCommand";
import {
  type ListBillScenarioUsageModificationsCommandInput,
  type ListBillScenarioUsageModificationsCommandOutput,
  ListBillScenarioUsageModificationsCommand,
} from "./commands/ListBillScenarioUsageModificationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWorkloadEstimatesCommandInput,
  type ListWorkloadEstimatesCommandOutput,
  ListWorkloadEstimatesCommand,
} from "./commands/ListWorkloadEstimatesCommand";
import {
  type ListWorkloadEstimateUsageCommandInput,
  type ListWorkloadEstimateUsageCommandOutput,
  ListWorkloadEstimateUsageCommand,
} from "./commands/ListWorkloadEstimateUsageCommand";
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
  type UpdateBillEstimateCommandInput,
  type UpdateBillEstimateCommandOutput,
  UpdateBillEstimateCommand,
} from "./commands/UpdateBillEstimateCommand";
import {
  type UpdateBillScenarioCommandInput,
  type UpdateBillScenarioCommandOutput,
  UpdateBillScenarioCommand,
} from "./commands/UpdateBillScenarioCommand";
import {
  type UpdatePreferencesCommandInput,
  type UpdatePreferencesCommandOutput,
  UpdatePreferencesCommand,
} from "./commands/UpdatePreferencesCommand";
import {
  type UpdateWorkloadEstimateCommandInput,
  type UpdateWorkloadEstimateCommandOutput,
  UpdateWorkloadEstimateCommand,
} from "./commands/UpdateWorkloadEstimateCommand";
import { paginateListBillEstimateCommitments } from "./pagination/ListBillEstimateCommitmentsPaginator";
import {
  paginateListBillEstimateInputCommitmentModifications,
} from "./pagination/ListBillEstimateInputCommitmentModificationsPaginator";
import {
  paginateListBillEstimateInputUsageModifications,
} from "./pagination/ListBillEstimateInputUsageModificationsPaginator";
import { paginateListBillEstimateLineItems } from "./pagination/ListBillEstimateLineItemsPaginator";
import { paginateListBillEstimates } from "./pagination/ListBillEstimatesPaginator";
import {
  paginateListBillScenarioCommitmentModifications,
} from "./pagination/ListBillScenarioCommitmentModificationsPaginator";
import { paginateListBillScenarios } from "./pagination/ListBillScenariosPaginator";
import { paginateListBillScenarioUsageModifications } from "./pagination/ListBillScenarioUsageModificationsPaginator";
import { paginateListWorkloadEstimates } from "./pagination/ListWorkloadEstimatesPaginator";
import { paginateListWorkloadEstimateUsage } from "./pagination/ListWorkloadEstimateUsagePaginator";

const commands = {
  BatchCreateBillScenarioCommitmentModificationCommand,
  BatchCreateBillScenarioUsageModificationCommand,
  BatchCreateWorkloadEstimateUsageCommand,
  BatchDeleteBillScenarioCommitmentModificationCommand,
  BatchDeleteBillScenarioUsageModificationCommand,
  BatchDeleteWorkloadEstimateUsageCommand,
  BatchUpdateBillScenarioCommitmentModificationCommand,
  BatchUpdateBillScenarioUsageModificationCommand,
  BatchUpdateWorkloadEstimateUsageCommand,
  CreateBillEstimateCommand,
  CreateBillScenarioCommand,
  CreateWorkloadEstimateCommand,
  DeleteBillEstimateCommand,
  DeleteBillScenarioCommand,
  DeleteWorkloadEstimateCommand,
  GetBillEstimateCommand,
  GetBillScenarioCommand,
  GetPreferencesCommand,
  GetWorkloadEstimateCommand,
  ListBillEstimateCommitmentsCommand,
  ListBillEstimateInputCommitmentModificationsCommand,
  ListBillEstimateInputUsageModificationsCommand,
  ListBillEstimateLineItemsCommand,
  ListBillEstimatesCommand,
  ListBillScenarioCommitmentModificationsCommand,
  ListBillScenariosCommand,
  ListBillScenarioUsageModificationsCommand,
  ListTagsForResourceCommand,
  ListWorkloadEstimatesCommand,
  ListWorkloadEstimateUsageCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBillEstimateCommand,
  UpdateBillScenarioCommand,
  UpdatePreferencesCommand,
  UpdateWorkloadEstimateCommand,
};
const paginators = {
  paginateListBillEstimateCommitments,
  paginateListBillEstimateInputCommitmentModifications,
  paginateListBillEstimateInputUsageModifications,
  paginateListBillEstimateLineItems,
  paginateListBillEstimates,
  paginateListBillScenarioCommitmentModifications,
  paginateListBillScenarios,
  paginateListBillScenarioUsageModifications,
  paginateListWorkloadEstimates,
  paginateListWorkloadEstimateUsage,
};

export interface BCMPricingCalculator {
  /**
   * @see {@link BatchCreateBillScenarioCommitmentModificationCommand}
   */
  batchCreateBillScenarioCommitmentModification(
    args: BatchCreateBillScenarioCommitmentModificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateBillScenarioCommitmentModificationCommandOutput>;
  batchCreateBillScenarioCommitmentModification(
    args: BatchCreateBillScenarioCommitmentModificationCommandInput,
    cb: (err: any, data?: BatchCreateBillScenarioCommitmentModificationCommandOutput) => void
  ): void;
  batchCreateBillScenarioCommitmentModification(
    args: BatchCreateBillScenarioCommitmentModificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateBillScenarioCommitmentModificationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateBillScenarioUsageModificationCommand}
   */
  batchCreateBillScenarioUsageModification(
    args: BatchCreateBillScenarioUsageModificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateBillScenarioUsageModificationCommandOutput>;
  batchCreateBillScenarioUsageModification(
    args: BatchCreateBillScenarioUsageModificationCommandInput,
    cb: (err: any, data?: BatchCreateBillScenarioUsageModificationCommandOutput) => void
  ): void;
  batchCreateBillScenarioUsageModification(
    args: BatchCreateBillScenarioUsageModificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateBillScenarioUsageModificationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchCreateWorkloadEstimateUsageCommand}
   */
  batchCreateWorkloadEstimateUsage(
    args: BatchCreateWorkloadEstimateUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateWorkloadEstimateUsageCommandOutput>;
  batchCreateWorkloadEstimateUsage(
    args: BatchCreateWorkloadEstimateUsageCommandInput,
    cb: (err: any, data?: BatchCreateWorkloadEstimateUsageCommandOutput) => void
  ): void;
  batchCreateWorkloadEstimateUsage(
    args: BatchCreateWorkloadEstimateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateWorkloadEstimateUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteBillScenarioCommitmentModificationCommand}
   */
  batchDeleteBillScenarioCommitmentModification(
    args: BatchDeleteBillScenarioCommitmentModificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteBillScenarioCommitmentModificationCommandOutput>;
  batchDeleteBillScenarioCommitmentModification(
    args: BatchDeleteBillScenarioCommitmentModificationCommandInput,
    cb: (err: any, data?: BatchDeleteBillScenarioCommitmentModificationCommandOutput) => void
  ): void;
  batchDeleteBillScenarioCommitmentModification(
    args: BatchDeleteBillScenarioCommitmentModificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteBillScenarioCommitmentModificationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteBillScenarioUsageModificationCommand}
   */
  batchDeleteBillScenarioUsageModification(
    args: BatchDeleteBillScenarioUsageModificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteBillScenarioUsageModificationCommandOutput>;
  batchDeleteBillScenarioUsageModification(
    args: BatchDeleteBillScenarioUsageModificationCommandInput,
    cb: (err: any, data?: BatchDeleteBillScenarioUsageModificationCommandOutput) => void
  ): void;
  batchDeleteBillScenarioUsageModification(
    args: BatchDeleteBillScenarioUsageModificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteBillScenarioUsageModificationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDeleteWorkloadEstimateUsageCommand}
   */
  batchDeleteWorkloadEstimateUsage(
    args: BatchDeleteWorkloadEstimateUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteWorkloadEstimateUsageCommandOutput>;
  batchDeleteWorkloadEstimateUsage(
    args: BatchDeleteWorkloadEstimateUsageCommandInput,
    cb: (err: any, data?: BatchDeleteWorkloadEstimateUsageCommandOutput) => void
  ): void;
  batchDeleteWorkloadEstimateUsage(
    args: BatchDeleteWorkloadEstimateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteWorkloadEstimateUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateBillScenarioCommitmentModificationCommand}
   */
  batchUpdateBillScenarioCommitmentModification(
    args: BatchUpdateBillScenarioCommitmentModificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateBillScenarioCommitmentModificationCommandOutput>;
  batchUpdateBillScenarioCommitmentModification(
    args: BatchUpdateBillScenarioCommitmentModificationCommandInput,
    cb: (err: any, data?: BatchUpdateBillScenarioCommitmentModificationCommandOutput) => void
  ): void;
  batchUpdateBillScenarioCommitmentModification(
    args: BatchUpdateBillScenarioCommitmentModificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateBillScenarioCommitmentModificationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateBillScenarioUsageModificationCommand}
   */
  batchUpdateBillScenarioUsageModification(
    args: BatchUpdateBillScenarioUsageModificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateBillScenarioUsageModificationCommandOutput>;
  batchUpdateBillScenarioUsageModification(
    args: BatchUpdateBillScenarioUsageModificationCommandInput,
    cb: (err: any, data?: BatchUpdateBillScenarioUsageModificationCommandOutput) => void
  ): void;
  batchUpdateBillScenarioUsageModification(
    args: BatchUpdateBillScenarioUsageModificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateBillScenarioUsageModificationCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchUpdateWorkloadEstimateUsageCommand}
   */
  batchUpdateWorkloadEstimateUsage(
    args: BatchUpdateWorkloadEstimateUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateWorkloadEstimateUsageCommandOutput>;
  batchUpdateWorkloadEstimateUsage(
    args: BatchUpdateWorkloadEstimateUsageCommandInput,
    cb: (err: any, data?: BatchUpdateWorkloadEstimateUsageCommandOutput) => void
  ): void;
  batchUpdateWorkloadEstimateUsage(
    args: BatchUpdateWorkloadEstimateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateWorkloadEstimateUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillEstimateCommand}
   */
  createBillEstimate(
    args: CreateBillEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillEstimateCommandOutput>;
  createBillEstimate(
    args: CreateBillEstimateCommandInput,
    cb: (err: any, data?: CreateBillEstimateCommandOutput) => void
  ): void;
  createBillEstimate(
    args: CreateBillEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBillScenarioCommand}
   */
  createBillScenario(
    args: CreateBillScenarioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBillScenarioCommandOutput>;
  createBillScenario(
    args: CreateBillScenarioCommandInput,
    cb: (err: any, data?: CreateBillScenarioCommandOutput) => void
  ): void;
  createBillScenario(
    args: CreateBillScenarioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBillScenarioCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkloadEstimateCommand}
   */
  createWorkloadEstimate(
    args: CreateWorkloadEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkloadEstimateCommandOutput>;
  createWorkloadEstimate(
    args: CreateWorkloadEstimateCommandInput,
    cb: (err: any, data?: CreateWorkloadEstimateCommandOutput) => void
  ): void;
  createWorkloadEstimate(
    args: CreateWorkloadEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkloadEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillEstimateCommand}
   */
  deleteBillEstimate(
    args: DeleteBillEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillEstimateCommandOutput>;
  deleteBillEstimate(
    args: DeleteBillEstimateCommandInput,
    cb: (err: any, data?: DeleteBillEstimateCommandOutput) => void
  ): void;
  deleteBillEstimate(
    args: DeleteBillEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBillScenarioCommand}
   */
  deleteBillScenario(
    args: DeleteBillScenarioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBillScenarioCommandOutput>;
  deleteBillScenario(
    args: DeleteBillScenarioCommandInput,
    cb: (err: any, data?: DeleteBillScenarioCommandOutput) => void
  ): void;
  deleteBillScenario(
    args: DeleteBillScenarioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBillScenarioCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkloadEstimateCommand}
   */
  deleteWorkloadEstimate(
    args: DeleteWorkloadEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkloadEstimateCommandOutput>;
  deleteWorkloadEstimate(
    args: DeleteWorkloadEstimateCommandInput,
    cb: (err: any, data?: DeleteWorkloadEstimateCommandOutput) => void
  ): void;
  deleteWorkloadEstimate(
    args: DeleteWorkloadEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkloadEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillEstimateCommand}
   */
  getBillEstimate(
    args: GetBillEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillEstimateCommandOutput>;
  getBillEstimate(
    args: GetBillEstimateCommandInput,
    cb: (err: any, data?: GetBillEstimateCommandOutput) => void
  ): void;
  getBillEstimate(
    args: GetBillEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBillScenarioCommand}
   */
  getBillScenario(
    args: GetBillScenarioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBillScenarioCommandOutput>;
  getBillScenario(
    args: GetBillScenarioCommandInput,
    cb: (err: any, data?: GetBillScenarioCommandOutput) => void
  ): void;
  getBillScenario(
    args: GetBillScenarioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBillScenarioCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPreferencesCommand}
   */
  getPreferences(): Promise<GetPreferencesCommandOutput>;
  getPreferences(
    args: GetPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPreferencesCommandOutput>;
  getPreferences(
    args: GetPreferencesCommandInput,
    cb: (err: any, data?: GetPreferencesCommandOutput) => void
  ): void;
  getPreferences(
    args: GetPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkloadEstimateCommand}
   */
  getWorkloadEstimate(
    args: GetWorkloadEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkloadEstimateCommandOutput>;
  getWorkloadEstimate(
    args: GetWorkloadEstimateCommandInput,
    cb: (err: any, data?: GetWorkloadEstimateCommandOutput) => void
  ): void;
  getWorkloadEstimate(
    args: GetWorkloadEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkloadEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillEstimateCommitmentsCommand}
   */
  listBillEstimateCommitments(
    args: ListBillEstimateCommitmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillEstimateCommitmentsCommandOutput>;
  listBillEstimateCommitments(
    args: ListBillEstimateCommitmentsCommandInput,
    cb: (err: any, data?: ListBillEstimateCommitmentsCommandOutput) => void
  ): void;
  listBillEstimateCommitments(
    args: ListBillEstimateCommitmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillEstimateCommitmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillEstimateInputCommitmentModificationsCommand}
   */
  listBillEstimateInputCommitmentModifications(
    args: ListBillEstimateInputCommitmentModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillEstimateInputCommitmentModificationsCommandOutput>;
  listBillEstimateInputCommitmentModifications(
    args: ListBillEstimateInputCommitmentModificationsCommandInput,
    cb: (err: any, data?: ListBillEstimateInputCommitmentModificationsCommandOutput) => void
  ): void;
  listBillEstimateInputCommitmentModifications(
    args: ListBillEstimateInputCommitmentModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillEstimateInputCommitmentModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillEstimateInputUsageModificationsCommand}
   */
  listBillEstimateInputUsageModifications(
    args: ListBillEstimateInputUsageModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillEstimateInputUsageModificationsCommandOutput>;
  listBillEstimateInputUsageModifications(
    args: ListBillEstimateInputUsageModificationsCommandInput,
    cb: (err: any, data?: ListBillEstimateInputUsageModificationsCommandOutput) => void
  ): void;
  listBillEstimateInputUsageModifications(
    args: ListBillEstimateInputUsageModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillEstimateInputUsageModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillEstimateLineItemsCommand}
   */
  listBillEstimateLineItems(
    args: ListBillEstimateLineItemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillEstimateLineItemsCommandOutput>;
  listBillEstimateLineItems(
    args: ListBillEstimateLineItemsCommandInput,
    cb: (err: any, data?: ListBillEstimateLineItemsCommandOutput) => void
  ): void;
  listBillEstimateLineItems(
    args: ListBillEstimateLineItemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillEstimateLineItemsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillEstimatesCommand}
   */
  listBillEstimates(): Promise<ListBillEstimatesCommandOutput>;
  listBillEstimates(
    args: ListBillEstimatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillEstimatesCommandOutput>;
  listBillEstimates(
    args: ListBillEstimatesCommandInput,
    cb: (err: any, data?: ListBillEstimatesCommandOutput) => void
  ): void;
  listBillEstimates(
    args: ListBillEstimatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillEstimatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillScenarioCommitmentModificationsCommand}
   */
  listBillScenarioCommitmentModifications(
    args: ListBillScenarioCommitmentModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillScenarioCommitmentModificationsCommandOutput>;
  listBillScenarioCommitmentModifications(
    args: ListBillScenarioCommitmentModificationsCommandInput,
    cb: (err: any, data?: ListBillScenarioCommitmentModificationsCommandOutput) => void
  ): void;
  listBillScenarioCommitmentModifications(
    args: ListBillScenarioCommitmentModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillScenarioCommitmentModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillScenariosCommand}
   */
  listBillScenarios(): Promise<ListBillScenariosCommandOutput>;
  listBillScenarios(
    args: ListBillScenariosCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillScenariosCommandOutput>;
  listBillScenarios(
    args: ListBillScenariosCommandInput,
    cb: (err: any, data?: ListBillScenariosCommandOutput) => void
  ): void;
  listBillScenarios(
    args: ListBillScenariosCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillScenariosCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillScenarioUsageModificationsCommand}
   */
  listBillScenarioUsageModifications(
    args: ListBillScenarioUsageModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBillScenarioUsageModificationsCommandOutput>;
  listBillScenarioUsageModifications(
    args: ListBillScenarioUsageModificationsCommandInput,
    cb: (err: any, data?: ListBillScenarioUsageModificationsCommandOutput) => void
  ): void;
  listBillScenarioUsageModifications(
    args: ListBillScenarioUsageModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBillScenarioUsageModificationsCommandOutput) => void
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
   * @see {@link ListWorkloadEstimatesCommand}
   */
  listWorkloadEstimates(): Promise<ListWorkloadEstimatesCommandOutput>;
  listWorkloadEstimates(
    args: ListWorkloadEstimatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadEstimatesCommandOutput>;
  listWorkloadEstimates(
    args: ListWorkloadEstimatesCommandInput,
    cb: (err: any, data?: ListWorkloadEstimatesCommandOutput) => void
  ): void;
  listWorkloadEstimates(
    args: ListWorkloadEstimatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadEstimatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkloadEstimateUsageCommand}
   */
  listWorkloadEstimateUsage(
    args: ListWorkloadEstimateUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkloadEstimateUsageCommandOutput>;
  listWorkloadEstimateUsage(
    args: ListWorkloadEstimateUsageCommandInput,
    cb: (err: any, data?: ListWorkloadEstimateUsageCommandOutput) => void
  ): void;
  listWorkloadEstimateUsage(
    args: ListWorkloadEstimateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkloadEstimateUsageCommandOutput) => void
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
   * @see {@link UpdateBillEstimateCommand}
   */
  updateBillEstimate(
    args: UpdateBillEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillEstimateCommandOutput>;
  updateBillEstimate(
    args: UpdateBillEstimateCommandInput,
    cb: (err: any, data?: UpdateBillEstimateCommandOutput) => void
  ): void;
  updateBillEstimate(
    args: UpdateBillEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBillScenarioCommand}
   */
  updateBillScenario(
    args: UpdateBillScenarioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBillScenarioCommandOutput>;
  updateBillScenario(
    args: UpdateBillScenarioCommandInput,
    cb: (err: any, data?: UpdateBillScenarioCommandOutput) => void
  ): void;
  updateBillScenario(
    args: UpdateBillScenarioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBillScenarioCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePreferencesCommand}
   */
  updatePreferences(): Promise<UpdatePreferencesCommandOutput>;
  updatePreferences(
    args: UpdatePreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePreferencesCommandOutput>;
  updatePreferences(
    args: UpdatePreferencesCommandInput,
    cb: (err: any, data?: UpdatePreferencesCommandOutput) => void
  ): void;
  updatePreferences(
    args: UpdatePreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkloadEstimateCommand}
   */
  updateWorkloadEstimate(
    args: UpdateWorkloadEstimateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkloadEstimateCommandOutput>;
  updateWorkloadEstimate(
    args: UpdateWorkloadEstimateCommandInput,
    cb: (err: any, data?: UpdateWorkloadEstimateCommandOutput) => void
  ): void;
  updateWorkloadEstimate(
    args: UpdateWorkloadEstimateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkloadEstimateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBillEstimateCommitmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillEstimateCommitmentsCommandOutput}.
   */
  paginateListBillEstimateCommitments(
    args: ListBillEstimateCommitmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillEstimateCommitmentsCommandOutput>;

  /**
   * @see {@link ListBillEstimateInputCommitmentModificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillEstimateInputCommitmentModificationsCommandOutput}.
   */
  paginateListBillEstimateInputCommitmentModifications(
    args: ListBillEstimateInputCommitmentModificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillEstimateInputCommitmentModificationsCommandOutput>;

  /**
   * @see {@link ListBillEstimateInputUsageModificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillEstimateInputUsageModificationsCommandOutput}.
   */
  paginateListBillEstimateInputUsageModifications(
    args: ListBillEstimateInputUsageModificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillEstimateInputUsageModificationsCommandOutput>;

  /**
   * @see {@link ListBillEstimateLineItemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillEstimateLineItemsCommandOutput}.
   */
  paginateListBillEstimateLineItems(
    args: ListBillEstimateLineItemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillEstimateLineItemsCommandOutput>;

  /**
   * @see {@link ListBillEstimatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillEstimatesCommandOutput}.
   */
  paginateListBillEstimates(
    args?: ListBillEstimatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillEstimatesCommandOutput>;

  /**
   * @see {@link ListBillScenarioCommitmentModificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillScenarioCommitmentModificationsCommandOutput}.
   */
  paginateListBillScenarioCommitmentModifications(
    args: ListBillScenarioCommitmentModificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillScenarioCommitmentModificationsCommandOutput>;

  /**
   * @see {@link ListBillScenariosCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillScenariosCommandOutput}.
   */
  paginateListBillScenarios(
    args?: ListBillScenariosCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillScenariosCommandOutput>;

  /**
   * @see {@link ListBillScenarioUsageModificationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBillScenarioUsageModificationsCommandOutput}.
   */
  paginateListBillScenarioUsageModifications(
    args: ListBillScenarioUsageModificationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBillScenarioUsageModificationsCommandOutput>;

  /**
   * @see {@link ListWorkloadEstimatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadEstimatesCommandOutput}.
   */
  paginateListWorkloadEstimates(
    args?: ListWorkloadEstimatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadEstimatesCommandOutput>;

  /**
   * @see {@link ListWorkloadEstimateUsageCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkloadEstimateUsageCommandOutput}.
   */
  paginateListWorkloadEstimateUsage(
    args: ListWorkloadEstimateUsageCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkloadEstimateUsageCommandOutput>;
}

/**
 * <p> You can use the Pricing Calculator API to programmatically create estimates for your planned cloud use. You can model usage and commitments such as Savings Plans and Reserved Instances, and generate estimated costs using your discounts and benefit sharing preferences. </p> <p>The Pricing Calculator API provides the following endpoint:</p> <ul> <li> <p> <code>https://bcm-pricing-calculator.us-east-1.api.aws</code> </p> </li> </ul>
 * @public
 */
export class BCMPricingCalculator extends BCMPricingCalculatorClient implements BCMPricingCalculator {}
createAggregatedClient(commands, BCMPricingCalculator, { paginators });
