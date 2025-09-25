// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSR, _DSRR, _h, _SRI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSipRuleRequest = struct(n0, _DSRR, 0, [_SRI], [[0, 1]]);
export var DeleteSipRule = op(
  n0,
  _DSR,
  {
    [_h]: ["DELETE", "/sip-rules/{SipRuleId}", 204],
  },
  () => DeleteSipRuleRequest,
  () => Unit
);
