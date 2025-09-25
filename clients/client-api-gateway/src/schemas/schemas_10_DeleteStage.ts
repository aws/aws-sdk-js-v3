// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DS, _DSR, _ht, _rAI, _sN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStageRequest = struct(
  n0,
  _DSR,
  0,
  [_rAI, _sN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteStage = op(
  n0,
  _DS,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/stages/{stageName}", 202],
  },
  () => DeleteStageRequest,
  () => Unit
);
