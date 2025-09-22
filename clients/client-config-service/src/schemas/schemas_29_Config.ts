// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidExpressionException as __InvalidExpressionException } from "../models/index";
import {
  _CAN,
  _cl,
  _e,
  _Ex,
  _FIi,
  _FIL,
  _IEE,
  _L,
  _m,
  _MR,
  _N,
  _NT,
  _QI,
  _Res,
  _SARC,
  _SARCR,
  _SARCRe,
  _SF,
  _SRC,
  _SRCR,
  _SRCRe,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FieldInfo = struct(n0, _FIi, 0, [_N], [0]);
export var InvalidExpressionException = error(
  n0,
  _IEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidExpressionException
);
export var QueryInfo = struct(n0, _QI, 0, [_SF], [() => FieldInfoList]);
export var SelectAggregateResourceConfigRequest = struct(n0, _SARCR, 0, [_Ex, _CAN, _L, _MR, _NT], [0, 0, 1, 1, 0]);
export var SelectAggregateResourceConfigResponse = struct(
  n0,
  _SARCRe,
  0,
  [_Res, _QI, _NT],
  [64 | 0, () => QueryInfo, 0]
);
export var SelectResourceConfigRequest = struct(n0, _SRCR, 0, [_Ex, _L, _NT], [0, 1, 0]);
export var SelectResourceConfigResponse = struct(n0, _SRCRe, 0, [_Res, _QI, _NT], [64 | 0, () => QueryInfo, 0]);
export var FieldInfoList = list(n0, _FIL, 0, () => FieldInfo);
export var Results = 64 | 0;

export var SelectAggregateResourceConfig = op(
  n0,
  _SARC,
  0,
  () => SelectAggregateResourceConfigRequest,
  () => SelectAggregateResourceConfigResponse
);
export var SelectResourceConfig = op(
  n0,
  _SRC,
  0,
  () => SelectResourceConfigRequest,
  () => SelectResourceConfigResponse
);
