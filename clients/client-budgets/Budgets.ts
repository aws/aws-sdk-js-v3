import { BudgetsClient } from "./BudgetsClient";
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
  DescribeBudgetCommand,
  DescribeBudgetCommandInput,
  DescribeBudgetCommandOutput,
} from "./commands/DescribeBudgetCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The AWS Budgets API enables you to use AWS Budgets to plan your service usage, service costs, and instance reservations. The API reference provides descriptions, syntax, and usage examples for each of the actions and data types for AWS Budgets. </p>
 * 		       <p>Budgets provide you with a way to see the following information:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>How close your plan is to your budgeted amount or to the free tier limits</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your usage-to-date, including how much you've used of your Reserved Instances (RIs)</p>
 * 			         </li>
 *             <li>
 * 				           <p>Your current estimated charges from AWS, and how much your predicted usage will accrue in charges by the end of the month</p>
 * 			         </li>
 *             <li>
 * 				           <p>How much of your budget has been used</p>
 * 			         </li>
 *          </ul>
 * 		       <p>AWS updates your budget status several times a day. Budgets track your unblended costs, subscriptions, refunds, and RIs. You can create the following types of budgets:</p>
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
 * 		       <p>The AWS Budgets API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>https://budgets.amazonaws.com</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs that are associated with the AWS Budgets API, see <a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
 */
export class Budgets extends BudgetsClient {
  /**
   * <p>Creates a budget and, if included, notifications and subscribers. </p>
   * 		       <important>
   * 			         <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p>
   * 		       </important>
   */
  public createBudget(
    args: CreateBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBudgetCommandOutput>;
  public createBudget(args: CreateBudgetCommandInput, cb: (err: any, data?: CreateBudgetCommandOutput) => void): void;
  public createBudget(
    args: CreateBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBudgetCommandOutput) => void
  ): void;
  public createBudget(
    args: CreateBudgetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBudgetCommandOutput) => void),
    cb?: (err: any, data?: CreateBudgetCommandOutput) => void
  ): Promise<CreateBudgetCommandOutput> | void {
    const command = new CreateBudgetCommand(args);
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
   * <p>Creates a notification. You must create the budget before you create the associated notification.</p>
   */
  public createNotification(
    args: CreateNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotificationCommandOutput>;
  public createNotification(
    args: CreateNotificationCommandInput,
    cb: (err: any, data?: CreateNotificationCommandOutput) => void
  ): void;
  public createNotification(
    args: CreateNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotificationCommandOutput) => void
  ): void;
  public createNotification(
    args: CreateNotificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNotificationCommandOutput) => void),
    cb?: (err: any, data?: CreateNotificationCommandOutput) => void
  ): Promise<CreateNotificationCommandOutput> | void {
    const command = new CreateNotificationCommand(args);
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
   * <p>Creates a subscriber. You must create the associated budget and notification before you create the subscriber.</p>
   */
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriberCommandOutput>;
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): void;
  public createSubscriber(
    args: CreateSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubscriberCommandOutput) => void),
    cb?: (err: any, data?: CreateSubscriberCommandOutput) => void
  ): Promise<CreateSubscriberCommandOutput> | void {
    const command = new CreateSubscriberCommand(args);
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
   * <p>Deletes a budget. You can delete your budget at any time.</p>
   * 		       <important>
   * 			         <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p>
   * 		       </important>
   */
  public deleteBudget(
    args: DeleteBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBudgetCommandOutput>;
  public deleteBudget(args: DeleteBudgetCommandInput, cb: (err: any, data?: DeleteBudgetCommandOutput) => void): void;
  public deleteBudget(
    args: DeleteBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): void;
  public deleteBudget(
    args: DeleteBudgetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBudgetCommandOutput) => void),
    cb?: (err: any, data?: DeleteBudgetCommandOutput) => void
  ): Promise<DeleteBudgetCommandOutput> | void {
    const command = new DeleteBudgetCommand(args);
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
   * <p>Deletes a notification.</p>
   * 		       <important>
   * 			         <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p>
   * 		       </important>
   */
  public deleteNotification(
    args: DeleteNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationCommandOutput>;
  public deleteNotification(
    args: DeleteNotificationCommandInput,
    cb: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): void;
  public deleteNotification(
    args: DeleteNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): void;
  public deleteNotification(
    args: DeleteNotificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNotificationCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotificationCommandOutput) => void
  ): Promise<DeleteNotificationCommandOutput> | void {
    const command = new DeleteNotificationCommand(args);
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
   * <p>Deletes a subscriber.</p>
   * 		       <important>
   * 			         <p>Deleting the last subscriber to a notification also deletes the notification.</p>
   * 		       </important>
   */
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriberCommandOutput>;
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): void;
  public deleteSubscriber(
    args: DeleteSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSubscriberCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubscriberCommandOutput) => void
  ): Promise<DeleteSubscriberCommandOutput> | void {
    const command = new DeleteSubscriberCommand(args);
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
   * <p>Describes a budget.</p>
   * 		       <important>
   * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p>
   * 		       </important>
   */
  public describeBudget(
    args: DescribeBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetCommandOutput>;
  public describeBudget(
    args: DescribeBudgetCommandInput,
    cb: (err: any, data?: DescribeBudgetCommandOutput) => void
  ): void;
  public describeBudget(
    args: DescribeBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetCommandOutput) => void
  ): void;
  public describeBudget(
    args: DescribeBudgetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBudgetCommandOutput) => void),
    cb?: (err: any, data?: DescribeBudgetCommandOutput) => void
  ): Promise<DescribeBudgetCommandOutput> | void {
    const command = new DescribeBudgetCommand(args);
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
   * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
   */
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetPerformanceHistoryCommandOutput>;
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    cb: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void
  ): void;
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void
  ): void;
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void),
    cb?: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void
  ): Promise<DescribeBudgetPerformanceHistoryCommandOutput> | void {
    const command = new DescribeBudgetPerformanceHistoryCommand(args);
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
   * <p>Lists the budgets that are associated with an account.</p>
   * 		       <important>
   * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p>
   * 		       </important>
   */
  public describeBudgets(
    args: DescribeBudgetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBudgetsCommandOutput>;
  public describeBudgets(
    args: DescribeBudgetsCommandInput,
    cb: (err: any, data?: DescribeBudgetsCommandOutput) => void
  ): void;
  public describeBudgets(
    args: DescribeBudgetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBudgetsCommandOutput) => void
  ): void;
  public describeBudgets(
    args: DescribeBudgetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBudgetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBudgetsCommandOutput) => void
  ): Promise<DescribeBudgetsCommandOutput> | void {
    const command = new DescribeBudgetsCommand(args);
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
   * <p>Lists the notifications that are associated with a budget.</p>
   */
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotificationsForBudgetCommandOutput>;
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    cb: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void
  ): void;
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void
  ): void;
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void),
    cb?: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void
  ): Promise<DescribeNotificationsForBudgetCommandOutput> | void {
    const command = new DescribeNotificationsForBudgetCommand(args);
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
   * <p>Lists the subscribers that are associated with a notification.</p>
   */
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscribersForNotificationCommandOutput>;
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    cb: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void
  ): void;
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void
  ): void;
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void),
    cb?: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void
  ): Promise<DescribeSubscribersForNotificationCommandOutput> | void {
    const command = new DescribeSubscribersForNotificationCommand(args);
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
   * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p>
   * 		       <important>
   * 			         <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p>
   * 		       </important>
   */
  public updateBudget(
    args: UpdateBudgetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBudgetCommandOutput>;
  public updateBudget(args: UpdateBudgetCommandInput, cb: (err: any, data?: UpdateBudgetCommandOutput) => void): void;
  public updateBudget(
    args: UpdateBudgetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): void;
  public updateBudget(
    args: UpdateBudgetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBudgetCommandOutput) => void),
    cb?: (err: any, data?: UpdateBudgetCommandOutput) => void
  ): Promise<UpdateBudgetCommandOutput> | void {
    const command = new UpdateBudgetCommand(args);
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
   * <p>Updates a notification.</p>
   */
  public updateNotification(
    args: UpdateNotificationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotificationCommandOutput>;
  public updateNotification(
    args: UpdateNotificationCommandInput,
    cb: (err: any, data?: UpdateNotificationCommandOutput) => void
  ): void;
  public updateNotification(
    args: UpdateNotificationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotificationCommandOutput) => void
  ): void;
  public updateNotification(
    args: UpdateNotificationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateNotificationCommandOutput) => void),
    cb?: (err: any, data?: UpdateNotificationCommandOutput) => void
  ): Promise<UpdateNotificationCommandOutput> | void {
    const command = new UpdateNotificationCommand(args);
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
   * <p>Updates a subscriber.</p>
   */
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriberCommandOutput>;
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): void;
  public updateSubscriber(
    args: UpdateSubscriberCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSubscriberCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubscriberCommandOutput) => void
  ): Promise<UpdateSubscriberCommandOutput> | void {
    const command = new UpdateSubscriberCommand(args);
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
