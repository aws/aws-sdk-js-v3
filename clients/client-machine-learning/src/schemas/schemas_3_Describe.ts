// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _BP,
  _BPa,
  _BPDSI,
  _BPI,
  _CA,
  _CBIU,
  _CRE,
  _CREI,
  _CREO,
  _CS,
  _CT,
  _D,
  _DBPe,
  _DBPIe,
  _DBPOe,
  _DDSe,
  _DDSIe,
  _DDSOe,
  _DEe,
  _DEIe,
  _DEOe,
  _DLS,
  _DMLMe,
  _DMLMIe,
  _DMLMOe,
  _DPI,
  _DR,
  _DRE,
  _DREI,
  _DREO,
  _DSa,
  _DSata,
  _DSI,
  _DSIB,
  _DSS,
  _DUN,
  _E,
  _EDSI,
  _EI,
  _EIn,
  _EQ,
  _ES,
  _EU,
  _Ev,
  _FA,
  _FV,
  _GBP,
  _GBPI,
  _GBPO,
  _GDS,
  _GDSI,
  _GDSO,
  _GE,
  _GEe,
  _GEI,
  _GEO,
  _GMLM,
  _GMLMI,
  _GMLMO,
  _GT,
  _IDLS,
  _IRC,
  _L,
  _LE,
  _LT,
  _LU,
  _LUA,
  _M,
  _MLM,
  _MLMI,
  _MLMo,
  _MLMT,
  _N,
  _NE,
  _NOF,
  _NT,
  _OU,
  _PM,
  _Pr,
  _Pro,
  _PRPS,
  _R,
  _RARN,
  _RD,
  _RDSM,
  _Re,
  _REI,
  _RM,
  _RR,
  _S,
  _SA,
  _Sc,
  _SIB,
  _SO,
  _SR,
  _SSQ,
  _ST,
  _STLUA,
  _TDSI,
  _TP,
  _TRC,
  _V,
  n0,
} from "./schemas_0";
import { RDSDatabase, RedshiftDatabase } from "./schemas_1_Data";

/* eslint no-var: 0 */

export var BatchPrediction = struct(
  n0,
  _BP,
  0,
  [_BPI, _MLMI, _BPDSI, _IDLS, _CBIU, _CA, _LUA, _N, _S, _OU, _M, _CT, _FA, _SA, _TRC, _IRC],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 1, 4, 4, 1, 1]
);
export var CreateRealtimeEndpointInput = struct(n0, _CREI, 0, [_MLMI], [0]);
export var CreateRealtimeEndpointOutput = struct(n0, _CREO, 0, [_MLMI, _REI], [0, () => RealtimeEndpointInfo]);
export var DataSource = struct(
  n0,
  _DSa,
  0,
  [_DSI, _DLS, _DR, _CBIU, _CA, _LUA, _DSIB, _NOF, _N, _S, _M, _RM, _RDSM, _RARN, _CS, _CT, _FA, _SA],
  [0, 0, 0, 0, 4, 4, 1, 1, 0, 0, 0, () => RedshiftMetadata, () => RDSMetadata, 0, 2, 1, 4, 4]
);
export var DeleteRealtimeEndpointInput = struct(n0, _DREI, 0, [_MLMI], [0]);
export var DeleteRealtimeEndpointOutput = struct(n0, _DREO, 0, [_MLMI, _REI], [0, () => RealtimeEndpointInfo]);
export var DescribeBatchPredictionsInput = struct(
  n0,
  _DBPIe,
  0,
  [_FV, _EQ, _GT, _LT, _GE, _LE, _NE, _Pr, _SO, _NT, _L],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var DescribeBatchPredictionsOutput = struct(n0, _DBPOe, 0, [_Re, _NT], [() => BatchPredictions, 0]);
export var DescribeDataSourcesInput = struct(
  n0,
  _DDSIe,
  0,
  [_FV, _EQ, _GT, _LT, _GE, _LE, _NE, _Pr, _SO, _NT, _L],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var DescribeDataSourcesOutput = struct(n0, _DDSOe, 0, [_Re, _NT], [() => DataSources, 0]);
export var DescribeEvaluationsInput = struct(
  n0,
  _DEIe,
  0,
  [_FV, _EQ, _GT, _LT, _GE, _LE, _NE, _Pr, _SO, _NT, _L],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var DescribeEvaluationsOutput = struct(n0, _DEOe, 0, [_Re, _NT], [() => Evaluations, 0]);
export var DescribeMLModelsInput = struct(
  n0,
  _DMLMIe,
  0,
  [_FV, _EQ, _GT, _LT, _GE, _LE, _NE, _Pr, _SO, _NT, _L],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
);
export var DescribeMLModelsOutput = struct(n0, _DMLMOe, 0, [_Re, _NT], [() => MLModels, 0]);
export var Evaluation = struct(
  n0,
  _E,
  0,
  [_EI, _MLMI, _EDSI, _IDLS, _CBIU, _CA, _LUA, _N, _S, _PM, _M, _CT, _FA, _SA],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, () => PerformanceMetrics, 0, 1, 4, 4]
);
export var GetBatchPredictionInput = struct(n0, _GBPI, 0, [_BPI], [0]);
export var GetBatchPredictionOutput = struct(
  n0,
  _GBPO,
  0,
  [_BPI, _MLMI, _BPDSI, _IDLS, _CBIU, _CA, _LUA, _N, _S, _OU, _LU, _M, _CT, _FA, _SA, _TRC, _IRC],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 1, 4, 4, 1, 1]
);
export var GetDataSourceInput = struct(n0, _GDSI, 0, [_DSI, _V], [0, 2]);
export var GetDataSourceOutput = struct(
  n0,
  _GDSO,
  0,
  [_DSI, _DLS, _DR, _CBIU, _CA, _LUA, _DSIB, _NOF, _N, _S, _LU, _M, _RM, _RDSM, _RARN, _CS, _CT, _FA, _SA, _DSS],
  [0, 0, 0, 0, 4, 4, 1, 1, 0, 0, 0, 0, () => RedshiftMetadata, () => RDSMetadata, 0, 2, 1, 4, 4, 0]
);
export var GetEvaluationInput = struct(n0, _GEI, 0, [_EI], [0]);
export var GetEvaluationOutput = struct(
  n0,
  _GEO,
  0,
  [_EI, _MLMI, _EDSI, _IDLS, _CBIU, _CA, _LUA, _N, _S, _PM, _LU, _M, _CT, _FA, _SA],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, () => PerformanceMetrics, 0, 0, 1, 4, 4]
);
export var GetMLModelInput = struct(n0, _GMLMI, 0, [_MLMI, _V], [0, 2]);
export var GetMLModelOutput = struct(
  n0,
  _GMLMO,
  0,
  [_MLMI, _TDSI, _CBIU, _CA, _LUA, _N, _S, _SIB, _EIn, _TP, _IDLS, _MLMT, _ST, _STLUA, _LU, _M, _CT, _FA, _SA, _R, _Sc],
  [0, 0, 0, 4, 4, 0, 0, 1, () => RealtimeEndpointInfo, 128 | 0, 0, 0, 1, 4, 0, 0, 1, 4, 4, 0, 0]
);
export var MLModel = struct(
  n0,
  _MLM,
  0,
  [_MLMI, _TDSI, _CBIU, _CA, _LUA, _N, _S, _SIB, _EIn, _TP, _IDLS, _A, _MLMT, _ST, _STLUA, _M, _CT, _FA, _SA],
  [0, 0, 0, 4, 4, 0, 0, 1, () => RealtimeEndpointInfo, 128 | 0, 0, 0, 0, 1, 4, 0, 1, 4, 4]
);
export var PerformanceMetrics = struct(n0, _PM, 0, [_Pro], [128 | 0]);
export var RDSMetadata = struct(n0, _RDSM, 0, [_D, _DUN, _SSQ, _RR, _SR, _DPI], [() => RDSDatabase, 0, 0, 0, 0, 0]);
export var RealtimeEndpointInfo = struct(n0, _REI, 0, [_PRPS, _CA, _EU, _ES], [1, 4, 0, 0]);
export var RedshiftMetadata = struct(n0, _RM, 0, [_RD, _DUN, _SSQ], [() => RedshiftDatabase, 0, 0]);
export var BatchPredictions = list(n0, _BPa, 0, () => BatchPrediction);
export var DataSources = list(n0, _DSata, 0, () => DataSource);
export var Evaluations = list(n0, _Ev, 0, () => Evaluation);
export var MLModels = list(n0, _MLMo, 0, () => MLModel);
export var PerformanceMetricsProperties = 128 | 0;

export var CreateRealtimeEndpoint = op(
  n0,
  _CRE,
  0,
  () => CreateRealtimeEndpointInput,
  () => CreateRealtimeEndpointOutput
);
export var DeleteRealtimeEndpoint = op(
  n0,
  _DRE,
  0,
  () => DeleteRealtimeEndpointInput,
  () => DeleteRealtimeEndpointOutput
);
export var DescribeBatchPredictions = op(
  n0,
  _DBPe,
  0,
  () => DescribeBatchPredictionsInput,
  () => DescribeBatchPredictionsOutput
);
export var DescribeDataSources = op(
  n0,
  _DDSe,
  0,
  () => DescribeDataSourcesInput,
  () => DescribeDataSourcesOutput
);
export var DescribeEvaluations = op(
  n0,
  _DEe,
  0,
  () => DescribeEvaluationsInput,
  () => DescribeEvaluationsOutput
);
export var DescribeMLModels = op(
  n0,
  _DMLMe,
  0,
  () => DescribeMLModelsInput,
  () => DescribeMLModelsOutput
);
export var GetBatchPrediction = op(
  n0,
  _GBP,
  0,
  () => GetBatchPredictionInput,
  () => GetBatchPredictionOutput
);
export var GetDataSource = op(
  n0,
  _GDS,
  0,
  () => GetDataSourceInput,
  () => GetDataSourceOutput
);
export var GetEvaluation = op(
  n0,
  _GEe,
  0,
  () => GetEvaluationInput,
  () => GetEvaluationOutput
);
export var GetMLModel = op(
  n0,
  _GMLM,
  0,
  () => GetMLModelInput,
  () => GetMLModelOutput
);
