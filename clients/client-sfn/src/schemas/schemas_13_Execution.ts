// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ExecutionDoesNotExist as __ExecutionDoesNotExist,
  ExecutionNotRedrivable as __ExecutionNotRedrivable,
} from "../models/index";
import { _c, _cT, _e, _eA, _EDNE, _ENR, _m, _rD, _RE, _REI, _REO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExecutionDoesNotExist = error(
  n0,
  _EDNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExecutionDoesNotExist
);
export var ExecutionNotRedrivable = error(
  n0,
  _ENR,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExecutionNotRedrivable
);
export var RedriveExecutionInput = struct(n0, _REI, 0, [_eA, _cT], [0, [0, 4]]);
export var RedriveExecutionOutput = struct(n0, _REO, 0, [_rD], [4]);
export var RedriveExecution = op(
  n0,
  _RE,
  2,
  () => RedriveExecutionInput,
  () => RedriveExecutionOutput
);
