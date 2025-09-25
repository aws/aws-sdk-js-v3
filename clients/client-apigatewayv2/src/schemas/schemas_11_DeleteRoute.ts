// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DR, _DRR, _ht, _RI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteRequest = struct(
  n0,
  _DRR,
  0,
  [_AI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRoute = op(
  n0,
  _DR,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/routes/{RouteId}", 204],
  },
  () => DeleteRouteRequest,
  () => Unit
);
