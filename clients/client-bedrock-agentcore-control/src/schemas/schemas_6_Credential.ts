// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  DecryptionFailure as __DecryptionFailure,
  EncryptionFailure as __EncryptionFailure,
  ResourceLimitExceededException as __ResourceLimitExceededException,
} from "../models/index";
import {
  _aE,
  _aK,
  _AKCP,
  _AKCPI,
  _aKSA,
  _AKT,
  _aSM,
  _c,
  _CAKCP,
  _CAKCPR,
  _CAKCPRr,
  _cI,
  _COCP,
  _COCPR,
  _COCPRr,
  _cOPC,
  _COPCI,
  _COPCO,
  _cPA,
  _cPre,
  _cPV,
  _cS,
  _cSA,
  _CST,
  _cT,
  _DAKCP,
  _DAKCPR,
  _DAKCPRe,
  _DF,
  _DOCP,
  _DOCPR,
  _DOCPRe,
  _dU,
  _e,
  _EF,
  _GAKCPe,
  _GAKCPR,
  _GAKCPRe,
  _GOCP,
  _GOCPR,
  _GOCPRe,
  _gOPC,
  _GOPCI,
  _gOPCi,
  _GOPCIo,
  _GOPCO,
  _GOPCOo,
  _h,
  _hE,
  _is,
  _LAKCP,
  _LAKCPR,
  _LAKCPRi,
  _LOCP,
  _LOCPR,
  _LOCPRi,
  _lUT,
  _m,
  _mOPC,
  _MOPCI,
  _MOPCO,
  _mR,
  _n,
  _nT,
  _OASM,
  _OCP,
  _OCPI,
  _OD,
  _oD,
  _OPCI,
  _oPCI,
  _OPCO,
  _oPCO,
  _RLEE,
  _rT,
  _S,
  _sA,
  _sOPC,
  _sOPCa,
  _SOPCI,
  _SOPCIl,
  _SOPCO,
  _SOPCOl,
  _tE,
  _UAKCP,
  _UAKCPR,
  _UAKCPRp,
  _UOCP,
  _UOCPR,
  _UOCPRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKeyType = sim(n0, _AKT, 0, 8);
export var ClientSecretType = sim(n0, _CST, 0, 8);
export var ApiKeyCredentialProviderItem = struct(n0, _AKCPI, 0, [_n, _cPA, _cT, _lUT], [0, 0, 4, 4]);
export var CreateApiKeyCredentialProviderRequest = struct(n0, _CAKCPR, 0, [_n, _aK], [0, [() => ApiKeyType, 0]]);
export var CreateApiKeyCredentialProviderResponse = struct(n0, _CAKCPRr, 0, [_aKSA, _n, _cPA], [() => Secret, 0, 0]);
export var CreateOauth2CredentialProviderRequest = struct(
  n0,
  _COCPR,
  0,
  [_n, _cPV, _oPCI],
  [0, 0, [() => Oauth2ProviderConfigInput, 0]]
);
export var CreateOauth2CredentialProviderResponse = struct(n0, _COCPRr, 0, [_cSA, _n, _cPA], [() => Secret, 0, 0]);
export var CustomOauth2ProviderConfigInput = struct(
  n0,
  _COPCI,
  0,
  [_oD, _cI, _cS],
  [() => Oauth2Discovery, 0, [() => ClientSecretType, 0]]
);
export var CustomOauth2ProviderConfigOutput = struct(n0, _COPCO, 0, [_oD], [() => Oauth2Discovery]);
export var DecryptionFailure = error(
  n0,
  _DF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __DecryptionFailure
);
export var DeleteApiKeyCredentialProviderRequest = struct(n0, _DAKCPR, 0, [_n], [0]);
export var DeleteApiKeyCredentialProviderResponse = struct(n0, _DAKCPRe, 0, [], []);
export var DeleteOauth2CredentialProviderRequest = struct(n0, _DOCPR, 0, [_n], [0]);
export var DeleteOauth2CredentialProviderResponse = struct(n0, _DOCPRe, 0, [], []);
export var EncryptionFailure = error(
  n0,
  _EF,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __EncryptionFailure
);
export var GetApiKeyCredentialProviderRequest = struct(n0, _GAKCPR, 0, [_n], [0]);
export var GetApiKeyCredentialProviderResponse = struct(
  n0,
  _GAKCPRe,
  0,
  [_aKSA, _n, _cPA, _cT, _lUT],
  [() => Secret, 0, 0, 4, 4]
);
export var GetOauth2CredentialProviderRequest = struct(n0, _GOCPR, 0, [_n], [0]);
export var GetOauth2CredentialProviderResponse = struct(
  n0,
  _GOCPRe,
  0,
  [_cSA, _n, _cPA, _cPV, _oPCO, _cT, _lUT],
  [() => Secret, 0, 0, 0, () => Oauth2ProviderConfigOutput, 4, 4]
);
export var GithubOauth2ProviderConfigInput = struct(n0, _GOPCI, 0, [_cI, _cS], [0, [() => ClientSecretType, 0]]);
export var GithubOauth2ProviderConfigOutput = struct(n0, _GOPCO, 0, [_oD], [() => Oauth2Discovery]);
export var GoogleOauth2ProviderConfigInput = struct(n0, _GOPCIo, 0, [_cI, _cS], [0, [() => ClientSecretType, 0]]);
export var GoogleOauth2ProviderConfigOutput = struct(n0, _GOPCOo, 0, [_oD], [() => Oauth2Discovery]);
export var ListApiKeyCredentialProvidersRequest = struct(n0, _LAKCPR, 0, [_nT, _mR], [0, 1]);
export var ListApiKeyCredentialProvidersResponse = struct(
  n0,
  _LAKCPRi,
  0,
  [_cPre, _nT],
  [() => ApiKeyCredentialProviders, 0]
);
export var ListOauth2CredentialProvidersRequest = struct(n0, _LOCPR, 0, [_nT, _mR], [0, 1]);
export var ListOauth2CredentialProvidersResponse = struct(
  n0,
  _LOCPRi,
  0,
  [_cPre, _nT],
  [() => Oauth2CredentialProviders, 0]
);
export var MicrosoftOauth2ProviderConfigInput = struct(n0, _MOPCI, 0, [_cI, _cS], [0, [() => ClientSecretType, 0]]);
export var MicrosoftOauth2ProviderConfigOutput = struct(n0, _MOPCO, 0, [_oD], [() => Oauth2Discovery]);
export var Oauth2AuthorizationServerMetadata = struct(n0, _OASM, 0, [_is, _aE, _tE, _rT], [0, 0, 0, 64 | 0]);
export var Oauth2CredentialProviderItem = struct(n0, _OCPI, 0, [_n, _cPV, _cPA, _cT, _lUT], [0, 0, 0, 4, 4]);
export var ResourceLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ResourceLimitExceededException
);
export var SalesforceOauth2ProviderConfigInput = struct(n0, _SOPCI, 0, [_cI, _cS], [0, [() => ClientSecretType, 0]]);
export var SalesforceOauth2ProviderConfigOutput = struct(n0, _SOPCO, 0, [_oD], [() => Oauth2Discovery]);
export var Secret = struct(n0, _S, 0, [_sA], [0]);
export var SlackOauth2ProviderConfigInput = struct(n0, _SOPCIl, 0, [_cI, _cS], [0, [() => ClientSecretType, 0]]);
export var SlackOauth2ProviderConfigOutput = struct(n0, _SOPCOl, 0, [_oD], [() => Oauth2Discovery]);
export var UpdateApiKeyCredentialProviderRequest = struct(n0, _UAKCPR, 0, [_n, _aK], [0, [() => ApiKeyType, 0]]);
export var UpdateApiKeyCredentialProviderResponse = struct(
  n0,
  _UAKCPRp,
  0,
  [_aKSA, _n, _cPA, _cT, _lUT],
  [() => Secret, 0, 0, 4, 4]
);
export var UpdateOauth2CredentialProviderRequest = struct(
  n0,
  _UOCPR,
  0,
  [_n, _cPV, _oPCI],
  [0, 0, [() => Oauth2ProviderConfigInput, 0]]
);
export var UpdateOauth2CredentialProviderResponse = struct(
  n0,
  _UOCPRp,
  0,
  [_cSA, _n, _cPV, _cPA, _oPCO, _cT, _lUT],
  [() => Secret, 0, 0, 0, () => Oauth2ProviderConfigOutput, 4, 4]
);
export var ApiKeyCredentialProviders = list(n0, _AKCP, 0, () => ApiKeyCredentialProviderItem);
export var Oauth2CredentialProviders = list(n0, _OCP, 0, () => Oauth2CredentialProviderItem);
export var ResponseListType = 64 | 0;

export var Oauth2Discovery = uni(n0, _OD, 0, [_dU, _aSM], [0, () => Oauth2AuthorizationServerMetadata]);
export var Oauth2ProviderConfigInput = uni(
  n0,
  _OPCI,
  0,
  [_cOPC, _gOPC, _gOPCi, _sOPC, _sOPCa, _mOPC],
  [
    [() => CustomOauth2ProviderConfigInput, 0],
    [() => GoogleOauth2ProviderConfigInput, 0],
    [() => GithubOauth2ProviderConfigInput, 0],
    [() => SlackOauth2ProviderConfigInput, 0],
    [() => SalesforceOauth2ProviderConfigInput, 0],
    [() => MicrosoftOauth2ProviderConfigInput, 0],
  ]
);
export var Oauth2ProviderConfigOutput = uni(
  n0,
  _OPCO,
  0,
  [_cOPC, _gOPC, _gOPCi, _sOPC, _sOPCa, _mOPC],
  [
    () => CustomOauth2ProviderConfigOutput,
    () => GoogleOauth2ProviderConfigOutput,
    () => GithubOauth2ProviderConfigOutput,
    () => SlackOauth2ProviderConfigOutput,
    () => SalesforceOauth2ProviderConfigOutput,
    () => MicrosoftOauth2ProviderConfigOutput,
  ]
);
export var CreateApiKeyCredentialProvider = op(
  n0,
  _CAKCP,
  {
    [_h]: ["POST", "/identities/CreateApiKeyCredentialProvider", 200],
  },
  () => CreateApiKeyCredentialProviderRequest,
  () => CreateApiKeyCredentialProviderResponse
);
export var CreateOauth2CredentialProvider = op(
  n0,
  _COCP,
  {
    [_h]: ["POST", "/identities/CreateOauth2CredentialProvider", 200],
  },
  () => CreateOauth2CredentialProviderRequest,
  () => CreateOauth2CredentialProviderResponse
);
export var DeleteApiKeyCredentialProvider = op(
  n0,
  _DAKCP,
  {
    [_h]: ["POST", "/identities/DeleteApiKeyCredentialProvider", 200],
  },
  () => DeleteApiKeyCredentialProviderRequest,
  () => DeleteApiKeyCredentialProviderResponse
);
export var DeleteOauth2CredentialProvider = op(
  n0,
  _DOCP,
  {
    [_h]: ["POST", "/identities/DeleteOauth2CredentialProvider", 200],
  },
  () => DeleteOauth2CredentialProviderRequest,
  () => DeleteOauth2CredentialProviderResponse
);
export var GetApiKeyCredentialProvider = op(
  n0,
  _GAKCPe,
  {
    [_h]: ["POST", "/identities/GetApiKeyCredentialProvider", 200],
  },
  () => GetApiKeyCredentialProviderRequest,
  () => GetApiKeyCredentialProviderResponse
);
export var GetOauth2CredentialProvider = op(
  n0,
  _GOCP,
  {
    [_h]: ["POST", "/identities/GetOauth2CredentialProvider", 200],
  },
  () => GetOauth2CredentialProviderRequest,
  () => GetOauth2CredentialProviderResponse
);
export var ListApiKeyCredentialProviders = op(
  n0,
  _LAKCP,
  {
    [_h]: ["POST", "/identities/ListApiKeyCredentialProviders", 200],
  },
  () => ListApiKeyCredentialProvidersRequest,
  () => ListApiKeyCredentialProvidersResponse
);
export var ListOauth2CredentialProviders = op(
  n0,
  _LOCP,
  {
    [_h]: ["POST", "/identities/ListOauth2CredentialProviders", 200],
  },
  () => ListOauth2CredentialProvidersRequest,
  () => ListOauth2CredentialProvidersResponse
);
export var UpdateApiKeyCredentialProvider = op(
  n0,
  _UAKCP,
  {
    [_h]: ["POST", "/identities/UpdateApiKeyCredentialProvider", 200],
  },
  () => UpdateApiKeyCredentialProviderRequest,
  () => UpdateApiKeyCredentialProviderResponse
);
export var UpdateOauth2CredentialProvider = op(
  n0,
  _UOCP,
  {
    [_h]: ["POST", "/identities/UpdateOauth2CredentialProvider", 200],
  },
  () => UpdateOauth2CredentialProviderRequest,
  () => UpdateOauth2CredentialProviderResponse
);
