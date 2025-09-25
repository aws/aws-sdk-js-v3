// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _DRPS, _DRPSR, _DRPSRe, _RPSI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRegexPatternSetRequest = struct(n0, _DRPSR, 0, [_RPSI, _CT], [0, 0]);
export var DeleteRegexPatternSetResponse = struct(n0, _DRPSRe, 0, [_CT], [0]);
export var DeleteRegexPatternSet = op(
  n0,
  _DRPS,
  0,
  () => DeleteRegexPatternSetRequest,
  () => DeleteRegexPatternSetResponse
);
