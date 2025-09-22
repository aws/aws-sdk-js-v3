// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _ASGN, _DLB, _DLBR, _DLBRe, _LB, _LBNo, _LBS, _LBSo, _MR, _NT, _Sta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoadBalancersRequest = struct(n0, _DLBR, 0, [_ASGN, _NT, _MR], [0, 0, 1]);
export var DescribeLoadBalancersResponse = struct(n0, _DLBRe, 0, [_LB, _NT], [() => LoadBalancerStates, 0]);
export var LoadBalancerState = struct(n0, _LBS, 0, [_LBNo, _Sta], [0, 0]);
export var LoadBalancerStates = list(n0, _LBSo, 0, () => LoadBalancerState);
export var DescribeLoadBalancers = op(
  n0,
  _DLB,
  0,
  () => DescribeLoadBalancersRequest,
  () => DescribeLoadBalancersResponse
);
