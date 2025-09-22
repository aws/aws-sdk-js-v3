// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _GAPS,
  _GAPSR,
  _GAPSRe,
  _h,
  _hH,
  _hL,
  _N,
  _P,
  _PAPS,
  _PAPSR,
  _Pe,
  _PLr,
  _Pre,
  _Pref,
  _S,
  _SPL,
  _xaai,
  _xN,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccessPointScopeRequest = struct(
  n0,
  _GAPSR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointScopeResult = struct(n0, _GAPSRe, 0, [_S], [[() => Scope, 0]]);
export var PutAccessPointScopeRequest = struct(
  n0,
  _PAPSR,
  0,
  [_AI, _N, _S],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [() => Scope, 0],
  ]
);
export var Scope = struct(
  n0,
  _S,
  0,
  [_Pref, _Pe],
  [
    [
      () => PrefixesList,
      {
        [_xN]: _Pref,
      },
    ],
    [
      () => ScopePermissionList,
      {
        [_xN]: _Pe,
      },
    ],
  ]
);
export var PrefixesList = list(n0, _PLr, 0, [
  0,
  {
    [_xN]: _Pre,
  },
]);
export var ScopePermissionList = list(n0, _SPL, 0, [
  0,
  {
    [_xN]: _P,
  },
]);
export var GetAccessPointScope = op(
  n0,
  _GAPS,
  {
    [_h]: ["GET", "/v20180820/accesspoint/{Name}/scope", 200],
  },
  () => GetAccessPointScopeRequest,
  () => GetAccessPointScopeResult
);
export var PutAccessPointScope = op(
  n0,
  _PAPS,
  {
    [_h]: ["PUT", "/v20180820/accesspoint/{Name}/scope", 200],
  },
  () => PutAccessPointScopeRequest,
  () => Unit
);
