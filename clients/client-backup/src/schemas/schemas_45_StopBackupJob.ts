// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BJI, _h, _SBJIt, _SBJt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopBackupJobInput = struct(n0, _SBJIt, 0, [_BJI], [[0, 1]]);
export var StopBackupJob = op(
  n0,
  _SBJt,
  {
    [_h]: ["POST", "/backup-jobs/{BackupJobId}", 200],
  },
  () => StopBackupJobInput,
  () => Unit
);
