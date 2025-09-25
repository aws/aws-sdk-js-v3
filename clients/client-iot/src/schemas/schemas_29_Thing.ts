// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSBTO,
  _ATTTG,
  _ATTTGR,
  _ATTTGRd,
  _DJEe,
  _DJERe,
  _DJERes,
  _dM,
  _eN,
  _eS,
  _exe,
  _fCo,
  _h,
  _hQ,
  _JE,
  _jES,
  _JESD,
  _JESFJ,
  _JESFJL,
  _jI,
  _LJEFJ,
  _LJEFJR,
  _LJEFJRi,
  _lUA,
  _mR,
  _nT,
  _oDG,
  _qA,
  _RTFTG,
  _RTFTGR,
  _RTFTGRe,
  _sAt,
  _sDt,
  _st,
  _tA,
  _tGA,
  _tGNh,
  _tN,
  _vNe,
  n0,
} from "./schemas_0";
import { JobExecutionSummary } from "./schemas_77_List";

/* eslint no-var: 0 */

export var AddThingToThingGroupRequest = struct(n0, _ATTTGR, 0, [_tGNh, _tGA, _tN, _tA, _oDG], [0, 0, 0, 0, 2]);
export var AddThingToThingGroupResponse = struct(n0, _ATTTGRd, 0, [], []);
export var DescribeJobExecutionRequest = struct(
  n0,
  _DJERe,
  0,
  [_jI, _tN, _eN],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _eN,
      },
    ],
  ]
);
export var DescribeJobExecutionResponse = struct(n0, _DJERes, 0, [_exe], [() => JobExecution]);
export var JobExecution = struct(
  n0,
  _JE,
  0,
  [_jI, _st, _fCo, _sDt, _tA, _qA, _sAt, _lUA, _eN, _vNe, _aSBTO],
  [0, 0, 2, () => JobExecutionStatusDetails, 0, 4, 4, 4, 1, 1, 1]
);
export var JobExecutionStatusDetails = struct(n0, _JESD, 0, [_dM], [128 | 0]);
export var JobExecutionSummaryForJob = struct(n0, _JESFJ, 0, [_tA, _jES], [0, () => JobExecutionSummary]);
export var ListJobExecutionsForJobRequest = struct(
  n0,
  _LJEFJR,
  0,
  [_jI, _st, _mR, _nT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
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
  ]
);
export var ListJobExecutionsForJobResponse = struct(
  n0,
  _LJEFJRi,
  0,
  [_eS, _nT],
  [() => JobExecutionSummaryForJobList, 0]
);
export var RemoveThingFromThingGroupRequest = struct(n0, _RTFTGR, 0, [_tGNh, _tGA, _tN, _tA], [0, 0, 0, 0]);
export var RemoveThingFromThingGroupResponse = struct(n0, _RTFTGRe, 0, [], []);
export var JobExecutionSummaryForJobList = list(n0, _JESFJL, 0, () => JobExecutionSummaryForJob);
export var AddThingToThingGroup = op(
  n0,
  _ATTTG,
  {
    [_h]: ["PUT", "/thing-groups/addThingToThingGroup", 200],
  },
  () => AddThingToThingGroupRequest,
  () => AddThingToThingGroupResponse
);
export var DescribeJobExecution = op(
  n0,
  _DJEe,
  {
    [_h]: ["GET", "/things/{thingName}/jobs/{jobId}", 200],
  },
  () => DescribeJobExecutionRequest,
  () => DescribeJobExecutionResponse
);
export var ListJobExecutionsForJob = op(
  n0,
  _LJEFJ,
  {
    [_h]: ["GET", "/jobs/{jobId}/things", 200],
  },
  () => ListJobExecutionsForJobRequest,
  () => ListJobExecutionsForJobResponse
);
export var RemoveThingFromThingGroup = op(
  n0,
  _RTFTG,
  {
    [_h]: ["PUT", "/thing-groups/removeThingFromThingGroup", 200],
  },
  () => RemoveThingFromThingGroupRequest,
  () => RemoveThingFromThingGroupResponse
);
