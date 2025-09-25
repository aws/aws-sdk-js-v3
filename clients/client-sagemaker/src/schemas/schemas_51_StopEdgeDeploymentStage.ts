// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EDPN, _SEDSRt, _SEDSt, _SNt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopEdgeDeploymentStageRequest = struct(n0, _SEDSRt, 0, [_EDPN, _SNt], [0, 0]);
export var StopEdgeDeploymentStage = op(
  n0,
  _SEDSt,
  0,
  () => StopEdgeDeploymentStageRequest,
  () => Unit
);
