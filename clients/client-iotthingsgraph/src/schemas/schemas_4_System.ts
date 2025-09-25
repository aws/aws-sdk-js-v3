// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceInUseException as __ResourceInUseException } from "../models/index";
import {
  _c,
  _DFT,
  _DFTR,
  _DFTRe,
  _DSI,
  _DSIe,
  _DSIR,
  _DSIRe,
  _DSIRep,
  _DSIRepl,
  _DST,
  _DSTR,
  _DSTRe,
  _e,
  _gDI,
  _hE,
  _i,
  _m,
  _RIUE,
  _s,
  _USI,
  _USIR,
  _USIRn,
  n0,
} from "./schemas_0";
import { SystemInstanceSummary } from "./schemas_9_System";

/* eslint no-var: 0 */

export var DeleteFlowTemplateRequest = struct(n0, _DFTR, 0, [_i], [0]);
export var DeleteFlowTemplateResponse = struct(n0, _DFTRe, 0, [], []);
export var DeleteSystemInstanceRequest = struct(n0, _DSIR, 0, [_i], [0]);
export var DeleteSystemInstanceResponse = struct(n0, _DSIRe, 0, [], []);
export var DeleteSystemTemplateRequest = struct(n0, _DSTR, 0, [_i], [0]);
export var DeleteSystemTemplateResponse = struct(n0, _DSTRe, 0, [], []);
export var DeploySystemInstanceRequest = struct(n0, _DSIRep, 0, [_i], [0]);
export var DeploySystemInstanceResponse = struct(n0, _DSIRepl, 0, [_s, _gDI], [() => SystemInstanceSummary, 0]);
export var ResourceInUseException = error(
  n0,
  _RIUE,
  {
    [_e]: _c,
    [_hE]: 412,
  },
  [_m],
  [0],

  __ResourceInUseException
);
export var UndeploySystemInstanceRequest = struct(n0, _USIR, 0, [_i], [0]);
export var UndeploySystemInstanceResponse = struct(n0, _USIRn, 0, [_s], [() => SystemInstanceSummary]);
export var DeleteFlowTemplate = op(
  n0,
  _DFT,
  0,
  () => DeleteFlowTemplateRequest,
  () => DeleteFlowTemplateResponse
);
export var DeleteSystemInstance = op(
  n0,
  _DSI,
  0,
  () => DeleteSystemInstanceRequest,
  () => DeleteSystemInstanceResponse
);
export var DeleteSystemTemplate = op(
  n0,
  _DST,
  0,
  () => DeleteSystemTemplateRequest,
  () => DeleteSystemTemplateResponse
);
export var DeploySystemInstance = op(
  n0,
  _DSIe,
  0,
  () => DeploySystemInstanceRequest,
  () => DeploySystemInstanceResponse
);
export var UndeploySystemInstance = op(
  n0,
  _USI,
  0,
  () => UndeploySystemInstanceRequest,
  () => UndeploySystemInstanceResponse
);
