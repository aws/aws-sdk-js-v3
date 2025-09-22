// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDS, _DDSR, _DSI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDeploymentStrategyRequest = struct(n0, _DDSR, 0, [_DSI], [[0, 1]]);
export var DeleteDeploymentStrategy = op(
  n0,
  _DDS,
  {
    [_h]: ["DELETE", "/deployementstrategies/{DeploymentStrategyId}", 204],
  },
  () => DeleteDeploymentStrategyRequest,
  () => Unit
);
