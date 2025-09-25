// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { LoadBalancerAttributeNotFoundException as __LoadBalancerAttributeNotFoundException } from "../models/index";
import {
  _AA,
  _AAd,
  _AL,
  _aQE,
  _c,
  _CD,
  _CS,
  _CZLB,
  _DLBA,
  _DLBAI,
  _DLBAO,
  _E,
  _e,
  _EI,
  _hE,
  _IT,
  _K,
  _LBA,
  _LBANFE,
  _LBN,
  _M,
  _MLBA,
  _MLBAI,
  _MLBAO,
  _SBN,
  _SBP,
  _Ti,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessLog = struct(n0, _AL, 0, [_E, _SBN, _EI, _SBP], [2, 0, 1, 0]);
export var AdditionalAttribute = struct(n0, _AA, 0, [_K, _V], [0, 0]);
export var ConnectionDraining = struct(n0, _CD, 0, [_E, _Ti], [2, 1]);
export var ConnectionSettings = struct(n0, _CS, 0, [_IT], [1]);
export var CrossZoneLoadBalancing = struct(n0, _CZLB, 0, [_E], [2]);
export var DescribeLoadBalancerAttributesInput = struct(n0, _DLBAI, 0, [_LBN], [0]);
export var DescribeLoadBalancerAttributesOutput = struct(n0, _DLBAO, 0, [_LBA], [() => LoadBalancerAttributes]);
export var LoadBalancerAttributeNotFoundException = error(
  n0,
  _LBANFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LoadBalancerAttributeNotFound`, 400],
  },
  [_M],
  [0],

  __LoadBalancerAttributeNotFoundException
);
export var LoadBalancerAttributes = struct(
  n0,
  _LBA,
  0,
  [_CZLB, _AL, _CD, _CS, _AAd],
  [
    () => CrossZoneLoadBalancing,
    () => AccessLog,
    () => ConnectionDraining,
    () => ConnectionSettings,
    () => AdditionalAttributes,
  ]
);
export var ModifyLoadBalancerAttributesInput = struct(n0, _MLBAI, 0, [_LBN, _LBA], [0, () => LoadBalancerAttributes]);
export var ModifyLoadBalancerAttributesOutput = struct(n0, _MLBAO, 0, [_LBN, _LBA], [0, () => LoadBalancerAttributes]);
export var AdditionalAttributes = list(n0, _AAd, 0, () => AdditionalAttribute);
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
