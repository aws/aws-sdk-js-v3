// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ACLAlreadyExistsFault as __ACLAlreadyExistsFault,
  ACLQuotaExceededFault as __ACLQuotaExceededFault,
  ParameterGroupAlreadyExistsFault as __ParameterGroupAlreadyExistsFault,
  ParameterGroupQuotaExceededFault as __ParameterGroupQuotaExceededFault,
  SubnetGroupAlreadyExistsFault as __SubnetGroupAlreadyExistsFault,
  SubnetGroupQuotaExceededFault as __SubnetGroupQuotaExceededFault,
  TagQuotaPerResourceExceeded as __TagQuotaPerResourceExceeded,
  UserAlreadyExistsFault as __UserAlreadyExistsFault,
  UserQuotaExceededFault as __UserQuotaExceededFault,
} from "../models/index";
import {
  _ACL,
  _ACLAEF,
  _ACLN,
  _ACLQEF,
  _AM,
  _aQE,
  _AS,
  _c,
  _CACL,
  _CACLR,
  _CACLRr,
  _CPG,
  _CPGR,
  _CPGRr,
  _CSG,
  _CSGR,
  _CSGRr,
  _CU,
  _CUR,
  _CURr,
  _D,
  _e,
  _F,
  _hE,
  _m,
  _PG,
  _PGAEF,
  _PGN,
  _PGQEF,
  _SGAEF,
  _SGN,
  _SGQEF,
  _SGu,
  _SI,
  _Ta,
  _TQPRE,
  _U,
  _UAEF,
  _UN,
  _UNs,
  _UQEF,
  n0,
} from "./schemas_0";
import { SubnetGroup, SubnetIdentifierList } from "./schemas_1_Cluster";
import { ACL } from "./schemas_5_User";
import { AuthenticationMode, User } from "./schemas_7_Cluster";
import { ParameterGroup } from "./schemas_12_Parameter";
import { TagList } from "./schemas_16_Create";

/* eslint no-var: 0 */

export var ACLAlreadyExistsFault = error(
  n0,
  _ACLAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ACLAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ACLAlreadyExistsFault
);
export var ACLQuotaExceededFault = error(
  n0,
  _ACLQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ACLQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ACLQuotaExceededFault
);
export var CreateACLRequest = struct(n0, _CACLR, 0, [_ACLN, _UN, _Ta], [0, 64 | 0, [() => TagList, 0]]);
export var CreateACLResponse = struct(n0, _CACLRr, 0, [_ACL], [() => ACL]);
export var CreateParameterGroupRequest = struct(n0, _CPGR, 0, [_PGN, _F, _D, _Ta], [0, 0, 0, [() => TagList, 0]]);
export var CreateParameterGroupResponse = struct(n0, _CPGRr, 0, [_PG], [() => ParameterGroup]);
export var CreateSubnetGroupRequest = struct(
  n0,
  _CSGR,
  0,
  [_SGN, _D, _SI, _Ta],
  [0, 0, [() => SubnetIdentifierList, 0], [() => TagList, 0]]
);
export var CreateSubnetGroupResponse = struct(n0, _CSGRr, 0, [_SGu], [[() => SubnetGroup, 0]]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_UNs, _AM, _AS, _Ta],
  [0, () => AuthenticationMode, 0, [() => TagList, 0]]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_U], [() => User]);
export var ParameterGroupAlreadyExistsFault = error(
  n0,
  _PGAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ParameterGroupAlreadyExists`, 400],
  },
  [_m],
  [0],

  __ParameterGroupAlreadyExistsFault
);
export var ParameterGroupQuotaExceededFault = error(
  n0,
  _PGQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ParameterGroupQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __ParameterGroupQuotaExceededFault
);
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
export var TagQuotaPerResourceExceeded = error(
  n0,
  _TQPRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TagQuotaPerResourceExceeded`, 400],
  },
  [_m],
  [0],

  __TagQuotaPerResourceExceeded
);
export var UserAlreadyExistsFault = error(
  n0,
  _UAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserAlreadyExists`, 400],
  },
  [_m],
  [0],

  __UserAlreadyExistsFault
);
export var UserQuotaExceededFault = error(
  n0,
  _UQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UserQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __UserQuotaExceededFault
);
export var CreateACL = op(
  n0,
  _CACL,
  0,
  () => CreateACLRequest,
  () => CreateACLResponse
);
export var CreateParameterGroup = op(
  n0,
  _CPG,
  0,
  () => CreateParameterGroupRequest,
  () => CreateParameterGroupResponse
);
export var CreateSubnetGroup = op(
  n0,
  _CSG,
  0,
  () => CreateSubnetGroupRequest,
  () => CreateSubnetGroupResponse
);
export var CreateUser = op(
  n0,
  _CU,
  0,
  () => CreateUserRequest,
  () => CreateUserResponse
);
