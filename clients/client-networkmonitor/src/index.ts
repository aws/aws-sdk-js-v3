// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon CloudWatch Network Monitor is an Amazon Web Services active network monitoring
 *             service that identifies if a network issues exists within the Amazon Web Services network
 *             or your own company network.  Within Network Monitor you'll choose the source VPCs and
 *             subnets from the Amazon Web Services network in which you operate and then you'll choose
 *             the destination IP addresses from your on-premises network. From these sources and
 *             destinations, Network Monitor creates a monitor containing all the possible source and
 *             destination combinations, each of which is called a probe, within a single monitor.
 *             These probes then monitor network traffic to help you identify where network issues might be affecting your traffic.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/what-is-network-monitor.html">Using Amazon CloudWatch Network Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./NetworkMonitorClient";
export * from "./NetworkMonitor";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export { RuntimeExtension } from "./runtimeExtensions";
export { NetworkMonitorExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { NetworkMonitorServiceException } from "./models/NetworkMonitorServiceException";
