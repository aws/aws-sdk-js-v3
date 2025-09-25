// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DV, _DVI, _h, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var DeleteVaultInput = struct(
  n0,
  _DVI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteVault = op(
  n0,
  _DV,
  {
    [_h]: ["DELETE", "/{accountId}/vaults/{vaultName}", 204],
  },
  () => DeleteVaultInput,
  () => Unit
);
