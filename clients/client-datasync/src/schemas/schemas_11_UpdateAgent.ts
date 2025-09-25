// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _N, _UA, _UAR, _UARp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAgentRequest = struct(n0, _UAR, 0, [_AA, _N], [0, 0]);
export var UpdateAgentResponse = struct(n0, _UARp, 0, [], []);
export var UpdateAgent = op(
  n0,
  _UA,
  0,
  () => UpdateAgentRequest,
  () => UpdateAgentResponse
);
