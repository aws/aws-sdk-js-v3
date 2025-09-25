// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DI,
  _dI,
  _hL,
  _hQ,
  _ht,
  _jN,
  _LTESi,
  _LTESRis,
  _LTESRist,
  _MR,
  _mR,
  _NT,
  _nT,
  _TESIru,
  _tESIru,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTrustedEntitySetsRequest = struct(
  n0,
  _LTESRis,
  0,
  [_DI, _MR, _NT],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListTrustedEntitySetsResponse = struct(
  n0,
  _LTESRist,
  0,
  [_TESIru, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _tESIru,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var TrustedEntitySetIds = 64 | 0;

export var ListTrustedEntitySets = op(
  n0,
  _LTESi,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/trustedentityset", 200],
  },
  () => ListTrustedEntitySetsRequest,
  () => ListTrustedEntitySetsResponse
);
