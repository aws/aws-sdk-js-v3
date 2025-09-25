// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIR,
  _CIr,
  _CIRr,
  _CT,
  _CTA,
  _CTB,
  _D,
  _DIes,
  _DIRes,
  _DIResc,
  _DNi,
  _DPe,
  _FR,
  _I,
  _IAm,
  _Im,
  _IN,
  _ISm,
  _LIis,
  _LIR,
  _LIRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _NCa,
  _NT,
  _RAo,
  _SBo,
  _SO,
  _T,
  _UI,
  _UIR,
  _UIRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateImageRequest = struct(n0, _CIR, 0, [_D, _DNi, _IN, _RAo, _T], [0, 0, 0, 0, () => TagList]);
export var CreateImageResponse = struct(n0, _CIRr, 0, [_IAm], [0]);
export var DescribeImageRequest = struct(n0, _DIRes, 0, [_IN], [0]);
export var DescribeImageResponse = struct(
  n0,
  _DIResc,
  0,
  [_CT, _D, _DNi, _FR, _IAm, _IN, _ISm, _LMT, _RAo],
  [4, 0, 0, 0, 0, 0, 0, 4, 0]
);
export var Image = struct(n0, _I, 0, [_CT, _D, _DNi, _FR, _IAm, _IN, _ISm, _LMT], [4, 0, 0, 0, 0, 0, 0, 4]);
export var ListImagesRequest = struct(
  n0,
  _LIR,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _MR, _NCa, _NT, _SBo, _SO],
  [4, 4, 4, 4, 1, 0, 0, 0, 0]
);
export var ListImagesResponse = struct(n0, _LIRi, 0, [_Im, _NT], [() => Images, 0]);
export var UpdateImageRequest = struct(n0, _UIR, 0, [_DPe, _D, _DNi, _IN, _RAo], [64 | 0, 0, 0, 0, 0]);
export var UpdateImageResponse = struct(n0, _UIRp, 0, [_IAm], [0]);
export var ImageDeletePropertyList = 64 | 0;

export var Images = list(n0, _Im, 0, () => Image);
export var CreateImage = op(
  n0,
  _CIr,
  0,
  () => CreateImageRequest,
  () => CreateImageResponse
);
export var DescribeImage = op(
  n0,
  _DIes,
  0,
  () => DescribeImageRequest,
  () => DescribeImageResponse
);
export var ListImages = op(
  n0,
  _LIis,
  0,
  () => ListImagesRequest,
  () => ListImagesResponse
);
export var UpdateImage = op(
  n0,
  _UI,
  0,
  () => UpdateImageRequest,
  () => UpdateImageResponse
);
