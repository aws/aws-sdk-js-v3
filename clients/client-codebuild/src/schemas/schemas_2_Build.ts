// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aI,
  _ar,
  _ARC,
  _aRC,
  _aRL,
  _aRN,
  _B,
  _b,
  _BA,
  _BAL,
  _bBA,
  _bC,
  _BGB,
  _BGBI,
  _BGBO,
  _bN,
  _bNF,
  _bOA,
  _BP,
  _BPu,
  _bS,
  _Bu,
  _bui,
  _ca,
  _cN,
  _con,
  _cP,
  _dIS,
  _DS,
  _dS,
  _eD,
  _EEV,
  _eEV,
  _EEVx,
  _eK,
  _en,
  _eT,
  _fSL,
  _i,
  _id,
  _in,
  _iTd,
  _l,
  _lo,
  _md,
  _mo,
  _na,
  _nAR,
  _nI,
  _oAN,
  _pAR,
  _PCr,
  _ph,
  _pN,
  _pS,
  _pT,
  _qTIM,
  _rA,
  _RB,
  _RBI,
  _RBO,
  _rSV,
  _sA,
  _SBIt,
  _SBOt,
  _SBt,
  _sE,
  _sh,
  _so,
  _sR,
  _sS,
  _sSV,
  _sT,
  _sTe,
  _sV,
  _t,
  _tIM,
  _va,
  _vC,
  n0,
  ProjectEnvironment,
  ProjectFileSystemLocations,
  ProjectSecondarySourceVersions,
  ProjectSource,
  ProjectSources,
  VpcConfig,
} from "./schemas_0";
import { NetworkInterface, PhaseContexts } from "./schemas_28_Build";
import { LogsLocation } from "./schemas_29_Build";

/* eslint no-var: 0 */

export var AutoRetryConfig = struct(n0, _ARC, 0, [_aRL, _aRN, _nAR, _pAR], [1, 1, 0, 0]);
export var BatchGetBuildsInput = struct(n0, _BGBI, 0, [_i], [64 | 0]);
export var BatchGetBuildsOutput = struct(n0, _BGBO, 0, [_b, _bNF], [() => Builds, 64 | 0]);
export var Build = struct(
  n0,
  _B,
  0,
  [
    _id,
    _a,
    _bN,
    _sT,
    _eT,
    _cP,
    _bS,
    _sV,
    _rSV,
    _pN,
    _ph,
    _so,
    _sS,
    _sSV,
    _ar,
    _sA,
    _ca,
    _en,
    _sR,
    _l,
    _tIM,
    _qTIM,
    _bC,
    _in,
    _vC,
    _nI,
    _eK,
    _eEV,
    _rA,
    _fSL,
    _dS,
    _bBA,
    _aRC,
  ],
  [
    0,
    0,
    1,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    () => BuildPhases,
    () => ProjectSource,
    () => ProjectSources,
    () => ProjectSecondarySourceVersions,
    () => BuildArtifacts,
    () => BuildArtifactsList,
    () => ProjectCache,
    () => ProjectEnvironment,
    0,
    () => LogsLocation,
    1,
    1,
    2,
    0,
    () => VpcConfig,
    () => NetworkInterface,
    0,
    () => ExportedEnvironmentVariables,
    64 | 0,
    () => ProjectFileSystemLocations,
    () => DebugSession,
    0,
    () => AutoRetryConfig,
  ]
);
export var BuildArtifacts = struct(n0, _BA, 0, [_lo, _sh, _md, _oAN, _eD, _aI, _bOA], [0, 0, 0, 2, 2, 0, 0]);
export var BuildPhase = struct(n0, _BP, 0, [_pT, _pS, _sT, _eT, _dIS, _con], [0, 0, 4, 4, 1, () => PhaseContexts]);
export var DebugSession = struct(n0, _DS, 0, [_sE, _sTe], [2, 0]);
export var ExportedEnvironmentVariable = struct(n0, _EEV, 0, [_na, _va], [0, 0]);
export var ProjectCache = struct(n0, _PCr, 0, [_t, _lo, _mo, _cN], [0, 0, 64 | 0, 0]);
export var RetryBuildInput = struct(n0, _RBI, 0, [_id, _iTd], [0, 0]);
export var RetryBuildOutput = struct(n0, _RBO, 0, [_bui], [() => Build]);
export var StopBuildInput = struct(n0, _SBIt, 0, [_id], [0]);
export var StopBuildOutput = struct(n0, _SBOt, 0, [_bui], [() => Build]);
export var BuildArtifactsList = list(n0, _BAL, 0, () => BuildArtifacts);
export var BuildPhases = list(n0, _BPu, 0, () => BuildPhase);
export var BuildReportArns = 64 | 0;

export var Builds = list(n0, _Bu, 0, () => Build);
export var ExportedEnvironmentVariables = list(n0, _EEVx, 0, () => ExportedEnvironmentVariable);
export var ProjectCacheModes = 64 | 0;

export var BatchGetBuilds = op(
  n0,
  _BGB,
  0,
  () => BatchGetBuildsInput,
  () => BatchGetBuildsOutput
);
export var RetryBuild = op(
  n0,
  _RB,
  0,
  () => RetryBuildInput,
  () => RetryBuildOutput
);
export var StopBuild = op(
  n0,
  _SBt,
  0,
  () => StopBuildInput,
  () => StopBuildOutput
);
