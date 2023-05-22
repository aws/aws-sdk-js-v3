// smithy-typescript generated code
/* eslint-disable */
/**
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
 *
 * @packageDocumentation
 */
export * from "./BudgetsClient";
export * from "./Budgets";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { BudgetsServiceException } from "./models/BudgetsServiceException";
