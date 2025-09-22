// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIu, _DA, _DAR, _ht, _rAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAuthorizerRequest = struct(
  n0,
  _DAR,
  0,
  [_rAI, _aIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAuthorizer = op(
  n0,
  _DA,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/authorizers/{authorizerId}", 202],
  },
  () => DeleteAuthorizerRequest,
  () => Unit
);
