// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDE, _DDER, _DDERe, _EN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDevEndpointRequest = struct(n0, _DDER, 0, [_EN], [0]);
export var DeleteDevEndpointResponse = struct(n0, _DDERe, 0, [], []);
export var DeleteDevEndpoint = op(
  n0,
  _DDE,
  0,
  () => DeleteDevEndpointRequest,
  () => DeleteDevEndpointResponse
);
