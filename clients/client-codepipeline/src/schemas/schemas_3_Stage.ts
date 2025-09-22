// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConditionNotOverridableException as __ConditionNotOverridableException,
  NotLatestPipelineExecutionException as __NotLatestPipelineExecutionException,
  PipelineExecutionOutdatedException as __PipelineExecutionOutdatedException,
  StageNotFoundException as __StageNotFoundException,
  StageNotRetryableException as __StageNotRetryableException,
  UnableToRollbackStageException as __UnableToRollbackStageException,
} from "../models/index";
import {
  _cl,
  _CNOE,
  _cTon,
  _DST,
  _DSTI,
  _e,
  _EST,
  _ESTI,
  _m,
  _NLPEE,
  _OSC,
  _OSCI,
  _pEI,
  _PEOE,
  _pN,
  _rea,
  _rMe,
  _RSE,
  _RSEI,
  _RSEO,
  _RSI,
  _RSO,
  _RSo,
  _sN,
  _SNFE,
  _SNRE,
  _tPEI,
  _tTr,
  _UTRSE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConditionNotOverridableException = error(
  n0,
  _CNOE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __ConditionNotOverridableException
);
export var DisableStageTransitionInput = struct(n0, _DSTI, 0, [_pN, _sN, _tTr, _rea], [0, 0, 0, 0]);
export var EnableStageTransitionInput = struct(n0, _ESTI, 0, [_pN, _sN, _tTr], [0, 0, 0]);
export var NotLatestPipelineExecutionException = error(
  n0,
  _NLPEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NotLatestPipelineExecutionException
);
export var OverrideStageConditionInput = struct(n0, _OSCI, 0, [_pN, _sN, _pEI, _cTon], [0, 0, 0, 0]);
export var PipelineExecutionOutdatedException = error(
  n0,
  _PEOE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __PipelineExecutionOutdatedException
);
export var RetryStageExecutionInput = struct(n0, _RSEI, 0, [_pN, _sN, _pEI, _rMe], [0, 0, 0, 0]);
export var RetryStageExecutionOutput = struct(n0, _RSEO, 0, [_pEI], [0]);
export var RollbackStageInput = struct(n0, _RSI, 0, [_pN, _sN, _tPEI], [0, 0, 0]);
export var RollbackStageOutput = struct(n0, _RSO, 0, [_pEI], [0]);
export var StageNotFoundException = error(
  n0,
  _SNFE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __StageNotFoundException
);
export var StageNotRetryableException = error(
  n0,
  _SNRE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __StageNotRetryableException
);
export var UnableToRollbackStageException = error(
  n0,
  _UTRSE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __UnableToRollbackStageException
);
export var DisableStageTransition = op(
  n0,
  _DST,
  0,
  () => DisableStageTransitionInput,
  () => Unit
);
export var EnableStageTransition = op(
  n0,
  _EST,
  0,
  () => EnableStageTransitionInput,
  () => Unit
);
export var OverrideStageCondition = op(
  n0,
  _OSC,
  0,
  () => OverrideStageConditionInput,
  () => Unit
);
export var RetryStageExecution = op(
  n0,
  _RSE,
  0,
  () => RetryStageExecutionInput,
  () => RetryStageExecutionOutput
);
export var RollbackStage = op(
  n0,
  _RSo,
  0,
  () => RollbackStageInput,
  () => RollbackStageOutput
);
