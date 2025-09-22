// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DSDJ,
  _DSDJR,
  _DSDJRe,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LC,
  _LSDJ,
  _LSDJR,
  _LSDJRi,
  _M,
  _MRa,
  _NT,
  _ODC,
  _SDJF,
  _SDJP,
  _SDJPL,
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

export var DescribeSentimentDetectionJobRequest = struct(n0, _DSDJR, 0, [_JI], [0]);
export var DescribeSentimentDetectionJobResponse = struct(
  n0,
  _DSDJRe,
  0,
  [_SDJP],
  [() => SentimentDetectionJobProperties]
);
export var ListSentimentDetectionJobsRequest = struct(
  n0,
  _LSDJR,
  0,
  [_F, _NT, _MRa],
  [() => SentimentDetectionJobFilter, 0, 1]
);
export var ListSentimentDetectionJobsResponse = struct(
  n0,
  _LSDJRi,
  0,
  [_SDJPL, _NT],
  [() => SentimentDetectionJobPropertiesList, 0]
);
export var SentimentDetectionJobFilter = struct(n0, _SDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var SentimentDetectionJobProperties = struct(
  n0,
  _SDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _LC, _DARA, _VKKI, _VC],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => OutputDataConfig, 0, 0, 0, () => VpcConfig]
);
export var SentimentDetectionJobPropertiesList = list(n0, _SDJPL, 0, () => SentimentDetectionJobProperties);
export var DescribeSentimentDetectionJob = op(
  n0,
  _DSDJ,
  0,
  () => DescribeSentimentDetectionJobRequest,
  () => DescribeSentimentDetectionJobResponse
);
export var ListSentimentDetectionJobs = op(
  n0,
  _LSDJ,
  0,
  () => ListSentimentDetectionJobsRequest,
  () => ListSentimentDetectionJobsResponse
);
