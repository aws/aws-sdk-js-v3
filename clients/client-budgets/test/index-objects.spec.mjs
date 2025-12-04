import {
  ActionStatus,
  ActionSubType,
  ActionType,
  ApprovalModel,
  AutoAdjustType,
  BudgetType,
  Budgets,
  BudgetsClient,
  BudgetsServiceException,
  ComparisonOperator,
  CreateBudgetActionCommand,
  CreateBudgetCommand,
  CreateNotificationCommand,
  CreateSubscriberCommand,
  DeleteBudgetActionCommand,
  DeleteBudgetCommand,
  DeleteNotificationCommand,
  DeleteSubscriberCommand,
  DescribeBudgetActionCommand,
  DescribeBudgetActionHistoriesCommand,
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetCommand,
  DescribeBudgetNotificationsForAccountCommand,
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetsCommand,
  DescribeNotificationsForBudgetCommand,
  DescribeSubscribersForNotificationCommand,
  Dimension,
  EventType,
  ExecuteBudgetActionCommand,
  ExecutionType,
  HealthStatusReason,
  HealthStatusValue,
  ListTagsForResourceCommand,
  MatchOption,
  Metric,
  NotificationState,
  NotificationType,
  SubscriptionType,
  TagResourceCommand,
  ThresholdType,
  TimeUnit,
  UntagResourceCommand,
  UpdateBudgetActionCommand,
  UpdateBudgetCommand,
  UpdateNotificationCommand,
  UpdateSubscriberCommand,
  paginateDescribeBudgetActionHistories,
  paginateDescribeBudgetActionsForAccount,
  paginateDescribeBudgetActionsForBudget,
  paginateDescribeBudgetNotificationsForAccount,
  paginateDescribeBudgetPerformanceHistory,
  paginateDescribeBudgets,
  paginateDescribeNotificationsForBudget,
  paginateDescribeSubscribersForNotification,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BudgetsClient === "function");
assert(typeof Budgets === "function");
// commands
assert(typeof CreateBudgetCommand === "function");
assert(typeof CreateBudgetActionCommand === "function");
assert(typeof CreateNotificationCommand === "function");
assert(typeof CreateSubscriberCommand === "function");
assert(typeof DeleteBudgetCommand === "function");
assert(typeof DeleteBudgetActionCommand === "function");
assert(typeof DeleteNotificationCommand === "function");
assert(typeof DeleteSubscriberCommand === "function");
assert(typeof DescribeBudgetCommand === "function");
assert(typeof DescribeBudgetActionCommand === "function");
assert(typeof DescribeBudgetActionHistoriesCommand === "function");
assert(typeof DescribeBudgetActionsForAccountCommand === "function");
assert(typeof DescribeBudgetActionsForBudgetCommand === "function");
assert(typeof DescribeBudgetNotificationsForAccountCommand === "function");
assert(typeof DescribeBudgetPerformanceHistoryCommand === "function");
assert(typeof DescribeBudgetsCommand === "function");
assert(typeof DescribeNotificationsForBudgetCommand === "function");
assert(typeof DescribeSubscribersForNotificationCommand === "function");
assert(typeof ExecuteBudgetActionCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBudgetCommand === "function");
assert(typeof UpdateBudgetActionCommand === "function");
assert(typeof UpdateNotificationCommand === "function");
assert(typeof UpdateSubscriberCommand === "function");
// enums
assert(typeof ActionStatus === "object");
assert(typeof ActionSubType === "object");
assert(typeof ActionType === "object");
assert(typeof ApprovalModel === "object");
assert(typeof AutoAdjustType === "object");
assert(typeof BudgetType === "object");
assert(typeof ComparisonOperator === "object");
assert(typeof Dimension === "object");
assert(typeof EventType === "object");
assert(typeof ExecutionType === "object");
assert(typeof HealthStatusReason === "object");
assert(typeof HealthStatusValue === "object");
assert(typeof MatchOption === "object");
assert(typeof Metric === "object");
assert(typeof NotificationState === "object");
assert(typeof NotificationType === "object");
assert(typeof SubscriptionType === "object");
assert(typeof ThresholdType === "object");
assert(typeof TimeUnit === "object");
// errors
assert(BudgetsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeBudgetActionHistories === "function");
assert(typeof paginateDescribeBudgetActionsForAccount === "function");
assert(typeof paginateDescribeBudgetActionsForBudget === "function");
assert(typeof paginateDescribeBudgetNotificationsForAccount === "function");
assert(typeof paginateDescribeBudgetPerformanceHistory === "function");
assert(typeof paginateDescribeBudgets === "function");
assert(typeof paginateDescribeNotificationsForBudget === "function");
assert(typeof paginateDescribeSubscribersForNotification === "function");
console.log(`Budgets index test passed.`);
