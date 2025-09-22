// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _AEc,
  _AS,
  _ASR,
  _CT,
  _CTo,
  _D,
  _DN,
  _Do,
  _DRAC,
  _DSesc,
  _DSRescr,
  _DSRescri,
  _E,
  _EC,
  _EHD,
  _EM,
  _FURL,
  _ML,
  _N,
  _Na,
  _NT,
  _Pe,
  _PP,
  _RI,
  _RURL,
  _SBN,
  _SC,
  _SCL,
  _SCt,
  _SE,
  _SES,
  _SEt,
  _SG,
  _SLt,
  _Sta,
  _Stac,
  _US,
  _USL,
  _USs,
  AccessEndpointList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSettingsResponse = struct(n0, _ASR, 0, [_E, _SG, _SBN], [2, 0, 0]);
export var DescribeStacksRequest = struct(n0, _DSRescr, 0, [_Na, _NT], [64 | 0, 0]);
export var DescribeStacksResult = struct(n0, _DSRescri, 0, [_Stac, _NT], [() => StackList, 0]);
export var Stack = struct(
  n0,
  _Sta,
  0,
  [_A, _N, _D, _DN, _CT, _SC, _RURL, _FURL, _SE, _US, _AS, _AEc, _EHD, _SES],
  [
    0,
    0,
    0,
    0,
    4,
    () => StorageConnectorList,
    0,
    0,
    () => StackErrors,
    () => UserSettingList,
    () => ApplicationSettingsResponse,
    () => AccessEndpointList,
    64 | 0,
    () => StreamingExperienceSettings,
  ]
);
export var StackError = struct(n0, _SEt, 0, [_EC, _EM], [0, 0]);
export var StorageConnector = struct(n0, _SCt, 0, [_CTo, _RI, _Do, _DRAC], [0, 0, 64 | 0, 64 | 0]);
export var StreamingExperienceSettings = struct(n0, _SES, 0, [_PP], [0]);
export var UserSetting = struct(n0, _USs, 0, [_Ac, _Pe, _ML], [0, 0, 1]);
export var DomainList = 64 | 0;

export var EmbedHostDomains = 64 | 0;

export var StackErrors = list(n0, _SE, 0, () => StackError);
export var StackList = list(n0, _SLt, 0, () => Stack);
export var StorageConnectorList = list(n0, _SCL, 0, () => StorageConnector);
export var UserSettingList = list(n0, _USL, 0, () => UserSetting);
export var DescribeStacks = op(
  n0,
  _DSesc,
  0,
  () => DescribeStacksRequest,
  () => DescribeStacksResult
);
