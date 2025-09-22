// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Co,
  _CTr,
  _EK,
  _h,
  _hQ,
  _I,
  _Id,
  _LPK,
  _LPKR,
  _LPKRi,
  _Ma,
  _MI,
  _N,
  _NM,
  _PKL,
  _PKS,
  _PKSL,
  _Q,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPublicKeysRequest = struct(
  n0,
  _LPKR,
  0,
  [_Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListPublicKeysResult = struct(n0, _LPKRi, 0, [_PKL], [[() => PublicKeyList, 16]]);
export var PublicKeyList = struct(n0, _PKL, 0, [_NM, _MI, _Q, _I], [0, 1, 1, [() => PublicKeySummaryList, 0]]);
export var PublicKeySummary = struct(n0, _PKS, 0, [_Id, _N, _CTr, _EK, _Co], [0, 0, 4, 0, 0]);
export var PublicKeySummaryList = list(n0, _PKSL, 0, [
  () => PublicKeySummary,
  {
    [_xN]: _PKS,
  },
]);
export var ListPublicKeys = op(
  n0,
  _LPK,
  {
    [_h]: ["GET", "/2020-05-31/public-key", 200],
  },
  () => ListPublicKeysRequest,
  () => ListPublicKeysResult
);
