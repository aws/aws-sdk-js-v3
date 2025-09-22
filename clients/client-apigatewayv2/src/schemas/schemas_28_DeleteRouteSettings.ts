// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DRSe, _DRSR, _ht, _RK, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteSettingsRequest = struct(
  n0,
  _DRSR,
  0,
  [_AI, _RK, _SN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRouteSettings = op(
  n0,
  _DRSe,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/stages/{StageName}/routesettings/{RouteKey}", 204],
  },
  () => DeleteRouteSettingsRequest,
  () => Unit
);
