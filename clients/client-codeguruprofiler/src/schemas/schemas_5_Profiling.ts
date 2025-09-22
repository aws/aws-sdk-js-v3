// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _Ac,
  _AI,
  _AIn,
  _aMC,
  _aMS,
  _An,
  _an,
  _AOC,
  _aOC,
  _APT,
  _ar,
  _BGFMD,
  _BGFMDR,
  _BGFMDRa,
  _cA,
  _cE,
  _CE_,
  _cP,
  _CPG,
  _CPGR,
  _CPGRr,
  _CT,
  _cT,
  _cTA,
  _cTo,
  _d,
  _DPGe,
  _DPGRes,
  _DPGResc,
  _dRO,
  _eT,
  _eTn,
  _fA,
  _FM,
  _fM,
  _FMD,
  _fMD,
  _FMDr,
  _FMr,
  _fMr,
  _fN,
  _FRS,
  _fRS,
  _FRSi,
  _GFRAS,
  _GFRASR,
  _GFRASRe,
  _GPe,
  _GPRet,
  _GPRetr,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _hH,
  _hQ,
  _i,
  _iD,
  _id,
  _iT,
  _l,
  _lAOA,
  _lAP,
  _lAPRA,
  _LFR,
  _LFRR,
  _LFRRi,
  _LOT,
  _LPG,
  _LPGR,
  _LPGRi,
  _LPT,
  _LPTR,
  _LPTRi,
  _M,
  _m,
  _Ma,
  _mD,
  _Me,
  _mR,
  _n,
  _nT,
  _oB,
  _P,
  _p,
  _pa,
  _pE,
  _pET,
  _pG,
  _PGD,
  _PGDr,
  _pGN,
  _pGNr,
  _pGr,
  _pr,
  _PS,
  _pS,
  _pST,
  _PT,
  _pT,
  _PTr,
  _R,
  _r,
  _Re,
  _re,
  _rec,
  _rS,
  _rSe,
  _s,
  _sT,
  _t,
  _tBV,
  _TF,
  _tF,
  _tFI,
  _tM,
  _tNOF,
  _tP,
  _tR,
  _TS,
  _tS,
  _ty,
  _uA,
  _uET,
  _UETM,
  _UF,
  _uF,
  _UPG,
  _UPGR,
  _UPGRp,
  _v,
  _va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AgentOrchestrationConfig = struct(n0, _AOC, 0, [_pE], [2]);
export var AggregatedProfileTime = struct(n0, _APT, 0, [_s, _p], [5, 0]);
export var Anomaly = struct(n0, _A, 0, [_m, _r, _i], [() => Metric, 0, () => AnomalyInstances]);
export var AnomalyInstance = struct(n0, _AI, 0, [_id, _sT, _eT, _uF], [0, 5, 5, () => UserFeedback]);
export var BatchGetFrameMetricDataRequest = struct(
  n0,
  _BGFMDR,
  0,
  [_pGN, _sT, _eT, _p, _tR, _fM],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _sT,
      },
    ],
    [
      5,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _tR,
      },
    ],
    () => FrameMetrics,
  ]
);
export var BatchGetFrameMetricDataResponse = struct(
  n0,
  _BGFMDRa,
  0,
  [_sT, _eT, _re, _eTn, _uET, _fMD],
  [5, 5, 0, () => ListOfTimestamps, () => UnprocessedEndTimeMap, () => FrameMetricData]
);
export var CreateProfilingGroupRequest = struct(
  n0,
  _CPGR,
  0,
  [_pGN, _cP, _cT, _aOC, _t],
  [
    0,
    0,
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
    () => AgentOrchestrationConfig,
    128 | 0,
  ]
);
export var CreateProfilingGroupResponse = struct(n0, _CPGRr, 0, [_pG], [[() => ProfilingGroupDescription, 16]]);
export var DescribeProfilingGroupRequest = struct(n0, _DPGRes, 0, [_pGN], [[0, 1]]);
export var DescribeProfilingGroupResponse = struct(n0, _DPGResc, 0, [_pG], [[() => ProfilingGroupDescription, 16]]);
export var FindingsReportSummary = struct(n0, _FRS, 0, [_id, _pGN, _pST, _pET, _tNOF], [0, 0, 5, 5, 1]);
export var FrameMetric = struct(n0, _FM, 0, [_fN, _ty, _tS], [0, 0, 64 | 0]);
export var FrameMetricDatum = struct(n0, _FMD, 0, [_fMr, _v], [() => FrameMetric, 64 | 1]);
export var GetFindingsReportAccountSummaryRequest = struct(
  n0,
  _GFRASR,
  0,
  [_nT, _mR, _dRO],
  [
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
    [
      2,
      {
        [_hQ]: _dRO,
      },
    ],
  ]
);
export var GetFindingsReportAccountSummaryResponse = struct(
  n0,
  _GFRASRe,
  0,
  [_rS, _nT],
  [() => FindingsReportSummaries, 0]
);
export var GetProfileRequest = struct(
  n0,
  _GPRet,
  0,
  [_pGN, _sT, _p, _eT, _mD, _a],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _sT,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      5,
      {
        [_hQ]: _eT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mD,
      },
    ],
    [
      0,
      {
        [_hH]: _Ac,
      },
    ],
  ]
);
export var GetProfileResponse = struct(
  n0,
  _GPRetr,
  0,
  [_pr, _cTo, _cE],
  [
    [21, 16],
    [
      0,
      {
        [_hH]: _CT,
      },
    ],
    [
      0,
      {
        [_hH]: _CE_,
      },
    ],
  ]
);
export var GetRecommendationsRequest = struct(
  n0,
  _GRR,
  0,
  [_pGN, _sT, _eT, _l],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _sT,
      },
    ],
    [
      5,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
  ]
);
export var GetRecommendationsResponse = struct(
  n0,
  _GRRe,
  0,
  [_pGN, _pST, _pET, _rec, _an],
  [0, 5, 5, () => Recommendations, () => Anomalies]
);
export var ListFindingsReportsRequest = struct(
  n0,
  _LFRR,
  0,
  [_pGN, _sT, _eT, _nT, _mR, _dRO],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _sT,
      },
    ],
    [
      5,
      {
        [_hQ]: _eT,
      },
    ],
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
    [
      2,
      {
        [_hQ]: _dRO,
      },
    ],
  ]
);
export var ListFindingsReportsResponse = struct(n0, _LFRRi, 0, [_fRS, _nT], [() => FindingsReportSummaries, 0]);
export var ListProfileTimesRequest = struct(
  n0,
  _LPTR,
  0,
  [_pGN, _sT, _eT, _p, _oB, _mR, _nT],
  [
    [0, 1],
    [
      5,
      {
        [_hQ]: _sT,
      },
    ],
    [
      5,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _oB,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListProfileTimesResponse = struct(n0, _LPTRi, 0, [_pT, _nT], [() => ProfileTimes, 0]);
export var ListProfilingGroupsRequest = struct(
  n0,
  _LPGR,
  0,
  [_nT, _mR, _iD],
  [
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
    [
      2,
      {
        [_hQ]: _iD,
      },
    ],
  ]
);
export var ListProfilingGroupsResponse = struct(
  n0,
  _LPGRi,
  0,
  [_pGNr, _pGr, _nT],
  [64 | 0, () => ProfilingGroupDescriptions, 0]
);
export var Match = struct(n0, _M, 0, [_tFI, _fA, _tBV], [1, 0, 1]);
export var Metric = struct(n0, _Me, 0, [_fN, _ty, _tS], [0, 0, 64 | 0]);
export var Pattern = struct(
  n0,
  _P,
  0,
  [_id, _n, _d, _rSe, _tF, _tP, _cTA],
  [0, 0, 0, 0, list(n0, _TF, 0, 64 | 0), 1, 64 | 0]
);
export var ProfileTime = struct(n0, _PT, 0, [_s], [5]);
export var ProfilingGroupDescription = struct(
  n0,
  _PGD,
  0,
  [_n, _aOC, _ar, _cA, _uA, _pS, _cP, _t],
  [0, () => AgentOrchestrationConfig, 0, 5, 5, () => ProfilingStatus, 0, 128 | 0]
);
export var ProfilingStatus = struct(n0, _PS, 0, [_lAPRA, _lAP, _lAOA], [5, () => AggregatedProfileTime, 5]);
export var Recommendation = struct(
  n0,
  _R,
  0,
  [_aMC, _aMS, _pa, _tM, _sT, _eT],
  [1, 1, () => Pattern, () => Matches, 5, 5]
);
export var TimestampStructure = struct(n0, _TS, 0, [_va], [5]);
export var UpdateProfilingGroupRequest = struct(n0, _UPGR, 0, [_pGN, _aOC], [[0, 1], () => AgentOrchestrationConfig]);
export var UpdateProfilingGroupResponse = struct(n0, _UPGRp, 0, [_pG], [[() => ProfilingGroupDescription, 16]]);
export var UserFeedback = struct(n0, _UF, 0, [_ty], [0]);
export var Anomalies = list(n0, _An, 0, () => Anomaly);
export var AnomalyInstances = list(n0, _AIn, 0, () => AnomalyInstance);
export var FindingsReportSummaries = list(n0, _FRSi, 0, () => FindingsReportSummary);
export var FrameMetricData = list(n0, _FMDr, 0, () => FrameMetricDatum);
export var FrameMetrics = list(n0, _FMr, 0, () => FrameMetric);
export var FrameMetricValues = 64 | 1;

export var ListOfTimestamps = list(n0, _LOT, 0, () => TimestampStructure);
export var Matches = list(n0, _Ma, 0, () => Match);
export var ProfileTimes = list(n0, _PTr, 0, () => ProfileTime);
export var ProfilingGroupDescriptions = list(n0, _PGDr, 0, () => ProfilingGroupDescription);
export var ProfilingGroupNames = 64 | 0;

export var Recommendations = list(n0, _Re, 0, () => Recommendation);
export var Strings = 64 | 0;

export var TargetFrame = 64 | 0;

export var TargetFrames = list(n0, _TF, 0, 64 | 0);
export var ThreadStates = 64 | 0;

export var UnprocessedEndTimeMap = map(n0, _UETM, 0, 0, () => ListOfTimestamps);
export var BatchGetFrameMetricData = op(
  n0,
  _BGFMD,
  {
    [_h]: ["POST", "/profilingGroups/{profilingGroupName}/frames/-/metrics", 200],
  },
  () => BatchGetFrameMetricDataRequest,
  () => BatchGetFrameMetricDataResponse
);
export var CreateProfilingGroup = op(
  n0,
  _CPG,
  {
    [_h]: ["POST", "/profilingGroups", 201],
  },
  () => CreateProfilingGroupRequest,
  () => CreateProfilingGroupResponse
);
export var DescribeProfilingGroup = op(
  n0,
  _DPGe,
  {
    [_h]: ["GET", "/profilingGroups/{profilingGroupName}", 200],
  },
  () => DescribeProfilingGroupRequest,
  () => DescribeProfilingGroupResponse
);
export var GetFindingsReportAccountSummary = op(
  n0,
  _GFRAS,
  {
    [_h]: ["GET", "/internal/findingsReports", 200],
  },
  () => GetFindingsReportAccountSummaryRequest,
  () => GetFindingsReportAccountSummaryResponse
);
export var GetProfile = op(
  n0,
  _GPe,
  {
    [_h]: ["GET", "/profilingGroups/{profilingGroupName}/profile", 200],
  },
  () => GetProfileRequest,
  () => GetProfileResponse
);
export var GetRecommendations = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/internal/profilingGroups/{profilingGroupName}/recommendations", 200],
  },
  () => GetRecommendationsRequest,
  () => GetRecommendationsResponse
);
export var ListFindingsReports = op(
  n0,
  _LFR,
  {
    [_h]: ["GET", "/internal/profilingGroups/{profilingGroupName}/findingsReports", 200],
  },
  () => ListFindingsReportsRequest,
  () => ListFindingsReportsResponse
);
export var ListProfileTimes = op(
  n0,
  _LPT,
  {
    [_h]: ["GET", "/profilingGroups/{profilingGroupName}/profileTimes", 200],
  },
  () => ListProfileTimesRequest,
  () => ListProfileTimesResponse
);
export var ListProfilingGroups = op(
  n0,
  _LPG,
  {
    [_h]: ["GET", "/profilingGroups", 200],
  },
  () => ListProfilingGroupsRequest,
  () => ListProfilingGroupsResponse
);
export var UpdateProfilingGroup = op(
  n0,
  _UPG,
  {
    [_h]: ["PUT", "/profilingGroups/{profilingGroupName}", 200],
  },
  () => UpdateProfilingGroupRequest,
  () => UpdateProfilingGroupResponse
);
