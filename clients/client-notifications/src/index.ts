// smithy-typescript generated code
/* eslint-disable */
/**
 * The *User Notifications API Reference* provides descriptions, API request parameters, and the JSON response for each of the User Notifications API actions.
 *
 * User Notification control plane APIs are currently available in US East (Virginia) - `us-east-1`.
 *
 * [GetNotificationEvent](https://docs.aws.amazon.com/notifications/latest/APIReference/API_GetNotificationEvent.html) and [ListNotificationEvents](https://docs.aws.amazon.com/notifications/latest/APIReference/API_ListNotificationEvents.html) APIs are currently available in [commercial partition Regions](https://docs.aws.amazon.com/notifications/latest/userguide/supported-regions.html) and only return notifications stored in the same Region in which they're called.
 *
 * The User Notifications console can only be used in US East (Virginia). Your data however, is stored in each Region chosen as a [notification hub](https://docs.aws.amazon.com/notifications/latest/userguide/notification-hubs.html) in addition to US East (Virginia).
 *
 * > **Note:** For information about descriptions, API request parameters, and the JSON response for email contact related API actions, see the [User Notifications Contacts API Reference Guide](https://docs.aws.amazon.com/notificationscontacts/latest/APIReference/Welcome.html).
 *
 * @packageDocumentation
 */
export * from "./NotificationsClient";
export * from "./Notifications";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { NotificationsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { NotificationsServiceException } from "./models/NotificationsServiceException";
