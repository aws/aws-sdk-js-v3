// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aPIc, _cT, _DAP, _DAPR, _DAPRe, _end, _hQ, _ht, _iT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessPolicyRequest = struct(
  n0,
  _DAPR,
  0,
  [_aPIc, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteAccessPolicyResponse = struct(n0, _DAPRe, 0, [], []);
export var DeleteAccessPolicy = op(
  n0,
  _DAP,
  {
    [_ht]: ["DELETE", "/access-policies/{accessPolicyId}", 204],
    [_end]: ["monitor."],
  },
  () => DeleteAccessPolicyRequest,
  () => DeleteAccessPolicyResponse
);
