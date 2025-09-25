// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CI, _DDe, _DDR, _DDRe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDatabaseRequest = struct(n0, _DDR, 0, [_CI, _N], [0, 0]);
export var DeleteDatabaseResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteDatabase = op(
  n0,
  _DDe,
  0,
  () => DeleteDatabaseRequest,
  () => DeleteDatabaseResponse
);
