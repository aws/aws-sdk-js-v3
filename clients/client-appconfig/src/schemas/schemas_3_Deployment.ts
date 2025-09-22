// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _D, _DDIM, _DSe, _DSI, _FBTIM, _GDS, _GDSR, _GF, _GT, _h, _I, _N, _RT, _UDS, _UDSR, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeploymentStrategy = struct(
  n0,
  _DSe,
  0,
  [_I, _N, _D, _DDIM, _GT, _GF, _FBTIM, _RT],
  [0, 0, 0, 1, 0, 1, 1, 0]
);
export var GetDeploymentStrategyRequest = struct(n0, _GDSR, 0, [_DSI], [[0, 1]]);
export var UpdateDeploymentStrategyRequest = struct(
  n0,
  _UDSR,
  0,
  [_DSI, _D, _DDIM, _FBTIM, _GF, _GT],
  [[0, 1], 0, 1, 1, 1, 0]
);
export var GetDeploymentStrategy = op(
  n0,
  _GDS,
  {
    [_h]: ["GET", "/deploymentstrategies/{DeploymentStrategyId}", 200],
  },
  () => GetDeploymentStrategyRequest,
  () => DeploymentStrategy
);
export var UpdateDeploymentStrategy = op(
  n0,
  _UDS,
  {
    [_h]: ["PATCH", "/deploymentstrategies/{DeploymentStrategyId}", 200],
  },
  () => UpdateDeploymentStrategyRequest,
  () => DeploymentStrategy
);
