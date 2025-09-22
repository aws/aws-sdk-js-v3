// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _DN, n0 } from "./schemas_0";
import { Unit } from "./schemas_7_Table";

/* eslint no-var: 0 */

export var DeleteDatabaseRequest = struct(n0, _DDR, 0, [_DN], [0]);
export var DeleteDatabase = op(
  n0,
  _DD,
  0,
  () => DeleteDatabaseRequest,
  () => Unit
);
