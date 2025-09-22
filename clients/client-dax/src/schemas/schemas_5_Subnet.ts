// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidSubnet as __InvalidSubnet,
  SubnetGroupAlreadyExistsFault as __SubnetGroupAlreadyExistsFault,
  SubnetGroupQuotaExceededFault as __SubnetGroupQuotaExceededFault,
  SubnetQuotaExceededFault as __SubnetQuotaExceededFault,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSG,
  _CSGR,
  _CSGRr,
  _D,
  _e,
  _hE,
  _IS,
  _m,
  _SAZ,
  _SG,
  _SGAEF,
  _SGN,
  _SGQEF,
  _SI,
  _SIu,
  _SL,
  _SQEF,
  _Su,
  _Sub,
  _VI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateSubnetGroupRequest = struct(n0, _CSGR, 0, [_SGN, _D, _SI], [0, 0, 64 | 0]);
export var CreateSubnetGroupResponse = struct(n0, _CSGRr, 0, [_SG], [() => SubnetGroup]);
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
export var Subnet = struct(n0, _Su, 0, [_SIu, _SAZ], [0, 0]);
export var SubnetGroup = struct(n0, _SG, 0, [_SGN, _D, _VI, _Sub], [0, 0, 0, () => SubnetList]);
export var SubnetGroupAlreadyExistsFault = error(
  n0,
  _SGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __SubnetGroupAlreadyExistsFault
);
export var SubnetGroupQuotaExceededFault = error(
  n0,
  _SGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __SubnetGroupQuotaExceededFault
);
export var SubnetQuotaExceededFault = error(
  n0,
  _SQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`SubnetQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __SubnetQuotaExceededFault
);
export var SubnetIdentifierList = 64 | 0;

export var SubnetList = list(n0, _SL, 0, () => Subnet);
export var CreateSubnetGroup = op(
  n0,
  _CSG,
  0,
  () => CreateSubnetGroupRequest,
  () => CreateSubnetGroupResponse
);
