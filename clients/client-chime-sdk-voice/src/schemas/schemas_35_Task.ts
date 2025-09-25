// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UnprocessableEntityException as __UnprocessableEntityException } from "../models/index";
import {
  _C,
  _c,
  _e,
  _h,
  _hE,
  _M,
  _SSSTRto,
  _SSSTt,
  _SSTI,
  _SVTATRto,
  _SVTATt,
  _UEE,
  _VCI,
  _VTATI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StopSpeakerSearchTaskRequest = struct(
  n0,
  _SSSTRto,
  0,
  [_VCI, _SSTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var StopVoiceToneAnalysisTaskRequest = struct(
  n0,
  _SVTATRto,
  0,
  [_VCI, _VTATI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var UnprocessableEntityException = error(
  n0,
  _UEE,
  {
    [_e]: _c,
    [_hE]: 422,
  },
  [_C, _M],
  [0, 0],

  __UnprocessableEntityException
);
export var StopSpeakerSearchTask = op(
  n0,
  _SSSTt,
  {
    [_h]: [
      "POST",
      "/voice-connectors/{VoiceConnectorId}/speaker-search-tasks/{SpeakerSearchTaskId}?operation=stop",
      204,
    ],
  },
  () => StopSpeakerSearchTaskRequest,
  () => Unit
);
export var StopVoiceToneAnalysisTask = op(
  n0,
  _SVTATt,
  {
    [_h]: [
      "POST",
      "/voice-connectors/{VoiceConnectorId}/voice-tone-analysis-tasks/{VoiceToneAnalysisTaskId}?operation=stop",
      204,
    ],
  },
  () => StopVoiceToneAnalysisTaskRequest,
  () => Unit
);
