// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _A, _AT, _h, _hH, _RARP, _RARPR, _RI, AuthenticationHeaderType, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveAllResourcePermissionsRequest = struct(
  n0,
  _RARPR,
  0,
  [_AT, _RI],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
  ]
);
export var RemoveAllResourcePermissions = op(
  n0,
  _RARP,
  {
    [_h]: ["DELETE", "/api/v1/resources/{ResourceId}/permissions", 204],
  },
  () => RemoveAllResourcePermissionsRequest,
  () => Unit
);
