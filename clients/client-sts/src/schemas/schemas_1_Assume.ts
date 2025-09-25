// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  ExpiredTokenException as __ExpiredTokenException,
  IDPCommunicationErrorException as __IDPCommunicationErrorException,
  IDPRejectedClaimException as __IDPRejectedClaimException,
  InvalidIdentityTokenException as __InvalidIdentityTokenException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
  PackedPolicyTooLargeException as __PackedPolicyTooLargeException,
  RegionDisabledException as __RegionDisabledException,
} from "../models/index";
import {
  _A,
  _a,
  _Ac,
  _AKI,
  _aKST,
  _aQE,
  _AR,
  _ARI,
  _ARR,
  _ARRs,
  _ARRss,
  _ARRssu,
  _ARs,
  _ARU,
  _ARWSAML,
  _ARWSAMLR,
  _ARWSAMLRs,
  _ARWWI,
  _ARWWIR,
  _ARWWIRs,
  _Au,
  _C,
  _c,
  _CA,
  _cTT,
  _DS,
  _E,
  _e,
  _EI,
  _ETE,
  _FU,
  _FUI,
  _GAKI,
  _GAKIR,
  _GAKIRe,
  _GFT,
  _GFTR,
  _GFTRe,
  _GST,
  _GSTR,
  _GSTRe,
  _hE,
  _I,
  _IDPCEE,
  _IDPRCE,
  _IITE,
  _K,
  _m,
  _MPDE,
  _N,
  _NQ,
  _P,
  _PA,
  _PAr,
  _PAro,
  _PC,
  _PCLT,
  _PCr,
  _pDLT,
  _PDT,
  _PI,
  _PPS,
  _PPTLE,
  _Pr,
  _RA,
  _RDE,
  _RSN,
  _S,
  _SAK,
  _SAMLA,
  _SAMLAT,
  _SFWIT,
  _SI,
  _SN,
  _ST,
  _STe,
  _T,
  _Ta,
  _TC,
  _tLT,
  _TP,
  _TPA,
  _TTK,
  _V,
  _WIT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var accessKeySecretType = sim(n0, _aKST, 0, 8);
export var clientTokenType = sim(n0, _cTT, 0, 8);
export var SAMLAssertionType = sim(n0, _SAMLAT, 0, 8);
export var AssumedRoleUser = struct(n0, _ARU, 0, [_ARI, _A], [0, 0]);
export var AssumeRoleRequest = struct(
  n0,
  _ARR,
  0,
  [_RA, _RSN, _PA, _P, _DS, _T, _TTK, _EI, _SN, _TC, _SI, _PC],
  [0, 0, () => policyDescriptorListType, 0, 1, () => tagListType, 64 | 0, 0, 0, 0, 0, () => ProvidedContextsListType]
);
export var AssumeRoleResponse = struct(
  n0,
  _ARRs,
  0,
  [_C, _ARU, _PPS, _SI],
  [[() => Credentials, 0], () => AssumedRoleUser, 1, 0]
);
export var AssumeRoleWithSAMLRequest = struct(
  n0,
  _ARWSAMLR,
  0,
  [_RA, _PAr, _SAMLA, _PA, _P, _DS],
  [0, 0, [() => SAMLAssertionType, 0], () => policyDescriptorListType, 0, 1]
);
export var AssumeRoleWithSAMLResponse = struct(
  n0,
  _ARWSAMLRs,
  0,
  [_C, _ARU, _PPS, _S, _ST, _I, _Au, _NQ, _SI],
  [[() => Credentials, 0], () => AssumedRoleUser, 1, 0, 0, 0, 0, 0, 0]
);
export var AssumeRoleWithWebIdentityRequest = struct(
  n0,
  _ARWWIR,
  0,
  [_RA, _RSN, _WIT, _PI, _PA, _P, _DS],
  [0, 0, [() => clientTokenType, 0], 0, () => policyDescriptorListType, 0, 1]
);
export var AssumeRoleWithWebIdentityResponse = struct(
  n0,
  _ARWWIRs,
  0,
  [_C, _SFWIT, _ARU, _PPS, _Pr, _Au, _SI],
  [[() => Credentials, 0], 0, () => AssumedRoleUser, 1, 0, 0, 0]
);
export var AssumeRootRequest = struct(n0, _ARRss, 0, [_TP, _TPA, _DS], [0, () => PolicyDescriptorType, 1]);
export var AssumeRootResponse = struct(n0, _ARRssu, 0, [_C, _SI], [[() => Credentials, 0], 0]);
export var Credentials = struct(n0, _C, 0, [_AKI, _SAK, _STe, _E], [0, [() => accessKeySecretType, 0], 0, 4]);
export var ExpiredTokenException = error(
  n0,
  _ETE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ExpiredTokenException`, 400],
  },
  [_m],
  [0],

  __ExpiredTokenException
);
export var FederatedUser = struct(n0, _FU, 0, [_FUI, _A], [0, 0]);
export var GetAccessKeyInfoRequest = struct(n0, _GAKIR, 0, [_AKI], [0]);
export var GetAccessKeyInfoResponse = struct(n0, _GAKIRe, 0, [_Ac], [0]);
export var GetFederationTokenRequest = struct(
  n0,
  _GFTR,
  0,
  [_N, _P, _PA, _DS, _T],
  [0, 0, () => policyDescriptorListType, 1, () => tagListType]
);
export var GetFederationTokenResponse = struct(
  n0,
  _GFTRe,
  0,
  [_C, _FU, _PPS],
  [[() => Credentials, 0], () => FederatedUser, 1]
);
export var GetSessionTokenRequest = struct(n0, _GSTR, 0, [_DS, _SN, _TC], [1, 0, 0]);
export var GetSessionTokenResponse = struct(n0, _GSTRe, 0, [_C], [[() => Credentials, 0]]);
export var IDPCommunicationErrorException = error(
  n0,
  _IDPCEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IDPCommunicationError`, 400],
  },
  [_m],
  [0],

  __IDPCommunicationErrorException
);
export var IDPRejectedClaimException = error(
  n0,
  _IDPRCE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`IDPRejectedClaim`, 403],
  },
  [_m],
  [0],

  __IDPRejectedClaimException
);
export var InvalidIdentityTokenException = error(
  n0,
  _IITE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidIdentityToken`, 400],
  },
  [_m],
  [0],

  __InvalidIdentityTokenException
);
export var MalformedPolicyDocumentException = error(
  n0,
  _MPDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`MalformedPolicyDocument`, 400],
  },
  [_m],
  [0],

  __MalformedPolicyDocumentException
);
export var PackedPolicyTooLargeException = error(
  n0,
  _PPTLE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PackedPolicyTooLarge`, 400],
  },
  [_m],
  [0],

  __PackedPolicyTooLargeException
);
export var PolicyDescriptorType = struct(n0, _PDT, 0, [_a], [0]);
export var ProvidedContext = struct(n0, _PCr, 0, [_PAro, _CA], [0, 0]);
export var RegionDisabledException = error(
  n0,
  _RDE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`RegionDisabledException`, 403],
  },
  [_m],
  [0],

  __RegionDisabledException
);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var policyDescriptorListType = list(n0, _pDLT, 0, () => PolicyDescriptorType);
export var ProvidedContextsListType = list(n0, _PCLT, 0, () => ProvidedContext);
export var tagKeyListType = 64 | 0;

export var tagListType = list(n0, _tLT, 0, () => Tag);
export var AssumeRole = op(
  n0,
  _AR,
  0,
  () => AssumeRoleRequest,
  () => AssumeRoleResponse
);
export var AssumeRoleWithSAML = op(
  n0,
  _ARWSAML,
  0,
  () => AssumeRoleWithSAMLRequest,
  () => AssumeRoleWithSAMLResponse
);
export var AssumeRoleWithWebIdentity = op(
  n0,
  _ARWWI,
  0,
  () => AssumeRoleWithWebIdentityRequest,
  () => AssumeRoleWithWebIdentityResponse
);
export var AssumeRoot = op(
  n0,
  _ARs,
  0,
  () => AssumeRootRequest,
  () => AssumeRootResponse
);
export var GetAccessKeyInfo = op(
  n0,
  _GAKI,
  0,
  () => GetAccessKeyInfoRequest,
  () => GetAccessKeyInfoResponse
);
export var GetFederationToken = op(
  n0,
  _GFT,
  0,
  () => GetFederationTokenRequest,
  () => GetFederationTokenResponse
);
export var GetSessionToken = op(
  n0,
  _GST,
  0,
  () => GetSessionTokenRequest,
  () => GetSessionTokenResponse
);
