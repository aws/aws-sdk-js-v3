// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _GROS,
  _GROSR,
  _GROSRe,
  _h,
  _LR,
  _LRR,
  _LRRi,
  _MR,
  _NT,
  _R,
  _Re,
  _RN,
  _ROL,
  _ROS,
  _ROSC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRegionOptStatusRequest = struct(n0, _GROSR, 0, [_AI, _RN], [0, 0]);
export var GetRegionOptStatusResponse = struct(n0, _GROSRe, 0, [_RN, _ROS], [0, 0]);
export var ListRegionsRequest = struct(n0, _LRR, 0, [_AI, _MR, _NT, _ROSC], [0, 1, 0, 64 | 0]);
export var ListRegionsResponse = struct(n0, _LRRi, 0, [_NT, _R], [0, () => RegionOptList]);
export var Region = struct(n0, _Re, 0, [_RN, _ROS], [0, 0]);
export var RegionOptList = list(n0, _ROL, 0, () => Region);
export var RegionOptStatusList = 64 | 0;

export var GetRegionOptStatus = op(
  n0,
  _GROS,
  {
    [_h]: ["POST", "/getRegionOptStatus", 200],
  },
  () => GetRegionOptStatusRequest,
  () => GetRegionOptStatusResponse
);
export var ListRegions = op(
  n0,
  _LR,
  {
    [_h]: ["POST", "/listRegions", 200],
  },
  () => ListRegionsRequest,
  () => ListRegionsResponse
);
