// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CER,
  _CPA,
  _CPAI,
  _CPAR,
  _CPE,
  _CPEI,
  _CUD,
  _E,
  _EA,
  _En,
  _GEA,
  _GEAI,
  _GEAR,
  _GPAA,
  _GPAAI,
  _GPAAR,
  _LEBPA,
  _LEBPAI,
  _LEBPAR,
  _LOE,
  _LOPA,
  _LPA,
  _LPAI,
  _LPAR,
  _N,
  _NT,
  _P,
  _PA,
  _PAA,
  _PAl,
  _SEA,
  _SEAI,
  _SPAA,
  _SPAAI,
  _T,
  n0,
} from "./schemas_0";
import { Unit } from "./schemas_2_Phone";

/* eslint no-var: 0 */

export var CreateEndpointResponse = struct(n0, _CER, 0, [_EA], [0]);
export var CreatePlatformApplicationInput = struct(n0, _CPAI, 0, [_N, _P, _A], [0, 0, 128 | 0]);
export var CreatePlatformApplicationResponse = struct(n0, _CPAR, 0, [_PAA], [0]);
export var CreatePlatformEndpointInput = struct(n0, _CPEI, 0, [_PAA, _T, _CUD, _A], [0, 0, 0, 128 | 0]);
export var Endpoint = struct(n0, _E, 0, [_EA, _A], [0, 128 | 0]);
export var GetEndpointAttributesInput = struct(n0, _GEAI, 0, [_EA], [0]);
export var GetEndpointAttributesResponse = struct(n0, _GEAR, 0, [_A], [128 | 0]);
export var GetPlatformApplicationAttributesInput = struct(n0, _GPAAI, 0, [_PAA], [0]);
export var GetPlatformApplicationAttributesResponse = struct(n0, _GPAAR, 0, [_A], [128 | 0]);
export var ListEndpointsByPlatformApplicationInput = struct(n0, _LEBPAI, 0, [_PAA, _NT], [0, 0]);
export var ListEndpointsByPlatformApplicationResponse = struct(n0, _LEBPAR, 0, [_En, _NT], [() => ListOfEndpoints, 0]);
export var ListPlatformApplicationsInput = struct(n0, _LPAI, 0, [_NT], [0]);
export var ListPlatformApplicationsResponse = struct(n0, _LPAR, 0, [_PA, _NT], [() => ListOfPlatformApplications, 0]);
export var PlatformApplication = struct(n0, _PAl, 0, [_PAA, _A], [0, 128 | 0]);
export var SetEndpointAttributesInput = struct(n0, _SEAI, 0, [_EA, _A], [0, 128 | 0]);
export var SetPlatformApplicationAttributesInput = struct(n0, _SPAAI, 0, [_PAA, _A], [0, 128 | 0]);
export var ListOfEndpoints = list(n0, _LOE, 0, () => Endpoint);
export var ListOfPlatformApplications = list(n0, _LOPA, 0, () => PlatformApplication);
export var MapStringToString = 128 | 0;

export var CreatePlatformApplication = op(
  n0,
  _CPA,
  0,
  () => CreatePlatformApplicationInput,
  () => CreatePlatformApplicationResponse
);
export var CreatePlatformEndpoint = op(
  n0,
  _CPE,
  0,
  () => CreatePlatformEndpointInput,
  () => CreateEndpointResponse
);
export var GetEndpointAttributes = op(
  n0,
  _GEA,
  0,
  () => GetEndpointAttributesInput,
  () => GetEndpointAttributesResponse
);
export var GetPlatformApplicationAttributes = op(
  n0,
  _GPAA,
  0,
  () => GetPlatformApplicationAttributesInput,
  () => GetPlatformApplicationAttributesResponse
);
export var ListEndpointsByPlatformApplication = op(
  n0,
  _LEBPA,
  0,
  () => ListEndpointsByPlatformApplicationInput,
  () => ListEndpointsByPlatformApplicationResponse
);
export var ListPlatformApplications = op(
  n0,
  _LPA,
  0,
  () => ListPlatformApplicationsInput,
  () => ListPlatformApplicationsResponse
);
export var SetEndpointAttributes = op(
  n0,
  _SEA,
  0,
  () => SetEndpointAttributesInput,
  () => Unit
);
export var SetPlatformApplicationAttributes = op(
  n0,
  _SPAA,
  0,
  () => SetPlatformApplicationAttributesInput,
  () => Unit
);
