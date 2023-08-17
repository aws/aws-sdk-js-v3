// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>You can use the Cost Explorer API to programmatically query your cost and usage data.
 *       You can query for aggregated data such as total monthly costs or total daily usage. You can
 *       also query for granular data. This might include the number of daily write operations for
 *       Amazon DynamoDB database tables in your production environment. </p>
 *          <p>Service Endpoint</p>
 *          <p>The Cost Explorer API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For information about the costs that are associated with the Cost Explorer API, see
 *         <a href="http://aws.amazon.com/aws-cost-management/pricing/">Amazon Web Services Cost
 *         Management Pricing</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./CostExplorerClient";
export * from "./CostExplorer";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { CostExplorerServiceException } from "./models/CostExplorerServiceException";
