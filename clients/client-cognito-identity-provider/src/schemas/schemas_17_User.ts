// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CAC,
  _CDr,
  _CELVCT,
  _CES,
  _CMu,
  _CSMSLVCT,
  _CSMSS,
  _DAC,
  _Id,
  _KMSKID,
  _LAa,
  _LC,
  _LCT,
  _LMD,
  _LUP,
  _LUPR,
  _LUPRi,
  _LV,
  _MR,
  _Na,
  _NT,
  _PA,
  _PAo,
  _PC,
  _PSU,
  _PTG,
  _PTGC,
  _PTGVCT,
  _St,
  _UM,
  _UPDT,
  _UPLT,
  _UPs,
  _VACR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomEmailLambdaVersionConfigType = struct(n0, _CELVCT, 0, [_LV, _LAa], [0, 0]);
export var CustomSMSLambdaVersionConfigType = struct(n0, _CSMSLVCT, 0, [_LV, _LAa], [0, 0]);
export var LambdaConfigType = struct(
  n0,
  _LCT,
  0,
  [_PSU, _CMu, _PC, _PA, _PAo, _DAC, _CAC, _VACR, _PTG, _UM, _PTGC, _CSMSS, _CES, _KMSKID],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => PreTokenGenerationVersionConfigType,
    () => CustomSMSLambdaVersionConfigType,
    () => CustomEmailLambdaVersionConfigType,
    0,
  ]
);
export var ListUserPoolsRequest = struct(n0, _LUPR, 0, [_NT, _MR], [0, 1]);
export var ListUserPoolsResponse = struct(n0, _LUPRi, 0, [_UPs, _NT], [() => UserPoolListType, 0]);
export var PreTokenGenerationVersionConfigType = struct(n0, _PTGVCT, 0, [_LV, _LAa], [0, 0]);
export var UserPoolDescriptionType = struct(
  n0,
  _UPDT,
  0,
  [_Id, _Na, _LC, _St, _LMD, _CDr],
  [0, 0, () => LambdaConfigType, 0, 4, 4]
);
export var UserPoolListType = list(n0, _UPLT, 0, () => UserPoolDescriptionType);
export var ListUserPools = op(
  n0,
  _LUP,
  0,
  () => ListUserPoolsRequest,
  () => ListUserPoolsResponse
);
