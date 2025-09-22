// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AMLAA,
  _AMLOS,
  _Av,
  _B,
  _BM,
  _BMa,
  _CD,
  _CDL,
  _CL,
  _CN,
  _CNL,
  _CNLo,
  _CNo,
  _Cou,
  _CT,
  _DAa,
  _DAP,
  _DAPR,
  _DAPRe,
  _Dat,
  _DC,
  _DDIJe,
  _DDIJRe,
  _DDIJRes,
  _De,
  _DEe,
  _DEEe,
  _DEERe,
  _DEERes,
  _DERe,
  _DERes,
  _Det,
  _DFEJe,
  _DFEJRe,
  _DFEJRes,
  _DIJA,
  _DIJAa,
  _DIJN,
  _DMe,
  _DMRe,
  _DMRes,
  _DPBEJe,
  _DPBEJRe,
  _DPBEJRes,
  _DPe,
  _DPRe,
  _DPRes,
  _DS,
  _DSat,
  _DWIFEe,
  _DWIFERe,
  _DWIFERes,
  _E,
  _EA,
  _EC,
  _ECx,
  _EDT,
  _EEA,
  _EEN,
  _EETRIM,
  _EI,
  _EN,
  _EPv,
  _ES,
  _ESv,
  _ET,
  _ETRIM,
  _EV,
  _F,
  _FA,
  _FC,
  _FD,
  _FEJA,
  _FEJN,
  _FF,
  _FH,
  _Fil,
  _FS,
  _FT,
  _GF,
  _HPOC,
  _IAP,
  _IDC,
  _IM,
  _LE,
  _LER,
  _LERi,
  _LES,
  _LET,
  _LME,
  _LMER,
  _LMERi,
  _LMT,
  _M,
  _MA,
  _Ma,
  _MDS,
  _MI,
  _Mi,
  _MN,
  _MNe,
  _MR,
  _MRe,
  _MRet,
  _MVe,
  _N,
  _NIE,
  _NT,
  _OM,
  _PA,
  _PAML,
  _PB,
  _PBEJA,
  _PBEJN,
  _PE,
  _PED,
  _PEr,
  _PEre,
  _PHPO,
  _PME,
  _PMEr,
  _PN,
  _RA,
  _RPS,
  _S,
  _SDT,
  _St,
  _Stat,
  _Std,
  _TAB,
  _TF,
  _TP,
  _TW,
  _TWD,
  _TWE,
  _TWS,
  _TWSe,
  _TZ,
  _UGFTZ,
  _V,
  _WED,
  _WIFA,
  _WIFEA,
  _WIFEN,
  _WSD,
  n0,
} from "./schemas_0";
import { EncryptionConfig } from "./schemas_4_Predictor";
import { Schema } from "./schemas_8_Describe";
import {
  EvaluationParameters,
  FeaturizationConfig,
  HyperParameterTuningJobConfig,
  InputDataConfig,
} from "./schemas_11_Describe";
import { DataConfig, TimeAlignmentBoundary } from "./schemas_14_Describe";
import { ReferencePredictorSummary } from "./schemas_25_Predictor";
import { DataSource } from "./schemas_28_Describe";
import { Filters } from "./schemas_30_List";
import { ExplainabilityConfig } from "./schemas_35_Explainability";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var Baseline = struct(n0, _B, 0, [_PB], [() => PredictorBaseline]);
export var BaselineMetric = struct(n0, _BM, 0, [_N, _V], [0, 1]);
export var DescribeAutoPredictorRequest = struct(n0, _DAPR, 0, [_PA], [0]);
export var DescribeAutoPredictorResponse = struct(
  n0,
  _DAPRe,
  0,
  [_PA, _PN, _FH, _FT, _FF, _FD, _DIJAa, _DC, _EC, _RPS, _ETRIM, _St, _M, _CT, _LMT, _OM, _EI, _MI, _TAB],
  [
    0,
    0,
    1,
    64 | 0,
    0,
    64 | 0,
    64 | 0,
    () => DataConfig,
    () => EncryptionConfig,
    () => ReferencePredictorSummary,
    1,
    0,
    0,
    4,
    4,
    0,
    () => ExplainabilityInfo,
    () => MonitorInfo,
    () => TimeAlignmentBoundary,
  ]
);
export var DescribeDatasetImportJobRequest = struct(n0, _DDIJRe, 0, [_DIJA], [0]);
export var DescribeDatasetImportJobResponse = struct(
  n0,
  _DDIJRes,
  0,
  [_DIJN, _DIJA, _DAa, _TF, _TZ, _UGFTZ, _GF, _DS, _ETRIM, _FS, _DSat, _St, _M, _CT, _LMT, _F, _IM],
  [0, 0, 0, 0, 0, 2, 0, () => DataSource, 1, () => FieldStatistics, 1, 0, 0, 4, 4, 0, 0]
);
export var DescribeExplainabilityExportRequest = struct(n0, _DEERe, 0, [_EEA], [0]);
export var DescribeExplainabilityExportResponse = struct(
  n0,
  _DEERes,
  0,
  [_EEA, _EEN, _EA, _De, _M, _St, _CT, _LMT, _F],
  [0, 0, 0, () => DataDestination, 0, 0, 4, 4, 0]
);
export var DescribeExplainabilityRequest = struct(n0, _DERe, 0, [_EA], [0]);
export var DescribeExplainabilityResponse = struct(
  n0,
  _DERes,
  0,
  [_EA, _EN, _RA, _ECx, _EV, _DS, _S, _SDT, _EDT, _ETRIM, _M, _St, _CT, _LMT],
  [0, 0, 0, () => ExplainabilityConfig, 2, () => DataSource, () => Schema, 0, 0, 1, 0, 0, 4, 4]
);
export var DescribeForecastExportJobRequest = struct(n0, _DFEJRe, 0, [_FEJA], [0]);
export var DescribeForecastExportJobResponse = struct(
  n0,
  _DFEJRes,
  0,
  [_FEJA, _FEJN, _FA, _De, _M, _St, _CT, _LMT, _F],
  [0, 0, 0, () => DataDestination, 0, 0, 4, 4, 0]
);
export var DescribeMonitorRequest = struct(n0, _DMRe, 0, [_MA], [0]);
export var DescribeMonitorResponse = struct(
  n0,
  _DMRes,
  0,
  [_MN, _MA, _RA, _St, _LET, _LES, _B, _M, _CT, _LMT, _EETRIM],
  [0, 0, 0, 0, 4, 0, () => Baseline, 0, 4, 4, 1]
);
export var DescribePredictorBacktestExportJobRequest = struct(n0, _DPBEJRe, 0, [_PBEJA], [0]);
export var DescribePredictorBacktestExportJobResponse = struct(
  n0,
  _DPBEJRes,
  0,
  [_PBEJA, _PBEJN, _PA, _De, _M, _St, _CT, _LMT, _F],
  [0, 0, 0, () => DataDestination, 0, 0, 4, 4, 0]
);
export var DescribePredictorRequest = struct(n0, _DPRe, 0, [_PA], [0]);
export var DescribePredictorResponse = struct(
  n0,
  _DPRes,
  0,
  [
    _PA,
    _PN,
    _AA,
    _AMLAA,
    _FH,
    _FT,
    _PAML,
    _AMLOS,
    _PHPO,
    _TP,
    _EPv,
    _HPOC,
    _IDC,
    _FC,
    _EC,
    _PED,
    _ETRIM,
    _IAP,
    _DIJAa,
    _St,
    _M,
    _CT,
    _LMT,
    _OM,
  ],
  [
    0,
    0,
    0,
    64 | 0,
    1,
    64 | 0,
    2,
    0,
    2,
    128 | 0,
    () => EvaluationParameters,
    () => HyperParameterTuningJobConfig,
    () => InputDataConfig,
    () => FeaturizationConfig,
    () => EncryptionConfig,
    () => PredictorExecutionDetails,
    1,
    2,
    64 | 0,
    0,
    0,
    4,
    4,
    0,
  ]
);
export var DescribeWhatIfForecastExportRequest = struct(n0, _DWIFERe, 0, [_WIFEA], [0]);
export var DescribeWhatIfForecastExportResponse = struct(
  n0,
  _DWIFERes,
  0,
  [_WIFEA, _WIFEN, _WIFA, _De, _M, _St, _CT, _ETRIM, _LMT, _F],
  [0, 0, 64 | 0, () => DataDestination, 0, 0, 4, 1, 4, 0]
);
export var ExplainabilityInfo = struct(n0, _EI, 0, [_EA, _St], [0, 0]);
export var ExplainabilitySummary = struct(
  n0,
  _ES,
  0,
  [_EA, _EN, _RA, _ECx, _St, _M, _CT, _LMT],
  [0, 0, 0, () => ExplainabilityConfig, 0, 0, 4, 4]
);
export var ListExplainabilitiesRequest = struct(n0, _LER, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListExplainabilitiesResponse = struct(n0, _LERi, 0, [_E, _NT], [() => Explainabilities, 0]);
export var ListMonitorEvaluationsRequest = struct(n0, _LMER, 0, [_NT, _MR, _MA, _Fil], [0, 1, 0, () => Filters]);
export var ListMonitorEvaluationsResponse = struct(n0, _LMERi, 0, [_NT, _PME], [0, () => PredictorMonitorEvaluations]);
export var MetricResult = struct(n0, _MRe, 0, [_MNe, _MVe], [0, 1]);
export var MonitorDataSource = struct(n0, _MDS, 0, [_DIJA, _FA, _PA], [0, 0, 0]);
export var MonitorInfo = struct(n0, _MI, 0, [_MA, _St], [0, 0]);
export var PredictorBaseline = struct(n0, _PB, 0, [_BMa], [() => BaselineMetrics]);
export var PredictorEvent = struct(n0, _PE, 0, [_Det, _Dat], [0, 4]);
export var PredictorExecution = struct(n0, _PEr, 0, [_AA, _TW], [0, () => TestWindowDetails]);
export var PredictorExecutionDetails = struct(n0, _PED, 0, [_PEre], [() => PredictorExecutions]);
export var PredictorMonitorEvaluation = struct(
  n0,
  _PMEr,
  0,
  [_RA, _MA, _ET, _ESv, _WSD, _WED, _PE, _MDS, _MRet, _NIE, _M],
  [0, 0, 4, 0, 4, 4, () => PredictorEvent, () => MonitorDataSource, () => MetricResults, 1, 0]
);
export var Statistics = struct(
  n0,
  _Stat,
  0,
  [_Cou, _CD, _CN, _CNo, _Mi, _Ma, _Av, _Std, _CL, _CDL, _CNL, _CNLo],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]
);
export var TestWindowSummary = struct(n0, _TWS, 0, [_TWSe, _TWE, _St, _M], [4, 4, 0, 0]);
export var BaselineMetrics = list(n0, _BMa, 0, () => BaselineMetric);
export var Explainabilities = list(n0, _E, 0, () => ExplainabilitySummary);
export var LongArnList = 64 | 0;

export var MetricResults = list(n0, _MRet, 0, () => MetricResult);
export var PredictorExecutions = list(n0, _PEre, 0, () => PredictorExecution);
export var PredictorMonitorEvaluations = list(n0, _PME, 0, () => PredictorMonitorEvaluation);
export var TestWindowDetails = list(n0, _TWD, 0, () => TestWindowSummary);
export var FieldStatistics = map(n0, _FS, 0, 0, () => Statistics);
export var DescribeAutoPredictor = op(
  n0,
  _DAP,
  2,
  () => DescribeAutoPredictorRequest,
  () => DescribeAutoPredictorResponse
);
export var DescribeDatasetImportJob = op(
  n0,
  _DDIJe,
  2,
  () => DescribeDatasetImportJobRequest,
  () => DescribeDatasetImportJobResponse
);
export var DescribeExplainability = op(
  n0,
  _DEe,
  2,
  () => DescribeExplainabilityRequest,
  () => DescribeExplainabilityResponse
);
export var DescribeExplainabilityExport = op(
  n0,
  _DEEe,
  2,
  () => DescribeExplainabilityExportRequest,
  () => DescribeExplainabilityExportResponse
);
export var DescribeForecastExportJob = op(
  n0,
  _DFEJe,
  2,
  () => DescribeForecastExportJobRequest,
  () => DescribeForecastExportJobResponse
);
export var DescribeMonitor = op(
  n0,
  _DMe,
  2,
  () => DescribeMonitorRequest,
  () => DescribeMonitorResponse
);
export var DescribePredictor = op(
  n0,
  _DPe,
  2,
  () => DescribePredictorRequest,
  () => DescribePredictorResponse
);
export var DescribePredictorBacktestExportJob = op(
  n0,
  _DPBEJe,
  2,
  () => DescribePredictorBacktestExportJobRequest,
  () => DescribePredictorBacktestExportJobResponse
);
export var DescribeWhatIfForecastExport = op(
  n0,
  _DWIFEe,
  2,
  () => DescribeWhatIfForecastExportRequest,
  () => DescribeWhatIfForecastExportResponse
);
export var ListExplainabilities = op(
  n0,
  _LE,
  2,
  () => ListExplainabilitiesRequest,
  () => ListExplainabilitiesResponse
);
export var ListMonitorEvaluations = op(
  n0,
  _LME,
  2,
  () => ListMonitorEvaluationsRequest,
  () => ListMonitorEvaluationsResponse
);
