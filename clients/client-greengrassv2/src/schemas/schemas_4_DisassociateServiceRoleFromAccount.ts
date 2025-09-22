// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DA, _dA, _DSRFA, _DSRFAR, _DSRFARi, _h, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateServiceRoleFromAccountRequest = struct(n0, _DSRFAR, 0, [], []);
export var DisassociateServiceRoleFromAccountResponse = struct(
  n0,
  _DSRFARi,
  0,
  [_dA],
  [
    [
      0,
      {
        [_jN]: _DA,
      },
    ],
  ]
);
export var DisassociateServiceRoleFromAccount = op(
  n0,
  _DSRFA,
  {
    [_h]: ["DELETE", "/greengrass/servicerole", 200],
  },
  () => DisassociateServiceRoleFromAccountRequest,
  () => DisassociateServiceRoleFromAccountResponse
);
