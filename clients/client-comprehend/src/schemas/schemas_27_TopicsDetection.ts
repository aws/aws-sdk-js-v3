// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DTDJ,
  _DTDJR,
  _DTDJRe,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LTDJ,
  _LTDJR,
  _LTDJRi,
  _M,
  _MRa,
  _NOT,
  _NT,
  _ODC,
  _STA,
  _STB,
  _STu,
  _TDJF,
  _TDJP,
  _TDJPL,
  _VC,
  _VKKI,
  InputDataConfig,
  n0,
  OutputDataConfig,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTopicsDetectionJobRequest = struct(n0, _DTDJR, 0, [_JI], [0]);
export var DescribeTopicsDetectionJobResponse = struct(n0, _DTDJRe, 0, [_TDJP], [() => TopicsDetectionJobProperties]);
export var ListTopicsDetectionJobsRequest = struct(
  n0,
  _LTDJR,
  0,
  [_F, _NT, _MRa],
  [() => TopicsDetectionJobFilter, 0, 1]
);
export var ListTopicsDetectionJobsResponse = struct(
  n0,
  _LTDJRi,
  0,
  [_TDJPL, _NT],
  [() => TopicsDetectionJobPropertiesList, 0]
);
export var TopicsDetectionJobFilter = struct(n0, _TDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var TopicsDetectionJobProperties = struct(
  n0,
  _TDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _NOT, _DARA, _VKKI, _VC],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => OutputDataConfig, 1, 0, 0, () => VpcConfig]
);
export var TopicsDetectionJobPropertiesList = list(n0, _TDJPL, 0, () => TopicsDetectionJobProperties);
export var DescribeTopicsDetectionJob = op(
  n0,
  _DTDJ,
  0,
  () => DescribeTopicsDetectionJobRequest,
  () => DescribeTopicsDetectionJobResponse
);
export var ListTopicsDetectionJobs = op(
  n0,
  _LTDJ,
  0,
  () => ListTopicsDetectionJobsRequest,
  () => ListTopicsDetectionJobsResponse
);
