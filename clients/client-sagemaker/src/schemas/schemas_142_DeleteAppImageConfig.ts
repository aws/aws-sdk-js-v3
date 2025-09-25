// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AICN, _DAIC, _DAICR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAppImageConfigRequest = struct(n0, _DAICR, 0, [_AICN], [0]);
export var DeleteAppImageConfig = op(
  n0,
  _DAIC,
  0,
  () => DeleteAppImageConfigRequest,
  () => Unit
);
