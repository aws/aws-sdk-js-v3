// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  HostedZoneNotEmpty as __HostedZoneNotEmpty,
  NotAuthorizedException as __NotAuthorizedException,
  PriorRequestNotComplete as __PriorRequestNotComplete,
  PublicZoneVPCAssociation as __PublicZoneVPCAssociation,
} from "../models/index";
import {
  _AVPCWHZ,
  _AVPCWHZR,
  _AVPCWHZRs,
  _C,
  _c,
  _CI,
  _DHZ,
  _DHZR,
  _DHZRe,
  _e,
  _hE,
  _ht,
  _HZI,
  _HZNE,
  _I,
  _m,
  _NAE,
  _PRNC,
  _PZVPCA,
  _VPC,
  n0,
} from "./schemas_0";
import { ChangeInfo } from "./schemas_10_Hosted";
import { VPC } from "./schemas_11_VPC";

/* eslint no-var: 0 */

export var AssociateVPCWithHostedZoneRequest = struct(n0, _AVPCWHZR, 0, [_HZI, _VPC, _C], [[0, 1], () => VPC, 0]);
export var AssociateVPCWithHostedZoneResponse = struct(n0, _AVPCWHZRs, 0, [_CI], [() => ChangeInfo]);
export var DeleteHostedZoneRequest = struct(n0, _DHZR, 0, [_I], [[0, 1]]);
export var DeleteHostedZoneResponse = struct(n0, _DHZRe, 0, [_CI], [() => ChangeInfo]);
export var HostedZoneNotEmpty = error(
  n0,
  _HZNE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __HostedZoneNotEmpty
);
export var NotAuthorizedException = error(
  n0,
  _NAE,
  {
    [_e]: _c,
    [_hE]: 401,
  },
  [_m],
  [0],

  __NotAuthorizedException
);
export var PriorRequestNotComplete = error(
  n0,
  _PRNC,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __PriorRequestNotComplete
);
export var PublicZoneVPCAssociation = error(
  n0,
  _PZVPCA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __PublicZoneVPCAssociation
);
export var AssociateVPCWithHostedZone = op(
  n0,
  _AVPCWHZ,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/associatevpc", 200],
  },
  () => AssociateVPCWithHostedZoneRequest,
  () => AssociateVPCWithHostedZoneResponse
);
export var DeleteHostedZone = op(
  n0,
  _DHZ,
  {
    [_ht]: ["DELETE", "/2013-04-01/hostedzone/{Id}", 200],
  },
  () => DeleteHostedZoneRequest,
  () => DeleteHostedZoneResponse
);
