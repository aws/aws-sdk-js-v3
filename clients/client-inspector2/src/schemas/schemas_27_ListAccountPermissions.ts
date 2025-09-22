// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ht, _LAP, _LAPR, _LAPRi, _mR, _nT, _o, _P, _Pe, _pe, _serv, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListAccountPermissionsRequest = struct(n0, _LAPR, 0, [_serv, _mR, _nT], [0, 1, 0]);
export var ListAccountPermissionsResponse = struct(n0, _LAPRi, 0, [_pe, _nT], [() => Permissions, 0]);
export var Permission = struct(n0, _P, 0, [_serv, _o], [0, 0]);
export var Permissions = list(n0, _Pe, 0, () => Permission);
export var ListAccountPermissions = op(
  n0,
  _LAP,
  {
    [_ht]: ["POST", "/accountpermissions/list", 200],
  },
  () => ListAccountPermissionsRequest,
  () => ListAccountPermissionsResponse
);
