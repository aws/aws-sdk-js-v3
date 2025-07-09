// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>OpsWorks CM</fullname>
 *          <important>
 *             <p>The OpsWorks services have reached end of life and have been disabled for both new and existing customers.
 *         We strongly recommend customers migrate their workloads to other solutions as soon as possible. If you have questions about migration, reach out to the Amazon Web ServicesSupport Team on <a href="https://repost.aws/">Amazon Web Services re:Post</a> or through <a href="https://aws.amazon.com/support">Amazon Web Services Premium Support</a>.</p>
 *          </important>
 *          <p>OpsWorks CM is a service that runs and manages
 *       configuration management servers. You can use OpsWorks CM to create and manage OpsWorks for Chef Automate and
 *       OpsWorks for Puppet Enterprise servers, and add or remove
 *       nodes for the servers to manage.</p>
 *          <p>
 *             <b>Glossary of terms</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Server</b>: A configuration management server that can be
 *         highly-available. The configuration management server runs on
 *         an Amazon Elastic Compute Cloud (EC2) instance, and may use various other Amazon Web Services services, such as Amazon Relational Database Service
 *         (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration
 *         manager that you want to use, much like Amazon RDS. In OpsWorks CM, you do not start
 *       or stop servers. After you create servers, they continue to run until they are deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Engine</b>: The engine is the specific configuration manager
 *         that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Backup</b>: This
 *       is an application-level backup of the data that the configuration manager
 *       stores. OpsWorks CM
 *       creates an S3 bucket for backups when you launch the first
 *       server. A backup maintains a snapshot of a server's configuration-related
 *       attributes at the time the backup starts.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Events</b>:
 *       Events are always related to a server. Events are written
 *       during server creation, when health checks run, when backups
 *       are created, when system maintenance is performed, etc. When you delete a server, the server's events are
 *       also deleted.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Account attributes</b>:
 *         Every account has attributes that are assigned in the OpsWorks CM
 *       database. These attributes store information about configuration limits (servers,
 *       backups, etc.) and your customer account.
 *       </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Endpoints</b>
 *          </p>
 *          <p>OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints.
 *       Your servers
 *       can only be accessed or managed within the endpoint in which they are created.</p>
 *          <ul>
 *             <li>
 *                <p>opsworks-cm.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-east-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.us-west-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-northeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.ap-southeast-2.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-central-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>opsworks-cm.eu-west-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">OpsWorks endpoints and quotas</a> in the Amazon Web Services General Reference.</p>
 *          <p>
 *             <b>Throttling limits</b>
 *          </p>
 *          <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>
 *
 * @packageDocumentation
 */
export * from "./OpsWorksCMClient";
export * from "./OpsWorksCM";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { OpsWorksCMExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { OpsWorksCMServiceException } from "./models/OpsWorksCMServiceException";
