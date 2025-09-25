// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CIPS,
  _CIPSR,
  _CIPSRr,
  _CT,
  _GIPS,
  _GIPSR,
  _GIPSRe,
  _IPS,
  _IPSD,
  _IPSDe,
  _IPSI,
  _IPSU,
  _IPSUe,
  _N,
  _T,
  _U,
  _UIPS,
  _UIPSR,
  _UIPSRp,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIPSetRequest = struct(n0, _CIPSR, 0, [_N, _CT], [0, 0]);
export var CreateIPSetResponse = struct(n0, _CIPSRr, 0, [_IPS, _CT], [() => IPSet, 0]);
export var GetIPSetRequest = struct(n0, _GIPSR, 0, [_IPSI], [0]);
export var GetIPSetResponse = struct(n0, _GIPSRe, 0, [_IPS], [() => IPSet]);
export var IPSet = struct(n0, _IPS, 0, [_IPSI, _N, _IPSD], [0, 0, () => IPSetDescriptors]);
export var IPSetDescriptor = struct(n0, _IPSDe, 0, [_T, _V], [0, 0]);
export var IPSetUpdate = struct(n0, _IPSU, 0, [_A, _IPSDe], [0, () => IPSetDescriptor]);
export var UpdateIPSetRequest = struct(n0, _UIPSR, 0, [_IPSI, _CT, _U], [0, 0, () => IPSetUpdates]);
export var UpdateIPSetResponse = struct(n0, _UIPSRp, 0, [_CT], [0]);
export var IPSetDescriptors = list(n0, _IPSD, 0, () => IPSetDescriptor);
export var IPSetUpdates = list(n0, _IPSUe, 0, () => IPSetUpdate);
export var CreateIPSet = op(
  n0,
  _CIPS,
  0,
  () => CreateIPSetRequest,
  () => CreateIPSetResponse
);
export var GetIPSet = op(
  n0,
  _GIPS,
  0,
  () => GetIPSetRequest,
  () => GetIPSetResponse
);
export var UpdateIPSet = op(
  n0,
  _UIPS,
  0,
  () => UpdateIPSetRequest,
  () => UpdateIPSetResponse
);
