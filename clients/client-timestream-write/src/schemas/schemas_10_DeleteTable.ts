// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _DT, _DTR, _TN, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_Table";

/* eslint no-var: 0 */

export var DeleteTableRequest = struct(n0, _DTR, 0, [_DN, _TN], [0, 0]);
export var DeleteTable = op(
  n0,
  _DT,
  0,
  () => DeleteTableRequest,
  () => Unit
);
