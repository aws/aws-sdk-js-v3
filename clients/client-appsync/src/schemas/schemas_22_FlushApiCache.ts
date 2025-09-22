// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _FAC, _FACR, _FACRl, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var FlushApiCacheRequest = struct(n0, _FACR, 0, [_aI], [[0, 1]]);
export var FlushApiCacheResponse = struct(n0, _FACRl, 0, [], []);
export var FlushApiCache = op(
  n0,
  _FAC,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/FlushCache", 200],
  },
  () => FlushApiCacheRequest,
  () => FlushApiCacheResponse
);
