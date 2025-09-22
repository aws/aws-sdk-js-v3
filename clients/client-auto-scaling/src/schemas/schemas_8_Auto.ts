// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASGN, _DLBe, _DLBRT, _DLBT, _LBN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachLoadBalancersResultType = struct(n0, _DLBRT, 0, [], []);
export var DetachLoadBalancersType = struct(n0, _DLBT, 0, [_ASGN, _LBN], [0, 64 | 0]);
export var LoadBalancerNames = 64 | 0;

export var DetachLoadBalancers = op(
  n0,
  _DLBe,
  0,
  () => DetachLoadBalancersType,
  () => DetachLoadBalancersResultType
);
