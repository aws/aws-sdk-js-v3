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
  _TISI,
  _tISI,
  _UTIS,
  _UTISR,
  _UTISRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateThreatIntelSetRequest = struct(
  n0,
  _UTISR,
  0,
  [_DI, _TISI, _N, _Lo, _Acti, _EBO],
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
export var UpdateThreatIntelSetResponse = struct(n0, _UTISRp, 0, [], []);
export var UpdateThreatIntelSet = op(
  n0,
  _UTIS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/threatintelset/{ThreatIntelSetId}", 200],
  },
  () => UpdateThreatIntelSetRequest,
  () => UpdateThreatIntelSetResponse
);
