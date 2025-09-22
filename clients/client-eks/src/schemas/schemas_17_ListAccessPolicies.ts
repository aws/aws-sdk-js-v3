// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _a, _AP, _aP, _APL, _hQ, _ht, _LAP, _LAPR, _LAPRi, _mR, _n, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccessPolicy = struct(n0, _AP, 0, [_n, _a], [0, 0]);
export var ListAccessPoliciesRequest = struct(
  n0,
  _LAPR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListAccessPoliciesResponse = struct(n0, _LAPRi, 0, [_aP, _nT], [() => AccessPoliciesList, 0]);
export var AccessPoliciesList = list(n0, _APL, 0, () => AccessPolicy);
export var ListAccessPolicies = op(
  n0,
  _LAP,
  {
    [_ht]: ["GET", "/access-policies", 200],
  },
  () => ListAccessPoliciesRequest,
  () => ListAccessPoliciesResponse
);
