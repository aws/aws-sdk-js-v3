// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGSQ, _DGSQI, _DGSQO, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGameSessionQueueInput = struct(n0, _DGSQI, 0, [_N], [0]);
export var DeleteGameSessionQueueOutput = struct(n0, _DGSQO, 0, [], []);
export var DeleteGameSessionQueue = op(
  n0,
  _DGSQ,
  0,
  () => DeleteGameSessionQueueInput,
  () => DeleteGameSessionQueueOutput
);
