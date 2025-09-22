// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIm,
  _C,
  _cBG,
  _CDFL,
  _CDFo,
  _CFC,
  _cISCo,
  _CLo,
  _CMF,
  _CMFL,
  _CNFLo,
  _CNFo,
  _co,
  _cou,
  _CR,
  _cR,
  _CRM,
  _CRo,
  _cRo,
  _CRODS,
  _cRPN,
  _cRPT,
  _cRPTV,
  _CSFL,
  _CSFo,
  _dAAI,
  _ec,
  _eCc,
  _eCco,
  _ECIM,
  _ECS,
  _ECSc,
  _eI,
  _eIc,
  _eIIUC,
  _eILIUA,
  _eIT,
  _eITc,
  _EM,
  _eRc,
  _ERDS,
  _ERM,
  _eRN,
  _ESMS,
  _fCi,
  _fE,
  _fN,
  _fTu,
  _gB,
  _GC,
  _GCR,
  _GCRe,
  _gK,
  _GM,
  _GMR,
  _GMRe,
  _ht,
  _iA,
  _iPA,
  _iUC,
  _k,
  _la,
  _LC,
  _LCR,
  _LCRi,
  _LCSi,
  _LCSRis,
  _LCSRist,
  _lF,
  _LFM,
  _lFN,
  _lFR,
  _lFT,
  _lI,
  _lIUA,
  _LM,
  _LMR,
  _LMRi,
  _lSA,
  _lSAa,
  _lSCI,
  _M,
  _mem,
  _memb,
  _ML,
  _mR,
  _na,
  _nT,
  _oA,
  _oDS,
  _p,
  _PCISC,
  _PCISCL,
  _PCSSC,
  _pDRD,
  _pDRM,
  _pNr,
  _PPSC,
  _PPSCL,
  _pSCe,
  _pTro,
  _pTV,
  _rD,
  _rDS,
  _rea,
  _rIe,
  _rM,
  _rSC,
  _rSel,
  _RSM,
  _rT,
  _ru,
  _s,
  _sCc,
  _sCta,
  _sEu,
  _sFc,
  _sIt,
  _sM,
  _sMS,
  _sMSc,
  _SS,
  _sS,
  _sSC,
  _sSR,
  _sT,
  _ta,
  _tCo,
  _uA,
  _uI,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CodeRepositoryMetadata = struct(
  n0,
  _CRM,
  0,
  [_pNr, _iA, _pTro, _pTV, _lSCI, _sCc, _oDS],
  [0, 0, 0, 0, 0, () => ProjectCodeSecurityScanConfiguration, () => CodeRepositoryOnDemandScan]
);
export var CodeRepositoryOnDemandScan = struct(n0, _CRODS, 0, [_lSCI, _lSA, _sS], [0, 4, () => ScanStatus]);
export var Counts = struct(n0, _C, 0, [_cou, _gK], [1, 0]);
export var CoverageDateFilter = struct(n0, _CDFo, 0, [_sIt, _eI], [4, 4]);
export var CoverageFilterCriteria = struct(
  n0,
  _CFC,
  0,
  [
    _sSC,
    _sSR,
    _aI,
    _rIe,
    _rT,
    _sT,
    _eRN,
    _eIT,
    _eITc,
    _lFN,
    _lFT,
    _lFR,
    _lSAa,
    _sM,
    _iPA,
    _eILIUA,
    _eIIUC,
    _cRPN,
    _cRPT,
    _cRPTV,
    _lSCI,
  ],
  [
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageMapFilterList,
    () => CoverageStringFilterList,
    () => CoverageMapFilterList,
    () => CoverageStringFilterList,
    () => CoverageDateFilterList,
    () => CoverageStringFilterList,
    () => CoverageDateFilterList,
    () => CoverageDateFilterList,
    () => CoverageNumberFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
    () => CoverageStringFilterList,
  ]
);
export var CoverageMapFilter = struct(n0, _CMF, 0, [_co, _k, _va], [0, 0, 0]);
export var CoverageNumberFilter = struct(n0, _CNFo, 0, [_uI, _lI], [1, 1]);
export var CoverageStringFilter = struct(n0, _CSFo, 0, [_co, _va], [0, 0]);
export var CoveredResource = struct(
  n0,
  _CR,
  0,
  [_rT, _rIe, _aI, _sT, _sS, _rM, _lSAa, _sM],
  [0, 0, 0, 0, () => ScanStatus, () => ResourceScanMetadata, 4, 0]
);
export var Ec2ConfigurationState = struct(n0, _ECS, 0, [_sMS], [() => Ec2ScanModeState]);
export var Ec2Metadata = struct(n0, _EM, 0, [_ta, _aIm, _p], [128 | 0, 0, 0]);
export var Ec2ScanModeState = struct(n0, _ESMS, 0, [_sM, _sMSc], [0, 0]);
export var EcrConfigurationState = struct(n0, _ECSc, 0, [_rDS], [() => EcrRescanDurationState]);
export var EcrContainerImageMetadata = struct(n0, _ECIM, 0, [_ta, _iPA, _lIUA, _iUC], [64 | 0, 4, 4, 1]);
export var EcrRepositoryMetadata = struct(n0, _ERM, 0, [_na, _sFc], [0, 0]);
export var EcrRescanDurationState = struct(n0, _ERDS, 0, [_rD, _s, _uA, _pDRD, _pDRM], [0, 0, 4, 0, 0]);
export var GetConfigurationRequest = struct(n0, _GCR, 0, [], []);
export var GetConfigurationResponse = struct(
  n0,
  _GCRe,
  0,
  [_eCc, _eCco],
  [() => EcrConfigurationState, () => Ec2ConfigurationState]
);
export var GetMemberRequest = struct(n0, _GMR, 0, [_aI], [0]);
export var GetMemberResponse = struct(n0, _GMRe, 0, [_mem], [() => Member]);
export var LambdaFunctionMetadata = struct(n0, _LFM, 0, [_fTu, _la, _fN, _ru], [128 | 0, 64 | 0, 0, 0]);
export var ListCoverageRequest = struct(n0, _LCR, 0, [_mR, _nT, _fCi], [1, 0, () => CoverageFilterCriteria]);
export var ListCoverageResponse = struct(n0, _LCRi, 0, [_nT, _cRo], [0, () => CoveredResources]);
export var ListCoverageStatisticsRequest = struct(
  n0,
  _LCSRis,
  0,
  [_fCi, _gB, _nT],
  [() => CoverageFilterCriteria, 0, 0]
);
export var ListCoverageStatisticsResponse = struct(n0, _LCSRist, 0, [_cBG, _tCo, _nT], [() => CountsList, 1, 0]);
export var ListMembersRequest = struct(n0, _LMR, 0, [_oA, _mR, _nT], [2, 1, 0]);
export var ListMembersResponse = struct(n0, _LMRi, 0, [_memb, _nT], [() => MemberList, 0]);
export var Member = struct(n0, _M, 0, [_aI, _rSel, _dAAI, _uA], [0, 0, 0, 4]);
export var ProjectCodeSecurityScanConfiguration = struct(
  n0,
  _PCSSC,
  0,
  [_pSCe, _cISCo],
  [() => ProjectPeriodicScanConfigurationList, () => ProjectContinuousIntegrationScanConfigurationList]
);
export var ProjectContinuousIntegrationScanConfiguration = struct(n0, _PCISC, 0, [_sEu, _rSC], [0, 64 | 0]);
export var ProjectPeriodicScanConfiguration = struct(n0, _PPSC, 0, [_fE, _rSC], [0, 64 | 0]);
export var ResourceScanMetadata = struct(
  n0,
  _RSM,
  0,
  [_eRc, _eIc, _ec, _lF, _cR],
  [
    () => EcrRepositoryMetadata,
    () => EcrContainerImageMetadata,
    () => Ec2Metadata,
    () => LambdaFunctionMetadata,
    () => CodeRepositoryMetadata,
  ]
);
export var ScanStatus = struct(n0, _SS, 0, [_sCta, _rea], [0, 0]);
export var CountsList = list(n0, _CLo, 0, () => Counts);
export var CoverageDateFilterList = list(n0, _CDFL, 0, () => CoverageDateFilter);
export var CoverageMapFilterList = list(n0, _CMFL, 0, () => CoverageMapFilter);
export var CoverageNumberFilterList = list(n0, _CNFLo, 0, () => CoverageNumberFilter);
export var CoverageStringFilterList = list(n0, _CSFL, 0, () => CoverageStringFilter);
export var CoveredResources = list(n0, _CRo, 0, () => CoveredResource);
export var LambdaLayerList = 64 | 0;

export var MemberList = list(n0, _ML, 0, () => Member);
export var ProjectContinuousIntegrationScanConfigurationList = list(
  n0,
  _PCISCL,
  0,
  () => ProjectContinuousIntegrationScanConfiguration
);
export var ProjectPeriodicScanConfigurationList = list(n0, _PPSCL, 0, () => ProjectPeriodicScanConfiguration);
export var TagList = 64 | 0;

export var GetConfiguration = op(
  n0,
  _GC,
  {
    [_ht]: ["POST", "/configuration/get", 200],
  },
  () => GetConfigurationRequest,
  () => GetConfigurationResponse
);
export var GetMember = op(
  n0,
  _GM,
  {
    [_ht]: ["POST", "/members/get", 200],
  },
  () => GetMemberRequest,
  () => GetMemberResponse
);
export var ListCoverage = op(
  n0,
  _LC,
  {
    [_ht]: ["POST", "/coverage/list", 200],
  },
  () => ListCoverageRequest,
  () => ListCoverageResponse
);
export var ListCoverageStatistics = op(
  n0,
  _LCSi,
  {
    [_ht]: ["POST", "/coverage/statistics/list", 200],
  },
  () => ListCoverageStatisticsRequest,
  () => ListCoverageStatisticsResponse
);
export var ListMembers = op(
  n0,
  _LM,
  {
    [_ht]: ["POST", "/members/list", 200],
  },
  () => ListMembersRequest,
  () => ListMembersResponse
);
