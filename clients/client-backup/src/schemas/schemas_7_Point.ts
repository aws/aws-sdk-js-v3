// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidResourceStateException as __InvalidResourceStateException } from "../models/index";
import {
  _BVN,
  _C,
  _c,
  _cD,
  _CDa,
  _CLH,
  _CLHI,
  _CLHO,
  _Co,
  _DRP,
  _DRPI,
  _DRPi,
  _DRPIi,
  _e,
  _h,
  _hQ,
  _IRSE,
  _LHI,
  _M,
  _RPA,
  _RRID,
  _rRID,
  _T,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelLegalHoldInput = struct(
  n0,
  _CLHI,
  0,
  [_LHI, _CDa, _RRID],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cD,
      },
    ],
    [
      1,
      {
        [_hQ]: _rRID,
      },
    ],
  ]
);
export var CancelLegalHoldOutput = struct(n0, _CLHO, 0, [], []);
export var DeleteRecoveryPointInput = struct(
  n0,
  _DRPI,
  0,
  [_BVN, _RPA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DisassociateRecoveryPointInput = struct(
  n0,
  _DRPIi,
  0,
  [_BVN, _RPA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var InvalidResourceStateException = error(
  n0,
  _IRSE,
  {
    [_e]: _c,
  },
  [_C, _M, _T, _Co],
  [0, 0, 0, 0],

  __InvalidResourceStateException
);
export var CancelLegalHold = op(
  n0,
  _CLH,
  {
    [_h]: ["DELETE", "/legal-holds/{LegalHoldId}", 201],
  },
  () => CancelLegalHoldInput,
  () => CancelLegalHoldOutput
);
export var DeleteRecoveryPoint = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}", 200],
  },
  () => DeleteRecoveryPointInput,
  () => Unit
);
export var DisassociateRecoveryPoint = op(
  n0,
  _DRPi,
  {
    [_h]: ["POST", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate", 200],
  },
  () => DisassociateRecoveryPointInput,
  () => Unit
);
