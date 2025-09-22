// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CacheSecurityGroupAlreadyExistsFault as __CacheSecurityGroupAlreadyExistsFault,
  CacheSecurityGroupQuotaExceededFault as __CacheSecurityGroupQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _ARN,
  _c,
  _CCSG,
  _CCSGM,
  _CCSGR,
  _CSG,
  _CSGAEF,
  _CSGN,
  _CSGQEF,
  _D,
  _e,
  _ECSG,
  _ECSGe,
  _ECSGL,
  _ECSGN,
  _ECSGOI,
  _hE,
  _m,
  _OI,
  _St,
  _T,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CacheSecurityGroup = struct(
  n0,
  _CSG,
  0,
  [_OI, _CSGN, _D, _ECSG, _ARN],
  [0, 0, 0, [() => EC2SecurityGroupList, 0], 0]
);
export var CacheSecurityGroupAlreadyExistsFault = error(
  n0,
  _CSGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheSecurityGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __CacheSecurityGroupAlreadyExistsFault
);
export var CacheSecurityGroupQuotaExceededFault = error(
  n0,
  _CSGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`QuotaExceeded.CacheSecurityGroup`, 400],
  },
  [_m],
  [0],

  __CacheSecurityGroupQuotaExceededFault
);
export var CreateCacheSecurityGroupMessage = struct(n0, _CCSGM, 0, [_CSGN, _D, _T], [0, 0, [() => TagList, 0]]);
export var CreateCacheSecurityGroupResult = struct(n0, _CCSGR, 0, [_CSG], [[() => CacheSecurityGroup, 0]]);
export var EC2SecurityGroup = struct(n0, _ECSGe, 0, [_St, _ECSGN, _ECSGOI], [0, 0, 0]);
export var EC2SecurityGroupList = list(n0, _ECSGL, 0, [
  () => EC2SecurityGroup,
  {
    [_xN]: _ECSGe,
  },
]);
export var CreateCacheSecurityGroup = op(
  n0,
  _CCSG,
  0,
  () => CreateCacheSecurityGroupMessage,
  () => CreateCacheSecurityGroupResult
);
