// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _bu,
  _dSI,
  _GM,
  _gM,
  _gN,
  _ht,
  _iI,
  _k,
  _MG,
  _mG,
  _MGe,
  _MU,
  _mU,
  _MUe,
  _PGR,
  _PGRu,
  _PGu,
  _rA,
  _S,
  _sPFGM,
  _t,
  _uI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GroupMembers = struct(n0, _GM, 0, [_mG, _mU, _sPFGM], [() => MemberGroups, () => MemberUsers, () => S3]);
export var MemberGroup = struct(n0, _MG, 0, [_gN, _t], [0, 0]);
export var MemberUser = struct(n0, _MU, 0, [_uI, _t], [0, 0]);
export var PutGroupRequest = struct(
  n0,
  _PGR,
  0,
  [_aIp, _iI, _gN, _dSI, _t, _gM, _rA],
  [[0, 1], [0, 1], 0, 0, 0, () => GroupMembers, 0]
);
export var PutGroupResponse = struct(n0, _PGRu, 0, [], []);
export var S3 = struct(n0, _S, 0, [_bu, _k], [0, 0]);
export var MemberGroups = list(n0, _MGe, 0, () => MemberGroup);
export var MemberUsers = list(n0, _MUe, 0, () => MemberUser);
export var PutGroup = op(
  n0,
  _PGu,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/indices/{indexId}/groups", 200],
  },
  () => PutGroupRequest,
  () => PutGroupResponse
);
