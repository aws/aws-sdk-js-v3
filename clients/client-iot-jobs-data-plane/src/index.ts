// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>IoT Jobs is a service that allows you to define a set of jobs — remote operations
 *          that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example,
 *          you can define a job that instructs a set of devices to download and install application or
 *          firmware updates, reboot, rotate certificates, or perform remote troubleshooting
 *          operations.</p>
 *          <p>Find the endpoint address for actions in the IoT jobs data plane by running this
 *          CLI command:</p>
 *          <p>
 *             <code>aws iot describe-endpoint --endpoint-type iot:Jobs</code>
 *          </p>
 *          <p>The service name used by <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Amazon Web Services
 *             Signature Version 4</a> to sign requests is:
 *          <i>iot-jobs-data</i>.</p>
 *          <p> To create a job, you make a job document which is a description of the remote
 *          operations to be performed, and you specify a list of targets that should perform the
 *          operations. The targets can be individual things, thing groups or both.</p>
 *          <p> IoT Jobs sends a message to inform the targets that a job is available. The target
 *          starts the execution of the job by downloading the job document, performing the operations
 *          it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands
 *          to track the progress of a job on a specific target and for all the targets of the
 *          job</p>
 *
 * @packageDocumentation
 */
export * from "./IoTJobsDataPlaneClient";
export * from "./IoTJobsDataPlane";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IoTJobsDataPlaneExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./models";

export { IoTJobsDataPlaneServiceException } from "./models/IoTJobsDataPlaneServiceException";
