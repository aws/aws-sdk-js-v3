// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRS,
  _CRSR,
  _CRSRr,
  _DRSe,
  _DRSes,
  _DRSR,
  _DRSRe,
  _DRSRes,
  _I,
  _LRS,
  _LRSR,
  _LRSRi,
  _MR,
  _Na,
  _NT,
  _RS,
  _RSe,
  _RSLT,
  _RSSLT,
  _RSST,
  _RST,
  _Sc,
  _SD,
  _SNc,
  _UPI,
  _URS,
  _URSR,
  _URSRp,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourceServerRequest = struct(
  n0,
  _CRSR,
  0,
  [_UPI, _I, _Na, _Sc],
  [0, 0, 0, () => ResourceServerScopeListType]
);
export var CreateResourceServerResponse = struct(n0, _CRSRr, 0, [_RS], [() => ResourceServerType]);
export var DeleteResourceServerRequest = struct(n0, _DRSR, 0, [_UPI, _I], [0, 0]);
export var DescribeResourceServerRequest = struct(n0, _DRSRe, 0, [_UPI, _I], [0, 0]);
export var DescribeResourceServerResponse = struct(n0, _DRSRes, 0, [_RS], [() => ResourceServerType]);
export var ListResourceServersRequest = struct(n0, _LRSR, 0, [_UPI, _MR, _NT], [0, 1, 0]);
export var ListResourceServersResponse = struct(n0, _LRSRi, 0, [_RSe, _NT], [() => ResourceServersListType, 0]);
export var ResourceServerScopeType = struct(n0, _RSST, 0, [_SNc, _SD], [0, 0]);
export var ResourceServerType = struct(n0, _RST, 0, [_UPI, _I, _Na, _Sc], [0, 0, 0, () => ResourceServerScopeListType]);
export var UpdateResourceServerRequest = struct(
  n0,
  _URSR,
  0,
  [_UPI, _I, _Na, _Sc],
  [0, 0, 0, () => ResourceServerScopeListType]
);
export var UpdateResourceServerResponse = struct(n0, _URSRp, 0, [_RS], [() => ResourceServerType]);
export var ResourceServerScopeListType = list(n0, _RSSLT, 0, () => ResourceServerScopeType);
export var ResourceServersListType = list(n0, _RSLT, 0, () => ResourceServerType);
export var CreateResourceServer = op(
  n0,
  _CRS,
  0,
  () => CreateResourceServerRequest,
  () => CreateResourceServerResponse
);
export var DeleteResourceServer = op(
  n0,
  _DRSe,
  0,
  () => DeleteResourceServerRequest,
  () => Unit
);
export var DescribeResourceServer = op(
  n0,
  _DRSes,
  0,
  () => DescribeResourceServerRequest,
  () => DescribeResourceServerResponse
);
export var ListResourceServers = op(
  n0,
  _LRS,
  0,
  () => ListResourceServersRequest,
  () => ListResourceServersResponse
);
export var UpdateResourceServer = op(
  n0,
  _URS,
  0,
  () => UpdateResourceServerRequest,
  () => UpdateResourceServerResponse
);
