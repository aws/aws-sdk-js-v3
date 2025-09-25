// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _DMWETI,
  _DMWETIR,
  _DMWETIRe,
  _EI,
  _ETn,
  _Fi,
  _GMWETI,
  _GMWETIR,
  _GMWETIRe,
  _IInv,
  _MR,
  _MWETII,
  _MWETIIL,
  _MWETIP,
  _NT,
  _OI,
  _P,
  _SD,
  _St,
  _STt,
  _TEI,
  _TI,
  _TTa,
  _WEI,
  _WETII,
  _WTI,
  n0,
} from "./schemas_0";
import { MaintenanceWindowFilterList } from "./schemas_58_Describe";

/* eslint no-var: 0 */

export var MaintenanceWindowExecutionTaskInvocationParameters = sim(n0, _MWETIP, 0, 8);
export var OwnerInformation = sim(n0, _OI, 0, 8);
export var DescribeMaintenanceWindowExecutionTaskInvocationsRequest = struct(
  n0,
  _DMWETIR,
  0,
  [_WEI, _TI, _Fi, _MR, _NT],
  [0, 0, () => MaintenanceWindowFilterList, 1, 0]
);
export var DescribeMaintenanceWindowExecutionTaskInvocationsResult = struct(
  n0,
  _DMWETIRe,
  0,
  [_WETII, _NT],
  [[() => MaintenanceWindowExecutionTaskInvocationIdentityList, 0], 0]
);
export var GetMaintenanceWindowExecutionTaskInvocationRequest = struct(n0, _GMWETIR, 0, [_WEI, _TI, _IInv], [0, 0, 0]);
export var GetMaintenanceWindowExecutionTaskInvocationResult = struct(
  n0,
  _GMWETIRe,
  0,
  [_WEI, _TEI, _IInv, _EI, _TTa, _P, _St, _SD, _STt, _ETn, _OI, _WTI],
  [
    0,
    0,
    0,
    0,
    0,
    [() => MaintenanceWindowExecutionTaskInvocationParameters, 0],
    0,
    0,
    4,
    4,
    [() => OwnerInformation, 0],
    0,
  ]
);
export var MaintenanceWindowExecutionTaskInvocationIdentity = struct(
  n0,
  _MWETII,
  0,
  [_WEI, _TEI, _IInv, _EI, _TTa, _P, _St, _SD, _STt, _ETn, _OI, _WTI],
  [
    0,
    0,
    0,
    0,
    0,
    [() => MaintenanceWindowExecutionTaskInvocationParameters, 0],
    0,
    0,
    4,
    4,
    [() => OwnerInformation, 0],
    0,
  ]
);
export var MaintenanceWindowExecutionTaskInvocationIdentityList = list(n0, _MWETIIL, 0, [
  () => MaintenanceWindowExecutionTaskInvocationIdentity,
  0,
]);
export var DescribeMaintenanceWindowExecutionTaskInvocations = op(
  n0,
  _DMWETI,
  0,
  () => DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  () => DescribeMaintenanceWindowExecutionTaskInvocationsResult
);
export var GetMaintenanceWindowExecutionTaskInvocation = op(
  n0,
  _GMWETI,
  0,
  () => GetMaintenanceWindowExecutionTaskInvocationRequest,
  () => GetMaintenanceWindowExecutionTaskInvocationResult
);
