// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DA, _dAe, _GDAA, _GDAAR, _GDAARe, _ht, _rSel, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DelegatedAdmin = struct(n0, _DA, 0, [_aI, _rSel], [0, 0]);
export var GetDelegatedAdminAccountRequest = struct(n0, _GDAAR, 0, [], []);
export var GetDelegatedAdminAccountResponse = struct(n0, _GDAARe, 0, [_dAe], [() => DelegatedAdmin]);
export var GetDelegatedAdminAccount = op(
  n0,
  _GDAA,
  {
    [_ht]: ["POST", "/delegatedadminaccounts/get", 200],
  },
  () => GetDelegatedAdminAccountRequest,
  () => GetDelegatedAdminAccountResponse
);
