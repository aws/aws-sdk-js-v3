// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AD,
  _ADC,
  _ADETR,
  _ADn,
  _ADT,
  _AI,
  _At,
  _C,
  _Cod,
  _Cou,
  _D,
  _Da,
  _DAD,
  _DADe,
  _DADI,
  _DADIe,
  _DADO,
  _DADOe,
  _Dat,
  _DF,
  _DFi,
  _Di,
  _E,
  _EMD,
  _EMDL,
  _ES,
  _ET,
  _ETR,
  _Ex,
  _GMD,
  _GMDI,
  _GMDO,
  _GMS,
  _GMSI,
  _GMSO,
  _I,
  _ILA,
  _KA,
  _L,
  _LMI,
  _LMi,
  _LMO,
  _LO,
  _Ma,
  _MC,
  _MD,
  _MDa,
  _MDes,
  _MDet,
  _MDQ,
  _MDQe,
  _MDR,
  _MDRe,
  _MDRM,
  _Me,
  _Mes,
  _Met,
  _Mi,
  _MMAD,
  _MN,
  _MRa,
  _MS,
  _MT,
  _N,
  _Na,
  _NT,
  _OA,
  _OAw,
  _P,
  _PAD,
  _PADI,
  _PADO,
  _PMD,
  _PMDI,
  _PS,
  _R,
  _RAe,
  _RD,
  _S,
  _SB,
  _SC,
  _SCta,
  _SEV,
  _SMAD,
  _SRt,
  _SS,
  _ST,
  _Sta,
  _Su,
  _SV,
  _SVt,
  _T,
  _Ti,
  _Tim,
  _U,
  _V,
  _Va,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalyDetector = struct(
  n0,
  _AD,
  0,
  [_N, _MN, _D, _S, _C, _SV, _MC, _SMAD, _MMAD],
  [
    0,
    0,
    () => Dimensions,
    0,
    () => AnomalyDetectorConfiguration,
    0,
    () => MetricCharacteristics,
    () => SingleMetricAnomalyDetector,
    () => MetricMathAnomalyDetector,
  ]
);
export var AnomalyDetectorConfiguration = struct(
  n0,
  _ADC,
  0,
  [_ETR, _MT],
  [() => AnomalyDetectorExcludedTimeRanges, 0]
);
export var Datapoint = struct(n0, _Da, 0, [_T, _SC, _A, _Su, _Mi, _Ma, _U, _ES], [4, 1, 1, 1, 1, 1, 0, 128 | 1]);
export var DeleteAnomalyDetectorInput = struct(
  n0,
  _DADI,
  0,
  [_N, _MN, _D, _S, _SMAD, _MMAD],
  [0, 0, () => Dimensions, 0, () => SingleMetricAnomalyDetector, () => MetricMathAnomalyDetector]
);
export var DeleteAnomalyDetectorOutput = struct(n0, _DADO, 0, [], []);
export var DescribeAnomalyDetectorsInput = struct(
  n0,
  _DADIe,
  0,
  [_NT, _MRa, _N, _MN, _D, _ADT],
  [0, 1, 0, 0, () => Dimensions, 64 | 0]
);
export var DescribeAnomalyDetectorsOutput = struct(n0, _DADOe, 0, [_ADn, _NT], [() => AnomalyDetectors, 0]);
export var Dimension = struct(n0, _Di, 0, [_Na, _V], [0, 0]);
export var DimensionFilter = struct(n0, _DF, 0, [_Na, _V], [0, 0]);
export var Entity = struct(n0, _E, 0, [_KA, _At], [128 | 0, 128 | 0]);
export var EntityMetricData = struct(n0, _EMD, 0, [_E, _MD], [() => Entity, () => MetricData]);
export var GetMetricDataInput = struct(
  n0,
  _GMDI,
  0,
  [_MDQ, _ST, _ET, _NT, _SB, _MDa, _LO],
  [() => MetricDataQueries, 4, 4, 0, 0, 1, () => LabelOptions]
);
export var GetMetricDataOutput = struct(
  n0,
  _GMDO,
  0,
  [_MDR, _NT, _Mes],
  [() => MetricDataResults, 0, () => MetricDataResultMessages]
);
export var GetMetricStatisticsInput = struct(
  n0,
  _GMSI,
  0,
  [_N, _MN, _D, _ST, _ET, _P, _Sta, _ES, _U],
  [0, 0, () => Dimensions, 4, 4, 1, 64 | 0, 64 | 0, 0]
);
export var GetMetricStatisticsOutput = struct(n0, _GMSO, 0, [_L, _Dat], [0, () => Datapoints]);
export var LabelOptions = struct(n0, _LO, 0, [_Ti], [0]);
export var ListMetricsInput = struct(
  n0,
  _LMI,
  0,
  [_N, _MN, _D, _NT, _RAe, _ILA, _OA],
  [0, 0, () => DimensionFilters, 0, 0, 2, 0]
);
export var ListMetricsOutput = struct(n0, _LMO, 0, [_Me, _NT, _OAw], [() => Metrics, 0, 64 | 0]);
export var MessageData = struct(n0, _MDes, 0, [_Cod, _V], [0, 0]);
export var Metric = struct(n0, _Met, 0, [_N, _MN, _D], [0, 0, () => Dimensions]);
export var MetricCharacteristics = struct(n0, _MC, 0, [_PS], [2]);
export var MetricDataQuery = struct(
  n0,
  _MDQe,
  0,
  [_I, _MS, _Ex, _L, _RD, _P, _AI],
  [0, () => MetricStat, 0, 0, 2, 1, 0]
);
export var MetricDataResult = struct(
  n0,
  _MDRe,
  0,
  [_I, _L, _Tim, _Va, _SCta, _Mes],
  [0, 0, 64 | 4, 64 | 1, 0, () => MetricDataResultMessages]
);
export var MetricDatum = struct(
  n0,
  _MDet,
  0,
  [_MN, _D, _T, _V, _SVt, _Va, _Cou, _U, _SRt],
  [0, () => Dimensions, 4, 1, () => StatisticSet, 64 | 1, 64 | 1, 0, 1]
);
export var MetricMathAnomalyDetector = struct(n0, _MMAD, 0, [_MDQ], [() => MetricDataQueries]);
export var MetricStat = struct(n0, _MS, 0, [_Met, _P, _S, _U], [() => Metric, 1, 0, 0]);
export var PutAnomalyDetectorInput = struct(
  n0,
  _PADI,
  0,
  [_N, _MN, _D, _S, _C, _MC, _SMAD, _MMAD],
  [
    0,
    0,
    () => Dimensions,
    0,
    () => AnomalyDetectorConfiguration,
    () => MetricCharacteristics,
    () => SingleMetricAnomalyDetector,
    () => MetricMathAnomalyDetector,
  ]
);
export var PutAnomalyDetectorOutput = struct(n0, _PADO, 0, [], []);
export var PutMetricDataInput = struct(
  n0,
  _PMDI,
  0,
  [_N, _MD, _EMD, _SEV],
  [0, () => MetricData, () => EntityMetricDataList, 2]
);
export var Range = struct(n0, _R, 0, [_ST, _ET], [4, 4]);
export var SingleMetricAnomalyDetector = struct(n0, _SMAD, 0, [_AI, _N, _MN, _D, _S], [0, 0, 0, () => Dimensions, 0]);
export var StatisticSet = struct(n0, _SS, 0, [_SC, _Su, _Mi, _Ma], [1, 1, 1, 1]);
export var AnomalyDetectorExcludedTimeRanges = list(n0, _ADETR, 0, () => Range);
export var AnomalyDetectors = list(n0, _ADn, 0, () => AnomalyDetector);
export var AnomalyDetectorTypes = 64 | 0;

export var Counts = 64 | 1;

export var Datapoints = list(n0, _Dat, 0, () => Datapoint);
export var DatapointValues = 64 | 1;

export var DimensionFilters = list(n0, _DFi, 0, () => DimensionFilter);
export var Dimensions = list(n0, _D, 0, () => Dimension);
export var EntityMetricDataList = list(n0, _EMDL, 0, () => EntityMetricData);
export var ExtendedStatistics = 64 | 0;

export var MetricData = list(n0, _MD, 0, () => MetricDatum);
export var MetricDataQueries = list(n0, _MDQ, 0, () => MetricDataQuery);
export var MetricDataResultMessages = list(n0, _MDRM, 0, () => MessageData);
export var MetricDataResults = list(n0, _MDR, 0, () => MetricDataResult);
export var Metrics = list(n0, _Me, 0, () => Metric);
export var OwningAccounts = 64 | 0;

export var Statistics = 64 | 0;

export var Timestamps = 64 | 4;

export var Values = 64 | 1;

export var DatapointValueMap = 128 | 1;

export var EntityAttributesMap = 128 | 0;

export var EntityKeyAttributesMap = 128 | 0;

export var DeleteAnomalyDetector = op(
  n0,
  _DAD,
  0,
  () => DeleteAnomalyDetectorInput,
  () => DeleteAnomalyDetectorOutput
);
export var DescribeAnomalyDetectors = op(
  n0,
  _DADe,
  0,
  () => DescribeAnomalyDetectorsInput,
  () => DescribeAnomalyDetectorsOutput
);
export var GetMetricData = op(
  n0,
  _GMD,
  0,
  () => GetMetricDataInput,
  () => GetMetricDataOutput
);
export var GetMetricStatistics = op(
  n0,
  _GMS,
  0,
  () => GetMetricStatisticsInput,
  () => GetMetricStatisticsOutput
);
export var ListMetrics = op(
  n0,
  _LMi,
  0,
  () => ListMetricsInput,
  () => ListMetricsOutput
);
export var PutAnomalyDetector = op(
  n0,
  _PAD,
  0,
  () => PutAnomalyDetectorInput,
  () => PutAnomalyDetectorOutput
);
export var PutMetricData = op(
  n0,
  _PMD,
  0,
  () => PutMetricDataInput,
  () => Unit
);
