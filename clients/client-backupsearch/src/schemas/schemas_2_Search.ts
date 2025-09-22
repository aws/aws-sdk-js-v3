// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BS,
  _CTo,
  _CTr,
  _h,
  _hQ,
  _LSJ,
  _LSJI,
  _LSJO,
  _MR,
  _N,
  _NT,
  _SJ,
  _SJA,
  _SJI,
  _SJS,
  _SM,
  _SSS,
  _St,
  _TITSC,
  _TRPTSC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSearchJobsInput = struct(
  n0,
  _LSJI,
  0,
  [_BS, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _St,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListSearchJobsOutput = struct(n0, _LSJO, 0, [_SJ, _NT], [() => SearchJobs, 0]);
export var SearchJobSummary = struct(
  n0,
  _SJS,
  0,
  [_SJI, _SJA, _N, _St, _CTr, _CTo, _SSS, _SM],
  [0, 0, 0, 0, 4, 4, () => SearchScopeSummary, 0]
);
export var SearchScopeSummary = struct(n0, _SSS, 0, [_TRPTSC, _TITSC], [1, 1]);
export var Unit = "unit" as const;

export var SearchJobs = list(n0, _SJ, 0, () => SearchJobSummary);
export var ListSearchJobs = op(
  n0,
  _LSJ,
  {
    [_h]: ["GET", "/search-jobs", 200],
  },
  () => ListSearchJobsInput,
  () => ListSearchJobsOutput
);
