// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Step Functions</fullname>
 *          <p>With Step Functions, you can create workflows, also called <i>state machines</i>, to build distributed applications, automate processes, orchestrate microservices, and create data and machine learning pipelines.</p>
 *          <p>Through the Step Functions API, you can create, list, update, and delete state machines, activities, and other data types. You can start, stop, and redrive your state machines. Your activity workers can send task success, heartbeat, and failure responses.</p>
 *          <p>With API calls, you can also manage other aspects of your workflow, such as tags, versions, and aliases.</p>
 *          <p>For more information about developing solutions with Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 *          <important>
 *             <p>If you use the Step Functions API actions using Amazon Web Services SDK integrations, make sure the API actions are in camel case and parameter names are in Pascal case. For example, you might use Step Functions API action <code>startSyncExecution</code> and specify its parameter as <code>StateMachineArn</code>.</p>
 *          </important>
 *
 * @packageDocumentation
 */
export * from "./SFNClient";
export * from "./SFN";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { SFNExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { SFNServiceException } from "./models/SFNServiceException";
