// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ES, _ESR, _ESRx, _h, _pI, _sIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExpireSessionRequest = struct(
  n0,
  _ESR,
  0,
  [_pI, _sIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ExpireSessionResponse = struct(n0, _ESRx, 0, [], []);
export var ExpireSession = op(
  n0,
  _ES,
  {
    [_h]: ["DELETE", "/portals/{portalId}/sessions/{sessionId}", 200],
  },
  () => ExpireSessionRequest,
  () => ExpireSessionResponse
);
