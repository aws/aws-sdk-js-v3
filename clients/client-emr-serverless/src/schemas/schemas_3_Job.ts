// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aSPL,
  _at,
  _CJR,
  _CJRR,
  _CJRRa,
  _GDFJR,
  _GDFJRR,
  _GDFJRRe,
  _hQ,
  _ht,
  _jRI,
  _sGPIS,
  _u,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CancelJobRunRequest = struct(
  n0,
  _CJRR,
  0,
  [_aI, _jRI, _sGPIS],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _sGPIS,
      },
    ],
  ]
);
export var CancelJobRunResponse = struct(n0, _CJRRa, 0, [_aI, _jRI], [0, 0]);
export var GetDashboardForJobRunRequest = struct(
  n0,
  _GDFJRR,
  0,
  [_aI, _jRI, _at, _aSPL],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _at,
      },
    ],
    [
      2,
      {
        [_hQ]: _aSPL,
      },
    ],
  ]
);
export var GetDashboardForJobRunResponse = struct(n0, _GDFJRRe, 0, [_u], [0]);
export var CancelJobRun = op(
  n0,
  _CJR,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/jobruns/{jobRunId}", 200],
  },
  () => CancelJobRunRequest,
  () => CancelJobRunResponse
);
export var GetDashboardForJobRun = op(
  n0,
  _GDFJR,
  {
    [_ht]: ["GET", "/applications/{applicationId}/jobruns/{jobRunId}/dashboard", 200],
  },
  () => GetDashboardForJobRunRequest,
  () => GetDashboardForJobRunResponse
);
