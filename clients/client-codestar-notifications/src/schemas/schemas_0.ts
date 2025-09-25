export const _A = "Arn";
export const _ADE = "AccessDeniedException";
export const _CB = "CreatedBy";
export const _CE = "ConfigurationException";
export const _CME = "ConcurrentModificationException";
export const _CNR = "CreateNotificationRule";
export const _CNRR = "CreateNotificationRuleRequest";
export const _CNRRr = "CreateNotificationRuleResult";
export const _CRT = "ClientRequestToken";
export const _CT = "CreatedTimestamp";
export const _DNR = "DeleteNotificationRule";
export const _DNRR = "DeleteNotificationRuleRequest";
export const _DNRRe = "DeleteNotificationRuleResult";
export const _DNRRes = "DescribeNotificationRuleRequest";
export const _DNRResc = "DescribeNotificationRuleResult";
export const _DNRe = "DescribeNotificationRule";
export const _DT = "DetailType";
export const _DTR = "DeleteTargetRequest";
export const _DTRe = "DeleteTargetResult";
export const _DTe = "DeleteTarget";
export const _ET = "EventTypes";
export const _ETB = "EventTypeBatch";
export const _ETI = "EventTypeIds";
export const _ETIv = "EventTypeId";
export const _ETN = "EventTypeName";
export const _ETS = "EventTypeSummary";
export const _F = "Filters";
export const _FUA = "ForceUnsubscribeAll";
export const _I = "Id";
export const _INTE = "InvalidNextTokenException";
export const _LEE = "LimitExceededException";
export const _LET = "ListEventTypes";
export const _LETF = "ListEventTypesFilter";
export const _LETFi = "ListEventTypesFilters";
export const _LETR = "ListEventTypesRequest";
export const _LETRi = "ListEventTypesResult";
export const _LMT = "LastModifiedTimestamp";
export const _LNR = "ListNotificationRules";
export const _LNRF = "ListNotificationRulesFilter";
export const _LNRFi = "ListNotificationRulesFilters";
export const _LNRR = "ListNotificationRulesRequest";
export const _LNRRi = "ListNotificationRulesResult";
export const _LT = "ListTargets";
export const _LTF = "ListTargetsFilter";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResult";
export const _LTFi = "ListTargetsFilters";
export const _LTR = "ListTargetsRequest";
export const _LTRi = "ListTargetsResult";
export const _M = "Message";
export const _MR = "MaxResults";
export const _N = "Name";
export const _NR = "NotificationRules";
export const _NRB = "NotificationRuleBatch";
export const _NRN = "NotificationRuleName";
export const _NRS = "NotificationRuleSummary";
export const _NT = "NextToken";
export const _R = "Resource";
export const _RAEE = "ResourceAlreadyExistsException";
export const _RNFE = "ResourceNotFoundException";
export const _RT = "ResourceType";
export const _S = "Status";
export const _SN = "ServiceName";
export const _SR = "SubscribeRequest";
export const _SRu = "SubscribeResult";
export const _Su = "Subscribe";
export const _T = "Targets";
export const _TA = "TargetAddress";
export const _TB = "TargetsBatch";
export const _TK = "TagKeys";
export const _TR = "TagResource";
export const _TRR = "TagResourceRequest";
export const _TRRa = "TagResourceResult";
export const _TS = "TargetSummary";
export const _TSa = "TargetStatus";
export const _TT = "TargetType";
export const _Ta = "Tags";
export const _Tar = "Target";
export const _U = "Unsubscribe";
export const _UNR = "UpdateNotificationRule";
export const _UNRR = "UpdateNotificationRuleRequest";
export const _UNRRp = "UpdateNotificationRuleResult";
export const _UR = "UnsubscribeRequest";
export const _URR = "UntagResourceRequest";
export const _URRn = "UntagResourceResult";
export const _URn = "UnsubscribeResult";
export const _URnt = "UntagResource";
export const _V = "Value";
export const _VE = "ValidationException";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _tK = "tagKeys";
export const n0 = "com.amazonaws.codestarnotifications";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CodestarNotificationsServiceException as __CodestarNotificationsServiceException } from "../models/CodestarNotificationsServiceException";
import { ValidationException as __ValidationException } from "../models/index";

/* eslint no-var: 0 */

export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var CodestarNotificationsServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.codestarnotifications",
  "CodestarNotificationsServiceException",
  0,
  [],
  [],
  __CodestarNotificationsServiceException
);
