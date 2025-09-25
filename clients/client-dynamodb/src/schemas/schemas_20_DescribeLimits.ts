// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AMRCU, _AMWCU, _DL, _DLI, _DLO, _TMRCU, _TMWCU, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLimitsInput = struct(n0, _DLI, 0, [], []);
export var DescribeLimitsOutput = struct(n0, _DLO, 0, [_AMRCU, _AMWCU, _TMRCU, _TMWCU], [1, 1, 1, 1]);
export var DescribeLimits = op(
  n0,
  _DL,
  0,
  () => DescribeLimitsInput,
  () => DescribeLimitsOutput
);
