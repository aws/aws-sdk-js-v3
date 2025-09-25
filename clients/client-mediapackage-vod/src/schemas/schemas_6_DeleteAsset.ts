// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DA, _DAR, _DARe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssetRequest = struct(n0, _DAR, 0, [_I], [[0, 1]]);
export var DeleteAssetResponse = struct(n0, _DARe, 0, [], []);
export var DeleteAsset = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/assets/{Id}", 202],
  },
  () => DeleteAssetRequest,
  () => DeleteAssetResponse
);
