// smithy-typescript generated code
/* eslint-disable */
/**
 * <note>
 *             <p>For information about using the Amazon S3 API—including authentication, signing requests, code examples, and error handling—see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/developerguide/Welcome.html">Amazon S3 Developer Guide</a>.</p>
 *          </note>
 *          <p>Welcome to the <i>Amazon S3 API Reference</i>. This guide explains the Amazon Simple Storage Service (Amazon S3)
 *       application programming interface (API).</p>
 *          <p>Welcome to the <i>Amazon S3 API Reference</i>. This guide explains the Amazon Simple Storage Service (Amazon S3)
 *       application programming interface (API).</p>
 *          <p>You can use any toolkit that supports HTTP to use the REST API. You can even use a browser
 *       to fetch objects, as long as they are anonymously readable.</p>
 *          <p>The REST API uses the standard HTTP headers and status codes, so that standard browsers and toolkits work as expected. In some areas, we have added functionality to HTTP (for example, we added headers to support access control). In these cases, we have done our best to add the new functionality in a way that matched the style of standard HTTP usage.</p>
 *          <p>The current version of the Amazon S3 API is <code>2006-03-01</code>.</p>
 *          <p>Amazon S3 supports the REST API.</p>
 *          <note>
 *             <p>Support for SOAP over HTTP is deprecated, but it is still available over HTTPS.
 *         However, new Amazon S3 features will not be supported for SOAP. We recommend that
 *         you use either this REST API or the Amazon Web Services SDKs.</p>
 *          </note>
 *
 * @packageDocumentation
 */
export * from "./S3Client";
export * from "./S3";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { S3ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./schemas/schemas_0";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { S3ServiceException } from "./models/S3ServiceException";
