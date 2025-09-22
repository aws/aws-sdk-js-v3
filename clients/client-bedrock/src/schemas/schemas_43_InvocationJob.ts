// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _jI, _SMIJ, _SMIJR, _SMIJRt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopModelInvocationJobRequest = struct(n0, _SMIJR, 0, [_jI], [[0, 1]]);
export var StopModelInvocationJobResponse = struct(n0, _SMIJRt, 0, [], []);
export var StopModelInvocationJob = op(
  n0,
  _SMIJ,
  {
    [_ht]: ["POST", "/model-invocation-job/{jobIdentifier}/stop", 200],
  },
  () => StopModelInvocationJobRequest,
  () => StopModelInvocationJobResponse
);
