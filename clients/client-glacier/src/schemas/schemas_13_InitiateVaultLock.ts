// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _h, _hH, _IVL, _IVLI, _IVLO, _lI, _P, _p, _VLP, _vN, _xali, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var InitiateVaultLockInput = struct(
  n0,
  _IVLI,
  0,
  [_aI, _vN, _p],
  [
    [0, 1],
    [0, 1],
    [() => VaultLockPolicy, 16],
  ]
);
export var InitiateVaultLockOutput = struct(
  n0,
  _IVLO,
  0,
  [_lI],
  [
    [
      0,
      {
        [_hH]: _xali,
      },
    ],
  ]
);
export var VaultLockPolicy = struct(n0, _VLP, 0, [_P], [0]);
export var InitiateVaultLock = op(
  n0,
  _IVL,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/lock-policy", 201],
  },
  () => InitiateVaultLockInput,
  () => InitiateVaultLockOutput
);
