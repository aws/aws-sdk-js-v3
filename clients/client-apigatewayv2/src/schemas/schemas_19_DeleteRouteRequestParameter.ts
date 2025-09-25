// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DRRP, _DRRPR, _ht, _RI, _RPK, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteRequestParameterRequest = struct(
  n0,
  _DRRPR,
  0,
  [_AI, _RPK, _RI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRouteRequestParameter = op(
  n0,
  _DRRP,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/routes/{RouteId}/requestparameters/{RequestParameterKey}", 204],
  },
  () => DeleteRouteRequestParameterRequest,
  () => Unit
);
