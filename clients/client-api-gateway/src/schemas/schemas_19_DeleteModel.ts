// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMe, _DMRe, _ht, _mN, _rAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelRequest = struct(
  n0,
  _DMRe,
  0,
  [_rAI, _mN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteModel = op(
  n0,
  _DMe,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/models/{modelName}", 202],
  },
  () => DeleteModelRequest,
  () => Unit
);
