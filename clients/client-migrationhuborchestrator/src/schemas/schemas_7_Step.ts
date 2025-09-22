// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWS, _DWSR, _DWSRe, _hQ, _ht, _i, _RWS, _RWSR, _RWSRe, _s, _sGI, _wIo, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWorkflowStepRequest = struct(
  n0,
  _DWSR,
  0,
  [_i, _sGI, _wIo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sGI,
      },
    ],
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
  ]
);
export var DeleteWorkflowStepResponse = struct(n0, _DWSRe, 0, [], []);
export var RetryWorkflowStepRequest = struct(
  n0,
  _RWSR,
  0,
  [_wIo, _sGI, _i],
  [
    [
      0,
      {
        [_hQ]: _wIo,
      },
    ],
    [
      0,
      {
        [_hQ]: _sGI,
      },
    ],
    [0, 1],
  ]
);
export var RetryWorkflowStepResponse = struct(n0, _RWSRe, 0, [_sGI, _wIo, _i, _s], [0, 0, 0, 0]);
export var DeleteWorkflowStep = op(
  n0,
  _DWS,
  {
    [_ht]: ["DELETE", "/workflowstep/{id}", 200],
  },
  () => DeleteWorkflowStepRequest,
  () => DeleteWorkflowStepResponse
);
export var RetryWorkflowStep = op(
  n0,
  _RWS,
  {
    [_ht]: ["POST", "/retryworkflowstep/{id}", 200],
  },
  () => RetryWorkflowStepRequest,
  () => RetryWorkflowStepResponse
);
