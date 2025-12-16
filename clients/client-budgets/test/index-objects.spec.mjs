import {
  AccessDeniedException,
  AccessDeniedException$,
  Action$,
  ActionHistory$,
  ActionHistoryDetails$,
  ActionStatus,
  ActionSubType,
  ActionThreshold$,
  ActionType,
  ApprovalModel,
  AutoAdjustData$,
  AutoAdjustType,
  BillingViewHealthStatusException,
  BillingViewHealthStatusException$,
  Budget$,
  BudgetNotificationsForAccount$,
  BudgetPerformanceHistory$,
  BudgetType,
  BudgetedAndActualAmounts$,
  Budgets,
  BudgetsClient,
  BudgetsServiceException,
  CalculatedSpend$,
  ComparisonOperator,
  CostCategoryValues$,
  CostTypes$,
  CreateBudget$,
  CreateBudgetAction$,
  CreateBudgetActionCommand,
  CreateBudgetActionRequest$,
  CreateBudgetActionResponse$,
  CreateBudgetCommand,
  CreateBudgetRequest$,
  CreateBudgetResponse$,
  CreateNotification$,
  CreateNotificationCommand,
  CreateNotificationRequest$,
  CreateNotificationResponse$,
  CreateSubscriber$,
  CreateSubscriberCommand,
  CreateSubscriberRequest$,
  CreateSubscriberResponse$,
  CreationLimitExceededException,
  CreationLimitExceededException$,
  Definition$,
  DeleteBudget$,
  DeleteBudgetAction$,
  DeleteBudgetActionCommand,
  DeleteBudgetActionRequest$,
  DeleteBudgetActionResponse$,
  DeleteBudgetCommand,
  DeleteBudgetRequest$,
  DeleteBudgetResponse$,
  DeleteNotification$,
  DeleteNotificationCommand,
  DeleteNotificationRequest$,
  DeleteNotificationResponse$,
  DeleteSubscriber$,
  DeleteSubscriberCommand,
  DeleteSubscriberRequest$,
  DeleteSubscriberResponse$,
  DescribeBudget$,
  DescribeBudgetAction$,
  DescribeBudgetActionCommand,
  DescribeBudgetActionHistories$,
  DescribeBudgetActionHistoriesCommand,
  DescribeBudgetActionHistoriesRequest$,
  DescribeBudgetActionHistoriesResponse$,
  DescribeBudgetActionRequest$,
  DescribeBudgetActionResponse$,
  DescribeBudgetActionsForAccount$,
  DescribeBudgetActionsForAccountCommand,
  DescribeBudgetActionsForAccountRequest$,
  DescribeBudgetActionsForAccountResponse$,
  DescribeBudgetActionsForBudget$,
  DescribeBudgetActionsForBudgetCommand,
  DescribeBudgetActionsForBudgetRequest$,
  DescribeBudgetActionsForBudgetResponse$,
  DescribeBudgetCommand,
  DescribeBudgetNotificationsForAccount$,
  DescribeBudgetNotificationsForAccountCommand,
  DescribeBudgetNotificationsForAccountRequest$,
  DescribeBudgetNotificationsForAccountResponse$,
  DescribeBudgetPerformanceHistory$,
  DescribeBudgetPerformanceHistoryCommand,
  DescribeBudgetPerformanceHistoryRequest$,
  DescribeBudgetPerformanceHistoryResponse$,
  DescribeBudgetRequest$,
  DescribeBudgetResponse$,
  DescribeBudgets$,
  DescribeBudgetsCommand,
  DescribeBudgetsRequest$,
  DescribeBudgetsResponse$,
  DescribeNotificationsForBudget$,
  DescribeNotificationsForBudgetCommand,
  DescribeNotificationsForBudgetRequest$,
  DescribeNotificationsForBudgetResponse$,
  DescribeSubscribersForNotification$,
  DescribeSubscribersForNotificationCommand,
  DescribeSubscribersForNotificationRequest$,
  DescribeSubscribersForNotificationResponse$,
  Dimension,
  DuplicateRecordException,
  DuplicateRecordException$,
  EventType,
  ExecuteBudgetAction$,
  ExecuteBudgetActionCommand,
  ExecuteBudgetActionRequest$,
  ExecuteBudgetActionResponse$,
  ExecutionType,
  ExpiredNextTokenException,
  ExpiredNextTokenException$,
  Expression$,
  ExpressionDimensionValues$,
  HealthStatus$,
  HealthStatusReason,
  HealthStatusValue,
  HistoricalOptions$,
  IamActionDefinition$,
  InternalErrorException,
  InternalErrorException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MatchOption,
  Metric,
  NotFoundException,
  NotFoundException$,
  Notification$,
  NotificationState,
  NotificationType,
  NotificationWithSubscribers$,
  ResourceLockedException,
  ResourceLockedException$,
  ResourceTag$,
  ScpActionDefinition$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  Spend$,
  SsmActionDefinition$,
  Subscriber$,
  SubscriptionType,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagValues$,
  ThresholdType,
  ThrottlingException,
  ThrottlingException$,
  TimePeriod$,
  TimeUnit,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateBudget$,
  UpdateBudgetAction$,
  UpdateBudgetActionCommand,
  UpdateBudgetActionRequest$,
  UpdateBudgetActionResponse$,
  UpdateBudgetCommand,
  UpdateBudgetRequest$,
  UpdateBudgetResponse$,
  UpdateNotification$,
  UpdateNotificationCommand,
  UpdateNotificationRequest$,
  UpdateNotificationResponse$,
  UpdateSubscriber$,
  UpdateSubscriberCommand,
  UpdateSubscriberRequest$,
  UpdateSubscriberResponse$,
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
assert(typeof CreateBudget$ === "object");
assert(typeof CreateBudgetActionCommand === "function");
assert(typeof CreateBudgetAction$ === "object");
assert(typeof CreateNotificationCommand === "function");
assert(typeof CreateNotification$ === "object");
assert(typeof CreateSubscriberCommand === "function");
assert(typeof CreateSubscriber$ === "object");
assert(typeof DeleteBudgetCommand === "function");
assert(typeof DeleteBudget$ === "object");
assert(typeof DeleteBudgetActionCommand === "function");
assert(typeof DeleteBudgetAction$ === "object");
assert(typeof DeleteNotificationCommand === "function");
assert(typeof DeleteNotification$ === "object");
assert(typeof DeleteSubscriberCommand === "function");
assert(typeof DeleteSubscriber$ === "object");
assert(typeof DescribeBudgetCommand === "function");
assert(typeof DescribeBudget$ === "object");
assert(typeof DescribeBudgetActionCommand === "function");
assert(typeof DescribeBudgetAction$ === "object");
assert(typeof DescribeBudgetActionHistoriesCommand === "function");
assert(typeof DescribeBudgetActionHistories$ === "object");
assert(typeof DescribeBudgetActionsForAccountCommand === "function");
assert(typeof DescribeBudgetActionsForAccount$ === "object");
assert(typeof DescribeBudgetActionsForBudgetCommand === "function");
assert(typeof DescribeBudgetActionsForBudget$ === "object");
assert(typeof DescribeBudgetNotificationsForAccountCommand === "function");
assert(typeof DescribeBudgetNotificationsForAccount$ === "object");
assert(typeof DescribeBudgetPerformanceHistoryCommand === "function");
assert(typeof DescribeBudgetPerformanceHistory$ === "object");
assert(typeof DescribeBudgetsCommand === "function");
assert(typeof DescribeBudgets$ === "object");
assert(typeof DescribeNotificationsForBudgetCommand === "function");
assert(typeof DescribeNotificationsForBudget$ === "object");
assert(typeof DescribeSubscribersForNotificationCommand === "function");
assert(typeof DescribeSubscribersForNotification$ === "object");
assert(typeof ExecuteBudgetActionCommand === "function");
assert(typeof ExecuteBudgetAction$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBudgetCommand === "function");
assert(typeof UpdateBudget$ === "object");
assert(typeof UpdateBudgetActionCommand === "function");
assert(typeof UpdateBudgetAction$ === "object");
assert(typeof UpdateNotificationCommand === "function");
assert(typeof UpdateNotification$ === "object");
assert(typeof UpdateSubscriberCommand === "function");
assert(typeof UpdateSubscriber$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof ActionHistory$ === "object");
assert(typeof ActionHistoryDetails$ === "object");
assert(typeof ActionThreshold$ === "object");
assert(typeof AutoAdjustData$ === "object");
assert(typeof Budget$ === "object");
assert(typeof BudgetedAndActualAmounts$ === "object");
assert(typeof BudgetNotificationsForAccount$ === "object");
assert(typeof BudgetPerformanceHistory$ === "object");
assert(typeof CalculatedSpend$ === "object");
assert(typeof CostCategoryValues$ === "object");
assert(typeof CostTypes$ === "object");
assert(typeof CreateBudgetActionRequest$ === "object");
assert(typeof CreateBudgetActionResponse$ === "object");
assert(typeof CreateBudgetRequest$ === "object");
assert(typeof CreateBudgetResponse$ === "object");
assert(typeof CreateNotificationRequest$ === "object");
assert(typeof CreateNotificationResponse$ === "object");
assert(typeof CreateSubscriberRequest$ === "object");
assert(typeof CreateSubscriberResponse$ === "object");
assert(typeof Definition$ === "object");
assert(typeof DeleteBudgetActionRequest$ === "object");
assert(typeof DeleteBudgetActionResponse$ === "object");
assert(typeof DeleteBudgetRequest$ === "object");
assert(typeof DeleteBudgetResponse$ === "object");
assert(typeof DeleteNotificationRequest$ === "object");
assert(typeof DeleteNotificationResponse$ === "object");
assert(typeof DeleteSubscriberRequest$ === "object");
assert(typeof DeleteSubscriberResponse$ === "object");
assert(typeof DescribeBudgetActionHistoriesRequest$ === "object");
assert(typeof DescribeBudgetActionHistoriesResponse$ === "object");
assert(typeof DescribeBudgetActionRequest$ === "object");
assert(typeof DescribeBudgetActionResponse$ === "object");
assert(typeof DescribeBudgetActionsForAccountRequest$ === "object");
assert(typeof DescribeBudgetActionsForAccountResponse$ === "object");
assert(typeof DescribeBudgetActionsForBudgetRequest$ === "object");
assert(typeof DescribeBudgetActionsForBudgetResponse$ === "object");
assert(typeof DescribeBudgetNotificationsForAccountRequest$ === "object");
assert(typeof DescribeBudgetNotificationsForAccountResponse$ === "object");
assert(typeof DescribeBudgetPerformanceHistoryRequest$ === "object");
assert(typeof DescribeBudgetPerformanceHistoryResponse$ === "object");
assert(typeof DescribeBudgetRequest$ === "object");
assert(typeof DescribeBudgetResponse$ === "object");
assert(typeof DescribeBudgetsRequest$ === "object");
assert(typeof DescribeBudgetsResponse$ === "object");
assert(typeof DescribeNotificationsForBudgetRequest$ === "object");
assert(typeof DescribeNotificationsForBudgetResponse$ === "object");
assert(typeof DescribeSubscribersForNotificationRequest$ === "object");
assert(typeof DescribeSubscribersForNotificationResponse$ === "object");
assert(typeof ExecuteBudgetActionRequest$ === "object");
assert(typeof ExecuteBudgetActionResponse$ === "object");
assert(typeof Expression$ === "object");
assert(typeof ExpressionDimensionValues$ === "object");
assert(typeof HealthStatus$ === "object");
assert(typeof HistoricalOptions$ === "object");
assert(typeof IamActionDefinition$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Notification$ === "object");
assert(typeof NotificationWithSubscribers$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof ScpActionDefinition$ === "object");
assert(typeof Spend$ === "object");
assert(typeof SsmActionDefinition$ === "object");
assert(typeof Subscriber$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagValues$ === "object");
assert(typeof TimePeriod$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateBudgetActionRequest$ === "object");
assert(typeof UpdateBudgetActionResponse$ === "object");
assert(typeof UpdateBudgetRequest$ === "object");
assert(typeof UpdateBudgetResponse$ === "object");
assert(typeof UpdateNotificationRequest$ === "object");
assert(typeof UpdateNotificationResponse$ === "object");
assert(typeof UpdateSubscriberRequest$ === "object");
assert(typeof UpdateSubscriberResponse$ === "object");
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
assert(AccessDeniedException.prototype instanceof BudgetsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BillingViewHealthStatusException.prototype instanceof BudgetsServiceException);
assert(typeof BillingViewHealthStatusException$ === "object");
assert(CreationLimitExceededException.prototype instanceof BudgetsServiceException);
assert(typeof CreationLimitExceededException$ === "object");
assert(DuplicateRecordException.prototype instanceof BudgetsServiceException);
assert(typeof DuplicateRecordException$ === "object");
assert(ExpiredNextTokenException.prototype instanceof BudgetsServiceException);
assert(typeof ExpiredNextTokenException$ === "object");
assert(InternalErrorException.prototype instanceof BudgetsServiceException);
assert(typeof InternalErrorException$ === "object");
assert(InvalidNextTokenException.prototype instanceof BudgetsServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof BudgetsServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(NotFoundException.prototype instanceof BudgetsServiceException);
assert(typeof NotFoundException$ === "object");
assert(ResourceLockedException.prototype instanceof BudgetsServiceException);
assert(typeof ResourceLockedException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BudgetsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof BudgetsServiceException);
assert(typeof ThrottlingException$ === "object");
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
