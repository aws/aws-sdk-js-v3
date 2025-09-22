// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _CVL, _CVLI, _h, _lI, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var CompleteVaultLockInput = struct(
  n0,
  _CVLI,
  0,
  [_aI, _vN, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var CompleteVaultLock = op(
  n0,
  _CVL,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}", 204],
  },
  () => CompleteVaultLockInput,
  () => Unit
);
