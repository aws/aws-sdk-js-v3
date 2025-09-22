// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDe, _DDR, _DDRe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDestinationRequest = struct(n0, _DDR, 0, [_N], [[0, 1]]);
export var DeleteDestinationResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteDestination = op(
  n0,
  _DDe,
  {
    [_h]: ["DELETE", "/destinations/{Name}", 204],
  },
  () => DeleteDestinationRequest,
  () => DeleteDestinationResponse
);
