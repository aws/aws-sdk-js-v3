// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDl, _CDRl, _CDRla, _ht, _I, _i, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClaimDeviceRequest = struct(
  n0,
  _CDRl,
  0,
  [_I],
  [
    [
      0,
      {
        [_jN]: _i,
      },
    ],
  ]
);
export var ClaimDeviceResponse = struct(n0, _CDRla, 0, [], []);
export var ClaimDevice = op(
  n0,
  _CDl,
  {
    [_ht]: ["POST", "/prod/claimDevice", 200],
  },
  () => ClaimDeviceRequest,
  () => ClaimDeviceResponse
);
