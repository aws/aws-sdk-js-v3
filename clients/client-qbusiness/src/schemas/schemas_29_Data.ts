// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ac, _aIp, _AP, _APR, _APRs, _cK, _cO, _con, _cV, _ht, _PC, _PCer, _pr, _sI, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatePermissionRequest = struct(
  n0,
  _APR,
  0,
  [_aIp, _sI, _ac, _con, _pr],
  [[0, 1], 0, 64 | 0, () => PermissionConditions, 0]
);
export var AssociatePermissionResponse = struct(n0, _APRs, 0, [_st], [0]);
export var PermissionCondition = struct(n0, _PC, 0, [_cO, _cK, _cV], [0, 0, 64 | 0]);
export var PermissionConditions = list(n0, _PCer, 0, () => PermissionCondition);
export var PermissionConditionValues = 64 | 0;

export var QIamActions = 64 | 0;

export var AssociatePermission = op(
  n0,
  _AP,
  {
    [_ht]: ["POST", "/applications/{applicationId}/policy", 200],
  },
  () => AssociatePermissionRequest,
  () => AssociatePermissionResponse
);
