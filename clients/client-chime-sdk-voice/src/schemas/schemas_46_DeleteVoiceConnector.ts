// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVC, _DVCR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorRequest = struct(n0, _DVCR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnector = op(
  n0,
  _DVC,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}", 204],
  },
  () => DeleteVoiceConnectorRequest,
  () => Unit
);
