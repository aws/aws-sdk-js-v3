// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Elastic Load Balancing</fullname>
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances.
 *       This enables you to increase the availability of your application. The load balancer also
 *       monitors the health of its registered targets and ensures that it routes traffic only to
 *       healthy targets. You configure your load balancer to accept incoming traffic by specifying one
 *       or more listeners, which are configured with a protocol and port number for connections from
 *       clients to the load balancer. You configure a target group with a protocol and port number for
 *       connections from the load balancer to the targets, and with health check settings to be used
 *       when checking the health status of the targets.</p>
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This
 *       reference covers the following load balancer types:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports
 *           HTTP and HTTPS.</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP,
 *           TLS, and UDP.</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 *
 * @packageDocumentation
 */
export * from "./ElasticLoadBalancingV2Client";
export * from "./ElasticLoadBalancingV2";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { ElasticLoadBalancingV2ServiceException } from "./models/ElasticLoadBalancingV2ServiceException";
