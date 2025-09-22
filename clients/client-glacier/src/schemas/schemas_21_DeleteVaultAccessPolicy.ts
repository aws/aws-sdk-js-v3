// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DVAP, _DVAPI, _h, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var DeleteVaultAccessPolicyInput = struct(
  n0,
  _DVAPI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteVaultAccessPolicy = op(
  n0,
  _DVAP,
  {
    [_h]: ["DELETE", "/{accountId}/vaults/{vaultName}/access-policy", 204],
  },
  () => DeleteVaultAccessPolicyInput,
  () => Unit
);
