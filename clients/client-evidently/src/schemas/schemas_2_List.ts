// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aEC,
  _aLC,
  _ar,
  _cT,
  _d,
  _dV,
  _eCx,
  _eR,
  _eS,
  _fC,
  _fe,
  _FS,
  _FSL,
  _h,
  _hQ,
  _lC,
  _LF,
  _LFR,
  _LFRi,
  _LP,
  _LPR,
  _LPRi,
  _lUT,
  _mR,
  _n,
  _nT,
  _p,
  _pr,
  _PS,
  _PSL,
  _st,
  _ta,
  n0,
} from "./schemas_0";
import { EvaluationRulesList } from "./schemas_8_Feature";

/* eslint no-var: 0 */

export var FeatureSummary = struct(
  n0,
  _FS,
  0,
  [_ar, _n, _p, _st, _cT, _lUT, _eS, _eR, _dV, _ta],
  [0, 0, 0, 0, 4, 4, 0, () => EvaluationRulesList, 0, 128 | 0]
);
export var ListFeaturesRequest = struct(
  n0,
  _LFR,
  0,
  [_p, _mR, _nT],
  [
    [0, 1],
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
  ]
);
export var ListFeaturesResponse = struct(n0, _LFRi, 0, [_fe, _nT], [() => FeatureSummariesList, 0]);
export var ListProjectsRequest = struct(
  n0,
  _LPR,
  0,
  [_mR, _nT],
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
  ]
);
export var ListProjectsResponse = struct(n0, _LPRi, 0, [_pr, _nT], [() => ProjectSummariesList, 0]);
export var ProjectSummary = struct(
  n0,
  _PS,
  0,
  [_ar, _n, _st, _d, _cT, _lUT, _fC, _lC, _aLC, _eCx, _aEC, _ta],
  [0, 0, 0, 0, 4, 4, 1, 1, 1, 1, 1, 128 | 0]
);
export var FeatureSummariesList = list(n0, _FSL, 0, () => FeatureSummary);
export var ProjectSummariesList = list(n0, _PSL, 0, () => ProjectSummary);
export var ListFeatures = op(
  n0,
  _LF,
  {
    [_h]: ["GET", "/projects/{project}/features", 200],
  },
  () => ListFeaturesRequest,
  () => ListFeaturesResponse
);
export var ListProjects = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/projects", 200],
  },
  () => ListProjectsRequest,
  () => ListProjectsResponse
);
