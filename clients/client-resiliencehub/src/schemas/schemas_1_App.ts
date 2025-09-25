// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aAA,
  _AAS,
  _aAs,
  _AASL,
  _aCI,
  _aCN,
  _aCT,
  _aN,
  _Ap,
  _ap,
  _AS,
  _aS,
  _ASL,
  _aSp,
  _aSs,
  _aSss,
  _aV,
  _cARA,
  _cL,
  _Co,
  _co,
  _cRPA,
  _cS,
  _cT,
  _cu,
  _d,
  _DAe,
  _DARes,
  _DAResc,
  _dS,
  _eS,
  _ESLv,
  _ESv,
  _eT,
  _eTv,
  _fLAT,
  _fr,
  _GAC,
  _gAC,
  _GR,
  _gR,
  _gRI,
  _GRL,
  _GRLr,
  _GRr,
  _h,
  _hQ,
  _in,
  _iRN,
  _LA,
  _LAA,
  _LAAR,
  _LAARi,
  _lACET,
  _LAR,
  _LARi,
  _lDET,
  _LRGR,
  _LRGRR,
  _LRGRRi,
  _lRI,
  _lRSET,
  _m,
  _mR,
  _n,
  _nT,
  _pA,
  _PM,
  _pM,
  _pRI,
  _res,
  _rIS,
  _rISp,
  _rN,
  _rO,
  _rRe,
  _rRej,
  _rSe,
  _rT,
  _sACI,
  _sc,
  _sT,
  _st,
  _sTA,
  _t,
  _ta,
  _tLAT,
  _UA,
  _UAR,
  _UARp,
  _vN,
  n0,
  TagMap,
} from "./schemas_0";
import { LogicalResourceId } from "./schemas_8_App";
import { PhysicalResourceId } from "./schemas_13_App";

/* eslint no-var: 0 */

export var App = struct(
  n0,
  _Ap,
  0,
  [_aA, _n, _d, _pA, _cT, _st, _cS, _lACET, _rSe, _lRSET, _ta, _aS, _pM, _eS, _dS, _lDET, _rIS, _rISp, _aAA],
  [
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    4,
    1,
    4,
    [() => TagMap, 0],
    0,
    () => PermissionModel,
    () => EventSubscriptionList,
    0,
    4,
    1,
    1,
    0,
  ]
);
export var AppAssessmentSummary = struct(
  n0,
  _AAS,
  0,
  [_aA, _aV, _aSs, _in, _sT, _eT, _m, _aN, _aAs, _cS, _co, _rSe, _vN, _dS],
  [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, () => Cost, 1, 0, 0]
);
export var AppSummary = struct(
  n0,
  _AS,
  0,
  [_aA, _n, _d, _cT, _cS, _rSe, _aS, _st, _dS, _lACET, _rIS, _rISp, _aAA],
  [0, 0, 0, 4, 0, 1, 0, 0, 0, 4, 1, 1, 0]
);
export var Cost = struct(n0, _Co, 0, [_a, _cu, _fr], [1, 0, 0]);
export var DescribeAppRequest = struct(n0, _DARes, 0, [_aA], [0]);
export var DescribeAppResponse = struct(n0, _DAResc, 0, [_ap], [[() => App, 0]]);
export var EventSubscription = struct(n0, _ESv, 0, [_n, _eTv, _sTA], [0, 0, 0]);
export var GroupingAppComponent = struct(n0, _GAC, 0, [_aCI, _aCT, _aCN], [0, 0, 0]);
export var GroupingRecommendation = struct(
  n0,
  _GR,
  0,
  [_gRI, _gAC, _res, _sc, _rRe, _st, _cL, _cT, _rRej],
  [0, () => GroupingAppComponent, () => GroupingResourceList, 1, 64 | 0, 0, 0, 4, 0]
);
export var GroupingResource = struct(
  n0,
  _GRr,
  0,
  [_rN, _rT, _pRI, _lRI, _sACI],
  [0, 0, () => PhysicalResourceId, () => LogicalResourceId, 64 | 0]
);
export var ListAppAssessmentsRequest = struct(
  n0,
  _LAAR,
  0,
  [_aA, _aN, _aSs, _cS, _in, _rO, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [
      0,
      {
        [_hQ]: _aN,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _aSs,
      },
    ],
    [
      0,
      {
        [_hQ]: _cS,
      },
    ],
    [
      0,
      {
        [_hQ]: _in,
      },
    ],
    [
      2,
      {
        [_hQ]: _rO,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAppAssessmentsResponse = struct(n0, _LAARi, 0, [_nT, _aSss], [0, () => AppAssessmentSummaryList]);
export var ListAppsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR, _n, _aA, _fLAT, _tLAT, _rO, _aAA],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [
      4,
      {
        [_hQ]: _fLAT,
      },
    ],
    [
      4,
      {
        [_hQ]: _tLAT,
      },
    ],
    [
      2,
      {
        [_hQ]: _rO,
      },
    ],
    [
      0,
      {
        [_hQ]: _aAA,
      },
    ],
  ]
);
export var ListAppsResponse = struct(n0, _LARi, 0, [_aSp, _nT], [() => AppSummaryList, 0]);
export var ListResourceGroupingRecommendationsRequest = struct(
  n0,
  _LRGRR,
  0,
  [_aA, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListResourceGroupingRecommendationsResponse = struct(
  n0,
  _LRGRRi,
  0,
  [_gR, _nT],
  [() => GroupingRecommendationList, 0]
);
export var PermissionModel = struct(n0, _PM, 0, [_t, _iRN, _cARA], [0, 0, 64 | 0]);
export var UpdateAppRequest = struct(
  n0,
  _UAR,
  0,
  [_aA, _d, _pA, _cRPA, _aS, _pM, _eS],
  [0, 0, 0, 2, 0, () => PermissionModel, () => EventSubscriptionList]
);
export var UpdateAppResponse = struct(n0, _UARp, 0, [_ap], [[() => App, 0]]);
export var AppAssessmentSummaryList = list(n0, _AASL, 0, () => AppAssessmentSummary);
export var AppSummaryList = list(n0, _ASL, 0, () => AppSummary);
export var AssessmentStatusList = 64 | 0;

export var EventSubscriptionList = list(n0, _ESLv, 0, () => EventSubscription);
export var GroupingRecommendationList = list(n0, _GRL, 0, () => GroupingRecommendation);
export var GroupingResourceList = list(n0, _GRLr, 0, () => GroupingResource);
export var IamRoleArnList = 64 | 0;

export var DescribeApp = op(
  n0,
  _DAe,
  {
    [_h]: ["POST", "/describe-app", 200],
  },
  () => DescribeAppRequest,
  () => DescribeAppResponse
);
export var ListAppAssessments = op(
  n0,
  _LAA,
  {
    [_h]: ["GET", "/list-app-assessments", 200],
  },
  () => ListAppAssessmentsRequest,
  () => ListAppAssessmentsResponse
);
export var ListApps = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/list-apps", 200],
  },
  () => ListAppsRequest,
  () => ListAppsResponse
);
export var ListResourceGroupingRecommendations = op(
  n0,
  _LRGR,
  {
    [_h]: ["GET", "/list-resource-grouping-recommendations", 200],
  },
  () => ListResourceGroupingRecommendationsRequest,
  () => ListResourceGroupingRecommendationsResponse
);
export var UpdateApp = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/update-app", 200],
  },
  () => UpdateAppRequest,
  () => UpdateAppResponse
);
