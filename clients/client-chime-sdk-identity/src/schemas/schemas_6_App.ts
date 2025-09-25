// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { NotFoundException as __NotFoundException } from "../models/index";
import {
  _A,
  _AI,
  _AIA,
  _AIAA,
  _AIAp,
  _AIB,
  _AIBA,
  _AIRS,
  _AIU,
  _AIUA,
  _AIUE,
  _AM,
  _C,
  _c,
  _Co,
  _CRS,
  _CT,
  _DAIAe,
  _DAIARe,
  _DAIARes,
  _DAIBe,
  _DAIBRe,
  _DAIBRes,
  _DAIe,
  _DAIRe,
  _DAIRes,
  _DAIUe,
  _DAIUEe,
  _DAIUERe,
  _DAIUERes,
  _DAIURe,
  _DAIURes,
  _e,
  _EA,
  _EI,
  _ES,
  _ESn,
  _GAIRS,
  _GAIRSR,
  _GAIRSRe,
  _h,
  _hE,
  _IDT,
  _LUT,
  _M,
  _Me,
  _N,
  _NFE,
  _PAIRS,
  _PAIRSR,
  _PAIRSRu,
  _RA,
  _RD,
  _T,
  n0,
} from "./schemas_0";
import { EndpointAttributes, EndpointState, SensitiveString1600 } from "./schemas_2_App";
import { Configuration, Identity, ResourceName } from "./schemas_3_App";
import { ExpirationSettings } from "./schemas_8_App";
import { NonEmptyResourceName } from "./schemas_9_App";
import { UserName } from "./schemas_11_App";
import { Metadata } from "./schemas_13_App";

/* eslint no-var: 0 */

export var AppInstance = struct(
  n0,
  _AI,
  0,
  [_AIA, _N, _CT, _LUT, _M],
  [0, [() => NonEmptyResourceName, 0], 4, 4, [() => Metadata, 0]]
);
export var AppInstanceAdmin = struct(n0, _AIAp, 0, [_A, _AIA, _CT], [[() => Identity, 0], 0, 4]);
export var AppInstanceBot = struct(
  n0,
  _AIB,
  0,
  [_AIBA, _N, _C, _CT, _LUT, _M],
  [0, [() => ResourceName, 0], () => Configuration, 4, 4, [() => Metadata, 0]]
);
export var AppInstanceRetentionSettings = struct(n0, _AIRS, 0, [_CRS], [() => ChannelRetentionSettings]);
export var AppInstanceUser = struct(
  n0,
  _AIU,
  0,
  [_AIUA, _N, _M, _CT, _LUT, _ES],
  [0, [() => UserName, 0], [() => Metadata, 0], 4, 4, () => ExpirationSettings]
);
export var AppInstanceUserEndpoint = struct(
  n0,
  _AIUE,
  0,
  [_AIUA, _EI, _N, _T, _RA, _EA, _CT, _LUT, _AM, _ESn],
  [0, 0, [() => SensitiveString1600, 0], 0, 0, [() => EndpointAttributes, 0], 4, 4, 0, () => EndpointState]
);
export var ChannelRetentionSettings = struct(n0, _CRS, 0, [_RD], [1]);
export var DescribeAppInstanceAdminRequest = struct(
  n0,
  _DAIARe,
  0,
  [_AIAA, _AIA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAppInstanceAdminResponse = struct(n0, _DAIARes, 0, [_AIAp], [[() => AppInstanceAdmin, 0]]);
export var DescribeAppInstanceBotRequest = struct(n0, _DAIBRe, 0, [_AIBA], [[0, 1]]);
export var DescribeAppInstanceBotResponse = struct(n0, _DAIBRes, 0, [_AIB], [[() => AppInstanceBot, 0]]);
export var DescribeAppInstanceRequest = struct(n0, _DAIRe, 0, [_AIA], [[0, 1]]);
export var DescribeAppInstanceResponse = struct(n0, _DAIRes, 0, [_AI], [[() => AppInstance, 0]]);
export var DescribeAppInstanceUserEndpointRequest = struct(
  n0,
  _DAIUERe,
  0,
  [_AIUA, _EI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAppInstanceUserEndpointResponse = struct(
  n0,
  _DAIUERes,
  0,
  [_AIUE],
  [[() => AppInstanceUserEndpoint, 0]]
);
export var DescribeAppInstanceUserRequest = struct(n0, _DAIURe, 0, [_AIUA], [[0, 1]]);
export var DescribeAppInstanceUserResponse = struct(n0, _DAIURes, 0, [_AIU], [[() => AppInstanceUser, 0]]);
export var GetAppInstanceRetentionSettingsRequest = struct(n0, _GAIRSR, 0, [_AIA], [[0, 1]]);
export var GetAppInstanceRetentionSettingsResponse = struct(
  n0,
  _GAIRSRe,
  0,
  [_AIRS, _IDT],
  [() => AppInstanceRetentionSettings, 4]
);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_Co, _Me],
  [0, 0],

  __NotFoundException
);
export var PutAppInstanceRetentionSettingsRequest = struct(
  n0,
  _PAIRSR,
  0,
  [_AIA, _AIRS],
  [[0, 1], () => AppInstanceRetentionSettings]
);
export var PutAppInstanceRetentionSettingsResponse = struct(
  n0,
  _PAIRSRu,
  0,
  [_AIRS, _IDT],
  [() => AppInstanceRetentionSettings, 4]
);
export var DescribeAppInstance = op(
  n0,
  _DAIe,
  {
    [_h]: ["GET", "/app-instances/{AppInstanceArn}", 200],
  },
  () => DescribeAppInstanceRequest,
  () => DescribeAppInstanceResponse
);
export var DescribeAppInstanceAdmin = op(
  n0,
  _DAIAe,
  {
    [_h]: ["GET", "/app-instances/{AppInstanceArn}/admins/{AppInstanceAdminArn}", 200],
  },
  () => DescribeAppInstanceAdminRequest,
  () => DescribeAppInstanceAdminResponse
);
export var DescribeAppInstanceBot = op(
  n0,
  _DAIBe,
  {
    [_h]: ["GET", "/app-instance-bots/{AppInstanceBotArn}", 200],
  },
  () => DescribeAppInstanceBotRequest,
  () => DescribeAppInstanceBotResponse
);
export var DescribeAppInstanceUser = op(
  n0,
  _DAIUe,
  {
    [_h]: ["GET", "/app-instance-users/{AppInstanceUserArn}", 200],
  },
  () => DescribeAppInstanceUserRequest,
  () => DescribeAppInstanceUserResponse
);
export var DescribeAppInstanceUserEndpoint = op(
  n0,
  _DAIUEe,
  {
    [_h]: ["GET", "/app-instance-users/{AppInstanceUserArn}/endpoints/{EndpointId}", 200],
  },
  () => DescribeAppInstanceUserEndpointRequest,
  () => DescribeAppInstanceUserEndpointResponse
);
export var GetAppInstanceRetentionSettings = op(
  n0,
  _GAIRS,
  {
    [_h]: ["GET", "/app-instances/{AppInstanceArn}/retention-settings", 200],
  },
  () => GetAppInstanceRetentionSettingsRequest,
  () => GetAppInstanceRetentionSettingsResponse
);
export var PutAppInstanceRetentionSettings = op(
  n0,
  _PAIRS,
  {
    [_h]: ["PUT", "/app-instances/{AppInstanceArn}/retention-settings", 200],
  },
  () => PutAppInstanceRetentionSettingsRequest,
  () => PutAppInstanceRetentionSettingsResponse
);
