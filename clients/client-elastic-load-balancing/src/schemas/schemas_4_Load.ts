// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidSubnetException as __InvalidSubnetException,
  SubnetNotFoundException as __SubnetNotFoundException,
} from "../models/index";
import {
  _ALBTS,
  _ALBTSI,
  _ALBTSO,
  _aQE,
  _c,
  _DLBFS,
  _DLBFSI,
  _DLBFSO,
  _e,
  _hE,
  _ISEn,
  _LBN,
  _M,
  _S,
  _SNFE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachLoadBalancerToSubnetsInput = struct(n0, _ALBTSI, 0, [_LBN, _S], [0, 64 | 0]);
export var AttachLoadBalancerToSubnetsOutput = struct(n0, _ALBTSO, 0, [_S], [64 | 0]);
export var DetachLoadBalancerFromSubnetsInput = struct(n0, _DLBFSI, 0, [_LBN, _S], [0, 64 | 0]);
export var DetachLoadBalancerFromSubnetsOutput = struct(n0, _DLBFSO, 0, [_S], [64 | 0]);
export var InvalidSubnetException = error(
  n0,
  _ISEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubnet`, 400],
  },
  [_M],
  [0],

  __InvalidSubnetException
);
export var SubnetNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetNotFound`, 400],
  },
  [_M],
  [0],

  __SubnetNotFoundException
);
export var Subnets = 64 | 0;

export var AttachLoadBalancerToSubnets = op(
  n0,
  _ALBTS,
  0,
  () => AttachLoadBalancerToSubnetsInput,
  () => AttachLoadBalancerToSubnetsOutput
);
export var DetachLoadBalancerFromSubnets = op(
  n0,
  _DLBFS,
  0,
  () => DetachLoadBalancerFromSubnetsInput,
  () => DetachLoadBalancerFromSubnetsOutput
);
