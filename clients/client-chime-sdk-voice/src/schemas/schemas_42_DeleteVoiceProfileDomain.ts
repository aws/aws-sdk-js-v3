// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVPD, _DVPDR, _h, _VPDI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceProfileDomainRequest = struct(n0, _DVPDR, 0, [_VPDI], [[0, 1]]);
export var DeleteVoiceProfileDomain = op(
  n0,
  _DVPD,
  {
    [_h]: ["DELETE", "/voice-profile-domains/{VoiceProfileDomainId}", 204],
  },
  () => DeleteVoiceProfileDomainRequest,
  () => Unit
);
