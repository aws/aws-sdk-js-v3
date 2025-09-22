// smithy-typescript generated code
import { op } from "@smithy/core/schema";

import { _h, _STEFO, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartTelemetryEvaluationForOrganization = op(
  n0,
  _STEFO,
  {
    [_h]: ["POST", "/StartTelemetryEvaluationForOrganization", 200],
  },
  () => Unit,
  () => Unit
);
