// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aA,
  _ABCC,
  _aBCC,
  _aBCP,
  _aI,
  _Ap,
  _ap,
  _aSDCP,
  _aSDIAMR,
  _AT,
  _aT,
  _aUr,
  _bAC,
  _bCT,
  _bN,
  _bS,
  _C,
  _CA,
  _CAR,
  _CARr,
  _CC,
  _cC,
  _cCA,
  _CDA,
  _CDAR,
  _CDARr,
  _ce,
  _cH,
  _co,
  _con,
  _CR,
  _cR,
  _cRA,
  _CRu,
  _CS,
  _cS,
  _cT,
  _cVDNSR,
  _d,
  _DA,
  _dAA,
  _DAe,
  _DAo,
  _dAo,
  _dAom,
  _DAR,
  _DARe,
  _dD,
  _DDA,
  _DDAR,
  _DDARe,
  _dNo,
  _dR,
  _dS,
  _eAB,
  _eABC,
  _eASD,
  _eBA,
  _eBAB,
  _eBAD,
  _ePM,
  _ePRP,
  _eT,
  _eV,
  _f,
  _GA,
  _GAR,
  _GARe,
  _GDA,
  _GDAR,
  _GDARe,
  _GJ,
  _GJR,
  _GJRe,
  _h,
  _hQ,
  _iSRA,
  _J,
  _j,
  _JC,
  _jC,
  _jI,
  _LA,
  _LAR,
  _LARi,
  _LDA,
  _LDAR,
  _LDARi,
  _lDT,
  _lU,
  _mR,
  _n,
  _nT,
  _OT,
  _oT,
  _p,
  _PB,
  _pB,
  _pr,
  _pREN,
  _r,
  _rCM,
  _S,
  _s,
  _sc,
  _SD,
  _sD,
  _SDS,
  _sDS,
  _SDSu,
  _sDSu,
  _SDu,
  _sNt,
  _so,
  _sR,
  _St,
  _sT,
  _st,
  _ste,
  _su,
  _t,
  _ta,
  _tAU,
  _tCU,
  _tU,
  _ty,
  _UA,
  _UAR,
  _UARp,
  _UDA,
  _UDAR,
  _UDARp,
  _uS,
  _uT,
  _v,
  _wAA,
  _WC,
  _wC,
  _wCT,
  _wS,
  n0,
} from "./schemas_0";
import { JobSummary } from "./schemas_1_Job";
import { BasicAuthCredentials, BuildSpec } from "./schemas_6_App";

/* eslint no-var: 0 */

export var AccessToken = sim(n0, _AT, 0, 8);
export var OauthToken = sim(n0, _OT, 0, 8);
export var App = struct(
  n0,
  _A,
  0,
  [
    _aI,
    _aA,
    _n,
    _t,
    _d,
    _r,
    _p,
    _cT,
    _uT,
    _cRA,
    _iSRA,
    _eV,
    _dD,
    _eBAB,
    _eBAD,
    _eBA,
    _bAC,
    _cR,
    _pB,
    _bS,
    _cH,
    _eABC,
    _aBCP,
    _aBCC,
    _rCM,
    _cC,
    _wCT,
    _wC,
    _jC,
  ],
  [
    0,
    0,
    0,
    128 | 0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    128 | 0,
    0,
    2,
    2,
    2,
    [() => BasicAuthCredentials, 0],
    () => CustomRules,
    () => ProductionBranch,
    [() => BuildSpec, 0],
    0,
    2,
    64 | 0,
    [() => AutoBranchCreationConfig, 0],
    0,
    () => CacheConfig,
    4,
    () => WafConfiguration,
    () => JobConfig,
  ]
);
export var AutoBranchCreationConfig = struct(
  n0,
  _ABCC,
  0,
  [_s, _f, _eAB, _eV, _bAC, _eBA, _ePM, _bS, _ePRP, _pREN],
  [0, 0, 2, 128 | 0, [() => BasicAuthCredentials, 0], 2, 2, [() => BuildSpec, 0], 2, 0]
);
export var CacheConfig = struct(n0, _CC, 0, [_ty], [0]);
export var Certificate = struct(n0, _C, 0, [_ty, _cCA, _cVDNSR], [0, 0, 0]);
export var CertificateSettings = struct(n0, _CS, 0, [_ty, _cCA], [0, 0]);
export var CreateAppRequest = struct(
  n0,
  _CAR,
  0,
  [
    _n,
    _d,
    _r,
    _p,
    _cRA,
    _iSRA,
    _oT,
    _aT,
    _eV,
    _eBAB,
    _eBAD,
    _eBA,
    _bAC,
    _cR,
    _t,
    _bS,
    _cH,
    _eABC,
    _aBCP,
    _aBCC,
    _jC,
    _cC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    [() => OauthToken, 0],
    [() => AccessToken, 0],
    128 | 0,
    2,
    2,
    2,
    [() => BasicAuthCredentials, 0],
    () => CustomRules,
    128 | 0,
    [() => BuildSpec, 0],
    0,
    2,
    64 | 0,
    [() => AutoBranchCreationConfig, 0],
    () => JobConfig,
    () => CacheConfig,
  ]
);
export var CreateAppResult = struct(n0, _CARr, 0, [_a], [[() => App, 0]]);
export var CreateDomainAssociationRequest = struct(
  n0,
  _CDAR,
  0,
  [_aI, _dNo, _eASD, _sDS, _aSDCP, _aSDIAMR, _cS],
  [[0, 1], 0, 2, () => SubDomainSettings, 64 | 0, 0, () => CertificateSettings]
);
export var CreateDomainAssociationResult = struct(n0, _CDARr, 0, [_dAo], [() => DomainAssociation]);
export var CustomRule = struct(n0, _CR, 0, [_so, _ta, _st, _co], [0, 0, 0, 0]);
export var DeleteAppRequest = struct(n0, _DAR, 0, [_aI], [[0, 1]]);
export var DeleteAppResult = struct(n0, _DARe, 0, [_a], [[() => App, 0]]);
export var DeleteDomainAssociationRequest = struct(
  n0,
  _DDAR,
  0,
  [_aI, _dNo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDomainAssociationResult = struct(n0, _DDARe, 0, [_dAo], [() => DomainAssociation]);
export var DomainAssociation = struct(
  n0,
  _DA,
  0,
  [_dAA, _dNo, _eASD, _aSDCP, _aSDIAMR, _dS, _uS, _sR, _cVDNSR, _sD, _ce],
  [0, 0, 2, 64 | 0, 0, 0, 0, 0, 0, () => SubDomains, () => Certificate]
);
export var GetAppRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetAppResult = struct(n0, _GARe, 0, [_a], [[() => App, 0]]);
export var GetDomainAssociationRequest = struct(
  n0,
  _GDAR,
  0,
  [_aI, _dNo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDomainAssociationResult = struct(n0, _GDARe, 0, [_dAo], [() => DomainAssociation]);
export var GetJobRequest = struct(
  n0,
  _GJR,
  0,
  [_aI, _bN, _jI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetJobResult = struct(n0, _GJRe, 0, [_j], [() => Job]);
export var Job = struct(n0, _J, 0, [_su, _ste], [() => JobSummary, () => Steps]);
export var JobConfig = struct(n0, _JC, 0, [_bCT], [0]);
export var ListAppsRequest = struct(
  n0,
  _LAR,
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
export var ListAppsResult = struct(n0, _LARi, 0, [_ap, _nT], [[() => Apps, 0], 0]);
export var ListDomainAssociationsRequest = struct(
  n0,
  _LDAR,
  0,
  [_aI, _nT, _mR],
  [
    [0, 1],
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
export var ListDomainAssociationsResult = struct(n0, _LDARi, 0, [_dAom, _nT], [() => DomainAssociations, 0]);
export var ProductionBranch = struct(n0, _PB, 0, [_lDT, _st, _tU, _bN], [4, 0, 0, 0]);
export var Step = struct(
  n0,
  _S,
  0,
  [_sNt, _sT, _st, _eT, _lU, _aUr, _tAU, _tCU, _sc, _sR, _con],
  [0, 4, 0, 4, 0, 0, 0, 0, 128 | 0, 0, 0]
);
export var SubDomain = struct(n0, _SD, 0, [_sDSu, _v, _dR], [() => SubDomainSetting, 2, 0]);
export var SubDomainSetting = struct(n0, _SDS, 0, [_pr, _bN], [0, 0]);
export var UpdateAppRequest = struct(
  n0,
  _UAR,
  0,
  [
    _aI,
    _n,
    _d,
    _p,
    _cRA,
    _iSRA,
    _eV,
    _eBAB,
    _eBAD,
    _eBA,
    _bAC,
    _cR,
    _bS,
    _cH,
    _eABC,
    _aBCP,
    _aBCC,
    _r,
    _oT,
    _aT,
    _jC,
    _cC,
  ],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    2,
    2,
    2,
    [() => BasicAuthCredentials, 0],
    () => CustomRules,
    [() => BuildSpec, 0],
    0,
    2,
    64 | 0,
    [() => AutoBranchCreationConfig, 0],
    0,
    [() => OauthToken, 0],
    [() => AccessToken, 0],
    () => JobConfig,
    () => CacheConfig,
  ]
);
export var UpdateAppResult = struct(n0, _UARp, 0, [_a], [[() => App, 0]]);
export var UpdateDomainAssociationRequest = struct(
  n0,
  _UDAR,
  0,
  [_aI, _dNo, _eASD, _sDS, _aSDCP, _aSDIAMR, _cS],
  [[0, 1], [0, 1], 2, () => SubDomainSettings, 64 | 0, 0, () => CertificateSettings]
);
export var UpdateDomainAssociationResult = struct(n0, _UDARp, 0, [_dAo], [() => DomainAssociation]);
export var WafConfiguration = struct(n0, _WC, 0, [_wAA, _wS, _sR], [0, 0, 0]);
export var Apps = list(n0, _Ap, 0, [() => App, 0]);
export var AutoBranchCreationPatterns = 64 | 0;

export var AutoSubDomainCreationPatterns = 64 | 0;

export var CustomRules = list(n0, _CRu, 0, () => CustomRule);
export var DomainAssociations = list(n0, _DAo, 0, () => DomainAssociation);
export var Steps = list(n0, _St, 0, () => Step);
export var SubDomains = list(n0, _SDu, 0, () => SubDomain);
export var SubDomainSettings = list(n0, _SDSu, 0, () => SubDomainSetting);
export var Screenshots = 128 | 0;

export var CreateApp = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/apps", 200],
  },
  () => CreateAppRequest,
  () => CreateAppResult
);
export var CreateDomainAssociation = op(
  n0,
  _CDA,
  {
    [_h]: ["POST", "/apps/{appId}/domains", 200],
  },
  () => CreateDomainAssociationRequest,
  () => CreateDomainAssociationResult
);
export var DeleteApp = op(
  n0,
  _DAe,
  {
    [_h]: ["DELETE", "/apps/{appId}", 200],
  },
  () => DeleteAppRequest,
  () => DeleteAppResult
);
export var DeleteDomainAssociation = op(
  n0,
  _DDA,
  {
    [_h]: ["DELETE", "/apps/{appId}/domains/{domainName}", 200],
  },
  () => DeleteDomainAssociationRequest,
  () => DeleteDomainAssociationResult
);
export var GetApp = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/apps/{appId}", 200],
  },
  () => GetAppRequest,
  () => GetAppResult
);
export var GetDomainAssociation = op(
  n0,
  _GDA,
  {
    [_h]: ["GET", "/apps/{appId}/domains/{domainName}", 200],
  },
  () => GetDomainAssociationRequest,
  () => GetDomainAssociationResult
);
export var GetJob = op(
  n0,
  _GJ,
  {
    [_h]: ["GET", "/apps/{appId}/branches/{branchName}/jobs/{jobId}", 200],
  },
  () => GetJobRequest,
  () => GetJobResult
);
export var ListApps = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/apps", 200],
  },
  () => ListAppsRequest,
  () => ListAppsResult
);
export var ListDomainAssociations = op(
  n0,
  _LDA,
  {
    [_h]: ["GET", "/apps/{appId}/domains", 200],
  },
  () => ListDomainAssociationsRequest,
  () => ListDomainAssociationsResult
);
export var UpdateApp = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/apps/{appId}", 200],
  },
  () => UpdateAppRequest,
  () => UpdateAppResult
);
export var UpdateDomainAssociation = op(
  n0,
  _UDA,
  {
    [_h]: ["POST", "/apps/{appId}/domains/{domainName}", 200],
  },
  () => UpdateDomainAssociationRequest,
  () => UpdateDomainAssociationResult
);
