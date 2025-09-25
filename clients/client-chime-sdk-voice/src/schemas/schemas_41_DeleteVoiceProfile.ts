// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVP, _DVPR, _h, _VPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceProfileRequest = struct(n0, _DVPR, 0, [_VPI], [[0, 1]]);
export var DeleteVoiceProfile = op(
  n0,
  _DVP,
  {
    [_h]: ["DELETE", "/voice-profiles/{VoiceProfileId}", 204],
  },
  () => DeleteVoiceProfileRequest,
  () => Unit
);
