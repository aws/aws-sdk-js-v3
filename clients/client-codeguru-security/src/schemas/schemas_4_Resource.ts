// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _cA, _hQ, _ht, _LS, _LSR, _LSRi, _mR, _nT, _rIu, _sN, _sNA, _SS, _sS, _SSc, _su, _uA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListScansRequest = struct(
  n0,
  _LSR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListScansResponse = struct(n0, _LSRi, 0, [_su, _nT], [() => ScanSummaries, 0]);
export var ScanSummary = struct(n0, _SS, 0, [_sS, _cA, _uA, _sN, _rIu, _sNA], [0, 4, 4, 0, 0, 0]);
export var ScanSummaries = list(n0, _SSc, 0, () => ScanSummary);
export var ListScans = op(
  n0,
  _LS,
  {
    [_ht]: ["GET", "/scans", 200],
  },
  () => ListScansRequest,
  () => ListScansResponse
);
