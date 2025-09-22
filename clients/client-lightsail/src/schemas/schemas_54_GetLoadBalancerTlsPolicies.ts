// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cip,
  _de,
  _GLBTP,
  _GLBTPR,
  _GLBTPRe,
  _ht,
  _iDs,
  _LBTP,
  _LBTPL,
  _n,
  _nPT,
  _prot,
  _pT,
  _tPl,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetLoadBalancerTlsPoliciesRequest = struct(n0, _GLBTPR, 0, [_pT], [0]);
export var GetLoadBalancerTlsPoliciesResult = struct(
  n0,
  _GLBTPRe,
  0,
  [_tPl, _nPT],
  [() => LoadBalancerTlsPolicyList, 0]
);
export var LoadBalancerTlsPolicy = struct(n0, _LBTP, 0, [_n, _iDs, _de, _prot, _cip], [0, 2, 0, 64 | 0, 64 | 0]);
export var LoadBalancerTlsPolicyList = list(n0, _LBTPL, 0, () => LoadBalancerTlsPolicy);
export var GetLoadBalancerTlsPolicies = op(
  n0,
  _GLBTP,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetLoadBalancerTlsPolicies", 200],
  },
  () => GetLoadBalancerTlsPoliciesRequest,
  () => GetLoadBalancerTlsPoliciesResult
);
