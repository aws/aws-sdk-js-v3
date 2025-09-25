// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DU, _DUR, _DURe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUploadRequest = struct(n0, _DUR, 0, [_a], [0]);
export var DeleteUploadResult = struct(n0, _DURe, 0, [], []);
export var DeleteUpload = op(
  n0,
  _DU,
  0,
  () => DeleteUploadRequest,
  () => DeleteUploadResult
);
