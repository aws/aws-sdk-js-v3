// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAom,
  _cAr,
  _DJ,
  _DJE,
  _DJER,
  _DJR,
  _eN,
  _eS,
  _fo,
  _h,
  _hQ,
  _iC,
  _jA,
  _jES,
  _JESFT,
  _JESFTL,
  _jI,
  _jo,
  _JS,
  _JSL,
  _LJ,
  _LJEFT,
  _LJEFTR,
  _LJEFTRi,
  _LJR,
  _LJRi,
  _lUA,
  _mR,
  _nI,
  _nT,
  _st,
  _tGI,
  _tGNh,
  _tN,
  _tSa,
  n0,
  Unit,
} from "./schemas_0";
import { JobExecutionSummary } from "./schemas_77_List";

/* eslint no-var: 0 */

export var DeleteJobExecutionRequest = struct(
  n0,
  _DJER,
  0,
  [_jI, _tN, _eN, _fo, _nI],
  [
    [0, 1],
    [0, 1],
    [1, 1],
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
    [
      0,
      {
        [_hQ]: _nI,
      },
    ],
  ]
);
export var DeleteJobRequest = struct(
  n0,
  _DJR,
  0,
  [_jI, _fo, _nI],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _fo,
      },
    ],
    [
      0,
      {
        [_hQ]: _nI,
      },
    ],
  ]
);
export var JobExecutionSummaryForThing = struct(n0, _JESFT, 0, [_jI, _jES], [0, () => JobExecutionSummary]);
export var JobSummary = struct(
  n0,
  _JS,
  0,
  [_jA, _jI, _tGI, _tSa, _st, _cAr, _lUA, _cAom, _iC],
  [0, 0, 0, 0, 0, 4, 4, 4, 2]
);
export var ListJobExecutionsForThingRequest = struct(
  n0,
  _LJEFTR,
  0,
  [_tN, _st, _nI, _mR, _nT, _jI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _nI,
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
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _jI,
      },
    ],
  ]
);
export var ListJobExecutionsForThingResponse = struct(
  n0,
  _LJEFTRi,
  0,
  [_eS, _nT],
  [() => JobExecutionSummaryForThingList, 0]
);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_st, _tSa, _mR, _nT, _tGNh, _tGI, _nI],
  [
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _tSa,
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
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tGNh,
      },
    ],
    [
      0,
      {
        [_hQ]: _tGI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nI,
      },
    ],
  ]
);
export var ListJobsResponse = struct(n0, _LJRi, 0, [_jo, _nT], [() => JobSummaryList, 0]);
export var JobExecutionSummaryForThingList = list(n0, _JESFTL, 0, () => JobExecutionSummaryForThing);
export var JobSummaryList = list(n0, _JSL, 0, () => JobSummary);
export var DeleteJob = op(
  n0,
  _DJ,
  {
    [_h]: ["DELETE", "/jobs/{jobId}", 200],
  },
  () => DeleteJobRequest,
  () => Unit
);
export var DeleteJobExecution = op(
  n0,
  _DJE,
  {
    [_h]: ["DELETE", "/things/{thingName}/jobs/{jobId}/executionNumber/{executionNumber}", 200],
  },
  () => DeleteJobExecutionRequest,
  () => Unit
);
export var ListJobExecutionsForThing = op(
  n0,
  _LJEFT,
  {
    [_h]: ["GET", "/things/{thingName}/jobs", 200],
  },
  () => ListJobExecutionsForThingRequest,
  () => ListJobExecutionsForThingResponse
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_h]: ["GET", "/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResponse
);
