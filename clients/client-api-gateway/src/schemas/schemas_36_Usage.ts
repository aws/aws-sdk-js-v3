// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CUPK,
  _CUPKR,
  _GUPK,
  _GUPKe,
  _GUPKR,
  _GUPKRe,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _kI,
  _kT,
  _li,
  _LOUPK,
  _n,
  _nQ,
  _p,
  _ty,
  _uPI,
  _UPK,
  _UPKs,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateUsagePlanKeyRequest = struct(n0, _CUPKR, 0, [_uPI, _kI, _kT], [[0, 1], 0, 0]);
export var GetUsagePlanKeyRequest = struct(
  n0,
  _GUPKR,
  0,
  [_uPI, _kI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetUsagePlanKeysRequest = struct(
  n0,
  _GUPKRe,
  0,
  [_uPI, _p, _li, _nQ],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var UsagePlanKey = struct(n0, _UPK, 0, [_i, _ty, _v, _n], [0, 0, 0, 0]);
export var UsagePlanKeys = struct(
  n0,
  _UPKs,
  0,
  [_it, _p],
  [
    [
      () => ListOfUsagePlanKey,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var ListOfUsagePlanKey = list(n0, _LOUPK, 0, () => UsagePlanKey);
export var CreateUsagePlanKey = op(
  n0,
  _CUPK,
  {
    [_ht]: ["POST", "/usageplans/{usagePlanId}/keys", 201],
  },
  () => CreateUsagePlanKeyRequest,
  () => UsagePlanKey
);
export var GetUsagePlanKey = op(
  n0,
  _GUPK,
  {
    [_ht]: ["GET", "/usageplans/{usagePlanId}/keys/{keyId}", 200],
  },
  () => GetUsagePlanKeyRequest,
  () => UsagePlanKey
);
export var GetUsagePlanKeys = op(
  n0,
  _GUPKe,
  {
    [_ht]: ["GET", "/usageplans/{usagePlanId}/keys", 200],
  },
  () => GetUsagePlanKeysRequest,
  () => UsagePlanKeys
);
