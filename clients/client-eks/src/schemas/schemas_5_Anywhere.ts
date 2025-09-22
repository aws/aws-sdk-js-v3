// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ACD,
  _aCD,
  _ACDd,
  _aId,
  _aR,
  _cA,
  _ca,
  _cN,
  _cRT,
  _CS,
  _cS,
  _CSl,
  _cSS,
  _cVo,
  _DD,
  _dD,
  _DDe,
  _de,
  _DEAS,
  _DEASe,
  _DEASR,
  _DEASRe,
  _DEASRes,
  _DEASResc,
  _DI,
  _DIR,
  _DIRe,
  _du,
  _EAS,
  _EASL,
  _EAST,
  _eD,
  _eDx,
  _hQ,
  _ht,
  _ICSS,
  _id_,
  _In,
  _in,
  _IRD,
  _IRDn,
  _iS,
  _iSn,
  _kRU,
  _kV,
  _L,
  _lA,
  _LEAS,
  _LEASR,
  _LEASRi,
  _li,
  _LL,
  _lQ,
  _lRT,
  _lRTa,
  _lT,
  _lTT,
  _mR,
  _n,
  _nORLD,
  _nT,
  _r,
  _re,
  _rW,
  _s,
  _sSRV,
  _sSV,
  _su,
  _subs,
  _t,
  _te,
  _to,
  _uA,
  _UEAS,
  _UEASR,
  _UEASRp,
  _un,
  _us,
  n0,
} from "./schemas_0";
import { InsightStatus } from "./schemas_10_Insight";

/* eslint no-var: 0 */

export var AddonCompatibilityDetail = struct(n0, _ACD, 0, [_n, _cVo], [0, 64 | 0]);
export var ClientStat = struct(n0, _CS, 0, [_uA, _nORLD, _lRT], [0, 1, 4]);
export var DeleteEksAnywhereSubscriptionRequest = struct(n0, _DEASR, 0, [_id_], [[0, 1]]);
export var DeleteEksAnywhereSubscriptionResponse = struct(n0, _DEASRe, 0, [_su], [() => EksAnywhereSubscription]);
export var DeprecationDetail = struct(n0, _DD, 0, [_us, _rW, _sSV, _sSRV, _cS], [0, 0, 0, 0, () => ClientStats]);
export var DescribeEksAnywhereSubscriptionRequest = struct(n0, _DEASRes, 0, [_id_], [[0, 1]]);
export var DescribeEksAnywhereSubscriptionResponse = struct(n0, _DEASResc, 0, [_su], [() => EksAnywhereSubscription]);
export var DescribeInsightRequest = struct(
  n0,
  _DIR,
  0,
  [_cN, _id_],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeInsightResponse = struct(n0, _DIRe, 0, [_in], [() => Insight]);
export var EksAnywhereSubscription = struct(
  n0,
  _EAS,
  0,
  [_id_, _a, _cA, _eD, _eDx, _lQ, _lT, _te, _s, _aR, _lA, _li, _t],
  [0, 0, 4, 4, 4, 1, 0, () => EksAnywhereSubscriptionTerm, 0, 2, 64 | 0, () => LicenseList, 128 | 0]
);
export var EksAnywhereSubscriptionTerm = struct(n0, _EAST, 0, [_du, _un], [1, 0]);
export var Insight = struct(
  n0,
  _In,
  0,
  [_id_, _n, _ca, _kV, _lRTa, _lTT, _de, _iS, _re, _aId, _r, _cSS],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    () => InsightStatus,
    0,
    128 | 0,
    () => InsightResourceDetails,
    () => InsightCategorySpecificSummary,
  ]
);
export var InsightCategorySpecificSummary = struct(
  n0,
  _ICSS,
  0,
  [_dD, _aCD],
  [() => DeprecationDetails, () => AddonCompatibilityDetails]
);
export var InsightResourceDetail = struct(n0, _IRD, 0, [_iS, _kRU, _a], [() => InsightStatus, 0, 0]);
export var License = struct(n0, _L, 0, [_id_, _to], [0, 0]);
export var ListEksAnywhereSubscriptionsRequest = struct(
  n0,
  _LEASR,
  0,
  [_mR, _nT, _iSn],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _iSn,
      },
    ],
  ]
);
export var ListEksAnywhereSubscriptionsResponse = struct(
  n0,
  _LEASRi,
  0,
  [_subs, _nT],
  [() => EksAnywhereSubscriptionList, 0]
);
export var UpdateEksAnywhereSubscriptionRequest = struct(n0, _UEASR, 0, [_id_, _aR, _cRT], [[0, 1], 2, [0, 4]]);
export var UpdateEksAnywhereSubscriptionResponse = struct(n0, _UEASRp, 0, [_su], [() => EksAnywhereSubscription]);
export var AddonCompatibilityDetails = list(n0, _ACDd, 0, () => AddonCompatibilityDetail);
export var ClientStats = list(n0, _CSl, 0, () => ClientStat);
export var DeprecationDetails = list(n0, _DDe, 0, () => DeprecationDetail);
export var EksAnywhereSubscriptionList = list(n0, _EASL, 0, () => EksAnywhereSubscription);
export var EksAnywhereSubscriptionStatusValues = 64 | 0;

export var InsightResourceDetails = list(n0, _IRDn, 0, () => InsightResourceDetail);
export var LicenseList = list(n0, _LL, 0, () => License);
export var AdditionalInfoMap = 128 | 0;

export var DeleteEksAnywhereSubscription = op(
  n0,
  _DEAS,
  {
    [_ht]: ["DELETE", "/eks-anywhere-subscriptions/{id}", 200],
  },
  () => DeleteEksAnywhereSubscriptionRequest,
  () => DeleteEksAnywhereSubscriptionResponse
);
export var DescribeEksAnywhereSubscription = op(
  n0,
  _DEASe,
  {
    [_ht]: ["GET", "/eks-anywhere-subscriptions/{id}", 200],
  },
  () => DescribeEksAnywhereSubscriptionRequest,
  () => DescribeEksAnywhereSubscriptionResponse
);
export var DescribeInsight = op(
  n0,
  _DI,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/insights/{id}", 200],
  },
  () => DescribeInsightRequest,
  () => DescribeInsightResponse
);
export var ListEksAnywhereSubscriptions = op(
  n0,
  _LEAS,
  {
    [_ht]: ["GET", "/eks-anywhere-subscriptions", 200],
  },
  () => ListEksAnywhereSubscriptionsRequest,
  () => ListEksAnywhereSubscriptionsResponse
);
export var UpdateEksAnywhereSubscription = op(
  n0,
  _UEAS,
  {
    [_ht]: ["POST", "/eks-anywhere-subscriptions/{id}", 200],
  },
  () => UpdateEksAnywhereSubscriptionRequest,
  () => UpdateEksAnywhereSubscriptionResponse
);
