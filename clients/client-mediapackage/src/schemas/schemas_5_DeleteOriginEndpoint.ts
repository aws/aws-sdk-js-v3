// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DOE, _DOER, _DOERe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOriginEndpointRequest = struct(n0, _DOER, 0, [_I], [[0, 1]]);
export var DeleteOriginEndpointResponse = struct(n0, _DOERe, 0, [], []);
export var DeleteOriginEndpoint = op(
  n0,
  _DOE,
  {
    [_h]: ["DELETE", "/origin_endpoints/{Id}", 202],
  },
  () => DeleteOriginEndpointRequest,
  () => DeleteOriginEndpointResponse
);
