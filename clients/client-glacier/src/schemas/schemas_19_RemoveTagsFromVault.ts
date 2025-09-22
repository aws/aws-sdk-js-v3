// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _h, _RTFV, _RTFVI, _TK, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var RemoveTagsFromVaultInput = struct(n0, _RTFVI, 0, [_aI, _vN, _TK], [[0, 1], [0, 1], 64 | 0]);
export var TagKeyList = 64 | 0;

export var RemoveTagsFromVault = op(
  n0,
  _RTFV,
  {
    [_h]: ["POST", "/{accountId}/vaults/{vaultName}/tags?operation=remove", 204],
  },
  () => RemoveTagsFromVaultInput,
  () => Unit
);
