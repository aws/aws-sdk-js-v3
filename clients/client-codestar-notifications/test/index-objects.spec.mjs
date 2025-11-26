import {
  CodestarNotifications,
  CodestarNotificationsClient,
  CodestarNotificationsServiceException,
  CreateNotificationRuleCommand,
  DeleteNotificationRuleCommand,
  DeleteTargetCommand,
  DescribeNotificationRuleCommand,
  DetailType,
  ListEventTypesCommand,
  ListEventTypesFilterName,
  ListNotificationRulesCommand,
  ListNotificationRulesFilterName,
  ListTagsForResourceCommand,
  ListTargetsCommand,
  ListTargetsFilterName,
  NotificationRuleStatus,
  SubscribeCommand,
  TagResourceCommand,
  TargetStatus,
  UnsubscribeCommand,
  UntagResourceCommand,
  UpdateNotificationRuleCommand,
  paginateListEventTypes,
  paginateListNotificationRules,
  paginateListTargets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodestarNotificationsClient === "function")
assert(typeof CodestarNotifications === "function")
// commands
assert(typeof CreateNotificationRuleCommand === "function")
assert(typeof DeleteNotificationRuleCommand === "function")
assert(typeof DeleteTargetCommand === "function")
assert(typeof DescribeNotificationRuleCommand === "function")
assert(typeof ListEventTypesCommand === "function")
assert(typeof ListNotificationRulesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListTargetsCommand === "function")
assert(typeof SubscribeCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UnsubscribeCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateNotificationRuleCommand === "function")
// enums
assert(typeof DetailType === "object");
assert(typeof ListEventTypesFilterName === "object");
assert(typeof ListNotificationRulesFilterName === "object");
assert(typeof ListTargetsFilterName === "object");
assert(typeof NotificationRuleStatus === "object");
assert(typeof TargetStatus === "object");
// errors
assert(CodestarNotificationsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListEventTypes === "function")
assert(typeof paginateListNotificationRules === "function")
assert(typeof paginateListTargets === "function")
console.log(`CodestarNotifications index test passed.`);
