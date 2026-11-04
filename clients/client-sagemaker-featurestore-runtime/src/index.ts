// smithy-typescript generated code
/* eslint-disable */
/**
 * Contains all data plane API operations and data types for the Amazon SageMaker Feature Store. Use this API to put, delete, and retrieve (get) features from a feature store.
 *
 * Use the following operations to configure your `OnlineStore` and `OfflineStore` features, and to create and manage feature groups:
 *
 * - [CreateFeatureGroup](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateFeatureGroup.html)
 * - [DeleteFeatureGroup](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteFeatureGroup.html)
 * - [DescribeFeatureGroup](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeFeatureGroup.html)
 * - [ListFeatureGroups](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListFeatureGroups.html)
 *
 * @packageDocumentation
 */
export * from "./SageMakerFeatureStoreRuntimeClient";
export * from "./SageMakerFeatureStoreRuntime";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SageMakerFeatureStoreRuntimeExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SageMakerFeatureStoreRuntimeServiceException } from "./models/SageMakerFeatureStoreRuntimeServiceException";
