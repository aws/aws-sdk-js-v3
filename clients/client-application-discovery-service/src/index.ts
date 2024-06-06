// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Web Services Application Discovery Service</fullname>
 *          <p>Amazon Web Services Application Discovery Service (Application Discovery Service) helps you plan application migration projects. It automatically
 *       identifies servers, virtual machines (VMs), and network dependencies in your on-premises data
 *       centers. For more information, see the <a href="http://aws.amazon.com/application-discovery/faqs/">Amazon Web Services Application Discovery Service FAQ</a>. </p>
 *          <p>Application Discovery Service offers three ways of performing discovery and collecting
 *       data about your on-premises servers:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agentless discovery</b> using
 *           Amazon Web Services Application Discovery Service Agentless Collector (Agentless Collector), which doesn't require you
 *           to install an agent on each host.</p>
 *                <ul>
 *                   <li>
 *                      <p>Agentless Collector gathers server information regardless of the
 *               operating systems, which minimizes the time required for initial on-premises
 *               infrastructure assessment.</p>
 *                   </li>
 *                   <li>
 *                      <p>Agentless Collector doesn't collect information about network
 *               dependencies, only agent-based discovery collects that information.
 *               </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Agent-based discovery</b> using the Amazon Web Services Application
 *           Discovery Agent (Application Discovery Agent) collects a richer set of data than agentless
 *           discovery, which you install on one or more hosts in your data center.</p>
 *                <ul>
 *                   <li>
 *                      <p> The agent captures infrastructure and application information, including an
 *               inventory of running processes, system performance information, resource utilization,
 *               and network dependencies.</p>
 *                   </li>
 *                   <li>
 *                      <p>The information collected by agents is secured at rest and in transit to the
 *               Application Discovery Service database in the Amazon Web Services cloud. For more information, see
 *                 <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-agent.html">Amazon Web Services Application
 *                 Discovery Agent</a>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Amazon Web Services Partner Network (APN) solutions</b> integrate with
 *           Application Discovery Service, enabling you to import details of your on-premises
 *           environment directly into Amazon Web Services Migration Hub (Migration Hub) without using
 *           Agentless Collector or Application Discovery Agent.</p>
 *                <ul>
 *                   <li>
 *                      <p>Third-party application discovery tools can query Amazon Web Services Application Discovery
 *               Service, and they can write to the Application Discovery Service database using the
 *               public API.</p>
 *                   </li>
 *                   <li>
 *                      <p>In this way, you can import data into Migration Hub and view it, so that you can
 *               associate applications with servers and track migrations.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Working With This Guide</b>
 *          </p>
 *          <p>This API reference provides descriptions, syntax, and usage examples for each of the
 *       actions and data types for Application Discovery Service. The topic for each action shows the
 *       API request parameters and the response. Alternatively, you can use one of the Amazon Web Services SDKs to
 *       access an API that is tailored to the programming language or platform that you're using. For
 *       more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Remember that you must set your Migration Hub home Region before you call any of
 *             these APIs.</p>
 *                </li>
 *                <li>
 *                   <p>You must make API calls for write actions (create, notify, associate, disassociate,
 *             import, or put) while in your home Region, or a <code>HomeRegionNotSetException</code>
 *             error is returned.</p>
 *                </li>
 *                <li>
 *                   <p>API calls for read actions (list, describe, stop, and delete) are permitted outside
 *             of your home Region.</p>
 *                </li>
 *                <li>
 *                   <p>Although it is unlikely, the Migration Hub home Region could change. If you call
 *             APIs outside the home Region, an <code>InvalidInputException</code> is returned.</p>
 *                </li>
 *                <li>
 *                   <p>You must call <code>GetHomeRegion</code> to obtain the latest Migration Hub home
 *             Region.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>This guide is intended for use with the <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/">Amazon Web Services Application Discovery Service User
 *         Guide</a>.</p>
 *          <important>
 *             <p>All data is handled according to the <a href="https://aws.amazon.com/privacy/">Amazon Web Services Privacy Policy</a>. You can operate Application Discovery Service offline to
 *         inspect collected data before it is shared with the service.</p>
 *          </important>
 *
 * @packageDocumentation
 */
export * from "./ApplicationDiscoveryServiceClient";
export * from "./ApplicationDiscoveryService";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { ApplicationDiscoveryServiceExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { ApplicationDiscoveryServiceServiceException } from "./models/ApplicationDiscoveryServiceServiceException";
