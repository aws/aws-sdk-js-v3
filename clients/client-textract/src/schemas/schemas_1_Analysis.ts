// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidJobIdException as __InvalidJobIdException,
  InvalidKMSKeyException as __InvalidKMSKeyException,
} from "../models/index";
import {
  _ADMV,
  _AEMV,
  _ALMV,
  _Bl,
  _C,
  _c,
  _Co,
  _DDTMV,
  _DG,
  _DGL,
  _DGo,
  _DM,
  _DS,
  _DSe,
  _DSL,
  _E,
  _e,
  _ECr,
  _ED,
  _EDxp,
  _EL,
  _Ex,
  _G,
  _GDA,
  _GDAR,
  _GDARe,
  _GDTD,
  _GDTDR,
  _GDTDRe,
  _GEA,
  _GEAR,
  _GEARe,
  _GLA,
  _GLAR,
  _GLARe,
  _GLAS,
  _GLASR,
  _GLASRe,
  _IDd,
  _IJIE,
  _IKMSKE,
  _In,
  _JI,
  _JS,
  _KD,
  _LDe,
  _LDen,
  _LDL,
  _LF,
  _LFe,
  _LFL,
  _LR,
  _LRL,
  _LS,
  _M,
  _MR,
  _NT,
  _P,
  _Pa,
  _PC,
  _PL,
  _PN,
  _Pre,
  _PT,
  _Res,
  _SD,
  _SDi,
  _SDig,
  _SDL,
  _SDLp,
  _SDp,
  _SM,
  _SS,
  _Su,
  _T,
  _Ty,
  _UDT,
  _US,
  _USL,
  _USn,
  _Va,
  _VDa,
  _Wa,
  _War,
  n0,
} from "./schemas_0";
import {
  BlockList,
  DocumentMetadata,
  ExpenseDocument,
  ExpenseDocumentList,
  Geometry,
  IdentityDocument,
} from "./schemas_4_Get";

/* eslint no-var: 0 */

export var DetectedSignature = struct(n0, _DS, 0, [_Pa], [1]);
export var DocumentGroup = struct(
  n0,
  _DG,
  0,
  [_Ty, _SD, _DSe, _US],
  [0, () => SplitDocumentList, () => DetectedSignatureList, () => UndetectedSignatureList]
);
export var Extraction = struct(
  n0,
  _E,
  0,
  [_LDe, _EDxp, _IDd],
  [() => LendingDocument, () => ExpenseDocument, () => IdentityDocument]
);
export var GetDocumentAnalysisRequest = struct(n0, _GDAR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetDocumentAnalysisResponse = struct(
  n0,
  _GDARe,
  0,
  [_DM, _JS, _NT, _Bl, _Wa, _SM, _ADMV],
  [() => DocumentMetadata, 0, 0, () => BlockList, () => Warnings, 0, 0]
);
export var GetDocumentTextDetectionRequest = struct(n0, _GDTDR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetDocumentTextDetectionResponse = struct(
  n0,
  _GDTDRe,
  0,
  [_DM, _JS, _NT, _Bl, _Wa, _SM, _DDTMV],
  [() => DocumentMetadata, 0, 0, () => BlockList, () => Warnings, 0, 0]
);
export var GetExpenseAnalysisRequest = struct(n0, _GEAR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetExpenseAnalysisResponse = struct(
  n0,
  _GEARe,
  0,
  [_DM, _JS, _NT, _ED, _Wa, _SM, _AEMV],
  [() => DocumentMetadata, 0, 0, () => ExpenseDocumentList, () => Warnings, 0, 0]
);
export var GetLendingAnalysisRequest = struct(n0, _GLAR, 0, [_JI, _MR, _NT], [0, 1, 0]);
export var GetLendingAnalysisResponse = struct(
  n0,
  _GLARe,
  0,
  [_DM, _JS, _NT, _Res, _Wa, _SM, _ALMV],
  [() => DocumentMetadata, 0, 0, () => LendingResultList, () => Warnings, 0, 0]
);
export var GetLendingAnalysisSummaryRequest = struct(n0, _GLASR, 0, [_JI], [0]);
export var GetLendingAnalysisSummaryResponse = struct(
  n0,
  _GLASRe,
  0,
  [_DM, _JS, _Su, _Wa, _SM, _ALMV],
  [() => DocumentMetadata, 0, () => LendingSummary, () => Warnings, 0, 0]
);
export var InvalidJobIdException = error(
  n0,
  _IJIE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __InvalidJobIdException
);
export var InvalidKMSKeyException = error(
  n0,
  _IKMSKE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __InvalidKMSKeyException
);
export var LendingDetection = struct(n0, _LDen, 0, [_T, _SS, _G, _Co], [0, 0, () => Geometry, 1]);
export var LendingDocument = struct(n0, _LDe, 0, [_LF, _SDi], [() => LendingFieldList, () => SignatureDetectionList]);
export var LendingField = struct(
  n0,
  _LFe,
  0,
  [_Ty, _KD, _VDa],
  [0, () => LendingDetection, () => LendingDetectionList]
);
export var LendingResult = struct(n0, _LR, 0, [_Pa, _PC, _Ex], [1, () => PageClassification, () => ExtractionList]);
export var LendingSummary = struct(n0, _LS, 0, [_DGo, _UDT], [() => DocumentGroupList, 64 | 0]);
export var PageClassification = struct(n0, _PC, 0, [_PT, _PN], [() => PredictionList, () => PredictionList]);
export var Prediction = struct(n0, _Pre, 0, [_Va, _Co], [0, 1]);
export var SignatureDetection = struct(n0, _SDig, 0, [_Co, _G], [1, () => Geometry]);
export var SplitDocument = struct(n0, _SDp, 0, [_In, _P], [1, 64 | 1]);
export var UndetectedSignature = struct(n0, _USn, 0, [_Pa], [1]);
export var Warning = struct(n0, _War, 0, [_ECr, _P], [0, 64 | 1]);
export var DetectedSignatureList = list(n0, _DSL, 0, () => DetectedSignature);
export var DocumentGroupList = list(n0, _DGL, 0, () => DocumentGroup);
export var ExtractionList = list(n0, _EL, 0, () => Extraction);
export var LendingDetectionList = list(n0, _LDL, 0, () => LendingDetection);
export var LendingFieldList = list(n0, _LFL, 0, () => LendingField);
export var LendingResultList = list(n0, _LRL, 0, () => LendingResult);
export var PageList = 64 | 1;

export var Pages = 64 | 1;

export var PredictionList = list(n0, _PL, 0, () => Prediction);
export var SignatureDetectionList = list(n0, _SDL, 0, () => SignatureDetection);
export var SplitDocumentList = list(n0, _SDLp, 0, () => SplitDocument);
export var UndetectedDocumentTypeList = 64 | 0;

export var UndetectedSignatureList = list(n0, _USL, 0, () => UndetectedSignature);
export var Warnings = list(n0, _Wa, 0, () => Warning);
export var GetDocumentAnalysis = op(
  n0,
  _GDA,
  0,
  () => GetDocumentAnalysisRequest,
  () => GetDocumentAnalysisResponse
);
export var GetDocumentTextDetection = op(
  n0,
  _GDTD,
  0,
  () => GetDocumentTextDetectionRequest,
  () => GetDocumentTextDetectionResponse
);
export var GetExpenseAnalysis = op(
  n0,
  _GEA,
  0,
  () => GetExpenseAnalysisRequest,
  () => GetExpenseAnalysisResponse
);
export var GetLendingAnalysis = op(
  n0,
  _GLA,
  0,
  () => GetLendingAnalysisRequest,
  () => GetLendingAnalysisResponse
);
export var GetLendingAnalysisSummary = op(
  n0,
  _GLAS,
  0,
  () => GetLendingAnalysisSummaryRequest,
  () => GetLendingAnalysisSummaryResponse
);
