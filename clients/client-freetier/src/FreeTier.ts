// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetAccountActivityCommand,
  GetAccountActivityCommandInput,
  GetAccountActivityCommandOutput,
} from "./commands/GetAccountActivityCommand";
import {
  GetAccountPlanStateCommand,
  GetAccountPlanStateCommandInput,
  GetAccountPlanStateCommandOutput,
} from "./commands/GetAccountPlanStateCommand";
import {
  GetFreeTierUsageCommand,
  GetFreeTierUsageCommandInput,
  GetFreeTierUsageCommandOutput,
} from "./commands/GetFreeTierUsageCommand";
import {
  ListAccountActivitiesCommand,
  ListAccountActivitiesCommandInput,
  ListAccountActivitiesCommandOutput,
} from "./commands/ListAccountActivitiesCommand";
import {
  UpgradeAccountPlanCommand,
  UpgradeAccountPlanCommandInput,
  UpgradeAccountPlanCommandOutput,
} from "./commands/UpgradeAccountPlanCommand";
import { FreeTierClient, FreeTierClientConfig } from "./FreeTierClient";

const commands = {
  GetAccountActivityCommand,
  GetAccountPlanStateCommand,
  GetFreeTierUsageCommand,
  ListAccountActivitiesCommand,
  UpgradeAccountPlanCommand,
};

export interface FreeTier {
  /**
   * @see {@link GetAccountActivityCommand}
   */
  getAccountActivity(
    args: GetAccountActivityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountActivityCommandOutput>;
  getAccountActivity(
    args: GetAccountActivityCommandInput,
    cb: (err: any, data?: GetAccountActivityCommandOutput) => void
  ): void;
  getAccountActivity(
    args: GetAccountActivityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountActivityCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountPlanStateCommand}
   */
  getAccountPlanState(): Promise<GetAccountPlanStateCommandOutput>;
  getAccountPlanState(
    args: GetAccountPlanStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountPlanStateCommandOutput>;
  getAccountPlanState(
    args: GetAccountPlanStateCommandInput,
    cb: (err: any, data?: GetAccountPlanStateCommandOutput) => void
  ): void;
  getAccountPlanState(
    args: GetAccountPlanStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountPlanStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFreeTierUsageCommand}
   */
  getFreeTierUsage(): Promise<GetFreeTierUsageCommandOutput>;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFreeTierUsageCommandOutput>;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    cb: (err: any, data?: GetFreeTierUsageCommandOutput) => void
  ): void;
  getFreeTierUsage(
    args: GetFreeTierUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFreeTierUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountActivitiesCommand}
   */
  listAccountActivities(): Promise<ListAccountActivitiesCommandOutput>;
  listAccountActivities(
    args: ListAccountActivitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountActivitiesCommandOutput>;
  listAccountActivities(
    args: ListAccountActivitiesCommandInput,
    cb: (err: any, data?: ListAccountActivitiesCommandOutput) => void
  ): void;
  listAccountActivities(
    args: ListAccountActivitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountActivitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpgradeAccountPlanCommand}
   */
  upgradeAccountPlan(
    args: UpgradeAccountPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeAccountPlanCommandOutput>;
  upgradeAccountPlan(
    args: UpgradeAccountPlanCommandInput,
    cb: (err: any, data?: UpgradeAccountPlanCommandOutput) => void
  ): void;
  upgradeAccountPlan(
    args: UpgradeAccountPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeAccountPlanCommandOutput) => void
  ): void;
}

/**
 * <p>You can use the Amazon Web Services Free Tier API to query programmatically your Free Tier usage data.</p> <p>Free Tier tracks your monthly usage data for all free tier offers that are associated with your Amazon Web Services account. You can use the Free Tier API to filter and show only the data that you want.</p> <p>Service endpoint</p> <p>The Free Tier API provides the following endpoint:</p> <ul/> <p>For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-free-tier.html">Using the Amazon Web Services Free Tier</a> in the <i>Billing User Guide</i>.</p>
 * @public
 */
export class FreeTier extends FreeTierClient implements FreeTier {}
createAggregatedClient(commands, FreeTier);
