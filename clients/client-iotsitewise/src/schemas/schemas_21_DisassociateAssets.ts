// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIs, _cAI, _cT, _DAi, _DARi, _end, _hIi, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateAssetsRequest = struct(n0, _DARi, 0, [_aIs, _hIi, _cAI, _cT], [[0, 1], 0, 0, [0, 4]]);
export var DisassociateAssets = op(
  n0,
  _DAi,
  {
    [_ht]: ["POST", "/assets/{assetId}/disassociate", 200],
    [_end]: ["api."],
  },
  () => DisassociateAssetsRequest,
  () => Unit
);
