// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AT,
  _h,
  _hH,
  _hQ,
  _PIr,
  _PTr,
  _RI,
  _RRP,
  _RRPR,
  _t,
  AuthenticationHeaderType,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var RemoveResourcePermissionRequest = struct(
  n0,
  _RRPR,
  0,
  [_AT, _RI, _PIr, _PTr],
  [
    [
      () => AuthenticationHeaderType,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
  ]
);
export var RemoveResourcePermission = op(
  n0,
  _RRP,
  {
    [_h]: ["DELETE", "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}", 204],
  },
  () => RemoveResourcePermissionRequest,
  () => Unit
);
