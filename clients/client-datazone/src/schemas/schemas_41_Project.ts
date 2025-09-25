// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CPM,
  _CPMI,
  _CPMO,
  _des,
  _dI,
  _g,
  _GDr,
  _gIro,
  _hQ,
  _ht,
  _LPM,
  _LPMI,
  _LPMO,
  _MD,
  _mD,
  _me,
  _mem,
  _mRa,
  _nT,
  _pIr,
  _PM,
  _PMr,
  _sB,
  _sO,
  _UD,
  _uIs,
  _use,
  n0,
} from "./schemas_0";
import { Member } from "./schemas_62_Project";

/* eslint no-var: 0 */

export var CreateProjectMembershipInput = struct(
  n0,
  _CPMI,
  0,
  [_dI, _pIr, _me, _des],
  [[0, 1], [0, 1], () => Member, 0]
);
export var CreateProjectMembershipOutput = struct(n0, _CPMO, 0, [], []);
export var GroupDetails = struct(n0, _GDr, 0, [_gIro], [0]);
export var ListProjectMembershipsInput = struct(
  n0,
  _LPMI,
  0,
  [_dI, _pIr, _sB, _sO, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListProjectMembershipsOutput = struct(n0, _LPMO, 0, [_mem, _nT], [() => ProjectMembers, 0]);
export var ProjectMember = struct(n0, _PM, 0, [_mD, _des], [() => MemberDetails, 0]);
export var UserDetails = struct(n0, _UD, 0, [_uIs], [0]);
export var ProjectMembers = list(n0, _PMr, 0, () => ProjectMember);
export var MemberDetails = uni(n0, _MD, 0, [_use, _g], [() => UserDetails, () => GroupDetails]);
export var CreateProjectMembership = op(
  n0,
  _CPM,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/createMembership", 201],
  },
  () => CreateProjectMembershipInput,
  () => CreateProjectMembershipOutput
);
export var ListProjectMemberships = op(
  n0,
  _LPM,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/projects/{projectIdentifier}/memberships", 200],
  },
  () => ListProjectMembershipsInput,
  () => ListProjectMembershipsOutput
);
