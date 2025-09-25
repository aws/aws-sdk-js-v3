// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { NotFoundException as __NotFoundException } from "../models/index";
import {
  _A,
  _a,
  _ADS,
  _AI,
  _aI,
  _Ap,
  _ap,
  _APS,
  _AS,
  _Au,
  _au,
  _c,
  _CCFT,
  _CCFTR,
  _CCFTRr,
  _CT,
  _cT,
  _D,
  _d,
  _DA,
  _DAR,
  _De,
  _de,
  _e,
  _EC,
  _eC,
  _ET,
  _eT,
  _GA,
  _GAP,
  _GAPR,
  _GAPRe,
  _GAR,
  _GARe,
  _GCFT,
  _GCFTR,
  _GCFTRe,
  _h,
  _hE,
  _HPU,
  _hPU,
  _hQ,
  _IVA,
  _iVA,
  _jN,
  _L,
  _l,
  _LA,
  _LAD,
  _LADR,
  _LADRi,
  _LAR,
  _LARi,
  _LAV,
  _LAVR,
  _LAVRi,
  _lOADS,
  _lOAPS,
  _lOAS,
  _lOVS,
  _LU,
  _lU,
  _M,
  _m,
  _MI,
  _mI,
  _N,
  _n,
  _NFE,
  _NT,
  _nT,
  _OI,
  _oI,
  _P,
  _p,
  _PAP,
  _PAPR,
  _PAPRu,
  _POID,
  _pOID,
  _RB,
  _rB,
  _RU,
  _rU,
  _S,
  _s,
  _SCU,
  _sCU,
  _SI,
  _sI,
  _SLI,
  _sLI,
  _St,
  _st,
  _SV,
  _sV,
  _TI,
  _tI,
  _TU,
  _tU,
  _UA,
  _UAp,
  _UAR,
  _UARp,
  _UARpd,
  _V,
  _v,
  _VAU,
  _vAU,
  _Ve,
  _ve,
  _VS,
  n0,
} from "./schemas_0";
import { Version } from "./schemas_2_Application";
import { Unit } from "./schemas_3_Application";

/* eslint no-var: 0 */

export var ApplicationDependencySummary = struct(
  n0,
  _ADS,
  0,
  [_AI, _SV],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
  ]
);
export var ApplicationPolicyStatement = struct(
  n0,
  _APS,
  0,
  [_A, _POID, _P, _SI],
  [
    [
      64 | 0,
      {
        [_jN]: _a,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pOID,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _p,
      },
    ],
    [
      0,
      {
        [_jN]: _sI,
      },
    ],
  ]
);
export var ApplicationSummary = struct(
  n0,
  _AS,
  0,
  [_AI, _Au, _CT, _D, _HPU, _L, _N, _SLI],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
  ]
);
export var CreateCloudFormationTemplateRequest = struct(
  n0,
  _CCFTR,
  0,
  [_AI, _SV],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
  ]
);
export var CreateCloudFormationTemplateResponse = struct(
  n0,
  _CCFTRr,
  0,
  [_AI, _CT, _ET, _SV, _S, _TI, _TU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ]
);
export var DeleteApplicationRequest = struct(n0, _DAR, 0, [_AI], [[0, 1]]);
export var GetApplicationPolicyRequest = struct(n0, _GAPR, 0, [_AI], [[0, 1]]);
export var GetApplicationPolicyResponse = struct(
  n0,
  _GAPRe,
  0,
  [_St],
  [
    [
      () => __listOfApplicationPolicyStatement,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var GetApplicationRequest = struct(
  n0,
  _GAR,
  0,
  [_AI, _SV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var GetApplicationResponse = struct(
  n0,
  _GARe,
  0,
  [_AI, _Au, _CT, _D, _HPU, _IVA, _L, _LU, _N, _RU, _SLI, _VAU, _V],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      2,
      {
        [_jN]: _iVA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vAU,
      },
    ],
    [
      () => Version,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var GetCloudFormationTemplateRequest = struct(
  n0,
  _GCFTR,
  0,
  [_AI, _TI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCloudFormationTemplateResponse = struct(
  n0,
  _GCFTRe,
  0,
  [_AI, _CT, _ET, _SV, _S, _TI, _TU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
    [
      0,
      {
        [_jN]: _tI,
      },
    ],
    [
      0,
      {
        [_jN]: _tU,
      },
    ],
  ]
);
export var ListApplicationDependenciesRequest = struct(
  n0,
  _LADR,
  0,
  [_AI, _MI, _NT, _SV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var ListApplicationDependenciesResponse = struct(
  n0,
  _LADRi,
  0,
  [_De, _NT],
  [
    [
      () => __listOfApplicationDependencySummary,
      {
        [_jN]: _de,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_MI, _NT],
  [
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListApplicationsResponse = struct(
  n0,
  _LARi,
  0,
  [_Ap, _NT],
  [
    [
      () => __listOfApplicationSummary,
      {
        [_jN]: _ap,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var ListApplicationVersionsRequest = struct(
  n0,
  _LAVR,
  0,
  [_AI, _MI, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListApplicationVersionsResponse = struct(
  n0,
  _LAVRi,
  0,
  [_NT, _Ve],
  [
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      () => __listOfVersionSummary,
      {
        [_jN]: _ve,
      },
    ],
  ]
);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_EC, _M],
  [
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ],

  __NotFoundException
);
export var PutApplicationPolicyRequest = struct(
  n0,
  _PAPR,
  0,
  [_AI, _St],
  [
    [0, 1],
    [
      () => __listOfApplicationPolicyStatement,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var PutApplicationPolicyResponse = struct(
  n0,
  _PAPRu,
  0,
  [_St],
  [
    [
      () => __listOfApplicationPolicyStatement,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var UnshareApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_AI, _OI],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _oI,
      },
    ],
  ]
);
export var UpdateApplicationRequest = struct(
  n0,
  _UARp,
  0,
  [_AI, _Au, _D, _HPU, _L, _RB, _RU],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _rB,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
  ]
);
export var UpdateApplicationResponse = struct(
  n0,
  _UARpd,
  0,
  [_AI, _Au, _CT, _D, _HPU, _IVA, _L, _LU, _N, _RU, _SLI, _VAU, _V],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _au,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _hPU,
      },
    ],
    [
      2,
      {
        [_jN]: _iVA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _l,
      },
    ],
    [
      0,
      {
        [_jN]: _lU,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _rU,
      },
    ],
    [
      0,
      {
        [_jN]: _sLI,
      },
    ],
    [
      0,
      {
        [_jN]: _vAU,
      },
    ],
    [
      () => Version,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var VersionSummary = struct(
  n0,
  _VS,
  0,
  [_AI, _CT, _SV, _SCU],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
      },
    ],
    [
      0,
      {
        [_jN]: _sV,
      },
    ],
    [
      0,
      {
        [_jN]: _sCU,
      },
    ],
  ]
);
export var __listOfApplicationDependencySummary = list(n0, _lOADS, 0, [() => ApplicationDependencySummary, 0]);
export var __listOfApplicationPolicyStatement = list(n0, _lOAPS, 0, [() => ApplicationPolicyStatement, 0]);
export var __listOfApplicationSummary = list(n0, _lOAS, 0, [() => ApplicationSummary, 0]);
export var __listOfVersionSummary = list(n0, _lOVS, 0, [() => VersionSummary, 0]);
export var CreateCloudFormationTemplate = op(
  n0,
  _CCFT,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/templates", 201],
  },
  () => CreateCloudFormationTemplateRequest,
  () => CreateCloudFormationTemplateResponse
);
export var DeleteApplication = op(
  n0,
  _DA,
  {
    [_h]: ["DELETE", "/applications/{ApplicationId}", 204],
  },
  () => DeleteApplicationRequest,
  () => Unit
);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{ApplicationId}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetApplicationPolicy = op(
  n0,
  _GAP,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/policy", 200],
  },
  () => GetApplicationPolicyRequest,
  () => GetApplicationPolicyResponse
);
export var GetCloudFormationTemplate = op(
  n0,
  _GCFT,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/templates/{TemplateId}", 200],
  },
  () => GetCloudFormationTemplateRequest,
  () => GetCloudFormationTemplateResponse
);
export var ListApplicationDependencies = op(
  n0,
  _LAD,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/dependencies", 200],
  },
  () => ListApplicationDependenciesRequest,
  () => ListApplicationDependenciesResponse
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListApplicationVersions = op(
  n0,
  _LAV,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/versions", 200],
  },
  () => ListApplicationVersionsRequest,
  () => ListApplicationVersionsResponse
);
export var PutApplicationPolicy = op(
  n0,
  _PAP,
  {
    [_h]: ["PUT", "/applications/{ApplicationId}/policy", 200],
  },
  () => PutApplicationPolicyRequest,
  () => PutApplicationPolicyResponse
);
export var UnshareApplication = op(
  n0,
  _UA,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/unshare", 204],
  },
  () => UnshareApplicationRequest,
  () => Unit
);
export var UpdateApplication = op(
  n0,
  _UAp,
  {
    [_h]: ["PATCH", "/applications/{ApplicationId}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
