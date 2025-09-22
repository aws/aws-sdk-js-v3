// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aI,
  _CS,
  _CSI,
  _CSO,
  _cT,
  _GS,
  _GSI,
  _GSO,
  _h,
  _hQ,
  _LS,
  _LSI,
  _LSO,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _mR,
  _nT,
  _r,
  _rA,
  _rTA,
  _rTD,
  _s,
  _sA,
  _sc,
  _sI,
  _SS,
  _SSL,
  _t,
  _ta,
  _TI,
  _tI,
  _TIa,
  _tIa,
  _tK,
  _TR,
  _TRa,
  _TRI,
  _TRL,
  _TRO,
  _tT,
  _UR,
  _URI,
  _URO,
  _US,
  _USI,
  _USO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateScopeInput = struct(n0, _CSI, 0, [_ta, _cT, _t], [() => TargetResourceList, [0, 4], 128 | 0]);
export var CreateScopeOutput = struct(n0, _CSO, 0, [_sI, _s, _sA, _t], [0, 0, 0, 128 | 0]);
export var GetScopeInput = struct(n0, _GSI, 0, [_sI], [[0, 1]]);
export var GetScopeOutput = struct(n0, _GSO, 0, [_sI, _s, _sA, _ta, _t], [0, 0, 0, () => TargetResourceList, 128 | 0]);
export var ListScopesInput = struct(
  n0,
  _LSI,
  0,
  [_nT, _mR],
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
  ]
);
export var ListScopesOutput = struct(n0, _LSO, 0, [_sc, _nT], [() => ScopeSummaryList, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_t], [128 | 0]);
export var ScopeSummary = struct(n0, _SS, 0, [_sI, _s, _sA], [0, 0, 0]);
export var TagResourceInput = struct(n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceOutput = struct(n0, _TRO, 0, [], []);
export var TargetIdentifier = struct(n0, _TI, 0, [_tI, _tT], [() => TargetId, 0]);
export var TargetResource = struct(n0, _TR, 0, [_tIa, _r], [() => TargetIdentifier, 0]);
export var UntagResourceInput = struct(
  n0,
  _URI,
  0,
  [_rA, _tK],
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
export var UntagResourceOutput = struct(n0, _URO, 0, [], []);
export var UpdateScopeInput = struct(
  n0,
  _USI,
  0,
  [_sI, _rTA, _rTD],
  [[0, 1], () => TargetResourceList, () => TargetResourceList]
);
export var UpdateScopeOutput = struct(n0, _USO, 0, [_sI, _s, _sA, _t], [0, 0, 0, 128 | 0]);
export var ScopeSummaryList = list(n0, _SSL, 0, () => ScopeSummary);
export var TagKeyList = 64 | 0;

export var TargetResourceList = list(n0, _TRL, 0, () => TargetResource);
export var TargetId = uni(n0, _TIa, 0, [_aI], [0]);
export var CreateScope = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/scopes", 200],
  },
  () => CreateScopeInput,
  () => CreateScopeOutput
);
export var GetScope = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/scopes/{scopeId}", 200],
  },
  () => GetScopeInput,
  () => GetScopeOutput
);
export var ListScopes = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/scopes", 200],
  },
  () => ListScopesInput,
  () => ListScopesOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
export var TagResource = op(
  n0,
  _TRa,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput
);
export var UpdateScope = op(
  n0,
  _US,
  {
    [_h]: ["PATCH", "/scopes/{scopeId}", 200],
  },
  () => UpdateScopeInput,
  () => UpdateScopeOutput
);
