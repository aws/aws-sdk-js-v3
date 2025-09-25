// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DuplicateProviderException as __DuplicateProviderException,
  InvalidOAuthFlowException as __InvalidOAuthFlowException,
  ScopeDoesNotExistException as __ScopeDoesNotExistException,
  UnsupportedIdentityProviderException as __UnsupportedIdentityProviderException,
} from "../models/index";
import {
  _AA,
  _ACn,
  _ACT,
  _ADPFU,
  _ADPFUR,
  _ADPFURd,
  _AI,
  _ALPFU,
  _ALPFUR,
  _ALPFURd,
  _AMt,
  _AOAF,
  _AOAFUPC,
  _AOAS,
  _ASV,
  _ATc,
  _ATV,
  _c,
  _CDr,
  _CI,
  _CIP,
  _CIPR,
  _CIPRr,
  _CNl,
  _CSl,
  _CUPC,
  _CUPCR,
  _CUPCRr,
  _CURL,
  _DIP,
  _DIPe,
  _DIPR,
  _DIPRe,
  _DIPRes,
  _DPE,
  _DRURI,
  _DU,
  _DUPCe,
  _DUPCRe,
  _DUPCRes,
  _e,
  _EAF,
  _EIx,
  _EPAUCD,
  _ETR,
  _Fe,
  _GIPBI,
  _GIPBIR,
  _GIPBIRe,
  _GS,
  _hE,
  _II,
  _IId,
  _IOAFE,
  _IP,
  _IPT,
  _IT,
  _ITV,
  _LIP,
  _LIPR,
  _LIPRi,
  _LMD,
  _LURL,
  _m,
  _MR,
  _NT,
  _PAN,
  _PAV,
  _PD,
  _PDr,
  _PLT,
  _PN,
  _Prov,
  _PTr,
  _PUEE,
  _PUIT,
  _RA,
  _RAe,
  _RGPS,
  _RT,
  _RTR,
  _RTRT,
  _RTV,
  _SDNEE,
  _SIP,
  _SU,
  _TVU,
  _TVUT,
  _UDS,
  _UIP,
  _UIPE,
  _UIPR,
  _UIPRp,
  _UPC,
  _UPCT,
  _UPI,
  _Us,
  _UUPC,
  _UUPCR,
  _UUPCRp,
  _WA,
  ClientIdType,
  n0,
  Unit,
} from "./schemas_0";
import { ClientSecretType } from "./schemas_9_UserPool";

/* eslint no-var: 0 */

export var AdminDisableProviderForUserRequest = struct(
  n0,
  _ADPFUR,
  0,
  [_UPI, _Us],
  [0, () => ProviderUserIdentifierType]
);
export var AdminDisableProviderForUserResponse = struct(n0, _ADPFURd, 0, [], []);
export var AdminLinkProviderForUserRequest = struct(
  n0,
  _ALPFUR,
  0,
  [_UPI, _DU, _SU],
  [0, () => ProviderUserIdentifierType, () => ProviderUserIdentifierType]
);
export var AdminLinkProviderForUserResponse = struct(n0, _ALPFURd, 0, [], []);
export var AnalyticsConfigurationType = struct(n0, _ACT, 0, [_AI, _AA, _RA, _EIx, _UDS], [0, 0, 0, 0, 2]);
export var CreateIdentityProviderRequest = struct(
  n0,
  _CIPR,
  0,
  [_UPI, _PN, _PTr, _PD, _AMt, _II],
  [0, 0, 0, 128 | 0, 128 | 0, 64 | 0]
);
export var CreateIdentityProviderResponse = struct(n0, _CIPRr, 0, [_IP], [() => IdentityProviderType]);
export var CreateUserPoolClientRequest = struct(
  n0,
  _CUPCR,
  0,
  [
    _UPI,
    _CNl,
    _GS,
    _RTV,
    _ATV,
    _ITV,
    _TVU,
    _RAe,
    _WA,
    _EAF,
    _SIP,
    _CURL,
    _LURL,
    _DRURI,
    _AOAF,
    _AOAS,
    _AOAFUPC,
    _ACn,
    _PUEE,
    _ETR,
    _EPAUCD,
    _ASV,
    _RTR,
  ],
  [
    0,
    0,
    2,
    1,
    1,
    1,
    () => TokenValidityUnitsType,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    64 | 0,
    64 | 0,
    2,
    () => AnalyticsConfigurationType,
    0,
    2,
    2,
    1,
    () => RefreshTokenRotationType,
  ]
);
export var CreateUserPoolClientResponse = struct(n0, _CUPCRr, 0, [_UPC], [[() => UserPoolClientType, 0]]);
export var DeleteIdentityProviderRequest = struct(n0, _DIPR, 0, [_UPI, _PN], [0, 0]);
export var DescribeIdentityProviderRequest = struct(n0, _DIPRe, 0, [_UPI, _PN], [0, 0]);
export var DescribeIdentityProviderResponse = struct(n0, _DIPRes, 0, [_IP], [() => IdentityProviderType]);
export var DescribeUserPoolClientRequest = struct(n0, _DUPCRe, 0, [_UPI, _CI], [0, [() => ClientIdType, 0]]);
export var DescribeUserPoolClientResponse = struct(n0, _DUPCRes, 0, [_UPC], [[() => UserPoolClientType, 0]]);
export var DuplicateProviderException = error(
  n0,
  _DPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DuplicateProviderException
);
export var GetIdentityProviderByIdentifierRequest = struct(n0, _GIPBIR, 0, [_UPI, _IId], [0, 0]);
export var GetIdentityProviderByIdentifierResponse = struct(n0, _GIPBIRe, 0, [_IP], [() => IdentityProviderType]);
export var IdentityProviderType = struct(
  n0,
  _IPT,
  0,
  [_UPI, _PN, _PTr, _PD, _AMt, _II, _LMD, _CDr],
  [0, 0, 0, 128 | 0, 128 | 0, 64 | 0, 4, 4]
);
export var InvalidOAuthFlowException = error(
  n0,
  _IOAFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidOAuthFlowException
);
export var ListIdentityProvidersRequest = struct(n0, _LIPR, 0, [_UPI, _MR, _NT], [0, 1, 0]);
export var ListIdentityProvidersResponse = struct(n0, _LIPRi, 0, [_Prov, _NT], [() => ProvidersListType, 0]);
export var ProviderDescription = struct(n0, _PDr, 0, [_PN, _PTr, _LMD, _CDr], [0, 0, 4, 4]);
export var ProviderUserIdentifierType = struct(n0, _PUIT, 0, [_PN, _PAN, _PAV], [0, 0, 0]);
export var RefreshTokenRotationType = struct(n0, _RTRT, 0, [_Fe, _RGPS], [0, 1]);
export var ScopeDoesNotExistException = error(
  n0,
  _SDNEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ScopeDoesNotExistException
);
export var TokenValidityUnitsType = struct(n0, _TVUT, 0, [_ATc, _IT, _RT], [0, 0, 0]);
export var UnsupportedIdentityProviderException = error(
  n0,
  _UIPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UnsupportedIdentityProviderException
);
export var UpdateIdentityProviderRequest = struct(
  n0,
  _UIPR,
  0,
  [_UPI, _PN, _PD, _AMt, _II],
  [0, 0, 128 | 0, 128 | 0, 64 | 0]
);
export var UpdateIdentityProviderResponse = struct(n0, _UIPRp, 0, [_IP], [() => IdentityProviderType]);
export var UpdateUserPoolClientRequest = struct(
  n0,
  _UUPCR,
  0,
  [
    _UPI,
    _CI,
    _CNl,
    _RTV,
    _ATV,
    _ITV,
    _TVU,
    _RAe,
    _WA,
    _EAF,
    _SIP,
    _CURL,
    _LURL,
    _DRURI,
    _AOAF,
    _AOAS,
    _AOAFUPC,
    _ACn,
    _PUEE,
    _ETR,
    _EPAUCD,
    _ASV,
    _RTR,
  ],
  [
    0,
    [() => ClientIdType, 0],
    0,
    1,
    1,
    1,
    () => TokenValidityUnitsType,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    64 | 0,
    64 | 0,
    2,
    () => AnalyticsConfigurationType,
    0,
    2,
    2,
    1,
    () => RefreshTokenRotationType,
  ]
);
export var UpdateUserPoolClientResponse = struct(n0, _UUPCRp, 0, [_UPC], [[() => UserPoolClientType, 0]]);
export var UserPoolClientType = struct(
  n0,
  _UPCT,
  0,
  [
    _UPI,
    _CNl,
    _CI,
    _CSl,
    _LMD,
    _CDr,
    _RTV,
    _ATV,
    _ITV,
    _TVU,
    _RAe,
    _WA,
    _EAF,
    _SIP,
    _CURL,
    _LURL,
    _DRURI,
    _AOAF,
    _AOAS,
    _AOAFUPC,
    _ACn,
    _PUEE,
    _ETR,
    _EPAUCD,
    _ASV,
    _RTR,
  ],
  [
    0,
    0,
    [() => ClientIdType, 0],
    [() => ClientSecretType, 0],
    4,
    4,
    1,
    1,
    1,
    () => TokenValidityUnitsType,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    64 | 0,
    64 | 0,
    2,
    () => AnalyticsConfigurationType,
    0,
    2,
    2,
    1,
    () => RefreshTokenRotationType,
  ]
);
export var CallbackURLsListType = 64 | 0;

export var ClientPermissionListType = 64 | 0;

export var ExplicitAuthFlowsListType = 64 | 0;

export var IdpIdentifiersListType = 64 | 0;

export var LogoutURLsListType = 64 | 0;

export var OAuthFlowsType = 64 | 0;

export var ProvidersListType = list(n0, _PLT, 0, () => ProviderDescription);
export var ScopeListType = 64 | 0;

export var SupportedIdentityProvidersListType = 64 | 0;

export var AttributeMappingType = 128 | 0;

export var ProviderDetailsType = 128 | 0;

export var AdminDisableProviderForUser = op(
  n0,
  _ADPFU,
  0,
  () => AdminDisableProviderForUserRequest,
  () => AdminDisableProviderForUserResponse
);
export var AdminLinkProviderForUser = op(
  n0,
  _ALPFU,
  0,
  () => AdminLinkProviderForUserRequest,
  () => AdminLinkProviderForUserResponse
);
export var CreateIdentityProvider = op(
  n0,
  _CIP,
  0,
  () => CreateIdentityProviderRequest,
  () => CreateIdentityProviderResponse
);
export var CreateUserPoolClient = op(
  n0,
  _CUPC,
  0,
  () => CreateUserPoolClientRequest,
  () => CreateUserPoolClientResponse
);
export var DeleteIdentityProvider = op(
  n0,
  _DIP,
  0,
  () => DeleteIdentityProviderRequest,
  () => Unit
);
export var DescribeIdentityProvider = op(
  n0,
  _DIPe,
  0,
  () => DescribeIdentityProviderRequest,
  () => DescribeIdentityProviderResponse
);
export var DescribeUserPoolClient = op(
  n0,
  _DUPCe,
  0,
  () => DescribeUserPoolClientRequest,
  () => DescribeUserPoolClientResponse
);
export var GetIdentityProviderByIdentifier = op(
  n0,
  _GIPBI,
  0,
  () => GetIdentityProviderByIdentifierRequest,
  () => GetIdentityProviderByIdentifierResponse
);
export var ListIdentityProviders = op(
  n0,
  _LIP,
  0,
  () => ListIdentityProvidersRequest,
  () => ListIdentityProvidersResponse
);
export var UpdateIdentityProvider = op(
  n0,
  _UIP,
  0,
  () => UpdateIdentityProviderRequest,
  () => UpdateIdentityProviderResponse
);
export var UpdateUserPoolClient = op(
  n0,
  _UUPC,
  0,
  () => UpdateUserPoolClientRequest,
  () => UpdateUserPoolClientResponse
);
