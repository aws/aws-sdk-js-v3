// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EA, _GCE, _GCER, _GCERe, _h, _RCE, _RCER, _RCERe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCustomEndpointRequest = struct(n0, _GCER, 0, [], []);
export var GetCustomEndpointResponse = struct(n0, _GCERe, 0, [_EA], [0]);
export var RegisterCustomEndpointRequest = struct(n0, _RCER, 0, [], []);
export var RegisterCustomEndpointResponse = struct(n0, _RCERe, 0, [_EA], [0]);
export var GetCustomEndpoint = op(
  n0,
  _GCE,
  {
    [_h]: ["GET", "/custom-endpoint", 200],
  },
  () => GetCustomEndpointRequest,
  () => GetCustomEndpointResponse
);
export var RegisterCustomEndpoint = op(
  n0,
  _RCE,
  {
    [_h]: ["POST", "/custom-endpoint", 201],
  },
  () => RegisterCustomEndpointRequest,
  () => RegisterCustomEndpointResponse
);
