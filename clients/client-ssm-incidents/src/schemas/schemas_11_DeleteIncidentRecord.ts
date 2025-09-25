// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DIR, _DIRI, _DIRO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIncidentRecordInput = struct(n0, _DIRI, 0, [_a], [0]);
export var DeleteIncidentRecordOutput = struct(n0, _DIRO, 0, [], []);
export var DeleteIncidentRecord = op(
  n0,
  _DIR,
  {
    [_h]: ["POST", "/deleteIncidentRecord", 204],
  },
  () => DeleteIncidentRecordInput,
  () => DeleteIncidentRecordOutput
);
