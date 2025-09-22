// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DSe, _DSR, _ht, _SN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStageRequest = struct(
  n0,
  _DSR,
  0,
  [_AI, _SN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteStage = op(
  n0,
  _DSe,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/stages/{StageName}", 204],
  },
  () => DeleteStageRequest,
  () => Unit
);
