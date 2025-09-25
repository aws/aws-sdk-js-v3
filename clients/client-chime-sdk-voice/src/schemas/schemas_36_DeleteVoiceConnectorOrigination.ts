// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCO, _DVCOR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorOriginationRequest = struct(n0, _DVCOR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnectorOrigination = op(
  n0,
  _DVCO,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/origination", 204],
  },
  () => DeleteVoiceConnectorOriginationRequest,
  () => Unit
);
