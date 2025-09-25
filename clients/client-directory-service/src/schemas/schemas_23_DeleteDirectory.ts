// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDe, _DDR, _DDRe, _DI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDirectoryRequest = struct(n0, _DDR, 0, [_DI], [0]);
export var DeleteDirectoryResult = struct(n0, _DDRe, 0, [_DI], [0]);
export var DeleteDirectory = op(
  n0,
  _DDe,
  0,
  () => DeleteDirectoryRequest,
  () => DeleteDirectoryResult
);
