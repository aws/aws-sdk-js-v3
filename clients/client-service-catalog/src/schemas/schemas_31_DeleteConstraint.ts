// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _DC, _DCI, _DCO, _Id, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteConstraintInput = struct(n0, _DCI, 0, [_AL, _Id], [0, 0]);
export var DeleteConstraintOutput = struct(n0, _DCO, 0, [], []);
export var DeleteConstraint = op(
  n0,
  _DC,
  0,
  () => DeleteConstraintInput,
  () => DeleteConstraintOutput
);
