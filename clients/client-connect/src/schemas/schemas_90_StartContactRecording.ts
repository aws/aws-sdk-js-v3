// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _h, _ICI, _II, _IRT, _SCRR, _SCRRt, _SCRta, _VRC, _VRT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartContactRecordingRequest = struct(
  n0,
  _SCRR,
  0,
  [_II, _CI, _ICI, _VRC],
  [0, 0, 0, () => VoiceRecordingConfiguration]
);
export var StartContactRecordingResponse = struct(n0, _SCRRt, 0, [], []);
export var VoiceRecordingConfiguration = struct(n0, _VRC, 0, [_VRT, _IRT], [0, 0]);
export var StartContactRecording = op(
  n0,
  _SCRta,
  {
    [_h]: ["POST", "/contact/start-recording", 200],
  },
  () => StartContactRecordingRequest,
  () => StartContactRecordingResponse
);
