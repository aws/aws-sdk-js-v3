"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AccessDeniedException;
(function (AccessDeniedException) {
    function isa(o) {
        return smithy_client_1.isa(o, "AccessDeniedException");
    }
    AccessDeniedException.isa = isa;
})(AccessDeniedException = exports.AccessDeniedException || (exports.AccessDeniedException = {}));
var Budget;
(function (Budget) {
    function isa(o) {
        return smithy_client_1.isa(o, "Budget");
    }
    Budget.isa = isa;
})(Budget = exports.Budget || (exports.Budget = {}));
var BudgetPerformanceHistory;
(function (BudgetPerformanceHistory) {
    function isa(o) {
        return smithy_client_1.isa(o, "BudgetPerformanceHistory");
    }
    BudgetPerformanceHistory.isa = isa;
})(BudgetPerformanceHistory = exports.BudgetPerformanceHistory || (exports.BudgetPerformanceHistory = {}));
var BudgetType;
(function (BudgetType) {
    BudgetType["Cost"] = "COST";
    BudgetType["RICoverage"] = "RI_COVERAGE";
    BudgetType["RIUtilization"] = "RI_UTILIZATION";
    BudgetType["SPCoverage"] = "SAVINGS_PLANS_COVERAGE";
    BudgetType["SPUtilization"] = "SAVINGS_PLANS_UTILIZATION";
    BudgetType["Usage"] = "USAGE";
})(BudgetType = exports.BudgetType || (exports.BudgetType = {}));
var BudgetedAndActualAmounts;
(function (BudgetedAndActualAmounts) {
    function isa(o) {
        return smithy_client_1.isa(o, "BudgetedAndActualAmounts");
    }
    BudgetedAndActualAmounts.isa = isa;
})(BudgetedAndActualAmounts = exports.BudgetedAndActualAmounts || (exports.BudgetedAndActualAmounts = {}));
var CalculatedSpend;
(function (CalculatedSpend) {
    function isa(o) {
        return smithy_client_1.isa(o, "CalculatedSpend");
    }
    CalculatedSpend.isa = isa;
})(CalculatedSpend = exports.CalculatedSpend || (exports.CalculatedSpend = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQUAL_TO"] = "EQUAL_TO";
    ComparisonOperator["GREATER_THAN"] = "GREATER_THAN";
    ComparisonOperator["LESS_THAN"] = "LESS_THAN";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var CostTypes;
(function (CostTypes) {
    function isa(o) {
        return smithy_client_1.isa(o, "CostTypes");
    }
    CostTypes.isa = isa;
})(CostTypes = exports.CostTypes || (exports.CostTypes = {}));
var CreateBudgetRequest;
(function (CreateBudgetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBudgetRequest");
    }
    CreateBudgetRequest.isa = isa;
})(CreateBudgetRequest = exports.CreateBudgetRequest || (exports.CreateBudgetRequest = {}));
var CreateBudgetResponse;
(function (CreateBudgetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateBudgetResponse");
    }
    CreateBudgetResponse.isa = isa;
})(CreateBudgetResponse = exports.CreateBudgetResponse || (exports.CreateBudgetResponse = {}));
var CreateNotificationRequest;
(function (CreateNotificationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNotificationRequest");
    }
    CreateNotificationRequest.isa = isa;
})(CreateNotificationRequest = exports.CreateNotificationRequest || (exports.CreateNotificationRequest = {}));
var CreateNotificationResponse;
(function (CreateNotificationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateNotificationResponse");
    }
    CreateNotificationResponse.isa = isa;
})(CreateNotificationResponse = exports.CreateNotificationResponse || (exports.CreateNotificationResponse = {}));
var CreateSubscriberRequest;
(function (CreateSubscriberRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriberRequest");
    }
    CreateSubscriberRequest.isa = isa;
})(CreateSubscriberRequest = exports.CreateSubscriberRequest || (exports.CreateSubscriberRequest = {}));
var CreateSubscriberResponse;
(function (CreateSubscriberResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateSubscriberResponse");
    }
    CreateSubscriberResponse.isa = isa;
})(CreateSubscriberResponse = exports.CreateSubscriberResponse || (exports.CreateSubscriberResponse = {}));
var CreationLimitExceededException;
(function (CreationLimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreationLimitExceededException");
    }
    CreationLimitExceededException.isa = isa;
})(CreationLimitExceededException = exports.CreationLimitExceededException || (exports.CreationLimitExceededException = {}));
var DeleteBudgetRequest;
(function (DeleteBudgetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBudgetRequest");
    }
    DeleteBudgetRequest.isa = isa;
})(DeleteBudgetRequest = exports.DeleteBudgetRequest || (exports.DeleteBudgetRequest = {}));
var DeleteBudgetResponse;
(function (DeleteBudgetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteBudgetResponse");
    }
    DeleteBudgetResponse.isa = isa;
})(DeleteBudgetResponse = exports.DeleteBudgetResponse || (exports.DeleteBudgetResponse = {}));
var DeleteNotificationRequest;
(function (DeleteNotificationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNotificationRequest");
    }
    DeleteNotificationRequest.isa = isa;
})(DeleteNotificationRequest = exports.DeleteNotificationRequest || (exports.DeleteNotificationRequest = {}));
var DeleteNotificationResponse;
(function (DeleteNotificationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteNotificationResponse");
    }
    DeleteNotificationResponse.isa = isa;
})(DeleteNotificationResponse = exports.DeleteNotificationResponse || (exports.DeleteNotificationResponse = {}));
var DeleteSubscriberRequest;
(function (DeleteSubscriberRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriberRequest");
    }
    DeleteSubscriberRequest.isa = isa;
})(DeleteSubscriberRequest = exports.DeleteSubscriberRequest || (exports.DeleteSubscriberRequest = {}));
var DeleteSubscriberResponse;
(function (DeleteSubscriberResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteSubscriberResponse");
    }
    DeleteSubscriberResponse.isa = isa;
})(DeleteSubscriberResponse = exports.DeleteSubscriberResponse || (exports.DeleteSubscriberResponse = {}));
var DescribeBudgetPerformanceHistoryRequest;
(function (DescribeBudgetPerformanceHistoryRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBudgetPerformanceHistoryRequest");
    }
    DescribeBudgetPerformanceHistoryRequest.isa = isa;
})(DescribeBudgetPerformanceHistoryRequest = exports.DescribeBudgetPerformanceHistoryRequest || (exports.DescribeBudgetPerformanceHistoryRequest = {}));
var DescribeBudgetPerformanceHistoryResponse;
(function (DescribeBudgetPerformanceHistoryResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBudgetPerformanceHistoryResponse");
    }
    DescribeBudgetPerformanceHistoryResponse.isa = isa;
})(DescribeBudgetPerformanceHistoryResponse = exports.DescribeBudgetPerformanceHistoryResponse || (exports.DescribeBudgetPerformanceHistoryResponse = {}));
var DescribeBudgetRequest;
(function (DescribeBudgetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBudgetRequest");
    }
    DescribeBudgetRequest.isa = isa;
})(DescribeBudgetRequest = exports.DescribeBudgetRequest || (exports.DescribeBudgetRequest = {}));
var DescribeBudgetResponse;
(function (DescribeBudgetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBudgetResponse");
    }
    DescribeBudgetResponse.isa = isa;
})(DescribeBudgetResponse = exports.DescribeBudgetResponse || (exports.DescribeBudgetResponse = {}));
var DescribeBudgetsRequest;
(function (DescribeBudgetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBudgetsRequest");
    }
    DescribeBudgetsRequest.isa = isa;
})(DescribeBudgetsRequest = exports.DescribeBudgetsRequest || (exports.DescribeBudgetsRequest = {}));
var DescribeBudgetsResponse;
(function (DescribeBudgetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeBudgetsResponse");
    }
    DescribeBudgetsResponse.isa = isa;
})(DescribeBudgetsResponse = exports.DescribeBudgetsResponse || (exports.DescribeBudgetsResponse = {}));
var DescribeNotificationsForBudgetRequest;
(function (DescribeNotificationsForBudgetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNotificationsForBudgetRequest");
    }
    DescribeNotificationsForBudgetRequest.isa = isa;
})(DescribeNotificationsForBudgetRequest = exports.DescribeNotificationsForBudgetRequest || (exports.DescribeNotificationsForBudgetRequest = {}));
var DescribeNotificationsForBudgetResponse;
(function (DescribeNotificationsForBudgetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeNotificationsForBudgetResponse");
    }
    DescribeNotificationsForBudgetResponse.isa = isa;
})(DescribeNotificationsForBudgetResponse = exports.DescribeNotificationsForBudgetResponse || (exports.DescribeNotificationsForBudgetResponse = {}));
var DescribeSubscribersForNotificationRequest;
(function (DescribeSubscribersForNotificationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscribersForNotificationRequest");
    }
    DescribeSubscribersForNotificationRequest.isa = isa;
})(DescribeSubscribersForNotificationRequest = exports.DescribeSubscribersForNotificationRequest || (exports.DescribeSubscribersForNotificationRequest = {}));
var DescribeSubscribersForNotificationResponse;
(function (DescribeSubscribersForNotificationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeSubscribersForNotificationResponse");
    }
    DescribeSubscribersForNotificationResponse.isa = isa;
})(DescribeSubscribersForNotificationResponse = exports.DescribeSubscribersForNotificationResponse || (exports.DescribeSubscribersForNotificationResponse = {}));
var DuplicateRecordException;
(function (DuplicateRecordException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DuplicateRecordException");
    }
    DuplicateRecordException.isa = isa;
})(DuplicateRecordException = exports.DuplicateRecordException || (exports.DuplicateRecordException = {}));
var ExpiredNextTokenException;
(function (ExpiredNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ExpiredNextTokenException");
    }
    ExpiredNextTokenException.isa = isa;
})(ExpiredNextTokenException = exports.ExpiredNextTokenException || (exports.ExpiredNextTokenException = {}));
var InternalErrorException;
(function (InternalErrorException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalErrorException");
    }
    InternalErrorException.isa = isa;
})(InternalErrorException = exports.InternalErrorException || (exports.InternalErrorException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidNextTokenException");
    }
    InvalidNextTokenException.isa = isa;
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var NotFoundException;
(function (NotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotFoundException");
    }
    NotFoundException.isa = isa;
})(NotFoundException = exports.NotFoundException || (exports.NotFoundException = {}));
var Notification;
(function (Notification) {
    function isa(o) {
        return smithy_client_1.isa(o, "Notification");
    }
    Notification.isa = isa;
})(Notification = exports.Notification || (exports.Notification = {}));
var NotificationState;
(function (NotificationState) {
    NotificationState["ALARM"] = "ALARM";
    NotificationState["OK"] = "OK";
})(NotificationState = exports.NotificationState || (exports.NotificationState = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["ACTUAL"] = "ACTUAL";
    NotificationType["FORECASTED"] = "FORECASTED";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var NotificationWithSubscribers;
(function (NotificationWithSubscribers) {
    function isa(o) {
        return smithy_client_1.isa(o, "NotificationWithSubscribers");
    }
    NotificationWithSubscribers.isa = isa;
})(NotificationWithSubscribers = exports.NotificationWithSubscribers || (exports.NotificationWithSubscribers = {}));
var Spend;
(function (Spend) {
    function isa(o) {
        return smithy_client_1.isa(o, "Spend");
    }
    Spend.isa = isa;
})(Spend = exports.Spend || (exports.Spend = {}));
var Subscriber;
(function (Subscriber) {
    function isa(o) {
        return smithy_client_1.isa(o, "Subscriber");
    }
    Subscriber.isa = isa;
})(Subscriber = exports.Subscriber || (exports.Subscriber = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["EMAIL"] = "EMAIL";
    SubscriptionType["SNS"] = "SNS";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
var ThresholdType;
(function (ThresholdType) {
    ThresholdType["ABSOLUTE_VALUE"] = "ABSOLUTE_VALUE";
    ThresholdType["PERCENTAGE"] = "PERCENTAGE";
})(ThresholdType = exports.ThresholdType || (exports.ThresholdType = {}));
var TimePeriod;
(function (TimePeriod) {
    function isa(o) {
        return smithy_client_1.isa(o, "TimePeriod");
    }
    TimePeriod.isa = isa;
})(TimePeriod = exports.TimePeriod || (exports.TimePeriod = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["ANNUALLY"] = "ANNUALLY";
    TimeUnit["DAILY"] = "DAILY";
    TimeUnit["MONTHLY"] = "MONTHLY";
    TimeUnit["QUARTERLY"] = "QUARTERLY";
})(TimeUnit = exports.TimeUnit || (exports.TimeUnit = {}));
var UpdateBudgetRequest;
(function (UpdateBudgetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBudgetRequest");
    }
    UpdateBudgetRequest.isa = isa;
})(UpdateBudgetRequest = exports.UpdateBudgetRequest || (exports.UpdateBudgetRequest = {}));
var UpdateBudgetResponse;
(function (UpdateBudgetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateBudgetResponse");
    }
    UpdateBudgetResponse.isa = isa;
})(UpdateBudgetResponse = exports.UpdateBudgetResponse || (exports.UpdateBudgetResponse = {}));
var UpdateNotificationRequest;
(function (UpdateNotificationRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotificationRequest");
    }
    UpdateNotificationRequest.isa = isa;
})(UpdateNotificationRequest = exports.UpdateNotificationRequest || (exports.UpdateNotificationRequest = {}));
var UpdateNotificationResponse;
(function (UpdateNotificationResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateNotificationResponse");
    }
    UpdateNotificationResponse.isa = isa;
})(UpdateNotificationResponse = exports.UpdateNotificationResponse || (exports.UpdateNotificationResponse = {}));
var UpdateSubscriberRequest;
(function (UpdateSubscriberRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSubscriberRequest");
    }
    UpdateSubscriberRequest.isa = isa;
})(UpdateSubscriberRequest = exports.UpdateSubscriberRequest || (exports.UpdateSubscriberRequest = {}));
var UpdateSubscriberResponse;
(function (UpdateSubscriberResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateSubscriberResponse");
    }
    UpdateSubscriberResponse.isa = isa;
})(UpdateSubscriberResponse = exports.UpdateSubscriberResponse || (exports.UpdateSubscriberResponse = {}));
//# sourceMappingURL=index.js.map