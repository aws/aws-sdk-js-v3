// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DI,
  _dI,
  _hL,
  _hQ,
  _ht,
  _ISIp,
  _iSIp,
  _jN,
  _LIPS,
  _LIPSR,
  _LIPSRi,
  _MR,
  _mR,
  _NT,
  _nT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListIPSetsRequest = struct(
  n0,
  _LIPSR,
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
export var ListIPSetsResponse = struct(
  n0,
  _LIPSRi,
  0,
  [_ISIp, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _iSIp,
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
export var IpSetIds = 64 | 0;

export var ListIPSets = op(
  n0,
  _LIPS,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/ipset", 200],
  },
  () => ListIPSetsRequest,
  () => ListIPSetsResponse
);
