// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DM, _DMR, _ht, _MI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelRequest = struct(
  n0,
  _DMR,
  0,
  [_AI, _MI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteModel = op(
  n0,
  _DM,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/models/{ModelId}", 204],
  },
  () => DeleteModelRequest,
  () => Unit
);
