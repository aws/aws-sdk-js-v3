// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRC, _GRCR, _GRCRe, _h, _jN, _RCA, _rCA, _RCN, _rCN, _RS, _rS, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetReadinessCheckRequest = struct(n0, _GRCR, 0, [_RCN], [[0, 1]]);
export var GetReadinessCheckResponse = struct(
  n0,
  _GRCRe,
  0,
  [_RCA, _RCN, _RS, _T],
  [
    [
      0,
      {
        [_jN]: _rCA,
      },
    ],
    [
      0,
      {
        [_jN]: _rCN,
      },
    ],
    [
      0,
      {
        [_jN]: _rS,
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
export var GetReadinessCheck = op(
  n0,
  _GRC,
  {
    [_h]: ["GET", "/readinesschecks/{ReadinessCheckName}", 200],
  },
  () => GetReadinessCheckRequest,
  () => GetReadinessCheckResponse
);
