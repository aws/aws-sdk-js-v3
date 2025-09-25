// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _C,
  _cBVA,
  _CCR,
  _CCr,
  _CCRr,
  _cD,
  _com,
  _CPD,
  _CPDL,
  _CS,
  _CSL,
  _cSL,
  _CSo,
  _cT,
  _cVA,
  _d,
  _da,
  _dC,
  _dV,
  _en,
  _eR,
  _GC,
  _GCR,
  _GCRe,
  _hQ,
  _ht,
  _iA,
  _iBVA,
  _iCA,
  _IDI,
  _IDIR,
  _IDIRm,
  _IVI,
  _IVIR,
  _IVIRm,
  _kKI,
  _LCBV,
  _LCBVR,
  _LCBVRi,
  _mR,
  _n,
  _nT,
  _o,
  _ob,
  _oV,
  _p,
  _pa,
  _pC,
  _pCI,
  _PCL,
  _PCLI,
  _pCT,
  _pu,
  _re,
  _rI,
  _s,
  _sOV,
  _st,
  _sV,
  _t,
  _ta,
  _u,
  _v,
  _vITI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Component = struct(
  n0,
  _C,
  0,
  [_a, _n, _v, _d, _cD, _t, _p, _sOV, _s, _pa, _o, _da, _kKI, _en, _dC, _ta, _pu, _ob, _pC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    () => ComponentState,
    () => ComponentParameterDetailList,
    0,
    0,
    0,
    2,
    0,
    128 | 0,
    0,
    2,
    () => ProductCodeList,
  ]
);
export var ComponentParameterDetail = struct(n0, _CPD, 0, [_n, _t, _dV, _d], [0, 0, 64 | 0, 0]);
export var ComponentState = struct(n0, _CS, 0, [_st, _re], [0, 0]);
export var ComponentSummary = struct(
  n0,
  _CSo,
  0,
  [_a, _n, _v, _p, _sOV, _s, _t, _o, _d, _cD, _dC, _ta, _pu, _ob],
  [0, 0, 0, 0, 64 | 0, () => ComponentState, 0, 0, 0, 0, 0, 128 | 0, 0, 2]
);
export var CreateComponentRequest = struct(
  n0,
  _CCR,
  0,
  [_n, _sV, _d, _cD, _p, _sOV, _da, _u, _kKI, _ta, _cT],
  [0, 0, 0, 0, 0, 64 | 0, 0, 0, 0, 128 | 0, [0, 4]]
);
export var CreateComponentResponse = struct(n0, _CCRr, 0, [_rI, _cT, _cBVA], [0, 0, 0]);
export var GetComponentRequest = struct(
  n0,
  _GCR,
  0,
  [_cBVA],
  [
    [
      0,
      {
        [_hQ]: _cBVA,
      },
    ],
  ]
);
export var GetComponentResponse = struct(n0, _GCRe, 0, [_rI, _com], [0, () => Component]);
export var ImportDiskImageRequest = struct(
  n0,
  _IDIR,
  0,
  [_n, _sV, _d, _p, _oV, _eR, _iCA, _u, _ta, _cT],
  [0, 0, 0, 0, 0, 0, 0, 0, 128 | 0, [0, 4]]
);
export var ImportDiskImageResponse = struct(n0, _IDIRm, 0, [_cT, _iBVA], [0, 0]);
export var ImportVmImageRequest = struct(
  n0,
  _IVIR,
  0,
  [_n, _sV, _d, _p, _oV, _vITI, _ta, _cT],
  [0, 0, 0, 0, 0, 0, 128 | 0, [0, 4]]
);
export var ImportVmImageResponse = struct(n0, _IVIRm, 0, [_rI, _iA, _cT], [0, 0, 0]);
export var ListComponentBuildVersionsRequest = struct(n0, _LCBVR, 0, [_cVA, _mR, _nT], [0, 1, 0]);
export var ListComponentBuildVersionsResponse = struct(
  n0,
  _LCBVRi,
  0,
  [_rI, _cSL, _nT],
  [0, () => ComponentSummaryList, 0]
);
export var ProductCodeListItem = struct(n0, _PCLI, 0, [_pCI, _pCT], [0, 0]);
export var ComponentParameterDetailList = list(n0, _CPDL, 0, () => ComponentParameterDetail);
export var ComponentSummaryList = list(n0, _CSL, 0, () => ComponentSummary);
export var OsVersionList = 64 | 0;

export var ProductCodeList = list(n0, _PCL, 0, () => ProductCodeListItem);
export var CreateComponent = op(
  n0,
  _CCr,
  {
    [_ht]: ["PUT", "/CreateComponent", 200],
  },
  () => CreateComponentRequest,
  () => CreateComponentResponse
);
export var GetComponent = op(
  n0,
  _GC,
  {
    [_ht]: ["GET", "/GetComponent", 200],
  },
  () => GetComponentRequest,
  () => GetComponentResponse
);
export var ImportDiskImage = op(
  n0,
  _IDI,
  {
    [_ht]: ["PUT", "/ImportDiskImage", 200],
  },
  () => ImportDiskImageRequest,
  () => ImportDiskImageResponse
);
export var ImportVmImage = op(
  n0,
  _IVI,
  {
    [_ht]: ["PUT", "/ImportVmImage", 200],
  },
  () => ImportVmImageRequest,
  () => ImportVmImageResponse
);
export var ListComponentBuildVersions = op(
  n0,
  _LCBV,
  {
    [_ht]: ["POST", "/ListComponentBuildVersions", 200],
  },
  () => ListComponentBuildVersionsRequest,
  () => ListComponentBuildVersionsResponse
);
