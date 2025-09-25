// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DA, _DAR, _DARe, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_N], [0]);
export var DeleteApplicationResult = struct(n0, _DARe, 0, [], []);
export var DeleteApplication = op(
  n0,
  _DA,
  0,
  () => DeleteApplicationRequest,
  () => DeleteApplicationResult
);
