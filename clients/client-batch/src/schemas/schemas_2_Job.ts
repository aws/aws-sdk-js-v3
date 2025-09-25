// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _cE,
  _CEO,
  _cEO,
  _CEOo,
  _CJQ,
  _CJQR,
  _CJQRr,
  _DJQe,
  _DJQRes,
  _DJQResc,
  _ht,
  _jQ,
  _jQA,
  _JQD,
  _JQDL,
  _jQN,
  _jQo,
  _jQT,
  _JSTLA,
  _jSTLA,
  _JSTLAo,
  _mR,
  _mTS,
  _nT,
  _o,
  _pr,
  _r,
  _sE,
  _SEO,
  _sEO,
  _SEOe,
  _sPA,
  _sR,
  _st,
  _sta,
  _t,
  _UJQ,
  _UJQR,
  _UJQRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ComputeEnvironmentOrder = struct(n0, _CEO, 0, [_o, _cE], [1, 0]);
export var CreateJobQueueRequest = struct(
  n0,
  _CJQR,
  0,
  [_jQN, _st, _sPA, _pr, _cEO, _sEO, _jQT, _t, _jSTLA],
  [
    0,
    0,
    0,
    1,
    () => ComputeEnvironmentOrders,
    () => ServiceEnvironmentOrders,
    0,
    128 | 0,
    () => JobStateTimeLimitActions,
  ]
);
export var CreateJobQueueResponse = struct(n0, _CJQRr, 0, [_jQN, _jQA], [0, 0]);
export var DescribeJobQueuesRequest = struct(n0, _DJQRes, 0, [_jQo, _mR, _nT], [64 | 0, 1, 0]);
export var DescribeJobQueuesResponse = struct(n0, _DJQResc, 0, [_jQo, _nT], [() => JobQueueDetailList, 0]);
export var JobQueueDetail = struct(
  n0,
  _JQD,
  0,
  [_jQN, _jQA, _st, _sPA, _sta, _sR, _pr, _cEO, _sEO, _jQT, _t, _jSTLA],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    () => ComputeEnvironmentOrders,
    () => ServiceEnvironmentOrders,
    0,
    128 | 0,
    () => JobStateTimeLimitActions,
  ]
);
export var JobStateTimeLimitAction = struct(n0, _JSTLA, 0, [_r, _st, _mTS, _ac], [0, 0, 1, 0]);
export var ServiceEnvironmentOrder = struct(n0, _SEO, 0, [_o, _sE], [1, 0]);
export var UpdateJobQueueRequest = struct(
  n0,
  _UJQR,
  0,
  [_jQ, _st, _sPA, _pr, _cEO, _sEO, _jSTLA],
  [0, 0, 0, 1, () => ComputeEnvironmentOrders, () => ServiceEnvironmentOrders, () => JobStateTimeLimitActions]
);
export var UpdateJobQueueResponse = struct(n0, _UJQRp, 0, [_jQN, _jQA], [0, 0]);
export var ComputeEnvironmentOrders = list(n0, _CEOo, 0, () => ComputeEnvironmentOrder);
export var JobQueueDetailList = list(n0, _JQDL, 0, () => JobQueueDetail);
export var JobStateTimeLimitActions = list(n0, _JSTLAo, 0, () => JobStateTimeLimitAction);
export var ServiceEnvironmentOrders = list(n0, _SEOe, 0, () => ServiceEnvironmentOrder);
export var CreateJobQueue = op(
  n0,
  _CJQ,
  {
    [_ht]: ["POST", "/v1/createjobqueue", 200],
  },
  () => CreateJobQueueRequest,
  () => CreateJobQueueResponse
);
export var DescribeJobQueues = op(
  n0,
  _DJQe,
  {
    [_ht]: ["POST", "/v1/describejobqueues", 200],
  },
  () => DescribeJobQueuesRequest,
  () => DescribeJobQueuesResponse
);
export var UpdateJobQueue = op(
  n0,
  _UJQ,
  {
    [_ht]: ["POST", "/v1/updatejobqueue", 200],
  },
  () => UpdateJobQueueRequest,
  () => UpdateJobQueueResponse
);
