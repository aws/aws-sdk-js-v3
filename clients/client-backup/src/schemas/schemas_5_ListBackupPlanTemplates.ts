// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BPTI, _BPTL, _BPTLM, _BPTN, _h, _hQ, _LBPT, _LBPTI, _LBPTO, _MR, _mR, _NT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BackupPlanTemplatesListMember = struct(n0, _BPTLM, 0, [_BPTI, _BPTN], [0, 0]);
export var ListBackupPlanTemplatesInput = struct(
  n0,
  _LBPTI,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListBackupPlanTemplatesOutput = struct(n0, _LBPTO, 0, [_NT, _BPTL], [0, () => BackupPlanTemplatesList]);
export var BackupPlanTemplatesList = list(n0, _BPTL, 0, () => BackupPlanTemplatesListMember);
export var ListBackupPlanTemplates = op(
  n0,
  _LBPT,
  {
    [_h]: ["GET", "/backup/template/plans", 200],
  },
  () => ListBackupPlanTemplatesInput,
  () => ListBackupPlanTemplatesOutput
);
