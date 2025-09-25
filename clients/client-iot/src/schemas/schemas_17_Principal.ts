// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aD,
  _AI,
  _AIu,
  _aIu,
  _aIut,
  _Al,
  _al,
  _aO,
  _APP,
  _APPR,
  _AR,
  _aR,
  _ARu,
  _aT,
  _ATP,
  _ATPR,
  _ATPRt,
  _cIl,
  _cIPI,
  _De,
  _de,
  _DPP,
  _DPPR,
  _DTP,
  _DTPR,
  _DTPRe,
  _ED,
  _eDx,
  _EP,
  _eP,
  _EPf,
  _GEP,
  _GEPR,
  _GEPRe,
  _h,
  _hH,
  _hQ,
  _iAO,
  _ID,
  _iDm,
  _LPPi,
  _LPPRis,
  _LPPRist,
  _LPT,
  _LPTR,
  _LPTRi,
  _LPTV,
  _LPTVR,
  _LPTVRi,
  _LTPV,
  _LTPVR,
  _LTPVRi,
  _ma,
  _mCV,
  _mR,
  _nM,
  _nT,
  _p,
  _pAo,
  _pDo,
  _pNo,
  _pNTA,
  _pNTS,
  _pr,
  _pS,
  _PTO,
  _pTO,
  _PTOr,
  _re,
  _TAe,
  _TAR,
  _TARe,
  _th,
  _tN,
  _TPO,
  _tPO,
  _TPOh,
  _tPT,
  _xaip,
  _xap,
  n0,
  Unit,
} from "./schemas_0";
import { Policies } from "./schemas_51_Policy";

/* eslint no-var: 0 */

export var Allowed = struct(n0, _Al, 0, [_p], [() => Policies]);
export var AttachPrincipalPolicyRequest = struct(
  n0,
  _APPR,
  0,
  [_pNo, _pr],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaip,
      },
    ],
  ]
);
export var AttachThingPrincipalRequest = struct(
  n0,
  _ATPR,
  0,
  [_tN, _pr, _tPT],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xap,
      },
    ],
    [
      0,
      {
        [_hQ]: _tPT,
      },
    ],
  ]
);
export var AttachThingPrincipalResponse = struct(n0, _ATPRt, 0, [], []);
export var AuthInfo = struct(n0, _AI, 0, [_aT, _re], [0, 64 | 0]);
export var AuthResult = struct(
  n0,
  _AR,
  0,
  [_aIu, _al, _de, _aD, _mCV],
  [() => AuthInfo, () => Allowed, () => Denied, 0, 64 | 0]
);
export var Denied = struct(n0, _De, 0, [_iDm, _eDx], [() => ImplicitDeny, () => ExplicitDeny]);
export var DetachPrincipalPolicyRequest = struct(
  n0,
  _DPPR,
  0,
  [_pNo, _pr],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaip,
      },
    ],
  ]
);
export var DetachThingPrincipalRequest = struct(
  n0,
  _DTPR,
  0,
  [_tN, _pr],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xap,
      },
    ],
  ]
);
export var DetachThingPrincipalResponse = struct(n0, _DTPRe, 0, [], []);
export var EffectivePolicy = struct(n0, _EP, 0, [_pNo, _pAo, _pDo], [0, 0, 0]);
export var ExplicitDeny = struct(n0, _ED, 0, [_p], [() => Policies]);
export var GetEffectivePoliciesRequest = struct(
  n0,
  _GEPR,
  0,
  [_pr, _cIPI, _tN],
  [
    0,
    0,
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
  ]
);
export var GetEffectivePoliciesResponse = struct(n0, _GEPRe, 0, [_eP], [() => EffectivePolicies]);
export var ImplicitDeny = struct(n0, _ID, 0, [_p], [() => Policies]);
export var ListPrincipalPoliciesRequest = struct(
  n0,
  _LPPRis,
  0,
  [_pr, _ma, _pS, _aO],
  [
    [
      0,
      {
        [_hH]: _xaip,
      },
    ],
    [
      0,
      {
        [_hQ]: _ma,
      },
    ],
    [
      1,
      {
        [_hQ]: _pS,
      },
    ],
    [
      2,
      {
        [_hQ]: _iAO,
      },
    ],
  ]
);
export var ListPrincipalPoliciesResponse = struct(n0, _LPPRist, 0, [_p, _nM], [() => Policies, 0]);
export var ListPrincipalThingsRequest = struct(
  n0,
  _LPTR,
  0,
  [_nT, _mR, _pr],
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
    [
      0,
      {
        [_hH]: _xap,
      },
    ],
  ]
);
export var ListPrincipalThingsResponse = struct(n0, _LPTRi, 0, [_th, _nT], [64 | 0, 0]);
export var ListPrincipalThingsV2Request = struct(
  n0,
  _LPTVR,
  0,
  [_nT, _mR, _pr, _tPT],
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
    [
      0,
      {
        [_hH]: _xap,
      },
    ],
    [
      0,
      {
        [_hQ]: _tPT,
      },
    ],
  ]
);
export var ListPrincipalThingsV2Response = struct(n0, _LPTVRi, 0, [_pTO, _nT], [() => PrincipalThingObjects, 0]);
export var ListThingPrincipalsV2Request = struct(
  n0,
  _LTPVR,
  0,
  [_nT, _mR, _tN, _tPT],
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
    [
      0,
      {
        [_hQ]: _tPT,
      },
    ],
  ]
);
export var ListThingPrincipalsV2Response = struct(n0, _LTPVRi, 0, [_tPO, _nT], [() => ThingPrincipalObjects, 0]);
export var PrincipalThingObject = struct(n0, _PTO, 0, [_tN, _tPT], [0, 0]);
export var TestAuthorizationRequest = struct(
  n0,
  _TAR,
  0,
  [_pr, _cIPI, _aIut, _cIl, _pNTA, _pNTS],
  [
    0,
    0,
    () => AuthInfos,
    [
      0,
      {
        [_hQ]: _cIl,
      },
    ],
    64 | 0,
    64 | 0,
  ]
);
export var TestAuthorizationResponse = struct(n0, _TARe, 0, [_aR], [() => AuthResults]);
export var ThingPrincipalObject = struct(n0, _TPO, 0, [_pr, _tPT], [0, 0]);
export var AuthInfos = list(n0, _AIu, 0, () => AuthInfo);
export var AuthResults = list(n0, _ARu, 0, () => AuthResult);
export var EffectivePolicies = list(n0, _EPf, 0, () => EffectivePolicy);
export var MissingContextValues = 64 | 0;

export var PolicyNames = 64 | 0;

export var PrincipalThingObjects = list(n0, _PTOr, 0, () => PrincipalThingObject);
export var Resources = 64 | 0;

export var ThingPrincipalObjects = list(n0, _TPOh, 0, () => ThingPrincipalObject);
export var AttachPrincipalPolicy = op(
  n0,
  _APP,
  {
    [_h]: ["PUT", "/principal-policies/{policyName}", 200],
  },
  () => AttachPrincipalPolicyRequest,
  () => Unit
);
export var AttachThingPrincipal = op(
  n0,
  _ATP,
  {
    [_h]: ["PUT", "/things/{thingName}/principals", 200],
  },
  () => AttachThingPrincipalRequest,
  () => AttachThingPrincipalResponse
);
export var DetachPrincipalPolicy = op(
  n0,
  _DPP,
  {
    [_h]: ["DELETE", "/principal-policies/{policyName}", 200],
  },
  () => DetachPrincipalPolicyRequest,
  () => Unit
);
export var DetachThingPrincipal = op(
  n0,
  _DTP,
  {
    [_h]: ["DELETE", "/things/{thingName}/principals", 200],
  },
  () => DetachThingPrincipalRequest,
  () => DetachThingPrincipalResponse
);
export var GetEffectivePolicies = op(
  n0,
  _GEP,
  {
    [_h]: ["POST", "/effective-policies", 200],
  },
  () => GetEffectivePoliciesRequest,
  () => GetEffectivePoliciesResponse
);
export var ListPrincipalPolicies = op(
  n0,
  _LPPi,
  {
    [_h]: ["GET", "/principal-policies", 200],
  },
  () => ListPrincipalPoliciesRequest,
  () => ListPrincipalPoliciesResponse
);
export var ListPrincipalThings = op(
  n0,
  _LPT,
  {
    [_h]: ["GET", "/principals/things", 200],
  },
  () => ListPrincipalThingsRequest,
  () => ListPrincipalThingsResponse
);
export var ListPrincipalThingsV2 = op(
  n0,
  _LPTV,
  {
    [_h]: ["GET", "/principals/things-v2", 200],
  },
  () => ListPrincipalThingsV2Request,
  () => ListPrincipalThingsV2Response
);
export var ListThingPrincipalsV2 = op(
  n0,
  _LTPV,
  {
    [_h]: ["GET", "/things/{thingName}/principals-v2", 200],
  },
  () => ListThingPrincipalsV2Request,
  () => ListThingPrincipalsV2Response
);
export var TestAuthorization = op(
  n0,
  _TAe,
  {
    [_h]: ["POST", "/test-authorization", 200],
  },
  () => TestAuthorizationRequest,
  () => TestAuthorizationResponse
);
