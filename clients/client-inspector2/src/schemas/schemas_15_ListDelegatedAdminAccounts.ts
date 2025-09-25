// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _DAA, _dAA, _DAAL, _ht, _LDAA, _LDAAR, _LDAARi, _mR, _nT, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DelegatedAdminAccount = struct(n0, _DAA, 0, [_aI, _s], [0, 0]);
export var ListDelegatedAdminAccountsRequest = struct(n0, _LDAAR, 0, [_mR, _nT], [1, 0]);
export var ListDelegatedAdminAccountsResponse = struct(
  n0,
  _LDAARi,
  0,
  [_dAA, _nT],
  [() => DelegatedAdminAccountList, 0]
);
export var DelegatedAdminAccountList = list(n0, _DAAL, 0, () => DelegatedAdminAccount);
export var ListDelegatedAdminAccounts = op(
  n0,
  _LDAA,
  {
    [_ht]: ["POST", "/delegatedadminaccounts/list", 200],
  },
  () => ListDelegatedAdminAccountsRequest,
  () => ListDelegatedAdminAccountsResponse
);
