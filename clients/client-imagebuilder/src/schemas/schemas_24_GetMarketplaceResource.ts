// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _da, _GMR, _GMRR, _GMRRe, _ht, _rA, _rL, _rTe, _ur, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetMarketplaceResourceRequest = struct(n0, _GMRR, 0, [_rTe, _rA, _rL], [0, 0, 0]);
export var GetMarketplaceResourceResponse = struct(n0, _GMRRe, 0, [_rA, _ur, _da], [0, 0, 0]);
export var GetMarketplaceResource = op(
  n0,
  _GMR,
  {
    [_ht]: ["POST", "/GetMarketplaceResource", 200],
  },
  () => GetMarketplaceResourceRequest,
  () => GetMarketplaceResourceResponse
);
