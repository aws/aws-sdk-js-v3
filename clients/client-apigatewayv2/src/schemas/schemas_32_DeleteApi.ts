// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DAe, _DAR, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiRequest = struct(n0, _DAR, 0, [_AI], [[0, 1]]);
export var DeleteApi = op(
  n0,
  _DAe,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}", 204],
  },
  () => DeleteApiRequest,
  () => Unit
);
