// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  DetectedLanguageLowConfidenceException as __DetectedLanguageLowConfidenceException,
  InvalidFilterException as __InvalidFilterException,
  ServiceUnavailableException as __ServiceUnavailableException,
  TextSizeLimitExceededException as __TextSizeLimitExceededException,
  UnsupportedDisplayLanguageCodeException as __UnsupportedDisplayLanguageCodeException,
  UnsupportedLanguagePairException as __UnsupportedLanguagePairException,
} from "../models/index";
import {
  _A,
  _ADL,
  _AS,
  _AT,
  _ATL,
  _ATp,
  _B,
  _C,
  _c,
  _CA,
  _CT,
  _CTo,
  _D,
  _DARA,
  _DC,
  _Di,
  _DL,
  _DLC,
  _DLCi,
  _DLLCE,
  _Do,
  _DTTJ,
  _DTTJR,
  _DTTJRe,
  _DWEC,
  _e,
  _EK,
  _ET,
  _F,
  _Fi,
  _Fo,
  _For,
  _FRC,
  _GPD,
  _GPDR,
  _GPDRe,
  _GT,
  _GTR,
  _GTRe,
  _hE,
  _IDC,
  _IDCn,
  _IDS,
  _IFE,
  _IRC,
  _IT,
  _ITR,
  _ITRm,
  _JD,
  _JI,
  _JN,
  _JS,
  _L,
  _La,
  _LC,
  _LL,
  _LLi,
  _LLR,
  _LLRi,
  _LN,
  _Lo,
  _LPD,
  _LPDR,
  _LPDRi,
  _LT,
  _LTR,
  _LTRi,
  _LTTJ,
  _LTTJR,
  _LTTJRi,
  _LUA,
  _LUAA,
  _LUAADL,
  _LUAS,
  _M,
  _MR,
  _MS,
  _N,
  _NT,
  _ODC,
  _P,
  _PDC,
  _PDDL,
  _PDN,
  _PDP,
  _PDPL,
  _RT,
  _S,
  _s,
  _SAT,
  _SB,
  _SBT,
  _Se,
  _SLC,
  _SRC,
  _ST,
  _STC,
  _STTJ,
  _STTJR,
  _STTJRt,
  _STu,
  _SU,
  _SUE,
  _T,
  _Ta,
  _TC,
  _TD,
  _TDC,
  _TDCr,
  _TDF,
  _TDL,
  _TDR,
  _TDr,
  _TDra,
  _TDRr,
  _Te,
  _Tex,
  _TF,
  _TLC,
  _TLCa,
  _TLe,
  _TN,
  _TP,
  _TPL,
  _TS,
  _TSLEE,
  _TT,
  _TTJF,
  _TTJP,
  _TTJPL,
  _TTR,
  _TTr,
  _TTra,
  _TTRr,
  _UDLCE,
  _ULPE,
  n0,
} from "./schemas_0";
import { ParallelDataConfig } from "./schemas_2_ParallelData";
import { EncryptionKey } from "./schemas_6_Translation";
import { TagList } from "./schemas_8_Resource";

/* eslint no-var: 0 */

export var DocumentContent = sim(n0, _DC, 21, 8);
export var TerminologyFile = sim(n0, _TF, 21, 8);
export var TranslatedDocumentContent = sim(n0, _TDC, 21, 8);
export var AppliedTerminology = struct(n0, _AT, 0, [_N, _T], [0, () => TermList]);
export var DescribeTextTranslationJobRequest = struct(n0, _DTTJR, 0, [_JI], [0]);
export var DescribeTextTranslationJobResponse = struct(n0, _DTTJRe, 0, [_TTJP], [() => TextTranslationJobProperties]);
export var DetectedLanguageLowConfidenceException = error(
  n0,
  _DLLCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _DLC],
  [0, 0],

  __DetectedLanguageLowConfidenceException
);
export var Document = struct(n0, _Do, 0, [_C, _CTo], [[() => DocumentContent, 0], 0]);
export var GetParallelDataRequest = struct(n0, _GPDR, 0, [_N], [0]);
export var GetParallelDataResponse = struct(
  n0,
  _GPDRe,
  0,
  [_PDP, _DL, _ADL, _LUAADL],
  [
    () => ParallelDataProperties,
    () => ParallelDataDataLocation,
    () => ParallelDataDataLocation,
    () => ParallelDataDataLocation,
  ]
);
export var GetTerminologyRequest = struct(n0, _GTR, 0, [_N, _TDF], [0, 0]);
export var GetTerminologyResponse = struct(
  n0,
  _GTRe,
  0,
  [_TP, _TDL, _ADL],
  [() => TerminologyProperties, () => TerminologyDataLocation, () => TerminologyDataLocation]
);
export var ImportTerminologyRequest = struct(
  n0,
  _ITR,
  0,
  [_N, _MS, _D, _TD, _EK, _Ta],
  [0, 0, 0, [() => TerminologyData, 0], () => EncryptionKey, () => TagList]
);
export var ImportTerminologyResponse = struct(
  n0,
  _ITRm,
  0,
  [_TP, _ADL],
  [() => TerminologyProperties, () => TerminologyDataLocation]
);
export var InputDataConfig = struct(n0, _IDC, 0, [_SU, _CTo], [0, 0]);
export var InvalidFilterException = error(
  n0,
  _IFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidFilterException
);
export var JobDetails = struct(n0, _JD, 0, [_TDCr, _DWEC, _IDCn], [1, 1, 1]);
export var Language = struct(n0, _L, 0, [_LN, _LC], [0, 0]);
export var ListLanguagesRequest = struct(n0, _LLR, 0, [_DLCi, _NT, _MR], [0, 0, 1]);
export var ListLanguagesResponse = struct(n0, _LLRi, 0, [_La, _DLCi, _NT], [() => LanguagesList, 0, 0]);
export var ListParallelDataRequest = struct(n0, _LPDR, 0, [_NT, _MR], [0, 1]);
export var ListParallelDataResponse = struct(n0, _LPDRi, 0, [_PDPL, _NT], [() => ParallelDataPropertiesList, 0]);
export var ListTerminologiesRequest = struct(n0, _LTR, 0, [_NT, _MR], [0, 1]);
export var ListTerminologiesResponse = struct(n0, _LTRi, 0, [_TPL, _NT], [() => TerminologyPropertiesList, 0]);
export var ListTextTranslationJobsRequest = struct(
  n0,
  _LTTJR,
  0,
  [_F, _NT, _MR],
  [() => TextTranslationJobFilter, 0, 1]
);
export var ListTextTranslationJobsResponse = struct(
  n0,
  _LTTJRi,
  0,
  [_TTJPL, _NT],
  [() => TextTranslationJobPropertiesList, 0]
);
export var OutputDataConfig = struct(n0, _ODC, 0, [_SU, _EK], [0, () => EncryptionKey]);
export var ParallelDataDataLocation = struct(n0, _PDDL, 0, [_RT, _Lo], [0, 0]);
export var ParallelDataProperties = struct(
  n0,
  _PDP,
  0,
  [_N, _A, _D, _S, _SLC, _TLC, _PDC, _M, _IDS, _IRC, _FRC, _SRC, _EK, _CA, _LUA, _LUAS, _LUAA],
  [0, 0, 0, 0, 0, 64 | 0, () => ParallelDataConfig, 0, 1, 1, 1, 1, () => EncryptionKey, 4, 4, 0, 4]
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _s,
    [_hE]: 503,
  },
  [_M],
  [0],

  __ServiceUnavailableException
);
export var StartTextTranslationJobRequest = struct(
  n0,
  _STTJR,
  0,
  [_JN, _IDC, _ODC, _DARA, _SLC, _TLC, _TN, _PDN, _CT, _Se],
  [0, () => InputDataConfig, () => OutputDataConfig, 0, 0, 64 | 0, 64 | 0, 64 | 0, [0, 4], () => TranslationSettings]
);
export var StartTextTranslationJobResponse = struct(n0, _STTJRt, 0, [_JI, _JS], [0, 0]);
export var Term = struct(n0, _Te, 0, [_ST, _TT], [0, 0]);
export var TerminologyData = struct(n0, _TD, 0, [_Fi, _Fo, _Di], [[() => TerminologyFile, 0], 0, 0]);
export var TerminologyDataLocation = struct(n0, _TDL, 0, [_RT, _Lo], [0, 0]);
export var TerminologyProperties = struct(
  n0,
  _TP,
  0,
  [_N, _D, _A, _SLC, _TLC, _EK, _SB, _TC, _CA, _LUA, _Di, _M, _STC, _Fo],
  [0, 0, 0, 0, 64 | 0, () => EncryptionKey, 1, 1, 4, 4, 0, 0, 1, 0]
);
export var TextSizeLimitExceededException = error(
  n0,
  _TSLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __TextSizeLimitExceededException
);
export var TextTranslationJobFilter = struct(n0, _TTJF, 0, [_JN, _JS, _SBT, _SAT], [0, 0, 4, 4]);
export var TextTranslationJobProperties = struct(
  n0,
  _TTJP,
  0,
  [_JI, _JN, _JS, _JD, _SLC, _TLC, _TN, _PDN, _M, _STu, _ET, _IDC, _ODC, _DARA, _Se],
  [
    0,
    0,
    0,
    () => JobDetails,
    0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    4,
    4,
    () => InputDataConfig,
    () => OutputDataConfig,
    0,
    () => TranslationSettings,
  ]
);
export var TranslatedDocument = struct(n0, _TDr, 0, [_C], [[() => TranslatedDocumentContent, 0]]);
export var TranslateDocumentRequest = struct(
  n0,
  _TDR,
  0,
  [_Do, _TN, _SLC, _TLCa, _Se],
  [[() => Document, 0], 64 | 0, 0, 0, () => TranslationSettings]
);
export var TranslateDocumentResponse = struct(
  n0,
  _TDRr,
  0,
  [_TDr, _SLC, _TLCa, _ATp, _AS],
  [[() => TranslatedDocument, 0], 0, 0, () => AppliedTerminologyList, () => TranslationSettings]
);
export var TranslateTextRequest = struct(
  n0,
  _TTR,
  0,
  [_Tex, _TN, _SLC, _TLCa, _Se],
  [0, 64 | 0, 0, 0, () => TranslationSettings]
);
export var TranslateTextResponse = struct(
  n0,
  _TTRr,
  0,
  [_TTr, _SLC, _TLCa, _ATp, _AS],
  [0, 0, 0, () => AppliedTerminologyList, () => TranslationSettings]
);
export var TranslationSettings = struct(n0, _TS, 0, [_For, _P, _B], [0, 0, 0]);
export var UnsupportedDisplayLanguageCodeException = error(
  n0,
  _UDLCE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _DLCi],
  [0, 0],

  __UnsupportedDisplayLanguageCodeException
);
export var UnsupportedLanguagePairException = error(
  n0,
  _ULPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _SLC, _TLCa],
  [0, 0, 0],

  __UnsupportedLanguagePairException
);
export var AppliedTerminologyList = list(n0, _ATL, 0, () => AppliedTerminology);
export var LanguageCodeStringList = 64 | 0;

export var LanguagesList = list(n0, _LL, 0, () => Language);
export var ParallelDataPropertiesList = list(n0, _PDPL, 0, () => ParallelDataProperties);
export var ResourceNameList = 64 | 0;

export var TargetLanguageCodeStringList = 64 | 0;

export var TerminologyPropertiesList = list(n0, _TPL, 0, () => TerminologyProperties);
export var TermList = list(n0, _TLe, 0, () => Term);
export var TextTranslationJobPropertiesList = list(n0, _TTJPL, 0, () => TextTranslationJobProperties);
export var DescribeTextTranslationJob = op(
  n0,
  _DTTJ,
  0,
  () => DescribeTextTranslationJobRequest,
  () => DescribeTextTranslationJobResponse
);
export var GetParallelData = op(
  n0,
  _GPD,
  0,
  () => GetParallelDataRequest,
  () => GetParallelDataResponse
);
export var GetTerminology = op(
  n0,
  _GT,
  0,
  () => GetTerminologyRequest,
  () => GetTerminologyResponse
);
export var ImportTerminology = op(
  n0,
  _IT,
  0,
  () => ImportTerminologyRequest,
  () => ImportTerminologyResponse
);
export var ListLanguages = op(
  n0,
  _LLi,
  0,
  () => ListLanguagesRequest,
  () => ListLanguagesResponse
);
export var ListParallelData = op(
  n0,
  _LPD,
  0,
  () => ListParallelDataRequest,
  () => ListParallelDataResponse
);
export var ListTerminologies = op(
  n0,
  _LT,
  0,
  () => ListTerminologiesRequest,
  () => ListTerminologiesResponse
);
export var ListTextTranslationJobs = op(
  n0,
  _LTTJ,
  0,
  () => ListTextTranslationJobsRequest,
  () => ListTextTranslationJobsResponse
);
export var StartTextTranslationJob = op(
  n0,
  _STTJ,
  0,
  () => StartTextTranslationJobRequest,
  () => StartTextTranslationJobResponse
);
export var TranslateDocument = op(
  n0,
  _TDra,
  0,
  () => TranslateDocumentRequest,
  () => TranslateDocumentResponse
);
export var TranslateText = op(
  n0,
  _TTra,
  0,
  () => TranslateTextRequest,
  () => TranslateTextResponse
);
