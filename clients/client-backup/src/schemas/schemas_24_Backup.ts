// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _BVA,
  _BVN,
  _CL,
  _DA,
  _DAD,
  _h,
  _L,
  _MTCSA,
  _MTCSAD,
  _OITAFSR,
  _RPA,
  _URPL,
  _URPLI,
  _URPLO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CalculatedLifecycle = struct(n0, _CL, 0, [_MTCSA, _DA], [4, 4]);
export var Lifecycle = struct(n0, _L, 0, [_MTCSAD, _DAD, _OITAFSR], [1, 1, 2]);
export var UpdateRecoveryPointLifecycleInput = struct(
  n0,
  _URPLI,
  0,
  [_BVN, _RPA, _L],
  [[0, 1], [0, 1], () => Lifecycle]
);
export var UpdateRecoveryPointLifecycleOutput = struct(
  n0,
  _URPLO,
  0,
  [_BVA, _RPA, _L, _CL],
  [0, 0, () => Lifecycle, () => CalculatedLifecycle]
);
export var UpdateRecoveryPointLifecycle = op(
  n0,
  _URPL,
  {
    [_h]: ["POST", "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}", 200],
  },
  () => UpdateRecoveryPointLifecycleInput,
  () => UpdateRecoveryPointLifecycleOutput
);
