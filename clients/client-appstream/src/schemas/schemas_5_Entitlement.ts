// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { EntitlementNotFoundException as __EntitlementNotFoundException } from "../models/index";
import {
  _AATE,
  _AATER,
  _AATERs,
  _AI,
  _At,
  _AV,
  _c,
  _D,
  _DAFE,
  _DAFER,
  _DAFERi,
  _DE,
  _DEe,
  _DER,
  _DERe,
  _DERes,
  _DEResc,
  _EA,
  _EAL,
  _EAnt,
  _EL,
  _EN,
  _En,
  _ENFE,
  _Ent,
  _er,
  _hE,
  _LEA,
  _LEAR,
  _LEARi,
  _M,
  _MR,
  _N,
  _NT,
  _SN,
  _UE,
  _UER,
  _UERp,
  n0,
} from "./schemas_0";
import { Entitlement, EntitlementAttributeList } from "./schemas_13_Entitlement";

/* eslint no-var: 0 */

export var AssociateApplicationToEntitlementRequest = struct(n0, _AATER, 0, [_SN, _EN, _AI], [0, 0, 0]);
export var AssociateApplicationToEntitlementResult = struct(n0, _AATERs, 0, [], []);
export var DeleteEntitlementRequest = struct(n0, _DER, 0, [_N, _SN], [0, 0]);
export var DeleteEntitlementResult = struct(n0, _DERe, 0, [], []);
export var DescribeEntitlementsRequest = struct(n0, _DERes, 0, [_N, _SN, _NT, _MR], [0, 0, 0, 1]);
export var DescribeEntitlementsResult = struct(n0, _DEResc, 0, [_Ent, _NT], [() => EntitlementList, 0]);
export var DisassociateApplicationFromEntitlementRequest = struct(n0, _DAFER, 0, [_SN, _EN, _AI], [0, 0, 0]);
export var DisassociateApplicationFromEntitlementResult = struct(n0, _DAFERi, 0, [], []);
export var EntitledApplication = struct(n0, _EA, 0, [_AI], [0]);
export var EntitlementNotFoundException = error(
  n0,
  _ENFE,
  {
    [_er]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __EntitlementNotFoundException
);
export var ListEntitledApplicationsRequest = struct(n0, _LEAR, 0, [_SN, _EN, _NT, _MR], [0, 0, 0, 1]);
export var ListEntitledApplicationsResult = struct(n0, _LEARi, 0, [_EAnt, _NT], [() => EntitledApplicationList, 0]);
export var UpdateEntitlementRequest = struct(
  n0,
  _UER,
  0,
  [_N, _SN, _D, _AV, _At],
  [0, 0, 0, 0, () => EntitlementAttributeList]
);
export var UpdateEntitlementResult = struct(n0, _UERp, 0, [_En], [() => Entitlement]);
export var EntitledApplicationList = list(n0, _EAL, 0, () => EntitledApplication);
export var EntitlementList = list(n0, _EL, 0, () => Entitlement);
export var AssociateApplicationToEntitlement = op(
  n0,
  _AATE,
  0,
  () => AssociateApplicationToEntitlementRequest,
  () => AssociateApplicationToEntitlementResult
);
export var DeleteEntitlement = op(
  n0,
  _DE,
  0,
  () => DeleteEntitlementRequest,
  () => DeleteEntitlementResult
);
export var DescribeEntitlements = op(
  n0,
  _DEe,
  0,
  () => DescribeEntitlementsRequest,
  () => DescribeEntitlementsResult
);
export var DisassociateApplicationFromEntitlement = op(
  n0,
  _DAFE,
  0,
  () => DisassociateApplicationFromEntitlementRequest,
  () => DisassociateApplicationFromEntitlementResult
);
export var ListEntitledApplications = op(
  n0,
  _LEA,
  0,
  () => ListEntitledApplicationsRequest,
  () => ListEntitledApplicationsResult
);
export var UpdateEntitlement = op(
  n0,
  _UE,
  0,
  () => UpdateEntitlementRequest,
  () => UpdateEntitlementResult
);
