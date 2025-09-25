// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSR, _DSRe, _h, _sI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSessionRequest = struct(n0, _DSR, 0, [_sI], [[0, 1]]);
export var DeleteSessionResponse = struct(n0, _DSRe, 0, [], []);
export var DeleteSession = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/sessions/{sessionIdentifier}/", 200],
  },
  () => DeleteSessionRequest,
  () => DeleteSessionResponse
);
