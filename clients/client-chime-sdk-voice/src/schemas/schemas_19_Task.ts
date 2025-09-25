// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CD,
  _CS,
  _CT,
  _GSST,
  _GSSTR,
  _GSSTRe,
  _GVTAT,
  _GVTATR,
  _GVTATRe,
  _h,
  _hQ,
  _IC,
  _iC,
  _Re,
  _SM,
  _SSD,
  _SSR,
  _SSRL,
  _SST,
  _SSTI,
  _SSTS,
  _ST,
  _TI,
  _UT,
  _VCI,
  _VGS,
  _VPI,
  _VTAT,
  _VTATI,
  _VTATS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CallDetails = struct(n0, _CD, 0, [_VCI, _TI, _IC], [0, 0, 2]);
export var GetSpeakerSearchTaskRequest = struct(
  n0,
  _GSSTR,
  0,
  [_VCI, _SSTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSpeakerSearchTaskResponse = struct(n0, _GSSTRe, 0, [_SST], [() => SpeakerSearchTask]);
export var GetVoiceToneAnalysisTaskRequest = struct(
  n0,
  _GVTATR,
  0,
  [_VCI, _VTATI, _IC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _iC,
      },
    ],
  ]
);
export var GetVoiceToneAnalysisTaskResponse = struct(n0, _GVTATRe, 0, [_VTAT], [() => VoiceToneAnalysisTask]);
export var SpeakerSearchDetails = struct(n0, _SSD, 0, [_Re, _VGS], [() => SpeakerSearchResultList, 0]);
export var SpeakerSearchResult = struct(n0, _SSR, 0, [_CS, _VPI], [1, 0]);
export var SpeakerSearchTask = struct(
  n0,
  _SST,
  0,
  [_SSTI, _SSTS, _CD, _SSD, _CT, _UT, _ST, _SM],
  [0, 0, () => CallDetails, () => SpeakerSearchDetails, 5, 5, 5, 0]
);
export var VoiceToneAnalysisTask = struct(
  n0,
  _VTAT,
  0,
  [_VTATI, _VTATS, _CD, _CT, _UT, _ST, _SM],
  [0, 0, () => CallDetails, 5, 5, 5, 0]
);
export var SpeakerSearchResultList = list(n0, _SSRL, 0, () => SpeakerSearchResult);
export var GetSpeakerSearchTask = op(
  n0,
  _GSST,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}", 200],
  },
  () => GetSpeakerSearchTaskRequest,
  () => GetSpeakerSearchTaskResponse
);
export var GetVoiceToneAnalysisTask = op(
  n0,
  _GVTAT,
  {
    [_h]: ["GET", "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}", 200],
  },
  () => GetVoiceToneAnalysisTaskRequest,
  () => GetVoiceToneAnalysisTaskResponse
);
