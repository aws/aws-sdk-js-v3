// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPI, _DRPO, _h, _p, _pI, _PRP, _PRPI, _PRPO, _rAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyInput = struct(n0, _DRPI, 0, [_rAe, _pI], [0, 0]);
export var DeleteResourcePolicyOutput = struct(n0, _DRPO, 0, [], []);
export var PutResourcePolicyInput = struct(n0, _PRPI, 0, [_rAe, _p], [0, 0]);
export var PutResourcePolicyOutput = struct(n0, _PRPO, 0, [_pI], [0]);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["POST", "/deleteResourcePolicy", 200],
  },
  () => DeleteResourcePolicyInput,
  () => DeleteResourcePolicyOutput
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  {
    [_h]: ["POST", "/putResourcePolicy", 200],
  },
  () => PutResourcePolicyInput,
  () => PutResourcePolicyOutput
);
