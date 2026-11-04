// smithy-typescript generated code
/* eslint-disable */
/**
 * IoT Jobs is a service that allows you to define a set of jobs — remote operations that are sent to and executed on one or more devices connected to Amazon Web Services IoT Core. For example, you can define a job that instructs a set of devices to download and install application or firmware updates, reboot, rotate certificates, or perform remote troubleshooting operations.
 *
 * Find the endpoint address for actions in the IoT jobs data plane by running this CLI command:
 *
 * `aws iot describe-endpoint --endpoint-type iot:Jobs`
 *
 * The service name used by [Amazon Web Services Signature Version 4](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) to sign requests is: *iot-jobs-data*.
 *
 * To create a job, you make a job document which is a description of the remote operations to be performed, and you specify a list of targets that should perform the operations. The targets can be individual things, thing groups or both.
 *
 * IoT Jobs sends a message to inform the targets that a job is available. The target starts the execution of the job by downloading the job document, performing the operations it specifies, and reporting its progress to Amazon Web Services IoT Core. The Jobs service provides commands to track the progress of a job on a specific target and for all the targets of the job
 *
 * @packageDocumentation
 */
export * from "./IoTJobsDataPlaneClient";
export * from "./IoTJobsDataPlane";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { IoTJobsDataPlaneExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { IoTJobsDataPlaneServiceException } from "./models/IoTJobsDataPlaneServiceException";
