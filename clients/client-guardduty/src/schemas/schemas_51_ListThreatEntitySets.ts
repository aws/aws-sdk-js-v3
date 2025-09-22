// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DI,
  _dI,
  _hL,
  _hQ,
  _ht,
  _jN,
  _LTES,
  _LTESR,
  _LTESRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _TESIh,
  _tESIh,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListThreatEntitySetsRequest = struct(
  n0,
  _LTESR,
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
export var ListThreatEntitySetsResponse = struct(
  n0,
  _LTESRi,
  0,
  [_TESIh, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _tESIh,
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
export var ThreatEntitySetIds = 64 | 0;

export var ListThreatEntitySets = op(
  n0,
  _LTES,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/threatentityset", 200],
  },
  () => ListThreatEntitySetsRequest,
  () => ListThreatEntitySetsResponse
);
