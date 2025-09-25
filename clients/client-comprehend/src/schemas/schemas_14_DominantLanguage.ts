// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DDLDJ,
  _DDLDJR,
  _DDLDJRe,
  _DLDJF,
  _DLDJP,
  _DLDJPL,
  _ET,
  _F,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LDLDJ,
  _LDLDJR,
  _LDLDJRi,
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

export var DescribeDominantLanguageDetectionJobRequest = struct(n0, _DDLDJR, 0, [_JI], [0]);
export var DescribeDominantLanguageDetectionJobResponse = struct(
  n0,
  _DDLDJRe,
  0,
  [_DLDJP],
  [() => DominantLanguageDetectionJobProperties]
);
export var DominantLanguageDetectionJobFilter = struct(n0, _DLDJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var DominantLanguageDetectionJobProperties = struct(
  n0,
  _DLDJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _IDC, _ODC, _DARA, _VKKI, _VC],
  [0, 0, 0, 0, 0, 4, 4, () => InputDataConfig, () => OutputDataConfig, 0, 0, () => VpcConfig]
);
export var ListDominantLanguageDetectionJobsRequest = struct(
  n0,
  _LDLDJR,
  0,
  [_F, _NT, _MRa],
  [() => DominantLanguageDetectionJobFilter, 0, 1]
);
export var ListDominantLanguageDetectionJobsResponse = struct(
  n0,
  _LDLDJRi,
  0,
  [_DLDJPL, _NT],
  [() => DominantLanguageDetectionJobPropertiesList, 0]
);
export var DominantLanguageDetectionJobPropertiesList = list(
  n0,
  _DLDJPL,
  0,
  () => DominantLanguageDetectionJobProperties
);
export var DescribeDominantLanguageDetectionJob = op(
  n0,
  _DDLDJ,
  0,
  () => DescribeDominantLanguageDetectionJobRequest,
  () => DescribeDominantLanguageDetectionJobResponse
);
export var ListDominantLanguageDetectionJobs = op(
  n0,
  _LDLDJ,
  0,
  () => ListDominantLanguageDetectionJobsRequest,
  () => ListDominantLanguageDetectionJobsResponse
);
