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
  _ODC,
  _SDLDJ,
  _SDLDJR,
  _SDLDJRt,
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

export var StartDominantLanguageDetectionJobRequest = struct(
  n0,
  _SDLDJR,
  0,
  [_IDC, _ODC, _DARA, _JN, _CRT, _VKKI, _VC, _Ta],
  [() => InputDataConfig, () => OutputDataConfig, 0, 0, [0, 4], 0, () => VpcConfig, () => TagList]
);
export var StartDominantLanguageDetectionJobResponse = struct(n0, _SDLDJRt, 0, [_JI, _JA, _JS], [0, 0, 0]);
export var StartDominantLanguageDetectionJob = op(
  n0,
  _SDLDJ,
  0,
  () => StartDominantLanguageDetectionJobRequest,
  () => StartDominantLanguageDetectionJobResponse
);
