// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCESC, _DVCESCR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorExternalSystemsConfigurationRequest = struct(n0, _DVCESCR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnectorExternalSystemsConfiguration = op(
  n0,
  _DVCESC,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/external-systems-configuration", 204],
  },
  () => DeleteVoiceConnectorExternalSystemsConfigurationRequest,
  () => Unit
);
