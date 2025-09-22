// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCT,
  _CP,
  _CPL,
  _CPR,
  _DCP,
  _DCPR,
  _DCPRe,
  _IVS,
  _LUE,
  _MCP,
  _MCPR,
  _MCPRo,
  _MSPo,
  _MSPRod,
  _MSPRodi,
  _RE,
  _RI,
  _RIe,
  _RW,
  _RWe,
  _SPe,
  _SRM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ClientProperties = struct(n0, _CP, 0, [_RE, _LUE], [0, 0]);
export var ClientPropertiesResult = struct(n0, _CPR, 0, [_RI, _CP], [0, () => ClientProperties]);
export var DescribeClientPropertiesRequest = struct(n0, _DCPR, 0, [_RIe], [64 | 0]);
export var DescribeClientPropertiesResult = struct(n0, _DCPRe, 0, [_CPL], [() => ClientPropertiesList]);
export var ModifyClientPropertiesRequest = struct(n0, _MCPR, 0, [_RI, _CP], [0, () => ClientProperties]);
export var ModifyClientPropertiesResult = struct(n0, _MCPRo, 0, [], []);
export var ModifySelfservicePermissionsRequest = struct(n0, _MSPRod, 0, [_RI, _SPe], [0, () => SelfservicePermissions]);
export var ModifySelfservicePermissionsResult = struct(n0, _MSPRodi, 0, [], []);
export var SelfservicePermissions = struct(n0, _SPe, 0, [_RW, _IVS, _CCT, _SRM, _RWe], [0, 0, 0, 0, 0]);
export var ClientPropertiesList = list(n0, _CPL, 0, () => ClientPropertiesResult);
export var ResourceIdList = 64 | 0;

export var DescribeClientProperties = op(
  n0,
  _DCP,
  0,
  () => DescribeClientPropertiesRequest,
  () => DescribeClientPropertiesResult
);
export var ModifyClientProperties = op(
  n0,
  _MCP,
  0,
  () => ModifyClientPropertiesRequest,
  () => ModifyClientPropertiesResult
);
export var ModifySelfservicePermissions = op(
  n0,
  _MSPo,
  0,
  () => ModifySelfservicePermissionsRequest,
  () => ModifySelfservicePermissionsResult
);
