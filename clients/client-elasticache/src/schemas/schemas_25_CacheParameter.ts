// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CacheParameterGroupAlreadyExistsFault as __CacheParameterGroupAlreadyExistsFault,
  CacheParameterGroupQuotaExceededFault as __CacheParameterGroupQuotaExceededFault,
  InvalidCacheParameterGroupStateFault as __InvalidCacheParameterGroupStateFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CCPG,
  _CCPGM,
  _CCPGR,
  _CPG,
  _CPGAEF,
  _CPGF,
  _CPGN,
  _CPGQEF,
  _D,
  _DCPG,
  _DCPGM,
  _e,
  _hE,
  _ICPGSF,
  _m,
  _T,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { CacheParameterGroup } from "./schemas_19_CacheParameter";

/* eslint no-var: 0 */

export var CacheParameterGroupAlreadyExistsFault = error(
  n0,
  _CPGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheParameterGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __CacheParameterGroupAlreadyExistsFault
);
export var CacheParameterGroupQuotaExceededFault = error(
  n0,
  _CPGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheParameterGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __CacheParameterGroupQuotaExceededFault
);
export var CreateCacheParameterGroupMessage = struct(
  n0,
  _CCPGM,
  0,
  [_CPGN, _CPGF, _D, _T],
  [0, 0, 0, [() => TagList, 0]]
);
export var CreateCacheParameterGroupResult = struct(n0, _CCPGR, 0, [_CPG], [() => CacheParameterGroup]);
export var DeleteCacheParameterGroupMessage = struct(n0, _DCPGM, 0, [_CPGN], [0]);
export var InvalidCacheParameterGroupStateFault = error(
  n0,
  _ICPGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCacheParameterGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidCacheParameterGroupStateFault
);
export var CreateCacheParameterGroup = op(
  n0,
  _CCPG,
  0,
  () => CreateCacheParameterGroupMessage,
  () => CreateCacheParameterGroupResult
);
export var DeleteCacheParameterGroup = op(
  n0,
  _DCPG,
  0,
  () => DeleteCacheParameterGroupMessage,
  () => Unit
);
