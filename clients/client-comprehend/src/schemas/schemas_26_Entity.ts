// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DEDJ,
  _DEDJR,
  _DEDJRe,
  _EDJF,
  _EDJP,
  _EDJPL,
  _ERA,
  _ET,
  _F,
  _FA,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LC,
  _LEDJ,
  _LEDJR,
  _LEDJRi,
  _M,
  _MRa,
  _NT,
  _ODC,
  _STA,
  _STB,
  _STER,
  _STERR,
  _STERRt,
  _STu,
  _VC,
  _VKKI,
  InputDataConfig,
  n0,
  OutputDataConfig,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEntitiesDetectionJobRequest = struct(n0, _DEDJR, 0, [_JI], [0]);
export var DescribeEntitiesDetectionJobResponse = struct(
  n0,
  _DEDJRe,
  0,
  [_EDJP],
  [() => EntitiesDetectionJobProperties]
);
export var EntitiesDetectionJobFilter = struct(n0, _EDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var EntitiesDetectionJobProperties = struct(
  n0,
  _EDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _ERA, _IDC, _ODC, _LC, _DARA, _VKKI, _VC, _FA],
  [0, 0, 0, 0, 0, 4, 4, 0, () => InputDataConfig, () => OutputDataConfig, 0, 0, 0, () => VpcConfig, 0]
);
export var ListEntitiesDetectionJobsRequest = struct(
  n0,
  _LEDJR,
  0,
  [_F, _NT, _MRa],
  [() => EntitiesDetectionJobFilter, 0, 1]
);
export var ListEntitiesDetectionJobsResponse = struct(
  n0,
  _LEDJRi,
  0,
  [_EDJPL, _NT],
  [() => EntitiesDetectionJobPropertiesList, 0]
);
export var StopTrainingEntityRecognizerRequest = struct(n0, _STERR, 0, [_ERA], [0]);
export var StopTrainingEntityRecognizerResponse = struct(n0, _STERRt, 0, [], []);
export var EntitiesDetectionJobPropertiesList = list(n0, _EDJPL, 0, () => EntitiesDetectionJobProperties);
export var DescribeEntitiesDetectionJob = op(
  n0,
  _DEDJ,
  0,
  () => DescribeEntitiesDetectionJobRequest,
  () => DescribeEntitiesDetectionJobResponse
);
export var ListEntitiesDetectionJobs = op(
  n0,
  _LEDJ,
  0,
  () => ListEntitiesDetectionJobsRequest,
  () => ListEntitiesDetectionJobsResponse
);
export var StopTrainingEntityRecognizer = op(
  n0,
  _STER,
  0,
  () => StopTrainingEntityRecognizerRequest,
  () => StopTrainingEntityRecognizerResponse
);
