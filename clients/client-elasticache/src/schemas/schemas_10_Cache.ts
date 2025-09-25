// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CacheSubnetGroupInUse as __CacheSubnetGroupInUse,
  CacheSubnetGroupNotFoundFault as __CacheSubnetGroupNotFoundFault,
  SubnetInUse as __SubnetInUse,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSGac,
  _CSGach,
  _CSGD,
  _CSGIU,
  _CSGMac,
  _CSGNa,
  _CSGNFFa,
  _DCSGe,
  _DCSGesc,
  _DCSGMe,
  _DCSGMesc,
  _e,
  _hE,
  _M,
  _m,
  _MCSG,
  _MCSGM,
  _MCSGR,
  _MR,
  _SI,
  _SIU,
  _xN,
  n0,
  Unit,
} from "./schemas_0";
import { CacheSubnetGroup, SubnetIdentifierList } from "./schemas_13_CacheSubnet";

/* eslint no-var: 0 */

export var CacheSubnetGroupInUse = error(
  n0,
  _CSGIU,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheSubnetGroupInUse`, 400],
  },
  [_m],
  [0],

  __CacheSubnetGroupInUse
);
export var CacheSubnetGroupMessage = struct(n0, _CSGMac, 0, [_M, _CSGach], [0, [() => CacheSubnetGroups, 0]]);
export var CacheSubnetGroupNotFoundFault = error(
  n0,
  _CSGNFFa,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheSubnetGroupNotFoundFault`, 400],
  },
  [_m],
  [0],

  __CacheSubnetGroupNotFoundFault
);
export var DeleteCacheSubnetGroupMessage = struct(n0, _DCSGMe, 0, [_CSGNa], [0]);
export var DescribeCacheSubnetGroupsMessage = struct(n0, _DCSGMesc, 0, [_CSGNa, _MR, _M], [0, 1, 0]);
export var ModifyCacheSubnetGroupMessage = struct(
  n0,
  _MCSGM,
  0,
  [_CSGNa, _CSGD, _SI],
  [0, 0, [() => SubnetIdentifierList, 0]]
);
export var ModifyCacheSubnetGroupResult = struct(n0, _MCSGR, 0, [_CSGac], [[() => CacheSubnetGroup, 0]]);
export var SubnetInUse = error(
  n0,
  _SIU,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetInUse`, 400],
  },
  [_m],
  [0],

  __SubnetInUse
);
export var CacheSubnetGroups = list(n0, _CSGach, 0, [
  () => CacheSubnetGroup,
  {
    [_xN]: _CSGac,
  },
]);
export var DeleteCacheSubnetGroup = op(
  n0,
  _DCSGe,
  0,
  () => DeleteCacheSubnetGroupMessage,
  () => Unit
);
export var DescribeCacheSubnetGroups = op(
  n0,
  _DCSGesc,
  0,
  () => DescribeCacheSubnetGroupsMessage,
  () => CacheSubnetGroupMessage
);
export var ModifyCacheSubnetGroup = op(
  n0,
  _MCSG,
  0,
  () => ModifyCacheSubnetGroupMessage,
  () => ModifyCacheSubnetGroupResult
);
