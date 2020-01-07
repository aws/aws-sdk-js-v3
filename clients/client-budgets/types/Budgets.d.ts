import { BudgetsClient } from "./BudgetsClient";
import { CreateBudgetCommandInput, CreateBudgetCommandOutput } from "./commands/CreateBudgetCommand";
import { CreateNotificationCommandInput, CreateNotificationCommandOutput } from "./commands/CreateNotificationCommand";
import { CreateSubscriberCommandInput, CreateSubscriberCommandOutput } from "./commands/CreateSubscriberCommand";
import { DeleteBudgetCommandInput, DeleteBudgetCommandOutput } from "./commands/DeleteBudgetCommand";
import { DeleteNotificationCommandInput, DeleteNotificationCommandOutput } from "./commands/DeleteNotificationCommand";
import { DeleteSubscriberCommandInput, DeleteSubscriberCommandOutput } from "./commands/DeleteSubscriberCommand";
import { DescribeBudgetCommandInput, DescribeBudgetCommandOutput } from "./commands/DescribeBudgetCommand";
import { DescribeBudgetPerformanceHistoryCommandInput, DescribeBudgetPerformanceHistoryCommandOutput } from "./commands/DescribeBudgetPerformanceHistoryCommand";
import { DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput } from "./commands/DescribeBudgetsCommand";
import { DescribeNotificationsForBudgetCommandInput, DescribeNotificationsForBudgetCommandOutput } from "./commands/DescribeNotificationsForBudgetCommand";
import { DescribeSubscribersForNotificationCommandInput, DescribeSubscribersForNotificationCommandOutput } from "./commands/DescribeSubscribersForNotificationCommand";
import { UpdateBudgetCommandInput, UpdateBudgetCommandOutput } from "./commands/UpdateBudgetCommand";
import { UpdateNotificationCommandInput, UpdateNotificationCommandOutput } from "./commands/UpdateNotificationCommand";
import { UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput } from "./commands/UpdateSubscriberCommand";
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
export declare class Budgets extends BudgetsClient {
    /**
     * <p>Creates a budget and, if included, notifications and subscribers. </p>
     * 		       <important>
     * 			         <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p>
     * 		       </important>
     */
    createBudget(args: CreateBudgetCommandInput, options?: __HttpHandlerOptions): Promise<CreateBudgetCommandOutput>;
    createBudget(args: CreateBudgetCommandInput, cb: (err: any, data?: CreateBudgetCommandOutput) => void): void;
    createBudget(args: CreateBudgetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBudgetCommandOutput) => void): void;
    /**
     * <p>Creates a notification. You must create the budget before you create the associated notification.</p>
     */
    createNotification(args: CreateNotificationCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotificationCommandOutput>;
    createNotification(args: CreateNotificationCommandInput, cb: (err: any, data?: CreateNotificationCommandOutput) => void): void;
    createNotification(args: CreateNotificationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotificationCommandOutput) => void): void;
    /**
     * <p>Creates a subscriber. You must create the associated budget and notification before you create the subscriber.</p>
     */
    createSubscriber(args: CreateSubscriberCommandInput, options?: __HttpHandlerOptions): Promise<CreateSubscriberCommandOutput>;
    createSubscriber(args: CreateSubscriberCommandInput, cb: (err: any, data?: CreateSubscriberCommandOutput) => void): void;
    createSubscriber(args: CreateSubscriberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSubscriberCommandOutput) => void): void;
    /**
     * <p>Deletes a budget. You can delete your budget at any time.</p>
     * 		       <important>
     * 			         <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p>
     * 		       </important>
     */
    deleteBudget(args: DeleteBudgetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBudgetCommandOutput>;
    deleteBudget(args: DeleteBudgetCommandInput, cb: (err: any, data?: DeleteBudgetCommandOutput) => void): void;
    deleteBudget(args: DeleteBudgetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBudgetCommandOutput) => void): void;
    /**
     * <p>Deletes a notification.</p>
     * 		       <important>
     * 			         <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p>
     * 		       </important>
     */
    deleteNotification(args: DeleteNotificationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotificationCommandOutput>;
    deleteNotification(args: DeleteNotificationCommandInput, cb: (err: any, data?: DeleteNotificationCommandOutput) => void): void;
    deleteNotification(args: DeleteNotificationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotificationCommandOutput) => void): void;
    /**
     * <p>Deletes a subscriber.</p>
     * 		       <important>
     * 			         <p>Deleting the last subscriber to a notification also deletes the notification.</p>
     * 		       </important>
     */
    deleteSubscriber(args: DeleteSubscriberCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSubscriberCommandOutput>;
    deleteSubscriber(args: DeleteSubscriberCommandInput, cb: (err: any, data?: DeleteSubscriberCommandOutput) => void): void;
    deleteSubscriber(args: DeleteSubscriberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSubscriberCommandOutput) => void): void;
    /**
     * <p>Describes a budget.</p>
     * 		       <important>
     * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p>
     * 		       </important>
     */
    describeBudget(args: DescribeBudgetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBudgetCommandOutput>;
    describeBudget(args: DescribeBudgetCommandInput, cb: (err: any, data?: DescribeBudgetCommandOutput) => void): void;
    describeBudget(args: DescribeBudgetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBudgetCommandOutput) => void): void;
    /**
     * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
     */
    describeBudgetPerformanceHistory(args: DescribeBudgetPerformanceHistoryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBudgetPerformanceHistoryCommandOutput>;
    describeBudgetPerformanceHistory(args: DescribeBudgetPerformanceHistoryCommandInput, cb: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void): void;
    describeBudgetPerformanceHistory(args: DescribeBudgetPerformanceHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBudgetPerformanceHistoryCommandOutput) => void): void;
    /**
     * <p>Lists the budgets that are associated with an account.</p>
     * 		       <important>
     * 			         <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p>
     * 		       </important>
     */
    describeBudgets(args: DescribeBudgetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBudgetsCommandOutput>;
    describeBudgets(args: DescribeBudgetsCommandInput, cb: (err: any, data?: DescribeBudgetsCommandOutput) => void): void;
    describeBudgets(args: DescribeBudgetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBudgetsCommandOutput) => void): void;
    /**
     * <p>Lists the notifications that are associated with a budget.</p>
     */
    describeNotificationsForBudget(args: DescribeNotificationsForBudgetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotificationsForBudgetCommandOutput>;
    describeNotificationsForBudget(args: DescribeNotificationsForBudgetCommandInput, cb: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void): void;
    describeNotificationsForBudget(args: DescribeNotificationsForBudgetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotificationsForBudgetCommandOutput) => void): void;
    /**
     * <p>Lists the subscribers that are associated with a notification.</p>
     */
    describeSubscribersForNotification(args: DescribeSubscribersForNotificationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSubscribersForNotificationCommandOutput>;
    describeSubscribersForNotification(args: DescribeSubscribersForNotificationCommandInput, cb: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void): void;
    describeSubscribersForNotification(args: DescribeSubscribersForNotificationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSubscribersForNotificationCommandOutput) => void): void;
    /**
     * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p>
     * 		       <important>
     * 			         <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p>
     * 		       </important>
     */
    updateBudget(args: UpdateBudgetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBudgetCommandOutput>;
    updateBudget(args: UpdateBudgetCommandInput, cb: (err: any, data?: UpdateBudgetCommandOutput) => void): void;
    updateBudget(args: UpdateBudgetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBudgetCommandOutput) => void): void;
    /**
     * <p>Updates a notification.</p>
     */
    updateNotification(args: UpdateNotificationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNotificationCommandOutput>;
    updateNotification(args: UpdateNotificationCommandInput, cb: (err: any, data?: UpdateNotificationCommandOutput) => void): void;
    updateNotification(args: UpdateNotificationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNotificationCommandOutput) => void): void;
    /**
     * <p>Updates a subscriber.</p>
     */
    updateSubscriber(args: UpdateSubscriberCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSubscriberCommandOutput>;
    updateSubscriber(args: UpdateSubscriberCommandInput, cb: (err: any, data?: UpdateSubscriberCommandOutput) => void): void;
    updateSubscriber(args: UpdateSubscriberCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSubscriberCommandOutput) => void): void;
}
