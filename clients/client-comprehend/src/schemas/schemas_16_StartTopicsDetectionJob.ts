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
  _NOT,
  _ODC,
  _STDJ,
  _STDJR,
  _STDJRt,
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

export var StartTopicsDetectionJobRequest = struct(
  n0,
  _STDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _NOT, _CRT, _VKKI, _VC, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, 1, [0, 4], 0, () => VpcConfig, () => TagList]
);
export var StartTopicsDetectionJobResponse = struct(n0, _STDJRt, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var StartTopicsDetectionJob = op(
  n0,
  _STDJ,
  0,
  () => StartTopicsDetectionJobRequest,
  () => StartTopicsDetectionJobResponse
);
