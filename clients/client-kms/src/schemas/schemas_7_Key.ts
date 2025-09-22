// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  CloudHsmClusterInUseException as __CloudHsmClusterInUseException,
  CloudHsmClusterInvalidConfigurationException as __CloudHsmClusterInvalidConfigurationException,
  CloudHsmClusterNotActiveException as __CloudHsmClusterNotActiveException,
  CloudHsmClusterNotFoundException as __CloudHsmClusterNotFoundException,
  CloudHsmClusterNotRelatedException as __CloudHsmClusterNotRelatedException,
  CustomKeyStoreHasCMKsException as __CustomKeyStoreHasCMKsException,
  CustomKeyStoreInvalidStateException as __CustomKeyStoreInvalidStateException,
  CustomKeyStoreNameInUseException as __CustomKeyStoreNameInUseException,
  CustomKeyStoreNotFoundException as __CustomKeyStoreNotFoundException,
  IncorrectTrustAnchorException as __IncorrectTrustAnchorException,
  XksKeyAlreadyInUseException as __XksKeyAlreadyInUseException,
  XksKeyInvalidConfigurationException as __XksKeyInvalidConfigurationException,
  XksKeyNotFoundException as __XksKeyNotFoundException,
  XksProxyIncorrectAuthenticationCredentialException as __XksProxyIncorrectAuthenticationCredentialException,
  XksProxyInvalidConfigurationException as __XksProxyInvalidConfigurationException,
  XksProxyInvalidResponseException as __XksProxyInvalidResponseException,
  XksProxyUriEndpointInUseException as __XksProxyUriEndpointInUseException,
  XksProxyUriInUseException as __XksProxyUriInUseException,
  XksProxyUriUnreachableException as __XksProxyUriUnreachableException,
  XksProxyVpcEndpointServiceInUseException as __XksProxyVpcEndpointServiceInUseException,
  XksProxyVpcEndpointServiceInvalidConfigurationException as __XksProxyVpcEndpointServiceInvalidConfigurationException,
  XksProxyVpcEndpointServiceNotFoundException as __XksProxyVpcEndpointServiceNotFoundException,
} from "../models/index";
import {
  _A,
  _AKI,
  _aQE,
  _AWSAI,
  _BPLSC,
  _c,
  _CCKS,
  _CCKSR,
  _CCKSr,
  _CCKSRo,
  _CCKSRr,
  _CCKSRre,
  _CD,
  _CEC,
  _CHCI,
  _CHCICE,
  _CHCIUE,
  _CHCNAE,
  _CHCNFE,
  _CHCNRE,
  _CK,
  _CKMI,
  _CKR,
  _CKRr,
  _CKS,
  _CKSHCMKE,
  _CKSI,
  _CKSISE,
  _CKSL,
  _CKSLE,
  _CKSN,
  _CKSNFE,
  _CKSNIUE,
  _CKST,
  _CMKS,
  _Co,
  _CS,
  _D,
  _DCKS,
  _DCKSe,
  _DCKSi,
  _DCKSR,
  _DCKSRe,
  _DCKSRes,
  _DCKSResc,
  _DCKSRi,
  _DCKSRis,
  _DD,
  _DK,
  _DKR,
  _DKRe,
  _E,
  _e,
  _EAn,
  _EM,
  _GT,
  _hE,
  _I,
  _ITAE,
  _KAAe,
  _KI,
  _KM,
  _KMe,
  _KS,
  _KSe,
  _KSP,
  _KSPT,
  _KU,
  _L,
  _M,
  _m,
  _MAa,
  _MR,
  _MRC,
  _MRK,
  _MRKL,
  _MRKT,
  _NCKSN,
  _NM,
  _Or,
  _P,
  _PDWID,
  _PKr,
  _Re,
  _RK,
  _RKe,
  _RKM,
  _RKR,
  _RKRe,
  _RPe,
  _RR,
  _RSAK,
  _RT,
  _SA,
  _T,
  _TAC,
  _Tr,
  _UCKS,
  _UCKSR,
  _UCKSRp,
  _UE,
  _UP,
  _VESN,
  _VT,
  _XKAIUE,
  _XKC,
  _XKCT,
  _XKI,
  _XKICE,
  _XKNFE,
  _XPAAKIT,
  _XPAC,
  _XPACT,
  _XPARSAKT,
  _XPC,
  _XPCk,
  _XPCT,
  _XPIACE,
  _XPICE,
  _XPIRE,
  _XPUE,
  _XPUEIUE,
  _XPUIUE,
  _XPUP,
  _XPUUE,
  _XPVESICE,
  _XPVESIUE,
  _XPVESN,
  _XPVESNFE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_1_Resource";

/* eslint no-var: 0 */

export var KeyStorePasswordType = sim(n0, _KSPT, 0, 8);
export var XksProxyAuthenticationAccessKeyIdType = sim(n0, _XPAAKIT, 0, 8);
export var XksProxyAuthenticationRawSecretAccessKeyType = sim(n0, _XPARSAKT, 0, 8);
export var CloudHsmClusterInUseException = error(
  n0,
  _CHCIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudHsmClusterInUseException`, 400],
  },
  [_m],
  [0],

  __CloudHsmClusterInUseException
);
export var CloudHsmClusterInvalidConfigurationException = error(
  n0,
  _CHCICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudHsmClusterInvalidConfigurationException`, 400],
  },
  [_m],
  [0],

  __CloudHsmClusterInvalidConfigurationException
);
export var CloudHsmClusterNotActiveException = error(
  n0,
  _CHCNAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudHsmClusterNotActiveException`, 400],
  },
  [_m],
  [0],

  __CloudHsmClusterNotActiveException
);
export var CloudHsmClusterNotFoundException = error(
  n0,
  _CHCNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudHsmClusterNotFoundException`, 400],
  },
  [_m],
  [0],

  __CloudHsmClusterNotFoundException
);
export var CloudHsmClusterNotRelatedException = error(
  n0,
  _CHCNRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudHsmClusterNotRelatedException`, 400],
  },
  [_m],
  [0],

  __CloudHsmClusterNotRelatedException
);
export var ConnectCustomKeyStoreRequest = struct(n0, _CCKSR, 0, [_CKSI], [0]);
export var ConnectCustomKeyStoreResponse = struct(n0, _CCKSRo, 0, [], []);
export var CreateCustomKeyStoreRequest = struct(
  n0,
  _CCKSRr,
  0,
  [_CKSN, _CHCI, _TAC, _KSP, _CKST, _XPUE, _XPUP, _XPVESN, _XPAC, _XPC],
  [0, 0, 0, [() => KeyStorePasswordType, 0], 0, 0, 0, 0, [() => XksProxyAuthenticationCredentialType, 0], 0]
);
export var CreateCustomKeyStoreResponse = struct(n0, _CCKSRre, 0, [_CKSI], [0]);
export var CreateKeyRequest = struct(
  n0,
  _CKR,
  0,
  [_P, _D, _KU, _CMKS, _KS, _Or, _CKSI, _BPLSC, _T, _MR, _XKI],
  [0, 0, 0, 0, 0, 0, 0, 2, () => TagList, 2, 0]
);
export var CreateKeyResponse = struct(n0, _CKRr, 0, [_KM], [() => KeyMetadata]);
export var CustomKeyStoreHasCMKsException = error(
  n0,
  _CKSHCMKE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomKeyStoreHasCMKsException`, 400],
  },
  [_m],
  [0],

  __CustomKeyStoreHasCMKsException
);
export var CustomKeyStoreInvalidStateException = error(
  n0,
  _CKSISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomKeyStoreInvalidStateException`, 400],
  },
  [_m],
  [0],

  __CustomKeyStoreInvalidStateException
);
export var CustomKeyStoreNameInUseException = error(
  n0,
  _CKSNIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomKeyStoreNameInUseException`, 400],
  },
  [_m],
  [0],

  __CustomKeyStoreNameInUseException
);
export var CustomKeyStoreNotFoundException = error(
  n0,
  _CKSNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomKeyStoreNotFoundException`, 400],
  },
  [_m],
  [0],

  __CustomKeyStoreNotFoundException
);
export var CustomKeyStoresListEntry = struct(
  n0,
  _CKSLE,
  0,
  [_CKSI, _CKSN, _CHCI, _TAC, _CS, _CEC, _CD, _CKST, _XPCk],
  [0, 0, 0, 0, 0, 0, 4, 0, [() => XksProxyConfigurationType, 0]]
);
export var DeleteCustomKeyStoreRequest = struct(n0, _DCKSR, 0, [_CKSI], [0]);
export var DeleteCustomKeyStoreResponse = struct(n0, _DCKSRe, 0, [], []);
export var DescribeCustomKeyStoresRequest = struct(n0, _DCKSRes, 0, [_CKSI, _CKSN, _L, _M], [0, 0, 1, 0]);
export var DescribeCustomKeyStoresResponse = struct(
  n0,
  _DCKSResc,
  0,
  [_CKS, _NM, _Tr],
  [[() => CustomKeyStoresList, 0], 0, 2]
);
export var DescribeKeyRequest = struct(n0, _DKR, 0, [_KI, _GT], [0, 64 | 0]);
export var DescribeKeyResponse = struct(n0, _DKRe, 0, [_KM], [() => KeyMetadata]);
export var DisconnectCustomKeyStoreRequest = struct(n0, _DCKSRi, 0, [_CKSI], [0]);
export var DisconnectCustomKeyStoreResponse = struct(n0, _DCKSRis, 0, [], []);
export var IncorrectTrustAnchorException = error(
  n0,
  _ITAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IncorrectTrustAnchorException`, 400],
  },
  [_m],
  [0],

  __IncorrectTrustAnchorException
);
export var KeyMetadata = struct(
  n0,
  _KM,
  0,
  [
    _AWSAI,
    _KI,
    _A,
    _CD,
    _E,
    _D,
    _KU,
    _KSe,
    _DD,
    _VT,
    _Or,
    _CKSI,
    _CHCI,
    _EM,
    _KMe,
    _CMKS,
    _KS,
    _EAn,
    _SA,
    _KAAe,
    _MR,
    _MRC,
    _PDWID,
    _MAa,
    _XKC,
    _CKMI,
  ],
  [
    0,
    0,
    0,
    4,
    2,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    64 | 0,
    2,
    () => MultiRegionConfiguration,
    1,
    64 | 0,
    () => XksKeyConfigurationType,
    0,
  ]
);
export var MultiRegionConfiguration = struct(
  n0,
  _MRC,
  0,
  [_MRKT, _PKr, _RK],
  [0, () => MultiRegionKey, () => MultiRegionKeyList]
);
export var MultiRegionKey = struct(n0, _MRK, 0, [_A, _Re], [0, 0]);
export var ReplicateKeyRequest = struct(n0, _RKR, 0, [_KI, _RR, _P, _BPLSC, _D, _T], [0, 0, 0, 2, 0, () => TagList]);
export var ReplicateKeyResponse = struct(n0, _RKRe, 0, [_RKM, _RPe, _RT], [() => KeyMetadata, 0, () => TagList]);
export var UpdateCustomKeyStoreRequest = struct(
  n0,
  _UCKSR,
  0,
  [_CKSI, _NCKSN, _KSP, _CHCI, _XPUE, _XPUP, _XPVESN, _XPAC, _XPC],
  [0, 0, [() => KeyStorePasswordType, 0], 0, 0, 0, 0, [() => XksProxyAuthenticationCredentialType, 0], 0]
);
export var UpdateCustomKeyStoreResponse = struct(n0, _UCKSRp, 0, [], []);
export var XksKeyAlreadyInUseException = error(
  n0,
  _XKAIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksKeyAlreadyInUse`, 400],
  },
  [_m],
  [0],

  __XksKeyAlreadyInUseException
);
export var XksKeyConfigurationType = struct(n0, _XKCT, 0, [_I], [0]);
export var XksKeyInvalidConfigurationException = error(
  n0,
  _XKICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksKeyInvalidConfiguration`, 400],
  },
  [_m],
  [0],

  __XksKeyInvalidConfigurationException
);
export var XksKeyNotFoundException = error(
  n0,
  _XKNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksKeyNotFoundException`, 400],
  },
  [_m],
  [0],

  __XksKeyNotFoundException
);
export var XksProxyAuthenticationCredentialType = struct(
  n0,
  _XPACT,
  0,
  [_AKI, _RSAK],
  [
    [() => XksProxyAuthenticationAccessKeyIdType, 0],
    [() => XksProxyAuthenticationRawSecretAccessKeyType, 0],
  ]
);
export var XksProxyConfigurationType = struct(
  n0,
  _XPCT,
  0,
  [_Co, _AKI, _UE, _UP, _VESN],
  [0, [() => XksProxyAuthenticationAccessKeyIdType, 0], 0, 0, 0]
);
export var XksProxyIncorrectAuthenticationCredentialException = error(
  n0,
  _XPIACE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyIncorrectAuthenticationCredentialException`, 400],
  },
  [_m],
  [0],

  __XksProxyIncorrectAuthenticationCredentialException
);
export var XksProxyInvalidConfigurationException = error(
  n0,
  _XPICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyInvalidConfigurationException`, 400],
  },
  [_m],
  [0],

  __XksProxyInvalidConfigurationException
);
export var XksProxyInvalidResponseException = error(
  n0,
  _XPIRE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyInvalidResponseException`, 400],
  },
  [_m],
  [0],

  __XksProxyInvalidResponseException
);
export var XksProxyUriEndpointInUseException = error(
  n0,
  _XPUEIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyUriEndpointInUseException`, 400],
  },
  [_m],
  [0],

  __XksProxyUriEndpointInUseException
);
export var XksProxyUriInUseException = error(
  n0,
  _XPUIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyUriInUseException`, 400],
  },
  [_m],
  [0],

  __XksProxyUriInUseException
);
export var XksProxyUriUnreachableException = error(
  n0,
  _XPUUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyUriUnreachableException`, 400],
  },
  [_m],
  [0],

  __XksProxyUriUnreachableException
);
export var XksProxyVpcEndpointServiceInUseException = error(
  n0,
  _XPVESIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyVpcEndpointServiceInUseException`, 400],
  },
  [_m],
  [0],

  __XksProxyVpcEndpointServiceInUseException
);
export var XksProxyVpcEndpointServiceInvalidConfigurationException = error(
  n0,
  _XPVESICE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyVpcEndpointServiceInvalidConfigurationException`, 400],
  },
  [_m],
  [0],

  __XksProxyVpcEndpointServiceInvalidConfigurationException
);
export var XksProxyVpcEndpointServiceNotFoundException = error(
  n0,
  _XPVESNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`XksProxyVpcEndpointServiceNotFoundException`, 400],
  },
  [_m],
  [0],

  __XksProxyVpcEndpointServiceNotFoundException
);
export var CustomKeyStoresList = list(n0, _CKSL, 0, [() => CustomKeyStoresListEntry, 0]);
export var MacAlgorithmSpecList = 64 | 0;

export var MultiRegionKeyList = list(n0, _MRKL, 0, () => MultiRegionKey);
export var ConnectCustomKeyStore = op(
  n0,
  _CCKS,
  0,
  () => ConnectCustomKeyStoreRequest,
  () => ConnectCustomKeyStoreResponse
);
export var CreateCustomKeyStore = op(
  n0,
  _CCKSr,
  0,
  () => CreateCustomKeyStoreRequest,
  () => CreateCustomKeyStoreResponse
);
export var CreateKey = op(
  n0,
  _CK,
  0,
  () => CreateKeyRequest,
  () => CreateKeyResponse
);
export var DeleteCustomKeyStore = op(
  n0,
  _DCKS,
  0,
  () => DeleteCustomKeyStoreRequest,
  () => DeleteCustomKeyStoreResponse
);
export var DescribeCustomKeyStores = op(
  n0,
  _DCKSe,
  0,
  () => DescribeCustomKeyStoresRequest,
  () => DescribeCustomKeyStoresResponse
);
export var DescribeKey = op(
  n0,
  _DK,
  0,
  () => DescribeKeyRequest,
  () => DescribeKeyResponse
);
export var DisconnectCustomKeyStore = op(
  n0,
  _DCKSi,
  0,
  () => DisconnectCustomKeyStoreRequest,
  () => DisconnectCustomKeyStoreResponse
);
export var ReplicateKey = op(
  n0,
  _RKe,
  0,
  () => ReplicateKeyRequest,
  () => ReplicateKeyResponse
);
export var UpdateCustomKeyStore = op(
  n0,
  _UCKS,
  0,
  () => UpdateCustomKeyStoreRequest,
  () => UpdateCustomKeyStoreResponse
);
