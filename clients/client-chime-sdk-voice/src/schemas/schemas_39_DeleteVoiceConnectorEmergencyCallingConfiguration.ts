// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCECC, _DVCECCR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorEmergencyCallingConfigurationRequest = struct(n0, _DVCECCR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnectorEmergencyCallingConfiguration = op(
  n0,
  _DVCECC,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/emergency-calling-configuration", 204],
  },
  () => DeleteVoiceConnectorEmergencyCallingConfigurationRequest,
  () => Unit
);
