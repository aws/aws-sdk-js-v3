// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CNa, _DRC, _DRCR, _DRCRe, _en, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRouteCalculatorRequest = struct(n0, _DRCR, 0, [_CNa], [[0, 1]]);
export var DeleteRouteCalculatorResponse = struct(n0, _DRCRe, 0, [], []);
export var DeleteRouteCalculator = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/routes/v0/calculators/{CalculatorName}", 200],
    [_en]: ["cp.routes."],
  },
  () => DeleteRouteCalculatorRequest,
  () => DeleteRouteCalculatorResponse
);
