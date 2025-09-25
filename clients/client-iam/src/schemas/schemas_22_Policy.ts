// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ACt,
  _CD,
  _CPr,
  _CPRr,
  _CPRre,
  _CPV,
  _CPVR,
  _CPVRr,
  _D,
  _Do,
  _DPV,
  _DPVR,
  _DVI,
  _GP,
  _GPR,
  _GPRe,
  _GPV,
  _GPVR,
  _GPVRe,
  _IA,
  _IDV,
  _IT,
  _LPi,
  _LPR,
  _LPRi,
  _LPV,
  _LPVR,
  _LPVRi,
  _Ma,
  _MI,
  _OA,
  _P,
  _PA,
  _PBUC,
  _PD,
  _pDVLT,
  _PI,
  _pLT,
  _PN,
  _Po,
  _Pol,
  _PPa,
  _PUF,
  _PV,
  _SAD,
  _Sc,
  _SDPV,
  _SDPVR,
  _T,
  _UD,
  _V,
  _VI,
  n0,
  tagListType,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreatePolicyRequest = struct(n0, _CPRr, 0, [_PN, _P, _PD, _D, _T], [0, 0, 0, 0, () => tagListType]);
export var CreatePolicyResponse = struct(n0, _CPRre, 0, [_Po], [() => Policy]);
export var CreatePolicyVersionRequest = struct(n0, _CPVR, 0, [_PA, _PD, _SAD], [0, 0, 2]);
export var CreatePolicyVersionResponse = struct(n0, _CPVRr, 0, [_PV], [() => PolicyVersion]);
export var DeletePolicyVersionRequest = struct(n0, _DPVR, 0, [_PA, _VI], [0, 0]);
export var GetPolicyRequest = struct(n0, _GPR, 0, [_PA], [0]);
export var GetPolicyResponse = struct(n0, _GPRe, 0, [_Po], [() => Policy]);
export var GetPolicyVersionRequest = struct(n0, _GPVR, 0, [_PA, _VI], [0, 0]);
export var GetPolicyVersionResponse = struct(n0, _GPVRe, 0, [_PV], [() => PolicyVersion]);
export var ListPoliciesRequest = struct(n0, _LPR, 0, [_Sc, _OA, _PPa, _PUF, _Ma, _MI], [0, 2, 0, 0, 0, 1]);
export var ListPoliciesResponse = struct(n0, _LPRi, 0, [_Pol, _IT, _Ma], [() => policyListType, 2, 0]);
export var ListPolicyVersionsRequest = struct(n0, _LPVR, 0, [_PA, _Ma, _MI], [0, 0, 1]);
export var ListPolicyVersionsResponse = struct(
  n0,
  _LPVRi,
  0,
  [_V, _IT, _Ma],
  [() => policyDocumentVersionListType, 2, 0]
);
export var Policy = struct(
  n0,
  _Po,
  0,
  [_PN, _PI, _A, _P, _DVI, _ACt, _PBUC, _IA, _D, _CD, _UD, _T],
  [0, 0, 0, 0, 0, 1, 1, 2, 0, 4, 4, () => tagListType]
);
export var PolicyVersion = struct(n0, _PV, 0, [_Do, _VI, _IDV, _CD], [0, 0, 2, 4]);
export var SetDefaultPolicyVersionRequest = struct(n0, _SDPVR, 0, [_PA, _VI], [0, 0]);
export var policyDocumentVersionListType = list(n0, _pDVLT, 0, () => PolicyVersion);
export var policyListType = list(n0, _pLT, 0, () => Policy);
export var CreatePolicy = op(
  n0,
  _CPr,
  0,
  () => CreatePolicyRequest,
  () => CreatePolicyResponse
);
export var CreatePolicyVersion = op(
  n0,
  _CPV,
  0,
  () => CreatePolicyVersionRequest,
  () => CreatePolicyVersionResponse
);
export var DeletePolicyVersion = op(
  n0,
  _DPV,
  0,
  () => DeletePolicyVersionRequest,
  () => Unit
);
export var GetPolicy = op(
  n0,
  _GP,
  0,
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
export var GetPolicyVersion = op(
  n0,
  _GPV,
  0,
  () => GetPolicyVersionRequest,
  () => GetPolicyVersionResponse
);
export var ListPolicies = op(
  n0,
  _LPi,
  0,
  () => ListPoliciesRequest,
  () => ListPoliciesResponse
);
export var ListPolicyVersions = op(
  n0,
  _LPV,
  0,
  () => ListPolicyVersionsRequest,
  () => ListPolicyVersionsResponse
);
export var SetDefaultPolicyVersion = op(
  n0,
  _SDPV,
  0,
  () => SetDefaultPolicyVersionRequest,
  () => Unit
);
