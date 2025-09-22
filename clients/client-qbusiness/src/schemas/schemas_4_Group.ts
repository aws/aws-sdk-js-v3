// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AG,
  _AGs,
  _aIp,
  _al,
  _AU,
  _AUs,
  _CDA,
  _CDAR,
  _CDARh,
  _con,
  _dA,
  _DAC,
  _DACocu,
  _DAG,
  _DAGo,
  _DAM,
  _DAo,
  _DAU,
  _DAUo,
  _DG,
  _DGR,
  _DGRe,
  _dI,
  _dL,
  _dSI,
  _eD,
  _g,
  _GG,
  _GGR,
  _GGRe,
  _gN,
  _GS,
  _GSD,
  _GSDr,
  _GSL,
  _hA,
  _hQ,
  _ht,
  _i,
  _iI,
  _it,
  _LG,
  _LGR,
  _LGRi,
  _lUA,
  _mR,
  _mRa,
  _n,
  _nT,
  _s,
  _sH,
  _t,
  _u,
  _uAs,
  _uET,
  _uG,
  _uI,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatedGroup = struct(n0, _AG, 0, [_n, _t], [0, 0]);
export var AssociatedUser = struct(n0, _AU, 0, [_i, _t], [0, 0]);
export var CheckDocumentAccessRequest = struct(
  n0,
  _CDAR,
  0,
  [_aIp, _iI, _uI, _dI, _dSI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _dSI,
      },
    ],
  ]
);
export var CheckDocumentAccessResponse = struct(
  n0,
  _CDARh,
  0,
  [_uG, _uAs, _hA, _dA],
  [() => AssociatedGroups, () => AssociatedUsers, 2, () => DocumentAcl]
);
export var DeleteGroupRequest = struct(
  n0,
  _DGR,
  0,
  [_aIp, _iI, _gN, _dSI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _dSI,
      },
    ],
  ]
);
export var DeleteGroupResponse = struct(n0, _DGRe, 0, [], []);
export var DocumentAcl = struct(n0, _DAo, 0, [_al, _dL], [() => DocumentAclMembership, () => DocumentAclMembership]);
export var DocumentAclCondition = struct(
  n0,
  _DAC,
  0,
  [_mR, _u, _g],
  [0, () => DocumentAclUsers, () => DocumentAclGroups]
);
export var DocumentAclGroup = struct(n0, _DAG, 0, [_n, _t], [0, 0]);
export var DocumentAclMembership = struct(n0, _DAM, 0, [_mR, _con], [0, () => DocumentAclConditions]);
export var DocumentAclUser = struct(n0, _DAU, 0, [_i, _t], [0, 0]);
export var GetGroupRequest = struct(
  n0,
  _GGR,
  0,
  [_aIp, _iI, _gN, _dSI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _dSI,
      },
    ],
  ]
);
export var GetGroupResponse = struct(n0, _GGRe, 0, [_s, _sH], [() => GroupStatusDetail, () => GroupStatusDetails]);
export var GroupStatusDetail = struct(n0, _GSD, 0, [_s, _lUA, _eD], [0, 4, () => ErrorDetail]);
export var GroupSummary = struct(n0, _GS, 0, [_gN], [0]);
export var ListGroupsRequest = struct(
  n0,
  _LGR,
  0,
  [_aIp, _iI, _uET, _dSI, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      4,
      {
        [_hQ]: _uET,
      },
    ],
    [
      0,
      {
        [_hQ]: _dSI,
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
export var ListGroupsResponse = struct(n0, _LGRi, 0, [_nT, _it], [0, () => GroupSummaryList]);
export var AssociatedGroups = list(n0, _AGs, 0, () => AssociatedGroup);
export var AssociatedUsers = list(n0, _AUs, 0, () => AssociatedUser);
export var DocumentAclConditions = list(n0, _DACocu, 0, () => DocumentAclCondition);
export var DocumentAclGroups = list(n0, _DAGo, 0, () => DocumentAclGroup);
export var DocumentAclUsers = list(n0, _DAUo, 0, () => DocumentAclUser);
export var GroupStatusDetails = list(n0, _GSDr, 0, () => GroupStatusDetail);
export var GroupSummaryList = list(n0, _GSL, 0, () => GroupSummary);
export var CheckDocumentAccess = op(
  n0,
  _CDA,
  {
    [_ht]: [
      "GET",
      "/applications/{applicationId}/index/{indexId}/users/{userId}/documents/{documentId}/check-document-access",
      200,
    ],
  },
  () => CheckDocumentAccessRequest,
  () => CheckDocumentAccessResponse
);
export var DeleteGroup = op(
  n0,
  _DG,
  {
    [_ht]: ["DELETE", "/applications/{applicationId}/indices/{indexId}/groups/{groupName}", 200],
  },
  () => DeleteGroupRequest,
  () => DeleteGroupResponse
);
export var GetGroup = op(
  n0,
  _GG,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices/{indexId}/groups/{groupName}", 200],
  },
  () => GetGroupRequest,
  () => GetGroupResponse
);
export var ListGroups = op(
  n0,
  _LG,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices/{indexId}/groups", 200],
  },
  () => ListGroupsRequest,
  () => ListGroupsResponse
);
