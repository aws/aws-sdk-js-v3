// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  LimitExceededFault as __LimitExceededFault,
  NumberOfNodesPerClusterLimitExceededFault as __NumberOfNodesPerClusterLimitExceededFault,
  NumberOfNodesQuotaExceededFault as __NumberOfNodesQuotaExceededFault,
  UnsupportedOptionFault as __UnsupportedOptionFault,
  UsageLimitAlreadyExistsFault as __UsageLimitAlreadyExistsFault,
} from "../models/index";
import {
  _Am,
  _aQE,
  _BA,
  _c,
  _CIl,
  _CUL,
  _CULM,
  _e,
  _FT,
  _hE,
  _LEF,
  _LT,
  _m,
  _NONPCLEF,
  _NONQEF,
  _Pe,
  _T,
  _ULAEF,
  _UOFn,
  n0,
  TagList,
} from "./schemas_0";
import { UsageLimit } from "./schemas_8_Usage";

/* eslint no-var: 0 */

export var CreateUsageLimitMessage = struct(
  n0,
  _CULM,
  0,
  [_CIl, _FT, _LT, _Am, _Pe, _BA, _T],
  [0, 0, 0, 1, 0, 0, [() => TagList, 0]]
);
export var LimitExceededFault = error(
  n0,
  _LEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceededFault`, 400],
  },
  [_m],
  [0],

  __LimitExceededFault
);
export var NumberOfNodesPerClusterLimitExceededFault = error(
  n0,
  _NONPCLEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NumberOfNodesPerClusterLimitExceeded`, 400],
  },
  [_m],
  [0],

  __NumberOfNodesPerClusterLimitExceededFault
);
export var NumberOfNodesQuotaExceededFault = error(
  n0,
  _NONQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`NumberOfNodesQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __NumberOfNodesQuotaExceededFault
);
export var UnsupportedOptionFault = error(
  n0,
  _UOFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnsupportedOptionFault`, 400],
  },
  [_m],
  [0],

  __UnsupportedOptionFault
);
export var UsageLimitAlreadyExistsFault = error(
  n0,
  _ULAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UsageLimitAlreadyExists`, 400],
  },
  [_m],
  [0],

  __UsageLimitAlreadyExistsFault
);
export var CreateUsageLimit = op(
  n0,
  _CUL,
  0,
  () => CreateUsageLimitMessage,
  () => UsageLimit
);
