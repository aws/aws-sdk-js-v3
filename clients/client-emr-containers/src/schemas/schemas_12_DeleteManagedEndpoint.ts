// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DME, _DMER, _DMERe, _h, _i, _vCI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteManagedEndpointRequest = struct(
  n0,
  _DMER,
  0,
  [_i, _vCI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteManagedEndpointResponse = struct(n0, _DMERe, 0, [_i, _vCI], [0, 0]);
export var DeleteManagedEndpoint = op(
  n0,
  _DME,
  {
    [_h]: ["DELETE", "/virtualclusters/{virtualClusterId}/endpoints/{id}", 200],
  },
  () => DeleteManagedEndpointRequest,
  () => DeleteManagedEndpointResponse
);
