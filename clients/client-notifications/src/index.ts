// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The <i>Amazon Web Services User Notifications API Reference</i> provides descriptions, API request parameters, and the JSON response for each of the User Notification API actions.</p>
 *          <p>User Notification control plane APIs are currently available in US East (Virginia) - <code>us-east-1</code>.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationEvent.html">GetNotificationEvent</a>
 * 	 and <a href="https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationEvents.html">ListNotificationEvents</a> APIs are currently available in
 * 	 <a href="https://docs.aws.amazon.com/notifications/latest/userguide/supported-regions.html">commercial partition Regions</a> and only return notifications stored in the same Region in which they're called.</p>
 *          <p>The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a
 * 	 <a href="https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html">notification hub</a> in addition to US East (Virginia).</p>
 *
 * @packageDocumentation
 */
export * from "./NotificationsClient";
export * from "./Notifications";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { NotificationsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { NotificationsServiceException } from "./models/NotificationsServiceException";
