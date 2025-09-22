// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _lGN, _PRPRut, _PRPu, _rID, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var PutRetentionPolicyRequest = struct(n0, _PRPRut, 0, [_lGN, _rID], [0, 1]);
export var PutRetentionPolicy = op(
  n0,
  _PRPu,
  0,
  () => PutRetentionPolicyRequest,
  () => Unit
);
