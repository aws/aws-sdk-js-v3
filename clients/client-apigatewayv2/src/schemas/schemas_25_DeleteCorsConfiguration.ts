// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DCC, _DCCR, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCorsConfigurationRequest = struct(n0, _DCCR, 0, [_AI], [[0, 1]]);
export var DeleteCorsConfiguration = op(
  n0,
  _DCC,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/cors", 204],
  },
  () => DeleteCorsConfigurationRequest,
  () => Unit
);
