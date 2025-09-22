// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _At,
  _DLBA,
  _DLBAI,
  _DLBAO,
  _K,
  _LBAo,
  _LBAoada,
  _LBAoadal,
  _MLBA,
  _MLBAI,
  _MLBAO,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLoadBalancerAttributesInput = struct(n0, _DLBAI, 0, [_LBAo], [0]);
export var DescribeLoadBalancerAttributesOutput = struct(n0, _DLBAO, 0, [_At], [() => LoadBalancerAttributes]);
export var LoadBalancerAttribute = struct(n0, _LBAoada, 0, [_K, _Va], [0, 0]);
export var ModifyLoadBalancerAttributesInput = struct(n0, _MLBAI, 0, [_LBAo, _At], [0, () => LoadBalancerAttributes]);
export var ModifyLoadBalancerAttributesOutput = struct(n0, _MLBAO, 0, [_At], [() => LoadBalancerAttributes]);
export var LoadBalancerAttributes = list(n0, _LBAoadal, 0, () => LoadBalancerAttribute);
export var DescribeLoadBalancerAttributes = op(
  n0,
  _DLBA,
  0,
  () => DescribeLoadBalancerAttributesInput,
  () => DescribeLoadBalancerAttributesOutput
);
export var ModifyLoadBalancerAttributes = op(
  n0,
  _MLBA,
  0,
  () => ModifyLoadBalancerAttributesInput,
  () => ModifyLoadBalancerAttributesOutput
);
