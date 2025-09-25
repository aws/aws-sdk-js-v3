// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _JNo, _LJ, _LJR, _LJRi, _MRax, _NTe, _Tag, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListJobsRequest = struct(n0, _LJR, 0, [_NTe, _MRax, _Tag], [0, 1, 128 | 0]);
export var ListJobsResponse = struct(n0, _LJRi, 0, [_JNo, _NTe], [64 | 0, 0]);
export var JobNameList = 64 | 0;

export var ListJobs = op(
  n0,
  _LJ,
  0,
  () => ListJobsRequest,
  () => ListJobsResponse
);
