// smithy-typescript generated code
/* eslint-disable */
/**
 * This CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the CodeStar Notifications API. You can use the CodeStar Notifications API to work with the following objects:
 *
 * Notification rules, by calling the following:
 *
 * - CreateNotificationRule, which creates a notification rule for a resource in your account.
 * - DeleteNotificationRule, which deletes a notification rule.
 * - DescribeNotificationRule, which provides information about a notification rule.
 * - ListNotificationRules, which lists the notification rules associated with your account.
 * - UpdateNotificationRule, which changes the name, events, or targets associated with a notification rule.
 * - Subscribe, which subscribes a target to a notification rule.
 * - Unsubscribe, which removes a target from a notification rule.
 *
 * Targets, by calling the following:
 *
 * - DeleteTarget, which removes a notification rule target from a notification rule.
 * - ListTargets, which lists the targets associated with a notification rule.
 *
 * Events, by calling the following:
 *
 * - ListEventTypes, which lists the event types you can include in a notification rule.
 *
 * Tags, by calling the following:
 *
 * - ListTagsForResource, which lists the tags already associated with a notification rule in your account.
 * - TagResource, which associates a tag you provide with a notification rule in your account.
 * - UntagResource, which removes a tag from a notification rule in your account.
 *
 * For information about how to use CodeStar Notifications, see the [Amazon Web Services Developer Tools Console User Guide](https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html).
 *
 * @packageDocumentation
 */
export * from "./CodestarNotificationsClient";
export * from "./CodestarNotifications";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { CodestarNotificationsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { CodestarNotificationsServiceException } from "./models/CodestarNotificationsServiceException";
