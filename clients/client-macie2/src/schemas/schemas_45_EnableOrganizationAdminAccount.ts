// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aAId, _cT, _EOAA, _EOAAR, _EOAARn, _h, _iT, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableOrganizationAdminAccountRequest = struct(
  n0,
  _EOAAR,
  0,
  [_aAId, _cT],
  [
    [
      0,
      {
        [_jN]: _aAId,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
  ]
);
export var EnableOrganizationAdminAccountResponse = struct(n0, _EOAARn, 0, [], []);
export var EnableOrganizationAdminAccount = op(
  n0,
  _EOAA,
  {
    [_h]: ["POST", "/admin", 200],
  },
  () => EnableOrganizationAdminAccountRequest,
  () => EnableOrganizationAdminAccountResponse
);
