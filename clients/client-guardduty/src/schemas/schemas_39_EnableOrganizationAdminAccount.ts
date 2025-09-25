// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _aAI, _EOAA, _EOAAR, _EOAARn, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableOrganizationAdminAccountRequest = struct(
  n0,
  _EOAAR,
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
export var EnableOrganizationAdminAccountResponse = struct(n0, _EOAARn, 0, [], []);
export var EnableOrganizationAdminAccount = op(
  n0,
  _EOAA,
  {
    [_ht]: ["POST", "/admin/enable", 200],
  },
  () => EnableOrganizationAdminAccountRequest,
  () => EnableOrganizationAdminAccountResponse
);
