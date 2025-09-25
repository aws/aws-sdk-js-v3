// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dN, _DS, _DSR, _DSRe, _ht, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSpaceRequest = struct(n0, _DSR, 0, [_n], [[0, 1]]);
export var DeleteSpaceResponse = struct(n0, _DSRe, 0, [_n, _dN], [0, 0]);
export var DeleteSpace = op(
  n0,
  _DS,
  {
    [_ht]: ["DELETE", "/v1/spaces/{name}", 200],
  },
  () => DeleteSpaceRequest,
  () => DeleteSpaceResponse
);
