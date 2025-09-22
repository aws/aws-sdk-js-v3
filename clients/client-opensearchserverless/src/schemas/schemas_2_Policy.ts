// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APD,
  _aPD,
  _BGLP,
  _BGLPR,
  _BGLPRa,
  _cD,
  _cT,
  _d,
  _eC,
  _eM,
  _GAP,
  _GAPR,
  _GAPRe,
  _GSP,
  _GSPR,
  _GSPRe,
  _id,
  _lMD,
  _LPD,
  _lPD,
  _LPDi,
  _LPED,
  _lPED,
  _LPEDi,
  _LPI,
  _LPIi,
  _n,
  _p,
  _pV,
  _SPD,
  _sPD,
  _t,
  _UAP,
  _UAPR,
  _UAPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPolicyDetail = struct(n0, _APD, 0, [_t, _n, _pV, _d, _p, _cD, _lMD], [0, 0, 0, 0, 15, 1, 1]);
export var BatchGetLifecyclePolicyRequest = struct(n0, _BGLPR, 0, [_id], [() => LifecyclePolicyIdentifiers]);
export var BatchGetLifecyclePolicyResponse = struct(
  n0,
  _BGLPRa,
  0,
  [_lPD, _lPED],
  [() => LifecyclePolicyDetails, () => LifecyclePolicyErrorDetails]
);
export var GetAccessPolicyRequest = struct(n0, _GAPR, 0, [_t, _n], [0, 0]);
export var GetAccessPolicyResponse = struct(n0, _GAPRe, 0, [_aPD], [() => AccessPolicyDetail]);
export var GetSecurityPolicyRequest = struct(n0, _GSPR, 0, [_t, _n], [0, 0]);
export var GetSecurityPolicyResponse = struct(n0, _GSPRe, 0, [_sPD], [() => SecurityPolicyDetail]);
export var LifecyclePolicyDetail = struct(n0, _LPD, 0, [_t, _n, _pV, _d, _p, _cD, _lMD], [0, 0, 0, 0, 15, 1, 1]);
export var LifecyclePolicyErrorDetail = struct(n0, _LPED, 0, [_t, _n, _eM, _eC], [0, 0, 0, 0]);
export var LifecyclePolicyIdentifier = struct(n0, _LPI, 0, [_t, _n], [0, 0]);
export var SecurityPolicyDetail = struct(n0, _SPD, 0, [_t, _n, _pV, _d, _p, _cD, _lMD], [0, 0, 0, 0, 15, 1, 1]);
export var UpdateAccessPolicyRequest = struct(n0, _UAPR, 0, [_t, _n, _pV, _d, _p, _cT], [0, 0, 0, 0, 0, [0, 4]]);
export var UpdateAccessPolicyResponse = struct(n0, _UAPRp, 0, [_aPD], [() => AccessPolicyDetail]);
export var LifecyclePolicyDetails = list(n0, _LPDi, 0, () => LifecyclePolicyDetail);
export var LifecyclePolicyErrorDetails = list(n0, _LPEDi, 0, () => LifecyclePolicyErrorDetail);
export var LifecyclePolicyIdentifiers = list(n0, _LPIi, 0, () => LifecyclePolicyIdentifier);
export var BatchGetLifecyclePolicy = op(
  n0,
  _BGLP,
  0,
  () => BatchGetLifecyclePolicyRequest,
  () => BatchGetLifecyclePolicyResponse
);
export var GetAccessPolicy = op(
  n0,
  _GAP,
  0,
  () => GetAccessPolicyRequest,
  () => GetAccessPolicyResponse
);
export var GetSecurityPolicy = op(
  n0,
  _GSP,
  0,
  () => GetSecurityPolicyRequest,
  () => GetSecurityPolicyResponse
);
export var UpdateAccessPolicy = op(
  n0,
  _UAP,
  2,
  () => UpdateAccessPolicyRequest,
  () => UpdateAccessPolicyResponse
);
