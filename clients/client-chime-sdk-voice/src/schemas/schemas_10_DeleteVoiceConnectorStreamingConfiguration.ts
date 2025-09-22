// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCSC, _DVCSCR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorStreamingConfigurationRequest = struct(n0, _DVCSCR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnectorStreamingConfiguration = op(
  n0,
  _DVCSC,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/streaming-configuration", 204],
  },
  () => DeleteVoiceConnectorStreamingConfigurationRequest,
  () => Unit
);
