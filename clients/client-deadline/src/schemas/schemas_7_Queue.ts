// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _CQE,
  _CQER,
  _CQERr,
  _cT,
  _DQE,
  _DQER,
  _DQERe,
  _end,
  _env,
  _ET,
  _fI,
  _GQE,
  _GQER,
  _GQERe,
  _h,
  _hH,
  _hQ,
  _iT,
  _LQE,
  _LQER,
  _LQERi,
  _mR,
  _n,
  _nT,
  _pr,
  _qEI,
  _QES,
  _QESu,
  _qI,
  _te,
  _tT,
  _uA,
  _uB,
  _UQE,
  _UQER,
  _UQERp,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EnvironmentTemplate = sim(n0, _ET, 0, 8);
export var CreateQueueEnvironmentRequest = struct(
  n0,
  _CQER,
  0,
  [_cT, _fI, _qI, _pr, _tT, _te],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    1,
    0,
    [() => EnvironmentTemplate, 0],
  ]
);
export var CreateQueueEnvironmentResponse = struct(n0, _CQERr, 0, [_qEI], [0]);
export var DeleteQueueEnvironmentRequest = struct(
  n0,
  _DQER,
  0,
  [_fI, _qI, _qEI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQueueEnvironmentResponse = struct(n0, _DQERe, 0, [], []);
export var GetQueueEnvironmentRequest = struct(
  n0,
  _GQER,
  0,
  [_fI, _qI, _qEI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetQueueEnvironmentResponse = struct(
  n0,
  _GQERe,
  0,
  [_qEI, _n, _pr, _tT, _te, _cA, _cB, _uA, _uB],
  [0, 0, 1, 0, [() => EnvironmentTemplate, 0], 5, 0, 5, 0]
);
export var ListQueueEnvironmentsRequest = struct(
  n0,
  _LQER,
  0,
  [_fI, _qI, _nT, _mR],
  [
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
export var ListQueueEnvironmentsResponse = struct(n0, _LQERi, 0, [_env, _nT], [() => QueueEnvironmentSummaries, 0]);
export var QueueEnvironmentSummary = struct(n0, _QES, 0, [_qEI, _n, _pr], [0, 0, 1]);
export var UpdateQueueEnvironmentRequest = struct(
  n0,
  _UQER,
  0,
  [_cT, _fI, _qI, _qEI, _pr, _tT, _te],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    [0, 1],
    1,
    0,
    [() => EnvironmentTemplate, 0],
  ]
);
export var UpdateQueueEnvironmentResponse = struct(n0, _UQERp, 0, [], []);
export var QueueEnvironmentSummaries = list(n0, _QESu, 0, () => QueueEnvironmentSummary);
export var CreateQueueEnvironment = op(
  n0,
  _CQE,
  {
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/queues/{queueId}/environments", 200],
    [_end]: ["management."],
  },
  () => CreateQueueEnvironmentRequest,
  () => CreateQueueEnvironmentResponse
);
export var DeleteQueueEnvironment = op(
  n0,
  _DQE,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}", 200],
    [_end]: ["management."],
  },
  () => DeleteQueueEnvironmentRequest,
  () => DeleteQueueEnvironmentResponse
);
export var GetQueueEnvironment = op(
  n0,
  _GQE,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}", 200],
    [_end]: ["management."],
  },
  () => GetQueueEnvironmentRequest,
  () => GetQueueEnvironmentResponse
);
export var ListQueueEnvironments = op(
  n0,
  _LQE,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/environments", 200],
  },
  () => ListQueueEnvironmentsRequest,
  () => ListQueueEnvironmentsResponse
);
export var UpdateQueueEnvironment = op(
  n0,
  _UQE,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queues/{queueId}/environments/{queueEnvironmentId}", 200],
    [_end]: ["management."],
  },
  () => UpdateQueueEnvironmentRequest,
  () => UpdateQueueEnvironmentResponse
);
