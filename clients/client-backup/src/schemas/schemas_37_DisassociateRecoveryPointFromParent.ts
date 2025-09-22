// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVN, _DRPFP, _DRPFPI, _h, _RPA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateRecoveryPointFromParentInput = struct(
  n0,
  _DRPFPI,
  0,
  [_BVN, _RPA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateRecoveryPointFromParent = op(
  n0,
  _DRPFP,
  {
    [_h]: ["DELETE", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/parentAssociation", 204],
  },
  () => DisassociateRecoveryPointFromParentInput,
  () => Unit
);
