// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DI,
  _dI,
  _EBO,
  _eBO,
  _Fo,
  _fo,
  _GIPS,
  _GIPSR,
  _GIPSRe,
  _hL,
  _ht,
  _ISI,
  _iSI,
  _jN,
  _Lo,
  _lo,
  _N,
  _n,
  _St,
  _st,
  _Ta,
  _ta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetIPSetRequest = struct(
  n0,
  _GIPSR,
  0,
  [_DI, _ISI],
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
        [_jN]: _iSI,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetIPSetResponse = struct(
  n0,
  _GIPSRe,
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
export var GetIPSet = op(
  n0,
  _GIPS,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/ipset/{IpSetId}", 200],
  },
  () => GetIPSetRequest,
  () => GetIPSetResponse
);
