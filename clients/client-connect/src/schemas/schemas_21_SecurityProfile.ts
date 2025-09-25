// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _II, _LMR, _LMT, _LSPP, _LSPPR, _LSPPRi, _mR, _MRa, _NT, _nT, _Pe, _SPI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListSecurityProfilePermissionsRequest = struct(
  n0,
  _LSPPR,
  0,
  [_SPI, _II, _NT, _MRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListSecurityProfilePermissionsResponse = struct(n0, _LSPPRi, 0, [_Pe, _NT, _LMT, _LMR], [64 | 0, 0, 4, 0]);
export var PermissionsList = 64 | 0;

export var ListSecurityProfilePermissions = op(
  n0,
  _LSPP,
  {
    [_h]: ["GET", "/security-profiles-permissions/{InstanceId}/{SecurityProfileId}", 200],
  },
  () => ListSecurityProfilePermissionsRequest,
  () => ListSecurityProfilePermissionsResponse
);
