// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AK,
  _AN,
  _CA,
  _CAR,
  _CARr,
  _CT,
  _DAe,
  _DARes,
  _DAResc,
  _ET,
  _LCT,
  _N,
  _P,
  _PLC,
  _PLE,
  _S,
  _SAu,
  _SGA,
  _Ta,
  _VEI,
  InputTagList,
  n0,
} from "./schemas_0";
import { Platform } from "./schemas_18_Agent";

/* eslint no-var: 0 */

export var CreateAgentRequest = struct(
  n0,
  _CAR,
  0,
  [_AK, _AN, _Ta, _VEI, _SAu, _SGA],
  [0, 0, () => InputTagList, 0, 64 | 0, 64 | 0]
);
export var CreateAgentResponse = struct(n0, _CARr, 0, [_AA], [0]);
export var DescribeAgentRequest = struct(n0, _DARes, 0, [_AA], [0]);
export var DescribeAgentResponse = struct(
  n0,
  _DAResc,
  0,
  [_AA, _N, _S, _LCT, _CT, _ET, _PLC, _P],
  [0, 0, 0, 4, 4, 0, () => PrivateLinkConfig, () => Platform]
);
export var PrivateLinkConfig = struct(n0, _PLC, 0, [_VEI, _PLE, _SAu, _SGA], [0, 0, 64 | 0, 64 | 0]);
export var PLSecurityGroupArnList = 64 | 0;

export var PLSubnetArnList = 64 | 0;

export var CreateAgent = op(
  n0,
  _CA,
  0,
  () => CreateAgentRequest,
  () => CreateAgentResponse
);
export var DescribeAgent = op(
  n0,
  _DAe,
  0,
  () => DescribeAgentRequest,
  () => DescribeAgentResponse
);
