// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _ADE,
  _CAJ,
  _CAJD,
  _CAJN,
  _CAJS,
  _CAJSa,
  _CD,
  _CDh,
  _CDU,
  _CI,
  _CIh,
  _CNGS,
  _CR,
  _CT,
  _CTo,
  _CVF,
  _CVFR,
  _CVFRr,
  _DARA,
  _DU,
  _DVF,
  _DVFR,
  _Fo,
  _FR,
  _GAS,
  _GCAJ,
  _GCAJR,
  _GCAJRe,
  _GMSJ,
  _GMSJR,
  _GMSJRe,
  _GTJ,
  _GTJR,
  _GTJRe,
  _GVF,
  _GVFR,
  _GVFRe,
  _h,
  _hQ,
  _IL,
  _ILS,
  _IML,
  _JES,
  _KMSEC,
  _LC,
  _LCa,
  _LIS,
  _LISM,
  _LMN,
  _LMT,
  _LO,
  _LVF,
  _LVFR,
  _LVFRi,
  _MA,
  _Me,
  _MF,
  _MR,
  _MSC,
  _MSCD,
  _MSCDe,
  _MSCP,
  _MSJ,
  _MSJN,
  _MSJSe,
  _MSL,
  _MSO,
  _MSo,
  _MSPC,
  _MSRH,
  _MSS,
  _NC,
  _NT,
  _NTe,
  _OBN,
  _OEKMSKI,
  _OK,
  _OL,
  _OSI,
  _P,
  _PC,
  _PR,
  _RTFU,
  _S,
  _SA,
  _SCAJ,
  _SCAJR,
  _SCAJRt,
  _SFU,
  _SMSJ,
  _SMSJR,
  _SMSJRt,
  _SO,
  _SSL,
  _ST,
  _STJ,
  _STJR,
  _STJRt,
  _Su,
  _Sub,
  _T,
  _Ta,
  _TD,
  _TFU,
  _TJ,
  _TJN,
  _TJSr,
  _UVF,
  _UVFR,
  _UVFRp,
  _VF,
  _VFFU,
  _VFI,
  _VFM,
  _VFN,
  _VN,
  _W,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { Media } from "./schemas_1_Job";
import { ContentRedaction, LanguageCodeList, ModelSettings, ToxicityDetection } from "./schemas_6_Job";
import { CallAnalyticsJobDetails } from "./schemas_11_Call";

/* eslint no-var: 0 */

export var Pronouns = sim(n0, _P, 0, 8);
export var CallAnalyticsJob = struct(
  n0,
  _CAJ,
  0,
  [_CAJN, _CAJS, _CAJD, _LC, _MSRH, _MF, _Me, _T, _ST, _CT, _CTo, _FR, _DARA, _ILS, _S, _CD, _Ta],
  [
    0,
    0,
    () => CallAnalyticsJobDetails,
    0,
    1,
    0,
    () => Media,
    () => Transcript,
    4,
    4,
    4,
    0,
    0,
    1,
    () => CallAnalyticsJobSettings,
    () => ChannelDefinitions,
    () => TagList,
  ]
);
export var CallAnalyticsJobSettings = struct(
  n0,
  _CAJSa,
  0,
  [_VN, _VFN, _VFM, _LMN, _CR, _LO, _LIS, _Su],
  [0, 0, 0, 0, () => ContentRedaction, 64 | 0, () => LanguageIdSettingsMap, () => Summarization]
);
export var ChannelDefinition = struct(n0, _CDh, 0, [_CI, _PR], [1, 0]);
export var ClinicalNoteGenerationSettings = struct(n0, _CNGS, 0, [_NT], [0]);
export var CreateVocabularyFilterRequest = struct(
  n0,
  _CVFR,
  0,
  [_VFN, _LC, _W, _VFFU, _Ta, _DARA],
  [[0, 1], 0, 64 | 0, 0, () => TagList, 0]
);
export var CreateVocabularyFilterResponse = struct(n0, _CVFRr, 0, [_VFN, _LC, _LMT], [0, 0, 4]);
export var DeleteVocabularyFilterRequest = struct(n0, _DVFR, 0, [_VFN], [[0, 1]]);
export var GetCallAnalyticsJobRequest = struct(n0, _GCAJR, 0, [_CAJN], [[0, 1]]);
export var GetCallAnalyticsJobResponse = struct(n0, _GCAJRe, 0, [_CAJ], [() => CallAnalyticsJob]);
export var GetMedicalScribeJobRequest = struct(n0, _GMSJR, 0, [_MSJN], [[0, 1]]);
export var GetMedicalScribeJobResponse = struct(n0, _GMSJRe, 0, [_MSJ], [() => MedicalScribeJob]);
export var GetTranscriptionJobRequest = struct(n0, _GTJR, 0, [_TJN], [[0, 1]]);
export var GetTranscriptionJobResponse = struct(n0, _GTJRe, 0, [_TJ], [() => TranscriptionJob]);
export var GetVocabularyFilterRequest = struct(n0, _GVFR, 0, [_VFN], [[0, 1]]);
export var GetVocabularyFilterResponse = struct(n0, _GVFRe, 0, [_VFN, _LC, _LMT, _DU], [0, 0, 4, 0]);
export var JobExecutionSettings = struct(n0, _JES, 0, [_ADE, _DARA], [2, 0]);
export var LanguageIdSettings = struct(n0, _LIS, 0, [_VN, _VFN, _LMN], [0, 0, 0]);
export var ListVocabularyFiltersRequest = struct(
  n0,
  _LVFR,
  0,
  [_NTe, _MR, _NC],
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
        [_hQ]: _NC,
      },
    ],
  ]
);
export var ListVocabularyFiltersResponse = struct(n0, _LVFRi, 0, [_NTe, _VF], [0, () => VocabularyFilters]);
export var MedicalScribeChannelDefinition = struct(n0, _MSCD, 0, [_CI, _PR], [1, 0]);
export var MedicalScribeContext = struct(n0, _MSC, 0, [_PC], [[() => MedicalScribePatientContext, 0]]);
export var MedicalScribeJob = struct(
  n0,
  _MSJ,
  0,
  [_MSJN, _MSJSe, _LC, _Me, _MSO, _ST, _CT, _CTo, _FR, _S, _DARA, _CD, _MSCP, _Ta],
  [
    0,
    0,
    0,
    () => Media,
    () => MedicalScribeOutput,
    4,
    4,
    4,
    0,
    () => MedicalScribeSettings,
    0,
    () => MedicalScribeChannelDefinitions,
    2,
    () => TagList,
  ]
);
export var MedicalScribeOutput = struct(n0, _MSO, 0, [_TFU, _CDU], [0, 0]);
export var MedicalScribePatientContext = struct(n0, _MSPC, 0, [_P], [[() => Pronouns, 0]]);
export var MedicalScribeSettings = struct(
  n0,
  _MSS,
  0,
  [_SSL, _MSL, _CIh, _VN, _VFN, _VFM, _CNGS],
  [2, 1, 2, 0, 0, 0, () => ClinicalNoteGenerationSettings]
);
export var Settings = struct(n0, _S, 0, [_VN, _SSL, _MSL, _CIh, _SA, _MA, _VFN, _VFM], [0, 2, 1, 2, 2, 1, 0, 0]);
export var StartCallAnalyticsJobRequest = struct(
  n0,
  _SCAJR,
  0,
  [_CAJN, _Me, _OL, _OEKMSKI, _DARA, _S, _Ta, _CD],
  [[0, 1], () => Media, 0, 0, 0, () => CallAnalyticsJobSettings, () => TagList, () => ChannelDefinitions]
);
export var StartCallAnalyticsJobResponse = struct(n0, _SCAJRt, 0, [_CAJ], [() => CallAnalyticsJob]);
export var StartMedicalScribeJobRequest = struct(
  n0,
  _SMSJR,
  0,
  [_MSJN, _Me, _OBN, _OEKMSKI, _KMSEC, _DARA, _S, _CD, _Ta, _MSC],
  [
    [0, 1],
    () => Media,
    0,
    0,
    128 | 0,
    0,
    () => MedicalScribeSettings,
    () => MedicalScribeChannelDefinitions,
    () => TagList,
    [() => MedicalScribeContext, 0],
  ]
);
export var StartMedicalScribeJobResponse = struct(n0, _SMSJRt, 0, [_MSJ], [() => MedicalScribeJob]);
export var StartTranscriptionJobRequest = struct(
  n0,
  _STJR,
  0,
  [_TJN, _LC, _MSRH, _MF, _Me, _OBN, _OK, _OEKMSKI, _KMSEC, _S, _MSo, _JES, _CR, _IL, _IML, _LO, _Sub, _Ta, _LIS, _TD],
  [
    [0, 1],
    0,
    1,
    0,
    () => Media,
    0,
    0,
    0,
    128 | 0,
    () => Settings,
    () => ModelSettings,
    () => JobExecutionSettings,
    () => ContentRedaction,
    2,
    2,
    64 | 0,
    () => Subtitles,
    () => TagList,
    () => LanguageIdSettingsMap,
    () => ToxicityDetection,
  ]
);
export var StartTranscriptionJobResponse = struct(n0, _STJRt, 0, [_TJ], [() => TranscriptionJob]);
export var Subtitles = struct(n0, _Sub, 0, [_Fo, _OSI], [64 | 0, 1]);
export var SubtitlesOutput = struct(n0, _SO, 0, [_Fo, _SFU, _OSI], [64 | 0, 64 | 0, 1]);
export var Summarization = struct(n0, _Su, 0, [_GAS], [2]);
export var Transcript = struct(n0, _T, 0, [_TFU, _RTFU], [0, 0]);
export var TranscriptionJob = struct(
  n0,
  _TJ,
  0,
  [
    _TJN,
    _TJSr,
    _LC,
    _MSRH,
    _MF,
    _Me,
    _T,
    _ST,
    _CT,
    _CTo,
    _FR,
    _S,
    _MSo,
    _JES,
    _CR,
    _IL,
    _IML,
    _LO,
    _ILS,
    _LCa,
    _Ta,
    _Sub,
    _LIS,
    _TD,
  ],
  [
    0,
    0,
    0,
    1,
    0,
    () => Media,
    () => Transcript,
    4,
    4,
    4,
    0,
    () => Settings,
    () => ModelSettings,
    () => JobExecutionSettings,
    () => ContentRedaction,
    2,
    2,
    64 | 0,
    1,
    () => LanguageCodeList,
    () => TagList,
    () => SubtitlesOutput,
    () => LanguageIdSettingsMap,
    () => ToxicityDetection,
  ]
);
export var UpdateVocabularyFilterRequest = struct(n0, _UVFR, 0, [_VFN, _W, _VFFU, _DARA], [[0, 1], 64 | 0, 0, 0]);
export var UpdateVocabularyFilterResponse = struct(n0, _UVFRp, 0, [_VFN, _LC, _LMT], [0, 0, 4]);
export var VocabularyFilterInfo = struct(n0, _VFI, 0, [_VFN, _LC, _LMT], [0, 0, 4]);
export var ChannelDefinitions = list(n0, _CD, 0, () => ChannelDefinition);
export var LanguageOptions = 64 | 0;

export var MedicalScribeChannelDefinitions = list(n0, _MSCDe, 0, () => MedicalScribeChannelDefinition);
export var SubtitleFileUris = 64 | 0;

export var SubtitleFormats = 64 | 0;

export var VocabularyFilters = list(n0, _VF, 0, () => VocabularyFilterInfo);
export var Words = 64 | 0;

export var LanguageIdSettingsMap = map(n0, _LISM, 0, 0, () => LanguageIdSettings);
export var CreateVocabularyFilter = op(
  n0,
  _CVF,
  {
    [_h]: ["POST", "/vocabularyFilters/{VocabularyFilterName}", 201],
  },
  () => CreateVocabularyFilterRequest,
  () => CreateVocabularyFilterResponse
);
export var DeleteVocabularyFilter = op(
  n0,
  _DVF,
  {
    [_h]: ["DELETE", "/vocabularyFilters/{VocabularyFilterName}", 204],
  },
  () => DeleteVocabularyFilterRequest,
  () => Unit
);
export var GetCallAnalyticsJob = op(
  n0,
  _GCAJ,
  {
    [_h]: ["GET", "/callanalyticsjobs/{CallAnalyticsJobName}", 200],
  },
  () => GetCallAnalyticsJobRequest,
  () => GetCallAnalyticsJobResponse
);
export var GetMedicalScribeJob = op(
  n0,
  _GMSJ,
  {
    [_h]: ["GET", "/medicalscribejobs/{MedicalScribeJobName}", 200],
  },
  () => GetMedicalScribeJobRequest,
  () => GetMedicalScribeJobResponse
);
export var GetTranscriptionJob = op(
  n0,
  _GTJ,
  {
    [_h]: ["GET", "/transcriptionjobs/{TranscriptionJobName}", 200],
  },
  () => GetTranscriptionJobRequest,
  () => GetTranscriptionJobResponse
);
export var GetVocabularyFilter = op(
  n0,
  _GVF,
  {
    [_h]: ["GET", "/vocabularyFilters/{VocabularyFilterName}", 200],
  },
  () => GetVocabularyFilterRequest,
  () => GetVocabularyFilterResponse
);
export var ListVocabularyFilters = op(
  n0,
  _LVF,
  {
    [_h]: ["GET", "/vocabularyFilters", 200],
  },
  () => ListVocabularyFiltersRequest,
  () => ListVocabularyFiltersResponse
);
export var StartCallAnalyticsJob = op(
  n0,
  _SCAJ,
  {
    [_h]: ["PUT", "/callanalyticsjobs/{CallAnalyticsJobName}", 200],
  },
  () => StartCallAnalyticsJobRequest,
  () => StartCallAnalyticsJobResponse
);
export var StartMedicalScribeJob = op(
  n0,
  _SMSJ,
  {
    [_h]: ["PUT", "/medicalscribejobs/{MedicalScribeJobName}", 200],
  },
  () => StartMedicalScribeJobRequest,
  () => StartMedicalScribeJobResponse
);
export var StartTranscriptionJob = op(
  n0,
  _STJ,
  {
    [_h]: ["PUT", "/transcriptionjobs/{TranscriptionJobName}", 200],
  },
  () => StartTranscriptionJobRequest,
  () => StartTranscriptionJobResponse
);
export var UpdateVocabularyFilter = op(
  n0,
  _UVF,
  {
    [_h]: ["PUT", "/vocabularyFilters/{VocabularyFilterName}", 200],
  },
  () => UpdateVocabularyFilterRequest,
  () => UpdateVocabularyFilterResponse
);
