// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _ce, _h, _jN, _RGA, _rGA, _RGN, _rGN, _T, _t, _URG, _URGR, _URGRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateRecoveryGroupRequest = struct(
  n0,
  _URGR,
  0,
  [_C, _RGN],
  [
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [0, 1],
  ]
);
export var UpdateRecoveryGroupResponse = struct(
  n0,
  _URGRp,
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
export var UpdateRecoveryGroup = op(
  n0,
  _URG,
  {
    [_h]: ["PUT", "/recoverygroups/{RecoveryGroupName}", 200],
  },
  () => UpdateRecoveryGroupRequest,
  () => UpdateRecoveryGroupResponse
);
