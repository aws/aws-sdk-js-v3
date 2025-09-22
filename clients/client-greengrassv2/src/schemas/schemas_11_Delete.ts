// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _a,
  _c,
  _CDa,
  _CDR,
  _CDRa,
  _CE,
  _DC,
  _DCR,
  _DD,
  _DDR,
  _dI,
  _e,
  _h,
  _hE,
  _m,
  _rI,
  _rT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDeploymentRequest = struct(n0, _CDR, 0, [_dI], [[0, 1]]);
export var CancelDeploymentResponse = struct(n0, _CDRa, 0, [_m], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var DeleteComponentRequest = struct(n0, _DCR, 0, [_a], [[0, 1]]);
export var DeleteDeploymentRequest = struct(n0, _DDR, 0, [_dI], [[0, 1]]);
export var CancelDeployment = op(
  n0,
  _CDa,
  {
    [_h]: ["POST", "/greengrass/v2/deployments/{deploymentId}/cancel", 200],
  },
  () => CancelDeploymentRequest,
  () => CancelDeploymentResponse
);
export var DeleteComponent = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/greengrass/v2/components/{arn}", 204],
  },
  () => DeleteComponentRequest,
  () => Unit
);
export var DeleteDeployment = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/greengrass/v2/deployments/{deploymentId}", 204],
  },
  () => DeleteDeploymentRequest,
  () => Unit
);
