// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cons,
  _dep,
  _end,
  _fI,
  _h,
  _hQ,
  _jI,
  _LSC,
  _LSCR,
  _LSCRi,
  _LSD,
  _LSDR,
  _LSDRi,
  _mR,
  _nT,
  _qI,
  _SC,
  _SCt,
  _SDt,
  _SDte,
  _sI,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListStepConsumersRequest = struct(
  n0,
  _LSCR,
  0,
  [_fI, _qI, _jI, _sI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListStepConsumersResponse = struct(n0, _LSCRi, 0, [_cons, _nT], [() => StepConsumers, 0]);
export var ListStepDependenciesRequest = struct(
  n0,
  _LSDR,
  0,
  [_fI, _qI, _jI, _sI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListStepDependenciesResponse = struct(n0, _LSDRi, 0, [_dep, _nT], [() => StepDependencies, 0]);
export var StepConsumer = struct(n0, _SC, 0, [_sI, _st], [0, 0]);
export var StepDependency = struct(n0, _SDt, 0, [_sI, _st], [0, 0]);
export var StepConsumers = list(n0, _SCt, 0, () => StepConsumer);
export var StepDependencies = list(n0, _SDte, 0, () => StepDependency);
export var ListStepConsumers = op(
  n0,
  _LSC,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/consumers", 200],
  },
  () => ListStepConsumersRequest,
  () => ListStepConsumersResponse
);
export var ListStepDependencies = op(
  n0,
  _LSD,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/dependencies", 200],
  },
  () => ListStepDependenciesRequest,
  () => ListStepDependenciesResponse
);
