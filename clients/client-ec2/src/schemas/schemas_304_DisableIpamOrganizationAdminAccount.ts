// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DAAI, _DIOAA, _DIOAAR, _DIOAARi, _DR, _eQN, _Succ, _succ, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableIpamOrganizationAdminAccountRequest = struct(n0, _DIOAAR, 0, [_DR, _DAAI], [2, 0]);
export var DisableIpamOrganizationAdminAccountResult = struct(
  n0,
  _DIOAARi,
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
export var DisableIpamOrganizationAdminAccount = op(
  n0,
  _DIOAA,
  0,
  () => DisableIpamOrganizationAdminAccountRequest,
  () => DisableIpamOrganizationAdminAccountResult
);
