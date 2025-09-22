// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CT,
  _GSST,
  _GSSTR,
  _GSSTRe,
  _GVTAT,
  _GVTATR,
  _GVTATRe,
  _h,
  _I,
  _SST,
  _SSTI,
  _SSTS,
  _UT,
  _VTAT,
  _VTATI,
  _VTATS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSpeakerSearchTaskRequest = struct(
  n0,
  _GSSTR,
  0,
  [_I, _SSTI],
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
  [_I, _VTATI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetVoiceToneAnalysisTaskResponse = struct(n0, _GVTATRe, 0, [_VTAT], [() => VoiceToneAnalysisTask]);
export var SpeakerSearchTask = struct(n0, _SST, 0, [_SSTI, _SSTS, _CT, _UT], [0, 0, 5, 5]);
export var VoiceToneAnalysisTask = struct(n0, _VTAT, 0, [_VTATI, _VTATS, _CT, _UT], [0, 0, 5, 5]);
export var GetSpeakerSearchTask = op(
  n0,
  _GSST,
  {
    [_h]: ["GET", "/media-insights-pipelines/{Identifier}/speaker-search-tasks/{SpeakerSearchTaskId}", 200],
  },
  () => GetSpeakerSearchTaskRequest,
  () => GetSpeakerSearchTaskResponse
);
export var GetVoiceToneAnalysisTask = op(
  n0,
  _GVTAT,
  {
    [_h]: ["GET", "/media-insights-pipelines/{Identifier}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}", 200],
  },
  () => GetVoiceToneAnalysisTaskRequest,
  () => GetVoiceToneAnalysisTaskResponse
);
