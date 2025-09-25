// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BlueGreenDeploymentNotFoundFault as __BlueGreenDeploymentNotFoundFault,
  InvalidBlueGreenDeploymentStateFault as __InvalidBlueGreenDeploymentStateFault,
} from "../models/index";
import {
  _aQE,
  _BGD,
  _BGDI,
  _BGDNFF,
  _c,
  _DBGD,
  _DBGDR,
  _DBGDRe,
  _DTe,
  _e,
  _hE,
  _IBGDSF,
  _m,
  _SBGD,
  _SBGDR,
  _SBGDRw,
  _STw,
  n0,
} from "./schemas_0";
import { BlueGreenDeployment } from "./schemas_14_Blue";

/* eslint no-var: 0 */

export var BlueGreenDeploymentNotFoundFault = error(
  n0,
  _BGDNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`BlueGreenDeploymentNotFoundFault`, 404],
  },
  [_m],
  [0],

  __BlueGreenDeploymentNotFoundFault
);
export var DeleteBlueGreenDeploymentRequest = struct(n0, _DBGDR, 0, [_BGDI, _DTe], [0, 2]);
export var DeleteBlueGreenDeploymentResponse = struct(n0, _DBGDRe, 0, [_BGD], [[() => BlueGreenDeployment, 0]]);
export var InvalidBlueGreenDeploymentStateFault = error(
  n0,
  _IBGDSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidBlueGreenDeploymentStateFault`, 400],
  },
  [_m],
  [0],

  __InvalidBlueGreenDeploymentStateFault
);
export var SwitchoverBlueGreenDeploymentRequest = struct(n0, _SBGDR, 0, [_BGDI, _STw], [0, 1]);
export var SwitchoverBlueGreenDeploymentResponse = struct(n0, _SBGDRw, 0, [_BGD], [[() => BlueGreenDeployment, 0]]);
export var DeleteBlueGreenDeployment = op(
  n0,
  _DBGD,
  0,
  () => DeleteBlueGreenDeploymentRequest,
  () => DeleteBlueGreenDeploymentResponse
);
export var SwitchoverBlueGreenDeployment = op(
  n0,
  _SBGD,
  0,
  () => SwitchoverBlueGreenDeploymentRequest,
  () => SwitchoverBlueGreenDeploymentResponse
);
