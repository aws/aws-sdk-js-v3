// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon CloudWatch monitors your Amazon Web Services (Amazon Web Services) resources and the
 * 			applications you run on Amazon Web Services in real time. You can use CloudWatch to collect and track
 * 			metrics, which are the variables you want to measure for your resources and
 * 			applications.</p>
 *          <p>CloudWatch alarms send notifications or automatically change the resources you are monitoring based on rules
 * 			that you define. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2
 * 			instances. Then, use this data to determine whether you should launch
 * 			additional instances to handle increased load. You can also use this data to stop
 * 			under-used instances to save
 * 			money.</p>
 *          <p>In addition to monitoring the built-in metrics that come with Amazon Web Services, you can monitor
 * 			your own custom metrics. With CloudWatch, you gain system-wide visibility into resource
 * 			utilization, application performance, and operational health.</p>
 *
 * @packageDocumentation
 */
export * from "./CloudWatchClient";
export * from "./CloudWatch";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { CloudWatchServiceException } from "./models/CloudWatchServiceException";
