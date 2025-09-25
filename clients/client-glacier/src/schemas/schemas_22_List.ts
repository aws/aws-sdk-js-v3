// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _aI, _com, _h, _hQ, _JL, _li, _LJ, _LJI, _LJO, _M, _ma, _sta, _vN, n0 } from "./schemas_0";
import { GlacierJobDescription } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var ListJobsInput = struct(
  n0,
  _LJI,
  0,
  [_aI, _vN, _li, _ma, _sta, _com],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
    [
      0,
      {
        [_hQ]: _com,
      },
    ],
  ]
);
export var ListJobsOutput = struct(n0, _LJO, 0, [_JL, _M], [() => JobList, 0]);
export var JobList = list(n0, _JL, 0, () => GlacierJobDescription);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/jobs", 200],
  },
  () => ListJobsInput,
  () => ListJobsOutput
);
