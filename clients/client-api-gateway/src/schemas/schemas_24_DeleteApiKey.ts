// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aK, _DAK, _DAKR, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApiKeyRequest = struct(n0, _DAKR, 0, [_aK], [[0, 1]]);
export var DeleteApiKey = op(
  n0,
  _DAK,
  {
    [_ht]: ["DELETE", "/apikeys/{apiKey}", 202],
  },
  () => DeleteApiKeyRequest,
  () => Unit
);
