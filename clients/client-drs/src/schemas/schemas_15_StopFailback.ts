// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _rIID, _SF, _SFR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopFailbackRequest = struct(n0, _SFR, 0, [_rIID], [0]);
export var StopFailback = op(
  n0,
  _SF,
  {
    [_ht]: ["POST", "/StopFailback", 200],
  },
  () => StopFailbackRequest,
  () => Unit
);
