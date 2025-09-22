// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DelegationSetAlreadyCreated as __DelegationSetAlreadyCreated,
  DelegationSetAlreadyReusable as __DelegationSetAlreadyReusable,
  DelegationSetNotAvailable as __DelegationSetNotAvailable,
  HostedZoneAlreadyExists as __HostedZoneAlreadyExists,
  HostedZoneNotFound as __HostedZoneNotFound,
  InvalidKeySigningKeyName as __InvalidKeySigningKeyName,
  KeySigningKeyAlreadyExists as __KeySigningKeyAlreadyExists,
  TooManyHostedZones as __TooManyHostedZones,
  TooManyKeySigningKeys as __TooManyKeySigningKeys,
} from "../models/index";
import {
  _C,
  _c,
  _CHZ,
  _CHZR,
  _CHZRr,
  _CI,
  _CKSK,
  _CKSKR,
  _CKSKRr,
  _Con,
  _CR,
  _CRDS,
  _CRDSR,
  _CRDSRr,
  _DS,
  _DSAC,
  _DSAR,
  _DSI,
  _DSNA,
  _DSNS,
  _e,
  _GHZ,
  _GHZR,
  _GHZRe,
  _GRDS,
  _GRDSR,
  _GRDSRe,
  _hE,
  _hH,
  _ht,
  _HZ,
  _HZAE,
  _HZC,
  _HZI,
  _HZNF,
  _I,
  _IKSKN,
  _KMSA,
  _KSK,
  _KSKAE,
  _Loc,
  _LS,
  _m,
  _N,
  _NS,
  _NSa,
  _PZ,
  _RRSC,
  _S,
  _TMHZ,
  _TMKSK,
  _UHZC,
  _UHZCR,
  _UHZCRp,
  _VPC,
  _VPCs,
  _xN,
  n0,
} from "./schemas_0";
import { LinkedService } from "./schemas_5_Hosted";
import { ChangeInfo } from "./schemas_10_Hosted";
import { VPC, VPCs } from "./schemas_11_VPC";
import { KeySigningKey } from "./schemas_19_Signing";

/* eslint no-var: 0 */

export var CreateHostedZoneRequest = struct(
  n0,
  _CHZR,
  0,
  [_N, _VPC, _CR, _HZC, _DSI],
  [0, () => VPC, 0, () => HostedZoneConfig, 0]
);
export var CreateHostedZoneResponse = struct(
  n0,
  _CHZRr,
  0,
  [_HZ, _CI, _DS, _VPC, _Loc],
  [
    () => HostedZone,
    () => ChangeInfo,
    [() => DelegationSet, 0],
    () => VPC,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var CreateKeySigningKeyRequest = struct(n0, _CKSKR, 0, [_CR, _HZI, _KMSA, _N, _S], [0, 0, 0, 0, 0]);
export var CreateKeySigningKeyResponse = struct(
  n0,
  _CKSKRr,
  0,
  [_CI, _KSK, _Loc],
  [
    () => ChangeInfo,
    () => KeySigningKey,
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var CreateReusableDelegationSetRequest = struct(n0, _CRDSR, 0, [_CR, _HZI], [0, 0]);
export var CreateReusableDelegationSetResponse = struct(
  n0,
  _CRDSRr,
  0,
  [_DS, _Loc],
  [
    [() => DelegationSet, 0],
    [
      0,
      {
        [_hH]: _Loc,
      },
    ],
  ]
);
export var DelegationSet = struct(n0, _DS, 0, [_I, _CR, _NS], [0, 0, [() => DelegationSetNameServers, 0]]);
export var DelegationSetAlreadyCreated = error(
  n0,
  _DSAC,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DelegationSetAlreadyCreated
);
export var DelegationSetAlreadyReusable = error(
  n0,
  _DSAR,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DelegationSetAlreadyReusable
);
export var DelegationSetNotAvailable = error(
  n0,
  _DSNA,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DelegationSetNotAvailable
);
export var GetHostedZoneRequest = struct(n0, _GHZR, 0, [_I], [[0, 1]]);
export var GetHostedZoneResponse = struct(
  n0,
  _GHZRe,
  0,
  [_HZ, _DS, _VPCs],
  [() => HostedZone, [() => DelegationSet, 0], [() => VPCs, 0]]
);
export var GetReusableDelegationSetRequest = struct(n0, _GRDSR, 0, [_I], [[0, 1]]);
export var GetReusableDelegationSetResponse = struct(n0, _GRDSRe, 0, [_DS], [[() => DelegationSet, 0]]);
export var HostedZone = struct(
  n0,
  _HZ,
  0,
  [_I, _N, _CR, _Con, _RRSC, _LS],
  [0, 0, 0, () => HostedZoneConfig, 1, () => LinkedService]
);
export var HostedZoneAlreadyExists = error(
  n0,
  _HZAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __HostedZoneAlreadyExists
);
export var HostedZoneConfig = struct(n0, _HZC, 0, [_C, _PZ], [0, 2]);
export var HostedZoneNotFound = error(
  n0,
  _HZNF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __HostedZoneNotFound
);
export var InvalidKeySigningKeyName = error(
  n0,
  _IKSKN,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidKeySigningKeyName
);
export var KeySigningKeyAlreadyExists = error(
  n0,
  _KSKAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __KeySigningKeyAlreadyExists
);
export var TooManyHostedZones = error(
  n0,
  _TMHZ,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __TooManyHostedZones
);
export var TooManyKeySigningKeys = error(
  n0,
  _TMKSK,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __TooManyKeySigningKeys
);
export var UpdateHostedZoneCommentRequest = struct(n0, _UHZCR, 0, [_I, _C], [[0, 1], 0]);
export var UpdateHostedZoneCommentResponse = struct(n0, _UHZCRp, 0, [_HZ], [() => HostedZone]);
export var DelegationSetNameServers = list(n0, _DSNS, 0, [
  0,
  {
    [_xN]: _NSa,
  },
]);
export var CreateHostedZone = op(
  n0,
  _CHZ,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone", 201],
  },
  () => CreateHostedZoneRequest,
  () => CreateHostedZoneResponse
);
export var CreateKeySigningKey = op(
  n0,
  _CKSK,
  {
    [_ht]: ["POST", "/2013-04-01/keysigningkey", 201],
  },
  () => CreateKeySigningKeyRequest,
  () => CreateKeySigningKeyResponse
);
export var CreateReusableDelegationSet = op(
  n0,
  _CRDS,
  {
    [_ht]: ["POST", "/2013-04-01/delegationset", 201],
  },
  () => CreateReusableDelegationSetRequest,
  () => CreateReusableDelegationSetResponse
);
export var GetHostedZone = op(
  n0,
  _GHZ,
  {
    [_ht]: ["GET", "/2013-04-01/hostedzone/{Id}", 200],
  },
  () => GetHostedZoneRequest,
  () => GetHostedZoneResponse
);
export var GetReusableDelegationSet = op(
  n0,
  _GRDS,
  {
    [_ht]: ["GET", "/2013-04-01/delegationset/{Id}", 200],
  },
  () => GetReusableDelegationSetRequest,
  () => GetReusableDelegationSetResponse
);
export var UpdateHostedZoneComment = op(
  n0,
  _UHZC,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{Id}", 200],
  },
  () => UpdateHostedZoneCommentRequest,
  () => UpdateHostedZoneCommentResponse
);
