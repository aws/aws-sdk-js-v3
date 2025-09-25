// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _AVL, _AVLI, _h, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var AbortVaultLockInput = struct(
  n0,
  _AVLI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var AbortVaultLock = op(
  n0,
  _AVL,
  {
    [_h]: ["DELETE", "/{accountId}/vaults/{vaultName}/lock-policy", 204],
  },
  () => AbortVaultLockInput,
  () => Unit
);
