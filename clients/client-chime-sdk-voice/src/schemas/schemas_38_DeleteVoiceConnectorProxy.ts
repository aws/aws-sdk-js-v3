// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DVCP, _DVCPR, _h, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVoiceConnectorProxyRequest = struct(n0, _DVCPR, 0, [_VCI], [[0, 1]]);
export var DeleteVoiceConnectorProxy = op(
  n0,
  _DVCP,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/programmable-numbers/proxy", 204],
  },
  () => DeleteVoiceConnectorProxyRequest,
  () => Unit
);
