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
  _ISI,
  _iSI,
  _jN,
  _Lo,
  _lo,
  _N,
  _n,
  _UIPS,
  _UIPSR,
  _UIPSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateIPSetRequest = struct(
  n0,
  _UIPSR,
  0,
  [_DI, _ISI, _N, _Lo, _Acti, _EBO],
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
      2,
      {
        [_jN]: _act,
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
export var UpdateIPSetResponse = struct(n0, _UIPSRp, 0, [], []);
export var UpdateIPSet = op(
  n0,
  _UIPS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/ipset/{IpSetId}", 200],
  },
  () => UpdateIPSetRequest,
  () => UpdateIPSetResponse
);
