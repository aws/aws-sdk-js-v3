// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _aAI, _DOAA, _DOAAR, _DOAARi, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableOrganizationAdminAccountRequest = struct(
  n0,
  _DOAAR,
  0,
  [_AAI],
  [
    [
      0,
      {
        [_jN]: _aAI,
      },
    ],
  ]
);
export var DisableOrganizationAdminAccountResponse = struct(n0, _DOAARi, 0, [], []);
export var DisableOrganizationAdminAccount = op(
  n0,
  _DOAA,
  {
    [_ht]: ["POST", "/admin/disable", 200],
  },
  () => DisableOrganizationAdminAccountRequest,
  () => DisableOrganizationAdminAccountResponse
);
