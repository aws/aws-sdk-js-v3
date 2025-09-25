// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidPolicyException as __InvalidPolicyException,
  MalformedPolicyTemplateException as __MalformedPolicyTemplateException,
  PermissionAlreadyExistsException as __PermissionAlreadyExistsException,
  PermissionLimitExceededException as __PermissionLimitExceededException,
  PermissionVersionsLimitExceededException as __PermissionVersionsLimitExceededException,
  TagLimitExceededException as __TagLimitExceededException,
  TagPolicyViolationException as __TagPolicyViolationException,
} from "../models/index";
import {
  _a,
  _aEP,
  _aQE,
  _c,
  _CP,
  _CPR,
  _CPRr,
  _CPV,
  _CPVR,
  _CPVRr,
  _CRS,
  _CRSR,
  _CRSRr,
  _cT,
  _cTr,
  _dV,
  _e,
  _fS,
  _GP,
  _GPR,
  _GPRe,
  _GRS,
  _GRSR,
  _GRSRe,
  _h,
  _hE,
  _IPEn,
  _iRTD,
  _it,
  _k,
  _LP,
  _LPR,
  _LPRi,
  _LPV,
  _LPVR,
  _LPVRi,
  _LRSP,
  _LRSPR,
  _LRSPRi,
  _lUT,
  _m,
  _MPTE,
  _mR,
  _n,
  _nT,
  _oAI,
  _p,
  _pA,
  _pAe,
  _PAEE,
  _PAL,
  _pe,
  _per,
  _PLEE,
  _PPCFP,
  _PPCFPR,
  _PPCFPRr,
  _pT,
  _pTe,
  _pV,
  _PVLEE,
  _rA,
  _rAe,
  _rO,
  _RS,
  _rS,
  _rSA,
  _rSAes,
  _rSe,
  _RSL,
  _RSPD,
  _RSPL,
  _RSPS,
  _rSS,
  _rT,
  _s,
  _sM,
  _so,
  _T,
  _t,
  _TF,
  _tF,
  _TFa,
  _tK,
  _TL,
  _TLEE,
  _TPVE,
  _TR,
  _TRR,
  _TRRa,
  _tV,
  _URS,
  _URSR,
  _URSRp,
  _v,
  _va,
  _xN,
  n0,
} from "./schemas_0";
import { ResourceShareArnList } from "./schemas_6_Resource";
import { ResourceArnList } from "./schemas_8_Resource";
import { SourceArnOrAccountList } from "./schemas_10_ResourceShare";
import { PrincipalArnOrIdList } from "./schemas_18_ResourceShare";

/* eslint no-var: 0 */

export var CreatePermissionRequest = struct(n0, _CPR, 0, [_n, _rT, _pT, _cT, _t], [0, 0, 0, 0, () => TagList]);
export var CreatePermissionResponse = struct(n0, _CPRr, 0, [_pe, _cT], [() => ResourceSharePermissionSummary, 0]);
export var CreatePermissionVersionRequest = struct(n0, _CPVR, 0, [_pA, _pT, _cT], [0, 0, 0]);
export var CreatePermissionVersionResponse = struct(
  n0,
  _CPVRr,
  0,
  [_pe, _cT],
  [() => ResourceSharePermissionDetail, 0]
);
export var CreateResourceShareRequest = struct(
  n0,
  _CRSR,
  0,
  [_n, _rA, _p, _t, _aEP, _cT, _pAe, _so],
  [
    0,
    [() => ResourceArnList, 0],
    [() => PrincipalArnOrIdList, 0],
    () => TagList,
    2,
    0,
    [() => PermissionArnList, 0],
    [() => SourceArnOrAccountList, 0],
  ]
);
export var CreateResourceShareResponse = struct(n0, _CRSRr, 0, [_rS, _cT], [() => ResourceShare, 0]);
export var GetPermissionRequest = struct(n0, _GPR, 0, [_pA, _pV], [0, 1]);
export var GetPermissionResponse = struct(n0, _GPRe, 0, [_pe], [() => ResourceSharePermissionDetail]);
export var GetResourceSharesRequest = struct(
  n0,
  _GRSR,
  0,
  [_rSAes, _rSS, _rO, _n, _tF, _nT, _mR, _pA, _pV],
  [[() => ResourceShareArnList, 0], 0, 0, 0, () => TagFilters, 0, 1, 0, 1]
);
export var GetResourceSharesResponse = struct(n0, _GRSRe, 0, [_rSe, _nT], [[() => ResourceShareList, 0], 0]);
export var InvalidPolicyException = error(
  n0,
  _IPEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidPolicy`, 400],
  },
  [_m],
  [0],

  __InvalidPolicyException
);
export var ListPermissionsRequest = struct(n0, _LPR, 0, [_rT, _nT, _mR, _pTe], [0, 0, 1, 0]);
export var ListPermissionsResponse = struct(n0, _LPRi, 0, [_per, _nT], [[() => ResourceSharePermissionList, 0], 0]);
export var ListPermissionVersionsRequest = struct(n0, _LPVR, 0, [_pA, _nT, _mR], [0, 0, 1]);
export var ListPermissionVersionsResponse = struct(
  n0,
  _LPVRi,
  0,
  [_per, _nT],
  [[() => ResourceSharePermissionList, 0], 0]
);
export var ListResourceSharePermissionsRequest = struct(n0, _LRSPR, 0, [_rSA, _nT, _mR], [0, 0, 1]);
export var ListResourceSharePermissionsResponse = struct(
  n0,
  _LRSPRi,
  0,
  [_per, _nT],
  [[() => ResourceSharePermissionList, 0], 0]
);
export var MalformedPolicyTemplateException = error(
  n0,
  _MPTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedPolicyTemplateException`, 400],
  },
  [_m],
  [0],

  __MalformedPolicyTemplateException
);
export var PermissionAlreadyExistsException = error(
  n0,
  _PAEE,
  {
    [_e]: _c,
    [_hE]: 409,
    [_aQE]: [`PermissionAlreadyExistsException`, 409],
  },
  [_m],
  [0],

  __PermissionAlreadyExistsException
);
export var PermissionLimitExceededException = error(
  n0,
  _PLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PermissionLimitExceededException`, 400],
  },
  [_m],
  [0],

  __PermissionLimitExceededException
);
export var PermissionVersionsLimitExceededException = error(
  n0,
  _PVLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PermissionVersionsLimitExceededException`, 400],
  },
  [_m],
  [0],

  __PermissionVersionsLimitExceededException
);
export var PromotePermissionCreatedFromPolicyRequest = struct(n0, _PPCFPR, 0, [_pA, _n, _cT], [0, 0, 0]);
export var PromotePermissionCreatedFromPolicyResponse = struct(
  n0,
  _PPCFPRr,
  0,
  [_pe, _cT],
  [() => ResourceSharePermissionSummary, 0]
);
export var ResourceShare = struct(
  n0,
  _RS,
  0,
  [_rSA, _n, _oAI, _aEP, _s, _sM, _t, _cTr, _lUT, _fS],
  [0, 0, 0, 2, 0, 0, () => TagList, 4, 4, 0]
);
export var ResourceSharePermissionDetail = struct(
  n0,
  _RSPD,
  0,
  [_a, _v, _dV, _n, _rT, _pe, _cTr, _lUT, _iRTD, _pTe, _fS, _s, _t],
  [0, 0, 2, 0, 0, 0, 4, 4, 2, 0, 0, 0, () => TagList]
);
export var ResourceSharePermissionSummary = struct(
  n0,
  _RSPS,
  0,
  [_a, _v, _dV, _n, _rT, _s, _cTr, _lUT, _iRTD, _pTe, _fS, _t],
  [0, 0, 2, 0, 0, 0, 4, 4, 2, 0, 0, () => TagList]
);
export var Tag = struct(n0, _T, 0, [_k, _va], [0, 0]);
export var TagFilter = struct(n0, _TF, 0, [_tK, _tV], [0, 64 | 0]);
export var TagLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagLimitExceeded`, 400],
  },
  [_m],
  [0],

  __TagLimitExceededException
);
export var TagPolicyViolationException = error(
  n0,
  _TPVE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagPolicyViolation`, 400],
  },
  [_m],
  [0],

  __TagPolicyViolationException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rSA, _t, _rAe], [0, () => TagList, 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UpdateResourceShareRequest = struct(n0, _URSR, 0, [_rSA, _n, _aEP, _cT], [0, 0, 2, 0]);
export var UpdateResourceShareResponse = struct(n0, _URSRp, 0, [_rS, _cT], [() => ResourceShare, 0]);
export var PermissionArnList = list(n0, _PAL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ResourceShareList = list(n0, _RSL, 0, [
  () => ResourceShare,
  {
    [_xN]: _it,
  },
]);
export var ResourceSharePermissionList = list(n0, _RSPL, 0, [
  () => ResourceSharePermissionSummary,
  {
    [_xN]: _it,
  },
]);
export var TagFilters = list(n0, _TFa, 0, () => TagFilter);
export var TagList = list(n0, _TL, 0, () => Tag);
export var TagValueList = 64 | 0;

export var CreatePermission = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/createpermission", 200],
  },
  () => CreatePermissionRequest,
  () => CreatePermissionResponse
);
export var CreatePermissionVersion = op(
  n0,
  _CPV,
  {
    [_h]: ["POST", "/createpermissionversion", 200],
  },
  () => CreatePermissionVersionRequest,
  () => CreatePermissionVersionResponse
);
export var CreateResourceShare = op(
  n0,
  _CRS,
  {
    [_h]: ["POST", "/createresourceshare", 200],
  },
  () => CreateResourceShareRequest,
  () => CreateResourceShareResponse
);
export var GetPermission = op(
  n0,
  _GP,
  {
    [_h]: ["POST", "/getpermission", 200],
  },
  () => GetPermissionRequest,
  () => GetPermissionResponse
);
export var GetResourceShares = op(
  n0,
  _GRS,
  {
    [_h]: ["POST", "/getresourceshares", 200],
  },
  () => GetResourceSharesRequest,
  () => GetResourceSharesResponse
);
export var ListPermissions = op(
  n0,
  _LP,
  {
    [_h]: ["POST", "/listpermissions", 200],
  },
  () => ListPermissionsRequest,
  () => ListPermissionsResponse
);
export var ListPermissionVersions = op(
  n0,
  _LPV,
  {
    [_h]: ["POST", "/listpermissionversions", 200],
  },
  () => ListPermissionVersionsRequest,
  () => ListPermissionVersionsResponse
);
export var ListResourceSharePermissions = op(
  n0,
  _LRSP,
  {
    [_h]: ["POST", "/listresourcesharepermissions", 200],
  },
  () => ListResourceSharePermissionsRequest,
  () => ListResourceSharePermissionsResponse
);
export var PromotePermissionCreatedFromPolicy = op(
  n0,
  _PPCFP,
  {
    [_h]: ["POST", "/promotepermissioncreatedfrompolicy", 200],
  },
  () => PromotePermissionCreatedFromPolicyRequest,
  () => PromotePermissionCreatedFromPolicyResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tagresource", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UpdateResourceShare = op(
  n0,
  _URS,
  {
    [_h]: ["POST", "/updateresourceshare", 200],
  },
  () => UpdateResourceShareRequest,
  () => UpdateResourceShareResponse
);
