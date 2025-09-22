// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _CD, _ED, _GVL, _GVLI, _GVLO, _h, _P, _Sta, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetVaultLockInput = struct(
  n0,
  _GVLI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetVaultLockOutput = struct(n0, _GVLO, 0, [_P, _Sta, _ED, _CD], [0, 0, 0, 0]);
export var GetVaultLock = op(
  n0,
  _GVL,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/lock-policy", 200],
  },
  () => GetVaultLockInput,
  () => GetVaultLockOutput
);
