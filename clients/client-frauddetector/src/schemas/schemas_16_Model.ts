// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEM, _DEMR, _DEMRe, _mE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteExternalModelRequest = struct(n0, _DEMR, 0, [_mE], [0]);
export var DeleteExternalModelResult = struct(n0, _DEMRe, 0, [], []);
export var DeleteExternalModel = op(
  n0,
  _DEM,
  0,
  () => DeleteExternalModelRequest,
  () => DeleteExternalModelResult
);
