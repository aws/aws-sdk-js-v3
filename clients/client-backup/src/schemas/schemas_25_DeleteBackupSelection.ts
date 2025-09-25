// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BPIa, _DBS, _DBSI, _h, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackupSelectionInput = struct(
  n0,
  _DBSI,
  0,
  [_BPIa, _SI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteBackupSelection = op(
  n0,
  _DBS,
  {
    [_h]: ["DELETE", "/backup/plans/{BackupPlanId}/selections/{SelectionId}", 200],
  },
  () => DeleteBackupSelectionInput,
  () => Unit
);
