// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _API,
  _aPI,
  _APT,
  _aPT,
  _C,
  _cA,
  _cB,
  _cI,
  _CMS,
  _cMS,
  _CMSo,
  _cont,
  _cSo,
  _d,
  _GC,
  _GCR,
  _GCRe,
  _h,
  _hQ,
  _i,
  _k,
  _kIT,
  _kV,
  _LKFDS,
  _LKFDSR,
  _LKFDSRi,
  _lUA,
  _LUB,
  _lUB,
  _mR,
  _n,
  _nT,
  _sD,
  _sF,
  _sI,
  _SK,
  _sK,
  _sNo,
  _so,
  _sSUO,
  _sT,
  _st,
  _t,
  _TI,
  _tI,
  _TT,
  _tT,
  _ty,
  _UC,
  _UCR,
  _UCRp,
  CreatedBy,
  n0,
} from "./schemas_0";
import { ControlDescription } from "./schemas_25_Assessment";

/* eslint no-var: 0 */

export var ActionPlanInstructions = sim(n0, _API, 0, 8);
export var ActionPlanTitle = sim(n0, _APT, 0, 8);
export var LastUpdatedBy = sim(n0, _LUB, 0, 8);
export var TestingInformation = sim(n0, _TI, 0, 8);
export var TroubleshootingText = sim(n0, _TT, 0, 8);
export var Control = struct(
  n0,
  _C,
  0,
  [_a, _i, _ty, _n, _d, _tI, _aPT, _aPI, _cSo, _cMS, _cA, _lUA, _cB, _lUB, _t, _st],
  [
    0,
    0,
    0,
    0,
    [() => ControlDescription, 0],
    [() => TestingInformation, 0],
    [() => ActionPlanTitle, 0],
    [() => ActionPlanInstructions, 0],
    0,
    [() => ControlMappingSources, 0],
    4,
    4,
    [() => CreatedBy, 0],
    [() => LastUpdatedBy, 0],
    128 | 0,
    0,
  ]
);
export var ControlMappingSource = struct(
  n0,
  _CMS,
  0,
  [_sI, _sNo, _sD, _sSUO, _sT, _sK, _sF, _tT],
  [0, 0, 0, 0, 0, () => SourceKeyword, 0, [() => TroubleshootingText, 0]]
);
export var GetControlRequest = struct(n0, _GCR, 0, [_cI], [[0, 1]]);
export var GetControlResponse = struct(n0, _GCRe, 0, [_cont], [[() => Control, 0]]);
export var ListKeywordsForDataSourceRequest = struct(
  n0,
  _LKFDSR,
  0,
  [_so, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _so,
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
export var ListKeywordsForDataSourceResponse = struct(n0, _LKFDSRi, 0, [_k, _nT], [64 | 0, 0]);
export var SourceKeyword = struct(n0, _SK, 0, [_kIT, _kV], [0, 0]);
export var UpdateControlRequest = struct(
  n0,
  _UCR,
  0,
  [_cI, _n, _d, _tI, _aPT, _aPI, _cMS],
  [
    [0, 1],
    0,
    [() => ControlDescription, 0],
    [() => TestingInformation, 0],
    [() => ActionPlanTitle, 0],
    [() => ActionPlanInstructions, 0],
    [() => ControlMappingSources, 0],
  ]
);
export var UpdateControlResponse = struct(n0, _UCRp, 0, [_cont], [[() => Control, 0]]);
export var ControlMappingSources = list(n0, _CMSo, 0, [() => ControlMappingSource, 0]);
export var Keywords = 64 | 0;

export var GetControl = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/controls/{controlId}", 200],
  },
  () => GetControlRequest,
  () => GetControlResponse
);
export var ListKeywordsForDataSource = op(
  n0,
  _LKFDS,
  {
    [_h]: ["GET", "/dataSourceKeywords", 200],
  },
  () => ListKeywordsForDataSourceRequest,
  () => ListKeywordsForDataSourceResponse
);
export var UpdateControl = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/controls/{controlId}", 200],
  },
  () => UpdateControlRequest,
  () => UpdateControlResponse
);
