// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { _ANOMM, _aQE, _c, _CMMT, _CMMTR, _CMMTRa, _e, _hE, _m, _RNFE, _TH, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelMessageMoveTaskRequest = struct(n0, _CMMTR, 0, [_TH], [0]);
export var CancelMessageMoveTaskResult = struct(n0, _CMMTRa, 0, [_ANOMM], [1]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundException`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var CancelMessageMoveTask = op(
  n0,
  _CMMT,
  0,
  () => CancelMessageMoveTaskRequest,
  () => CancelMessageMoveTaskResult
);
