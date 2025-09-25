// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _aA, _GSRFA, _GSRFAR, _GSRFARe, _h, _jN, _RA, _rA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetServiceRoleForAccountRequest = struct(n0, _GSRFAR, 0, [], []);
export var GetServiceRoleForAccountResponse = struct(
  n0,
  _GSRFARe,
  0,
  [_aA, _rA],
  [
    [
      0,
      {
        [_jN]: _AA,
      },
    ],
    [
      0,
      {
        [_jN]: _RA,
      },
    ],
  ]
);
export var GetServiceRoleForAccount = op(
  n0,
  _GSRFA,
  {
    [_h]: ["GET", "/greengrass/servicerole", 200],
  },
  () => GetServiceRoleForAccountRequest,
  () => GetServiceRoleForAccountResponse
);
