// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CAJD,
  _CAJN,
  _CAJS,
  _CAJSal,
  _CAJSall,
  _CIT,
  _CPL,
  _CR,
  _CT,
  _CTo,
  _FR,
  _h,
  _hQ,
  _IL,
  _ILS,
  _IML,
  _JNC,
  _LC,
  _LCa,
  _LCAC,
  _LCACR,
  _LCACRi,
  _LCAJ,
  _LCAJR,
  _LCAJRi,
  _LLM,
  _LLMR,
  _LLMRi,
  _LMSJ,
  _LMSJR,
  _LMSJRi,
  _LMT,
  _LMTJ,
  _LMTJR,
  _LMTJRi,
  _LMV,
  _LMVR,
  _LMVRi,
  _LTJ,
  _LTJR,
  _LTJRi,
  _LV,
  _LVR,
  _LVRi,
  _Mo,
  _MR,
  _MSJN,
  _MSJS,
  _MSJSe,
  _MSJSed,
  _MSo,
  _MTJN,
  _MTJS,
  _MTJSe,
  _NC,
  _NTe,
  _OLT,
  _SE,
  _SEt,
  _SEta,
  _Sp,
  _ST,
  _St,
  _TD,
  _TJN,
  _TJS,
  _TJSr,
  _TJSra,
  _Ty,
  _V,
  _VI,
  _VN,
  _VS,
  n0,
} from "./schemas_0";
import { CategoryProperties } from "./schemas_4_Call";
import { ContentRedaction, LanguageCodeList, LanguageModel, ModelSettings, ToxicityDetection } from "./schemas_6_Job";
import { CallAnalyticsJobDetails } from "./schemas_11_Call";

/* eslint no-var: 0 */

export var CallAnalyticsJobSummary = struct(
  n0,
  _CAJSal,
  0,
  [_CAJN, _CT, _ST, _CTo, _LC, _CAJS, _CAJD, _FR],
  [0, 4, 4, 4, 0, 0, () => CallAnalyticsJobDetails, 0]
);
export var ListCallAnalyticsCategoriesRequest = struct(
  n0,
  _LCACR,
  0,
  [_NTe, _MR],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListCallAnalyticsCategoriesResponse = struct(n0, _LCACRi, 0, [_NTe, _C], [0, () => CategoryPropertiesList]);
export var ListCallAnalyticsJobsRequest = struct(
  n0,
  _LCAJR,
  0,
  [_St, _JNC, _NTe, _MR],
  [
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _JNC,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListCallAnalyticsJobsResponse = struct(
  n0,
  _LCAJRi,
  0,
  [_St, _NTe, _CAJSall],
  [0, 0, () => CallAnalyticsJobSummaries]
);
export var ListLanguageModelsRequest = struct(
  n0,
  _LLMR,
  0,
  [_SE, _NC, _NTe, _MR],
  [
    [
      0,
      {
        [_hQ]: _SEt,
      },
    ],
    [
      0,
      {
        [_hQ]: _NC,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListLanguageModelsResponse = struct(n0, _LLMRi, 0, [_NTe, _Mo], [0, () => Models]);
export var ListMedicalScribeJobsRequest = struct(
  n0,
  _LMSJR,
  0,
  [_St, _JNC, _NTe, _MR],
  [
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _JNC,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListMedicalScribeJobsResponse = struct(
  n0,
  _LMSJRi,
  0,
  [_St, _NTe, _MSJS],
  [0, 0, () => MedicalScribeJobSummaries]
);
export var ListMedicalTranscriptionJobsRequest = struct(
  n0,
  _LMTJR,
  0,
  [_St, _JNC, _NTe, _MR],
  [
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _JNC,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListMedicalTranscriptionJobsResponse = struct(
  n0,
  _LMTJRi,
  0,
  [_St, _NTe, _MTJS],
  [0, 0, () => MedicalTranscriptionJobSummaries]
);
export var ListMedicalVocabulariesRequest = struct(
  n0,
  _LMVR,
  0,
  [_NTe, _MR, _SEta, _NC],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _SEta,
      },
    ],
    [
      0,
      {
        [_hQ]: _NC,
      },
    ],
  ]
);
export var ListMedicalVocabulariesResponse = struct(n0, _LMVRi, 0, [_St, _NTe, _V], [0, 0, () => Vocabularies]);
export var ListTranscriptionJobsRequest = struct(
  n0,
  _LTJR,
  0,
  [_St, _JNC, _NTe, _MR],
  [
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _JNC,
      },
    ],
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListTranscriptionJobsResponse = struct(
  n0,
  _LTJRi,
  0,
  [_St, _NTe, _TJS],
  [0, 0, () => TranscriptionJobSummaries]
);
export var ListVocabulariesRequest = struct(
  n0,
  _LVR,
  0,
  [_NTe, _MR, _SEta, _NC],
  [
    [
      0,
      {
        [_hQ]: _NTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _SEta,
      },
    ],
    [
      0,
      {
        [_hQ]: _NC,
      },
    ],
  ]
);
export var ListVocabulariesResponse = struct(n0, _LVRi, 0, [_St, _NTe, _V], [0, 0, () => Vocabularies]);
export var MedicalScribeJobSummary = struct(
  n0,
  _MSJSed,
  0,
  [_MSJN, _CT, _ST, _CTo, _LC, _MSJSe, _FR],
  [0, 4, 4, 4, 0, 0, 0]
);
export var MedicalTranscriptionJobSummary = struct(
  n0,
  _MTJSe,
  0,
  [_MTJN, _CT, _ST, _CTo, _LC, _TJSr, _FR, _OLT, _Sp, _CIT, _Ty],
  [0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0]
);
export var TranscriptionJobSummary = struct(
  n0,
  _TJSra,
  0,
  [_TJN, _CT, _ST, _CTo, _LC, _TJSr, _FR, _OLT, _CR, _MSo, _IL, _IML, _ILS, _LCa, _TD],
  [
    0,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    () => ContentRedaction,
    () => ModelSettings,
    2,
    2,
    1,
    () => LanguageCodeList,
    () => ToxicityDetection,
  ]
);
export var VocabularyInfo = struct(n0, _VI, 0, [_VN, _LC, _LMT, _VS], [0, 0, 4, 0]);
export var CallAnalyticsJobSummaries = list(n0, _CAJSall, 0, () => CallAnalyticsJobSummary);
export var CategoryPropertiesList = list(n0, _CPL, 0, () => CategoryProperties);
export var MedicalScribeJobSummaries = list(n0, _MSJS, 0, () => MedicalScribeJobSummary);
export var MedicalTranscriptionJobSummaries = list(n0, _MTJS, 0, () => MedicalTranscriptionJobSummary);
export var Models = list(n0, _Mo, 0, () => LanguageModel);
export var TranscriptionJobSummaries = list(n0, _TJS, 0, () => TranscriptionJobSummary);
export var Vocabularies = list(n0, _V, 0, () => VocabularyInfo);
export var ListCallAnalyticsCategories = op(
  n0,
  _LCAC,
  {
    [_h]: ["GET", "/callanalyticscategories", 200],
  },
  () => ListCallAnalyticsCategoriesRequest,
  () => ListCallAnalyticsCategoriesResponse
);
export var ListCallAnalyticsJobs = op(
  n0,
  _LCAJ,
  {
    [_h]: ["GET", "/callanalyticsjobs", 200],
  },
  () => ListCallAnalyticsJobsRequest,
  () => ListCallAnalyticsJobsResponse
);
export var ListLanguageModels = op(
  n0,
  _LLM,
  {
    [_h]: ["GET", "/languagemodels", 200],
  },
  () => ListLanguageModelsRequest,
  () => ListLanguageModelsResponse
);
export var ListMedicalScribeJobs = op(
  n0,
  _LMSJ,
  {
    [_h]: ["GET", "/medicalscribejobs", 200],
  },
  () => ListMedicalScribeJobsRequest,
  () => ListMedicalScribeJobsResponse
);
export var ListMedicalTranscriptionJobs = op(
  n0,
  _LMTJ,
  {
    [_h]: ["GET", "/medicaltranscriptionjobs", 200],
  },
  () => ListMedicalTranscriptionJobsRequest,
  () => ListMedicalTranscriptionJobsResponse
);
export var ListMedicalVocabularies = op(
  n0,
  _LMV,
  {
    [_h]: ["GET", "/medicalvocabularies", 200],
  },
  () => ListMedicalVocabulariesRequest,
  () => ListMedicalVocabulariesResponse
);
export var ListTranscriptionJobs = op(
  n0,
  _LTJ,
  {
    [_h]: ["GET", "/transcriptionjobs", 200],
  },
  () => ListTranscriptionJobsRequest,
  () => ListTranscriptionJobsResponse
);
export var ListVocabularies = op(
  n0,
  _LV,
  {
    [_h]: ["GET", "/vocabularies", 200],
  },
  () => ListVocabulariesRequest,
  () => ListVocabulariesResponse
);
