// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AIR, _C, _CIl, _DIRA, _IRA, _IRAL, _MCIR, _MCIRM, _MCIRR, _RIR, _xN, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyClusterIamRolesMessage = struct(
  n0,
  _MCIRM,
  0,
  [_CIl, _AIR, _RIR, _DIRA],
  [0, [() => IamRoleArnList, 0], [() => IamRoleArnList, 0], 0]
);
export var ModifyClusterIamRolesResult = struct(n0, _MCIRR, 0, [_C], [[() => Cluster, 0]]);
export var IamRoleArnList = list(n0, _IRAL, 0, [
  0,
  {
    [_xN]: _IRA,
  },
]);
export var ModifyClusterIamRoles = op(
  n0,
  _MCIR,
  0,
  () => ModifyClusterIamRolesMessage,
  () => ModifyClusterIamRolesResult
);
