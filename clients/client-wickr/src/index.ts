// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Welcome to the <i>Amazon Web Services Wickr API Reference</i>.</p> <p>The Amazon Web Services Wickr application programming interface (API) is designed for administrators to perform key tasks, such as creating and managing Amazon Web Services Wickr, networks, users, security groups, bots and more. This guide provides detailed information about the Amazon Web Services Wickr API, including operations, types, inputs and outputs, and error codes. You can use an Amazon Web Services SDK, the Amazon Web Services Command Line Interface (Amazon Web Services CLI, or the REST API to make API calls for Amazon Web Services Wickr. </p> <p> <i>Using Amazon Web Services SDK</i> </p> <p>The SDK clients authenticate your requests by using access keys that you provide. For more information, see <a href="https://docs.aws.amazon.com/sdkref/latest/guide/access.html">Authentication and access using Amazon Web Services SDKs and tools</a> in the <i>Amazon Web Services SDKs and Tools Reference Guide</i>. </p> <p> <i>Using Amazon Web Services CLI</i> </p> <p>Use your access keys with the Amazon Web Services CLI to make API calls. For more information about setting up the Amazon Web Services CLI, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html">Getting started with the Amazon Web Services CLI</a> in the <i>Amazon Web Services Command Line Interface User Guide for Version 2</i>. </p> <p> <i>Using REST APIs</i> </p> <p>If you use REST to make API calls, you must authenticate your request by providing a signature. Amazon Web Services Wickr supports Signature Version 4. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in the <i>Amazon Web Services Identity and Access Management User Guide</i>. </p> <p>Access and permissions to the APIs can be controlled by Amazon Web Services Identity and Access Management. The managed policy <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam-awsmanpol.html#security-iam-awsmanpol-AWSWickrFullAccess">Amazon Web ServicesWickrFullAccess</a> grants full administrative permission to the Amazon Web Services Wickr service APIs. For more information on restricting access to specific operations, see <a href="https://docs.aws.amazon.com/wickr/latest/adminguide/security-iam.html">Identity and access management for Amazon Web Services Wickr </a> in the <i>Amazon Web Services Wickr Administration Guide</i>. </p> <p> <i>Types of Errors</i>:</p> <p>The Amazon Web Services Wickr APIs provide an HTTP interface. HTTP defines ranges of HTTP Status Codes for different types of error responses.</p> <ol> <li> <p>Client errors are indicated by HTTP Status Code class of 4xx</p> </li> <li> <p>Service errors are indicated by HTTP Status Code class of 5xx</p> </li> </ol> <p>In this reference guide, the documentation for each API has an Errors section that includes a brief discussion about HTTP status codes. We recommend looking there as part of your investigation when you get an error.</p>
 *
 * @packageDocumentation
 */
export * from "./WickrClient";
export * from "./Wickr";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { WickrExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { WickrServiceException } from "./models/WickrServiceException";
