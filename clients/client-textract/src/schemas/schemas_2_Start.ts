// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  BadDocumentException as __BadDocumentException,
  DocumentTooLargeException as __DocumentTooLargeException,
  UnsupportedDocumentException as __UnsupportedDocumentException,
} from "../models/index";
import {
  _AE,
  _AER,
  _AERn,
  _AID,
  _AIDMV,
  _AIDR,
  _AIDRn,
  _BDE,
  _Bl,
  _Bu,
  _By,
  _C,
  _c,
  _CRT,
  _D,
  _DDT,
  _DDTMV,
  _DDTR,
  _DDTRe,
  _DL,
  _DM,
  _DP,
  _DTLE,
  _e,
  _ED,
  _ID,
  _IDL,
  _JI,
  _JT,
  _KMSKI,
  _M,
  _N,
  _NC,
  _OC,
  _RAo,
  _SB,
  _SDTD,
  _SDTDR,
  _SDTDRt,
  _SEA,
  _SEAR,
  _SEARt,
  _SLA,
  _SLAR,
  _SLARt,
  _SNSTA,
  _SO,
  _SP,
  _UDE,
  _V,
  n0,
} from "./schemas_0";
import { BlockList, DocumentMetadata, ExpenseDocumentList, IdentityDocument } from "./schemas_4_Get";

/* eslint no-var: 0 */

export var AnalyzeExpenseRequest = struct(n0, _AER, 0, [_D], [() => Document]);
export var AnalyzeExpenseResponse = struct(
  n0,
  _AERn,
  0,
  [_DM, _ED],
  [() => DocumentMetadata, () => ExpenseDocumentList]
);
export var AnalyzeIDRequest = struct(n0, _AIDR, 0, [_DP], [() => DocumentPages]);
export var AnalyzeIDResponse = struct(
  n0,
  _AIDRn,
  0,
  [_ID, _DM, _AIDMV],
  [() => IdentityDocumentList, () => DocumentMetadata, 0]
);
export var BadDocumentException = error(
  n0,
  _BDE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __BadDocumentException
);
export var DetectDocumentTextRequest = struct(n0, _DDTR, 0, [_D], [() => Document]);
export var DetectDocumentTextResponse = struct(
  n0,
  _DDTRe,
  0,
  [_DM, _Bl, _DDTMV],
  [() => DocumentMetadata, () => BlockList, 0]
);
export var Document = struct(n0, _D, 0, [_By, _SO], [21, () => S3Object]);
export var DocumentLocation = struct(n0, _DL, 0, [_SO], [() => S3Object]);
export var DocumentTooLargeException = error(
  n0,
  _DTLE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __DocumentTooLargeException
);
export var NotificationChannel = struct(n0, _NC, 0, [_SNSTA, _RAo], [0, 0]);
export var OutputConfig = struct(n0, _OC, 0, [_SB, _SP], [0, 0]);
export var S3Object = struct(n0, _SO, 0, [_Bu, _N, _V], [0, 0, 0]);
export var StartDocumentTextDetectionRequest = struct(
  n0,
  _SDTDR,
  0,
  [_DL, _CRT, _JT, _NC, _OC, _KMSKI],
  [() => DocumentLocation, 0, 0, () => NotificationChannel, () => OutputConfig, 0]
);
export var StartDocumentTextDetectionResponse = struct(n0, _SDTDRt, 0, [_JI], [0]);
export var StartExpenseAnalysisRequest = struct(
  n0,
  _SEAR,
  0,
  [_DL, _CRT, _JT, _NC, _OC, _KMSKI],
  [() => DocumentLocation, 0, 0, () => NotificationChannel, () => OutputConfig, 0]
);
export var StartExpenseAnalysisResponse = struct(n0, _SEARt, 0, [_JI], [0]);
export var StartLendingAnalysisRequest = struct(
  n0,
  _SLAR,
  0,
  [_DL, _CRT, _JT, _NC, _OC, _KMSKI],
  [() => DocumentLocation, 0, 0, () => NotificationChannel, () => OutputConfig, 0]
);
export var StartLendingAnalysisResponse = struct(n0, _SLARt, 0, [_JI], [0]);
export var UnsupportedDocumentException = error(
  n0,
  _UDE,
  {
    [_e]: _c,
  },
  [_M, _C],
  [0, 0],

  __UnsupportedDocumentException
);
export var DocumentPages = list(n0, _DP, 0, () => Document);
export var IdentityDocumentList = list(n0, _IDL, 0, () => IdentityDocument);
export var AnalyzeExpense = op(
  n0,
  _AE,
  0,
  () => AnalyzeExpenseRequest,
  () => AnalyzeExpenseResponse
);
export var AnalyzeID = op(
  n0,
  _AID,
  0,
  () => AnalyzeIDRequest,
  () => AnalyzeIDResponse
);
export var DetectDocumentText = op(
  n0,
  _DDT,
  0,
  () => DetectDocumentTextRequest,
  () => DetectDocumentTextResponse
);
export var StartDocumentTextDetection = op(
  n0,
  _SDTD,
  0,
  () => StartDocumentTextDetectionRequest,
  () => StartDocumentTextDetectionResponse
);
export var StartExpenseAnalysis = op(
  n0,
  _SEA,
  0,
  () => StartExpenseAnalysisRequest,
  () => StartExpenseAnalysisResponse
);
export var StartLendingAnalysis = op(
  n0,
  _SLA,
  0,
  () => StartLendingAnalysisRequest,
  () => StartLendingAnalysisResponse
);
