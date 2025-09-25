// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _h, _STE, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartTelemetryEvaluation = op(
  n0,
  _STE,
  {
    [_h]: ["POST", "/StartTelemetryEvaluation", 200],
  },
  () => Unit,
  () => Unit
);
