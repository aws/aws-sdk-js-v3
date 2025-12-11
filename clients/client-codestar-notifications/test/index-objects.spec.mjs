import {
  AccessDeniedException,
  CodestarNotifications,
  CodestarNotificationsClient,
  CodestarNotificationsServiceException,
  ConcurrentModificationException,
  ConfigurationException,
  CreateNotificationRuleCommand,
  DeleteNotificationRuleCommand,
  DeleteTargetCommand,
  DescribeNotificationRuleCommand,
  DetailType,
  InvalidNextTokenException,
  LimitExceededException,
  ListEventTypesCommand,
  ListEventTypesFilterName,
  ListNotificationRulesCommand,
  ListNotificationRulesFilterName,
  ListTagsForResourceCommand,
  ListTargetsCommand,
  ListTargetsFilterName,
  NotificationRuleStatus,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  SubscribeCommand,
  TagResourceCommand,
  TargetStatus,
  UnsubscribeCommand,
  UntagResourceCommand,
  UpdateNotificationRuleCommand,
  ValidationException,
  paginateListEventTypes,
  paginateListNotificationRules,
  paginateListTargets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodestarNotificationsClient === "function");
assert(typeof CodestarNotifications === "function");
// commands
assert(typeof CreateNotificationRuleCommand === "function");
assert(typeof DeleteNotificationRuleCommand === "function");
assert(typeof DeleteTargetCommand === "function");
assert(typeof DescribeNotificationRuleCommand === "function");
assert(typeof ListEventTypesCommand === "function");
assert(typeof ListNotificationRulesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTargetsCommand === "function");
assert(typeof SubscribeCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UnsubscribeCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateNotificationRuleCommand === "function");
// enums
assert(typeof DetailType === "object");
assert(typeof ListEventTypesFilterName === "object");
assert(typeof ListNotificationRulesFilterName === "object");
assert(typeof ListTargetsFilterName === "object");
assert(typeof NotificationRuleStatus === "object");
assert(typeof TargetStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof CodestarNotificationsServiceException);
assert(ConcurrentModificationException.prototype instanceof CodestarNotificationsServiceException);
assert(ConfigurationException.prototype instanceof CodestarNotificationsServiceException);
assert(InvalidNextTokenException.prototype instanceof CodestarNotificationsServiceException);
assert(LimitExceededException.prototype instanceof CodestarNotificationsServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof CodestarNotificationsServiceException);
assert(ResourceNotFoundException.prototype instanceof CodestarNotificationsServiceException);
assert(ValidationException.prototype instanceof CodestarNotificationsServiceException);
assert(CodestarNotificationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEventTypes === "function");
assert(typeof paginateListNotificationRules === "function");
assert(typeof paginateListTargets === "function");
console.log(`CodestarNotifications index test passed.`);
