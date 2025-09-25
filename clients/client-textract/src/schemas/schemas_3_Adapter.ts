// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  HumanLoopQuotaExceededException as __HumanLoopQuotaExceededException,
} from "../models/index";
import {
  _A,
  _a,
  _AC,
  _ACT,
  _AD,
  _Ad,
  _ADMV,
  _ADR,
  _ADRn,
  _AI,
  _AL,
  _AN,
  _AO,
  _AU,
  _AV,
  _AVd,
  _AVDC,
  _AVEM,
  _AVEMd,
  _AVL,
  _AVO,
  _B,
  _BCT,
  _Bl,
  _C,
  _c,
  _CA,
  _CAR,
  _CARr,
  _CAV,
  _CAVR,
  _CAVRr,
  _CC,
  _CE,
  _CRT,
  _CT,
  _D,
  _DA,
  _DAe,
  _DAR,
  _DARe,
  _DAV,
  _DAVR,
  _DAVRe,
  _DC,
  _De,
  _DL,
  _DM,
  _e,
  _EM,
  _EMv,
  _FDA,
  _FS,
  _FT,
  _FTe,
  _GA,
  _GAR,
  _GARe,
  _GAV,
  _GAVR,
  _GAVRe,
  _hE,
  _HLA,
  _HLACER,
  _HLAO,
  _HLAR,
  _HLC,
  _HLDA,
  _HLN,
  _HLQEE,
  _JI,
  _JT,
  _KMSKI,
  _LA,
  _LAR,
  _LARi,
  _LAV,
  _LAVR,
  _LAVRi,
  _M,
  _MR,
  _MSO,
  _mT,
  _NC,
  _NT,
  _OC,
  _P,
  _Pr,
  _QC,
  _QCu,
  _Qu,
  _Re,
  _RT,
  _S,
  _SC,
  _SDA,
  _SDAR,
  _SDARt,
  _SJHLACER,
  _SM,
  _Ta,
  _UA,
  _UAR,
  _UARp,
  _V,
  n0,
} from "./schemas_0";
import { Document, DocumentLocation, NotificationChannel, OutputConfig, S3Object } from "./schemas_2_Start";
import { BlockList, DocumentMetadata } from "./schemas_4_Get";
import { Query } from "./schemas_7_Document";

/* eslint no-var: 0 */

export var SynthesizedJsonHumanLoopActivationConditionsEvaluationResults = sim(n0, _SJHLACER, 0, {
  [_mT]: _a,
});
export var Adapter = struct(n0, _A, 0, [_AI, _P, _V], [0, 64 | 0, 0]);
export var AdapterOverview = struct(n0, _AO, 0, [_AI, _AN, _CT, _FT], [0, 0, 4, 64 | 0]);
export var AdaptersConfig = struct(n0, _AC, 0, [_Ad], [() => Adapters]);
export var AdapterVersionDatasetConfig = struct(n0, _AVDC, 0, [_MSO], [() => S3Object]);
export var AdapterVersionEvaluationMetric = struct(
  n0,
  _AVEM,
  0,
  [_B, _AV, _FTe],
  [() => EvaluationMetric, () => EvaluationMetric, 0]
);
export var AdapterVersionOverview = struct(n0, _AVO, 0, [_AI, _AV, _CT, _FT, _S, _SM], [0, 0, 4, 64 | 0, 0, 0]);
export var AnalyzeDocumentRequest = struct(
  n0,
  _ADR,
  0,
  [_D, _FT, _HLC, _QC, _AC],
  [() => Document, 64 | 0, () => HumanLoopConfig, () => QueriesConfig, () => AdaptersConfig]
);
export var AnalyzeDocumentResponse = struct(
  n0,
  _ADRn,
  0,
  [_DM, _Bl, _HLAO, _ADMV],
  [() => DocumentMetadata, () => BlockList, [() => HumanLoopActivationOutput, 0], 0]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __ConflictException
);
export var CreateAdapterRequest = struct(
  n0,
  _CAR,
  0,
  [_AN, _CRT, _De, _FT, _AU, _Ta],
  [0, [0, 4], 0, 64 | 0, 0, 128 | 0]
);
export var CreateAdapterResponse = struct(n0, _CARr, 0, [_AI], [0]);
export var CreateAdapterVersionRequest = struct(
  n0,
  _CAVR,
  0,
  [_AI, _CRT, _DC, _KMSKI, _OC, _Ta],
  [0, [0, 4], () => AdapterVersionDatasetConfig, 0, () => OutputConfig, 128 | 0]
);
export var CreateAdapterVersionResponse = struct(n0, _CAVRr, 0, [_AI, _AV], [0, 0]);
export var DeleteAdapterRequest = struct(n0, _DAR, 0, [_AI], [0]);
export var DeleteAdapterResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAdapterVersionRequest = struct(n0, _DAVR, 0, [_AI, _AV], [0, 0]);
export var DeleteAdapterVersionResponse = struct(n0, _DAVRe, 0, [], []);
export var EvaluationMetric = struct(n0, _EM, 0, [_FS, _Pr, _Re], [1, 1, 1]);
export var GetAdapterRequest = struct(n0, _GAR, 0, [_AI], [0]);
export var GetAdapterResponse = struct(
  n0,
  _GARe,
  0,
  [_AI, _AN, _CT, _De, _FT, _AU, _Ta],
  [0, 0, 4, 0, 64 | 0, 0, 128 | 0]
);
export var GetAdapterVersionRequest = struct(n0, _GAVR, 0, [_AI, _AV], [0, 0]);
export var GetAdapterVersionResponse = struct(
  n0,
  _GAVRe,
  0,
  [_AI, _AV, _CT, _FT, _S, _SM, _DC, _KMSKI, _OC, _EMv, _Ta],
  [
    0,
    0,
    4,
    64 | 0,
    0,
    0,
    () => AdapterVersionDatasetConfig,
    0,
    () => OutputConfig,
    () => AdapterVersionEvaluationMetrics,
    128 | 0,
  ]
);
export var HumanLoopActivationOutput = struct(
  n0,
  _HLAO,
  0,
  [_HLA, _HLAR, _HLACER],
  [0, 64 | 0, [() => SynthesizedJsonHumanLoopActivationConditionsEvaluationResults, 0]]
);
export var HumanLoopConfig = struct(n0, _HLC, 0, [_HLN, _FDA, _DA], [0, 0, () => HumanLoopDataAttributes]);
export var HumanLoopDataAttributes = struct(n0, _HLDA, 0, [_CC], [64 | 0]);
export var HumanLoopQuotaExceededException = error(
  n0,
  _HLQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_RT, _QCu, _SC, _M, _C],
  [0, 0, 0, 0, 0],

  __HumanLoopQuotaExceededException
);
export var ListAdaptersRequest = struct(n0, _LAR, 0, [_ACT, _BCT, _MR, _NT], [4, 4, 1, 0]);
export var ListAdaptersResponse = struct(n0, _LARi, 0, [_Ad, _NT], [() => AdapterList, 0]);
export var ListAdapterVersionsRequest = struct(n0, _LAVR, 0, [_AI, _ACT, _BCT, _MR, _NT], [0, 4, 4, 1, 0]);
export var ListAdapterVersionsResponse = struct(n0, _LAVRi, 0, [_AVd, _NT], [() => AdapterVersionList, 0]);
export var QueriesConfig = struct(n0, _QC, 0, [_Qu], [() => Queries]);
export var StartDocumentAnalysisRequest = struct(
  n0,
  _SDAR,
  0,
  [_DL, _FT, _CRT, _JT, _NC, _OC, _KMSKI, _QC, _AC],
  [
    () => DocumentLocation,
    64 | 0,
    0,
    0,
    () => NotificationChannel,
    () => OutputConfig,
    0,
    () => QueriesConfig,
    () => AdaptersConfig,
  ]
);
export var StartDocumentAnalysisResponse = struct(n0, _SDARt, 0, [_JI], [0]);
export var UpdateAdapterRequest = struct(n0, _UAR, 0, [_AI, _De, _AN, _AU], [0, 0, 0, 0]);
export var UpdateAdapterResponse = struct(n0, _UARp, 0, [_AI, _AN, _CT, _De, _FT, _AU], [0, 0, 4, 0, 64 | 0, 0]);
export var AdapterList = list(n0, _AL, 0, () => AdapterOverview);
export var AdapterPages = 64 | 0;

export var Adapters = list(n0, _Ad, 0, () => Adapter);
export var AdapterVersionEvaluationMetrics = list(n0, _AVEMd, 0, () => AdapterVersionEvaluationMetric);
export var AdapterVersionList = list(n0, _AVL, 0, () => AdapterVersionOverview);
export var ContentClassifiers = 64 | 0;

export var FeatureTypes = 64 | 0;

export var HumanLoopActivationReasons = 64 | 0;

export var Queries = list(n0, _Qu, 0, () => Query);
export var AnalyzeDocument = op(
  n0,
  _AD,
  0,
  () => AnalyzeDocumentRequest,
  () => AnalyzeDocumentResponse
);
export var CreateAdapter = op(
  n0,
  _CA,
  2,
  () => CreateAdapterRequest,
  () => CreateAdapterResponse
);
export var CreateAdapterVersion = op(
  n0,
  _CAV,
  2,
  () => CreateAdapterVersionRequest,
  () => CreateAdapterVersionResponse
);
export var DeleteAdapter = op(
  n0,
  _DAe,
  2,
  () => DeleteAdapterRequest,
  () => DeleteAdapterResponse
);
export var DeleteAdapterVersion = op(
  n0,
  _DAV,
  2,
  () => DeleteAdapterVersionRequest,
  () => DeleteAdapterVersionResponse
);
export var GetAdapter = op(
  n0,
  _GA,
  0,
  () => GetAdapterRequest,
  () => GetAdapterResponse
);
export var GetAdapterVersion = op(
  n0,
  _GAV,
  0,
  () => GetAdapterVersionRequest,
  () => GetAdapterVersionResponse
);
export var ListAdapters = op(
  n0,
  _LA,
  0,
  () => ListAdaptersRequest,
  () => ListAdaptersResponse
);
export var ListAdapterVersions = op(
  n0,
  _LAV,
  0,
  () => ListAdapterVersionsRequest,
  () => ListAdapterVersionsResponse
);
export var StartDocumentAnalysis = op(
  n0,
  _SDA,
  0,
  () => StartDocumentAnalysisRequest,
  () => StartDocumentAnalysisResponse
);
export var UpdateAdapter = op(
  n0,
  _UA,
  0,
  () => UpdateAdapterRequest,
  () => UpdateAdapterResponse
);
