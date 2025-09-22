// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _hQ, _ht, _i, _pN, _sN, _SWR, _SWRR, _SWRRt, _wI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartWorkflowRunRequest = struct(
  n0,
  _SWRR,
  0,
  [_sN, _pN, _wI, _cT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _wI,
      },
    ],
    [0, 4],
  ]
);
export var StartWorkflowRunResponse = struct(n0, _SWRRt, 0, [_sN, _pN, _i, _wI], [0, 0, 0, 0]);
export var StartWorkflowRun = op(
  n0,
  _SWR,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects/{projectName}/workflowRuns", 200],
  },
  () => StartWorkflowRunRequest,
  () => StartWorkflowRunResponse
);
