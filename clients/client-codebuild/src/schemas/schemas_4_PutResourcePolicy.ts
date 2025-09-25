// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _po, _PRP, _PRPI, _PRPO, _rAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutResourcePolicyInput = struct(n0, _PRPI, 0, [_po, _rAe], [0, 0]);
export var PutResourcePolicyOutput = struct(n0, _PRPO, 0, [_rAe], [0]);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyInput,
  () => PutResourcePolicyOutput
);
