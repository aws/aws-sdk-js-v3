// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DNSSECNotFound as __DNSSECNotFound,
  HostedZonePartiallyDelegated as __HostedZonePartiallyDelegated,
  InvalidKeySigningKeyStatus as __InvalidKeySigningKeyStatus,
  InvalidKMSArn as __InvalidKMSArn,
  InvalidSigningStatus as __InvalidSigningStatus,
  KeySigningKeyInParentDSRecord as __KeySigningKeyInParentDSRecord,
  KeySigningKeyInUse as __KeySigningKeyInUse,
  KeySigningKeyWithActiveStatusNotFound as __KeySigningKeyWithActiveStatusNotFound,
  NoSuchKeySigningKey as __NoSuchKeySigningKey,
} from "../models/index";
import {
  _AKSK,
  _AKSKR,
  _AKSKRc,
  _c,
  _CI,
  _DHZDNSSEC,
  _DHZDNSSECR,
  _DHZDNSSECRi,
  _DKSK,
  _DKSKe,
  _DKSKR,
  _DKSKRe,
  _DKSKRel,
  _DKSKRele,
  _DNSSECNF,
  _e,
  _EHZDNSSEC,
  _EHZDNSSECR,
  _EHZDNSSECRn,
  _hE,
  _ht,
  _HZI,
  _HZPD,
  _IKMSA,
  _IKSKS,
  _ISS,
  _KSKIPDSR,
  _KSKIU,
  _KSKWASNF,
  _m,
  _N,
  _NSKSK,
  n0,
} from "./schemas_0";
import { ChangeInfo } from "./schemas_10_Hosted";

/* eslint no-var: 0 */

export var ActivateKeySigningKeyRequest = struct(
  n0,
  _AKSKR,
  0,
  [_HZI, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ActivateKeySigningKeyResponse = struct(n0, _AKSKRc, 0, [_CI], [() => ChangeInfo]);
export var DeactivateKeySigningKeyRequest = struct(
  n0,
  _DKSKR,
  0,
  [_HZI, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeactivateKeySigningKeyResponse = struct(n0, _DKSKRe, 0, [_CI], [() => ChangeInfo]);
export var DeleteKeySigningKeyRequest = struct(
  n0,
  _DKSKRel,
  0,
  [_HZI, _N],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteKeySigningKeyResponse = struct(n0, _DKSKRele, 0, [_CI], [() => ChangeInfo]);
export var DisableHostedZoneDNSSECRequest = struct(n0, _DHZDNSSECR, 0, [_HZI], [[0, 1]]);
export var DisableHostedZoneDNSSECResponse = struct(n0, _DHZDNSSECRi, 0, [_CI], [() => ChangeInfo]);
export var DNSSECNotFound = error(
  n0,
  _DNSSECNF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DNSSECNotFound
);
export var EnableHostedZoneDNSSECRequest = struct(n0, _EHZDNSSECR, 0, [_HZI], [[0, 1]]);
export var EnableHostedZoneDNSSECResponse = struct(n0, _EHZDNSSECRn, 0, [_CI], [() => ChangeInfo]);
export var HostedZonePartiallyDelegated = error(
  n0,
  _HZPD,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __HostedZonePartiallyDelegated
);
export var InvalidKeySigningKeyStatus = error(
  n0,
  _IKSKS,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidKeySigningKeyStatus
);
export var InvalidKMSArn = error(
  n0,
  _IKMSA,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidKMSArn
);
export var InvalidSigningStatus = error(
  n0,
  _ISS,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidSigningStatus
);
export var KeySigningKeyInParentDSRecord = error(
  n0,
  _KSKIPDSR,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __KeySigningKeyInParentDSRecord
);
export var KeySigningKeyInUse = error(
  n0,
  _KSKIU,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KeySigningKeyInUse
);
export var KeySigningKeyWithActiveStatusNotFound = error(
  n0,
  _KSKWASNF,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __KeySigningKeyWithActiveStatusNotFound
);
export var NoSuchKeySigningKey = error(
  n0,
  _NSKSK,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __NoSuchKeySigningKey
);
export var ActivateKeySigningKey = op(
  n0,
  _AKSK,
  {
    [_ht]: ["POST", "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/activate", 200],
  },
  () => ActivateKeySigningKeyRequest,
  () => ActivateKeySigningKeyResponse
);
export var DeactivateKeySigningKey = op(
  n0,
  _DKSK,
  {
    [_ht]: ["POST", "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}/deactivate", 200],
  },
  () => DeactivateKeySigningKeyRequest,
  () => DeactivateKeySigningKeyResponse
);
export var DeleteKeySigningKey = op(
  n0,
  _DKSKe,
  {
    [_ht]: ["DELETE", "/2013-04-01/keysigningkey/{HostedZoneId}/{Name}", 200],
  },
  () => DeleteKeySigningKeyRequest,
  () => DeleteKeySigningKeyResponse
);
export var DisableHostedZoneDNSSEC = op(
  n0,
  _DHZDNSSEC,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/disable-dnssec", 200],
  },
  () => DisableHostedZoneDNSSECRequest,
  () => DisableHostedZoneDNSSECResponse
);
export var EnableHostedZoneDNSSEC = op(
  n0,
  _EHZDNSSEC,
  {
    [_ht]: ["POST", "/2013-04-01/hostedzone/{HostedZoneId}/enable-dnssec", 200],
  },
  () => EnableHostedZoneDNSSECRequest,
  () => EnableHostedZoneDNSSECResponse
);
