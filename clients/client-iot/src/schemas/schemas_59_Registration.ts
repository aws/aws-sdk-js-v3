// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _h,
  _hQ,
  _LTRT,
  _LTRTR,
  _LTRTRi,
  _LTRTRis,
  _LTRTRR,
  _LTRTRRi,
  _mR,
  _nT,
  _rL,
  _rT,
  _st,
  _STRTRto,
  _STRTRtop,
  _STRTt,
  _tI,
  _tIa,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListThingRegistrationTaskReportsRequest = struct(
  n0,
  _LTRTRR,
  0,
  [_tI, _rT, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
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
  ]
);
export var ListThingRegistrationTaskReportsResponse = struct(n0, _LTRTRRi, 0, [_rL, _rT, _nT], [64 | 0, 0, 0]);
export var ListThingRegistrationTasksRequest = struct(
  n0,
  _LTRTR,
  0,
  [_nT, _mR, _st],
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
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListThingRegistrationTasksResponse = struct(n0, _LTRTRi, 0, [_tIa, _nT], [64 | 0, 0]);
export var StopThingRegistrationTaskRequest = struct(n0, _STRTRto, 0, [_tI], [[0, 1]]);
export var StopThingRegistrationTaskResponse = struct(n0, _STRTRtop, 0, [], []);
export var S3FileUrlList = 64 | 0;

export var TaskIdList = 64 | 0;

export var ListThingRegistrationTaskReports = op(
  n0,
  _LTRTRis,
  {
    [_h]: ["GET", "/thing-registration-tasks/{taskId}/reports", 200],
  },
  () => ListThingRegistrationTaskReportsRequest,
  () => ListThingRegistrationTaskReportsResponse
);
export var ListThingRegistrationTasks = op(
  n0,
  _LTRT,
  {
    [_h]: ["GET", "/thing-registration-tasks", 200],
  },
  () => ListThingRegistrationTasksRequest,
  () => ListThingRegistrationTasksResponse
);
export var StopThingRegistrationTask = op(
  n0,
  _STRTt,
  {
    [_h]: ["PUT", "/thing-registration-tasks/{taskId}/cancel", 200],
  },
  () => StopThingRegistrationTaskRequest,
  () => StopThingRegistrationTaskResponse
);
