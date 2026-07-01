// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>AppConfig helps you safely change application behavior in production without redeploying code. Using feature flags and dynamic free-form configurations, you can control how your application runs in real time. This approach reduces risk, accelerates releases, and enables faster responses to issues. You can gradually roll out new features to specific users, monitor their impact, and expand availability with confidence. You can also update block lists, allow lists, throttling limits, and logging levels instantly, allowing you to mitigate issues and fine-tune performance without a deployment.</p>
 *          <p>AppConfig supports a broad spectrum of use cases:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Feature flags and toggles</b> – Gradually release new capabilities to targeted users, monitor impact, and instantly roll back changes if issues occur.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Application tuning</b> – Introduce changes safely in production, measure their effects, and refine behavior without redeploying code.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Allow list or block list</b> – Control access to features or restrict specific users in real time, without modifying application code. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Centralized configuration storage</b> – Manage configuration data consistently across workloads. AppConfig can deploy configuration from the AppConfig hosted configuration store, Secrets Manager, Systems Manager, Systems Manager Parameter Store, or Amazon S3.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>How AppConfig works</b>
 *          </p>
 *          <p>This section provides a high-level description of how AppConfig works and how
 *          you get started.</p>
 *          <dl>
 *             <dt>1. Identify configuration data to manage in AppConfig</dt>
 *             <dd>
 *                <p>Before creating a configuration profile, identify the configuration data in your code that you want to manage dynamically using AppConfig. Common examples include feature flags, allow and block lists, logging levels, service limits, and throttling rules. These values tend to change frequently and can cause issues if misconfigured.</p>
 *                <p>If your configuration data already exists in cloud services such as Systems Manager Parameter Store or Amazon S3, you can use AppConfig to validate, deploy, and manage that data more effectively.</p>
 *             </dd>
 *             <dt>2. Create a configuration profile in AppConfig</dt>
 *             <dd>
 *                <p>A configuration profile defines how AppConfig locates and manages your configuration data. It includes a URI that points to the data source and a profile type.</p>
 *                <p>AppConfig supports two profile types</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <b>Feature flags</b> – Enable controlled feature releases, gradual rollouts, and testing in production.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <b>Free-form configurations</b> – Store and retrieve configuration data from external sources and update it without redeploying code.</p>
 *                   </li>
 *                </ul>
 *                <p>Both profile types help decouple configuration from code, support continuous delivery, and reduce deployment risk.</p>
 *                <p>You can also add optional validators to ensure that configuration data is syntactically and semantically correct. During deployment, AppConfig evaluates these validators and automatically rolls back changes if validation fails.</p>
 *                <p>Each configuration profile is associated with an application, which acts as a logical container for your configuration resources. For more information about creating a configuration profile, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-configuration-profile.html">Creating a configuration profile in AppConfig</a> in the the <i>AppConfig User Guide</i>.</p>
 *             </dd>
 *             <dt>3. Deploy configuration data</dt>
 *             <dd>
 *                <p>When you start a deployment, AppConfig:</p>
 *                <ol>
 *                   <li>
 *                      <p>Retrieves configuration data from the source defined in the configuration profile</p>
 *                   </li>
 *                   <li>
 *                      <p>Validates the data using the configured validators</p>
 *                   </li>
 *                   <li>
 *                      <p>Delivers the validated configuration to AppConfig Agent</p>
 *                   </li>
 *                </ol>
 *                <p>The delivered configuration becomes the deployed version used by your application. For more information about deploying a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/deploying-feature-flags.html">Deploying feature flags and configuration data in AppConfig</a>.</p>
 *             </dd>
 *             <dt>4. Retrieve configuration data</dt>
 *             <dd>
 *                <p>Your application retrieves configuration data by calling a local endpoint exposed by AppConfig Agent, which caches the deployed configuration. Retrieving data is a metered event. AppConfig Agent supports a variety of use cases, as described in <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-agent-how-to-use.html">How to use AppConfig Agent to retrieve configuration data</a>.</p>
 *                <p>If the agent is not suitable for your use case, your application can retrieve configuration data directly from AppConfig by calling the <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_StartConfigurationSession.html">StartConfigurationSession</a> and <a href="https://docs.aws.amazon.com/appconfig/2019-10-09/APIReference/API_appconfigdata_GetLatestConfiguration.html">GetLatestConfiguration</a> API actions. </p>
 *                <p>For more information about retrieving a configuration, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/retrieving-feature-flags.html">Retrieving feature flags and configuration data in AppConfig</a>.</p>
 *             </dd>
 *          </dl>
 *          <p>This reference is intended to be used with the <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html">AppConfig User
 *          Guide</a>.</p>
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
export * from "./schemas/schemas_0";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { AppConfigServiceException } from "./models/AppConfigServiceException";
