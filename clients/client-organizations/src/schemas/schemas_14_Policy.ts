// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { TargetNotFoundException as __TargetNotFoundException } from "../models/index";
import { _c, _DEP, _DEPR, _DEPRe, _e, _EP, _hE, _LUT, _M, _PC, _PT, _TI, _TNFE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEffectivePolicyRequest = struct(n0, _DEPR, 0, [_PT, _TI], [0, 0]);
export var DescribeEffectivePolicyResponse = struct(n0, _DEPRe, 0, [_EP], [() => EffectivePolicy]);
export var EffectivePolicy = struct(n0, _EP, 0, [_PC, _LUT, _TI, _PT], [0, 4, 0, 0]);
export var TargetNotFoundException = error(
  n0,
  _TNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __TargetNotFoundException
);
export var DescribeEffectivePolicy = op(
  n0,
  _DEP,
  0,
  () => DescribeEffectivePolicyRequest,
  () => DescribeEffectivePolicyResponse
);
