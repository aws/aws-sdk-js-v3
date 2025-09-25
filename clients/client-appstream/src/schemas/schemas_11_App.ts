// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ABB,
  _ABBE,
  _ABBL,
  _ABBp,
  _ABBSCR,
  _AEc,
  _C,
  _CT,
  _D,
  _DABBe,
  _DABBRes,
  _DABBResc,
  _DN,
  _EDIA,
  _IRA,
  _IT,
  _M,
  _MR,
  _N,
  _Na,
  _NT,
  _P,
  _S,
  _SABBRto,
  _SABBRtop,
  _SABBt,
  _SCR,
  _VC,
  AccessEndpointList,
  n0,
  ResourceErrors,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppBlockBuilder = struct(
  n0,
  _ABB,
  0,
  [_A, _N, _DN, _D, _P, _IT, _EDIA, _IRA, _VC, _S, _CT, _ABBE, _SCR, _AEc],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    () => VpcConfig,
    0,
    4,
    () => ResourceErrors,
    () => AppBlockBuilderStateChangeReason,
    () => AccessEndpointList,
  ]
);
export var AppBlockBuilderStateChangeReason = struct(n0, _ABBSCR, 0, [_C, _M], [0, 0]);
export var DescribeAppBlockBuildersRequest = struct(n0, _DABBRes, 0, [_Na, _NT, _MR], [64 | 0, 0, 1]);
export var DescribeAppBlockBuildersResult = struct(n0, _DABBResc, 0, [_ABBp, _NT], [() => AppBlockBuilderList, 0]);
export var StopAppBlockBuilderRequest = struct(n0, _SABBRto, 0, [_N], [0]);
export var StopAppBlockBuilderResult = struct(n0, _SABBRtop, 0, [_ABB], [() => AppBlockBuilder]);
export var AppBlockBuilderList = list(n0, _ABBL, 0, () => AppBlockBuilder);
export var DescribeAppBlockBuilders = op(
  n0,
  _DABBe,
  0,
  () => DescribeAppBlockBuildersRequest,
  () => DescribeAppBlockBuildersResult
);
export var StopAppBlockBuilder = op(
  n0,
  _SABBt,
  0,
  () => StopAppBlockBuilderRequest,
  () => StopAppBlockBuilderResult
);
