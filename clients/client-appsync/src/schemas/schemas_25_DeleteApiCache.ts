// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DAC, _DACR, _DACRe, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiCacheRequest = struct(n0, _DACR, 0, [_aI], [[0, 1]]);
export var DeleteApiCacheResponse = struct(n0, _DACRe, 0, [], []);
export var DeleteApiCache = op(
  n0,
  _DAC,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/ApiCaches", 200],
  },
  () => DeleteApiCacheRequest,
  () => DeleteApiCacheResponse
);
