// smithy-typescript generated code
/* eslint-disable */
/**
 * This document provides detailed information about the Amazon Lex V2 API actions and their parameters.
 *
 * For information about the IAM access control permissions you need to use this API, see [Identity-based policies for Amazon Lex V2](https://docs.aws.amazon.com/lexv2/latest/dg/security_iam_service-with-iam.html).
 *
 * Amazon Lex V2 Model Building V2 operations let you build and manage bots.
 *
 * If you use a custom HTTP client to call Amazon Lex Model Building V2 operations, you must set the "Content-Type" HTTP header to "application/x-amz-json-1.1". Otherwise, you receive an HTTP 404 - UnknownOperationException in the response.
 *
 * Amazon Lex Model Building V2 operations return the responses with the "application/x-amz-json-1.1" content type.
 *
 * You can use [Amazon Web Services SDKs](http://aws.amazon.com/tools/#sdk) to access Amazon Lex V2 APIs using your favorite programming language. The SDKs automatically perform useful tasks for you, such as:
 *
 * - Cryptographically sign your service requests
 * - Retry requests
 * - Handle error responses
 *
 * The following resources provide additional information about the Amazon Lex V2 Model Building API.
 *
 * - *Amazon Web Services General Reference*
 *
 *   - [Amazon Lex V2 Endpoints for each region](https://docs.aws.amazon.com/general/latest/gr/lex.html).
 * - *Command Line Interface*
 *
 *   - [Amazon Lex Model Building V2 CLI commands](https://docs.aws.amazon.com/cli/latest/reference/lexv2-models/index.html).
 *
 * @packageDocumentation
 */
export * from "./LexModelsV2Client";
export * from "./LexModelsV2";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { LexModelsV2ExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { LexModelsV2ServiceException } from "./models/LexModelsV2ServiceException";
