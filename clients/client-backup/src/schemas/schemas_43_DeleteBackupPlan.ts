// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BPA, _BPIa, _DBP, _DBPI, _DBPO, _DD, _h, _VI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackupPlanInput = struct(n0, _DBPI, 0, [_BPIa], [[0, 1]]);
export var DeleteBackupPlanOutput = struct(n0, _DBPO, 0, [_BPIa, _BPA, _DD, _VI], [0, 0, 4, 0]);
export var DeleteBackupPlan = op(
  n0,
  _DBP,
  {
    [_h]: ["DELETE", "/backup/plans/{BackupPlanId}", 200],
  },
  () => DeleteBackupPlanInput,
  () => DeleteBackupPlanOutput
);
