// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAP,
  _aAP,
  _AAPL,
  _AAPR,
  _AAPRs,
  _AAPs,
  _aAPs,
  _aAs,
  _AS,
  _aS,
  _cN,
  _hQ,
  _ht,
  _LAAP,
  _LAAPR,
  _LAAPRi,
  _mA,
  _mR,
  _na,
  _nT,
  _pA,
  _pAo,
  _ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessScope = struct(n0, _AS, 0, [_ty, _na], [0, 64 | 0]);
export var AssociateAccessPolicyRequest = struct(
  n0,
  _AAPR,
  0,
  [_cN, _pA, _pAo, _aS],
  [[0, 1], [0, 1], 0, () => AccessScope]
);
export var AssociateAccessPolicyResponse = struct(
  n0,
  _AAPRs,
  0,
  [_cN, _pA, _aAP],
  [0, 0, () => AssociatedAccessPolicy]
);
export var AssociatedAccessPolicy = struct(n0, _AAP, 0, [_pAo, _aS, _aAs, _mA], [0, () => AccessScope, 4, 4]);
export var ListAssociatedAccessPoliciesRequest = struct(
  n0,
  _LAAPR,
  0,
  [_cN, _pA, _mR, _nT],
  [
    [0, 1],
    [0, 1],
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
export var ListAssociatedAccessPoliciesResponse = struct(
  n0,
  _LAAPRi,
  0,
  [_cN, _pA, _nT, _aAPs],
  [0, 0, 0, () => AssociatedAccessPoliciesList]
);
export var AssociatedAccessPoliciesList = list(n0, _AAPL, 0, () => AssociatedAccessPolicy);
export var AssociateAccessPolicy = op(
  n0,
  _AAPs,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/access-entries/{principalArn}/access-policies", 200],
  },
  () => AssociateAccessPolicyRequest,
  () => AssociateAccessPolicyResponse
);
export var ListAssociatedAccessPolicies = op(
  n0,
  _LAAP,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/access-entries/{principalArn}/access-policies", 200],
  },
  () => ListAssociatedAccessPoliciesRequest,
  () => ListAssociatedAccessPoliciesResponse
);
