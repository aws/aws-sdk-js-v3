// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEDP, _DEDPR, _EDPN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEdgeDeploymentPlanRequest = struct(n0, _DEDPR, 0, [_EDPN], [0]);
export var DeleteEdgeDeploymentPlan = op(
  n0,
  _DEDP,
  0,
  () => DeleteEdgeDeploymentPlanRequest,
  () => Unit
);
