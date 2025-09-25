// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { OperationNotPermittedException as __OperationNotPermittedException } from "../models/index";
import { _aQE, _c, _DLB, _DLBI, _DLBO, _e, _hE, _LBAo, _M, _ONPE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLoadBalancerInput = struct(n0, _DLBI, 0, [_LBAo], [0]);
export var DeleteLoadBalancerOutput = struct(n0, _DLBO, 0, [], []);
export var OperationNotPermittedException = error(
  n0,
  _ONPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OperationNotPermitted`, 400],
  },
  [_M],
  [0],

  __OperationNotPermittedException
);
export var DeleteLoadBalancer = op(
  n0,
  _DLB,
  0,
  () => DeleteLoadBalancerInput,
  () => DeleteLoadBalancerOutput
);
