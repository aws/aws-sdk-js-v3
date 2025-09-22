// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cI, _DCe, _DCR, _DCRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteControlRequest = struct(n0, _DCR, 0, [_cI], [[0, 1]]);
export var DeleteControlResponse = struct(n0, _DCRe, 0, [], []);
export var DeleteControl = op(
  n0,
  _DCe,
  {
    [_h]: ["DELETE", "/controls/{controlId}", 200],
  },
  () => DeleteControlRequest,
  () => DeleteControlResponse
);
