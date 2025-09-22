// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _APIK,
  _ARGA,
  _ARN,
  _C,
  _CT,
  _D,
  _ET,
  _EV,
  _FL,
  _GDAPIK,
  _GDAPIKR,
  _GDAPIKRe,
  _GMRS,
  _GMRSR,
  _GMRSRe,
  _Id,
  _LN,
  _LT,
  _LUT,
  _MRS,
  _MRSV,
  _N,
  _NLT,
  _PTu,
  _PV,
  _RVe,
  _Sc,
  _TD,
  _UMRSVED,
  _UMRSVEDR,
  _UMRSVEDRp,
  _VTE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetDecryptedAPIKeyRequest = struct(n0, _GDAPIKR, 0, [_Sc, _APIK], [0, 0]);
export var GetDecryptedAPIKeyResponse = struct(n0, _GDAPIKRe, 0, [_TD, _CT], [64 | 0, 4]);
export var GetManagedRuleSetRequest = struct(n0, _GMRSR, 0, [_N, _Sc, _Id], [0, 0, 0]);
export var GetManagedRuleSetResponse = struct(n0, _GMRSRe, 0, [_MRS, _LT], [() => ManagedRuleSet, 0]);
export var ManagedRuleSet = struct(
  n0,
  _MRS,
  0,
  [_N, _Id, _ARN, _D, _PV, _RVe, _LN],
  [0, 0, 0, 0, () => PublishedVersions, 0, 0]
);
export var ManagedRuleSetVersion = struct(n0, _MRSV, 0, [_ARGA, _C, _FL, _PTu, _LUT, _ET], [0, 1, 1, 4, 4, 4]);
export var UpdateManagedRuleSetVersionExpiryDateRequest = struct(
  n0,
  _UMRSVEDR,
  0,
  [_N, _Sc, _Id, _LT, _VTE, _ET],
  [0, 0, 0, 0, 0, 4]
);
export var UpdateManagedRuleSetVersionExpiryDateResponse = struct(n0, _UMRSVEDRp, 0, [_EV, _ET, _NLT], [0, 4, 0]);
export var PublishedVersions = map(n0, _PV, 0, 0, () => ManagedRuleSetVersion);
export var GetDecryptedAPIKey = op(
  n0,
  _GDAPIK,
  0,
  () => GetDecryptedAPIKeyRequest,
  () => GetDecryptedAPIKeyResponse
);
export var GetManagedRuleSet = op(
  n0,
  _GMRS,
  0,
  () => GetManagedRuleSetRequest,
  () => GetManagedRuleSetResponse
);
export var UpdateManagedRuleSetVersionExpiryDate = op(
  n0,
  _UMRSVED,
  0,
  () => UpdateManagedRuleSetVersionExpiryDateRequest,
  () => UpdateManagedRuleSetVersionExpiryDateResponse
);
