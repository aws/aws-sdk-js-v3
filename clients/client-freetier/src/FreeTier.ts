// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type GetAccountActivityCommandInput,
  type GetAccountActivityCommandOutput,
  GetAccountActivityCommand,
} from "./commands/GetAccountActivityCommand";
import {
  type GetAccountPlanStateCommandInput,
  type GetAccountPlanStateCommandOutput,
  GetAccountPlanStateCommand,
} from "./commands/GetAccountPlanStateCommand";
import {
  type GetFreeTierUsageCommandInput,
  type GetFreeTierUsageCommandOutput,
  GetFreeTierUsageCommand,
} from "./commands/GetFreeTierUsageCommand";
import {
  type ListAccountActivitiesCommandInput,
  type ListAccountActivitiesCommandOutput,
  ListAccountActivitiesCommand,
} from "./commands/ListAccountActivitiesCommand";
import {
  type UpgradeAccountPlanCommandInput,
  type UpgradeAccountPlanCommandOutput,
  UpgradeAccountPlanCommand,
} from "./commands/UpgradeAccountPlanCommand";
import { FreeTierClient } from "./FreeTierClient";
import { paginateGetFreeTierUsage } from "./pagination/GetFreeTierUsagePaginator";
import { paginateListAccountActivities } from "./pagination/ListAccountActivitiesPaginator";

const commands = {
  GetAccountActivityCommand,
  GetAccountPlanStateCommand,
  GetFreeTierUsageCommand,
  ListAccountActivitiesCommand,
  UpgradeAccountPlanCommand,
};
const paginators = {
  paginateGetFreeTierUsage,
  paginateListAccountActivities,
};

/**
 * @public
 */
export interface FreeTierRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface FreeTier {
  /**
   * @see {@link GetAccountActivityCommand}
   */
  getAccountActivity(
    args: GetAccountActivityCommandInput,
    options?: FreeTierRequestOptions
  ): Promise<GetAccountActivityCommandOutput>;
  getAccountActivity(
    args: GetAccountActivityCommandInput,
    cb: (err: any, data?: GetAccountActivityCommandOutput) => void
  ): void;
  getAccountActivity(
    args: GetAccountActivityCommandInput,
    options: FreeTierRequestOptions,
    cb: (err: any, data?: GetAccountActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPlanStateCommand}
   */
  getAccountPlanState(): Promise<GetAccountPlanStateCommandOutput>;
  getAccountPlanState(
    args: GetAccountPlanStateCommandInput,
    options?: FreeTierRequestOptions
  ): Promise<GetAccountPlanStateCommandOutput>;
  getAccountPlanState(
    args: GetAccountPlanStateCommandInput,
    cb: (err: any, data?: GetAccountPlanStateCommandOutput) => void
  ): void;
  getAccountPlanState(
    args: GetAccountPlanStateCommandInput,
    options: FreeTierRequestOptions,
    cb: (err: any, data?: GetAccountPlanStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFreeTierUsageCommand}
   */
  getFreeTierUsage(): Promise<GetFreeTierUsageCommandOutput>;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    options?: FreeTierRequestOptions
  ): Promise<GetFreeTierUsageCommandOutput>;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    cb: (err: any, data?: GetFreeTierUsageCommandOutput) => void
  ): void;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    options: FreeTierRequestOptions,
    cb: (err: any, data?: GetFreeTierUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountActivitiesCommand}
   */
  listAccountActivities(): Promise<ListAccountActivitiesCommandOutput>;
  listAccountActivities(
    args: ListAccountActivitiesCommandInput,
    options?: FreeTierRequestOptions
  ): Promise<ListAccountActivitiesCommandOutput>;
  listAccountActivities(
    args: ListAccountActivitiesCommandInput,
    cb: (err: any, data?: ListAccountActivitiesCommandOutput) => void
  ): void;
  listAccountActivities(
    args: ListAccountActivitiesCommandInput,
    options: FreeTierRequestOptions,
    cb: (err: any, data?: ListAccountActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeAccountPlanCommand}
   */
  upgradeAccountPlan(
    args: UpgradeAccountPlanCommandInput,
    options?: FreeTierRequestOptions
  ): Promise<UpgradeAccountPlanCommandOutput>;
  upgradeAccountPlan(
    args: UpgradeAccountPlanCommandInput,
    cb: (err: any, data?: UpgradeAccountPlanCommandOutput) => void
  ): void;
  upgradeAccountPlan(
    args: UpgradeAccountPlanCommandInput,
    options: FreeTierRequestOptions,
    cb: (err: any, data?: UpgradeAccountPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFreeTierUsageCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetFreeTierUsageCommandOutput}.
   */
  paginateGetFreeTierUsage(
    args?: GetFreeTierUsageCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetFreeTierUsageCommandOutput>;

  /**
   * @see {@link ListAccountActivitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountActivitiesCommandOutput}.
   */
  paginateListAccountActivities(
    args?: ListAccountActivitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountActivitiesCommandOutput>;
}

/**
 * <p>You can use the Amazon Web Services Free Tier API to query programmatically your Free Tier usage data.</p> <p>Free Tier tracks your monthly usage data for all free tier offers that are associated with your Amazon Web Services account. You can use the Free Tier API to filter and show only the data that you want.</p> <p>Service endpoint</p> <p>The Free Tier API provides the following endpoint:</p> <ul/> <p>For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html">Using the Amazon Web Services Free Tier</a> in the <i>Billing User Guide</i>.</p>
 * @public
 */
export class FreeTier extends FreeTierClient implements FreeTier {}
createAggregatedClient(commands, FreeTier, { paginators });
