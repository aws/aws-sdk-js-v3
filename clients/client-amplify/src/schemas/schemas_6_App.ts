// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aI,
  _aJI,
  _aR,
  _B,
  _b,
  _bA,
  _BAC,
  _bAC,
  _bEA,
  _bN,
  _Br,
  _br,
  _Bra,
  _bra,
  _BS,
  _bS,
  _CB,
  _CBR,
  _CBRr,
  _cD,
  _cRA,
  _cT,
  _d,
  _DB,
  _dB,
  _DBR,
  _DBRe,
  _dN,
  _eAB,
  _eBA,
  _eNn,
  _ePM,
  _ePRP,
  _eSP,
  _eV,
  _f,
  _GB,
  _GBR,
  _GBRe,
  _h,
  _hQ,
  _LB,
  _LBR,
  _LBRi,
  _mR,
  _nT,
  _pREN,
  _s,
  _sA,
  _sB,
  _t,
  _tNOJ,
  _tt,
  _tU,
  _UB,
  _UBR,
  _UBRp,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BasicAuthCredentials = sim(n0, _BAC, 0, 8);
export var BuildSpec = sim(n0, _BS, 0, 8);
export var Backend = struct(n0, _B, 0, [_sA], [0]);
export var Branch = struct(
  n0,
  _Br,
  0,
  [
    _bA,
    _bN,
    _d,
    _t,
    _s,
    _dN,
    _eNn,
    _cT,
    _uT,
    _eV,
    _eAB,
    _eSP,
    _cD,
    _f,
    _aJI,
    _tNOJ,
    _eBA,
    _ePM,
    _tU,
    _bAC,
    _bS,
    _tt,
    _aR,
    _ePRP,
    _pREN,
    _dB,
    _sB,
    _bEA,
    _b,
    _cRA,
  ],
  [
    0,
    0,
    0,
    128 | 0,
    0,
    0,
    2,
    4,
    4,
    128 | 0,
    2,
    2,
    64 | 0,
    0,
    0,
    0,
    2,
    2,
    0,
    [() => BasicAuthCredentials, 0],
    [() => BuildSpec, 0],
    0,
    64 | 0,
    2,
    0,
    0,
    0,
    0,
    () => Backend,
    0,
  ]
);
export var CreateBranchRequest = struct(
  n0,
  _CBR,
  0,
  [_aI, _bN, _d, _s, _f, _eNn, _eAB, _eSP, _eV, _bAC, _eBA, _ePM, _t, _bS, _tt, _dN, _ePRP, _pREN, _bEA, _b, _cRA],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    2,
    2,
    2,
    128 | 0,
    [() => BasicAuthCredentials, 0],
    2,
    2,
    128 | 0,
    [() => BuildSpec, 0],
    0,
    0,
    2,
    0,
    0,
    () => Backend,
    0,
  ]
);
export var CreateBranchResult = struct(n0, _CBRr, 0, [_br], [[() => Branch, 0]]);
export var DeleteBranchRequest = struct(
  n0,
  _DBR,
  0,
  [_aI, _bN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBranchResult = struct(n0, _DBRe, 0, [_br], [[() => Branch, 0]]);
export var GetBranchRequest = struct(
  n0,
  _GBR,
  0,
  [_aI, _bN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBranchResult = struct(n0, _GBRe, 0, [_br], [[() => Branch, 0]]);
export var ListBranchesRequest = struct(
  n0,
  _LBR,
  0,
  [_aI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListBranchesResult = struct(n0, _LBRi, 0, [_bra, _nT], [[() => Branches, 0], 0]);
export var UpdateBranchRequest = struct(
  n0,
  _UBR,
  0,
  [_aI, _bN, _d, _f, _s, _eNn, _eAB, _eSP, _eV, _bAC, _eBA, _ePM, _bS, _tt, _dN, _ePRP, _pREN, _bEA, _b, _cRA],
  [
    [0, 1],
    [0, 1],
    0,
    0,
    0,
    2,
    2,
    2,
    128 | 0,
    [() => BasicAuthCredentials, 0],
    2,
    2,
    [() => BuildSpec, 0],
    0,
    0,
    2,
    0,
    0,
    () => Backend,
    0,
  ]
);
export var UpdateBranchResult = struct(n0, _UBRp, 0, [_br], [[() => Branch, 0]]);
export var AssociatedResources = 64 | 0;

export var Branches = list(n0, _Bra, 0, [() => Branch, 0]);
export var CustomDomains = 64 | 0;

export var EnvironmentVariables = 128 | 0;

export var CreateBranch = op(
  n0,
  _CB,
  {
    [_h]: ["POST", "/apps/{appId}/branches", 200],
  },
  () => CreateBranchRequest,
  () => CreateBranchResult
);
export var DeleteBranch = op(
  n0,
  _DB,
  {
    [_h]: ["DELETE", "/apps/{appId}/branches/{branchName}", 200],
  },
  () => DeleteBranchRequest,
  () => DeleteBranchResult
);
export var GetBranch = op(
  n0,
  _GB,
  {
    [_h]: ["GET", "/apps/{appId}/branches/{branchName}", 200],
  },
  () => GetBranchRequest,
  () => GetBranchResult
);
export var ListBranches = op(
  n0,
  _LB,
  {
    [_h]: ["GET", "/apps/{appId}/branches", 200],
  },
  () => ListBranchesRequest,
  () => ListBranchesResult
);
export var UpdateBranch = op(
  n0,
  _UB,
  {
    [_h]: ["POST", "/apps/{appId}/branches/{branchName}", 200],
  },
  () => UpdateBranchRequest,
  () => UpdateBranchResult
);
