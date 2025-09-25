// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _Ad,
  _AO,
  _AOt,
  _AP,
  _AV,
  _c,
  _CE,
  _CG,
  _CGM,
  _CGMR,
  _CGMRr,
  _CGR,
  _CGRr,
  _CU,
  _CUR,
  _CURr,
  _D,
  _DG,
  _DGM,
  _DGMR,
  _DGMRe,
  _DGR,
  _DGRe,
  _DN,
  _DU,
  _DUR,
  _DURe,
  _E,
  _e,
  _GI,
  _hE,
  _ISI,
  _Lo,
  _M,
  _MI,
  _MIe,
  _N,
  _NN,
  _O,
  _PL,
  _PN,
  _PU,
  _Re,
  _RI,
  _SQEE,
  _Ti,
  _Tim,
  _UG,
  _UGR,
  _UGRp,
  _UI,
  _UN,
  _UT,
  _UU,
  _UUR,
  _UURp,
  n0,
} from "./schemas_0";
import {
  Addresses,
  Emails,
  GroupDisplayName,
  Name,
  PhoneNumbers,
  SensitiveStringType,
  UserName,
} from "./schemas_4_Group";
import { MemberId } from "./schemas_5_Group";

/* eslint no-var: 0 */

export var AttributeOperation = struct(n0, _AO, 0, [_AP, _AV], [0, 15]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _Re],
  [0, 0, 0],

  __ConflictException
);
export var CreateGroupMembershipRequest = struct(n0, _CGMR, 0, [_ISI, _GI, _MI], [0, 0, () => MemberId]);
export var CreateGroupMembershipResponse = struct(n0, _CGMRr, 0, [_MIe, _ISI], [0, 0]);
export var CreateGroupRequest = struct(
  n0,
  _CGR,
  0,
  [_ISI, _DN, _D],
  [0, [() => GroupDisplayName, 0], [() => SensitiveStringType, 0]]
);
export var CreateGroupResponse = struct(n0, _CGRr, 0, [_GI, _ISI], [0, 0]);
export var CreateUserRequest = struct(
  n0,
  _CUR,
  0,
  [_ISI, _UN, _N, _DN, _NN, _PU, _E, _Ad, _PN, _UT, _Ti, _PL, _Lo, _Tim],
  [
    0,
    [() => UserName, 0],
    [() => Name, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => Emails, 0],
    [() => Addresses, 0],
    [() => PhoneNumbers, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
    [() => SensitiveStringType, 0],
  ]
);
export var CreateUserResponse = struct(n0, _CURr, 0, [_UI, _ISI], [0, 0]);
export var DeleteGroupMembershipRequest = struct(n0, _DGMR, 0, [_ISI, _MIe], [0, 0]);
export var DeleteGroupMembershipResponse = struct(n0, _DGMRe, 0, [], []);
export var DeleteGroupRequest = struct(n0, _DGR, 0, [_ISI, _GI], [0, 0]);
export var DeleteGroupResponse = struct(n0, _DGRe, 0, [], []);
export var DeleteUserRequest = struct(n0, _DUR, 0, [_ISI, _UI], [0, 0]);
export var DeleteUserResponse = struct(n0, _DURe, 0, [], []);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RI],
  [0, 0],

  __ServiceQuotaExceededException
);
export var UpdateGroupRequest = struct(n0, _UGR, 0, [_ISI, _GI, _O], [0, 0, () => AttributeOperations]);
export var UpdateGroupResponse = struct(n0, _UGRp, 0, [], []);
export var UpdateUserRequest = struct(n0, _UUR, 0, [_ISI, _UI, _O], [0, 0, () => AttributeOperations]);
export var UpdateUserResponse = struct(n0, _UURp, 0, [], []);
export var AttributeOperations = list(n0, _AOt, 0, () => AttributeOperation);
export var CreateGroup = op(
  n0,
  _CG,
  0,
  () => CreateGroupRequest,
  () => CreateGroupResponse
);
export var CreateGroupMembership = op(
  n0,
  _CGM,
  0,
  () => CreateGroupMembershipRequest,
  () => CreateGroupMembershipResponse
);
export var CreateUser = op(
  n0,
  _CU,
  0,
  () => CreateUserRequest,
  () => CreateUserResponse
);
export var DeleteGroup = op(
  n0,
  _DG,
  2,
  () => DeleteGroupRequest,
  () => DeleteGroupResponse
);
export var DeleteGroupMembership = op(
  n0,
  _DGM,
  2,
  () => DeleteGroupMembershipRequest,
  () => DeleteGroupMembershipResponse
);
export var DeleteUser = op(
  n0,
  _DU,
  2,
  () => DeleteUserRequest,
  () => DeleteUserResponse
);
export var UpdateGroup = op(
  n0,
  _UG,
  0,
  () => UpdateGroupRequest,
  () => UpdateGroupResponse
);
export var UpdateUser = op(
  n0,
  _UU,
  0,
  () => UpdateUserRequest,
  () => UpdateUserResponse
);
