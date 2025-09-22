// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictingDomainExists as __ConflictingDomainExists,
  InvalidVPCId as __InvalidVPCId,
  LastVPCAssociation as __LastVPCAssociation,
  TooManyVPCAssociationAuthorizations as __TooManyVPCAssociationAuthorizations,
  VPCAssociationAuthorizationNotFound as __VPCAssociationAuthorizationNotFound,
  VPCAssociationNotFound as __VPCAssociationNotFound,
} from "../models/index";
import {
  _C,
  _c,
  _CDE,
  _CI,
  _CVPCAA,
  _CVPCAAR,
  _CVPCAARr,
  _DVPCAA,
  _DVPCAAR,
  _DVPCAARe,
  _DVPCFHZ,
  _DVPCFHZR,
  _DVPCFHZRi,
  _e,
  _hE,
  _hQ,
  _ht,
  _HZI,
  _HZO,
  _HZS,
  _HZSo,
  _IVPCI,
  _LHZBVPC,
  _LHZBVPCR,
  _LHZBVPCRi,
  _LVPCA,
  _LVPCAA,
  _LVPCAAR,
  _LVPCAARi,
  _m,
  _ma,
  _max,
  _MI,
  _MR,
  _N,
  _n,
  _NT,
  _O,
  _OA,
  _OS,
  _TMVPCAA,
  _v,
  _vp,
  _VPC,
  _VPCAANF,
  _VPCANF,
  _VPCI,
  _VPCR,
  _VPCs,
  _xN,
  n0,
} from "./schemas_0";
import { ChangeInfo } from "./schemas_10_Hosted";

/* eslint no-var: 0 */

export var ConflictingDomainExists = error(
  n0,
  _CDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ConflictingDomainExists
);
export var CreateVPCAssociationAuthorizationRequest = struct(n0, _CVPCAAR, 0, [_HZI, _VPC], [[0, 1], () => VPC]);
export var CreateVPCAssociationAuthorizationResponse = struct(n0, _CVPCAARr, 0, [_HZI, _VPC], [0, () => VPC]);
export var DeleteVPCAssociationAuthorizationRequest = struct(n0, _DVPCAAR, 0, [_HZI, _VPC], [[0, 1], () => VPC]);
export var DeleteVPCAssociationAuthorizationResponse = struct(n0, _DVPCAARe, 0, [], []);
export var DisassociateVPCFromHostedZoneRequest = struct(n0, _DVPCFHZR, 0, [_HZI, _VPC, _C], [[0, 1], () => VPC, 0]);
export var DisassociateVPCFromHostedZoneResponse = struct(n0, _DVPCFHZRi, 0, [_CI], [() => ChangeInfo]);
export var HostedZoneOwner = struct(n0, _HZO, 0, [_OA, _OS], [0, 0]);
export var HostedZoneSummary = struct(n0, _HZS, 0, [_HZI, _N, _O], [0, 0, () => HostedZoneOwner]);
export var InvalidVPCId = error(
  n0,
  _IVPCI,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidVPCId
);
export var LastVPCAssociation = error(
  n0,
  _LVPCA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __LastVPCAssociation
);
export var ListHostedZonesByVPCRequest = struct(
  n0,
  _LHZBVPCR,
  0,
  [_VPCI, _VPCR, _MI, _NT],
  [
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
    [
      0,
      {
        [_hQ]: _vp,
      },
    ],
    [
      1,
      {
        [_hQ]: _max,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var ListHostedZonesByVPCResponse = struct(
  n0,
  _LHZBVPCRi,
  0,
  [_HZSo, _MI, _NT],
  [[() => HostedZoneSummaries, 0], 1, 0]
);
export var ListVPCAssociationAuthorizationsRequest = struct(
  n0,
  _LVPCAAR,
  0,
  [_HZI, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      1,
      {
        [_hQ]: _ma,
      },
    ],
  ]
);
export var ListVPCAssociationAuthorizationsResponse = struct(
  n0,
  _LVPCAARi,
  0,
  [_HZI, _NT, _VPCs],
  [0, 0, [() => VPCs, 0]]
);
export var TooManyVPCAssociationAuthorizations = error(
  n0,
  _TMVPCAA,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyVPCAssociationAuthorizations
);
export var VPC = struct(n0, _VPC, 0, [_VPCR, _VPCI], [0, 0]);
export var VPCAssociationAuthorizationNotFound = error(
  n0,
  _VPCAANF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __VPCAssociationAuthorizationNotFound
);
export var VPCAssociationNotFound = error(
  n0,
  _VPCANF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __VPCAssociationNotFound
);
export var HostedZoneSummaries = list(n0, _HZSo, 0, [
  () => HostedZoneSummary,
  {
    [_xN]: _HZS,
  },
]);
export var VPCs = list(n0, _VPCs, 0, [
  () => VPC,
  {
    [_xN]: _VPC,
  },
]);
export var CreateVPCAssociationAuthorization = op(
  n0,
  _CVPCAA,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation", 200],
  },
  () => CreateVPCAssociationAuthorizationRequest,
  () => CreateVPCAssociationAuthorizationResponse
);
export var DeleteVPCAssociationAuthorization = op(
  n0,
  _DVPCAA,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/deauthorizevpcassociation", 200],
  },
  () => DeleteVPCAssociationAuthorizationRequest,
  () => DeleteVPCAssociationAuthorizationResponse
);
export var DisassociateVPCFromHostedZone = op(
  n0,
  _DVPCFHZ,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/disassociatevpc", 200],
  },
  () => DisassociateVPCFromHostedZoneRequest,
  () => DisassociateVPCFromHostedZoneResponse
);
export var ListHostedZonesByVPC = op(
  n0,
  _LHZBVPC,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzonesbyvpc", 200],
  },
  () => ListHostedZonesByVPCRequest,
  () => ListHostedZonesByVPCResponse
);
export var ListVPCAssociationAuthorizations = op(
  n0,
  _LVPCAA,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzone/{HostedZoneId}/authorizevpcassociation", 200],
  },
  () => ListVPCAssociationAuthorizationsRequest,
  () => ListVPCAssociationAuthorizationsResponse
);
