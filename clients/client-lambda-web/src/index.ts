// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AWS Lambda Web Functions is a capability of AWS Lambda that you can use to run web applications and API backends as serverless HTTP servers. Your code listens on a network port and handles requests directly. You can use familiar Node.js web frameworks such as Express, Hono, or React Router with no Lambda-specific adapters or wrappers. You develop and run your server locally like any other Node.js web app.</p> <p>Lambda creates an HTTPS endpoint, manages the execution environments, and scales your application with traffic, including to zero when it's idle. To reduce latency for globally distributed users, you can deploy across multiple AWS Regions behind a single endpoint.</p> <p>A Web Function has one or more immutable revisions (code and configuration) and one or more endpoints that expose it over HTTPS.</p> <p>Use Web Functions for workloads that receive and respond to HTTP traffic directly. Common use cases include:</p> <ul> <li> <p>Web applications – Deploy full-stack or front-end applications that serve HTML, assets, and API routes from a single deployment.</p> </li> <li> <p>REST and GraphQL APIs – Build API backends that serve high request volumes.</p> </li> <li> <p>Microservices – Run HTTP services that scale independently with traffic, including to zero when idle.</p> </li> <li> <p>Server-side rendering (SSR) – Serve pages that are rendered on the server at request time rather than pre-built. A Web Function runs your framework's production server directly. This suits applications that render personalized or frequently changing content on each request.</p> </li> <li> <p>Streaming responses – Stream output to the client as it is produced, such as responses from a large language model.</p> </li> </ul> <p>For event-driven processing, such as handling queue messages or file uploads, use <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-functions-chapter.html">Lambda Event Functions</a> instead. For more information about Web Functions, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/web-functions.html">Lambda Web Functions</a> in the <i>AWS Lambda Developer Guide</i>.</p>
 *
 * @packageDocumentation
 */
export * from "./LambdaWebClient";
export * from "./LambdaWeb";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { LambdaWebExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { LambdaWebServiceException } from "./models/LambdaWebServiceException";
