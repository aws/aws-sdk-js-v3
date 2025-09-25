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
  _STSDJ,
  _STSDJR,
  _STSDJRt,
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

export var StartTargetedSentimentDetectionJobRequest = struct(
  n0,
  _STSDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _LC, _CRT, _VKKI, _VC, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, 0, [0, 4], 0, () => VpcConfig, () => TagList]
);
export var StartTargetedSentimentDetectionJobResponse = struct(n0, _STSDJRt, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var StartTargetedSentimentDetectionJob = op(
  n0,
  _STSDJ,
  0,
  () => StartTargetedSentimentDetectionJobRequest,
  () => StartTargetedSentimentDetectionJobResponse
);
