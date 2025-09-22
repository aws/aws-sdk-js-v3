// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _end, _fil, _hQ, _ht, _i, _JS, _JSo, _jSo, _LBIJ, _LBIJR, _LBIJRi, _mR, _n, _nT, _sta, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var JobSummary = struct(n0, _JS, 0, [_i, _n, _sta], [0, 0, 0]);
export var ListBulkImportJobsRequest = struct(
  n0,
  _LBIJR,
  0,
  [_nT, _mR, _fil],
  [
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
    [
      0,
      {
        [_hQ]: _fil,
      },
    ],
  ]
);
export var ListBulkImportJobsResponse = struct(n0, _LBIJRi, 0, [_jSo, _nT], [() => JobSummaries, 0]);
export var JobSummaries = list(n0, _JSo, 0, () => JobSummary);
export var ListBulkImportJobs = op(
  n0,
  _LBIJ,
  {
    [_ht]: ["GET", "/jobs", 200],
    [_end]: ["data."],
  },
  () => ListBulkImportJobsRequest,
  () => ListBulkImportJobsResponse
);
