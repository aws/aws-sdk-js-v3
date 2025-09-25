// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DuplicatedStopRequestException as __DuplicatedStopRequestException,
  PipelineExecutionNotStoppableException as __PipelineExecutionNotStoppableException,
} from "../models/index";
import { _ab, _cl, _DSRE, _e, _m, _pEI, _PENSE, _pN, _rea, _SPEIt, _SPEOt, _SPEt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DuplicatedStopRequestException = error(
  n0,
  _DSRE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __DuplicatedStopRequestException
);
export var PipelineExecutionNotStoppableException = error(
  n0,
  _PENSE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __PipelineExecutionNotStoppableException
);
export var StopPipelineExecutionInput = struct(n0, _SPEIt, 0, [_pN, _pEI, _ab, _rea], [0, 0, 2, 0]);
export var StopPipelineExecutionOutput = struct(n0, _SPEOt, 0, [_pEI], [0]);
export var StopPipelineExecution = op(
  n0,
  _SPEt,
  0,
  () => StopPipelineExecutionInput,
  () => StopPipelineExecutionOutput
);
