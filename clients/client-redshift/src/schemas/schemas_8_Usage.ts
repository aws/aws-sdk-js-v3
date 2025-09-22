// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidUsageLimitFault as __InvalidUsageLimitFault } from "../models/index";
import {
  _Am,
  _aQE,
  _BA,
  _c,
  _CIl,
  _DULe,
  _DULMe,
  _e,
  _FT,
  _hE,
  _IULF,
  _LT,
  _M,
  _m,
  _MR,
  _MUL,
  _MULM,
  _Pe,
  _T,
  _TK,
  _TV,
  _UL,
  _ULI,
  _ULL,
  _ULs,
  n0,
  TagKeyList,
  TagList,
} from "./schemas_0";
import { TagValueList } from "./schemas_65_Describe";

/* eslint no-var: 0 */

export var DescribeUsageLimitsMessage = struct(
  n0,
  _DULMe,
  0,
  [_ULI, _CIl, _FT, _MR, _M, _TK, _TV],
  [0, 0, 0, 1, 0, [() => TagKeyList, 0], [() => TagValueList, 0]]
);
export var InvalidUsageLimitFault = error(
  n0,
  _IULF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidUsageLimit`, 400],
  },
  [_m],
  [0],

  __InvalidUsageLimitFault
);
export var ModifyUsageLimitMessage = struct(n0, _MULM, 0, [_ULI, _Am, _BA], [0, 1, 0]);
export var UsageLimit = struct(
  n0,
  _UL,
  0,
  [_ULI, _CIl, _FT, _LT, _Am, _Pe, _BA, _T],
  [0, 0, 0, 0, 1, 0, 0, [() => TagList, 0]]
);
export var UsageLimitList = struct(n0, _ULL, 0, [_ULs, _M], [[() => UsageLimits, 0], 0]);
export var UsageLimits = list(n0, _ULs, 0, [() => UsageLimit, 0]);
export var DescribeUsageLimits = op(
  n0,
  _DULe,
  0,
  () => DescribeUsageLimitsMessage,
  () => UsageLimitList
);
export var ModifyUsageLimit = op(
  n0,
  _MUL,
  0,
  () => ModifyUsageLimitMessage,
  () => UsageLimit
);
