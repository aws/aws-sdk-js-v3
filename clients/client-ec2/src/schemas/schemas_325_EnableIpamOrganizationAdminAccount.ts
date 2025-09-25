// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAAI, _DR, _EIOAA, _EIOAAR, _EIOAARn, _eQN, _Succ, _succ, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableIpamOrganizationAdminAccountRequest = struct(n0, _EIOAAR, 0, [_DR, _DAAI], [2, 0]);
export var EnableIpamOrganizationAdminAccountResult = struct(
  n0,
  _EIOAARn,
  0,
  [_Succ],
  [
    [
      2,
      {
        [_eQN]: `Success`,
        [_xN]: _succ,
      },
    ],
  ]
);
export var EnableIpamOrganizationAdminAccount = op(
  n0,
  _EIOAA,
  0,
  () => EnableIpamOrganizationAdminAccountRequest,
  () => EnableIpamOrganizationAdminAccountResult
);
