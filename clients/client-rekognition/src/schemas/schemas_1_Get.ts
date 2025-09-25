// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AB,
  _AM,
  _AML,
  _As,
  _AU,
  _BB,
  _BMV,
  _BTTIS,
  _CD,
  _Ce,
  _Cel,
  _CMD,
  _CMDo,
  _Co,
  _Con,
  _CR,
  _CRe,
  _CRo,
  _CT,
  _CTr,
  _D,
  _DA,
  _DD,
  _DDes,
  _DDRes,
  _DDResc,
  _DFu,
  _DM,
  _DMa,
  _DMLa,
  _DPe,
  _DPRes,
  _DPResc,
  _DPVe,
  _DPVRes,
  _DPVResc,
  _DSa,
  _DSMPTE,
  _DT,
  _EE,
  _EFN,
  _ER,
  _ETM,
  _ETSMPTE,
  _F,
  _Fa,
  _FC,
  _FDac,
  _FDace,
  _Fe,
  _Fea,
  _FH,
  _FM,
  _For,
  _FRr,
  _FS,
  _FW,
  _GCM,
  _GCMR,
  _GCMRe,
  _GCMRM,
  _GCR,
  _GCRR,
  _GCRRe,
  _GFD,
  _GFDR,
  _GFDRe,
  _GFS,
  _GFSR,
  _GFSRe,
  _GLD,
  _GLDR,
  _GLDRe,
  _GLDRM,
  _GPT,
  _GPTR,
  _GPTRe,
  _GRM,
  _GSD,
  _GSDR,
  _GSDRe,
  _GTD,
  _GTDR,
  _GTDRe,
  _I,
  _In,
  _Ind,
  _JI,
  _JS,
  _JT,
  _KG,
  _KKI,
  _Lab,
  _Labe,
  _LD,
  _LDa,
  _LE,
  _LMV,
  _LUT,
  _MIU,
  _MIUa,
  _ML,
  _MLo,
  _MMV,
  _MR,
  _MS,
  _MVo,
  _N,
  _NOC,
  _NT,
  _O,
  _OC,
  _PA,
  _PD,
  _PDe,
  _PDer,
  _PDers,
  _PDr,
  _Pe,
  _Per,
  _PM,
  _PMe,
  _PNr,
  _PVA,
  _PVD,
  _PVDr,
  _SB,
  _SDe,
  _SDeg,
  _Seg,
  _SFN,
  _SM,
  _SMC,
  _SO,
  _SPVA,
  _SR,
  _SS,
  _SST,
  _St,
  _STI,
  _STIe,
  _STM,
  _STSMPTE,
  _Su,
  _TCS,
  _TDex,
  _TDext,
  _TDR,
  _TDRe,
  _TDRex,
  _TDRext,
  _TE,
  _TET,
  _Ti,
  _TL,
  _TMV,
  _Ty,
  _U,
  _Va,
  _VD,
  _VDa,
  _Vi,
  _VM,
  _VML,
  _VNe,
  BoundingBox,
  n0,
  S3Object,
  Video,
} from "./schemas_0";
import { FaceDetail } from "./schemas_6_Get";
import {
  Assets,
  CustomizationFeatureConfig,
  GroundTruthManifest,
  OutputConfig,
  TestingData,
  TrainingData,
} from "./schemas_7_Project";
import { FaceMatchList } from "./schemas_9_Faces";
import { Label } from "./schemas_12_Label";
import { TextDetection } from "./schemas_17_StreamProcessor";
import { KnownGender } from "./schemas_20_GetCelebrity";
import { ContentTypes, ModerationLabel } from "./schemas_22_Moderation";

/* eslint no-var: 0 */

export var AudioMetadata = struct(n0, _AM, 0, [_Co, _DM, _SR, _NOC], [0, 1, 1, 1]);
export var CelebrityDetail = struct(
  n0,
  _CD,
  0,
  [_U, _N, _I, _Con, _BB, _F, _KG],
  [64 | 0, 0, 0, 1, () => BoundingBox, () => FaceDetail, () => KnownGender]
);
export var CelebrityRecognition = struct(n0, _CR, 0, [_Ti, _Ce], [1, () => CelebrityDetail]);
export var ContentModerationDetection = struct(
  n0,
  _CMD,
  0,
  [_Ti, _ML, _STM, _ETM, _DM, _CT],
  [1, () => ModerationLabel, 1, 1, 1, () => ContentTypes]
);
export var DatasetDescription = struct(
  n0,
  _DD,
  0,
  [_CTr, _LUT, _St, _SM, _SMC, _DSa],
  [4, 4, 0, 0, 0, () => DatasetStats]
);
export var DatasetMetadata = struct(n0, _DMa, 0, [_CTr, _DT, _DA, _St, _SM, _SMC], [4, 0, 0, 0, 0, 0]);
export var DatasetStats = struct(n0, _DSa, 0, [_LE, _TE, _TL, _EE], [1, 1, 1, 1]);
export var DescribeDatasetRequest = struct(n0, _DDRes, 0, [_DA], [0]);
export var DescribeDatasetResponse = struct(n0, _DDResc, 0, [_DD], [() => DatasetDescription]);
export var DescribeProjectsRequest = struct(n0, _DPRes, 0, [_NT, _MR, _PNr, _Fea], [0, 1, 64 | 0, 64 | 0]);
export var DescribeProjectsResponse = struct(n0, _DPResc, 0, [_PD, _NT], [() => ProjectDescriptions, 0]);
export var DescribeProjectVersionsRequest = struct(n0, _DPVRes, 0, [_PA, _VNe, _NT, _MR], [0, 64 | 0, 0, 1]);
export var DescribeProjectVersionsResponse = struct(
  n0,
  _DPVResc,
  0,
  [_PVD, _NT],
  [() => ProjectVersionDescriptions, 0]
);
export var EvaluationResult = struct(n0, _ER, 0, [_FS, _Su], [1, () => Summary]);
export var FaceDetection = struct(n0, _FDac, 0, [_Ti, _F], [1, () => FaceDetail]);
export var GetCelebrityRecognitionRequest = struct(n0, _GCRR, 0, [_JI, _MR, _NT, _SB], [0, 1, 0, 0]);
export var GetCelebrityRecognitionResponse = struct(
  n0,
  _GCRRe,
  0,
  [_JS, _SM, _VM, _NT, _Cel, _JI, _Vi, _JT],
  [0, 0, () => VideoMetadata, 0, () => CelebrityRecognitions, 0, () => Video, 0]
);
export var GetContentModerationRequest = struct(n0, _GCMR, 0, [_JI, _MR, _NT, _SB, _AB], [0, 1, 0, 0, 0]);
export var GetContentModerationRequestMetadata = struct(n0, _GCMRM, 0, [_SB, _AB], [0, 0]);
export var GetContentModerationResponse = struct(
  n0,
  _GCMRe,
  0,
  [_JS, _SM, _VM, _MLo, _NT, _MMV, _JI, _Vi, _JT, _GRM],
  [
    0,
    0,
    () => VideoMetadata,
    () => ContentModerationDetections,
    0,
    0,
    0,
    () => Video,
    0,
    () => GetContentModerationRequestMetadata,
  ]
);
export var GetFaceDetectionRequest = struct(n0, _GFDR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetFaceDetectionResponse = struct(
  n0,
  _GFDRe,
  0,
  [_JS, _SM, _VM, _NT, _Fa, _JI, _Vi, _JT],
  [0, 0, () => VideoMetadata, 0, () => FaceDetections, 0, () => Video, 0]
);
export var GetFaceSearchRequest = struct(n0, _GFSR, 0, [_JI, _MR, _NT, _SB], [0, 1, 0, 0]);
export var GetFaceSearchResponse = struct(
  n0,
  _GFSRe,
  0,
  [_JS, _SM, _NT, _VM, _Pe, _JI, _Vi, _JT],
  [0, 0, 0, () => VideoMetadata, () => PersonMatches, 0, () => Video, 0]
);
export var GetLabelDetectionRequest = struct(n0, _GLDR, 0, [_JI, _MR, _NT, _SB, _AB], [0, 1, 0, 0, 0]);
export var GetLabelDetectionRequestMetadata = struct(n0, _GLDRM, 0, [_SB, _AB], [0, 0]);
export var GetLabelDetectionResponse = struct(
  n0,
  _GLDRe,
  0,
  [_JS, _SM, _VM, _NT, _Lab, _LMV, _JI, _Vi, _JT, _GRM],
  [0, 0, () => VideoMetadata, 0, () => LabelDetections, 0, 0, () => Video, 0, () => GetLabelDetectionRequestMetadata]
);
export var GetPersonTrackingRequest = struct(n0, _GPTR, 0, [_JI, _MR, _NT, _SB], [0, 1, 0, 0]);
export var GetPersonTrackingResponse = struct(
  n0,
  _GPTRe,
  0,
  [_JS, _SM, _VM, _NT, _Pe, _JI, _Vi, _JT],
  [0, 0, () => VideoMetadata, 0, () => PersonDetections, 0, () => Video, 0]
);
export var GetSegmentDetectionRequest = struct(n0, _GSDR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetSegmentDetectionResponse = struct(
  n0,
  _GSDRe,
  0,
  [_JS, _SM, _VM, _AM, _NT, _Seg, _SST, _JI, _Vi, _JT],
  [
    0,
    0,
    () => VideoMetadataList,
    () => AudioMetadataList,
    0,
    () => SegmentDetections,
    () => SegmentTypesInfo,
    0,
    () => Video,
    0,
  ]
);
export var GetTextDetectionRequest = struct(n0, _GTDR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetTextDetectionResponse = struct(
  n0,
  _GTDRe,
  0,
  [_JS, _SM, _VM, _TDex, _NT, _TMV, _JI, _Vi, _JT],
  [0, 0, () => VideoMetadata, () => TextDetectionResults, 0, 0, 0, () => Video, 0]
);
export var LabelDetection = struct(n0, _LD, 0, [_Ti, _Labe, _STM, _ETM, _DM], [1, () => Label, 1, 1, 1]);
export var PersonDetail = struct(n0, _PDe, 0, [_Ind, _BB, _F], [1, () => BoundingBox, () => FaceDetail]);
export var PersonDetection = struct(n0, _PDer, 0, [_Ti, _Per], [1, () => PersonDetail]);
export var PersonMatch = struct(n0, _PM, 0, [_Ti, _Per, _FM], [1, () => PersonDetail, () => FaceMatchList]);
export var ProjectDescription = struct(
  n0,
  _PDr,
  0,
  [_PA, _CTr, _St, _D, _Fe, _AU],
  [0, 4, 0, () => DatasetMetadataList, 0, 0]
);
export var ProjectVersionDescription = struct(
  n0,
  _PVDr,
  0,
  [_PVA, _CTr, _MIU, _St, _SM, _BTTIS, _TET, _OC, _TDR, _TDRe, _ER, _MS, _KKI, _MIUa, _SPVA, _VD, _Fe, _BMV, _FC],
  [
    0,
    4,
    1,
    0,
    0,
    1,
    4,
    () => OutputConfig,
    () => TrainingDataResult,
    () => TestingDataResult,
    () => EvaluationResult,
    () => GroundTruthManifest,
    0,
    1,
    0,
    0,
    0,
    0,
    () => CustomizationFeatureConfig,
  ]
);
export var SegmentDetection = struct(
  n0,
  _SDe,
  0,
  [_Ty, _STM, _ETM, _DM, _STSMPTE, _ETSMPTE, _DSMPTE, _TCS, _SS, _SFN, _EFN, _DFu],
  [0, 1, 1, 1, 0, 0, 0, () => TechnicalCueSegment, () => ShotSegment, 1, 1, 1]
);
export var SegmentTypeInfo = struct(n0, _STI, 0, [_Ty, _MVo], [0, 0]);
export var ShotSegment = struct(n0, _SS, 0, [_Ind, _Con], [1, 1]);
export var Summary = struct(n0, _Su, 0, [_SO], [() => S3Object]);
export var TechnicalCueSegment = struct(n0, _TCS, 0, [_Ty, _Con], [0, 1]);
export var TestingDataResult = struct(
  n0,
  _TDRe,
  0,
  [_In, _O, _Va],
  [() => TestingData, () => TestingData, () => ValidationData]
);
export var TextDetectionResult = struct(n0, _TDRex, 0, [_Ti, _TDext], [1, () => TextDetection]);
export var TrainingDataResult = struct(
  n0,
  _TDR,
  0,
  [_In, _O, _Va],
  [() => TrainingData, () => TrainingData, () => ValidationData]
);
export var ValidationData = struct(n0, _VDa, 0, [_As], [() => Assets]);
export var VideoMetadata = struct(n0, _VM, 0, [_Co, _DM, _For, _FRr, _FH, _FW, _CRo], [0, 1, 0, 1, 1, 1, 0]);
export var AudioMetadataList = list(n0, _AML, 0, () => AudioMetadata);
export var CelebrityRecognitions = list(n0, _CRe, 0, () => CelebrityRecognition);
export var ContentModerationDetections = list(n0, _CMDo, 0, () => ContentModerationDetection);
export var CustomizationFeatures = 64 | 0;

export var DatasetMetadataList = list(n0, _DMLa, 0, () => DatasetMetadata);
export var FaceDetections = list(n0, _FDace, 0, () => FaceDetection);
export var LabelDetections = list(n0, _LDa, 0, () => LabelDetection);
export var PersonDetections = list(n0, _PDers, 0, () => PersonDetection);
export var PersonMatches = list(n0, _PMe, 0, () => PersonMatch);
export var ProjectDescriptions = list(n0, _PD, 0, () => ProjectDescription);
export var ProjectNames = 64 | 0;

export var ProjectVersionDescriptions = list(n0, _PVD, 0, () => ProjectVersionDescription);
export var SegmentDetections = list(n0, _SDeg, 0, () => SegmentDetection);
export var SegmentTypesInfo = list(n0, _STIe, 0, () => SegmentTypeInfo);
export var TextDetectionResults = list(n0, _TDRext, 0, () => TextDetectionResult);
export var VersionNames = 64 | 0;

export var VideoMetadataList = list(n0, _VML, 0, () => VideoMetadata);
export var DescribeDataset = op(
  n0,
  _DDes,
  0,
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var DescribeProjects = op(
  n0,
  _DPe,
  0,
  () => DescribeProjectsRequest,
  () => DescribeProjectsResponse
);
export var DescribeProjectVersions = op(
  n0,
  _DPVe,
  0,
  () => DescribeProjectVersionsRequest,
  () => DescribeProjectVersionsResponse
);
export var GetCelebrityRecognition = op(
  n0,
  _GCR,
  0,
  () => GetCelebrityRecognitionRequest,
  () => GetCelebrityRecognitionResponse
);
export var GetContentModeration = op(
  n0,
  _GCM,
  0,
  () => GetContentModerationRequest,
  () => GetContentModerationResponse
);
export var GetFaceDetection = op(
  n0,
  _GFD,
  0,
  () => GetFaceDetectionRequest,
  () => GetFaceDetectionResponse
);
export var GetFaceSearch = op(
  n0,
  _GFS,
  0,
  () => GetFaceSearchRequest,
  () => GetFaceSearchResponse
);
export var GetLabelDetection = op(
  n0,
  _GLD,
  0,
  () => GetLabelDetectionRequest,
  () => GetLabelDetectionResponse
);
export var GetPersonTracking = op(
  n0,
  _GPT,
  0,
  () => GetPersonTrackingRequest,
  () => GetPersonTrackingResponse
);
export var GetSegmentDetection = op(
  n0,
  _GSD,
  0,
  () => GetSegmentDetectionRequest,
  () => GetSegmentDetectionResponse
);
export var GetTextDetection = op(
  n0,
  _GTD,
  0,
  () => GetTextDetectionRequest,
  () => GetTextDetectionResponse
);
