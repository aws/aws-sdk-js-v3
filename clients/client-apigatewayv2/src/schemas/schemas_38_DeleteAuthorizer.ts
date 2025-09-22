// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _AIu, _DAel, _DARe, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAuthorizerRequest = struct(
  n0,
  _DARe,
  0,
  [_AI, _AIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAuthorizer = op(
  n0,
  _DAel,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/authorizers/{AuthorizerId}", 204],
  },
  () => DeleteAuthorizerRequest,
  () => Unit
);
