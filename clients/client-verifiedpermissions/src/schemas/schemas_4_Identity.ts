// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aTO,
  _au,
  _C,
  _CD,
  _cD,
  _CGCD,
  _CGCI,
  _CI,
  _cI,
  _CIl,
  _CIo,
  _conf,
  _cUPC,
  _CUPCD,
  _CUPCI,
  _det,
  _DIS,
  _DISI,
  _DISO,
  _dU,
  _EIP,
  _eIP,
  _f,
  _gC,
  _gCr,
  _GET,
  _gET,
  _GIS,
  _GISI,
  _GISO,
  _i,
  _IS,
  _iS,
  _ISD,
  _ISF,
  _ISFd,
  _ISI,
  _iSI,
  _ISID,
  _iTO,
  _LIS,
  _LISI,
  _LISO,
  _lUD,
  _mR,
  _nT,
  _OICATCD,
  _OICATCI,
  _oICC,
  _OICCD,
  _OICCI,
  _OICGCD,
  _OICGCI,
  _OICITCD,
  _OICITCI,
  _OICTSD,
  _OICTSI,
  _oII,
  _PET,
  _pET,
  _pIC,
  _pSI,
  _tS,
  _UC,
  _uC,
  _UCGC,
  _UCUPC,
  _UIS,
  _UISI,
  _UISO,
  _UOICATC,
  _UOICC,
  _UOICGC,
  _UOICITC,
  _UOICTS,
  _uPA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Claim = sim(n0, _C, 0, 8);
export var ClientId = sim(n0, _CI, 0, 8);
export var EntityIdPrefix = sim(n0, _EIP, 0, 8);
export var GroupEntityType = sim(n0, _GET, 0, 8);
export var PrincipalEntityType = sim(n0, _PET, 0, 8);
export var CognitoGroupConfigurationDetail = struct(n0, _CGCD, 0, [_gET], [[() => GroupEntityType, 0]]);
export var CognitoGroupConfigurationItem = struct(n0, _CGCI, 0, [_gET], [[() => GroupEntityType, 0]]);
export var CognitoUserPoolConfigurationDetail = struct(
  n0,
  _CUPCD,
  0,
  [_uPA, _cI, _i, _gC],
  [0, [() => ClientIds, 0], 0, [() => CognitoGroupConfigurationDetail, 0]]
);
export var CognitoUserPoolConfigurationItem = struct(
  n0,
  _CUPCI,
  0,
  [_uPA, _cI, _i, _gC],
  [0, [() => ClientIds, 0], 0, [() => CognitoGroupConfigurationItem, 0]]
);
export var DeleteIdentitySourceInput = struct(n0, _DISI, 0, [_pSI, _iSI], [0, 0]);
export var DeleteIdentitySourceOutput = struct(n0, _DISO, 0, [], []);
export var GetIdentitySourceInput = struct(n0, _GISI, 0, [_pSI, _iSI], [0, 0]);
export var GetIdentitySourceOutput = struct(
  n0,
  _GISO,
  0,
  [_cD, _det, _iSI, _lUD, _pSI, _pET, _conf],
  [5, [() => IdentitySourceDetails, 0], 0, 5, 0, [() => PrincipalEntityType, 0], [() => ConfigurationDetail, 0]]
);
export var IdentitySourceDetails = struct(n0, _ISD, 0, [_cI, _uPA, _dU, _oII], [[() => ClientIds, 0], 0, 0, 0]);
export var IdentitySourceFilter = struct(n0, _ISF, 0, [_pET], [[() => PrincipalEntityType, 0]]);
export var IdentitySourceItem = struct(
  n0,
  _ISI,
  0,
  [_cD, _det, _iSI, _lUD, _pSI, _pET, _conf],
  [5, [() => IdentitySourceItemDetails, 0], 0, 5, 0, [() => PrincipalEntityType, 0], [() => ConfigurationItem, 0]]
);
export var IdentitySourceItemDetails = struct(n0, _ISID, 0, [_cI, _uPA, _dU, _oII], [[() => ClientIds, 0], 0, 0, 0]);
export var ListIdentitySourcesInput = struct(
  n0,
  _LISI,
  0,
  [_pSI, _nT, _mR, _f],
  [0, 0, 1, [() => IdentitySourceFilters, 0]]
);
export var ListIdentitySourcesOutput = struct(n0, _LISO, 0, [_nT, _iS], [0, [() => IdentitySources, 0]]);
export var OpenIdConnectAccessTokenConfigurationDetail = struct(
  n0,
  _OICATCD,
  0,
  [_pIC, _au],
  [[() => Claim, 0], 64 | 0]
);
export var OpenIdConnectAccessTokenConfigurationItem = struct(n0, _OICATCI, 0, [_pIC, _au], [[() => Claim, 0], 64 | 0]);
export var OpenIdConnectConfigurationDetail = struct(
  n0,
  _OICCD,
  0,
  [_i, _eIP, _gC, _tS],
  [
    0,
    [() => EntityIdPrefix, 0],
    [() => OpenIdConnectGroupConfigurationDetail, 0],
    [() => OpenIdConnectTokenSelectionDetail, 0],
  ]
);
export var OpenIdConnectConfigurationItem = struct(
  n0,
  _OICCI,
  0,
  [_i, _eIP, _gC, _tS],
  [
    0,
    [() => EntityIdPrefix, 0],
    [() => OpenIdConnectGroupConfigurationItem, 0],
    [() => OpenIdConnectTokenSelectionItem, 0],
  ]
);
export var OpenIdConnectGroupConfigurationDetail = struct(
  n0,
  _OICGCD,
  0,
  [_gCr, _gET],
  [
    [() => Claim, 0],
    [() => GroupEntityType, 0],
  ]
);
export var OpenIdConnectGroupConfigurationItem = struct(
  n0,
  _OICGCI,
  0,
  [_gCr, _gET],
  [
    [() => Claim, 0],
    [() => GroupEntityType, 0],
  ]
);
export var OpenIdConnectIdentityTokenConfigurationDetail = struct(
  n0,
  _OICITCD,
  0,
  [_pIC, _cI],
  [
    [() => Claim, 0],
    [() => ClientIds, 0],
  ]
);
export var OpenIdConnectIdentityTokenConfigurationItem = struct(
  n0,
  _OICITCI,
  0,
  [_pIC, _cI],
  [
    [() => Claim, 0],
    [() => ClientIds, 0],
  ]
);
export var UpdateCognitoGroupConfiguration = struct(n0, _UCGC, 0, [_gET], [[() => GroupEntityType, 0]]);
export var UpdateCognitoUserPoolConfiguration = struct(
  n0,
  _UCUPC,
  0,
  [_uPA, _cI, _gC],
  [0, [() => ClientIds, 0], [() => UpdateCognitoGroupConfiguration, 0]]
);
export var UpdateIdentitySourceInput = struct(
  n0,
  _UISI,
  0,
  [_pSI, _iSI, _uC, _pET],
  [0, 0, [() => UpdateConfiguration, 0], [() => PrincipalEntityType, 0]]
);
export var UpdateIdentitySourceOutput = struct(n0, _UISO, 0, [_cD, _iSI, _lUD, _pSI], [5, 0, 5, 0]);
export var UpdateOpenIdConnectAccessTokenConfiguration = struct(
  n0,
  _UOICATC,
  0,
  [_pIC, _au],
  [[() => Claim, 0], 64 | 0]
);
export var UpdateOpenIdConnectConfiguration = struct(
  n0,
  _UOICC,
  0,
  [_i, _eIP, _gC, _tS],
  [
    0,
    [() => EntityIdPrefix, 0],
    [() => UpdateOpenIdConnectGroupConfiguration, 0],
    [() => UpdateOpenIdConnectTokenSelection, 0],
  ]
);
export var UpdateOpenIdConnectGroupConfiguration = struct(
  n0,
  _UOICGC,
  0,
  [_gCr, _gET],
  [
    [() => Claim, 0],
    [() => GroupEntityType, 0],
  ]
);
export var UpdateOpenIdConnectIdentityTokenConfiguration = struct(
  n0,
  _UOICITC,
  0,
  [_pIC, _cI],
  [
    [() => Claim, 0],
    [() => ClientIds, 0],
  ]
);
export var Audiences = 64 | 0;

export var ClientIds = list(n0, _CIl, 0, [() => ClientId, 0]);
export var IdentitySourceFilters = list(n0, _ISFd, 0, [() => IdentitySourceFilter, 0]);
export var IdentitySources = list(n0, _IS, 0, [() => IdentitySourceItem, 0]);
export var ConfigurationDetail = uni(
  n0,
  _CD,
  0,
  [_cUPC, _oICC],
  [
    [() => CognitoUserPoolConfigurationDetail, 0],
    [() => OpenIdConnectConfigurationDetail, 0],
  ]
);
export var ConfigurationItem = uni(
  n0,
  _CIo,
  0,
  [_cUPC, _oICC],
  [
    [() => CognitoUserPoolConfigurationItem, 0],
    [() => OpenIdConnectConfigurationItem, 0],
  ]
);
export var OpenIdConnectTokenSelectionDetail = uni(
  n0,
  _OICTSD,
  0,
  [_aTO, _iTO],
  [
    [() => OpenIdConnectAccessTokenConfigurationDetail, 0],
    [() => OpenIdConnectIdentityTokenConfigurationDetail, 0],
  ]
);
export var OpenIdConnectTokenSelectionItem = uni(
  n0,
  _OICTSI,
  0,
  [_aTO, _iTO],
  [
    [() => OpenIdConnectAccessTokenConfigurationItem, 0],
    [() => OpenIdConnectIdentityTokenConfigurationItem, 0],
  ]
);
export var UpdateConfiguration = uni(
  n0,
  _UC,
  0,
  [_cUPC, _oICC],
  [
    [() => UpdateCognitoUserPoolConfiguration, 0],
    [() => UpdateOpenIdConnectConfiguration, 0],
  ]
);
export var UpdateOpenIdConnectTokenSelection = uni(
  n0,
  _UOICTS,
  0,
  [_aTO, _iTO],
  [
    [() => UpdateOpenIdConnectAccessTokenConfiguration, 0],
    [() => UpdateOpenIdConnectIdentityTokenConfiguration, 0],
  ]
);
export var DeleteIdentitySource = op(
  n0,
  _DIS,
  2,
  () => DeleteIdentitySourceInput,
  () => DeleteIdentitySourceOutput
);
export var GetIdentitySource = op(
  n0,
  _GIS,
  0,
  () => GetIdentitySourceInput,
  () => GetIdentitySourceOutput
);
export var ListIdentitySources = op(
  n0,
  _LIS,
  0,
  () => ListIdentitySourcesInput,
  () => ListIdentitySourcesOutput
);
export var UpdateIdentitySource = op(
  n0,
  _UIS,
  2,
  () => UpdateIdentitySourceInput,
  () => UpdateIdentitySourceOutput
);
