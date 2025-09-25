// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCT, _DVCTR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorTerminationRequest = struct(n0, _DVCTR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnectorTermination = op(
  n0,
  _DVCT,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/termination", 204],
  },
  () => DeleteVoiceConnectorTerminationRequest,
  () => Unit
);
