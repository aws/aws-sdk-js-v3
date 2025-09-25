// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BPIa, _BPTJ, _EBPT, _EBPTI, _EBPTO, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExportBackupPlanTemplateInput = struct(n0, _EBPTI, 0, [_BPIa], [[0, 1]]);
export var ExportBackupPlanTemplateOutput = struct(n0, _EBPTO, 0, [_BPTJ], [0]);
export var ExportBackupPlanTemplate = op(
  n0,
  _EBPT,
  {
    [_h]: ["GET", "/backup/plans/{BackupPlanId}/toTemplate", 200],
  },
  () => ExportBackupPlanTemplateInput,
  () => ExportBackupPlanTemplateOutput
);
