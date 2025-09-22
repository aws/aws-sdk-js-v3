// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DI,
  _dI,
  _EBO,
  _eBO,
  _Fo,
  _fo,
  _GTIS,
  _GTISR,
  _GTISRe,
  _hL,
  _ht,
  _jN,
  _Lo,
  _lo,
  _N,
  _n,
  _St,
  _st,
  _Ta,
  _ta,
  _TISI,
  _tISI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetThreatIntelSetRequest = struct(
  n0,
  _GTISR,
  0,
  [_DI, _TISI],
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
        [_jN]: _tISI,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetThreatIntelSetResponse = struct(
  n0,
  _GTISRe,
  0,
  [_N, _Fo, _Lo, _St, _Ta, _EBO],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
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
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
  ]
);
export var GetThreatIntelSet = op(
  n0,
  _GTIS,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}", 200],
  },
  () => GetThreatIntelSetRequest,
  () => GetThreatIntelSetResponse
);
