// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { RequestLimitExceededException as __RequestLimitExceededException } from "../models/index";
import { _ABB, _c, _er, _hE, _M, _N, _RLEE, _SABB, _SABBR, _SABBRt, n0 } from "./schemas_0";
import { AppBlockBuilder } from "./schemas_11_App";

/* eslint no-var: 0 */

export var RequestLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_er]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __RequestLimitExceededException
);
export var StartAppBlockBuilderRequest = struct(n0, _SABBR, 0, [_N], [0]);
export var StartAppBlockBuilderResult = struct(n0, _SABBRt, 0, [_ABB], [() => AppBlockBuilder]);
export var StartAppBlockBuilder = op(
  n0,
  _SABB,
  0,
  () => StartAppBlockBuilderRequest,
  () => StartAppBlockBuilderResult
);
