// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DDRe, _h, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDimensionRequest = struct(n0, _DDR, 0, [_n], [[0, 1]]);
export var DeleteDimensionResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteDimension = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/dimensions/{name}", 200],
  },
  () => DeleteDimensionRequest,
  () => DeleteDimensionResponse
);
