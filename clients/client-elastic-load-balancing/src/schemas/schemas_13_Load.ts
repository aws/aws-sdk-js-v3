// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidSecurityGroupException as __InvalidSecurityGroupException } from "../models/index";
import { _aQE, _ASGTLB, _ASGTLBI, _ASGTLBO, _c, _e, _hE, _ISGE, _LBN, _M, _SG, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplySecurityGroupsToLoadBalancerInput = struct(n0, _ASGTLBI, 0, [_LBN, _SG], [0, 64 | 0]);
export var ApplySecurityGroupsToLoadBalancerOutput = struct(n0, _ASGTLBO, 0, [_SG], [64 | 0]);
export var InvalidSecurityGroupException = error(
  n0,
  _ISGE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSecurityGroup`, 400],
  },
  [_M],
  [0],

  __InvalidSecurityGroupException
);
export var SecurityGroups = 64 | 0;

export var ApplySecurityGroupsToLoadBalancer = op(
  n0,
  _ASGTLB,
  0,
  () => ApplySecurityGroupsToLoadBalancerInput,
  () => ApplySecurityGroupsToLoadBalancerOutput
);
