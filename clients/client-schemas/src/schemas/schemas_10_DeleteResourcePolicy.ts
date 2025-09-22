// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _h, _hQ, _RN, _rN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(
  n0,
  _DRPR,
  0,
  [_RN],
  [
    [
      0,
      {
        [_hQ]: _rN,
      },
    ],
  ]
);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/v1/policy", 204],
  },
  () => DeleteResourcePolicyRequest,
  () => Unit
);
