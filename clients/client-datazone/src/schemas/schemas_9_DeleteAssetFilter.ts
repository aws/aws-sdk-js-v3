// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIs, _DAF, _DAFI, _dI, _ht, _i, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssetFilterInput = struct(
  n0,
  _DAFI,
  0,
  [_dI, _aIs, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAssetFilter = op(
  n0,
  _DAF,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/assets/{assetIdentifier}/filters/{identifier}", 204],
  },
  () => DeleteAssetFilterInput,
  () => Unit
);
