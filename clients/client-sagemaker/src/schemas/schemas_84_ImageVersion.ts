// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Alia,
  _ATA,
  _ATD,
  _BI,
  _CIo,
  _CT,
  _DIV,
  _DIVe,
  _DIVR,
  _DIVRe,
  _DIVRes,
  _DIVResc,
  _FR,
  _H,
  _IAm,
  _IN,
  _IVA,
  _IVS,
  _JT,
  _LAist,
  _LARis,
  _LARist,
  _LMT,
  _MLF,
  _MR,
  _NT,
  _PL,
  _Pro,
  _RN,
  _SMIVA,
  _UIV,
  _UIVR,
  _UIVRp,
  _V,
  _VG,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImageVersionRequest = struct(n0, _DIVR, 0, [_IN, _V, _Alia], [0, 1, 0]);
export var DeleteImageVersionResponse = struct(n0, _DIVRe, 0, [], []);
export var DescribeImageVersionRequest = struct(n0, _DIVRes, 0, [_IN, _V, _Alia], [0, 1, 0]);
export var DescribeImageVersionResponse = struct(
  n0,
  _DIVResc,
  0,
  [_BI, _CIo, _CT, _FR, _IAm, _IVA, _IVS, _LMT, _V, _VG, _JT, _MLF, _PL, _Pro, _H, _RN],
  [0, 0, 4, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 2, 0]
);
export var ListAliasesRequest = struct(n0, _LARis, 0, [_IN, _Alia, _V, _MR, _NT], [0, 0, 1, 1, 0]);
export var ListAliasesResponse = struct(n0, _LARist, 0, [_SMIVA, _NT], [64 | 0, 0]);
export var UpdateImageVersionRequest = struct(
  n0,
  _UIVR,
  0,
  [_IN, _Alia, _V, _ATA, _ATD, _VG, _JT, _MLF, _PL, _Pro, _H, _RN],
  [0, 0, 1, 64 | 0, 64 | 0, 0, 0, 0, 0, 0, 2, 0]
);
export var UpdateImageVersionResponse = struct(n0, _UIVRp, 0, [_IVA], [0]);
export var SageMakerImageVersionAliases = 64 | 0;

export var DeleteImageVersion = op(
  n0,
  _DIV,
  0,
  () => DeleteImageVersionRequest,
  () => DeleteImageVersionResponse
);
export var DescribeImageVersion = op(
  n0,
  _DIVe,
  0,
  () => DescribeImageVersionRequest,
  () => DescribeImageVersionResponse
);
export var ListAliases = op(
  n0,
  _LAist,
  0,
  () => ListAliasesRequest,
  () => ListAliasesResponse
);
export var UpdateImageVersion = op(
  n0,
  _UIV,
  0,
  () => UpdateImageVersionRequest,
  () => UpdateImageVersionResponse
);
