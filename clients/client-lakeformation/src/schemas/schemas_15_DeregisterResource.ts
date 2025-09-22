// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRe, _DRR, _DRRe, _h, _RAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterResourceRequest = struct(n0, _DRR, 0, [_RAe], [0]);
export var DeregisterResourceResponse = struct(n0, _DRRe, 0, [], []);
export var DeregisterResource = op(
  n0,
  _DRe,
  {
    [_h]: ["POST", "/DeregisterResource", 200],
  },
  () => DeregisterResourceRequest,
  () => DeregisterResourceResponse
);
