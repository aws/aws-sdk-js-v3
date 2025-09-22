// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AT,
  _BAUS,
  _BAUSR,
  _BAUSRa,
  _BDUS,
  _BDUSR,
  _BDUSRa,
  _CS,
  _CT,
  _DSes,
  _DSRes,
  _DSResc,
  _DU,
  _DUe,
  _DUi,
  _DUR,
  _DURe,
  _DURes,
  _DUResc,
  _DURi,
  _DURis,
  _DUSA,
  _DUSAR,
  _DUSARe,
  _E,
  _e,
  _EC,
  _EM,
  _EU,
  _EUR,
  _EURn,
  _FN,
  _FNi,
  _Id,
  _II,
  _L,
  _LN,
  _MET,
  _MR,
  _NAC,
  _NT,
  _S,
  _Se,
  _SEN,
  _Ses,
  _SLe,
  _SN,
  _ST,
  _St,
  _U,
  _UAV,
  _UI,
  _UL,
  _UN,
  _Us,
  _USA,
  _USAE,
  _USAEL,
  _USAL,
  _USAs,
  _Use,
  n0,
} from "./schemas_0";
import { NetworkAccessConfiguration } from "./schemas_39_Image";

/* eslint no-var: 0 */

export var UserAttributeValue = sim(n0, _UAV, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var BatchAssociateUserStackRequest = struct(n0, _BAUSR, 0, [_USA], [[() => UserStackAssociationList, 0]]);
export var BatchAssociateUserStackResult = struct(n0, _BAUSRa, 0, [_e], [[() => UserStackAssociationErrorList, 0]]);
export var BatchDisassociateUserStackRequest = struct(n0, _BDUSR, 0, [_USA], [[() => UserStackAssociationList, 0]]);
export var BatchDisassociateUserStackResult = struct(n0, _BDUSRa, 0, [_e], [[() => UserStackAssociationErrorList, 0]]);
export var DeleteUserRequest = struct(n0, _DUR, 0, [_UN, _AT], [[() => Username, 0], 0]);
export var DeleteUserResult = struct(n0, _DURe, 0, [], []);
export var DescribeSessionsRequest = struct(n0, _DSRes, 0, [_SN, _FN, _UI, _NT, _L, _AT, _II], [0, 0, 0, 0, 1, 0, 0]);
export var DescribeSessionsResult = struct(n0, _DSResc, 0, [_Se, _NT], [() => SessionList, 0]);
export var DescribeUsersRequest = struct(n0, _DURes, 0, [_AT, _MR, _NT], [0, 1, 0]);
export var DescribeUsersResult = struct(n0, _DUResc, 0, [_Us, _NT], [[() => UserList, 0], 0]);
export var DescribeUserStackAssociationsRequest = struct(
  n0,
  _DUSAR,
  0,
  [_SN, _UN, _AT, _MR, _NT],
  [0, [() => Username, 0], 0, 1, 0]
);
export var DescribeUserStackAssociationsResult = struct(
  n0,
  _DUSARe,
  0,
  [_USA, _NT],
  [[() => UserStackAssociationList, 0], 0]
);
export var DisableUserRequest = struct(n0, _DURi, 0, [_UN, _AT], [[() => Username, 0], 0]);
export var DisableUserResult = struct(n0, _DURis, 0, [], []);
export var EnableUserRequest = struct(n0, _EUR, 0, [_UN, _AT], [[() => Username, 0], 0]);
export var EnableUserResult = struct(n0, _EURn, 0, [], []);
export var Session = struct(
  n0,
  _Ses,
  0,
  [_Id, _UI, _SN, _FN, _S, _CS, _ST, _MET, _AT, _NAC, _II],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, () => NetworkAccessConfiguration, 0]
);
export var User = struct(
  n0,
  _Use,
  0,
  [_A, _UN, _E, _St, _FNi, _LN, _CT, _AT],
  [0, [() => Username, 0], 2, 0, [() => UserAttributeValue, 0], [() => UserAttributeValue, 0], 4, 0]
);
export var UserStackAssociation = struct(n0, _USAs, 0, [_SN, _UN, _AT, _SEN], [0, [() => Username, 0], 0, 2]);
export var UserStackAssociationError = struct(n0, _USAE, 0, [_USAs, _EC, _EM], [[() => UserStackAssociation, 0], 0, 0]);
export var SessionList = list(n0, _SLe, 0, () => Session);
export var UserList = list(n0, _UL, 0, [() => User, 0]);
export var UserStackAssociationErrorList = list(n0, _USAEL, 0, [() => UserStackAssociationError, 0]);
export var UserStackAssociationList = list(n0, _USAL, 0, [() => UserStackAssociation, 0]);
export var BatchAssociateUserStack = op(
  n0,
  _BAUS,
  0,
  () => BatchAssociateUserStackRequest,
  () => BatchAssociateUserStackResult
);
export var BatchDisassociateUserStack = op(
  n0,
  _BDUS,
  0,
  () => BatchDisassociateUserStackRequest,
  () => BatchDisassociateUserStackResult
);
export var DeleteUser = op(
  n0,
  _DU,
  0,
  () => DeleteUserRequest,
  () => DeleteUserResult
);
export var DescribeSessions = op(
  n0,
  _DSes,
  0,
  () => DescribeSessionsRequest,
  () => DescribeSessionsResult
);
export var DescribeUsers = op(
  n0,
  _DUe,
  0,
  () => DescribeUsersRequest,
  () => DescribeUsersResult
);
export var DescribeUserStackAssociations = op(
  n0,
  _DUSA,
  0,
  () => DescribeUserStackAssociationsRequest,
  () => DescribeUserStackAssociationsResult
);
export var DisableUser = op(
  n0,
  _DUi,
  0,
  () => DisableUserRequest,
  () => DisableUserResult
);
export var EnableUser = op(
  n0,
  _EU,
  0,
  () => EnableUserRequest,
  () => EnableUserResult
);
