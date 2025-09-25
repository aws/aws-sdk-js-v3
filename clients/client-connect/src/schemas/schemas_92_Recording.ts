// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CI,
  _CRT,
  _h,
  _ICI,
  _II,
  _RCRes,
  _RCRR,
  _RCRRe,
  _SCRRto,
  _SCRRtop,
  _SCRRu,
  _SCRRus,
  _SCRtop,
  _SCRu,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ResumeContactRecordingRequest = struct(n0, _RCRR, 0, [_II, _CI, _ICI, _CRT], [0, 0, 0, 0]);
export var ResumeContactRecordingResponse = struct(n0, _RCRRe, 0, [], []);
export var StopContactRecordingRequest = struct(n0, _SCRRto, 0, [_II, _CI, _ICI, _CRT], [0, 0, 0, 0]);
export var StopContactRecordingResponse = struct(n0, _SCRRtop, 0, [], []);
export var SuspendContactRecordingRequest = struct(n0, _SCRRu, 0, [_II, _CI, _ICI, _CRT], [0, 0, 0, 0]);
export var SuspendContactRecordingResponse = struct(n0, _SCRRus, 0, [], []);
export var ResumeContactRecording = op(
  n0,
  _RCRes,
  {
    [_h]: ["POST", "/contact/resume-recording", 200],
  },
  () => ResumeContactRecordingRequest,
  () => ResumeContactRecordingResponse
);
export var StopContactRecording = op(
  n0,
  _SCRtop,
  {
    [_h]: ["POST", "/contact/stop-recording", 200],
  },
  () => StopContactRecordingRequest,
  () => StopContactRecordingResponse
);
export var SuspendContactRecording = op(
  n0,
  _SCRu,
  {
    [_h]: ["POST", "/contact/suspend-recording", 200],
  },
  () => SuspendContactRecordingRequest,
  () => SuspendContactRecordingResponse
);
