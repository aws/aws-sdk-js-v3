// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FN, _GP, _GPR, _GPRe, _h, _hQ, _Po, _Q, _RI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPolicyRequest = struct(
  n0,
  _GPR,
  0,
  [_FN, _Q],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _Q,
      },
    ],
  ]
);
export var GetPolicyResponse = struct(n0, _GPRe, 0, [_Po, _RI], [0, 0]);
export var GetPolicy = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/2015-03-31/functions/{FunctionName}/policy", 200],
  },
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
