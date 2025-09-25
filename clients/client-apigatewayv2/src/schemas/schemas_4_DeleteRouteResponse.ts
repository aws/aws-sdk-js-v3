// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DRRe, _DRRR, _ht, _RI, _RRI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteResponseRequest = struct(
  n0,
  _DRRR,
  0,
  [_AI, _RI, _RRI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRouteResponse = op(
  n0,
  _DRRe,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}", 204],
  },
  () => DeleteRouteResponseRequest,
  () => Unit
);
