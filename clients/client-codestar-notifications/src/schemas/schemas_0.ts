const _A = "Arn";
const _ADE = "AccessDeniedException";
const _CB = "CreatedBy";
const _CE = "ConfigurationException";
const _CME = "ConcurrentModificationException";
const _CNR = "CreateNotificationRule";
const _CNRR = "CreateNotificationRuleRequest";
const _CNRRr = "CreateNotificationRuleResult";
const _CRT = "ClientRequestToken";
const _CT = "CreatedTimestamp";
const _DNR = "DeleteNotificationRule";
const _DNRR = "DeleteNotificationRuleRequest";
const _DNRRe = "DeleteNotificationRuleResult";
const _DNRRes = "DescribeNotificationRuleRequest";
const _DNRResc = "DescribeNotificationRuleResult";
const _DNRe = "DescribeNotificationRule";
const _DT = "DetailType";
const _DTR = "DeleteTargetRequest";
const _DTRe = "DeleteTargetResult";
const _DTe = "DeleteTarget";
const _ET = "EventTypes";
const _ETB = "EventTypeBatch";
const _ETI = "EventTypeIds";
const _ETIv = "EventTypeId";
const _ETN = "EventTypeName";
const _ETS = "EventTypeSummary";
const _F = "Filters";
const _FUA = "ForceUnsubscribeAll";
const _I = "Id";
const _INTE = "InvalidNextTokenException";
const _LEE = "LimitExceededException";
const _LET = "ListEventTypes";
const _LETF = "ListEventTypesFilter";
const _LETFi = "ListEventTypesFilters";
const _LETR = "ListEventTypesRequest";
const _LETRi = "ListEventTypesResult";
const _LMT = "LastModifiedTimestamp";
const _LNR = "ListNotificationRules";
const _LNRF = "ListNotificationRulesFilter";
const _LNRFi = "ListNotificationRulesFilters";
const _LNRR = "ListNotificationRulesRequest";
const _LNRRi = "ListNotificationRulesResult";
const _LT = "ListTargets";
const _LTF = "ListTargetsFilter";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResult";
const _LTFi = "ListTargetsFilters";
const _LTR = "ListTargetsRequest";
const _LTRi = "ListTargetsResult";
const _M = "Message";
const _MR = "MaxResults";
const _N = "Name";
const _NR = "NotificationRules";
const _NRB = "NotificationRuleBatch";
const _NRN = "NotificationRuleName";
const _NRS = "NotificationRuleSummary";
const _NT = "NextToken";
const _R = "Resource";
const _RAEE = "ResourceAlreadyExistsException";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceType";
const _S = "Status";
const _SN = "ServiceName";
const _SR = "SubscribeRequest";
const _SRu = "SubscribeResult";
const _Su = "Subscribe";
const _T = "Targets";
const _TA = "TargetAddress";
const _TB = "TargetsBatch";
const _TK = "TagKeys";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResult";
const _TS = "TargetSummary";
const _TSa = "TargetStatus";
const _TT = "TargetType";
const _Ta = "Tags";
const _Tar = "Target";
const _U = "Unsubscribe";
const _UNR = "UpdateNotificationRule";
const _UNRR = "UpdateNotificationRuleRequest";
const _UNRRp = "UpdateNotificationRuleResult";
const _UR = "UnsubscribeRequest";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResult";
const _URn = "UnsubscribeResult";
const _URnt = "UntagResource";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.codestarnotifications";
const _tK = "tagKeys";
const n0 = "com.amazonaws.codestarnotifications";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CodestarNotificationsServiceException as __CodestarNotificationsServiceException } from "../models/CodestarNotificationsServiceException";
import {
  AccessDeniedException as __AccessDeniedException,
  ConcurrentModificationException as __ConcurrentModificationException,
  ConfigurationException as __ConfigurationException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var NotificationRuleName: StaticSimpleSchema = [0, n0, _NRN, 8, 0];
export var TargetAddress: StaticSimpleSchema = [0, n0, _TA, 8, 0];
export var AccessDeniedException: StaticErrorSchema = [-3, n0, _ADE, { [_e]: _c, [_hE]: 403 }, [_M], [0]];
TypeRegistry.for(n0).registerError(AccessDeniedException, __AccessDeniedException);
export var ConcurrentModificationException: StaticErrorSchema = [-3, n0, _CME, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConcurrentModificationException, __ConcurrentModificationException);
export var ConfigurationException: StaticErrorSchema = [-3, n0, _CE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ConfigurationException, __ConfigurationException);
export var CreateNotificationRuleRequest: StaticStructureSchema = [
  3,
  n0,
  _CNRR,
  0,
  [_N, _ETI, _R, _T, _DT, _CRT, _Ta, _S],
  [[() => NotificationRuleName, 0], 64 | 0, 0, [() => Targets, 0], 0, [0, 4], 128 | 0, 0],
];
export var CreateNotificationRuleResult: StaticStructureSchema = [3, n0, _CNRRr, 0, [_A], [0]];
export var DeleteNotificationRuleRequest: StaticStructureSchema = [3, n0, _DNRR, 0, [_A], [0]];
export var DeleteNotificationRuleResult: StaticStructureSchema = [3, n0, _DNRRe, 0, [_A], [0]];
export var DeleteTargetRequest: StaticStructureSchema = [3, n0, _DTR, 0, [_TA, _FUA], [[() => TargetAddress, 0], 2]];
export var DeleteTargetResult: StaticStructureSchema = [3, n0, _DTRe, 0, [], []];
export var DescribeNotificationRuleRequest: StaticStructureSchema = [3, n0, _DNRRes, 0, [_A], [0]];
export var DescribeNotificationRuleResult: StaticStructureSchema = [
  3,
  n0,
  _DNRResc,
  0,
  [_A, _N, _ET, _R, _T, _DT, _CB, _S, _CT, _LMT, _Ta],
  [0, [() => NotificationRuleName, 0], () => EventTypeBatch, 0, [() => TargetsBatch, 0], 0, 0, 0, 4, 4, 128 | 0],
];
export var EventTypeSummary: StaticStructureSchema = [3, n0, _ETS, 0, [_ETIv, _SN, _ETN, _RT], [0, 0, 0, 0]];
export var InvalidNextTokenException: StaticErrorSchema = [-3, n0, _INTE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(InvalidNextTokenException, __InvalidNextTokenException);
export var LimitExceededException: StaticErrorSchema = [-3, n0, _LEE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);
export var ListEventTypesFilter: StaticStructureSchema = [3, n0, _LETF, 0, [_N, _V], [0, 0]];
export var ListEventTypesRequest: StaticStructureSchema = [
  3,
  n0,
  _LETR,
  0,
  [_F, _NT, _MR],
  [() => ListEventTypesFilters, 0, 1],
];
export var ListEventTypesResult: StaticStructureSchema = [3, n0, _LETRi, 0, [_ET, _NT], [() => EventTypeBatch, 0]];
export var ListNotificationRulesFilter: StaticStructureSchema = [3, n0, _LNRF, 0, [_N, _V], [0, 0]];
export var ListNotificationRulesRequest: StaticStructureSchema = [
  3,
  n0,
  _LNRR,
  0,
  [_F, _NT, _MR],
  [() => ListNotificationRulesFilters, 0, 1],
];
export var ListNotificationRulesResult: StaticStructureSchema = [
  3,
  n0,
  _LNRRi,
  0,
  [_NT, _NR],
  [0, () => NotificationRuleBatch],
];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_A], [0]];
export var ListTagsForResourceResult: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_Ta], [128 | 0]];
export var ListTargetsFilter: StaticStructureSchema = [3, n0, _LTF, 0, [_N, _V], [0, 0]];
export var ListTargetsRequest: StaticStructureSchema = [
  3,
  n0,
  _LTR,
  0,
  [_F, _NT, _MR],
  [() => ListTargetsFilters, 0, 1],
];
export var ListTargetsResult: StaticStructureSchema = [3, n0, _LTRi, 0, [_T, _NT], [[() => TargetsBatch, 0], 0]];
export var NotificationRuleSummary: StaticStructureSchema = [3, n0, _NRS, 0, [_I, _A], [0, 0]];
export var ResourceAlreadyExistsException: StaticErrorSchema = [-3, n0, _RAEE, { [_e]: _c, [_hE]: 409 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceAlreadyExistsException, __ResourceAlreadyExistsException);
export var ResourceNotFoundException: StaticErrorSchema = [-3, n0, _RNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);
export var SubscribeRequest: StaticStructureSchema = [3, n0, _SR, 0, [_A, _Tar, _CRT], [0, [() => Target, 0], 0]];
export var SubscribeResult: StaticStructureSchema = [3, n0, _SRu, 0, [_A], [0]];
export var TagResourceRequest: StaticStructureSchema = [3, n0, _TRR, 0, [_A, _Ta], [0, 128 | 0]];
export var TagResourceResult: StaticStructureSchema = [3, n0, _TRRa, 0, [_Ta], [128 | 0]];
export var Target: StaticStructureSchema = [3, n0, _Tar, 0, [_TT, _TA], [0, [() => TargetAddress, 0]]];
export var TargetSummary: StaticStructureSchema = [3, n0, _TS, 0, [_TA, _TT, _TSa], [[() => TargetAddress, 0], 0, 0]];
export var UnsubscribeRequest: StaticStructureSchema = [3, n0, _UR, 0, [_A, _TA], [0, [() => TargetAddress, 0]]];
export var UnsubscribeResult: StaticStructureSchema = [3, n0, _URn, 0, [_A], [0]];
export var UntagResourceRequest: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_A, _TK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResult: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateNotificationRuleRequest: StaticStructureSchema = [
  3,
  n0,
  _UNRR,
  0,
  [_A, _N, _S, _ETI, _T, _DT],
  [0, [() => NotificationRuleName, 0], 0, 64 | 0, [() => Targets, 0], 0],
];
export var UpdateNotificationRuleResult: StaticStructureSchema = [3, n0, _UNRRp, 0, [], []];
export var ValidationException: StaticErrorSchema = [-3, n0, _VE, { [_e]: _c, [_hE]: 400 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);
export var __Unit = "unit" as const;
export var CodestarNotificationsServiceException: StaticErrorSchema = [
  -3,
  _s,
  "CodestarNotificationsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_s).registerError(CodestarNotificationsServiceException, __CodestarNotificationsServiceException);
export var EventTypeBatch: StaticListSchema = [1, n0, _ETB, 0, () => EventTypeSummary];
export var EventTypeIds = 64 | 0;
export var ListEventTypesFilters: StaticListSchema = [1, n0, _LETFi, 0, () => ListEventTypesFilter];
export var ListNotificationRulesFilters: StaticListSchema = [1, n0, _LNRFi, 0, () => ListNotificationRulesFilter];
export var ListTargetsFilters: StaticListSchema = [1, n0, _LTFi, 0, () => ListTargetsFilter];
export var NotificationRuleBatch: StaticListSchema = [1, n0, _NRB, 0, () => NotificationRuleSummary];
export var TagKeys = 64 | 0;
export var Targets: StaticListSchema = [1, n0, _T, 0, [() => Target, 0]];
export var TargetsBatch: StaticListSchema = [1, n0, _TB, 0, [() => TargetSummary, 0]];
export var Tags = 128 | 0;
export var CreateNotificationRule: StaticOperationSchema = [
  9,
  n0,
  _CNR,
  { [_h]: ["POST", "/createNotificationRule", 200] },
  () => CreateNotificationRuleRequest,
  () => CreateNotificationRuleResult,
];
export var DeleteNotificationRule: StaticOperationSchema = [
  9,
  n0,
  _DNR,
  { [_h]: ["POST", "/deleteNotificationRule", 200] },
  () => DeleteNotificationRuleRequest,
  () => DeleteNotificationRuleResult,
];
export var DeleteTarget: StaticOperationSchema = [
  9,
  n0,
  _DTe,
  { [_h]: ["POST", "/deleteTarget", 200] },
  () => DeleteTargetRequest,
  () => DeleteTargetResult,
];
export var DescribeNotificationRule: StaticOperationSchema = [
  9,
  n0,
  _DNRe,
  { [_h]: ["POST", "/describeNotificationRule", 200] },
  () => DescribeNotificationRuleRequest,
  () => DescribeNotificationRuleResult,
];
export var ListEventTypes: StaticOperationSchema = [
  9,
  n0,
  _LET,
  { [_h]: ["POST", "/listEventTypes", 200] },
  () => ListEventTypesRequest,
  () => ListEventTypesResult,
];
export var ListNotificationRules: StaticOperationSchema = [
  9,
  n0,
  _LNR,
  { [_h]: ["POST", "/listNotificationRules", 200] },
  () => ListNotificationRulesRequest,
  () => ListNotificationRulesResult,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_h]: ["POST", "/listTagsForResource", 200] },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult,
];
export var ListTargets: StaticOperationSchema = [
  9,
  n0,
  _LT,
  { [_h]: ["POST", "/listTargets", 200] },
  () => ListTargetsRequest,
  () => ListTargetsResult,
];
export var Subscribe: StaticOperationSchema = [
  9,
  n0,
  _Su,
  { [_h]: ["POST", "/subscribe", 200] },
  () => SubscribeRequest,
  () => SubscribeResult,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_h]: ["POST", "/tagResource", 200] },
  () => TagResourceRequest,
  () => TagResourceResult,
];
export var Unsubscribe: StaticOperationSchema = [
  9,
  n0,
  _U,
  { [_h]: ["POST", "/unsubscribe", 200] },
  () => UnsubscribeRequest,
  () => UnsubscribeResult,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _URnt,
  { [_h]: ["POST", "/untagResource/{Arn}", 200] },
  () => UntagResourceRequest,
  () => UntagResourceResult,
];
export var UpdateNotificationRule: StaticOperationSchema = [
  9,
  n0,
  _UNR,
  { [_h]: ["POST", "/updateNotificationRule", 200] },
  () => UpdateNotificationRuleRequest,
  () => UpdateNotificationRuleResult,
];
