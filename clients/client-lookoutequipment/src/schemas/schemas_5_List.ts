// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMV,
  _AMVA,
  _C,
  _CA,
  _CAET,
  _CAST,
  _CN,
  _CP,
  _CRO,
  _CV,
  _D,
  _DA,
  _DDOIM,
  _DE,
  _DET,
  _DETB,
  _DIC,
  _DIJS,
  _DIJSa,
  _DN,
  _DNBW,
  _DOC,
  _DSa,
  _DSat,
  _DST,
  _DSTA,
  _DT,
  _DUF,
  _E,
  _EDIS,
  _EET,
  _EST,
  _ET,
  _FCa,
  _FR,
  _IDE,
  _IES,
  _IESn,
  _IESnf,
  _IESnfe,
  _IET,
  _IIC,
  _IJI,
  _ISA,
  _ISN,
  _ISNBW,
  _ISS,
  _ISSn,
  _IST,
  _IV,
  _JI,
  _LD,
  _LDIJ,
  _LDIJR,
  _LDIJRi,
  _LDR,
  _LDRi,
  _LGA,
  _LGN,
  _LGNBW,
  _LGS,
  _LGSa,
  _LI,
  _LIE,
  _LIEi,
  _LIER,
  _LIERi,
  _LIERis,
  _LIERist,
  _LIR,
  _LIS,
  _LISR,
  _LISRi,
  _LL,
  _LLG,
  _LLGR,
  _LLGRi,
  _LLR,
  _LLRi,
  _LM,
  _LMR,
  _LMRi,
  _LMV,
  _LMVR,
  _LMVRi,
  _LRS,
  _LRSR,
  _LRSRi,
  _LS,
  _LSa,
  _LSRMV,
  _LSRS,
  _LSRST,
  _LSS,
  _LSSR,
  _LSSRi,
  _LTG,
  _LW,
  _MA,
  _MDOC,
  _MMV,
  _MMVi,
  _MN,
  _MNBW,
  _Mo,
  _MOM,
  _MQ,
  _MR,
  _MS,
  _MSo,
  _MTGID,
  _MV,
  _MVA,
  _MVi,
  _MVo,
  _MVS,
  _MVSo,
  _NOC,
  _NOLTG,
  _NSRSD,
  _NT,
  _P,
  _R,
  _RF,
  _RSD,
  _RSS,
  _RSSe,
  _RSSet,
  _S,
  _SN,
  _SSS,
  _SSSe,
  _SST,
  _ST,
  _STo,
  _UA,
  n0,
} from "./schemas_0";
import { S3Object } from "./schemas_13_Describe";
import { IngestionInputConfiguration } from "./schemas_15_Data";
import { ModelDiagnosticsOutputConfiguration } from "./schemas_17_Model";
import { InferenceInputConfiguration, InferenceOutputConfiguration } from "./schemas_19_Inference";

/* eslint no-var: 0 */

export var CategoricalValues = struct(n0, _CV, 0, [_S, _NOC], [0, 1]);
export var CountPercent = struct(n0, _CP, 0, [_C, _P], [1, 1]);
export var DataIngestionJobSummary = struct(
  n0,
  _DIJS,
  0,
  [_JI, _DN, _DA, _IIC, _S],
  [0, 0, 0, () => IngestionInputConfiguration, 0]
);
export var DatasetSummary = struct(n0, _DSa, 0, [_DN, _DA, _S, _CA], [0, 0, 0, 4]);
export var InferenceEventSummary = struct(n0, _IES, 0, [_ISA, _ISN, _EST, _EET, _D, _EDIS], [0, 0, 4, 4, 0, 1]);
export var InferenceExecutionSummary = struct(
  n0,
  _IESn,
  0,
  [_MN, _MA, _ISN, _ISA, _SST, _DST, _DET, _DIC, _DOC, _CRO, _S, _FR, _MV, _MVA],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    () => InferenceInputConfiguration,
    () => InferenceOutputConfiguration,
    () => S3Object,
    0,
    0,
    1,
    0,
  ]
);
export var InferenceSchedulerSummary = struct(
  n0,
  _ISS,
  0,
  [_MN, _MA, _ISN, _ISA, _S, _DDOIM, _DUF, _LIR],
  [0, 0, 0, 0, 0, 1, 0, 0]
);
export var LabelGroupSummary = struct(n0, _LGS, 0, [_LGN, _LGA, _CA, _UA], [0, 0, 4, 4]);
export var LabelSummary = struct(
  n0,
  _LS,
  0,
  [_LGN, _LI, _LGA, _ST, _ET, _R, _FCa, _E, _CA],
  [0, 0, 0, 4, 4, 0, 0, 0, 4]
);
export var LargeTimestampGaps = struct(n0, _LTG, 0, [_S, _NOLTG, _MTGID], [0, 1, 1]);
export var ListDataIngestionJobsRequest = struct(n0, _LDIJR, 0, [_DN, _NT, _MR, _S], [0, 0, 1, 0]);
export var ListDataIngestionJobsResponse = struct(n0, _LDIJRi, 0, [_NT, _DIJSa], [0, () => DataIngestionJobSummaries]);
export var ListDatasetsRequest = struct(n0, _LDR, 0, [_NT, _MR, _DNBW], [0, 1, 0]);
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_NT, _DSat], [0, () => DatasetSummaries]);
export var ListInferenceEventsRequest = struct(n0, _LIER, 0, [_NT, _MR, _ISN, _IST, _IET], [0, 1, 0, 4, 4]);
export var ListInferenceEventsResponse = struct(n0, _LIERi, 0, [_NT, _IESnf], [0, () => InferenceEventSummaries]);
export var ListInferenceExecutionsRequest = struct(
  n0,
  _LIERis,
  0,
  [_NT, _MR, _ISN, _DSTA, _DETB, _S],
  [0, 1, 0, 4, 4, 0]
);
export var ListInferenceExecutionsResponse = struct(
  n0,
  _LIERist,
  0,
  [_NT, _IESnfe],
  [0, () => InferenceExecutionSummaries]
);
export var ListInferenceSchedulersRequest = struct(n0, _LISR, 0, [_NT, _MR, _ISNBW, _MN, _S], [0, 1, 0, 0, 0]);
export var ListInferenceSchedulersResponse = struct(
  n0,
  _LISRi,
  0,
  [_NT, _ISSn],
  [0, () => InferenceSchedulerSummaries]
);
export var ListLabelGroupsRequest = struct(n0, _LLGR, 0, [_LGNBW, _NT, _MR], [0, 0, 1]);
export var ListLabelGroupsResponse = struct(n0, _LLGRi, 0, [_NT, _LGSa], [0, () => LabelGroupSummaries]);
export var ListLabelsRequest = struct(n0, _LLR, 0, [_LGN, _IST, _IET, _FCa, _E, _NT, _MR], [0, 4, 4, 0, 0, 0, 1]);
export var ListLabelsResponse = struct(n0, _LLRi, 0, [_NT, _LSa], [0, () => LabelSummaries]);
export var ListModelsRequest = struct(n0, _LMR, 0, [_NT, _MR, _S, _MNBW, _DNBW], [0, 1, 0, 0, 0]);
export var ListModelsResponse = struct(n0, _LMRi, 0, [_NT, _MS], [0, () => ModelSummaries]);
export var ListModelVersionsRequest = struct(
  n0,
  _LMVR,
  0,
  [_MN, _NT, _MR, _S, _STo, _CAET, _CAST, _MMV, _MMVi],
  [0, 0, 1, 0, 0, 4, 4, 1, 1]
);
export var ListModelVersionsResponse = struct(n0, _LMVRi, 0, [_NT, _MVS], [0, () => ModelVersionSummaries]);
export var ListRetrainingSchedulersRequest = struct(n0, _LRSR, 0, [_MNBW, _S, _NT, _MR], [0, 0, 0, 1]);
export var ListRetrainingSchedulersResponse = struct(
  n0,
  _LRSRi,
  0,
  [_RSSe, _NT],
  [() => RetrainingSchedulerSummaries, 0]
);
export var ListSensorStatisticsRequest = struct(n0, _LSSR, 0, [_DN, _IJI, _MR, _NT], [0, 0, 1, 0]);
export var ListSensorStatisticsResponse = struct(n0, _LSSRi, 0, [_SSS, _NT], [() => SensorStatisticsSummaries, 0]);
export var ModelSummary = struct(
  n0,
  _MSo,
  0,
  [_MN, _MA, _DN, _DA, _S, _CA, _AMV, _AMVA, _LSRS, _LSRMV, _LSRST, _NSRSD, _RSS, _MDOC, _MQ],
  [0, 0, 0, 0, 0, 4, 1, 0, 0, 1, 4, 4, 0, () => ModelDiagnosticsOutputConfiguration, 0]
);
export var ModelVersionSummary = struct(
  n0,
  _MVSo,
  0,
  [_MN, _MA, _MV, _MVA, _CA, _S, _STo, _MQ],
  [0, 0, 1, 0, 4, 0, 0, 0]
);
export var MonotonicValues = struct(n0, _MVo, 0, [_S, _Mo], [0, 0]);
export var MultipleOperatingModes = struct(n0, _MOM, 0, [_S], [0]);
export var RetrainingSchedulerSummary = struct(n0, _RSSet, 0, [_MN, _MA, _S, _RSD, _RF, _LW], [0, 0, 0, 4, 0, 0]);
export var SensorStatisticsSummary = struct(
  n0,
  _SSSe,
  0,
  [_CN, _SN, _DE, _MVi, _IV, _IDE, _DT, _CV, _MOM, _LTG, _MVo, _DST, _DET],
  [
    0,
    0,
    2,
    () => CountPercent,
    () => CountPercent,
    () => CountPercent,
    () => CountPercent,
    () => CategoricalValues,
    () => MultipleOperatingModes,
    () => LargeTimestampGaps,
    () => MonotonicValues,
    4,
    4,
  ]
);
export var DataIngestionJobSummaries = list(n0, _DIJSa, 0, () => DataIngestionJobSummary);
export var DatasetSummaries = list(n0, _DSat, 0, () => DatasetSummary);
export var InferenceEventSummaries = list(n0, _IESnf, 0, () => InferenceEventSummary);
export var InferenceExecutionSummaries = list(n0, _IESnfe, 0, () => InferenceExecutionSummary);
export var InferenceSchedulerSummaries = list(n0, _ISSn, 0, () => InferenceSchedulerSummary);
export var LabelGroupSummaries = list(n0, _LGSa, 0, () => LabelGroupSummary);
export var LabelSummaries = list(n0, _LSa, 0, () => LabelSummary);
export var ModelSummaries = list(n0, _MS, 0, () => ModelSummary);
export var ModelVersionSummaries = list(n0, _MVS, 0, () => ModelVersionSummary);
export var RetrainingSchedulerSummaries = list(n0, _RSSe, 0, () => RetrainingSchedulerSummary);
export var SensorStatisticsSummaries = list(n0, _SSS, 0, () => SensorStatisticsSummary);
export var ListDataIngestionJobs = op(
  n0,
  _LDIJ,
  0,
  () => ListDataIngestionJobsRequest,
  () => ListDataIngestionJobsResponse
);
export var ListDatasets = op(
  n0,
  _LD,
  0,
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var ListInferenceEvents = op(
  n0,
  _LIE,
  0,
  () => ListInferenceEventsRequest,
  () => ListInferenceEventsResponse
);
export var ListInferenceExecutions = op(
  n0,
  _LIEi,
  0,
  () => ListInferenceExecutionsRequest,
  () => ListInferenceExecutionsResponse
);
export var ListInferenceSchedulers = op(
  n0,
  _LIS,
  0,
  () => ListInferenceSchedulersRequest,
  () => ListInferenceSchedulersResponse
);
export var ListLabelGroups = op(
  n0,
  _LLG,
  0,
  () => ListLabelGroupsRequest,
  () => ListLabelGroupsResponse
);
export var ListLabels = op(
  n0,
  _LL,
  0,
  () => ListLabelsRequest,
  () => ListLabelsResponse
);
export var ListModels = op(
  n0,
  _LM,
  0,
  () => ListModelsRequest,
  () => ListModelsResponse
);
export var ListModelVersions = op(
  n0,
  _LMV,
  0,
  () => ListModelVersionsRequest,
  () => ListModelVersionsResponse
);
export var ListRetrainingSchedulers = op(
  n0,
  _LRS,
  0,
  () => ListRetrainingSchedulersRequest,
  () => ListRetrainingSchedulersResponse
);
export var ListSensorStatistics = op(
  n0,
  _LSS,
  0,
  () => ListSensorStatisticsRequest,
  () => ListSensorStatisticsResponse
);
