// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAV,
  _App,
  _Ar,
  _BIA,
  _C,
  _CT,
  _D,
  _DAPE,
  _DIe,
  _DIes,
  _DIR,
  _DIRe,
  _DIRes,
  _DIResc,
  _DN,
  _I,
  _IBN,
  _IBS,
  _IE,
  _IL,
  _Im,
  _IP,
  _ISCR,
  _ISWO,
  _LAAV,
  _M,
  _MR,
  _N,
  _Na,
  _NT,
  _P,
  _PBIRD,
  _S,
  _SCR,
  _SIF,
  _Ty,
  _Vi,
  n0,
  ResourceErrors,
} from "./schemas_0";
import { ImagePermissions } from "./schemas_9_Image";
import { Applications } from "./schemas_35_Image";

/* eslint no-var: 0 */

export var DeleteImageRequest = struct(n0, _DIR, 0, [_N], [0]);
export var DeleteImageResult = struct(n0, _DIRe, 0, [_I], [() => Image]);
export var DescribeImagesRequest = struct(n0, _DIRes, 0, [_Na, _Ar, _Ty, _NT, _MR], [64 | 0, 64 | 0, 0, 0, 1]);
export var DescribeImagesResult = struct(n0, _DIResc, 0, [_Im, _NT], [() => ImageList, 0]);
export var Image = struct(
  n0,
  _I,
  0,
  [_N, _A, _BIA, _DN, _S, _Vi, _IBS, _IBN, _P, _D, _SCR, _App, _CT, _PBIRD, _AAV, _IP, _IE, _LAAV, _SIF, _DAPE, _ISWO],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    0,
    () => ImageStateChangeReason,
    () => Applications,
    4,
    4,
    0,
    () => ImagePermissions,
    () => ResourceErrors,
    0,
    64 | 0,
    0,
    0,
  ]
);
export var ImageStateChangeReason = struct(n0, _ISCR, 0, [_C, _M], [0, 0]);
export var ImageList = list(n0, _IL, 0, () => Image);
export var DeleteImage = op(
  n0,
  _DIe,
  0,
  () => DeleteImageRequest,
  () => DeleteImageResult
);
export var DescribeImages = op(
  n0,
  _DIes,
  0,
  () => DescribeImagesRequest,
  () => DescribeImagesResult
);
