// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ES, _ESR, _ESRx, _SI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExpireSessionRequest = struct(n0, _ESR, 0, [_SI], [0]);
export var ExpireSessionResult = struct(n0, _ESRx, 0, [], []);
export var ExpireSession = op(
  n0,
  _ES,
  0,
  () => ExpireSessionRequest,
  () => ExpireSessionResult
);
