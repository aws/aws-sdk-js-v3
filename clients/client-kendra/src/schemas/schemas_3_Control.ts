// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _ACL,
  _DACCe,
  _DACCRes,
  _DACCResc,
  _De,
  _DSI,
  _EM,
  _HACL,
  _HP,
  _HPL,
  _I,
  _II,
  _N,
  _PL,
  _Pri,
  _Ty,
  _UACC,
  _UACCR,
  _UACCRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAccessControlConfigurationRequest = struct(n0, _DACCRes, 0, [_II, _I], [0, 0]);
export var DescribeAccessControlConfigurationResponse = struct(
  n0,
  _DACCResc,
  0,
  [_N, _De, _EM, _ACL, _HACL],
  [0, 0, 0, () => PrincipalList, () => HierarchicalPrincipalList]
);
export var HierarchicalPrincipal = struct(n0, _HP, 0, [_PL], [() => PrincipalList]);
export var Principal = struct(n0, _Pri, 0, [_N, _Ty, _Ac, _DSI], [0, 0, 0, 0]);
export var UpdateAccessControlConfigurationRequest = struct(
  n0,
  _UACCR,
  0,
  [_II, _I, _N, _De, _ACL, _HACL],
  [0, 0, 0, 0, () => PrincipalList, () => HierarchicalPrincipalList]
);
export var UpdateAccessControlConfigurationResponse = struct(n0, _UACCRp, 0, [], []);
export var HierarchicalPrincipalList = list(n0, _HPL, 0, () => HierarchicalPrincipal);
export var PrincipalList = list(n0, _PL, 0, () => Principal);
export var DescribeAccessControlConfiguration = op(
  n0,
  _DACCe,
  0,
  () => DescribeAccessControlConfigurationRequest,
  () => DescribeAccessControlConfigurationResponse
);
export var UpdateAccessControlConfiguration = op(
  n0,
  _UACC,
  0,
  () => UpdateAccessControlConfigurationRequest,
  () => UpdateAccessControlConfigurationResponse
);
