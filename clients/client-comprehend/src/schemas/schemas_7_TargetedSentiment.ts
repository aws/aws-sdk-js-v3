// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DTSDJ,
  _DTSDJR,
  _DTSDJRe,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LC,
  _LTSDJ,
  _LTSDJR,
  _LTSDJRi,
  _M,
  _MRa,
  _NT,
  _ODC,
  _STA,
  _STB,
  _STu,
  _TSDJF,
  _TSDJP,
  _TSDJPL,
  _VC,
  _VKKI,
  InputDataConfig,
  n0,
  OutputDataConfig,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTargetedSentimentDetectionJobRequest = struct(n0, _DTSDJR, 0, [_JI], [0]);
export var DescribeTargetedSentimentDetectionJobResponse = struct(
  n0,
  _DTSDJRe,
  0,
  [_TSDJP],
  [() => TargetedSentimentDetectionJobProperties]
);
export var ListTargetedSentimentDetectionJobsRequest = struct(
  n0,
  _LTSDJR,
  0,
  [_F, _NT, _MRa],
  [() => TargetedSentimentDetectionJobFilter, 0, 1]
);
export var ListTargetedSentimentDetectionJobsResponse = struct(
  n0,
  _LTSDJRi,
  0,
  [_TSDJPL, _NT],
  [() => TargetedSentimentDetectionJobPropertiesList, 0]
);
export var TargetedSentimentDetectionJobFilter = struct(n0, _TSDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var TargetedSentimentDetectionJobProperties = struct(
  n0,
  _TSDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _LC, _DARA, _VKKI, _VC],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => OutputDataConfig, 0, 0, 0, () => VpcConfig]
);
export var TargetedSentimentDetectionJobPropertiesList = list(
  n0,
  _TSDJPL,
  0,
  () => TargetedSentimentDetectionJobProperties
);
export var DescribeTargetedSentimentDetectionJob = op(
  n0,
  _DTSDJ,
  0,
  () => DescribeTargetedSentimentDetectionJobRequest,
  () => DescribeTargetedSentimentDetectionJobResponse
);
export var ListTargetedSentimentDetectionJobs = op(
  n0,
  _LTSDJ,
  0,
  () => ListTargetedSentimentDetectionJobsRequest,
  () => ListTargetedSentimentDetectionJobsResponse
);
