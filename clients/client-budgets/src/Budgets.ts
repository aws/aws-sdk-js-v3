// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BudgetsClient, BudgetsClientConfig } from "./BudgetsClient";
import {
  CreateBudgetActionCommand,
  CreateBudgetActionCommandInput,
  CreateBudgetActionCommandOutput,
} from "./commands/CreateBudgetActionCommand";
import {
  CreateBudgetCommand,
  CreateBudgetCommandInput,
  CreateBudgetCommandOutput,
} from "./commands/CreateBudgetCommand";
import {
  CreateNotificationCommand,
  CreateNotificationCommandInput,
  CreateNotificationCommandOutput,
} from "./commands/CreateNotificationCommand";
import {
  CreateSubscriberCommand,
  CreateSubscriberCommandInput,
  CreateSubscriberCommandOutput,
} from "./commands/CreateSubscriberCommand";
import {
  DeleteBudgetActionCommand,
  DeleteBudgetActionCommandInput,
  DeleteBudgetActionCommandOutput,
} from "./commands/DeleteBudgetActionCommand";
import {
  DeleteBudgetCommand,
  DeleteBudgetCommandInput,
  DeleteBudgetCommandOutput,
} from "./commands/DeleteBudgetCommand";
import {
  DeleteNotificationCommand,
  DeleteNotificationCommandInput,
  DeleteNotificationCommandOutput,
} from "./commands/DeleteNotificationCommand";
import {
  DeleteSubscriberCommand,
  DeleteSubscriberCommandInput,
  DeleteSubscriberCommandOutput,
} from "./commands/DeleteSubscriberCommand";
import {
  DescribeBudgetActionCommand,
  DescribeBudgetActionCommandInput,
  DescribeBudgetActionCommandOutput,
} from "./commands/DescribeBudgetActionCommand";
import {
  DescribeBudgetActionHistoriesCommand,
  DescribeBudgetActionHistoriesCommandInput,
  DescribeBudgetActionHistoriesCommandOutput,
} from "./commands/DescribeBudgetActionHistoriesCommand";
import {
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForAccountCommandInput,
  DescribeBudgetActionsForAccountCommandOutput,
} from "./commands/DescribeBudgetActionsForAccountCommand";
import {
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetActionsForBudgetCommandInput,
  DescribeBudgetActionsForBudgetCommandOutput,
} from "./commands/DescribeBudgetActionsForBudgetCommand";
import {
  DescribeBudgetCommand,
  DescribeBudgetCommandInput,
  DescribeBudgetCommandOutput,
} from "./commands/DescribeBudgetCommand";
import {
  DescribeBudgetNotificationsForAccountCommand,
  DescribeBudgetNotificationsForAccountCommandInput,
  DescribeBudgetNotificationsForAccountCommandOutput,
} from "./commands/DescribeBudgetNotificationsForAccountCommand";
import {
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetPerformanceHistoryCommandInput,
  DescribeBudgetPerformanceHistoryCommandOutput,
} from "./commands/DescribeBudgetPerformanceHistoryCommand";
import {
  DescribeBudgetsCommand,
  DescribeBudgetsCommandInput,
  DescribeBudgetsCommandOutput,
} from "./commands/DescribeBudgetsCommand";
import {
  DescribeNotificationsForBudgetCommand,
  DescribeNotificationsForBudgetCommandInput,
  DescribeNotificationsForBudgetCommandOutput,
} from "./commands/DescribeNotificationsForBudgetCommand";
import {
  DescribeSubscribersForNotificationCommand,
  DescribeSubscribersForNotificationCommandInput,
  DescribeSubscribersForNotificationCommandOutput,
} from "./commands/DescribeSubscribersForNotificationCommand";
import {
  ExecuteBudgetActionCommand,
  ExecuteBudgetActionCommandInput,
  ExecuteBudgetActionCommandOutput,
} from "./commands/ExecuteBudgetActionCommand";
import {
  UpdateBudgetActionCommand,
  UpdateBudgetActionCommandInput,
  UpdateBudgetActionCommandOutput,
} from "./commands/UpdateBudgetActionCommand";
import {
  UpdateBudgetCommand,
  UpdateBudgetCommandInput,
  UpdateBudgetCommandOutput,
} from "./commands/UpdateBudgetCommand";
import {
  UpdateNotificationCommand,
  UpdateNotificationCommandInput,
  UpdateNotificationCommandOutput,
} from "./commands/UpdateNotificationCommand";
import {
  UpdateSubscriberCommand,
  UpdateSubscriberCommandInput,
  UpdateSubscriberCommandOutput,
} from "./commands/UpdateSubscriberCommand";

const commands = {
  CreateBudgetCommand,
  CreateBudgetActionCommand,
  CreateNotificationCommand,
  CreateSubscriberCommand,
  DeleteBudgetCommand,
  DeleteBudgetActionCommand,
  DeleteNotificationCommand,
  DeleteSubscriberCommand,
  DescribeBudgetCommand,
  DescribeBudgetActionCommand,
  DescribeBudgetActionHistoriesCommand,
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetNotificationsForAccountCommand,
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetsCommand,
  DescribeNotificationsForBudgetCommand,
  DescribeSubscribersForNotificationCommand,
  ExecuteBudgetActionCommand,
  UpdateBudgetCommand,
  UpdateBudgetActionCommand,
  UpdateNotificationCommand,
  UpdateSubscriberCommand,
};

export interface Budgets {
  /**
   * @see {@link CreateBudgetCommand}
   */
  createBudget(args: CreateBudgetCommandInput, options?: __HttpHandlerOptions): Promise<CreateBudgetCommandOutput>;
  createBudget(args: CreateBudgetCommandInput, cb: (err: any, data?: CreateBudgetCommandOutput) => void): void;
  createBudget(
    args: CreateBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBudgetActionCommand}
   */
  createBudgetAction(
    args: CreateBudgetActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBudgetActionCommandOutput>;
  createBudgetAction(
    args: CreateBudgetActionCommandInput,
    cb: (err: any, data?: CreateBudgetActionCommandOutput) => void
  ): void;
  createBudgetAction(
    args: CreateBudgetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBudgetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotificationCommand}
   */
  createNotification(
    args: CreateNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationCommandOutput>;
  createNotification(
    args: CreateNotificationCommandInput,
    cb: (err: any, data?: CreateNotificationCommandOutput) => void
  ): void;
  createNotification(
    args: CreateNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSubscriberCommand}
   */
  createSubscriber(
    args: CreateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriberCommandOutput>;
  createSubscriber(
    args: CreateSubscriberCommandInput,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  createSubscriber(
    args: CreateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBudgetCommand}
   */
  deleteBudget(args: DeleteBudgetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBudgetCommandOutput>;
  deleteBudget(args: DeleteBudgetCommandInput, cb: (err: any, data?: DeleteBudgetCommandOutput) => void): void;
  deleteBudget(
    args: DeleteBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBudgetActionCommand}
   */
  deleteBudgetAction(
    args: DeleteBudgetActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBudgetActionCommandOutput>;
  deleteBudgetAction(
    args: DeleteBudgetActionCommandInput,
    cb: (err: any, data?: DeleteBudgetActionCommandOutput) => void
  ): void;
  deleteBudgetAction(
    args: DeleteBudgetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBudgetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotificationCommand}
   */
  deleteNotification(
    args: DeleteNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationCommandOutput>;
  deleteNotification(
    args: DeleteNotificationCommandInput,
    cb: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): void;
  deleteNotification(
    args: DeleteNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSubscriberCommand}
   */
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriberCommandOutput>;
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetCommand}
   */
  describeBudget(
    args: DescribeBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetCommandOutput>;
  describeBudget(args: DescribeBudgetCommandInput, cb: (err: any, data?: DescribeBudgetCommandOutput) => void): void;
  describeBudget(
    args: DescribeBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetActionCommand}
   */
  describeBudgetAction(
    args: DescribeBudgetActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetActionCommandOutput>;
  describeBudgetAction(
    args: DescribeBudgetActionCommandInput,
    cb: (err: any, data?: DescribeBudgetActionCommandOutput) => void
  ): void;
  describeBudgetAction(
    args: DescribeBudgetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetActionHistoriesCommand}
   */
  describeBudgetActionHistories(
    args: DescribeBudgetActionHistoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetActionHistoriesCommandOutput>;
  describeBudgetActionHistories(
    args: DescribeBudgetActionHistoriesCommandInput,
    cb: (err: any, data?: DescribeBudgetActionHistoriesCommandOutput) => void
  ): void;
  describeBudgetActionHistories(
    args: DescribeBudgetActionHistoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetActionHistoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetActionsForAccountCommand}
   */
  describeBudgetActionsForAccount(
    args: DescribeBudgetActionsForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetActionsForAccountCommandOutput>;
  describeBudgetActionsForAccount(
    args: DescribeBudgetActionsForAccountCommandInput,
    cb: (err: any, data?: DescribeBudgetActionsForAccountCommandOutput) => void
  ): void;
  describeBudgetActionsForAccount(
    args: DescribeBudgetActionsForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetActionsForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetActionsForBudgetCommand}
   */
  describeBudgetActionsForBudget(
    args: DescribeBudgetActionsForBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetActionsForBudgetCommandOutput>;
  describeBudgetActionsForBudget(
    args: DescribeBudgetActionsForBudgetCommandInput,
    cb: (err: any, data?: DescribeBudgetActionsForBudgetCommandOutput) => void
  ): void;
  describeBudgetActionsForBudget(
    args: DescribeBudgetActionsForBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetActionsForBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetNotificationsForAccountCommand}
   */
  describeBudgetNotificationsForAccount(
    args: DescribeBudgetNotificationsForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetNotificationsForAccountCommandOutput>;
  describeBudgetNotificationsForAccount(
    args: DescribeBudgetNotificationsForAccountCommandInput,
    cb: (err: any, data?: DescribeBudgetNotificationsForAccountCommandOutput) => void
  ): void;
  describeBudgetNotificationsForAccount(
    args: DescribeBudgetNotificationsForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetNotificationsForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetPerformanceHistoryCommand}
   */
  describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetPerformanceHistoryCommandOutput>;
  describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    cb: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void
  ): void;
  describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBudgetsCommand}
   */
  describeBudgets(
    args: DescribeBudgetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetsCommandOutput>;
  describeBudgets(args: DescribeBudgetsCommandInput, cb: (err: any, data?: DescribeBudgetsCommandOutput) => void): void;
  describeBudgets(
    args: DescribeBudgetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotificationsForBudgetCommand}
   */
  describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationsForBudgetCommandOutput>;
  describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    cb: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void
  ): void;
  describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscribersForNotificationCommand}
   */
  describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscribersForNotificationCommandOutput>;
  describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    cb: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void
  ): void;
  describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteBudgetActionCommand}
   */
  executeBudgetAction(
    args: ExecuteBudgetActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteBudgetActionCommandOutput>;
  executeBudgetAction(
    args: ExecuteBudgetActionCommandInput,
    cb: (err: any, data?: ExecuteBudgetActionCommandOutput) => void
  ): void;
  executeBudgetAction(
    args: ExecuteBudgetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteBudgetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBudgetCommand}
   */
  updateBudget(args: UpdateBudgetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBudgetCommandOutput>;
  updateBudget(args: UpdateBudgetCommandInput, cb: (err: any, data?: UpdateBudgetCommandOutput) => void): void;
  updateBudget(
    args: UpdateBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBudgetActionCommand}
   */
  updateBudgetAction(
    args: UpdateBudgetActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBudgetActionCommandOutput>;
  updateBudgetAction(
    args: UpdateBudgetActionCommandInput,
    cb: (err: any, data?: UpdateBudgetActionCommandOutput) => void
  ): void;
  updateBudgetAction(
    args: UpdateBudgetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBudgetActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotificationCommand}
   */
  updateNotification(
    args: UpdateNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationCommandOutput>;
  updateNotification(
    args: UpdateNotificationCommandInput,
    cb: (err: any, data?: UpdateNotificationCommandOutput) => void
  ): void;
  updateNotification(
    args: UpdateNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSubscriberCommand}
   */
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriberCommandOutput>;
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Use the Amazon Web Services Budgets API to plan your service usage, service costs, and instance reservations. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types for the Amazon Web Services Budgets feature. </p>
 * 		       <p>Budgets provide you with a way to see the following information:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>How close your plan is to your budgeted amount or to the free tier limits</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your current estimated charges from Amazon Web Services, and how much your predicted usage will accrue in charges by the end of the month</p>
 * 			         </li>
 *             <li>
 * 				           <p>How much of your budget has been used</p>
 * 			         </li>
 *          </ul>
 * 		       <p>Amazon Web Services updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <b>Cost budgets</b> - Plan how much you want to spend on a service.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Usage budgets</b> - Plan how much you want to use one or more services.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>RI utilization budgets</b> - Define a utilization threshold, and receive alerts when your RI usage falls below that threshold. This lets you see if your RIs are unused or under-utilized.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>RI coverage budgets</b> - Define a coverage threshold, and receive alerts when the number of your instance hours that are covered by RIs fall below that threshold. This lets you see how much of your instance usage is covered by a reservation.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>Service Endpoint</p>
 * 	        <p>The Amazon Web Services Budgets API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>https://budgets.amazonaws.com</p>
 * 			         </li>
 *          </ul>
 * 	        <p>For information about costs that are associated with the Amazon Web Services Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost Management Pricing</a>.</p>
 */
export class Budgets extends BudgetsClient implements Budgets {}
createAggregatedClient(commands, Budgets);
