// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAI,
  _AAIc,
  _AALD,
  _AC,
  _ACU,
  _API,
  _Ar,
  _ar,
  _AS,
  _AT,
  _aU,
  _B,
  _C,
  _CAA,
  _CAAR,
  _CAARr,
  _CAr,
  _CCD,
  _CCDR,
  _CCDRr,
  _CCI,
  _CDI,
  _CDIF,
  _CDIFo,
  _CDIo,
  _CDL,
  _CDLD,
  _CDS,
  _CLF,
  _CLI,
  _CPI,
  _CPIF,
  _CT,
  _D,
  _DBR,
  _DCD,
  _DCDR,
  _DSK,
  _EM,
  _ena,
  _GAA,
  _GAAR,
  _GAARe,
  _GCD,
  _GCDR,
  _GCDRe,
  _GMT,
  _GMTR,
  _GMTRe,
  _h,
  _HNM,
  _hQ,
  _I,
  _IAN,
  _Id,
  _It,
  _LAA,
  _LAAR,
  _LAARi,
  _LCD,
  _LCDR,
  _LCDRi,
  _LMT,
  _LMTR,
  _LMTRi,
  _M,
  _MA,
  _MD,
  _MR,
  _MTLD,
  _MTS,
  _N,
  _NT,
  _O,
  _oA,
  _OAAU,
  _OAC,
  _OACRU,
  _oACRU,
  _OAU,
  _oAU,
  _OF,
  _PCI,
  _PCIF,
  _PRTR,
  _pRTR,
  _PS,
  _PSF,
  _R,
  _RF,
  _sc,
  _SM,
  _SN,
  _SNF,
  _Ta,
  _tEAS,
  _tU,
  _UA,
  _UCD,
  _UCDR,
  _UPC,
  _vI,
  n0,
  TagsMap,
  Unit,
} from "./schemas_0";
import { Classification, Owner, SerialNumber } from "./schemas_3_Credential";
import { OAuthAuthorizationUrl } from "./schemas_18_Account";
import { Brand, Model } from "./schemas_19_Managed";
import { ConnectorDeviceId } from "./schemas_27_List";

/* eslint no-var: 0 */

export var DeviceSpecificKey = sim(n0, _DSK, 0, 8);
export var InternationalArticleNumber = sim(n0, _IAN, 0, 8);
export var MacAddress = sim(n0, _MA, 0, 8);
export var UniversalProductCode = sim(n0, _UPC, 0, 8);
export var AccountAssociationItem = struct(n0, _AAI, 0, [_AAIc, _AS, _EM, _CDIo, _N, _D, _Ar], [0, 0, 0, 0, 0, 0, 0]);
export var AuthConfig = struct(n0, _AC, 0, [_oA], [() => OAuthConfig]);
export var AuthConfigUpdate = struct(n0, _ACU, 0, [_oAU], [() => OAuthUpdate]);
export var ConnectorDestinationSummary = struct(n0, _CDS, 0, [_N, _D, _CCI, _I], [0, 0, 0, 0]);
export var CreateAccountAssociationRequest = struct(
  n0,
  _CAAR,
  0,
  [_CT, _CDIo, _N, _D, _Ta],
  [[0, 4], 0, 0, 0, [() => TagsMap, 0]]
);
export var CreateAccountAssociationResponse = struct(
  n0,
  _CAARr,
  0,
  [_OAAU, _AAIc, _AS, _Ar],
  [[() => OAuthAuthorizationUrl, 0], 0, 0, 0]
);
export var CreateConnectorDestinationRequest = struct(
  n0,
  _CCDR,
  0,
  [_N, _D, _CCI, _AT, _AC, _SM, _CT],
  [0, 0, 0, 0, () => AuthConfig, () => SecretsManager, [0, 4]]
);
export var CreateConnectorDestinationResponse = struct(n0, _CCDRr, 0, [_I], [0]);
export var DeleteConnectorDestinationRequest = struct(n0, _DCDR, 0, [_Id], [[0, 1]]);
export var GetAccountAssociationRequest = struct(n0, _GAAR, 0, [_AAIc], [[0, 1]]);
export var GetAccountAssociationResponse = struct(
  n0,
  _GAARe,
  0,
  [_AAIc, _AS, _EM, _CDIo, _N, _D, _Ar, _OAAU, _Ta],
  [0, 0, 0, 0, 0, 0, 0, [() => OAuthAuthorizationUrl, 0], [() => TagsMap, 0]]
);
export var GetConnectorDestinationRequest = struct(n0, _GCDR, 0, [_Id], [[0, 1]]);
export var GetConnectorDestinationResponse = struct(
  n0,
  _GCDRe,
  0,
  [_N, _D, _CCI, _I, _AT, _AC, _SM, _OACRU],
  [0, 0, 0, 0, 0, () => AuthConfig, () => SecretsManager, 0]
);
export var GetManagedThingRequest = struct(n0, _GMTR, 0, [_Id], [[0, 1]]);
export var GetManagedThingResponse = struct(
  n0,
  _GMTRe,
  0,
  [
    _I,
    _Ar,
    _O,
    _CLI,
    _API,
    _R,
    _PS,
    _N,
    _M,
    _B,
    _SN,
    _UPC,
    _IAN,
    _CPI,
    _CDIo,
    _CDI,
    _DSK,
    _MA,
    _PCI,
    _C,
    _CAr,
    _UA,
    _AA,
    _HNM,
    _MD,
    _Ta,
  ],
  [
    0,
    0,
    [() => Owner, 0],
    0,
    0,
    0,
    0,
    0,
    [() => Model, 0],
    [() => Brand, 0],
    [() => SerialNumber, 0],
    [() => UniversalProductCode, 0],
    [() => InternationalArticleNumber, 0],
    0,
    0,
    [() => ConnectorDeviceId, 0],
    [() => DeviceSpecificKey, 0],
    [() => MacAddress, 0],
    0,
    [() => Classification, 0],
    4,
    4,
    4,
    0,
    128 | 0,
    [() => TagsMap, 0],
  ]
);
export var ListAccountAssociationsRequest = struct(
  n0,
  _LAAR,
  0,
  [_CDIo, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _CDIo,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListAccountAssociationsResponse = struct(
  n0,
  _LAARi,
  0,
  [_It, _NT],
  [() => AccountAssociationListDefinition, 0]
);
export var ListConnectorDestinationsRequest = struct(
  n0,
  _LCDR,
  0,
  [_CCI, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _CCI,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListConnectorDestinationsResponse = struct(
  n0,
  _LCDRi,
  0,
  [_CDL, _NT],
  [() => ConnectorDestinationListDefinition, 0]
);
export var ListManagedThingsRequest = struct(
  n0,
  _LMTR,
  0,
  [_OF, _CLF, _RF, _PCIF, _CPIF, _CDIF, _CDIFo, _SNF, _PSF, _NT, _MR],
  [
    [
      () => Owner,
      {
        [_hQ]: _OF,
      },
    ],
    [
      0,
      {
        [_hQ]: _CLF,
      },
    ],
    [
      0,
      {
        [_hQ]: _RF,
      },
    ],
    [
      0,
      {
        [_hQ]: _PCIF,
      },
    ],
    [
      0,
      {
        [_hQ]: _CPIF,
      },
    ],
    [
      0,
      {
        [_hQ]: _CDIF,
      },
    ],
    [
      () => ConnectorDeviceId,
      {
        [_hQ]: _CDIFo,
      },
    ],
    [
      () => SerialNumber,
      {
        [_hQ]: _SNF,
      },
    ],
    [
      0,
      {
        [_hQ]: _PSF,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListManagedThingsResponse = struct(n0, _LMTRi, 0, [_It, _NT], [[() => ManagedThingListDefinition, 0], 0]);
export var ManagedThingSummary = struct(
  n0,
  _MTS,
  0,
  [_I, _Ar, _API, _B, _C, _CDI, _CPI, _CDIo, _M, _N, _O, _CLI, _PCI, _PS, _R, _SN, _CAr, _UA, _AA],
  [
    0,
    0,
    0,
    [() => Brand, 0],
    [() => Classification, 0],
    [() => ConnectorDeviceId, 0],
    0,
    0,
    [() => Model, 0],
    0,
    [() => Owner, 0],
    0,
    0,
    0,
    0,
    [() => SerialNumber, 0],
    4,
    4,
    4,
  ]
);
export var OAuthConfig = struct(
  n0,
  _OAC,
  0,
  [_aU, _tU, _sc, _tEAS, _oACRU, _pRTR],
  [0, 0, 0, 0, 0, () => ProactiveRefreshTokenRenewal]
);
export var OAuthUpdate = struct(n0, _OAU, 0, [_oACRU, _pRTR], [0, () => ProactiveRefreshTokenRenewal]);
export var ProactiveRefreshTokenRenewal = struct(n0, _PRTR, 0, [_ena, _DBR], [2, 1]);
export var SecretsManager = struct(n0, _SM, 0, [_ar, _vI], [0, 0]);
export var UpdateConnectorDestinationRequest = struct(
  n0,
  _UCDR,
  0,
  [_Id, _D, _N, _AT, _AC, _SM],
  [[0, 1], 0, 0, 0, () => AuthConfigUpdate, () => SecretsManager]
);
export var AccountAssociationListDefinition = list(n0, _AALD, 0, () => AccountAssociationItem);
export var ConnectorDestinationListDefinition = list(n0, _CDLD, 0, () => ConnectorDestinationSummary);
export var ManagedThingListDefinition = list(n0, _MTLD, 0, [() => ManagedThingSummary, 0]);
export var CreateAccountAssociation = op(
  n0,
  _CAA,
  {
    [_h]: ["POST", "/account-associations", 201],
  },
  () => CreateAccountAssociationRequest,
  () => CreateAccountAssociationResponse
);
export var CreateConnectorDestination = op(
  n0,
  _CCD,
  {
    [_h]: ["POST", "/connector-destinations", 201],
  },
  () => CreateConnectorDestinationRequest,
  () => CreateConnectorDestinationResponse
);
export var DeleteConnectorDestination = op(
  n0,
  _DCD,
  {
    [_h]: ["DELETE", "/connector-destinations/{Identifier}", 200],
  },
  () => DeleteConnectorDestinationRequest,
  () => Unit
);
export var GetAccountAssociation = op(
  n0,
  _GAA,
  {
    [_h]: ["GET", "/account-associations/{AccountAssociationId}", 200],
  },
  () => GetAccountAssociationRequest,
  () => GetAccountAssociationResponse
);
export var GetConnectorDestination = op(
  n0,
  _GCD,
  {
    [_h]: ["GET", "/connector-destinations/{Identifier}", 200],
  },
  () => GetConnectorDestinationRequest,
  () => GetConnectorDestinationResponse
);
export var GetManagedThing = op(
  n0,
  _GMT,
  {
    [_h]: ["GET", "/managed-things/{Identifier}", 200],
  },
  () => GetManagedThingRequest,
  () => GetManagedThingResponse
);
export var ListAccountAssociations = op(
  n0,
  _LAA,
  {
    [_h]: ["GET", "/account-associations", 200],
  },
  () => ListAccountAssociationsRequest,
  () => ListAccountAssociationsResponse
);
export var ListConnectorDestinations = op(
  n0,
  _LCD,
  {
    [_h]: ["GET", "/connector-destinations", 200],
  },
  () => ListConnectorDestinationsRequest,
  () => ListConnectorDestinationsResponse
);
export var ListManagedThings = op(
  n0,
  _LMT,
  {
    [_h]: ["GET", "/managed-things", 200],
  },
  () => ListManagedThingsRequest,
  () => ListManagedThingsResponse
);
export var UpdateConnectorDestination = op(
  n0,
  _UCD,
  {
    [_h]: ["PUT", "/connector-destinations/{Identifier}", 204],
  },
  () => UpdateConnectorDestinationRequest,
  () => Unit
);
