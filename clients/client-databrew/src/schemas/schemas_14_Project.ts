// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _CB,
  _CD,
  _DN,
  _DPes,
  _DPRes,
  _DPResc,
  _h,
  _LMB,
  _LMD,
  _N,
  _OB,
  _OD,
  _RA,
  _RAe,
  _RN,
  _Sa,
  _Si,
  _SS,
  _T,
  _Ty,
  _UP,
  _UPR,
  _UPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeProjectRequest = struct(n0, _DPRes, 0, [_N], [[0, 1]]);
export var DescribeProjectResponse = struct(
  n0,
  _DPResc,
  0,
  [_CD, _CB, _DN, _LMD, _LMB, _N, _RN, _RAe, _Sa, _RA, _T, _SS, _OB, _OD],
  [4, 0, 0, 4, 0, 0, 0, 0, () => Sample, 0, 128 | 0, 0, 0, 4]
);
export var Sample = struct(n0, _Sa, 0, [_Si, _Ty], [1, 0]);
export var UpdateProjectRequest = struct(n0, _UPR, 0, [_Sa, _RA, _N], [() => Sample, 0, [0, 1]]);
export var UpdateProjectResponse = struct(n0, _UPRp, 0, [_LMD, _N], [4, 0]);
export var DescribeProject = op(
  n0,
  _DPes,
  {
    [_h]: ["GET", "/projects/{Name}", 200],
  },
  () => DescribeProjectRequest,
  () => DescribeProjectResponse
);
export var UpdateProject = op(
  n0,
  _UP,
  {
    [_h]: ["PUT", "/projects/{Name}", 200],
  },
  () => UpdateProjectRequest,
  () => UpdateProjectResponse
);
