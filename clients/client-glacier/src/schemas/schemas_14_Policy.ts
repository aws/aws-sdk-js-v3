// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _GVAP, _GVAPI, _GVAPO, _h, _P, _p, _SVAP, _SVAPI, _VAP, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var GetVaultAccessPolicyInput = struct(
  n0,
  _GVAPI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetVaultAccessPolicyOutput = struct(n0, _GVAPO, 0, [_p], [[() => VaultAccessPolicy, 16]]);
export var SetVaultAccessPolicyInput = struct(
  n0,
  _SVAPI,
  0,
  [_aI, _vN, _p],
  [
    [0, 1],
    [0, 1],
    [() => VaultAccessPolicy, 16],
  ]
);
export var VaultAccessPolicy = struct(n0, _VAP, 0, [_P], [0]);
export var GetVaultAccessPolicy = op(
  n0,
  _GVAP,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/access-policy", 200],
  },
  () => GetVaultAccessPolicyInput,
  () => GetVaultAccessPolicyOutput
);
export var SetVaultAccessPolicy = op(
  n0,
  _SVAP,
  {
    [_h]: ["PUT", "/{accountId}/vaults/{vaultName}/access-policy", 204],
  },
  () => SetVaultAccessPolicyInput,
  () => Unit
);
