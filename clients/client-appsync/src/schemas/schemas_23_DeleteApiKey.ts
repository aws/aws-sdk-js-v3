// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DAK, _DAKR, _DAKRe, _h, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiKeyRequest = struct(
  n0,
  _DAKR,
  0,
  [_aI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteApiKeyResponse = struct(n0, _DAKRe, 0, [], []);
export var DeleteApiKey = op(
  n0,
  _DAK,
  {
    [_h]: ["DELETE", "/v1/apis/{apiId}/apikeys/{id}", 200],
  },
  () => DeleteApiKeyRequest,
  () => DeleteApiKeyResponse
);
