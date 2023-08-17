// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon CloudWatch Internet Monitor provides visibility into how internet issues impact the performance and availability
 * 			between your applications hosted on Amazon Web Services and your end users. It can reduce the time it takes for you to diagnose
 * 			internet issues from days to minutes. Internet Monitor uses the connectivity data that Amazon Web Services captures from its global
 * 			networking footprint to calculate a baseline of performance and availability for internet traffic. This
 * 			is the same data that Amazon Web Services uses to monitor internet uptime and availability. With those measurements
 * 			as a baseline, Internet Monitor raises awareness for you when there are significant problems for your
 * 			end users in the different geographic locations where your application runs.</p>
 *          <p>Internet Monitor publishes internet measurements to CloudWatch Logs and CloudWatch Metrics,
 * 			to easily support using CloudWatch tools with health information for geographies and networks specific to your application.
 * 			Internet Monitor sends health events to Amazon EventBridge so that you can set up notifications. If an issue is caused by the Amazon Web Services network,
 * 			you also automatically receive an Amazon Web Services Health Dashboard notification with the steps that Amazon Web Services is taking to mitigate the problem.</p>
 *          <p>To use Internet Monitor, you create a <i>monitor</i> and associate your application's resources
 * 			with it - VPCs, NLBs, CloudFront distributions, or WorkSpaces directories - so Internet Monitor can determine
 * 			where your application's internet traffic is. Internet Monitor then provides internet measurements from Amazon Web Services that are specific to
 * 			the locations and ASNs (typically, internet service providers or ISPs) that communicate with your application.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-InternetMonitor.html">Using Amazon CloudWatch Internet Monitor</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./InternetMonitorClient";
export * from "./InternetMonitor";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { InternetMonitorServiceException } from "./models/InternetMonitorServiceException";
