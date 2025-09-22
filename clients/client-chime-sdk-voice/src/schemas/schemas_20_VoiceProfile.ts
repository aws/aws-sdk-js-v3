// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _ETx, _GVP, _GVPR, _GVPRe, _h, _UT, _VP, _VPA, _VPDI, _VPI, Arn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetVoiceProfileRequest = struct(n0, _GVPR, 0, [_VPI], [[0, 1]]);
export var GetVoiceProfileResponse = struct(n0, _GVPRe, 0, [_VP], [[() => VoiceProfile, 0]]);
export var VoiceProfile = struct(n0, _VP, 0, [_VPI, _VPA, _VPDI, _CT, _UT, _ETx], [0, [() => Arn, 0], 0, 5, 5, 5]);
export var GetVoiceProfile = op(
  n0,
  _GVP,
  {
    [_h]: ["GET", "/voice-profiles/{VoiceProfileId}", 200],
  },
  () => GetVoiceProfileRequest,
  () => GetVoiceProfileResponse
);
