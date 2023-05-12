// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need
 *       detailed information about the Amazon AppFlow API operations, data types, and errors. </p>
 *          <p>Amazon AppFlow is a fully managed integration service that enables you to securely
 *       transfer data between software as a service (SaaS) applications like Salesforce, Marketo,
 *       Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p>
 *          <p>Use the following links to get started on the Amazon AppFlow API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data
 *             types</a>: An alphabetical list of all Amazon AppFlow data types.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common
 *             errors</a>: Client and server errors that all operations can return.</p>
 *             </li>
 *          </ul>
 *          <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow
 *         User Guide</a>.</p>
 *          <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include
 *       applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with
 *       the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector
 *       profile using Amazon AppFlow API operations. For example, Salesforce users can refer to
 *       the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm">
 *                <i>Authorize Apps with OAuth</i>
 *             </a> documentation.</p>
 *
 * @packageDocumentation
 */
export * from "./AppflowClient";
export * from "./Appflow";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { AppflowServiceException } from "./models/AppflowServiceException";
