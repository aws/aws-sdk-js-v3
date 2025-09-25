// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAa, _CAI, _CAO, _GARN, _TARN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelArchivalInput = struct(n0, _CAI, 0, [_GARN, _TARN], [0, 0]);
export var CancelArchivalOutput = struct(n0, _CAO, 0, [_TARN], [0]);
export var CancelArchival = op(
  n0,
  _CAa,
  0,
  () => CancelArchivalInput,
  () => CancelArchivalOutput
);
