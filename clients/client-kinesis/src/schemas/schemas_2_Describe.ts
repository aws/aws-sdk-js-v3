// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DL, _DLI, _DLO, _ODSC, _ODSCL, _OSC, _SL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLimitsInput = struct(n0, _DLI, 0, [], []);
export var DescribeLimitsOutput = struct(n0, _DLO, 0, [_SL, _OSC, _ODSC, _ODSCL], [1, 1, 1, 1]);
export var DescribeLimits = op(
  n0,
  _DL,
  0,
  () => DescribeLimitsInput,
  () => DescribeLimitsOutput
);
