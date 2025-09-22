// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _h, _STEt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopTelemetryEvaluation = op(
  n0,
  _STEt,
  {
    [_h]: ["POST", "/StopTelemetryEvaluation", 200],
  },
  () => Unit,
  () => Unit
);
