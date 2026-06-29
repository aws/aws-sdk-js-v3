// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon CloudWatch enables you to publish, monitor, and manage various metrics, as well
 *             as configure alarm actions based on data from metrics. This guide provides detailed
 *             information about CloudWatch actions, data types, parameters, and errors. For
 *             more information about CloudWatch features, see <a href="https://aws.amazon.com/cloudwatch">Amazon CloudWatch</a> and the
 *                 <i>Amazon CloudWatch User Guide</i>.</p>
 *          <p>For information about the metrics that other Amazon Web Services products send to
 *                 CloudWatch, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon CloudWatch
 *                 Metrics and Dimensions Reference</a> in the <i>Amazon CloudWatch User
 *                 Guide</i>.</p>
 *          <p>Use the following links to get started using the CloudWatch Query API:</p>
 *          <p>: An alphabetical list of all CloudWatch
 *             actions.</p>
 *          <p>: An alphabetical list of all CloudWatch data
 *             types.</p>
 *          <p>
 *             <a>CommonParameters</a>: Parameters that all Query actions can use.</p>
 *          <p>
 *             <a>CommonErrors</a>: Client and server errors that all actions can
 *             return.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#cw_region">Regions and Endpoints</a>: Supported regions and endpoints for all Amazon Web
 *             Services products.</p>
 *          <p>Alternatively, you can use one of the <a href="https://aws.amazon.com/tools/#sdk">Amazon Web Services SDKs</a> to access CloudWatch using an API tailored
 *             to your programming language or platform.</p>
 *          <p>Developers in the Amazon Web Services developer community also provide their own
 *             libraries, which you can find at the following Amazon Web Services developer
 *             centers:</p>
 *          <p>
 *             <a href="http://aws.amazon.com/java/">Java Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/javascript/">JavaScript Developer
 *             Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/mobile/">Amazon Web Services Mobile
 *             Services</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/php/">PHP Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/python/">Python Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/ruby/">Ruby Developer Center</a>
 *          </p>
 *          <p>
 *             <a href="http://aws.amazon.com/net/">Windows and .NET Developer
 *             Center</a>
 *          </p>
 *
 * @packageDocumentation
 */
export * from "./CloudWatchClient";
export * from "./CloudWatch";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CloudWatchExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CloudWatchServiceException } from "./models/CloudWatchServiceException";
