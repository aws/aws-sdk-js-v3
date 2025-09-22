// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _DA, _DAR, _DARe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAgentRequest = struct(n0, _DAR, 0, [_AA], [0]);
export var DeleteAgentResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAgent = op(
  n0,
  _DA,
  0,
  () => DeleteAgentRequest,
  () => DeleteAgentResponse
);
