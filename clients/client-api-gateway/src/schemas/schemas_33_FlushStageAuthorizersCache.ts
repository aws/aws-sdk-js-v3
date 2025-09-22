// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FSAC, _FSACR, _ht, _rAI, _sN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var FlushStageAuthorizersCacheRequest = struct(
  n0,
  _FSACR,
  0,
  [_rAI, _sN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var FlushStageAuthorizersCache = op(
  n0,
  _FSAC,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/stages/{stageName}/cache/authorizers", 202],
  },
  () => FlushStageAuthorizersCacheRequest,
  () => Unit
);
