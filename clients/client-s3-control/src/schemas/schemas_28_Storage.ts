// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _An,
  _BGT,
  _BLT,
  _DGT,
  _DLT,
  _Fil,
  _GSLG,
  _GSLGR,
  _GSLGRe,
  _h,
  _hH,
  _hL,
  _MAP,
  _MAS,
  _MAT,
  _MOA,
  _MOS,
  _N,
  _Or_,
  _Pre,
  _SLG,
  _SLGA,
  _SLGAO,
  _SLGF,
  _SLGOO,
  _Su,
  _Tag,
  _USLG,
  _USLGR,
  _xaai,
  _xN,
  n0,
  S3Tag,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetStorageLensGroupRequest = struct(
  n0,
  _GSLGR,
  0,
  [_N, _AI],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
  ]
);
export var GetStorageLensGroupResult = struct(n0, _GSLGRe, 0, [_SLG], [[() => StorageLensGroup, 16]]);
export var MatchObjectAge = struct(n0, _MOA, 0, [_DGT, _DLT], [1, 1]);
export var MatchObjectSize = struct(n0, _MOS, 0, [_BGT, _BLT], [1, 1]);
export var StorageLensGroup = struct(n0, _SLG, 0, [_N, _Fil, _SLGA], [0, [() => StorageLensGroupFilter, 0], 0]);
export var StorageLensGroupAndOperator = struct(
  n0,
  _SLGAO,
  0,
  [_MAP, _MAS, _MAT, _MOA, _MOS],
  [
    [() => MatchAnyPrefix, 0],
    [() => MatchAnySuffix, 0],
    [() => MatchAnyTag, 0],
    () => MatchObjectAge,
    () => MatchObjectSize,
  ]
);
export var StorageLensGroupFilter = struct(
  n0,
  _SLGF,
  0,
  [_MAP, _MAS, _MAT, _MOA, _MOS, _An, _Or_],
  [
    [() => MatchAnyPrefix, 0],
    [() => MatchAnySuffix, 0],
    [() => MatchAnyTag, 0],
    () => MatchObjectAge,
    () => MatchObjectSize,
    [() => StorageLensGroupAndOperator, 0],
    [() => StorageLensGroupOrOperator, 0],
  ]
);
export var StorageLensGroupOrOperator = struct(
  n0,
  _SLGOO,
  0,
  [_MAP, _MAS, _MAT, _MOA, _MOS],
  [
    [() => MatchAnyPrefix, 0],
    [() => MatchAnySuffix, 0],
    [() => MatchAnyTag, 0],
    () => MatchObjectAge,
    () => MatchObjectSize,
  ]
);
export var UpdateStorageLensGroupRequest = struct(
  n0,
  _USLGR,
  0,
  [_N, _AI, _SLG],
  [
    [0, 1],
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [() => StorageLensGroup, 0],
  ]
);
export var MatchAnyPrefix = list(n0, _MAP, 0, [
  0,
  {
    [_xN]: _Pre,
  },
]);
export var MatchAnySuffix = list(n0, _MAS, 0, [
  0,
  {
    [_xN]: _Su,
  },
]);
export var MatchAnyTag = list(n0, _MAT, 0, [
  () => S3Tag,
  {
    [_xN]: _Tag,
  },
]);
export var GetStorageLensGroup = op(
  n0,
  _GSLG,
  {
    [_h]: ["GET", "/v20180820/storagelensgroup/{Name}", 200],
  },
  () => GetStorageLensGroupRequest,
  () => GetStorageLensGroupResult
);
export var UpdateStorageLensGroup = op(
  n0,
  _USLG,
  {
    [_h]: ["PUT", "/v20180820/storagelensgroup/{Name}", 204],
  },
  () => UpdateStorageLensGroupRequest,
  () => Unit
);
