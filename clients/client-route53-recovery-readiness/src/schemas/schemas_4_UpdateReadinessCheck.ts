// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _jN, _RCA, _rCA, _RCN, _rCN, _RS, _rS, _RSN, _rSN, _T, _t, _URC, _URCR, _URCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateReadinessCheckRequest = struct(
  n0,
  _URCR,
  0,
  [_RCN, _RSN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _rSN,
      },
    ],
  ]
);
export var UpdateReadinessCheckResponse = struct(
  n0,
  _URCRp,
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
export var UpdateReadinessCheck = op(
  n0,
  _URC,
  {
    [_h]: ["PUT", "/readinesschecks/{ReadinessCheckName}", 200],
  },
  () => UpdateReadinessCheckRequest,
  () => UpdateReadinessCheckResponse
);
