// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FSC, _FSCR, _ht, _rAI, _sN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var FlushStageCacheRequest = struct(
  n0,
  _FSCR,
  0,
  [_rAI, _sN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var FlushStageCache = op(
  n0,
  _FSC,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/stages/{stageName}/cache/data", 202],
  },
  () => FlushStageCacheRequest,
  () => Unit
);
