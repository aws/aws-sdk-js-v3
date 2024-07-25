// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Step Functions</fullname>
 *          <p>Step Functions coordinates the components of distributed applications
 *       and microservices using visual workflows.</p>
 *          <p>You can use Step Functions to build applications from individual components, each of which performs
 *       a discrete function, or <i>task</i>, allowing you to scale and change
 *       applications quickly. Step Functions provides a console that helps visualize the components of your
 *       application as a series of steps. Step Functions automatically triggers and tracks each step, and
 *       retries steps when there are errors, so your application executes predictably and in the right
 *       order every time. Step Functions logs the state of each step, so you can quickly diagnose and debug any
 *       issues.</p>
 *          <p>Step Functions manages operations and underlying infrastructure to ensure your application is
 *       available at any scale. You can run tasks on Amazon Web Services, your own servers, or any system that has
 *       access to Amazon Web Services. You can access and use Step Functions using the console, the Amazon Web Services SDKs, or an HTTP API.
 *       For more information about Step Functions, see the <i>
 *                <a href="https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html">Step Functions Developer Guide</a>
 *             </i>.</p>
 *          <important>
 *             <p>If you use the Step Functions API actions using Amazon Web Services SDK integrations, make sure the API actions are in camel case and parameter names are in Pascal case. For example, you could use Step Functions API action <code>startSyncExecution</code> and specify its parameter as <code>StateMachineArn</code>.</p>
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
export * from "./pagination";
export * from "./models";

export { SFNServiceException } from "./models/SFNServiceException";
