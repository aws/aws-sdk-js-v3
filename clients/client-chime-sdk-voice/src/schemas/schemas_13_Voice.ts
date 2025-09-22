// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { GoneException as __GoneException } from "../models/index";
import {
  _C,
  _c,
  _CL,
  _CRT,
  _CVP,
  _CVPR,
  _CVPRr,
  _e,
  _GE,
  _h,
  _hE,
  _LCa,
  _M,
  _SSST,
  _SSSTR,
  _SSSTRt,
  _SST,
  _SSTI,
  _SVTAT,
  _SVTATR,
  _SVTATRt,
  _TI,
  _UVP,
  _UVPR,
  _UVPRp,
  _VCI,
  _VP,
  _VPDI,
  _VPI,
  _VTAT,
  n0,
} from "./schemas_0";
import { SpeakerSearchTask, VoiceToneAnalysisTask } from "./schemas_19_Task";
import { VoiceProfile } from "./schemas_20_VoiceProfile";

/* eslint no-var: 0 */

export var CreateVoiceProfileRequest = struct(n0, _CVPR, 0, [_SSTI], [0]);
export var CreateVoiceProfileResponse = struct(n0, _CVPRr, 0, [_VP], [[() => VoiceProfile, 0]]);
export var GoneException = error(
  n0,
  _GE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_C, _M],
  [0, 0],

  __GoneException
);
export var StartSpeakerSearchTaskRequest = struct(n0, _SSSTR, 0, [_VCI, _TI, _VPDI, _CRT, _CL], [[0, 1], 0, 0, 0, 0]);
export var StartSpeakerSearchTaskResponse = struct(n0, _SSSTRt, 0, [_SST], [() => SpeakerSearchTask]);
export var StartVoiceToneAnalysisTaskRequest = struct(n0, _SVTATR, 0, [_VCI, _TI, _LCa, _CRT], [[0, 1], 0, 0, 0]);
export var StartVoiceToneAnalysisTaskResponse = struct(n0, _SVTATRt, 0, [_VTAT], [() => VoiceToneAnalysisTask]);
export var UpdateVoiceProfileRequest = struct(n0, _UVPR, 0, [_VPI, _SSTI], [[0, 1], 0]);
export var UpdateVoiceProfileResponse = struct(n0, _UVPRp, 0, [_VP], [[() => VoiceProfile, 0]]);
export var CreateVoiceProfile = op(
  n0,
  _CVP,
  {
    [_h]: ["POST", "/voice-profiles", 201],
  },
  () => CreateVoiceProfileRequest,
  () => CreateVoiceProfileResponse
);
export var StartSpeakerSearchTask = op(
  n0,
  _SSST,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks", 201],
  },
  () => StartSpeakerSearchTaskRequest,
  () => StartSpeakerSearchTaskResponse
);
export var StartVoiceToneAnalysisTask = op(
  n0,
  _SVTAT,
  {
    [_h]: ["POST", "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks", 201],
  },
  () => StartVoiceToneAnalysisTaskRequest,
  () => StartVoiceToneAnalysisTaskResponse
);
export var UpdateVoiceProfile = op(
  n0,
  _UVP,
  {
    [_h]: ["PUT", "/voice-profiles/{VoiceProfileId}", 200],
  },
  () => UpdateVoiceProfileRequest,
  () => UpdateVoiceProfileResponse
);
