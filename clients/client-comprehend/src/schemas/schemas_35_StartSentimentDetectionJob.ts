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
  _SSDJ,
  _SSDJR,
  _SSDJRt,
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

export var StartSentimentDetectionJobRequest = struct(
  n0,
  _SSDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _LC, _CRT, _VKKI, _VC, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, 0, [0, 4], 0, () => VpcConfig, () => TagList]
);
export var StartSentimentDetectionJobResponse = struct(n0, _SSDJRt, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var StartSentimentDetectionJob = op(
  n0,
  _SSDJ,
  0,
  () => StartSentimentDetectionJobRequest,
  () => StartSentimentDetectionJobResponse
);
