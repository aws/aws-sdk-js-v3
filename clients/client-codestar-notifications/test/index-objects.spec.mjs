import {
  AccessDeniedException,
  AccessDeniedException$,
  CodestarNotifications,
  CodestarNotificationsClient,
  CodestarNotificationsServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConfigurationException,
  ConfigurationException$,
  CreateNotificationRule$,
  CreateNotificationRuleCommand,
  CreateNotificationRuleRequest$,
  CreateNotificationRuleResult$,
  DeleteNotificationRule$,
  DeleteNotificationRuleCommand,
  DeleteNotificationRuleRequest$,
  DeleteNotificationRuleResult$,
  DeleteTarget$,
  DeleteTargetCommand,
  DeleteTargetRequest$,
  DeleteTargetResult$,
  DescribeNotificationRule$,
  DescribeNotificationRuleCommand,
  DescribeNotificationRuleRequest$,
  DescribeNotificationRuleResult$,
  DetailType,
  EventTypeSummary$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListEventTypes$,
  ListEventTypesCommand,
  ListEventTypesFilter$,
  ListEventTypesFilterName,
  ListEventTypesRequest$,
  ListEventTypesResult$,
  ListNotificationRules$,
  ListNotificationRulesCommand,
  ListNotificationRulesFilter$,
  ListNotificationRulesFilterName,
  ListNotificationRulesRequest$,
  ListNotificationRulesResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  ListTargets$,
  ListTargetsCommand,
  ListTargetsFilter$,
  ListTargetsFilterName,
  ListTargetsRequest$,
  ListTargetsResult$,
  NotificationRuleStatus,
  NotificationRuleSummary$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Subscribe$,
  SubscribeCommand,
  SubscribeRequest$,
  SubscribeResult$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResult$,
  Target$,
  TargetStatus,
  TargetSummary$,
  Unsubscribe$,
  UnsubscribeCommand,
  UnsubscribeRequest$,
  UnsubscribeResult$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResult$,
  UpdateNotificationRule$,
  UpdateNotificationRuleCommand,
  UpdateNotificationRuleRequest$,
  UpdateNotificationRuleResult$,
  ValidationException,
  ValidationException$,
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
assert(typeof CreateNotificationRule$ === "object");
assert(typeof DeleteNotificationRuleCommand === "function");
assert(typeof DeleteNotificationRule$ === "object");
assert(typeof DeleteTargetCommand === "function");
assert(typeof DeleteTarget$ === "object");
assert(typeof DescribeNotificationRuleCommand === "function");
assert(typeof DescribeNotificationRule$ === "object");
assert(typeof ListEventTypesCommand === "function");
assert(typeof ListEventTypes$ === "object");
assert(typeof ListNotificationRulesCommand === "function");
assert(typeof ListNotificationRules$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTargetsCommand === "function");
assert(typeof ListTargets$ === "object");
assert(typeof SubscribeCommand === "function");
assert(typeof Subscribe$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UnsubscribeCommand === "function");
assert(typeof Unsubscribe$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateNotificationRuleCommand === "function");
assert(typeof UpdateNotificationRule$ === "object");
// structural schemas
assert(typeof CreateNotificationRuleRequest$ === "object");
assert(typeof CreateNotificationRuleResult$ === "object");
assert(typeof DeleteNotificationRuleRequest$ === "object");
assert(typeof DeleteNotificationRuleResult$ === "object");
assert(typeof DeleteTargetRequest$ === "object");
assert(typeof DeleteTargetResult$ === "object");
assert(typeof DescribeNotificationRuleRequest$ === "object");
assert(typeof DescribeNotificationRuleResult$ === "object");
assert(typeof EventTypeSummary$ === "object");
assert(typeof ListEventTypesFilter$ === "object");
assert(typeof ListEventTypesRequest$ === "object");
assert(typeof ListEventTypesResult$ === "object");
assert(typeof ListNotificationRulesFilter$ === "object");
assert(typeof ListNotificationRulesRequest$ === "object");
assert(typeof ListNotificationRulesResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof ListTargetsFilter$ === "object");
assert(typeof ListTargetsRequest$ === "object");
assert(typeof ListTargetsResult$ === "object");
assert(typeof NotificationRuleSummary$ === "object");
assert(typeof SubscribeRequest$ === "object");
assert(typeof SubscribeResult$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResult$ === "object");
assert(typeof Target$ === "object");
assert(typeof TargetSummary$ === "object");
assert(typeof UnsubscribeRequest$ === "object");
assert(typeof UnsubscribeResult$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResult$ === "object");
assert(typeof UpdateNotificationRuleRequest$ === "object");
assert(typeof UpdateNotificationRuleResult$ === "object");
// enums
assert(typeof DetailType === "object");
assert(typeof ListEventTypesFilterName === "object");
assert(typeof ListNotificationRulesFilterName === "object");
assert(typeof ListTargetsFilterName === "object");
assert(typeof NotificationRuleStatus === "object");
assert(typeof TargetStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConfigurationException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof ConfigurationException$ === "object");
assert(InvalidNextTokenException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof CodestarNotificationsServiceException);
assert(typeof ValidationException$ === "object");
assert(CodestarNotificationsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListEventTypes === "function");
assert(typeof paginateListNotificationRules === "function");
assert(typeof paginateListTargets === "function");
console.log(`CodestarNotifications index test passed.`);
