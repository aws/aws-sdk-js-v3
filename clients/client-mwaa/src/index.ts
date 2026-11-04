// smithy-typescript generated code
/* eslint-disable */
/**
 * Amazon Managed Workflows for Apache Airflow
 *
 * This section contains the Amazon Managed Workflows for Apache Airflow (MWAA) API reference documentation. For more information, see [What is Amazon MWAA?](https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html).
 *
 * **Endpoints**
 *
 * - `api.airflow.{region}.amazonaws.com` (use `api.airflow.{region}.api.aws` for IPv6) - This endpoint is used for environment management.
 *
 *   - [CreateEnvironment](https://docs.aws.amazon.com/mwaa/latest/API/API_CreateEnvironment.html)
 *   - [DeleteEnvironment](https://docs.aws.amazon.com/mwaa/latest/API/API_DeleteEnvironment.html)
 *   - [GetEnvironment](https://docs.aws.amazon.com/mwaa/latest/API/API_GetEnvironment.html)
 *   - [ListEnvironments](https://docs.aws.amazon.com/mwaa/latest/API/API_ListEnvironments.html)
 *   - [ListTagsForResource](https://docs.aws.amazon.com/mwaa/latest/API/API_ListTagsForResource.html)
 *   - [TagResource](https://docs.aws.amazon.com/mwaa/latest/API/API_TagResource.html)
 *   - [UntagResource](https://docs.aws.amazon.com/mwaa/latest/API/API_UntagResource.html)
 *   - [UpdateEnvironment](https://docs.aws.amazon.com/mwaa/latest/API/API_UpdateEnvironment.html)
 * - `env.airflow.{region}.amazonaws.com` (use `env.airflow.{region}.api.aws` for IPv6) - This endpoint is used to operate the Airflow environment.
 *
 *   - [CreateCliToken](https://docs.aws.amazon.com/mwaa/latest/API/API_CreateCliToken.html)
 *   - [CreateWebLoginToken](https://docs.aws.amazon.com/mwaa/latest/API/API_CreateWebLoginToken.html)
 *   - [InvokeRestApi](https://docs.aws.amazon.com/mwaa/latest/API/API_InvokeRestApi.html)
 *
 * **Regions**
 *
 * For a list of supported regions, see [Amazon MWAA endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/mwaa.html) in the *Amazon Web Services General Reference*.
 *
 * @packageDocumentation
 */
export * from "./MWAAClient";
export * from "./MWAA";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { MWAAExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { MWAAServiceException } from "./models/MWAAServiceException";
