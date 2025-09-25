// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _ht, _RAC, _RACR, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetAuthorizersCacheRequest = struct(
  n0,
  _RACR,
  0,
  [_AI, _SN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ResetAuthorizersCache = op(
  n0,
  _RAC,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/stages/{StageName}/cache/authorizers", 204],
  },
  () => ResetAuthorizersCacheRequest,
  () => Unit
);
