// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DSLR,
  _DSLRR,
  _DSLRRe,
  _DTFRT,
  _DTI,
  _GSLRDS,
  _GSLRDSR,
  _GSLRDSRe,
  _R,
  _Re,
  _Res,
  _RN,
  _RUL,
  _RULT,
  _RUT,
  _S,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceLinkedRoleRequest = struct(n0, _DSLRR, 0, [_RN], [0]);
export var DeleteServiceLinkedRoleResponse = struct(n0, _DSLRRe, 0, [_DTI], [0]);
export var DeletionTaskFailureReasonType = struct(n0, _DTFRT, 0, [_Re, _RUL], [0, () => RoleUsageListType]);
export var GetServiceLinkedRoleDeletionStatusRequest = struct(n0, _GSLRDSR, 0, [_DTI], [0]);
export var GetServiceLinkedRoleDeletionStatusResponse = struct(
  n0,
  _GSLRDSRe,
  0,
  [_S, _Re],
  [0, () => DeletionTaskFailureReasonType]
);
export var RoleUsageType = struct(n0, _RUT, 0, [_R, _Res], [0, 64 | 0]);
export var ArnListType = 64 | 0;

export var RoleUsageListType = list(n0, _RULT, 0, () => RoleUsageType);
export var DeleteServiceLinkedRole = op(
  n0,
  _DSLR,
  0,
  () => DeleteServiceLinkedRoleRequest,
  () => DeleteServiceLinkedRoleResponse
);
export var GetServiceLinkedRoleDeletionStatus = op(
  n0,
  _GSLRDS,
  0,
  () => GetServiceLinkedRoleDeletionStatusRequest,
  () => GetServiceLinkedRoleDeletionStatusResponse
);
