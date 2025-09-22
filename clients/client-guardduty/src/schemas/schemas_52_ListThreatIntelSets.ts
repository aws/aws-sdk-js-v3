// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DI,
  _dI,
  _hL,
  _hQ,
  _ht,
  _jN,
  _LTIS,
  _LTISR,
  _LTISRi,
  _MR,
  _mR,
  _NT,
  _nT,
  _TISIh,
  _tISIh,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListThreatIntelSetsRequest = struct(
  n0,
  _LTISR,
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
export var ListThreatIntelSetsResponse = struct(
  n0,
  _LTISRi,
  0,
  [_TISIh, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _tISIh,
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
export var ThreatIntelSetIds = 64 | 0;

export var ListThreatIntelSets = op(
  n0,
  _LTIS,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/threatintelset", 200],
  },
  () => ListThreatIntelSetsRequest,
  () => ListThreatIntelSetsResponse
);
