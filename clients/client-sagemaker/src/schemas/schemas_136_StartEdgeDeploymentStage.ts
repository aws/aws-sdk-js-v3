// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EDPN, _SEDS, _SEDSR, _SNt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartEdgeDeploymentStageRequest = struct(n0, _SEDSR, 0, [_EDPN, _SNt], [0, 0]);
export var StartEdgeDeploymentStage = op(
  n0,
  _SEDS,
  0,
  () => StartEdgeDeploymentStageRequest,
  () => Unit
);
