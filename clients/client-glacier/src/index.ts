// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> Amazon S3 Glacier (Glacier) is a storage solution for "cold data."</p>
 *
 *          <p>Glacier is an extremely low-cost storage service that provides secure,
 *          durable, and easy-to-use storage for data backup and archival. With Glacier,
 *          customers can store their data cost effectively for months, years, or decades.
 *          Glacier also enables customers to offload the administrative burdens of operating and
 *          scaling storage to AWS, so they don't have to worry about capacity planning, hardware
 *          provisioning, data replication, hardware failure and recovery, or time-consuming hardware
 *          migrations.</p>
 *
 *          <p>Glacier is a great storage choice when low storage cost is paramount and your
 *          data is rarely retrieved. If your
 *          application requires fast or frequent access to your data, consider using Amazon S3. For
 *          more information, see <a href="http://aws.amazon.com/s3/">Amazon Simple Storage Service
 *             (Amazon S3)</a>.</p>
 *
 *          <p>You can store any kind of data in any format. There is no maximum limit on the total
 *          amount of data you can store in Glacier.</p>
 *
 *          <p>If you are a first-time user of Glacier, we recommend that you begin by
 *          reading the following sections in the <i>Amazon S3 Glacier Developer
 *          Guide</i>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html">What is
 *                   Amazon S3 Glacier</a> - This section of the Developer Guide describes the
 *                underlying data model, the operations it supports, and the AWS SDKs that you can use
 *                to interact with the service.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/amazon-glacier-getting-started.html">Getting Started
 *                   with Amazon S3 Glacier</a> - The Getting Started section walks you through the
 *                process of creating a vault, uploading archives, creating jobs to download archives,
 *                retrieving the job output, and deleting archives.</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./GlacierClient";
export * from "./Glacier";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { GlacierExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { GlacierServiceException } from "./models/GlacierServiceException";
