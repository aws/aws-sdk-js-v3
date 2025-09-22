// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aCu,
  _aT,
  _AU,
  _aU,
  _CCSI,
  _CCSIR,
  _CCSIRr,
  _CGLSMID,
  _CID,
  _cO,
  _cod,
  _CSIS,
  _d,
  _DCSI,
  _DCSIR,
  _DCSIRe,
  _g,
  _GCSI,
  _GCSIR,
  _GCSIRe,
  _GHAC,
  _GLAC,
  _GLAT,
  _gSM,
  _hQ,
  _ht,
  _i,
  _iA,
  _iInst,
  _IS,
  _IU,
  _iU,
  _LCSI,
  _LCSIR,
  _LCSIRi,
  _lUO,
  _mR,
  _na,
  _nT,
  _s,
  _sR,
  _ta,
  _ty,
  _UCSI,
  _UCSIR,
  _UCSIRp,
  _UGHID,
  _UGLSMID,
  _UID,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizationUrl = sim(n0, _AU, 0, 8);
export var GitHubAuthCode = sim(n0, _GHAC, 0, 8);
export var GitLabAccessToken = sim(n0, _GLAT, 0, 8);
export var GitLabAuthCode = sim(n0, _GLAC, 0, 8);
export var InstanceUrl = sim(n0, _IU, 0, 8);
export var CodeSecurityIntegrationSummary = struct(
  n0,
  _CSIS,
  0,
  [_iA, _na, _ty, _s, _sR, _cO, _lUO, _ta],
  [0, 0, 0, 0, 0, 4, 4, 128 | 0]
);
export var CreateCodeSecurityIntegrationRequest = struct(
  n0,
  _CCSIR,
  0,
  [_na, _ty, _d, _ta],
  [0, 0, [() => CreateIntegrationDetail, 0], 128 | 0]
);
export var CreateCodeSecurityIntegrationResponse = struct(
  n0,
  _CCSIRr,
  0,
  [_iA, _s, _aU],
  [0, 0, [() => AuthorizationUrl, 0]]
);
export var CreateGitLabSelfManagedIntegrationDetail = struct(
  n0,
  _CGLSMID,
  0,
  [_iU, _aT],
  [
    [() => InstanceUrl, 0],
    [() => GitLabAccessToken, 0],
  ]
);
export var DeleteCodeSecurityIntegrationRequest = struct(n0, _DCSIR, 0, [_iA], [0]);
export var DeleteCodeSecurityIntegrationResponse = struct(n0, _DCSIRe, 0, [_iA], [0]);
export var GetCodeSecurityIntegrationRequest = struct(n0, _GCSIR, 0, [_iA, _ta], [0, 128 | 0]);
export var GetCodeSecurityIntegrationResponse = struct(
  n0,
  _GCSIRe,
  0,
  [_iA, _na, _ty, _s, _sR, _cO, _lUO, _ta, _aU],
  [0, 0, 0, 0, 0, 4, 4, 128 | 0, [() => AuthorizationUrl, 0]]
);
export var ListCodeSecurityIntegrationsRequest = struct(
  n0,
  _LCSIR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListCodeSecurityIntegrationsResponse = struct(n0, _LCSIRi, 0, [_i, _nT], [() => IntegrationSummaries, 0]);
export var UpdateCodeSecurityIntegrationRequest = struct(
  n0,
  _UCSIR,
  0,
  [_iA, _d],
  [0, [() => UpdateIntegrationDetails, 0]]
);
export var UpdateCodeSecurityIntegrationResponse = struct(n0, _UCSIRp, 0, [_iA, _s], [0, 0]);
export var UpdateGitHubIntegrationDetail = struct(n0, _UGHID, 0, [_cod, _iInst], [[() => GitHubAuthCode, 0], 0]);
export var UpdateGitLabSelfManagedIntegrationDetail = struct(n0, _UGLSMID, 0, [_aCu], [[() => GitLabAuthCode, 0]]);
export var IntegrationSummaries = list(n0, _IS, 0, () => CodeSecurityIntegrationSummary);
export var CreateIntegrationDetail = uni(n0, _CID, 0, [_gSM], [[() => CreateGitLabSelfManagedIntegrationDetail, 0]]);
export var UpdateIntegrationDetails = uni(
  n0,
  _UID,
  0,
  [_gSM, _g],
  [
    [() => UpdateGitLabSelfManagedIntegrationDetail, 0],
    [() => UpdateGitHubIntegrationDetail, 0],
  ]
);
export var CreateCodeSecurityIntegration = op(
  n0,
  _CCSI,
  {
    [_ht]: ["POST", "/codesecurity/integration/create", 200],
  },
  () => CreateCodeSecurityIntegrationRequest,
  () => CreateCodeSecurityIntegrationResponse
);
export var DeleteCodeSecurityIntegration = op(
  n0,
  _DCSI,
  {
    [_ht]: ["POST", "/codesecurity/integration/delete", 200],
  },
  () => DeleteCodeSecurityIntegrationRequest,
  () => DeleteCodeSecurityIntegrationResponse
);
export var GetCodeSecurityIntegration = op(
  n0,
  _GCSI,
  {
    [_ht]: ["POST", "/codesecurity/integration/get", 200],
  },
  () => GetCodeSecurityIntegrationRequest,
  () => GetCodeSecurityIntegrationResponse
);
export var ListCodeSecurityIntegrations = op(
  n0,
  _LCSI,
  {
    [_ht]: ["POST", "/codesecurity/integration/list", 200],
  },
  () => ListCodeSecurityIntegrationsRequest,
  () => ListCodeSecurityIntegrationsResponse
);
export var UpdateCodeSecurityIntegration = op(
  n0,
  _UCSI,
  {
    [_ht]: ["POST", "/codesecurity/integration/update", 200],
  },
  () => UpdateCodeSecurityIntegrationRequest,
  () => UpdateCodeSecurityIntegrationResponse
);
