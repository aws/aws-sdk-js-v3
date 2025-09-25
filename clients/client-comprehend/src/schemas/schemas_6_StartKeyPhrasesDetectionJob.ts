// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CRT,
  _DARA,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LC,
  _ODC,
  _SKPDJ,
  _SKPDJR,
  _SKPDJRt,
  _Ta,
  _VC,
  _VKKI,
  InputDataConfig,
  n0,
  OutputDataConfig,
  TagList,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StartKeyPhrasesDetectionJobRequest = struct(
  n0,
  _SKPDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _LC, _CRT, _VKKI, _VC, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, 0, [0, 4], 0, () => VpcConfig, () => TagList]
);
export var StartKeyPhrasesDetectionJobResponse = struct(n0, _SKPDJRt, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var StartKeyPhrasesDetectionJob = op(
  n0,
  _SKPDJ,
  0,
  () => StartKeyPhrasesDetectionJobRequest,
  () => StartKeyPhrasesDetectionJobResponse
);
