// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConcurrentRunsExceededException as __ConcurrentRunsExceededException,
  MLTransformNotReadyException as __MLTransformNotReadyException,
} from "../models/index";
import {
  _c,
  _CREE,
  _e,
  _M,
  _MLTNRE,
  _N,
  _NI,
  _OSP,
  _RIu,
  _RWR,
  _RWRR,
  _RWRRe,
  _SMLETR,
  _SMLETRR,
  _SMLETRRt,
  _SMLLSGTR,
  _SMLLSGTRR,
  _SMLLSGTRRt,
  _STRt,
  _STRta,
  _STtart,
  _TIr,
  _TRI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConcurrentRunsExceededException = error(
  n0,
  _CREE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __ConcurrentRunsExceededException
);
export var MLTransformNotReadyException = error(
  n0,
  _MLTNRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MLTransformNotReadyException
);
export var ResumeWorkflowRunRequest = struct(n0, _RWRR, 0, [_N, _RIu, _NI], [0, 0, 64 | 0]);
export var ResumeWorkflowRunResponse = struct(n0, _RWRRe, 0, [_RIu, _NI], [0, 64 | 0]);
export var StartMLEvaluationTaskRunRequest = struct(n0, _SMLETRR, 0, [_TIr], [0]);
export var StartMLEvaluationTaskRunResponse = struct(n0, _SMLETRRt, 0, [_TRI], [0]);
export var StartMLLabelingSetGenerationTaskRunRequest = struct(n0, _SMLLSGTRR, 0, [_TIr, _OSP], [0, 0]);
export var StartMLLabelingSetGenerationTaskRunResponse = struct(n0, _SMLLSGTRRt, 0, [_TRI], [0]);
export var StartTriggerRequest = struct(n0, _STRt, 0, [_N], [0]);
export var StartTriggerResponse = struct(n0, _STRta, 0, [_N], [0]);
export var NodeIdList = 64 | 0;

export var ResumeWorkflowRun = op(
  n0,
  _RWR,
  0,
  () => ResumeWorkflowRunRequest,
  () => ResumeWorkflowRunResponse
);
export var StartMLEvaluationTaskRun = op(
  n0,
  _SMLETR,
  0,
  () => StartMLEvaluationTaskRunRequest,
  () => StartMLEvaluationTaskRunResponse
);
export var StartMLLabelingSetGenerationTaskRun = op(
  n0,
  _SMLLSGTR,
  0,
  () => StartMLLabelingSetGenerationTaskRunRequest,
  () => StartMLLabelingSetGenerationTaskRunResponse
);
export var StartTrigger = op(
  n0,
  _STtart,
  0,
  () => StartTriggerRequest,
  () => StartTriggerResponse
);
