// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _cA, _CF, _CFR, _CFRr, _h, _n, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateFleetRequest = struct(n0, _CFR, 0, [_n, _t], [0, 128 | 0]);
export var CreateFleetResponse = struct(n0, _CFRr, 0, [_a, _n, _cA, _t], [0, 0, 4, 128 | 0]);
export var CreateFleet = op(
  n0,
  _CF,
  {
    [_h]: ["POST", "/createFleet", 200],
  },
  () => CreateFleetRequest,
  () => CreateFleetResponse
);
