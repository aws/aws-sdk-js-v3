// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _ce, _GRG, _GRGR, _GRGRe, _h, _jN, _RGA, _rGA, _RGN, _rGN, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRecoveryGroupRequest = struct(n0, _GRGR, 0, [_RGN], [[0, 1]]);
export var GetRecoveryGroupResponse = struct(
  n0,
  _GRGRe,
  0,
  [_C, _RGA, _RGN, _T],
  [
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      0,
      {
        [_jN]: _rGA,
      },
    ],
    [
      0,
      {
        [_jN]: _rGN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var GetRecoveryGroup = op(
  n0,
  _GRG,
  {
    [_h]: ["GET", "/recoverygroups/{RecoveryGroupName}", 200],
  },
  () => GetRecoveryGroupRequest,
  () => GetRecoveryGroupResponse
);
