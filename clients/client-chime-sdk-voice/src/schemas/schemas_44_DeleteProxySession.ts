// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPS, _DPSR, _h, _PSI, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProxySessionRequest = struct(
  n0,
  _DPSR,
  0,
  [_VCI, _PSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProxySession = op(
  n0,
  _DPS,
  {
    [_h]: ["DELETE", "/voice-connectors/{VoiceConnectorId}/proxy-sessions/{ProxySessionId}", 204],
  },
  () => DeleteProxySessionRequest,
  () => Unit
);
