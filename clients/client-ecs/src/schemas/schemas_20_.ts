// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceDeploymentNotFoundException as __ServiceDeploymentNotFoundException,
} from "../models/index";
import { _c, _CEo, _e, _m, _rI, _sDAe, _SDNFE, _SSD, _SSDR, _SSDRt, _sTto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CEo,
  {
    [_e]: _c,
  },
  [_rI, _m],
  [64 | 0, 0],

  __ConflictException
);
export var ServiceDeploymentNotFoundException = error(
  n0,
  _SDNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ServiceDeploymentNotFoundException
);
export var StopServiceDeploymentRequest = struct(n0, _SSDR, 0, [_sDAe, _sTto], [0, 0]);
export var StopServiceDeploymentResponse = struct(n0, _SSDRt, 0, [_sDAe], [0]);
export var ResourceIds = 64 | 0;

export var StopServiceDeployment = op(
  n0,
  _SSD,
  0,
  () => StopServiceDeploymentRequest,
  () => StopServiceDeploymentResponse
);
