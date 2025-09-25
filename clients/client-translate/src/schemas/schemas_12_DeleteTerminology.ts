// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DT, _DTR, _N, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteTerminologyRequest = struct(n0, _DTR, 0, [_N], [0]);
export var DeleteTerminology = op(
  n0,
  _DT,
  0,
  () => DeleteTerminologyRequest,
  () => Unit
);
