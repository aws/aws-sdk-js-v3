// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DataRepositoryTaskEnded as __DataRepositoryTaskEnded,
  DataRepositoryTaskNotFound as __DataRepositoryTaskNotFound,
} from "../models/index";
import { _c, _CDRT, _CDRTR, _CDRTRa, _DRTE, _DRTNF, _e, _L, _M, _TI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelDataRepositoryTaskRequest = struct(n0, _CDRTR, 0, [_TI], [0]);
export var CancelDataRepositoryTaskResponse = struct(n0, _CDRTRa, 0, [_L, _TI], [0, 0]);
export var DataRepositoryTaskEnded = error(
  n0,
  _DRTE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DataRepositoryTaskEnded
);
export var DataRepositoryTaskNotFound = error(
  n0,
  _DRTNF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DataRepositoryTaskNotFound
);
export var CancelDataRepositoryTask = op(
  n0,
  _CDRT,
  2,
  () => CancelDataRepositoryTaskRequest,
  () => CancelDataRepositoryTaskResponse
);
