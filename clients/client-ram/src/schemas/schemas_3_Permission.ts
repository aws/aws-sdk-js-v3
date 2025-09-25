// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DP, _DPR, _DPRe, _h, _hQ, _pA, _pS, _re, _rV, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePermissionRequest = struct(
  n0,
  _DPR,
  0,
  [_pA, _cT],
  [
    [
      0,
      {
        [_hQ]: _pA,
      },
    ],
    [
      0,
      {
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeletePermissionResponse = struct(
  n0,
  _DPRe,
  0,
  [_rV, _cT, _pS],
  [
    [
      2,
      {
        [_xN]: _re,
      },
    ],
    0,
    0,
  ]
);
export var DeletePermission = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/deletepermission", 200],
  },
  () => DeletePermissionRequest,
  () => DeletePermissionResponse
);
