// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _AIDET,
  _AIDST,
  _AMV,
  _AMVA,
  _APR,
  _APRR,
  _ASC,
  _B,
  _CA,
  _CIS,
  _CISR,
  _CISRr,
  _CM,
  _CMR,
  _CMRr,
  _CT,
  _DA,
  _DDe,
  _DDIJ,
  _DDIJR,
  _DDIJRe,
  _DDOIM,
  _DDRe,
  _DDRes,
  _DET,
  _DF,
  _DIC,
  _DISe,
  _DISRe,
  _DISRes,
  _DMe,
  _DMRe,
  _DMRes,
  _DMV,
  _DMVR,
  _DMVRe,
  _DN,
  _DOC,
  _DPPC,
  _DQS,
  _DS,
  _DST,
  _DT,
  _DUF,
  _EDET,
  _EDST,
  _FR,
  _IDIS,
  _IDSIB,
  _IDSn,
  _IFS,
  _IIC,
  _IJET,
  _IJST,
  _IMV,
  _IMVR,
  _IMVRm,
  _INOF,
  _ISA,
  _ISD,
  _ISDn,
  _ISN,
  _JI,
  _LGN,
  _LIC,
  _LIR,
  _LODF,
  _LSIC,
  _LSRADID,
  _LSRFR,
  _LSRMV,
  _LSRS,
  _LSRST,
  _LUA,
  _LUT,
  _MA,
  _MCSD,
  _MDOC,
  _MDRO,
  _MM,
  _MN,
  _MQ,
  _MSD,
  _mT,
  _MV,
  _MVA,
  _MVAA,
  _NSRSD,
  _OC,
  _PAMV,
  _PAMVA,
  _PMM,
  _PMVAA,
  _Pr,
  _RA,
  _RADID,
  _RSS,
  _S,
  _Sc,
  _SD,
  _SDA,
  _SDIJ,
  _SDIJR,
  _SDIJRt,
  _SIC,
  _SJMM,
  _SMVA,
  _SSKKI,
  _STo,
  _SWSDR,
  _T,
  _TDET,
  _TDST,
  _TEET,
  _TEST,
  _TNODT,
  _TNOF,
  _TNOIV,
  _TNOMV,
  _TNOUT,
  _TSR,
  _UA,
  _UIS,
  _UISR,
  _UM,
  _UMR,
  _UT,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_10_Create";
import { DatasetSchema } from "./schemas_11_Create";
import { S3Object } from "./schemas_13_Describe";
import { IngestionInputConfiguration } from "./schemas_15_Data";
import { ModelDiagnosticsOutputConfiguration } from "./schemas_17_Model";
import { InferenceInputConfiguration, InferenceOutputConfiguration } from "./schemas_19_Inference";
import { SynthesizedJsonInlineDataSchema } from "./schemas_22_Describe";

/* eslint no-var: 0 */

export var SynthesizedJsonModelMetrics = sim(n0, _SJMM, 0, {
  [_mT]: _a,
});
export var CreateInferenceSchedulerRequest = struct(
  n0,
  _CISR,
  0,
  [_MN, _ISN, _DDOIM, _DUF, _DIC, _DOC, _RA, _SSKKI, _CT, _T],
  [0, 0, 1, 0, () => InferenceInputConfiguration, () => InferenceOutputConfiguration, 0, 0, [0, 4], () => TagList]
);
export var CreateInferenceSchedulerResponse = struct(n0, _CISRr, 0, [_ISA, _ISN, _S, _MQ], [0, 0, 0, 0]);
export var CreateModelRequest = struct(
  n0,
  _CMR,
  0,
  [_MN, _DN, _DS, _LIC, _CT, _TDST, _TDET, _EDST, _EDET, _RA, _DPPC, _SSKKI, _T, _OC, _MDOC],
  [
    0,
    0,
    [() => DatasetSchema, 0],
    () => LabelsInputConfiguration,
    [0, 4],
    4,
    4,
    4,
    4,
    0,
    () => DataPreProcessingConfiguration,
    0,
    () => TagList,
    0,
    () => ModelDiagnosticsOutputConfiguration,
  ]
);
export var CreateModelResponse = struct(n0, _CMRr, 0, [_MA, _S], [0, 0]);
export var DataPreProcessingConfiguration = struct(n0, _DPPC, 0, [_TSR], [0]);
export var DataQualitySummary = struct(
  n0,
  _DQS,
  0,
  [_ISD, _MSD, _ISDn, _UT, _DT],
  [
    () => InsufficientSensorData,
    () => MissingSensorData,
    () => InvalidSensorData,
    () => UnsupportedTimestamps,
    () => DuplicateTimestamps,
  ]
);
export var DescribeDataIngestionJobRequest = struct(n0, _DDIJR, 0, [_JI], [0]);
export var DescribeDataIngestionJobResponse = struct(
  n0,
  _DDIJRe,
  0,
  [_JI, _DA, _IIC, _RA, _CA, _S, _FR, _DQS, _IFS, _SD, _IDSn, _DST, _DET, _SDA],
  [
    0,
    0,
    () => IngestionInputConfiguration,
    0,
    4,
    0,
    0,
    () => DataQualitySummary,
    () => IngestedFilesSummary,
    0,
    1,
    4,
    4,
    0,
  ]
);
export var DescribeDatasetRequest = struct(n0, _DDRe, 0, [_DN], [0]);
export var DescribeDatasetResponse = struct(
  n0,
  _DDRes,
  0,
  [_DN, _DA, _CA, _LUA, _S, _Sc, _SSKKI, _IIC, _DQS, _IFS, _RA, _DST, _DET, _SDA],
  [
    0,
    0,
    4,
    4,
    0,
    [() => SynthesizedJsonInlineDataSchema, 0],
    0,
    () => IngestionInputConfiguration,
    () => DataQualitySummary,
    () => IngestedFilesSummary,
    0,
    4,
    4,
    0,
  ]
);
export var DescribeInferenceSchedulerRequest = struct(n0, _DISRe, 0, [_ISN], [0]);
export var DescribeInferenceSchedulerResponse = struct(
  n0,
  _DISRes,
  0,
  [_MA, _MN, _ISN, _ISA, _S, _DDOIM, _DUF, _CA, _UA, _DIC, _DOC, _RA, _SSKKI, _LIR],
  [0, 0, 0, 0, 0, 1, 0, 4, 4, () => InferenceInputConfiguration, () => InferenceOutputConfiguration, 0, 0, 0]
);
export var DescribeModelRequest = struct(n0, _DMRe, 0, [_MN], [0]);
export var DescribeModelResponse = struct(
  n0,
  _DMRes,
  0,
  [
    _MN,
    _MA,
    _DN,
    _DA,
    _Sc,
    _LIC,
    _TDST,
    _TDET,
    _EDST,
    _EDET,
    _RA,
    _DPPC,
    _S,
    _TEST,
    _TEET,
    _FR,
    _MM,
    _LUT,
    _CA,
    _SSKKI,
    _OC,
    _SMVA,
    _IJST,
    _IJET,
    _AMV,
    _AMVA,
    _MVAA,
    _PAMV,
    _PAMVA,
    _PMVAA,
    _PMM,
    _LSRFR,
    _LSRS,
    _LSRMV,
    _LSRST,
    _LSRADID,
    _NSRSD,
    _AIDST,
    _AIDET,
    _RSS,
    _MDOC,
    _MQ,
  ],
  [
    0,
    0,
    0,
    0,
    [() => SynthesizedJsonInlineDataSchema, 0],
    () => LabelsInputConfiguration,
    4,
    4,
    4,
    4,
    0,
    () => DataPreProcessingConfiguration,
    0,
    4,
    4,
    0,
    [() => SynthesizedJsonModelMetrics, 0],
    4,
    4,
    0,
    0,
    0,
    4,
    4,
    1,
    0,
    4,
    1,
    0,
    4,
    [() => SynthesizedJsonModelMetrics, 0],
    0,
    0,
    1,
    4,
    1,
    4,
    4,
    4,
    0,
    () => ModelDiagnosticsOutputConfiguration,
    0,
  ]
);
export var DescribeModelVersionRequest = struct(n0, _DMVR, 0, [_MN, _MV], [0, 1]);
export var DescribeModelVersionResponse = struct(
  n0,
  _DMVRe,
  0,
  [
    _MN,
    _MA,
    _MV,
    _MVA,
    _S,
    _STo,
    _DN,
    _DA,
    _Sc,
    _LIC,
    _TDST,
    _TDET,
    _EDST,
    _EDET,
    _RA,
    _DPPC,
    _TEST,
    _TEET,
    _FR,
    _MM,
    _LUT,
    _CA,
    _SSKKI,
    _OC,
    _SMVA,
    _IJST,
    _IJET,
    _IDSIB,
    _PMM,
    _RADID,
    _APR,
    _APRR,
    _MDOC,
    _MDRO,
    _MQ,
  ],
  [
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    () => LabelsInputConfiguration,
    4,
    4,
    4,
    4,
    0,
    () => DataPreProcessingConfiguration,
    4,
    4,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    4,
    4,
    1,
    0,
    1,
    0,
    0,
    () => ModelDiagnosticsOutputConfiguration,
    () => S3Object,
    0,
  ]
);
export var DuplicateTimestamps = struct(n0, _DT, 0, [_TNODT], [1]);
export var ImportModelVersionRequest = struct(
  n0,
  _IMVR,
  0,
  [_SMVA, _MN, _DN, _LIC, _CT, _RA, _SSKKI, _T, _IDIS],
  [0, 0, 0, () => LabelsInputConfiguration, [0, 4], 0, 0, () => TagList, 0]
);
export var ImportModelVersionResponse = struct(n0, _IMVRm, 0, [_MN, _MA, _MVA, _MV, _S], [0, 0, 0, 1, 0]);
export var IngestedFilesSummary = struct(n0, _IFS, 0, [_TNOF, _INOF, _DF], [1, 1, () => ListOfDiscardedFiles]);
export var InsufficientSensorData = struct(
  n0,
  _ISD,
  0,
  [_MCSD, _SWSDR],
  [() => MissingCompleteSensorData, () => SensorsWithShortDateRange]
);
export var InvalidSensorData = struct(n0, _ISDn, 0, [_ASC, _TNOIV], [1, 1]);
export var LabelsInputConfiguration = struct(n0, _LIC, 0, [_SIC, _LGN], [() => LabelsS3InputConfiguration, 0]);
export var LabelsS3InputConfiguration = struct(n0, _LSIC, 0, [_B, _Pr], [0, 0]);
export var MissingCompleteSensorData = struct(n0, _MCSD, 0, [_ASC], [1]);
export var MissingSensorData = struct(n0, _MSD, 0, [_ASC, _TNOMV], [1, 1]);
export var SensorsWithShortDateRange = struct(n0, _SWSDR, 0, [_ASC], [1]);
export var StartDataIngestionJobRequest = struct(
  n0,
  _SDIJR,
  0,
  [_DN, _IIC, _RA, _CT],
  [0, () => IngestionInputConfiguration, 0, [0, 4]]
);
export var StartDataIngestionJobResponse = struct(n0, _SDIJRt, 0, [_JI, _S], [0, 0]);
export var UnsupportedTimestamps = struct(n0, _UT, 0, [_TNOUT], [1]);
export var UpdateInferenceSchedulerRequest = struct(
  n0,
  _UISR,
  0,
  [_ISN, _DDOIM, _DUF, _DIC, _DOC, _RA],
  [0, 1, 0, () => InferenceInputConfiguration, () => InferenceOutputConfiguration, 0]
);
export var UpdateModelRequest = struct(
  n0,
  _UMR,
  0,
  [_MN, _LIC, _RA, _MDOC],
  [0, () => LabelsInputConfiguration, 0, () => ModelDiagnosticsOutputConfiguration]
);
export var ListOfDiscardedFiles = list(n0, _LODF, 0, () => S3Object);
export var CreateInferenceScheduler = op(
  n0,
  _CIS,
  0,
  () => CreateInferenceSchedulerRequest,
  () => CreateInferenceSchedulerResponse
);
export var CreateModel = op(
  n0,
  _CM,
  0,
  () => CreateModelRequest,
  () => CreateModelResponse
);
export var DescribeDataIngestionJob = op(
  n0,
  _DDIJ,
  0,
  () => DescribeDataIngestionJobRequest,
  () => DescribeDataIngestionJobResponse
);
export var DescribeDataset = op(
  n0,
  _DDe,
  0,
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeInferenceScheduler = op(
  n0,
  _DISe,
  0,
  () => DescribeInferenceSchedulerRequest,
  () => DescribeInferenceSchedulerResponse
);
export var DescribeModel = op(
  n0,
  _DMe,
  0,
  () => DescribeModelRequest,
  () => DescribeModelResponse
);
export var DescribeModelVersion = op(
  n0,
  _DMV,
  0,
  () => DescribeModelVersionRequest,
  () => DescribeModelVersionResponse
);
export var ImportModelVersion = op(
  n0,
  _IMV,
  0,
  () => ImportModelVersionRequest,
  () => ImportModelVersionResponse
);
export var StartDataIngestionJob = op(
  n0,
  _SDIJ,
  0,
  () => StartDataIngestionJobRequest,
  () => StartDataIngestionJobResponse
);
export var UpdateInferenceScheduler = op(
  n0,
  _UIS,
  0,
  () => UpdateInferenceSchedulerRequest,
  () => Unit
);
export var UpdateModel = op(
  n0,
  _UM,
  0,
  () => UpdateModelRequest,
  () => Unit
);
