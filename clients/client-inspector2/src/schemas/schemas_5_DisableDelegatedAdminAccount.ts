// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dAAI, _DDAA, _DDAAR, _DDAARi, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableDelegatedAdminAccountRequest = struct(n0, _DDAAR, 0, [_dAAI], [0]);
export var DisableDelegatedAdminAccountResponse = struct(n0, _DDAARi, 0, [_dAAI], [0]);
export var DisableDelegatedAdminAccount = op(
  n0,
  _DDAA,
  {
    [_ht]: ["POST", "/delegatedadminaccounts/disable", 200],
  },
  () => DisableDelegatedAdminAccountRequest,
  () => DisableDelegatedAdminAccountResponse
);
