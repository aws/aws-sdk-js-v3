// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _cN,
  _co,
  _DFP,
  _DFPe,
  _DFPR,
  _DFPRe,
  _DFPRes,
  _DFPResc,
  _FP,
  _fP,
  _fPA,
  _FPH,
  _FPI,
  _FPIL,
  _fPN,
  _FPS,
  _FPSa,
  _h,
  _ht,
  _i,
  _la,
  _m,
  _nam,
  _pERA,
  _rI,
  _s,
  _se,
  _sub,
  _t,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFargateProfileRequest = struct(
  n0,
  _DFPR,
  0,
  [_cN, _fPN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteFargateProfileResponse = struct(n0, _DFPRe, 0, [_fP], [() => FargateProfile]);
export var DescribeFargateProfileRequest = struct(
  n0,
  _DFPRes,
  0,
  [_cN, _fPN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeFargateProfileResponse = struct(n0, _DFPResc, 0, [_fP], [() => FargateProfile]);
export var FargateProfile = struct(
  n0,
  _FP,
  0,
  [_fPN, _fPA, _cN, _cA, _pERA, _sub, _se, _s, _t, _h],
  [0, 0, 0, 4, 0, 64 | 0, () => FargateProfileSelectors, 0, 128 | 0, () => FargateProfileHealth]
);
export var FargateProfileHealth = struct(n0, _FPH, 0, [_i], [() => FargateProfileIssueList]);
export var FargateProfileIssue = struct(n0, _FPI, 0, [_co, _m, _rI], [0, 0, 64 | 0]);
export var FargateProfileSelector = struct(n0, _FPS, 0, [_nam, _la], [0, 128 | 0]);
export var FargateProfileIssueList = list(n0, _FPIL, 0, () => FargateProfileIssue);
export var FargateProfileSelectors = list(n0, _FPSa, 0, () => FargateProfileSelector);
export var FargateProfileLabel = 128 | 0;

export var DeleteFargateProfile = op(
  n0,
  _DFP,
  {
    [_ht]: ["DELETE", "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}", 200],
  },
  () => DeleteFargateProfileRequest,
  () => DeleteFargateProfileResponse
);
export var DescribeFargateProfile = op(
  n0,
  _DFPe,
  {
    [_ht]: ["GET", "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}", 200],
  },
  () => DescribeFargateProfileRequest,
  () => DescribeFargateProfileResponse
);
