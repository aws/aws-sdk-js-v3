// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { LimitExceededException as __LimitExceededException } from "../models/index";
import {
  _aI,
  _ATTV,
  _ATTVI,
  _cI,
  _cl,
  _co,
  _CV,
  _CVI,
  _CVO,
  _e,
  _h,
  _hE,
  _hH,
  _L,
  _l,
  _LEE,
  _m,
  _PPC,
  _PPCI,
  _PPCO,
  _T,
  _t,
  _vN,
  _xaci,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var AddTagsToVaultInput = struct(n0, _ATTVI, 0, [_aI, _vN, _T], [[0, 1], [0, 1], 128 | 0]);
export var CreateVaultInput = struct(
  n0,
  _CVI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var CreateVaultOutput = struct(
  n0,
  _CVO,
  0,
  [_l],
  [
    [
      0,
      {
        [_hH]: _L,
      },
    ],
  ]
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_t, _co, _m],
  [0, 0, 0],

  __LimitExceededException
);
export var PurchaseProvisionedCapacityInput = struct(n0, _PPCI, 0, [_aI], [[0, 1]]);
export var PurchaseProvisionedCapacityOutput = struct(
  n0,
  _PPCO,
  0,
  [_cI],
  [
    [
      0,
      {
        [_hH]: _xaci,
      },
    ],
  ]
);
export var AddTagsToVault = op(
  n0,
  _ATTV,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/tags?operation=add", 204],
  },
  () => AddTagsToVaultInput,
  () => Unit
);
export var CreateVault = op(
  n0,
  _CV,
  {
    [_h]: ["PUT", "/{accountId}/vaults/{vaultName}", 201],
  },
  () => CreateVaultInput,
  () => CreateVaultOutput
);
export var PurchaseProvisionedCapacity = op(
  n0,
  _PPC,
  {
    [_h]: ["POST", "/{accountId}/provisioned-capacity", 201],
  },
  () => PurchaseProvisionedCapacityInput,
  () => PurchaseProvisionedCapacityOutput
);
