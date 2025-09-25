// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _FR, _GTES, _GTESFO, _GTESFOO, _GTESO, _h, _St, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetTelemetryEvaluationStatusForOrganizationOutput = struct(n0, _GTESFOO, 0, [_St, _FR], [0, 0]);
export var GetTelemetryEvaluationStatusOutput = struct(n0, _GTESO, 0, [_St, _FR], [0, 0]);
export var GetTelemetryEvaluationStatus = op(
  n0,
  _GTES,
  {
    [_h]: ["POST", "/GetTelemetryEvaluationStatus", 200],
  },
  () => Unit,
  () => GetTelemetryEvaluationStatusOutput
);
export var GetTelemetryEvaluationStatusForOrganization = op(
  n0,
  _GTESFO,
  {
    [_h]: ["POST", "/GetTelemetryEvaluationStatusForOrganization", 200],
  },
  () => Unit,
  () => GetTelemetryEvaluationStatusForOrganizationOutput
);
