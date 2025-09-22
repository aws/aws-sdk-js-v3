// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DR, _DRI, _DRO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReportInput = struct(n0, _DRI, 0, [_a], [0]);
export var DeleteReportOutput = struct(n0, _DRO, 0, [], []);
export var DeleteReport = op(
  n0,
  _DR,
  0,
  () => DeleteReportInput,
  () => DeleteReportOutput
);
