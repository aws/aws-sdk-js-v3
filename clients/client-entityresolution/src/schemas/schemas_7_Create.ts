// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ExceedsLimitException as __ExceedsLimitException } from "../models/index";
import { _c, _e, _ELE, _hE, _ht, _jI, _m, _qN, _qV, _SMJ, _SMJI, _SMJO, _wN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ExceedsLimitException = error(
  n0,
  _ELE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _qN, _qV],
  [0, 0, 1],

  __ExceedsLimitException
);
export var StartMatchingJobInput = struct(n0, _SMJI, 0, [_wN], [[0, 1]]);
export var StartMatchingJobOutput = struct(n0, _SMJO, 0, [_jI], [0]);
export var StartMatchingJob = op(
  n0,
  _SMJ,
  {
    [_ht]: ["POST", "/matchingworkflows/{workflowName}/jobs", 200],
  },
  () => StartMatchingJobInput,
  () => StartMatchingJobOutput
);
