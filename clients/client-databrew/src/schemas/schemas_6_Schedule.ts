// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CB,
  _CD,
  _CEr,
  _DS,
  _DSe,
  _DSR,
  _DSRe,
  _DSRes,
  _DSResc,
  _h,
  _JN,
  _LMB,
  _LMD,
  _N,
  _RAe,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteScheduleRequest = struct(n0, _DSR, 0, [_N], [[0, 1]]);
export var DeleteScheduleResponse = struct(n0, _DSRe, 0, [_N], [0]);
export var DescribeScheduleRequest = struct(n0, _DSRes, 0, [_N], [[0, 1]]);
export var DescribeScheduleResponse = struct(
  n0,
  _DSResc,
  0,
  [_CD, _CB, _JN, _LMB, _LMD, _RAe, _CEr, _T, _N],
  [4, 0, 64 | 0, 0, 4, 0, 0, 128 | 0, 0]
);
export var JobNameList = 64 | 0;

export var DeleteSchedule = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/schedules/{Name}", 200],
  },
  () => DeleteScheduleRequest,
  () => DeleteScheduleResponse
);
export var DescribeSchedule = op(
  n0,
  _DSe,
  {
    [_h]: ["GET", "/schedules/{Name}", 200],
  },
  () => DescribeScheduleRequest,
  () => DescribeScheduleResponse
);
