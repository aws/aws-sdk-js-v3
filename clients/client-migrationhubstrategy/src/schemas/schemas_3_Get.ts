// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import { ServiceLinkedRoleLockClientException as __ServiceLinkedRoleLockClientException } from "../models/index";
import {
  _aCC,
  _ACD,
  _ACDp,
  _aCIp,
  _ACSp,
  _ACSS,
  _aCSS,
  _aN,
  _ANU,
  _aPRSO,
  _ARR,
  _ARRL,
  _aRRL,
  _aRS,
  _aRSM,
  _aRSO,
  _AS,
  _aS,
  _aSI,
  _aSs,
  _ASSn,
  _ASU,
  _aT,
  _aTn,
  _AUE,
  _aUE,
  _aUEC,
  _b,
  _bAN,
  _c,
  _cA,
  _co,
  _cT,
  _DCD,
  _dCD,
  _dCS,
  _e,
  _fST,
  _fV,
  _gIF,
  _GPS,
  _GPSR,
  _GPSRe,
  _hE,
  _hQ,
  _ht,
  _i,
  _iA,
  _IFTI,
  _iN,
  _iNn,
  _iS,
  _iSB,
  _iSK,
  _LAC,
  _LACR,
  _LACRi,
  _LACS,
  _lACS,
  _LACSS,
  _lACSS,
  _lACSSi,
  _LASS,
  _lASS,
  _lAT,
  _LIFT,
  _LIFTI,
  _LIFTR,
  _LIFTRi,
  _LS,
  _LSR,
  _LSRi,
  _LSS,
  _lSS,
  _LSSi,
  _LSSS,
  _lSSS,
  _lSSSi,
  _m,
  _mA,
  _mR,
  _mSAE,
  _n,
  _NI,
  _NIL,
  _nIL,
  _nM,
  _nORF,
  _nORS,
  _nT,
  _oD,
  _oI,
  _OSI,
  _oV,
  _pN,
  _R,
  _rAS,
  _re,
  _RL,
  _rL,
  _rS,
  _rSM,
  _rST,
  _rSu,
  _rTAN,
  _rTAS,
  _sB,
  _sC,
  _sCAN,
  _sCODAS,
  _SCR,
  _sCR,
  _SCRo,
  _SD,
  _SDe,
  _SE,
  _sE,
  _se,
  _sEC,
  _SI,
  _sIe,
  _sIy,
  _sk,
  _SLRLCE,
  _sM,
  _sN,
  _SO,
  _so,
  _SOT,
  _sRSB,
  _sRSK,
  _SSe,
  _SSS,
  _SSt,
  _sT,
  _st,
  _sTe,
  _str,
  _t,
  _tI,
  _vCT,
  _ve,
  n0,
} from "./schemas_0";
import { RecommendationSet } from "./schemas_6_Get";
import { GroupIds } from "./schemas_7_Start";

/* eslint no-var: 0 */

export var AntipatternReportResult = struct(
  n0,
  _ARR,
  0,
  [_aN, _aPRSO, _aRS, _aRSM],
  [() => AnalyzerNameUnion, () => S3Object, 0, 0]
);
export var AntipatternSeveritySummary = struct(n0, _ASSn, 0, [_se, _co], [0, 1]);
export var ApplicationComponentDetail = struct(
  n0,
  _ACD,
  0,
  [
    _i,
    _n,
    _rS,
    _aS,
    _sM,
    _lASS,
    _dCD,
    _sCR,
    _aT,
    _rST,
    _iS,
    _aRSO,
    _aRS,
    _aRSM,
    _oV,
    _oD,
    _lAT,
    _aSI,
    _mSAE,
    _rSu,
    _rSM,
    _aUE,
    _rL,
  ],
  [
    0,
    0,
    () => RecommendationSet,
    0,
    0,
    () => ListAntipatternSeveritySummary,
    () => DatabaseConfigDetail,
    () => SourceCodeRepositories,
    0,
    0,
    0,
    () => S3Object,
    0,
    0,
    0,
    0,
    4,
    0,
    2,
    0,
    0,
    () => AppUnitError,
    () => ResultList,
  ]
);
export var ApplicationComponentStatusSummary = struct(n0, _ACSS, 0, [_sCODAS, _co], [0, 1]);
export var ApplicationComponentSummary = struct(n0, _ACSp, 0, [_aT, _co], [0, 1]);
export var AppUnitError = struct(n0, _AUE, 0, [_aUEC], [0]);
export var AssessmentSummary = struct(
  n0,
  _AS,
  0,
  [_lSSS, _lACSS, _lASS, _lACS, _lSS, _aRSO, _aRS, _aRSM, _lAT, _lACSSi, _lSSSi],
  [
    () => ListStrategySummary,
    () => ListStrategySummary,
    () => ListAntipatternSeveritySummary,
    () => ListApplicationComponentSummary,
    () => ListServerSummary,
    () => S3Object,
    0,
    0,
    4,
    () => ListApplicationComponentStatusSummary,
    () => ListServerStatusSummary,
  ]
);
export var DatabaseConfigDetail = struct(n0, _DCD, 0, [_sN], [0]);
export var GetPortfolioSummaryRequest = struct(n0, _GPSR, 0, [], []);
export var GetPortfolioSummaryResponse = struct(n0, _GPSRe, 0, [_aSs], [() => AssessmentSummary]);
export var ImportFileTaskInformation = struct(
  n0,
  _IFTI,
  0,
  [_i, _st, _sT, _iSB, _iSK, _sRSB, _sRSK, _cT, _nORS, _nORF, _iN],
  [0, 0, 4, 0, 0, 0, 0, 4, 1, 1, 0]
);
export var ListApplicationComponentsRequest = struct(
  n0,
  _LACR,
  0,
  [_aCC, _fV, _so, _gIF, _nT, _mR],
  [0, 0, 0, () => GroupIds, 0, 1]
);
export var ListApplicationComponentsResponse = struct(
  n0,
  _LACRi,
  0,
  [_aCIp, _nT],
  [() => ApplicationComponentDetails, 0]
);
export var ListImportFileTaskRequest = struct(
  n0,
  _LIFTR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListImportFileTaskResponse = struct(n0, _LIFTRi, 0, [_tI, _nT], [() => ListImportFileTaskInformation, 0]);
export var ListServersRequest = struct(n0, _LSR, 0, [_sC, _fV, _so, _gIF, _nT, _mR], [0, 0, 0, () => GroupIds, 0, 1]);
export var ListServersResponse = struct(n0, _LSRi, 0, [_sIe, _nT], [() => ServerDetails, 0]);
export var NetworkInfo = struct(n0, _NI, 0, [_iNn, _iA, _mA, _nM], [0, 0, 0, 0]);
export var OSInfo = struct(n0, _OSI, 0, [_t, _ve], [0, 0]);
export var Result = struct(
  n0,
  _R,
  0,
  [_aTn, _aS, _sM, _aRRL],
  [0, () => AnalysisStatusUnion, 0, () => AntipatternReportResultList]
);
export var S3Object = struct(n0, _SO, 0, [_sB, _sk], [0, 0]);
export var ServerDetail = struct(
  n0,
  _SD,
  0,
  [_i, _n, _rS, _dCS, _sM, _lASS, _sIy, _aCSS, _aRSO, _aRS, _aRSM, _sTe, _lAT, _sE],
  [
    0,
    0,
    () => RecommendationSet,
    0,
    0,
    () => ListAntipatternSeveritySummary,
    () => SystemInfo,
    () => ListStrategySummary,
    () => S3Object,
    0,
    0,
    0,
    4,
    () => ServerError,
  ]
);
export var ServerError = struct(n0, _SE, 0, [_sEC], [0]);
export var ServerStatusSummary = struct(n0, _SSS, 0, [_rTAS, _co], [0, 1]);
export var ServerSummary = struct(n0, _SSe, 0, [_SOT, _co], [0, 1]);
export var ServiceLinkedRoleLockClientException = error(
  n0,
  _SLRLCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ServiceLinkedRoleLockClientException
);
export var SourceCodeRepository = struct(n0, _SCR, 0, [_re, _b, _vCT, _pN], [0, 0, 0, 0]);
export var StrategySummary = struct(n0, _SSt, 0, [_str, _co], [0, 1]);
export var SystemInfo = struct(n0, _SI, 0, [_oI, _fST, _nIL, _cA], [() => OSInfo, 0, () => NetworkInfoList, 0]);
export var AntipatternReportResultList = list(n0, _ARRL, 0, () => AntipatternReportResult);
export var ApplicationComponentDetails = list(n0, _ACDp, 0, () => ApplicationComponentDetail);
export var ListAntipatternSeveritySummary = list(n0, _LASS, 0, () => AntipatternSeveritySummary);
export var ListApplicationComponentStatusSummary = list(n0, _LACSS, 0, () => ApplicationComponentStatusSummary);
export var ListApplicationComponentSummary = list(n0, _LACS, 0, () => ApplicationComponentSummary);
export var ListImportFileTaskInformation = list(n0, _LIFTI, 0, () => ImportFileTaskInformation);
export var ListServerStatusSummary = list(n0, _LSSS, 0, () => ServerStatusSummary);
export var ListServerSummary = list(n0, _LSS, 0, () => ServerSummary);
export var ListStrategySummary = list(n0, _LSSi, 0, () => StrategySummary);
export var NetworkInfoList = list(n0, _NIL, 0, () => NetworkInfo);
export var ResultList = list(n0, _RL, 0, () => Result);
export var ServerDetails = list(n0, _SDe, 0, () => ServerDetail);
export var SourceCodeRepositories = list(n0, _SCRo, 0, () => SourceCodeRepository);
export var AnalysisStatusUnion = uni(n0, _ASU, 0, [_rAS, _sCODAS], [0, 0]);
export var AnalyzerNameUnion = uni(n0, _ANU, 0, [_bAN, _rTAN, _sCAN], [0, 0, 0]);
export var GetPortfolioSummary = op(
  n0,
  _GPS,
  {
    [_ht]: ["GET", "/get-portfolio-summary", 200],
  },
  () => GetPortfolioSummaryRequest,
  () => GetPortfolioSummaryResponse
);
export var ListApplicationComponents = op(
  n0,
  _LAC,
  {
    [_ht]: ["POST", "/list-applicationcomponents", 200],
  },
  () => ListApplicationComponentsRequest,
  () => ListApplicationComponentsResponse
);
export var ListImportFileTask = op(
  n0,
  _LIFT,
  {
    [_ht]: ["GET", "/list-import-file-task", 200],
  },
  () => ListImportFileTaskRequest,
  () => ListImportFileTaskResponse
);
export var ListServers = op(
  n0,
  _LS,
  {
    [_ht]: ["POST", "/list-servers", 200],
  },
  () => ListServersRequest,
  () => ListServersResponse
);
