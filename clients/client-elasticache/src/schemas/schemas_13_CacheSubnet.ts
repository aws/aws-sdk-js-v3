// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CacheSubnetGroupAlreadyExistsFault as __CacheSubnetGroupAlreadyExistsFault,
  CacheSubnetGroupQuotaExceededFault as __CacheSubnetGroupQuotaExceededFault,
  CacheSubnetQuotaExceededFault as __CacheSubnetQuotaExceededFault,
  InvalidSubnet as __InvalidSubnet,
  SubnetNotAllowedFault as __SubnetNotAllowedFault,
} from "../models/index";
import {
  _aQE,
  _ARN,
  _AZ,
  _c,
  _CCSGMr,
  _CCSGr,
  _CCSGRr,
  _CSGac,
  _CSGAEFa,
  _CSGD,
  _CSGNa,
  _CSGQEFa,
  _CSQEF,
  _e,
  _hE,
  _IS,
  _m,
  _N,
  _SAZ,
  _SI,
  _SIL,
  _SIu,
  _SLu,
  _SNAF,
  _SNT,
  _SO,
  _SOA,
  _Su,
  _Sub,
  _T,
  _VI,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AvailabilityZone = struct(n0, _AZ, 0, [_N], [0]);
export var CacheSubnetGroup = struct(
  n0,
  _CSGac,
  0,
  [_CSGNa, _CSGD, _VI, _Su, _ARN, _SNT],
  [0, 0, 0, [() => SubnetList, 0], 0, 64 | 0]
);
export var CacheSubnetGroupAlreadyExistsFault = error(
  n0,
  _CSGAEFa,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheSubnetGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __CacheSubnetGroupAlreadyExistsFault
);
export var CacheSubnetGroupQuotaExceededFault = error(
  n0,
  _CSGQEFa,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheSubnetGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __CacheSubnetGroupQuotaExceededFault
);
export var CacheSubnetQuotaExceededFault = error(
  n0,
  _CSQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CacheSubnetQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __CacheSubnetQuotaExceededFault
);
export var CreateCacheSubnetGroupMessage = struct(
  n0,
  _CCSGMr,
  0,
  [_CSGNa, _CSGD, _SI, _T],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateCacheSubnetGroupResult = struct(n0, _CCSGRr, 0, [_CSGac], [[() => CacheSubnetGroup, 0]]);
export var InvalidSubnet = error(
  n0,
  _IS,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSubnet`, 400],
  },
  [_m],
  [0],

  __InvalidSubnet
);
export var Subnet = struct(
  n0,
  _Sub,
  0,
  [_SIu, _SAZ, _SO, _SNT],
  [0, () => AvailabilityZone, () => SubnetOutpost, 64 | 0]
);
export var SubnetNotAllowedFault = error(
  n0,
  _SNAF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetNotAllowedFault`, 400],
  },
  [_m],
  [0],

  __SubnetNotAllowedFault
);
export var SubnetOutpost = struct(n0, _SO, 0, [_SOA], [0]);
export var NetworkTypeList = 64 | 0;

export var SubnetIdentifierList = list(n0, _SIL, 0, [
  0,
  {
    [_xN]: _SIu,
  },
]);
export var SubnetList = list(n0, _SLu, 0, [
  () => Subnet,
  {
    [_xN]: _Sub,
  },
]);
export var CreateCacheSubnetGroup = op(
  n0,
  _CCSGr,
  0,
  () => CreateCacheSubnetGroupMessage,
  () => CreateCacheSubnetGroupResult
);
