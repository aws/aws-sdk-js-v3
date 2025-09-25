// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dN, _ht, _n, _US, _USR, _USRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateSpaceRequest = struct(n0, _USR, 0, [_n, _d], [[0, 1], 0]);
export var UpdateSpaceResponse = struct(n0, _USRp, 0, [_n, _dN, _d], [0, 0, 0]);
export var UpdateSpace = op(
  n0,
  _US,
  {
    [_ht]: ["PATCH", "/v1/spaces/{name}", 200],
  },
  () => UpdateSpaceRequest,
  () => UpdateSpaceResponse
);
