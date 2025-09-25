// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  SlotNotAvailableException as __SlotNotAvailableException,
} from "../models/index";
import {
  _a,
  _aC,
  _AID,
  _ATc,
  _c,
  _cA,
  _CAR,
  _CAre,
  _CARr,
  _CE,
  _CT,
  _cT,
  _CVE,
  _CVER,
  _CVERr,
  _DA,
  _DAe,
  _DAR,
  _DARe,
  _DN,
  _dS,
  _DSTe,
  _e,
  _ena,
  _h,
  _hE,
  _i,
  _iICIA,
  _iICO,
  _IICOI,
  _iRFICAA,
  _lUA,
  _m,
  _n,
  _SAch,
  _SAche,
  _SNAE,
  _SSl,
  _tL,
  _UApd,
  _UAR,
  _UARp,
  _USA,
  _USAR,
  _USARp,
  _UVE,
  _UVER,
  _UVERp,
  _VE,
  _VEI,
  _VO,
  n0,
} from "./schemas_0";
import { VpcEndpoint, VPCOptions } from "./schemas_4_Domain";
import { TagList } from "./schemas_12_Add";
import { AppConfigs, DataSources, IamIdentityCenterOptions } from "./schemas_19_Data";
import { ScheduledAction } from "./schemas_25_Scheduled";

/* eslint no-var: 0 */

export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_cT, _n, _dS, _iICO, _aC, _tL],
  [[0, 4], 0, () => DataSources, () => IamIdentityCenterOptionsInput, () => AppConfigs, () => TagList]
);
export var CreateApplicationResponse = struct(
  n0,
  _CARr,
  0,
  [_i, _n, _a, _dS, _iICO, _aC, _tL, _cA],
  [0, 0, 0, () => DataSources, () => IamIdentityCenterOptions, () => AppConfigs, () => TagList, 4]
);
export var CreateVpcEndpointRequest = struct(n0, _CVER, 0, [_DA, _VO, _CT], [0, () => VPCOptions, 0]);
export var CreateVpcEndpointResponse = struct(n0, _CVERr, 0, [_VE], [() => VpcEndpoint]);
export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_i], [[0, 1]]);
export var DeleteApplicationResponse = struct(n0, _DARe, 0, [], []);
export var IamIdentityCenterOptionsInput = struct(n0, _IICOI, 0, [_ena, _iICIA, _iRFICAA], [2, 0, 0]);
export var SlotNotAvailableException = error(
  n0,
  _SNAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_SSl, _m],
  [64 | 1, 0],

  __SlotNotAvailableException
);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_i, _dS, _aC],
  [[0, 1], () => DataSources, () => AppConfigs]
);
export var UpdateApplicationResponse = struct(
  n0,
  _UARp,
  0,
  [_i, _n, _a, _dS, _iICO, _aC, _cA, _lUA],
  [0, 0, 0, () => DataSources, () => IamIdentityCenterOptions, () => AppConfigs, 4, 4]
);
export var UpdateScheduledActionRequest = struct(n0, _USAR, 0, [_DN, _AID, _ATc, _SAche, _DSTe], [[0, 1], 0, 0, 0, 1]);
export var UpdateScheduledActionResponse = struct(n0, _USARp, 0, [_SAch], [() => ScheduledAction]);
export var UpdateVpcEndpointRequest = struct(n0, _UVER, 0, [_VEI, _VO], [0, () => VPCOptions]);
export var UpdateVpcEndpointResponse = struct(n0, _UVERp, 0, [_VE], [() => VpcEndpoint]);
export var SlotList = 64 | 1;

export var CreateApplication = op(
  n0,
  _CAre,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/application", 200],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var CreateVpcEndpoint = op(
  n0,
  _CVE,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/vpcEndpoints", 200],
  },
  () => CreateVpcEndpointRequest,
  () => CreateVpcEndpointResponse
);
export var DeleteApplication = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/2021-01-01/opensearch/application/{id}", 200],
  },
  () => DeleteApplicationRequest,
  () => DeleteApplicationResponse
);
export var UpdateApplication = op(
  n0,
  _UApd,
  {
    [_h]: ["PUT", "/2021-01-01/opensearch/application/{id}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
export var UpdateScheduledAction = op(
  n0,
  _USA,
  {
    [_h]: ["PUT", "/2021-01-01/opensearch/domain/{DomainName}/scheduledAction/update", 200],
  },
  () => UpdateScheduledActionRequest,
  () => UpdateScheduledActionResponse
);
export var UpdateVpcEndpoint = op(
  n0,
  _UVE,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/vpcEndpoints/update", 200],
  },
  () => UpdateVpcEndpointRequest,
  () => UpdateVpcEndpointResponse
);
