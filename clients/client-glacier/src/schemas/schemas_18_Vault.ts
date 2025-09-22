// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _h, _LTFV, _LTFVI, _LTFVO, _T, _vN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTagsForVaultInput = struct(
  n0,
  _LTFVI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListTagsForVaultOutput = struct(n0, _LTFVO, 0, [_T], [128 | 0]);
export var TagMap = 128 | 0;

export var ListTagsForVault = op(
  n0,
  _LTFV,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/tags", 200],
  },
  () => ListTagsForVaultInput,
  () => ListTagsForVaultOutput
);
