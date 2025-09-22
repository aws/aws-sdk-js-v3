// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DRAS, _DRASR, _DRASRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRemoteAccessSessionRequest = struct(n0, _DRASR, 0, [_a], [0]);
export var DeleteRemoteAccessSessionResult = struct(n0, _DRASRe, 0, [], []);
export var DeleteRemoteAccessSession = op(
  n0,
  _DRAS,
  0,
  () => DeleteRemoteAccessSessionRequest,
  () => DeleteRemoteAccessSessionResult
);
