// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _DV,
  _h,
  _hQ,
  _LP,
  _LPR,
  _LPRi,
  _LRP,
  _LRPR,
  _LRPRi,
  _LRPRRP,
  _LRPRRPi,
  _MR,
  _N,
  _NT,
  _P,
  _PA,
  _PN,
  _Po,
  _PT,
  _RA,
  _RP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPoliciesRequest = struct(
  n0,
  _LPR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListPoliciesResponse = struct(n0, _LPRi, 0, [_NT, _P], [0, () => Policies]);
export var ListResourcePoliciesRequest = struct(
  n0,
  _LRPR,
  0,
  [_RA, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListResourcePoliciesResponse = struct(
  n0,
  _LRPRi,
  0,
  [_NT, _RP],
  [0, () => ListResourcePoliciesResponseResourcePolicies]
);
export var ListResourcePoliciesResponseResourcePolicy = struct(n0, _LRPRRP, 0, [_PA, _PT, _PN], [0, 0, 0]);
export var Policy = struct(n0, _Po, 0, [_Ar, _DV, _PT, _N], [0, 1, 0, 0]);
export var ListResourcePoliciesResponseResourcePolicies = list(
  n0,
  _LRPRRPi,
  0,
  () => ListResourcePoliciesResponseResourcePolicy
);
export var Policies = list(n0, _P, 0, () => Policy);
export var ListPolicies = op(
  n0,
  _LP,
  {
    [_h]: ["POST", "/policies/?List", 200],
  },
  () => ListPoliciesRequest,
  () => ListPoliciesResponse
);
export var ListResourcePolicies = op(
  n0,
  _LRP,
  {
    [_h]: ["POST", "/resource-policies/{ResourceArn}/?List", 200],
  },
  () => ListResourcePoliciesRequest,
  () => ListResourcePoliciesResponse
);
