// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _GAPPS, _GAPPSR, _GAPPSRe, _h, _hH, _hL, _IP, _N, _PS, _xaai, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccessPointPolicyStatusRequest = struct(
  n0,
  _GAPPSR,
  0,
  [_AI, _N],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var GetAccessPointPolicyStatusResult = struct(n0, _GAPPSRe, 0, [_PS], [[() => PolicyStatus, 0]]);
export var PolicyStatus = struct(
  n0,
  _PS,
  0,
  [_IP],
  [
    [
      2,
      {
        [_xN]: _IP,
      },
    ],
  ]
);
export var GetAccessPointPolicyStatus = op(
  n0,
  _GAPPS,
  {
    [_h]: ["GET", "/v20180820/accesspoint/{Name}/policyStatus", 200],
  },
  () => GetAccessPointPolicyStatusRequest,
  () => GetAccessPointPolicyStatusResult
);
