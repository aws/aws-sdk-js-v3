// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLB, _DLBR, _DLBRe, _ht, _lBN, _o, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLoadBalancerRequest = struct(n0, _DLBR, 0, [_lBN], [0]);
export var DeleteLoadBalancerResult = struct(n0, _DLBRe, 0, [_o], [() => OperationList]);
export var DeleteLoadBalancer = op(
  n0,
  _DLB,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/DeleteLoadBalancer", 200],
  },
  () => DeleteLoadBalancerRequest,
  () => DeleteLoadBalancerResult
);
