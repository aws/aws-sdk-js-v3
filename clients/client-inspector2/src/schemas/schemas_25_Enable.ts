// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _dAAI, _EDAA, _EDAAR, _EDAARn, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableDelegatedAdminAccountRequest = struct(n0, _EDAAR, 0, [_dAAI, _cT], [0, [0, 4]]);
export var EnableDelegatedAdminAccountResponse = struct(n0, _EDAARn, 0, [_dAAI], [0]);
export var EnableDelegatedAdminAccount = op(
  n0,
  _EDAA,
  {
    [_ht]: ["POST", "/delegatedadminaccounts/enable", 200],
  },
  () => EnableDelegatedAdminAccountRequest,
  () => EnableDelegatedAdminAccountResponse
);
