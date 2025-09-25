// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aO, _h, _hQ, _iAO, _LRA, _LRAR, _LRARi, _ma, _nM, _pS, _rAol, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListRoleAliasesRequest = struct(
  n0,
  _LRAR,
  0,
  [_pS, _ma, _aO],
  [
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
  ]
);
export var ListRoleAliasesResponse = struct(n0, _LRARi, 0, [_rAol, _nM], [64 | 0, 0]);
export var RoleAliases = 64 | 0;

export var ListRoleAliases = op(
  n0,
  _LRA,
  {
    [_h]: ["GET", "/role-aliases", 200],
  },
  () => ListRoleAliasesRequest,
  () => ListRoleAliasesResponse
);
