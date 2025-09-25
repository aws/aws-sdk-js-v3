// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidRoleException as __InvalidRoleException } from "../models/index";
import {
  _ABB,
  _AEc,
  _AS,
  _ATD,
  _c,
  _CURS,
  _CURSR,
  _CURSRr,
  _D,
  _DN,
  _DSC,
  _E,
  _EDIA,
  _EHD,
  _er,
  _FURL,
  _hE,
  _IRA,
  _IRE,
  _IT,
  _M,
  _N,
  _P,
  _RURL,
  _SBN,
  _SC,
  _Sc,
  _SES,
  _SF,
  _SFR,
  _SFRt,
  _SG,
  _Sta,
  _UABB,
  _UABBR,
  _UABBRp,
  _US,
  _USp,
  _USR,
  _USRp,
  _VC,
  AccessEndpointList,
  n0,
  VpcConfig,
} from "./schemas_0";
import { Stack, StorageConnectorList, StreamingExperienceSettings, UserSettingList } from "./schemas_2_Stack";
import { AppBlockBuilder } from "./schemas_11_App";

/* eslint no-var: 0 */

export var ApplicationSettings = struct(n0, _AS, 0, [_E, _SG], [2, 0]);
export var CreateUsageReportSubscriptionRequest = struct(n0, _CURSR, 0, [], []);
export var CreateUsageReportSubscriptionResult = struct(n0, _CURSRr, 0, [_SBN, _Sc], [0, 0]);
export var InvalidRoleException = error(
  n0,
  _IRE,
  {
    [_er]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __InvalidRoleException
);
export var StartFleetRequest = struct(n0, _SFR, 0, [_N], [0]);
export var StartFleetResult = struct(n0, _SFRt, 0, [], []);
export var UpdateAppBlockBuilderRequest = struct(
  n0,
  _UABBR,
  0,
  [_N, _D, _DN, _P, _IT, _VC, _EDIA, _IRA, _AEc, _ATD],
  [0, 0, 0, 0, 0, () => VpcConfig, 2, 0, () => AccessEndpointList, 64 | 0]
);
export var UpdateAppBlockBuilderResult = struct(n0, _UABBRp, 0, [_ABB], [() => AppBlockBuilder]);
export var UpdateStackRequest = struct(
  n0,
  _USR,
  0,
  [_DN, _D, _N, _SC, _DSC, _RURL, _FURL, _ATD, _US, _AS, _AEc, _EHD, _SES],
  [
    0,
    0,
    0,
    () => StorageConnectorList,
    2,
    0,
    0,
    64 | 0,
    () => UserSettingList,
    () => ApplicationSettings,
    () => AccessEndpointList,
    64 | 0,
    () => StreamingExperienceSettings,
  ]
);
export var UpdateStackResult = struct(n0, _USRp, 0, [_Sta], [() => Stack]);
export var AppBlockBuilderAttributes = 64 | 0;

export var StackAttributes = 64 | 0;

export var CreateUsageReportSubscription = op(
  n0,
  _CURS,
  0,
  () => CreateUsageReportSubscriptionRequest,
  () => CreateUsageReportSubscriptionResult
);
export var StartFleet = op(
  n0,
  _SF,
  0,
  () => StartFleetRequest,
  () => StartFleetResult
);
export var UpdateAppBlockBuilder = op(
  n0,
  _UABB,
  0,
  () => UpdateAppBlockBuilderRequest,
  () => UpdateAppBlockBuilderResult
);
export var UpdateStack = op(
  n0,
  _USp,
  0,
  () => UpdateStackRequest,
  () => UpdateStackResult
);
