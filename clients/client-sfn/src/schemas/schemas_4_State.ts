// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import { InvalidDefinition as __InvalidDefinition } from "../models/index";
import {
  _c,
  _co,
  _D,
  _de,
  _di,
  _e,
  _IDn,
  _lo,
  _m,
  _mR,
  _re,
  _se,
  _t,
  _ty,
  _VSMD,
  _VSMDC,
  _VSMDD,
  _VSMDDL,
  _VSMDI,
  _VSMDL,
  _VSMDM,
  _VSMDO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Definition = sim(n0, _D, 0, 8);
export var ValidateStateMachineDefinitionCode = sim(n0, _VSMDC, 0, 8);
export var ValidateStateMachineDefinitionLocation = sim(n0, _VSMDL, 0, 8);
export var ValidateStateMachineDefinitionMessage = sim(n0, _VSMDM, 0, 8);
export var InvalidDefinition = error(
  n0,
  _IDn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidDefinition
);
export var ValidateStateMachineDefinitionDiagnostic = struct(
  n0,
  _VSMDD,
  0,
  [_se, _co, _m, _lo],
  [
    0,
    [() => ValidateStateMachineDefinitionCode, 0],
    [() => ValidateStateMachineDefinitionMessage, 0],
    [() => ValidateStateMachineDefinitionLocation, 0],
  ]
);
export var ValidateStateMachineDefinitionInput = struct(
  n0,
  _VSMDI,
  0,
  [_de, _ty, _se, _mR],
  [[() => Definition, 0], 0, 0, 1]
);
export var ValidateStateMachineDefinitionOutput = struct(
  n0,
  _VSMDO,
  0,
  [_re, _di, _t],
  [0, [() => ValidateStateMachineDefinitionDiagnosticList, 0], 2]
);
export var ValidateStateMachineDefinitionDiagnosticList = list(n0, _VSMDDL, 0, [
  () => ValidateStateMachineDefinitionDiagnostic,
  0,
]);
export var ValidateStateMachineDefinition = op(
  n0,
  _VSMD,
  0,
  () => ValidateStateMachineDefinitionInput,
  () => ValidateStateMachineDefinitionOutput
);
