// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AA,
  _AAE,
  _AOUE,
  _APTE,
  _ARE,
  _AS,
  _ASd,
  _ESA,
  _ESOU,
  _GAS,
  _GASR,
  _GASRe,
  _OU,
  _OUS,
  _PAA,
  _PAAR,
  _PT,
  _PTS,
  _Reg,
  _RS,
  _S,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountScope = struct(n0, _AS, 0, [_A, _AAE, _ESA], [64 | 0, 2, 2]);
export var AdminScope = struct(
  n0,
  _ASd,
  0,
  [_AS, _OUS, _RS, _PTS],
  [() => AccountScope, () => OrganizationalUnitScope, () => RegionScope, () => PolicyTypeScope]
);
export var GetAdminScopeRequest = struct(n0, _GASR, 0, [_AA], [0]);
export var GetAdminScopeResponse = struct(n0, _GASRe, 0, [_ASd, _S], [() => AdminScope, 0]);
export var OrganizationalUnitScope = struct(n0, _OUS, 0, [_OU, _AOUE, _ESOU], [64 | 0, 2, 2]);
export var PolicyTypeScope = struct(n0, _PTS, 0, [_PT, _APTE], [64 | 0, 2]);
export var PutAdminAccountRequest = struct(n0, _PAAR, 0, [_AA, _ASd], [0, () => AdminScope]);
export var RegionScope = struct(n0, _RS, 0, [_Reg, _ARE], [64 | 0, 2]);
export var AWSRegionList = 64 | 0;

export var OrganizationalUnitIdList = 64 | 0;

export var SecurityServiceTypeList = 64 | 0;

export var GetAdminScope = op(
  n0,
  _GAS,
  0,
  () => GetAdminScopeRequest,
  () => GetAdminScopeResponse
);
export var PutAdminAccount = op(
  n0,
  _PAA,
  0,
  () => PutAdminAccountRequest,
  () => Unit
);
