// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConcurrentModificationException as __ConcurrentModificationException,
  ConfigurationException as __ConfigurationException,
  LimitExceededException as __LimitExceededException,
  ResourceAlreadyExistsException as __ResourceAlreadyExistsException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import {
  _A,
  _ADE,
  _c,
  _CB,
  _CE,
  _CME,
  _CNR,
  _CNRR,
  _CNRRr,
  _CRT,
  _CT,
  _DNR,
  _DNRe,
  _DNRR,
  _DNRRe,
  _DNRRes,
  _DNRResc,
  _DT,
  _e,
  _ET,
  _ETI,
  _F,
  _h,
  _hE,
  _hQ,
  _I,
  _LEE,
  _LMT,
  _LNR,
  _LNRF,
  _LNRFi,
  _LNRR,
  _LNRRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _N,
  _NR,
  _NRB,
  _NRN,
  _NRS,
  _NT,
  _R,
  _RAEE,
  _RNFE,
  _S,
  _SR,
  _SRu,
  _Su,
  _T,
  _TA,
  _Ta,
  _Tar,
  _TK,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _TT,
  _U,
  _UNR,
  _UNRR,
  _UNRRp,
  _UR,
  _URn,
  _URnt,
  _URR,
  _URRn,
  _V,
  n0,
} from "./schemas_0";
import { EventTypeBatch } from "./schemas_1_Notification";
import { TargetAddress, TargetsBatch } from "./schemas_3_NotificationRule";

/* eslint no-var: 0 */

export var NotificationRuleName = sim(n0, _NRN, 0, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_M],
  [0],

  __AccessDeniedException
);
export var ConcurrentModificationException = error(
  n0,
  _CME,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ConcurrentModificationException
);
export var ConfigurationException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ConfigurationException
);
export var CreateNotificationRuleRequest = struct(
  n0,
  _CNRR,
  0,
  [_N, _ETI, _R, _T, _DT, _CRT, _Ta, _S],
  [[() => NotificationRuleName, 0], 64 | 0, 0, [() => Targets, 0], 0, [0, 4], 128 | 0, 0]
);
export var CreateNotificationRuleResult = struct(n0, _CNRRr, 0, [_A], [0]);
export var DeleteNotificationRuleRequest = struct(n0, _DNRR, 0, [_A], [0]);
export var DeleteNotificationRuleResult = struct(n0, _DNRRe, 0, [_A], [0]);
export var DescribeNotificationRuleRequest = struct(n0, _DNRRes, 0, [_A], [0]);
export var DescribeNotificationRuleResult = struct(
  n0,
  _DNRResc,
  0,
  [_A, _N, _ET, _R, _T, _DT, _CB, _S, _CT, _LMT, _Ta],
  [0, [() => NotificationRuleName, 0], () => EventTypeBatch, 0, [() => TargetsBatch, 0], 0, 0, 0, 4, 4, 128 | 0]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __LimitExceededException
);
export var ListNotificationRulesFilter = struct(n0, _LNRF, 0, [_N, _V], [0, 0]);
export var ListNotificationRulesRequest = struct(
  n0,
  _LNRR,
  0,
  [_F, _NT, _MR],
  [() => ListNotificationRulesFilters, 0, 1]
);
export var ListNotificationRulesResult = struct(n0, _LNRRi, 0, [_NT, _NR], [0, () => NotificationRuleBatch]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_A], [0]);
export var ListTagsForResourceResult = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var NotificationRuleSummary = struct(n0, _NRS, 0, [_I, _A], [0, 0]);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceAlreadyExistsException
);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var SubscribeRequest = struct(n0, _SR, 0, [_A, _Tar, _CRT], [0, [() => Target, 0], 0]);
export var SubscribeResult = struct(n0, _SRu, 0, [_A], [0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_A, _Ta], [0, 128 | 0]);
export var TagResourceResult = struct(n0, _TRRa, 0, [_Ta], [128 | 0]);
export var Target = struct(n0, _Tar, 0, [_TT, _TA], [0, [() => TargetAddress, 0]]);
export var UnsubscribeRequest = struct(n0, _UR, 0, [_A, _TA], [0, [() => TargetAddress, 0]]);
export var UnsubscribeResult = struct(n0, _URn, 0, [_A], [0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_A, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResult = struct(n0, _URRn, 0, [], []);
export var UpdateNotificationRuleRequest = struct(
  n0,
  _UNRR,
  0,
  [_A, _N, _S, _ETI, _T, _DT],
  [0, [() => NotificationRuleName, 0], 0, 64 | 0, [() => Targets, 0], 0]
);
export var UpdateNotificationRuleResult = struct(n0, _UNRRp, 0, [], []);
export var EventTypeIds = 64 | 0;

export var ListNotificationRulesFilters = list(n0, _LNRFi, 0, () => ListNotificationRulesFilter);
export var NotificationRuleBatch = list(n0, _NRB, 0, () => NotificationRuleSummary);
export var TagKeys = 64 | 0;

export var Targets = list(n0, _T, 0, [() => Target, 0]);
export var Tags = 128 | 0;

export var CreateNotificationRule = op(
  n0,
  _CNR,
  {
    [_h]: ["POST", "/createNotificationRule", 200],
  },
  () => CreateNotificationRuleRequest,
  () => CreateNotificationRuleResult
);
export var DeleteNotificationRule = op(
  n0,
  _DNR,
  {
    [_h]: ["POST", "/deleteNotificationRule", 200],
  },
  () => DeleteNotificationRuleRequest,
  () => DeleteNotificationRuleResult
);
export var DescribeNotificationRule = op(
  n0,
  _DNRe,
  {
    [_h]: ["POST", "/describeNotificationRule", 200],
  },
  () => DescribeNotificationRuleRequest,
  () => DescribeNotificationRuleResult
);
export var ListNotificationRules = op(
  n0,
  _LNR,
  {
    [_h]: ["POST", "/listNotificationRules", 200],
  },
  () => ListNotificationRulesRequest,
  () => ListNotificationRulesResult
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["POST", "/listTagsForResource", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResult
);
export var Subscribe = op(
  n0,
  _Su,
  {
    [_h]: ["POST", "/subscribe", 200],
  },
  () => SubscribeRequest,
  () => SubscribeResult
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tagResource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResult
);
export var Unsubscribe = op(
  n0,
  _U,
  {
    [_h]: ["POST", "/unsubscribe", 200],
  },
  () => UnsubscribeRequest,
  () => UnsubscribeResult
);
export var UntagResource = op(
  n0,
  _URnt,
  {
    [_h]: ["POST", "/untagResource/{Arn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResult
);
export var UpdateNotificationRule = op(
  n0,
  _UNR,
  {
    [_h]: ["POST", "/updateNotificationRule", 200],
  },
  () => UpdateNotificationRuleRequest,
  () => UpdateNotificationRuleResult
);
