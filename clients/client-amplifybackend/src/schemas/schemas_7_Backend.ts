// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAT,
  _aAT,
  _AC,
  _aC,
  _AI,
  _aI,
  _AN,
  _aN,
  _AR,
  _aR,
  _BAAPC,
  _BAPIASAS,
  _BAPIAT,
  _BAPICR,
  _BAPIRC,
  _BASPC,
  _BEN,
  _bEN,
  _CBA,
  _CBAFPC,
  _CBAIPC,
  _CBAMFAC,
  _CBAOAC,
  _CBAPI,
  _CBAPIR,
  _CBAPIRr,
  _CBAPPC,
  _CBAR,
  _CBARC,
  _CBARr,
  _CBAUPC,
  _CBAVMC,
  _CI,
  _ci,
  _CR,
  _cR,
  _CS,
  _cs,
  _CUPI,
  _cUPI,
  _D,
  _d,
  _DAT,
  _dAT,
  _DBAPI,
  _DBAPIR,
  _DBAPIRe,
  _DM,
  _dM,
  _DP,
  _dP,
  _E,
  _e,
  _EM,
  _eM,
  _ES,
  _eS,
  _ESm,
  _eSm,
  _ET,
  _eT,
  _F,
  _FP,
  _fP,
  _G,
  _GBA,
  _GBAPI,
  _GBAPIR,
  _GBAPIRe,
  _GBAR,
  _GBARe,
  _h,
  _IPC,
  _iPC,
  _IPN,
  _iPN,
  _JI,
  _jI,
  _jN,
  _KI,
  _ki,
  _LOBAPIAT,
  _LWA,
  _M,
  _m,
  _Mf,
  _mf,
  _MFAM,
  _ML,
  _mL,
  _MT,
  _mT,
  _O,
  _o,
  _OA,
  _oA,
  _OAGT,
  _oAGT,
  _OAS,
  _oAS,
  _OIDATTL,
  _oIDATTL,
  _OIDCI,
  _oIDCI,
  _OIDITTL,
  _oIDITTL,
  _OIDIURL,
  _oIDIURL,
  _OIDPN,
  _oIDPN,
  _PK,
  _pk,
  _PP,
  _pP,
  _RC,
  _rC,
  _RN,
  _rN,
  _RS,
  _rS,
  _RSIURI,
  _rSIURI,
  _RSOURI,
  _rSOURI,
  _RSUA,
  _rSUA,
  _S,
  _s,
  _Se,
  _se,
  _SIM,
  _sIM,
  _SIWA,
  _SM,
  _sM,
  _SPS,
  _sPS,
  _SS,
  _sS,
  _St,
  _st,
  _TI,
  _ti,
  _TS,
  _tS,
  _UBA,
  _UBAFPC,
  _UBAIPC,
  _UBAMFAC,
  _UBAOAC,
  _UBAPI,
  _UBAPIR,
  _UBAPIRp,
  _UBAPPC,
  _UBAR,
  _UBARC,
  _UBARp,
  _UBAUPC,
  _UBAVMC,
  _UL,
  _uL,
  _UPC,
  _uPC,
  _UPN,
  _uPN,
  _VM,
  _vM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BackendAPIAppSyncAuthSettings = struct(
  n0,
  _BAPIASAS,
  0,
  [_CUPI, _D, _ET, _OIDATTL, _OIDCI, _OIDITTL, _OIDIURL, _OIDPN],
  [
    [
      0,
      {
        [_jN]: _cUPI,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      1,
      {
        [_jN]: _eT,
      },
    ],
    [
      0,
      {
        [_jN]: _oIDATTL,
      },
    ],
    [
      0,
      {
        [_jN]: _oIDCI,
      },
    ],
    [
      0,
      {
        [_jN]: _oIDITTL,
      },
    ],
    [
      0,
      {
        [_jN]: _oIDIURL,
      },
    ],
    [
      0,
      {
        [_jN]: _oIDPN,
      },
    ],
  ]
);
export var BackendAPIAuthType = struct(
  n0,
  _BAPIAT,
  0,
  [_M, _S],
  [
    [
      0,
      {
        [_jN]: _m,
      },
    ],
    [
      () => BackendAPIAppSyncAuthSettings,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var BackendAPIConflictResolution = struct(
  n0,
  _BAPICR,
  0,
  [_RS],
  [
    [
      0,
      {
        [_jN]: _rS,
      },
    ],
  ]
);
export var BackendAPIResourceConfig = struct(
  n0,
  _BAPIRC,
  0,
  [_AAT, _AN, _CR, _DAT, _Se, _TS],
  [
    [
      () => ListOfBackendAPIAuthType,
      {
        [_jN]: _aAT,
      },
    ],
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      () => BackendAPIConflictResolution,
      {
        [_jN]: _cR,
      },
    ],
    [
      () => BackendAPIAuthType,
      {
        [_jN]: _dAT,
      },
    ],
    [
      0,
      {
        [_jN]: _se,
      },
    ],
    [
      0,
      {
        [_jN]: _tS,
      },
    ],
  ]
);
export var BackendAuthAppleProviderConfig = struct(
  n0,
  _BAAPC,
  8,
  [_CI, _KI, _PK, _TI],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _ki,
      },
    ],
    [
      0,
      {
        [_jN]: _pk,
      },
    ],
    [
      0,
      {
        [_jN]: _ti,
      },
    ],
  ]
);
export var BackendAuthSocialProviderConfig = struct(
  n0,
  _BASPC,
  8,
  [_CI, _CS],
  [
    [
      0,
      {
        [_jN]: _ci,
      },
    ],
    [
      0,
      {
        [_jN]: _cs,
      },
    ],
  ]
);
export var CreateBackendAPIRequest = struct(
  n0,
  _CBAPIR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      () => BackendAPIResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var CreateBackendAPIResponse = struct(
  n0,
  _CBAPIRr,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var CreateBackendAuthForgotPasswordConfig = struct(
  n0,
  _CBAFPC,
  0,
  [_DM, _ES, _SS],
  [
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      () => EmailSettings,
      {
        [_jN]: _eS,
      },
    ],
    [
      () => SmsSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var CreateBackendAuthIdentityPoolConfig = struct(
  n0,
  _CBAIPC,
  0,
  [_IPN, _UL],
  [
    [
      0,
      {
        [_jN]: _iPN,
      },
    ],
    [
      2,
      {
        [_jN]: _uL,
      },
    ],
  ]
);
export var CreateBackendAuthMFAConfig = struct(
  n0,
  _CBAMFAC,
  0,
  [_MFAM, _S],
  [
    0,
    [
      () => Settings,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var CreateBackendAuthOAuthConfig = struct(
  n0,
  _CBAOAC,
  0,
  [_DP, _OAGT, _OAS, _RSIURI, _RSOURI, _SPS],
  [
    [
      0,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _oAGT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _oAS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rSIURI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rSOURI,
      },
    ],
    [
      () => SocialProviderSettings,
      {
        [_jN]: _sPS,
      },
    ],
  ]
);
export var CreateBackendAuthPasswordPolicyConfig = struct(
  n0,
  _CBAPPC,
  0,
  [_AC, _ML],
  [
    [
      64 | 0,
      {
        [_jN]: _aC,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
  ]
);
export var CreateBackendAuthRequest = struct(
  n0,
  _CBAR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _bEN,
      },
    ],
    [
      () => CreateBackendAuthResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var CreateBackendAuthResourceConfig = struct(
  n0,
  _CBARC,
  0,
  [_AR, _IPC, _Se, _UPC],
  [
    [
      0,
      {
        [_jN]: _aR,
      },
    ],
    [
      () => CreateBackendAuthIdentityPoolConfig,
      {
        [_jN]: _iPC,
      },
    ],
    [
      0,
      {
        [_jN]: _se,
      },
    ],
    [
      () => CreateBackendAuthUserPoolConfig,
      {
        [_jN]: _uPC,
      },
    ],
  ]
);
export var CreateBackendAuthResponse = struct(
  n0,
  _CBARr,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var CreateBackendAuthUserPoolConfig = struct(
  n0,
  _CBAUPC,
  0,
  [_FP, _Mf, _OA, _PP, _RSUA, _SIM, _UPN, _VM],
  [
    [
      () => CreateBackendAuthForgotPasswordConfig,
      {
        [_jN]: _fP,
      },
    ],
    [
      () => CreateBackendAuthMFAConfig,
      {
        [_jN]: _mf,
      },
    ],
    [
      () => CreateBackendAuthOAuthConfig,
      {
        [_jN]: _oA,
      },
    ],
    [
      () => CreateBackendAuthPasswordPolicyConfig,
      {
        [_jN]: _pP,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rSUA,
      },
    ],
    [
      0,
      {
        [_jN]: _sIM,
      },
    ],
    [
      0,
      {
        [_jN]: _uPN,
      },
    ],
    [
      () => CreateBackendAuthVerificationMessageConfig,
      {
        [_jN]: _vM,
      },
    ],
  ]
);
export var CreateBackendAuthVerificationMessageConfig = struct(
  n0,
  _CBAVMC,
  0,
  [_DM, _ES, _SS],
  [
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      () => EmailSettings,
      {
        [_jN]: _eS,
      },
    ],
    [
      () => SmsSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var DeleteBackendAPIRequest = struct(
  n0,
  _DBAPIR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [0, 1],
    [
      () => BackendAPIResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var DeleteBackendAPIResponse = struct(
  n0,
  _DBAPIRe,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var EmailSettings = struct(
  n0,
  _ES,
  8,
  [_EM, _ESm],
  [
    [
      0,
      {
        [_jN]: _eM,
      },
    ],
    [
      0,
      {
        [_jN]: _eSm,
      },
    ],
  ]
);
export var GetBackendAPIRequest = struct(
  n0,
  _GBAPIR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [0, 1],
    [
      () => BackendAPIResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var GetBackendAPIResponse = struct(
  n0,
  _GBAPIRe,
  0,
  [_AI, _BEN, _E, _RC, _RN],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      () => BackendAPIResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var GetBackendAuthRequest = struct(
  n0,
  _GBAR,
  0,
  [_AI, _BEN, _RN],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var GetBackendAuthResponse = struct(
  n0,
  _GBARe,
  0,
  [_AI, _BEN, _E, _RC, _RN],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      () => CreateBackendAuthResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var Settings = struct(
  n0,
  _S,
  0,
  [_MT, _SM],
  [
    [
      64 | 0,
      {
        [_jN]: _mT,
      },
    ],
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
  ]
);
export var SmsSettings = struct(
  n0,
  _SS,
  8,
  [_SM],
  [
    [
      0,
      {
        [_jN]: _sM,
      },
    ],
  ]
);
export var SocialProviderSettings = struct(
  n0,
  _SPS,
  0,
  [_F, _G, _LWA, _SIWA],
  [
    [() => BackendAuthSocialProviderConfig, 0],
    [() => BackendAuthSocialProviderConfig, 0],
    [() => BackendAuthSocialProviderConfig, 0],
    [() => BackendAuthAppleProviderConfig, 0],
  ]
);
export var UpdateBackendAPIRequest = struct(
  n0,
  _UBAPIR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [0, 1],
    [
      () => BackendAPIResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var UpdateBackendAPIResponse = struct(
  n0,
  _UBAPIRp,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var UpdateBackendAuthForgotPasswordConfig = struct(
  n0,
  _UBAFPC,
  0,
  [_DM, _ES, _SS],
  [
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      () => EmailSettings,
      {
        [_jN]: _eS,
      },
    ],
    [
      () => SmsSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var UpdateBackendAuthIdentityPoolConfig = struct(
  n0,
  _UBAIPC,
  0,
  [_UL],
  [
    [
      2,
      {
        [_jN]: _uL,
      },
    ],
  ]
);
export var UpdateBackendAuthMFAConfig = struct(
  n0,
  _UBAMFAC,
  0,
  [_MFAM, _S],
  [
    0,
    [
      () => Settings,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var UpdateBackendAuthOAuthConfig = struct(
  n0,
  _UBAOAC,
  0,
  [_DP, _OAGT, _OAS, _RSIURI, _RSOURI, _SPS],
  [
    [
      0,
      {
        [_jN]: _dP,
      },
    ],
    [
      0,
      {
        [_jN]: _oAGT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _oAS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rSIURI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _rSOURI,
      },
    ],
    [
      () => SocialProviderSettings,
      {
        [_jN]: _sPS,
      },
    ],
  ]
);
export var UpdateBackendAuthPasswordPolicyConfig = struct(
  n0,
  _UBAPPC,
  0,
  [_AC, _ML],
  [
    [
      64 | 0,
      {
        [_jN]: _aC,
      },
    ],
    [
      1,
      {
        [_jN]: _mL,
      },
    ],
  ]
);
export var UpdateBackendAuthRequest = struct(
  n0,
  _UBAR,
  0,
  [_AI, _BEN, _RC, _RN],
  [
    [0, 1],
    [0, 1],
    [
      () => UpdateBackendAuthResourceConfig,
      {
        [_jN]: _rC,
      },
    ],
    [
      0,
      {
        [_jN]: _rN,
      },
    ],
  ]
);
export var UpdateBackendAuthResourceConfig = struct(
  n0,
  _UBARC,
  0,
  [_AR, _IPC, _Se, _UPC],
  [
    [
      0,
      {
        [_jN]: _aR,
      },
    ],
    [
      () => UpdateBackendAuthIdentityPoolConfig,
      {
        [_jN]: _iPC,
      },
    ],
    [
      0,
      {
        [_jN]: _se,
      },
    ],
    [
      () => UpdateBackendAuthUserPoolConfig,
      {
        [_jN]: _uPC,
      },
    ],
  ]
);
export var UpdateBackendAuthResponse = struct(
  n0,
  _UBARp,
  0,
  [_AI, _BEN, _E, _JI, _O, _St],
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
        [_jN]: _bEN,
      },
    ],
    [
      0,
      {
        [_jN]: _e,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _o,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var UpdateBackendAuthUserPoolConfig = struct(
  n0,
  _UBAUPC,
  0,
  [_FP, _Mf, _OA, _PP, _VM],
  [
    [
      () => UpdateBackendAuthForgotPasswordConfig,
      {
        [_jN]: _fP,
      },
    ],
    [
      () => UpdateBackendAuthMFAConfig,
      {
        [_jN]: _mf,
      },
    ],
    [
      () => UpdateBackendAuthOAuthConfig,
      {
        [_jN]: _oA,
      },
    ],
    [
      () => UpdateBackendAuthPasswordPolicyConfig,
      {
        [_jN]: _pP,
      },
    ],
    [
      () => UpdateBackendAuthVerificationMessageConfig,
      {
        [_jN]: _vM,
      },
    ],
  ]
);
export var UpdateBackendAuthVerificationMessageConfig = struct(
  n0,
  _UBAVMC,
  0,
  [_DM, _ES, _SS],
  [
    [
      0,
      {
        [_jN]: _dM,
      },
    ],
    [
      () => EmailSettings,
      {
        [_jN]: _eS,
      },
    ],
    [
      () => SmsSettings,
      {
        [_jN]: _sS,
      },
    ],
  ]
);
export var ListOfAdditionalConstraintsElement = 64 | 0;

export var ListOfBackendAPIAuthType = list(n0, _LOBAPIAT, 0, [() => BackendAPIAuthType, 0]);
export var ListOfMfaTypesElement = 64 | 0;

export var ListOfOAuthScopesElement = 64 | 0;

export var ListOfRequiredSignUpAttributesElement = 64 | 0;

export var CreateBackendAPI = op(
  n0,
  _CBAPI,
  {
    [_h]: ["POST", "/backend/{AppId}/api", 200],
  },
  () => CreateBackendAPIRequest,
  () => CreateBackendAPIResponse
);
export var CreateBackendAuth = op(
  n0,
  _CBA,
  {
    [_h]: ["POST", "/backend/{AppId}/auth", 200],
  },
  () => CreateBackendAuthRequest,
  () => CreateBackendAuthResponse
);
export var DeleteBackendAPI = op(
  n0,
  _DBAPI,
  {
    [_h]: ["POST", "/backend/{AppId}/api/{BackendEnvironmentName}/remove", 200],
  },
  () => DeleteBackendAPIRequest,
  () => DeleteBackendAPIResponse
);
export var GetBackendAPI = op(
  n0,
  _GBAPI,
  {
    [_h]: ["POST", "/backend/{AppId}/api/{BackendEnvironmentName}/details", 200],
  },
  () => GetBackendAPIRequest,
  () => GetBackendAPIResponse
);
export var GetBackendAuth = op(
  n0,
  _GBA,
  {
    [_h]: ["POST", "/backend/{AppId}/auth/{BackendEnvironmentName}/details", 200],
  },
  () => GetBackendAuthRequest,
  () => GetBackendAuthResponse
);
export var UpdateBackendAPI = op(
  n0,
  _UBAPI,
  {
    [_h]: ["POST", "/backend/{AppId}/api/{BackendEnvironmentName}", 200],
  },
  () => UpdateBackendAPIRequest,
  () => UpdateBackendAPIResponse
);
export var UpdateBackendAuth = op(
  n0,
  _UBA,
  {
    [_h]: ["POST", "/backend/{AppId}/auth/{BackendEnvironmentName}", 200],
  },
  () => UpdateBackendAuthRequest,
  () => UpdateBackendAuthResponse
);
