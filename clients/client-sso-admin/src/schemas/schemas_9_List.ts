// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAp,
  _AApp,
  _AI,
  _AIc,
  _AL,
  _AP,
  _Ap,
  _APA,
  _CD,
  _D,
  _DAe,
  _DARes,
  _DAResc,
  _DIe,
  _DIRes,
  _DIResc,
  _DPSPS,
  _DPSPSR,
  _DPSPSRe,
  _F,
  _FR,
  _I,
  _IA,
  _IL,
  _IM,
  _ISI,
  _LA,
  _LAF,
  _LAFPPS,
  _LAFPPSR,
  _LAFPPSRi,
  _LAR,
  _LARi,
  _LI,
  _LIR,
  _LIRi,
  _LPSPTA,
  _LPSPTAR,
  _LPSPTARi,
  _MR,
  _N,
  _NT,
  _OAI,
  _PO,
  _PPS,
  _PPSR,
  _PPSRI,
  _PPSRr,
  _PSA,
  _PSe,
  _PSPS,
  _PSr,
  _RI,
  _St,
  _TI,
  _TT,
  n0,
} from "./schemas_0";
import { PortalOptions } from "./schemas_16_Application";

/* eslint no-var: 0 */

export var Application = struct(
  n0,
  _A,
  0,
  [_AAp, _APA, _N, _AApp, _IA, _St, _PO, _D, _CD],
  [0, 0, 0, 0, 0, 0, () => PortalOptions, 0, 4]
);
export var DescribeApplicationRequest = struct(n0, _DARes, 0, [_AAp], [0]);
export var DescribeApplicationResponse = struct(
  n0,
  _DAResc,
  0,
  [_AAp, _APA, _N, _AApp, _IA, _St, _PO, _D, _CD],
  [0, 0, 0, 0, 0, 0, () => PortalOptions, 0, 4]
);
export var DescribeInstanceRequest = struct(n0, _DIRes, 0, [_IA], [0]);
export var DescribeInstanceResponse = struct(n0, _DIResc, 0, [_IA, _ISI, _OAI, _N, _CD, _St], [0, 0, 0, 0, 4, 0]);
export var DescribePermissionSetProvisioningStatusRequest = struct(n0, _DPSPSR, 0, [_IA, _PPSRI], [0, 0]);
export var DescribePermissionSetProvisioningStatusResponse = struct(
  n0,
  _DPSPSRe,
  0,
  [_PSPS],
  [() => PermissionSetProvisioningStatus]
);
export var InstanceMetadata = struct(n0, _IM, 0, [_IA, _ISI, _OAI, _N, _CD, _St], [0, 0, 0, 0, 4, 0]);
export var ListAccountsForProvisionedPermissionSetRequest = struct(
  n0,
  _LAFPPSR,
  0,
  [_IA, _PSA, _PSr, _MR, _NT],
  [0, 0, 0, 1, 0]
);
export var ListAccountsForProvisionedPermissionSetResponse = struct(n0, _LAFPPSRi, 0, [_AIc, _NT], [64 | 0, 0]);
export var ListApplicationsFilter = struct(n0, _LAF, 0, [_AApp, _AP], [0, 0]);
export var ListApplicationsRequest = struct(n0, _LAR, 0, [_IA, _MR, _NT, _F], [0, 1, 0, () => ListApplicationsFilter]);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_Ap, _NT], [() => ApplicationList, 0]);
export var ListInstancesRequest = struct(n0, _LIR, 0, [_MR, _NT], [1, 0]);
export var ListInstancesResponse = struct(n0, _LIRi, 0, [_I, _NT], [() => InstanceList, 0]);
export var ListPermissionSetsProvisionedToAccountRequest = struct(
  n0,
  _LPSPTAR,
  0,
  [_IA, _AI, _PSr, _MR, _NT],
  [0, 0, 0, 1, 0]
);
export var ListPermissionSetsProvisionedToAccountResponse = struct(n0, _LPSPTARi, 0, [_NT, _PSe], [0, 64 | 0]);
export var PermissionSetProvisioningStatus = struct(n0, _PSPS, 0, [_St, _RI, _AI, _PSA, _FR, _CD], [0, 0, 0, 0, 0, 4]);
export var ProvisionPermissionSetRequest = struct(n0, _PPSR, 0, [_IA, _PSA, _TI, _TT], [0, 0, 0, 0]);
export var ProvisionPermissionSetResponse = struct(n0, _PPSRr, 0, [_PSPS], [() => PermissionSetProvisioningStatus]);
export var AccountList = 64 | 0;

export var ApplicationList = list(n0, _AL, 0, () => Application);
export var InstanceList = list(n0, _IL, 0, () => InstanceMetadata);
export var DescribeApplication = op(
  n0,
  _DAe,
  0,
  () => DescribeApplicationRequest,
  () => DescribeApplicationResponse
);
export var DescribeInstance = op(
  n0,
  _DIe,
  0,
  () => DescribeInstanceRequest,
  () => DescribeInstanceResponse
);
export var DescribePermissionSetProvisioningStatus = op(
  n0,
  _DPSPS,
  0,
  () => DescribePermissionSetProvisioningStatusRequest,
  () => DescribePermissionSetProvisioningStatusResponse
);
export var ListAccountsForProvisionedPermissionSet = op(
  n0,
  _LAFPPS,
  0,
  () => ListAccountsForProvisionedPermissionSetRequest,
  () => ListAccountsForProvisionedPermissionSetResponse
);
export var ListApplications = op(
  n0,
  _LA,
  0,
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListInstances = op(
  n0,
  _LI,
  0,
  () => ListInstancesRequest,
  () => ListInstancesResponse
);
export var ListPermissionSetsProvisionedToAccount = op(
  n0,
  _LPSPTA,
  0,
  () => ListPermissionSetsProvisionedToAccountRequest,
  () => ListPermissionSetsProvisionedToAccountResponse
);
export var ProvisionPermissionSet = op(
  n0,
  _PPS,
  0,
  () => ProvisionPermissionSetRequest,
  () => ProvisionPermissionSetResponse
);
