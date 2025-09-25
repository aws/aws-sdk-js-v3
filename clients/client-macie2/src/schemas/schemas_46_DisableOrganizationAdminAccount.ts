// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAId, _DOAA, _DOAAR, _DOAARi, _h, _hQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableOrganizationAdminAccountRequest = struct(
  n0,
  _DOAAR,
  0,
  [_aAId],
  [
    [
      0,
      {
        [_hQ]: _aAId,
      },
    ],
  ]
);
export var DisableOrganizationAdminAccountResponse = struct(n0, _DOAARi, 0, [], []);
export var DisableOrganizationAdminAccount = op(
  n0,
  _DOAA,
  {
    [_h]: ["DELETE", "/admin", 200],
  },
  () => DisableOrganizationAdminAccountRequest,
  () => DisableOrganizationAdminAccountResponse
);
