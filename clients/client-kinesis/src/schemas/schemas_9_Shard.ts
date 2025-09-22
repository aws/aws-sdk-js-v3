// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ValidationException as __ValidationException } from "../models/index";
import { _c, _CSC, _e, _m, _SARN, _SN, _ST, _TSC, _USC, _USCI, _USCO, _VE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateShardCountInput = struct(n0, _USCI, 0, [_SN, _TSC, _ST, _SARN], [0, 1, 0, 0]);
export var UpdateShardCountOutput = struct(n0, _USCO, 0, [_SN, _CSC, _TSC, _SARN], [0, 1, 1, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ValidationException
);
export var UpdateShardCount = op(
  n0,
  _USC,
  0,
  () => UpdateShardCountInput,
  () => UpdateShardCountOutput
);
