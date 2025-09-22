// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  SessionStreamingException as __SessionStreamingException,
  SessionTimeoutException as __SessionTimeoutException,
} from "../models/index";
import {
  _AD,
  _aD,
  _aDA,
  _ADn,
  _aDS,
  _aOTL,
  _aVT,
  _c,
  _CLAD,
  _CLADR,
  _CLADRr,
  _cTS,
  _dA,
  _di,
  _dis,
  _dN,
  _dV,
  _e,
  _eF,
  _eIv,
  _eM,
  _eN,
  _ena,
  _end,
  _eSF,
  _eSFD,
  _eTn,
  _eV,
  _ev,
  _FLE,
  _FLEi,
  _FLEil,
  _FLER,
  _FLERi,
  _fLGA,
  _fN,
  _fP,
  _fSC,
  _GLAD,
  _GLADR,
  _GLADRe,
  _in,
  _iT,
  _kKI,
  _lEFP,
  _lEM,
  _lGAL,
  _lGI,
  _lGIo,
  _lGN,
  _li,
  _LLAD,
  _LLADR,
  _LLADRi,
  _lMTS,
  _lSN,
  _lSNo,
  _lSNP,
  _lSNPo,
  _LTSLE,
  _LTSM,
  _LTSR,
  _LTSS,
  _LTSU,
  _m,
  _mat,
  _MFM,
  _MFMR,
  _mN,
  _mNe,
  _MT,
  _mT,
  _MTe,
  _mV,
  _nT,
  _PMF,
  _PMFR,
  _PSF,
  _PSFR,
  _rAo,
  _rIe,
  _rSe,
  _sa,
  _sCe,
  _sI,
  _SLS,
  _sLS,
  _SLSe,
  _SLT,
  _SLTR,
  _SLTRS,
  _SLTRt,
  _sM,
  _sR,
  _SSE,
  _sSe,
  _STE,
  _str,
  _sTt,
  _sUe,
  _ta,
  _ti,
  _TMF,
  _TMFR,
  _TMFRe,
  _u,
  _ULAD,
  _ULADR,
  _un,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalyDetector = struct(
  n0,
  _AD,
  0,
  [_aDA, _dN, _lGAL, _eF, _fP, _aDS, _kKI, _cTS, _lMTS, _aVT],
  [0, 0, 64 | 0, 0, 0, 0, 0, 1, 1, 1]
);
export var CreateLogAnomalyDetectorRequest = struct(
  n0,
  _CLADR,
  0,
  [_lGAL, _dN, _eF, _fP, _kKI, _aVT, _ta],
  [64 | 0, 0, 0, 0, 0, 1, 128 | 0]
);
export var CreateLogAnomalyDetectorResponse = struct(n0, _CLADRr, 0, [_aDA], [0]);
export var FilteredLogEvent = struct(n0, _FLE, 0, [_lSN, _ti, _m, _iT, _eIv], [0, 1, 0, 1, 0]);
export var FilterLogEventsRequest = struct(
  n0,
  _FLER,
  0,
  [_lGN, _lGI, _lSNo, _lSNP, _sTt, _eTn, _fP, _nT, _li, _in, _u],
  [0, 0, 64 | 0, 0, 1, 1, 0, 0, 1, 2, 2]
);
export var FilterLogEventsResponse = struct(
  n0,
  _FLERi,
  0,
  [_ev, _sLS, _nT],
  [() => FilteredLogEvents, () => SearchedLogStreams, 0]
);
export var GetLogAnomalyDetectorRequest = struct(n0, _GLADR, 0, [_aDA], [0]);
export var GetLogAnomalyDetectorResponse = struct(
  n0,
  _GLADRe,
  0,
  [_dN, _lGAL, _eF, _fP, _aDS, _kKI, _cTS, _lMTS, _aVT],
  [0, 64 | 0, 0, 0, 0, 0, 1, 1, 1]
);
export var ListLogAnomalyDetectorsRequest = struct(n0, _LLADR, 0, [_fLGA, _li, _nT], [0, 1, 0]);
export var ListLogAnomalyDetectorsResponse = struct(n0, _LLADRi, 0, [_aD, _nT], [() => AnomalyDetectors, 0]);
export var LiveTailSessionLogEvent = struct(n0, _LTSLE, 0, [_lSN, _lGI, _m, _ti, _iT], [0, 0, 0, 1, 1]);
export var LiveTailSessionMetadata = struct(n0, _LTSM, 0, [_sa], [2]);
export var LiveTailSessionStart = struct(
  n0,
  _LTSS,
  0,
  [_rIe, _sI, _lGIo, _lSNo, _lSNPo, _lEFP],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0]
);
export var LiveTailSessionUpdate = struct(
  n0,
  _LTSU,
  0,
  [_sM, _sR],
  [() => LiveTailSessionMetadata, () => LiveTailSessionResults]
);
export var MetricFilterMatchRecord = struct(n0, _MFMR, 0, [_eN, _eM, _eV], [1, 0, 128 | 0]);
export var MetricTransformation = struct(n0, _MT, 0, [_mN, _mNe, _mV, _dV, _di, _un], [0, 0, 0, 1, 128 | 0, 0]);
export var PutMetricFilterRequest = struct(
  n0,
  _PMFR,
  0,
  [_lGN, _fN, _fP, _mT, _aOTL, _fSC, _eSFD],
  [0, 0, 0, () => MetricTransformations, 2, 0, 64 | 0]
);
export var PutSubscriptionFilterRequest = struct(
  n0,
  _PSFR,
  0,
  [_lGN, _fN, _fP, _dA, _rAo, _dis, _aOTL, _fSC, _eSF],
  [0, 0, 0, 0, 0, 0, 2, 0, 64 | 0]
);
export var SearchedLogStream = struct(n0, _SLS, 0, [_lSN, _sCe], [0, 2]);
export var SessionStreamingException = error(
  n0,
  _SSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SessionStreamingException
);
export var SessionTimeoutException = error(
  n0,
  _STE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SessionTimeoutException
);
export var StartLiveTailRequest = struct(n0, _SLTR, 0, [_lGIo, _lSNo, _lSNPo, _lEFP], [64 | 0, 64 | 0, 64 | 0, 0]);
export var StartLiveTailResponse = struct(n0, _SLTRt, 0, [_rSe], [[() => StartLiveTailResponseStream, 0]]);
export var TestMetricFilterRequest = struct(n0, _TMFR, 0, [_fP, _lEM], [0, 64 | 0]);
export var TestMetricFilterResponse = struct(n0, _TMFRe, 0, [_mat], [() => MetricFilterMatches]);
export var UpdateLogAnomalyDetectorRequest = struct(n0, _ULADR, 0, [_aDA, _eF, _fP, _aVT, _ena], [0, 0, 0, 1, 2]);
export var AnomalyDetectors = list(n0, _ADn, 0, () => AnomalyDetector);
export var EmitSystemFields = 64 | 0;

export var FilteredLogEvents = list(n0, _FLEi, 0, () => FilteredLogEvent);
export var InputLogStreamNames = 64 | 0;

export var LiveTailSessionResults = list(n0, _LTSR, 0, () => LiveTailSessionLogEvent);
export var MetricFilterMatches = list(n0, _MFM, 0, () => MetricFilterMatchRecord);
export var MetricTransformations = list(n0, _MTe, 0, () => MetricTransformation);
export var SearchedLogStreams = list(n0, _SLSe, 0, () => SearchedLogStream);
export var StartLiveTailLogGroupIdentifiers = 64 | 0;

export var Dimensions = 128 | 0;

export var ExtractedValues = 128 | 0;

export var StartLiveTailResponseStream = uni(
  n0,
  _SLTRS,
  {
    [_str]: 1,
  },
  [_sSe, _sUe, _STE, _SSE],
  [
    () => LiveTailSessionStart,
    () => LiveTailSessionUpdate,
    [() => SessionTimeoutException, 0],
    [() => SessionStreamingException, 0],
  ]
);
export var CreateLogAnomalyDetector = op(
  n0,
  _CLAD,
  0,
  () => CreateLogAnomalyDetectorRequest,
  () => CreateLogAnomalyDetectorResponse
);
export var FilterLogEvents = op(
  n0,
  _FLEil,
  0,
  () => FilterLogEventsRequest,
  () => FilterLogEventsResponse
);
export var GetLogAnomalyDetector = op(
  n0,
  _GLAD,
  0,
  () => GetLogAnomalyDetectorRequest,
  () => GetLogAnomalyDetectorResponse
);
export var ListLogAnomalyDetectors = op(
  n0,
  _LLAD,
  0,
  () => ListLogAnomalyDetectorsRequest,
  () => ListLogAnomalyDetectorsResponse
);
export var PutMetricFilter = op(
  n0,
  _PMF,
  0,
  () => PutMetricFilterRequest,
  () => Unit
);
export var PutSubscriptionFilter = op(
  n0,
  _PSF,
  0,
  () => PutSubscriptionFilterRequest,
  () => Unit
);
export var StartLiveTail = op(
  n0,
  _SLT,
  {
    [_end]: ["streaming-"],
  },
  () => StartLiveTailRequest,
  () => StartLiveTailResponse
);
export var TestMetricFilter = op(
  n0,
  _TMF,
  0,
  () => TestMetricFilterRequest,
  () => TestMetricFilterResponse
);
export var UpdateLogAnomalyDetector = op(
  n0,
  _ULAD,
  0,
  () => UpdateLogAnomalyDetectorRequest,
  () => Unit
);
