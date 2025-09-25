// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _AAR, _aIs, _cAI, _cT, _end, _hIi, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateAssetsRequest = struct(n0, _AAR, 0, [_aIs, _hIi, _cAI, _cT], [[0, 1], 0, 0, [0, 4]]);
export var AssociateAssets = op(
  n0,
  _AA,
  {
    [_ht]: ["POST", "/assets/{assetId}/associate", 200],
    [_end]: ["api."],
  },
  () => AssociateAssetsRequest,
  () => Unit
);
