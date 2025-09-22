// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _CIP,
  _CIPR,
  _CIPRr,
  _cT,
  _DIP,
  _DIPR,
  _DIPRe,
  _GIP,
  _GIPR,
  _GIPRe,
  _h,
  _hQ,
  _IP,
  _iP,
  _iPA,
  _IPD,
  _iPD,
  _iPd,
  _IPL,
  _IPN,
  _iPN,
  _IPS,
  _iPT,
  _LIP,
  _LIPR,
  _LIPRi,
  _mR,
  _nT,
  _pA,
  _ta,
  _UIP,
  _UIPR,
  _UIPRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var IdentityProviderName = sim(n0, _IPN, 0, 8);
export var CreateIdentityProviderRequest = struct(
  n0,
  _CIPR,
  0,
  [_pA, _iPN, _iPT, _iPD, _cT, _ta],
  [0, [() => IdentityProviderName, 0], 0, [() => IdentityProviderDetails, 0], [0, 4], [() => TagList, 0]]
);
export var CreateIdentityProviderResponse = struct(n0, _CIPRr, 0, [_iPA], [0]);
export var DeleteIdentityProviderRequest = struct(n0, _DIPR, 0, [_iPA], [[0, 1]]);
export var DeleteIdentityProviderResponse = struct(n0, _DIPRe, 0, [], []);
export var GetIdentityProviderRequest = struct(n0, _GIPR, 0, [_iPA], [[0, 1]]);
export var GetIdentityProviderResponse = struct(n0, _GIPRe, 0, [_iP], [[() => IdentityProvider, 0]]);
export var IdentityProvider = struct(
  n0,
  _IP,
  0,
  [_iPA, _iPN, _iPT, _iPD],
  [0, [() => IdentityProviderName, 0], 0, [() => IdentityProviderDetails, 0]]
);
export var IdentityProviderSummary = struct(n0, _IPS, 0, [_iPA, _iPN, _iPT], [0, [() => IdentityProviderName, 0], 0]);
export var ListIdentityProvidersRequest = struct(
  n0,
  _LIPR,
  0,
  [_nT, _mR, _pA],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListIdentityProvidersResponse = struct(n0, _LIPRi, 0, [_nT, _iPd], [0, [() => IdentityProviderList, 0]]);
export var UpdateIdentityProviderRequest = struct(
  n0,
  _UIPR,
  0,
  [_iPA, _iPN, _iPT, _iPD, _cT],
  [[0, 1], [() => IdentityProviderName, 0], 0, [() => IdentityProviderDetails, 0], [0, 4]]
);
export var UpdateIdentityProviderResponse = struct(n0, _UIPRp, 0, [_iP], [[() => IdentityProvider, 0]]);
export var IdentityProviderList = list(n0, _IPL, 0, [() => IdentityProviderSummary, 0]);
export var IdentityProviderDetails = map(n0, _IPD, 8, 0, 0);
export var CreateIdentityProvider = op(
  n0,
  _CIP,
  {
    [_h]: ["POST", "/identityProviders", 200],
  },
  () => CreateIdentityProviderRequest,
  () => CreateIdentityProviderResponse
);
export var DeleteIdentityProvider = op(
  n0,
  _DIP,
  {
    [_h]: ["DELETE", "/identityProviders/{identityProviderArn+}", 200],
  },
  () => DeleteIdentityProviderRequest,
  () => DeleteIdentityProviderResponse
);
export var GetIdentityProvider = op(
  n0,
  _GIP,
  {
    [_h]: ["GET", "/identityProviders/{identityProviderArn+}", 200],
  },
  () => GetIdentityProviderRequest,
  () => GetIdentityProviderResponse
);
export var ListIdentityProviders = op(
  n0,
  _LIP,
  {
    [_h]: ["GET", "/portals/{portalArn+}/identityProviders", 200],
  },
  () => ListIdentityProvidersRequest,
  () => ListIdentityProvidersResponse
);
export var UpdateIdentityProvider = op(
  n0,
  _UIP,
  {
    [_h]: ["PATCH", "/identityProviders/{identityProviderArn+}", 200],
  },
  () => UpdateIdentityProviderRequest,
  () => UpdateIdentityProviderResponse
);
