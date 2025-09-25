// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEDS, _DEDSR, _EDPN, _SNt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEdgeDeploymentStageRequest = struct(n0, _DEDSR, 0, [_EDPN, _SNt], [0, 0]);
export var DeleteEdgeDeploymentStage = op(
  n0,
  _DEDS,
  0,
  () => DeleteEdgeDeploymentStageRequest,
  () => Unit
);
