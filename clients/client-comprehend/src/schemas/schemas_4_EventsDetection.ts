// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRT,
  _DARA,
  _DEDJe,
  _DEDJRes,
  _DEDJResc,
  _EDJFv,
  _EDJPLv,
  _EDJPv,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LC,
  _LEDJi,
  _LEDJRis,
  _LEDJRist,
  _M,
  _MRa,
  _NT,
  _ODC,
  _SEDJRta,
  _SEDJRtar,
  _SEDJt,
  _STA,
  _STB,
  _STu,
  _Ta,
  _TETa,
  InputDataConfig,
  n0,
  OutputDataConfig,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEventsDetectionJobRequest = struct(n0, _DEDJRes, 0, [_JI], [0]);
export var DescribeEventsDetectionJobResponse = struct(
  n0,
  _DEDJResc,
  0,
  [_EDJPv],
  [() => EventsDetectionJobProperties]
);
export var EventsDetectionJobFilter = struct(n0, _EDJFv, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var EventsDetectionJobProperties = struct(
  n0,
  _EDJPv,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _LC, _DARA, _TETa],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => OutputDataConfig, 0, 0, 64 | 0]
);
export var ListEventsDetectionJobsRequest = struct(
  n0,
  _LEDJRis,
  0,
  [_F, _NT, _MRa],
  [() => EventsDetectionJobFilter, 0, 1]
);
export var ListEventsDetectionJobsResponse = struct(
  n0,
  _LEDJRist,
  0,
  [_EDJPLv, _NT],
  [() => EventsDetectionJobPropertiesList, 0]
);
export var StartEventsDetectionJobRequest = struct(
  n0,
  _SEDJRta,
  0,
  [_IDC, _ODC, _DARA, _JN, _LC, _CRT, _TETa, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, 0, [0, 4], 64 | 0, () => TagList]
);
export var StartEventsDetectionJobResponse = struct(n0, _SEDJRtar, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var EventsDetectionJobPropertiesList = list(n0, _EDJPLv, 0, () => EventsDetectionJobProperties);
export var TargetEventTypes = 64 | 0;

export var DescribeEventsDetectionJob = op(
  n0,
  _DEDJe,
  0,
  () => DescribeEventsDetectionJobRequest,
  () => DescribeEventsDetectionJobResponse
);
export var ListEventsDetectionJobs = op(
  n0,
  _LEDJi,
  0,
  () => ListEventsDetectionJobsRequest,
  () => ListEventsDetectionJobsResponse
);
export var StartEventsDetectionJob = op(
  n0,
  _SEDJt,
  0,
  () => StartEventsDetectionJobRequest,
  () => StartEventsDetectionJobResponse
);
