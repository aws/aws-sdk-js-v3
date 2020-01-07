"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var ActivateEventSourceRequest;
(function (ActivateEventSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ActivateEventSourceRequest");
    }
    ActivateEventSourceRequest.isa = isa;
})(ActivateEventSourceRequest = exports.ActivateEventSourceRequest || (exports.ActivateEventSourceRequest = {}));
var AssignPublicIp;
(function (AssignPublicIp) {
    AssignPublicIp["DISABLED"] = "DISABLED";
    AssignPublicIp["ENABLED"] = "ENABLED";
})(AssignPublicIp = exports.AssignPublicIp || (exports.AssignPublicIp = {}));
var AwsVpcConfiguration;
(function (AwsVpcConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "AwsVpcConfiguration");
    }
    AwsVpcConfiguration.isa = isa;
})(AwsVpcConfiguration = exports.AwsVpcConfiguration || (exports.AwsVpcConfiguration = {}));
var BatchArrayProperties;
(function (BatchArrayProperties) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchArrayProperties");
    }
    BatchArrayProperties.isa = isa;
})(BatchArrayProperties = exports.BatchArrayProperties || (exports.BatchArrayProperties = {}));
var BatchParameters;
(function (BatchParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchParameters");
    }
    BatchParameters.isa = isa;
})(BatchParameters = exports.BatchParameters || (exports.BatchParameters = {}));
var BatchRetryStrategy;
(function (BatchRetryStrategy) {
    function isa(o) {
        return smithy_client_1.isa(o, "BatchRetryStrategy");
    }
    BatchRetryStrategy.isa = isa;
})(BatchRetryStrategy = exports.BatchRetryStrategy || (exports.BatchRetryStrategy = {}));
var Condition;
(function (Condition) {
    function isa(o) {
        return smithy_client_1.isa(o, "Condition");
    }
    Condition.isa = isa;
})(Condition = exports.Condition || (exports.Condition = {}));
var CreateEventBusRequest;
(function (CreateEventBusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEventBusRequest");
    }
    CreateEventBusRequest.isa = isa;
})(CreateEventBusRequest = exports.CreateEventBusRequest || (exports.CreateEventBusRequest = {}));
var CreateEventBusResponse;
(function (CreateEventBusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateEventBusResponse");
    }
    CreateEventBusResponse.isa = isa;
})(CreateEventBusResponse = exports.CreateEventBusResponse || (exports.CreateEventBusResponse = {}));
var CreatePartnerEventSourceRequest;
(function (CreatePartnerEventSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePartnerEventSourceRequest");
    }
    CreatePartnerEventSourceRequest.isa = isa;
})(CreatePartnerEventSourceRequest = exports.CreatePartnerEventSourceRequest || (exports.CreatePartnerEventSourceRequest = {}));
var CreatePartnerEventSourceResponse;
(function (CreatePartnerEventSourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreatePartnerEventSourceResponse");
    }
    CreatePartnerEventSourceResponse.isa = isa;
})(CreatePartnerEventSourceResponse = exports.CreatePartnerEventSourceResponse || (exports.CreatePartnerEventSourceResponse = {}));
var DeactivateEventSourceRequest;
(function (DeactivateEventSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeactivateEventSourceRequest");
    }
    DeactivateEventSourceRequest.isa = isa;
})(DeactivateEventSourceRequest = exports.DeactivateEventSourceRequest || (exports.DeactivateEventSourceRequest = {}));
var DeleteEventBusRequest;
(function (DeleteEventBusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteEventBusRequest");
    }
    DeleteEventBusRequest.isa = isa;
})(DeleteEventBusRequest = exports.DeleteEventBusRequest || (exports.DeleteEventBusRequest = {}));
var DeletePartnerEventSourceRequest;
(function (DeletePartnerEventSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeletePartnerEventSourceRequest");
    }
    DeletePartnerEventSourceRequest.isa = isa;
})(DeletePartnerEventSourceRequest = exports.DeletePartnerEventSourceRequest || (exports.DeletePartnerEventSourceRequest = {}));
var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteRuleRequest");
    }
    DeleteRuleRequest.isa = isa;
})(DeleteRuleRequest = exports.DeleteRuleRequest || (exports.DeleteRuleRequest = {}));
var DescribeEventBusRequest;
(function (DescribeEventBusRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventBusRequest");
    }
    DescribeEventBusRequest.isa = isa;
})(DescribeEventBusRequest = exports.DescribeEventBusRequest || (exports.DescribeEventBusRequest = {}));
var DescribeEventBusResponse;
(function (DescribeEventBusResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventBusResponse");
    }
    DescribeEventBusResponse.isa = isa;
})(DescribeEventBusResponse = exports.DescribeEventBusResponse || (exports.DescribeEventBusResponse = {}));
var DescribeEventSourceRequest;
(function (DescribeEventSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventSourceRequest");
    }
    DescribeEventSourceRequest.isa = isa;
})(DescribeEventSourceRequest = exports.DescribeEventSourceRequest || (exports.DescribeEventSourceRequest = {}));
var DescribeEventSourceResponse;
(function (DescribeEventSourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeEventSourceResponse");
    }
    DescribeEventSourceResponse.isa = isa;
})(DescribeEventSourceResponse = exports.DescribeEventSourceResponse || (exports.DescribeEventSourceResponse = {}));
var DescribePartnerEventSourceRequest;
(function (DescribePartnerEventSourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePartnerEventSourceRequest");
    }
    DescribePartnerEventSourceRequest.isa = isa;
})(DescribePartnerEventSourceRequest = exports.DescribePartnerEventSourceRequest || (exports.DescribePartnerEventSourceRequest = {}));
var DescribePartnerEventSourceResponse;
(function (DescribePartnerEventSourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribePartnerEventSourceResponse");
    }
    DescribePartnerEventSourceResponse.isa = isa;
})(DescribePartnerEventSourceResponse = exports.DescribePartnerEventSourceResponse || (exports.DescribePartnerEventSourceResponse = {}));
var DescribeRuleRequest;
(function (DescribeRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRuleRequest");
    }
    DescribeRuleRequest.isa = isa;
})(DescribeRuleRequest = exports.DescribeRuleRequest || (exports.DescribeRuleRequest = {}));
var DescribeRuleResponse;
(function (DescribeRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeRuleResponse");
    }
    DescribeRuleResponse.isa = isa;
})(DescribeRuleResponse = exports.DescribeRuleResponse || (exports.DescribeRuleResponse = {}));
var DisableRuleRequest;
(function (DisableRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DisableRuleRequest");
    }
    DisableRuleRequest.isa = isa;
})(DisableRuleRequest = exports.DisableRuleRequest || (exports.DisableRuleRequest = {}));
var EcsParameters;
(function (EcsParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "EcsParameters");
    }
    EcsParameters.isa = isa;
})(EcsParameters = exports.EcsParameters || (exports.EcsParameters = {}));
var EnableRuleRequest;
(function (EnableRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "EnableRuleRequest");
    }
    EnableRuleRequest.isa = isa;
})(EnableRuleRequest = exports.EnableRuleRequest || (exports.EnableRuleRequest = {}));
var EventBus;
(function (EventBus) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventBus");
    }
    EventBus.isa = isa;
})(EventBus = exports.EventBus || (exports.EventBus = {}));
var EventSource;
(function (EventSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "EventSource");
    }
    EventSource.isa = isa;
})(EventSource = exports.EventSource || (exports.EventSource = {}));
var EventSourceState;
(function (EventSourceState) {
    EventSourceState["ACTIVE"] = "ACTIVE";
    EventSourceState["DELETED"] = "DELETED";
    EventSourceState["PENDING"] = "PENDING";
})(EventSourceState = exports.EventSourceState || (exports.EventSourceState = {}));
var InputTransformer;
(function (InputTransformer) {
    function isa(o) {
        return smithy_client_1.isa(o, "InputTransformer");
    }
    InputTransformer.isa = isa;
})(InputTransformer = exports.InputTransformer || (exports.InputTransformer = {}));
var KinesisParameters;
(function (KinesisParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "KinesisParameters");
    }
    KinesisParameters.isa = isa;
})(KinesisParameters = exports.KinesisParameters || (exports.KinesisParameters = {}));
var LaunchType;
(function (LaunchType) {
    LaunchType["EC2"] = "EC2";
    LaunchType["FARGATE"] = "FARGATE";
})(LaunchType = exports.LaunchType || (exports.LaunchType = {}));
var ListEventBusesRequest;
(function (ListEventBusesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEventBusesRequest");
    }
    ListEventBusesRequest.isa = isa;
})(ListEventBusesRequest = exports.ListEventBusesRequest || (exports.ListEventBusesRequest = {}));
var ListEventBusesResponse;
(function (ListEventBusesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEventBusesResponse");
    }
    ListEventBusesResponse.isa = isa;
})(ListEventBusesResponse = exports.ListEventBusesResponse || (exports.ListEventBusesResponse = {}));
var ListEventSourcesRequest;
(function (ListEventSourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEventSourcesRequest");
    }
    ListEventSourcesRequest.isa = isa;
})(ListEventSourcesRequest = exports.ListEventSourcesRequest || (exports.ListEventSourcesRequest = {}));
var ListEventSourcesResponse;
(function (ListEventSourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListEventSourcesResponse");
    }
    ListEventSourcesResponse.isa = isa;
})(ListEventSourcesResponse = exports.ListEventSourcesResponse || (exports.ListEventSourcesResponse = {}));
var ListPartnerEventSourceAccountsRequest;
(function (ListPartnerEventSourceAccountsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPartnerEventSourceAccountsRequest");
    }
    ListPartnerEventSourceAccountsRequest.isa = isa;
})(ListPartnerEventSourceAccountsRequest = exports.ListPartnerEventSourceAccountsRequest || (exports.ListPartnerEventSourceAccountsRequest = {}));
var ListPartnerEventSourceAccountsResponse;
(function (ListPartnerEventSourceAccountsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPartnerEventSourceAccountsResponse");
    }
    ListPartnerEventSourceAccountsResponse.isa = isa;
})(ListPartnerEventSourceAccountsResponse = exports.ListPartnerEventSourceAccountsResponse || (exports.ListPartnerEventSourceAccountsResponse = {}));
var ListPartnerEventSourcesRequest;
(function (ListPartnerEventSourcesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPartnerEventSourcesRequest");
    }
    ListPartnerEventSourcesRequest.isa = isa;
})(ListPartnerEventSourcesRequest = exports.ListPartnerEventSourcesRequest || (exports.ListPartnerEventSourcesRequest = {}));
var ListPartnerEventSourcesResponse;
(function (ListPartnerEventSourcesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListPartnerEventSourcesResponse");
    }
    ListPartnerEventSourcesResponse.isa = isa;
})(ListPartnerEventSourcesResponse = exports.ListPartnerEventSourcesResponse || (exports.ListPartnerEventSourcesResponse = {}));
var ListRuleNamesByTargetRequest;
(function (ListRuleNamesByTargetRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRuleNamesByTargetRequest");
    }
    ListRuleNamesByTargetRequest.isa = isa;
})(ListRuleNamesByTargetRequest = exports.ListRuleNamesByTargetRequest || (exports.ListRuleNamesByTargetRequest = {}));
var ListRuleNamesByTargetResponse;
(function (ListRuleNamesByTargetResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRuleNamesByTargetResponse");
    }
    ListRuleNamesByTargetResponse.isa = isa;
})(ListRuleNamesByTargetResponse = exports.ListRuleNamesByTargetResponse || (exports.ListRuleNamesByTargetResponse = {}));
var ListRulesRequest;
(function (ListRulesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRulesRequest");
    }
    ListRulesRequest.isa = isa;
})(ListRulesRequest = exports.ListRulesRequest || (exports.ListRulesRequest = {}));
var ListRulesResponse;
(function (ListRulesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListRulesResponse");
    }
    ListRulesResponse.isa = isa;
})(ListRulesResponse = exports.ListRulesResponse || (exports.ListRulesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListTargetsByRuleRequest;
(function (ListTargetsByRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTargetsByRuleRequest");
    }
    ListTargetsByRuleRequest.isa = isa;
})(ListTargetsByRuleRequest = exports.ListTargetsByRuleRequest || (exports.ListTargetsByRuleRequest = {}));
var ListTargetsByRuleResponse;
(function (ListTargetsByRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTargetsByRuleResponse");
    }
    ListTargetsByRuleResponse.isa = isa;
})(ListTargetsByRuleResponse = exports.ListTargetsByRuleResponse || (exports.ListTargetsByRuleResponse = {}));
var NetworkConfiguration;
(function (NetworkConfiguration) {
    function isa(o) {
        return smithy_client_1.isa(o, "NetworkConfiguration");
    }
    NetworkConfiguration.isa = isa;
})(NetworkConfiguration = exports.NetworkConfiguration || (exports.NetworkConfiguration = {}));
var PartnerEventSource;
(function (PartnerEventSource) {
    function isa(o) {
        return smithy_client_1.isa(o, "PartnerEventSource");
    }
    PartnerEventSource.isa = isa;
})(PartnerEventSource = exports.PartnerEventSource || (exports.PartnerEventSource = {}));
var PartnerEventSourceAccount;
(function (PartnerEventSourceAccount) {
    function isa(o) {
        return smithy_client_1.isa(o, "PartnerEventSourceAccount");
    }
    PartnerEventSourceAccount.isa = isa;
})(PartnerEventSourceAccount = exports.PartnerEventSourceAccount || (exports.PartnerEventSourceAccount = {}));
var PutEventsRequest;
(function (PutEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEventsRequest");
    }
    PutEventsRequest.isa = isa;
})(PutEventsRequest = exports.PutEventsRequest || (exports.PutEventsRequest = {}));
var PutEventsRequestEntry;
(function (PutEventsRequestEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEventsRequestEntry");
    }
    PutEventsRequestEntry.isa = isa;
})(PutEventsRequestEntry = exports.PutEventsRequestEntry || (exports.PutEventsRequestEntry = {}));
var PutEventsResponse;
(function (PutEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEventsResponse");
    }
    PutEventsResponse.isa = isa;
})(PutEventsResponse = exports.PutEventsResponse || (exports.PutEventsResponse = {}));
var PutEventsResultEntry;
(function (PutEventsResultEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutEventsResultEntry");
    }
    PutEventsResultEntry.isa = isa;
})(PutEventsResultEntry = exports.PutEventsResultEntry || (exports.PutEventsResultEntry = {}));
var PutPartnerEventsRequest;
(function (PutPartnerEventsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPartnerEventsRequest");
    }
    PutPartnerEventsRequest.isa = isa;
})(PutPartnerEventsRequest = exports.PutPartnerEventsRequest || (exports.PutPartnerEventsRequest = {}));
var PutPartnerEventsRequestEntry;
(function (PutPartnerEventsRequestEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPartnerEventsRequestEntry");
    }
    PutPartnerEventsRequestEntry.isa = isa;
})(PutPartnerEventsRequestEntry = exports.PutPartnerEventsRequestEntry || (exports.PutPartnerEventsRequestEntry = {}));
var PutPartnerEventsResponse;
(function (PutPartnerEventsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPartnerEventsResponse");
    }
    PutPartnerEventsResponse.isa = isa;
})(PutPartnerEventsResponse = exports.PutPartnerEventsResponse || (exports.PutPartnerEventsResponse = {}));
var PutPartnerEventsResultEntry;
(function (PutPartnerEventsResultEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPartnerEventsResultEntry");
    }
    PutPartnerEventsResultEntry.isa = isa;
})(PutPartnerEventsResultEntry = exports.PutPartnerEventsResultEntry || (exports.PutPartnerEventsResultEntry = {}));
var PutPermissionRequest;
(function (PutPermissionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutPermissionRequest");
    }
    PutPermissionRequest.isa = isa;
})(PutPermissionRequest = exports.PutPermissionRequest || (exports.PutPermissionRequest = {}));
var PutRuleRequest;
(function (PutRuleRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRuleRequest");
    }
    PutRuleRequest.isa = isa;
})(PutRuleRequest = exports.PutRuleRequest || (exports.PutRuleRequest = {}));
var PutRuleResponse;
(function (PutRuleResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutRuleResponse");
    }
    PutRuleResponse.isa = isa;
})(PutRuleResponse = exports.PutRuleResponse || (exports.PutRuleResponse = {}));
var PutTargetsRequest;
(function (PutTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutTargetsRequest");
    }
    PutTargetsRequest.isa = isa;
})(PutTargetsRequest = exports.PutTargetsRequest || (exports.PutTargetsRequest = {}));
var PutTargetsResponse;
(function (PutTargetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutTargetsResponse");
    }
    PutTargetsResponse.isa = isa;
})(PutTargetsResponse = exports.PutTargetsResponse || (exports.PutTargetsResponse = {}));
var PutTargetsResultEntry;
(function (PutTargetsResultEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "PutTargetsResultEntry");
    }
    PutTargetsResultEntry.isa = isa;
})(PutTargetsResultEntry = exports.PutTargetsResultEntry || (exports.PutTargetsResultEntry = {}));
var RemovePermissionRequest;
(function (RemovePermissionRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemovePermissionRequest");
    }
    RemovePermissionRequest.isa = isa;
})(RemovePermissionRequest = exports.RemovePermissionRequest || (exports.RemovePermissionRequest = {}));
var RemoveTargetsRequest;
(function (RemoveTargetsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTargetsRequest");
    }
    RemoveTargetsRequest.isa = isa;
})(RemoveTargetsRequest = exports.RemoveTargetsRequest || (exports.RemoveTargetsRequest = {}));
var RemoveTargetsResponse;
(function (RemoveTargetsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTargetsResponse");
    }
    RemoveTargetsResponse.isa = isa;
})(RemoveTargetsResponse = exports.RemoveTargetsResponse || (exports.RemoveTargetsResponse = {}));
var RemoveTargetsResultEntry;
(function (RemoveTargetsResultEntry) {
    function isa(o) {
        return smithy_client_1.isa(o, "RemoveTargetsResultEntry");
    }
    RemoveTargetsResultEntry.isa = isa;
})(RemoveTargetsResultEntry = exports.RemoveTargetsResultEntry || (exports.RemoveTargetsResultEntry = {}));
var Rule;
(function (Rule) {
    function isa(o) {
        return smithy_client_1.isa(o, "Rule");
    }
    Rule.isa = isa;
})(Rule = exports.Rule || (exports.Rule = {}));
var RuleState;
(function (RuleState) {
    RuleState["DISABLED"] = "DISABLED";
    RuleState["ENABLED"] = "ENABLED";
})(RuleState = exports.RuleState || (exports.RuleState = {}));
var RunCommandParameters;
(function (RunCommandParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "RunCommandParameters");
    }
    RunCommandParameters.isa = isa;
})(RunCommandParameters = exports.RunCommandParameters || (exports.RunCommandParameters = {}));
var RunCommandTarget;
(function (RunCommandTarget) {
    function isa(o) {
        return smithy_client_1.isa(o, "RunCommandTarget");
    }
    RunCommandTarget.isa = isa;
})(RunCommandTarget = exports.RunCommandTarget || (exports.RunCommandTarget = {}));
var SqsParameters;
(function (SqsParameters) {
    function isa(o) {
        return smithy_client_1.isa(o, "SqsParameters");
    }
    SqsParameters.isa = isa;
})(SqsParameters = exports.SqsParameters || (exports.SqsParameters = {}));
var Tag;
(function (Tag) {
    function isa(o) {
        return smithy_client_1.isa(o, "Tag");
    }
    Tag.isa = isa;
})(Tag = exports.Tag || (exports.Tag = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var Target;
(function (Target) {
    function isa(o) {
        return smithy_client_1.isa(o, "Target");
    }
    Target.isa = isa;
})(Target = exports.Target || (exports.Target = {}));
var TestEventPatternRequest;
(function (TestEventPatternRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestEventPatternRequest");
    }
    TestEventPatternRequest.isa = isa;
})(TestEventPatternRequest = exports.TestEventPatternRequest || (exports.TestEventPatternRequest = {}));
var TestEventPatternResponse;
(function (TestEventPatternResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TestEventPatternResponse");
    }
    TestEventPatternResponse.isa = isa;
})(TestEventPatternResponse = exports.TestEventPatternResponse || (exports.TestEventPatternResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConcurrentModificationException");
    }
    ConcurrentModificationException.isa = isa;
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var InternalException;
(function (InternalException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InternalException");
    }
    InternalException.isa = isa;
})(InternalException = exports.InternalException || (exports.InternalException = {}));
var InvalidEventPatternException;
(function (InvalidEventPatternException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidEventPatternException");
    }
    InvalidEventPatternException.isa = isa;
})(InvalidEventPatternException = exports.InvalidEventPatternException || (exports.InvalidEventPatternException = {}));
var InvalidStateException;
(function (InvalidStateException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidStateException");
    }
    InvalidStateException.isa = isa;
})(InvalidStateException = exports.InvalidStateException || (exports.InvalidStateException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "LimitExceededException");
    }
    LimitExceededException.isa = isa;
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var ManagedRuleException;
(function (ManagedRuleException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ManagedRuleException");
    }
    ManagedRuleException.isa = isa;
})(ManagedRuleException = exports.ManagedRuleException || (exports.ManagedRuleException = {}));
var PolicyLengthExceededException;
(function (PolicyLengthExceededException) {
    function isa(o) {
        return smithy_client_1.isa(o, "PolicyLengthExceededException");
    }
    PolicyLengthExceededException.isa = isa;
})(PolicyLengthExceededException = exports.PolicyLengthExceededException || (exports.PolicyLengthExceededException = {}));
var ResourceAlreadyExistsException;
(function (ResourceAlreadyExistsException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceAlreadyExistsException");
    }
    ResourceAlreadyExistsException.isa = isa;
})(ResourceAlreadyExistsException = exports.ResourceAlreadyExistsException || (exports.ResourceAlreadyExistsException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
//# sourceMappingURL=index.js.map