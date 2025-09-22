// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aIDc,
  _aN,
  _aPIA,
  _bM,
  _cDT,
  _cPI,
  _cT,
  _cWLGN,
  _de,
  _DJe,
  _DJRes,
  _DJResc,
  _DJRF,
  _DLCTe,
  _DLCTRes,
  _DLCTResc,
  _eDTn,
  _eIDx,
  _eLTID,
  _eMAT,
  _eP,
  _eS,
  _f,
  _fD,
  _fR,
  _GLC,
  _GLCR,
  _ht,
  _i,
  _iB,
  _io,
  _J,
  _j,
  _jID,
  _jIDo,
  _JLob,
  _JPLALS,
  _L,
  _l,
  _LC,
  _LCT,
  _LCTa,
  _lCTID,
  _lCTIDa,
  _lD,
  _lEIID,
  _lS,
  _LTDC,
  _lVC,
  _mATMID,
  _mR,
  _mSFC,
  _n,
  _nT,
  _oB,
  _p,
  _PLA,
  _pLA,
  _PLALSL,
  _pLALSL,
  _PLAS,
  _pLAS,
  _PS,
  _PSa,
  _pSa,
  _sADD,
  _SC,
  _SCR,
  _SCRt,
  _SD,
  _sD,
  _sDN,
  _SDP,
  _SDs,
  _sDs,
  _sDTs,
  _sLB,
  _sOKP,
  _sSID,
  _sSIDo,
  _ST,
  _sta,
  _STR,
  _STRt,
  _sVC,
  _sVMS,
  _t,
  _tD,
  _th,
  _tITRSM,
  _tS,
  _TTI,
  _TTIR,
  _TTIRe,
  _ty,
  _ULC,
  _ULCR,
  _vT,
  n0,
  SsmDocumentExternalParameters,
  SsmDocumentParameters,
  TagsMap,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeJobsRequest = struct(
  n0,
  _DJRes,
  0,
  [_f, _mR, _nT, _aIDc],
  [() => DescribeJobsRequestFilters, 1, 0, 0]
);
export var DescribeJobsRequestFilters = struct(n0, _DJRF, 0, [_jIDo, _fD, _tD], [64 | 0, 0, 0]);
export var DescribeJobsResponse = struct(n0, _DJResc, 0, [_i, _nT], [[() => JobsList, 0], 0]);
export var DescribeLaunchConfigurationTemplatesRequest = struct(n0, _DLCTRes, 0, [_lCTIDa, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeLaunchConfigurationTemplatesResponse = struct(
  n0,
  _DLCTResc,
  0,
  [_i, _nT],
  [[() => LaunchConfigurationTemplates, 0], 0]
);
export var GetLaunchConfigurationRequest = struct(n0, _GLCR, 0, [_sSIDo, _aIDc], [0, 0]);
export var Job = struct(
  n0,
  _J,
  0,
  [_jID, _a, _ty, _iB, _cDT, _eDTn, _sta, _pSa, _t],
  [0, 0, 0, 0, 0, 0, 0, () => ParticipatingServers, [() => TagsMap, 0]]
);
export var JobPostLaunchActionsLaunchStatus = struct(
  n0,
  _JPLALS,
  0,
  [_sD, _sDTs, _eIDx, _eS, _fR],
  [() => SsmDocument, 0, 0, 0, 0]
);
export var LaunchConfiguration = struct(
  n0,
  _LC,
  0,
  [_sSIDo, _n, _eLTID, _lD, _tITRSM, _cPI, _cT, _l, _bM, _pLA, _eMAT, _mATMID],
  [0, 0, 0, 0, 0, 2, 2, () => Licensing, 0, () => PostLaunchActions, 2, 0]
);
export var LaunchConfigurationTemplate = struct(
  n0,
  _LCT,
  0,
  [_lCTID, _a, _pLA, _eMAT, _mATMID, _t, _eLTID, _lD, _tITRSM, _cPI, _aPIA, _cT, _l, _bM, _sVMS, _sVC, _lVC],
  [
    0,
    0,
    () => PostLaunchActions,
    2,
    0,
    [() => TagsMap, 0],
    0,
    0,
    0,
    2,
    2,
    2,
    () => Licensing,
    0,
    1,
    () => LaunchTemplateDiskConf,
    () => LaunchTemplateDiskConf,
  ]
);
export var LaunchTemplateDiskConf = struct(n0, _LTDC, 0, [_vT, _io, _th], [0, 1, 1]);
export var Licensing = struct(n0, _L, 0, [_oB], [2]);
export var ParticipatingServer = struct(
  n0,
  _PS,
  0,
  [_sSIDo, _lS, _lEIID, _pLAS],
  [0, 0, 0, () => PostLaunchActionsStatus]
);
export var PostLaunchActions = struct(n0, _PLA, 0, [_de, _sLB, _sOKP, _cWLGN, _sDs], [0, 0, 0, 0, () => SsmDocuments]);
export var PostLaunchActionsStatus = struct(
  n0,
  _PLAS,
  0,
  [_sADD, _pLALSL],
  [0, () => PostLaunchActionsLaunchStatusList]
);
export var SsmDocument = struct(
  n0,
  _SD,
  0,
  [_aN, _sDN, _tS, _mSFC, _p, _eP],
  [0, 0, 1, 2, () => SsmDocumentParameters, () => SsmDocumentExternalParameters]
);
export var StartCutoverRequest = struct(n0, _SCR, 0, [_sSID, _t, _aIDc], [64 | 0, [() => TagsMap, 0], 0]);
export var StartCutoverResponse = struct(n0, _SCRt, 0, [_j], [[() => Job, 0]]);
export var StartTestRequest = struct(n0, _STR, 0, [_sSID, _t, _aIDc], [64 | 0, [() => TagsMap, 0], 0]);
export var StartTestResponse = struct(n0, _STRt, 0, [_j], [[() => Job, 0]]);
export var TerminateTargetInstancesRequest = struct(n0, _TTIR, 0, [_sSID, _t, _aIDc], [64 | 0, [() => TagsMap, 0], 0]);
export var TerminateTargetInstancesResponse = struct(n0, _TTIRe, 0, [_j], [[() => Job, 0]]);
export var UpdateLaunchConfigurationRequest = struct(
  n0,
  _ULCR,
  0,
  [_sSIDo, _n, _lD, _tITRSM, _cPI, _cT, _l, _bM, _pLA, _eMAT, _mATMID, _aIDc],
  [0, 0, 0, 0, 2, 2, () => Licensing, 0, () => PostLaunchActions, 2, 0, 0]
);
export var DescribeJobsRequestFiltersJobIDs = 64 | 0;

export var JobsList = list(n0, _JLob, 0, [() => Job, 0]);
export var LaunchConfigurationTemplateIDs = 64 | 0;

export var LaunchConfigurationTemplates = list(n0, _LCTa, 0, [() => LaunchConfigurationTemplate, 0]);
export var ParticipatingServers = list(n0, _PSa, 0, () => ParticipatingServer);
export var PostLaunchActionsLaunchStatusList = list(n0, _PLALSL, 0, () => JobPostLaunchActionsLaunchStatus);
export var SsmDocuments = list(n0, _SDs, 0, () => SsmDocument);
export var StartCutoverRequestSourceServerIDs = 64 | 0;

export var StartTestRequestSourceServerIDs = 64 | 0;

export var TerminateTargetInstancesRequestSourceServerIDs = 64 | 0;

export var DescribeJobs = op(
  n0,
  _DJe,
  {
    [_ht]: ["POST", "/DescribeJobs", 200],
  },
  () => DescribeJobsRequest,
  () => DescribeJobsResponse
);
export var DescribeLaunchConfigurationTemplates = op(
  n0,
  _DLCTe,
  {
    [_ht]: ["POST", "/DescribeLaunchConfigurationTemplates", 200],
  },
  () => DescribeLaunchConfigurationTemplatesRequest,
  () => DescribeLaunchConfigurationTemplatesResponse
);
export var GetLaunchConfiguration = op(
  n0,
  _GLC,
  {
    [_ht]: ["POST", "/GetLaunchConfiguration", 200],
  },
  () => GetLaunchConfigurationRequest,
  () => LaunchConfiguration
);
export var StartCutover = op(
  n0,
  _SC,
  {
    [_ht]: ["POST", "/StartCutover", 202],
  },
  () => StartCutoverRequest,
  () => StartCutoverResponse
);
export var StartTest = op(
  n0,
  _ST,
  {
    [_ht]: ["POST", "/StartTest", 202],
  },
  () => StartTestRequest,
  () => StartTestResponse
);
export var TerminateTargetInstances = op(
  n0,
  _TTI,
  {
    [_ht]: ["POST", "/TerminateTargetInstances", 202],
  },
  () => TerminateTargetInstancesRequest,
  () => TerminateTargetInstancesResponse
);
export var UpdateLaunchConfiguration = op(
  n0,
  _ULC,
  {
    [_ht]: ["POST", "/UpdateLaunchConfiguration", 200],
  },
  () => UpdateLaunchConfigurationRequest,
  () => LaunchConfiguration
);
