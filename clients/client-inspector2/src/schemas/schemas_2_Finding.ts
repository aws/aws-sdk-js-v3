// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _AA,
  _aA,
  _aAI,
  _AAm,
  _aAm,
  _AAR,
  _AARm,
  _aC,
  _act,
  _ad,
  _AECA,
  _aECA,
  _AECAR,
  _aECI,
  _AECID,
  _aEI,
  _AEID,
  _aI,
  _aIc,
  _aIf,
  _aIff,
  _al,
  _aLF,
  _ALFD,
  _am,
  _AR,
  _aR,
  _ar,
  _arc,
  _arch,
  _ARg,
  _ARL,
  _arn,
  _arns,
  _aTg,
  _au,
  _b,
  _BGFD,
  _BGFDR,
  _BGFDRa,
  _bI,
  _bS,
  _cAo,
  _cAr,
  _cDi,
  _CF,
  _CFP,
  _CFR,
  _CFRr,
  _CFRre,
  _CFRRr,
  _CFRRre,
  _cIo,
  _co,
  _cR,
  _cr,
  _CRA,
  _cRA,
  _CRAR,
  _CRD,
  _cri,
  _cRPN,
  _cRPT,
  _cS,
  _CSA,
  _CSAL,
  _CSD,
  _CSLv,
  _CSv,
  _cSv,
  _cTo,
  _cv,
  _CVD,
  _cVD,
  _cVDN,
  _cVDT,
  _cVFP,
  _cw,
  _d,
  _de,
  _des,
  _DF,
  _DFL,
  _dI,
  _dN,
  _dT,
  _eA,
  _eAAFC,
  _eAC,
  _eC,
  _ED,
  _eD,
  _EDx,
  _eDx,
  _eI,
  _EIA,
  _eIA,
  _eIAc,
  _EIAR,
  _eIH,
  _eIII,
  _eIIUC,
  _eILIUA,
  _eIPA,
  _eIR,
  _eIRN,
  _eISI,
  _eIT,
  _eIVI,
  _EL,
  _eL,
  _eM,
  _en,
  _eO,
  _ep,
  _epo,
  _eR,
  _er,
  _eRA,
  _eS,
  _Ev,
  _ev,
  _F,
  _fAAFC,
  _fAC,
  _fAi,
  _fAil,
  _fAin,
  _fAix,
  _FC,
  _fCi,
  _FD,
  _fD,
  _FDE,
  _FDEL,
  _FDi,
  _Fi,
  _fi,
  _fie,
  _fin,
  _fIV,
  _FL,
  _FLi,
  _fN,
  _fNi,
  _fNu,
  _fOA,
  _fP,
  _fSi,
  _fT,
  _FTA,
  _fTA,
  _FTAR,
  _fTu,
  _GFRS,
  _GFRSR,
  _GFRSRe,
  _h,
  _ht,
  _iA,
  _id,
  _iH,
  _iI,
  _iIn,
  _iIns,
  _iIPA,
  _ILA,
  _iLA,
  _ILAR,
  _iS,
  _ISD,
  _iSD,
  _iSm,
  _iSn,
  _iT,
  _iTn,
  _iUC,
  _iVA,
  _iVAp,
  _k,
  _kN,
  _lA,
  _la,
  _lAa,
  _lAay,
  _LF,
  _LFA,
  _lFA,
  _LFAi,
  _LFAR,
  _LFARi,
  _LFARis,
  _lFERA,
  _LFi,
  _lFL,
  _lFLMA,
  _lFN,
  _LFR,
  _lFR,
  _LFRi,
  _LFRis,
  _LFRist,
  _lH,
  _lHa,
  _lI,
  _lIUA,
  _lKEA,
  _LLA,
  _lLA,
  _LLAR,
  _lMA,
  _lOA,
  _lT,
  _LVC,
  _me,
  _med,
  _MF,
  _MFL,
  _mR,
  _na,
  _NF,
  _nF,
  _NFL,
  _NP,
  _nP,
  _nPe,
  _NRD,
  _nRD,
  _nT,
  _oI,
  _oPR,
  _oS,
  _oSp,
  _p,
  _PA,
  _pA,
  _pa,
  _pAa,
  _PAR,
  _PF,
  _PFL,
  _pM,
  _pN,
  _pNa,
  _pNac,
  _pNr,
  _PR,
  _pR,
  _PRF,
  _PRFL,
  _pro,
  _pT,
  _pTr,
  _pTro,
  _PVD,
  _pVD,
  _R,
  _RAe,
  _rAe,
  _RAR,
  _RD,
  _Re,
  _re,
  _rea,
  _rec,
  _reg,
  _regi,
  _rel,
  _rem,
  _rep,
  _Res,
  _res,
  _resp,
  _rF,
  _rI,
  _rIe,
  _rIep,
  _rIu,
  _RL,
  _rN,
  _rSi,
  _rT,
  _rTes,
  _rU,
  _ru,
  _run,
  _rV,
  _s,
  _sB,
  _SC,
  _sC,
  _SCo,
  _sCo,
  _sco,
  _sDe,
  _se,
  _SF,
  _SFL,
  _sGI,
  _sI,
  _sIt,
  _sIu,
  _SL,
  _sLH,
  _sLLA,
  _sLt,
  _sO,
  _so,
  _sSco,
  _St,
  _ste,
  _sU,
  _sV,
  _TA,
  _ta,
  _tAi,
  _TAR,
  _te,
  _ti,
  _tit,
  _to,
  _tt,
  _ty,
  _U,
  _uA,
  _UF,
  _UFR,
  _UFRp,
  _uI,
  _v,
  _va,
  _vC,
  _vCA,
  _vI,
  _vIu,
  _vIul,
  _VP,
  _vP,
  _VPL,
  _vS,
  _vSe,
  _vUA,
  n0,
} from "./schemas_0";
import { CisaData, ExploitObserved } from "./schemas_4_";
import { Destination } from "./schemas_10_Findings";

/* eslint no-var: 0 */

export var AccountAggregation = struct(n0, _AA, 0, [_fT, _rT, _sO, _sB], [0, 0, 0, 0]);
export var AccountAggregationResponse = struct(n0, _AAR, 0, [_aI, _sC, _eAC, _fAC], [0, () => SeverityCounts, 1, 1]);
export var AmiAggregation = struct(n0, _AAm, 0, [_a, _sO, _sB], [() => StringFilterList, 0, 0]);
export var AmiAggregationResponse = struct(n0, _AARm, 0, [_am, _aI, _sC, _aIf], [0, 0, () => SeverityCounts, 1]);
export var AwsEc2InstanceDetails = struct(
  n0,
  _AEID,
  0,
  [_ty, _iI, _iVA, _iVAp, _kN, _iIPA, _vI, _sI, _lA, _p],
  [0, 0, 64 | 0, 64 | 0, 0, 0, 0, 0, 4, 0]
);
export var AwsEcrContainerAggregation = struct(
  n0,
  _AECA,
  0,
  [_rI, _iS, _re, _ar, _iT, _sO, _sB, _lIUA, _iUC],
  [
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    0,
    0,
    () => DateFilterList,
    () => NumberFilterList,
  ]
);
export var AwsEcrContainerAggregationResponse = struct(
  n0,
  _AECAR,
  0,
  [_rIe, _iSm, _rep, _arc, _iT, _aI, _sC, _lIUA, _iUC],
  [0, 0, 0, 0, 64 | 0, 0, () => SeverityCounts, 4, 1]
);
export var AwsEcrContainerImageDetails = struct(
  n0,
  _AECID,
  0,
  [_rN, _iT, _pA, _au, _arc, _iH, _reg, _p, _lIUA, _iUC],
  [0, 64 | 0, 4, 0, 0, 0, 0, 0, 4, 1]
);
export var AwsLambdaFunctionDetails = struct(
  n0,
  _ALFD,
  0,
  [_fN, _ru, _cS, _v, _eRA, _la, _vC, _pT, _ar, _lMA],
  [0, 0, 0, 0, 0, 64 | 0, () => LambdaVpcConfig, 0, 64 | 0, 4]
);
export var BatchGetFindingDetailsRequest = struct(n0, _BGFDR, 0, [_fAi], [64 | 0]);
export var BatchGetFindingDetailsResponse = struct(
  n0,
  _BGFDRa,
  0,
  [_fD, _er],
  [() => FindingDetails, () => FindingDetailsErrorList]
);
export var CodeFilePath = struct(n0, _CFP, 0, [_fNi, _fP, _sLt, _eL], [0, 0, 1, 1]);
export var CodeRepositoryAggregation = struct(
  n0,
  _CRA,
  0,
  [_pN, _pTr, _sO, _sB, _rI],
  [() => StringFilterList, () => StringFilterList, 0, 0, () => StringFilterList]
);
export var CodeRepositoryAggregationResponse = struct(
  n0,
  _CRAR,
  0,
  [_pN, _pTro, _sC, _eAAFC, _fAAFC, _aI, _rIe],
  [0, 0, () => SeverityCounts, 1, 1, 0, 0]
);
export var CodeRepositoryDetails = struct(n0, _CRD, 0, [_pNr, _iA, _pTro], [0, 0, 0]);
export var CodeVulnerabilityDetails = struct(
  n0,
  _CVD,
  0,
  [_fP, _dT, _rU, _rIu, _sLLA, _dI, _dN, _cw],
  [() => CodeFilePath, 64 | 0, 64 | 0, 0, 0, 0, 0, 64 | 0]
);
export var CreateFilterRequest = struct(
  n0,
  _CFR,
  0,
  [_act, _de, _fCi, _na, _ta, _rea],
  [0, 0, () => FilterCriteria, 0, 128 | 0, 0]
);
export var CreateFilterResponse = struct(n0, _CFRr, 0, [_arn], [0]);
export var CreateFindingsReportRequest = struct(
  n0,
  _CFRRr,
  0,
  [_fCi, _rF, _sDe],
  [() => FilterCriteria, 0, () => Destination]
);
export var CreateFindingsReportResponse = struct(n0, _CFRRre, 0, [_rIep], [0]);
export var CvssScore = struct(n0, _CSv, 0, [_bS, _sV, _v, _so], [1, 0, 0, 0]);
export var CvssScoreAdjustment = struct(n0, _CSA, 0, [_me, _rea], [0, 0]);
export var CvssScoreDetails = struct(
  n0,
  _CSD,
  0,
  [_sSco, _cSv, _v, _sco, _sV, _ad],
  [0, 0, 0, 1, 0, () => CvssScoreAdjustmentList]
);
export var DateFilter = struct(n0, _DF, 0, [_sIt, _eI], [4, 4]);
export var Ec2InstanceAggregation = struct(
  n0,
  _EIA,
  0,
  [_a, _oS, _iIn, _iTn, _sO, _sB],
  [() => StringFilterList, () => StringFilterList, () => StringFilterList, () => MapFilterList, 0, 0]
);
export var Ec2InstanceAggregationResponse = struct(
  n0,
  _EIAR,
  0,
  [_iIns, _am, _oSp, _iTn, _aI, _sC, _nF],
  [0, 0, 0, 128 | 0, 0, () => SeverityCounts, 1]
);
export var EpssDetails = struct(n0, _ED, 0, [_sco], [1]);
export var Evidence = struct(n0, _Ev, 0, [_eR, _eD, _se], [0, 0, 0]);
export var ExploitabilityDetails = struct(n0, _EDx, 0, [_lKEA], [4]);
export var Filter = struct(
  n0,
  _F,
  0,
  [_arn, _oI, _na, _cr, _act, _cAr, _uA, _de, _rea, _ta],
  [0, 0, 0, () => FilterCriteria, 0, 4, 4, 0, 0, 128 | 0]
);
export var FilterCriteria = struct(
  n0,
  _FC,
  0,
  [
    _fAin,
    _aAI,
    _fT,
    _se,
    _fOA,
    _lOA,
    _uA,
    _fSi,
    _ti,
    _iSn,
    _rT,
    _rIe,
    _rTes,
    _eIII,
    _eIVI,
    _eISI,
    _eIPA,
    _eIA,
    _eIR,
    _eIRN,
    _eIT,
    _eIH,
    _eILIUA,
    _eIIUC,
    _pR,
    _nP,
    _cIo,
    _cTo,
    _vIu,
    _vS,
    _vSe,
    _vP,
    _rV,
    _fAix,
    _lFN,
    _lFL,
    _lFR,
    _lFLMA,
    _lFERA,
    _eA,
    _cVDN,
    _cVDT,
    _cVFP,
    _eS,
    _cRPN,
    _cRPT,
  ],
  [
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => MapFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => NumberFilterList,
    () => PortRangeFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => PackageFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => DateFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => StringFilterList,
    () => NumberFilterList,
    () => StringFilterList,
    () => StringFilterList,
  ]
);
export var Finding = struct(
  n0,
  _Fi,
  0,
  [
    _fAin,
    _aAI,
    _ty,
    _de,
    _ti,
    _rem,
    _se,
    _fOA,
    _lOA,
    _uA,
    _s,
    _res,
    _iSn,
    _iSD,
    _nRD,
    _pVD,
    _fAix,
    _eA,
    _eDx,
    _cVD,
    _ep,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    () => Remediation,
    0,
    4,
    4,
    4,
    0,
    () => ResourceList,
    1,
    () => InspectorScoreDetails,
    () => NetworkReachabilityDetails,
    () => PackageVulnerabilityDetails,
    0,
    0,
    () => ExploitabilityDetails,
    () => CodeVulnerabilityDetails,
    () => EpssDetails,
  ]
);
export var FindingDetail = struct(
  n0,
  _FD,
  0,
  [_fAin, _cDi, _rSi, _ev, _tt, _to, _eO, _rU, _cw, _eS],
  [0, () => CisaData, 1, () => EvidenceList, 64 | 0, 64 | 0, () => ExploitObserved, 64 | 0, 64 | 0, 1]
);
export var FindingDetailsError = struct(n0, _FDE, 0, [_fAin, _eC, _eM], [0, 0, 0]);
export var FindingTypeAggregation = struct(n0, _FTA, 0, [_fT, _rT, _sO, _sB], [0, 0, 0, 0]);
export var FindingTypeAggregationResponse = struct(
  n0,
  _FTAR,
  0,
  [_aI, _sC, _eAC, _fAC],
  [0, () => SeverityCounts, 1, 1]
);
export var GetFindingsReportStatusRequest = struct(n0, _GFRSR, 0, [_rIep], [0]);
export var GetFindingsReportStatusResponse = struct(
  n0,
  _GFRSRe,
  0,
  [_rIep, _s, _eC, _eM, _des, _fCi],
  [0, 0, 0, 0, () => Destination, () => FilterCriteria]
);
export var ImageLayerAggregation = struct(
  n0,
  _ILA,
  0,
  [_re, _rI, _lH, _sO, _sB],
  [() => StringFilterList, () => StringFilterList, () => StringFilterList, 0, 0]
);
export var ImageLayerAggregationResponse = struct(
  n0,
  _ILAR,
  0,
  [_rep, _rIe, _lHa, _aI, _sC],
  [0, 0, 0, 0, () => SeverityCounts]
);
export var InspectorScoreDetails = struct(n0, _ISD, 0, [_aC], [() => CvssScoreDetails]);
export var LambdaFunctionAggregation = struct(
  n0,
  _LFA,
  0,
  [_rI, _fNu, _run, _fTu, _sO, _sB],
  [() => StringFilterList, () => StringFilterList, () => StringFilterList, () => MapFilterList, 0, 0]
);
export var LambdaFunctionAggregationResponse = struct(
  n0,
  _LFAR,
  0,
  [_rIe, _fN, _ru, _lT, _aI, _sC, _lMA],
  [0, 0, 0, 128 | 0, 0, () => SeverityCounts, 4]
);
export var LambdaLayerAggregation = struct(
  n0,
  _LLA,
  0,
  [_fNu, _rI, _lAa, _sO, _sB],
  [() => StringFilterList, () => StringFilterList, () => StringFilterList, 0, 0]
);
export var LambdaLayerAggregationResponse = struct(
  n0,
  _LLAR,
  0,
  [_fN, _rIe, _lAay, _aI, _sC],
  [0, 0, 0, 0, () => SeverityCounts]
);
export var LambdaVpcConfig = struct(n0, _LVC, 0, [_sIu, _sGI, _vI], [64 | 0, 64 | 0, 0]);
export var ListFiltersRequest = struct(n0, _LFR, 0, [_arns, _act, _nT, _mR], [64 | 0, 0, 0, 1]);
export var ListFiltersResponse = struct(n0, _LFRi, 0, [_fi, _nT], [() => FilterList, 0]);
export var ListFindingAggregationsRequest = struct(
  n0,
  _LFARi,
  0,
  [_aTg, _nT, _mR, _aIc, _aR],
  [0, 0, 1, () => StringFilterList, () => AggregationRequest]
);
export var ListFindingAggregationsResponse = struct(
  n0,
  _LFARis,
  0,
  [_aTg, _resp, _nT],
  [0, () => AggregationResponseList, 0]
);
export var ListFindingsRequest = struct(
  n0,
  _LFRis,
  0,
  [_mR, _nT, _fCi, _sCo],
  [1, 0, () => FilterCriteria, () => SortCriteria]
);
export var ListFindingsResponse = struct(n0, _LFRist, 0, [_nT, _fin], [0, () => FindingList]);
export var MapFilter = struct(n0, _MF, 0, [_co, _k, _va], [0, 0, 0]);
export var NetworkPath = struct(n0, _NP, 0, [_ste], [() => StepList]);
export var NetworkReachabilityDetails = struct(
  n0,
  _NRD,
  0,
  [_oPR, _pro, _nPe],
  [() => PortRange, 0, () => NetworkPath]
);
export var NumberFilter = struct(n0, _NF, 0, [_uI, _lI], [1, 1]);
export var PackageAggregation = struct(n0, _PA, 0, [_pNa, _sO, _sB], [() => StringFilterList, 0, 0]);
export var PackageAggregationResponse = struct(n0, _PAR, 0, [_pNac, _aI, _sC], [0, 0, () => SeverityCounts]);
export var PackageFilter = struct(
  n0,
  _PF,
  0,
  [_na, _v, _epo, _rel, _arc, _sLH, _sLLA, _fP],
  [
    () => StringFilter,
    () => StringFilter,
    () => NumberFilter,
    () => StringFilter,
    () => StringFilter,
    () => StringFilter,
    () => StringFilter,
    () => StringFilter,
  ]
);
export var PackageVulnerabilityDetails = struct(
  n0,
  _PVD,
  0,
  [_vIu, _vP, _so, _cv, _rV, _sU, _vSe, _vCA, _vUA, _rU],
  [0, () => VulnerablePackageList, 0, () => CvssScoreList, 64 | 0, 0, 0, 4, 4, 64 | 0]
);
export var PortRange = struct(n0, _PR, 0, [_b, _en], [1, 1]);
export var PortRangeFilter = struct(n0, _PRF, 0, [_bI, _eI], [1, 1]);
export var Recommendation = struct(n0, _R, 0, [_te, _U], [0, 0]);
export var Remediation = struct(n0, _Re, 0, [_rec], [() => Recommendation]);
export var RepositoryAggregation = struct(n0, _RAe, 0, [_re, _sO, _sB], [() => StringFilterList, 0, 0]);
export var RepositoryAggregationResponse = struct(
  n0,
  _RAR,
  0,
  [_rep, _aI, _sC, _aIff],
  [0, 0, () => SeverityCounts, 1]
);
export var Resource = struct(
  n0,
  _Res,
  0,
  [_ty, _id, _pa, _regi, _ta, _d],
  [0, 0, 0, 0, 128 | 0, () => ResourceDetails]
);
export var ResourceDetails = struct(
  n0,
  _RD,
  0,
  [_aEI, _aECI, _aLF, _cR],
  [
    () => AwsEc2InstanceDetails,
    () => AwsEcrContainerImageDetails,
    () => AwsLambdaFunctionDetails,
    () => CodeRepositoryDetails,
  ]
);
export var SeverityCounts = struct(n0, _SC, 0, [_al, _med, _h, _cri], [1, 1, 1, 1]);
export var SortCriteria = struct(n0, _SCo, 0, [_fie, _sO], [0, 0]);
export var Step = struct(n0, _St, 0, [_cIo, _cTo, _cAo], [0, 0, 0]);
export var StringFilter = struct(n0, _SF, 0, [_co, _va], [0, 0]);
export var TitleAggregation = struct(
  n0,
  _TA,
  0,
  [_tit, _vIul, _rT, _sO, _sB, _fT],
  [() => StringFilterList, () => StringFilterList, 0, 0, 0, 0]
);
export var TitleAggregationResponse = struct(n0, _TAR, 0, [_ti, _vIu, _aI, _sC], [0, 0, 0, () => SeverityCounts]);
export var UpdateFilterRequest = struct(
  n0,
  _UFR,
  0,
  [_act, _de, _fCi, _na, _fAil, _rea],
  [0, 0, () => FilterCriteria, 0, 0, 0]
);
export var UpdateFilterResponse = struct(n0, _UFRp, 0, [_arn], [0]);
export var VulnerablePackage = struct(
  n0,
  _VP,
  0,
  [_na, _v, _sLH, _epo, _rel, _arch, _pM, _fP, _fIV, _rem, _sLLA],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var AggregationResponseList = list(n0, _ARL, 0, () => AggregationResponse);
export var ArchitectureList = 64 | 0;

export var CvssScoreAdjustmentList = list(n0, _CSAL, 0, () => CvssScoreAdjustment);
export var CvssScoreList = list(n0, _CSLv, 0, () => CvssScore);
export var CweList = 64 | 0;

export var DateFilterList = list(n0, _DFL, 0, () => DateFilter);
export var DetectorTagList = 64 | 0;

export var EvidenceList = list(n0, _EL, 0, () => Evidence);
export var FilterArnList = 64 | 0;

export var FilterList = list(n0, _FL, 0, () => Filter);
export var FindingArnList = 64 | 0;

export var FindingDetails = list(n0, _FDi, 0, () => FindingDetail);
export var FindingDetailsErrorList = list(n0, _FDEL, 0, () => FindingDetailsError);
export var FindingList = list(n0, _FLi, 0, () => Finding);
export var ImageTagList = 64 | 0;

export var IpV4AddressList = 64 | 0;

export var IpV6AddressList = 64 | 0;

export var LayerList = 64 | 0;

export var MapFilterList = list(n0, _MFL, 0, () => MapFilter);
export var NonEmptyStringList = 64 | 0;

export var NumberFilterList = list(n0, _NFL, 0, () => NumberFilter);
export var PackageFilterList = list(n0, _PFL, 0, () => PackageFilter);
export var PortRangeFilterList = list(n0, _PRFL, 0, () => PortRangeFilter);
export var ReferenceUrls = 64 | 0;

export var ResourceList = list(n0, _RL, 0, () => Resource);
export var SecurityGroupIdList = 64 | 0;

export var StepList = list(n0, _SL, 0, () => Step);
export var StringFilterList = list(n0, _SFL, 0, () => StringFilter);
export var StringList = 64 | 0;

export var SubnetIdList = 64 | 0;

export var Tools = 64 | 0;

export var VulnerabilityIdList = 64 | 0;

export var VulnerablePackageList = list(n0, _VPL, 0, () => VulnerablePackage);
export var AggregationRequest = uni(
  n0,
  _AR,
  0,
  [_aA, _aAm, _aECA, _eIAc, _fTA, _iLA, _pAa, _rAe, _tAi, _lLA, _lFA, _cRA],
  [
    () => AccountAggregation,
    () => AmiAggregation,
    () => AwsEcrContainerAggregation,
    () => Ec2InstanceAggregation,
    () => FindingTypeAggregation,
    () => ImageLayerAggregation,
    () => PackageAggregation,
    () => RepositoryAggregation,
    () => TitleAggregation,
    () => LambdaLayerAggregation,
    () => LambdaFunctionAggregation,
    () => CodeRepositoryAggregation,
  ]
);
export var AggregationResponse = uni(
  n0,
  _ARg,
  0,
  [_aA, _aAm, _aECA, _eIAc, _fTA, _iLA, _pAa, _rAe, _tAi, _lLA, _lFA, _cRA],
  [
    () => AccountAggregationResponse,
    () => AmiAggregationResponse,
    () => AwsEcrContainerAggregationResponse,
    () => Ec2InstanceAggregationResponse,
    () => FindingTypeAggregationResponse,
    () => ImageLayerAggregationResponse,
    () => PackageAggregationResponse,
    () => RepositoryAggregationResponse,
    () => TitleAggregationResponse,
    () => LambdaLayerAggregationResponse,
    () => LambdaFunctionAggregationResponse,
    () => CodeRepositoryAggregationResponse,
  ]
);
export var BatchGetFindingDetails = op(
  n0,
  _BGFD,
  {
    [_ht]: ["POST", "/findings/details/batch/get", 200],
  },
  () => BatchGetFindingDetailsRequest,
  () => BatchGetFindingDetailsResponse
);
export var CreateFilter = op(
  n0,
  _CF,
  {
    [_ht]: ["POST", "/filters/create", 200],
  },
  () => CreateFilterRequest,
  () => CreateFilterResponse
);
export var CreateFindingsReport = op(
  n0,
  _CFRre,
  {
    [_ht]: ["POST", "/reporting/create", 200],
  },
  () => CreateFindingsReportRequest,
  () => CreateFindingsReportResponse
);
export var GetFindingsReportStatus = op(
  n0,
  _GFRS,
  {
    [_ht]: ["POST", "/reporting/status/get", 200],
  },
  () => GetFindingsReportStatusRequest,
  () => GetFindingsReportStatusResponse
);
export var ListFilters = op(
  n0,
  _LF,
  {
    [_ht]: ["POST", "/filters/list", 200],
  },
  () => ListFiltersRequest,
  () => ListFiltersResponse
);
export var ListFindingAggregations = op(
  n0,
  _LFAi,
  {
    [_ht]: ["POST", "/findings/aggregation/list", 200],
  },
  () => ListFindingAggregationsRequest,
  () => ListFindingAggregationsResponse
);
export var ListFindings = op(
  n0,
  _LFi,
  {
    [_ht]: ["POST", "/findings/list", 200],
  },
  () => ListFindingsRequest,
  () => ListFindingsResponse
);
export var UpdateFilter = op(
  n0,
  _UF,
  {
    [_ht]: ["POST", "/filters/update", 200],
  },
  () => UpdateFilterRequest,
  () => UpdateFilterResponse
);
