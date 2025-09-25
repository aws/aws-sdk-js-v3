// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DKPDJ,
  _DKPDJR,
  _DKPDJRe,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _KPDJF,
  _KPDJP,
  _KPDJPL,
  _LC,
  _LKPDJ,
  _LKPDJR,
  _LKPDJRi,
  _M,
  _MRa,
  _NT,
  _ODC,
  _STA,
  _STB,
  _STu,
  _VC,
  _VKKI,
  InputDataConfig,
  n0,
  OutputDataConfig,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeKeyPhrasesDetectionJobRequest = struct(n0, _DKPDJR, 0, [_JI], [0]);
export var DescribeKeyPhrasesDetectionJobResponse = struct(
  n0,
  _DKPDJRe,
  0,
  [_KPDJP],
  [() => KeyPhrasesDetectionJobProperties]
);
export var KeyPhrasesDetectionJobFilter = struct(n0, _KPDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var KeyPhrasesDetectionJobProperties = struct(
  n0,
  _KPDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _LC, _DARA, _VKKI, _VC],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => OutputDataConfig, 0, 0, 0, () => VpcConfig]
);
export var ListKeyPhrasesDetectionJobsRequest = struct(
  n0,
  _LKPDJR,
  0,
  [_F, _NT, _MRa],
  [() => KeyPhrasesDetectionJobFilter, 0, 1]
);
export var ListKeyPhrasesDetectionJobsResponse = struct(
  n0,
  _LKPDJRi,
  0,
  [_KPDJPL, _NT],
  [() => KeyPhrasesDetectionJobPropertiesList, 0]
);
export var KeyPhrasesDetectionJobPropertiesList = list(n0, _KPDJPL, 0, () => KeyPhrasesDetectionJobProperties);
export var DescribeKeyPhrasesDetectionJob = op(
  n0,
  _DKPDJ,
  0,
  () => DescribeKeyPhrasesDetectionJobRequest,
  () => DescribeKeyPhrasesDetectionJobResponse
);
export var ListKeyPhrasesDetectionJobs = op(
  n0,
  _LKPDJ,
  0,
  () => ListKeyPhrasesDetectionJobsRequest,
  () => ListKeyPhrasesDetectionJobsResponse
);
