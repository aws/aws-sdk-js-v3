// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CA,
  _DRSe,
  _DRSRe,
  _DRSRes,
  _LW,
  _MA,
  _MN,
  _PM,
  _RF,
  _RSD,
  _S,
  _SRS,
  _SRSR,
  _SRSRt,
  _SRSRto,
  _SRSRtop,
  _SRSt,
  _UA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRetrainingSchedulerRequest = struct(n0, _DRSRe, 0, [_MN], [0]);
export var DescribeRetrainingSchedulerResponse = struct(
  n0,
  _DRSRes,
  0,
  [_MN, _MA, _RSD, _RF, _LW, _S, _PM, _CA, _UA],
  [0, 0, 4, 0, 0, 0, 0, 4, 4]
);
export var StartRetrainingSchedulerRequest = struct(n0, _SRSR, 0, [_MN], [0]);
export var StartRetrainingSchedulerResponse = struct(n0, _SRSRt, 0, [_MN, _MA, _S], [0, 0, 0]);
export var StopRetrainingSchedulerRequest = struct(n0, _SRSRto, 0, [_MN], [0]);
export var StopRetrainingSchedulerResponse = struct(n0, _SRSRtop, 0, [_MN, _MA, _S], [0, 0, 0]);
export var DescribeRetrainingScheduler = op(
  n0,
  _DRSe,
  0,
  () => DescribeRetrainingSchedulerRequest,
  () => DescribeRetrainingSchedulerResponse
);
export var StartRetrainingScheduler = op(
  n0,
  _SRS,
  0,
  () => StartRetrainingSchedulerRequest,
  () => StartRetrainingSchedulerResponse
);
export var StopRetrainingScheduler = op(
  n0,
  _SRSt,
  0,
  () => StopRetrainingSchedulerRequest,
  () => StopRetrainingSchedulerResponse
);
