// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aOT, _DAO, _DAOR, _DAORi, _ht, _o, _rN, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableAddOnRequest = struct(n0, _DAOR, 0, [_aOT, _rN], [0, 0]);
export var DisableAddOnResult = struct(n0, _DAORi, 0, [_o], [() => OperationList]);
export var DisableAddOn = op(
  n0,
  _DAO,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DisableAddOn", 200],
  },
  () => DisableAddOnRequest,
  () => DisableAddOnResult
);
