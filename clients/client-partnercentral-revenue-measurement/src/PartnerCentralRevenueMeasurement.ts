// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateMarketplaceRevenueShareAllocationCommandInput,
  type CreateMarketplaceRevenueShareAllocationCommandOutput,
  CreateMarketplaceRevenueShareAllocationCommand,
} from "./commands/CreateMarketplaceRevenueShareAllocationCommand";
import {
  type CreateMarketplaceRevenueShareCommandInput,
  type CreateMarketplaceRevenueShareCommandOutput,
  CreateMarketplaceRevenueShareCommand,
} from "./commands/CreateMarketplaceRevenueShareCommand";
import {
  type CreateRevenueAttributionCommandInput,
  type CreateRevenueAttributionCommandOutput,
  CreateRevenueAttributionCommand,
} from "./commands/CreateRevenueAttributionCommand";
import {
  type GetMarketplaceRevenueShareAllocationCommandInput,
  type GetMarketplaceRevenueShareAllocationCommandOutput,
  GetMarketplaceRevenueShareAllocationCommand,
} from "./commands/GetMarketplaceRevenueShareAllocationCommand";
import {
  type GetMarketplaceRevenueShareCommandInput,
  type GetMarketplaceRevenueShareCommandOutput,
  GetMarketplaceRevenueShareCommand,
} from "./commands/GetMarketplaceRevenueShareCommand";
import {
  type GetRevenueAttributionAllocationCommandInput,
  type GetRevenueAttributionAllocationCommandOutput,
  GetRevenueAttributionAllocationCommand,
} from "./commands/GetRevenueAttributionAllocationCommand";
import {
  type GetRevenueAttributionAllocationsTaskCommandInput,
  type GetRevenueAttributionAllocationsTaskCommandOutput,
  GetRevenueAttributionAllocationsTaskCommand,
} from "./commands/GetRevenueAttributionAllocationsTaskCommand";
import {
  type GetRevenueAttributionCommandInput,
  type GetRevenueAttributionCommandOutput,
  GetRevenueAttributionCommand,
} from "./commands/GetRevenueAttributionCommand";
import {
  type ListMarketplaceRevenueShareAllocationsCommandInput,
  type ListMarketplaceRevenueShareAllocationsCommandOutput,
  ListMarketplaceRevenueShareAllocationsCommand,
} from "./commands/ListMarketplaceRevenueShareAllocationsCommand";
import {
  type ListMarketplaceRevenueSharesCommandInput,
  type ListMarketplaceRevenueSharesCommandOutput,
  ListMarketplaceRevenueSharesCommand,
} from "./commands/ListMarketplaceRevenueSharesCommand";
import {
  type ListRevenueAttributionAllocationsCommandInput,
  type ListRevenueAttributionAllocationsCommandOutput,
  ListRevenueAttributionAllocationsCommand,
} from "./commands/ListRevenueAttributionAllocationsCommand";
import {
  type ListRevenueAttributionsCommandInput,
  type ListRevenueAttributionsCommandOutput,
  ListRevenueAttributionsCommand,
} from "./commands/ListRevenueAttributionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type StartRevenueAttributionAllocationsTaskCommandInput,
  type StartRevenueAttributionAllocationsTaskCommandOutput,
  StartRevenueAttributionAllocationsTaskCommand,
} from "./commands/StartRevenueAttributionAllocationsTaskCommand";
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
  type UpdateMarketplaceRevenueShareAllocationCommandInput,
  type UpdateMarketplaceRevenueShareAllocationCommandOutput,
  UpdateMarketplaceRevenueShareAllocationCommand,
} from "./commands/UpdateMarketplaceRevenueShareAllocationCommand";
import {
  type UpdateRevenueAttributionCommandInput,
  type UpdateRevenueAttributionCommandOutput,
  UpdateRevenueAttributionCommand,
} from "./commands/UpdateRevenueAttributionCommand";
import {
  paginateListMarketplaceRevenueShareAllocations,
} from "./pagination/ListMarketplaceRevenueShareAllocationsPaginator";
import { paginateListMarketplaceRevenueShares } from "./pagination/ListMarketplaceRevenueSharesPaginator";
import { paginateListRevenueAttributionAllocations } from "./pagination/ListRevenueAttributionAllocationsPaginator";
import { paginateListRevenueAttributions } from "./pagination/ListRevenueAttributionsPaginator";
import { PartnerCentralRevenueMeasurementClient } from "./PartnerCentralRevenueMeasurementClient";

const commands = {
  CreateMarketplaceRevenueShareCommand,
  CreateMarketplaceRevenueShareAllocationCommand,
  CreateRevenueAttributionCommand,
  GetMarketplaceRevenueShareCommand,
  GetMarketplaceRevenueShareAllocationCommand,
  GetRevenueAttributionCommand,
  GetRevenueAttributionAllocationCommand,
  GetRevenueAttributionAllocationsTaskCommand,
  ListMarketplaceRevenueShareAllocationsCommand,
  ListMarketplaceRevenueSharesCommand,
  ListRevenueAttributionAllocationsCommand,
  ListRevenueAttributionsCommand,
  ListTagsForResourceCommand,
  StartRevenueAttributionAllocationsTaskCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateMarketplaceRevenueShareAllocationCommand,
  UpdateRevenueAttributionCommand,
};
const paginators = {
  paginateListMarketplaceRevenueShareAllocations,
  paginateListMarketplaceRevenueShares,
  paginateListRevenueAttributionAllocations,
  paginateListRevenueAttributions,
};

/**
 * @public
 */
export interface PartnerCentralRevenueMeasurementRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface PartnerCentralRevenueMeasurement {
  /**
   * @see {@link CreateMarketplaceRevenueShareCommand}
   */
  createMarketplaceRevenueShare(
    args: CreateMarketplaceRevenueShareCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<CreateMarketplaceRevenueShareCommandOutput>;
  createMarketplaceRevenueShare(
    args: CreateMarketplaceRevenueShareCommandInput,
    cb: (err: any, data?: CreateMarketplaceRevenueShareCommandOutput) => void
  ): void;
  createMarketplaceRevenueShare(
    args: CreateMarketplaceRevenueShareCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: CreateMarketplaceRevenueShareCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMarketplaceRevenueShareAllocationCommand}
   */
  createMarketplaceRevenueShareAllocation(
    args: CreateMarketplaceRevenueShareAllocationCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<CreateMarketplaceRevenueShareAllocationCommandOutput>;
  createMarketplaceRevenueShareAllocation(
    args: CreateMarketplaceRevenueShareAllocationCommandInput,
    cb: (err: any, data?: CreateMarketplaceRevenueShareAllocationCommandOutput) => void
  ): void;
  createMarketplaceRevenueShareAllocation(
    args: CreateMarketplaceRevenueShareAllocationCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: CreateMarketplaceRevenueShareAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRevenueAttributionCommand}
   */
  createRevenueAttribution(
    args: CreateRevenueAttributionCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<CreateRevenueAttributionCommandOutput>;
  createRevenueAttribution(
    args: CreateRevenueAttributionCommandInput,
    cb: (err: any, data?: CreateRevenueAttributionCommandOutput) => void
  ): void;
  createRevenueAttribution(
    args: CreateRevenueAttributionCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: CreateRevenueAttributionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMarketplaceRevenueShareCommand}
   */
  getMarketplaceRevenueShare(
    args: GetMarketplaceRevenueShareCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<GetMarketplaceRevenueShareCommandOutput>;
  getMarketplaceRevenueShare(
    args: GetMarketplaceRevenueShareCommandInput,
    cb: (err: any, data?: GetMarketplaceRevenueShareCommandOutput) => void
  ): void;
  getMarketplaceRevenueShare(
    args: GetMarketplaceRevenueShareCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: GetMarketplaceRevenueShareCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMarketplaceRevenueShareAllocationCommand}
   */
  getMarketplaceRevenueShareAllocation(
    args: GetMarketplaceRevenueShareAllocationCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<GetMarketplaceRevenueShareAllocationCommandOutput>;
  getMarketplaceRevenueShareAllocation(
    args: GetMarketplaceRevenueShareAllocationCommandInput,
    cb: (err: any, data?: GetMarketplaceRevenueShareAllocationCommandOutput) => void
  ): void;
  getMarketplaceRevenueShareAllocation(
    args: GetMarketplaceRevenueShareAllocationCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: GetMarketplaceRevenueShareAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevenueAttributionCommand}
   */
  getRevenueAttribution(
    args: GetRevenueAttributionCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<GetRevenueAttributionCommandOutput>;
  getRevenueAttribution(
    args: GetRevenueAttributionCommandInput,
    cb: (err: any, data?: GetRevenueAttributionCommandOutput) => void
  ): void;
  getRevenueAttribution(
    args: GetRevenueAttributionCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: GetRevenueAttributionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevenueAttributionAllocationCommand}
   */
  getRevenueAttributionAllocation(
    args: GetRevenueAttributionAllocationCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<GetRevenueAttributionAllocationCommandOutput>;
  getRevenueAttributionAllocation(
    args: GetRevenueAttributionAllocationCommandInput,
    cb: (err: any, data?: GetRevenueAttributionAllocationCommandOutput) => void
  ): void;
  getRevenueAttributionAllocation(
    args: GetRevenueAttributionAllocationCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: GetRevenueAttributionAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRevenueAttributionAllocationsTaskCommand}
   */
  getRevenueAttributionAllocationsTask(
    args: GetRevenueAttributionAllocationsTaskCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<GetRevenueAttributionAllocationsTaskCommandOutput>;
  getRevenueAttributionAllocationsTask(
    args: GetRevenueAttributionAllocationsTaskCommandInput,
    cb: (err: any, data?: GetRevenueAttributionAllocationsTaskCommandOutput) => void
  ): void;
  getRevenueAttributionAllocationsTask(
    args: GetRevenueAttributionAllocationsTaskCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: GetRevenueAttributionAllocationsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceRevenueShareAllocationsCommand}
   */
  listMarketplaceRevenueShareAllocations(
    args: ListMarketplaceRevenueShareAllocationsCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<ListMarketplaceRevenueShareAllocationsCommandOutput>;
  listMarketplaceRevenueShareAllocations(
    args: ListMarketplaceRevenueShareAllocationsCommandInput,
    cb: (err: any, data?: ListMarketplaceRevenueShareAllocationsCommandOutput) => void
  ): void;
  listMarketplaceRevenueShareAllocations(
    args: ListMarketplaceRevenueShareAllocationsCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: ListMarketplaceRevenueShareAllocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceRevenueSharesCommand}
   */
  listMarketplaceRevenueShares(
    args: ListMarketplaceRevenueSharesCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<ListMarketplaceRevenueSharesCommandOutput>;
  listMarketplaceRevenueShares(
    args: ListMarketplaceRevenueSharesCommandInput,
    cb: (err: any, data?: ListMarketplaceRevenueSharesCommandOutput) => void
  ): void;
  listMarketplaceRevenueShares(
    args: ListMarketplaceRevenueSharesCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: ListMarketplaceRevenueSharesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRevenueAttributionAllocationsCommand}
   */
  listRevenueAttributionAllocations(
    args: ListRevenueAttributionAllocationsCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<ListRevenueAttributionAllocationsCommandOutput>;
  listRevenueAttributionAllocations(
    args: ListRevenueAttributionAllocationsCommandInput,
    cb: (err: any, data?: ListRevenueAttributionAllocationsCommandOutput) => void
  ): void;
  listRevenueAttributionAllocations(
    args: ListRevenueAttributionAllocationsCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: ListRevenueAttributionAllocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRevenueAttributionsCommand}
   */
  listRevenueAttributions(
    args: ListRevenueAttributionsCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<ListRevenueAttributionsCommandOutput>;
  listRevenueAttributions(
    args: ListRevenueAttributionsCommandInput,
    cb: (err: any, data?: ListRevenueAttributionsCommandOutput) => void
  ): void;
  listRevenueAttributions(
    args: ListRevenueAttributionsCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: ListRevenueAttributionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRevenueAttributionAllocationsTaskCommand}
   */
  startRevenueAttributionAllocationsTask(
    args: StartRevenueAttributionAllocationsTaskCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<StartRevenueAttributionAllocationsTaskCommandOutput>;
  startRevenueAttributionAllocationsTask(
    args: StartRevenueAttributionAllocationsTaskCommandInput,
    cb: (err: any, data?: StartRevenueAttributionAllocationsTaskCommandOutput) => void
  ): void;
  startRevenueAttributionAllocationsTask(
    args: StartRevenueAttributionAllocationsTaskCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: StartRevenueAttributionAllocationsTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMarketplaceRevenueShareAllocationCommand}
   */
  updateMarketplaceRevenueShareAllocation(
    args: UpdateMarketplaceRevenueShareAllocationCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<UpdateMarketplaceRevenueShareAllocationCommandOutput>;
  updateMarketplaceRevenueShareAllocation(
    args: UpdateMarketplaceRevenueShareAllocationCommandInput,
    cb: (err: any, data?: UpdateMarketplaceRevenueShareAllocationCommandOutput) => void
  ): void;
  updateMarketplaceRevenueShareAllocation(
    args: UpdateMarketplaceRevenueShareAllocationCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: UpdateMarketplaceRevenueShareAllocationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRevenueAttributionCommand}
   */
  updateRevenueAttribution(
    args: UpdateRevenueAttributionCommandInput,
    options?: PartnerCentralRevenueMeasurementRequestOptions
  ): Promise<UpdateRevenueAttributionCommandOutput>;
  updateRevenueAttribution(
    args: UpdateRevenueAttributionCommandInput,
    cb: (err: any, data?: UpdateRevenueAttributionCommandOutput) => void
  ): void;
  updateRevenueAttribution(
    args: UpdateRevenueAttributionCommandInput,
    options: PartnerCentralRevenueMeasurementRequestOptions,
    cb: (err: any, data?: UpdateRevenueAttributionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceRevenueShareAllocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMarketplaceRevenueShareAllocationsCommandOutput}.
   */
  paginateListMarketplaceRevenueShareAllocations(
    args: ListMarketplaceRevenueShareAllocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMarketplaceRevenueShareAllocationsCommandOutput>;

  /**
   * @see {@link ListMarketplaceRevenueSharesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMarketplaceRevenueSharesCommandOutput}.
   */
  paginateListMarketplaceRevenueShares(
    args: ListMarketplaceRevenueSharesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMarketplaceRevenueSharesCommandOutput>;

  /**
   * @see {@link ListRevenueAttributionAllocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRevenueAttributionAllocationsCommandOutput}.
   */
  paginateListRevenueAttributionAllocations(
    args: ListRevenueAttributionAllocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRevenueAttributionAllocationsCommandOutput>;

  /**
   * @see {@link ListRevenueAttributionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRevenueAttributionsCommandOutput}.
   */
  paginateListRevenueAttributions(
    args: ListRevenueAttributionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRevenueAttributionsCommandOutput>;
}

/**
 * <p>AWS Partner Central Revenue Measurement API for creating, managing, and tracking revenue attributions and their allocations with deal entities such as offers and opportunities.</p>
 * @public
 */
export class PartnerCentralRevenueMeasurement extends PartnerCentralRevenueMeasurementClient implements PartnerCentralRevenueMeasurement {}
createAggregatedClient(commands, PartnerCentralRevenueMeasurement, { paginators });
