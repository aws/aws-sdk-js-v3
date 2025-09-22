// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import { OperationNotSupportedException as __OperationNotSupportedException } from "../models/index";
import {
  _AVl,
  _c,
  _CMon,
  _CO,
  _Conf,
  _COonf,
  _CUP,
  _CUPR,
  _CUPRr,
  _D,
  _DUP,
  _DUPR,
  _DUPRe,
  _DV,
  _e,
  _GUP,
  _GUPR,
  _GUPRe,
  _JCob,
  _LMO,
  _LUP,
  _LUPR,
  _LUPRi,
  _M,
  _MRax,
  _MV,
  _MVa,
  _N,
  _NTe,
  _ONSE,
  _PCr,
  _Pro,
  _SCes,
  _Tag,
  _UPD,
  _UPDL,
  _UUP,
  _UUPR,
  _UUPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigurationObject = struct(n0, _COonf, 0, [_DV, _AVl, _MV, _MVa], [0, 64 | 0, 0, 0]);
export var CreateUsageProfileRequest = struct(
  n0,
  _CUPR,
  0,
  [_N, _D, _Conf, _Tag],
  [0, 0, () => ProfileConfiguration, 128 | 0]
);
export var CreateUsageProfileResponse = struct(n0, _CUPRr, 0, [_N], [0]);
export var DeleteUsageProfileRequest = struct(n0, _DUPR, 0, [_N], [0]);
export var DeleteUsageProfileResponse = struct(n0, _DUPRe, 0, [], []);
export var GetUsageProfileRequest = struct(n0, _GUPR, 0, [_N], [0]);
export var GetUsageProfileResponse = struct(
  n0,
  _GUPRe,
  0,
  [_N, _D, _Conf, _CO, _LMO],
  [0, 0, () => ProfileConfiguration, 4, 4]
);
export var ListUsageProfilesRequest = struct(n0, _LUPR, 0, [_NTe, _MRax], [0, 1]);
export var ListUsageProfilesResponse = struct(n0, _LUPRi, 0, [_Pro, _NTe], [() => UsageProfileDefinitionList, 0]);
export var OperationNotSupportedException = error(
  n0,
  _ONSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __OperationNotSupportedException
);
export var ProfileConfiguration = struct(n0, _PCr, 0, [_SCes, _JCob], [() => ConfigurationMap, () => ConfigurationMap]);
export var UpdateUsageProfileRequest = struct(n0, _UUPR, 0, [_N, _D, _Conf], [0, 0, () => ProfileConfiguration]);
export var UpdateUsageProfileResponse = struct(n0, _UUPRp, 0, [_N], [0]);
export var UsageProfileDefinition = struct(n0, _UPD, 0, [_N, _D, _CO, _LMO], [0, 0, 4, 4]);
export var AllowedValuesStringList = 64 | 0;

export var UsageProfileDefinitionList = list(n0, _UPDL, 0, () => UsageProfileDefinition);
export var ConfigurationMap = map(n0, _CMon, 0, 0, () => ConfigurationObject);
export var CreateUsageProfile = op(
  n0,
  _CUP,
  0,
  () => CreateUsageProfileRequest,
  () => CreateUsageProfileResponse
);
export var DeleteUsageProfile = op(
  n0,
  _DUP,
  0,
  () => DeleteUsageProfileRequest,
  () => DeleteUsageProfileResponse
);
export var GetUsageProfile = op(
  n0,
  _GUP,
  0,
  () => GetUsageProfileRequest,
  () => GetUsageProfileResponse
);
export var ListUsageProfiles = op(
  n0,
  _LUP,
  0,
  () => ListUsageProfilesRequest,
  () => ListUsageProfilesResponse
);
export var UpdateUsageProfile = op(
  n0,
  _UUP,
  0,
  () => UpdateUsageProfileRequest,
  () => UpdateUsageProfileResponse
);
