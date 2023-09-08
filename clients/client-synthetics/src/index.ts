// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon CloudWatch Synthetics</fullname>
 *          <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can
 *          create and manage <i>canaries</i>, which are modular, lightweight scripts
 *          that monitor your endpoints and APIs
 *             from the outside-in. You can set up your canaries to run
 *          24 hours a day, once per minute. The canaries help you check the availability and latency
 *          of your web services and troubleshoot anomalies by investigating load time data,
 *          screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch
 *          ServiceLens to help you trace the causes of impacted nodes in your applications. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor
 *             the Health of Your Applications</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *          <p>Before you create and manage canaries, be aware of the security considerations. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./SyntheticsClient";
export * from "./Synthetics";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { SyntheticsServiceException } from "./models/SyntheticsServiceException";
