// smithy-typescript generated code
/* eslint-disable */
/**
 * AppConfig helps you safely change application behavior in production without redeploying code. Using feature flags and dynamic free-form configurations, you can control how your application runs in real time. This approach reduces risk, accelerates releases, and enables faster responses to issues. You can gradually roll out new features to specific users, monitor their impact, and expand availability with confidence. You can also update block lists, allow lists, throttling limits, and logging levels instantly, allowing you to mitigate issues and fine-tune performance without a deployment.
 *
 * AppConfig supports a broad spectrum of use cases:
 *
 * - **Feature flags and toggles** – Gradually release new capabilities to targeted users, monitor impact, and instantly roll back changes if issues occur.
 * - **Application tuning** – Introduce changes safely in production, measure their effects, and refine behavior without redeploying code.
 * - **Allow list or block list** – Control access to features or restrict specific users in real time, without modifying application code.
 * - **Centralized configuration storage** – Manage configuration data consistently across workloads. AppConfig can deploy configuration from the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Systems Manager Parameter Store, or Amazon S3.
 *
 * **How AppConfig works**
 *
 * This section provides a high-level description of how AppConfig works and how you get started.
 *
 * - **1. Identify configuration data to manage in AppConfig**
 *
 *   Before creating a configuration profile, identify the configuration data in your code that you want to manage dynamically using AppConfig. Common examples include feature flags, allow and block lists, logging levels, service limits, and throttling rules. These values tend to change frequently and can cause issues if misconfigured.
 *
 *   If your configuration data already exists in cloud services such as Systems Manager Parameter Store or Amazon S3, you can use AppConfig to validate, deploy, and manage that data more effectively.
 *
 * - **2. Create a configuration profile in AppConfig**
 *
 *   A configuration profile defines how AppConfig locates and manages your configuration data. It includes a URI that points to the data source and a profile type.
 *
 *   AppConfig supports two profile types
 *
 *   - **Feature flags** – Enable controlled feature releases, gradual rollouts, and testing in production.
 *   - **Free-form configurations** – Store and retrieve configuration data from external sources and update it without redeploying code.
 *
 *   Both profile types help decouple configuration from code, support continuous delivery, and reduce deployment risk.
 *
 *   You can also add optional validators to ensure that configuration data is syntactically and semantically correct. During deployment, AppConfig evaluates these validators and automatically rolls back changes if validation fails.
 *
 *   Each configuration profile is associated with an application, which acts as a logical container for your configuration resources. For more information about creating a configuration profile, see [Creating a configuration profile in AppConfig](http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html) in the the *AppConfig User Guide*.
 *
 * - **3. Deploy configuration data**
 *
 *   When you start a deployment, AppConfig:
 *
 *   1. Retrieves configuration data from the source defined in the configuration profile
 *   2. Validates the data using the configured validators
 *   3. Delivers the validated configuration to AppConfig Agent
 *
 *   The delivered configuration becomes the deployed version used by your application. For more information about deploying a configuration, see [Deploying feature flags and configuration data in AppConfig](http://docs.aws.amazon.com/appconfig/latest/userguide/deploying-feature-flags.html).
 *
 * - **4. Retrieve configuration data**
 *
 *   Your application retrieves configuration data by calling a local endpoint exposed by AppConfig Agent, which caches the deployed configuration. Retrieving data is a metered event. AppConfig Agent supports a variety of use cases, as described in [How to use AppConfig Agent to retrieve configuration data](http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-agent-how-to-use.html).
 *
 *   If the agent is not suitable for your use case, your application can retrieve configuration data directly from AppConfig by calling the [StartConfigurationSession](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html) and [GetLatestConfiguration](https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html) API actions.
 *
 *   For more information about retrieving a configuration, see [Retrieving feature flags and configuration data in AppConfig](http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html).
 *
 * This reference is intended to be used with the [AppConfig User Guide](http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html).
 *
 * @packageDocumentation
 */
export * from "./AppConfigClient";
export * from "./AppConfig";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AppConfigExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AppConfigServiceException } from "./models/AppConfigServiceException";
