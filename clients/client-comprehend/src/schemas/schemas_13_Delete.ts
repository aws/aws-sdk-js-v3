// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceUnavailableException as __ResourceUnavailableException } from "../models/index";
import {
  _AMA,
  _B,
  _BB,
  _Bl,
  _BT,
  _By,
  _C,
  _c,
  _CD,
  _CDR,
  _CDRl,
  _CE,
  _CER,
  _CERr,
  _CF,
  _CFR,
  _CFRr,
  _Co,
  _CRT,
  _DARA,
  _DC,
  _DCA,
  _DDARA,
  _DDC,
  _DDCR,
  _DDCRe,
  _DEet,
  _DERel,
  _DERet,
  _DERete,
  _DERR,
  _DERRe,
  _DFe,
  _DFR,
  _DFRe,
  _DIU,
  _DL,
  _DLSU,
  _DM,
  _DMA,
  _DRC,
  _DSC,
  _DT,
  _DTLI,
  _E,
  _e,
  _EA,
  _EC,
  _ECLI,
  _ECx,
  _ELI,
  _EM,
  _EN,
  _Er,
  _ERA,
  _FA,
  _FN,
  _G,
  _H,
  _hE,
  _Id,
  _IDC,
  _Ids,
  _IM,
  _IMR,
  _IMRm,
  _JA,
  _JI,
  _JN,
  _JS,
  _La,
  _LC,
  _Le,
  _LOB,
  _LOC,
  _LODT,
  _LOEC,
  _LOEi,
  _LOL,
  _LOR,
  _LOW,
  _M,
  _MA,
  _MKKI,
  _MN,
  _MT,
  _N,
  _ODC,
  _P,
  _Pa,
  _Po,
  _Poi,
  _R,
  _RLI,
  _RUE,
  _Sc,
  _SDCJ,
  _SDCJR,
  _SDCJRt,
  _SEDJ,
  _SEDJR,
  _SEDJRt,
  _SMA,
  _T,
  _Ta,
  _TC,
  _To,
  _Ty,
  _UE,
  _UER,
  _UERp,
  _VC,
  _VKKI,
  _VN,
  _W,
  _Wa,
  _WC,
  _WLI,
  _WM,
  _X,
  _Y,
  CustomerInputString,
  DocumentReaderConfig,
  InputDataConfig,
  n0,
  OutputDataConfig,
  TagList,
  VpcConfig,
} from "./schemas_0";
import { DataSecurityConfig, TaskConfig } from "./schemas_18_Entity";
import { ListOfEntities } from "./schemas_30_DetectEntities";

/* eslint no-var: 0 */

export var Block = struct(
  n0,
  _B,
  0,
  [_Id, _BT, _T, _P, _G, _R],
  [0, 0, 0, 1, () => Geometry, () => ListOfRelationships]
);
export var BoundingBox = struct(n0, _BB, 0, [_H, _Le, _To, _W], [1, 1, 1, 1]);
export var ClassifyDocumentRequest = struct(
  n0,
  _CDR,
  0,
  [_T, _EA, _By, _DRC],
  [[() => CustomerInputString, 0], 0, 21, () => DocumentReaderConfig]
);
export var ClassifyDocumentResponse = struct(
  n0,
  _CDRl,
  8,
  [_C, _La, _DM, _DT, _Er, _Wa],
  [
    () => ListOfClasses,
    () => ListOfLabels,
    () => DocumentMetadata,
    () => ListOfDocumentType,
    () => ListOfErrors,
    () => ListOfWarnings,
  ]
);
export var CreateEndpointRequest = struct(
  n0,
  _CER,
  0,
  [_EN, _MA, _DIU, _CRT, _Ta, _DARA, _FA],
  [0, 0, 1, [0, 4], () => TagList, 0, 0]
);
export var CreateEndpointResponse = struct(n0, _CERr, 0, [_EA, _MA], [0, 0]);
export var CreateFlywheelRequest = struct(
  n0,
  _CFR,
  0,
  [_FN, _AMA, _DARA, _TC, _MT, _DLSU, _DSC, _CRT, _Ta],
  [0, 0, 0, () => TaskConfig, 0, 0, () => DataSecurityConfig, [0, 4], () => TagList]
);
export var CreateFlywheelResponse = struct(n0, _CFRr, 0, [_FA, _AMA], [0, 0]);
export var DeleteDocumentClassifierRequest = struct(n0, _DDCR, 0, [_DCA], [0]);
export var DeleteDocumentClassifierResponse = struct(n0, _DDCRe, 0, [], []);
export var DeleteEntityRecognizerRequest = struct(n0, _DERR, 0, [_ERA], [0]);
export var DeleteEntityRecognizerResponse = struct(n0, _DERRe, 0, [], []);
export var DeleteFlywheelRequest = struct(n0, _DFR, 0, [_FA], [0]);
export var DeleteFlywheelResponse = struct(n0, _DFRe, 0, [], []);
export var DetectEntitiesRequest = struct(
  n0,
  _DERet,
  0,
  [_T, _LC, _EA, _By, _DRC],
  [[() => CustomerInputString, 0], 0, 0, 21, () => DocumentReaderConfig]
);
export var DetectEntitiesResponse = struct(
  n0,
  _DERete,
  8,
  [_E, _DM, _DT, _Bl, _Er],
  [() => ListOfEntities, () => DocumentMetadata, () => ListOfDocumentType, () => ListOfBlocks, () => ListOfErrors]
);
export var DocumentClass = struct(n0, _DC, 0, [_N, _Sc, _P], [0, 1, 1]);
export var DocumentLabel = struct(n0, _DL, 0, [_N, _Sc, _P], [0, 1, 1]);
export var DocumentMetadata = struct(n0, _DM, 0, [_Pa, _ECx], [1, () => ListOfExtractedCharacters]);
export var DocumentTypeListItem = struct(n0, _DTLI, 0, [_P, _Ty], [1, 0]);
export var ErrorsListItem = struct(n0, _ELI, 0, [_P, _EC, _EM], [1, 0, 0]);
export var ExtractedCharactersListItem = struct(n0, _ECLI, 0, [_P, _Co], [1, 1]);
export var Geometry = struct(n0, _G, 0, [_BB, _Po], [() => BoundingBox, () => Polygon]);
export var ImportModelRequest = struct(
  n0,
  _IMR,
  0,
  [_SMA, _MN, _VN, _MKKI, _DARA, _Ta],
  [0, 0, 0, 0, 0, () => TagList]
);
export var ImportModelResponse = struct(n0, _IMRm, 0, [_MA], [0]);
export var Point = struct(n0, _Poi, 0, [_X, _Y], [1, 1]);
export var RelationshipsListItem = struct(n0, _RLI, 0, [_Ids, _Ty], [64 | 0, 0]);
export var ResourceUnavailableException = error(
  n0,
  _RUE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceUnavailableException
);
export var StartDocumentClassificationJobRequest = struct(
  n0,
  _SDCJR,
  0,
  [_JN, _DCA, _IDC, _ODC, _DARA, _CRT, _VKKI, _VC, _Ta, _FA],
  [0, 0, () => InputDataConfig, () => OutputDataConfig, 0, [0, 4], 0, () => VpcConfig, () => TagList, 0]
);
export var StartDocumentClassificationJobResponse = struct(n0, _SDCJRt, 0, [_JI, _JA, _JS, _DCA], [0, 0, 0, 0]);
export var StartEntitiesDetectionJobRequest = struct(
  n0,
  _SEDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _ERA, _LC, _CRT, _VKKI, _VC, _Ta, _FA],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, 0, 0, [0, 4], 0, () => VpcConfig, () => TagList, 0]
);
export var StartEntitiesDetectionJobResponse = struct(n0, _SEDJRt, 0, [_JI, _JA, _JS, _ERA], [0, 0, 0, 0]);
export var UpdateEndpointRequest = struct(n0, _UER, 0, [_EA, _DMA, _DIU, _DDARA, _FA], [0, 0, 1, 0, 0]);
export var UpdateEndpointResponse = struct(n0, _UERp, 0, [_DMA], [0]);
export var WarningsListItem = struct(n0, _WLI, 0, [_P, _WC, _WM], [1, 0, 0]);
export var ListOfBlocks = list(n0, _LOB, 0, () => Block);
export var ListOfClasses = list(n0, _LOC, 0, () => DocumentClass);
export var ListOfDocumentType = list(n0, _LODT, 0, () => DocumentTypeListItem);
export var ListOfErrors = list(n0, _LOEi, 0, () => ErrorsListItem);
export var ListOfExtractedCharacters = list(n0, _LOEC, 0, () => ExtractedCharactersListItem);
export var ListOfLabels = list(n0, _LOL, 0, () => DocumentLabel);
export var ListOfRelationships = list(n0, _LOR, 0, () => RelationshipsListItem);
export var ListOfWarnings = list(n0, _LOW, 0, () => WarningsListItem);
export var Polygon = list(n0, _Po, 0, () => Point);
export var StringList = 64 | 0;

export var ClassifyDocument = op(
  n0,
  _CD,
  0,
  () => ClassifyDocumentRequest,
  () => ClassifyDocumentResponse
);
export var CreateEndpoint = op(
  n0,
  _CE,
  0,
  () => CreateEndpointRequest,
  () => CreateEndpointResponse
);
export var CreateFlywheel = op(
  n0,
  _CF,
  0,
  () => CreateFlywheelRequest,
  () => CreateFlywheelResponse
);
export var DeleteDocumentClassifier = op(
  n0,
  _DDC,
  0,
  () => DeleteDocumentClassifierRequest,
  () => DeleteDocumentClassifierResponse
);
export var DeleteEntityRecognizer = op(
  n0,
  _DERel,
  0,
  () => DeleteEntityRecognizerRequest,
  () => DeleteEntityRecognizerResponse
);
export var DeleteFlywheel = op(
  n0,
  _DFe,
  0,
  () => DeleteFlywheelRequest,
  () => DeleteFlywheelResponse
);
export var DetectEntities = op(
  n0,
  _DEet,
  0,
  () => DetectEntitiesRequest,
  () => DetectEntitiesResponse
);
export var ImportModel = op(
  n0,
  _IM,
  0,
  () => ImportModelRequest,
  () => ImportModelResponse
);
export var StartDocumentClassificationJob = op(
  n0,
  _SDCJ,
  0,
  () => StartDocumentClassificationJobRequest,
  () => StartDocumentClassificationJobResponse
);
export var StartEntitiesDetectionJob = op(
  n0,
  _SEDJ,
  0,
  () => StartEntitiesDetectionJobRequest,
  () => StartEntitiesDetectionJobResponse
);
export var UpdateEndpoint = op(
  n0,
  _UE,
  0,
  () => UpdateEndpointRequest,
  () => UpdateEndpointResponse
);
