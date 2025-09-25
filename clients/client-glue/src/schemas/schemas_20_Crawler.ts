// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  NoScheduleException as __NoScheduleException,
  SchedulerNotRunningException as __SchedulerNotRunningException,
  SchedulerRunningException as __SchedulerRunningException,
  SchedulerTransitioningException as __SchedulerTransitioningException,
} from "../models/index";
import {
  _c,
  _CN,
  _DCele,
  _DCReleter,
  _DCReletera,
  _e,
  _M,
  _N,
  _NSE,
  _SCSR,
  _SCSRt,
  _SCSRto,
  _SCSRtop,
  _SCSt,
  _SCSto,
  _SNRE,
  _SRE,
  _STE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCrawlerRequest = struct(n0, _DCReleter, 0, [_N], [0]);
export var DeleteCrawlerResponse = struct(n0, _DCReletera, 0, [], []);
export var NoScheduleException = error(
  n0,
  _NSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __NoScheduleException
);
export var SchedulerNotRunningException = error(
  n0,
  _SNRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __SchedulerNotRunningException
);
export var SchedulerRunningException = error(
  n0,
  _SRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __SchedulerRunningException
);
export var SchedulerTransitioningException = error(
  n0,
  _STE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __SchedulerTransitioningException
);
export var StartCrawlerScheduleRequest = struct(n0, _SCSR, 0, [_CN], [0]);
export var StartCrawlerScheduleResponse = struct(n0, _SCSRt, 0, [], []);
export var StopCrawlerScheduleRequest = struct(n0, _SCSRto, 0, [_CN], [0]);
export var StopCrawlerScheduleResponse = struct(n0, _SCSRtop, 0, [], []);
export var DeleteCrawler = op(
  n0,
  _DCele,
  0,
  () => DeleteCrawlerRequest,
  () => DeleteCrawlerResponse
);
export var StartCrawlerSchedule = op(
  n0,
  _SCSt,
  0,
  () => StartCrawlerScheduleRequest,
  () => StartCrawlerScheduleResponse
);
export var StopCrawlerSchedule = op(
  n0,
  _SCSto,
  0,
  () => StopCrawlerScheduleRequest,
  () => StopCrawlerScheduleResponse
);
