// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPI, _GRP, _GRPI, _GRPO, _P, _PRP, _PRPI, _RARN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyInput = struct(n0, _DRPI, 0, [_RARN], [0]);
export var GetResourcePolicyInput = struct(n0, _GRPI, 0, [_RARN], [0]);
export var GetResourcePolicyOutput = struct(n0, _GRPO, 0, [_P], [0]);
export var PutResourcePolicyInput = struct(n0, _PRPI, 0, [_RARN, _P], [0, 0]);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyInput,
  () => Unit
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyInput,
  () => GetResourcePolicyOutput
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyInput,
  () => Unit
);
