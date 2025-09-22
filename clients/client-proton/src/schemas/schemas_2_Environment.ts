// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ar,
  _AS,
  _aS,
  _b,
  _cA,
  _cAo,
  _CED,
  _CEDI,
  _CEDO,
  _CEI,
  _CEO,
  _CEr,
  _CR,
  _cRA,
  _cRAo,
  _CRI,
  _CRO,
  _d,
  _DE,
  _DEI,
  _DEO,
  _dPPR,
  _DR,
  _DRI,
  _DRO,
  _dS,
  _dSM,
  _dT,
  _E,
  _eACI,
  _eAI,
  _eK,
  _eN,
  _en,
  _GAS,
  _GASI,
  _GASO,
  _GE,
  _GEI,
  _GEO,
  _GR,
  _GRI,
  _GRO,
  _lADI,
  _lDAA,
  _lDSA,
  _LR,
  _LRI,
  _LRO,
  _lSDI,
  _mR,
  _n,
  _nT,
  _pCRA,
  _pPR,
  _pR,
  _pr,
  _pro,
  _pSRA,
  _pSRAr,
  _R,
  _r,
  _RB,
  _RBI,
  _re,
  _RS,
  _RSL,
  _sp,
  _t,
  _tMV,
  _tMVe,
  _tN,
  _UAS,
  _UASI,
  _UASO,
  _UE,
  _UEI,
  _UEO,
  Description,
  n0,
  SpecContents,
  StatusMessage,
} from "./schemas_0";
import { TagList } from "./schemas_20_Create";

/* eslint no-var: 0 */

export var AccountSettings = struct(n0, _AS, 0, [_pSRA, _pPR, _pCRA], [0, () => RepositoryBranch, 0]);
export var CancelEnvironmentDeploymentInput = struct(n0, _CEDI, 0, [_eN], [0]);
export var CancelEnvironmentDeploymentOutput = struct(n0, _CEDO, 0, [_en], [[() => Environment, 0]]);
export var CreateEnvironmentInput = struct(
  n0,
  _CEI,
  0,
  [_n, _tN, _tMV, _tMVe, _d, _sp, _pSRAr, _eACI, _t, _pR, _cRA, _cRAo],
  [0, 0, 0, 0, [() => Description, 0], [() => SpecContents, 0], 0, 0, () => TagList, () => RepositoryBranchInput, 0, 0]
);
export var CreateEnvironmentOutput = struct(n0, _CEO, 0, [_en], [[() => Environment, 0]]);
export var CreateRepositoryInput = struct(n0, _CRI, 0, [_pro, _n, _cAo, _eK, _t], [0, 0, 0, 0, () => TagList]);
export var CreateRepositoryOutput = struct(n0, _CRO, 0, [_r], [() => Repository]);
export var DeleteEnvironmentInput = struct(n0, _DEI, 0, [_n], [0]);
export var DeleteEnvironmentOutput = struct(n0, _DEO, 0, [_en], [[() => Environment, 0]]);
export var DeleteRepositoryInput = struct(n0, _DRI, 0, [_pro, _n], [0, 0]);
export var DeleteRepositoryOutput = struct(n0, _DRO, 0, [_r], [() => Repository]);
export var Environment = struct(
  n0,
  _E,
  0,
  [
    _n,
    _d,
    _cA,
    _lDAA,
    _lDSA,
    _ar,
    _tN,
    _tMV,
    _tMVe,
    _dS,
    _dSM,
    _pSRAr,
    _eACI,
    _eAI,
    _sp,
    _pr,
    _pR,
    _cRA,
    _cRAo,
    _lADI,
    _lSDI,
  ],
  [
    0,
    [() => Description, 0],
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    [() => StatusMessage, 0],
    0,
    0,
    0,
    [() => SpecContents, 0],
    0,
    () => RepositoryBranch,
    0,
    0,
    0,
    0,
  ]
);
export var GetAccountSettingsInput = struct(n0, _GASI, 0, [], []);
export var GetAccountSettingsOutput = struct(n0, _GASO, 0, [_aS], [() => AccountSettings]);
export var GetEnvironmentInput = struct(n0, _GEI, 0, [_n], [0]);
export var GetEnvironmentOutput = struct(n0, _GEO, 0, [_en], [[() => Environment, 0]]);
export var GetRepositoryInput = struct(n0, _GRI, 0, [_pro, _n], [0, 0]);
export var GetRepositoryOutput = struct(n0, _GRO, 0, [_r], [() => Repository]);
export var ListRepositoriesInput = struct(n0, _LRI, 0, [_nT, _mR], [0, 1]);
export var ListRepositoriesOutput = struct(n0, _LRO, 0, [_nT, _re], [0, () => RepositorySummaryList]);
export var Repository = struct(n0, _R, 0, [_ar, _pro, _n, _cAo, _eK], [0, 0, 0, 0, 0]);
export var RepositoryBranch = struct(n0, _RB, 0, [_ar, _pro, _n, _b], [0, 0, 0, 0]);
export var RepositoryBranchInput = struct(n0, _RBI, 0, [_pro, _n, _b], [0, 0, 0]);
export var RepositorySummary = struct(n0, _RS, 0, [_ar, _pro, _n, _cAo], [0, 0, 0, 0]);
export var UpdateAccountSettingsInput = struct(
  n0,
  _UASI,
  0,
  [_pSRA, _pPR, _dPPR, _pCRA],
  [0, () => RepositoryBranchInput, 2, 0]
);
export var UpdateAccountSettingsOutput = struct(n0, _UASO, 0, [_aS], [() => AccountSettings]);
export var UpdateEnvironmentInput = struct(
  n0,
  _UEI,
  0,
  [_n, _d, _sp, _tMV, _tMVe, _pSRAr, _dT, _eACI, _pR, _cRA, _cRAo],
  [0, [() => Description, 0], [() => SpecContents, 0], 0, 0, 0, 0, 0, () => RepositoryBranchInput, 0, 0]
);
export var UpdateEnvironmentOutput = struct(n0, _UEO, 0, [_en], [[() => Environment, 0]]);
export var RepositorySummaryList = list(n0, _RSL, 0, () => RepositorySummary);
export var CancelEnvironmentDeployment = op(
  n0,
  _CED,
  0,
  () => CancelEnvironmentDeploymentInput,
  () => CancelEnvironmentDeploymentOutput
);
export var CreateEnvironment = op(
  n0,
  _CEr,
  2,
  () => CreateEnvironmentInput,
  () => CreateEnvironmentOutput
);
export var CreateRepository = op(
  n0,
  _CR,
  2,
  () => CreateRepositoryInput,
  () => CreateRepositoryOutput
);
export var DeleteEnvironment = op(
  n0,
  _DE,
  2,
  () => DeleteEnvironmentInput,
  () => DeleteEnvironmentOutput
);
export var DeleteRepository = op(
  n0,
  _DR,
  2,
  () => DeleteRepositoryInput,
  () => DeleteRepositoryOutput
);
export var GetAccountSettings = op(
  n0,
  _GAS,
  0,
  () => GetAccountSettingsInput,
  () => GetAccountSettingsOutput
);
export var GetEnvironment = op(
  n0,
  _GE,
  0,
  () => GetEnvironmentInput,
  () => GetEnvironmentOutput
);
export var GetRepository = op(
  n0,
  _GR,
  0,
  () => GetRepositoryInput,
  () => GetRepositoryOutput
);
export var ListRepositories = op(
  n0,
  _LR,
  0,
  () => ListRepositoriesInput,
  () => ListRepositoriesOutput
);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  0,
  () => UpdateAccountSettingsInput,
  () => UpdateAccountSettingsOutput
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  0,
  () => UpdateEnvironmentInput,
  () => UpdateEnvironmentOutput
);
