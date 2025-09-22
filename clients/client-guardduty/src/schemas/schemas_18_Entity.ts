// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _act,
  _Acti,
  _DI,
  _dI,
  _EBO,
  _eBO,
  _hL,
  _ht,
  _jN,
  _Lo,
  _lo,
  _N,
  _n,
  _TESI,
  _tESI,
  _TESIr,
  _tESIr,
  _UTES,
  _UTESp,
  _UTESR,
  _UTESRp,
  _UTESRpd,
  _UTESRpda,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateThreatEntitySetRequest = struct(
  n0,
  _UTESR,
  0,
  [_DI, _TESI, _N, _Lo, _EBO, _Acti],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _tESI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
    [
      2,
      {
        [_jN]: _act,
      },
    ],
  ]
);
export var UpdateThreatEntitySetResponse = struct(n0, _UTESRp, 0, [], []);
export var UpdateTrustedEntitySetRequest = struct(
  n0,
  _UTESRpd,
  0,
  [_DI, _TESIr, _N, _Lo, _EBO, _Acti],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _tESIr,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
    [
      2,
      {
        [_jN]: _act,
      },
    ],
  ]
);
export var UpdateTrustedEntitySetResponse = struct(n0, _UTESRpda, 0, [], []);
export var UpdateThreatEntitySet = op(
  n0,
  _UTES,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}", 200],
  },
  () => UpdateThreatEntitySetRequest,
  () => UpdateThreatEntitySetResponse
);
export var UpdateTrustedEntitySet = op(
  n0,
  _UTESp,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}", 200],
  },
  () => UpdateTrustedEntitySetRequest,
  () => UpdateTrustedEntitySetResponse
);
