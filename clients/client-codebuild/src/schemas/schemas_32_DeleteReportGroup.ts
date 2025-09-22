// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _dR, _DRG, _DRGI, _DRGO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReportGroupInput = struct(n0, _DRGI, 0, [_a, _dR], [0, 2]);
export var DeleteReportGroupOutput = struct(n0, _DRGO, 0, [], []);
export var DeleteReportGroup = op(
  n0,
  _DRG,
  0,
  () => DeleteReportGroupInput,
  () => DeleteReportGroupOutput
);
