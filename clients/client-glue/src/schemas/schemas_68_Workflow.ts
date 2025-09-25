// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { IllegalWorkflowStateException as __IllegalWorkflowStateException } from "../models/index";
import { _c, _e, _IWSE, _M, _N, _RIu, _SWRRto, _SWRRtop, _SWRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var IllegalWorkflowStateException = error(
  n0,
  _IWSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IllegalWorkflowStateException
);
export var StopWorkflowRunRequest = struct(n0, _SWRRto, 0, [_N, _RIu], [0, 0]);
export var StopWorkflowRunResponse = struct(n0, _SWRRtop, 0, [], []);
export var StopWorkflowRun = op(
  n0,
  _SWRt,
  0,
  () => StopWorkflowRunRequest,
  () => StopWorkflowRunResponse
);
