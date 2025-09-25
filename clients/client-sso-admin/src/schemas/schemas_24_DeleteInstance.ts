// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DIR, _DIRe, _IA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceRequest = struct(n0, _DIR, 0, [_IA], [0]);
export var DeleteInstanceResponse = struct(n0, _DIRe, 0, [], []);
export var DeleteInstance = op(
  n0,
  _DI,
  0,
  () => DeleteInstanceRequest,
  () => DeleteInstanceResponse
);
