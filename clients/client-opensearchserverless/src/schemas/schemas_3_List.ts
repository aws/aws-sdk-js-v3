// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aD,
  _aN,
  _aPS,
  _APSc,
  _APScc,
  _cD,
  _cT,
  _cV,
  _d,
  _gA,
  _GSC,
  _GSCR,
  _GSCRe,
  _iA,
  _id_,
  _IFCO,
  _iFO,
  _IICCO,
  _iICO,
  _iICOU,
  _LAP,
  _LAPR,
  _LAPRi,
  _LLP,
  _LLPR,
  _LLPRi,
  _lMD,
  _lPS,
  _LPSi,
  _LPSif,
  _LSC,
  _LSCR,
  _LSCRi,
  _LSP,
  _LSPR,
  _LSPRi,
  _LVE,
  _LVER,
  _LVERi,
  _me,
  _mR,
  _n,
  _nT,
  _oSSEI,
  _pV,
  _r,
  _re,
  _s,
  _SCD,
  _sCD,
  _SCO,
  _sCS,
  _SCSe,
  _SCSec,
  _sO,
  _sPS,
  _SPSe,
  _SPSec,
  _sT,
  _t,
  _uA,
  _UIICCO,
  _USC,
  _USCR,
  _USCRp,
  _VEF,
  _vEF,
  _VES,
  _vES,
  _VESp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPolicySummary = struct(n0, _APSc, 0, [_t, _n, _pV, _d, _cD, _lMD], [0, 0, 0, 0, 1, 1]);
export var GetSecurityConfigRequest = struct(n0, _GSCR, 0, [_id_], [0]);
export var GetSecurityConfigResponse = struct(n0, _GSCRe, 0, [_sCD], [() => SecurityConfigDetail]);
export var IamFederationConfigOptions = struct(n0, _IFCO, 0, [_gA, _uA], [0, 0]);
export var IamIdentityCenterConfigOptions = struct(n0, _IICCO, 0, [_iA, _aA, _aN, _aD, _uA, _gA], [0, 0, 0, 0, 0, 0]);
export var LifecyclePolicySummary = struct(n0, _LPSi, 0, [_t, _n, _pV, _d, _cD, _lMD], [0, 0, 0, 0, 1, 1]);
export var ListAccessPoliciesRequest = struct(n0, _LAPR, 0, [_t, _r, _nT, _mR], [0, 64 | 0, 0, 1]);
export var ListAccessPoliciesResponse = struct(n0, _LAPRi, 0, [_aPS, _nT], [() => AccessPolicySummaries, 0]);
export var ListLifecyclePoliciesRequest = struct(n0, _LLPR, 0, [_t, _re, _nT, _mR], [0, 64 | 0, 0, 1]);
export var ListLifecyclePoliciesResponse = struct(n0, _LLPRi, 0, [_lPS, _nT], [() => LifecyclePolicySummaries, 0]);
export var ListSecurityConfigsRequest = struct(n0, _LSCR, 0, [_t, _nT, _mR], [0, 0, 1]);
export var ListSecurityConfigsResponse = struct(n0, _LSCRi, 0, [_sCS, _nT], [() => SecurityConfigSummaries, 0]);
export var ListSecurityPoliciesRequest = struct(n0, _LSPR, 0, [_t, _r, _nT, _mR], [0, 64 | 0, 0, 1]);
export var ListSecurityPoliciesResponse = struct(n0, _LSPRi, 0, [_sPS, _nT], [() => SecurityPolicySummaries, 0]);
export var ListVpcEndpointsRequest = struct(n0, _LVER, 0, [_vEF, _nT, _mR], [() => VpcEndpointFilters, 0, 1]);
export var ListVpcEndpointsResponse = struct(n0, _LVERi, 0, [_vES, _nT], [() => VpcEndpointSummaries, 0]);
export var SamlConfigOptions = struct(n0, _SCO, 0, [_me, _uA, _gA, _oSSEI, _sT], [0, 0, 0, 0, 1]);
export var SecurityConfigDetail = struct(
  n0,
  _SCD,
  0,
  [_id_, _t, _cV, _d, _sO, _iICO, _iFO, _cD, _lMD],
  [0, 0, 0, 0, () => SamlConfigOptions, () => IamIdentityCenterConfigOptions, () => IamFederationConfigOptions, 1, 1]
);
export var SecurityConfigSummary = struct(n0, _SCSe, 0, [_id_, _t, _cV, _d, _cD, _lMD], [0, 0, 0, 0, 1, 1]);
export var SecurityPolicySummary = struct(n0, _SPSe, 0, [_t, _n, _pV, _d, _cD, _lMD], [0, 0, 0, 0, 1, 1]);
export var UpdateIamIdentityCenterConfigOptions = struct(n0, _UIICCO, 0, [_uA, _gA], [0, 0]);
export var UpdateSecurityConfigRequest = struct(
  n0,
  _USCR,
  0,
  [_id_, _cV, _d, _sO, _iICOU, _iFO, _cT],
  [
    0,
    0,
    0,
    () => SamlConfigOptions,
    () => UpdateIamIdentityCenterConfigOptions,
    () => IamFederationConfigOptions,
    [0, 4],
  ]
);
export var UpdateSecurityConfigResponse = struct(n0, _USCRp, 0, [_sCD], [() => SecurityConfigDetail]);
export var VpcEndpointFilters = struct(n0, _VEF, 0, [_s], [0]);
export var VpcEndpointSummary = struct(n0, _VES, 0, [_id_, _n, _s], [0, 0, 0]);
export var AccessPolicySummaries = list(n0, _APScc, 0, () => AccessPolicySummary);
export var LifecyclePolicySummaries = list(n0, _LPSif, 0, () => LifecyclePolicySummary);
export var LifecycleResourceFilter = 64 | 0;

export var ResourceFilter = 64 | 0;

export var SecurityConfigSummaries = list(n0, _SCSec, 0, () => SecurityConfigSummary);
export var SecurityPolicySummaries = list(n0, _SPSec, 0, () => SecurityPolicySummary);
export var VpcEndpointSummaries = list(n0, _VESp, 0, () => VpcEndpointSummary);
export var GetSecurityConfig = op(
  n0,
  _GSC,
  0,
  () => GetSecurityConfigRequest,
  () => GetSecurityConfigResponse
);
export var ListAccessPolicies = op(
  n0,
  _LAP,
  0,
  () => ListAccessPoliciesRequest,
  () => ListAccessPoliciesResponse
);
export var ListLifecyclePolicies = op(
  n0,
  _LLP,
  0,
  () => ListLifecyclePoliciesRequest,
  () => ListLifecyclePoliciesResponse
);
export var ListSecurityConfigs = op(
  n0,
  _LSC,
  0,
  () => ListSecurityConfigsRequest,
  () => ListSecurityConfigsResponse
);
export var ListSecurityPolicies = op(
  n0,
  _LSP,
  0,
  () => ListSecurityPoliciesRequest,
  () => ListSecurityPoliciesResponse
);
export var ListVpcEndpoints = op(
  n0,
  _LVE,
  0,
  () => ListVpcEndpointsRequest,
  () => ListVpcEndpointsResponse
);
export var UpdateSecurityConfig = op(
  n0,
  _USC,
  2,
  () => UpdateSecurityConfigRequest,
  () => UpdateSecurityConfigResponse
);
