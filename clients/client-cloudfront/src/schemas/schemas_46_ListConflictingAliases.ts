// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIc,
  _Al,
  _CA,
  _CAL,
  _CAon,
  _DI,
  _h,
  _hQ,
  _I,
  _LCA,
  _LCAR,
  _LCARi,
  _Ma,
  _MI,
  _NM,
  _Q,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictingAlias = struct(n0, _CA, 0, [_Al, _DI, _AIc], [0, 0, 0]);
export var ConflictingAliasesList = struct(n0, _CAL, 0, [_NM, _MI, _Q, _I], [0, 1, 1, [() => ConflictingAliases, 0]]);
export var ListConflictingAliasesRequest = struct(
  n0,
  _LCAR,
  0,
  [_DI, _Al, _Ma, _MI],
  [
    [
      0,
      {
        [_hQ]: _DI,
      },
    ],
    [
      0,
      {
        [_hQ]: _Al,
      },
    ],
    [
      0,
      {
        [_hQ]: _Ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _MI,
      },
    ],
  ]
);
export var ListConflictingAliasesResult = struct(n0, _LCARi, 0, [_CAL], [[() => ConflictingAliasesList, 16]]);
export var ConflictingAliases = list(n0, _CAon, 0, [
  () => ConflictingAlias,
  {
    [_xN]: _CA,
  },
]);
export var ListConflictingAliases = op(
  n0,
  _LCA,
  {
    [_h]: ["GET", "/2020-05-31/conflicting-alias", 200],
  },
  () => ListConflictingAliasesRequest,
  () => ListConflictingAliasesResult
);
