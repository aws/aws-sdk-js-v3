// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ALn,
  _An,
  _C,
  _CA,
  _CB,
  _CET,
  _CO,
  _COo,
  _CR,
  _D,
  _DQRD,
  _DQRDL,
  _DQRERD,
  _DQRERF,
  _DQRERL,
  _DQRFC,
  _DQRFCa,
  _DQRLa,
  _DQRLD,
  _DQRRRD,
  _DQRRRF,
  _DQRRRL,
  _DSa,
  _DVo,
  _EL,
  _EMval,
  _ES,
  _ETxe,
  _Fi,
  _GMLTe,
  _GMLTRet,
  _GMLTRetas,
  _GMLTRetr,
  _GMLTRRet,
  _GMLTRReta,
  _GV,
  _IAnc,
  _IRT,
  _JN,
  _JRI,
  _LCab,
  _LCET,
  _LCETR,
  _LCETRi,
  _LDQR,
  _LDQRER,
  _LDQRERR,
  _LDQRERRi,
  _LDQRi,
  _LDQRR,
  _LDQRRi,
  _LDQRRis,
  _LDQRRist,
  _LDQRRR,
  _LDQRRRR,
  _LDQRRRRi,
  _LDQS,
  _LDQSA,
  _LDQSAR,
  _LDQSARi,
  _LDQSR,
  _LDQSRi,
  _LGN,
  _LMA,
  _LMB,
  _LMLT,
  _LMLTR,
  _LMLTRi,
  _LMO,
  _MCax,
  _MLT,
  _MR,
  _MRax,
  _N,
  _NOW,
  _NTe,
  _Par,
  _PI,
  _Pr,
  _RAeco,
  _RBec,
  _RCu,
  _RD,
  _Re,
  _RIes,
  _RIu,
  _RIun,
  _ROe,
  _Rol,
  _RRI,
  _Rul,
  _Runs,
  _S,
  _SAt,
  _SAta,
  _SB,
  _SDo,
  _SI,
  _SNta,
  _SO,
  _Sor,
  _SPM,
  _SPta,
  _SRO,
  _SSL,
  _SSt,
  _St,
  _Stati,
  _T,
  _Tag,
  _TE,
  _TF,
  _TFC,
  _TIA,
  _TIr,
  _TIra,
  _TLr,
  _TR,
  _TRa,
  _Tra,
  _TRFC,
  _TRI,
  _TRL,
  _TRSC,
  _TRT,
  _TSC,
  _TT,
  _TTr,
  _V,
  _WT,
  n0,
} from "./schemas_0";
import {
  EvaluationMetrics,
  GlueTables,
  TransformEncryption,
  TransformParameters,
  TransformSchema,
} from "./schemas_18_Get";
import { DataSource } from "./schemas_21_Quality";
import { CustomEntityTypes } from "./schemas_22_Entity";
import { TaskRunProperties } from "./schemas_47_Get";
import { DataQualityTargetTable } from "./schemas_119_DataQuality";

/* eslint no-var: 0 */

export var DataQualityResultDescription = struct(
  n0,
  _DQRD,
  0,
  [_RIes, _DSa, _JN, _JRI, _SO],
  [0, () => DataSource, 0, 0, 4]
);
export var DataQualityResultFilterCriteria = struct(
  n0,
  _DQRFC,
  0,
  [_DSa, _JN, _JRI, _SAt, _SB],
  [() => DataSource, 0, 0, 4, 4]
);
export var DataQualityRuleRecommendationRunDescription = struct(
  n0,
  _DQRRRD,
  0,
  [_RIu, _St, _SO, _DSa],
  [0, 0, 4, () => DataSource]
);
export var DataQualityRuleRecommendationRunFilter = struct(n0, _DQRRRF, 0, [_DSa, _SB, _SAt], [() => DataSource, 4, 4]);
export var DataQualityRulesetEvaluationRunDescription = struct(
  n0,
  _DQRERD,
  0,
  [_RIu, _St, _SO, _DSa],
  [0, 0, 4, () => DataSource]
);
export var DataQualityRulesetEvaluationRunFilter = struct(n0, _DQRERF, 0, [_DSa, _SB, _SAt], [() => DataSource, 4, 4]);
export var DataQualityRulesetFilterCriteria = struct(
  n0,
  _DQRFCa,
  0,
  [_N, _D, _CB, _CA, _LMB, _LMA, _TT],
  [0, 0, 4, 4, 4, 4, () => DataQualityTargetTable]
);
export var DataQualityRulesetListDetails = struct(
  n0,
  _DQRLD,
  0,
  [_N, _D, _CO, _LMO, _TT, _RRI, _RCu],
  [0, 0, 4, 4, () => DataQualityTargetTable, 0, 1]
);
export var GetMLTaskRunsRequest = struct(
  n0,
  _GMLTRRet,
  0,
  [_TIr, _NTe, _MRax, _Fi, _Sor],
  [0, 0, 1, () => TaskRunFilterCriteria, () => TaskRunSortCriteria]
);
export var GetMLTaskRunsResponse = struct(n0, _GMLTRReta, 0, [_TR, _NTe], [() => TaskRunList, 0]);
export var GetMLTransformsRequest = struct(
  n0,
  _GMLTRet,
  0,
  [_NTe, _MRax, _Fi, _Sor],
  [0, 1, () => TransformFilterCriteria, () => TransformSortCriteria]
);
export var GetMLTransformsResponse = struct(n0, _GMLTRetr, 0, [_Tra, _NTe], [() => TransformList, 0]);
export var ListCustomEntityTypesRequest = struct(n0, _LCETR, 0, [_NTe, _MRax, _Tag], [0, 1, 128 | 0]);
export var ListCustomEntityTypesResponse = struct(n0, _LCETRi, 0, [_CET, _NTe], [() => CustomEntityTypes, 0]);
export var ListDataQualityResultsRequest = struct(
  n0,
  _LDQRR,
  0,
  [_Fi, _NTe, _MRax],
  [() => DataQualityResultFilterCriteria, 0, 1]
);
export var ListDataQualityResultsResponse = struct(
  n0,
  _LDQRRi,
  0,
  [_Re, _NTe],
  [() => DataQualityResultDescriptionList, 0]
);
export var ListDataQualityRuleRecommendationRunsRequest = struct(
  n0,
  _LDQRRRR,
  0,
  [_Fi, _NTe, _MRax],
  [() => DataQualityRuleRecommendationRunFilter, 0, 1]
);
export var ListDataQualityRuleRecommendationRunsResponse = struct(
  n0,
  _LDQRRRRi,
  0,
  [_Runs, _NTe],
  [() => DataQualityRuleRecommendationRunList, 0]
);
export var ListDataQualityRulesetEvaluationRunsRequest = struct(
  n0,
  _LDQRERR,
  0,
  [_Fi, _NTe, _MRax],
  [() => DataQualityRulesetEvaluationRunFilter, 0, 1]
);
export var ListDataQualityRulesetEvaluationRunsResponse = struct(
  n0,
  _LDQRERRi,
  0,
  [_Runs, _NTe],
  [() => DataQualityRulesetEvaluationRunList, 0]
);
export var ListDataQualityRulesetsRequest = struct(
  n0,
  _LDQRRis,
  0,
  [_NTe, _MRax, _Fi, _Tag],
  [0, 1, () => DataQualityRulesetFilterCriteria, 128 | 0]
);
export var ListDataQualityRulesetsResponse = struct(n0, _LDQRRist, 0, [_Rul, _NTe], [() => DataQualityRulesetList, 0]);
export var ListDataQualityStatisticAnnotationsRequest = struct(
  n0,
  _LDQSAR,
  0,
  [_SI, _PI, _TF, _MRax, _NTe],
  [0, 0, () => TimestampFilter, 1, 0]
);
export var ListDataQualityStatisticAnnotationsResponse = struct(
  n0,
  _LDQSARi,
  0,
  [_An, _NTe],
  [() => AnnotationList, 0]
);
export var ListDataQualityStatisticsRequest = struct(
  n0,
  _LDQSR,
  0,
  [_SI, _PI, _TF, _MRax, _NTe],
  [0, 0, () => TimestampFilter, 1, 0]
);
export var ListDataQualityStatisticsResponse = struct(
  n0,
  _LDQSRi,
  0,
  [_Stati, _NTe],
  [[() => StatisticSummaryList, 0], 0]
);
export var ListMLTransformsRequest = struct(
  n0,
  _LMLTR,
  0,
  [_NTe, _MRax, _Fi, _Sor, _Tag],
  [0, 1, () => TransformFilterCriteria, () => TransformSortCriteria, 128 | 0]
);
export var ListMLTransformsResponse = struct(n0, _LMLTRi, 0, [_TIra, _NTe], [64 | 0, 0]);
export var MLTransform = struct(
  n0,
  _MLT,
  0,
  [_TIr, _N, _D, _St, _CO, _LMO, _IRT, _Par, _EMval, _LCab, _S, _Rol, _GV, _MCax, _WT, _NOW, _T, _MR, _TE],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    () => GlueTables,
    () => TransformParameters,
    () => EvaluationMetrics,
    1,
    () => TransformSchema,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    () => TransformEncryption,
  ]
);
export var RunIdentifier = struct(n0, _RIun, 0, [_RIu, _JRI], [0, 0]);
export var StatisticAnnotation = struct(
  n0,
  _SAta,
  0,
  [_PI, _SI, _SRO, _IAnc],
  [0, 0, 4, () => TimestampedInclusionAnnotation]
);
export var StatisticSummary = struct(
  n0,
  _SSt,
  0,
  [_SI, _PI, _RIun, _SNta, _DVo, _EL, _CR, _RD, _SPta, _ROe, _IAnc],
  [
    0,
    0,
    () => RunIdentifier,
    0,
    1,
    0,
    64 | 0,
    64 | 0,
    [() => StatisticPropertiesMap, 0],
    4,
    () => TimestampedInclusionAnnotation,
  ]
);
export var TaskRun = struct(
  n0,
  _TRa,
  0,
  [_TIr, _TRI, _St, _LGN, _Pr, _ES, _SO, _LMO, _COo, _ETxe],
  [0, 0, 0, 0, () => TaskRunProperties, 0, 4, 4, 4, 1]
);
export var TaskRunFilterCriteria = struct(n0, _TRFC, 0, [_TRT, _St, _SB, _SAt], [0, 0, 4, 4]);
export var TaskRunSortCriteria = struct(n0, _TRSC, 0, [_C, _SDo], [0, 0]);
export var TimestampedInclusionAnnotation = struct(n0, _TIA, 0, [_V, _LMO], [0, 4]);
export var TimestampFilter = struct(n0, _TF, 0, [_RBec, _RAeco], [4, 4]);
export var TransformFilterCriteria = struct(
  n0,
  _TFC,
  0,
  [_N, _TTr, _St, _GV, _CB, _CA, _LMB, _LMA, _S],
  [0, 0, 0, 0, 4, 4, 4, 4, () => TransformSchema]
);
export var TransformSortCriteria = struct(n0, _TSC, 0, [_C, _SDo], [0, 0]);
export var AnnotationList = list(n0, _ALn, 0, () => StatisticAnnotation);
export var DataQualityResultDescriptionList = list(n0, _DQRDL, 0, () => DataQualityResultDescription);
export var DataQualityRuleRecommendationRunList = list(
  n0,
  _DQRRRL,
  0,
  () => DataQualityRuleRecommendationRunDescription
);
export var DataQualityRulesetEvaluationRunList = list(n0, _DQRERL, 0, () => DataQualityRulesetEvaluationRunDescription);
export var DataQualityRulesetList = list(n0, _DQRLa, 0, () => DataQualityRulesetListDetails);
export var ReferenceDatasetsList = 64 | 0;

export var StatisticSummaryList = list(n0, _SSL, 0, [() => StatisticSummary, 0]);
export var TaskRunList = list(n0, _TRL, 0, () => TaskRun);
export var TransformIdList = 64 | 0;

export var TransformList = list(n0, _TLr, 0, () => MLTransform);
export var StatisticPropertiesMap = map(n0, _SPM, 8, 0, 0);
export var GetMLTaskRuns = op(
  n0,
  _GMLTRetas,
  0,
  () => GetMLTaskRunsRequest,
  () => GetMLTaskRunsResponse
);
export var GetMLTransforms = op(
  n0,
  _GMLTe,
  0,
  () => GetMLTransformsRequest,
  () => GetMLTransformsResponse
);
export var ListCustomEntityTypes = op(
  n0,
  _LCET,
  0,
  () => ListCustomEntityTypesRequest,
  () => ListCustomEntityTypesResponse
);
export var ListDataQualityResults = op(
  n0,
  _LDQR,
  0,
  () => ListDataQualityResultsRequest,
  () => ListDataQualityResultsResponse
);
export var ListDataQualityRuleRecommendationRuns = op(
  n0,
  _LDQRRR,
  0,
  () => ListDataQualityRuleRecommendationRunsRequest,
  () => ListDataQualityRuleRecommendationRunsResponse
);
export var ListDataQualityRulesetEvaluationRuns = op(
  n0,
  _LDQRER,
  0,
  () => ListDataQualityRulesetEvaluationRunsRequest,
  () => ListDataQualityRulesetEvaluationRunsResponse
);
export var ListDataQualityRulesets = op(
  n0,
  _LDQRi,
  0,
  () => ListDataQualityRulesetsRequest,
  () => ListDataQualityRulesetsResponse
);
export var ListDataQualityStatisticAnnotations = op(
  n0,
  _LDQSA,
  0,
  () => ListDataQualityStatisticAnnotationsRequest,
  () => ListDataQualityStatisticAnnotationsResponse
);
export var ListDataQualityStatistics = op(
  n0,
  _LDQS,
  0,
  () => ListDataQualityStatisticsRequest,
  () => ListDataQualityStatisticsResponse
);
export var ListMLTransforms = op(
  n0,
  _LMLT,
  0,
  () => ListMLTransformsRequest,
  () => ListMLTransformsResponse
);
