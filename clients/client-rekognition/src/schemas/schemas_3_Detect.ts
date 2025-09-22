// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  HumanLoopQuotaExceededException as __HumanLoopQuotaExceededException,
  ImageTooLargeException as __ImageTooLargeException,
  InvalidImageFormatException as __InvalidImageFormatException,
} from "../models/index";
import {
  _a,
  _At,
  _B,
  _Ba,
  _BB,
  _BP,
  _Br,
  _C,
  _c,
  _CBP,
  _CC,
  _Ce,
  _CF,
  _CFe,
  _CFL,
  _CFM,
  _CFML,
  _CFo,
  _CFR,
  _CFRo,
  _CFUL,
  _CI,
  _CL,
  _CLe,
  _CLu,
  _Con,
  _Cont,
  _CSIF,
  _CT,
  _DAa,
  _DAe,
  _DCL,
  _DCLR,
  _DCLRe,
  _DCo,
  _DFet,
  _DFRet,
  _DFRete,
  _DL,
  _DLIB,
  _DLIF,
  _DLIP,
  _DLIPS,
  _DLIQ,
  _DLR,
  _DLRe,
  _DLSe,
  _DML,
  _DMLR,
  _DMLRe,
  _DPE,
  _DPER,
  _DPERe,
  _DTet,
  _DTF,
  _DTR,
  _DTRe,
  _E,
  _e,
  _ED,
  _EDq,
  _EII,
  _F,
  _FD,
  _FDA,
  _FDa,
  _FDL,
  _Fea,
  _Fi,
  _FM,
  _FMT,
  _FMV,
  _Fo,
  _FR,
  _FRa,
  _FRL,
  _G,
  _GL,
  _hE,
  _HLA,
  _HLACER,
  _HLAO,
  _HLAR,
  _HLC,
  _HLDA,
  _HLN,
  _HLQEE,
  _I,
  _IF,
  _IFR,
  _IFRn,
  _IIFE,
  _Im,
  _IP,
  _ITLE,
  _KG,
  _L,
  _La,
  _Lab,
  _LMV,
  _M,
  _MC,
  _MCi,
  _MDC,
  _MF,
  _MLa,
  _MLo,
  _MMV,
  _MR,
  _mT,
  _MUa,
  _N,
  _OCr,
  _P,
  _Pe,
  _PEBP,
  _PEMV,
  _PEP,
  _PEPr,
  _PES,
  _PESA,
  _PI,
  _PV,
  _PVA,
  _PWRE,
  _PWREe,
  _Q,
  _QC,
  _QF,
  _RC,
  _RCR,
  _RCRe,
  _Rea,
  _RET,
  _ROI,
  _RT,
  _S,
  _SA,
  _SCe,
  _Se,
  _SF,
  _SFBB,
  _SFBI,
  _SFBIR,
  _SFBIRe,
  _SFC,
  _SFD,
  _Sh,
  _SI,
  _Si,
  _SIF,
  _SIOC,
  _SJHLACER,
  _SO,
  _ST,
  _Su,
  _SUBI,
  _SUBIR,
  _SUBIRe,
  _TDex,
  _TDL,
  _TI,
  _TIOC,
  _TMV,
  _Ty,
  _U,
  _UF,
  _UFL,
  _UFn,
  _UFni,
  _UFnr,
  _UFns,
  _UFnse,
  _UM,
  _UMT,
  _V,
  _WF,
  BoundingBox,
  n0,
  S3Object,
} from "./schemas_0";
import { Emotions, FaceDetail, ImageQuality, Landmarks, Pose, Smile } from "./schemas_6_Get";
import { Face, FaceMatchList } from "./schemas_9_Faces";
import { DominantColors, Label } from "./schemas_12_Label";
import { DetectionFilter, Geometry, RegionsOfInterest, TextDetection } from "./schemas_17_StreamProcessor";
import { KnownGender } from "./schemas_20_GetCelebrity";
import { ContentTypes, ModerationLabel } from "./schemas_22_Moderation";
import { UserMatchList } from "./schemas_23_Users";
import { GeneralLabelsSettings } from "./schemas_25_Label";

/* eslint no-var: 0 */

export var SynthesizedJsonHumanLoopActivationConditionsEvaluationResults = sim(n0, _SJHLACER, 0, {
  [_mT]: _a,
});
export var Celebrity = struct(
  n0,
  _Ce,
  0,
  [_U, _N, _I, _F, _MC, _KG],
  [64 | 0, 0, 0, () => ComparedFace, 1, () => KnownGender]
);
export var ComparedFace = struct(
  n0,
  _CF,
  0,
  [_BB, _Con, _La, _P, _Q, _E, _S],
  [() => BoundingBox, 1, () => Landmarks, () => Pose, () => ImageQuality, () => Emotions, () => Smile]
);
export var ComparedSourceImageFace = struct(n0, _CSIF, 0, [_BB, _Con], [() => BoundingBox, 1]);
export var CompareFacesMatch = struct(n0, _CFM, 0, [_Si, _F], [1, () => ComparedFace]);
export var CompareFacesRequest = struct(n0, _CFR, 0, [_SI, _TI, _ST, _QF], [() => Image, () => Image, 1, 0]);
export var CompareFacesResponse = struct(
  n0,
  _CFRo,
  0,
  [_SIF, _FM, _UF, _SIOC, _TIOC],
  [() => ComparedSourceImageFace, () => CompareFacesMatchList, () => CompareFacesUnmatchList, 0, 0]
);
export var CoversBodyPart = struct(n0, _CBP, 0, [_Con, _V], [1, 2]);
export var CustomLabel = struct(n0, _CL, 0, [_N, _Con, _G], [0, 1, () => Geometry]);
export var DetectCustomLabelsRequest = struct(n0, _DCLR, 0, [_PVA, _Im, _MR, _MCi], [0, () => Image, 1, 1]);
export var DetectCustomLabelsResponse = struct(n0, _DCLRe, 0, [_CLu], [() => CustomLabels]);
export var DetectFacesRequest = struct(n0, _DFRet, 0, [_Im, _At], [() => Image, 64 | 0]);
export var DetectFacesResponse = struct(n0, _DFRete, 0, [_FD, _OCr], [() => FaceDetailList, 0]);
export var DetectLabelsImageBackground = struct(
  n0,
  _DLIB,
  0,
  [_Q, _DCo],
  [() => DetectLabelsImageQuality, () => DominantColors]
);
export var DetectLabelsImageForeground = struct(
  n0,
  _DLIF,
  0,
  [_Q, _DCo],
  [() => DetectLabelsImageQuality, () => DominantColors]
);
export var DetectLabelsImageProperties = struct(
  n0,
  _DLIP,
  0,
  [_Q, _DCo, _Fo, _Ba],
  [
    () => DetectLabelsImageQuality,
    () => DominantColors,
    () => DetectLabelsImageForeground,
    () => DetectLabelsImageBackground,
  ]
);
export var DetectLabelsImagePropertiesSettings = struct(n0, _DLIPS, 0, [_MDC], [1]);
export var DetectLabelsImageQuality = struct(n0, _DLIQ, 0, [_Br, _Sh, _Cont], [1, 1, 1]);
export var DetectLabelsRequest = struct(
  n0,
  _DLR,
  0,
  [_Im, _MLa, _MCi, _Fea, _Se],
  [() => Image, 1, 1, 64 | 0, () => DetectLabelsSettings]
);
export var DetectLabelsResponse = struct(
  n0,
  _DLRe,
  0,
  [_Lab, _OCr, _LMV, _IP],
  [() => Labels, 0, 0, () => DetectLabelsImageProperties]
);
export var DetectLabelsSettings = struct(
  n0,
  _DLSe,
  0,
  [_GL, _IP],
  [() => GeneralLabelsSettings, () => DetectLabelsImagePropertiesSettings]
);
export var DetectModerationLabelsRequest = struct(
  n0,
  _DMLR,
  0,
  [_Im, _MCi, _HLC, _PV],
  [() => Image, 1, () => HumanLoopConfig, 0]
);
export var DetectModerationLabelsResponse = struct(
  n0,
  _DMLRe,
  0,
  [_MLo, _MMV, _HLAO, _PV, _CT],
  [() => ModerationLabels, 0, [() => HumanLoopActivationOutput, 0], 0, () => ContentTypes]
);
export var DetectProtectiveEquipmentRequest = struct(
  n0,
  _DPER,
  0,
  [_Im, _SA],
  [() => Image, () => ProtectiveEquipmentSummarizationAttributes]
);
export var DetectProtectiveEquipmentResponse = struct(
  n0,
  _DPERe,
  0,
  [_PEMV, _Pe, _Su],
  [0, () => ProtectiveEquipmentPersons, () => ProtectiveEquipmentSummary]
);
export var DetectTextFilters = struct(n0, _DTF, 0, [_WF, _ROI], [() => DetectionFilter, () => RegionsOfInterest]);
export var DetectTextRequest = struct(n0, _DTR, 0, [_Im, _Fi], [() => Image, () => DetectTextFilters]);
export var DetectTextResponse = struct(n0, _DTRe, 0, [_TDex, _TMV], [() => TextDetectionList, 0]);
export var EquipmentDetection = struct(
  n0,
  _ED,
  0,
  [_BB, _Con, _Ty, _CBP],
  [() => BoundingBox, 1, 0, () => CoversBodyPart]
);
export var FaceRecord = struct(n0, _FR, 0, [_F, _FDa], [() => Face, () => FaceDetail]);
export var HumanLoopActivationOutput = struct(
  n0,
  _HLAO,
  0,
  [_HLA, _HLAR, _HLACER],
  [0, 64 | 0, [() => SynthesizedJsonHumanLoopActivationConditionsEvaluationResults, 0]]
);
export var HumanLoopConfig = struct(n0, _HLC, 0, [_HLN, _FDA, _DAa], [0, 0, () => HumanLoopDataAttributes]);
export var HumanLoopDataAttributes = struct(n0, _HLDA, 0, [_CC], [64 | 0]);
export var HumanLoopQuotaExceededException = error(
  n0,
  _HLQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_RT, _QC, _SCe, _M, _C, _L],
  [0, 0, 0, 0, 0, 0],

  __HumanLoopQuotaExceededException
);
export var Image = struct(n0, _Im, 0, [_B, _SO], [21, () => S3Object]);
export var ImageTooLargeException = error(
  n0,
  _ITLE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __ImageTooLargeException
);
export var IndexFacesRequest = struct(n0, _IFR, 0, [_CI, _Im, _EII, _DAe, _MF, _QF], [0, () => Image, 0, 64 | 0, 1, 0]);
export var IndexFacesResponse = struct(
  n0,
  _IFRn,
  0,
  [_FRa, _OCr, _FMV, _UFn],
  [() => FaceRecordList, 0, 0, () => UnindexedFaces]
);
export var InvalidImageFormatException = error(
  n0,
  _IIFE,
  {
    [_e]: _c,
  },
  [_M, _C, _L],
  [0, 0, 0],

  __InvalidImageFormatException
);
export var ProtectiveEquipmentBodyPart = struct(n0, _PEBP, 0, [_N, _Con, _EDq], [0, 1, () => EquipmentDetections]);
export var ProtectiveEquipmentPerson = struct(
  n0,
  _PEP,
  0,
  [_BP, _BB, _Con, _I],
  [() => BodyParts, () => BoundingBox, 1, 1]
);
export var ProtectiveEquipmentSummarizationAttributes = struct(n0, _PESA, 0, [_MCi, _RET], [1, 64 | 0]);
export var ProtectiveEquipmentSummary = struct(n0, _PES, 0, [_PWRE, _PWREe, _PI], [64 | 1, 64 | 1, 64 | 1]);
export var RecognizeCelebritiesRequest = struct(n0, _RCR, 0, [_Im], [() => Image]);
export var RecognizeCelebritiesResponse = struct(
  n0,
  _RCRe,
  0,
  [_CFe, _UFnr, _OCr],
  [() => CelebrityList, () => ComparedFaceList, 0]
);
export var SearchedFaceDetails = struct(n0, _SFD, 0, [_FDa], [() => FaceDetail]);
export var SearchFacesByImageRequest = struct(n0, _SFBIR, 0, [_CI, _Im, _MF, _FMT, _QF], [0, () => Image, 1, 1, 0]);
export var SearchFacesByImageResponse = struct(
  n0,
  _SFBIRe,
  0,
  [_SFBB, _SFC, _FM, _FMV],
  [() => BoundingBox, 1, () => FaceMatchList, 0]
);
export var SearchUsersByImageRequest = struct(n0, _SUBIR, 0, [_CI, _Im, _UMT, _MUa, _QF], [0, () => Image, 1, 1, 0]);
export var SearchUsersByImageResponse = struct(
  n0,
  _SUBIRe,
  0,
  [_UM, _FMV, _SF, _UFns],
  [() => UserMatchList, 0, () => SearchedFaceDetails, () => UnsearchedFacesList]
);
export var UnindexedFace = struct(n0, _UFni, 0, [_Rea, _FDa], [64 | 0, () => FaceDetail]);
export var UnsearchedFace = struct(n0, _UFnse, 0, [_FD, _Rea], [() => FaceDetail, 64 | 0]);
export var Attributes = 64 | 0;

export var BodyParts = list(n0, _BP, 0, () => ProtectiveEquipmentBodyPart);
export var CelebrityList = list(n0, _CLe, 0, () => Celebrity);
export var ComparedFaceList = list(n0, _CFL, 0, () => ComparedFace);
export var CompareFacesMatchList = list(n0, _CFML, 0, () => CompareFacesMatch);
export var CompareFacesUnmatchList = list(n0, _CFUL, 0, () => ComparedFace);
export var ContentClassifiers = 64 | 0;

export var CustomLabels = list(n0, _CLu, 0, () => CustomLabel);
export var DetectLabelsFeatureList = 64 | 0;

export var EquipmentDetections = list(n0, _EDq, 0, () => EquipmentDetection);
export var FaceDetailList = list(n0, _FDL, 0, () => FaceDetail);
export var FaceRecordList = list(n0, _FRL, 0, () => FaceRecord);
export var HumanLoopActivationReasons = 64 | 0;

export var Labels = list(n0, _Lab, 0, () => Label);
export var ModerationLabels = list(n0, _MLo, 0, () => ModerationLabel);
export var ProtectiveEquipmentPersonIds = 64 | 1;

export var ProtectiveEquipmentPersons = list(n0, _PEPr, 0, () => ProtectiveEquipmentPerson);
export var ProtectiveEquipmentTypes = 64 | 0;

export var Reasons = 64 | 0;

export var TextDetectionList = list(n0, _TDL, 0, () => TextDetection);
export var UnindexedFaces = list(n0, _UFn, 0, () => UnindexedFace);
export var UnsearchedFaceReasons = 64 | 0;

export var UnsearchedFacesList = list(n0, _UFL, 0, () => UnsearchedFace);
export var CompareFaces = op(
  n0,
  _CFo,
  0,
  () => CompareFacesRequest,
  () => CompareFacesResponse
);
export var DetectCustomLabels = op(
  n0,
  _DCL,
  0,
  () => DetectCustomLabelsRequest,
  () => DetectCustomLabelsResponse
);
export var DetectFaces = op(
  n0,
  _DFet,
  0,
  () => DetectFacesRequest,
  () => DetectFacesResponse
);
export var DetectLabels = op(
  n0,
  _DL,
  0,
  () => DetectLabelsRequest,
  () => DetectLabelsResponse
);
export var DetectModerationLabels = op(
  n0,
  _DML,
  0,
  () => DetectModerationLabelsRequest,
  () => DetectModerationLabelsResponse
);
export var DetectProtectiveEquipment = op(
  n0,
  _DPE,
  0,
  () => DetectProtectiveEquipmentRequest,
  () => DetectProtectiveEquipmentResponse
);
export var DetectText = op(
  n0,
  _DTet,
  0,
  () => DetectTextRequest,
  () => DetectTextResponse
);
export var IndexFaces = op(
  n0,
  _IF,
  0,
  () => IndexFacesRequest,
  () => IndexFacesResponse
);
export var RecognizeCelebrities = op(
  n0,
  _RC,
  0,
  () => RecognizeCelebritiesRequest,
  () => RecognizeCelebritiesResponse
);
export var SearchFacesByImage = op(
  n0,
  _SFBI,
  0,
  () => SearchFacesByImageRequest,
  () => SearchFacesByImageResponse
);
export var SearchUsersByImage = op(
  n0,
  _SUBI,
  0,
  () => SearchUsersByImageRequest,
  () => SearchUsersByImageResponse
);
