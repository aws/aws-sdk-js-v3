// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aAn,
  _ac,
  _aPA,
  _aPAc,
  _ARn,
  _cA,
  _con,
  _de,
  _e,
  _F,
  _fi,
  _FS,
  _FSD,
  _FSL,
  _GARet,
  _GARR,
  _GARRe,
  _GF,
  _GFR,
  _GFRe,
  _h,
  _hQ,
  _i,
  _iP,
  _p,
  _rA,
  _rCPR,
  _re,
  _rOA,
  _rT,
  _s,
  _so,
  _sV,
  _t,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnalyzedResource = struct(
  n0,
  _ARn,
  0,
  [_rA, _rT, _cA, _aAn, _uA, _iP, _a, _sV, _s, _rOA, _e],
  [0, 0, 5, 5, 5, 2, 64 | 0, 64 | 0, 0, 0, 0]
);
export var Finding = struct(
  n0,
  _F,
  0,
  [_i, _p, _ac, _re, _iP, _rT, _con, _cA, _aAn, _uA, _s, _rOA, _e, _so, _rCPR],
  [0, 128 | 0, 64 | 0, 0, 2, 0, 128 | 0, 5, 5, 5, 0, 0, 0, () => FindingSourceList, 0]
);
export var FindingSource = struct(n0, _FS, 0, [_t, _de], [0, () => FindingSourceDetail]);
export var FindingSourceDetail = struct(n0, _FSD, 0, [_aPA, _aPAc], [0, 0]);
export var GetAnalyzedResourceRequest = struct(
  n0,
  _GARR,
  0,
  [_aA, _rA],
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
        [_hQ]: _rA,
      },
    ],
  ]
);
export var GetAnalyzedResourceResponse = struct(n0, _GARRe, 0, [_re], [() => AnalyzedResource]);
export var GetFindingRequest = struct(
  n0,
  _GFR,
  0,
  [_aA, _i],
  [
    [
      0,
      {
        [_hQ]: _aA,
      },
    ],
    [0, 1],
  ]
);
export var GetFindingResponse = struct(n0, _GFRe, 0, [_fi], [() => Finding]);
export var ActionList = 64 | 0;

export var FindingSourceList = list(n0, _FSL, 0, () => FindingSource);
export var SharedViaList = 64 | 0;

export var ConditionKeyMap = 128 | 0;

export var PrincipalMap = 128 | 0;

export var GetAnalyzedResource = op(
  n0,
  _GARet,
  {
    [_h]: ["GET", "/analyzed-resource", 200],
  },
  () => GetAnalyzedResourceRequest,
  () => GetAnalyzedResourceResponse
);
export var GetFinding = op(
  n0,
  _GF,
  {
    [_h]: ["GET", "/finding/{id}", 200],
  },
  () => GetFindingRequest,
  () => GetFindingResponse
);
