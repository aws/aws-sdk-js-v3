// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. Route 53 performs four main functions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Domain registration</b> – Route 53 lets you register domain names such as example.com.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Domain Name System (DNS) service</b> – Route 53 translates friendly domain names into IP addresses using a global network of authoritative DNS servers, and provides DNS resolution within your VPCs for private hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Health checking</b> – Route 53 sends automated requests to your application, over the internet or from within your VPC for private endpoints, to verify that it's reachable, available, and functional.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Resolver</b> – Route 53 Resolver lets you forward DNS queries from a VPC that you created using Amazon VPC to DNS resolvers in your network, and from your network to resolvers in your VPC.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the API to create and manage the following resources:</p>
 *          <dl>
 *             <dt>Public and Private Hosted Zones</dt>
 *             <dd>
 *                <p>A <i>public hosted zone</i> is a container that holds information about how you want to route traffic on the internet for a domain, such as example.com, and its subdomains.</p>
 *                <p>A <i>private hosted zone</i> is a container that holds information about how you want to route traffic for a domain and its subdomains within one or more VPCs that you created with the Amazon VPC service.</p>
 *             </dd>
 *             <dt>Reusable Delegation Sets</dt>
 *             <dd>
 *                <p>By default, each hosted zone that you create gets a different set of four name servers—a different delegation set. If you create a lot of hosted zones, maintaining different delegation sets can be difficult and time consuming. Route 53 lets you create a delegation set that you can reuse with multiple hosted zones.</p>
 *             </dd>
 *             <dt>Resource Record Sets</dt>
 *             <dd>
 *                <p>After you create a hosted zone for your domain, such as example.com, you create resource record sets to tell the Domain Name System (DNS) how to route traffic for that domain.</p>
 *             </dd>
 *             <dt>Traffic Policies and Traffic Policy Instances</dt>
 *             <dd>
 *                <p>You can create complex routing configurations, known as traffic policies, that use weighted, latency, failover, and geolocation resource record sets. You can then associate a traffic policy with a domain name or subdomain name, such as www.example.com, by creating a traffic policy instance. When users submit DNS queries for the domain or subdomain, Route 53 responds based on the traffic policy that you used to create the traffic policy instance.</p>
 *             </dd>
 *             <dt>Health Checks</dt>
 *             <dd>
 *                <p>Route 53 health checks monitor the health and performance of your web applications, web servers, and other resources. At regular intervals that you specify, Route 53 submits automated requests to your application, server, or other resource, over the internet or from within your VPC for private endpoints, to verify that it's reachable, available, and functional.</p>
 *             </dd>
 *             <dt>Domain Registrations</dt>
 *             <dd>
 *                <p>When you want to get a new domain name, such as example.com, you can register it with Route 53. You can also transfer the registration for existing domains from other registrars to Route 53.</p>
 *             </dd>
 *             <dt>DNS–DNSSEC</dt>
 *             <dd>
 *                <p>You can protect your domain from DNS spoofing or a man-in-the-middle attack, by configuring Domain Name System Security Extensions (DNSSEC).</p>
 *             </dd>
 *             <dt>Query Logs</dt>
 *             <dd>
 *                <p>You can configure Route 53 to log information about the DNS queries that Route 53 receives, such as the domain or subdomain that was requested, the date and time of the request, and the DNS record type (such as A or AAAA).</p>
 *                <p>You can also configure Route 53 Resolver to log information about the DNS queries that originate in Amazon VPCs.</p>
 *             </dd>
 *             <dt>Outbound and Inbound Endpoints, and Rules</dt>
 *             <dd>
 *                <p>You can configure Route 53 Resolver to forward DNS queries from your VPC to your network or vice versa. DNS queries pass through an outbound endpoint on their way from a VPC to your network, and they pass through an inbound endpoint on their way from your network to a VPC. For outbound queries, rules let you specify the domain names that you want to forward to your network and the IP addresses of the DNS resolvers in your network.</p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and a value, both of which you define. You can use tags for a variety of purposes; one common use is to categorize and track your Route 53 costs.</p>
 *             </dd>
 *             <dt>Profiles</dt>
 *             <dd>
 *                <p>A <i>profile</i> is a named container that groups DNS configurations—such as private hosted zone associations, Resolver rules, and DNS Firewall rule groups—into a single reusable unit. You can associate a profile with multiple VPCs and share it across Amazon Web Services accounts so that each VPC inherits the same DNS settings without requiring individual configuration.</p>
 *             </dd>
 *             <dt>DNS Firewall</dt>
 *             <dd>
 *                <p>A <i>DNS Firewall rule group</i> is an ordered collection of rules that each pair a domain list with an action—allow, block, or alert. You associate rule groups with your VPCs to filter outbound DNS queries made by VPC resources, preventing connections to known-malicious domains or restricting access to only approved domains.</p>
 *             </dd>
 *          </dl>
 *          <p>You can also use the Route 53 API to get the current limit on Route 53 objects that you can create, such as hosted zones and health checks.</p>
 *          <p>For information about Route 53 concepts and about how to use the Route 53 console, see the
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/">Amazon Route 53 Developer Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./Route53Client";
export * from "./Route53";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { Route53ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { Route53ServiceException } from "./models/Route53ServiceException";
